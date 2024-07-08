import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { cleanTimestamp } from "./timestamps";

const CLIENT_USAGE_QUERY = gql`
query BVR_CLI_ClientUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {
  account(id: $accountId) {
    graphs {
      id
      name
      statsWindow(from: $from, resolution: $resolution, to: $to) {
        fieldUsage {
          timestamp
          groupBy {
            clientName
          }
          metrics {
            estimatedExecutionCount
          }
          
        }
        
      }
    }
  }
}
`

export const generateClientUsageReport = async (command: Command, client: Sdk, accountId: string, from: number) => {
  const writer = createObjectCsvWriter({
    path: `${accountId}-client-usage.csv`,
    header: [
      { id: "name", title: "Graph Name" },
      { id: "timestamp", title: "Timestamp" },
      { id: "clientName", title: "Client Name" },
      { id: "estimatedExecutionCount", title: "Estimated Execution Count" }
    ]
  })

  let res = await client.BVR_CLI_ClientUsage({
    accountId,
    from,
    resolution: Resolution.R1D,
    to: "0"
  })

  let records = res.account?.graphs.flatMap(graph => {
    return graph.statsWindow?.fieldUsage.map(field => {
      return {
        name: graph.name,
        timestamp: cleanTimestamp(field.timestamp),
        clientName: field.groupBy.clientName ?? "NULL",
        estimatedExecutionCount: field.metrics.estimatedExecutionCount
      }
    })
  }).flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for client usage.\n")
    return
  }

  await writer.writeRecords(records)
  command.context.stdout.write("Client usage report generated.\n")
}
