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
import { Heading5Text } from "@cyclone-ui/heading-text";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import {
  styled,
  Theme,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { AlertCircle, X } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

const AlertClose = styled(Button, {
  name: "AlertTrigger",

  theme: "base",
  variant: "ghost",
  circular: true,
  noPadding: true
});

const AlertCloseImpl = AlertClose.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <XStack minHeight="100%" alignItems="center" flexBasis={50}>
        <AlertClose ref={forwardedRef} {...props} padding="$2xl" size="$8xl">
          {children || (
            <Button.Icon>
              <X />
            </Button.Icon>
          )}
        </AlertClose>
      </XStack>
    );
  },
  {
    staticConfig: { componentName: "Alert" }
  }
);

const AlertFrameImpl = ({ children, theme, ...props }: ContainerProps) => {
  return (
    <Container
      {...props}
      variant="tertiary"
      theme={"base"}
      themeShallow={true}
      bordered={false}
      noPadding={true}
      overflow="hidden">
      <Theme name={theme}>
        <XStack gap="$3xl" paddingRight="$md">
          {children}
        </XStack>
      </Theme>
    </Container>
  );
};

const AlertIcon = ThemeableIcon.styleable(
  ({ children, ...props }, forwardedRef) => {
    const theme = useThemeName();

    return (
      <XStack position="relative" minHeight="100%" alignItems="center">
        <View
          theme={theme}
          transition="medium"
          enterStyle={{
            x: -200,
            opacity: 0.6
          }}
          position="absolute"
          display="block"
          height="100%"
          width="62%"
          backgroundColor="$backgroundPrimary"
          zIndex="$10"
        />

        <YStack zIndex="$20" justifyContent="center" paddingLeft="$3xl">
          <View
            theme={"base"}
            padding="$xl"
            backgroundColor="$surface1"
            borderRadius={1000_000_000}>
            <ThemeableIcon
              ref={forwardedRef}
              {...props}
              theme={theme}
              size="$5xl">
              {children || getIconByTheme({ theme }) || <AlertCircle />}
            </ThemeableIcon>
          </View>
        </YStack>
      </XStack>
    );
  },
  {
    staticConfig: { componentName: "Alert" }
  }
);

const AlertContent = YStack.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <YStack
        ref={forwardedRef}
        flex={1}
        gap="$xxs"
        {...props}
        paddingVertical="$3xl">
        {children}
      </YStack>
    );
  },
  {
    staticConfig: { componentName: "Alert" }
  }
);

const AlertHeading = styled(Heading5Text, {
  name: "AlertHeading",

  color: "$foregroundPrimary"
});

const AlertHeadingImpl = AlertHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={"base"}>
        <AlertHeading ref={forwardedRef} {...props}>
          {children}
        </AlertHeading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertHeading" }
  }
);

const AlertBody = styled(BodyText, {
  name: "AlertBody",

  color: "$foregroundSecondary",
  fontSize: "$lg"
});

const AlertBodyImpl = AlertBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={"base"}>
        <AlertBody ref={forwardedRef} {...props}>
          {children}
        </AlertBody>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertBody" }
  }
);

export type AlertContentProps = GetProps<typeof AlertContent>;
export type AlertHeadingProps = GetProps<typeof AlertHeadingImpl>;
export type AlertBodyProps = GetProps<typeof AlertBodyImpl>;
export type AlertIconProps = GetProps<typeof AlertIcon>;

export type AlertProps = GetProps<typeof AlertFrameImpl>;

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
