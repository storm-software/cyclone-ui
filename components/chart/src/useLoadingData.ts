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

import { useCallback, useId, useState } from "react";
import { getLoadingData } from "./utilities";

const getInitialLoadingData = (
  id: string,
  points: number,
  min?: number,
  max?: number
) => {
  let seed = 0;
  for (const character of id) {
    seed = (Math.imul(seed, 31) + character.charCodeAt(0)) >>> 0;
  }

  return getLoadingData(points, min, max, () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 0x100000000;
  });
};

/**
 * Loading rows that regenerate each time the shimmer leaves the visible area.
 * Call `onShimmerExit` from the shimmer's motion `onUpdate` when it crosses
 * the right edge, so the data swaps while nothing is visible. `min` and `max`
 * are percentages of the value range (see `getLoadingData`).
 */
export function useLoadingData(
  isLoading: boolean,
  loadingPoints = 14,
  min?: number,
  max?: number
) {
  const id = useId();
  // A stable first frame keeps prerendered SVG and hydration identical.
  // Shimmer exits below still generate fresh random placeholder shapes.
  const [loadingData, setLoadingData] = useState(() =>
    getInitialLoadingData(id, loadingPoints, min, max)
  );

  const onShimmerExit = useCallback(() => {
    if (isLoading) {
      setLoadingData(getLoadingData(loadingPoints, min, max));
    }
  }, [isLoading, loadingPoints, min, max]);

  return { loadingData, onShimmerExit };
}
