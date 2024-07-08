"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VARIANTS_INFO_QUERY = exports.SCHEMA_PUBLISHES_QUERY = exports.SCHEMA_CHECKS_QUERY = exports.OPERATION_COUNTS = exports.ODYSSEY_QUERY = exports.FIELD_CHANGE_SUMMARY_QUERY = exports.FIELD_USAGE_QUERY = exports.FIELD_RECORDS_QUERY = void 0;
const graphql_request_1 = require("graphql-request");
exports.FIELD_RECORDS_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_FieldRecords($accountId: ID!, $includeDeleted: Boolean) {
  account(id: $accountId) {
    graphs(includeDeleted: $includeDeleted) {
      id
      graphType
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
}`;
exports.FIELD_USAGE_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_FieldUsage($from: Timestamp!, $accountId: ID!, $resolution: Resolution, $to: Timestamp) {
  account(id: $accountId) {
    graphs {
      id
      name
      statsWindow(from: $from, resolution: $resolution, to: $to) {
        fieldUsage {
          timestamp
          groupBy {
            fieldName
          }
          metrics {
            estimatedExecutionCount
          }
          
        }
        
      }
    }
  }
}`;
exports.FIELD_CHANGE_SUMMARY_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_FieldChangeSummary($accountId: ID!, $limit: Int!) {
  account(id: $accountId) {
    graphs {
      id
      graphType
      name
      variants {
        graphId
        id
        latestPublication {
          id
          createdAt
          publishedAt
          historyLength
          historyOrder
          history(limit: $limit) {
            createdAt
            publishedAt
            schema {
              fieldCount
              typeCount
              createdAt
            }
          }
        }
      }
    }
  }
}
`;
exports.ODYSSEY_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_OdysseyStats($organizationId: ID!) {
  organization(id: $organizationId) {
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
exports.OPERATION_COUNTS = (0, graphql_request_1.gql) `
query BVR_CLI_OperationCounts($organizationId: ID!, $from: Timestamp!, $resolution: Resolution, $to: Timestamp) {
  organization(id: $organizationId) {
    statsWindow(from: $from, resolution: $resolution, to: $to) {
      billingUsageStats {
        timestamp
        metrics {
          operationCount
        }
        
      }
    }
  }
}`;
exports.SCHEMA_CHECKS_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_SchemaChecks($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {
  organization(id: $organizationId) {
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
`;
exports.SCHEMA_PUBLISHES_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_SchemaPublishes($organizationId: ID!, $from: Timestamp!, $resolution: Resolution) {
  organization(id: $organizationId) {
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
}`;
exports.VARIANTS_INFO_QUERY = (0, graphql_request_1.gql) `
query BVR_CLI_VariantsInfo($organizationId: ID!) {
  organization(id: $organizationId) {
    id
    variants {
      nodes {
        name
        id
        graphId
        hasManagedSubgraphs
        hasSupergraphSchema
        derivedVariantCount
        isContract
        isProtected
        compositionVersion
        isPublic
        isPubliclyListed
        latestPublication {
          publishedAt
        }
        latestApprovedLaunch {
          completedAt
        }
      }
    }
  }
}`;
