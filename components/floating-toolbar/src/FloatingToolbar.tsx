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
import { CircularProgress } from "@cyclone-ui/circular-progress";
import type { CollapsibleProps } from "@cyclone-ui/collapsible";
import { Collapsible } from "@cyclone-ui/collapsible";
import type { ContainerSurfaceProps } from "@cyclone-ui/container";
import { ContainerBackground, containerShadows } from "@cyclone-ui/container";
import type { DividerProps } from "@cyclone-ui/divider";
import { Divider } from "@cyclone-ui/divider";
import { ChevronLeft, ChevronRight, DragVertical } from "@cyclone-ui/icons";
import type {
  TableOfContentsItem,
  TableOfContentsProps
} from "@cyclone-ui/table-of-contents";
import {
  TableOfContents,
  useActiveTableOfContentsItem
} from "@cyclone-ui/table-of-contents";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type {
  JSX,
  KeyboardEvent as ReactKeyboardEvent,
  ReactNode,
  PointerEvent as ReactPointerEvent,
  Ref
} from "react";
import {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import type {
  FloatingToolbarDockSide,
  FloatingToolbarOffset,
  FloatingToolbarStoredPosition
} from "./utilities";
import {
  getDockSide,
  getDraggedOffset,
  getReadingProgress,
  parseStoredOffset
} from "./utilities";

// Fixed over the page; click-through outside the panel.
const FloatingToolbarFrame = styled(View, {
  displayName: "FloatingToolbar",
  render: "nav",
  position: "fixed",
  bottom: "7xl",
  left: 0,
  right: 0,
  zIndex: "40",
  alignItems: "center",
  paddingHorizontal: "4xl",
  pointerEvents: "box-none"
});

// The `ContainerBackground` draws the surface: positioned and isolated for it.
const FloatingToolbarPanel = styled(YStack, {
  displayName: "FloatingToolbarPanel",
  position: "relative",
  isolation: "isolate",
  maxWidth: "100%",
  gap: "xl",
  padding: "lg",
  borderRadius: "xl",
  y: "enter:12px",
  opacity: "enter:0",
  transition: "200ms"
});

// A tab sticking out of the panel's left side, tucked under its surface (the
// panel's `ContainerBackground` sits at `zIndex: -1`).
const FloatingToolbarHandleFrame = styled(View, {
  displayName: "FloatingToolbarHandle",
  position: "absolute",
  right: "100%",
  top: "50%",
  marginTop: -20,
  zIndex: -2,
  isolation: "isolate",
  width: 20,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: "lg",
  borderBottomLeftRadius: "lg",
  cursor: "grab",
  userSelect: "none",
  touchAction: "none"
});

// Shown in place of the toolbar after it is dragged against a side, at its
// height: pressing it brings the toolbar back to the bottom of the viewport, and
// dragging it pulls the toolbar back out from where it was hidden.
const FloatingToolbarDockTabFrame = styled(View, {
  displayName: "FloatingToolbarDockTab",
  position: "absolute",
  top: -24,
  isolation: "isolate",
  width: 24,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
  touchAction: "none",
  opacity: "enter:0",
  transition: "200ms",

  variants: {
    side: {
      left: {
        left: 0,
        x: "enter:-24px",
        borderTopRightRadius: "lg",
        borderBottomRightRadius: "lg"
      },
      right: {
        right: 0,
        x: "enter:24px",
        borderTopLeftRadius: "lg",
        borderBottomLeftRadius: "lg"
      }
    }
  } as const
});

interface FloatingToolbarTabPress {
  pointerId: number;
  x: number;
  y: number;
}

// How far a press on the dock tab moves before it drags the toolbar out, in px.
const TAB_DRAG_DISTANCE = 4;

// The smallest correction, in px, that moves the toolbar back into view.
const FIT_TOLERANCE = 0.5;

// Arrow-key step, in px.
const HANDLE_KEY_STEP = 16;
const HANDLE_KEYS: Record<string, [number, number]> = {
  ArrowLeft: [-HANDLE_KEY_STEP, 0],
  ArrowRight: [HANDLE_KEY_STEP, 0],
  ArrowUp: [0, -HANDLE_KEY_STEP],
  ArrowDown: [0, HANDLE_KEY_STEP]
};

// The toolbar's box: the panel plus the tab sticking out of its left side.
const getToolbarRect = (handle: HTMLElement) => {
  const panel = handle.parentElement!.getBoundingClientRect();

  return {
    left: handle.getBoundingClientRect().left,
    top: panel.top,
    right: panel.right,
    bottom: panel.bottom
  };
};

interface FloatingToolbarHandleProps extends Pick<
  ContainerSurfaceProps,
  "variant" | "shadowStyle" | "glass" | "noise" | "accented"
> {
  offset: FloatingToolbarOffset;
  onOffsetChange: (offset: FloatingToolbarOffset) => void;
  /** Called when a drag ends against a side of the viewport. */
  onDock: (side: FloatingToolbarDockSide) => void;
  /** Called while dragging with whether letting go now would dock. */
  onDockPreview: (docking: boolean) => void;
  storageKey: string | false;
  ref: Ref<FloatingToolbarHandleApi>;
}

interface FloatingToolbarHandleApi {
  /** Continues a drag that started on the dock tab (takes over the pointer). */
  startDrag: (pointerId: number, clientX: number, clientY: number) => void;
  /** Moves the toolbar to `offset` (and keeps it there). */
  moveTo: (offset: FloatingToolbarOffset) => void;
  focus: () => void;
}

interface FloatingToolbarDrag {
  pointerId: number;
  startX: number;
  startY: number;
  offset: FloatingToolbarOffset;
  rect: ReturnType<typeof getToolbarRect>;
}

// The side letting go of `drag` at `clientX` docks the toolbar to, if any:
// measured from the toolbar's edges (its handle on the left), not the pointer.
const getDragDockSide = (drag: FloatingToolbarDrag, clientX: number) => {
  const dx = clientX - drag.startX;

  return getDockSide(
    dx,
    { left: drag.rect.left + dx, right: drag.rect.right + dx },
    window.innerWidth
  );
};

// Storage can be unavailable (private mode, blocked cookies).
const readStoredOffset = (key: string) => {
  try {
    return parseStoredOffset(window.localStorage.getItem(key));
  } catch {
    return undefined;
  }
};

const storeOffset = (
  key: string | false,
  offset: FloatingToolbarStoredPosition
) => {
  if (!key) return;

  try {
    window.localStorage.setItem(key, JSON.stringify(offset));
  } catch {
    // Not saved; the toolbar still moves.
  }
};

/** Drags the toolbar around the viewport (arrow keys move it too). */
const FloatingToolbarHandle = ({
  offset,
  onOffsetChange,
  onDock,
  onDockPreview,
  storageKey,
  ref,
  shadowStyle = "elevated",
  ...surfaceProps
}: FloatingToolbarHandleProps): JSX.Element => {
  const handleRef = useRef<HTMLElement>(null);
  // Where the user put the toolbar. `offset` is this, kept inside the viewport.
  const targetRef = useRef<FloatingToolbarOffset>(offset);
  const dragRef = useRef<FloatingToolbarDrag | null>(null);
  const [dragging, setDragging] = useState(false);

  // Read after hydration, so the server and first client render agree.
  useLayoutEffect(() => {
    const stored = storageKey ? readStoredOffset(storageKey) : undefined;
    if (stored) targetRef.current = { x: stored.x, y: stored.y };
  }, [storageKey]);

  // Moves the toolbar back toward its target when the viewport (or a stored
  // target) allows, and back inside the viewport when it shrinks.
  useLayoutEffect(() => {
    const fit = () => {
      const handle = handleRef.current;
      // Mid-drag the toolbar may cross a side; the drop docks it.
      if (!handle || dragRef.current) return;

      const target = targetRef.current;
      const next = getDraggedOffset(
        offset,
        getToolbarRect(handle),
        target.x - offset.x,
        target.y - offset.y,
        window.innerWidth,
        window.innerHeight
      );
      // Sub-pixel moves are skipped: the measured box carries float noise
      // (±0.0001px with GPU compositing), so chasing it re-renders forever.
      if (
        Math.abs(next.x - offset.x) >= FIT_TOLERANCE ||
        Math.abs(next.y - offset.y) >= FIT_TOLERANCE
      ) {
        onOffsetChange(next);
      }
    };

    fit();
    window.addEventListener("resize", fit);

    return () => window.removeEventListener("resize", fit);
  }, [offset, onOffsetChange, storageKey]);

  const moveTo = (next: FloatingToolbarOffset) => {
    targetRef.current = next;
    onOffsetChange(next);
  };

  const startDrag = (pointerId: number, clientX: number, clientY: number) => {
    const handle = handleRef.current;
    if (!handle) return;

    handle.setPointerCapture(pointerId);
    dragRef.current = {
      pointerId,
      startX: clientX,
      startY: clientY,
      offset,
      rect: getToolbarRect(handle)
    };
    setDragging(true);
  };

  useImperativeHandle(ref, () => ({
    startDrag,
    moveTo,
    focus: () => handleRef.current?.focus()
  }));

  const handlePointerEnd = (event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (drag?.pointerId !== event.pointerId) return;

    dragRef.current = null;
    setDragging(false);
    onDockPreview(false);

    const side =
      event.type === "pointerup"
        ? getDragDockSide(drag, event.clientX)
        : undefined;
    // Back inside the viewport (a drop across a side hides it there).
    moveTo(
      getDraggedOffset(
        targetRef.current,
        getToolbarRect(event.currentTarget),
        0,
        0,
        window.innerWidth,
        window.innerHeight
      )
    );
    storeOffset(
      storageKey,
      side ? { ...targetRef.current, docked: side } : targetRef.current
    );
    if (side) onDock(side);
  };

  return (
    <FloatingToolbarHandleFrame
      ref={handleRef as never}
      role="button"
      tabIndex={0}
      aria-label="Move toolbar"
      boxShadow={containerShadows[shadowStyle]}
      cursor={dragging ? "grabbing" : "grab"}
      onPointerDown={(event: ReactPointerEvent<HTMLElement>) => {
        if (event.button !== 0) return;

        // Stops the drag from selecting text.
        event.preventDefault();
        startDrag(event.pointerId, event.clientX, event.clientY);
      }}
      onPointerMove={(event: ReactPointerEvent<HTMLElement>) => {
        const drag = dragRef.current;
        if (drag?.pointerId !== event.pointerId) return;

        onDockPreview(getDragDockSide(drag, event.clientX) !== undefined);
        // Free to cross the sides (letting go there docks it); kept inside
        // the viewport vertically.
        moveTo({
          x: drag.offset.x + event.clientX - drag.startX,
          y: getDraggedOffset(
            drag.offset,
            drag.rect,
            0,
            event.clientY - drag.startY,
            window.innerWidth,
            window.innerHeight
          ).y
        });
      }}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onKeyDown={(event: ReactKeyboardEvent<HTMLElement>) => {
        const step = HANDLE_KEYS[event.key];
        if (!step) return;

        event.preventDefault();
        const next = getDraggedOffset(
          offset,
          getToolbarRect(event.currentTarget),
          step[0],
          step[1],
          window.innerWidth,
          window.innerHeight
        );
        moveTo(next);
        storeOffset(storageKey, next);
      }}>
      <ContainerBackground shadowStyle={shadowStyle} {...surfaceProps} />
      <DragVertical aria-hidden={true} size={20} color="subtle" />
    </FloatingToolbarHandleFrame>
  );
};

export type FloatingToolbarProps = GetProps<typeof FloatingToolbarFrame> &
  ContainerSurfaceProps & {
    /** Shows the tab on the left side that moves the toolbar. Defaults to `true`. */
    draggable?: boolean;
    /**
     * The `localStorage` key the moved position is saved under, so it survives
     * reloads. Give each toolbar on a site its own key, or `false` to not save.
     * Defaults to `"cyclone-ui:floating-toolbar"`.
     */
    storageKey?: string | false;
  };

/**
 * A toolbar fixed to the bottom of the viewport for page-level controls.
 * Stack `FloatingToolbar.Row`s inside it. `variant` defaults to `floating`,
 * `shadowStyle` to `elevated` and `glass` to on. The tab on its left side drags
 * it around the viewport (`draggable`), and the position is saved across
 * reloads (`storageKey`). Dragged against or across either side of the viewport,
 * it hides behind a small chevron tab at that height: pressing the tab brings it
 * back to the bottom, and dragging the tab pulls it back out from the side.
 */
const FloatingToolbarImpl = createStyledHOC(
  FloatingToolbarFrame,
  (
    {
      children,
      variant = "floating",
      shadowStyle = "elevated",
      glass = true,
      noise,
      accented,
      draggable = true,
      storageKey = "cyclone-ui:floating-toolbar",
      ...props
    }: FloatingToolbarProps,
    forwardedRef
  ) => {
    const [offset, setOffset] = useState<FloatingToolbarOffset>({
      x: 0,
      y: 0
    });
    const [docked, setDocked] = useState<FloatingToolbarDockSide>();
    const [docking, setDocking] = useState(false);
    const handleApiRef = useRef<FloatingToolbarHandleApi>(null);
    // A press on the dock tab that has not become a drag yet.
    const tabPressRef = useRef<FloatingToolbarTabPress | null>(null);
    // A drag from the dock tab, handed to the handle once the toolbar shows.
    const dragOutRef = useRef<FloatingToolbarTabPress | null>(null);

    // Focus moves to the handle after a keyboard restore.
    const focusHandleRef = useRef(false);

    // Once the toolbar shows again (no longer inert).
    useLayoutEffect(() => {
      if (docked) return;

      const press = dragOutRef.current;
      dragOutRef.current = null;
      if (press) {
        handleApiRef.current?.startDrag(press.pointerId, press.x, press.y);
      }
      if (focusHandleRef.current) handleApiRef.current?.focus();
      focusHandleRef.current = false;
    }, [docked]);

    // Read after hydration, so the server and first client render agree.
    useLayoutEffect(() => {
      const stored = storageKey ? readStoredOffset(storageKey) : undefined;
      // eslint-disable-next-line react/set-state-in-effect
      setDocked(stored?.docked);
    }, [storageKey]);

    const isDocked = draggable && docked !== undefined;
    const Chevron = docked === "left" ? ChevronRight : ChevronLeft;

    // Back to the bottom of the viewport.
    const restore = (byKeyboard: boolean) => {
      handleApiRef.current?.moveTo({ x: 0, y: 0 });
      setDocked(undefined);
      storeOffset(storageKey, { x: 0, y: 0 });
      focusHandleRef.current = byKeyboard;
    };

    return (
      <FloatingToolbarFrame
        ref={forwardedRef}
        aria-label="Page toolbar"
        {...props}
        x={draggable ? offset.x : 0}
        y={draggable ? offset.y : 0}>
        <FloatingToolbarPanel
          boxShadow={containerShadows[shadowStyle]}
          // Fades while letting go would hide it against a side. Hidden, it
          // stays where it was dropped (the tab shows its height).
          {...(docking && { opacity: 0.25 })}
          {...(isDocked && {
            opacity: 0,
            pointerEvents: "none",
            inert: true
          })}>
          <ContainerBackground
            borderRadius="xl"
            variant={variant}
            shadowStyle={shadowStyle}
            glass={glass}
            noise={noise}
            accented={accented}
          />
          {draggable && (
            <FloatingToolbarHandle
              offset={offset}
              onOffsetChange={setOffset}
              onDockPreview={setDocking}
              onDock={setDocked}
              storageKey={storageKey}
              ref={handleApiRef}
              variant={variant}
              shadowStyle={shadowStyle}
              glass={glass}
              noise={noise}
              accented={accented}
            />
          )}
          {children}
        </FloatingToolbarPanel>

        {isDocked && (
          // Centered on the hidden toolbar, at the side of the viewport (undoes
          // the frame's horizontal offset).
          <View
            position="absolute"
            top="50%"
            left={0}
            right={0}
            x={-offset.x}
            pointerEvents="box-none">
            <FloatingToolbarDockTabFrame
              group="floating-toolbar-dock-tab"
              side={docked}
              role="button"
              tabIndex={0}
              aria-label="Show toolbar"
              boxShadow={containerShadows[shadowStyle]}
              onPointerDown={(event: ReactPointerEvent<HTMLElement>) => {
                if (event.button !== 0) return;

                event.preventDefault();
                event.currentTarget.setPointerCapture(event.pointerId);
                tabPressRef.current = {
                  pointerId: event.pointerId,
                  x: event.clientX,
                  y: event.clientY
                };
              }}
              onPointerMove={(event: ReactPointerEvent<HTMLElement>) => {
                const press = tabPressRef.current;
                if (
                  press?.pointerId !== event.pointerId ||
                  Math.hypot(event.clientX - press.x, event.clientY - press.y) <
                    TAB_DRAG_DISTANCE
                ) {
                  return;
                }

                // A drag: show the toolbar where it was hidden, and hand the
                // pointer to its handle.
                tabPressRef.current = null;
                dragOutRef.current = press;
                setDocked(undefined);
              }}
              onPointerUp={(event: ReactPointerEvent<HTMLElement>) => {
                if (tabPressRef.current?.pointerId !== event.pointerId) return;

                tabPressRef.current = null;
                restore(false);
              }}
              onPointerCancel={() => {
                tabPressRef.current = null;
              }}
              onKeyDown={(event: ReactKeyboardEvent<HTMLElement>) => {
                if (event.key !== "Enter" && event.key !== " ") return;

                event.preventDefault();
                restore(true);
              }}>
              <ContainerBackground
                variant={variant}
                shadowStyle={shadowStyle}
                glass={glass}
                noise={noise}
                accented={accented}
                hoverGroup="floating-toolbar-dock-tab"
                transition="200ms"
              />
              <Text
                display="flex"
                transition="200ms"
                color="subtle group-hover/floating-toolbar-dock-tab:subtle-hovered">
                <Chevron aria-hidden={true} size={20} color="currentColor" variant="bold" />
              </Text>
            </FloatingToolbarDockTabFrame>
          </View>
        )}
      </FloatingToolbarFrame>
    );
  },
  { displayName: "FloatingToolbar" }
);

/** A row of controls. Buttons grow to the width of the widest row. */
const FloatingToolbarRow = styled(XStack, {
  displayName: "FloatingToolbarRow",
  alignItems: "center",
  gap: "md"
});

// The header title slides in the reading direction: scrolling down, the next
// heading rises from below as the previous one leaves upward (and the reverse).
// `direction` reaches the exiting title through `AnimatePresence`'s `custom`.
const FloatingToolbarTableOfContentsTitle = styled(View, {
  displayName: "FloatingToolbarTableOfContentsTitle",
  flex: 1,
  minWidth: 0,
  transition: "200ms",
  variants: {
    // 1 = down the page, -1 = up, 0 = no change
    direction: styled.dynamic<number>(direction => ({
      y: `enter:${direction < 0 ? -12 : 12}px exit:${direction < 0 ? 12 : -12}px`,
      opacity: "enter:0 exit:0"
    }))
  } as const
});

/** A vertical line between the controls of a row. */
const FloatingToolbarDivider = (props: DividerProps): JSX.Element => (
  <Divider
    direction="vertical"
    size="sm"
    marginVertical="lg"
    marginHorizontal="sm"
    {...props}
  />
);

export interface FloatingToolbarTableOfContentsProps extends Omit<
  CollapsibleProps,
  "children" | "value"
> {
  /** Headings in document order. */
  items: readonly TableOfContentsItem[];
  /** The title above the links in the expanded section list. */
  heading?: ReactNode;
  /** Props for the `TableOfContents` in the expanded section list. */
  tableOfContentsProps?: Omit<TableOfContentsProps, "items" | "children">;
}

/**
 * A `Collapsible` header showing the heading the reader is in, with a
 * reading-progress ring, that expands the page's `TableOfContents` upward
 * inside the toolbar.
 */
const FloatingToolbarTableOfContents = ({
  items,
  heading = "On this page",
  tableOfContentsProps,
  defaultValue = false,
  onValueChange,
  ...props
}: FloatingToolbarTableOfContentsProps): JSX.Element | null => {
  const { activeIndex, scrolledToEnd } = useActiveTableOfContentsItem(items);
  const active = items[activeIndex];
  const progress = getReadingProgress(activeIndex, items.length, scrolledToEnd);
  const [open, setOpen] = useState(defaultValue);
  const [previousIndex, setPreviousIndex] = useState(activeIndex);
  const [direction, setDirection] = useState(0);
  if (previousIndex !== activeIndex) {
    setDirection(Math.sign(activeIndex - previousIndex));
    setPreviousIndex(activeIndex);
  }
  const ref = useRef<HTMLElement>(null);

  // Closes on a press outside the component or on Escape (web only).
  useEffect(() => {
    if (!open || typeof document === "undefined") return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      // Focus inside the closing list moves back to the header (the first
      // button in DOM order; `direction="up"` only reverses it visually).
      if (ref.current?.contains(document.activeElement)) {
        ref.current.querySelector("button")?.focus();
      }
      setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!active) return null;

  return (
    // `Collapsible` forces `width: 100%`, so a flexible wrapper sizes it in the row.
    <View
      ref={ref as never}
      group="tableOfContents"
      flex={1}
      minWidth={0}
      alignSelf="flex-end">
      <Collapsible
        variant="ghost"
        bordered={false}
        direction="up"
        {...props}
        value={open}
        onValueChange={next => {
          setOpen(next.length > 0);
          onValueChange?.(next);
        }}>
        <Collapsible.Header
          paddingVertical="md"
          paddingHorizontal="lg"
          gap="lg"
          aria-label={`On this page${
            typeof active.title === "string" ? `: ${active.title}` : ""
          }`}>
          <XStack flex={1} minWidth={0} alignItems="center" gap="3xl">
            <CircularProgress
              aria-hidden={true}
              size={16}
              value={Math.round(progress * 100)}
            />
            <XStack flex={1} minWidth={0} overflow="hidden">
              <AnimatePresence
                mode="wait"
                custom={{ direction }}
                initial={false}>
                <FloatingToolbarTableOfContentsTitle
                  key={activeIndex}
                  direction={direction}>
                  <BodyText
                    transition="color 160ms ease-out"
                    size="sm"
                    fontWeight="medium"
                    numberOfLines={1}
                    color="emphasis group-hover/tableOfContents:emphasis-hovered">
                    {active.title}
                  </BodyText>
                </FloatingToolbarTableOfContentsTitle>
              </AnimatePresence>
            </XStack>
          </XStack>
        </Collapsible.Header>

        <Collapsible.Content>
          <TableOfContents minWidth={0} {...tableOfContentsProps} items={items}>
            {heading}
          </TableOfContents>
        </Collapsible.Content>
      </Collapsible>
    </View>
  );
};

export const FloatingToolbar = withStaticProperties(FloatingToolbarImpl, {
  Row: FloatingToolbarRow,
  Divider: FloatingToolbarDivider,
  TableOfContents: FloatingToolbarTableOfContents
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`FloatingToolbar.Row` is undefined on the server).
 */
export {
  FloatingToolbarDivider,
  FloatingToolbarRow,
  FloatingToolbarTableOfContents
};
