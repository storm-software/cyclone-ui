import {join} from 'node:path'
import {ColorPaletteType, ColorTheme, ColorThemeType} from './types.js'
import chroma from 'chroma-js'
import fs from 'fs-extra'
import type {MultiThemeColorConfig, SingleThemeColorConfig} from '@storm-software/config'

export const getThemePath = (workspaceRoot: string, output: string): string => {
  return join(workspaceRoot, output)
}

export const getThemeFilePath = (
  workspaceRoot: string,
  output: string,
  themeType: ColorThemeType,
  name: string = 'default',
  extension?: string,
): string => {
  return join(
    getThemePath(workspaceRoot, output),
    `${name}-${themeType}${extension ? (extension.includes('.') ? extension : `.${extension}`) : ''}`,
  )
}

export const getTheme = async (
  workspaceRoot: string,
  output: string,
  themeType: ColorThemeType,
  name: string = 'default',
): Promise<ColorTheme> => {
  const themePath = getThemeFilePath(workspaceRoot, output, themeType, name)
  if (!(await fs.exists(themePath))) {
    throw new Error(`The theme file ${themePath} does not exist`)
  }

  let theme = await fs.readJson(themePath)
  if (!theme?.base?.['0']) {
    throw new Error('The base color is required to generate the design tokens')
  }

  return theme
}

export const addPalette = (
  theme: ColorTheme,
  color: string,
  type: ColorPaletteType,
  backgroundName = 'base',
): ColorTheme => {
  theme[type] = chroma
    .scale([theme[backgroundName]['0'], color])
    .mode('lch')
    .colors(12)
    .reduce((acc: {[x: string]: string}, value: string, index: number) => {
      acc[index] = value
      return acc
    }, {})

  return theme
}

export const initialTheme = (colors: Record<ColorThemeType, string>, themeType: ColorThemeType): ColorTheme => {
  const theme = {} as ColorTheme

  theme.base = chroma
    .scale(themeType === ColorThemeType.LIGHT ? [colors.light, colors.dark] : [colors.dark, colors.light])
    .mode('lch')
    .colors(12)
    .reduce((acc: {[x: string]: string}, value: string, index: number) => {
      acc[index] = value
      return acc
    }, {})

  return theme as ColorTheme
}

export const setTheme = async (
  theme: ColorTheme,
  workspaceRoot: string,
  output: string,
  themeType: ColorThemeType,
  name: string = 'default',
  generateJson = false,
) => {
  const themePath = getThemePath(workspaceRoot, output)
  if (!(await fs.pathExists(themePath))) {
    await fs.mkdir(join(workspaceRoot, output), {recursive: true})
  }

  const filePath = getThemeFilePath(workspaceRoot, output, themeType, name)
  generateJson
    ? await Promise.all([
        fs.writeFile(`${filePath}.ts`, `export const theme = ${JSON.stringify(theme)}; \n\nexport default theme;`),
        fs.writeJson(`${filePath}.json`, theme),
      ])
    : await fs.writeFile(`${filePath}.ts`, `export const theme = ${JSON.stringify(theme)}; \n\nexport default theme;`)
}

export const writeSingleTheme = async (
  colors: SingleThemeColorConfig,
  workspaceRoot: string,
  outputPath: string,
  name: string,
  generateJson = false,
) => {
  let lightTheme = await initialTheme(colors, ColorThemeType.LIGHT)
  for (const type of Object.keys(colors).filter((type) => type !== 'dark' && type !== 'light')) {
    lightTheme = addPalette(lightTheme, colors[type], type as ColorPaletteType)
  }
  await setTheme(lightTheme, workspaceRoot, outputPath, ColorThemeType.LIGHT, name, generateJson)

  let darkTheme = await initialTheme(colors, ColorThemeType.DARK)
  for (const type of Object.keys(colors).filter((type) => type !== 'dark' && type !== 'light')) {
    darkTheme = addPalette(darkTheme, colors[type], type as ColorPaletteType)
  }
  await setTheme(darkTheme, workspaceRoot, outputPath, ColorThemeType.DARK, name, generateJson)
}

export const writeMultiTheme = async (
  colors: MultiThemeColorConfig,
  workspaceRoot: string,
  outputPath: string,
  name: string,
  generateJson = false,
) => {
  let lightTheme = await initialTheme(
    {...colors.light, light: colors.light.background, dark: colors.light.foreground},
    ColorThemeType.LIGHT,
  )
  for (const type of Object.keys(colors.light).filter((type) => type !== 'background' && type !== 'foreground')) {
    lightTheme = addPalette(lightTheme, colors.light[type], type as ColorPaletteType)
  }
  await setTheme(lightTheme, workspaceRoot, outputPath, ColorThemeType.LIGHT, name, generateJson)

  let darkTheme = await initialTheme(
    {...colors.dark, dark: colors.dark.background, light: colors.dark.foreground},
    ColorThemeType.DARK,
  )
  for (const type of Object.keys(colors.dark).filter((type) => type !== 'background' && type !== 'foreground')) {
    darkTheme = addPalette(darkTheme, colors.dark[type], type as ColorPaletteType)
  }
  await setTheme(darkTheme, workspaceRoot, outputPath, ColorThemeType.DARK, name, generateJson)
}
