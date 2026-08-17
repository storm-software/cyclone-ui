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

import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

/**
 * Storybook `create()` requires CSS color strings. The generated Razorwind
 * theme currently emits unresolved DTCG token objects, which crash the
 * manager and leave a blank page.
 */
addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Cyclone UI",
    brandUrl: "https://cyclone-ui.com",
    brandImage: "https://public.storm-cdn.com/cyclone-ui/assets/dark-logo.svg",
    brandTarget: "_blank",
    appBg: "#1A1C1F",
    appContentBg: "#1A1C1F",
    appPreviewBg: "#1A1C1F",
    appBorderColor: "#494B4D",
    barBg: "#1A1C1F",
    barTextColor: "#BABBBB",
    barSelectedColor: "#F8F8F7",
    barHoverColor: "#F8F8F7",
    textColor: "#F8F8F7",
    textMutedColor: "#999A9B",
    inputBg: "#1E2023",
    inputBorder: "#494B4D",
    inputTextColor: "#F8F8F7"
  })
});
