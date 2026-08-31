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
import { isSet } from "@stryke/type-checks/is-set";
import { getTokens, getVariableValue } from "@tamagui/core";
import {
  getRadius as getRadiusBase,
  getSize,
  getSpace
} from "@tamagui/get-token";
import { getNearestToken } from "./get-nearest-token";
import type { TokenValue } from "./token-value";
import { normalizeTokenValue } from "./token-value";

export interface GetSizedOptions {
  scale?: number;
  shift?: number;
  bounds?: [number] | [number, number];
  excludeHalfSteps?: boolean;
  nearest?: boolean;
}

/**
 * Get the size number from a token value or number value and a scale
 *
 * @param val - The size token or number to use
 * @param options - The scale to use
 * @returns The size number
 */
export const getSized = (
  val: TokenValue,
  options: GetSizedOptions = {}
): number => {
  let value = val ? normalizeTokenValue(val) : "$true";

  if (isNumber(value)) {
    if (!options.shift && !options.bounds) {
      return value * (isSet(options.scale) ? options.scale : 1);
    }

    value = options.nearest === false ? value : getNearestToken(value, "size");
  }

  const size = getSize(value, options);
  const scale = isSet(options.scale) ? options.scale : 1;

  return size.val * scale;
};

/**
 * Get the font size number from a token value or number value and a scale
 *
 * @param val - The size token or number to use
 * @param options - The scale to use
 * @returns The font size number
 */
export const getSizeFromFontSized = (
  val: TokenValue,
  options: GetSizedOptions = {}
) => {
  let value = val ? normalizeTokenValue(val) : "$true";

  if (isNumber(value)) {
    if (!options.shift && !options.bounds) {
      return value * (isSet(options.scale) ? options.scale : 1);
    }

    value = options.nearest === false ? value : getNearestToken(value, "size");
  }

  return getSized(value, options);
};

/**
 * Map a numeric font size to the nearest size token.
 *
 * @param fontSize - The font size in pixels
 * @returns The nearest size token
 */
export const fontSizeToSize = (fontSize: number) =>
  getNearestToken(fontSize, "size");

/**
 * Get the space number from a size token value or number value and a scale
 *
 * @param val - The size token or number to use
 * @param options - The scale to use
 * @returns The space number
 */
export const getSpaced = (
  val: TokenValue,
  options: GetSizedOptions = {}
): number => {
  let value = val ? normalizeTokenValue(val) : "$true";

  if (isNumber(value)) {
    if (!options.shift && !options.bounds) {
      return value * (isSet(options.scale) ? options.scale : 1);
    }

    value = options.nearest === false ? value : getNearestToken(value, "space");
  }

  const scale = isSet(options.scale) ? options.scale : 1;

  if (typeof value === "string" && !options.shift && !options.bounds) {
    const space = getTokens({ prefixed: true }).space[value];

    if (space) {
      return getVariableValue(space) * scale;
    }
  }

  const space = getSpace(value, options);

  return space.val * scale;
};

/**
 * Map a size token or numeric size to the corresponding space value.
 *
 * @param val - The size token or number to use
 * @returns The space number
 */
export const sizeToSpace = (val: TokenValue): number => getSpaced(val);

export type GetRadiusOptions = GetSizedOptions & {
  circular?: boolean;
};

/**
 * Get the radius number from a size token value or number value and a scale
 *
 * @param val - The size token or number to use
 * @param options - The options to use
 * @returns The radius number
 */
export const getRadius = (val: TokenValue, options: GetRadiusOptions = {}) => {
  if (options.circular) {
    return 100_000;
  }

  let value = val ? normalizeTokenValue(val) : "$true";
  if (isNumber(value)) {
    if (!options.shift && !options.bounds) {
      return value * (isSet(options.scale) ? options.scale : 1);
    }

    value =
      options.nearest === false ? value : getNearestToken(value, "radius");
  }

  const radius = getRadiusBase(value, options);
  const scale = isSet(options.scale) ? options.scale : 1;

  return radius.val * scale;
};
