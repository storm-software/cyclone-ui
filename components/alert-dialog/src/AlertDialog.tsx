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

import type { DialogProps } from "@cyclone-ui/dialog";
import { Dialog, DialogContext } from "@cyclone-ui/dialog";
import { AlertCircle, getIconByTheme, ThemeableIcon } from "@cyclone-ui/icons";
import { ScrollView } from "@cyclone-ui/scroll-view";
import {
  createStyledHOC,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

const AlertDialogFrame: React.FC<DialogProps> = ({
  children,
  ...props
}: DialogProps) => {
  return <Dialog {...props}>{children}</Dialog>;
};

const AlertDialogIcon = createStyledHOC(
  ThemeableIcon,
  ({ children, ...props }, forwardedRef) => {
    const { theme } = DialogContext.useStyledContext();

    const padding = theme?.includes("success") ? "3xl" : "xl";

    return (
      <YStack position="relative" minWidth="100%" alignItems="center">
        <View
          theme={theme}
          transition="400ms"
          y="enter:-100px"
          opacity="enter:0.6"
          position="absolute"
          display="block"
          width="100%"
          height="55%"
          backgroundColor="primary"
          zIndex="10"
        />

        <XStack zIndex="20" justifyContent="center" paddingTop="3xl">
          <Theme name={theme}>
            <View
              padding={padding}
              backgroundColor="elevated"
              borderRadius={1000_000_000}>
              <ThemeableIcon
                ref={forwardedRef}
                {...props}
                theme={theme}
                color="primary"
                size="14xl">
                {children || getIconByTheme({ theme }) || <AlertCircle />}
              </ThemeableIcon>
            </View>
          </Theme>
        </XStack>
      </YStack>
    );
  },
  {
    displayName: "AlertDialog"
  }
);

const AlertDialogContainer = createStyledHOC(
  Dialog.Container,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Dialog.Portal>
        <Dialog.Overlay key="overlay" />
        <Dialog.Container
          ref={forwardedRef}
          key="content"
          // Leaves room for the dialog's margin; `Content` scrolls past this.
          maxHeight="85vh"
          borderColor="hairline"
          {...props}
          tight={true}>
          {children}
        </Dialog.Container>
      </Dialog.Portal>
    );
  },
  {
    displayName: "AlertDialog"
  }
);

const AlertDialogContent = createStyledHOC(
  YStack,
  ({ children, ...props }, forwardedRef) => {
    return (
      <ScrollView
        // Sized to its content; `flex={1}` would collapse it to zero because
        // the dialog has no fixed height.
        flexShrink={1}
        size="lg">
        <YStack
          ref={forwardedRef}
          paddingLeft="7xl"
          // The stable scrollbar gutter (6px thumb + `lg`) takes the place of
          // part of the right padding, so the content stays centered.
          paddingRight="calc(var(--t-space-7xl) - 6px - var(--t-space-lg))"
          paddingTop="xl"
          paddingBottom="7xl"
          gap="3xl"
          alignItems="center"
          {...props}>
          {children}
        </YStack>
      </ScrollView>
    );
  },
  {
    displayName: "AlertDialog"
  }
);

const AlertDialogHeading = createStyledHOC(
  Dialog.Heading,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Dialog.Heading ref={forwardedRef} {...props}>
        {children}
      </Dialog.Heading>
    );
  },
  {
    displayName: "AlertDialogHeading"
  }
);

const AlertDialogBody = createStyledHOC(
  Dialog.Body,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Dialog.Body ref={forwardedRef} color="ink" {...props}>
        {children}
      </Dialog.Body>
    );
  },
  {
    displayName: "AlertDialogBody"
  }
);

const AlertDialogClose = createStyledHOC(
  Dialog.Close,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Dialog.Close ref={forwardedRef} variant="outlined" {...props}>
        {children}
      </Dialog.Close>
    );
  },
  {
    displayName: "AlertDialog"
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

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`AlertDialog.Trigger` is undefined on the server).
 */
export {
  AlertDialogBody,
  AlertDialogClose,
  AlertDialogContainer,
  AlertDialogContent,
  AlertDialogHeading,
  AlertDialogIcon
};
export const AlertDialogTrigger = Dialog.Trigger;
export const AlertDialogContainerActionText = Dialog.Action.Text;
export const AlertDialogContainerActionIcon = Dialog.Action.Icon;
export const AlertDialogContainerAction = Dialog.Action;
export const AlertDialogContainerCloseText = Dialog.Close.Text;
export const AlertDialogContainerCloseIcon = Dialog.Close.Icon;
