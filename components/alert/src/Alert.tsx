import { ColorRole } from "@storm-stack/types";
import {
  createStyledContext,
  getVariable,
  styled,
  useTheme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ThemeableStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import type {
  ColorTokens,
  FontSizeTokens,
  GetProps,
  SizeTokens,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";

const defaultContextValues = {
  size: "$3" as SizeTokens,
  scaleIcon: 2,
  color: undefined,
  theme: ColorRole.BASE
} as const;

export const AlertContext = createStyledContext<{
  size: SizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  theme: string;
}>(defaultContextValues);

const ALERT_NAME = "Alert";

export const AlertFrame = styled(ThemeableStack, {
  name: ALERT_NAME,
  context: AlertContext,

  overflow: "hidden",
  animation: "$slow",
  borderColor: "$borderColor",
  borderWidth: 1,

  variants: {
    unstyled: {
      false: {
        size: "$true",
        position: "relative"
      }
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const AlertBackground = styled(YStack, {
  name: ALERT_NAME,
  context: AlertContext,

  fullscreen: true,
  backgroundColor: "$fg",
  animation: "$slow",
  overflow: "hidden",
  zIndex: 0,
  opacity: 0.025
});

const AlertBackgroundGradient = styled(LinearGradient, {
  name: ALERT_NAME,
  context: AlertContext,

  fullscreen: true,
  flexDirection: "row",
  animation: "$slow",
  overflow: "hidden",
  opacity: 0.8,
  zIndex: 5,
  colors: ["transparent", "$backgroundHover"],
  start: [0, 0],
  end: [1.0, 1.0]
});

const AlertContent = styled(YStack, {
  name: ALERT_NAME,
  context: AlertContext,

  flexDirection: "column",
  animation: "$slow",
  zIndex: 20,

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.space[val] ?? val,
          padding: tokens.space[val] ?? val
        };
      }
    }
  }
});

const AlertFrameImpl = AlertFrame.styleable(
  (props, forwardedRef) => {
    const { children, theme, ...rest } = props;

    return (
      <AlertFrame ref={forwardedRef} {...rest} theme={theme}>
        <AlertBackground
          style={{
            filter: "blur(2px)"
          }}
          theme={theme}
        />
        <AlertBackgroundGradient theme={theme} />
        <AlertContent theme={theme}>{children}</AlertContent>
      </AlertFrame>
    );
  },
  {
    staticConfig: { componentName: ALERT_NAME }
  }
);

export const AlertHeader = styled(ThemeableStack, {
  name: ALERT_NAME,
  context: AlertContext,

  flexDirection: "row",
  paddingBottom: 0,
  zIndex: 10,
  backgroundColor: "transparent",
  alignItems: "center",

  variants: {
    unstyled: {
      false: {}
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.space[val] ?? val
        };
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const AlertIconFrame = styled(View, {
  name: ALERT_NAME,
  context: AlertContext,

  justifyContent: "center",
  alignItems: "center",
  animation: "$slow",
  backgroundColor: "$color4",
  padding: "$2",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
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

const AlertIcon = AlertIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const context = AlertContext.useStyledContext();
  const { size = "$true", color: contextColor, scaleIcon = 1 } = context;

  const themeColors = useTheme({
    name: context.theme
  });
  const color = getVariable(
    colorProp ||
      contextColor ||
      themeColors[contextColor as any]?.get("web") ||
      themeColors.primary?.get("web")
  );
  const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <AlertIconFrame ref={ref} theme={context.theme} {...rest}>
      {getThemedIcon(children)}
    </AlertIconFrame>
  );
});

export const AlertIconWrapper = AlertIcon.styleable(
  ({ children, ...props }: any, ref: any) => {
    const { theme } = AlertContext.useStyledContext();

    if (
      theme &&
      (theme.toLowerCase().includes(ColorRole.ERROR) ||
        theme.toLowerCase().includes(ColorRole.WARNING) ||
        theme.toLowerCase().includes(ColorRole.INFO) ||
        theme.toLowerCase().includes(ColorRole.HELP) ||
        theme.toLowerCase().includes(ColorRole.SUCCESS))
    ) {
      return null;
    }

    return (
      <AlertIcon ref={ref} {...props}>
        {children}
      </AlertIcon>
    );
  }
);

const AlertHeading = styled(SizableText, {
  name: "Alert",
  context: AlertContext,

  theme: "base",
  fontFamily: "$heading",
  color: "$fg",
  zIndex: 20,

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 2.6;
        const lineHeight = (heightToken ?? 1) * 2;
        const fontWeight = config.font.weight?.["$6"];
        const letterSpacing = config.font.letterSpacing?.[val];
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    }
  } as const
});

const AlertBody = styled(SizableText, {
  name: ALERT_NAME,
  context: AlertContext,

  theme: "base",
  fontFamily: "$body",
  color: "$base10",
  zIndex: 20,
  paddingVertical: 0,

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.5;
        const lineHeight = (heightToken ?? 1) * 1.3;
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          textTransform,
          fontStyle
        };
      }
    }
  } as const
});

export type AlertHeaderProps = GetProps<typeof AlertHeader>;
export type AlertHeadingProps = GetProps<typeof AlertHeading>;
export type AlertBodyProps = GetProps<typeof AlertBody>;
export type AlertIconProps = GetProps<typeof AlertIconWrapper>;

export type AlertProps = GetProps<typeof AlertFrameImpl>;

export const Alert = withStaticProperties(AlertFrameImpl, {
  Heading: AlertHeading,
  Icon: AlertIconWrapper,
  Header: AlertHeader,
  Body: AlertBody
});
