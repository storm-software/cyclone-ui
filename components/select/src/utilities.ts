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

import type { SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { createStyledContext } from "@tamagui/core";
import type { SelectContextProps } from "./types";
export const SelectContext = createStyledContext<SelectContextProps>({
  size: "$true",
  circular: false,
  disabled: false,
  focused: false
});

export const getSelectSize = (
  val: SizeTokens | number,
  extras: VariantSpreadExtras<any>
) => {
  const { props } = extras;
  if (!val) {
    return;
  }

  const size = val === "$true" || String(val) === "true" ? "$10xl" : val;

  return {
    height: size,
    minHeight: size,
    borderRadius: props.circular ? 100_000 : "$control"
  };
};
