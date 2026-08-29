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

import type { DialogProps } from "@cyclone-ui/dialog";
import { Dialog, DialogContext } from "@cyclone-ui/dialog";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { Theme, View, withStaticProperties } from "@tamagui/core";
import { AlertCircle } from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

const AlertDialogFrame: React.FC<DialogProps> = ({
  children,
  ...props
}: DialogProps) => {
  return <Dialog {...props}>{children}</Dialog>;
};

const AlertDialogIcon = ThemeableIcon.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { theme } = DialogContext.useStyledContext();

    const padding = theme?.includes("success") ? "$3xl" : "$xl";

    return (
      <YStack position="relative" minWidth="100%" alignItems="center">
        <View
          theme={theme}
          transition="400ms"
          enterStyle={{
            y: -100,
            opacity: 0.6
          }}
          position="absolute"
          display="block"
          width="100%"
          height="55%"
          backgroundColor="$foreground"
          zIndex="$10"
        />

        <XStack zIndex="$20" justifyContent="center" paddingTop="$3xl">
          <Theme name={theme}>
            <View
              padding={padding}
              backgroundColor="$backgroundFloating"
              borderRadius={1000_000_000}>
              <ThemeableIcon
                ref={forwardedRef}
                {...props}
                theme={theme}
                color="$foreground"
                size="$14xl">
                {children || getIconByTheme({ theme }) || <AlertCircle />}
              </ThemeableIcon>
            </View>
          </Theme>
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
    return (
      <Dialog.Portal>
        <Dialog.Overlay key="overlay" />
        <Dialog.Container
          ref={forwardedRef}
          key="content"
          {...props}
          bordered={false}
          noPadding={true}>
          {children}
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
        paddingHorizontal="$7xl"
        paddingTop="$xl"
        paddingBottom="$7xl"
        gap="$3xl"
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
      <Dialog.Heading ref={forwardedRef} {...props}>
        {children}
      </Dialog.Heading>
    );
  },
  {
    staticConfig: { componentName: "AlertDialogHeading" }
  }
);

const AlertDialogBody = Dialog.Body.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Dialog.Body
        ref={forwardedRef}
        color="$foregroundBody"
        size="$14xl"
        {...props}>
        {children}
      </Dialog.Body>
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
