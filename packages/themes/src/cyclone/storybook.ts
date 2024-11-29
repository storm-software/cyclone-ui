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

export interface StorybookTheme {
  base: "light" | "dark";
  colorPrimary: string;
  colorSecondary: string;
  appBg: string;
  appContentBg: string;
  appPreviewBg: string;
  appBorderColor: string;
  appBorderRadius: number;
  fontBase: string;
  fontCode: string;
  textColor: string;
  textInverseColor: string;
  textMutedColor: string;
  barTextColor: string;
  barHoverColor: string;
  barSelectedColor: string;
  barBg: string;
  buttonBg: string;
  buttonBorder: string;
  booleanBg: string;
  booleanSelectedBg: string;
  inputBg: string;
  inputBorder: string;
  inputTextColor: string;
  inputBorderRadius: number;
  brandTitle?: string;
  brandUrl?: string;
  brandImage?: string;
  brandTarget?: string;
  gridCellSize?: number;
}

export const storybook: StorybookTheme = {
  base: "dark",

  colorPrimary: "#EFEFEF",
  colorSecondary: "#1fb2a6",

  // UI
  appBg: "#151718",
  appPreviewBg: "#151718",
  appContentBg: "#151718",
  appBorderColor: "#363738",
  appBorderRadius: 2,

  // Text colors
  textColor: "#EFEFEF",
  textInverseColor: "#EFEFEF",
  textMutedColor: "#99A1AA",
  fontBase: "#EFEFEF",
  fontCode: "#EFEFEF",

  // Toolbar default and active colors
  barTextColor: "#EFEFEF",
  barSelectedColor: "#1fb2a6",
  barBg: "#151718",
  barHoverColor: "#1C887F",

  // Button colors
  buttonBg: "#EFEFEF",
  buttonBorder: "#363738",

  // Form colors
  inputBg: "#151718",
  inputBorder: "#363738",
  inputTextColor: "#EFEFEF",
  inputBorderRadius: 2,
  booleanBg: "#EFEFEF",
  booleanSelectedBg: "#1fb2a6",

  brandTitle: "Storm Software",
  brandUrl: "https://stormsoftware.com",
  brandImage: "https://public.storm-cdn.com/transparent.svg",
  brandTarget: "_blank"
};
