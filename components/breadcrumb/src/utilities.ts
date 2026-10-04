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

export interface BreadcrumbCollapseOptions {
  /**
   * The maximum number of breadcrumbs to display, including the current page.
   */
  maxItems: number;

  /**
   * The number of breadcrumbs to display before the collapsed menu.
   */
  itemsBeforeCollapse: number;

  /**
   * The number of breadcrumbs to display after the collapsed menu, including
   * the current page.
   */
  itemsAfterCollapse: number;
}

export interface BreadcrumbCollapseRange {
  /**
   * The index of the first collapsed link.
   */
  start: number;

  /**
   * The index after the last collapsed link.
   */
  end: number;
}

/**
 * Get the range of breadcrumb links to collapse into the menu.
 *
 * @remarks
 * The counts follow MUI's `Breadcrumbs` and include the current page, which is
 * always displayed last. Nothing collapses unless at least one link would be
 * hidden.
 *
 * @param linkCount - The number of `Breadcrumb.Item` links, not counting the current page.
 * @param options - The collapse options.
 * @returns The range of links to collapse, or `undefined` when every breadcrumb is displayed.
 */
export const getBreadcrumbCollapse = (
  linkCount: number,
  { maxItems, itemsBeforeCollapse, itemsAfterCollapse }: BreadcrumbCollapseOptions
): BreadcrumbCollapseRange | undefined => {
  const total = linkCount + 1;
  const before = Math.max(0, Math.floor(itemsBeforeCollapse));
  // The current page always follows the menu.
  const after = Math.max(1, Math.floor(itemsAfterCollapse));

  if (total <= maxItems || before + after >= total) {
    return undefined;
  }

  return { start: before, end: linkCount - (after - 1) };
};
