/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import type { SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { createStyledContext } from "@tamagui/core";
import { SelectContextProps } from "./types";

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
  const { tokens, props } = extras;
  if (!val || props.circular) {
    return;
  }

  if (typeof val === "number") {
    return {
      height: val,
      borderRadius: props.circular ? 100_000 : val * 0.2
    };
  }

  const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];

  return {
    height: val,
    borderRadius: props.circular ? 100_000 : radiusToken
  };
};
