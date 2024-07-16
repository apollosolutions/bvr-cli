import { gql } from "graphql-request";
import { createObjectCsvWriter } from "csv-writer";
import { cleanTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

// eslint-disable-next-line no-unused-vars
const FIELD_RECORDS_QUERY = gql`
query BVR_CLI_FieldRecords($accountId: ID!, $includeDeleted: Boolean) {
  account(id: $accountId) {
    graphs(includeDeleted: $includeDeleted) {
      id
      name
      variants {
        graphId
        latestPublication {
          id
          createdAt
          publishedAt
          diffToPrevious {
            tag
            changes {
              category
              severity
              description
              childNode {
                description
                name
                printedType
              }
              parentNode {
                description
                kind
                name
              }
            }
          }  
        }
      }
    }
  }
}`


export const generateFieldRecordsReport = async (options: GenerateReportOptions) => {
    const { command, client, accountId } = options;
    const writer = createObjectCsvWriter({
        path: `${accountId}-field-records.csv`,
        header: [
            { id: "timePublished", title: "Time Published" },
            { id: "name", title: "Graph Name" },
            { id: "variantName", title: "Variant Name" },
            { id: "category", title: "Category" },
            { id: "severity", title: "Severity" },
            { id: "description", title: "Description" },
            { id: "childNodeName", title: "Child Node Name" },
            { id: "parentNodeKind", title: "Parent Node Kind" },
            { id: "parentNodeName", title: "Parent Node Name" }
        ]
    })

    const res = await client.BVR_CLI_FieldRecords({
        accountId,
    })

    const records = res.account?.graphs.flatMap(graph => graph?.variants?.flatMap(variant => variant.latestPublication?.diffToPrevious?.changes.map(change => ({
        timePublished: cleanTimestamp(variant.latestPublication?.publishedAt) ?? "UNKNOWN",
        name: graph.name,
        variantName: variant.latestPublication?.diffToPrevious?.tag ?? "UNKNOWN",
        category: change.category,
        severity: change.severity,
        description: change.description,
        childNodeName: change.childNode?.name ?? "UNKNOWN",
        parentNodeKind: change.parentNode?.kind ?? "UNKNOWN",
        parentNodeName: change.parentNode?.name ?? "UNKNOWN",
    }))))

    await writeReports(options, records, writer);
    command.context.stdout.write("Field records report generated.\n")
}
