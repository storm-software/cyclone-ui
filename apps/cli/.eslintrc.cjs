// @ts-ignore

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['oclif', 'oclif-typescript', 'prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['./package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@nx/dependency-checks': [
          'error',
          {
            buildTargets: ['build'],
            ignoredDependencies: ['typescript'],
          },
        ],
      },
    },
  ],
}

module.exports = config
