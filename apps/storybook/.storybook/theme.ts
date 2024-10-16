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

import { create } from "@storybook/theming/create";

const theme: any = create({
  base: "dark",

  colorPrimary: "#1fb2a6",
  colorSecondary: "#7434db",

  // UI
  appBg: "#17181b",
  appContentBg: "#17181b",
  appBorderColor: "#1fb2a6",
  appBorderRadius: 2,

  // Text colors
  textColor: "#1fb2a6",
  textInverseColor: "#1fb2a6",

  // Toolbar default and active colors
  barTextColor: "#1fb2a6",
  barSelectedColor: "#1fb2a6",
  barBg: "#17181b",

  // Form colors
  inputBg: "#17181b",
  inputBorder: "#1fb2a6",
  inputTextColor: "#1fb2a6",
  inputBorderRadius: 2,

  brandTitle: "Storm Software",
  brandUrl: "https://stormsoftware.com",
  brandImage: "https://public.storm-cdn.com/transparent.svg",
  brandTarget: "_self"
});

export default theme;
