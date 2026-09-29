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

import { getSized } from "@cyclone-ui/helpers";
import { Lock, MinusCircle, PlusCircle } from "@cyclone-ui/icons";
import {
  AlertCircle,
  CheckCircle,
  DiscoveryCircle,
  ErrorCircle,
  InfoCircle
} from "@cyclone-ui/vectors";
import type {
  GetProps,
  SizeTokens,
  UnionableNumber,
  Variable
} from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import type { ColorProp } from "@tamagui/helpers-tamagui";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import type { OpaqueColorValue } from "react-native";

const ThemeableIconFrame = styled(View, {
  transition: "200ms",
  alignItems: "center",
  opacity: "enter:0 exit:0",
  scale: "enter:0.5 exit:0.5"
});

type BaseThemeIconProps = {
  theme?: string | null;
  disabled?: boolean;
} & IconProps;

export const getIconByTheme = ({
  theme,
  disabled,
  ...props
}: BaseThemeIconProps) => {
  if (disabled) {
    return <Lock {...props} />;
  } else if (theme?.includes("danger")) {
    return <ErrorCircle {...props} />;
  } else if (theme?.includes("warning")) {
    return <AlertCircle {...props} />;
  } else if (theme?.includes("info")) {
    return <InfoCircle {...props} />;
  } else if (theme?.includes("discovery")) {
    return <DiscoveryCircle {...props} />;
  } else if (theme?.includes("success")) {
    return <CheckCircle {...props} />;
  } else if (theme?.includes("positive")) {
    return <PlusCircle {...props} />;
  } else if (theme?.includes("negative")) {
    return <MinusCircle {...props} />;
  }

  return null;
};

const isDefaultSize = (size: SizeTokens | undefined) =>
  size === undefined || size === true || size === "true";

/**
 * Keep only the base clause of a flat color value.
 *
 * @remarks
 * Icons receive their color as an SVG `stroke` / `fill` attribute, which cannot
 * carry v3 state clauses such as `hover:accentHover`.
 */
const getBaseColor = (color: ThemeableIconExtraProps["color"]) => {
  if (typeof color !== "string") {
    return color;
  }

  const base = color
    .trim()
    .split(/\s+/)
    .find(part => part && !part.includes(":"));

  return base as ThemeableIconExtraProps["color"];
};

type ThemeableIconExtraProps = PropsWithChildren<{
  disabled?: boolean;
  theme?: string | null;
  size?: SizeTokens;
  color?: string | UnionableNumber | Variable<any> | OpaqueColorValue;
}>;

export const ThemeableIcon = createStyledHOC(
  ThemeableIconFrame,
  (
    {
      theme,
      disabled = false,
      color,
      size = true,
      children,
      ...props
    }: ThemeableIconExtraProps,
    forwardedRef
  ) => {
    const getThemedIcon = useGetThemedIcon({
      // The `true` default keeps the icon's intrinsic size (24px), as in v2.
      size: isDefaultSize(size) ? undefined : getSized(size),
      color: disabled ? "onAccentDisabled" : (getBaseColor(color) as ColorProp)
    });

    return (
      <ThemeableIconFrame ref={forwardedRef} {...props} theme={theme}>
        {getThemedIcon(children)}
      </ThemeableIconFrame>
    );
  }
);

export type ThemeableIconProps = GetProps<typeof ThemeableIcon>;

export const ThemedIcon = createStyledHOC(
  ThemeableIconFrame,
  (
    {
      theme,
      color,
      disabled = false,
      size = true,
      ...props
    }: GetProps<typeof ThemeableIconFrame> & ThemeableIconExtraProps,
    forwardedRef
  ) => {
    const adjusted = useMemo(
      () => (disabled ? getSized(size, { shift: -4 }) : size),
      [disabled, size]
    );

    return (
      <ThemeableIconFrame ref={forwardedRef} {...props} theme={theme}>
        <ThemeableIcon
          theme={theme}
          disabled={disabled}
          size={adjusted}
          color={color}>
          {getIconByTheme({ theme, disabled })}
        </ThemeableIcon>
      </ThemeableIconFrame>
    );
  }
);

export type ThemedIconProps = GetProps<typeof ThemedIcon>;
