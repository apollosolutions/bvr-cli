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
exports.generateFieldUsageReport = void 0;
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("../gql/sdk");
const csv_writer_1 = require("csv-writer");
const timestamps_1 = require("./timestamps");
const reportWriter_1 = require("./reportWriter");
const FIELD_USAGE_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_FieldUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {
  account(id: $accountId) {
    graphs {
      id
      name
      statsWindow(from: $from, resolution: $resolution, to: $to) {
        fieldUsage {
          timestamp
          groupBy {
            parentType
            fieldName
            schemaTag
          }
          metrics {
            estimatedExecutionCount
          }
          
        }
        
      }
    }
  }
}`;
const generateFieldUsageReport = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { command, client, accountId, from } = options;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: `${accountId}-field-usage.csv`,
        header: [
            { id: "timestamp", title: "Timestamp" },
            { id: "name", title: "Graph Name" },
            { id: "variantName", title: "Variant Name" },
            { id: "fieldPath", title: "Field Path" },
            { id: "estimatedExecutionCount", title: "Estimated Execution Count" }
        ]
    });
    let res = yield client.BVR_CLI_FieldUsage({
        accountId,
        from,
        resolution: sdk_1.Resolution.R1D,
        to: "0"
    });
    let records = (_a = res.account) === null || _a === void 0 ? void 0 : _a.graphs.flatMap(graph => {
        var _a;
        return (_a = graph.statsWindow) === null || _a === void 0 ? void 0 : _a.fieldUsage.map(field => {
            return {
                name: graph.name,
                variantName: field.groupBy.schemaTag,
                timestamp: (0, timestamps_1.cleanTimestamp)(field.timestamp),
                fieldPath: field.groupBy.fieldName ? `${field.groupBy.parentType}.${field.groupBy.fieldName}` : "NULL",
                estimatedExecutionCount: field.metrics.estimatedExecutionCount
            };
        });
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for field usage.\n");
        return;
    }
    yield (0, reportWriter_1.writeReports)(options, records, writer);
    command.context.stdout.write("Field usage report generated.\n");
});
exports.generateFieldUsageReport = generateFieldUsageReport;
