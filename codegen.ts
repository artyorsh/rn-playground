import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://graph.staging.timeless-internal.net/graphql',
  generates: {
    './graphql/': {
      preset: 'client',
      documents: ['./queries.ts'],
      config: {
        skipTypename: true,
        dedupeFragments: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
