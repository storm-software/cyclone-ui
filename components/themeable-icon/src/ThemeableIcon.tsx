import { ColorRole } from "@cyclone-ui/colors";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import { getVariable, styled, useTheme, View } from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import {
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Info,
  Lock
} from "@tamagui/lucide-icons";
import { forwardRef } from "react";

const ThemeableIconFrame = styled(View, {
  animation: "slow",

  enterStyle: {
    opacity: 0,
    scale: 0.5
  },

  exitStyle: {
    opacity: 0,
    scale: 0.5
  }
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number" ? size : getFontSize(size as FontSizeTokens)) *
    scale
  );
};

type ThemedIconExtraProps = {
  disabled?: boolean;
  theme?: string;
  size?: FontSizeTokens;
  scaleIcon?: number;
  hideIcons?: boolean;
  color?: ColorTokens | string;
};

export const ThemedIcon = ThemeableIconFrame.styleable<ThemedIconExtraProps>(
  (
    {
      children,
      theme,
      disabled = false,
      hideIcons = false,
      scaleIcon = 1.75,
      size = "$3",
      ...props
    },
    ref
  ) => {
    const themeColors = useTheme({
      name: theme
    });

    const color = disabled
      ? "$disabled"
      : getVariable(
          (props.color &&
            props.color in themeColors &&
            themeColors[props.color as any]?.get("web")) ||
            props.color ||
            (!theme || theme === ColorRole.BASE
              ? themeColors.color?.get("web")
              : themeColors.primary?.get("web"))
        );

    const getThemedIcon = useGetThemedIcon({
      size: getIconSize(size, scaleIcon),
      color
    });

    // if (
    //   hideIcons ||
    //   (theme &&
    //     (theme.toLowerCase().includes(ColorRole.ERROR) ||
    //       theme.toLowerCase().includes(ColorRole.WARNING) ||
    //       theme.toLowerCase().includes(ColorRole.INFO) ||
    //       theme.toLowerCase().includes(ColorRole.HELP) ||
    //       theme.toLowerCase().includes(ColorRole.SUCCESS))) ||
    //   disabled
    // ) {
    //   return null;
    // }

    return (
      <ThemeableIconFrame ref={ref} {...props} theme={theme}>
        {getThemedIcon(children)}
      </ThemeableIconFrame>
    );
  }
);

type ThemeableIconExtraProps = {
  disabled?: boolean;
  theme?: string;
  size?: FontSizeTokens;
  scaleIcon?: number;
  hideIcons?: boolean;
  color?: ColorTokens | string;
};

export const ThemeableIcon = forwardRef<
  typeof ThemeableIconFrame,
  ThemeableIconExtraProps
>(
  (
    {
      theme,
      disabled = false,
      hideIcons = false,
      scaleIcon = 1.75,
      size = "$3",
      ...props
    },
    ref
  ) => {
    const themeColors = useTheme({
      name: theme
    });

    const color = disabled
      ? "$disabled"
      : getVariable(
          (props.color &&
            props.color in themeColors &&
            themeColors[props.color as any]?.get("web")) ||
            props.color ||
            (!theme || theme === "base"
              ? themeColors.color10?.get("web")
              : themeColors.primary?.get("web"))
        );

    const getThemedIcon = useGetThemedIcon({
      size: getIconSize(size, scaleIcon),
      color
    });

    if (
      hideIcons ||
      (!theme?.toLowerCase().includes(ColorRole.ERROR) &&
        !theme?.toLowerCase().includes(ColorRole.WARNING) &&
        !theme?.toLowerCase().includes(ColorRole.INFO) &&
        !theme?.toLowerCase().includes(ColorRole.HELP) &&
        !theme?.toLowerCase().includes(ColorRole.SUCCESS) &&
        !disabled)
    ) {
      return null;
    }

    return (
      <ThemeableIconFrame
        ref={ref}
        {...props}
        theme={theme}
        disabled={disabled}>
        {!disabled &&
          theme &&
          (theme.toLowerCase().includes(ColorRole.ERROR) ||
            theme.toLowerCase().includes(ColorRole.WARNING)) &&
          getThemedIcon(<AlertCircle />)}
        {!disabled &&
          theme &&
          theme.toLowerCase().includes(ColorRole.INFO) &&
          getThemedIcon(<Info />)}
        {!disabled &&
          theme &&
          theme.toLowerCase().includes(ColorRole.HELP) &&
          getThemedIcon(<HelpCircle />)}
        {!disabled &&
          theme &&
          theme.toLowerCase().includes(ColorRole.SUCCESS) &&
          getThemedIcon(<CheckCircle />)}
        {disabled && getThemedIcon(<Lock />)}
      </ThemeableIconFrame>
    );
  }
);
