/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { isSetString } from "@stryke/type-checks";
import { isNumber } from "@stryke/type-checks/is-number";
import type { Mutable } from "@stryke/types/base";
import type {
  FlatStyleValue,
  FontSizeTokens,
  GenericFont,
  GetThemeValueForKey,
  TextStyle
} from "@tamagui/core";
import { getTokens, getVariableValue } from "@tamagui/core";
import { getNearestToken } from "./get-nearest-token";
import type { TokenInput } from "./token-value";
import { normalizeTokenValue } from "./token-value";
import type { StyleEnv } from "./types";

export interface GetFontWeightFromSizeOptions extends StyleEnv {
  /**
   * The scale factor to apply when calculating the font weight from the pixel size.
   *
   * @defaultValue 1
   */
  scale?: number;
}

export type GetFontWeightFromSizeReturn = FlatStyleValue<
  | "unset"
  | GetThemeValueForKey<"fontWeight">
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | undefined
>;

export const getFontWeightFromSize = (
  sizeTokenIn: FontSizeTokens | TokenInput = "true",
  { font, scale }: GetFontWeightFromSizeOptions = {}
): GetFontWeightFromSizeReturn => {
  const tokenValue = isSetString(sizeTokenIn)
    ? normalizeTokenValue(sizeTokenIn)
    : sizeTokenIn;
  if (isNumber(tokenValue)) {
    return getFontWeightFromPixels(tokenValue) as GetFontWeightFromSizeReturn;
  }

  if (!font) {
    return undefined;
  }

  const sizeToken = String(
    (tokenValue === "true" ? getDefaultSizeToken(font) : tokenValue) ?? "true"
  );

  const weight = font.weight?.[sizeToken];
  if (weight !== undefined && Number.isFinite(Number.parseInt(weight))) {
    return Number(weight) as GetFontWeightFromSizeReturn;
  }

  const pixels = Number(getVariableValue(font.size?.[sizeToken]));

  return Number.isFinite(pixels)
    ? (getFontWeightFromPixels(pixels, scale) as GetFontWeightFromSizeReturn)
    : undefined;
};

/**
 * Scale a font weight from a pixel font size: body text (16px) sits at 400,
 * gaining 100 per 8px, clamped to 300-700 and snapped to the nearest 100.
 */
const getFontWeightFromPixels = (pixels: number, scale = 1): number =>
  Math.min(
    700,
    Math.max(300, Math.round((400 + (pixels - 16) * 12.5 * scale) / 100) * 100)
  );

/**
 * Get the font size related styles
 *
 * @remarks
 * Call-site `color` and `fontStyle` props take precedence over the values
 * returned here because Tamagui v3 applies call-site props above variants.
 *
 * @param sizeTokenIn - The size token to use
 * @param env - The `styled.dynamic` environment
 * @returns The font size related styles
 */
export const getFontSized = (
  sizeTokenIn: FontSizeTokens | TokenInput = "true",
  env: GetFontWeightFromSizeOptions = {}
): Mutable<TextStyle> => {
  const { font, fontFamily } = env;
  const tokenValue = normalizeTokenValue(sizeTokenIn);

  if (!font) {
    return {
      fontSize: tokenValue
    };
  }

  if (isNumber(tokenValue)) {
    return {
      fontFamily,
      fontSize: tokenValue
    };
  }

  const sizeToken = String(
    (tokenValue === "true" ? getDefaultSizeToken(font) : tokenValue) ?? "true"
  );

  const style: Mutable<TextStyle> = {};
  const fontValue = (group: Partial<Record<string, any>> | undefined): any =>
    group?.[sizeToken];

  // size related, treat them as overrides
  const fontSize = fontValue(font.size);
  const lineHeight = fontValue(font.lineHeight);
  const letterSpacing = fontValue(font.letterSpacing);
  const textTransform = fontValue(font.transform);
  const fontStyle = fontValue(font.style);
  const color = fontValue(font.color);

  if (fontStyle) {
    style.fontStyle = fontStyle;
  }
  if (textTransform) {
    style.textTransform = textTransform;
  }
  if (fontFamily) {
    style.fontFamily = fontFamily;
  }

  if (letterSpacing) {
    style.letterSpacing = letterSpacing;
  }
  if (fontSize) {
    style.fontWeight = getFontWeightFromSize(fontSize, env);
    style.fontSize = fontSize;
  }
  if (lineHeight) {
    style.lineHeight = lineHeight;
  }
  if (color) {
    style.color = color;
  }

  style.fontWeight ??= 500;

  return style;
};

/**
 * Get the font size related styles from a size token
 *
 * @param sizeTokenIn - The size token to use
 * @param env - The `styled.dynamic` environment
 * @returns The font size related styles
 */
export const getFontSizedFromSize = (
  sizeTokenIn: TokenInput = "true",
  env: StyleEnv = {}
): Mutable<TextStyle> => {
  const font = env.font;
  const tokenValue = normalizeTokenValue(sizeTokenIn);
  if (!font) {
    return {
      fontSize: tokenValue
    };
  }

  const sizeToken = isNumber(tokenValue)
    ? getNearestToken<string>(tokenValue, "size")
    : tokenValue;

  return getFontSized(sizeToken, env);
};

const cache = new WeakMap<any, FontSizeTokens>();

function getDefaultSizeToken(font: GenericFont): FontSizeTokens {
  if (typeof font === "object" && cache.has(font)) {
    return cache.get(font)!;
  }

  // use either font.size if it has true set, or fallback to tokens.size mapping to the same
  const sizeTokens: Record<string, any> =
    "true" in font.size ? font.size : getTokens().size;
  const sizeDefault = sizeTokens.true;
  const sizeDefaultSpecific = sizeDefault
    ? Object.keys(sizeTokens).find(
        x => x !== "true" && sizeTokens[x].val === sizeDefault.val
      )
    : null;

  if (!sizeDefault || !sizeDefaultSpecific) {
    // Same fallback as Tamagui's own `size: true`.
    return (
      "sm" in font.size ? "sm" : Object.keys(font.size)[3]
    ) as FontSizeTokens;
  }

  cache.set(font, sizeDefaultSpecific);
  return sizeDefaultSpecific;
}
