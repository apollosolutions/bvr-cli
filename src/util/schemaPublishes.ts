import { gql } from "graphql-request";
import { createObjectCsvWriter } from "csv-writer";
import { Resolution } from "../gql/sdk";
import { cleanTimestamp, offsetToTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

// eslint-disable-next-line no-unused-vars
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

    const res = await client.BVR_CLI_SchemaPublishes({
        accountId,
        from: offsetToTimestamp(from),
        resolution: Resolution.R1D,
    })

    const records = res.organization?.registryStatsWindow?.schemaPublishStats.map(stat => ({
        timestamp: cleanTimestamp(stat.timestamp),
        totalPublishes: stat.metrics.totalPublishes
    })).flatMap((f) => (f ? [f] : []))

    if (!records) {
        command.context.stdout.write("No records found for schema publishes.\n")
        return
    }

    await writer.writeRecords(records)

    await writeReports(options, records, writer);
    command.context.stdout.write("Schema publishes report generated.\n")
}
