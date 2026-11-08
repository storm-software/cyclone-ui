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
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { JSX, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { getReadingProgress } from "./utilities";

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
  gap: "lg",
  padding: "lg",
  borderRadius: "xl",
  y: "enter:12px",
  opacity: "enter:0",
  transition: "200ms"
});

export type FloatingToolbarProps = GetProps<typeof FloatingToolbarFrame> &
  ContainerSurfaceProps;

/**
 * A toolbar fixed to the bottom of the viewport for page-level controls.
 * Stack `FloatingToolbar.Row`s inside it. `variant` defaults to `floating`,
 * `shadowStyle` to `elevated` and `glass` to on.
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
      ...props
    }: FloatingToolbarProps,
    forwardedRef
  ) => (
    <FloatingToolbarFrame
      ref={forwardedRef}
      aria-label="Page toolbar"
      {...props}>
      <FloatingToolbarPanel boxShadow={containerShadows[shadowStyle]}>
        <ContainerBackground
          borderRadius="xl"
          variant={variant}
          shadowStyle={shadowStyle}
          glass={glass}
          noise={noise}
          accented={accented}
        />
        {children}
      </FloatingToolbarPanel>
    </FloatingToolbarFrame>
  ),
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
    <View ref={ref as never} group="tableOfContents" flex={1} minWidth={0} alignSelf="flex-end">
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
          <XStack flex={1} minWidth={0} alignItems="center" gap="xl">
            <CircularProgress
              aria-hidden={true}
              size={16}
              value={Math.round(progress * 100)}
            />
            <XStack flex={1} minWidth={0} overflow="hidden">
              <AnimatePresence mode="wait" custom={{ direction }} initial={false}>
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
          <TableOfContents
            minWidth={0}
            {...tableOfContentsProps}
            items={items}>
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
