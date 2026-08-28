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

import type { TsdownInputOption, UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

export type TSDownOptions = Partial<UserConfig> & Pick<UserConfig, "name">;

export const DEFAULT_OPTIONS: Omit<Partial<UserConfig>, "name"> = {
  target: "esnext",
  outDir: "dist",
  format: ["cjs", "esm"],
  cjsDefault: true,
  treeshake: true,
  clean: true,
  sourcemap: false,
  platform: "browser",
  inputOptions: {
    transform: {
      jsx: "preserve"
    }
  },
  tsconfig: "./tsconfig.json",
  minify: false,
  dts: true,
  shims: true,
  fixedExtension: true,
  nodeProtocol: true,
  unbundle: true,
  exports: {
    all: true
  },
  deps: {
    neverBundle: true
  }
};

function getNegativeTestPath(path: string) {
  if (
    !path.startsWith("!") &&
    !path.endsWith(".test.ts") &&
    !path.endsWith(".test.tsx") &&
    !path.endsWith(".test.{ts,tsx}")
  ) {
    if (path.endsWith(".ts")) {
      return `!${path.replace(/\.ts$/, ".test.ts")}`;
    } else if (path.endsWith(".tsx")) {
      return `!${path.replace(/\.tsx$/, ".test.tsx")}`;
    } else if (path.endsWith(".{ts,tsx}")) {
      return `!${path.replace(/\.\{ts,tsx\}$/, ".test.{ts,tsx}")}`;
    }
  }

  return undefined;
}

function updateEntry(entry: TsdownInputOption) {
  return Array.isArray(entry) || typeof entry === "string"
    ? (Array.isArray(entry) ? entry : [entry]).reduce(
        (acc, path) => {
          if (typeof path === "string") {
            acc.push(path);

            const testPath = getNegativeTestPath(path);
            if (testPath) {
              acc.push(testPath);
            }
          } else if (typeof path === "object") {
            acc.push(updateEntry(path) as Record<string, string | string[]>);
          }

          return acc;
        },
        [] as (string | Record<string, string | string[]>)[]
      )
    : Object.entries(entry).reduce(
        (acc, [key, value]) => {
          if (typeof value === "string") {
            acc[key] = [value];

            const testPath = getNegativeTestPath(value);
            if (testPath) {
              acc[key].push(testPath);
            }
          } else if (Array.isArray(value)) {
            acc[key] = value.reduce((acc, path) => {
              acc.push(path);

              const testPath = getNegativeTestPath(path);
              if (testPath) {
                acc.push(testPath);
              }

              return acc;
            }, [] as string[]);
          }

          return acc;
        },
        {} as Record<string, string | string[]>
      );
}

export function defineTSDownConfig(options: TSDownOptions | TSDownOptions[]) {
  return Array.isArray(options)
    ? defineConfig(
        options.map(option => ({
          ...DEFAULT_OPTIONS,
          onSuccess: async () => {
            // eslint-disable-next-line no-console
            console.log(` ✔ ${option.name} build completed successfully!`);
          },
          ...option,
          entry: updateEntry(option.entry ?? "!src/*.test.{ts,tsx}")
        }))
      )
    : defineConfig({
        ...DEFAULT_OPTIONS,
        onSuccess: async () => {
          // eslint-disable-next-line no-console
          console.log(` ✔ ${options.name} build completed successfully!`);
        },
        ...options,
        entry: updateEntry(options.entry ?? "!src/*.test.{ts,tsx}")
      });
}

export default defineTSDownConfig(DEFAULT_OPTIONS);
