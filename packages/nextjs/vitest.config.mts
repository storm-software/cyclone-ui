import { defineConfig } from "vitest/config";

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/packages/nextjs",
  test: {
    name: "nextjs",
    watch: false,
    environment: "node",
    include: ["test/**/*.spec.ts"],
    exclude: ["test/**/*.browser.spec.ts", "test/fixture/**"]
  }
});
