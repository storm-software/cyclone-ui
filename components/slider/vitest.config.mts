import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vitest/config";
import { componentDistJsx } from "../../tools/config/vitest.component";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/components/slider",
  plugins: [nxViteTsPaths(), componentDistJsx()],
  // The tsconfig preserves JSX for the build, so transform it here or the
  // tests cannot import the component source.
  oxc: { jsx: { runtime: "automatic" as const } },
  test: {
    name: "slider",
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
      reportsDirectory: "../../coverage/components/slider",
      provider: "v8" as const
    }
  }
}));
