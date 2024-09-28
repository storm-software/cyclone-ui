/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join } from "node:path";

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
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-essentials"),
    // getAbsolutePath("storybook-react-i18next"),
    "@chromatic-com/storybook"
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
      "process.env.STORYBOOK": "true",
      // "process.env.TAMAGUI_TARGET": "web",
      "process.env.NODE_ENV":
        configType === "PRODUCTION" ? "production" : "development",
      "process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES": "false"
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

  env: {
    "process.env.STORYBOOK": "true",
    "process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES": "false"
  },

  docs: {
    defaultName: "Documentation"
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;
