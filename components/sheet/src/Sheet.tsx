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
import { Sheet as TamaguiSheet } from "@tamagui/sheet";
import { XStack } from "@tamagui/stacks";
import type { FC, ReactNode, PointerEvent as ReactPointerEvent } from "react";
import {
  createContext,
  use,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";
import { PanResponder, Platform } from "react-native";

export type SheetDirection = "top" | "right" | "bottom" | "left";
export type SheetSize = "sm" | "md" | "lg";

const sheetSizeStyles: Record<
  SheetDirection,
  Record<SheetSize, Record<string, string>>
> = {
  top: {
    sm: { height: "30vw" },
    md: { height: "60vw" },
    lg: { height: "90vw" }
  },
  right: {
    sm: { width: "30vw" },
    md: { width: "60vw" },
    lg: { width: "90vw" }
  },
  bottom: {
    sm: { height: "30vw" },
    md: { height: "60vw" },
    lg: { height: "90vw" }
  },
  left: {
    sm: { width: "30vw" },
    md: { width: "60vw" },
    lg: { width: "90vw" }
  }
};

interface SheetContextValue {
  direction: SheetDirection;
  size?: SheetSize;
  disableDrag: boolean;
  dragOffset: number;
  dragging: boolean;
  panHandlers: ReturnType<typeof PanResponder.create>["panHandlers"];
  pointerHandlers: Record<string, unknown>;
  setFrameSize: (size: number) => void;
  transition: SheetProps["transition"];
}

const SheetContext = createContext<SheetContextValue | null>(null);

const useSheetContext = () => {
  const context = use(SheetContext);

  if (!context) {
    throw new Error("Sheet compound components must be rendered within Sheet");
  }

  return context;
};

const sheetFrameStyles = {
  backgroundColor: "$backgroundFloating",
  borderWidth: 0,
  borderColor: "transparent",
  flexDirection: "column" as const,
  overflow: "hidden" as const
};

const sheetFrameDirectionStyles: Record<
  Exclude<SheetDirection, "bottom">,
  Record<string, unknown>
> = {
  top: {
    top: 0,
    left: 0,
    right: 0,
    height: "80vh",
    maxHeight: "80vh",
    borderBottomLeftRadius: "$sheet",
    borderBottomRightRadius: "$sheet"
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0,
    width: "80vw",
    maxWidth: "80vw",
    borderTopLeftRadius: "$sheet",
    borderBottomLeftRadius: "$sheet"
  },
  left: {
    top: 0,
    left: 0,
    bottom: 0,
    width: "80vw",
    maxWidth: "80vw",
    borderTopRightRadius: "$sheet",
    borderBottomRightRadius: "$sheet"
  }
};

const SheetSheetFrame = styled(TamaguiSheet.Frame, {
  name: "SheetFrame",

  ...sheetFrameStyles
});

const SheetDialogFrame = styled(TamaguiDialogContent, {
  name: "SheetDialogFrame",

  ...sheetFrameStyles,
  position: "absolute"
});

const SheetSheetOverlay = styled(TamaguiSheet.Overlay, {
  name: "SheetOverlay",

  backgroundColor: "$overlayBackdrop",
  opacity: 0.6,

  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 },
  transition: "200ms"
});

const SheetSheetHandle = styled(TamaguiSheet.Handle, {
  name: "SheetHandle",

  backgroundColor: "$border"
});

