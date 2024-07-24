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
exports.generateFieldRecordsReport = void 0;
const graphql_request_1 = require("graphql-request");
const csv_writer_1 = require("csv-writer");
const timestamps_1 = require("./timestamps");
const reportWriter_1 = require("./reportWriter");
// eslint-disable-next-line no-unused-vars
const FIELD_RECORDS_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_FieldRecords($accountId: ID!, $includeDeleted: Boolean) {
  account(id: $accountId) {
    graphs(includeDeleted: $includeDeleted) {
      id
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
const generateFieldRecordsReport = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { command, client, accountId } = options;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: `${accountId}-field-records.csv`,
        header: [
            { id: "timePublished", title: "Time Published" },
            { id: "name", title: "Graph Name" },
            { id: "variantName", title: "Variant Name" },
            { id: "category", title: "Category" },
            { id: "severity", title: "Severity" },
            { id: "description", title: "Description" },
            { id: "childNodeName", title: "Child Node Name" },
            { id: "parentNodeKind", title: "Parent Node Kind" },
            { id: "parentNodeName", title: "Parent Node Name" }
        ]
    });
    const res = yield client.BVR_CLI_FieldRecords({
        accountId,
    });
    const records = (_a = res.account) === null || _a === void 0 ? void 0 : _a.graphs.flatMap(graph => {
        var _a;
        return (_a = graph === null || graph === void 0 ? void 0 : graph.variants) === null || _a === void 0 ? void 0 : _a.flatMap(variant => {
            var _a, _b;
            return (_b = (_a = variant.latestPublication) === null || _a === void 0 ? void 0 : _a.diffToPrevious) === null || _b === void 0 ? void 0 : _b.changes.map(change => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                return ({
                    timePublished: (_b = (0, timestamps_1.cleanTimestamp)((_a = variant.latestPublication) === null || _a === void 0 ? void 0 : _a.publishedAt)) !== null && _b !== void 0 ? _b : "UNKNOWN",
                    name: graph.name,
                    variantName: (_e = (_d = (_c = variant.latestPublication) === null || _c === void 0 ? void 0 : _c.diffToPrevious) === null || _d === void 0 ? void 0 : _d.tag) !== null && _e !== void 0 ? _e : "UNKNOWN",
                    category: change.category,
                    severity: change.severity,
                    description: change.description,
                    childNodeName: (_g = (_f = change.childNode) === null || _f === void 0 ? void 0 : _f.name) !== null && _g !== void 0 ? _g : "UNKNOWN",
                    parentNodeKind: (_j = (_h = change.parentNode) === null || _h === void 0 ? void 0 : _h.kind) !== null && _j !== void 0 ? _j : "UNKNOWN",
                    parentNodeName: (_l = (_k = change.parentNode) === null || _k === void 0 ? void 0 : _k.name) !== null && _l !== void 0 ? _l : "UNKNOWN",
                });
            });
        });
    });
    yield (0, reportWriter_1.writeReports)(options, records, writer);
    command.context.stdout.write("Field records report generated.\n");
});
exports.generateFieldRecordsReport = generateFieldRecordsReport;
