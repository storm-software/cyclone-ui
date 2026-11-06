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

import type { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { ArrowLeft, Close } from "@cyclone-ui/icons";
import type {
  SheetComponent,
  SheetFooterProps,
  SheetFrameProps,
  SheetHandleProps,
  SheetOverlayProps,
  SheetProps,
  SheetScrollViewProps
} from "@cyclone-ui/sheet";
import { Sheet } from "@cyclone-ui/sheet";
import type { GetProps } from "@tamagui/core";
import { styled, useMedia } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack, YStack } from "@tamagui/stacks";
import type { FC, ReactNode } from "react";
import {
  Children,
  createContext,
  isValidElement,
  use,
  useCallback,
  useState
} from "react";

export type DrawerDirection = NonNullable<SheetProps["direction"]>;
export type DrawerSize = "sm" | "md" | "lg";
// Not `variant`: `Drawer.Frame` owns its surface and inset-panel layout.
export type DrawerProps = Omit<SheetProps, "size" | "variant"> & {
  size?: DrawerSize;
  /**
   * Insets the frame from the viewport edges and rounds every corner. When
   * `false` (default) the frame sits flush against its edge like `Sheet`.
   */
  showGaps?: boolean;
};
export type DrawerFrameProps = SheetFrameProps;
export type DrawerOverlayProps = SheetOverlayProps;
export type DrawerHandleProps = SheetHandleProps;
export type DrawerScrollViewProps = SheetScrollViewProps;
export type DrawerContentProps = GetProps<typeof YStack>;
export type DrawerFooterProps = SheetFooterProps;
export type DrawerHeaderProps = SheetFooterProps & {
  /** Renders a back arrow button that calls this handler. */
  onBack?: () => void;
  /** Renders an X button that closes the drawer. */
  closable?: boolean;
};

const DrawerContext = createContext<{
  setOpen: (open: boolean) => void;
  showGaps: boolean;
  direction: DrawerDirection;
  size?: DrawerSize;
}>({ setOpen: () => {}, showGaps: false, direction: "right" });

// Mirrors Sheet's own size styles, which a media clause on the same prop would
// otherwise replace.
const drawerSizeExtents: Record<DrawerSize, string> = {
  sm: "30vw",
  md: "60vw",
  lg: "90vw"
};

// Below `sm` the frame fills almost the whole viewport along its axis,
// whatever `size` says.
const getDrawerFrameExtentProps = (
  direction: DrawerDirection,
  size?: DrawerSize
) => {
  if (direction === "bottom") {
    // Unsized bottom drawers are sized by snap points instead.
    return size
      ? { height: `${drawerSizeExtents[size]} max-sm:95vh` }
      : undefined;
  }

  return direction === "top"
    ? {
        height: `${size ? drawerSizeExtents[size] : "80vh"} max-sm:95vh`,
        maxHeight: "80vh max-sm:95vh"
      }
    : {
        width: `${size ? drawerSizeExtents[size] : "80vw"} max-sm:95vw`,
        maxWidth: "80vw max-sm:95vw"
      };
};

// The frame side facing the page; the only border drawn without gaps.
const drawerInnerBorderSide: Record<DrawerDirection, string> = {
  top: "borderBottomWidth",
  right: "borderLeftWidth",
  bottom: "borderTopWidth",
  left: "borderRightWidth"
};

// The outer shell. `Drawer.Footer` sits on it, below `Drawer.Content`.
// Without gaps, Sheet's own edge-side radii apply (an explicit `undefined`
// would replace them).
const DrawerFrameImpl: FC<DrawerFrameProps> = ({
  backgroundColor = "surface",
  borderColor = "hairline",
  ...props
}) => {
  const { showGaps, direction, size } = use(DrawerContext);

  return (
    <Sheet.Frame
      backgroundColor={backgroundColor}
      {...getDrawerFrameExtentProps(direction, size)}
      {...(showGaps && { borderRadius: "drawer", margin: "lg" })}
      borderColor={borderColor}
      borderLeftColor={borderColor}
      borderRightColor={borderColor}
      borderTopColor={borderColor}
      borderBottomColor={borderColor}
      // Per side, so the screen-facing sides can drop their border.
      borderTopWidth={showGaps ? 1 : 0}
      borderRightWidth={showGaps ? 1 : 0}
      borderBottomWidth={showGaps ? 1 : 0}
      borderLeftWidth={showGaps ? 1 : 0}
      {...{ [drawerInnerBorderSide[direction]]: 1 }}
      // Portaled content inherits the text color (black by default), which
      // `currentColor` icons pick up.
      style={{ color: "var(--primary)" }}
      {...props}
    />
  );
};

// Sheet's handle sits 15px into the frame, over `Drawer.Content`'s border;
// without the margin it stays in the frame's 13px handle-side inset.
const DrawerHandle: FC<DrawerHandleProps> = props => (
  <Sheet.Handle margin={0} {...props} />
);

