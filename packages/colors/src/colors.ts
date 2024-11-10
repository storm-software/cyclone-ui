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
import { theme as darkTheme } from "./schemes/cyclone-dark";
import { theme as lightTheme } from "./schemes/cyclone-light";
import {
  ColorTheme,
  ColorThemeName,
  ColorThemeRole,
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

const getTheme = <TRole extends ColorThemeName = ColorThemeName>(
  theme: ColorTheme<TRole>,
  dark = false
): ColorThemeTokens<TRole> => {
  return Object.keys(theme).reduce(
    (ret: ColorThemeTokens<TRole>, key: string) => {
      ret[`${key}${dark ? "Dark" : ""}` as ColorThemeRole<TRole>] =
        theme[key as TRole];

      return ret;
    },
    {} as ColorThemeTokens<TRole>
  );
};

export const colors = {
  ...getTheme(lightTheme),
  ...getTheme(darkTheme, true)
} as ColorThemeTokens;

export default colors;
