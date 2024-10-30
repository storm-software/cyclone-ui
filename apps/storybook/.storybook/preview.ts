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

/* eslint-disable @nx/enforce-module-boundaries */

import { Preview } from "@storybook/react";
import "@tamagui/core/reset.css";
import "raf/polyfill";
import "../../../packages/font-mona-sans/css/style.css";
import "../../../packages/font-permanent-marker/css/style.css";
import "../../../packages/font-space-grotesk/css/style.css";
import { StorybookDecorator } from "../src/StorybookDecorator";
// import i18n from "./i18n";

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

  // parameters: {
  //   i18n
  //   // nextRouter: {
  //   //   Provider: RouterContext.Provider, // next 13 next 13 (using next/navigation)
  //   //   // Provider: RouterContext.Provider, // next 13 (using next/router) / next < 12
  //   // },
  // },

  decorators: [StorybookDecorator],

  tags: ["autodocs"],
  initialGlobals: {
    locale: "en",
    locales: {
      en: "English",
      de: "German"
    }
  }
};

export default preview;
