import {join} from 'node:path'
import {ColorPaletteType, ColorTheme, ColorThemeType} from './types.js'
import chroma from 'chroma-js'
import fs from 'fs-extra'

export const getThemePath = (workspaceRoot: string, output: string): string => {
  return join(workspaceRoot, output, 'themes')
}

export const getThemeFilePath = (
  workspaceRoot: string,
  output: string,
  themeType: ColorThemeType,
  name: string = 'default',
): string => {
  return join(getThemePath(workspaceRoot, output), `${name}-${themeType}.json`)
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

export const addPalette = (theme: ColorTheme, color: string, type: ColorPaletteType): ColorTheme => {
  theme[type] = chroma
    .scale([theme.base['0'], color])
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
) => {
  const themePath = getThemePath(workspaceRoot, output)
  if (!(await fs.pathExists(themePath))) {
    await fs.mkdir(join(workspaceRoot, output, 'themes'), {recursive: true})
  }

  await fs.writeJson(getThemeFilePath(workspaceRoot, output, themeType, name), theme)
}
