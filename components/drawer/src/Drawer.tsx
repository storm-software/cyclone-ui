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
import { withStaticProperties } from "@tamagui/helpers";
import type { FC } from "react";

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

const DrawerFrameImpl: FC<DrawerFrameProps> = ({
  borderRadius = "$drawer",
  borderColor = "$border",
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
    margin="$lg"
    {...props}
  />
);

const DrawerImpl: FC<DrawerProps> = ({ direction = "right", ...props }) => {
  return <Sheet direction={direction} {...props} />;
};

export interface DrawerComponent extends FC<DrawerProps> {
  Frame: FC<DrawerFrameProps>;
  Handle: SheetComponent["Handle"];
  Overlay: SheetComponent["Overlay"];
  ScrollView: SheetComponent["ScrollView"];
  Heading: SheetComponent["Heading"];
  Body: SheetComponent["Body"];
  Footer: SheetComponent["Footer"];
}

export const Drawer: DrawerComponent = withStaticProperties(DrawerImpl, {
  Frame: DrawerFrameImpl,
  Handle: Sheet.Handle,
  Overlay: Sheet.Overlay,
  ScrollView: Sheet.ScrollView,
  Heading: Sheet.Heading,
  Body: Sheet.Body,
  Footer: Sheet.Footer
});
