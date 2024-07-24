import { gql } from "graphql-request";
import { createObjectCsvWriter } from "csv-writer";
import { cleanTimestamp, offsetToTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";
import { Resolution } from "../gql/sdk";

// eslint-disable-next-line no-unused-vars
const SCHEMA_CHECKS_QUERY = gql`
query BVR_CLI_SchemaChecks($accountId: ID!, $from: Timestamp!, $resolution: Resolution) {
  organization(id: $accountId) {
    id
    registryStatsWindow(from: $from, resolution: $resolution) {
      schemaCheckStats {
        metrics {
          totalFailedChecks
          totalSuccessfulChecks
        }
        timestamp
      }
    }
  }
}
`

export const generateSchemaChecksReport = async (options: GenerateReportOptions) => {
    const { command, client, accountId, from } = options;
    const writer = createObjectCsvWriter({
        path: `${accountId}-schema-checks.csv`,
        header: [
            { id: "timestamp", title: "Timestamp" },
            { id: "totalFailedChecks", title: "Total Failed Checks" },
            { id: "totalSuccessfulChecks", title: "Total Successful Checks" }
        ]
    })

    const res = await client.BVR_CLI_SchemaChecks({
        accountId,
        from: offsetToTimestamp(from),
        resolution: Resolution.R1D,
    })

    const records = res.organization?.registryStatsWindow?.schemaCheckStats.map(stat => ({
        timestamp: cleanTimestamp(stat.timestamp),
        totalFailedChecks: stat.metrics.totalFailedChecks,
        totalSuccessfulChecks: stat.metrics.totalSuccessfulChecks
    })).flatMap((f) => (f ? [f] : []))

    if (!records) {
        command.context.stdout.write("No records found for schema checks.\n")
        return
    }

    if (!records) {
        command.context.stdout.write("No records found for schema checks.\n")
        return
    }

    await writeReports(options, records, writer);
    command.context.stdout.write("Schema check report generated.\n")
}
