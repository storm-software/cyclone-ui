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

/** The crop window's position over the image. */
export interface AvatarCrop {
  /** The image center's offset from the window center, in window widths. */
  x: number;
  /** The image center's offset from the window center, in window heights. */
  y: number;
  /** `1` is the smallest zoom that still covers the window. */
  zoom: number;
}

export const AVATAR_CROP_MAX_ZOOM = 3;

// ponytail: fixed output size; add a prop when an app needs larger uploads.
/** The cropped image's side length, in pixels (smaller crops keep their size). */
const AVATAR_CROP_OUTPUT_SIZE = 512;

/**
 * The image's size in window units: at a zoom of `1` its short side spans the window.
 *
 * @param width - The image's natural width.
 * @param height - The image's natural height.
 * @param zoom - The crop zoom.
 * @returns The image's width and height, in window units.
 */
export const getAvatarCropScale = (
  width: number,
  height: number,
  zoom: number
) => {
  const short = Math.min(width, height);

  return { width: (width / short) * zoom, height: (height / short) * zoom };
};

const clamp = (value: number, max: number) =>
  Math.min(max, Math.max(-max, value));

/**
 * Clamps the zoom to `[1, AVATAR_CROP_MAX_ZOOM]` and the offset so the image always covers the window.
 *
 * @param width - The image's natural width.
 * @param height - The image's natural height.
 * @param crop - The requested crop.
 * @returns The nearest valid crop.
 */
export const clampAvatarCrop = (
  width: number,
  height: number,
  crop: AvatarCrop
): AvatarCrop => {
  const zoom = Math.min(AVATAR_CROP_MAX_ZOOM, Math.max(1, crop.zoom));
  const scale = getAvatarCropScale(width, height, zoom);

  return {
    x: clamp(crop.x, (scale.width - 1) / 2),
    y: clamp(crop.y, (scale.height - 1) / 2),
    zoom
  };
};

/**
 * The square of the image (in natural pixels) under the crop window.
 *
 * @param width - The image's natural width.
 * @param height - The image's natural height.
 * @param crop - The crop.
 * @returns The left, top and side length of the square.
 */
export const getAvatarCropRect = (
  width: number,
  height: number,
  crop: AvatarCrop
) => {
  const scale = getAvatarCropScale(width, height, crop.zoom);
  // Natural pixels per window unit, which is also the square's side length.
  const size = Math.min(width, height) / crop.zoom;

  return {
    x: (scale.width / 2 - crop.x - 0.5) * size,
    y: (scale.height / 2 - crop.y - 0.5) * size,
    size
  };
};

/**
 * Draws the part of `image` under the crop window to a square image file.
 *
 * @param image - The loaded image.
 * @param crop - The crop.
 * @param file - The picked file, whose name and type the result follows.
 * @returns The cropped image: a JPEG for JPEG photos, otherwise a PNG (which keeps transparency).
 */
export const cropAvatarImage = async (
  image: HTMLImageElement,
  crop: AvatarCrop,
  file: File
): Promise<File> => {
  const rect = getAvatarCropRect(image.naturalWidth, image.naturalHeight, crop);
  const side = Math.max(
    1,
    Math.min(AVATAR_CROP_OUTPUT_SIZE, Math.round(rect.size))
  );
  const canvas = document.createElement("canvas");
  canvas.width = side;
  canvas.height = side;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("The browser cannot draw the cropped image.");
  }

  context.imageSmoothingQuality = "high";
  context.drawImage(
    image,
    rect.x,
    rect.y,
    rect.size,
    rect.size,
    0,
    0,
    side,
    side
  );

  const jpeg = file.type === "image/jpeg";
  const type = jpeg ? "image/jpeg" : "image/png";
  const blob = await new Promise<Blob | null>(resolve => {
    canvas.toBlob(resolve, type, 0.92);
  });
  if (!blob) {
    throw new Error("The browser cannot encode the cropped image.");
  }

  return new File(
    [blob],
    `${file.name.replace(/\.[^.]*$/, "")}.${jpeg ? "jpg" : "png"}`,
    { type }
  );
};

/**
 * The first letters of the first and last words of a name.
 *
 * @param name - A name, such as "Ada Lovelace".
 * @returns The initials, such as "AL".
 */
export const getAvatarInitials = (name: string) => {
  const words = name.trim().split(/\s+/).filter(Boolean);

  return (words.length > 1 ? [words[0]!, words.at(-1)!] : words)
    .map(word => Array.from(word)[0])
    .join("")
    .toUpperCase();
};
