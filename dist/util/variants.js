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
const timestamps_1 = require("./timestamps");
const processSchema_1 = require("./processSchema");
// eslint-disable-next-line no-unused-vars
const VARIANTS_INFO_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_VariantsInfo($accountId: ID!) {
  organization(id: $accountId) {
    id
    graphs {
      proposals {
        totalCount
        proposals {
          id
          status
          sourceVariant {
            id
          }
        }
      }
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
          build {
            result {
              __typename
              ... on BuildSuccess {
                coreSchema {
                  coreDocument
                }
              }
            }
          }
        }
        launchHistoryLength
        subgraphs {
          name
        }
        persistedQueryList {
          operations {
            edges {
              node {
                id
              }
            }
            pageInfo {
              hasNextPage
            }
          }
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
            { id: "subgraphCount", title: "Number of Subgraphs" },
            { id: "derivedVariantCount", title: "Derived Variant Count" },
            { id: "isContract", title: "Is Contract" },
            { id: "sourceVariant", title: "Source Variant" },
            { id: "isProtected", title: "Is Protected" },
            { id: "compositionVersion", title: "Composition Version" },
            { id: "isPublic", title: "Is Public" },
            { id: "isPubliclyListed", title: "Is Publicly Listed" },
            { id: "latestPublication", title: "Latest Publication" },
            { id: "latestApprovedLaunch", title: "Latest Approved Launch" },
            { id: "countLaunches", title: "Number of Launches" },
            { id: "countProposals", title: "Number of Proposals" },
            { id: "countProposalsImplemented", title: "Number of Proposals Implemented" },
            { id: "countProposalsApproved", title: "Number of Proposals Approved" },
            { id: "countProposalsClosed", title: "Number of Proposals Closed" },
            { id: "countProposalsOpen", title: "Number of Proposals Open" },
            { id: "countProposalsDraft", title: "Number of Proposals Draft" },
            { id: "countEntities", title: "Number of Entities" },
            { id: "countQueries", title: "Number of Queries" },
            { id: "countMutations", title: "Number of Mutations" },
            { id: "countSubscriptions", title: "Number of Subscriptions" },
            { id: "countFields", title: "Number of Fields" },
            { id: "countTypes", title: "Number of Types" },
            { id: "hasPQs", title: "Persisted Queries Used?" },
            { id: "countPQOperations", title: "Number of Persisted Query Operations" },
        ]
    });
    const res = yield client.BVR_CLI_VariantsInfo({
        accountId,
    });
    const records = (_b = (_a = res.organization) === null || _a === void 0 ? void 0 : _a.graphs) === null || _b === void 0 ? void 0 : _b.flatMap(graph => {
        var _a;
        return (_a = graph === null || graph === void 0 ? void 0 : graph.variants) === null || _a === void 0 ? void 0 : _a.map(variant => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
            const matchingProposals = (_b = (_a = graph.proposals) === null || _a === void 0 ? void 0 : _a.proposals) === null || _b === void 0 ? void 0 : _b.filter(p => p.sourceVariant.id === variant.id);
            let aggregatedResult = null;
            if (((_e = (_d = (_c = variant.latestApprovedLaunch) === null || _c === void 0 ? void 0 : _c.build) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e.__typename) === "BuildSuccess") {
                aggregatedResult = (0, processSchema_1.aggregateSchema)(variant.latestApprovedLaunch.build.result.coreSchema.coreDocument);
            }
            return {
                name: variant.name,
                id: variant.id,
                graphId: variant.graphId,
                hasManagedSubgraphs: variant.hasManagedSubgraphs,
                hasSupergraphSchema: variant.hasSupergraphSchema,
                subgraphCount: (_g = (_f = variant.subgraphs) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0,
                derivedVariantCount: variant.derivedVariantCount,
                isContract: variant.isContract,
                sourceVariant: (_h = variant.sourceVariant) === null || _h === void 0 ? void 0 : _h.name,
                isProtected: variant.isProtected,
                compositionVersion: variant.compositionVersion,
                isPublic: variant.isPublic,
                isPubliclyListed: variant.isPubliclyListed,
                latestPublication: (0, timestamps_1.cleanTimestamp)((_j = variant.latestPublication) === null || _j === void 0 ? void 0 : _j.publishedAt),
                latestApprovedLaunch: (0, timestamps_1.cleanTimestamp)((_l = (_k = variant.latestApprovedLaunch) === null || _k === void 0 ? void 0 : _k.completedAt) !== null && _l !== void 0 ? _l : 0),
                countLaunches: (_m = variant.launchHistoryLength) !== null && _m !== void 0 ? _m : 0,
                countProposals: matchingProposals.length,
                countProposalsImplemented: matchingProposals.filter(p => p.status === "IMPLEMENTED").length,
                countProposalsApproved: matchingProposals.filter(p => p.status === "APPROVED").length,
                countProposalsClosed: matchingProposals.filter(p => p.status === "CLOSED").length,
                countProposalsOpen: matchingProposals.filter(p => p.status === "OPEN").length,
                countProposalsDraft: matchingProposals.filter(p => p.status === "DRAFT").length,
                countPQOperations: (_r = (_q = (_p = (_o = variant.persistedQueryList) === null || _o === void 0 ? void 0 : _o.operations) === null || _p === void 0 ? void 0 : _p.edges) === null || _q === void 0 ? void 0 : _q.length) !== null && _r !== void 0 ? _r : 0,
                hasPQs: ((_u = (_t = (_s = variant.persistedQueryList) === null || _s === void 0 ? void 0 : _s.operations) === null || _t === void 0 ? void 0 : _t.edges.length) !== null && _u !== void 0 ? _u : -1) > 0,
                countEntities: aggregatedResult === null || aggregatedResult === void 0 ? void 0 : aggregatedResult.entities,
                countQueries: aggregatedResult === null || aggregatedResult === void 0 ? void 0 : aggregatedResult.queries,
                countMutations: aggregatedResult === null || aggregatedResult === void 0 ? void 0 : aggregatedResult.mutations,
                countSubscriptions: aggregatedResult === null || aggregatedResult === void 0 ? void 0 : aggregatedResult.subscriptions,
                countFields: aggregatedResult === null || aggregatedResult === void 0 ? void 0 : aggregatedResult.fields,
                countTypes: aggregatedResult === null || aggregatedResult === void 0 ? void 0 : aggregatedResult.types,
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
