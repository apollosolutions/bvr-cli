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
exports.generateVariantsReport = void 0;
const graphql_request_1 = require("graphql-request");
const csv_writer_1 = require("csv-writer");
const reportWriter_1 = require("./reportWriter");
const VARIANTS_INFO_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_VariantsInfo($accountId: ID!) {
  organization(id: $accountId) {
    id
    graphs {
     variants {
        name
        id
        graphId
        hasManagedSubgraphs
        hasSupergraphSchema
        derivedVariantCount
        isContract
        sourceVariant {
          name
        }
        isProtected
        compositionVersion
        isPublic
        isPubliclyListed
        latestPublication {
          publishedAt
        }
        latestApprovedLaunch {
          completedAt
        }
     } 
    }
  }
}`;
const generateVariantsReport = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { command, client, accountId } = options;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
        path: `${accountId}-variants.csv`,
        header: [
            { id: "name", title: "Variant Name" },
            { id: "id", title: "Variant ID" },
            { id: "graphId", title: "Graph ID" },
            { id: "hasManagedSubgraphs", title: "Has Managed Subgraphs" },
            { id: "hasSupergraphSchema", title: "Has Supergraph Schema" },
            { id: "derivedVariantCount", title: "Derived Variant Count" },
            { id: "isContract", title: "Is Contract" },
            { id: "sourceVariant", title: "Source Variant" },
            { id: "isProtected", title: "Is Protected" },
            { id: "compositionVersion", title: "Composition Version" },
            { id: "isPublic", title: "Is Public" },
            { id: "isPubliclyListed", title: "Is Publicly Listed" },
            { id: "latestPublication", title: "Latest Publication" },
            { id: "latestApprovedLaunch", title: "Latest Approved Launch" }
        ]
    });
    let res = yield client.BVR_CLI_VariantsInfo({
        accountId,
    });
    let records = (_b = (_a = res.organization) === null || _a === void 0 ? void 0 : _a.graphs) === null || _b === void 0 ? void 0 : _b.flatMap(graph => {
        var _a;
        return (_a = graph === null || graph === void 0 ? void 0 : graph.variants) === null || _a === void 0 ? void 0 : _a.map(variant => {
            var _a, _b, _c;
            return {
                name: variant.name,
                id: variant.id,
                graphId: variant.graphId,
                hasManagedSubgraphs: variant.hasManagedSubgraphs,
                hasSupergraphSchema: variant.hasSupergraphSchema,
                derivedVariantCount: variant.derivedVariantCount,
                isContract: variant.isContract,
                sourceVariant: (_a = variant.sourceVariant) === null || _a === void 0 ? void 0 : _a.name,
                isProtected: variant.isProtected,
                compositionVersion: variant.compositionVersion,
                isPublic: variant.isPublic,
                isPubliclyListed: variant.isPubliclyListed,
                latestPublication: (_b = variant.latestPublication) === null || _b === void 0 ? void 0 : _b.publishedAt,
                latestApprovedLaunch: (_c = variant.latestApprovedLaunch) === null || _c === void 0 ? void 0 : _c.completedAt
            };
        });
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for variants.\n");
        return;
    }
    yield (0, reportWriter_1.writeReports)(options, records, writer);
    command.context.stdout.write("Variants report generated.\n");
});
exports.generateVariantsReport = generateVariantsReport;
