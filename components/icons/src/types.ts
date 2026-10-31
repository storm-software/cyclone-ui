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
import type { JSX } from "react";

/**
 * The variants (styles) of the Material Line Icons.
 *
 * @remarks
 * `loop` and `filled-loop` keep animating after the icon is drawn. Not every icon has every variant.
 *
 * @see https://github.com/cyberalien/line-md
 */
export const ICON_VARIANTS = [
  "regular",
  "loop",
  "filled",
  "filled-loop"
] as const;

export type IconVariant = (typeof ICON_VARIANTS)[number];

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
   * The variant (style) of the icon.
   *
   * @remarks
   * If the icon does not have this variant, the closest one it has is used: the same fill first, then the same looping.
   *
   * @defaultValue "regular"
   */
  variant?: IconVariant;

  /**
   * Play the icon's drawing animation when it mounts or its variant changes.
   *
   * @remarks
   * When `false`, or when the user prefers reduced motion, the final frame is rendered and loops stay still.
   *
   * @defaultValue true
   */
  animated?: boolean;

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
 * An `<animate>`, `<animateTransform>`, or `<set>` element of an icon.
 */
export interface IconAnimation {
  /**
   * The animated `react-native-svg` prop, or `transform` for `<animateTransform>`.
   */
  prop: string;

  /**
   * The `<animateTransform>` type.
   */
  transform?: "rotate" | "scale" | "translate";

  /**
   * The start time, in seconds.
   *
   * @defaultValue 0
   */
  begin?: number;

  /**
   * The duration, in seconds. A `<set>` has none and holds its value from `begin`.
   */
  dur?: number;

  /**
   * The animated values. A single value animates from the underlying value (an SVG `to` animation).
   */
  values: (number | string)[];

  /**
   * The progress (0 to 1) at which each value is reached. Evenly spaced when omitted.
   */
  keyTimes?: number[];

  /**
   * Repeat indefinitely.
   */
  repeat?: boolean;

  /**
   * Hold the last value after the animation ends (SVG `fill="freeze"`).
   */
  freeze?: boolean;
}

/**
 * An SVG element of an icon.
 */
export interface IconElement {
  /**
   * The SVG element name.
   */
  type: "circle" | "defs" | "g" | "mask" | "path" | "rect";

  /**
   * The static `react-native-svg` props.
   *
   * @remarks
   * `currentColor` paints with the icon color. `id` and `mask` hold a mask id, which is made unique for each rendered icon.
   */
  props?: Record<string, number | string>;

  /**
   * The point the element's transform is applied around (CSS `transform-origin`).
   */
  origin?: [number, number];

  children?: IconElement[];

  animations?: IconAnimation[];
}

/**
 * The SVG elements of an icon for each variant it has, on a 24×24 grid.
 */
export type IconVariants = Partial<Record<IconVariant, IconElement[]>>;
