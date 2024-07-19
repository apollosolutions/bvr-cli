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
exports.generateSchemaChecksReport = void 0;
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("../gql/sdk");
const csv_writer_1 = require("csv-writer");
const timestamps_1 = require("./timestamps");
const reportWriter_1 = require("./reportWriter");
const SCHEMA_CHECKS_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_SchemaChecks($accountId: ID!, $from: Timestamp!, $resolution: Resolution) {
  organization(id: $accountId) {
    id
    registryStatsWindow(from: $from, resolution: $resolution) {
      schemaCheckStats {
        metrics {
          totalFailedChecks
          totalSuccessfulChecks
        }
        timestamp
      }
    }
  }
}
`;
const generateSchemaChecksReport = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { command, client, accountId, from } = options;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: `${accountId}-schema-checks.csv`,
        header: [
            { id: "timestamp", title: "Timestamp" },
            { id: "totalFailedChecks", title: "Total Failed Checks" },
            { id: "totalSuccessfulChecks", title: "Total Successful Checks" }
        ]
    });
    let res = yield client.BVR_CLI_SchemaChecks({
        accountId,
        from: (0, timestamps_1.offsetToTimestamp)(from),
        resolution: sdk_1.Resolution.R1D,
    });
    let records = (_b = (_a = res.organization) === null || _a === void 0 ? void 0 : _a.registryStatsWindow) === null || _b === void 0 ? void 0 : _b.schemaCheckStats.map(stat => {
        return {
            timestamp: (0, timestamps_1.cleanTimestamp)(stat.timestamp),
            totalFailedChecks: stat.metrics.totalFailedChecks,
            totalSuccessfulChecks: stat.metrics.totalSuccessfulChecks
        };
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for schema checks.\n");
        return;
    }
    yield (0, reportWriter_1.writeReports)(options, records, writer);
    command.context.stdout.write("Schema check report generated.\n");
});
exports.generateSchemaChecksReport = generateSchemaChecksReport;
