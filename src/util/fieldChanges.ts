import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { cleanTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

const FIELD_CHANGE_SUMMARY_QUERY = gql`
query BVR_CLI_FieldChangeSummary($accountId: ID!, $limit: Int!) {
  account(id: $accountId) {
    graphs {
      id
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
`


export const generateFieldChangesReport = async (options: GenerateReportOptions) => {
  const { command, client, accountId } = options;
  const writer = createObjectCsvWriter({
    path: `${accountId}-field-changes.csv`,
    header: [
      { id: "publishedAt", title: "time_history_published" },
      { id: "latestPublication", title: "latest_published" },
      { id: "name", title: "Graph Name" },
      { id: "variantName", title: "Variant Name" },
      { id: "totalTypeCount", title: "Total Type Count" },
      { id: "totalFieldCount", title: "Total Field Count" },
    ]
  })

  let res = await client.BVR_CLI_FieldChangeSummary({
    accountId,
    limit: 30
  })

  let records = res.account?.graphs.flatMap(graph => {
    return graph.variants.flatMap(variant => {
      return variant.latestPublication?.history.map(history => {
        return {
          publishedAt: cleanTimestamp(history.publishedAt),
          latestPublication: cleanTimestamp(variant.latestPublication?.publishedAt) ?? "UNKNOWN",
          name: graph.name,
          variantName: variant.id,
          totalTypeCount: history.schema.typeCount,
          totalFieldCount: history.schema.fieldCount
        }
      })
    }
    )
  }).flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for field changes.\n")
    return
  }

  await writeReports(options, records, writer);
  command.context.stdout.write("Field change report generated.\n")
}
