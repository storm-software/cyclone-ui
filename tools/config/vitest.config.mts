import { defineConfig } from "vitest/config";

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/tools/config",
  test: {
    name: "tools-config",
    watch: false,
    environment: "node",
    include: ["test/**/*.spec.ts"]
  }
});
