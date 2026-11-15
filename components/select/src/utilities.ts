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

import type { FieldLabelPlacement } from "@cyclone-ui/field";
import { getFieldLabelInset } from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormSizeToken, getSized } from "@cyclone-ui/helpers";
import { createStyledContext } from "@tamagui/core";
import type { RefObject } from "react";
import { createContext } from "react";
import type { SelectOptionEntry } from "./options";
import type { SelectContextProps } from "./types";

export interface SelectBehavior {
  /** The select's options (see `getSelectOptions`). */
  options: readonly SelectOptionEntry[];

  /**
   * Whether the text box is a text input whose text filters the options (in
   * a bottom sheet, the sheet's search input does).
   */
  searchable: boolean;

  /**
   * The text the menu's items are filtered by, while the user edits it
   * (`undefined` otherwise).
   */
  search?: string;
  setSearch?: (search: string) => void;

  /** A searchable select's text input. */
  inputRef?: RefObject<HTMLInputElement | null>;

  /** Called with a searchable select's text input's text as it is edited. */
  onTextBoxInput?: (text: string) => void;

  /**
   * Called as a searchable select's text input gains and loses focus, with
   * the element focus moves to.
   */
  onTextBoxFocusChange?: (focused: boolean, next?: Element | null) => void;

  /**
   * Whether the open menu takes focus. A searchable select keeps it in the
   * text box, for typing, until `ArrowDown` moves it to the options.
   */
  listFocused: boolean;

  /** Whether the last characters typed on the select matched no option. */
  invalid: boolean;

  /**
   * Called with the `key` of each key pressed in the text box; returns
   * whether the select handled it.
   */
  onTextBoxKey?: (key: string) => boolean;
}

// A plain context: a styled context gives function values random identity
// keys and treats every key as a frame prop.
export const SelectBehaviorContext = createContext<SelectBehavior>({
  options: [],
  searchable: false,
  listFocused: false,
  invalid: false
});

export const SelectContext = createStyledContext<
  SelectContextProps,
  | "size"
  | "circular"
  | "disabled"
  | "focused"
  | "hasValidationMessage"
  | "variant"
>(
  {
    size: "md",
    circular: false,
    disabled: false,
    focused: false,
    hasValidationMessage: false,
    variant: "outlined"
  } as SelectContextProps,
  {
    keys: [
      "size",
      "circular",
      "disabled",
      "focused",
      "hasValidationMessage",
      "variant"
    ]
  }
);

export const getSelectSize = (
  val: FormControlSize | undefined,
  {
    labelPlacement,
    circular
  }: {
    labelPlacement?: FieldLabelPlacement | null;
    circular?: boolean | null;
  } = {}
) => {
  if (!val) {
    return;
  }

  const size = getFormSizeToken(val);
  const height = labelPlacement
    ? getSized(size) + getFieldLabelInset(labelPlacement, val)
    : size;

  return {
    height,
    minHeight: height,
    borderRadius: circular ? 100_000 : "control"
  };
};

export const getSelectVisualFocus = (
  focused: boolean | undefined,
  open: boolean
) => Boolean(focused) || open;

export { getContextMenuSize as getSelectContentSize } from "@cyclone-ui/context-menu/utilities";
