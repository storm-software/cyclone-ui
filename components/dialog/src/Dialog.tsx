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
import { Container } from "@cyclone-ui/container";
import { Heading3Text } from "@cyclone-ui/heading-text";
import type { GetProps } from "@tamagui/core";
import { Theme, styled } from "@tamagui/core";
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

const DialogHeading = styled(Heading3Text, {
  name: "DialogHeading",

  color: "$color"
});

const DialogHeadingImpl = DialogHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiDialogTitle tag="span">
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

  color: "$color"
});

const DialogBodyImpl = DialogBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiDialogDescription tag="span">
        <DialogBody ref={forwardedRef} size="$6" {...props}>
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
  ({ children, onPress, variant = "primary", ...props }, forwardedRef) => {
    return (
      <TamaguiDialogClose onPress={onPress} asChild={true}>
        <Button
          ref={forwardedRef}
          {...props}
          variant={variant}
          $sm={{
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
  ({ children, onPress, variant = "tertiary", ...props }, forwardedRef) => {
    return (
      <TamaguiDialogClose onPress={onPress} asChild={true}>
        <Button
          ref={forwardedRef}
          {...props}
          variant={variant}
          $sm={{
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

  animation: "normal",
  fullscreen: true,
  pointerEvents: "auto",
  opacity: 0.85,
  backdropFilter: "blur(2px)",
  filter: "blur(2px)",
  colors: ["$tertiary", "transparent"],
  locations: [0.0, 1.0],
  start: [0, 0],
  end: [1, 1],

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
  }
});

const DialogOverlayBackground = styled(TamaguiDialogOverlay, {
  name: "DialogOverlay",

  animation: "normal",
  pointerEvents: "auto",
  opacity: 0.6,
  backdropFilter: "blur(35px)",
  filter: "blur(35px)",
  backgroundColor: "base1",

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
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

const DialogFrame: React.FC<TamaguiDialogProps & { theme?: string | null }> = ({
  modal = true,
  children,
  theme,
  ...props
}) => {
  return (
    <Theme name={theme}>
      <TamaguiDialog modal={modal} {...props}>
        {children}
      </TamaguiDialog>
    </Theme>
  );
};

const DialogContainer = Container.styleable<TamaguiDialogContentProps>(
  (
    {
      children,
      elevated = true,
      bordered = true,
      variant = "tertiary",
      ...props
    },
    forwardedRef
  ) => {
    return (
      <TamaguiDialogContent
        backgrounded={true}
        width="95%"
        flexDirection="row"
        padding={0}
        margin="$5"
        animation={[
          "fast",
          {
            opacity: {
              overshootClamping: true
            }
          }
        ]}
        enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        focusVisibleStyle={{
          outlineColor: "$accent10",
          outlineStyle: "solid",
          outlineWidth: 3,
          outlineOffset: "$1.25"
        }}>
        <Container
          ref={forwardedRef}
          overflow="hidden"
          themeShallow={true}
          {...props}
          variant={variant}
          bordered={bordered}
          elevated={elevated}>
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
