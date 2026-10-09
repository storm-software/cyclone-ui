import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vitest/config";
import { componentDistJsx } from "../../tools/config/vitest.component";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/components/date-picker",
  plugins: [nxViteTsPaths(), componentDistJsx()],
  // tsconfig uses `jsx: preserve`; tests need the JSX transformed.
  oxc: { jsx: { runtime: "automatic" as const } },
  test: {
    name: "date-picker",
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
      reportsDirectory: "../../coverage/components/date-picker",
      provider: "v8" as const
    }
  }
}));
