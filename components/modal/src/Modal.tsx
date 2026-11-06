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
import type { DialogProps } from "@cyclone-ui/dialog";
import { Dialog } from "@cyclone-ui/dialog";
import { ArrowLeft, Close } from "@cyclone-ui/icons";
import { ScrollView } from "@cyclone-ui/scroll-view";
import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
import { DialogClose } from "@tamagui/dialog";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack, YStack } from "@tamagui/stacks";
import type { FC, ReactNode } from "react";
import { Children, isValidElement } from "react";

// Not `variant`: `Modal.Frame` owns its `elevated` surface and inset-panel
// layout.
export type ModalProps = Omit<DialogProps, "variant">;
export type ModalFrameProps = GetProps<typeof Dialog.Container>;
export type ModalContentProps = GetProps<typeof YStack>;
export type ModalFooterProps = GetProps<typeof XStack>;
export type ModalHeaderProps = GetProps<typeof XStack> & {
  /** Renders a back arrow button that calls this handler. */
  onBack?: () => void;
  /** Renders an X button that closes the modal. */
  closable?: boolean;
};
export type ModalTitleProps = GetProps<typeof Dialog.Heading>;
export type ModalDescriptionProps = GetProps<typeof Dialog.Body>;

const ModalImpl: FC<ModalProps> = props => <Dialog {...props} />;

// The outer shell, portaled with the dialog's overlay. `Modal.Footer` sits on
// it, below `Modal.Content`.
const ModalFrameImpl: FC<ModalFrameProps> = ({
  children,
  maxWidth = 480,
  maxHeight = "85vh",
  ...props
}) => (
  <Dialog.Portal>
    <Dialog.Overlay key="overlay" />
    <Dialog.Container
      key="content"
      variant="surface"
      padding={0}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      // Portaled inputs inherit the text color (black by default).
      style={{ color: "var(--primary)" }}
      {...props}>
      {children}
    </Dialog.Container>
  </Dialog.Portal>
);

const ModalHeaderImpl: FC<ModalHeaderProps> = ({
  children,
  onBack,
  closable = false,
  ...props
}) => (
  <XStack
    alignItems="flex-start"
    gap="xl"
    width="100%"
    flexShrink={0}
    {...props}>
    {onBack && (
      <Button
        aria-label="Back"
        tooltip="Back"
        variant="ghost"
        size="sm"
        circular={true}
        flexGrow={0}
        onPress={onBack}>
        <Button.Icon>
          <ArrowLeft color="currentColor" />
        </Button.Icon>
      </Button>
    )}
    <YStack flex={1} gap="lg" alignSelf="center">
      {children}
    </YStack>
    {closable && (
      <DialogClose asChild={true}>
        <Button
          aria-label="Close"
          tooltip="Close"
          variant="ghost"
          size="sm"
          circular={true}
          flexGrow={0}>
          <Button.Icon>
            <Close color="currentColor" />
          </Button.Icon>
        </Button>
      </DialogClose>
    )}
  </XStack>
);

const ModalContentFrame = styled(YStack, {
  displayName: "ModalContent",
  flexGrow: 1,
  flexShrink: 1,
  margin: "lg",
  paddingTop: "5xl",
  gap: "6xl",
  backgroundColor: "canvas",
  borderWidth: 1,
  borderColor: "hairline",
  borderRadius: "sm",
  overflow: "hidden"
});

const isModalHeader = (child: ReactNode) =>
  isValidElement(child) && child.type === ModalHeaderImpl;

// The bordered inner panel. `Modal.Header` children stay pinned, and the rest
// scrolls once the frame reaches its `maxHeight`.
const ModalContent: FC<ModalContentProps> = ({ children, ...props }) => {
  const items = Children.toArray(children);
  const header = items.filter(isModalHeader);

  return (
    <ModalContentFrame {...props}>
      {header.length > 0 && (
        <YStack flexShrink={0} paddingHorizontal="6xl">
          {header}
        </YStack>
      )}
      <ScrollView
        // Sized to its content; `flex={1}` would collapse it to zero because
        // the modal has no fixed height.
        flexShrink={1}
        size="lg">
        <YStack
          paddingLeft="6xl"
          // The stable gutter (6px thumb + `lg` outer gap, see
          // `SCROLL_VIEW_STYLES`) takes the place of part of the right
          // padding, so the body still lines up with the header.
          paddingRight="calc(var(--t-space-6xl) - 6px - var(--t-space-lg))"
          paddingBottom="5xl"
          gap="6xl">
          {items.filter(child => !isModalHeader(child))}
        </YStack>
      </ScrollView>
    </ModalContentFrame>
  );
};

// `Dialog.Heading` / `Dialog.Body` label and describe the dialog.
const ModalTitle: FC<ModalTitleProps> = props => (
  <Dialog.Heading
    fontSize="2xl"
    lineHeight="lg"
    fontWeight="semibold"
    {...props}
  />
);

const ModalDescription: FC<ModalDescriptionProps> = props => (
  <Dialog.Body size="sm" {...props} />
);

const ModalBody: typeof BodyText = styled(BodyText, {
  displayName: "ModalBody",
  color: "ink"
});

const ModalFooter = styled(XStack, {
  displayName: "ModalFooter",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "2xl",
  width: "100%",
  padding: "xl",
  // `Modal.Content`'s `lg` margin already sits above, so the buttons end up
  // centered between the panel and the frame's bottom edge.
  paddingTop: "calc(var(--t-space-xl) - var(--t-space-lg))",
  flexShrink: 0
});

export interface ModalComponent extends FC<ModalProps> {
  Trigger: typeof Dialog.Trigger;
  Frame: FC<ModalFrameProps>;
  Content: FC<ModalContentProps>;
  Header: FC<ModalHeaderProps>;
  Title: FC<ModalTitleProps>;
  Description: FC<ModalDescriptionProps>;
  Body: typeof BodyText;
  Footer: FC<ModalFooterProps>;
}

export const Modal: ModalComponent = withStaticProperties(ModalImpl, {
  Trigger: Dialog.Trigger,
  Frame: ModalFrameImpl,
  Content: ModalContent,
  Header: ModalHeaderImpl,
  Title: ModalTitle,
  Description: ModalDescription,
  Body: ModalBody,
  Footer: ModalFooter
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Modal.Trigger` is undefined on the server).
 */
export {
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalFrameImpl as ModalFrame,
  ModalHeaderImpl as ModalHeader,
  ModalTitle
};
export const ModalTrigger = Dialog.Trigger;
