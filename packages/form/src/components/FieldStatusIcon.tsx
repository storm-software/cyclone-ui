import { ColorRole } from "@cyclone-ui/colors";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  getVariable,
  styled,
  useTheme,
  useThemeName,
  View
} from "@tamagui/core";
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
import { useFieldActions } from "../hooks";

export const FieldStatusIconFrame = styled(View, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        const padding = tokens.space[val] ?? 0;

        return {
          paddingHorizontal: padding
        };
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number" ? size : getFontSize(size as FontSizeTokens)) *
    scale
  );
};

export const FieldStatusIconWrapper = FieldStatusIconFrame.styleable<{
  hideIcons?: boolean;
}>(({ children, theme, disabled, hideIcons = false, ...props }, ref) => {
  if (
    hideIcons ||
    (theme &&
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
    <FieldStatusIconFrame ref={ref} {...props} theme={theme}>
      {children}
    </FieldStatusIconFrame>
  );
});

type FieldStatusIconExtraProps = {
  disabled?: boolean;
  theme?: string;
  size?: FontSizeTokens;
  scaleIcon?: number;
  hideIcons?: boolean;
  color?: ColorTokens | string;
  animated?: boolean;
};

const FieldStatusIconContainer = styled(View, {
  animation: "$slow",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  opacity: 1,
  scale: 1,

  enterStyle: {
    opacity: 0,
    scale: 0
  },

  exitStyle: {
    opacity: 0,
    scale: 0
  }
});

export const FieldStatusIcon = forwardRef<
  typeof FieldStatusIconFrame,
  FieldStatusIconExtraProps
>(
  (
    {
      disabled = false,
      hideIcons = false,
      scaleIcon = 1.75,
      size = "$3",
      ...props
    },
    forwardedRef
  ) => {
    const theme = useThemeName();
    const themeColors = useTheme({
      name: theme
    });

    const { focus } = useFieldActions();

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
      <FieldStatusIconFrame
        ref={forwardedRef}
        {...props}
        theme={theme}
        disabled={disabled}
        size={size}
        onPress={focus}>
        <FieldStatusIconContainer>
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
        </FieldStatusIconContainer>
      </FieldStatusIconFrame>
    );
  }
);
