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

/**
 * How far through the headings the reader is, from 0 (the first) to 1 (the
 * last, or the end of the content).
 */
export const getReadingProgress = (
  activeIndex: number,
  count: number,
  scrolledToEnd = false
): number => {
  if (scrolledToEnd) return 1;
  if (count < 2) return 0;

  return Math.min(1, Math.max(0, activeIndex / (count - 1)));
};

export interface FloatingToolbarOffset {
  x: number;
  y: number;
}

/**
 * Moves the toolbar's `offset` by `dx`/`dy`, stopping where `rect` (the
 * toolbar's box at `offset`) would leave a `width` by `height` viewport.
 */
export const getDraggedOffset = (
  offset: FloatingToolbarOffset,
  rect: Pick<DOMRect, "left" | "top" | "right" | "bottom">,
  dx: number,
  dy: number,
  width: number,
  height: number
): FloatingToolbarOffset => ({
  x: offset.x + Math.min(width - rect.right, Math.max(-rect.left, dx)),
  y: offset.y + Math.min(height - rect.bottom, Math.max(-rect.top, dy))
});

/** The saved position: an offset, and the side it is docked to, if any. */
export interface FloatingToolbarStoredPosition extends FloatingToolbarOffset {
  docked?: FloatingToolbarDockSide;
}

/** Reads a position saved with `JSON.stringify`, or `undefined` if invalid. */
export const parseStoredOffset = (
  value: string | null
): FloatingToolbarStoredPosition | undefined => {
  try {
    const offset = JSON.parse(value ?? "null");
    if (!Number.isFinite(offset?.x) || !Number.isFinite(offset?.y)) {
      return undefined;
    }

    return offset.docked === "left" || offset.docked === "right"
      ? { x: offset.x, y: offset.y, docked: offset.docked }
      : { x: offset.x, y: offset.y };
  } catch {
    return undefined;
  }
};

export type FloatingToolbarDockSide = "left" | "right";

/**
 * The viewport side a drag `dx` px across docks the toolbar to: moving toward a
 * side of a `width` wide viewport, `rect` (the toolbar's box) is within
 * `threshold` px of it, or across it. A press without a drag never docks.
 */
export const getDockSide = (
  dx: number,
  rect: Pick<DOMRect, "left" | "right">,
  width: number,
  threshold = 32
): FloatingToolbarDockSide | undefined => {
  if (dx < 0 && rect.left <= threshold) return "left";
  if (dx > 0 && rect.right >= width - threshold) return "right";

  return undefined;
};
