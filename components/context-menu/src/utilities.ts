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

import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  getFormFontScale,
  getFormSizeToken,
  getSized
} from "@cyclone-ui/helpers";

const DEFAULT_CONTROL_SIZE = 42;

const scaleMetric = (value: number, scale: number, minimum = 1): number =>
  Math.max(minimum, Math.round(value * scale));

/**
 * The text, spacing and indicator metrics of a context menu's items, scaled
 * with the size of the form control that opens it.
 */
export const getContextMenuSize = (val: FormControlSize = "md") => {
  const size = getFormSizeToken(val);
  const scale = getSized(size) / DEFAULT_CONTROL_SIZE;

  return {
    fontSize: 16 * getFormFontScale(val),
    // Unitless pixels: v3 emits a numeric `lineHeight` as a unitless CSS
    // multiplier (24 → 24 × font size), so style props must append `px`.
    lineHeight: 24 * getFormFontScale(val),
    valuePaddingLeft: scaleMetric(3.5, scale, 1),
    valuePaddingRight: scaleMetric(1, scale),
    itemPaddingVertical: scaleMetric(4, scale, 2),
    itemFramePaddingHorizontal: 18.4 * scale,
    itemTextPaddingVertical: "lg",
    itemTextPaddingHorizontal: 0.8 * scale,
    itemPaddingHorizontal: scaleMetric(5, scale, 2),
    dividerInset: scaleMetric(10, scale, 4),
    indicatorWidth: scaleMetric(20, scale, 14),
    indicatorIconSize: 16 * getFormFontScale(val),
    scrollButtonHeight: scaleMetric(18, scale, 14),
    scrollIconSize: scaleMetric(20, scale, 14),
    viewportPadding: scaleMetric(7, scale, 3),
    gradientMargin: scaleMetric(1, scale)
  };
};
