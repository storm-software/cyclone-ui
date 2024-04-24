import "@tamagui/core/reset.css";
import "../../../packages/font-mona-sans/css/style.css";
import "../../../packages/font-permanent-marker/css/style.css";
import "../../../packages/font-space-grotesk/css/style.css";
import "raf/polyfill";
import { Preview } from "@storybook/react";
import i18n from "./i18n";
import { StorybookDecorator } from "../src/StorybookDecorator";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      title: "Theme",
      description: "Theme for your components",
      defaultValue: "dark",
      toolbar: {
        icon: "paintbrush",
        dynamicTitle: true,
        items: [
          { value: "light", left: "☀️", title: "Light Mode" },
          { value: "dark", left: "🌙", title: "Dark Mode" }
        ]
      }
    }
  },
  globals: {
    locale: "en",
    locales: {
      en: "English",
      de: "German"
    }
  },
  parameters: {
    i18n
    // nextRouter: {
    //   Provider: RouterContext.Provider, // next 13 next 13 (using next/navigation)
    //   // Provider: RouterContext.Provider, // next 13 (using next/router) / next < 12
    // },
  },
  decorators: [StorybookDecorator]
};

export default preview;
