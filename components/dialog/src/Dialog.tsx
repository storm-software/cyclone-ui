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
import { Container } from "@cyclone-ui/container";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import type { OverlayProps } from "@cyclone-ui/overlay";
import { Overlay } from "@cyclone-ui/overlay";
import type { GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Theme
} from "@tamagui/core";
import type {
  DialogContentProps as TamaguiDialogContentProps,
  DialogOverlayProps as TamaguiDialogOverlayProps,
  DialogProps as TamaguiDialogProps
} from "@tamagui/dialog";
import {
  Dialog as TamaguiDialog,
  DialogClose as TamaguiDialogClose,
  DialogContent as TamaguiDialogContent,
  DialogDescription as TamaguiDialogDescription,
  DialogOverlay as TamaguiDialogOverlay,
  DialogPortal as TamaguiDialogPortal,
  DialogTitle as TamaguiDialogTitle,
  DialogTrigger as TamaguiDialogTrigger
} from "@tamagui/dialog";
import { withStaticProperties } from "@tamagui/helpers";
import * as React from "react";

export interface DialogContextProps {
  theme: string;
  overlay: boolean;
}

export const DialogContext = createStyledContext<
  DialogContextProps,
  "theme" | "overlay"
>(
  {
    theme: "base",
    overlay: true
  } as DialogContextProps,
  {
    keys: ["theme", "overlay"]
  }
);

const DialogHeading = styled(HeadingLargeText, {
  displayName: "DialogHeading",
  context: DialogContext,
  color: "primary"
});

const DialogHeadingImpl = createStyledHOC(
  DialogHeading,
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiDialogTitle render="span">
        <DialogHeading ref={forwardedRef} {...props}>
          {children}
        </DialogHeading>
      </TamaguiDialogTitle>
    );
  },
  {
    displayName: "DialogHeading"
  }
);

const DialogBody = styled(BodyText, {
  displayName: "DialogBody",
  color: "ink"
});

const DialogBodyImpl = createStyledHOC(
  DialogBody,
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiDialogDescription render="span">
        <DialogBody ref={forwardedRef} {...props}>
          {children}
        </DialogBody>
      </TamaguiDialogDescription>
    );
  },
  {
    displayName: "DialogBody"
  }
);

// v2 applied `$max-sm={{ flexBasis: "100%" }}` on top of the caller's
// `flexBasis`; keep the caller's value as the base of the flat value.
const withFullBasisOnSmall = (flexBasis: unknown) =>
  flexBasis == null || flexBasis === ""
    ? "max-sm:100%"
    : `${typeof flexBasis === "number" ? `${flexBasis}px` : String(flexBasis)} max-sm:100%`;

const DialogAction = createStyledHOC(
  Button,
  (
    { children, onPress, variant = "primary", flexBasis, ...props },
    forwardedRef
  ) => {
    return (
      <TamaguiDialogClose onPress={onPress} asChild={true}>
        <Button
          ref={forwardedRef}
          {...props}
          variant={variant}
          flexBasis={withFullBasisOnSmall(flexBasis)}>
          {children}
        </Button>
      </TamaguiDialogClose>
    );
  },
  {
    displayName: "Dialog"
  }
);

const DialogClose = createStyledHOC(
  Button,
  (
    { children, onPress, variant = "outlined", flexBasis, ...props },
    forwardedRef
  ) => {
    return (
      <TamaguiDialogClose onPress={onPress} asChild={true}>
        <Button
          ref={forwardedRef}
          {...props}
          variant={variant}
          flexBasis={withFullBasisOnSmall(flexBasis)}>
          {children}
        </Button>
      </TamaguiDialogClose>
    );
  },
  {
    displayName: "Dialog"
  }
);

// Tamagui's `DialogOverlay` owns presence and pointer-event handling; the
// visual backdrop comes from the shared `Overlay` component.
const DialogOverlayFrame = styled(TamaguiDialogOverlay, {
  displayName: "DialogOverlay",
  context: DialogContext,
  transition: "200ms",
  variants: {
    overlay: {
      false: {
        display: "none"
      }
    }
  } as const,
  defaultVariants: {
    overlay: true
  }
});

const DialogOverlay = createStyledHOC(
  Overlay,
  (
    { forceMount, ...props }: OverlayProps & TamaguiDialogOverlayProps,
    forwardedRef
  ) => {
    return (
      <DialogOverlayFrame forceMount={forceMount}>
        <Overlay ref={forwardedRef} {...props} />
      </DialogOverlayFrame>
    );
  },
  {
    displayName: "DialogOverlay"
  }
);

const DialogFrame: React.FC<
  TamaguiDialogProps & Partial<DialogContextProps>
> = ({ modal = true, children, theme = "base", overlay = true, ...props }) => {
  return (
    <DialogContext.Provider theme={theme} overlay={overlay}>
      <Theme name={theme}>
        <TamaguiDialog modal={modal} {...props}>
          {children}
        </TamaguiDialog>
      </Theme>
    </DialogContext.Provider>
  );
};

const DialogContainer = createStyledHOC(
  Container,
  (
    {
      children,
      bordered = true,
      variant = "floating",
      maxWidth,
      ...props
    }: GetProps<typeof Container> & TamaguiDialogContentProps,
    forwardedRef
  ) => {
    return (
      <TamaguiDialogContent
        backgroundColor="transparent"
        borderWidth={0}
        width="95%"
        // On this frame: capping only the container would leave the rest of
        // the 95% as a transparent strip that swallows clicks meant to close.
        maxWidth={maxWidth}
        flexDirection="row"
        padding={0}
        margin="7xl"
        borderRadius={0}
        transition={{
          duration: "200ms",
          opacity: { duration: "200ms", spring: { overshootClamping: true } }
        }}
        x="enter:0 exit:0"
        y="enter:-20px exit:10px"
        opacity="enter:0 exit:0"
        scale="enter:0.9 exit:0.95"
        boxShadow="focus-visible:ring-offset">
        <Container
          ref={forwardedRef}
          overflow="hidden"
          themeShallow={true}
          {...props}
          variant={variant}
          bordered={bordered}
          borderRadius="dialog">
          {children}
        </Container>
      </TamaguiDialogContent>
    );
  },
  {
    displayName: "Dialog"
  }
);

export const Dialog = withStaticProperties(DialogFrame, {
  Trigger: TamaguiDialogTrigger,
  Portal: TamaguiDialogPortal,
  Overlay: DialogOverlay,
  Container: DialogContainer,
  Heading: DialogHeadingImpl,
  Body: DialogBodyImpl,
  Close: withStaticProperties(DialogClose, {
    Text: Button.Text,
    Icon: Button.Icon
  }),
  Action: withStaticProperties(DialogAction, {
    Text: Button.Text,
    Icon: Button.Icon
  })
});

export type DialogProps = GetProps<typeof Dialog>;
