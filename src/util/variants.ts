import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

const VARIANTS_INFO_QUERY = gql`
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
    })

    let res = await client.BVR_CLI_VariantsInfo({
        accountId,
    })

    let records = res.organization?.graphs?.flatMap(graph => {
        return graph?.variants?.map(variant => {
            return {
                name: variant.name,
                id: variant.id,
                graphId: variant.graphId,
                hasManagedSubgraphs: variant.hasManagedSubgraphs,
                hasSupergraphSchema: variant.hasSupergraphSchema,
                derivedVariantCount: variant.derivedVariantCount,
                isContract: variant.isContract,
                sourceVariant: variant.sourceVariant?.name,
                isProtected: variant.isProtected,
                compositionVersion: variant.compositionVersion,
                isPublic: variant.isPublic,
                isPubliclyListed: variant.isPubliclyListed,
                latestPublication: variant.latestPublication?.publishedAt,
                latestApprovedLaunch: variant.latestApprovedLaunch?.completedAt
            }
        })
    }).flatMap((f) => (f ? [f] : []))

    if (!records) {
        command.context.stdout.write("No records found for variants.\n")
        return
    }

    await writeReports(options, records, writer);
    command.context.stdout.write("Variants report generated.\n")
}
