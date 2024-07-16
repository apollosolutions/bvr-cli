import { gql } from "graphql-request";
import { createObjectCsvWriter } from "csv-writer";
import { Resolution } from "../gql/sdk";
import { cleanTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

// eslint-disable-next-line no-unused-vars
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

export const generateOperationCountsReport = async (options: GenerateReportOptions) => {
    const { command, client, accountId, from } = options;
    const writer = createObjectCsvWriter({
        path: `${accountId}-operation-counts.csv`,
        header: [
            { id: "timestamp", title: "Timestamp" },
            { id: "graphRef", title: "Graph Reference" },
            { id: "operationCount", title: "Operation Count" }
        ]
    })

    const res = await client.BVR_CLI_OperationCounts({
        accountId,
        from,
        resolution: Resolution.R1D,
        to: "0"
    })

    const records = res.organization?.statsWindow?.billingUsageStats.map(stat => ({
        timestamp: cleanTimestamp(stat.timestamp),
        graphRef: `${stat.groupBy?.serviceId}@${stat.groupBy?.schemaTag}`,
        operationCount: stat.metrics.operationCount
    })).flatMap((f) => (f ? [f] : []))

    if (!records) {
        command.context.stdout.write("No records found for operation counts.\n")
        return
    }

    await writeReports(options, records, writer);
    command.context.stdout.write("Operation counts report generated.\n")
}
