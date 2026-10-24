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

export interface ChartBrushRange {
  startIndex: number;
  endIndex: number;
}

/** The brush edge being dragged; `"middle"` pans the whole range. */
export type ChartBrushDragType = "left" | "right" | "middle";

/**
 * Clamps a brush range to the data and keeps at least `minSpan` points
 * selected. `mode` says which edge moved, so the other edge stays put.
 */
export function clampBrushRange(
  range: ChartBrushRange,
  totalPoints: number,
  minSpan: number,
  mode?: ChartBrushDragType
): ChartBrushRange {
  const maxIndex = Math.max(0, totalPoints - 1);
  let startIndex = Math.max(0, Math.min(range.startIndex, maxIndex));
  let endIndex = Math.max(0, Math.min(range.endIndex, maxIndex));

  if (mode === "left") {
    return {
      startIndex: Math.min(startIndex, Math.max(0, endIndex - minSpan)),
      endIndex
    };
  }

  if (mode === "right") {
    return {
      startIndex,
      endIndex: Math.max(endIndex, Math.min(maxIndex, startIndex + minSpan))
    };
  }

  if (endIndex - startIndex < minSpan) {
    endIndex = Math.min(startIndex + minSpan, maxIndex);
    if (endIndex - startIndex < minSpan) {
      startIndex = Math.max(0, endIndex - minSpan);
    }
  }

  return { startIndex, endIndex };
}
