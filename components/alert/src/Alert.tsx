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
import { Button } from "@cyclone-ui/button";
import { ColorThemeName } from "@cyclone-ui/colors";
import { Container, type ContainerProps } from "@cyclone-ui/container";
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

  theme: ColorThemeName.BASE,
  variant: "ghost",
  circular: true,
  noPadding: true
});

const AlertCloseImpl = AlertClose.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <XStack minHeight="100%" alignItems="center" flexBasis={50}>
        <AlertClose ref={forwardedRef} {...props} padding="$2.5" size="$6">
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
      theme={ColorThemeName.BASE}
      themeShallow={true}
      bordered={false}
      noPadding={true}
      overflow="hidden">
      <Theme name={theme}>
        <XStack gap="$3" paddingRight="$1">
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
          animation="normal"
          enterStyle={{
            x: -200,
            opacity: 0.6
          }}
          position="absolute"
          display="block"
          height="100%"
          width="62%"
          backgroundColor="$primary"
          zIndex="$1"
        />

        <YStack zIndex="$2" justifyContent="center" paddingLeft="$3">
          <View
            theme={ColorThemeName.BASE}
            padding="$1.5"
            backgroundColor="$surfacePrimary"
            borderRadius={1000_000_000}>
            <ThemeableIcon
              ref={forwardedRef}
              {...props}
              theme={theme}
              size="$4">
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
        gap="$0.1"
        {...props}
        paddingVertical="$3">
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

  color: "$primary"
});

const AlertHeadingImpl = AlertHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
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

  color: "$secondary",
  fontSize: "$6"
});

const AlertBodyImpl = AlertBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
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
