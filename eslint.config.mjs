/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { defineConfig } from "@storm-software/eslint-config-react";

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig(
  {
    name: "cyclone-ui",
    nx: {
      depsCheck: false,
      enforceModuleBoundaries: false
    },
    tsdoc: {
      configFile: "@powerlines/tsdoc/recommended.json"
    }
  },
  {
    ignores: [
      "**/*.d.ts",
      "**/*.toml",
      "packages/themes/src/storybook/blocks/**/*.tsx"
    ]
  },
  {
    rules: {
      "@nx/enforce-module-boundaries": "off",
      // eslint-plugin-storybook@0.11 is incompatible with ESLint 10's
      // `context.getSourceCode()` API and crashes the lint run.
      "storybook/no-title-property-in-meta": "off",
      // Tamagui `styled()` / `.styleable()` APIs often resolve as error types
      // in ESLint's TypeScript project service.
      "ts/no-unsafe-call": "off",
      // Tamagui variant keys use names like `...size` and `:boolean`.
      "ts/naming-convention": "off",
      // eslint-plugin-pnpm does not parse unquoted catalog keys in
      // pnpm-workspace.yaml as valid catalog entries.
      "pnpm/json-valid-catalog": "off",
      "pnpm/json-enforce-catalog": "off",
      // Type+value companions (`export type Foo` + `export const Foo`) are
      // idiomatic throughout this repo.
      "ts/no-redeclare": "off",
      "ts/no-use-before-define": "off"
    }
  },
  {
    files: ["**/*.stories.@(ts|tsx)"],
    rules: {
      "react/rules-of-hooks": "off",
      "react-hooks/rules-of-hooks": "off"
    }
  },
  {
    files: ["components/**/*.tsx"],
    rules: {
      "react/no-context-provider": "off"
    }
  }
);
