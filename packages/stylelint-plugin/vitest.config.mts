import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/packages/stylelint-plugin",
  plugins: [nxViteTsPaths()],
  test: {
    name: "stylelint-plugin",
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
      reportsDirectory: "../../coverage/packages/stylelint-plugin",
      provider: "v8" as const
    }
  }
}));
