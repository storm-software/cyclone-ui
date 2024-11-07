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

import { isNumber } from "@storm-stack/types";
import type { SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { getSpace } from "@tamagui/get-token";

/**
 * Get the sizing related style values for a button component based on the size token or number
 *
 * @param val - The size token or number to use
 * @param param - The tokens and props to use
 * @returns The style values for the button sizing
 */
export const getButtonSized = (
  val: SizeTokens | number,
  { tokens, props }: VariantSpreadExtras<any>
) => {
  if (!val || props.circular) {
    return;
  }

  if (isNumber(val)) {
    return {
      paddingHorizontal: val * 0.25,
      gap: val * 0.25,
      height: val,
      borderRadius: props.circular ? 100_000 : val * 0.2
    };
  }

  const size = getSpace(val);
  const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];

  return {
    paddingHorizontal: size,
    gap: size,
    height: val,
    borderRadius: props.circular ? 100_000 : radiusToken
  };
};
