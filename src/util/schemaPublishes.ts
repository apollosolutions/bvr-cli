import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { cleanTimestamp, offsetToTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

const SCHEMA_PUBLISHES_QUERY = gql`
query BVR_CLI_SchemaPublishes($accountId: ID!, $from: Timestamp!, $resolution: Resolution) {
  organization(id: $accountId) {
    id
    registryStatsWindow(from: $from, resolution: $resolution) {
      schemaPublishStats {
        metrics {
          totalPublishes
        }
        timestamp
      }
      
    }
  }
}`

export const generateSchemaPublishesReport = async (options: GenerateReportOptions) => {
  const { command, client, accountId, from } = options;
  const writer = createObjectCsvWriter({
    path: `${accountId}-schema-publishes.csv`,
    header: [
      { id: "timestamp", title: "Timestamp" },
      { id: "totalPublishes", title: "Total Publishes" }
    ]
  })

  let res = await client.BVR_CLI_SchemaPublishes({
    accountId,
    from: offsetToTimestamp(from),
    resolution: Resolution.R1D,
  })

  let records = res.organization?.registryStatsWindow?.schemaPublishStats.map(stat => {
    return {
      timestamp: cleanTimestamp(stat.timestamp),
      totalPublishes: stat.metrics.totalPublishes
    }
  }).flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for schema publishes.\n")
    return
  }

  await writeReports(options, records, writer);
  command.context.stdout.write("Schema publishes report generated.\n")
}
