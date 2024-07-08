"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOdysseyReport = void 0;
const graphql_request_1 = require("graphql-request");
const csv_writer_1 = require("csv-writer");
const ODYSSEY_QUERY = (0, graphql_request_1.gql) `
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
}`;
const generateOdysseyReport = (command, client, accountId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
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
    });
    let res = yield client.BVR_CLI_OdysseyStats({
        accountId
    });
    let records = (_b = (_a = res.organization) === null || _a === void 0 ? void 0 : _a.memberships) === null || _b === void 0 ? void 0 : _b.flatMap(user => {
        var _a;
        return {
            fullName: user.user.fullName,
            lastAuthenticatedAt: user.user.lastAuthenticatedAt,
            email: user.user.email,
            emailVerified: user.user.emailVerified,
            type: user.user.type,
            odysseyCertifications: user.user.odysseyCertifications.map(cert => cert.certificationId),
            odysseyCourses: (_a = user.user.odysseyCourses) === null || _a === void 0 ? void 0 : _a.map(course => course.id)
        };
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for odyssey consumption.\n");
        return;
    }
    yield writer.writeRecords(records);
    command.context.stdout.write("Odyssey report generated.\n");
});
exports.generateOdysseyReport = generateOdysseyReport;
