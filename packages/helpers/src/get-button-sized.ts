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

import { isNumber } from "@stryke/type-checks/is-number";
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
  const radiusToken = tokens.radius[val] ?? tokens.radius.$true;

  return {
    paddingHorizontal: size,
    gap: size,
    height: val,
    borderRadius: props.circular ? 100_000 : radiusToken
  };
};
