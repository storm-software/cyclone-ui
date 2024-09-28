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

export const ThemeableIconFrame = styled(View, {
  justifyContent: "center",
  alignItems: "center",
  animation: "slow",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          paddingHorizontal: tokens.space[val]
        };
      }
    }
  } as const
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number"
      ? size * 0.6
      : getFontSize(size as FontSizeTokens)) * scale
  );
};

export const ThemeableIconWrapper = ThemeableIconFrame.styleable<{
  hideIcons?: boolean;
}>(({ children, theme, disabled, hideIcons, ...props }, ref) => {
  if (
    (hideIcons &&
      theme &&
      (theme.toLowerCase().includes(ColorRole.ERROR) ||
        theme.toLowerCase().includes(ColorRole.WARNING) ||
        theme.toLowerCase().includes(ColorRole.INFO) ||
        theme.toLowerCase().includes(ColorRole.HELP) ||
        theme.toLowerCase().includes(ColorRole.SUCCESS))) ||
    disabled
  ) {
    return null;
  }

  return (
    <ThemeableIconFrame ref={ref} {...props} theme={theme}>
      {children}
    </ThemeableIconFrame>
  );
});

export const ThemeableIcon = ThemeableIconFrame.styleable<{
  disabled?: boolean;
  theme?: string;
  scaleIcon?: number;
  hideIcons?: boolean;
  color?: ColorTokens | string;
}>(
  (
    { children, theme, disabled, scaleIcon = 1.3, size = "$true", ...props },
    ref
  ) => {
    const themeColors = useTheme({
      name: theme
    });
    const color = disabled
      ? "$disabled"
      : getVariable(
          props.color ||
            themeColors[props.color as any]?.get("web") ||
            (!theme || theme === "base"
              ? themeColors.color8?.get("web")
              : themeColors.primary?.get("web"))
        );
    const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

    const getThemedIcon = useGetThemedIcon({
      size: iconSize,
      color: color as any
    });
    return (
      <ThemeableIconFrame
        ref={ref}
        {...props}
        theme={theme}
        disabled={disabled}
        size={size}>
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
        <ThemeableIconWrapper
          {...props}
          theme={theme}
          disabled={disabled}
          size={size}>
          {getThemedIcon(children)}
        </ThemeableIconWrapper>
        {disabled && getThemedIcon(<Lock />)}
      </ThemeableIconFrame>
    );
  }
);
