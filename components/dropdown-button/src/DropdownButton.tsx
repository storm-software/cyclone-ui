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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { ContextMenu } from "@cyclone-ui/context-menu";
import { ChevronDown } from "@cyclone-ui/icons";
import type { TamaguiElement } from "@tamagui/core";
import { View } from "@tamagui/core";
import type { JSX, ReactNode, Ref } from "react";
import { useState } from "react";

export type DropdownButtonProps = ButtonProps & {
  /**
   * The main action's button
   */
  ref?: Ref<TamaguiElement>;

  /**
   * The menu's `ContextMenu.Item`s, opened by the chevron
   */
  items: ReactNode;

  /**
   * The accessible label and tooltip of the chevron that opens the menu
   *
   * @defaultValue "More options"
   */
  menuLabel?: string;

  /**
   * The `value` of the menu's selected item, which displays a check mark
   */
  value?: string;

  /**
   * Called with an item's `value` when that item is pressed. Pressing an item
   * with a `value` also closes the menu.
   */
  onValueChange?: (value: string) => void;
};

/**
 * A split button: the main action (the children) joined to a chevron that
 * opens a `ContextMenu` of related actions (the `items`).
 */
export const DropdownButton = ({
  ref,
  items,
  menuLabel = "More options",
  value,
  onValueChange,
  variant,
  size,
  disabled,
  theme,
  shadowStyle,
  glass,
  noise,
  accented,
  animate,
  ringed,
  rounded,
  borderRadius = rounded ? 100_000 : "button",
  ...props
}: DropdownButtonProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  // Both halves draw the same surface.
  const shared = {
    variant,
    size,
    disabled,
    theme,
    shadowStyle,
    glass,
    noise,
    accented,
    animate,
    ringed,
    rounded
  };

  return (
    // `fit-content`: a Button grows along its parent's main axis.
    <View flexDirection="row" width="fit-content">
      <Button
        ref={ref}
        {...shared}
        {...props}
        // Corner props need a call-site `borderRadius`: Button's resolved one
        // replaces them.
        borderRadius={borderRadius}
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        // Raised while focused so the chevron doesn't cover its ring.
        zIndex="0 focus-visible:1"
      />
      <ContextMenu
        open={open}
        onOpenChange={setOpen}
        size={size === "sm" || size === "lg" ? size : "md"}
        placement="bottom-end"
        value={value}
        onValueChange={(selected: string) => {
          setOpen(false);
          onValueChange?.(selected);
        }}>
        <ContextMenu.Trigger asChild={true}>
          <Button
            {...shared}
            tooltip={menuLabel}
            // Square.
            tight={true}
            aspectRatio={1}
            flexGrow={0}
            // The halves' borders overlap into one divider; `primary` has no
            // border, so it draws one.
            marginLeft={variant === "outlined" ? -2 : -1}
            {...(variant === "primary" && {
              borderLeftWidth: 1,
              borderLeftColor: "on-primary/25"
            })}
            borderRadius={borderRadius}
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            zIndex="0 focus-visible:1">
            <Button.Icon>
              <ChevronDown />
            </Button.Icon>
          </Button>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Content.ScrollView>
            {items}
          </ContextMenu.Content.ScrollView>
        </ContextMenu.Content>
      </ContextMenu>
    </View>
  );
};
