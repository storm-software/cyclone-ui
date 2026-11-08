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
