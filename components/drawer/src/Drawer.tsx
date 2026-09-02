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
import { HeadingXLText } from "@cyclone-ui/heading-text";
import { ScrollView } from "@cyclone-ui/scroll-view";
import type { GetProps } from "@tamagui/core";
import { styled, Theme } from "@tamagui/core";
import {
  Dialog as TamaguiDialog,
  DialogContent as TamaguiDialogContent,
  DialogOverlay as TamaguiDialogOverlay
} from "@tamagui/dialog";
import { withStaticProperties } from "@tamagui/helpers";
import { Sheet } from "@tamagui/sheet";
import { XStack } from "@tamagui/stacks";
import type { FC, ReactNode, PointerEvent as ReactPointerEvent } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState
} from "react";
import { PanResponder, Platform } from "react-native";

export type DrawerDirection = "top" | "right" | "bottom" | "left";

interface DrawerContextValue {
  direction: DrawerDirection;
  disableDrag: boolean;
  dragOffset: number;
  dragging: boolean;
  panHandlers: ReturnType<typeof PanResponder.create>["panHandlers"];
  pointerHandlers: Record<string, unknown>;
  setFrameSize: (size: number) => void;
  transition: DrawerProps["transition"];
}

const DrawerContext = createContext<DrawerContextValue | null>(null);

const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error(
      "Drawer compound components must be rendered within Drawer"
    );
  }

  return context;
};

const drawerFrameStyles = {
  backgroundColor: "$backgroundFloating",
  borderWidth: 0,
  borderColor: "transparent",
  flexDirection: "column" as const,
  overflow: "hidden" as const
};

const drawerFrameDirectionStyles: Record<
  Exclude<DrawerDirection, "bottom">,
  Record<string, unknown>
> = {
  top: {
    top: 0,
    left: 0,
    right: 0,
    height: "80dvh",
    maxHeight: "80dvh",
    // borderTopWidth: 0,
    borderBottomLeftRadius: "$dialog",
    borderBottomRightRadius: "$dialog"
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0,
    width: "80vw",
    maxWidth: "80vw",
    // borderRightWidth: 0,
    borderTopLeftRadius: "$dialog",
    borderBottomLeftRadius: "$dialog"
  },
  left: {
    top: 0,
    left: 0,
    bottom: 0,
    width: "80vw",
    maxWidth: "80vw",
    // borderLeftWidth: 0,
    borderTopRightRadius: "$dialog",
    borderBottomRightRadius: "$dialog"
  }
};

const DrawerSheetFrame = styled(Sheet.Frame, {
  name: "DrawerFrame",

  ...drawerFrameStyles

  // borderTopLeftRadius: "$dialog",
  // borderTopRightRadius: "$dialog"
});

const DrawerDialogFrame = styled(TamaguiDialogContent, {
  name: "DrawerDialogFrame",

  ...drawerFrameStyles,
  position: "absolute"
});

const DrawerSheetOverlay = styled(Sheet.Overlay, {
  name: "DrawerOverlay",

  backgroundColor: "$overlayBackdrop",
  opacity: 0.6,

  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 },
  transition: "200ms"
});

const DrawerSheetHandle = styled(Sheet.Handle, {
  name: "DrawerHandle",

  backgroundColor: "$border"
});

const DrawerDialogHandle = styled(XStack, {
  name: "DrawerDialogHandle",

  position: "absolute",
  backgroundColor: "$border",
  borderRadius: 100,
  cursor: "grab",
  opacity: 0.5,
  touchAction: "none",
  zIndex: 10,

  hoverStyle: {
    opacity: 0.7
  },

  pressStyle: {
    cursor: "grabbing"
  }
});

const drawerHandleDirectionStyles: Record<
  Exclude<DrawerDirection, "bottom">,
  Record<string, unknown>
> = {
  top: {
    right: "35%",
    bottom: 10,
    left: "35%",
    height: 10
  },
  right: {
    top: "35%",
    bottom: "35%",
    left: 10,
    width: 10
  },
  left: {
    top: "35%",
    right: 10,
    bottom: "35%",
    width: 10
  }
};

