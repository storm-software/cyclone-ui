/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { Preview } from "@storybook/react-vite";
import "@tamagui/core/reset.css";
import "jotai-devtools/styles.css";
import "raf/polyfill";
import { CycloneDocsContainer, withCycloneTheme } from "./preview-decorators";
import { storybookThemes } from "./storybook-themes";

const preview: Preview = {
  globalTypes: {
    mode: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark", icon: "moon" },
          { value: "light", title: "Light", icon: "sun" }
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(?<temp1>background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme: storybookThemes.dark,
      container: CycloneDocsContainer
    }
  },
  decorators: [withCycloneTheme],
  tags: ["autodocs"],
  initialGlobals: {
    mode: "dark",
    locale: "en",
    locales: {
      en: "English",
      de: "German"
    }
  }
};

export default preview;
