import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../../../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("storybook-react-i18next")
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {
      builder: {
        viteConfigPath: "apps/storybook/vite.config.ts"
      }
    }
  },
  viteFinal: async (config, { configType }) => {
    config.define = {
      ...config.define,
      "process.env.STORYBOOK": true,
      "process.env.TAMAGUI_TARGET": "web",
      "process.env.NODE_ENV":
        configType === "PRODUCTION" ? "production" : "development"
    };
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "next/router": getAbsolutePath("next-router-mock")
      }
    };
    return config;
  },
  docs: {
    autodocs: true
  }
};

export default config;
