import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import type { TamaguiElement } from "@tamagui/core";
import { Slottable, View, isTamaguiElement, styled } from "@tamagui/core";
import type { Scope } from "@tamagui/create-context";
import { createContextScope } from "@tamagui/create-context";
import type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps
} from "@tamagui/dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  createDialogScope
} from "@tamagui/dialog";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { Alert } from "react-native";
import { LinearGradient } from "@tamagui/linear-gradient";

const POPUP_NAME = "PopUp";

type ScopedProps<P> = P & { __scopePopUp?: Scope };
const [createPopUpContext] = createContextScope(POPUP_NAME, [
  createDialogScope
]);

const useDialogScope = createDialogScope();

const TRIGGER_NAME = "PopUpTrigger";

interface PopUpTriggerProps extends DialogTriggerProps {}

const NativePopUpTriggerFrame = styled(View, {
  name: TRIGGER_NAME
});

const PopUpTrigger = React.forwardRef<TamaguiElement, PopUpTriggerProps>(
  (props: ScopedProps<PopUpTriggerProps>, forwardedRef) => {
    if (props["__native"]) {
      const { __native, onPress, __onPress, ...rest } = props as any;
      return (
        <NativePopUpTriggerFrame
          {...rest}
          onPress={composeEventHandlers(onPress, __onPress)}
        />
      );
    }

    const { __scopePopUp, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopePopUp);
    return (
      <DialogTrigger {...dialogScope} {...triggerProps} ref={forwardedRef} />
    );
  }
);

PopUpTrigger.displayName = TRIGGER_NAME;

const TITLE_NAME = "PopUpTitle";

type PopUpTitleProps = DialogTitleProps;

const PopUpTitle = React.forwardRef<TamaguiElement, PopUpTitleProps>(
  (props: ScopedProps<PopUpTitleProps>, forwardedRef) => {
    const { __scopePopUp, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopePopUp);
    return (
      <DialogTitle
        {...dialogScope}
        {...titleProps}
        color="$fg"
        ref={forwardedRef}
      />
    );
  }
);

PopUpTitle.displayName = TITLE_NAME;

const DESCRIPTION_NAME = "PopUpDescription";

type PopUpDescriptionProps = DialogDescriptionProps;

const PopUpDescription = React.forwardRef<
  TamaguiElement,
  PopUpDescriptionProps
>((props: ScopedProps<PopUpDescriptionProps>, forwardedRef) => {
  const { __scopePopUp, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopePopUp);
  return (
    <DialogDescription
      {...dialogScope}
      {...descriptionProps}
      ref={forwardedRef}
    />
  );
});

PopUpDescription.displayName = DESCRIPTION_NAME;

const ACTION_NAME = "PopUpAction";

type PopUpActionProps = DialogCloseProps;

const PopUpAction = React.forwardRef<TamaguiElement, PopUpActionProps>(
  (props: ScopedProps<PopUpActionProps>, forwardedRef) => {
    const { __scopePopUp, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopePopUp);
    return <DialogClose {...dialogScope} {...actionProps} ref={forwardedRef} />;
  }
);

PopUpAction.displayName = ACTION_NAME;

const CANCEL_NAME = "PopUpCancel";

interface PopUpCancelProps extends DialogCloseProps {}

const PopUpCancel = React.forwardRef<TamaguiElement, PopUpCancelProps>(
  (props: ScopedProps<PopUpCancelProps>, forwardedRef) => {
    const { __scopePopUp, ...cancelProps } = props;
    const { cancelRef } = usePopUpContentContext(CANCEL_NAME, __scopePopUp);
    const dialogScope = useDialogScope(__scopePopUp);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return <DialogClose {...dialogScope} {...cancelProps} ref={ref} />;
  }
);

PopUpCancel.displayName = CANCEL_NAME;

interface PopUpPortalProps extends DialogPortalProps {}

const PopUpPortal: React.FC<PopUpPortalProps> = (
  props: ScopedProps<PopUpPortalProps>
) => {
  const { __scopePopUp, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopePopUp);
  return <DialogPortal {...dialogScope} {...portalProps} />;
};

const PORTAL_NAME = "PopUpPortal";
PopUpPortal.displayName = PORTAL_NAME;

const OVERLAY_NAME = "PopUpOverlay";

const PopUpOverlayFrame = styled(LinearGradient, {
  name: OVERLAY_NAME,
  animation: "$fast",
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

interface PopUpOverlayProps extends DialogOverlayProps {}

const PopUpOverlay = PopUpOverlayFrame.extractable(
  React.forwardRef<TamaguiElement, PopUpOverlayProps>(
    (props: ScopedProps<PopUpOverlayProps>, forwardedRef) => {
      const { __scopePopUp, ...overlayProps } = props;
      const dialogScope = useDialogScope(__scopePopUp);

      return (
        <PopUpOverlayFrame>
          <DialogOverlay
            {...dialogScope}
            {...overlayProps}
            opacity={0}
            ref={forwardedRef}
          />
        </PopUpOverlayFrame>
      );
    }
  )
);

PopUpOverlay.displayName = OVERLAY_NAME;

export type PopUpProps = DialogProps & {
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

const PopUpInner: React.FC<PopUpProps> = (props: ScopedProps<PopUpProps>) => {
  const { __scopePopUp, native, children, ...rest } = props;
  const dialogScope = useDialogScope(__scopePopUp);

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
      if (!React.isValidElement(child)) return false;
      const name = isTamaguiElement(child)
        ? child.type.staticConfig.componentName
        : (child.type["displayName"] as string | undefined);
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
    <Dialog {...dialogScope} {...rest} modal={true}>
      {children}
    </Dialog>
  );
};

const CONTENT_NAME = "PopUpContent";

type PopUpContentContextValue = {
  cancelRef: React.MutableRefObject<TamaguiElement | null>;
};

const [PopUpContentProvider, usePopUpContentContext] =
  createPopUpContext<PopUpContentContextValue>(CONTENT_NAME);

interface PopUpContentProps
  extends Omit<
    DialogContentProps,
    "onPointerDownOutside" | "onInteractOutside"
  > {}

const PopUpContent = React.forwardRef<TamaguiElement, PopUpContentProps>(
  (props: ScopedProps<PopUpContentProps>, forwardedRef) => {
    const { __scopePopUp, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopePopUp);
    const contentRef = React.useRef<TamaguiElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = React.useRef<TamaguiElement | null>(null);

    return (
      <PopUpContentProvider scope={__scopePopUp} cancelRef={cancelRef}>
        <DialogContent
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
          x={0}
          scale={1}
          opacity={1}
          y={0}
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
        </DialogContent>
      </PopUpContentProvider>
    );
  }
);

PopUpContent.displayName = CONTENT_NAME;

export const PopUp = withStaticProperties(PopUpInner, {
  Trigger: PopUpTrigger,
  Portal: PopUpPortal,
  Overlay: PopUpOverlay,
  Content: PopUpContent,
  Title: PopUpTitle,
  Description: PopUpDescription,
  Cancel: PopUpCancel,
  Action: PopUpAction
});

PopUp.displayName = POPUP_NAME;
