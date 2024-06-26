import {
  ColorTheme,
  ColorThemeTokens,
  ExtendedColorThemeTokens
} from "@cyclone-ui/types";
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
