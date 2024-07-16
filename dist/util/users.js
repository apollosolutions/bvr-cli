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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserReport = void 0;
const graphql_request_1 = require("graphql-request");
const csv_writer_1 = require("csv-writer");
const dayjs_1 = __importDefault(require("dayjs"));
const timestamps_1 = require("./timestamps");
const reportWriter_1 = require("./reportWriter");
// eslint-disable-next-line no-unused-vars
const USERS_QUERY = (0, graphql_request_1.gql) `
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
}`;
const generateUserReport = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { command, client, accountId } = options;
    const writer = (0, csv_writer_1.createObjectCsvWriter)({
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
    });
    const res = yield client.BVR_CLI_UserStats({
        accountId
    });
    const records = (_b = (_a = res.organization) === null || _a === void 0 ? void 0 : _a.memberships) === null || _b === void 0 ? void 0 : _b.flatMap(user => {
        var _a, _b, _c;
        const isActive = (0, dayjs_1.default)((_a = user.user.lastAuthenticatedAt) !== null && _a !== void 0 ? _a : '0').isAfter((0, dayjs_1.default)().subtract(30, 'days'));
        return {
            fullName: user.user.fullName,
            lastAuthenticatedAt: (0, timestamps_1.cleanTimestamp)((_b = user.user.lastAuthenticatedAt) !== null && _b !== void 0 ? _b : 0),
            active: isActive,
            email: user.user.email,
            emailVerified: user.user.emailVerified,
            type: user.user.type,
            odysseyCertifications: user.user.odysseyCertifications.map(cert => cert.certificationId),
            odysseyCourses: (_c = user.user.odysseyCourses) === null || _c === void 0 ? void 0 : _c.map(course => course.id)
        };
    }).flatMap((f) => (f ? [f] : []));
    if (!records) {
        command.context.stdout.write("No records found for users consumption.\n");
        return;
    }
    yield (0, reportWriter_1.writeReports)(options, records, writer);
    command.context.stdout.write("Users report generated.\n");
});
exports.generateUserReport = generateUserReport;
