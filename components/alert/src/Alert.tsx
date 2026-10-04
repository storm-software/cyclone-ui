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
import { Button } from "@cyclone-ui/button";
import type { ContainerProps } from "@cyclone-ui/container";
import { Container } from "@cyclone-ui/container";
import { HeadingMediumText } from "@cyclone-ui/heading-text";
import { WarningCircle, X } from "@cyclone-ui/icons";
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
  | "base"
  | "brand"
  | "danger"
  | "warning"
  | "info"
  | "success"
  | "discovery"
  | "positive"
  | "negative";

export interface AlertContextProps {
  type?: AlertType;
}

export const AlertContext = createStyledContext<AlertContextProps, "type">(
  {
    type: undefined
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
          ghostOpacity={0.8}
          circular={true}
          noPadding={true}
          {...props}
          padding="md"
          size="10xl"
          flexGrow={0}>
          {children || (
            <Button.Icon position="absolute" inset={0} justifyContent="center">
              <X />
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

// eslint-disable-next-line react-refresh/only-export-components
const AlertFrameImpl = ({
  children,
  theme,
  type,
  ...props
}: AlertFrameProps) => {
  return (
    <AlertContext.Provider type={type}>
      <Container
        {...props}
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
  backgroundColor: "surfaceOverlay",
  borderRadius: 1000_000_000
});

const AlertIcon = createStyledHOC(
  ThemeableIcon,
  ({ children, ...props }, forwardedRef) => {
    const theme = useThemeName();
    const { type } = AlertContext.useStyledContext();
    const colorTheme = type || theme;

    return (
      <XStack position="relative" minHeight="100%" alignItems="center">
        <View
          theme={colorTheme}
          transition="500ms"
          x="enter:-200px"
          opacity="enter:0.6"
          position="absolute"
          display="block"
          height="100%"
          width="62%"
          backgroundColor="accent"
          zIndex="10"
        />

        <YStack zIndex="20" justifyContent="center" paddingLeft="3xl">
          <Theme name={type ?? "base"}>
            <AlertIconBackground backgroundColor="surfaceOverlay">
              <ThemeableIcon
                ref={forwardedRef}
                {...props}
                theme={colorTheme}
                {...(type ? { color: "accent" } : {})}
                size="10xl">
                {children || getIconByTheme({ theme: colorTheme }) || (
                  <WarningCircle />
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
  color: "accent"
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