const drawerFrameHandleInsetStyles: Record<
  DrawerDirection,
  Record<string, unknown>
> = {
  top: { paddingBottom: "$5xl" },
  right: { paddingLeft: "$5xl" },
  bottom: { paddingTop: "$5xl" },
  left: { paddingRight: "$5xl" }
};

export type DrawerFrameProps = GetProps<typeof Sheet.Frame>;
export type DrawerOverlayProps = GetProps<typeof Sheet.Overlay>;
export type DrawerHandleProps = GetProps<typeof Sheet.Handle>;
export type DrawerScrollViewProps = GetProps<typeof Sheet.ScrollView>;

const DrawerFrame: FC<DrawerFrameProps> = ({ children, ...props }) => {
  const {
    direction,
    dragOffset,
    dragging,
    setFrameSize,
    transition: drawerTransition
  } = useDrawerContext();

  if (direction === "bottom") {
    return (
      <DrawerSheetFrame {...drawerFrameHandleInsetStyles.bottom} {...props}>
        {children}
      </DrawerSheetFrame>
    );
  }

  const {
    enterStyle,
    exitStyle,
    onLayout,
    transition = drawerTransition ?? "400ms",
    ...frameProps
  } = props;
  const isVertical = direction === "top";
  const presenceStyle = isVertical
    ? { y: direction === "top" ? "-100%" : "100%" }
    : { x: direction === "left" ? "-100%" : "100%" };

  return (
    <DrawerDialogFrame
      {...drawerFrameDirectionStyles[direction]}
      {...drawerFrameHandleInsetStyles[direction]}
      {...(frameProps as any)}
      x={isVertical ? 0 : dragOffset}
      y={isVertical ? dragOffset : 0}
      enterStyle={(enterStyle as any) ?? presenceStyle}
      exitStyle={(exitStyle as any) ?? presenceStyle}
      transition={dragging ? "0ms" : transition}
      onLayout={event => {
        const { height, width } = event.nativeEvent.layout;
        setFrameSize(isVertical ? height : width);
        onLayout?.(event);
      }}>
      {children}
    </DrawerDialogFrame>
  );
};

const DrawerOverlay: FC<DrawerOverlayProps> = props => {
  const { direction } = useDrawerContext();

  if (direction === "bottom") {
    return <DrawerSheetOverlay {...props} />;
  }

  return (
    <TamaguiDialogOverlay
      backgroundColor="$overlayBackdrop"
      opacity={0.6}
      enterStyle={{ opacity: 0 }}
      exitStyle={{ opacity: 0 }}
      transition="200ms"
      {...(props as any)}
    />
  );
};

const DrawerHandle: FC<DrawerHandleProps> = props => {
  const { direction, disableDrag, panHandlers, pointerHandlers } =
    useDrawerContext();

  if (direction === "bottom") {
    return <DrawerSheetHandle {...props} />;
  }

  return (
    <DrawerDialogHandle
      {...drawerHandleDirectionStyles[direction]}
      pointerEvents={disableDrag ? "none" : "auto"}
      {...(!disableDrag &&
        (Platform.OS === "web" ? pointerHandlers : panHandlers))}
      {...props}
    />
  );
};

const DrawerScrollView: FC<DrawerScrollViewProps> = ({
  children,
  ...props
}) => {
  const { direction } = useDrawerContext();

  return direction === "bottom" ? (
    <Sheet.ScrollView {...props}>{children}</Sheet.ScrollView>
  ) : (
    <ScrollView flex={1} {...(props as any)}>
      {children}
    </ScrollView>
  );
};

const DrawerHeading: typeof HeadingXLText = styled(HeadingXLText, {
  name: "DrawerHeading",

  color: "$foreground"
});

const DrawerBody: typeof BodyText = styled(BodyText, {
  name: "DrawerBody",

  color: "$foregroundBody",
  flexGrow: 1
});

const drawerFooterDirectionStyles: Record<
  DrawerDirection,
  Record<string, unknown>
