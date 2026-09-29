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

import type { FontSizeTokens, SizeTokens, Variable } from "@tamagui/core";
import type { IconProps as TamaguiIconProps } from "@tamagui/helpers-icon";
import type { JSX, ReactElement } from "react";

/**
 * The visual weights (styles) available for every Phosphor icon.
 *
 * @see https://phosphoricons.com
 */
export const ICON_WEIGHTS = [
  "thin",
  "light",
  "regular",
  "bold",
  "fill",
  "duotone"
] as const;

export type IconWeight = (typeof ICON_WEIGHTS)[number];

/**
 * The size of an icon: a number of pixels, a `size` token (for example `"4xl"`), a font size token, or a token variable.
 */
export type IconSize = number | SizeTokens | FontSizeTokens | Variable;

export type IconProps = Omit<TamaguiIconProps, "size"> & {
  /**
   * The width and height of the icon.
   *
   * @remarks
   * A number is used as a pixel value. A string is resolved against the `size` tokens first (a legacy `$` prefix is ignored), and otherwise treated as a font size token so the icon matches text at that size.
   *
   * @defaultValue 24
   */
  size?: IconSize;

  /**
   * The weight (style) of the icon.
   *
   * @defaultValue "regular"
   */
  weight?: IconWeight;

  /**
   * Flip the icon horizontally. Useful for right-to-left layouts.
   *
   * @defaultValue false
   */
  mirrored?: boolean;
};

export type IconComponent = ((props: IconProps) => JSX.Element) & {
  displayName?: string;
};

/**
 * The SVG contents of an icon for each of the available weights.
 */
export type IconWeights = Record<IconWeight, ReactElement>;
