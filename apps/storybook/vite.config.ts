/// <reference types='vitest' />

import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";

const isProduction = process.env.NODE_ENV === "production";

const profiling = isProduction && {
  "react-dom/client": "react-dom/profiling"
};
const shouldExtract = process.env.EXTRACT === "1";

const extrasPlugins = ["@cyclone-ui/button"];

const tamaguiConfig = {
  components: [...extrasPlugins, "tamagui"],
  config: "apps/storybook/tamagui.config.ts",
  outputCSS: "./public/tamagui.css"
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
    nxViteTsPaths({ debug: true }),
    react(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null
  ].filter(Boolean),
  server: {
    fs: {
      // Load server-side code also from `src`
      allow: ["src"],
      // Enable stricter file checks
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
