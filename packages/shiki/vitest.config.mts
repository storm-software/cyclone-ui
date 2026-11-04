import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  resolve: {
    tsconfigPaths: true
  },
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/packages/shiki",
  plugins: [],
  test: {
    name: "shiki",
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
      reportsDirectory: "../../coverage/packages/shiki",
      provider: "v8" as const
    }
  }
}));
