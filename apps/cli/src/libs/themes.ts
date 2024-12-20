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

import type {
  MultiThemeColorConfig,
  SingleThemeColorConfig
} from "@storm-software/config";
import chroma from "chroma-js";
import fs from "fs-extra";
import { join } from "node:path";
import { ColorPaletteType, ColorTheme, ColorThemeType } from "./types.js";

export const getThemePath = (workspaceRoot: string, output: string): string => {
  return join(workspaceRoot, output);
};

export const getThemeFilePath = (
  workspaceRoot: string,
  output: string,
  themeType: ColorThemeType,
  name: string = "brand",
  extension?: string
): string => {
  return join(
    getThemePath(workspaceRoot, output),
    `${name}-${themeType}${extension ? (extension.includes(".") ? extension : `.${extension}`) : ""}`
  );
};

export const getTheme = async (
  workspaceRoot: string,
  output: string,
  themeType: ColorThemeType,
  name: string = "brand"
): Promise<ColorTheme> => {
  const themePath = getThemeFilePath(workspaceRoot, output, themeType, name);
  if (!(await fs.exists(themePath))) {
    throw new Error(`The theme file ${themePath} does not exist`);
  }

  const theme = await fs.readJson(themePath);
  if (!theme?.base?.["base1"]) {
    throw new Error("The base color is required to generate the design tokens");
  }

  return theme;
};

export const addPalette = (
  theme: ColorTheme,
  color: string,
  type: ColorPaletteType
): ColorTheme => {
  theme[type] = chroma
    .scale([theme["base"]["base1"], color])
    .gamma(1)
    .colors(12)
    .slice(2)
    .reduce((acc: { [x: string]: string }, value: string, index: number) => {
      acc[`${type}${index + 1}`] = chroma(value).css("hsl");

      return acc;
    }, {});

  const currentLength = Object.keys(theme[type]).length;

  theme[type] = chroma
    .scale([color, theme["base"]["base10"]])
    .colors(4)
    .slice(1, 3)
    .reduce((acc: { [x: string]: string }, value: string, index: number) => {
      acc[`${type}${currentLength + index + 1}`] = chroma(value).css("hsl");

      return acc;
    }, theme[type]);

  return theme;
};

export const initialTheme = (
  colors: Record<ColorThemeType, string>,
  themeType: ColorThemeType
): ColorTheme => {
  const theme = {} as ColorTheme;

  theme.base = chroma
    .scale(
      themeType === ColorThemeType.LIGHT
        ? [colors.light, colors.dark]
        : [colors.dark, colors.light]
    )
    .gamma(themeType === ColorThemeType.DARK ? 1.5 : 0.5)
    .colors(12)
    .slice(1, -3)
    .reduce(
      (acc: { [x: string]: string }, value: string, index: number) => {
        acc[`base${index + 2}`] = chroma(value).css("hsl");

        return acc;
      },
      {
        base1: chroma(
          themeType === ColorThemeType.LIGHT ? colors.light : colors.dark
        ).css("hsl")
      }
    );
  theme.base["base10"] = chroma(
    themeType === ColorThemeType.LIGHT ? colors.dark : colors.light
  ).css("hsl");

  const currentLength = Object.keys(theme.base).length;

  theme.base = chroma
    .scale([
      theme["base"]["base10"],
      themeType === ColorThemeType.DARK ? "#ffffff" : "#000000"
    ])
    .colors(3)
    .slice(1, 3)
    .reduce((acc: { [x: string]: string }, value: string, index: number) => {
      acc[`base${currentLength + index + 1}`] = chroma(value).css("hsl");

      return acc;
    }, theme.base);

  return theme as ColorTheme;
};

export const setTheme = async (
  theme: ColorTheme,
  workspaceRoot: string,
  output: string,
  themeType: ColorThemeType,
  name: string = "brand",
  generateJson = false
) => {
  const themePath = getThemePath(workspaceRoot, output);
  if (!(await fs.pathExists(themePath))) {
    await fs.mkdir(join(workspaceRoot, output), { recursive: true });
  }

  const filePath = getThemeFilePath(workspaceRoot, output, themeType, name);
  generateJson
    ? await Promise.all([
        fs.writeFile(
          `${filePath}.ts`,
          `export const theme = ${JSON.stringify(theme)}; \n\nexport default theme;`
        ),

        fs.writeJson(`${filePath}.json`, theme)
      ])
    : await fs.writeFile(
        `${filePath}.ts`,
        `export const theme = ${JSON.stringify(theme)}; \n\nexport default theme;`
      );
};

