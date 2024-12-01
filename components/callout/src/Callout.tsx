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
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { Heading3Text } from "@cyclone-ui/heading-text";
import {
  getIconByTheme,
  ThemeableIcon,
  type ThemeableIconProps
} from "@cyclone-ui/themeable-icon";
import { Diagonal } from "@cyclone-ui/vectors";
import {
  createStyledContext,
  styled,
  Theme,
  useThemeName,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

export type CalloutContextProps = {
  theme?: ColorThemeName;
};

export const CalloutContext = createStyledContext<CalloutContextProps>({
  theme: undefined
});

const CalloutBackgroundLowGradient = styled(LinearGradient, {
  name: "Callout",

  fullscreen: true,
  flexDirection: "row",
  animation: "normal",
  overflow: "hidden",
  borderRadius: "$true",
  opacity: 0.9,
  zIndex: 5,
  colors: ["transparent", "$base1"],
  start: [1.0, 1.0],
  end: [0, 0]
});

const CalloutBackgroundHighGradient = styled(LinearGradient, {
  name: "Callout",

  fullscreen: true,
  flexDirection: "row",
  animation: "normal",
  overflow: "hidden",
  borderRadius: "$true",
  opacity: 0.25,
  zIndex: 8,
  colors: ["transparent", "$secondary"],
  start: [0, 1.0],
  end: [0, 1.0]
});

const CalloutBackgroundDiagonal = styled(Diagonal, {
  name: "Callout",

  position: "absolute",
  borderRadius: "$true",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  opacity: 0.05,
  zIndex: 10
});

const CalloutContent = styled(YStack, {
  name: "Callout",

  animation: "normal",
  width: "100%",
  flexDirection: "column",
  zIndex: 20,
  gap: "$2",
  padding: "$1"
});

const CalloutFrameImpl = Container.styleable<CalloutContextProps>(
  (props, forwardedRef) => {
    const { children, theme, ...rest } = props;

    return (
      <CalloutContext.Provider theme={theme}>
        <Container
          ref={forwardedRef}
          {...rest}
          theme={theme}
          position="relative"
          variant="quaternary"
          borderWidth={3}>
          <CalloutBackgroundLowGradient theme={theme} />
          <CalloutBackgroundHighGradient theme={theme} />
          <CalloutBackgroundDiagonal />
          <CalloutContent>{children}</CalloutContent>
        </Container>
      </CalloutContext.Provider>
    );
  },
  {
    staticConfig: { componentName: "Callout" }
  }
);

const CalloutHeader = styled(XStack, {
  name: "Callout",

  paddingBottom: 0,
  zIndex: 10,
  backgroundColor: "transparent",
  alignItems: "center",
  gap: "$3"
});

const CalloutIcon = ({ children, ...props }: ThemeableIconProps) => {
  const theme = useThemeName();

  const icon = children || getIconByTheme({ theme });
  if (!icon) {
    return null;
  }

  return (
    <ThemeableIcon theme={theme} {...props} size="$6">
      {icon}
    </ThemeableIcon>
  );
};

const CalloutHeading = styled(Heading3Text, {
  name: "CalloutHeading",

  color: "$color",
  zIndex: 20
});

const CalloutHeadingImpl = CalloutHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <CalloutHeading ref={forwardedRef}>{children}</CalloutHeading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CalloutHeading" }
  }
);

const CalloutEyebrow = styled(EyebrowText, {
  name: "CalloutEyebrow",

  color: "$tertiary",
  zIndex: 20
});

const CalloutEyebrowImpl = CalloutEyebrow.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <CalloutEyebrow ref={forwardedRef} {...props}>
          {children}
        </CalloutEyebrow>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CalloutEyebrow" }
  }
);

const CalloutBody = styled(BodyText, {
  name: "CalloutBody",

  color: "$secondary",
  zIndex: 20,
  paddingVertical: 0
});

const CalloutBodyImpl = CalloutBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <CalloutBody ref={forwardedRef} {...props}>
          {children}
        </CalloutBody>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CalloutBody" }
  }
);

export type CalloutHeaderProps = GetProps<typeof CalloutHeader>;
export type CalloutHeadingProps = GetProps<typeof CalloutHeadingImpl>;
export type CalloutBodyProps = GetProps<typeof CalloutBodyImpl>;
export type CalloutIconProps = GetProps<typeof CalloutIcon>;

export type CalloutProps = GetProps<typeof CalloutFrameImpl>;

export const Callout = withStaticProperties(CalloutFrameImpl, {
  Header: withStaticProperties(CalloutHeader, {
    Eyebrow: CalloutEyebrowImpl,
    Heading: CalloutHeadingImpl,
    Icon: CalloutIcon
  }),
  Body: CalloutBodyImpl
});
