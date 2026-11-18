import { defineConfig } from "vitest/config";
import { componentDistJsx } from "../../tools/config/vitest.component";

export default defineConfig(() => ({
  resolve: {
    tsconfigPaths: true
  },
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/components/scroll-view",
  plugins: [componentDistJsx()],
  // tsconfig uses `jsx: preserve`; tests need the JSX transformed.
  oxc: { jsx: { runtime: "automatic" as const } },
  test: {
    name: "scroll-view",
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
      reportsDirectory: "../../coverage/components/scroll-view",
      provider: "v8" as const
    }
  }
}));
