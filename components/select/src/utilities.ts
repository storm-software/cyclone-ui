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

import { getSized } from "@cyclone-ui/helpers";
import type { SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { createStyledContext } from "@tamagui/core";
import type { SelectContextProps } from "./types";

export const SelectContext = createStyledContext<SelectContextProps>({
  size: "$true",
  circular: false,
  disabled: false,
  focused: false,
  hasValidationMessage: false,
  variant: "default"
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
  const height = props.variant === "floating" ? getSized(size) + 3 : size;

  return {
    height,
    minHeight: height,
    borderRadius:
      props.variant === "underline" ? 0 : props.circular ? 100_000 : "$control"
  };
};

const DEFAULT_SELECT_SIZE = 42;

const scaleSelectMetric = (value: number, scale: number, minimum = 1): number =>
  Math.max(minimum, Math.round(value * scale));

export const getSelectContentSize = (val: SizeTokens | number = "$true") => {
  const size = val === "$true" || String(val) === "true" ? "$10xl" : val;
  const scale = getSized(size) / DEFAULT_SELECT_SIZE;

  return {
    fontSize: scaleSelectMetric(16, scale, 12),
    lineHeight: scaleSelectMetric(24, scale, 18),
    valuePaddingLeft: scaleSelectMetric(3.5, scale, 1),
    valuePaddingRight: scaleSelectMetric(1, scale),
    itemPaddingVertical: scaleSelectMetric(4, scale, 2),
    itemFramePaddingHorizontal: 18.4 * scale,
    itemTextPaddingVertical: "$sm",
    itemTextPaddingHorizontal: 0.8 * scale,
    itemPaddingHorizontal: scaleSelectMetric(5, scale, 2),
    dividerInset: scaleSelectMetric(10, scale, 4),
    indicatorWidth: scaleSelectMetric(20, scale, 14),
    indicatorIconSize: scaleSelectMetric(16, scale, 12),
    scrollButtonHeight: scaleSelectMetric(18, scale, 14),
    scrollIconSize: scaleSelectMetric(20, scale, 14),
    viewportPadding: scaleSelectMetric(7, scale, 3),
    gradientMargin: scaleSelectMetric(1, scale)
  };
};
