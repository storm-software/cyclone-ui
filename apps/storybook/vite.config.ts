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
// import { setupDev } from "@tamagui/core";
import { tamaguiPlugin } from "@tamagui/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

// setupDev({
//   visualizer: {
//     key: "Alt",
//     delay: 800
//   }
// });

const isProduction = process.env.NODE_ENV === "production";

const profiling = isProduction && {
  "react-dom/client": "react-dom/profiling"
};

const tamaguiConfig = {
  config: "./tamagui.config.ts",
  components: [
    "@cyclone-ui/tokens",
    "@cyclone-ui/themes",
    "@cyclone-ui/config",
    "@cyclone-ui/provider",
    "tamagui"
  ]
};

export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.cache/.vite/apps/storybook",
  envPrefix: "NEXT_PUBLIC_",
  resolve: {
    // extensions: extensions,
    alias: {
      "react-native-svg": "@tamagui/react-native-svg",
      "react-native/Libraries/Image/AssetRegistry":
        "react-native-web/dist/modules/AssetRegistry",
      ...profiling
    },

    dedupe: [
      "react",
      "react-dom",
      "react-native",
      "react-native-web",
      "react-native-svg"
    ]
  },

  plugins: [
    nxViteTsPaths({ debug: false }),
    react(),
    tamaguiPlugin(tamaguiConfig)
    // tamaguiExtractPlugin({
    //   ...tamaguiConfig,
    //   logTimings: true
    // })
  ].filter(Boolean),
  server: {
    fs: {
      // Load server-side code also from `src`
      allow: ["src"],
      strict: true
    },
    port: 4200,
    host: "localhost"
  },
  preview: {
    port: 4300,
    host: "localhost"
  },
  build: {
    outDir: "../../dist/apps/storybook",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  define: {
    // "process.env.STORYBOOK": true,
    "process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES": false
    // "process.env.DEBUG": "tamagui",
    // "process.env.NODE_ENV": "development"
  }
});
