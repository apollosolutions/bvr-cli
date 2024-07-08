"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const clipanion_1 = require("clipanion");
const graphql_request_1 = require("graphql-request");
const prompts_1 = require("@inquirer/prompts");
const sdk_1 = require("../gql/sdk");
const clientUsage_1 = require("../util/clientUsage");
const fieldChanges_1 = require("../util/fieldChanges");
const fieldRecords_1 = require("../util/fieldRecords");
const fieldUsage_1 = require("../util/fieldUsage");
const odyssey_1 = require("../util/odyssey");
const operationCounts_1 = require("../util/operationCounts");
const schemaChecks_1 = require("../util/schemaChecks");
const schemaPublishes_1 = require("../util/schemaPublishes");
const variants_1 = require("../util/variants");
const VALIDATE_TOKEN_QUERY = (0, graphql_request_1.gql) `
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
`;
const VALIDATE_ACCOUNTID_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_ValidateAccountId($accountId: ID!){
  account(id: $accountId) {
    id
  }
}
`;
class ConfigCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.apiKey = clipanion_1.Option.String('-k,--api-key');
        this.sudo = clipanion_1.Option.Boolean('-s,--sudo', {
            hidden: true,
        });
    }
    execute() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let localKey = process.env["APOLLO_KEY"];
            if (this.apiKey) {
                localKey = this.apiKey;
            }
            if (!localKey) {
                localKey = yield (0, prompts_1.password)({
                    message: 'Enter your Apollo API key'
                });
            }
            const client = new graphql_request_1.GraphQLClient('https://graphql.api.apollographql.com/api/graphql', {
                headers: {
                    "x-api-key": localKey,
                    "apollo-sudo": this.sudo ? "true" : "false",
                    "apollographql-client-name": "@apollosolutions/bvr-cli",
                    "apollographql-client-version": "0.1.0"
                }
            });
            const sdk = (0, sdk_1.getSdk)(client);
            let accounts = [];
            try {
                let res = yield sdk.BVR_CLI_ValidateToken();
                if (!res.me) {
                    this.context.stdout.write("Invalid API key\n");
                    return 1;
                }
                if (((_a = res.me) === null || _a === void 0 ? void 0 : _a.__typename) === 'Service' && ((_b = res.me.account) === null || _b === void 0 ? void 0 : _b.id)) {
                    accounts.push(res.me.account.id);
                }
                else if (res.me.__typename === 'User') {
                    accounts = res.me.memberships.map(m => m.account.id);
                }
            }
            catch (e) {
                this.context.stdout.write("Invalid API key\n");
                return 1;
            }
            let accountId = '';
            if (!this.sudo) {
                accountId = yield chooseAccountFromToken(accounts);
            }
            else {
                accountId = yield (0, prompts_1.input)({
                    message: 'Enter the account ID for the report',
                    validate: (input) => __awaiter(this, void 0, void 0, function* () {
                        try {
                            let res = yield sdk.BVR_CLI_ValidateAccountId({ accountId: input });
                            if (res.account) {
                                return true;
                            }
                        }
                        catch (e) {
                            return "Invalid account ID";
                        }
                        return "Invalid account ID";
                    })
                });
            }
            const inputOffset = yield (0, prompts_1.select)({
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
            });
            const offset = parseInt(inputOffset);
            this.context.stdout.write('Generating reports...\n');
            let res = yield Promise.allSettled([
                (0, clientUsage_1.generateClientUsageReport)(this, sdk, accountId, offset),
                (0, fieldChanges_1.generateFieldChangesReport)(this, sdk, accountId),
                (0, fieldRecords_1.generateFieldRecordsReport)(this, sdk, accountId),
                (0, fieldUsage_1.generateFieldUsageReport)(this, sdk, accountId, offset),
                (0, odyssey_1.generateOdysseyReport)(this, sdk, accountId),
                (0, operationCounts_1.generateOperationCountsReport)(this, sdk, accountId, offset),
                (0, schemaChecks_1.generateSchemaChecksReport)(this, sdk, accountId, offset),
                (0, schemaPublishes_1.generateSchemaPublishesReport)(this, sdk, accountId, offset),
                (0, variants_1.generateVariantsReport)(this, sdk, accountId),
            ]);
            this.context.stdout.write(`\u2714 ${res.filter((promise) => promise.status === 'fulfilled').length} report(s) generated.\n`);
            this.context.stdout.write(`\u2716 ${res.filter((promise) => promise.status === 'rejected').length} report(s) failed.\n`);
        });
    }
}
exports.default = ConfigCommand;
ConfigCommand.paths = [['report']];
ConfigCommand.usage = clipanion_1.Command.Usage({
    category: 'Report',
    description: 'generates a CSV report of various metrics used to calculate the business value of a GraphQL API.',
    examples: [['Basic usage', '$0 report']],
});
const chooseAccountFromToken = (existingAccounts) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user wants to use the account within the token itself
    if (existingAccounts.length === 1) {
        let useExisting = yield (0, prompts_1.confirm)({
            message: `Use account ${existingAccounts[0]}?`,
            default: true,
        });
        if (useExisting) {
            return existingAccounts[0];
        }
    }
    else if (existingAccounts.length > 1) {
        let accountId = yield (0, prompts_1.select)({
            message: 'Select an account:',
            choices: existingAccounts.map(id => ({ name: id, value: id }))
        });
        return accountId;
    }
    return '';
});