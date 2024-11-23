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

import { ColorThemeName } from "@cyclone-ui/colors";
import { Dialog, type DialogProps } from "@cyclone-ui/dialog";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { Theme, useThemeName, View, withStaticProperties } from "@tamagui/core";
import { AlertCircle } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

const AlertDialogFrame: React.FC<DialogProps> = ({
  children,
  theme,
  ...props
}: DialogProps) => {
  return (
    <Theme name={theme}>
      <Dialog {...props}>{children}</Dialog>
    </Theme>
  );
};

const AlertDialogIcon = ThemeableIcon.styleable(
  ({ children, ...props }, forwardedRef) => {
    const theme = useThemeName();

    const padding = theme?.includes(ColorThemeName.SUCCESS) ? "$3" : "$1.75";

    return (
      <YStack position="relative" minWidth="100%" alignItems="center">
        <View
          theme={theme}
          animation="normal"
          enterStyle={{
            y: -100,
            opacity: 0.6
          }}
          position="absolute"
          display="block"
          width="100%"
          height="55%"
          backgroundColor="$primary"
          zIndex="$1"
        />

        <XStack zIndex="$2" justifyContent="center" paddingTop="$3">
          <View
            theme={ColorThemeName.BASE}
            themeShallow={true}
            padding={padding}
            backgroundColor="$surfacePrimary"
            borderRadius={1000_000_000}>
            <ThemeableIcon
              ref={forwardedRef}
              {...props}
              theme={theme}
              size="$7">
              {children || getIconByTheme({ theme }) || <AlertCircle />}
            </ThemeableIcon>
          </View>
        </XStack>
      </YStack>
    );
  },
  {
    staticConfig: { componentName: "AlertDialog" }
  }
);

const AlertDialogContainer = Dialog.Container.styleable(
  ({ children, ...props }, forwardedRef) => {
    const theme = useThemeName();

    return (
      <Dialog.Portal>
        <Dialog.Overlay key="overlay" />
        <Dialog.Container
          ref={forwardedRef}
          key="content"
          variant="tertiary"
          {...props}
          theme={ColorThemeName.BASE}
          themeShallow={true}
          backgroundColor="$surfacePrimary"
          bordered={false}
          noPadding={true}>
          <Theme name={theme}>{children}</Theme>
        </Dialog.Container>
      </Dialog.Portal>
    );
  },
  {
    staticConfig: { componentName: "AlertDialog" }
  }
);

const AlertDialogContent = YStack.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <YStack
        ref={forwardedRef}
        paddingHorizontal="$5"
        paddingTop="$2"
        paddingBottom="$5"
        gap="$3"
        alignItems="center"
        {...props}>
        {children}
      </YStack>
    );
  },
  {
    staticConfig: { componentName: "AlertDialog" }
  }
);

const AlertDialogHeading = Dialog.Heading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <Dialog.Heading ref={forwardedRef} {...props}>
          {children}
        </Dialog.Heading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertDialogHeading" }
  }
);

const AlertDialogBody = Dialog.Body.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <Dialog.Body ref={forwardedRef} color="$secondary" size="$7" {...props}>
          {children}
        </Dialog.Body>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertDialogBody" }
  }
);

const AlertDialogClose = Dialog.Close.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Dialog.Close ref={forwardedRef} variant="outlined" {...props}>
        {children}
      </Dialog.Close>
    );
  },
  {
    staticConfig: { componentName: "AlertDialog" }
  }
);

export type AlertDialogContentProps = GetProps<typeof AlertDialogContent>;
export type AlertDialogHeadingProps = GetProps<typeof AlertDialogHeading>;
export type AlertDialogBodyProps = GetProps<typeof AlertDialogBody>;
export type AlertDialogIconProps = GetProps<typeof AlertDialogIcon>;

export type AlertDialogProps = GetProps<typeof AlertDialogFrame>;

export const AlertDialog = withStaticProperties(AlertDialogFrame, {
  Trigger: Dialog.Trigger,
  Container: withStaticProperties(AlertDialogContainer, {
    Icon: AlertDialogIcon,
    Content: withStaticProperties(AlertDialogContent, {
      Heading: AlertDialogHeading,
      Body: AlertDialogBody
    }),
    Action: withStaticProperties(Dialog.Action, {
      Text: Dialog.Action.Text,
      Icon: Dialog.Action.Icon
    }),
    Close: withStaticProperties(AlertDialogClose, {
      Text: Dialog.Close.Text,
      Icon: Dialog.Close.Icon
    })
  })
});
