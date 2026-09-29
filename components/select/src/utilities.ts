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
  getFormFontScale,
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

const DEFAULT_SELECT_SIZE = 42;

const scaleSelectMetric = (value: number, scale: number, minimum = 1): number =>
  Math.max(minimum, Math.round(value * scale));

export const shouldCenterSelectItemText = (
  viewportWidth: number,
  narrowViewportWidth: number,
  hasItemAdornment: boolean
) => viewportWidth < narrowViewportWidth && !hasItemAdornment;

export const getSelectVisualFocus = (
  focused: boolean | undefined,
  open: boolean
) => Boolean(focused) || open;

export const getSelectContentSize = (val: FormControlSize = "md") => {
  const size = getFormSizeToken(val);
  const scale = getSized(size) / DEFAULT_SELECT_SIZE;

  return {
    fontSize: 16 * getFormFontScale(val),
    // Unitless pixels: v3 emits a numeric `lineHeight` as a unitless CSS
    // multiplier (24 → 24 × font size), so style props must append `px`.
    lineHeight: 24 * getFormFontScale(val),
    valuePaddingLeft: scaleSelectMetric(3.5, scale, 1),
    valuePaddingRight: scaleSelectMetric(1, scale),
    itemPaddingVertical: scaleSelectMetric(4, scale, 2),
    itemFramePaddingHorizontal: 18.4 * scale,
    itemTextPaddingVertical: "sm",
    itemTextPaddingHorizontal: 0.8 * scale,
    itemPaddingHorizontal: scaleSelectMetric(5, scale, 2),
    dividerInset: scaleSelectMetric(10, scale, 4),
    indicatorWidth: scaleSelectMetric(20, scale, 14),
    indicatorIconSize: 16 * getFormFontScale(val),
    scrollButtonHeight: scaleSelectMetric(18, scale, 14),
    scrollIconSize: scaleSelectMetric(20, scale, 14),
    viewportPadding: scaleSelectMetric(7, scale, 3),
    gradientMargin: scaleSelectMetric(1, scale)
  };
};
