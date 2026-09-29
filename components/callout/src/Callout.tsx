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
import { HeadingExtraLargeText } from "@cyclone-ui/heading-text";
import type { ColorThemeName } from "@cyclone-ui/state/theme";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { Diagonal } from "@cyclone-ui/vectors";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Theme,
  useThemeName,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

export interface CalloutContextProps {
  theme?: ColorThemeName;
}

export const CalloutContext = createStyledContext<CalloutContextProps, "theme">(
  {
    theme: undefined
  } as CalloutContextProps,
  {
    keys: ["theme"]
  }
);

// `LinearGradient` is not a plain styled view; v3 `styled()` only keeps style
// defaults for it, so the gradient geometry is passed as props at the call site.
const CalloutBackgroundLowGradient = styled(LinearGradient, {
  displayName: "Callout",
  position: "absolute",
  inset: 0,
  flexDirection: "row",
  transition: "200ms",
  overflow: "hidden",
  opacity: 1,
  zIndex: 0
});

const CalloutBackgroundHighGradient = styled(LinearGradient, {
  displayName: "Callout",
  position: "absolute",
  inset: 0,
  flexDirection: "row",
  transition: "200ms",
  overflow: "hidden",
  opacity: 0.6,
  zIndex: "10"
});

const CalloutBackgroundDiagonal = styled(YStack, {
  displayName: "Callout",
  position: "absolute",
  borderRadius: "container",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: "10"
});

const CalloutContent = styled(YStack, {
  displayName: "Callout",
  transition: "200ms",
  position: "relative",
  marginHorizontal: "6xl",
  marginVertical: "4xl",
  flexDirection: "column",
  maxHeight: "fit-content",
  zIndex: "30",
  gap: "xl",
  padding: "md"
});

const CalloutFrameImpl = createStyledHOC(
  Container,
  (props: GetProps<typeof Container> & CalloutContextProps, forwardedRef) => {
    const { children, theme, ...rest } = props;

    return (
      <CalloutContext.Provider theme={theme}>
        <Container
          ref={forwardedRef}
          {...rest}
          theme={theme}
          position="relative"
          variant="elevated"
          borderWidth={3}
          borderColor="accent">
          <CalloutBackgroundLowGradient
            theme={theme}
            start={[1.0, 1.0]}
            end={[0, 0]}
            colors={["transparent", "accent"]}
          />
          <CalloutBackgroundHighGradient
            theme={theme}
            start={[0, 1.0]}
            end={[0, 1.0]}
            colors={["transparent", "muted"]}
          />
          <CalloutBackgroundDiagonal theme={theme}>
            <Diagonal
              color="accent"
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
    displayName: "Callout"
  }
);

const CalloutHeader = styled(XStack, {
  displayName: "Callout",
  paddingBottom: 0,
  zIndex: "10",
  backgroundColor: "transparent",
  alignItems: "center",
  gap: "3xl"
});

const CalloutIcon = ({ children, ...props }: ThemeableIconProps) => {
  const theme = useThemeName();

  const icon = children || getIconByTheme({ theme });
  if (!icon) {
    return null;
  }

  return (
    <ThemeableIcon theme={theme} {...props} size="13xl" color="muted">
      {icon}
    </ThemeableIcon>
  );
};

const CalloutHeading = styled(HeadingExtraLargeText, {
  displayName: "CalloutHeading",
  color: "accent",
  zIndex: "20"
});

const CalloutHeadingImpl = createStyledHOC(
  CalloutHeading,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name="base">
        <CalloutHeading ref={forwardedRef} {...props}>
          {children}
        </CalloutHeading>
      </Theme>
    );
  },
  {
    displayName: "CalloutHeading"
  }
);

const CalloutEyebrow = styled(EyebrowText, {
  displayName: "CalloutEyebrow",
  color: "muted",
  zIndex: "20"
});

const CalloutEyebrowImpl = createStyledHOC(
  CalloutEyebrow,
  ({ children, ...props }, forwardedRef) => {
    return (
      <CalloutEyebrow ref={forwardedRef} {...props}>
        {children}
      </CalloutEyebrow>
    );
  },
  {
    displayName: "CalloutEyebrow"
  }
);

const CalloutBody = styled(BodyText, {
  displayName: "CalloutBody",
  color: "accent",
  zIndex: "20",
  paddingVertical: 0
});

const CalloutBodyImpl = createStyledHOC(
  CalloutBody,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name="base">
        <CalloutBody ref={forwardedRef} {...props}>
          {children}
        </CalloutBody>
      </Theme>
    );
  },
  {
    displayName: "CalloutBody"
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
