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
import { registerHooks } from "node:module";

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

// The preset loads the Tamagui config with a native `import()`, and the
// generated config imports `./default-config` without an extension, which
// Node cannot resolve. Retry failed relative imports with `.ts`.
registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (error) {
      if (
        error?.code !== "ERR_MODULE_NOT_FOUND" ||
        !specifier.startsWith(".")
      ) {
        throw error;
      }

      return nextResolve(`${specifier}.ts`, context);
    }
  }
});

const { default: tamaguiConfig } =
  await import("./packages/tokens/src/tamagui/config.ts");
// The grammar currently classifies every theme key as a color. Exclude the
// shadow aliases from its color vocabulary; the runtime config stays intact.
const shadowThemeKeys = new Set([
  "ring",
  "ring-offset",
  "ring-subtle",
  "ring-subtle-offset"
]);
const lintThemes = Object.fromEntries(
  Object.entries(tamaguiConfig.themes).map(([name, theme]) => [
    name,
    Object.fromEntries(
      Object.entries(theme).filter(([key]) => !shadowThemeKeys.has(key))
    )
  ])
);

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
    },
    tamagui: {
      config: {
        ...tamaguiConfig,
        themes: lintThemes,
        tokensParsed: {
          ...tamaguiConfig.tokensParsed,
          // Razorwind calls the token group `shadow`; the grammar expects
          // `boxShadow`. Theme shadow aliases belong to that same vocabulary.
          boxShadow: {
            ...tamaguiConfig.tokensParsed.shadow,
            ...Object.fromEntries([...shadowThemeKeys].map(key => [key, true]))
          }
        }
      }
    },
    ignores: [
      "**/*.d.ts",
      "**/*.toml",
      ".design-sync",
      ".ds-sync",
      "docs/**",
      "skills/**",
      "apps/storybook/src/blocks/**/*.tsx",
      "packages/eslint-plugin/src/*.ts",
      "packages/eslint-plugin/src/INSTALL.md",
      "packages/stylelint-plugin/src/*.ts",
      "packages/stylelint-plugin/src/INSTALL.md",
      "packages/nextjs/test/**"
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
  },
  {
    files: ["**/*.tsx"],
    rules: {
      // React 19's `ReactNode` includes `Promise`, so this rule's autofix adds
      // `async` to render callbacks (`Children.map(async ...)`) and the
      // resulting Promise children suspend forever (Table/Stepper/DataTable).
      "ts/promise-function-async": "off"
    }
  }
);
