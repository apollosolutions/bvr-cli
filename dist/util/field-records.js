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
exports.GenerateFieldRecordsReport = void 0;
const graphql_request_1 = require("graphql-request");
const csv_writer_1 = require("csv-writer");
const FIELD_RECORDS_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_FieldRecords($accountId: ID!, $includeDeleted: Boolean) {
  account(id: $accountId) {
    graphs(includeDeleted: $includeDeleted) {
      id
      graphType
      name
      variants {
        graphId
        latestPublication {
          id
          createdAt
          publishedAt
          diffToPrevious {
            tag
            changes {
              category
              severity
              description
              childNode {
                description
                name
                printedType
              }
              parentNode {
                description
                kind
                name
              }
            }
          }  
        }
      }
    }
  }
}`;
const GenerateFieldRecordsReport = (command, client, accountId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: "field-records.csv",
        header: [
            { id: "timePublished", title: "Time Published" },
            { id: "name", title: "Graph Name" },
            { id: "graphType", title: "Graph Type" },
            { id: "variantName", title: "Variant Name" },
            { id: "category", title: "Category" },
            { id: "severity", title: "Severity" },
            { id: "description", title: "Description" },
            { id: "childNodeName", title: "Child Node Name" },
            { id: "parentNodeKind", title: "Parent Node Kind" },
            { id: "parentNodeName", title: "Parent Node Name" }
        ]
    });
    let res = yield client.BVR_CLI_FieldRecords({
        accountId,
    });
    const records = (_a = res.account) === null || _a === void 0 ? void 0 : _a.graphs.flatMap(graph => {
        var _a;
        return (_a = graph === null || graph === void 0 ? void 0 : graph.variants) === null || _a === void 0 ? void 0 : _a.flatMap(variant => {
            var _a, _b;
            return (_b = (_a = variant.latestPublication) === null || _a === void 0 ? void 0 : _a.diffToPrevious) === null || _b === void 0 ? void 0 : _b.changes.map(change => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                return {
                    timePublished: (_a = variant.latestPublication) === null || _a === void 0 ? void 0 : _a.publishedAt,
                    name: graph.name,
                    graphType: graph.graphType,
                    variantName: (_d = (_c = (_b = variant.latestPublication) === null || _b === void 0 ? void 0 : _b.diffToPrevious) === null || _c === void 0 ? void 0 : _c.tag) !== null && _d !== void 0 ? _d : "UNKNOWN",
                    category: change.category,
                    severity: change.severity,
                    description: change.description,
                    childNodeName: (_f = (_e = change.childNode) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : "UNKNOWN",
                    parentNodeKind: (_h = (_g = change.parentNode) === null || _g === void 0 ? void 0 : _g.kind) !== null && _h !== void 0 ? _h : "UNKNOWN",
                    parentNodeName: (_k = (_j = change.parentNode) === null || _j === void 0 ? void 0 : _j.name) !== null && _k !== void 0 ? _k : "UNKNOWN",
                };
            });
        });
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for field records.\n");
        return;
    }
    yield writer.writeRecords(records);
    command.context.stdout.write("Field records report generated.\n");
});
exports.GenerateFieldRecordsReport = GenerateFieldRecordsReport;
