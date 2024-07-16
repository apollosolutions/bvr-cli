
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://graphql.api.apollographql.com/api/graphql",
    documents: "src/**/*.ts",
    generates: {
        "src/gql/sdk.ts": {
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
            config: {
                scalars: {
                    Timestamp: "string | number",
                }
            }
        }
    },
};

export default config;
