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

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import { Container } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import type { ColorThemeName } from "@cyclone-ui/state/theme";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { Diagonal } from "@cyclone-ui/vectors";
import {
  createStyledContext,
  createStyledHOC,
  styled,
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
  opacity: 0.1,
  zIndex: "10"
});

const CalloutBackgroundDiagonal = styled(YStack, {
  displayName: "Callout",
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: "10"
});

const CalloutBackgroundOverlay = styled(LinearGradient, {
  displayName: "Callout",
  position: "absolute",
  inset: 0,
  opacity: 0.85,
  pointerEvents: "none",
  zIndex: "25"
});

const CalloutContent = styled(YStack, {
  displayName: "Callout",
  transition: "200ms",
  position: "relative",
  marginHorizontal: "3xl",
  marginVertical: "2xl",
  flexDirection: "column",
  maxHeight: "fit-content",
  zIndex: "30",
  gap: "lg",
  padding: "xs"
});

const CalloutFrameImpl = createStyledHOC(
  Container,
  (props: GetProps<typeof Container> & CalloutContextProps, forwardedRef) => {
    const { children, theme, ...rest } = props;

    return (
      <CalloutContext.Provider theme={theme}>
        <Container
          ref={forwardedRef}
          tight={true}
          padding="lg"
          borderWidth={3}
          {...rest}
          theme={theme}
          position="relative"

          // Clip the background layers to the padding box so their corners
          // follow the border's inner radius.
          overflow="hidden"
          variant="outlined"
          backgroundColor="primary">
          <CalloutBackgroundLowGradient
            theme={theme}
            start={[1.0, 1.0]}
            end={[0, 0]}
            colors={["primary", "transparent"]}
          />
          {/* Plain `LinearGradient`: a `styled()` wrapper parses `start`/`end`
              as logical insets, so the gradient always ran top to bottom. */}
          <LinearGradient
            theme={theme}
            position="absolute"
            inset={0}
            zIndex="20"
            locations={[0, 0.6]}
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={["primary", "transparent"]}
          />
          <CalloutBackgroundHighGradient
            theme={theme}
            start={[0, 1.0]}
            end={[0, 1.0]}
            colors={["transparent", "secondary"]}
          />
          <CalloutBackgroundDiagonal theme={theme}>
            <Diagonal
              color="primary"
              height="100%"
              opacity={0.05}
              width="100%"
            />
          </CalloutBackgroundDiagonal>
          <CalloutBackgroundOverlay
            start={[1.0, 1.0]}
            end={[0, 0]}
            colors={["transparent", "#000"]}
          />
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
    <ThemeableIcon theme={theme} {...props} size="13xl" color="secondary">
      {icon}
    </ThemeableIcon>
  );
};

const CalloutHeading = styled(HeadingLargeText, {
  displayName: "CalloutHeading",
  color: "emphasis",
  zIndex: "20",
  fontSize: "3xl"
});

const CalloutHeadingImpl = createStyledHOC(
  CalloutHeading,
  ({ children, ...props }, forwardedRef) => {
    return (
      <CalloutHeading ref={forwardedRef} {...props}>
        {children}
      </CalloutHeading>
    );
  },
  {
    displayName: "CalloutHeading"
  }
);

const CalloutEyebrow = styled(EyebrowText, {
  displayName: "CalloutEyebrow",
  color: "secondary",
  fontWeight: "bold",
  fontSize: "md",
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
  color: "emphasis",
  fontWeight: "medium",
  fontSize: "md",
  zIndex: "20",
  paddingVertical: 0
});

const CalloutBodyImpl = createStyledHOC(
  CalloutBody,
  ({ children, ...props }, forwardedRef) => {
    return (
      <CalloutBody ref={forwardedRef} {...props}>
        {children}
      </CalloutBody>
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

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Callout.Eyebrow` is undefined on the server).
 */
export {
  CalloutBodyImpl as CalloutBody,
  CalloutEyebrowImpl as CalloutEyebrow,
  CalloutHeader,
  CalloutHeadingImpl as CalloutHeading,
  CalloutIcon
};
