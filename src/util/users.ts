import { gql } from "graphql-request";
import { createObjectCsvWriter } from "csv-writer";
import dayjs from 'dayjs'
import { cleanTimestamp } from "./timestamps";
import { GenerateReportOptions } from "../types";
import { writeReports } from "./reportWriter";

// eslint-disable-next-line no-unused-vars
const USERS_QUERY = gql`
query BVR_CLI_UserStats($accountId: ID!) {
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
export const generateUserReport = async (options: GenerateReportOptions) => {
    const { command, client, accountId } = options;
    const writer = createObjectCsvWriter({
        path: `${accountId}-users.csv`,
        header: [
            { id: "fullName", title: "Full Name" },
            { id: "lastAuthenticatedAt", title: "Last Authenticated At" },
            { id: "active", "title": "Active?" },
            { id: "email", title: "Email" },
            { id: "emailVerified", title: "Email Verified" },
            { id: "type", title: "Type" },
            { id: "odysseyCertifications", title: "Odyssey Certifications" },
            { id: "odysseyCourses", title: "Odyssey Courses" }
        ]
    })

    const res = await client.BVR_CLI_UserStats({
        accountId
    })
    const records = res.organization?.memberships?.flatMap(user => {
        const isActive = dayjs(user.user.lastAuthenticatedAt ?? '0').isAfter(dayjs().subtract(30, 'days'))
        return {
            fullName: user.user.fullName,
            lastAuthenticatedAt: cleanTimestamp(user.user.lastAuthenticatedAt ?? 0),
            active: isActive,
            email: user.user.email,
            emailVerified: user.user.emailVerified,
            type: user.user.type,
            odysseyCertifications: user.user.odysseyCertifications.map(cert => cert.certificationId),
            odysseyCourses: user.user.odysseyCourses?.map(course => course.id)
        }
    }).flatMap((f) => (f ? [f] : []))

    if (!records) {
        command.context.stdout.write("No records found for users consumption.\n")
        return
    }

    await writeReports(options, records, writer);
    command.context.stdout.write("Users report generated.\n")
}
