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
  ContextMenuContentProps,
  ContextMenuItemProps
} from "@cyclone-ui/context-menu";
import { ContextMenu } from "@cyclone-ui/context-menu";
import type { SelectOption } from "@stryke/types/form";
import { Theme, withStaticProperties } from "@tamagui/core";
import type { JSX } from "react";
import { SelectContext } from "./utilities";

// Like v2 `.styleable<Custom>()`, the option fields replace the item's
// same-named props (`value` is stringified below).
type SelectItemOption = Omit<SelectOption, "name">;
type SelectItemProps = Omit<ContextMenuItemProps, keyof SelectItemOption> &
  Partial<SelectItemOption>;

export const SelectItem = ({
  children,
  value,
  // Option fields with no DOM attribute of their own.
  index: _index,
  selected: _selected,
  description: _description,
  status: _status,
  icon: _icon,
  image: _image,
  ...props
}: SelectItemProps): JSX.Element => {
  const { value: selectedValue } = SelectContext.useStyledContext();

  return (
    <ContextMenu.Item
      {...props}
      role="option"
      aria-selected={selectedValue === String(value)}
      value={String(value)}>
      <ContextMenu.Item.Text whiteSpace="nowrap">
        {children}
      </ContextMenu.Item.Text>
    </ContextMenu.Item>
  );
};

const SelectItemsGroup = ({
  children,
  ...props
}: ContextMenuContentProps): JSX.Element => (
  // Keeps a validation theme on the field from tinting the options.
  <Theme name="base">
    <ContextMenu.Content
      // At least the text box's width, plus 4px on each side.
      minWidth="calc(var(--tamagui-popper-anchor-width) + 8px)"
      {...props}>
      <ContextMenu.Content.ScrollView role="listbox">
        {children}
      </ContextMenu.Content.ScrollView>
    </ContextMenu.Content>
  </Theme>
);

export const SelectItems = withStaticProperties(SelectItemsGroup, {
  Item: SelectItem
});
