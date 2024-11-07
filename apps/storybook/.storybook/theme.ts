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

  colorPrimary: "#EFEFEF",
  colorSecondary: "#1fb2a6",

  // UI
  appBg: "#202223",
  appContentBg: "#151718",
  appBorderColor: "#363738",
  appBorderRadius: 2,

  // Text colors
  textColor: "#EFEFEF",
  textInverseColor: "#EFEFEF",

  // Toolbar default and active colors
  barTextColor: "#EFEFEF",
  barSelectedColor: "#1fb2a6",
  barBg: "#202223",

  // Form colors
  inputBg: "#202223",
  inputBorder: "#363738",
  inputTextColor: "#EFEFEF",
  inputBorderRadius: 2,

  brandTitle: "Storm Software",
  brandUrl: "https://stormsoftware.com",
  brandImage: "https://public.storm-cdn.com/transparent.svg",
  brandTarget: "_self"
});

export default theme;
