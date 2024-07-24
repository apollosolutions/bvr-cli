import { Command, Option } from 'clipanion';
import { isEnum } from 'typanion';
import { GraphQLClient, gql } from 'graphql-request';
import { select, input, password } from '@inquirer/prompts';
import { getSdk } from '../gql/sdk';
import { generateClientUsageReport } from '../util/clientUsage';
import { generateFieldChangesReport } from '../util/fieldChanges';
import { generateFieldRecordsReport } from '../util/fieldRecords';
import { generateFieldUsageReport } from '../util/fieldUsage';
import { generateUserReport } from '../util/users';
import { generateOperationCountsReport } from '../util/operationCounts';
import { generateSchemaChecksReport } from '../util/schemaChecks';
import { generateSchemaPublishesReport } from '../util/schemaPublishes';
import { generateVariantsReport } from '../util/variants';
import { chooseAccountFromToken } from '../util/chooseAccount';

// eslint-disable-next-line no-unused-vars
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

const reportMapping = [
    {
        name: "Field Changes",
        func: generateFieldChangesReport
    },
    {
        name: "Field Records",
        func: generateFieldRecordsReport
    },
    {
        name: "Field Usage",
        func: generateFieldUsageReport
    },
    {
        name: "Client Usage",
        func: generateClientUsageReport
    },
    {
        name: "User Report",
        func: generateUserReport
    },
    {
        name: "Operation Counts",
        func: generateOperationCountsReport
    },
    {
        name: "Schema Checks",
        func: generateSchemaChecksReport
    },
    {
        name: "Schema Publishes",
        func: generateSchemaPublishesReport
    },
    {
        name: "Variants",
        func: generateVariantsReport
    },
]

// eslint-disable-next-line no-unused-vars
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

    output = Option.String('--output', 'csv', {
        validator: isEnum(['csv', 'json', 'otel'])
    })

    static usage = Command.Usage({
        category: 'Report',
        description:
            'generates a CSV report of various metrics used to calculate the business value of a GraphQL API.',
        examples: [['Basic usage', '$0 report']],
    });

    async execute(): Promise<number | void> {
        let localKey = process.env.APOLLO_KEY

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
            const res = await sdk.BVR_CLI_ValidateToken()
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
                validate: async (userInput) => {
                    try {
                        const res = await sdk.BVR_CLI_ValidateAccountId({ accountId: userInput })
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


        const offset = parseInt(inputOffset, 10)

        this.context.stdout.write('Generating reports...\n')
        const reportGenerators = [
            generateClientUsageReport,
            generateFieldChangesReport,
            generateFieldRecordsReport,
            generateFieldUsageReport,
            generateUserReport,
            generateOperationCountsReport,
            generateSchemaChecksReport,
            generateSchemaPublishesReport,
            generateVariantsReport,
        ];
        const reportPromises = reportGenerators.map((fn) =>
            fn({
                command: this,
                client: sdk,
                accountId,
                from: offset,
                output: this.output,
            }),
        );
        const res = await Promise.allSettled(reportPromises);
        this.context.stdout.write(`\u2714 ${res.filter((promise) => promise.status === 'fulfilled').length} report(s) generated.\n`)
        this.context.stdout.write(`\u2716 ${res.filter((promise) => promise.status === 'rejected').length} report(s) failed.\n`)
        for (let i = 0; i < res.length; i += 1) {
            const r = res[i]
            if (r.status === 'rejected') {
                this.context.stderr.write(`Error creating ${reportMapping[i].name}: ${(r as any).reason.response?.errors[0]?.message}\n`)
            }
        }

        return 0
    }
}

