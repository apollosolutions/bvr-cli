import { gql } from "graphql-request";
import { createObjectCsvWriter } from "csv-writer";
import { Resolution } from "../gql/sdk";
import { cleanTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

// eslint-disable-next-line no-unused-vars
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

export const generateClientUsageReport = async (options: GenerateReportOptions) => {
    const { command, client, accountId, from } = options;
    const writer = createObjectCsvWriter({
        path: `${accountId}-client-usage.csv`,
        header: [
            { id: "name", title: "Graph Name" },
            { id: "timestamp", title: "Timestamp" },
            { id: "clientName", title: "Client Name" },
            { id: "estimatedExecutionCount", title: "Estimated Execution Count" }
        ]
    })

    const res = await client.BVR_CLI_ClientUsage({
        accountId,
        from,
        resolution: Resolution.R1D,
        to: "0"
    })

    const records = res.account?.graphs.flatMap(graph => graph.statsWindow?.fieldUsage.map(field => ({
        name: graph.name,
        timestamp: cleanTimestamp(field.timestamp),
        clientName: field.groupBy.clientName ?? "NULL",
        estimatedExecutionCount: field.metrics.estimatedExecutionCount
    }))).flatMap((f) => (f ? [f] : []))

    if (!records) {
        command.context.stdout.write("No records found for client usage.\n")
        return
    }

    await writeReports(options, records, writer);
    command.context.stdout.write("Client usage report generated.\n")
}
