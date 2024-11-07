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

import { ColorRole } from "@cyclone-ui/colors";
import { getSized } from "@cyclone-ui/theme-helpers";
import type {
  GetProps,
  SizeTokens,
  UnionableNumber,
  Variable
} from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { ColorProp, useGetThemedIcon } from "@tamagui/helpers-tamagui";
import {
  AlertCircle,
  CheckCircle,
  Info,
  Lightbulb,
  Lock
} from "@tamagui/lucide-icons";
import { forwardRef, PropsWithChildren } from "react";
import { OpaqueColorValue } from "react-native";

const ThemeableIconFrame = styled(View, {
  animation: "normal",

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

export const ThemeIcon = ({
  theme,
  disabled,
  ...props
}: BaseThemeIconProps) => {
  if (disabled) {
    return <Lock {...props} />;
  } else if (
    theme?.includes(ColorRole.ERROR) ||
    theme?.includes(ColorRole.WARNING)
  ) {
    return <AlertCircle {...props} />;
  } else if (theme?.includes(ColorRole.INFO)) {
    return <Info {...props} />;
  } else if (theme?.includes(ColorRole.HELP)) {
    return <Lightbulb {...props} />;
  } else if (theme?.includes(ColorRole.SUCCESS)) {
    return <CheckCircle {...props} />;
  }

  return null;
};

export type ThemeIconProps = GetProps<typeof ThemeIcon>;

type ThemeableIconExtraProps = PropsWithChildren<{
  disabled?: boolean;
  theme?: string;
  size?: SizeTokens;
  color?: string | UnionableNumber | Variable<any> | OpaqueColorValue;
}>;

export const ThemeableIcon = forwardRef<
  typeof ThemeableIconFrame,
  ThemeableIconExtraProps
>(
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
    const adjusted = getSized(size);

    const getThemedIcon = useGetThemedIcon({
      size: adjusted,
      color: disabled ? "$colorDisabled" : (color as ColorProp)
    });

    return (
      <ThemeableIconFrame
        ref={forwardedRef}
        {...props}
        theme={theme}
        disabled={disabled}>
        {getThemedIcon(children)}
      </ThemeableIconFrame>
    );
  }
);

export type ThemeableIconProps = GetProps<typeof ThemeableIcon>;

export const ThemedIcon = ThemeableIconFrame.styleable<ThemeableIconExtraProps>(
  ({ theme, disabled, size, color, ...props }, forwardedRef) => {
    return (
      <ThemeableIconFrame ref={forwardedRef} {...props} theme={theme}>
        <ThemeableIcon
          theme={theme}
          disabled={disabled}
          size={size}
          color={color}>
          <ThemeIcon theme={theme} disabled={disabled} />
        </ThemeableIcon>
      </ThemeableIconFrame>
    );
  }
);

export type ThemedIconProps = GetProps<typeof ThemedIcon>;
