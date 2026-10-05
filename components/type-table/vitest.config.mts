import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: "../../node_modules/.vite/components/type-table",
  resolve: {
    alias: [
      {
        find: "react-native-svg",
        replacement: fileURLToPath(
          new URL(
            "../../apps/storybook/node_modules/@tamagui/react-native-svg",
            import.meta.url
          )
        )
      },
      {
        find: /^react-native\/Libraries\/Renderer\/shims\//,
        replacement: fileURLToPath(
          new URL(
            "../../apps/storybook/node_modules/@tamagui/proxy-worm",
            import.meta.url
          )
        )
      },
      {
        find: "react-native",
        replacement: fileURLToPath(
          new URL("../../node_modules/react-native-web", import.meta.url)
        )
      }
    ]
  },
  plugins: [
    react({
      parserConfig: id => {
        if (id.endsWith(".tsx")) {
          return { syntax: "typescript", tsx: true };
        }

        if (id.endsWith(".ts") || id.endsWith(".mts")) {
          return { syntax: "typescript", tsx: false };
        }

        if (id.includes("/components/") && id.endsWith(".mjs")) {
          return { syntax: "ecmascript", jsx: true };
        }

        return undefined;
      },
      useAtYourOwnRisk_mutateSwcOptions: options => {
        if (options.jsc?.transform?.react) {
          options.jsc.transform.react.runtime = "automatic";
          options.jsc.transform.react.development = false;
        }
      }
    }),
    nxViteTsPaths()
  ],
  test: {
    name: "type-table",
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
      reportsDirectory: "../../coverage/components/type-table",
      provider: "v8" as const
    }
  }
}));
