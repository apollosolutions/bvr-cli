import { gql } from "graphql-request";
import { createObjectCsvWriter } from "csv-writer";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";
import { cleanTimestamp } from "./timestamps";
import { AggregatedResult, aggregateSchema } from "./processSchema";

// eslint-disable-next-line no-unused-vars
const VARIANTS_INFO_QUERY = gql`
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
}`

export const generateVariantsReport = async (options: GenerateReportOptions) => {
    const { command, client, accountId } = options;
    const writer = createObjectCsvWriter({
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
    })

    const res = await client.BVR_CLI_VariantsInfo({
        accountId,
    })

    const records = res.organization?.graphs?.flatMap(graph => graph?.variants?.map(variant => {
        const matchingProposals = graph.proposals?.proposals?.filter(p => p.sourceVariant.id === variant.id)

        let aggregatedResult: AggregatedResult | null = null;

        if (variant.latestApprovedLaunch?.build?.result?.__typename === "BuildSuccess") {
            aggregatedResult = aggregateSchema(variant.latestApprovedLaunch.build.result.coreSchema.coreDocument)
        }

        return {
            name: variant.name,
            id: variant.id,
            graphId: variant.graphId,
            hasManagedSubgraphs: variant.hasManagedSubgraphs,
            hasSupergraphSchema: variant.hasSupergraphSchema,
            subgraphCount: variant.subgraphs?.length ?? 0,
            derivedVariantCount: variant.derivedVariantCount,
            isContract: variant.isContract,
            sourceVariant: variant.sourceVariant?.name,
            isProtected: variant.isProtected,
            compositionVersion: variant.compositionVersion,
            isPublic: variant.isPublic,
            isPubliclyListed: variant.isPubliclyListed,
            latestPublication: cleanTimestamp(variant.latestPublication?.publishedAt),
            latestApprovedLaunch: cleanTimestamp(variant.latestApprovedLaunch?.completedAt ?? 0),
            countLaunches: variant.launchHistoryLength ?? 0,
            countProposals: matchingProposals.length,
            countProposalsImplemented: matchingProposals.filter(p => p.status === "IMPLEMENTED").length,
            countProposalsApproved: matchingProposals.filter(p => p.status === "APPROVED").length,
            countProposalsClosed: matchingProposals.filter(p => p.status === "CLOSED").length,
            countProposalsOpen: matchingProposals.filter(p => p.status === "OPEN").length,
            countProposalsDraft: matchingProposals.filter(p => p.status === "DRAFT").length,
            countPQOperations: variant.persistedQueryList?.operations?.edges?.length ?? 0,
            hasPQs: (variant.persistedQueryList?.operations?.edges.length ?? -1) > 0,
            countEntities: aggregatedResult?.entities,
            countQueries: aggregatedResult?.queries,
            countMutations: aggregatedResult?.mutations,
            countSubscriptions: aggregatedResult?.subscriptions,
            countFields: aggregatedResult?.fields,
            countTypes: aggregatedResult?.types,

        }
    })).flatMap((f) => (f ? [f] : []))

    if (!records) {
        command.context.stdout.write("No records found for variants.\n")
        return
    }

    await writeReports(options, records, writer);
    command.context.stdout.write("Variants report generated.\n")
}
