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

import { animatedProps, animationDuration, sample } from "./animate";
import type { IconElement } from "./types";

// The line-md `bell-filled-loop` pattern: drawn in, filled, then swinging forever
const bell: IconElement = {
  type: "path",
  props: { d: "M12 5", strokeDashoffset: 30, fillOpacity: 0 },
  origin: [12, 3],
  animations: [
    {
      prop: "transform",
      transform: "rotate",
      dur: 6,
      values: ["0 12 3", "3 12 3", "-3 12 3", "0 12 3", "0 12 3"],
      keyTimes: [0, 0.05, 0.15, 0.2, 1],
      repeat: true
    },
    {
      prop: "strokeDashoffset",
      begin: 0.2,
      dur: 0.4,
      values: [0],
      freeze: true
    },
    { prop: "fillOpacity", begin: 0.9, dur: 0.4, values: [1], freeze: true }
  ]
};

describe("sample", () => {
  it("interpolates a `to` animation from the underlying value and freezes it", () => {
    const [, dashoffset] = bell.animations!;
    expect(sample(dashoffset!, 0.1, 30)).toBe(30);
    expect(sample(dashoffset!, 0.4, 30)).toBe(15);
    expect(sample(dashoffset!, 5, 30)).toBe(0);
  });

  it("drops an unfrozen animation after it ends", () => {
    expect(sample({ prop: "r", dur: 1, values: [0, 3] }, 2, 1)).toBe(1);
  });

  it("follows keyTimes and repeats, resting at the underlying value in the final frame", () => {
    const [swing] = bell.animations!;
    expect(sample(swing!, 0.15, undefined)).toBe("1.5 12 3");
    expect(sample(swing!, 6.15, undefined)).toBe("1.5 12 3");
    expect(sample(swing!, Infinity, undefined)).toBeUndefined();
  });

  it("interpolates path data number by number", () => {
    expect(
      sample(
        { prop: "d", dur: 1, values: ["M0 0h10", "M2 4h20"] },
        0.5,
        undefined
      )
    ).toBe("M1 2h15");
  });

  it("holds a <set> value from its begin time", () => {
    const set = { prop: "opacity", begin: 0.8, values: [1] };
    expect(sample(set, 0.5, 0)).toBe(0);
    expect(sample(set, 0.8, 0)).toBe(1);
  });
});

describe("animatedProps", () => {
  it("applies every animation and the transform origin", () => {
    expect(animatedProps(bell, 1.1)).toEqual({
      d: "M12 5",
      strokeDashoffset: 0,
      fillOpacity: 0.5,
      transform: "translate(12 3) rotate(-1 12 3) translate(-12 -3)"
    });
    expect(animatedProps(bell, Infinity)).toEqual({
      d: "M12 5",
      strokeDashoffset: 0,
      fillOpacity: 1
    });
  });
});

describe("animationDuration", () => {
  it("is the last end time, or Infinity when anything repeats", () => {
    expect(
      animationDuration([{ ...bell, animations: bell.animations!.slice(1) }])
    ).toBeCloseTo(1.3);
    expect(animationDuration([{ type: "g", children: [bell] }])).toBe(Infinity);
  });
});
