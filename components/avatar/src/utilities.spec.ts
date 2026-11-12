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

import {
  clampAvatarCrop,
  getAvatarCropRect,
  getAvatarInitials
} from "./utilities";

describe("avatar crop", () => {
  it("centers a cover crop on a landscape image", () => {
    expect(getAvatarCropRect(400, 200, { x: 0, y: 0, zoom: 1 })).toEqual({
      x: 100,
      y: 0,
      size: 200
    });
  });

  it("keeps the image covering the window when panned or zoomed out", () => {
    // The landscape image is 2 windows wide, so it pans at most half a window.
    expect(clampAvatarCrop(400, 200, { x: 5, y: 5, zoom: 0.5 })).toEqual({
      x: 0.5,
      y: 0,
      zoom: 1
    });
    // Panned fully right, the crop is the image's left edge.
    expect(getAvatarCropRect(400, 200, { x: 0.5, y: 0, zoom: 1 }).x).toBe(0);
  });

  it("crops the zoomed-in, panned square", () => {
    // At 2x on a 200px square image, the window covers 100px; panning the
    // image up-left by a quarter window moves the crop down-right by 25px.
    expect(
      getAvatarCropRect(200, 200, { x: -0.25, y: -0.25, zoom: 2 })
    ).toEqual({ x: 75, y: 75, size: 100 });
  });
});

describe("avatar initials", () => {
  it("takes the first letters of the first and last words", () => {
    expect(getAvatarInitials(" ada  king lovelace ")).toBe("AL");
    expect(getAvatarInitials("cher")).toBe("C");
    expect(getAvatarInitials("   ")).toBe("");
  });
});
