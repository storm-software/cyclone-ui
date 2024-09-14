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

import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  yellow,
  yellowDark
} from "@tamagui/colors";
import { theme as darkTheme } from "./schemes/brand-dark";
import { theme as lightTheme } from "./schemes/brand-light";
import {
  ColorTheme,
  ColorThemeTokens,
  ExtendedColorThemeTokens
} from "./types";

export const external: ExtendedColorThemeTokens = {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  yellow,
  yellowDark
};

const getTheme = (theme: ColorTheme, dark = false) => {
  return Object.keys(theme).reduce((ret: ColorTheme, key: string) => {
    ret[`${key}${dark ? "Dark" : ""}`] = theme[key];

    return ret;
  }, {} as ColorThemeTokens);
};

export const colors = {
  ...getTheme(lightTheme),
  ...getTheme(darkTheme, true)
} as ColorThemeTokens;

export default colors;
