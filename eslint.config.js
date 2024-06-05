const eslintPlugin = require("@storm-software/eslint-plugin/index.cjs");
// const baseConfig = require("@storm-software/eslint/base");
const { FlatCompat } = require("@eslint/eslintrc");

// module.exports = apply({
//   baseDirectory: __dirname,
//   useReact: true
// });

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintPlugin.configs.recommended,
  allConfig: undefined
});

module.exports = [
  { plugins: { "@storm-software": eslintPlugin } }
  // ...compat
  //   .config({
  //     parser: "jsonc-eslint-parser",
  //     extends: ["plugin:@storm-software/json"]
  //   })
  //   .map(config => ({
  //     ...config,
  //     files: ["**/*.json", "**/*.jsonc"],
  //     rules: {}
  //   })),
  // ...compat.config({ extends: ["plugin:@storm-software/yml"] }).map(config => ({
  //   ...config,
  //   files: ["**/*.yaml", "**/*.yml"],
  //   rules: {}
  // })),
  // ...compat.config({ extends: ["plugin:@storm-software/mdx"] }).map(config => ({
  //   ...config,
  //   files: ["**/*.md", "**/*.mdx"],
  //   rules: {}
  // })),
  // ...compat
  //   .config({ extends: ["plugin:@storm-software/javascript"] })
  //   .map(config => ({
  //     ...config,
  //     files: ["**/*.js", "**/*.jsx"],
  //     rules: {}
  //   })),
  // ...compat
  //   .config({ extends: ["plugin:@storm-software/jest"] })
  //   .map(config => ({
  //     ...config,
  //     files: [
  //       "**/*.test.ts",
  //       "**/*.test.tsx",
  //       "**/*.spec.ts",
  //       "**/*.spec.tsx",
  //       "**/*.spec.js",
  //       "**/*.spec.jsx"
  //     ],
  //     rules: {}
  //   })),
  // ...compat
  //   .config({
  //     extends: [
  //       "plugin:@storm-software/next",
  //       "plugin:@storm-software/react",
  //       "plugin:@storm-software/typescript"
  //     ]
  //   })
  //   .map(config => ({
  //     ...config,
  //     files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],
  //     rules: {}
  //   })),
  // ...compat
  //   .config({ extends: ["plugin:@storm-software/graphql"] })
  //   .map(config => ({
  //     ...config,
  //     files: ["**/*.gql", "**/*.graphql"],
  //     rules: {}
  //   }))
];
