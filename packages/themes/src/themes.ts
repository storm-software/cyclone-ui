import darkTheme from "../../../.storm/themes/default-dark.json";
import lightTheme from "../../../.storm/themes/default-light.json";
import { buildThemes } from "./build-themes";
import { ColorTheme } from "./types";

export const themes = buildThemes([
  {
    dark: darkTheme as ColorTheme,
    light: lightTheme as ColorTheme
  }
]);
