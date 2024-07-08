"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownstreamLaunchInitiation = exports.DeletionTargetType = exports.DatadogApiRegion = exports.CoordinateUsageColumn = exports.CoordinateKind = exports.CoordinateInsightsListOrderByColumn = exports.ContractVariantFailedStep = exports.ComparisonOperator = exports.CommentType = exports.CommentStatus = exports.CloudTier = exports.CloudProvider = exports.CloudBuildPipelineTrackInput = exports.CheckWorkflowTaskStatus = exports.CheckWorkflowStatus = exports.CheckStepStatus = exports.CheckFilterInputStatusOption = exports.ChangeType = exports.ChangeSeverity = exports.ChangeCode = exports.ChangeCategory = exports.CacheScope = exports.CacheControlScope = exports.BuildPipelineTrackBadge = exports.BuildPipelineTrack = exports.BillingUsageStatsWindowSize = exports.BillingUsageStatsColumn = exports.BillingPlanTier = exports.BillingPlanKind = exports.BillingPeriod = exports.BillingModel = exports.AvatarUploadErrorCode = exports.AvatarDeleteErrorCode = exports.AuditStatus = exports.AuditAction = exports.ActorType = exports.AccountTraceRefsColumn = exports.AccountTracePathErrorsRefsColumn = exports.AccountState = exports.AccountQueryStatsColumn = exports.AccountOperationCheckStatsColumn = exports.AccountLockType = exports.AccountGraphosCloudMetricsColumn = exports.AccountFieldUsageColumn = exports.AccountFieldLatenciesColumn = exports.AccountFieldExecutionsColumn = exports.AccountErrorStatsColumn = exports.AccountEdgeServerInfosColumn = exports.AccountCoordinateUsageColumn = exports.AccountBillingUsageStatsColumn = void 0;
exports.ReasonCause = exports.QueryTriggerWindow = exports.QueryTriggerScope = exports.QueryTriggerMetric = exports.QueryStatsColumn = exports.ProposalStatus = exports.ProposalRevisionHistoryOrder = exports.ProposalLifecycleEvent = exports.ProposalCoverage = exports.ProposalChangeMismatchSeverity = exports.ProposalActivityAction = exports.PromoteSchemaResponseCode = exports.PromoteSchemaErrorCode = exports.PrivateSubgraphShareStatus = exports.OrganizationSsoProvider = exports.Ordering = exports.OrderType = exports.OrderStatus = exports.OperationType = exports.OperationInsightsListOrderByColumn = exports.OperationCheckStatsColumn = exports.OnboardingArchitecture = exports.NotificationStatus = exports.LoginFlowSource = exports.LogLevel = exports.LinterRuleCategory = exports.LintRule = exports.LintDiagnosticLevel = exports.LinkInfoType = exports.LaunchStatus = exports.LaunchHistoryOrder = exports.InvoiceState = exports.IntrospectionTypeKind = exports.IntrospectionDirectiveLocation = exports.InternalMdgAdminRole = exports.HttpMethod = exports.GraphosCloudMetricsColumn = exports.GraphVariantFilter = exports.GraphType = exports.GraphState = exports.GitRemoteHost = exports.FlatDiffType = exports.FieldUsageColumn = exports.FieldLatenciesColumn = exports.FieldInsightsListOrderByColumn = exports.FieldExecutionsColumn = exports.EventEnum = exports.ErrorStatsColumn = exports.EmailCategory = exports.EdgeServerInfosColumn = void 0;
exports.Bvr_Cli_VariantsInfoDocument = exports.Bvr_Cli_SchemaPublishesDocument = exports.Bvr_Cli_SchemaChecksDocument = exports.Bvr_Cli_OperationCountsDocument = exports.Bvr_Cli_OdysseyStatsDocument = exports.Bvr_Cli_FieldChangeSummaryDocument = exports.Bvr_Cli_ClientUsageDocument = exports.Bvr_Cli_FieldUsageDocument = exports.Bvr_Cli_FieldRecordsDocument = exports.ValidationErrorType = exports.ValidationErrorCode = exports.UserType = exports.UserSegment = exports.UserPermission = exports.TraceRefsColumn = exports.TracePathErrorsRefsColumn = exports.TicketStatus = exports.TicketPriority = exports.ThemeName = exports.SubscriptionState = exports.SubgraphChangeType = exports.StoreSchemaErrorCode = exports.Status = exports.State = exports.SsoConnectionState = exports.SlackPublishState = exports.ShardStatus = exports.ServiceTraceRefsColumn = exports.ServiceTracePathErrorsRefsColumn = exports.ServiceQueryStatsColumn = exports.ServiceOperationCheckStatsColumn = exports.ServiceGraphosCloudMetricsColumn = exports.ServiceFieldUsageColumn = exports.ServiceFieldLatenciesColumn = exports.ServiceFieldExecutionsColumn = exports.ServiceErrorStatsColumn = exports.ServiceEdgeServerInfosColumn = exports.ServiceCoordinateUsageColumn = exports.ServiceBillingUsageStatsColumn = exports.SchemaTagHistoryOrder = exports.RouterStatus = exports.RouterEntitlementAudience = exports.ReviewDecision = exports.ResponseHints = exports.Resolution = exports.ReportSchemaErrorCode = exports.RegionState = void 0;
/** Columns of AccountBillingUsageStats. */
var AccountBillingUsageStatsColumn;
(function (AccountBillingUsageStatsColumn) {
    AccountBillingUsageStatsColumn["AgentVersion"] = "AGENT_VERSION";
    AccountBillingUsageStatsColumn["GraphDeploymentType"] = "GRAPH_DEPLOYMENT_TYPE";
    AccountBillingUsageStatsColumn["OperationCount"] = "OPERATION_COUNT";
    AccountBillingUsageStatsColumn["OperationCountProvidedExplicitly"] = "OPERATION_COUNT_PROVIDED_EXPLICITLY";
    AccountBillingUsageStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    AccountBillingUsageStatsColumn["OperationType"] = "OPERATION_TYPE";
    AccountBillingUsageStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountBillingUsageStatsColumn["ServiceId"] = "SERVICE_ID";
    AccountBillingUsageStatsColumn["Timestamp"] = "TIMESTAMP";
})(AccountBillingUsageStatsColumn = exports.AccountBillingUsageStatsColumn || (exports.AccountBillingUsageStatsColumn = {}));
/** Columns of AccountCoordinateUsage. */
var AccountCoordinateUsageColumn;
(function (AccountCoordinateUsageColumn) {
    AccountCoordinateUsageColumn["ClientName"] = "CLIENT_NAME";
    AccountCoordinateUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountCoordinateUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    AccountCoordinateUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    AccountCoordinateUsageColumn["Kind"] = "KIND";
    AccountCoordinateUsageColumn["NamedAttribute"] = "NAMED_ATTRIBUTE";
    AccountCoordinateUsageColumn["NamedType"] = "NAMED_TYPE";
    AccountCoordinateUsageColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    AccountCoordinateUsageColumn["OperationType"] = "OPERATION_TYPE";
    AccountCoordinateUsageColumn["QueryId"] = "QUERY_ID";
    AccountCoordinateUsageColumn["QueryName"] = "QUERY_NAME";
    AccountCoordinateUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    AccountCoordinateUsageColumn["RequestCountNull"] = "REQUEST_COUNT_NULL";
    AccountCoordinateUsageColumn["RequestCountUndefined"] = "REQUEST_COUNT_UNDEFINED";
    AccountCoordinateUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountCoordinateUsageColumn["ServiceId"] = "SERVICE_ID";
    AccountCoordinateUsageColumn["Timestamp"] = "TIMESTAMP";
})(AccountCoordinateUsageColumn = exports.AccountCoordinateUsageColumn || (exports.AccountCoordinateUsageColumn = {}));
/** Columns of AccountEdgeServerInfos. */
var AccountEdgeServerInfosColumn;
(function (AccountEdgeServerInfosColumn) {
    AccountEdgeServerInfosColumn["BootId"] = "BOOT_ID";
    AccountEdgeServerInfosColumn["ExecutableSchemaId"] = "EXECUTABLE_SCHEMA_ID";
    AccountEdgeServerInfosColumn["LibraryVersion"] = "LIBRARY_VERSION";
    AccountEdgeServerInfosColumn["Platform"] = "PLATFORM";
    AccountEdgeServerInfosColumn["RuntimeVersion"] = "RUNTIME_VERSION";
    AccountEdgeServerInfosColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountEdgeServerInfosColumn["ServerId"] = "SERVER_ID";
    AccountEdgeServerInfosColumn["ServiceId"] = "SERVICE_ID";
    AccountEdgeServerInfosColumn["Timestamp"] = "TIMESTAMP";
    AccountEdgeServerInfosColumn["UserVersion"] = "USER_VERSION";
})(AccountEdgeServerInfosColumn = exports.AccountEdgeServerInfosColumn || (exports.AccountEdgeServerInfosColumn = {}));
/** Columns of AccountErrorStats. */
var AccountErrorStatsColumn;
(function (AccountErrorStatsColumn) {
    AccountErrorStatsColumn["ClientName"] = "CLIENT_NAME";
    AccountErrorStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountErrorStatsColumn["ErrorsCount"] = "ERRORS_COUNT";
    AccountErrorStatsColumn["Path"] = "PATH";
    AccountErrorStatsColumn["QueryId"] = "QUERY_ID";
    AccountErrorStatsColumn["QueryName"] = "QUERY_NAME";
    AccountErrorStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    AccountErrorStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountErrorStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountErrorStatsColumn["ServiceId"] = "SERVICE_ID";
    AccountErrorStatsColumn["Timestamp"] = "TIMESTAMP";
})(AccountErrorStatsColumn = exports.AccountErrorStatsColumn || (exports.AccountErrorStatsColumn = {}));
/** Columns of AccountFieldExecutions. */
var AccountFieldExecutionsColumn;
(function (AccountFieldExecutionsColumn) {
    AccountFieldExecutionsColumn["ErrorsCount"] = "ERRORS_COUNT";
    AccountFieldExecutionsColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    AccountFieldExecutionsColumn["FieldName"] = "FIELD_NAME";
    AccountFieldExecutionsColumn["ObservedExecutionCount"] = "OBSERVED_EXECUTION_COUNT";
    AccountFieldExecutionsColumn["ParentType"] = "PARENT_TYPE";
    AccountFieldExecutionsColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    AccountFieldExecutionsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    AccountFieldExecutionsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountFieldExecutionsColumn["ServiceId"] = "SERVICE_ID";
    AccountFieldExecutionsColumn["Timestamp"] = "TIMESTAMP";
})(AccountFieldExecutionsColumn = exports.AccountFieldExecutionsColumn || (exports.AccountFieldExecutionsColumn = {}));
/** Columns of AccountFieldLatencies. */
var AccountFieldLatenciesColumn;
(function (AccountFieldLatenciesColumn) {
    AccountFieldLatenciesColumn["FieldHistogram"] = "FIELD_HISTOGRAM";
    AccountFieldLatenciesColumn["FieldName"] = "FIELD_NAME";
    AccountFieldLatenciesColumn["ParentType"] = "PARENT_TYPE";
    AccountFieldLatenciesColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountFieldLatenciesColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountFieldLatenciesColumn["ServiceId"] = "SERVICE_ID";
    AccountFieldLatenciesColumn["Timestamp"] = "TIMESTAMP";
})(AccountFieldLatenciesColumn = exports.AccountFieldLatenciesColumn || (exports.AccountFieldLatenciesColumn = {}));
/** Columns of AccountFieldUsage. */
var AccountFieldUsageColumn;
(function (AccountFieldUsageColumn) {
    AccountFieldUsageColumn["ClientName"] = "CLIENT_NAME";
    AccountFieldUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountFieldUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    AccountFieldUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    AccountFieldUsageColumn["FieldName"] = "FIELD_NAME";
    AccountFieldUsageColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    AccountFieldUsageColumn["OperationType"] = "OPERATION_TYPE";
    AccountFieldUsageColumn["ParentType"] = "PARENT_TYPE";
    AccountFieldUsageColumn["QueryId"] = "QUERY_ID";
    AccountFieldUsageColumn["QueryName"] = "QUERY_NAME";
    AccountFieldUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    AccountFieldUsageColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountFieldUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountFieldUsageColumn["ServiceId"] = "SERVICE_ID";
    AccountFieldUsageColumn["Timestamp"] = "TIMESTAMP";
})(AccountFieldUsageColumn = exports.AccountFieldUsageColumn || (exports.AccountFieldUsageColumn = {}));
/** Columns of AccountGraphosCloudMetrics. */
var AccountGraphosCloudMetricsColumn;
(function (AccountGraphosCloudMetricsColumn) {
    AccountGraphosCloudMetricsColumn["AgentVersion"] = "AGENT_VERSION";
    AccountGraphosCloudMetricsColumn["CloudProvider"] = "CLOUD_PROVIDER";
    AccountGraphosCloudMetricsColumn["ResponseSize"] = "RESPONSE_SIZE";
    AccountGraphosCloudMetricsColumn["ResponseSizeThrottled"] = "RESPONSE_SIZE_THROTTLED";
    AccountGraphosCloudMetricsColumn["RouterId"] = "ROUTER_ID";
    AccountGraphosCloudMetricsColumn["RouterOperations"] = "ROUTER_OPERATIONS";
    AccountGraphosCloudMetricsColumn["RouterOperationsThrottled"] = "ROUTER_OPERATIONS_THROTTLED";
    AccountGraphosCloudMetricsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountGraphosCloudMetricsColumn["ServiceId"] = "SERVICE_ID";
    AccountGraphosCloudMetricsColumn["SubgraphFetches"] = "SUBGRAPH_FETCHES";
    AccountGraphosCloudMetricsColumn["SubgraphFetchesThrottled"] = "SUBGRAPH_FETCHES_THROTTLED";
    AccountGraphosCloudMetricsColumn["Tier"] = "TIER";
    AccountGraphosCloudMetricsColumn["Timestamp"] = "TIMESTAMP";
})(AccountGraphosCloudMetricsColumn = exports.AccountGraphosCloudMetricsColumn || (exports.AccountGraphosCloudMetricsColumn = {}));
var AccountLockType;
(function (AccountLockType) {
    AccountLockType["AutomatedTrialEnd"] = "AUTOMATED_TRIAL_END";
    AccountLockType["Manual"] = "MANUAL";
})(AccountLockType = exports.AccountLockType || (exports.AccountLockType = {}));
/** Columns of AccountOperationCheckStats. */
var AccountOperationCheckStatsColumn;
(function (AccountOperationCheckStatsColumn) {
    AccountOperationCheckStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    AccountOperationCheckStatsColumn["ClientName"] = "CLIENT_NAME";
    AccountOperationCheckStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountOperationCheckStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    AccountOperationCheckStatsColumn["OperationType"] = "OPERATION_TYPE";
    AccountOperationCheckStatsColumn["QueryId"] = "QUERY_ID";
    AccountOperationCheckStatsColumn["QueryName"] = "QUERY_NAME";
    AccountOperationCheckStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountOperationCheckStatsColumn["ServiceId"] = "SERVICE_ID";
    AccountOperationCheckStatsColumn["Timestamp"] = "TIMESTAMP";
    AccountOperationCheckStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(AccountOperationCheckStatsColumn = exports.AccountOperationCheckStatsColumn || (exports.AccountOperationCheckStatsColumn = {}));
/** Columns of AccountQueryStats. */
var AccountQueryStatsColumn;
(function (AccountQueryStatsColumn) {
    AccountQueryStatsColumn["CachedHistogram"] = "CACHED_HISTOGRAM";
    AccountQueryStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    AccountQueryStatsColumn["CacheTtlHistogram"] = "CACHE_TTL_HISTOGRAM";
    AccountQueryStatsColumn["ClientName"] = "CLIENT_NAME";
    AccountQueryStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountQueryStatsColumn["ForbiddenOperationCount"] = "FORBIDDEN_OPERATION_COUNT";
    AccountQueryStatsColumn["FromEngineproxy"] = "FROM_ENGINEPROXY";
    AccountQueryStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    AccountQueryStatsColumn["OperationType"] = "OPERATION_TYPE";
    AccountQueryStatsColumn["QueryId"] = "QUERY_ID";
    AccountQueryStatsColumn["QueryName"] = "QUERY_NAME";
    AccountQueryStatsColumn["RegisteredOperationCount"] = "REGISTERED_OPERATION_COUNT";
    AccountQueryStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    AccountQueryStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountQueryStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountQueryStatsColumn["ServiceId"] = "SERVICE_ID";
    AccountQueryStatsColumn["Timestamp"] = "TIMESTAMP";
    AccountQueryStatsColumn["UncachedHistogram"] = "UNCACHED_HISTOGRAM";
    AccountQueryStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(AccountQueryStatsColumn = exports.AccountQueryStatsColumn || (exports.AccountQueryStatsColumn = {}));
var AccountState;
(function (AccountState) {
    AccountState["Active"] = "ACTIVE";
    AccountState["Closed"] = "CLOSED";
    AccountState["Unknown"] = "UNKNOWN";
    AccountState["Unprovisioned"] = "UNPROVISIONED";
})(AccountState = exports.AccountState || (exports.AccountState = {}));
/** Columns of AccountTracePathErrorsRefs. */
var AccountTracePathErrorsRefsColumn;
(function (AccountTracePathErrorsRefsColumn) {
    AccountTracePathErrorsRefsColumn["ClientName"] = "CLIENT_NAME";
    AccountTracePathErrorsRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountTracePathErrorsRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    AccountTracePathErrorsRefsColumn["ErrorsCountInPath"] = "ERRORS_COUNT_IN_PATH";
    AccountTracePathErrorsRefsColumn["ErrorsCountInTrace"] = "ERRORS_COUNT_IN_TRACE";
    AccountTracePathErrorsRefsColumn["ErrorMessage"] = "ERROR_MESSAGE";
    AccountTracePathErrorsRefsColumn["Path"] = "PATH";
    AccountTracePathErrorsRefsColumn["QueryId"] = "QUERY_ID";
    AccountTracePathErrorsRefsColumn["QueryName"] = "QUERY_NAME";
    AccountTracePathErrorsRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountTracePathErrorsRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountTracePathErrorsRefsColumn["ServiceId"] = "SERVICE_ID";
    AccountTracePathErrorsRefsColumn["Timestamp"] = "TIMESTAMP";
    AccountTracePathErrorsRefsColumn["TraceHttpStatusCode"] = "TRACE_HTTP_STATUS_CODE";
    AccountTracePathErrorsRefsColumn["TraceId"] = "TRACE_ID";
    AccountTracePathErrorsRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
    AccountTracePathErrorsRefsColumn["TraceStartsAt"] = "TRACE_STARTS_AT";
})(AccountTracePathErrorsRefsColumn = exports.AccountTracePathErrorsRefsColumn || (exports.AccountTracePathErrorsRefsColumn = {}));
/** Columns of AccountTraceRefs. */
var AccountTraceRefsColumn;
(function (AccountTraceRefsColumn) {
    AccountTraceRefsColumn["ClientName"] = "CLIENT_NAME";
    AccountTraceRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountTraceRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    AccountTraceRefsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    AccountTraceRefsColumn["OperationType"] = "OPERATION_TYPE";
    AccountTraceRefsColumn["QueryId"] = "QUERY_ID";
    AccountTraceRefsColumn["QueryName"] = "QUERY_NAME";
    AccountTraceRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountTraceRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountTraceRefsColumn["ServiceId"] = "SERVICE_ID";
    AccountTraceRefsColumn["Timestamp"] = "TIMESTAMP";
    AccountTraceRefsColumn["TraceCount"] = "TRACE_COUNT";
    AccountTraceRefsColumn["TraceId"] = "TRACE_ID";
})(AccountTraceRefsColumn = exports.AccountTraceRefsColumn || (exports.AccountTraceRefsColumn = {}));
var ActorType;
(function (ActorType) {
    ActorType["AnonymousUser"] = "ANONYMOUS_USER";
    ActorType["Backfill"] = "BACKFILL";
    ActorType["Cron"] = "CRON";
    ActorType["Graph"] = "GRAPH";
    ActorType["InternalIdentity"] = "INTERNAL_IDENTITY";
    ActorType["Synchronization"] = "SYNCHRONIZATION";
    ActorType["System"] = "SYSTEM";
    ActorType["User"] = "USER";
})(ActorType = exports.ActorType || (exports.ActorType = {}));
var AuditAction;
(function (AuditAction) {
    AuditAction["BroadcastMessage"] = "BroadcastMessage";
    AuditAction["CreateMessage"] = "CreateMessage";
    AuditAction["EditMessage"] = "EditMessage";
    AuditAction["RecallMessage"] = "RecallMessage";
    AuditAction["TestMessage"] = "TestMessage";
    AuditAction["UpdateMessageState"] = "UpdateMessageState";
})(AuditAction = exports.AuditAction || (exports.AuditAction = {}));
var AuditStatus;
(function (AuditStatus) {
    AuditStatus["Cancelled"] = "CANCELLED";
    AuditStatus["Completed"] = "COMPLETED";
    AuditStatus["Expired"] = "EXPIRED";
    AuditStatus["Failed"] = "FAILED";
    AuditStatus["InProgress"] = "IN_PROGRESS";
    AuditStatus["Queued"] = "QUEUED";
})(AuditStatus = exports.AuditStatus || (exports.AuditStatus = {}));
var AvatarDeleteErrorCode;
(function (AvatarDeleteErrorCode) {
    AvatarDeleteErrorCode["SsoUsersCannotDeleteSelfAvatar"] = "SSO_USERS_CANNOT_DELETE_SELF_AVATAR";
})(AvatarDeleteErrorCode = exports.AvatarDeleteErrorCode || (exports.AvatarDeleteErrorCode = {}));
var AvatarUploadErrorCode;
(function (AvatarUploadErrorCode) {
    AvatarUploadErrorCode["SsoUsersCannotUploadSelfAvatar"] = "SSO_USERS_CANNOT_UPLOAD_SELF_AVATAR";
})(AvatarUploadErrorCode = exports.AvatarUploadErrorCode || (exports.AvatarUploadErrorCode = {}));
var BillingModel;
(function (BillingModel) {
    BillingModel["RequestBased"] = "REQUEST_BASED";
    BillingModel["SeatBased"] = "SEAT_BASED";
})(BillingModel = exports.BillingModel || (exports.BillingModel = {}));
var BillingPeriod;
(function (BillingPeriod) {
    BillingPeriod["Monthly"] = "MONTHLY";
    BillingPeriod["Quarterly"] = "QUARTERLY";
    BillingPeriod["SemiAnnually"] = "SEMI_ANNUALLY";
    BillingPeriod["Yearly"] = "YEARLY";
})(BillingPeriod = exports.BillingPeriod || (exports.BillingPeriod = {}));
var BillingPlanKind;
(function (BillingPlanKind) {
    BillingPlanKind["Community"] = "COMMUNITY";
    BillingPlanKind["Dedicated"] = "DEDICATED";
    BillingPlanKind["EnterpriseInternal"] = "ENTERPRISE_INTERNAL";
    BillingPlanKind["EnterprisePaid"] = "ENTERPRISE_PAID";
    BillingPlanKind["EnterprisePilot"] = "ENTERPRISE_PILOT";
    BillingPlanKind["EnterpriseTrial"] = "ENTERPRISE_TRIAL";
    BillingPlanKind["OneFree"] = "ONE_FREE";
    BillingPlanKind["OnePaid"] = "ONE_PAID";
    BillingPlanKind["Serverless"] = "SERVERLESS";
    BillingPlanKind["ServerlessFree"] = "SERVERLESS_FREE";
    BillingPlanKind["ServerlessPaid"] = "SERVERLESS_PAID";
    BillingPlanKind["Starter"] = "STARTER";
    BillingPlanKind["TeamPaid"] = "TEAM_PAID";
    BillingPlanKind["TeamTrial"] = "TEAM_TRIAL";
    BillingPlanKind["Unknown"] = "UNKNOWN";
})(BillingPlanKind = exports.BillingPlanKind || (exports.BillingPlanKind = {}));
var BillingPlanTier;
(function (BillingPlanTier) {
    BillingPlanTier["Community"] = "COMMUNITY";
    BillingPlanTier["Enterprise"] = "ENTERPRISE";
    BillingPlanTier["One"] = "ONE";
    BillingPlanTier["Team"] = "TEAM";
    BillingPlanTier["Unknown"] = "UNKNOWN";
    BillingPlanTier["UsageBased"] = "USAGE_BASED";
})(BillingPlanTier = exports.BillingPlanTier || (exports.BillingPlanTier = {}));
/** Columns of BillingUsageStats. */
var BillingUsageStatsColumn;
(function (BillingUsageStatsColumn) {
    BillingUsageStatsColumn["AccountId"] = "ACCOUNT_ID";
    BillingUsageStatsColumn["AgentVersion"] = "AGENT_VERSION";
    BillingUsageStatsColumn["GraphDeploymentType"] = "GRAPH_DEPLOYMENT_TYPE";
    BillingUsageStatsColumn["OperationCount"] = "OPERATION_COUNT";
    BillingUsageStatsColumn["OperationCountProvidedExplicitly"] = "OPERATION_COUNT_PROVIDED_EXPLICITLY";
    BillingUsageStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    BillingUsageStatsColumn["OperationType"] = "OPERATION_TYPE";
    BillingUsageStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    BillingUsageStatsColumn["ServiceId"] = "SERVICE_ID";
    BillingUsageStatsColumn["Timestamp"] = "TIMESTAMP";
})(BillingUsageStatsColumn = exports.BillingUsageStatsColumn || (exports.BillingUsageStatsColumn = {}));
var BillingUsageStatsWindowSize;
(function (BillingUsageStatsWindowSize) {
    BillingUsageStatsWindowSize["Day"] = "DAY";
    BillingUsageStatsWindowSize["Hour"] = "HOUR";
    BillingUsageStatsWindowSize["Month"] = "MONTH";
    BillingUsageStatsWindowSize["None"] = "NONE";
})(BillingUsageStatsWindowSize = exports.BillingUsageStatsWindowSize || (exports.BillingUsageStatsWindowSize = {}));
/** Build Pipeline Tracks */
var BuildPipelineTrack;
(function (BuildPipelineTrack) {
    /** Apollo Federation 1.0 */
    BuildPipelineTrack["Fed_1_0"] = "FED_1_0";
    /** Apollo Federation 1.1 */
    BuildPipelineTrack["Fed_1_1"] = "FED_1_1";
    /** Apollo Federation 2.0 */
    BuildPipelineTrack["Fed_2_0"] = "FED_2_0";
    /** Apollo Federation 2.1 */
    BuildPipelineTrack["Fed_2_1"] = "FED_2_1";
    /** Apollo Federation 2.3 */
    BuildPipelineTrack["Fed_2_3"] = "FED_2_3";
    /** Apollo Federation 2.4 */
    BuildPipelineTrack["Fed_2_4"] = "FED_2_4";
    /** Apollo Federation 2.5 */
    BuildPipelineTrack["Fed_2_5"] = "FED_2_5";
    /** Apollo Federation 2.6 */
    BuildPipelineTrack["Fed_2_6"] = "FED_2_6";
    /** Apollo Federation 2.7 */
    BuildPipelineTrack["Fed_2_7"] = "FED_2_7";
    /** Apollo Federation 2.8 */
    BuildPipelineTrack["Fed_2_8"] = "FED_2_8";
    /** Apollo Federation Next [unstable] */
    BuildPipelineTrack["FedNext"] = "FED_NEXT";
})(BuildPipelineTrack = exports.BuildPipelineTrack || (exports.BuildPipelineTrack = {}));
var BuildPipelineTrackBadge;
(function (BuildPipelineTrackBadge) {
    BuildPipelineTrackBadge["Deprecated"] = "DEPRECATED";
    BuildPipelineTrackBadge["Experimental"] = "EXPERIMENTAL";
    BuildPipelineTrackBadge["Latest"] = "LATEST";
    BuildPipelineTrackBadge["Unsupported"] = "UNSUPPORTED";
})(BuildPipelineTrackBadge = exports.BuildPipelineTrackBadge || (exports.BuildPipelineTrackBadge = {}));
var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Private"] = "PRIVATE";
    CacheControlScope["Public"] = "PUBLIC";
})(CacheControlScope = exports.CacheControlScope || (exports.CacheControlScope = {}));
var CacheScope;
(function (CacheScope) {
    CacheScope["Private"] = "PRIVATE";
    CacheScope["Public"] = "PUBLIC";
    CacheScope["Unknown"] = "UNKNOWN";
    CacheScope["Unrecognized"] = "UNRECOGNIZED";
})(CacheScope = exports.CacheScope || (exports.CacheScope = {}));
/**
 * Defines a set of categories that a schema change
 * can be grouped by.
 */
var ChangeCategory;
(function (ChangeCategory) {
    ChangeCategory["Addition"] = "ADDITION";
    ChangeCategory["Deprecation"] = "DEPRECATION";
    ChangeCategory["Edit"] = "EDIT";
    ChangeCategory["Removal"] = "REMOVAL";
})(ChangeCategory = exports.ChangeCategory || (exports.ChangeCategory = {}));
/**
 * These schema change codes represent all of the possible changes that can
 * occur during the schema diff algorithm.
 */
var ChangeCode;
(function (ChangeCode) {
    /** Type of the argument was changed. */
    ChangeCode["ArgChangedType"] = "ARG_CHANGED_TYPE";
    /** Argument was changed from nullable to non-nullable. */
    ChangeCode["ArgChangedTypeOptionalToRequired"] = "ARG_CHANGED_TYPE_OPTIONAL_TO_REQUIRED";
    /** Default value added or changed for the argument. */
    ChangeCode["ArgDefaultValueChange"] = "ARG_DEFAULT_VALUE_CHANGE";
    /** Description was added, removed, or updated for argument. */
    ChangeCode["ArgDescriptionChange"] = "ARG_DESCRIPTION_CHANGE";
    /** Argument to a field was removed. */
    ChangeCode["ArgRemoved"] = "ARG_REMOVED";
    /** Argument to the directive was removed. */
    ChangeCode["DirectiveArgRemoved"] = "DIRECTIVE_ARG_REMOVED";
    /** Location of the directive was removed. */
    ChangeCode["DirectiveLocationRemoved"] = "DIRECTIVE_LOCATION_REMOVED";
    /** Directive was removed. */
    ChangeCode["DirectiveRemoved"] = "DIRECTIVE_REMOVED";
    /** Repeatable flag was removed for directive. */
    ChangeCode["DirectiveRepeatableRemoved"] = "DIRECTIVE_REPEATABLE_REMOVED";
    /** Enum was deprecated. */
    ChangeCode["EnumDeprecated"] = "ENUM_DEPRECATED";
    /** Reason for enum deprecation changed. */
    ChangeCode["EnumDeprecatedReasonChange"] = "ENUM_DEPRECATED_REASON_CHANGE";
    /** Enum deprecation was removed. */
    ChangeCode["EnumDeprecationRemoved"] = "ENUM_DEPRECATION_REMOVED";
    /** Description was added, removed, or updated for enum value. */
    ChangeCode["EnumValueDescriptionChange"] = "ENUM_VALUE_DESCRIPTION_CHANGE";
    /** Field was added to the type. */
    ChangeCode["FieldAdded"] = "FIELD_ADDED";
    /** Return type for the field was changed. */
    ChangeCode["FieldChangedType"] = "FIELD_CHANGED_TYPE";
    /** Field was deprecated. */
    ChangeCode["FieldDeprecated"] = "FIELD_DEPRECATED";
    /** Reason for field deprecation changed. */
    ChangeCode["FieldDeprecatedReasonChange"] = "FIELD_DEPRECATED_REASON_CHANGE";
    /** Field deprecation removed. */
    ChangeCode["FieldDeprecationRemoved"] = "FIELD_DEPRECATION_REMOVED";
    /** Description was added, removed, or updated for field. */
    ChangeCode["FieldDescriptionChange"] = "FIELD_DESCRIPTION_CHANGE";
    /** Type of the field in the input object was changed. */
    ChangeCode["FieldOnInputObjectChangedType"] = "FIELD_ON_INPUT_OBJECT_CHANGED_TYPE";
    /** Field was removed from the type. */
    ChangeCode["FieldRemoved"] = "FIELD_REMOVED";
    /** Field was removed from the input object. */
    ChangeCode["FieldRemovedFromInputObject"] = "FIELD_REMOVED_FROM_INPUT_OBJECT";
    /** Non-nullable field was added to the input object. (Deprecated.) */
    ChangeCode["NonNullableFieldAddedToInputObject"] = "NON_NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Nullable field was added to the input type. (Deprecated.) */
    ChangeCode["NullableFieldAddedToInputObject"] = "NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Nullable argument was added to the field. */
    ChangeCode["OptionalArgAdded"] = "OPTIONAL_ARG_ADDED";
    /** Optional field was added to the input type. */
    ChangeCode["OptionalFieldAddedToInputObject"] = "OPTIONAL_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Non-nullable argument was added to the field. */
    ChangeCode["RequiredArgAdded"] = "REQUIRED_ARG_ADDED";
    /** Non-nullable argument added to directive. */
    ChangeCode["RequiredDirectiveArgAdded"] = "REQUIRED_DIRECTIVE_ARG_ADDED";
    /** Required field was added to the input object. */
    ChangeCode["RequiredFieldAddedToInputObject"] = "REQUIRED_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Type was added to the schema. */
    ChangeCode["TypeAdded"] = "TYPE_ADDED";
    /** Type now implements the interface. */
    ChangeCode["TypeAddedToInterface"] = "TYPE_ADDED_TO_INTERFACE";
    /** A new value was added to the enum. */
    ChangeCode["TypeAddedToUnion"] = "TYPE_ADDED_TO_UNION";
    /**
     * Type was changed from one kind to another.
     * Ex: scalar to object or enum to union.
     */
    ChangeCode["TypeChangedKind"] = "TYPE_CHANGED_KIND";
    /** Description was added, removed, or updated for type. */
    ChangeCode["TypeDescriptionChange"] = "TYPE_DESCRIPTION_CHANGE";
    /** Type (object or scalar) was removed from the schema. */
    ChangeCode["TypeRemoved"] = "TYPE_REMOVED";
    /** Type no longer implements the interface. */
    ChangeCode["TypeRemovedFromInterface"] = "TYPE_REMOVED_FROM_INTERFACE";
    /** Type is no longer included in the union. */
    ChangeCode["TypeRemovedFromUnion"] = "TYPE_REMOVED_FROM_UNION";
    /** A new value was added to the enum. */
    ChangeCode["ValueAddedToEnum"] = "VALUE_ADDED_TO_ENUM";
    /** Value was removed from the enum. */
    ChangeCode["ValueRemovedFromEnum"] = "VALUE_REMOVED_FROM_ENUM";
})(ChangeCode = exports.ChangeCode || (exports.ChangeCode = {}));
var ChangeSeverity;
(function (ChangeSeverity) {
    ChangeSeverity["Failure"] = "FAILURE";
    ChangeSeverity["Notice"] = "NOTICE";
})(ChangeSeverity = exports.ChangeSeverity || (exports.ChangeSeverity = {}));
var ChangeType;
(function (ChangeType) {
    ChangeType["Failure"] = "FAILURE";
    ChangeType["Notice"] = "NOTICE";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
/**
 * Options for filtering CheckWorkflows by status
 * This should always match CheckWorkflowStatus
 */
var CheckFilterInputStatusOption;
(function (CheckFilterInputStatusOption) {
    CheckFilterInputStatusOption["Failed"] = "FAILED";
    CheckFilterInputStatusOption["Passed"] = "PASSED";
    CheckFilterInputStatusOption["Pending"] = "PENDING";
})(CheckFilterInputStatusOption = exports.CheckFilterInputStatusOption || (exports.CheckFilterInputStatusOption = {}));
var CheckStepStatus;
(function (CheckStepStatus) {
    CheckStepStatus["Failure"] = "FAILURE";
    CheckStepStatus["Success"] = "SUCCESS";
})(CheckStepStatus = exports.CheckStepStatus || (exports.CheckStepStatus = {}));
var CheckWorkflowStatus;
(function (CheckWorkflowStatus) {
    CheckWorkflowStatus["Failed"] = "FAILED";
    CheckWorkflowStatus["Passed"] = "PASSED";
    CheckWorkflowStatus["Pending"] = "PENDING";
})(CheckWorkflowStatus = exports.CheckWorkflowStatus || (exports.CheckWorkflowStatus = {}));
var CheckWorkflowTaskStatus;
(function (CheckWorkflowTaskStatus) {
    CheckWorkflowTaskStatus["Blocked"] = "BLOCKED";
    CheckWorkflowTaskStatus["Failed"] = "FAILED";
    CheckWorkflowTaskStatus["Passed"] = "PASSED";
    CheckWorkflowTaskStatus["Pending"] = "PENDING";
})(CheckWorkflowTaskStatus = exports.CheckWorkflowTaskStatus || (exports.CheckWorkflowTaskStatus = {}));
/** Build Pipeline Tracks */
var CloudBuildPipelineTrackInput;
(function (CloudBuildPipelineTrackInput) {
    /** Apollo Federation 2.5 */
    CloudBuildPipelineTrackInput["Fed_2_5"] = "FED_2_5";
    /** Apollo Federation 2.6 */
    CloudBuildPipelineTrackInput["Fed_2_6"] = "FED_2_6";
    /** Apollo Federation 2.7 */
    CloudBuildPipelineTrackInput["Fed_2_7"] = "FED_2_7";
    /** Apollo Federation 2.8 */
    CloudBuildPipelineTrackInput["Fed_2_8"] = "FED_2_8";
})(CloudBuildPipelineTrackInput = exports.CloudBuildPipelineTrackInput || (exports.CloudBuildPipelineTrackInput = {}));
/** List of supported cloud providers */
var CloudProvider;
(function (CloudProvider) {
    /** Amazon Web Services */
    CloudProvider["Aws"] = "AWS";
    /** Fly.io */
    CloudProvider["Fly"] = "FLY";
})(CloudProvider = exports.CloudProvider || (exports.CloudProvider = {}));
/** Cloud Router tiers */
var CloudTier;
(function (CloudTier) {
    /** Dedicated tier */
    CloudTier["Dedicated"] = "DEDICATED";
    /** Enterprise Cloud tier */
    CloudTier["Enterprise"] = "ENTERPRISE";
    /** Serverless tier */
    CloudTier["Serverless"] = "SERVERLESS";
})(CloudTier = exports.CloudTier || (exports.CloudTier = {}));
var CommentStatus;
(function (CommentStatus) {
    CommentStatus["Deleted"] = "DELETED";
    CommentStatus["Open"] = "OPEN";
    CommentStatus["Resolved"] = "RESOLVED";
})(CommentStatus = exports.CommentStatus || (exports.CommentStatus = {}));
var CommentType;
(function (CommentType) {
    CommentType["Change"] = "CHANGE";
    CommentType["General"] = "GENERAL";
    CommentType["Review"] = "REVIEW";
})(CommentType = exports.CommentType || (exports.CommentType = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["Equals"] = "EQUALS";
    ComparisonOperator["GreaterThan"] = "GREATER_THAN";
    ComparisonOperator["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    ComparisonOperator["LessThan"] = "LESS_THAN";
    ComparisonOperator["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    ComparisonOperator["NotEquals"] = "NOT_EQUALS";
    ComparisonOperator["Unrecognized"] = "UNRECOGNIZED";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var ContractVariantFailedStep;
(function (ContractVariantFailedStep) {
    ContractVariantFailedStep["AddDirectiveDefinitionsIfNotPresent"] = "ADD_DIRECTIVE_DEFINITIONS_IF_NOT_PRESENT";
    ContractVariantFailedStep["AddInaccessibleSpecPurpose"] = "ADD_INACCESSIBLE_SPEC_PURPOSE";
    ContractVariantFailedStep["DirectiveDefinitionLocationAugmenting"] = "DIRECTIVE_DEFINITION_LOCATION_AUGMENTING";
    ContractVariantFailedStep["EmptyEnumMasking"] = "EMPTY_ENUM_MASKING";
    ContractVariantFailedStep["EmptyInputObjectMasking"] = "EMPTY_INPUT_OBJECT_MASKING";
    ContractVariantFailedStep["EmptyObjectAndInterfaceFieldMasking"] = "EMPTY_OBJECT_AND_INTERFACE_FIELD_MASKING";
    ContractVariantFailedStep["EmptyObjectAndInterfaceMasking"] = "EMPTY_OBJECT_AND_INTERFACE_MASKING";
    ContractVariantFailedStep["EmptyUnionMasking"] = "EMPTY_UNION_MASKING";
    ContractVariantFailedStep["InputValidation"] = "INPUT_VALIDATION";
    ContractVariantFailedStep["Parsing"] = "PARSING";
    ContractVariantFailedStep["ParsingTagDirectives"] = "PARSING_TAG_DIRECTIVES";
    ContractVariantFailedStep["PartialInterfaceMasking"] = "PARTIAL_INTERFACE_MASKING";
    ContractVariantFailedStep["SchemaRetrieval"] = "SCHEMA_RETRIEVAL";
    ContractVariantFailedStep["TagInheriting"] = "TAG_INHERITING";
    ContractVariantFailedStep["TagMatching"] = "TAG_MATCHING";
    ContractVariantFailedStep["ToApiSchema"] = "TO_API_SCHEMA";
    ContractVariantFailedStep["ToFilterSchema"] = "TO_FILTER_SCHEMA";
    ContractVariantFailedStep["Unknown"] = "UNKNOWN";
    ContractVariantFailedStep["UnreachableTypeMasking"] = "UNREACHABLE_TYPE_MASKING";
    ContractVariantFailedStep["VersionCheck"] = "VERSION_CHECK";
})(ContractVariantFailedStep = exports.ContractVariantFailedStep || (exports.ContractVariantFailedStep = {}));
var CoordinateInsightsListOrderByColumn;
(function (CoordinateInsightsListOrderByColumn) {
    CoordinateInsightsListOrderByColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    CoordinateInsightsListOrderByColumn["ExecutionCount"] = "EXECUTION_COUNT";
    CoordinateInsightsListOrderByColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    CoordinateInsightsListOrderByColumn["ReferencingOperationCountPerMin"] = "REFERENCING_OPERATION_COUNT_PER_MIN";
    CoordinateInsightsListOrderByColumn["SchemaCoordinate"] = "SCHEMA_COORDINATE";
})(CoordinateInsightsListOrderByColumn = exports.CoordinateInsightsListOrderByColumn || (exports.CoordinateInsightsListOrderByColumn = {}));
var CoordinateKind;
(function (CoordinateKind) {
    CoordinateKind["EnumValue"] = "ENUM_VALUE";
    CoordinateKind["InputObjectField"] = "INPUT_OBJECT_FIELD";
    CoordinateKind["ObjectField"] = "OBJECT_FIELD";
})(CoordinateKind = exports.CoordinateKind || (exports.CoordinateKind = {}));
/** Columns of CoordinateUsage. */
var CoordinateUsageColumn;
(function (CoordinateUsageColumn) {
    CoordinateUsageColumn["ClientName"] = "CLIENT_NAME";
    CoordinateUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    CoordinateUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    CoordinateUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    CoordinateUsageColumn["Kind"] = "KIND";
    CoordinateUsageColumn["NamedAttribute"] = "NAMED_ATTRIBUTE";
    CoordinateUsageColumn["NamedType"] = "NAMED_TYPE";
    CoordinateUsageColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    CoordinateUsageColumn["OperationType"] = "OPERATION_TYPE";
    CoordinateUsageColumn["QueryId"] = "QUERY_ID";
    CoordinateUsageColumn["QueryName"] = "QUERY_NAME";
    CoordinateUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    CoordinateUsageColumn["RequestCountNull"] = "REQUEST_COUNT_NULL";
    CoordinateUsageColumn["RequestCountUndefined"] = "REQUEST_COUNT_UNDEFINED";
    CoordinateUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    CoordinateUsageColumn["ServiceId"] = "SERVICE_ID";
    CoordinateUsageColumn["Timestamp"] = "TIMESTAMP";
})(CoordinateUsageColumn = exports.CoordinateUsageColumn || (exports.CoordinateUsageColumn = {}));
var DatadogApiRegion;
(function (DatadogApiRegion) {
    DatadogApiRegion["Eu"] = "EU";
    DatadogApiRegion["Eu1"] = "EU1";
    DatadogApiRegion["Us"] = "US";
    DatadogApiRegion["Us1"] = "US1";
    DatadogApiRegion["Us1Fed"] = "US1FED";
    DatadogApiRegion["Us3"] = "US3";
    DatadogApiRegion["Us5"] = "US5";
})(DatadogApiRegion = exports.DatadogApiRegion || (exports.DatadogApiRegion = {}));
var DeletionTargetType;
(function (DeletionTargetType) {
    DeletionTargetType["Account"] = "ACCOUNT";
    DeletionTargetType["User"] = "USER";
})(DeletionTargetType = exports.DeletionTargetType || (exports.DeletionTargetType = {}));
var DownstreamLaunchInitiation;
(function (DownstreamLaunchInitiation) {
    /**
     * Initiate the creation of downstream launches associated with this subgraph publication asynchronously.
     * The resulting API response may not provide specific details about triggered downstream launches.
     */
    DownstreamLaunchInitiation["Async"] = "ASYNC";
    /**
     * Initiate the creation of downstream Launches associated with this subgraph publication synchronously.
     * Use this option to ensure that any downstream launches will be started before the publish mutation returns.
     * Note that this does not require launches to complete, but it does ensure that the downstream launch IDs are
     * available to be queried from a `CompositionAndUpsertResult`.
     */
    DownstreamLaunchInitiation["Sync"] = "SYNC";
})(DownstreamLaunchInitiation = exports.DownstreamLaunchInitiation || (exports.DownstreamLaunchInitiation = {}));
/** Columns of EdgeServerInfos. */
var EdgeServerInfosColumn;
(function (EdgeServerInfosColumn) {
    EdgeServerInfosColumn["BootId"] = "BOOT_ID";
    EdgeServerInfosColumn["ExecutableSchemaId"] = "EXECUTABLE_SCHEMA_ID";
    EdgeServerInfosColumn["LibraryVersion"] = "LIBRARY_VERSION";
    EdgeServerInfosColumn["Platform"] = "PLATFORM";
    EdgeServerInfosColumn["RuntimeVersion"] = "RUNTIME_VERSION";
    EdgeServerInfosColumn["SchemaTag"] = "SCHEMA_TAG";
    EdgeServerInfosColumn["ServerId"] = "SERVER_ID";
    EdgeServerInfosColumn["ServiceId"] = "SERVICE_ID";
    EdgeServerInfosColumn["Timestamp"] = "TIMESTAMP";
    EdgeServerInfosColumn["UserVersion"] = "USER_VERSION";
})(EdgeServerInfosColumn = exports.EdgeServerInfosColumn || (exports.EdgeServerInfosColumn = {}));
var EmailCategory;
(function (EmailCategory) {
    EmailCategory["Educational"] = "EDUCATIONAL";
})(EmailCategory = exports.EmailCategory || (exports.EmailCategory = {}));
/** Columns of ErrorStats. */
var ErrorStatsColumn;
(function (ErrorStatsColumn) {
    ErrorStatsColumn["AccountId"] = "ACCOUNT_ID";
    ErrorStatsColumn["ClientName"] = "CLIENT_NAME";
    ErrorStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ErrorStatsColumn["ErrorsCount"] = "ERRORS_COUNT";
    ErrorStatsColumn["Path"] = "PATH";
    ErrorStatsColumn["QueryId"] = "QUERY_ID";
    ErrorStatsColumn["QueryName"] = "QUERY_NAME";
    ErrorStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    ErrorStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    ErrorStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ErrorStatsColumn["ServiceId"] = "SERVICE_ID";
    ErrorStatsColumn["Timestamp"] = "TIMESTAMP";
})(ErrorStatsColumn = exports.ErrorStatsColumn || (exports.ErrorStatsColumn = {}));
/**  Input parameters for run explorer operation event. */
var EventEnum;
(function (EventEnum) {
    EventEnum["ClickCheckList"] = "CLICK_CHECK_LIST";
    EventEnum["ClickGoToGraphSettings"] = "CLICK_GO_TO_GRAPH_SETTINGS";
    EventEnum["RunExplorerOperation"] = "RUN_EXPLORER_OPERATION";
})(EventEnum = exports.EventEnum || (exports.EventEnum = {}));
/** Columns of FieldExecutions. */
var FieldExecutionsColumn;
(function (FieldExecutionsColumn) {
    FieldExecutionsColumn["ErrorsCount"] = "ERRORS_COUNT";
    FieldExecutionsColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    FieldExecutionsColumn["FieldName"] = "FIELD_NAME";
    FieldExecutionsColumn["ObservedExecutionCount"] = "OBSERVED_EXECUTION_COUNT";
    FieldExecutionsColumn["ParentType"] = "PARENT_TYPE";
    FieldExecutionsColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    FieldExecutionsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    FieldExecutionsColumn["SchemaTag"] = "SCHEMA_TAG";
    FieldExecutionsColumn["ServiceId"] = "SERVICE_ID";
    FieldExecutionsColumn["Timestamp"] = "TIMESTAMP";
})(FieldExecutionsColumn = exports.FieldExecutionsColumn || (exports.FieldExecutionsColumn = {}));
var FieldInsightsListOrderByColumn;
(function (FieldInsightsListOrderByColumn) {
    FieldInsightsListOrderByColumn["ErrorCount"] = "ERROR_COUNT";
    FieldInsightsListOrderByColumn["ErrorCountPerMin"] = "ERROR_COUNT_PER_MIN";
    FieldInsightsListOrderByColumn["ErrorPercentage"] = "ERROR_PERCENTAGE";
    FieldInsightsListOrderByColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    FieldInsightsListOrderByColumn["ExecutionCount"] = "EXECUTION_COUNT";
    FieldInsightsListOrderByColumn["ParentTypeAndFieldName"] = "PARENT_TYPE_AND_FIELD_NAME";
    FieldInsightsListOrderByColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    FieldInsightsListOrderByColumn["ReferencingOperationCountPerMin"] = "REFERENCING_OPERATION_COUNT_PER_MIN";
    FieldInsightsListOrderByColumn["ServiceTimeP50"] = "SERVICE_TIME_P50";
    FieldInsightsListOrderByColumn["ServiceTimeP90"] = "SERVICE_TIME_P90";
    FieldInsightsListOrderByColumn["ServiceTimeP95"] = "SERVICE_TIME_P95";
    FieldInsightsListOrderByColumn["ServiceTimeP99"] = "SERVICE_TIME_P99";
})(FieldInsightsListOrderByColumn = exports.FieldInsightsListOrderByColumn || (exports.FieldInsightsListOrderByColumn = {}));
/** Columns of FieldLatencies. */
var FieldLatenciesColumn;
(function (FieldLatenciesColumn) {
    FieldLatenciesColumn["FieldHistogram"] = "FIELD_HISTOGRAM";
    FieldLatenciesColumn["FieldName"] = "FIELD_NAME";
    FieldLatenciesColumn["ParentType"] = "PARENT_TYPE";
    FieldLatenciesColumn["SchemaHash"] = "SCHEMA_HASH";
    FieldLatenciesColumn["SchemaTag"] = "SCHEMA_TAG";
    FieldLatenciesColumn["ServiceId"] = "SERVICE_ID";
    FieldLatenciesColumn["Timestamp"] = "TIMESTAMP";
})(FieldLatenciesColumn = exports.FieldLatenciesColumn || (exports.FieldLatenciesColumn = {}));
/** Columns of FieldUsage. */
var FieldUsageColumn;
(function (FieldUsageColumn) {
    FieldUsageColumn["ClientName"] = "CLIENT_NAME";
    FieldUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    FieldUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    FieldUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    FieldUsageColumn["FieldName"] = "FIELD_NAME";
    FieldUsageColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    FieldUsageColumn["OperationType"] = "OPERATION_TYPE";
    FieldUsageColumn["ParentType"] = "PARENT_TYPE";
    FieldUsageColumn["QueryId"] = "QUERY_ID";
    FieldUsageColumn["QueryName"] = "QUERY_NAME";
    FieldUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    FieldUsageColumn["SchemaHash"] = "SCHEMA_HASH";
    FieldUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    FieldUsageColumn["ServiceId"] = "SERVICE_ID";
    FieldUsageColumn["Timestamp"] = "TIMESTAMP";
})(FieldUsageColumn = exports.FieldUsageColumn || (exports.FieldUsageColumn = {}));
var FlatDiffType;
(function (FlatDiffType) {
    FlatDiffType["AddArgument"] = "ADD_ARGUMENT";
    FlatDiffType["AddDirective"] = "ADD_DIRECTIVE";
    FlatDiffType["AddDirectiveUsage"] = "ADD_DIRECTIVE_USAGE";
    FlatDiffType["AddEnum"] = "ADD_ENUM";
    FlatDiffType["AddEnumValue"] = "ADD_ENUM_VALUE";
    FlatDiffType["AddField"] = "ADD_FIELD";
    FlatDiffType["AddImplementation"] = "ADD_IMPLEMENTATION";
    FlatDiffType["AddInput"] = "ADD_INPUT";
    FlatDiffType["AddInterface"] = "ADD_INTERFACE";
    FlatDiffType["AddObject"] = "ADD_OBJECT";
    FlatDiffType["AddScalar"] = "ADD_SCALAR";
    FlatDiffType["AddSchemaDefinition"] = "ADD_SCHEMA_DEFINITION";
    FlatDiffType["AddSchemaDirectiveUsage"] = "ADD_SCHEMA_DIRECTIVE_USAGE";
    FlatDiffType["AddSchemaRootOperation"] = "ADD_SCHEMA_ROOT_OPERATION";
    FlatDiffType["AddUnion"] = "ADD_UNION";
    FlatDiffType["AddUnionMember"] = "ADD_UNION_MEMBER";
    FlatDiffType["AddValidLocation"] = "ADD_VALID_LOCATION";
    FlatDiffType["ChangeArgumentDefault"] = "CHANGE_ARGUMENT_DEFAULT";
    FlatDiffType["ChangeDescription"] = "CHANGE_DESCRIPTION";
    FlatDiffType["ChangeInputFieldDefault"] = "CHANGE_INPUT_FIELD_DEFAULT";
    FlatDiffType["ChangeRepeatable"] = "CHANGE_REPEATABLE";
    FlatDiffType["ChangeSchemaDescription"] = "CHANGE_SCHEMA_DESCRIPTION";
    FlatDiffType["RemoveArgument"] = "REMOVE_ARGUMENT";
    FlatDiffType["RemoveDirective"] = "REMOVE_DIRECTIVE";
    FlatDiffType["RemoveDirectiveUsage"] = "REMOVE_DIRECTIVE_USAGE";
    FlatDiffType["RemoveEnum"] = "REMOVE_ENUM";
    FlatDiffType["RemoveEnumValue"] = "REMOVE_ENUM_VALUE";
    FlatDiffType["RemoveField"] = "REMOVE_FIELD";
    FlatDiffType["RemoveImplementation"] = "REMOVE_IMPLEMENTATION";
    FlatDiffType["RemoveInput"] = "REMOVE_INPUT";
    FlatDiffType["RemoveInterface"] = "REMOVE_INTERFACE";
    FlatDiffType["RemoveObject"] = "REMOVE_OBJECT";
    FlatDiffType["RemoveScalar"] = "REMOVE_SCALAR";
    FlatDiffType["RemoveSchemaDefinition"] = "REMOVE_SCHEMA_DEFINITION";
    FlatDiffType["RemoveSchemaDirectiveUsage"] = "REMOVE_SCHEMA_DIRECTIVE_USAGE";
    FlatDiffType["RemoveSchemaRootOperation"] = "REMOVE_SCHEMA_ROOT_OPERATION";
    FlatDiffType["RemoveUnion"] = "REMOVE_UNION";
    FlatDiffType["RemoveUnionMember"] = "REMOVE_UNION_MEMBER";
    FlatDiffType["RemoveValidLocation"] = "REMOVE_VALID_LOCATION";
})(FlatDiffType = exports.FlatDiffType || (exports.FlatDiffType = {}));
var GitRemoteHost;
(function (GitRemoteHost) {
    GitRemoteHost["Bitbucket"] = "BITBUCKET";
    GitRemoteHost["Github"] = "GITHUB";
    GitRemoteHost["Gitlab"] = "GITLAB";
})(GitRemoteHost = exports.GitRemoteHost || (exports.GitRemoteHost = {}));
/** Various states a graph can be in. */
var GraphState;
(function (GraphState) {
    /** The graph has not been configured with any variants. */
    GraphState["Configured"] = "CONFIGURED";
    /** The graph has not been configured with any variants. */
    GraphState["NotConfigured"] = "NOT_CONFIGURED";
})(GraphState = exports.GraphState || (exports.GraphState = {}));
var GraphType;
(function (GraphType) {
    GraphType["Classic"] = "CLASSIC";
    GraphType["CloudSupergraph"] = "CLOUD_SUPERGRAPH";
    GraphType["SelfHostedSupergraph"] = "SELF_HOSTED_SUPERGRAPH";
})(GraphType = exports.GraphType || (exports.GraphType = {}));
/** Ways to filter graph variants. */
var GraphVariantFilter;
(function (GraphVariantFilter) {
    /** All Variants */
    GraphVariantFilter["All"] = "ALL";
    /** Variants favorited by the current user */
    GraphVariantFilter["Favorites"] = "FAVORITES";
})(GraphVariantFilter = exports.GraphVariantFilter || (exports.GraphVariantFilter = {}));
/** Columns of GraphosCloudMetrics. */
var GraphosCloudMetricsColumn;
(function (GraphosCloudMetricsColumn) {
    GraphosCloudMetricsColumn["AccountId"] = "ACCOUNT_ID";
    GraphosCloudMetricsColumn["AgentVersion"] = "AGENT_VERSION";
    GraphosCloudMetricsColumn["CloudProvider"] = "CLOUD_PROVIDER";
    GraphosCloudMetricsColumn["ResponseSize"] = "RESPONSE_SIZE";
    GraphosCloudMetricsColumn["ResponseSizeThrottled"] = "RESPONSE_SIZE_THROTTLED";
    GraphosCloudMetricsColumn["RouterId"] = "ROUTER_ID";
    GraphosCloudMetricsColumn["RouterOperations"] = "ROUTER_OPERATIONS";
    GraphosCloudMetricsColumn["RouterOperationsThrottled"] = "ROUTER_OPERATIONS_THROTTLED";
    GraphosCloudMetricsColumn["SchemaTag"] = "SCHEMA_TAG";
    GraphosCloudMetricsColumn["ServiceId"] = "SERVICE_ID";
    GraphosCloudMetricsColumn["SubgraphFetches"] = "SUBGRAPH_FETCHES";
    GraphosCloudMetricsColumn["SubgraphFetchesThrottled"] = "SUBGRAPH_FETCHES_THROTTLED";
    GraphosCloudMetricsColumn["Tier"] = "TIER";
    GraphosCloudMetricsColumn["Timestamp"] = "TIMESTAMP";
})(GraphosCloudMetricsColumn = exports.GraphosCloudMetricsColumn || (exports.GraphosCloudMetricsColumn = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Connect"] = "CONNECT";
    HttpMethod["Delete"] = "DELETE";
    HttpMethod["Get"] = "GET";
    HttpMethod["Head"] = "HEAD";
    HttpMethod["Options"] = "OPTIONS";
    HttpMethod["Patch"] = "PATCH";
    HttpMethod["Post"] = "POST";
    HttpMethod["Put"] = "PUT";
    HttpMethod["Trace"] = "TRACE";
    HttpMethod["Unknown"] = "UNKNOWN";
    HttpMethod["Unrecognized"] = "UNRECOGNIZED";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var InternalMdgAdminRole;
(function (InternalMdgAdminRole) {
    InternalMdgAdminRole["InternalMdgReadOnly"] = "INTERNAL_MDG_READ_ONLY";
    InternalMdgAdminRole["InternalMdgSales"] = "INTERNAL_MDG_SALES";
    InternalMdgAdminRole["InternalMdgSuperAdmin"] = "INTERNAL_MDG_SUPER_ADMIN";
    InternalMdgAdminRole["InternalMdgSupport"] = "INTERNAL_MDG_SUPPORT";
})(InternalMdgAdminRole = exports.InternalMdgAdminRole || (exports.InternalMdgAdminRole = {}));
/** __DirectiveLocation introspection type */
var IntrospectionDirectiveLocation;
(function (IntrospectionDirectiveLocation) {
    /** Location adjacent to an argument definition. */
    IntrospectionDirectiveLocation["ArgumentDefinition"] = "ARGUMENT_DEFINITION";
    /** Location adjacent to an enum definition. */
    IntrospectionDirectiveLocation["Enum"] = "ENUM";
    /** Location adjacent to an enum value definition. */
    IntrospectionDirectiveLocation["EnumValue"] = "ENUM_VALUE";
    /** Location adjacent to a field. */
    IntrospectionDirectiveLocation["Field"] = "FIELD";
    /** Location adjacent to a field definition. */
    IntrospectionDirectiveLocation["FieldDefinition"] = "FIELD_DEFINITION";
    /** Location adjacent to a fragment definition. */
    IntrospectionDirectiveLocation["FragmentDefinition"] = "FRAGMENT_DEFINITION";
    /** Location adjacent to a fragment spread. */
    IntrospectionDirectiveLocation["FragmentSpread"] = "FRAGMENT_SPREAD";
    /** Location adjacent to an inline fragment. */
    IntrospectionDirectiveLocation["InlineFragment"] = "INLINE_FRAGMENT";
    /** Location adjacent to an input object field definition. */
    IntrospectionDirectiveLocation["InputFieldDefinition"] = "INPUT_FIELD_DEFINITION";
    /** Location adjacent to an input object type definition. */
    IntrospectionDirectiveLocation["InputObject"] = "INPUT_OBJECT";
    /** Location adjacent to an interface definition. */
    IntrospectionDirectiveLocation["Interface"] = "INTERFACE";
    /** Location adjacent to a mutation operation. */
    IntrospectionDirectiveLocation["Mutation"] = "MUTATION";
    /** Location adjacent to an object type definition. */
    IntrospectionDirectiveLocation["Object"] = "OBJECT";
    /** Location adjacent to a query operation. */
    IntrospectionDirectiveLocation["Query"] = "QUERY";
    /** Location adjacent to a scalar definition. */
    IntrospectionDirectiveLocation["Scalar"] = "SCALAR";
    /** Location adjacent to a schema definition. */
    IntrospectionDirectiveLocation["Schema"] = "SCHEMA";
    /** Location adjacent to a subscription operation. */
    IntrospectionDirectiveLocation["Subscription"] = "SUBSCRIPTION";
    /** Location adjacent to a union definition. */
    IntrospectionDirectiveLocation["Union"] = "UNION";
    /** Location adjacent to a variable definition. */
    IntrospectionDirectiveLocation["VariableDefinition"] = "VARIABLE_DEFINITION";
})(IntrospectionDirectiveLocation = exports.IntrospectionDirectiveLocation || (exports.IntrospectionDirectiveLocation = {}));
var IntrospectionTypeKind;
(function (IntrospectionTypeKind) {
    /** Indicates this type is an enum. 'enumValues' is a valid field. */
    IntrospectionTypeKind["Enum"] = "ENUM";
    /** Indicates this type is an input object. 'inputFields' is a valid field. */
    IntrospectionTypeKind["InputObject"] = "INPUT_OBJECT";
    /**
     * Indicates this type is an interface. 'fields' and 'possibleTypes' are valid
     * fields
     */
    IntrospectionTypeKind["Interface"] = "INTERFACE";
    /** Indicates this type is a list. 'ofType' is a valid field. */
    IntrospectionTypeKind["List"] = "LIST";
    /** Indicates this type is a non-null. 'ofType' is a valid field. */
    IntrospectionTypeKind["NonNull"] = "NON_NULL";
    /** Indicates this type is an object. 'fields' and 'interfaces' are valid fields. */
    IntrospectionTypeKind["Object"] = "OBJECT";
    /** Indicates this type is a scalar. */
    IntrospectionTypeKind["Scalar"] = "SCALAR";
    /** Indicates this type is a union. 'possibleTypes' is a valid field. */
    IntrospectionTypeKind["Union"] = "UNION";
})(IntrospectionTypeKind = exports.IntrospectionTypeKind || (exports.IntrospectionTypeKind = {}));
var InvoiceState;
(function (InvoiceState) {
    InvoiceState["Collected"] = "COLLECTED";
    InvoiceState["Failed"] = "FAILED";
    InvoiceState["Open"] = "OPEN";
    InvoiceState["PastDue"] = "PAST_DUE";
    InvoiceState["Unknown"] = "UNKNOWN";
    InvoiceState["Void"] = "VOID";
})(InvoiceState = exports.InvoiceState || (exports.InvoiceState = {}));
var LaunchHistoryOrder;
(function (LaunchHistoryOrder) {
    LaunchHistoryOrder["CreatedAsc"] = "CREATED_ASC";
    LaunchHistoryOrder["CreatedDesc"] = "CREATED_DESC";
})(LaunchHistoryOrder = exports.LaunchHistoryOrder || (exports.LaunchHistoryOrder = {}));
var LaunchStatus;
(function (LaunchStatus) {
    LaunchStatus["LaunchCompleted"] = "LAUNCH_COMPLETED";
    LaunchStatus["LaunchFailed"] = "LAUNCH_FAILED";
    LaunchStatus["LaunchInitiated"] = "LAUNCH_INITIATED";
})(LaunchStatus = exports.LaunchStatus || (exports.LaunchStatus = {}));
var LinkInfoType;
(function (LinkInfoType) {
    LinkInfoType["DeveloperPortal"] = "DEVELOPER_PORTAL";
    LinkInfoType["Other"] = "OTHER";
    LinkInfoType["Repository"] = "REPOSITORY";
})(LinkInfoType = exports.LinkInfoType || (exports.LinkInfoType = {}));
/** The severity level of an lint result. */
var LintDiagnosticLevel;
(function (LintDiagnosticLevel) {
    LintDiagnosticLevel["Error"] = "ERROR";
    LintDiagnosticLevel["Ignored"] = "IGNORED";
    LintDiagnosticLevel["Warning"] = "WARNING";
})(LintDiagnosticLevel = exports.LintDiagnosticLevel || (exports.LintDiagnosticLevel = {}));
var LintRule;
(function (LintRule) {
    LintRule["AllElementsRequireDescription"] = "ALL_ELEMENTS_REQUIRE_DESCRIPTION";
    LintRule["ContactDirectiveMissing"] = "CONTACT_DIRECTIVE_MISSING";
    LintRule["DefinedTypesAreUnused"] = "DEFINED_TYPES_ARE_UNUSED";
    LintRule["DeprecatedDirectiveMissingReason"] = "DEPRECATED_DIRECTIVE_MISSING_REASON";
    LintRule["DirectiveComposition"] = "DIRECTIVE_COMPOSITION";
    LintRule["DirectiveNamesShouldBeCamelCase"] = "DIRECTIVE_NAMES_SHOULD_BE_CAMEL_CASE";
    LintRule["DoesNotParse"] = "DOES_NOT_PARSE";
    LintRule["EnumPrefix"] = "ENUM_PREFIX";
    LintRule["EnumSuffix"] = "ENUM_SUFFIX";
    LintRule["EnumUsedAsInputWithoutSuffix"] = "ENUM_USED_AS_INPUT_WITHOUT_SUFFIX";
    LintRule["EnumUsedAsOutputDespiteSuffix"] = "ENUM_USED_AS_OUTPUT_DESPITE_SUFFIX";
    LintRule["EnumValuesShouldBeScreamingSnakeCase"] = "ENUM_VALUES_SHOULD_BE_SCREAMING_SNAKE_CASE";
    LintRule["FieldNamesShouldBeCamelCase"] = "FIELD_NAMES_SHOULD_BE_CAMEL_CASE";
    LintRule["FromSubgraphDoesNotExist"] = "FROM_SUBGRAPH_DOES_NOT_EXIST";
    LintRule["InconsistentArgumentPresence"] = "INCONSISTENT_ARGUMENT_PRESENCE";
    LintRule["InconsistentButCompatibleArgumentType"] = "INCONSISTENT_BUT_COMPATIBLE_ARGUMENT_TYPE";
    LintRule["InconsistentButCompatibleFieldType"] = "INCONSISTENT_BUT_COMPATIBLE_FIELD_TYPE";
    LintRule["InconsistentDefaultValuePresence"] = "INCONSISTENT_DEFAULT_VALUE_PRESENCE";
    LintRule["InconsistentDescription"] = "INCONSISTENT_DESCRIPTION";
    LintRule["InconsistentEntity"] = "INCONSISTENT_ENTITY";
    LintRule["InconsistentEnumValueForInputEnum"] = "INCONSISTENT_ENUM_VALUE_FOR_INPUT_ENUM";
    LintRule["InconsistentEnumValueForOutputEnum"] = "INCONSISTENT_ENUM_VALUE_FOR_OUTPUT_ENUM";
    LintRule["InconsistentExecutableDirectiveLocations"] = "INCONSISTENT_EXECUTABLE_DIRECTIVE_LOCATIONS";
    LintRule["InconsistentExecutableDirectivePresence"] = "INCONSISTENT_EXECUTABLE_DIRECTIVE_PRESENCE";
    LintRule["InconsistentExecutableDirectiveRepeatable"] = "INCONSISTENT_EXECUTABLE_DIRECTIVE_REPEATABLE";
    LintRule["InconsistentInputObjectField"] = "INCONSISTENT_INPUT_OBJECT_FIELD";
    LintRule["InconsistentInterfaceValueTypeField"] = "INCONSISTENT_INTERFACE_VALUE_TYPE_FIELD";
    LintRule["InconsistentNonRepeatableDirectiveArguments"] = "INCONSISTENT_NON_REPEATABLE_DIRECTIVE_ARGUMENTS";
    LintRule["InconsistentObjectValueTypeField"] = "INCONSISTENT_OBJECT_VALUE_TYPE_FIELD";
    LintRule["InconsistentRuntimeTypesForShareableReturn"] = "INCONSISTENT_RUNTIME_TYPES_FOR_SHAREABLE_RETURN";
    LintRule["InconsistentTypeSystemDirectiveLocations"] = "INCONSISTENT_TYPE_SYSTEM_DIRECTIVE_LOCATIONS";
    LintRule["InconsistentTypeSystemDirectiveRepeatable"] = "INCONSISTENT_TYPE_SYSTEM_DIRECTIVE_REPEATABLE";
    LintRule["InconsistentUnionMember"] = "INCONSISTENT_UNION_MEMBER";
    LintRule["InputArgumentNamesShouldBeCamelCase"] = "INPUT_ARGUMENT_NAMES_SHOULD_BE_CAMEL_CASE";
    LintRule["InputTypeSuffix"] = "INPUT_TYPE_SUFFIX";
    LintRule["InterfacePrefix"] = "INTERFACE_PREFIX";
    LintRule["InterfaceSuffix"] = "INTERFACE_SUFFIX";
    LintRule["MergedNonRepeatableDirectiveArguments"] = "MERGED_NON_REPEATABLE_DIRECTIVE_ARGUMENTS";
    LintRule["NoExecutableDirectiveIntersection"] = "NO_EXECUTABLE_DIRECTIVE_INTERSECTION";
    LintRule["ObjectPrefix"] = "OBJECT_PREFIX";
    LintRule["ObjectSuffix"] = "OBJECT_SUFFIX";
    LintRule["OverriddenFieldCanBeRemoved"] = "OVERRIDDEN_FIELD_CAN_BE_REMOVED";
    LintRule["OverrideDirectiveCanBeRemoved"] = "OVERRIDE_DIRECTIVE_CAN_BE_REMOVED";
    LintRule["QueryDocumentDeclaration"] = "QUERY_DOCUMENT_DECLARATION";
    LintRule["RestyFieldNames"] = "RESTY_FIELD_NAMES";
    LintRule["TagDirectiveUsesUnknownName"] = "TAG_DIRECTIVE_USES_UNKNOWN_NAME";
    LintRule["TypeNamesShouldBePascalCase"] = "TYPE_NAMES_SHOULD_BE_PASCAL_CASE";
    LintRule["TypePrefix"] = "TYPE_PREFIX";
    LintRule["TypeSuffix"] = "TYPE_SUFFIX";
    LintRule["UnusedEnumType"] = "UNUSED_ENUM_TYPE";
})(LintRule = exports.LintRule || (exports.LintRule = {}));
/** The category used for grouping similar rules. */
var LinterRuleCategory;
(function (LinterRuleCategory) {
    /** These rules are generated during composition. */
    LinterRuleCategory["Composition"] = "COMPOSITION";
    /** These rules enforce naming conventions. */
    LinterRuleCategory["Naming"] = "NAMING";
    /** These rules define conventions for the entire schema and directive usage outside of composition. */
    LinterRuleCategory["Other"] = "OTHER";
})(LinterRuleCategory = exports.LinterRuleCategory || (exports.LinterRuleCategory = {}));
/** Level of the log entry */
var LogLevel;
(function (LogLevel) {
    /** Debug log entry */
    LogLevel["Debug"] = "DEBUG";
    /** Error log entry */
    LogLevel["Error"] = "ERROR";
    /** Informational log entry */
    LogLevel["Info"] = "INFO";
    /** Warning log entry */
    LogLevel["Warn"] = "WARN";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var LoginFlowSource;
(function (LoginFlowSource) {
    LoginFlowSource["InternalSso"] = "INTERNAL_SSO";
})(LoginFlowSource = exports.LoginFlowSource || (exports.LoginFlowSource = {}));
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus["All"] = "ALL";
    NotificationStatus["None"] = "NONE";
})(NotificationStatus = exports.NotificationStatus || (exports.NotificationStatus = {}));
var OnboardingArchitecture;
(function (OnboardingArchitecture) {
    OnboardingArchitecture["Monolith"] = "MONOLITH";
    OnboardingArchitecture["Supergraph"] = "SUPERGRAPH";
})(OnboardingArchitecture = exports.OnboardingArchitecture || (exports.OnboardingArchitecture = {}));
/** Columns of OperationCheckStats. */
var OperationCheckStatsColumn;
(function (OperationCheckStatsColumn) {
    OperationCheckStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    OperationCheckStatsColumn["ClientName"] = "CLIENT_NAME";
    OperationCheckStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    OperationCheckStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    OperationCheckStatsColumn["OperationType"] = "OPERATION_TYPE";
    OperationCheckStatsColumn["QueryId"] = "QUERY_ID";
    OperationCheckStatsColumn["QueryName"] = "QUERY_NAME";
    OperationCheckStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    OperationCheckStatsColumn["ServiceId"] = "SERVICE_ID";
    OperationCheckStatsColumn["Timestamp"] = "TIMESTAMP";
    OperationCheckStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(OperationCheckStatsColumn = exports.OperationCheckStatsColumn || (exports.OperationCheckStatsColumn = {}));
var OperationInsightsListOrderByColumn;
(function (OperationInsightsListOrderByColumn) {
    OperationInsightsListOrderByColumn["CacheHitRate"] = "CACHE_HIT_RATE";
    OperationInsightsListOrderByColumn["CacheTtlP50"] = "CACHE_TTL_P50";
    OperationInsightsListOrderByColumn["ErrorCount"] = "ERROR_COUNT";
    OperationInsightsListOrderByColumn["ErrorCountPerMin"] = "ERROR_COUNT_PER_MIN";
    OperationInsightsListOrderByColumn["ErrorPercentage"] = "ERROR_PERCENTAGE";
    OperationInsightsListOrderByColumn["OperationName"] = "OPERATION_NAME";
    OperationInsightsListOrderByColumn["RequestCount"] = "REQUEST_COUNT";
    OperationInsightsListOrderByColumn["RequestCountPerMin"] = "REQUEST_COUNT_PER_MIN";
    OperationInsightsListOrderByColumn["ServiceTimeP50"] = "SERVICE_TIME_P50";
    OperationInsightsListOrderByColumn["ServiceTimeP90"] = "SERVICE_TIME_P90";
    OperationInsightsListOrderByColumn["ServiceTimeP95"] = "SERVICE_TIME_P95";
    OperationInsightsListOrderByColumn["ServiceTimeP99"] = "SERVICE_TIME_P99";
    OperationInsightsListOrderByColumn["SignatureBytes"] = "SIGNATURE_BYTES";
    OperationInsightsListOrderByColumn["TotalDurationMs"] = "TOTAL_DURATION_MS";
})(OperationInsightsListOrderByColumn = exports.OperationInsightsListOrderByColumn || (exports.OperationInsightsListOrderByColumn = {}));
var OperationType;
(function (OperationType) {
    OperationType["Mutation"] = "MUTATION";
    OperationType["Query"] = "QUERY";
    OperationType["Subscription"] = "SUBSCRIPTION";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
/** Represents the different status for an order */
var OrderStatus;
(function (OrderStatus) {
    /** Order was successfully completed */
    OrderStatus["Completed"] = "COMPLETED";
    /** Order was unsuccessful */
    OrderStatus["Errored"] = "ERRORED";
    /** New Order in progress */
    OrderStatus["Pending"] = "PENDING";
    /**
     * Order is currently rolling back
     *
     * All resources created as part of this Order are being deleted
     */
    OrderStatus["RollingBack"] = "ROLLING_BACK";
    /**
     * Order has been superseded by another, more recent order
     *
     * This can happen if two update orders arrive in close succession and we already
     * started to process the newer order first.
     */
    OrderStatus["Superseded"] = "SUPERSEDED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
/** Represents the different types of order */
var OrderType;
(function (OrderType) {
    /** Create a new Cloud Router */
    OrderType["CreateRouter"] = "CREATE_ROUTER";
    /** Destroy an existing Cloud Router */
    OrderType["DestroyRouter"] = "DESTROY_ROUTER";
    /** Update an existing Cloud Router */
    OrderType["UpdateRouter"] = "UPDATE_ROUTER";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var Ordering;
(function (Ordering) {
    Ordering["Ascending"] = "ASCENDING";
    Ordering["Descending"] = "DESCENDING";
})(Ordering = exports.Ordering || (exports.Ordering = {}));
var OrganizationSsoProvider;
(function (OrganizationSsoProvider) {
    OrganizationSsoProvider["Apollo"] = "APOLLO";
    OrganizationSsoProvider["Pingone"] = "PINGONE";
})(OrganizationSsoProvider = exports.OrganizationSsoProvider || (exports.OrganizationSsoProvider = {}));
/** The status of an association between a private subgraph and your Apollo account */
var PrivateSubgraphShareStatus;
(function (PrivateSubgraphShareStatus) {
    /** The private subgraph is connected to the Apollo service network */
    PrivateSubgraphShareStatus["Connected"] = "CONNECTED";
    /** The private subgraph is disconnected to the Apollo service network */
    PrivateSubgraphShareStatus["Disconnected"] = "DISCONNECTED";
    /** The private subgraph's connection to the Apollo service network has errored */
    PrivateSubgraphShareStatus["Errored"] = "ERRORED";
    /** The private subgraph's connection is pending */
    PrivateSubgraphShareStatus["Pending"] = "PENDING";
    /** The private subgraph's disconnection is pending */
    PrivateSubgraphShareStatus["PendingDisconnection"] = "PENDING_DISCONNECTION";
    /** The current state of the association is unknown */
    PrivateSubgraphShareStatus["Unknown"] = "UNKNOWN";
})(PrivateSubgraphShareStatus = exports.PrivateSubgraphShareStatus || (exports.PrivateSubgraphShareStatus = {}));
var PromoteSchemaErrorCode;
(function (PromoteSchemaErrorCode) {
    PromoteSchemaErrorCode["CannotPromoteSchemaForFederatedGraph"] = "CANNOT_PROMOTE_SCHEMA_FOR_FEDERATED_GRAPH";
})(PromoteSchemaErrorCode = exports.PromoteSchemaErrorCode || (exports.PromoteSchemaErrorCode = {}));
var PromoteSchemaResponseCode;
(function (PromoteSchemaResponseCode) {
    PromoteSchemaResponseCode["NoChangesDetected"] = "NO_CHANGES_DETECTED";
    PromoteSchemaResponseCode["PromotionSuccess"] = "PROMOTION_SUCCESS";
})(PromoteSchemaResponseCode = exports.PromoteSchemaResponseCode || (exports.PromoteSchemaResponseCode = {}));
var ProposalActivityAction;
(function (ProposalActivityAction) {
    /** When the system changes a Proposal's status back to OPEN from APPROVED when approvals drop below min approvals. */
    ProposalActivityAction["ApprovalWithdrawn"] = "APPROVAL_WITHDRAWN";
    /** When the system changes a Proposal's status back to OPEN from APPROVED when a change is made after a proposal or review is approved. */
    ProposalActivityAction["ApprovalWithdrawnOnPublish"] = "APPROVAL_WITHDRAWN_ON_PUBLISH";
    /** When a user manually sets a Proposal to Close */
    ProposalActivityAction["CloseProposal"] = "CLOSE_PROPOSAL";
    /** When a Comment is added to a Proposal. */
    ProposalActivityAction["CommentAdded"] = "COMMENT_ADDED";
    /** When a subgraph in a Proposal is deleted. */
    ProposalActivityAction["DeleteSubgraph"] = "DELETE_SUBGRAPH";
    /** When a diff in a Proposal publish is found to already be in the Implementation target variant that fully implements the Proposal. Status of the Proposal will change to IMPLEMENTED. */
    ProposalActivityAction["FullyImplementedProposalOrigin"] = "FULLY_IMPLEMENTED_PROPOSAL_ORIGIN";
    /**  When a diff in an Implementation variant publish is found in a Proposal that fully implements the Proposal. Status of the Proposal will change to IMPLEMENTED. */
    ProposalActivityAction["FullyImplementedVariantOrigin"] = "FULLY_IMPLEMENTED_VARIANT_ORIGIN";
    /** When the system changes a Proposal's status to APPROVED when the min approvals have been met. */
    ProposalActivityAction["MetMinApprovalsProposal"] = "MET_MIN_APPROVALS_PROPOSAL";
    /** When a user manually sets a Proposal to Open */
    ProposalActivityAction["OpenProposal"] = "OPEN_PROPOSAL";
    /** When a diff in a Proposal publish is found to already be in the Implementation target variant that partially implements the Proposal. Does not change the status of the Proposal, but isPartiallyImplemented will return true. */
    ProposalActivityAction["PartiallyImplementedProposalOrigin"] = "PARTIALLY_IMPLEMENTED_PROPOSAL_ORIGIN";
    /** When a diff in an Implementation variant publish is found in a Proposal that partially implements the Proposal. Does not change the status of the Proposal, but isPartiallyImplemented will return true. */
    ProposalActivityAction["PartiallyImplementedVariantOrigin"] = "PARTIALLY_IMPLEMENTED_VARIANT_ORIGIN";
    /** When a new revision is published to subgraphs in a Proposal. */
    ProposalActivityAction["PublishSubgraphs"] = "PUBLISH_SUBGRAPHS";
    /** When a Proposal is moved to DRAFT from another status not on creation. */
    ProposalActivityAction["ReturnToDraftProposal"] = "RETURN_TO_DRAFT_PROPOSAL";
    /** When a Review is added to a Proposal. */
    ProposalActivityAction["ReviewAdded"] = "REVIEW_ADDED";
})(ProposalActivityAction = exports.ProposalActivityAction || (exports.ProposalActivityAction = {}));
var ProposalChangeMismatchSeverity;
(function (ProposalChangeMismatchSeverity) {
    ProposalChangeMismatchSeverity["Error"] = "ERROR";
    ProposalChangeMismatchSeverity["Off"] = "OFF";
    ProposalChangeMismatchSeverity["Warn"] = "WARN";
})(ProposalChangeMismatchSeverity = exports.ProposalChangeMismatchSeverity || (exports.ProposalChangeMismatchSeverity = {}));
var ProposalCoverage;
(function (ProposalCoverage) {
    ProposalCoverage["Full"] = "FULL";
    ProposalCoverage["None"] = "NONE";
    ProposalCoverage["Overridden"] = "OVERRIDDEN";
    ProposalCoverage["Partial"] = "PARTIAL";
    ProposalCoverage["Pending"] = "PENDING";
})(ProposalCoverage = exports.ProposalCoverage || (exports.ProposalCoverage = {}));
var ProposalLifecycleEvent;
(function (ProposalLifecycleEvent) {
    ProposalLifecycleEvent["ProposalCreated"] = "PROPOSAL_CREATED";
    ProposalLifecycleEvent["RevisionSaved"] = "REVISION_SAVED";
    ProposalLifecycleEvent["StatusChange"] = "STATUS_CHANGE";
})(ProposalLifecycleEvent = exports.ProposalLifecycleEvent || (exports.ProposalLifecycleEvent = {}));
var ProposalRevisionHistoryOrder;
(function (ProposalRevisionHistoryOrder) {
    /** List revisions from oldest to newest. */
    ProposalRevisionHistoryOrder["CreatedAsc"] = "CREATED_ASC";
    /** List revisions from newest to oldest, default. */
    ProposalRevisionHistoryOrder["CreatedDesc"] = "CREATED_DESC";
})(ProposalRevisionHistoryOrder = exports.ProposalRevisionHistoryOrder || (exports.ProposalRevisionHistoryOrder = {}));
var ProposalStatus;
(function (ProposalStatus) {
    ProposalStatus["Approved"] = "APPROVED";
    ProposalStatus["Closed"] = "CLOSED";
    ProposalStatus["Draft"] = "DRAFT";
    ProposalStatus["Implemented"] = "IMPLEMENTED";
    ProposalStatus["Open"] = "OPEN";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
/** Columns of QueryStats. */
var QueryStatsColumn;
(function (QueryStatsColumn) {
    QueryStatsColumn["AccountId"] = "ACCOUNT_ID";
    QueryStatsColumn["CachedHistogram"] = "CACHED_HISTOGRAM";
    QueryStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    QueryStatsColumn["CacheTtlHistogram"] = "CACHE_TTL_HISTOGRAM";
    QueryStatsColumn["ClientName"] = "CLIENT_NAME";
    QueryStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    QueryStatsColumn["ForbiddenOperationCount"] = "FORBIDDEN_OPERATION_COUNT";
    QueryStatsColumn["FromEngineproxy"] = "FROM_ENGINEPROXY";
    QueryStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    QueryStatsColumn["OperationType"] = "OPERATION_TYPE";
    QueryStatsColumn["QueryId"] = "QUERY_ID";
    QueryStatsColumn["QueryName"] = "QUERY_NAME";
    QueryStatsColumn["RegisteredOperationCount"] = "REGISTERED_OPERATION_COUNT";
    QueryStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    QueryStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    QueryStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    QueryStatsColumn["ServiceId"] = "SERVICE_ID";
    QueryStatsColumn["Timestamp"] = "TIMESTAMP";
    QueryStatsColumn["UncachedHistogram"] = "UNCACHED_HISTOGRAM";
    QueryStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(QueryStatsColumn = exports.QueryStatsColumn || (exports.QueryStatsColumn = {}));
var QueryTriggerMetric;
(function (QueryTriggerMetric) {
    /** Number of requests within the window that resulted in an error. Ignores `percentile`. */
    QueryTriggerMetric["ErrorCount"] = "ERROR_COUNT";
    /** Number of error requests divided by total number of requests. Ignores `percentile`. */
    QueryTriggerMetric["ErrorPercentage"] = "ERROR_PERCENTAGE";
    /** Number of requests within the window. Ignores `percentile`. */
    QueryTriggerMetric["RequestCount"] = "REQUEST_COUNT";
    /** Request latency in ms. Requires `percentile`. */
    QueryTriggerMetric["RequestServiceTime"] = "REQUEST_SERVICE_TIME";
})(QueryTriggerMetric = exports.QueryTriggerMetric || (exports.QueryTriggerMetric = {}));
var QueryTriggerScope;
(function (QueryTriggerScope) {
    QueryTriggerScope["All"] = "ALL";
    QueryTriggerScope["Any"] = "ANY";
    QueryTriggerScope["Unrecognized"] = "UNRECOGNIZED";
})(QueryTriggerScope = exports.QueryTriggerScope || (exports.QueryTriggerScope = {}));
var QueryTriggerWindow;
(function (QueryTriggerWindow) {
    QueryTriggerWindow["FifteenMinutes"] = "FIFTEEN_MINUTES";
    QueryTriggerWindow["FiveMinutes"] = "FIVE_MINUTES";
    QueryTriggerWindow["OneMinute"] = "ONE_MINUTE";
    QueryTriggerWindow["Unrecognized"] = "UNRECOGNIZED";
})(QueryTriggerWindow = exports.QueryTriggerWindow || (exports.QueryTriggerWindow = {}));
/** Responsibility for an errored order */
var ReasonCause;
(function (ReasonCause) {
    /**
     * Could not complete an order due to internal reason
     *
     * This could be due to intermittent issues, bug in our code, etc.
     */
    ReasonCause["Internal"] = "INTERNAL";
    /**
     * Could not complete an order due to invalid User input
     *
     * For example, the user provided an invalid router configuration or supergraph schema.
     */
    ReasonCause["User"] = "USER";
})(ReasonCause = exports.ReasonCause || (exports.ReasonCause = {}));
/** Possible state of a region */
var RegionState;
(function (RegionState) {
    /**
     * Active region
     *
     * Can be used for Cloud Routers
     */
    RegionState["Active"] = "ACTIVE";
    /** Does not appear in the API */
    RegionState["Hidden"] = "HIDDEN";
    /**
     * Inactive region
     *
     * Cannot yet be used for Cloud Routers
     */
    RegionState["Inactive"] = "INACTIVE";
})(RegionState = exports.RegionState || (exports.RegionState = {}));
var ReportSchemaErrorCode;
(function (ReportSchemaErrorCode) {
    ReportSchemaErrorCode["BootIdIsNotValidUuid"] = "BOOT_ID_IS_NOT_VALID_UUID";
    ReportSchemaErrorCode["BootIdIsRequired"] = "BOOT_ID_IS_REQUIRED";
    ReportSchemaErrorCode["CoreSchemaHashIsNotSchemaSha256"] = "CORE_SCHEMA_HASH_IS_NOT_SCHEMA_SHA256";
    ReportSchemaErrorCode["CoreSchemaHashIsRequired"] = "CORE_SCHEMA_HASH_IS_REQUIRED";
    ReportSchemaErrorCode["CoreSchemaHashIsTooLong"] = "CORE_SCHEMA_HASH_IS_TOO_LONG";
    ReportSchemaErrorCode["ExecutableSchemaIdIsNotSchemaSha256"] = "EXECUTABLE_SCHEMA_ID_IS_NOT_SCHEMA_SHA256";
    ReportSchemaErrorCode["ExecutableSchemaIdIsRequired"] = "EXECUTABLE_SCHEMA_ID_IS_REQUIRED";
    ReportSchemaErrorCode["ExecutableSchemaIdIsTooLong"] = "EXECUTABLE_SCHEMA_ID_IS_TOO_LONG";
    ReportSchemaErrorCode["GraphRefInvalidFormat"] = "GRAPH_REF_INVALID_FORMAT";
    ReportSchemaErrorCode["GraphRefIsRequired"] = "GRAPH_REF_IS_REQUIRED";
    ReportSchemaErrorCode["GraphVariantDoesNotMatchRegex"] = "GRAPH_VARIANT_DOES_NOT_MATCH_REGEX";
    ReportSchemaErrorCode["GraphVariantIsRequired"] = "GRAPH_VARIANT_IS_REQUIRED";
    ReportSchemaErrorCode["LibraryVersionIsTooLong"] = "LIBRARY_VERSION_IS_TOO_LONG";
    ReportSchemaErrorCode["PlatformIsTooLong"] = "PLATFORM_IS_TOO_LONG";
    ReportSchemaErrorCode["RuntimeVersionIsTooLong"] = "RUNTIME_VERSION_IS_TOO_LONG";
    ReportSchemaErrorCode["SchemaIsNotParsable"] = "SCHEMA_IS_NOT_PARSABLE";
    ReportSchemaErrorCode["SchemaIsNotValid"] = "SCHEMA_IS_NOT_VALID";
    ReportSchemaErrorCode["ServerIdIsTooLong"] = "SERVER_ID_IS_TOO_LONG";
    ReportSchemaErrorCode["UserVersionIsTooLong"] = "USER_VERSION_IS_TOO_LONG";
})(ReportSchemaErrorCode = exports.ReportSchemaErrorCode || (exports.ReportSchemaErrorCode = {}));
var Resolution;
(function (Resolution) {
    Resolution["R1D"] = "R1D";
    Resolution["R1H"] = "R1H";
    Resolution["R1M"] = "R1M";
    Resolution["R5M"] = "R5M";
    Resolution["R6H"] = "R6H";
    Resolution["R15M"] = "R15M";
})(Resolution = exports.Resolution || (exports.Resolution = {}));
var ResponseHints;
(function (ResponseHints) {
    ResponseHints["None"] = "NONE";
    ResponseHints["SampleResponses"] = "SAMPLE_RESPONSES";
    ResponseHints["Subgraphs"] = "SUBGRAPHS";
    ResponseHints["Timings"] = "TIMINGS";
    ResponseHints["TraceTimings"] = "TRACE_TIMINGS";
})(ResponseHints = exports.ResponseHints || (exports.ResponseHints = {}));
var ReviewDecision;
(function (ReviewDecision) {
    ReviewDecision["Approved"] = "APPROVED";
    ReviewDecision["NotApproved"] = "NOT_APPROVED";
})(ReviewDecision = exports.ReviewDecision || (exports.ReviewDecision = {}));
var RouterEntitlementAudience;
(function (RouterEntitlementAudience) {
    /** Routers in Apollo hosted cloud. */
    RouterEntitlementAudience["Cloud"] = "CLOUD";
    /** Routers in offline environments with license files supplied from a URL or locally. */
    RouterEntitlementAudience["Offline"] = "OFFLINE";
    /** Routers in self-hosted environments fetching their license from uplink. */
    RouterEntitlementAudience["SelfHosted"] = "SELF_HOSTED";
})(RouterEntitlementAudience = exports.RouterEntitlementAudience || (exports.RouterEntitlementAudience = {}));
/** Current status of Cloud Routers */
var RouterStatus;
(function (RouterStatus) {
    /** Cloud Router is not yet provisioned */
    RouterStatus["Creating"] = "CREATING";
    /** Router has been deleted */
    RouterStatus["Deleted"] = "DELETED";
    /**
     * Cloud Router is running, but currently being deleted
     *
     * This is the only mutation state that doesn't support rollback. If we fail to
     * delete a Router, the workflows are configured to stop and keep the router into
     * the Deleting status.
     */
    RouterStatus["Deleting"] = "DELETING";
    /**
     * Current order is rolling back to the last known good state
     *
     * After a RollingBack state, a Router can move either into Running state (from a
     * Update order) or Deleted (from a Create order).
     *
     * If we fail to roll back, the workflows are configured to stop and keep the router
     * into the RollingBack status.
     */
    RouterStatus["RollingBack"] = "ROLLING_BACK";
    /** Current router is running and able to server requests */
    RouterStatus["Running"] = "RUNNING";
    /** Router has been put to sleep. This state should only be possible for Serverless routers */
    RouterStatus["Sleeping"] = "SLEEPING";
    /** Cloud Router is running, but currently being updated */
    RouterStatus["Updating"] = "UPDATING";
})(RouterStatus = exports.RouterStatus || (exports.RouterStatus = {}));
var SchemaTagHistoryOrder;
(function (SchemaTagHistoryOrder) {
    SchemaTagHistoryOrder["CreatedAsc"] = "CREATED_ASC";
    SchemaTagHistoryOrder["CreatedDesc"] = "CREATED_DESC";
})(SchemaTagHistoryOrder = exports.SchemaTagHistoryOrder || (exports.SchemaTagHistoryOrder = {}));
/** Columns of ServiceBillingUsageStats. */
var ServiceBillingUsageStatsColumn;
(function (ServiceBillingUsageStatsColumn) {
    ServiceBillingUsageStatsColumn["AgentVersion"] = "AGENT_VERSION";
    ServiceBillingUsageStatsColumn["GraphDeploymentType"] = "GRAPH_DEPLOYMENT_TYPE";
    ServiceBillingUsageStatsColumn["OperationCount"] = "OPERATION_COUNT";
    ServiceBillingUsageStatsColumn["OperationCountProvidedExplicitly"] = "OPERATION_COUNT_PROVIDED_EXPLICITLY";
    ServiceBillingUsageStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    ServiceBillingUsageStatsColumn["OperationType"] = "OPERATION_TYPE";
    ServiceBillingUsageStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceBillingUsageStatsColumn["Timestamp"] = "TIMESTAMP";
})(ServiceBillingUsageStatsColumn = exports.ServiceBillingUsageStatsColumn || (exports.ServiceBillingUsageStatsColumn = {}));
/** Columns of ServiceCoordinateUsage. */
var ServiceCoordinateUsageColumn;
(function (ServiceCoordinateUsageColumn) {
    ServiceCoordinateUsageColumn["ClientName"] = "CLIENT_NAME";
    ServiceCoordinateUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceCoordinateUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    ServiceCoordinateUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    ServiceCoordinateUsageColumn["Kind"] = "KIND";
    ServiceCoordinateUsageColumn["NamedAttribute"] = "NAMED_ATTRIBUTE";
    ServiceCoordinateUsageColumn["NamedType"] = "NAMED_TYPE";
    ServiceCoordinateUsageColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    ServiceCoordinateUsageColumn["OperationType"] = "OPERATION_TYPE";
    ServiceCoordinateUsageColumn["QueryId"] = "QUERY_ID";
    ServiceCoordinateUsageColumn["QueryName"] = "QUERY_NAME";
    ServiceCoordinateUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    ServiceCoordinateUsageColumn["RequestCountNull"] = "REQUEST_COUNT_NULL";
    ServiceCoordinateUsageColumn["RequestCountUndefined"] = "REQUEST_COUNT_UNDEFINED";
    ServiceCoordinateUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceCoordinateUsageColumn["Timestamp"] = "TIMESTAMP";
})(ServiceCoordinateUsageColumn = exports.ServiceCoordinateUsageColumn || (exports.ServiceCoordinateUsageColumn = {}));
/** Columns of ServiceEdgeServerInfos. */
var ServiceEdgeServerInfosColumn;
(function (ServiceEdgeServerInfosColumn) {
    ServiceEdgeServerInfosColumn["BootId"] = "BOOT_ID";
    ServiceEdgeServerInfosColumn["ExecutableSchemaId"] = "EXECUTABLE_SCHEMA_ID";
    ServiceEdgeServerInfosColumn["LibraryVersion"] = "LIBRARY_VERSION";
    ServiceEdgeServerInfosColumn["Platform"] = "PLATFORM";
    ServiceEdgeServerInfosColumn["RuntimeVersion"] = "RUNTIME_VERSION";
    ServiceEdgeServerInfosColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceEdgeServerInfosColumn["ServerId"] = "SERVER_ID";
    ServiceEdgeServerInfosColumn["Timestamp"] = "TIMESTAMP";
    ServiceEdgeServerInfosColumn["UserVersion"] = "USER_VERSION";
})(ServiceEdgeServerInfosColumn = exports.ServiceEdgeServerInfosColumn || (exports.ServiceEdgeServerInfosColumn = {}));
/** Columns of ServiceErrorStats. */
var ServiceErrorStatsColumn;
(function (ServiceErrorStatsColumn) {
    ServiceErrorStatsColumn["ClientName"] = "CLIENT_NAME";
    ServiceErrorStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceErrorStatsColumn["ErrorsCount"] = "ERRORS_COUNT";
    ServiceErrorStatsColumn["Path"] = "PATH";
    ServiceErrorStatsColumn["QueryId"] = "QUERY_ID";
    ServiceErrorStatsColumn["QueryName"] = "QUERY_NAME";
    ServiceErrorStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    ServiceErrorStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceErrorStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceErrorStatsColumn["Timestamp"] = "TIMESTAMP";
})(ServiceErrorStatsColumn = exports.ServiceErrorStatsColumn || (exports.ServiceErrorStatsColumn = {}));
/** Columns of ServiceFieldExecutions. */
var ServiceFieldExecutionsColumn;
(function (ServiceFieldExecutionsColumn) {
    ServiceFieldExecutionsColumn["ErrorsCount"] = "ERRORS_COUNT";
    ServiceFieldExecutionsColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    ServiceFieldExecutionsColumn["FieldName"] = "FIELD_NAME";
    ServiceFieldExecutionsColumn["ObservedExecutionCount"] = "OBSERVED_EXECUTION_COUNT";
    ServiceFieldExecutionsColumn["ParentType"] = "PARENT_TYPE";
    ServiceFieldExecutionsColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    ServiceFieldExecutionsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    ServiceFieldExecutionsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceFieldExecutionsColumn["Timestamp"] = "TIMESTAMP";
})(ServiceFieldExecutionsColumn = exports.ServiceFieldExecutionsColumn || (exports.ServiceFieldExecutionsColumn = {}));
/** Columns of ServiceFieldLatencies. */
var ServiceFieldLatenciesColumn;
(function (ServiceFieldLatenciesColumn) {
    ServiceFieldLatenciesColumn["FieldHistogram"] = "FIELD_HISTOGRAM";
    ServiceFieldLatenciesColumn["FieldName"] = "FIELD_NAME";
    ServiceFieldLatenciesColumn["ParentType"] = "PARENT_TYPE";
    ServiceFieldLatenciesColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceFieldLatenciesColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceFieldLatenciesColumn["Timestamp"] = "TIMESTAMP";
})(ServiceFieldLatenciesColumn = exports.ServiceFieldLatenciesColumn || (exports.ServiceFieldLatenciesColumn = {}));
/** Columns of ServiceFieldUsage. */
var ServiceFieldUsageColumn;
(function (ServiceFieldUsageColumn) {
    ServiceFieldUsageColumn["ClientName"] = "CLIENT_NAME";
    ServiceFieldUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceFieldUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    ServiceFieldUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    ServiceFieldUsageColumn["FieldName"] = "FIELD_NAME";
    ServiceFieldUsageColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    ServiceFieldUsageColumn["OperationType"] = "OPERATION_TYPE";
    ServiceFieldUsageColumn["ParentType"] = "PARENT_TYPE";
    ServiceFieldUsageColumn["QueryId"] = "QUERY_ID";
    ServiceFieldUsageColumn["QueryName"] = "QUERY_NAME";
    ServiceFieldUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    ServiceFieldUsageColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceFieldUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceFieldUsageColumn["Timestamp"] = "TIMESTAMP";
})(ServiceFieldUsageColumn = exports.ServiceFieldUsageColumn || (exports.ServiceFieldUsageColumn = {}));
/** Columns of ServiceGraphosCloudMetrics. */
var ServiceGraphosCloudMetricsColumn;
(function (ServiceGraphosCloudMetricsColumn) {
    ServiceGraphosCloudMetricsColumn["AgentVersion"] = "AGENT_VERSION";
    ServiceGraphosCloudMetricsColumn["CloudProvider"] = "CLOUD_PROVIDER";
    ServiceGraphosCloudMetricsColumn["ResponseSize"] = "RESPONSE_SIZE";
    ServiceGraphosCloudMetricsColumn["ResponseSizeThrottled"] = "RESPONSE_SIZE_THROTTLED";
    ServiceGraphosCloudMetricsColumn["RouterId"] = "ROUTER_ID";
    ServiceGraphosCloudMetricsColumn["RouterOperations"] = "ROUTER_OPERATIONS";
    ServiceGraphosCloudMetricsColumn["RouterOperationsThrottled"] = "ROUTER_OPERATIONS_THROTTLED";
    ServiceGraphosCloudMetricsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceGraphosCloudMetricsColumn["SubgraphFetches"] = "SUBGRAPH_FETCHES";
    ServiceGraphosCloudMetricsColumn["SubgraphFetchesThrottled"] = "SUBGRAPH_FETCHES_THROTTLED";
    ServiceGraphosCloudMetricsColumn["Tier"] = "TIER";
    ServiceGraphosCloudMetricsColumn["Timestamp"] = "TIMESTAMP";
})(ServiceGraphosCloudMetricsColumn = exports.ServiceGraphosCloudMetricsColumn || (exports.ServiceGraphosCloudMetricsColumn = {}));
/** Columns of ServiceOperationCheckStats. */
var ServiceOperationCheckStatsColumn;
(function (ServiceOperationCheckStatsColumn) {
    ServiceOperationCheckStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    ServiceOperationCheckStatsColumn["ClientName"] = "CLIENT_NAME";
    ServiceOperationCheckStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceOperationCheckStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    ServiceOperationCheckStatsColumn["OperationType"] = "OPERATION_TYPE";
    ServiceOperationCheckStatsColumn["QueryId"] = "QUERY_ID";
    ServiceOperationCheckStatsColumn["QueryName"] = "QUERY_NAME";
    ServiceOperationCheckStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceOperationCheckStatsColumn["Timestamp"] = "TIMESTAMP";
    ServiceOperationCheckStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(ServiceOperationCheckStatsColumn = exports.ServiceOperationCheckStatsColumn || (exports.ServiceOperationCheckStatsColumn = {}));
/** Columns of ServiceQueryStats. */
var ServiceQueryStatsColumn;
(function (ServiceQueryStatsColumn) {
    ServiceQueryStatsColumn["CachedHistogram"] = "CACHED_HISTOGRAM";
    ServiceQueryStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    ServiceQueryStatsColumn["CacheTtlHistogram"] = "CACHE_TTL_HISTOGRAM";
    ServiceQueryStatsColumn["ClientName"] = "CLIENT_NAME";
    ServiceQueryStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceQueryStatsColumn["ForbiddenOperationCount"] = "FORBIDDEN_OPERATION_COUNT";
    ServiceQueryStatsColumn["FromEngineproxy"] = "FROM_ENGINEPROXY";
    ServiceQueryStatsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    ServiceQueryStatsColumn["OperationType"] = "OPERATION_TYPE";
    ServiceQueryStatsColumn["QueryId"] = "QUERY_ID";
    ServiceQueryStatsColumn["QueryName"] = "QUERY_NAME";
    ServiceQueryStatsColumn["RegisteredOperationCount"] = "REGISTERED_OPERATION_COUNT";
    ServiceQueryStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    ServiceQueryStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceQueryStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceQueryStatsColumn["Timestamp"] = "TIMESTAMP";
    ServiceQueryStatsColumn["UncachedHistogram"] = "UNCACHED_HISTOGRAM";
    ServiceQueryStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(ServiceQueryStatsColumn = exports.ServiceQueryStatsColumn || (exports.ServiceQueryStatsColumn = {}));
/** Columns of ServiceTracePathErrorsRefs. */
var ServiceTracePathErrorsRefsColumn;
(function (ServiceTracePathErrorsRefsColumn) {
    ServiceTracePathErrorsRefsColumn["ClientName"] = "CLIENT_NAME";
    ServiceTracePathErrorsRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceTracePathErrorsRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    ServiceTracePathErrorsRefsColumn["ErrorsCountInPath"] = "ERRORS_COUNT_IN_PATH";
    ServiceTracePathErrorsRefsColumn["ErrorsCountInTrace"] = "ERRORS_COUNT_IN_TRACE";
    ServiceTracePathErrorsRefsColumn["ErrorMessage"] = "ERROR_MESSAGE";
    ServiceTracePathErrorsRefsColumn["Path"] = "PATH";
    ServiceTracePathErrorsRefsColumn["QueryId"] = "QUERY_ID";
    ServiceTracePathErrorsRefsColumn["QueryName"] = "QUERY_NAME";
    ServiceTracePathErrorsRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceTracePathErrorsRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceTracePathErrorsRefsColumn["Timestamp"] = "TIMESTAMP";
    ServiceTracePathErrorsRefsColumn["TraceHttpStatusCode"] = "TRACE_HTTP_STATUS_CODE";
    ServiceTracePathErrorsRefsColumn["TraceId"] = "TRACE_ID";
    ServiceTracePathErrorsRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
    ServiceTracePathErrorsRefsColumn["TraceStartsAt"] = "TRACE_STARTS_AT";
})(ServiceTracePathErrorsRefsColumn = exports.ServiceTracePathErrorsRefsColumn || (exports.ServiceTracePathErrorsRefsColumn = {}));
/** Columns of ServiceTraceRefs. */
var ServiceTraceRefsColumn;
(function (ServiceTraceRefsColumn) {
    ServiceTraceRefsColumn["ClientName"] = "CLIENT_NAME";
    ServiceTraceRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceTraceRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    ServiceTraceRefsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    ServiceTraceRefsColumn["OperationType"] = "OPERATION_TYPE";
    ServiceTraceRefsColumn["QueryId"] = "QUERY_ID";
    ServiceTraceRefsColumn["QueryName"] = "QUERY_NAME";
    ServiceTraceRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceTraceRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceTraceRefsColumn["Timestamp"] = "TIMESTAMP";
    ServiceTraceRefsColumn["TraceCount"] = "TRACE_COUNT";
    ServiceTraceRefsColumn["TraceId"] = "TRACE_ID";
})(ServiceTraceRefsColumn = exports.ServiceTraceRefsColumn || (exports.ServiceTraceRefsColumn = {}));
/** Current status of Cloud Shards */
var ShardStatus;
(function (ShardStatus) {
    /** The Shard is active and ready to accept new Cloud Routers */
    ShardStatus["Active"] = "ACTIVE";
    /** The Shard no long exists */
    ShardStatus["Deleted"] = "DELETED";
    /** The Shard is working as expected, but should not be used to provision new Cloud Routers */
    ShardStatus["Deprecated"] = "DEPRECATED";
    /**
     * The Shard is suffering from a temporary degradation that might impact provisioning new
     * Cloud Routers
     */
    ShardStatus["Impaired"] = "IMPAIRED";
    /**
     * The Shard is currently being updated and should temporarily not be used to provision new
     * Cloud Routers
     */
    ShardStatus["Updating"] = "UPDATING";
})(ShardStatus = exports.ShardStatus || (exports.ShardStatus = {}));
var SlackPublishState;
(function (SlackPublishState) {
    SlackPublishState["Errored"] = "errored";
    SlackPublishState["Published"] = "published";
    SlackPublishState["Recalled"] = "recalled";
})(SlackPublishState = exports.SlackPublishState || (exports.SlackPublishState = {}));
var SsoConnectionState;
(function (SsoConnectionState) {
    SsoConnectionState["Disabled"] = "DISABLED";
    SsoConnectionState["Enabled"] = "ENABLED";
})(SsoConnectionState = exports.SsoConnectionState || (exports.SsoConnectionState = {}));
var State;
(function (State) {
    State["Approved"] = "approved";
    State["Denied"] = "denied";
    State["Errored"] = "errored";
    State["Pending"] = "pending";
    State["Published"] = "published";
})(State = exports.State || (exports.State = {}));
/** Possible status of a Cloud Router version */
var Status;
(function (Status) {
    /**
     * Deprecated version of a Cloud Router
     *
     * New Cloud Routers should not use this version, and this will not be
     * supported at some point in the future.
     */
    Status["Deprecated"] = "DEPRECATED";
    /**
     * Upcoming or experimental version of a Cloud Router
     *
     * This should only be used internally, or to preview new features to
     * customers.
     */
    Status["Next"] = "NEXT";
    /** Cloud Router Version is ready to be used by end users */
    Status["Stable"] = "STABLE";
})(Status = exports.Status || (exports.Status = {}));
var StoreSchemaErrorCode;
(function (StoreSchemaErrorCode) {
    StoreSchemaErrorCode["SchemaIsNotParsable"] = "SCHEMA_IS_NOT_PARSABLE";
    StoreSchemaErrorCode["SchemaIsNotValid"] = "SCHEMA_IS_NOT_VALID";
})(StoreSchemaErrorCode = exports.StoreSchemaErrorCode || (exports.StoreSchemaErrorCode = {}));
var SubgraphChangeType;
(function (SubgraphChangeType) {
    SubgraphChangeType["Addition"] = "ADDITION";
    SubgraphChangeType["Deletion"] = "DELETION";
    SubgraphChangeType["Modification"] = "MODIFICATION";
})(SubgraphChangeType = exports.SubgraphChangeType || (exports.SubgraphChangeType = {}));
var SubscriptionState;
(function (SubscriptionState) {
    SubscriptionState["Active"] = "ACTIVE";
    SubscriptionState["Canceled"] = "CANCELED";
    SubscriptionState["Expired"] = "EXPIRED";
    SubscriptionState["Future"] = "FUTURE";
    SubscriptionState["PastDue"] = "PAST_DUE";
    SubscriptionState["Paused"] = "PAUSED";
    SubscriptionState["Pending"] = "PENDING";
    SubscriptionState["Unknown"] = "UNKNOWN";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
var ThemeName;
(function (ThemeName) {
    ThemeName["Dark"] = "DARK";
    ThemeName["Light"] = "LIGHT";
})(ThemeName = exports.ThemeName || (exports.ThemeName = {}));
var TicketPriority;
(function (TicketPriority) {
    TicketPriority["P0"] = "P0";
    TicketPriority["P1"] = "P1";
    TicketPriority["P2"] = "P2";
    TicketPriority["P3"] = "P3";
})(TicketPriority = exports.TicketPriority || (exports.TicketPriority = {}));
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["Closed"] = "CLOSED";
    TicketStatus["Hold"] = "HOLD";
    TicketStatus["New"] = "NEW";
    TicketStatus["Open"] = "OPEN";
    TicketStatus["Pending"] = "PENDING";
    TicketStatus["Solved"] = "SOLVED";
})(TicketStatus = exports.TicketStatus || (exports.TicketStatus = {}));
/** Columns of TracePathErrorsRefs. */
var TracePathErrorsRefsColumn;
(function (TracePathErrorsRefsColumn) {
    TracePathErrorsRefsColumn["ClientName"] = "CLIENT_NAME";
    TracePathErrorsRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    TracePathErrorsRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    TracePathErrorsRefsColumn["ErrorsCountInPath"] = "ERRORS_COUNT_IN_PATH";
    TracePathErrorsRefsColumn["ErrorsCountInTrace"] = "ERRORS_COUNT_IN_TRACE";
    TracePathErrorsRefsColumn["ErrorMessage"] = "ERROR_MESSAGE";
    TracePathErrorsRefsColumn["Path"] = "PATH";
    TracePathErrorsRefsColumn["QueryId"] = "QUERY_ID";
    TracePathErrorsRefsColumn["QueryName"] = "QUERY_NAME";
    TracePathErrorsRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    TracePathErrorsRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    TracePathErrorsRefsColumn["ServiceId"] = "SERVICE_ID";
    TracePathErrorsRefsColumn["Timestamp"] = "TIMESTAMP";
    TracePathErrorsRefsColumn["TraceHttpStatusCode"] = "TRACE_HTTP_STATUS_CODE";
    TracePathErrorsRefsColumn["TraceId"] = "TRACE_ID";
    TracePathErrorsRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
    TracePathErrorsRefsColumn["TraceStartsAt"] = "TRACE_STARTS_AT";
})(TracePathErrorsRefsColumn = exports.TracePathErrorsRefsColumn || (exports.TracePathErrorsRefsColumn = {}));
/** Columns of TraceRefs. */
var TraceRefsColumn;
(function (TraceRefsColumn) {
    TraceRefsColumn["ClientName"] = "CLIENT_NAME";
    TraceRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    TraceRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    TraceRefsColumn["OperationSubtype"] = "OPERATION_SUBTYPE";
    TraceRefsColumn["OperationType"] = "OPERATION_TYPE";
    TraceRefsColumn["QueryId"] = "QUERY_ID";
    TraceRefsColumn["QueryName"] = "QUERY_NAME";
    TraceRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    TraceRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    TraceRefsColumn["ServiceId"] = "SERVICE_ID";
    TraceRefsColumn["Timestamp"] = "TIMESTAMP";
    TraceRefsColumn["TraceCount"] = "TRACE_COUNT";
    TraceRefsColumn["TraceId"] = "TRACE_ID";
})(TraceRefsColumn = exports.TraceRefsColumn || (exports.TraceRefsColumn = {}));
var UserPermission;
(function (UserPermission) {
    UserPermission["BillingManager"] = "BILLING_MANAGER";
    UserPermission["Consumer"] = "CONSUMER";
    UserPermission["Contributor"] = "CONTRIBUTOR";
    UserPermission["Documenter"] = "DOCUMENTER";
    UserPermission["GraphAdmin"] = "GRAPH_ADMIN";
    UserPermission["LegacyGraphKey"] = "LEGACY_GRAPH_KEY";
    UserPermission["Observer"] = "OBSERVER";
    UserPermission["OrgAdmin"] = "ORG_ADMIN";
    UserPermission["PersistedQueryPublisher"] = "PERSISTED_QUERY_PUBLISHER";
})(UserPermission = exports.UserPermission || (exports.UserPermission = {}));
var UserSegment;
(function (UserSegment) {
    UserSegment["JoinMyTeam"] = "JOIN_MY_TEAM";
    UserSegment["LocalDevelopment"] = "LOCAL_DEVELOPMENT";
    UserSegment["NotSpecified"] = "NOT_SPECIFIED";
    UserSegment["Odyssey"] = "ODYSSEY";
    UserSegment["ProductionGraphs"] = "PRODUCTION_GRAPHS";
    UserSegment["Sandbox"] = "SANDBOX";
    UserSegment["SandboxOperationCollections"] = "SANDBOX_OPERATION_COLLECTIONS";
    UserSegment["SandboxPreflightScripts"] = "SANDBOX_PREFLIGHT_SCRIPTS";
    UserSegment["TryTeam"] = "TRY_TEAM";
})(UserSegment = exports.UserSegment || (exports.UserSegment = {}));
var UserType;
(function (UserType) {
    UserType["Apollo"] = "APOLLO";
    UserType["Github"] = "GITHUB";
    UserType["Sso"] = "SSO";
})(UserType = exports.UserType || (exports.UserType = {}));
var ValidationErrorCode;
(function (ValidationErrorCode) {
    ValidationErrorCode["DeprecatedField"] = "DEPRECATED_FIELD";
    ValidationErrorCode["InvalidOperation"] = "INVALID_OPERATION";
    ValidationErrorCode["NonParseableDocument"] = "NON_PARSEABLE_DOCUMENT";
})(ValidationErrorCode = exports.ValidationErrorCode || (exports.ValidationErrorCode = {}));
var ValidationErrorType;
(function (ValidationErrorType) {
    ValidationErrorType["Failure"] = "FAILURE";
    ValidationErrorType["Invalid"] = "INVALID";
    ValidationErrorType["Warning"] = "WARNING";
})(ValidationErrorType = exports.ValidationErrorType || (exports.ValidationErrorType = {}));
exports.Bvr_Cli_FieldRecordsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_FieldRecords" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "includeDeleted" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Boolean" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "graphs" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "includeDeleted" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "includeDeleted" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "graphType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "variants" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "graphId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPublication" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publishedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "diffToPrevious" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "tag" } }, { "kind": "Field", "name": { "kind": "Name", "value": "changes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "category" } }, { "kind": "Field", "name": { "kind": "Name", "value": "severity" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "childNode" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "printedType" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "parentNode" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "kind" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }] } }] } }] } }] } }] } }] } }] } }] };
exports.Bvr_Cli_FieldUsageDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_FieldUsage" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Resolution" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "to" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "graphs" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "statsWindow" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "from" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "resolution" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "to" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "to" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fieldUsage" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "timestamp" } }, { "kind": "Field", "name": { "kind": "Name", "value": "groupBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fieldName" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "metrics" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "estimatedExecutionCount" } }] } }] } }] } }] } }] } }] } }] };
exports.Bvr_Cli_ClientUsageDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_ClientUsage" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Resolution" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "to" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "graphs" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "statsWindow" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "from" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "resolution" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "to" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "to" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fieldUsage" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "timestamp" } }, { "kind": "Field", "name": { "kind": "Name", "value": "groupBy" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "clientName" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "metrics" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "estimatedExecutionCount" } }] } }] } }] } }] } }] } }] } }] };
exports.Bvr_Cli_FieldChangeSummaryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_FieldChangeSummary" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "graphs" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "graphType" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "variants" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "graphId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPublication" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publishedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "historyLength" } }, { "kind": "Field", "name": { "kind": "Name", "value": "historyOrder" } }, { "kind": "Field", "name": { "kind": "Name", "value": "history" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publishedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "schema" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fieldCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "typeCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] } }] } }] } }] } }] } }] };
exports.Bvr_Cli_OdysseyStatsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_OdysseyStats" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "organization" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "memberships" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fullName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "lastAuthenticatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "emailVerified" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "odysseyCertifications" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "earnedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "certificationId" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "odysseyCourses" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "completedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "enrolledAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] } }] } }] } }] };
exports.Bvr_Cli_OperationCountsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_OperationCounts" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Resolution" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "to" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "organization" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "statsWindow" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "from" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "resolution" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "to" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "to" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "billingUsageStats" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "timestamp" } }, { "kind": "Field", "name": { "kind": "Name", "value": "metrics" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "operationCount" } }] } }] } }] } }] } }] } }] };
exports.Bvr_Cli_SchemaChecksDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_SchemaChecks" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Resolution" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "organization" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "registryStatsWindow" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "from" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "resolution" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "schemaCheckStats" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "metrics" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "totalFailedChecks" } }, { "kind": "Field", "name": { "kind": "Name", "value": "totalSuccessfulChecks" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "timestamp" } }] } }] } }] } }] } }] };
exports.Bvr_Cli_SchemaPublishesDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_SchemaPublishes" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Timestamp" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Resolution" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "organization" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "registryStatsWindow" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "from" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "from" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "resolution" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "resolution" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "schemaPublishStats" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "metrics" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "totalPublishes" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "timestamp" } }] } }] } }] } }] } }] };
exports.Bvr_Cli_VariantsInfoDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "BVR_CLI_VariantsInfo" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "organization" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "organizationId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "variants" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "graphId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "hasManagedSubgraphs" } }, { "kind": "Field", "name": { "kind": "Name", "value": "hasSupergraphSchema" } }, { "kind": "Field", "name": { "kind": "Name", "value": "derivedVariantCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isContract" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isProtected" } }, { "kind": "Field", "name": { "kind": "Name", "value": "compositionVersion" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPublic" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPubliclyListed" } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestPublication" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "publishedAt" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "latestApprovedLaunch" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "completedAt" } }] } }] } }] } }] } }] } }] };
