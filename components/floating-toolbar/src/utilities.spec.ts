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
import {
  getDockSide,
  getDraggedOffset,
  getReadingProgress,
  parseStoredOffset
} from "./utilities";

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

describe("getDraggedOffset", () => {
  // A 100x40 toolbar at (450, 700) in a 1000x800 viewport.
  const rect = { left: 450, top: 700, right: 550, bottom: 740 };

  it("follows the pointer inside the viewport", () => {
    expect(
      getDraggedOffset({ x: 5, y: -5 }, rect, -100, -300, 1000, 800)
    ).toEqual({ x: -95, y: -305 });
  });

  it("stops at the viewport edges", () => {
    expect(
      getDraggedOffset({ x: 0, y: 0 }, rect, -900, 500, 1000, 800)
    ).toEqual({
      x: -450,
      y: 60
    });
    expect(
      getDraggedOffset({ x: 0, y: 0 }, rect, 900, -900, 1000, 800)
    ).toEqual({
      x: 450,
      y: -700
    });
  });
});

describe("getDockSide", () => {
  it("docks a toolbar dragged within the threshold of a side, toward it", () => {
    expect(getDockSide(-300, { left: 32, right: 132 }, 1000)).toBe("left");
    expect(getDockSide(300, { left: 868, right: 968 }, 1000)).toBe("right");
  });

  it("docks a toolbar dragged across a side", () => {
    expect(getDockSide(-300, { left: -40, right: 60 }, 1000)).toBe("left");
    expect(getDockSide(300, { left: 920, right: 1020 }, 1000)).toBe("right");
  });

  it("ignores toolbars away from the sides or moving away from them", () => {
    expect(getDockSide(-300, { left: 33, right: 133 }, 1000)).toBeUndefined();
    expect(getDockSide(300, { left: 867, right: 967 }, 1000)).toBeUndefined();
    expect(getDockSide(0, { left: 0, right: 100 }, 1000)).toBeUndefined();
    expect(getDockSide(20, { left: 0, right: 100 }, 1000)).toBeUndefined();
    expect(getDockSide(-20, { left: 900, right: 1000 }, 1000)).toBeUndefined();
  });
});

describe("parseStoredOffset", () => {
  it("reads a saved offset", () => {
    expect(parseStoredOffset('{"x":-40,"y":12.5}')).toEqual({
      x: -40,
      y: 12.5
    });
  });

  it("reads the docked side", () => {
    expect(parseStoredOffset('{"x":0,"y":0,"docked":"right"}')).toEqual({
      x: 0,
      y: 0,
      docked: "right"
    });
    expect(parseStoredOffset('{"x":0,"y":0,"docked":"top"}')).toEqual({
      x: 0,
      y: 0
    });
  });

  it("ignores missing or malformed values", () => {
    expect(parseStoredOffset(null)).toBeUndefined();
    expect(parseStoredOffset("not json")).toBeUndefined();
    expect(parseStoredOffset('{"x":"1","y":2}')).toBeUndefined();
    expect(parseStoredOffset("[]")).toBeUndefined();
  });
});
