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
import react from "@vitejs/plugin-react-swc";
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

/**
 * Point workspace packages at source so Storybook does not require a prior
 * `dist` build, and map retired package names onto the consolidated state package.
 *
 * More specific subpaths are listed first so Vite does not rewrite
 * `@cyclone-ui/state/client` through the `@cyclone-ui/state` package alias.
 */
function cycloneUiSourceAliases(): Array<{
  find: string;
  replacement: string;
}> {
  const packageAliases: Array<{ find: string; replacement: string }> = [];

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
      };
      if (!pkg.name) {
        continue;
      }

      for (const entry of ["src/index.ts", "src/index.tsx"] as const) {
        const entryPath = join(pkgDir, entry);
        if (existsSync(entryPath)) {
          packageAliases.push({ find: pkg.name, replacement: entryPath });
          break;
        }
      }
    }
  }

  const specificAliases = [
    {
      find: "@cyclone-ui/state/utilities/create-molecule",
      replacement: join(
        workspaceRoot,
        "packages/state/src/base/utilities/create-molecule.tsx"
      )
    },
    {
      find: "@cyclone-ui/state/client",
      replacement: join(workspaceRoot, "packages/state/src/client/index.ts")
    },
    {
      find: "@cyclone-ui/state/message",
      replacement: join(workspaceRoot, "packages/state/src/message/index.ts")
    },
    {
      find: "@cyclone-ui/state/form",
      replacement: join(workspaceRoot, "packages/state/src/form/index.ts")
    },
    {
      find: "@cyclone-ui/state/theme",
      replacement: join(workspaceRoot, "packages/state/src/theme/index.ts")
    },
    {
      find: "@cyclone-ui/themes/tamagui",
      replacement: join(workspaceRoot, "packages/themes/src/tamagui/index.ts")
    },
    {
      find: "@cyclone-ui/themes/storybook",
      replacement: join(workspaceRoot, "packages/themes/src/storybook/theme.ts")
    },
    {
      find: "@cyclone-ui/colors",
      replacement: join(workspaceRoot, "packages/state/src/theme/types.ts")
    },
    {
      find: "@cyclone-ui/client-state",
      replacement: join(workspaceRoot, "packages/state/src/client/index.ts")
    },
    {
      find: "@cyclone-ui/form-state",
      replacement: join(workspaceRoot, "packages/state/src/form/index.ts")
    },
    {
      find: "@cyclone-ui/message-state",
      replacement: join(workspaceRoot, "packages/state/src/message/index.ts")
    },
    {
      find: "@cyclone-ui/tamagui",
      replacement: join(workspaceRoot, "packages/helpers/src/index.ts")
    }
  ];

  return [...specificAliases, ...packageAliases];
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

      resolve: {
        alias: [
          ...cycloneUiSourceAliases(),
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
        ]
      },

      plugins: [
        nxViteTsPaths({ debug: false }),
        reactNativeWeb(),
        react(),
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
        )
      },

      server: {
        fs: {
          allow: [workspaceRoot]
        }
      },

      build: {
        outDir: join(
          dirname(fileURLToPath(import.meta.url)),
          "../storybook-static"
        ),
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
