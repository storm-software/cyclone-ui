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
import { HeadingXLText } from "@cyclone-ui/heading-text";
import type { GetProps } from "@tamagui/core";
import { createStyledContext, styled, Theme } from "@tamagui/core";
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
import { LinearGradient } from "@tamagui/linear-gradient";
import * as React from "react";

export interface DialogContextProps {
  theme: string;
  overlay: boolean;
}

export const DialogContext = createStyledContext<DialogContextProps>({
  theme: "primary",
  overlay: true
});

const DialogHeading = styled(HeadingXLText, {
  name: "DialogHeading",
  context: DialogContext,

  color: "$foreground"
});

const DialogHeadingImpl = DialogHeading.styleable(
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
    staticConfig: { componentName: "DialogHeading" }
  }
);

const DialogBody = styled(BodyText, {
  name: "DialogBody",

  color: "$foregroundBody"
});

const DialogBodyImpl = DialogBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiDialogDescription render="span">
        <DialogBody ref={forwardedRef} size="$13xl" {...props}>
          {children}
        </DialogBody>
      </TamaguiDialogDescription>
    );
  },
  {
    staticConfig: { componentName: "DialogBody" }
  }
);

const DialogAction = Button.styleable(
  ({ children, onPress, variant = "inverse", ...props }, forwardedRef) => {
    return (
      <TamaguiDialogClose onPress={onPress} asChild={true}>
        <Button
          ref={forwardedRef}
          {...props}
          variant={variant}
          $max-sm={{
            flexBasis: "100%"
          }}>
          {children}
        </Button>
      </TamaguiDialogClose>
    );
  },
  {
    staticConfig: { componentName: "Dialog" }
  }
);

const DialogClose = Button.styleable(
  ({ children, onPress, variant = "outlined", ...props }, forwardedRef) => {
    return (
      <TamaguiDialogClose onPress={onPress} asChild={true}>
        <Button
          ref={forwardedRef}
          {...props}
          variant={variant}
          $max-sm={{
            flexBasis: "100%"
          }}>
          {children}
        </Button>
      </TamaguiDialogClose>
    );
  },
  {
    staticConfig: { componentName: "Dialog" }
  }
);

const DialogOverlayFrame = styled(LinearGradient, {
  name: "DialogOverlay",
  context: DialogContext,

  transition: "200ms",
  fullscreen: true,
  pointerEvents: "auto",
  opacity: 0.6,
  backdropFilter: "blur(2px)",
  filter: "blur(2px)",
  colors: ["$background", "transparent"],
  locations: [0.0, 1.0],
  start: [0, 0],
  end: [1, 1],

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
  },

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

const DialogOverlayBackground = styled(TamaguiDialogOverlay, {
  name: "DialogOverlay",
  context: DialogContext,

  transition: "200ms",
  pointerEvents: "auto",
  opacity: 0.6,
  backdropFilter: "blur(35px)",
  filter: "blur(35px)",
  backgroundColor: "$overlayBackdrop",

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
  },

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

const DialogOverlay =
  DialogOverlayBackground.styleable<TamaguiDialogOverlayProps>(
    (props, forwardedRef) => {
      return (
        <DialogOverlayBackground ref={forwardedRef} {...props}>
          <DialogOverlayFrame />
        </DialogOverlayBackground>
      );
    },
    {
      staticConfig: { componentName: "DialogOverlay" }
    }
  );

const DialogFrame: React.FC<
  TamaguiDialogProps & Partial<DialogContextProps>
> = ({
  modal = true,
  children,
  theme = "primary",
  overlay = true,
  ...props
}) => {
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

const DialogContainer = Container.styleable<TamaguiDialogContentProps>(
  (
    { children, bordered = true, variant = "floating", ...props },
    forwardedRef
  ) => {
    return (
      <TamaguiDialogContent
        backgroundColor="$background"
        width="95%"
        flexDirection="row"
        padding={0}
        margin="$7xl"
        borderRadius="$dialog"
        transition={[
          "200ms",
          {
            opacity: {
              overshootClamping: true
            }
          }
        ]}
        enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        focusVisibleStyle={{
          boxShadow: "$ring"
        }}>
        <Container
          ref={forwardedRef}
          overflow="hidden"
          themeShallow={true}
          {...props}
          variant={variant}
          bordered={bordered}
          borderRadius="$dialog">
          {children}
        </Container>
      </TamaguiDialogContent>
    );
  },
  {
    staticConfig: { componentName: "Dialog" }
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
