import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vitest/config";
import {
  componentDistJsx,
  reactNativeWebAliases
} from "../../tools/config/vitest.component";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/components/rating-field",
  resolve: {
    alias: reactNativeWebAliases,
    // Inlined workspace dists must share one Tamagui instance with the test.
    dedupe: ["@tamagui/core", "@tamagui/web", "react", "react-dom"]
  },
  plugins: [nxViteTsPaths(), componentDistJsx()],
  // tsconfig uses `jsx: preserve`; tests need the JSX transformed.
  oxc: { jsx: { runtime: "automatic" as const } },
  test: {
    name: "rating-field",
    watch: false,
    globals: true,
    environment: "node",
    include: [
      "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"
    ],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/components/rating-field",
      provider: "v8" as const
    }
  }
}));
