import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import type { TamaguiElement } from "@tamagui/core";
import { Slottable, View, isTamaguiElement, styled } from "@tamagui/core";
import type { Scope } from "@tamagui/create-context";
import { createContextScope } from "@tamagui/create-context";
import type {
  DialogCloseProps as TamaguiDialogCloseProps,
  DialogContentProps as TamaguiDialogContentProps,
  DialogDescriptionProps as TamaguiDialogDescriptionProps,
  DialogOverlayProps as TamaguiDialogOverlayProps,
  DialogPortalProps as TamaguiDialogPortalProps,
  DialogProps as TamaguiDialogProps,
  DialogTitleProps as TamaguiDialogTitleProps,
  DialogTriggerProps as TamaguiDialogTriggerProps
} from "@tamagui/dialog";
import {
  Dialog as TamaguiDialog,
  DialogClose as TamaguiDialogClose,
  DialogContent as TamaguiDialogContent,
  DialogDescription as TamaguiDialogDescription,
  DialogOverlay as TamaguiDialogOverlay,
  DialogPortal as TamaguiDialogPortal,
  DialogTitle as TamaguiDialogTitle,
  DialogTrigger as TamaguiDialogTrigger,
  createDialogScope
} from "@tamagui/dialog";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { LinearGradient } from "@tamagui/linear-gradient";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { Alert } from "react-native";

const DIALOG_NAME = "Dialog";

type ScopedProps<P> = P & { __scopeDialog?: Scope };
const [createDialogContext] = createContextScope(DIALOG_NAME, [
  createDialogScope
]);

const useDialogScope = createDialogScope();

const TRIGGER_NAME = "DialogTrigger";

interface DialogTriggerProps extends TamaguiDialogTriggerProps {
  __native?: boolean;
}

const NativeDialogTriggerFrame = styled(View, {
  name: TRIGGER_NAME
});

const DialogTrigger = React.forwardRef<TamaguiElement, DialogTriggerProps>(
  (props: ScopedProps<DialogTriggerProps>, forwardedRef) => {
    if (props["__native"]) {
      const { __native, onPress, __onPress, ...rest } = props as any;
      return (
        <NativeDialogTriggerFrame
          {...rest}
          onPress={composeEventHandlers(onPress, __onPress)}
        />
      );
    }

    const { __scopeDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeDialog);
    return (
      <TamaguiDialogTrigger
        {...dialogScope}
        {...triggerProps}
        ref={forwardedRef}
      />
    );
  }
);

DialogTrigger.displayName = TRIGGER_NAME;

const TITLE_NAME = "DialogTitle";

type DialogTitleProps = TamaguiDialogTitleProps;

const DialogTitle = React.forwardRef<TamaguiElement, DialogTitleProps>(
  (props: ScopedProps<DialogTitleProps>, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeDialog);
    return (
      <TamaguiDialogTitle
        {...dialogScope}
        {...titleProps}
        color="$fg"
        ref={forwardedRef}
      />
    );
  }
);

DialogTitle.displayName = TITLE_NAME;

const DESCRIPTION_NAME = "DialogDescription";

type DialogDescriptionProps = TamaguiDialogDescriptionProps;

const DialogDescription = React.forwardRef<
  TamaguiElement,
  DialogDescriptionProps
>((props: ScopedProps<DialogDescriptionProps>, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeDialog);
  return (
    <TamaguiDialogDescription
      {...dialogScope}
      {...descriptionProps}
      ref={forwardedRef}
    />
  );
});

DialogDescription.displayName = DESCRIPTION_NAME;

const ACTION_NAME = "DialogAction";

type DialogActionProps = TamaguiDialogCloseProps;

const DialogAction = React.forwardRef<TamaguiElement, DialogActionProps>(
  (props: ScopedProps<DialogActionProps>, forwardedRef) => {
    const { __scopeDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeDialog);
    return (
      <TamaguiDialogClose
        {...dialogScope}
        {...actionProps}
        ref={forwardedRef}
      />
    );
  }
);

DialogAction.displayName = ACTION_NAME;

const CANCEL_NAME = "DialogCancel";

interface DialogCancelProps extends TamaguiDialogCloseProps {}

