/// <reference types='vitest' />

import { tamaguiPlugin } from "@tamagui/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";

const isProduction = process.env.NODE_ENV === "production";

const profiling = isProduction && {
  "react-dom/client": "react-dom/profiling"
};

const tamaguiConfig = {
  config: "apps/storybook/tamagui.config.ts",
  components: [
    "@cyclone-ui/themes",
    "@cyclone-ui/config",
    "@cyclone-ui/button",
    "@cyclone-ui/input",
    "@cyclone-ui/collapsible",
    "tamagui"
  ],

  /**
   * these are mostly not necessary except for advanced cases:
   **/
  outputCSS: "./public/tamagui.css"
  // importsWhitelist: ["constants.js", "colors.js"],
  // disableExtraction: process.env.NODE_ENV === "development"
  // themeBuilder: {
  //   input: "@cyclone-ui/themes/default-theme.ts",
  //   output: "./generated-theme.ts"
  // }
};

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/storybook",
  resolve: {
    // extensions: extensions,
    alias: {
      "react-native/Libraries/Image/AssetRegistry":
        "react-native-web/dist/modules/AssetRegistry",
      ...profiling
    }
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
  }
});
