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
const typanion_1 = require("typanion");
const graphql_request_1 = require("graphql-request");
const prompts_1 = require("@inquirer/prompts");
const sdk_1 = require("../gql/sdk");
const clientUsage_1 = require("../util/clientUsage");
const fieldChanges_1 = require("../util/fieldChanges");
const fieldRecords_1 = require("../util/fieldRecords");
const fieldUsage_1 = require("../util/fieldUsage");
const users_1 = require("../util/users");
const operationCounts_1 = require("../util/operationCounts");
const schemaChecks_1 = require("../util/schemaChecks");
const schemaPublishes_1 = require("../util/schemaPublishes");
const variants_1 = require("../util/variants");
const chooseAccount_1 = require("../util/chooseAccount");
// eslint-disable-next-line no-unused-vars
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
const reportMapping = [
    {
        name: "Field Changes",
        func: fieldChanges_1.generateFieldChangesReport
    },
    {
        name: "Field Records",
        func: fieldRecords_1.generateFieldRecordsReport
    },
    {
        name: "Field Usage",
        func: fieldUsage_1.generateFieldUsageReport
    },
    {
        name: "Client Usage",
        func: clientUsage_1.generateClientUsageReport
    },
    {
        name: "User Report",
        func: users_1.generateUserReport
    },
    {
        name: "Operation Counts",
        func: operationCounts_1.generateOperationCountsReport
    },
    {
        name: "Schema Checks",
        func: schemaChecks_1.generateSchemaChecksReport
    },
    {
        name: "Schema Publishes",
        func: schemaPublishes_1.generateSchemaPublishesReport
    },
    {
        name: "Variants",
        func: variants_1.generateVariantsReport
    },
];
// eslint-disable-next-line no-unused-vars
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
        this.output = clipanion_1.Option.String('--output', 'csv', {
            validator: (0, typanion_1.isEnum)(['csv', 'json', 'otel'])
        });
    }
    execute() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            let localKey = process.env.APOLLO_KEY;
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
                const res = yield sdk.BVR_CLI_ValidateToken();
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
                accountId = yield (0, chooseAccount_1.chooseAccountFromToken)(accounts);
            }
            else {
                accountId = yield (0, prompts_1.input)({
                    message: 'Enter the account ID for the report',
                    validate: (userInput) => __awaiter(this, void 0, void 0, function* () {
                        try {
                            const res = yield sdk.BVR_CLI_ValidateAccountId({ accountId: userInput });
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
            const offset = parseInt(inputOffset, 10);
            this.context.stdout.write('Generating reports...\n');
            const reportGenerators = [
                clientUsage_1.generateClientUsageReport,
                fieldChanges_1.generateFieldChangesReport,
                fieldRecords_1.generateFieldRecordsReport,
                fieldUsage_1.generateFieldUsageReport,
                users_1.generateUserReport,
                operationCounts_1.generateOperationCountsReport,
                schemaChecks_1.generateSchemaChecksReport,
                schemaPublishes_1.generateSchemaPublishesReport,
                variants_1.generateVariantsReport,
            ];
            const reportPromises = reportGenerators.map((fn) => fn({
                command: this,
                client: sdk,
                accountId,
                from: offset,
                output: this.output,
            }));
            const res = yield Promise.allSettled(reportPromises);
            this.context.stdout.write(`\u2714 ${res.filter((promise) => promise.status === 'fulfilled').length} report(s) generated.\n`);
            this.context.stdout.write(`\u2716 ${res.filter((promise) => promise.status === 'rejected').length} report(s) failed.\n`);
            for (let i = 0; i < res.length; i += 1) {
                const r = res[i];
                if (r.status === 'rejected') {
                    this.context.stderr.write(`Error creating ${reportMapping[i].name}: ${(_d = (_c = r.reason.response) === null || _c === void 0 ? void 0 : _c.errors[0]) === null || _d === void 0 ? void 0 : _d.message}\n`);
                }
            }
            return 0;
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
