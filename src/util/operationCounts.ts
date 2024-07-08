import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { cleanTimestamp } from "./timestamps";

const OPERATION_COUNTS = gql`
query BVR_CLI_OperationCounts($accountId: ID!, $from: Timestamp!, $resolution: Resolution, $to: Timestamp) {
  organization(id: $accountId) {
    statsWindow(from: $from, resolution: $resolution, to: $to) {
      billingUsageStats {
        timestamp
        groupBy {
          serviceId
          schemaTag
        }
        metrics {
          operationCount
        }
        
      }
    }
  }
}`

export const generateOperationCountsReport = async (command: Command, client: Sdk, accountId: string, from: number) => {
  const writer = createObjectCsvWriter({
    path: `${accountId}-operation-counts.csv`,
    header: [
      { id: "timestamp", title: "Timestamp" },
      { id: "graphRef", title: "Graph Reference" },
      { id: "operationCount", title: "Operation Count" }
    ]
  })

  let res = await client.BVR_CLI_OperationCounts({
    accountId,
    from,
    resolution: Resolution.R1D,
    to: "0"
  })

  let records = res.organization?.statsWindow?.billingUsageStats.map(stat => {
    return {
      timestamp: cleanTimestamp(stat.timestamp),
      graphRef: `${stat.groupBy?.serviceId}@${stat.groupBy?.schemaTag}`,
      operationCount: stat.metrics.operationCount
    }
  }).flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for operation counts.\n")
    return
  }

  await writer.writeRecords(records)
  command.context.stdout.write("Operation counts report generated.\n")
}