export const writeSingleTheme = async (
  colors: SingleThemeColorConfig,
  workspaceRoot: string,
  outputPath: string,
  name: string,
  generateJson = false
) => {
  const preparedColors = prepareSingleThemeColorConfig(colors);

  let lightTheme = await initialTheme(preparedColors, ColorThemeType.LIGHT);
  for (const type of Object.keys(preparedColors).filter(
    type => type !== "dark" && type !== "light"
  )) {
    lightTheme = addPalette(
      lightTheme,
      preparedColors[type],
      type as ColorPaletteType
    );
  }
  await setTheme(
    lightTheme,
    workspaceRoot,
    outputPath,
    ColorThemeType.LIGHT,
    name,
    generateJson
  );

  let darkTheme = await initialTheme(preparedColors, ColorThemeType.DARK);
  for (const type of Object.keys(preparedColors).filter(
    type => type !== "dark" && type !== "light"
  )) {
    darkTheme = addPalette(
      darkTheme,
      preparedColors[type],
      type as ColorPaletteType
    );
  }
  await setTheme(
    darkTheme,
    workspaceRoot,
    outputPath,
    ColorThemeType.DARK,
    name,
    generateJson
  );
};

export const writeMultiTheme = async (
  colors: MultiThemeColorConfig,
  workspaceRoot: string,
  outputPath: string,
  name: string,
  generateJson = false
) => {
  const preparedColors = prepareMultiThemeColorConfig(colors);

  let lightTheme = await initialTheme(
    {
      ...preparedColors.light,
      light: preparedColors.light.background,
      dark: preparedColors.light.foreground
    },
    ColorThemeType.LIGHT
  );
  for (const type of Object.keys(preparedColors.light).filter(
    type => type !== "background" && type !== "foreground"
  )) {
    lightTheme = addPalette(
      lightTheme,
      preparedColors.light[type],
      type as ColorPaletteType
    );
  }
  await setTheme(
    lightTheme,
    workspaceRoot,
    outputPath,
    ColorThemeType.LIGHT,
    name,
    generateJson
  );

  let darkTheme = await initialTheme(
    {
      ...preparedColors.dark,
      dark: preparedColors.dark.background,
      light: preparedColors.dark.foreground
    },
    ColorThemeType.DARK
  );
  for (const type of Object.keys(preparedColors.dark).filter(
    type => type !== "background" && type !== "foreground"
  )) {
    darkTheme = addPalette(
      darkTheme,
      preparedColors.dark[type],
      type as ColorPaletteType
    );
  }
  await setTheme(
    darkTheme,
    workspaceRoot,
    outputPath,
    ColorThemeType.DARK,
    name,
    generateJson
  );
};

const prepareSingleThemeColorConfig = (
  config: SingleThemeColorConfig
): SingleThemeColorConfig => {
  if (!config.accent) {
    config.accent = config.brand;
  }

  if (!config.link) {
    config.link = config.brand;
  }

  if (!config.positive) {
    config.positive = config.success;
  }

  if (!config.negative) {
    config.negative = config.danger;
  }

  return config;
};

const prepareMultiThemeColorConfig = (
  config: MultiThemeColorConfig
): MultiThemeColorConfig => {
  if (!config.light?.accent) {
    config.light ??= {} as MultiThemeColorConfig["light"];
    config.light.accent = config.light.brand;
  }

  if (!config.dark?.accent) {
    config.dark ??= {} as MultiThemeColorConfig["dark"];
    config.dark.accent = config.dark.brand;
  }

  if (!config.light.link) {
    config.light.link = config.light.brand;
  }

  if (!config.dark.link) {
    config.dark.link = config.dark.brand;
  }

  if (!config.light.positive) {
    config.light.positive = config.light.success;
  }

  if (!config.dark.negative) {
    config.dark.negative = config.dark.danger;
  }

  return config;
};
