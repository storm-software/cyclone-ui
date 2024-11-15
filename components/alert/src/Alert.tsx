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

import { BodyText } from "@cyclone-ui/body-text";
import { ColorThemeName } from "@cyclone-ui/colors";
import { Container } from "@cyclone-ui/container";
import { HeadingText } from "@cyclone-ui/heading-text";
import {
  ThemeableIcon,
  ThemedIcon,
  type ThemeableIconProps
} from "@cyclone-ui/themeable-icon";
import {
  createStyledContext,
  styled,
  Theme,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ThemeableStack, YStack } from "@tamagui/stacks";
import type {
  GetProps,
  SizeTokens,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";

export type AlertContextProps = {
  size: SizeTokens;
  theme?: string;
};

export const AlertContext = createStyledContext<AlertContextProps>({
  size: "$true"
});

const AlertFrame = styled(Container, {
  name: "Alert",
  context: AlertContext,

  animation: "normal",
  overflow: "hidden",
  position: "relative",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const AlertBackground = styled(YStack, {
  name: "Alert",
  context: AlertContext,

  fullscreen: true,
  backgroundColor: "$fg",
  animation: "normal",
  overflow: "hidden",
  zIndex: 0,
  opacity: 0.025
});

const AlertBackgroundGradient = styled(LinearGradient, {
  name: "Alert",
  context: AlertContext,

  fullscreen: true,
  flexDirection: "row",
  animation: "normal",
  overflow: "hidden",
  opacity: 0.8,
  zIndex: 5,
  colors: ["transparent", "$backgroundHover"],
  start: [0, 0],
  end: [1.0, 1.0]
});

const AlertContent = styled(YStack, {
  name: "Alert",
  context: AlertContext,

  flexDirection: "column",
  animation: "normal",
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
      <Theme name={theme}>
        <AlertFrame ref={forwardedRef} {...rest}>
          <AlertBackground
            style={{
              filter: "blur(2px)"
            }}
          />
          <AlertBackgroundGradient />
          <AlertContent>{children}</AlertContent>
        </AlertFrame>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "Alert" }
  }
);

const AlertHeader = styled(ThemeableStack, {
  name: "Alert",
  context: AlertContext,

  flexDirection: "row",
  paddingBottom: 0,
  zIndex: 10,
  backgroundColor: "transparent",
  alignItems: "center",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.space[val] ?? val
        };
      }
    }
  } as const
});

const AlertIcon = ({ children, ...props }: ThemeableIconProps) => {
  const { theme, size } = AlertContext.useStyledContext();

  if (children) {
    return (
      <ThemeableIcon theme={theme} size={size} {...props}>
        {children}
      </ThemeableIcon>
    );
  }

  return <ThemedIcon theme={theme} size={size} {...props} />;
};

const AlertHeaderHeading = styled(HeadingText, {
  name: "AlertHeaderHeading",
  context: AlertContext,

  color: "$color",
  zIndex: 20,

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<TextProps>) => {
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

const AlertHeaderHeadingImpl = AlertHeaderHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { size } = AlertContext.useStyledContext();

    return (
      <Theme name={ColorThemeName.BASE} shallow={true}>
        <AlertHeaderHeading ref={forwardedRef} size={size} {...props}>
          {children}
        </AlertHeaderHeading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertHeaderHeading" }
  }
);

const AlertBody = styled(BodyText, {
  name: "AlertBody",
  context: AlertContext,

  color: "$color",
  zIndex: 20,
  paddingVertical: 0,

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<TextProps>) => {
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
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const AlertBodyImpl = AlertBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { size } = AlertContext.useStyledContext();

    return (
      <Theme name={ColorThemeName.BASE} shallow={true}>
        <AlertBody ref={forwardedRef} size={size} {...props}>
          {children}
        </AlertBody>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertBody" }
  }
);

export type AlertHeaderProps = GetProps<typeof AlertHeader>;
export type AlertHeadingProps = GetProps<typeof AlertHeaderHeadingImpl>;
export type AlertBodyProps = GetProps<typeof AlertBodyImpl>;
export type AlertIconProps = GetProps<typeof AlertIcon>;

export type AlertProps = GetProps<typeof AlertFrameImpl>;

export const Alert = withStaticProperties(AlertFrameImpl, {
  Header: withStaticProperties(AlertHeader, {
    Heading: AlertHeaderHeadingImpl,
    Icon: AlertIcon
  }),
  Body: AlertBodyImpl
});
