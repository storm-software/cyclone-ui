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
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import reactNativeWeb from "vite-plugin-react-native-web";

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
        alias: {
          "react-native-svg": getAbsolutePath("@tamagui/react-native-svg"),
          "react-native/Libraries/Renderer/shims/ReactFabric": getAbsolutePath(
            "@tamagui/proxy-worm"
          ),
          "react-native/Libraries/Renderer/shims/ReactNative": getAbsolutePath(
            "@tamagui/proxy-worm"
          ),
          "react-native": getAbsolutePath("react-native-web"),

          ...profiling
        },

        dedupe: [
          "react",
          "react-dom",
          "react-native",
          "react-native-web",
          "@tamagui/core",
          "@tamagui/web",
          "@tamagui/toast",
          "@tamagui/use-presence"
        ]
      },

      plugins: [
        nxViteTsPaths({ debug: false }),
        reactNativeWeb(),
        react(),
        tamaguiPlugin({
          config: "./tamagui.config.ts",
          components: ["tamagui"]
        })
      ].filter(Boolean),

      define: {
        "process.env.STORYBOOK": "true",
        // "process.env.TAMAGUI_TARGET": "web",
        "process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES": "false",
        "process.env.NODE_ENV":
          configType === "PRODUCTION" ? "production" : "development"
      },

      build: {
        outDir: "../../../dist/apps/storybook",
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