> = {
  top: { paddingBottom: "$4xl" },
  right: { paddingLeft: "$4xl" },
  bottom: { paddingTop: "$4xl" },
  left: { paddingRight: "$4xl" }
};

const drawerFooterStyles = {
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "$3xl",
  width: "100%"
};

export type DrawerFooterProps = GetProps<typeof XStack>;

const DrawerFooter: FC<DrawerFooterProps> = props => {
  const { direction } = useDrawerContext();

  return (
    <XStack
      {...drawerFooterStyles}
      {...drawerFooterDirectionStyles[direction]}
      {...props}
    />
  );
};

export interface DrawerProps extends GetProps<typeof Sheet> {
  children: ReactNode;
  theme?: string;
  direction?: DrawerDirection;
}

const DrawerFrameImpl: FC<DrawerProps> = ({
  children,
  theme = "primary",
  direction = "bottom",
  modal = true,
  dismissOnSnapToBottom = true,
  disableDrag = false,
  snapPoints = [80],
  transition,
  ...props
}: DrawerProps) => {
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [frameSize, setFrameSize] = useState(0);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    props.defaultOpen ?? false
  );
  const dialogOpen = props.open ?? uncontrolledOpen;
  const setDialogOpen = useCallback(
    (open: boolean) => {
      if (props.open === undefined) {
        setUncontrolledOpen(open);
      }
      props.onOpenChange?.(open);
    },
    [props.onOpenChange, props.open]
  );
  const isVertical = direction === "top";
  const directionSign = direction === "top" || direction === "left" ? -1 : 1;
  const updateDrag = useCallback(
    (distance: number) => {
      setDragOffset(directionSign * Math.max(0, directionSign * distance));
    },
    [directionSign]
  );
  const finishDrag = useCallback(
    (distance: number, velocity: number, dragSize = frameSize) => {
      const outwardDistance = directionSign * distance;
      const outwardVelocity = directionSign * velocity;
      const shouldDismiss =
        dismissOnSnapToBottom &&
        (outwardDistance > dragSize * 0.25 || outwardVelocity > 0.5);

      setDragging(false);

      if (shouldDismiss) {
        setDragOffset(0);
        setDialogOpen(false);
      } else {
        setTimeout(() => setDragOffset(0), 0);
      }
    },
    [directionSign, dismissOnSnapToBottom, frameSize, setDialogOpen]
  );
  const cancelDrag = useCallback(() => {
    setDragging(false);
    setDragOffset(0);
  }, []);
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !disableDrag,
        onMoveShouldSetPanResponder: (_, gestureState) =>
          !disableDrag &&
          Math.abs(isVertical ? gestureState.dy : gestureState.dx) > 3,
        onPanResponderGrant: () => setDragging(true),
        onPanResponderMove: (_, gestureState) => {
          const distance = isVertical ? gestureState.dy : gestureState.dx;
          updateDrag(distance);
        },
        onPanResponderRelease: (_, gestureState) => {
          const velocity = isVertical ? gestureState.vy : gestureState.vx;
          const distance = isVertical ? gestureState.dy : gestureState.dx;
          finishDrag(distance, velocity);
        },
        onPanResponderTerminate: cancelDrag,
        onPanResponderTerminationRequest: () => false
      }),
    [cancelDrag, disableDrag, finishDrag, isVertical, updateDrag]
  );
  const pointerGesture = useRef({
    pointerId: -1,
    start: 0,
    last: 0,
    lastTime: 0,
    velocity: 0,
    frameSize: 0
  });
  const pointerHandlers = useMemo(() => {
    return {
      onPointerDown: (event: ReactPointerEvent<HTMLElement>) => {
        const target = event.currentTarget;
        const position = isVertical ? event.clientY : event.clientX;
        const frame = target.closest('[role="dialog"]');
        const frameRect = frame?.getBoundingClientRect();
        pointerGesture.current = {
          pointerId: event.pointerId,
          start: position,
          last: position,
          lastTime: event.timeStamp,
          velocity: 0,
          frameSize: frameRect
            ? isVertical
              ? frameRect.height
              : frameRect.width
            : frameSize
        };
        target.setPointerCapture(event.pointerId);
        setDragging(true);

        const cleanup = () => {
          window.removeEventListener("pointermove", handlePointerMove);
          window.removeEventListener("pointerup", handlePointerEnd, true);
          window.removeEventListener(
            "pointercancel",
            handlePointerCancel,
            true
          );
        };
        const handlePointerMove = (pointerEvent: PointerEvent) => {
          const gesture = pointerGesture.current;
          if (gesture.pointerId !== pointerEvent.pointerId) return;
          const nextPosition = isVertical
            ? pointerEvent.clientY
            : pointerEvent.clientX;
          const elapsed = pointerEvent.timeStamp - gesture.lastTime;

          if (elapsed > 0) {
            gesture.velocity = (nextPosition - gesture.last) / elapsed;
          }
          gesture.last = nextPosition;
          gesture.lastTime = pointerEvent.timeStamp;
          updateDrag(nextPosition - gesture.start);
        };
        const handlePointerEnd = (pointerEvent: PointerEvent) => {
          const gesture = pointerGesture.current;
          if (gesture.pointerId !== pointerEvent.pointerId) return;
          const nextPosition = isVertical
            ? pointerEvent.clientY
            : pointerEvent.clientX;
          const elapsed = pointerEvent.timeStamp - gesture.lastTime;
          const velocity =
            elapsed > 0
              ? (nextPosition - gesture.last) / elapsed
              : gesture.velocity;

          cleanup();
          if (target.hasPointerCapture(pointerEvent.pointerId)) {
            target.releasePointerCapture(pointerEvent.pointerId);
          }
          pointerGesture.current.pointerId = -1;
          finishDrag(nextPosition - gesture.start, velocity, gesture.frameSize);
        };
        const handlePointerCancel = (pointerEvent: PointerEvent) => {
          if (pointerGesture.current.pointerId !== pointerEvent.pointerId)
            return;
          cleanup();
          pointerGesture.current.pointerId = -1;
          cancelDrag();
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerEnd, true);
        window.addEventListener("pointercancel", handlePointerCancel, true);
      }
    };
  }, [cancelDrag, finishDrag, frameSize, isVertical, updateDrag]);
  const context = useMemo<DrawerContextValue>(
    () => ({
      direction,
      disableDrag,
      dragOffset,
      dragging,
      panHandlers: panResponder.panHandlers,
      pointerHandlers,
      setFrameSize,
      transition
    }),
    [
      direction,
      disableDrag,
      dragOffset,
      dragging,
      panResponder.panHandlers,
      pointerHandlers,
      transition
    ]
  );
  const content =
    direction === "bottom" ? (
      <Sheet
        modal={modal}
        dismissOnSnapToBottom={dismissOnSnapToBottom}
        disableDrag={disableDrag}
        snapPoints={snapPoints}
        transition={transition}
        {...props}>
        {children}
      </Sheet>
    ) : (
      <TamaguiDialog
        modal={modal}
        open={dialogOpen}
        onOpenChange={setDialogOpen}>
        <TamaguiDialog.Portal>{children}</TamaguiDialog.Portal>
      </TamaguiDialog>
    );

  return (
    <Theme name={theme}>
      <DrawerContext.Provider value={context}>{content}</DrawerContext.Provider>
    </Theme>
  );
};

export interface DrawerComponent extends FC<DrawerProps> {
  Frame: FC<DrawerFrameProps>;
  Handle: FC<DrawerHandleProps>;
  Overlay: FC<DrawerOverlayProps>;
  ScrollView: FC<DrawerScrollViewProps>;
  Heading: typeof HeadingXLText;
  Body: typeof BodyText;
  Footer: FC<DrawerFooterProps>;
}

export const Drawer: DrawerComponent = withStaticProperties(DrawerFrameImpl, {
  Frame: DrawerFrame,
  Handle: DrawerHandle,
  Overlay: DrawerOverlay,
  ScrollView: DrawerScrollView,
  Heading: DrawerHeading,
  Body: DrawerBody,
  Footer: DrawerFooter
});
