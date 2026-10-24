import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../node_modules/.vite/email",
  test: {
    name: "email",
    watch: false,
    environment: "node",
    // Otherwise CSS imports, `?raw` included, load as empty strings
    css: true,
    include: ["src/**/*.test.tsx"]
  }
}));
