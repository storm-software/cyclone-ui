import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/packages/cli",
  resolve: {
    alias: {
      "@cyclone-ui/registry-api/client":
        import.meta.resolve("../../packages/registry-api/src/client.ts")
    }
  },
  plugins: [nxViteTsPaths()],
  test: {
    name: "cli",
    watch: false,
    globals: true,
    environment: "node",
    include: ["tests/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/packages/cli",
      provider: "v8" as const
    }
  }
}));