const DialogCancel = React.forwardRef<TamaguiElement, DialogCancelProps>(
  (props: ScopedProps<DialogCancelProps>, forwardedRef) => {
    const { __scopeDialog, ...cancelProps } = props;
    const { cancelRef } = useDialogContentContext(CANCEL_NAME, __scopeDialog);
    const dialogScope = useDialogScope(__scopeDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return <TamaguiDialogClose {...dialogScope} {...cancelProps} ref={ref} />;
  }
);

DialogCancel.displayName = CANCEL_NAME;

interface DialogPortalProps extends TamaguiDialogPortalProps {}

const DialogPortal: React.FC<DialogPortalProps> = (
  props: ScopedProps<DialogPortalProps>
) => {
  const { __scopeDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeDialog);
  return <TamaguiDialogPortal {...dialogScope} {...portalProps} />;
};

const PORTAL_NAME = "DialogPortal";
DialogPortal.displayName = PORTAL_NAME;

const OVERLAY_NAME = "DialogOverlay";

const DialogOverlayFrame = styled(LinearGradient, {
  name: OVERLAY_NAME,
  animation: "fast",
  opacity: 0.9,
  pointerEvents: "auto",
  colors: ["transparent", "black"],
  locations: [0.0, 1.0],
  start: [0, 0],
  end: [1, 1],

  variants: {
    unstyled: {
      false: {
        fullscreen: true,
        position: "absolute",
        zIndex: 100_000 - 1,
        pointerEvents: "auto"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

interface DialogOverlayProps extends TamaguiDialogOverlayProps {}

const DialogOverlay = DialogOverlayFrame.extractable(
  React.forwardRef<TamaguiElement, DialogOverlayProps>(
    (props: ScopedProps<DialogOverlayProps>, forwardedRef) => {
      const { __scopeDialog, ...overlayProps } = props;
      const dialogScope = useDialogScope(__scopeDialog);

      return (
        <DialogOverlayFrame>
          <TamaguiDialogOverlay
            {...dialogScope}
            {...overlayProps}
            opacity={0}
            ref={forwardedRef}
          />
        </DialogOverlayFrame>
      );
    }
  )
);

DialogOverlay.displayName = OVERLAY_NAME;

export type DialogProps = TamaguiDialogProps & {
  native?: boolean;
};

function forEachChildDeep(
  children: React.ReactNode[],
  onChild: (el: React.ReactElement) => boolean
) {
  for (const child of children) {
    if (!React.isValidElement(child)) {
      continue;
    }
    if (!onChild(child)) {
      continue;
    }
    if (child.props.children) {
      forEachChildDeep(React.Children.toArray(child.props.children), onChild);
    }
  }
}

function getStringChildren(child: React.ReactElement) {
  let string = "";
  forEachChildDeep(React.Children.toArray(child), child => {
    if (typeof child.props.children === "string") {
      string = child.props.children;
      return false;
    }
    return true;
  });
  return string;
}

const DialogInner: React.FC<DialogProps> = (
  props: ScopedProps<DialogProps>
) => {
  const { __scopeDialog, native, children, ...rest } = props;
  const dialogScope = useDialogScope(__scopeDialog);

  if (process.env.TAMAGUI_TARGET === "native") {
    const [open, setOpen] = useControllableState({
      prop: props.open,
      defaultProp: props.defaultOpen || false,
      onChange: props.onOpenChange,
      transition: true
    });

    let triggerElement: any = null;
    let title = "";
    let description = "";
    const buttons: {
      text: string;
      onPress: (value?: string | undefined) => void;
      style?: "default" | "cancel" | "destructive";
    }[] = [];

    forEachChildDeep(React.Children.toArray(props.children), child => {
      if (!React.isValidElement(child)) {
        return false;
      }

      const name = isTamaguiElement(child)
        ? child.type.staticConfig.componentName
        : typeof child.type === "object" && "displayName" in child.type
          ? (child.type as any).displayName
          : undefined;
      switch (name) {
        case TRIGGER_NAME: {
          triggerElement = React.cloneElement(child as any, {
            __native: true
          });
          return false;
        }
        case TITLE_NAME: {
          title = getStringChildren(child);
          return false;
        }
        case DESCRIPTION_NAME: {
          description = getStringChildren(child);
          return false;
        }
        case ACTION_NAME:
        case CANCEL_NAME: {
          const style = name === ACTION_NAME ? "default" : "cancel";
          const text = getStringChildren(child);
          const onPress = () => {
            const childProps = child.props as any;
            childProps?.onPress?.({ native: true });
            setOpen(false);
          };
          buttons.push({
            style,
            text,
            onPress
          });
          return false;
        }
        default: {
          return true;
        }
      }
    });

    useIsomorphicLayoutEffect(() => {
      if (!open || !native) {
        return;
      }
      if (title || description) {
        Alert.alert(title, description, buttons);
      }
    }, [native, open]);

    if (native) {
      return React.cloneElement(triggerElement, {
        __onPress: () => {
          setOpen(true);
        }
      });
    }
  }

  return (
    <TamaguiDialog {...dialogScope} {...rest} modal={true}>
      {children}
    </TamaguiDialog>
  );
};

const CONTENT_NAME = "DialogContent";

type DialogContentContextValue = {
  cancelRef: React.MutableRefObject<TamaguiElement | null>;
};

const [DialogContentProvider, useDialogContentContext] =
  createDialogContext<DialogContentContextValue>(CONTENT_NAME);

interface DialogContentProps
  extends Omit<
    TamaguiDialogContentProps,
    "onPointerDownOutside" | "onInteractOutside"
  > {}

const DialogContent = React.forwardRef<TamaguiElement, DialogContentProps>(
  (props: ScopedProps<DialogContentProps>, forwardedRef) => {
    const { __scopeDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeDialog);
    const contentRef = React.useRef<TamaguiElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = React.useRef<TamaguiElement | null>(null);

    return (
      <DialogContentProvider scope={__scopeDialog} cancelRef={cancelRef}>
        <TamaguiDialogContent
          role="alertdialog"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true
              }
            }
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 20, opacity: 0, scale: 0.95 }}
          margin="$5"
          {...dialogScope}
          {...contentProps}
          ref={composedRefs}
          onOpenAutoFocus={composeEventHandlers(
            contentProps.onOpenAutoFocus,
            (event: Event) => {
              event.preventDefault();
              if (isWeb) {
                cancelRef.current?.focus({ preventScroll: true });
              }
            }
          )}
          onPointerDownOutside={event => event.preventDefault()}
          onInteractOutside={event => event.preventDefault()}>
          <Slottable>{children}</Slottable>
        </TamaguiDialogContent>
      </DialogContentProvider>
    );
  }
);

DialogContent.displayName = CONTENT_NAME;

export const Dialog = withStaticProperties(DialogInner, {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Cancel: DialogCancel,
  Action: DialogAction
});

Dialog.displayName = DIALOG_NAME;
