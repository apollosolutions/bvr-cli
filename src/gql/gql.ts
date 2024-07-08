/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery BVR_CLI_FieldRecords($accountId: ID!, $includeDeleted: Boolean) {\n  account(id: $accountId) {\n    graphs(includeDeleted: $includeDeleted) {\n      id\n      graphType\n      name\n      variants {\n        graphId\n        latestPublication {\n          id\n          createdAt\n          publishedAt\n          diffToPrevious {\n            tag\n            changes {\n              category\n              severity\n              description\n              childNode {\n                description\n                name\n                printedType\n              }\n              parentNode {\n                description\n                kind\n                name\n              }\n            }\n          }  \n        }\n      }\n    }\n  }\n}": types.Bvr_Cli_FieldRecordsDocument,
    "\nquery BVR_CLI_FieldUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {\n  account(id: $accountId) {\n    graphs {\n      id\n      name\n      statsWindow(from: $from, resolution: $resolution, to: $to) {\n        fieldUsage {\n          timestamp\n          groupBy {\n            fieldName\n          }\n          metrics {\n            estimatedExecutionCount\n          }\n          \n        }\n        \n      }\n    }\n  }\n}": types.Bvr_Cli_FieldUsageDocument,
    "\nquery BVR_CLI_ClientUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {\n  account(id: $accountId) {\n    graphs {\n      id\n      name\n      statsWindow(from: $from, resolution: $resolution, to: $to) {\n        fieldUsage {\n          timestamp\n          groupBy {\n            clientName\n          }\n          metrics {\n            estimatedExecutionCount\n          }\n          \n        }\n        \n      }\n    }\n  }\n}\n": types.Bvr_Cli_ClientUsageDocument,
    "\nquery BVR_CLI_FieldChangeSummary($accountId: ID!, $limit: Int!) {\n  account(id: $accountId) {\n    graphs {\n      id\n      graphType\n      name\n      variants {\n        graphId\n        id\n        latestPublication {\n          id\n          createdAt\n          publishedAt\n          historyLength\n          historyOrder\n          history(limit: $limit) {\n            createdAt\n            publishedAt\n            schema {\n              fieldCount\n              typeCount\n              createdAt\n            }\n          }\n        }\n      }\n    }\n  }\n}\n": types.Bvr_Cli_FieldChangeSummaryDocument,
    "\nquery BVR_CLI_OdysseyStats($organizationId: ID!) {\n  organization(id: $organizationId) {\n    id\n    memberships {\n      user {\n        fullName\n        lastAuthenticatedAt\n        email\n        emailVerified\n        type\n        odysseyCertifications {\n          earnedAt\n          certificationId\n        }\n        odysseyCourses {\n          completedAt\n          enrolledAt\n          id\n        }\n      }\n    }\n  }\n}": types.Bvr_Cli_OdysseyStatsDocument,
    "\nquery BVR_CLI_OperationCounts($organizationId: ID!, $from: Timestamp!, $resolution: Resolution, $to: Timestamp) {\n  organization(id: $organizationId) {\n    statsWindow(from: $from, resolution: $resolution, to: $to) {\n      billingUsageStats {\n        timestamp\n        metrics {\n          operationCount\n        }\n        \n      }\n    }\n  }\n}": types.Bvr_Cli_OperationCountsDocument,
    "\nquery BVR_CLI_SchemaChecks($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {\n  organization(id: $organizationId) {\n    id\n    registryStatsWindow(from: $from, resolution: $resolution) {\n      schemaCheckStats {\n        metrics {\n          totalFailedChecks\n          totalSuccessfulChecks\n        }\n        timestamp\n      }\n    }\n  }\n}\n": types.Bvr_Cli_SchemaChecksDocument,
    "\nquery BVR_CLI_SchemaPublishes($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {\n  organization(id: $organizationId) {\n    id\n    registryStatsWindow(from: $from, resolution: $resolution) {\n      schemaPublishStats {\n        metrics {\n          totalPublishes\n        }\n        timestamp\n      }\n      \n    }\n  }\n}": types.Bvr_Cli_SchemaPublishesDocument,
    "\nquery BVR_CLI_VariantsInfo($organizationId: ID!) {\n  organization(id: $organizationId) {\n    id\n    variants {\n      nodes {\n        name\n        id\n        graphId\n        hasManagedSubgraphs\n        hasSupergraphSchema\n        derivedVariantCount\n        isContract\n        isProtected\n        compositionVersion\n        isPublic\n        isPubliclyListed\n        latestPublication {\n          publishedAt\n        }\n        latestApprovedLaunch {\n          completedAt\n        }\n      }\n    }\n  }\n}": types.Bvr_Cli_VariantsInfoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_FieldRecords($accountId: ID!, $includeDeleted: Boolean) {\n  account(id: $accountId) {\n    graphs(includeDeleted: $includeDeleted) {\n      id\n      graphType\n      name\n      variants {\n        graphId\n        latestPublication {\n          id\n          createdAt\n          publishedAt\n          diffToPrevious {\n            tag\n            changes {\n              category\n              severity\n              description\n              childNode {\n                description\n                name\n                printedType\n              }\n              parentNode {\n                description\n                kind\n                name\n              }\n            }\n          }  \n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery BVR_CLI_FieldRecords($accountId: ID!, $includeDeleted: Boolean) {\n  account(id: $accountId) {\n    graphs(includeDeleted: $includeDeleted) {\n      id\n      graphType\n      name\n      variants {\n        graphId\n        latestPublication {\n          id\n          createdAt\n          publishedAt\n          diffToPrevious {\n            tag\n            changes {\n              category\n              severity\n              description\n              childNode {\n                description\n                name\n                printedType\n              }\n              parentNode {\n                description\n                kind\n                name\n              }\n            }\n          }  \n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_FieldUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {\n  account(id: $accountId) {\n    graphs {\n      id\n      name\n      statsWindow(from: $from, resolution: $resolution, to: $to) {\n        fieldUsage {\n          timestamp\n          groupBy {\n            fieldName\n          }\n          metrics {\n            estimatedExecutionCount\n          }\n          \n        }\n        \n      }\n    }\n  }\n}"): (typeof documents)["\nquery BVR_CLI_FieldUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {\n  account(id: $accountId) {\n    graphs {\n      id\n      name\n      statsWindow(from: $from, resolution: $resolution, to: $to) {\n        fieldUsage {\n          timestamp\n          groupBy {\n            fieldName\n          }\n          metrics {\n            estimatedExecutionCount\n          }\n          \n        }\n        \n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_ClientUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {\n  account(id: $accountId) {\n    graphs {\n      id\n      name\n      statsWindow(from: $from, resolution: $resolution, to: $to) {\n        fieldUsage {\n          timestamp\n          groupBy {\n            clientName\n          }\n          metrics {\n            estimatedExecutionCount\n          }\n          \n        }\n        \n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery BVR_CLI_ClientUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {\n  account(id: $accountId) {\n    graphs {\n      id\n      name\n      statsWindow(from: $from, resolution: $resolution, to: $to) {\n        fieldUsage {\n          timestamp\n          groupBy {\n            clientName\n          }\n          metrics {\n            estimatedExecutionCount\n          }\n          \n        }\n        \n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_FieldChangeSummary($accountId: ID!, $limit: Int!) {\n  account(id: $accountId) {\n    graphs {\n      id\n      graphType\n      name\n      variants {\n        graphId\n        id\n        latestPublication {\n          id\n          createdAt\n          publishedAt\n          historyLength\n          historyOrder\n          history(limit: $limit) {\n            createdAt\n            publishedAt\n            schema {\n              fieldCount\n              typeCount\n              createdAt\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery BVR_CLI_FieldChangeSummary($accountId: ID!, $limit: Int!) {\n  account(id: $accountId) {\n    graphs {\n      id\n      graphType\n      name\n      variants {\n        graphId\n        id\n        latestPublication {\n          id\n          createdAt\n          publishedAt\n          historyLength\n          historyOrder\n          history(limit: $limit) {\n            createdAt\n            publishedAt\n            schema {\n              fieldCount\n              typeCount\n              createdAt\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_OdysseyStats($organizationId: ID!) {\n  organization(id: $organizationId) {\n    id\n    memberships {\n      user {\n        fullName\n        lastAuthenticatedAt\n        email\n        emailVerified\n        type\n        odysseyCertifications {\n          earnedAt\n          certificationId\n        }\n        odysseyCourses {\n          completedAt\n          enrolledAt\n          id\n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery BVR_CLI_OdysseyStats($organizationId: ID!) {\n  organization(id: $organizationId) {\n    id\n    memberships {\n      user {\n        fullName\n        lastAuthenticatedAt\n        email\n        emailVerified\n        type\n        odysseyCertifications {\n          earnedAt\n          certificationId\n        }\n        odysseyCourses {\n          completedAt\n          enrolledAt\n          id\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_OperationCounts($organizationId: ID!, $from: Timestamp!, $resolution: Resolution, $to: Timestamp) {\n  organization(id: $organizationId) {\n    statsWindow(from: $from, resolution: $resolution, to: $to) {\n      billingUsageStats {\n        timestamp\n        metrics {\n          operationCount\n        }\n        \n      }\n    }\n  }\n}"): (typeof documents)["\nquery BVR_CLI_OperationCounts($organizationId: ID!, $from: Timestamp!, $resolution: Resolution, $to: Timestamp) {\n  organization(id: $organizationId) {\n    statsWindow(from: $from, resolution: $resolution, to: $to) {\n      billingUsageStats {\n        timestamp\n        metrics {\n          operationCount\n        }\n        \n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_SchemaChecks($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {\n  organization(id: $organizationId) {\n    id\n    registryStatsWindow(from: $from, resolution: $resolution) {\n      schemaCheckStats {\n        metrics {\n          totalFailedChecks\n          totalSuccessfulChecks\n        }\n        timestamp\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery BVR_CLI_SchemaChecks($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {\n  organization(id: $organizationId) {\n    id\n    registryStatsWindow(from: $from, resolution: $resolution) {\n      schemaCheckStats {\n        metrics {\n          totalFailedChecks\n          totalSuccessfulChecks\n        }\n        timestamp\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_SchemaPublishes($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {\n  organization(id: $organizationId) {\n    id\n    registryStatsWindow(from: $from, resolution: $resolution) {\n      schemaPublishStats {\n        metrics {\n          totalPublishes\n        }\n        timestamp\n      }\n      \n    }\n  }\n}"): (typeof documents)["\nquery BVR_CLI_SchemaPublishes($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {\n  organization(id: $organizationId) {\n    id\n    registryStatsWindow(from: $from, resolution: $resolution) {\n      schemaPublishStats {\n        metrics {\n          totalPublishes\n        }\n        timestamp\n      }\n      \n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery BVR_CLI_VariantsInfo($organizationId: ID!) {\n  organization(id: $organizationId) {\n    id\n    variants {\n      nodes {\n        name\n        id\n        graphId\n        hasManagedSubgraphs\n        hasSupergraphSchema\n        derivedVariantCount\n        isContract\n        isProtected\n        compositionVersion\n        isPublic\n        isPubliclyListed\n        latestPublication {\n          publishedAt\n        }\n        latestApprovedLaunch {\n          completedAt\n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery BVR_CLI_VariantsInfo($organizationId: ID!) {\n  organization(id: $organizationId) {\n    id\n    variants {\n      nodes {\n        name\n        id\n        graphId\n        hasManagedSubgraphs\n        hasSupergraphSchema\n        derivedVariantCount\n        isContract\n        isProtected\n        compositionVersion\n        isPublic\n        isPubliclyListed\n        latestPublication {\n          publishedAt\n        }\n        latestApprovedLaunch {\n          completedAt\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;