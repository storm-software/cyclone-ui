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

import { fontSizeToSize } from "@cyclone-ui/tamagui";
import { isNumber, isSet } from "@storm-stack/types";
import type { FontSizeTokens, SizeTokens } from "@tamagui/core";
import {
  getRadius as getRadiusBase,
  getSize,
  getSpace
} from "@tamagui/get-token";
import { getNearestToken } from "./get-nearest-token";

export interface GetSizedOptions {
  scale?: number;
  shift?: number;
  bounds?: [number] | [number, number];
  excludeHalfSteps?: boolean;
}

/**
 * Get the size number from a token value or number value and a scale
 *
 * @param val - The size token or number to use
 * @param options - The scale to use
 * @returns The size number
 */
export const getSized = (
  val: SizeTokens | number,
  options: GetSizedOptions = {}
): number => {
  let value = val;
  if (!value) {
    value = "$true";
  }

  if (isNumber(value)) {
    value = getNearestToken("size", value);
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
  val: FontSizeTokens | number,
  options: GetSizedOptions = {}
) => {
  let value = val;
  if (!value) {
    value = "$true";
  }

  if (isNumber(value)) {
    value = fontSizeToSize(value);
  }

  return getSized(value, options);
};

/**
 * Get the space number from a size token value or number value and a scale
 *
 * @param val - The size token or number to use
 * @param options - The scale to use
 * @returns The space number
 */
export const getSpaced = (
  val: SizeTokens | number,
  options: GetSizedOptions = {}
): number => {
  let value = val;
  if (!value) {
    value = "$true";
  }

  if (isNumber(value)) {
    value = getNearestToken("space", value);
  }

  const space = getSpace(value, options);
  const scale = isSet(options.scale) ? options.scale : 1;

  return space.val * scale;
};

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
export const getRadius = (
  val: SizeTokens | number,
  options: GetRadiusOptions = {}
) => {
  if (options.circular) {
    return 100_000;
  }

  let value = val;
  if (isNumber(value)) {
    value = getNearestToken("radius", value);
  }

  const radius = getRadiusBase(value, options);
  const scale = isSet(options.scale) ? options.scale : 1;

  return radius.val * scale;
};
