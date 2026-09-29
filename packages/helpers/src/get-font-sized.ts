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

import { isNumber } from "@stryke/type-checks/is-number";
import type { Mutable } from "@stryke/types/base";
import type { FontSizeTokens, GenericFont, TextStyle } from "@tamagui/core";
import { getTokens } from "@tamagui/core";
import { getNearestToken } from "./get-nearest-token";
import type { TokenInput } from "./token-value";
import type { StyleEnv } from "./types";
import { normalizeTokenValue } from "./token-value";

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
  { font, fontFamily }: StyleEnv = {}
): Mutable<TextStyle> => {
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
  const fontValue = (
    group: Partial<Record<string, any>> | undefined
  ): any => group?.[sizeToken];

  // size related, treat them as overrides
  const fontSize = fontValue(font.size);
  const lineHeight = fontValue(font.lineHeight);
  const fontWeight = fontValue(font.weight);
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
  if (fontWeight) {
    style.fontWeight = fontWeight;
  }
  if (letterSpacing) {
    style.letterSpacing = letterSpacing;
  }
  if (fontSize) {
    style.fontSize = fontSize;
  }
  if (lineHeight) {
    style.lineHeight = lineHeight;
  }
  if (color) {
    style.color = color;
  }

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
        x =>
          x !== "true" &&
          (sizeTokens[x] as any).val === (sizeDefault as any).val
      )
    : null;

  if (!sizeDefault || !sizeDefaultSpecific) {
    return Object.keys(font.size)[3] as FontSizeTokens;
  }

  cache.set(font, sizeDefaultSpecific as FontSizeTokens);
  return sizeDefaultSpecific as FontSizeTokens;
}
