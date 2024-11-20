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

const ToastClose = styled(Button, {
  name: "ToastTrigger",

  theme: ColorThemeName.BASE,
  variant: "ghost",
  circular: true,
  noPadding: true
});

const ToastCloseImpl = ToastClose.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <XStack minHeight="100%" alignItems="center" flexBasis={50}>
        <ToastClose ref={forwardedRef} {...props} padding="$2.5" size="$6">
          {children || (
            <Button.Icon>
              <X />
            </Button.Icon>
          )}
        </ToastClose>
      </XStack>
    );
  },
  {
    staticConfig: { componentName: "Toast" }
  }
);

const ToastFrameImpl = ({ children, theme, ...props }: ContainerProps) => {
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

const ToastIcon = ThemeableIcon.styleable(
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
    staticConfig: { componentName: "Toast" }
  }
);

const ToastContent = YStack.styleable(
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
    staticConfig: { componentName: "Toast" }
  }
);

const ToastHeading = styled(Heading5Text, {
  name: "ToastHeading",

  color: "$primary"
});

const ToastHeadingImpl = ToastHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <ToastHeading ref={forwardedRef} {...props}>
          {children}
        </ToastHeading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "ToastHeading" }
  }
);

const ToastBody = styled(BodyText, {
  name: "ToastBody",

  color: "$secondary",
  fontSize: "$6"
});

const ToastBodyImpl = ToastBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <ToastBody ref={forwardedRef} {...props}>
          {children}
        </ToastBody>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "ToastBody" }
  }
);

export type ToastContentProps = GetProps<typeof ToastContent>;
export type ToastHeadingProps = GetProps<typeof ToastHeadingImpl>;
export type ToastBodyProps = GetProps<typeof ToastBodyImpl>;
export type ToastIconProps = GetProps<typeof ToastIcon>;

export type ToastProps = GetProps<typeof ToastFrameImpl>;

export const Toast = withStaticProperties(ToastFrameImpl, {
  Icon: ToastIcon,
  Content: withStaticProperties(ToastContent, {
    Heading: ToastHeadingImpl,
    Body: ToastBodyImpl
  }),
  Close: withStaticProperties(ToastCloseImpl, {
    Text: Button.Text,
    Icon: Button.Icon
  })
});
