import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { cleanTimestamp } from "./timestamps";

const FIELD_USAGE_QUERY = gql`
query BVR_CLI_FieldUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {
  account(id: $accountId) {
    graphs {
      id
      name
      statsWindow(from: $from, resolution: $resolution, to: $to) {
        fieldUsage {
          timestamp
          groupBy {
            parentType
            fieldName
            schemaTag
          }
          metrics {
            estimatedExecutionCount
          }
          
        }
        
      }
    }
  }
}`

export const generateFieldUsageReport = async (command: Command, client: Sdk, accountId: string, from: number) => {
  const writer = createObjectCsvWriter({
    path: `${accountId}-field-usage.csv`,
    header: [
      { id: "timestamp", title: "Timestamp" },
      { id: "name", title: "Graph Name" },
      { id: "variantName", title: "Variant Name" },
      { id: "fieldPath", title: "Field Path" },
      { id: "estimatedExecutionCount", title: "Estimated Execution Count" }
    ]
  })

  let res = await client.BVR_CLI_FieldUsage({
    accountId,
    from,
    resolution: Resolution.R1D,
    to: "0"
  })

  let records = res.account?.graphs.flatMap(graph => {
    return graph.statsWindow?.fieldUsage.map(field => {
      return {
        name: graph.name,
        variantName: field.groupBy.schemaTag,
        timestamp: cleanTimestamp(field.timestamp),
        fieldPath: field.groupBy.fieldName ? `${field.groupBy.parentType}.${field.groupBy.fieldName}` : "NULL",
        estimatedExecutionCount: field.metrics.estimatedExecutionCount
      }
    })
  })
    .flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for field usage.\n")
    return
  }

  await writer.writeRecords(records)
  command.context.stdout.write("Field usage report generated.\n")
}
