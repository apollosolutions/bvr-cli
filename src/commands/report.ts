import { Command, Option } from 'clipanion';
import { GraphQLClient, gql } from 'graphql-request';
import { select, input, password, confirm } from '@inquirer/prompts';
import { getSdk } from '../gql/sdk';
import { generateClientUsageReport } from '../util/clientUsage';
import { generateFieldChangesReport } from '../util/fieldChanges';
import { generateFieldRecordsReport } from '../util/fieldRecords';
import { generateFieldUsageReport } from '../util/fieldUsage';
import { generateOdysseyReport } from '../util/odyssey';
import { generateOperationCountsReport } from '../util/operationCounts';
import { generateSchemaChecksReport } from '../util/schemaChecks';
import { generateSchemaPublishesReport } from '../util/schemaPublishes';
import { generateVariantsReport } from '../util/variants';

const VALIDATE_TOKEN_QUERY = gql`
query BVR_CLI_ValidateToken{
  me {
    __typename
    ... on Service {
      account {
        id
      }
    }
    ... on User {
      memberships {
        account {
          id
        }
      }
    }
  }
}
`

const VALIDATE_ACCOUNTID_QUERY = gql`
query BVR_CLI_ValidateAccountId($accountId: ID!){
  account(id: $accountId) {
    id
  }
}
`
export default class ConfigCommand extends Command {
  static paths = [['report']];

  apiKey = Option.String('-k,--api-key')

  sudo = Option.Boolean('-s,--sudo', {
    hidden: true,
  })

  static usage = Command.Usage({
    category: 'Report',
    description:
      'generates a CSV report of various metrics used to calculate the business value of a GraphQL API.',
    examples: [['Basic usage', '$0 report']],
  });

  async execute(): Promise<number | void> {
    let localKey = process.env["APOLLO_KEY"]

    if (this.apiKey) {
      localKey = this.apiKey
    }

    if (!localKey) {
      localKey = await password({
        message: 'Enter your Apollo API key'
      })
    }

    const client = new GraphQLClient('https://graphql.api.apollographql.com/api/graphql', {
      headers: {
        "x-api-key": localKey,
        "apollo-sudo": this.sudo ? "true" : "false",
        "apollographql-client-name": "@apollosolutions/bvr-cli",
        "apollographql-client-version": "0.1.0"
      }
    })

    const sdk = getSdk(client)

    let accounts: string[] = []
    try {
      let res = await sdk.BVR_CLI_ValidateToken()
      if (!res.me) {
        this.context.stdout.write("Invalid API key\n")
        return 1
      }
      if (res.me?.__typename === 'Service' && res.me.account?.id) {
        accounts.push(res.me.account.id)
      } else if (res.me.__typename === 'User') {
        accounts = res.me.memberships.map(m => m.account.id)
      }
    } catch (e) {
      this.context.stdout.write("Invalid API key\n")
      return 1
    }

    let accountId = '';

    if (!this.sudo) {
      accountId = await chooseAccountFromToken(accounts)
    } else {
      accountId = await input({
        message: 'Enter the account ID for the report',
        validate: async (input) => {
          try {
            let res = await sdk.BVR_CLI_ValidateAccountId({ accountId: input })
            if (res.account) {
              return true
            }
          } catch (e) {
            return "Invalid account ID"
          }
          return "Invalid account ID"
        }
      })
    }

    const inputOffset = await select({
      message: 'Select a time range for utilization information:',
      choices: [{
        name: 'Last Hour',
        value: '-3600',
      }, {
        name: 'Last Day',
        value: '-86400',
      }, {
        name: 'Last Week',
        value: '-604800',
      }, {
        name: 'Last Month',
        value: '-2592000',
      }],
    })


    const offset = parseInt(inputOffset)

    this.context.stdout.write('Generating reports...\n')
    let res = await Promise.allSettled([
      generateClientUsageReport(this, sdk, accountId, offset),
      generateFieldChangesReport(this, sdk, accountId),
      generateFieldRecordsReport(this, sdk, accountId),
      generateFieldUsageReport(this, sdk, accountId, offset),
      generateOdysseyReport(this, sdk, accountId),
      generateOperationCountsReport(this, sdk, accountId, offset),
      generateSchemaChecksReport(this, sdk, accountId, offset),
      generateSchemaPublishesReport(this, sdk, accountId, offset),
      generateVariantsReport(this, sdk, accountId),
    ])

    this.context.stdout.write(`\u2714 ${res.filter((promise) => promise.status === 'fulfilled').length} report(s) generated.\n`)
    this.context.stdout.write(`\u2716 ${res.filter((promise) => promise.status === 'rejected').length} report(s) failed.\n`)
  }
}

const chooseAccountFromToken = async (existingAccounts: string[]): Promise<string> => {
  // Check if the user wants to use the account within the token itself
  if (existingAccounts.length === 1) {
    let useExisting = await confirm({
      message: `Use account ${existingAccounts[0]}?`,
      default: true,
    })

    if (useExisting) {
      return existingAccounts[0]
    }
  } else if (existingAccounts.length > 1) {
    let accountId = await select({
      message: 'Select an account:',
      choices: existingAccounts.map(id => ({ name: id, value: id }))
    })
    return accountId
  }
  return ''
}
