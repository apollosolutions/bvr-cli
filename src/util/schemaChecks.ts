import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { cleanTimestamp, offsetToTimestamp } from "./timestamps";
import { off } from "process";

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

export const generateSchemaChecksReport = async (command: Command, client: Sdk, accountId: string, from: number) => {
  const writer = createObjectCsvWriter({
    path: `${accountId}-schema-checks.csv`,
    header: [
      { id: "timestamp", title: "Timestamp" },
      { id: "totalFailedChecks", title: "Total Failed Checks" },
      { id: "totalSuccessfulChecks", title: "Total Successful Checks" }
    ]
  })

  let res = await client.BVR_CLI_SchemaChecks({
    accountId,
    from: offsetToTimestamp(from),
    resolution: Resolution.R1D,
  })

  let records = res.organization?.registryStatsWindow?.schemaCheckStats.map(stat => {
    return {
      timestamp: cleanTimestamp(stat.timestamp),
      totalFailedChecks: stat.metrics.totalFailedChecks,
      totalSuccessfulChecks: stat.metrics.totalSuccessfulChecks
    }
  }).flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for schema checks.\n")
    return
  }

  await writer.writeRecords(records)
  command.context.stdout.write("Schema check report generated.\n")
}
