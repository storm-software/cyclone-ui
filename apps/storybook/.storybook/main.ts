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

import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import type { StorybookConfig } from "@storybook/react-vite";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import reactNativeWeb from "vite-plugin-react-native-web";

const workspaceRoot = join(dirname(fileURLToPath(import.meta.url)), "../../..");

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

/**
 * Resolve a package directory in ESM (Storybook 10 loads `main.ts` as ESM).
 * Walks up from the resolved entry because many packages do not export `package.json`.
 */
function getAbsolutePath(value: string): string {
  let dir = dirname(fileURLToPath(import.meta.resolve(value)));

  while (dir !== dirname(dir)) {
    if (existsSync(join(dir, "package.json"))) {
      return dir;
    }

    dir = dirname(dir);
  }

  throw new Error(`Unable to resolve package directory for ${value}`);
}

/**
 * Resolve a package entry to an absolute file path.
 *
 * `@tamagui/vite-plugin` aliases `react-native-svg` to the bare specifier
 * `@tamagui/react-native-svg`. Vite then resolves that specifier from the
 * importing file (e.g. `components/vectors`), which cannot see Storybook's
 * dependency under pnpm isolation unless the alias is an absolute path.
 */
function resolvePackageFile(value: string): string {
  return fileURLToPath(import.meta.resolve(value));
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function exportFilePath(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return undefined;
  }

  const record = value as Record<string, unknown>;
  for (const key of ["import", "default", "require", "types"] as const) {
    const nested = exportFilePath(record[key]);
    if (nested) {
      return nested;
    }
  }

  return undefined;
}

