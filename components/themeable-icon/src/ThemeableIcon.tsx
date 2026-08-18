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
import { AlertCircle, CheckCircle, InfoCircle } from "@cyclone-ui/vectors";
import type {
  GetProps,
  SizeTokens,
  UnionableNumber,
  Variable
} from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import type { ColorProp } from "@tamagui/helpers-tamagui";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import {
  Lightbulb,
  Lock,
  MinusCircle,
  PlusCircle
} from "@tamagui/lucide-icons";
import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import type { OpaqueColorValue } from "react-native";
const ThemeableIconFrame = styled(View, {
  transition: "medium",

  alignItems: "center",

  enterStyle: {
    opacity: 0,
    scale: 0.5
  },

  exitStyle: {
    opacity: 0,
    scale: 0.5
  }
});

type BaseThemeIconProps = {
  theme?: string;
  disabled?: boolean;
} & IconProps;

export const getIconByTheme = ({
  theme,
  disabled,
  ...props
}: BaseThemeIconProps) => {
  if (disabled) {
    return <Lock {...props} />;
  } else if (theme?.includes("danger") || theme?.includes("warning")) {
    return <AlertCircle {...props} />;
  } else if (theme?.includes("info")) {
    return <InfoCircle {...props} />;
  } else if (theme?.includes("discovery")) {
    return <Lightbulb {...props} />;
  } else if (theme?.includes("success")) {
    return <CheckCircle {...props} />;
  } else if (theme?.includes("positive")) {
    return <PlusCircle {...props} />;
  } else if (theme?.includes("negative")) {
    return <MinusCircle {...props} />;
  }

  return null;
};

type ThemeableIconExtraProps = PropsWithChildren<{
  disabled?: boolean;
  theme?: string;
  size?: SizeTokens;
  color?: string | UnionableNumber | Variable<any> | OpaqueColorValue;
}>;

export const ThemeableIcon =
  ThemeableIconFrame.styleable<ThemeableIconExtraProps>(
    (
      {
        theme,
        disabled = false,
        color,
        size = "$true",
        children,
        ...props
      }: ThemeableIconExtraProps,
      forwardedRef
    ) => {
      const getThemedIcon = useGetThemedIcon({
        size: getSized(size),
        color: disabled
          ? "$foregroundOnPrimaryDisabled"
          : (color as ColorProp)
      });

      return (
        <ThemeableIconFrame ref={forwardedRef} {...props} theme={theme}>
          {getThemedIcon(children)}
        </ThemeableIconFrame>
      );
    }
  );

export type ThemeableIconProps = GetProps<typeof ThemeableIcon>;

export const ThemedIcon = ThemeableIconFrame.styleable<ThemeableIconExtraProps>(
  (
    { theme, color, disabled = false, size = "$true", ...props },
    forwardedRef
  ) => {
    const adjusted = useMemo(
      () => (disabled ? getSized(size, { shift: -4 }) : size),
      [size]
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
