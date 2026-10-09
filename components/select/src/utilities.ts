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

import {
  getFormSizeToken,
  getSized,
  type FormControlSize
} from "@cyclone-ui/helpers";
import { createStyledContext } from "@tamagui/core";
import type { SelectContextProps } from "./types";

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
    variant: "default"
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
    variant,
    circular
  }: { variant?: string | null; circular?: boolean | null } = {}
) => {
  if (!val) {
    return;
  }

  const size = getFormSizeToken(val);
  const height = variant === "floating" ? getSized(size) + 3 : size;

  return {
    height,
    minHeight: height,
    borderRadius: variant === "underline" ? 0 : circular ? 100_000 : "control"
  };
};

export const getSelectVisualFocus = (
  focused: boolean | undefined,
  open: boolean
) => Boolean(focused) || open;

export { getContextMenuSize as getSelectContentSize } from "@cyclone-ui/context-menu/utilities";
