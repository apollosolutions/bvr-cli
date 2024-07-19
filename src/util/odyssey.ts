import { gql } from "graphql-request";
import { Resolution, type Sdk } from "../gql/sdk";
import { createObjectCsvWriter } from "csv-writer";
import type { Command } from "clipanion";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

const ODYSSEY_QUERY = gql`
query BVR_CLI_OdysseyStats($accountId: ID!) {
  organization(id: $accountId) {
    id
    memberships {
      user {
        fullName
        lastAuthenticatedAt
        email
        emailVerified
        type
        odysseyCertifications {
          earnedAt
          certificationId
        }
        odysseyCourses {
          completedAt
          enrolledAt
          id
        }
      }
    }
  }
}`
export const generateOdysseyReport = async (options: GenerateReportOptions) => {
    const { command, client, accountId, from } = options;
    const writer = createObjectCsvWriter({
    path: `${accountId}-odyssey.csv`,
    header: [
      { id: "fullName", title: "Full Name" },
      { id: "lastAuthenticatedAt", title: "Last Authenticated At" },
      { id: "email", title: "Email" },
      { id: "emailVerified", title: "Email Verified" },
      { id: "type", title: "Type" },
      { id: "odysseyCertifications", title: "Odyssey Certifications" },
      { id: "odysseyCourses", title: "Odyssey Courses" }
    ]
  })

  let res = await client.BVR_CLI_OdysseyStats({
    accountId
  })

  let records = res.organization?.memberships?.flatMap(user => {
    return {
      fullName: user.user.fullName,
      lastAuthenticatedAt: user.user.lastAuthenticatedAt,
      email: user.user.email,
      emailVerified: user.user.emailVerified,
      type: user.user.type,
      odysseyCertifications: user.user.odysseyCertifications.map(cert => cert.certificationId),
      odysseyCourses: user.user.odysseyCourses?.map(course => course.id)
    }
  }).flatMap((f) => (f ? [f] : []))

  if (!records) {
    command.context.stdout.write("No records found for odyssey consumption.\n")
    return
  }


  await writeReports(options, records, writer);
  command.context.stdout.write("Odyssey report generated.\n")
}
