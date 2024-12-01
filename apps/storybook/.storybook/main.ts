/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react-swc";
import { dirname, join } from "node:path";
import reactNativeWeb from "vite-plugin-react-native-web";

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const dependencies = [
  "@cyclone-ui/colors",
  "@cyclone-ui/font-space-grotesk",
  "@cyclone-ui/font-permanent-marker",
  "@cyclone-ui/font-mona-sans",
  "@cyclone-ui/tamagui",
  "@cyclone-ui/themes",
  "@cyclone-ui/helpers",
  "@cyclone-ui/state",
  "@cyclone-ui/client-state",
  "@cyclone-ui/message-state",
  "@cyclone-ui/form-state"
];

const isProduction = process.env.NODE_ENV === "production";
const profiling = isProduction && {
  "react-dom/client": "react-dom/profiling"
};

const config: StorybookConfig = {
  stories: ["../../../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions")
  ],
  framework: getAbsolutePath("@storybook/react-vite"),
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