const DrawerHeaderImpl: FC<DrawerHeaderProps> = ({
  children,
  onBack,
  closable = false,
  ...props
}) => {
  const { setOpen } = use(DrawerContext);

  return (
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
        <Button
          aria-label="Close"
          tooltip="Close"
          variant="ghost"
          size="sm"
          circular={true}
          flexGrow={0}
          onPress={() => setOpen(false)}>
          <Button.Icon>
            <Close color="currentColor" />
          </Button.Icon>
        </Button>
      )}
    </XStack>
  );
};

const DrawerContentFrame = styled(YStack, {
  displayName: "DrawerContent",
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

const isDrawerHeader = (child: ReactNode) =>
  isValidElement(child) && child.type === DrawerHeaderImpl;

// The bordered inner panel; takes the space `Drawer.Footer` leaves.
// `Drawer.Header` children stay pinned, and the rest scrolls once it
// outgrows the panel.
const DrawerContent: FC<DrawerContentProps> = ({ children, ...props }) => {
  const items = Children.toArray(children);
  const header = items.filter(isDrawerHeader);

  return (
    <DrawerContentFrame {...props}>
      {header.length > 0 && (
        <YStack flexShrink={0} paddingHorizontal="6xl">
          {header}
        </YStack>
      )}
      <Sheet.ScrollView
        // No gutter until it scrolls, so the body lines up with the header.
        style={{ scrollbarGutter: "auto" }}>
        <YStack paddingHorizontal="6xl" paddingBottom="5xl" gap="6xl">
          {items.filter(child => !isDrawerHeader(child))}
        </YStack>
      </Sheet.ScrollView>
    </DrawerContentFrame>
  );
};

const DrawerTitle = styled(Sheet.Heading, {
  displayName: "DrawerTitle",
  fontSize: "2xl",
  lineHeight: "lg",
  fontWeight: "semibold"
});

const DrawerDescription = styled(Sheet.Description, {
  displayName: "DrawerDescription",
  size: "sm",
  // After `size`, whose font tokens would otherwise make it bold.
  fontWeight: "normal",
  color: "ink",
  marginTop: "sm"
});

// Stays pinned below `Drawer.Content`, on the frame's surface. Buttons wrap
// onto stacked rows once they no longer fit side by side.
const DrawerFooterImpl: FC<DrawerFooterProps> = props => (
  <Sheet.Footer
    flexShrink={0}
    flexWrap="wrap"
    padding="xl"
    // `Drawer.Content`'s `lg` margin already sits above, so the buttons end up
    // centered between the panel and the frame's bottom edge.
    paddingTop="calc(var(--t-space-xl) - var(--t-space-lg))"
    gap="2xl"
    {...props}
  />
);

const DrawerImpl: FC<DrawerProps> = ({
  direction = "right",
  open,
  defaultOpen,
  onOpenChange,
  showGaps = false,
  size,
  snapPoints,
  ...props
}) => {
  const isSmall = useMedia()["max-sm"] ?? false;
  // Owned here (not by Sheet) so `Drawer.Header`'s close button can also
  // close uncontrolled drawers.
  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false
  );
  const setOpen = useCallback(
    (value: boolean) => {
      if (open === undefined) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    },
    [open, onOpenChange]
  );

  return (
    <DrawerContext.Provider value={{ setOpen, showGaps, direction, size }}>
      <Sheet
        direction={direction}
        size={size}
        snapPoints={
          snapPoints ??
          (direction === "bottom" && !size && isSmall ? [95] : undefined)
        }
        {...props}
        open={open ?? uncontrolledOpen}
        onOpenChange={setOpen}
      />
    </DrawerContext.Provider>
  );
};

export interface DrawerComponent extends FC<DrawerProps> {
  Frame: FC<DrawerFrameProps>;
  Handle: FC<DrawerHandleProps>;
  Overlay: SheetComponent["Overlay"];
  ScrollView: SheetComponent["ScrollView"];
  Heading: SheetComponent["Heading"];
  Body: SheetComponent["Body"];
  Content: FC<DrawerContentProps>;
  Header: FC<DrawerHeaderProps>;
  Title: SheetComponent["Heading"];
  Description: typeof BodyText;
  Footer: FC<DrawerFooterProps>;
}

export const Drawer: DrawerComponent = withStaticProperties(DrawerImpl, {
  Frame: DrawerFrameImpl,
  Handle: DrawerHandle,
  Overlay: Sheet.Overlay,
  ScrollView: Sheet.ScrollView,
  Heading: Sheet.Heading,
  Body: Sheet.Body,
  Content: DrawerContent,
  Header: DrawerHeaderImpl,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Footer: DrawerFooterImpl
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Drawer.Frame` is undefined on the server).
 */
export {
  DrawerContent,
  DrawerDescription,
  DrawerFooterImpl as DrawerFooter,
  DrawerFrameImpl as DrawerFrame,
  DrawerHandle,
  DrawerHeaderImpl as DrawerHeader,
  DrawerTitle
};
export const DrawerOverlay = Sheet.Overlay;
export const DrawerScrollView: typeof Sheet.ScrollView = Sheet.ScrollView;
export const DrawerHeading = Sheet.Heading;
export const DrawerBody = Sheet.Body;
