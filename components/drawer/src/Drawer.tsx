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

import type {
  SheetComponent,
  SheetFooterProps,
  SheetFrameProps,
  SheetHandleProps,
  SheetOverlayProps,
  SheetProps,
  SheetScrollViewProps
} from "@cyclone-ui/sheet";
import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { ArrowLeft, Close } from "@cyclone-ui/icons";
import { Sheet } from "@cyclone-ui/sheet";
import { styled } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack, YStack } from "@tamagui/stacks";
import type { FC } from "react";
import { createContext, use, useCallback, useState } from "react";

export type DrawerDirection = NonNullable<SheetProps["direction"]>;
export type DrawerSize = "sm" | "md" | "lg";
export type DrawerProps = Omit<SheetProps, "size"> & {
  size?: DrawerSize;
};
export type DrawerFrameProps = SheetFrameProps;
export type DrawerOverlayProps = SheetOverlayProps;
export type DrawerHandleProps = SheetHandleProps;
export type DrawerScrollViewProps = SheetScrollViewProps;
export type DrawerFooterProps = SheetFooterProps;
export type DrawerHeaderProps = SheetFooterProps & {
  /** Renders a back arrow button that calls this handler. */
  onBack?: () => void;
  /** Renders an X button that closes the drawer. */
  closable?: boolean;
};

const DrawerContext = createContext<(open: boolean) => void>(() => {});

const DrawerFrameImpl: FC<DrawerFrameProps> = ({
  borderRadius = "drawer",
  borderColor = "hairline",
  ...props
}) => (
  <Sheet.Frame
    borderRadius={borderRadius}
    borderColor={borderColor}
    borderLeftColor={borderColor}
    borderRightColor={borderColor}
    borderTopColor={borderColor}
    borderBottomColor={borderColor}
    borderWidth={1}
    margin="lg"
    {...props}
  />
);

const DrawerHeaderImpl: FC<DrawerHeaderProps> = ({
  children,
  onBack,
  closable = false,
  ...props
}) => {
  const setOpen = use(DrawerContext);

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
          variant="ghost"
          circular={true}
          flexGrow={0}
          onPress={onBack}>
          <Button.Icon>
            <ArrowLeft color="currentColor" />
          </Button.Icon>
        </Button>
      )}
      <YStack flex={1} gap="sm" alignSelf="center">
        {children}
      </YStack>
      {closable && (
        <Button
          aria-label="Close"
          variant="ghost"
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

const DrawerDescription: typeof BodyText = styled(BodyText, {
  displayName: "DrawerDescription",
  color: "secondary"
});

// Stays pinned below `Drawer.ScrollView`, which takes the remaining space.
const DrawerFooterImpl: FC<DrawerFooterProps> = props => (
  <Sheet.Footer flexShrink={0} {...props} />
);

const DrawerImpl: FC<DrawerProps> = ({
  direction = "right",
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) => {
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
    <DrawerContext.Provider value={setOpen}>
      <Sheet
        direction={direction}
        {...props}
        open={open ?? uncontrolledOpen}
        onOpenChange={setOpen}
      />
    </DrawerContext.Provider>
  );
};

export interface DrawerComponent extends FC<DrawerProps> {
  Frame: FC<DrawerFrameProps>;
  Handle: SheetComponent["Handle"];
  Overlay: SheetComponent["Overlay"];
  ScrollView: SheetComponent["ScrollView"];
  Heading: SheetComponent["Heading"];
  Body: SheetComponent["Body"];
  Header: FC<DrawerHeaderProps>;
  Title: SheetComponent["Heading"];
  Description: typeof BodyText;
  Footer: FC<DrawerFooterProps>;
}

export const Drawer: DrawerComponent = withStaticProperties(DrawerImpl, {
  Frame: DrawerFrameImpl,
  Handle: Sheet.Handle,
  Overlay: Sheet.Overlay,
  ScrollView: Sheet.ScrollView,
  Heading: Sheet.Heading,
  Body: Sheet.Body,
  Header: DrawerHeaderImpl,
  Title: Sheet.Heading,
  Description: DrawerDescription,
  Footer: DrawerFooterImpl
});
