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
  ContextMenuContentProps,
  ContextMenuItemProps
} from "@cyclone-ui/context-menu";
import { ContextMenu } from "@cyclone-ui/context-menu";
import { FormControlContext, useFormControl } from "@cyclone-ui/helpers";
import { SearchInput } from "@cyclone-ui/search-input";
import type { SelectOption } from "@stryke/types/form";
import { Theme, useMedia, View, withStaticProperties } from "@tamagui/core";
import type { JSX } from "react";
import { use, useEffect, useRef } from "react";
import { getItemLabel, matchesSearch } from "./options";
import { SelectBehaviorContext, SelectContext } from "./utilities";

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
}: SelectItemProps): JSX.Element | null => {
  const { value: selectedValue } = SelectContext.useStyledContext();
  const { search } = use(SelectBehaviorContext);

  // Hidden while the menu's search filter doesn't match it.
  if (search && !matchesSearch(getItemLabel(children, value), search)) {
    return null;
  }

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

// The search input of a searchable select's bottom sheet, which covers the text
// box typed in elsewhere. Its own component so its effect runs where it
// mounts: the sheet mounts the menu's contents after it opens.
const SelectSearch = (): JSX.Element => {
  const { search, setSearch } = use(SelectBehaviorContext);
  const { open } = SelectContext.useStyledContext();
  const ref = useRef<HTMLElement>(null);

  // Opening the sheet focuses its first focusable element, the search's icon
  // button; type straight into the search instead. A passive effect runs
  // after that.
  useEffect(() => {
    if (open) {
      ref.current?.querySelector?.("input")?.focus();
    }
  }, [open]);

  return (
    // The search is local UI state, not part of the select's field: hide the
    // enclosing field from it.
    <FormControlContext value={undefined}>
      {/* Its own `field` group: groups flow through context into the portal,
          so it would otherwise follow the select field's hover. */}
      <View ref={ref as any} group="field" data-select-search>
        <SearchInput
          size="sm"
          value={search ?? ""}
          onChange={(event: CustomEvent<string>) => setSearch?.(event.detail)}>
          <SearchInput.TextBox
            aria-label="Search options"
            placeholder="Search..."
          />
        </SearchInput>
      </View>
    </FormControlContext>
  );
};

const SelectItemsGroup = ({
  children,
  ...props
}: ContextMenuContentProps): JSX.Element => {
  const items = useFormControl()?.items;
  const { options, searchable, search, listFocused, inputRef } = use(
    SelectBehaviorContext
  );
  // Where the menu is a bottom sheet (`Popover`'s `max-sm`), it shows its own
  // search input.
  const inSheet = Boolean((useMedia() as Record<string, boolean>)["max-sm"]);
  const noResults =
    search?.trim() &&
    options.length > 0 &&
    !options.some(option => matchesSearch(option.label, search));

  return (
    // Keeps a validation theme on the field from tinting the options.
    <Theme name="base">
      <ContextMenu.Content
        // At least the text box's width, plus 4px on each side.
        minWidth="calc(var(--tamagui-popper-anchor-width) + 8px)"
        // Focus stays in a searchable select's text input, for typing, until
        // `ArrowDown` turns the focus scope on, which focuses the first
        // option (and on close, the text box again).
        disableFocusScope={searchable && !listFocused}
        // The popover returns focus to its trigger, which in a searchable
        // select isn't focusable: return it to the text input instead.
        onCloseAutoFocus={
          searchable
            ? (event: { cancel: () => void }) => {
                event.cancel();
                inputRef?.current?.focus();
              }
            : undefined
        }
        {...props}>
        {searchable && inSheet && <SelectSearch />}
        {noResults ? (
          <ContextMenu.Item.Text
            {...({ role: "status" } as object)}
            color="primary-disabled"
            textAlign="center">
            No matching options
          </ContextMenu.Item.Text>
        ) : (
          <ContextMenu.Content.ScrollView
            // A valid ARIA role that Tamagui's React Native `Role` type lacks.
            {...({ role: "listbox" } as object)}>
            {children ??
              items?.map((item, index) => (
                <SelectItem key={index} {...item} value={String(item.value)}>
                  {item.name}
                </SelectItem>
              ))}
          </ContextMenu.Content.ScrollView>
        )}
      </ContextMenu.Content>
    </Theme>
  );
};

export const SelectItems = withStaticProperties(SelectItemsGroup, {
  Item: SelectItem
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`SelectItems.Item` is undefined on the server).
 */
export { SelectItem as SelectItemsItem };
