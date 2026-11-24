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

/** URL of the dark (grey) topography image. */
export const topographyDarkSrc = new URL(
  "./assets/topography-dark.svg",
  import.meta.url
).href;

/** URL of the light topography image (the dark one inverted). */
export const topographyLightSrc = new URL(
  "./assets/topography-light.svg",
  import.meta.url
).href;

/** URL of the same contours in colour. */
export const topographyColorSrc = new URL(
  "./assets/topography-color.svg",
  import.meta.url
).href;

/** URL of the dark topography image with its grey levels spread further apart. */
export const topographyDarkHighContrastSrc = new URL(
  "./assets/topography-dark-high-contrast.svg",
  import.meta.url
).href;

/** URL of the dark topography image with its grey levels drawn closer together. */
export const topographyDarkLowContrastSrc = new URL(
  "./assets/topography-dark-low-contrast.svg",
  import.meta.url
).href;

/** URL of the high contrast light topography image (the dark one inverted). */
export const topographyLightHighContrastSrc = new URL(
  "./assets/topography-light-high-contrast.svg",
  import.meta.url
).href;

/** URL of the low contrast light topography image (the dark one inverted). */
export const topographyLightLowContrastSrc = new URL(
  "./assets/topography-light-low-contrast.svg",
  import.meta.url
).href;
