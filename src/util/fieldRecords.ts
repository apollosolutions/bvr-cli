import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { cleanTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

const FIELD_RECORDS_QUERY = gql`
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
}`


export const generateFieldRecordsReport = async (options: GenerateReportOptions) => {
  const { command, client, accountId } = options;
  const writer = createObjectCsvWriter({
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
  })

  let res = await client.BVR_CLI_FieldRecords({
    accountId,
  })

  const records = res.account?.graphs.flatMap(graph => {
    return graph?.variants?.flatMap(variant => {
      return variant.latestPublication?.diffToPrevious?.changes.map(change => {
        return {
          timePublished: cleanTimestamp(variant.latestPublication?.publishedAt) ?? "UNKNOWN",
          name: graph.name,
          variantName: variant.latestPublication?.diffToPrevious?.tag ?? "UNKNOWN",
          category: change.category,
          severity: change.severity,
          description: change.description,
          childNodeName: change.childNode?.name ?? "UNKNOWN",
          parentNodeKind: change.parentNode?.kind ?? "UNKNOWN",
          parentNodeName: change.parentNode?.name ?? "UNKNOWN",
        }
      })
    })
  }).flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for field records.\n")
    return
  }


  await writeReports(options, records, writer);
  command.context.stdout.write("Field records report generated.\n")
}