const SheetDialogHandle = styled(XStack, {
  name: "SheetDialogHandle",

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

const sheetHandleDirectionStyles: Record<
  Exclude<SheetDirection, "bottom">,
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

const sheetFrameHandleInsetStyles: Record<
  SheetDirection,
  Record<string, unknown>
> = {
  top: { paddingBottom: "$5xl" },
  right: { paddingLeft: "$5xl" },
  bottom: { paddingTop: "$5xl" },
  left: { paddingRight: "$5xl" }
};

export type SheetFrameProps = GetProps<typeof TamaguiSheet.Frame>;
export type SheetOverlayProps = GetProps<typeof TamaguiSheet.Overlay>;
export type SheetHandleProps = GetProps<typeof TamaguiSheet.Handle>;
export type SheetScrollViewProps = GetProps<typeof TamaguiSheet.ScrollView>;

const SheetFrame: FC<SheetFrameProps> = ({ children, ...props }) => {
  const {
    direction,
    size,
    dragOffset,
    dragging,
    setFrameSize,
    transition: sheetTransition
  } = useSheetContext();

  if (direction === "bottom") {
    return (
      <SheetSheetFrame
        {...sheetFrameHandleInsetStyles.bottom}
        {...(size ? sheetSizeStyles.bottom[size] : {})}
        {...props}>
        {children}
      </SheetSheetFrame>
    );
  }

  const {
    enterStyle,
    exitStyle,
    onLayout,
    transition = sheetTransition ?? "400ms",
    ...frameProps
  } = props;
  const isVertical = direction === "top";
  const presenceStyle = isVertical
    ? { y: direction === "top" ? "-100%" : "100%" }
    : { x: direction === "left" ? "-100%" : "100%" };

  return (
    <SheetDialogFrame
      {...sheetFrameDirectionStyles[direction]}
      {...(size ? sheetSizeStyles[direction][size] : {})}
      {...sheetFrameHandleInsetStyles[direction]}
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
    </SheetDialogFrame>
  );
};

const SheetOverlay: FC<SheetOverlayProps> = props => {
  const { direction } = useSheetContext();

  if (direction === "bottom") {
    return <SheetSheetOverlay {...props} />;
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

const SheetHandle: FC<SheetHandleProps> = props => {
  const { direction, disableDrag, panHandlers, pointerHandlers } =
    useSheetContext();

  if (direction === "bottom") {
    return <SheetSheetHandle {...props} />;
  }

  return (
    <SheetDialogHandle
      {...sheetHandleDirectionStyles[direction]}
      pointerEvents={disableDrag ? "none" : "auto"}
      {...(!disableDrag &&
        (Platform.OS === "web" ? pointerHandlers : panHandlers))}
      {...props}
    />
  );
};

const SheetScrollView: FC<SheetScrollViewProps> = ({ children, ...props }) => {
  const { direction } = useSheetContext();

  return direction === "bottom" ? (
    <TamaguiSheet.ScrollView {...props}>{children}</TamaguiSheet.ScrollView>
  ) : (
    <ScrollView flex={1} {...(props as any)}>
      {children}
    </ScrollView>
  );
};

const SheetHeading: typeof HeadingXLText = styled(HeadingXLText, {
  name: "SheetHeading",

  color: "$foreground"
});

const SheetBody: typeof BodyText = styled(BodyText, {
  name: "SheetBody",

  color: "$foregroundBody",
  flexGrow: 1
});

const sheetFooterDirectionStyles: Record<
  SheetDirection,
  Record<string, unknown>
> = {
  top: { paddingBottom: "$4xl" },
  right: { paddingLeft: "$4xl" },
  bottom: { paddingTop: "$4xl" },
  left: { paddingRight: "$4xl" }
};

const sheetFooterStyles = {
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "$3xl",
  width: "100%"
};

export type SheetFooterProps = GetProps<typeof XStack>;

const SheetFooter: FC<SheetFooterProps> = props => {
  const { direction } = useSheetContext();

  return (
    <XStack
      {...sheetFooterStyles}
      {...sheetFooterDirectionStyles[direction]}
      {...props}
    />
  );
};

export type SheetProps = Omit<GetProps<typeof TamaguiSheet>, "size"> & {
  children: ReactNode;
  theme?: string;
  direction?: SheetDirection;
  size?: SheetSize;
};

const SNAP_POINTS = [80];

const SheetFrameImpl: FC<SheetProps> = ({
  children,
  theme = "base",
  direction = "bottom",
  size,
  modal = true,
  dismissOnSnapToBottom = true,
  disableDrag = false,
  snapPoints,
  snapPointsMode,
  transition,
  onOpenChange,
  open,
  ...props
}: SheetProps) => {
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [frameSize, setFrameSize] = useState(0);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    props.defaultOpen ?? false
  );
  const usesSizedBottomFrame =
    direction === "bottom" &&
    size !== undefined &&
    snapPoints === undefined &&
    snapPointsMode === undefined;

  const dialogOpen = open ?? uncontrolledOpen;
  const setDialogOpen = useCallback(
    (value: boolean) => {
      if (open === undefined) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    },
    [open, onOpenChange]
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
  const context = useMemo<SheetContextValue>(
    () => ({
      direction,
      size,
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
      size,
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
      <TamaguiSheet
        modal={modal}
        dismissOnSnapToBottom={dismissOnSnapToBottom}
        disableDrag={disableDrag}
        snapPoints={
          usesSizedBottomFrame ? ["fit"] : (snapPoints ?? SNAP_POINTS)
        }
        snapPointsMode={usesSizedBottomFrame ? "fit" : snapPointsMode}
        transition={transition}
        open={open}
        onOpenChange={onOpenChange}
        {...props}>
        {children}
      </TamaguiSheet>
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
      <SheetContext.Provider value={context}>{content}</SheetContext.Provider>
    </Theme>
  );
};

export interface SheetComponent extends FC<SheetProps> {
  Frame: FC<SheetFrameProps>;
  Handle: FC<SheetHandleProps>;
  Overlay: FC<SheetOverlayProps>;
  ScrollView: FC<SheetScrollViewProps>;
  Heading: typeof HeadingXLText;
  Body: typeof BodyText;
  Footer: FC<SheetFooterProps>;
}

export const Sheet: SheetComponent = withStaticProperties(SheetFrameImpl, {
  Frame: SheetFrame,
  Handle: SheetHandle,
  Overlay: SheetOverlay,
  ScrollView: SheetScrollView,
  Heading: SheetHeading,
  Body: SheetBody,
  Footer: SheetFooter
});
