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
exports.GenerateOperationCountsReport = void 0;
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("../gql/sdk");
const csv_writer_1 = require("csv-writer");
const OPERATION_COUNTS = (0, graphql_request_1.gql) `
query BVR_CLI_OperationCounts($accountId: ID!, $from: Timestamp!, $resolution: Resolution, $to: Timestamp) {
  organization(id: $accountId) {
    statsWindow(from: $from, resolution: $resolution, to: $to) {
      billingUsageStats {
        timestamp
        groupBy {
          serviceId
          schemaTag
        }
        metrics {
          operationCount
        }
        
      }
    }
  }
}`;
const GenerateOperationCountsReport = (command, client, accountId, from, to) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: "operation-counts.csv",
        header: [
            { id: "timestamp", title: "Timestamp" },
            { id: "graphRef", title: "Graph Reference" },
            { id: "operationCount", title: "Operation Count" }
        ]
    });
    let res = yield client.BVR_CLI_OperationCounts({
        accountId,
        from,
        resolution: sdk_1.Resolution.R1D,
        to: "0"
    });
    let records = (_b = (_a = res.organization) === null || _a === void 0 ? void 0 : _a.statsWindow) === null || _b === void 0 ? void 0 : _b.billingUsageStats.map(stat => {
        var _a, _b;
        return {
            timestamp: stat.timestamp,
            graphRef: `${(_a = stat.groupBy) === null || _a === void 0 ? void 0 : _a.serviceId}:${(_b = stat.groupBy) === null || _b === void 0 ? void 0 : _b.schemaTag}`,
            operationCount: stat.metrics.operationCount
        };
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for operation counts.\n");
        return;
    }
    yield writer.writeRecords(records);
    command.context.stdout.write("Operation counts report generated.\n");
});
exports.GenerateOperationCountsReport = GenerateOperationCountsReport;
