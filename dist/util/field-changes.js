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
exports.GenerateFieldChangesReport = void 0;
const graphql_request_1 = require("graphql-request");
const csv_writer_1 = require("csv-writer");
const FIELD_CHANGE_SUMMARY_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_FieldChangeSummary($accountId: ID!, $limit: Int!) {
  account(id: $accountId) {
    graphs {
      id
      graphType
      name
      variants {
        graphId
        id
        latestPublication {
          id
          createdAt
          publishedAt
          historyLength
          historyOrder
          history(limit: $limit) {
            createdAt
            publishedAt
            schema {
              fieldCount
              typeCount
              createdAt
            }
          }
        }
      }
    }
  }
}
`;
const GenerateFieldChangesReport = (command, client, accountId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: "field-changes.csv",
        header: [
            { id: "publishedAt", title: "time_history_published" },
            { id: "latestPublication", title: "latest_published" },
            { id: "name", title: "Graph Name" },
            { id: "graphType", title: "Graph Type" },
            { id: "variantName", title: "Variant Name" },
            { id: "totalTypeCount", title: "Total Type Count" },
            { id: "totalFieldCount", title: "Total Field Count" },
        ]
    });
    let res = yield client.BVR_CLI_FieldChangeSummary({
        accountId,
        limit: 30
    });
    console.log(JSON.stringify(res, null, 2));
    let records = (_a = res.account) === null || _a === void 0 ? void 0 : _a.graphs.flatMap(graph => {
        return graph.variants.flatMap(variant => {
            var _a;
            return (_a = variant.latestPublication) === null || _a === void 0 ? void 0 : _a.history.map(history => {
                var _a, _b;
                return {
                    publishedAt: history.publishedAt,
                    latestPublication: (_b = (_a = variant.latestPublication) === null || _a === void 0 ? void 0 : _a.publishedAt) !== null && _b !== void 0 ? _b : "UNKNOWN",
                    name: graph.name,
                    graphType: graph.graphType,
                    variantName: variant.id,
                    totalTypeCount: history.schema.typeCount,
                    totalFieldCount: history.schema.fieldCount
                };
            });
        });
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for field changes.\n");
        return;
    }
    console.log(JSON.stringify(records, null, 2));
    yield writer.writeRecords(records);
    command.context.stdout.write("Field change report generated.\n");
});
exports.GenerateFieldChangesReport = GenerateFieldChangesReport;
