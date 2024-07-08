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
exports.generateClientUsageReport = void 0;
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("../gql/sdk");
const csv_writer_1 = require("csv-writer");
const timestamps_1 = require("./timestamps");
const CLIENT_USAGE_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_ClientUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {
  account(id: $accountId) {
    graphs {
      id
      name
      statsWindow(from: $from, resolution: $resolution, to: $to) {
        fieldUsage {
          timestamp
          groupBy {
            clientName
          }
          metrics {
            estimatedExecutionCount
          }
          
        }
        
      }
    }
  }
}
`;
const generateClientUsageReport = (command, client, accountId, from) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: `${accountId}-client-usage.csv`,
        header: [
            { id: "name", title: "Graph Name" },
            { id: "timestamp", title: "Timestamp" },
            { id: "clientName", title: "Client Name" },
            { id: "estimatedExecutionCount", title: "Estimated Execution Count" }
        ]
    });
    let res = yield client.BVR_CLI_ClientUsage({
        accountId,
        from,
        resolution: sdk_1.Resolution.R1D,
        to: "0"
    });
    let records = (_a = res.account) === null || _a === void 0 ? void 0 : _a.graphs.flatMap(graph => {
        var _a;
        return (_a = graph.statsWindow) === null || _a === void 0 ? void 0 : _a.fieldUsage.map(field => {
            var _a;
            return {
                name: graph.name,
                timestamp: (0, timestamps_1.cleanTimestamp)(field.timestamp),
                clientName: (_a = field.groupBy.clientName) !== null && _a !== void 0 ? _a : "NULL",
                estimatedExecutionCount: field.metrics.estimatedExecutionCount
            };
        });
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for client usage.\n");
        return;
    }
    yield writer.writeRecords(records);
    command.context.stdout.write("Client usage report generated.\n");
});
exports.generateClientUsageReport = generateClientUsageReport;
