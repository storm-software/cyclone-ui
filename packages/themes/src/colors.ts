import { theme as darkTheme } from "./themes/brand-dark";
import { theme as lightTheme } from "./themes/brand-light";
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
import {
  ExtendedColorThemeTokens,
  ColorThemeTokens,
  ColorfulColorTheme,
  ColorfulColorRole,
  BaseColorTheme
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

const getTheme = (
  theme: ColorfulColorTheme<ColorfulColorRole> | BaseColorTheme<"base">,
  dark = false
) => {
  return Object.keys(theme).reduce(
    (
      ret: ColorfulColorTheme<ColorfulColorRole> | BaseColorTheme<"base">,
      key: string
    ) => {
      ret[`${key}${dark ? "Dark" : ""}`] = theme[key];

      return ret;
    },
    {} as ColorThemeTokens
  );
};

export const colors = {
  ...getTheme(lightTheme),
  ...getTheme(darkTheme, true)
} as ColorThemeTokens;

export default colors;
