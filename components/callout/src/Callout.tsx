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

import { BodyText } from "@cyclone-ui/body-text";
import { Container } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { Heading2XLText } from "@cyclone-ui/heading-text";
import type { ColorThemeName } from "@cyclone-ui/state/theme";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { Diagonal } from "@cyclone-ui/vectors";
import {
  createStyledContext,
  styled,
  Theme,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

export interface CalloutContextProps {
  theme?: ColorThemeName;
}

export const CalloutContext = createStyledContext<CalloutContextProps>({
  theme: undefined
});

const CalloutBackgroundLowGradient = styled(LinearGradient, {
  name: "Callout",

  fullscreen: true,
  flexDirection: "row",
  transition: "200ms",
  overflow: "hidden",
  opacity: 1,
  zIndex: "$0",
  colors: ["transparent", "$background"],
  start: [1.0, 1.0],
  end: [0, 0]
});

const CalloutBackgroundHighGradient = styled(LinearGradient, {
  name: "Callout",

  fullscreen: true,
  flexDirection: "row",
  transition: "200ms",
  overflow: "hidden",
  opacity: 0.94875,
  zIndex: "$10",
  colors: ["transparent", "$backgroundElevated"],
  start: [0, 1.0],
  end: [0, 1.0]
});

const CalloutBackgroundOverlay = styled(View, {
  name: "Callout",

  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "$backgroundSubtle",
  transition: "200ms",
  overflow: "hidden",
  opacity: 0.3,
  zIndex: "$20"
});

const CalloutBackgroundDiagonal = styled(YStack, {
  name: "Callout",

  position: "absolute",
  borderRadius: "$container",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: "$10"
});

const CalloutContent = styled(YStack, {
  name: "Callout",

  transition: "200ms",
  position: "relative",
  marginHorizontal: "$6xl",
  marginVertical: "$4xl",
  flexDirection: "column",
  maxHeight: "fit-content",
  zIndex: "$30",
  gap: "$xl",
  padding: "$md"
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
          variant="elevated"
          borderWidth={3}>
          <CalloutBackgroundLowGradient theme={theme} />
          <CalloutBackgroundHighGradient theme={theme} />
          <CalloutBackgroundOverlay theme={theme} />
          <CalloutBackgroundDiagonal theme={theme}>
            <Diagonal
              color="$foreground"
              height="100%"
              opacity={0.05}
              width="100%"
            />
          </CalloutBackgroundDiagonal>
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
  zIndex: "$10",
  backgroundColor: "transparent",
  alignItems: "center",
  gap: "$3xl"
});

const CalloutIcon = ({ children, ...props }: ThemeableIconProps) => {
  const theme = useThemeName();

  const icon = children || getIconByTheme({ theme });
  if (!icon) {
    return null;
  }

  return (
    <ThemeableIcon
      theme={theme}
      {...props}
      size="$13xl"
      color="$backgroundSubtle">
      {icon}
    </ThemeableIcon>
  );
};

const CalloutHeading = styled(Heading2XLText, {
  name: "CalloutHeading",

  color: "$foregroundInverse",
  zIndex: "$20"
});

const CalloutHeadingImpl = CalloutHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name="primary">
        <CalloutHeading
          ref={forwardedRef}
          color="$foregroundPrimary"
          {...props}>
          {children}
        </CalloutHeading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CalloutHeading" }
  }
);

const CalloutEyebrow = styled(EyebrowText, {
  name: "CalloutEyebrow",

  color: "$foregroundCaption",
  zIndex: "$20"
});

const CalloutEyebrowImpl = CalloutEyebrow.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name="primary">
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

  color: "$foregroundBody",
  zIndex: "$20",
  paddingVertical: 0
});

const CalloutBodyImpl = CalloutBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name="primary">
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
