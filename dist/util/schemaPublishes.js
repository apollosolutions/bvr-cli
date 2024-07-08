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
exports.generateSchemaPublishesReport = void 0;
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("../gql/sdk");
const csv_writer_1 = require("csv-writer");
const timestamps_1 = require("./timestamps");
const SCHEMA_PUBLISHES_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_SchemaPublishes($accountId: ID!, $from: Timestamp!, $resolution: Resolution) {
  organization(id: $accountId) {
    id
    registryStatsWindow(from: $from, resolution: $resolution) {
      schemaPublishStats {
        metrics {
          totalPublishes
        }
        timestamp
      }
      
    }
  }
}`;
const generateSchemaPublishesReport = (command, client, accountId, from) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: `${accountId}-schema-publishes.csv`,
        header: [
            { id: "timestamp", title: "Timestamp" },
            { id: "totalPublishes", title: "Total Publishes" }
        ]
    });
    let res = yield client.BVR_CLI_SchemaPublishes({
        accountId,
        from: (0, timestamps_1.offsetToTimestamp)(from),
        resolution: sdk_1.Resolution.R1D,
    });
    let records = (_b = (_a = res.organization) === null || _a === void 0 ? void 0 : _a.registryStatsWindow) === null || _b === void 0 ? void 0 : _b.schemaPublishStats.map(stat => {
        return {
            timestamp: (0, timestamps_1.cleanTimestamp)(stat.timestamp),
            totalPublishes: stat.metrics.totalPublishes
        };
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for schema publishes.\n");
        return;
    }
    yield writer.writeRecords(records);
    command.context.stdout.write("Schema publishes report generated.\n");
});
exports.generateSchemaPublishesReport = generateSchemaPublishesReport;