function resolveSourceFile(
  pkgDir: string,
  exportPath: string
): string | undefined {
  const relative = exportPath.replace(/^\.\//, "");
  const absolute = join(pkgDir, relative);
  if (
    existsSync(absolute) &&
    /\.(?:[cm]?tsx?|jsx?)$/.test(absolute) &&
    !relative.startsWith("dist/") &&
    !relative.endsWith(".d.ts")
  ) {
    return absolute;
  }

  const withoutExt = relative
    .replace(/\.(?:d\.)?[cm]?tsx?$/, "")
    .replace(/\.(?:mjs|cjs|js)$/, "")
    .replace(/^(?:dist\/(?:esm|cjs|jsx)\/|dist\/|types\/)/, "");

  return [
    join(pkgDir, "src", `${withoutExt}.ts`),
    join(pkgDir, "src", `${withoutExt}.tsx`),
    join(pkgDir, "src", withoutExt, "index.ts"),
    join(pkgDir, "src", withoutExt, "index.tsx")
  ].find(existsSync);
}

/**
 * Point workspace packages at source so Storybook does not require a prior
 * `dist` build. Export subpaths (`@cyclone-ui/state/client`) are aliased
 * independently, and every `find` is an exact regex so Vite does not rewrite
 * `@cyclone-ui/state/message` through the `@cyclone-ui/state` package alias.
 */
function cycloneUiSourceAliases(): Array<{
  find: string | RegExp;
  replacement: string;
}> {
  const packageAliases: Array<{ find: string | RegExp; replacement: string }> =
    [];

  for (const workspaceDir of ["packages", "components"] as const) {
    const root = join(workspaceRoot, workspaceDir);
    if (!existsSync(root)) {
      continue;
    }

    for (const name of readdirSync(root)) {
      const pkgDir = join(root, name);
      const pkgJsonPath = join(pkgDir, "package.json");
      if (!existsSync(pkgJsonPath)) {
        continue;
      }

      const pkg = JSON.parse(readFileSync(pkgJsonPath, "utf8")) as {
        name?: string;
        exports?: Record<string, unknown>;
      };
      if (!pkg.name) {
        continue;
      }

      const aliases = new Map<string, string>();

      if (pkg.exports) {
        for (const [exportPath, exportValue] of Object.entries(pkg.exports)) {
          if (exportPath.includes("*") || exportPath === "./package.json") {
            continue;
          }

          const filePath = exportFilePath(exportValue);
          if (!filePath) {
            continue;
          }

          const sourceFile = resolveSourceFile(pkgDir, filePath);
          if (!sourceFile) {
            continue;
          }

          const specifier =
            exportPath === "." ? pkg.name : `${pkg.name}${exportPath.slice(1)}`;
          aliases.set(specifier, sourceFile);
        }
      }

      if (!aliases.has(pkg.name)) {
        for (const entry of ["src/index.ts", "src/index.tsx"] as const) {
          const entryPath = join(pkgDir, entry);
          if (existsSync(entryPath)) {
            aliases.set(pkg.name, entryPath);
            break;
          }
        }
      }

      for (const [specifier, replacement] of aliases) {
        packageAliases.push({
          find: new RegExp(`^${escapeRegExp(specifier)}$`),
          replacement
        });
      }
    }
  }

  return packageAliases;
}

const isProduction = process.env.NODE_ENV === "production";
const profiling = isProduction && {
  "react-dom/client": "react-dom/profiling"
};

const config: StorybookConfig = {
  stories: ["../../../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [getAbsolutePath("@storybook/addon-docs")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  async viteFinal(config, { configType }) {
    const { tamaguiPlugin } = await import("@tamagui/vite-plugin");
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      // root: __dirname,
      // cacheDir: "../../node_modules/.cache/.vite/apps/storybook",
      envPrefix: "NEXT_PUBLIC_",

      // Workspace component projects preserve JSX. Let Vite's single JSX
      // transform compile it; Storybook already provides the React runtime.
      esbuild: {
        jsx: "automatic",
        jsxImportSource: "react"
      },

      resolve: {
        alias: [
          ...cycloneUiSourceAliases(),
          {
            find: "@stryke/env/runtime-checks",
            replacement: join(
              dirname(fileURLToPath(import.meta.url)),
              "shims/stryke-env-runtime-checks.ts"
            )
          },
          {
            find: "node:buffer",
            replacement: join(
              dirname(fileURLToPath(import.meta.url)),
              "shims/buffer.ts"
            )
          },
          {
            find: "node:path",
            replacement: join(
              dirname(fileURLToPath(import.meta.url)),
              "shims/path.ts"
            )
          },
          {
            find: "node:url",
            replacement: join(
              dirname(fileURLToPath(import.meta.url)),
              "shims/url.ts"
            )
          },
          {
            find: "@tamagui/react-native-svg",
            replacement: resolvePackageFile("@tamagui/react-native-svg")
          },
          {
            find: "@tamagui/proxy-worm",
            replacement: resolvePackageFile("@tamagui/proxy-worm")
          },
          {
            find: "react-native-svg",
            replacement: resolvePackageFile("@tamagui/react-native-svg")
          },
          {
            find: "react-native/Libraries/Renderer/shims/ReactFabric",
            replacement: resolvePackageFile("@tamagui/proxy-worm")
          },
          {
            find: "react-native/Libraries/Renderer/shims/ReactNative",
            replacement: resolvePackageFile("@tamagui/proxy-worm")
          },
          {
            find: "react-native",
            replacement: getAbsolutePath("react-native-web")
          },
          ...(profiling
            ? Object.entries(profiling).map(([find, replacement]) => ({
                find,
                replacement
              }))
            : [])
        ],

        dedupe: [
          "react",
          "react-dom",
          "react-native",
          "react-native-web",
          "@tamagui/core",
          "@tamagui/web",
          "@tamagui/toast",
          "@tamagui/use-presence",
          "@tamagui/react-native-svg",
          "@tamagui/proxy-worm"
        ]
      },

      optimizeDeps: {
        include: [
          "@tamagui/react-native-svg",
          "@tamagui/proxy-worm",
          "react-native-web",
          "expo-linear-gradient"
        ],
        exclude: ["@stryke/env/runtime-checks"]
      },

      plugins: [
        nxViteTsPaths({ debug: false }),
        reactNativeWeb(),
        tamaguiPlugin({
          config: join(workspaceRoot, "packages/themes/src/tamagui/config.ts"),
          components: ["tamagui"]
        })
      ].filter(Boolean),

      define: {
        "process.env.STORYBOOK": JSON.stringify("true"),
        "process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES":
          JSON.stringify("false"),
        "process.env.NODE_ENV": JSON.stringify(
          configType === "PRODUCTION" ? "production" : "development"
        ),
        // `@stryke/env` reads these as free identifiers. Leave them undefined
        // in the browser so Boolean(Bun) does not throw ReferenceError.
        Bun: "undefined",
        Deno: "undefined",
        fastly: "undefined",
        Netlify: "undefined",
        EdgeRuntime: "undefined"
      },

      server: {
        fs: {
          allow: [workspaceRoot]
        }
      },

      build: {
        outDir: join(workspaceRoot, "dist/apps/storybook"),
        reportCompressedSize: true
      }
    });
  },
  docs: {
    defaultName: "Documentation"
  },
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  core: {
    disableTelemetry: true
  }
};

export default config;
