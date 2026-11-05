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
import { Button } from "@cyclone-ui/button";
import type { ContainerProps } from "@cyclone-ui/container";
import { Container } from "@cyclone-ui/container";
import { HeadingMediumText } from "@cyclone-ui/heading-text";
import { AlertCircle, Close } from "@cyclone-ui/icons";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Theme,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

export type AlertType =
  "base" | "brand" | "danger" | "warning" | "info" | "success" | "discovery";

export interface AlertContextProps {
  type?: AlertType;
  hovered?: boolean;
}

export const AlertContext = createStyledContext<AlertContextProps, "type">(
  {
    type: undefined,
    hovered: false
  } as AlertContextProps,
  {
    keys: ["type"]
  }
);

// `Button` is a styled HOC; v3 `styled()` only keeps style defaults for it, so
// the behavioral props (`variant`, `circular`, `noPadding`, …) are passed at the
// call site below.
const AlertClose = styled(Button, {
  displayName: "AlertTrigger",
  position: "relative"
});

const AlertCloseImpl = createStyledHOC(
  AlertClose,
  ({ children, ...props }, forwardedRef) => {
    return (
      <XStack
        minHeight="100%"
        alignItems="center"
        flexBasis={50}
        marginRight="md">
        <AlertClose
          ref={forwardedRef}
          theme="base"
          variant="ghost"
          circular={true}
          noPadding={true}
          {...props}
          padding="md"
          size="10xl"
          flexGrow={0}>
          {children || (
            <Button.Icon position="absolute" inset={0} justifyContent="center">
              <Close />
            </Button.Icon>
          )}
        </AlertClose>
      </XStack>
    );
  },
  {
    displayName: "Alert"
  }
);

export type AlertFrameProps = ContainerProps & AlertContextProps;

const AlertFrameImpl = ({
  children,
  theme,
  type,
  hovered = false,
  ...props
}: AlertFrameProps) => {
  return (
    <AlertContext.Provider type={type} hovered={hovered}>
      <Container
        {...props}
        hovered={hovered}
        variant="overlay"
        themeShallow={true}
        bordered={false}
        noPadding={true}
        overflow="hidden">
        <Theme name={type ?? theme}>
          <XStack gap="3xl" paddingRight="md">
            {children}
          </XStack>
        </Theme>
      </Container>
    </AlertContext.Provider>
  );
};

const AlertIconBackground = styled(View, {
  displayName: "Alert",
  theme: "base",
  padding: "xl",
  backgroundColor: "floating",
  borderRadius: 1000_000_000
});

const AlertIcon = createStyledHOC(
  ThemeableIcon,
  ({ children, ...props }, forwardedRef) => {
    const theme = useThemeName();
    const { type, hovered } = AlertContext.useStyledContext();
    const colorTheme = type || theme;

    return (
      <XStack position="relative" minHeight="100%" alignItems="center">
        <View
          theme={colorTheme}
          // Offset by its own width (not a fixed distance) so the stripe is
          // visible from the first frame and lands with the Message toast's
          // 400ms entrance, instead of popping in after the card settles.
          transition="400ms"
          x="enter:-100%"
          opacity="enter:0.6"
          position="absolute"
          display="block"
          height="100%"
          width="62%"
          backgroundColor="primary"
          zIndex="10"
        />

        <YStack zIndex="20" justifyContent="center" paddingLeft="3xl">
          <Theme name={type ?? "base"}>
            {/* Matches the frame's `floating` surface, including its hovered shade. */}
            <AlertIconBackground
              backgroundColor={hovered ? "floating-hovered" : "floating"}>
              <ThemeableIcon
                ref={forwardedRef}
                {...props}
                theme={colorTheme}
                {...(type ? { color: "primary" } : {})}
                size="10xl">
                {children || getIconByTheme({ theme: colorTheme }) || (
                  <AlertCircle />
                )}
              </ThemeableIcon>
            </AlertIconBackground>
          </Theme>
        </YStack>
      </XStack>
    );
  },
  {
    displayName: "Alert"
  }
);

const AlertContent = createStyledHOC(
  YStack,
  ({ children, ...props }, forwardedRef) => {
    return (
      <YStack
        ref={forwardedRef}
        flex={1}
        gap="xxs"
        {...props}
        paddingVertical="3xl">
        {children}
      </YStack>
    );
  },
  {
    displayName: "Alert"
  }
);

const AlertHeading = styled(HeadingMediumText, {
  displayName: "AlertHeading",
  color: "primary"
});

const AlertHeadingImpl = createStyledHOC(
  AlertHeading,
  ({ children, ...props }, forwardedRef) => {
    const { type } = AlertContext.useStyledContext();

    return (
      <Theme name={type ?? "base"}>
        <AlertHeading ref={forwardedRef} {...props}>
          {children}
        </AlertHeading>
      </Theme>
    );
  },
  {
    displayName: "AlertHeading"
  }
);

const AlertBody = styled(BodyText, {
  displayName: "AlertBody"
});

const AlertBodyImpl = createStyledHOC(
  AlertBody,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name="base">
        <AlertBody ref={forwardedRef} {...props}>
          {children}
        </AlertBody>
      </Theme>
    );
  },
  {
    displayName: "AlertBody"
  }
);

export type AlertContentProps = GetProps<typeof AlertContent>;
export type AlertHeadingProps = GetProps<typeof AlertHeadingImpl>;
export type AlertBodyProps = GetProps<typeof AlertBodyImpl>;
export type AlertIconProps = GetProps<typeof AlertIcon>;

export type AlertProps = AlertFrameProps;

export const Alert = withStaticProperties(AlertFrameImpl, {
  Icon: AlertIcon,
  Content: withStaticProperties(AlertContent, {
    Heading: AlertHeadingImpl,
    Body: AlertBodyImpl
  }),
  Close: withStaticProperties(AlertCloseImpl, {
    Text: Button.Text,
    Icon: Button.Icon
  })
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Alert.Icon` is undefined on the server).
 */
export {
  AlertBodyImpl as AlertBody,
  AlertCloseImpl as AlertClose,
  AlertContent,
  AlertHeadingImpl as AlertHeading,
  AlertIcon
};
export const AlertCloseText = Button.Text;
export const AlertCloseIcon = Button.Icon;
