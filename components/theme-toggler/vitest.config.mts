import { defineConfig } from "vitest/config";
import {
  componentDistJsx,
  reactNativeWebAliases
} from "../../tools/config/vitest.component";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/components/theme-toggler",
  resolve: {
    tsconfigPaths: true,
    alias: reactNativeWebAliases
  },
  plugins: [componentDistJsx()],
  // tsconfig uses `jsx: preserve`; tests need the JSX transformed.
  oxc: { jsx: { runtime: "automatic" as const } },
  test: {
    name: "theme-toggler",
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
      reportsDirectory: "../../coverage/components/theme-toggler",
      provider: "v8" as const
    }
  }
}));
