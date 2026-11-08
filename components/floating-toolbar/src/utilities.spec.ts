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

import { describe, expect, it } from "vitest";
import { getReadingProgress } from "./utilities";

describe("getReadingProgress", () => {
  it("runs from the first heading to the last", () => {
    expect(getReadingProgress(0, 5)).toBe(0);
    expect(getReadingProgress(2, 5)).toBe(0.5);
    expect(getReadingProgress(4, 5)).toBe(1);
  });

  it("is complete at the end of the content", () => {
    expect(getReadingProgress(1, 5, true)).toBe(1);
  });

  it("stays in range with few or no headings", () => {
    expect(getReadingProgress(0, 0)).toBe(0);
    expect(getReadingProgress(0, 1)).toBe(0);
    expect(getReadingProgress(9, 5)).toBe(1);
  });
});
