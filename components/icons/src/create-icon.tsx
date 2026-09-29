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

import type { FontSizeTokens } from "@tamagui/core";
import { getVariableValue } from "@tamagui/core";
import type { IconProps as TamaguiIconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import type { FC } from "react";
import { memo } from "react";
import type { NumberProp, SvgProps } from "react-native-svg";
import { G, Svg } from "react-native-svg";
import type {
  IconComponent,
  IconProps,
  IconSize,
  IconWeights
} from "./types";

/**
 * The props received by the inner icon component, after `themed` has resolved theme and token values.
 */
type ResolvedIconProps = SvgProps &
  Pick<IconProps, "weight" | "mirrored"> & {
    size?: NumberProp;
    strokeWidth?: NumberProp;
  };

/**
 * Resolve an icon `size` prop to the value expected by `themed` from `@tamagui/helpers-icon`.
 *
 * @remarks
 * `themed` treats every string size as a font size token. This resolves `size` tokens (and token variables) to their pixel value first, so `size="4xl"` renders at the `4xl` size token. Strings that are not `size` tokens are passed through as font size tokens.
 *
 * @param size - The icon size prop.
 * @returns The pixel size, a font size token, or `undefined` for the default size.
 */
export function resolveIconSize(
  size: IconSize | boolean | null | undefined
): number | FontSizeTokens | undefined {
  if (size === undefined || size === null || size === false) {
    return undefined;
  }
  if (typeof size === "number") {
    return size;
  }

  // Tamagui v3 spells the default size as the boolean `true`
  const key =
    size === true
      ? "true"
      : typeof size === "string" && size.startsWith("$")
        ? size.slice(1)
        : size;

  const value = getVariableValue(key, "size");
  if (typeof value === "number") {
    return value;
  }

  return typeof size === "string" ? (size as FontSizeTokens) : undefined;
}

/**
 * Create a themed Tamagui icon component from the SVG contents of each Phosphor weight.
 *
 * @remarks
 * Phosphor icons are drawn with fills (not strokes) on a 256x256 grid, so the resolved `color` is applied as the SVG `fill`. The `strokeWidth` prop supplied by `themed` is ignored.
 *
 * @param displayName - The display name of the icon component.
 * @param weights - The SVG contents of the icon for each weight.
 * @returns The themed icon component.
 */
export function createIcon(
  displayName: string,
  weights: IconWeights
): IconComponent {
  const Icon = memo(function Icon(props: ResolvedIconProps) {
    const {
      color = "black",
      size = 24,
      weight = "regular",
      mirrored = false,
      strokeWidth: _strokeWidth,
      ...otherProps
    } = props;

    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill={color}
        {...otherProps}>
        {mirrored ? (
          <G transform="matrix(-1 0 0 1 256 0)">
            {weights[weight] ?? weights.regular}
          </G>
        ) : (
          (weights[weight] ?? weights.regular)
        )}
      </Svg>
    );
  });
  Icon.displayName = displayName;

  const ThemedIcon = themed(Icon as unknown as FC<TamaguiIconProps>);

  const SizedIcon = ((props: IconProps) => (
    <ThemedIcon
      {...(props as TamaguiIconProps)}
      size={resolveIconSize(props.size)}
    />
  )) as IconComponent;
  SizedIcon.displayName = displayName;

  // Keep the static config added by `themed` so `styled()` works with the icon
  (SizedIcon as unknown as Record<string, unknown>).staticConfig = (
    ThemedIcon as unknown as Record<string, unknown>
  ).staticConfig;

  return SizedIcon;
}
