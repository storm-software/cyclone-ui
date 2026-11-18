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

export const PAGE_BANNER_HEIGHT = 48;
export const PAGE_TOP_NAV_HEIGHT = 56;
export const PAGE_SIDE_NAV_DEFAULT_WIDTH = 320;
export const PAGE_SIDE_NAV_MIN_WIDTH = 240;
export const PAGE_PANEL_DEFAULT_WIDTH = 365;

/** A panel never resizes below its default width, unless that is wider than this. */
export const PAGE_PANEL_MAX_MIN_WIDTH = 400;

/** Pixels an arrow key moves a splitter. */
export const PAGE_RESIZE_STEP = 16;

/** A width in pixels, or relative to the viewport. */
export type PageWidth = number | `${number}px` | `${number}vw`;

export interface PageWidthBounds {
  min: number;
  max: number;
}

/** Edge of the layout area that its splitter sits on. */
export type PageResizeEdge = "start" | "end";

export const resolvePageWidth = (width: PageWidth, viewportWidth: number) => {
  if (typeof width === "number") {
    return width;
  }

  const value = Number.parseFloat(width);

  return width.endsWith("vw") ? (value / 100) * viewportWidth : value;
};

/** Rounds to whole pixels; `min` wins when the viewport makes `max` smaller. */
export const clampPageWidth = (width: number, { min, max }: PageWidthBounds) =>
  Math.round(Math.min(Math.max(width, min), Math.max(min, max)));

export const getSideNavWidthBounds = (
  viewportWidth: number,
  minWidth: PageWidth,
  maxWidth: PageWidth
): PageWidthBounds => ({
  min: resolvePageWidth(minWidth, viewportWidth),
  max: resolvePageWidth(maxWidth, viewportWidth)
});

/**
 * By default the panel can grow to half of the space left beside an inline
 * side nav (`sideNavWidth` is 0 when the side nav is collapsed or an overlay).
 */
export const getPanelWidthBounds = (
  viewportWidth: number,
  sideNavWidth: number,
  defaultWidth: number,
  maxWidth?: PageWidth
): PageWidthBounds => ({
  min: Math.min(defaultWidth, PAGE_PANEL_MAX_MIN_WIDTH),
  max:
    maxWidth === undefined
      ? (viewportWidth - sideNavWidth) / 2
      : resolvePageWidth(maxWidth, viewportWidth)
});

/**
 * A splitter on the `end` edge (side nav) grows the area as it moves right; one
 * on the `start` edge (panel) grows it as it moves left.
 */
export const getDraggedWidth = (
  startWidth: number,
  deltaX: number,
  edge: PageResizeEdge
) => startWidth + (edge === "end" ? deltaX : -deltaX);

/** The width a splitter key press resizes to, or `undefined` for other keys. */
export const getKeyboardResizedWidth = (
  width: number,
  key: string,
  edge: PageResizeEdge,
  bounds: PageWidthBounds
) => {
  const growKey = edge === "end" ? "ArrowRight" : "ArrowLeft";
  const shrinkKey = edge === "end" ? "ArrowLeft" : "ArrowRight";

  switch (key) {
    case growKey:
      return clampPageWidth(width + PAGE_RESIZE_STEP, bounds);
    case shrinkKey:
      return clampPageWidth(width - PAGE_RESIZE_STEP, bounds);
    case "Home":
      return clampPageWidth(bounds.min, bounds);
    case "End":
      return clampPageWidth(bounds.max, bounds);
    default:
      return undefined;
  }
};

export interface PageShortcutEvent {
  key: string;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
}

/** `Ctrl` + `[`, on every platform (`Cmd` + `[` is the browser's Back on macOS). */
export const isSideNavShortcut = (event: PageShortcutEvent) =>
  event.key === "[" &&
  event.ctrlKey &&
  !event.metaKey &&
  !event.altKey &&
  !event.shiftKey;

export interface PageSkipLink {
  id: string;
  label: string;
  /** Position in the skip links list; ties keep registration order. */
  index: number;
  /** Registration order. */
  order: number;
}

export const sortSkipLinks = (links: Iterable<PageSkipLink>) =>
  [...links].sort((a, b) => a.index - b.index || a.order - b.order);
