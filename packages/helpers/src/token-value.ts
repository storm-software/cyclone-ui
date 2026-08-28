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
 * A token key or an arbitrary Tailwind-style dimension.
 *
 * Token keys use their unprefixed theme name (`"4"`, `"sm"`, `"px"`) or
 * Tamagui's legacy `$`-prefixed spelling. Arbitrary dimensions follow
 * Tailwind's bracket syntax (`"[12px]"`, `"[1.5rem]"`).
 */
export type TokenValue = number | string;

const ARBITRARY_DIMENSION = /^(-?(?:\d+(?:\.\d*)?|\.\d+))(px|rem)?$/i;
const REM_IN_PIXELS = 16;

/**
 * Normalize a Tailwind-style token value for Tamagui's token lookup.
 *
 * Bare keys are token names, never pixel values: `"4"` resolves the `4`
 * token. A literal length must use Tailwind's explicit bracket form.
 */
export function normalizeTokenValue(value: TokenValue): TokenValue {
  if (typeof value === "number") {
    return value;
  }

  const arbitraryValue = /^\[(.*)\]$/.exec(value.trim())?.[1]?.trim();
  if (arbitraryValue) {
    const dimension = ARBITRARY_DIMENSION.exec(arbitraryValue);
    if (dimension) {
      const numericValue = Number(dimension[1]);

      return dimension[2]?.toLowerCase() === "rem"
        ? numericValue * REM_IN_PIXELS
        : numericValue;
    }
  }

  return value.startsWith("$") ? value : `$${value}`;
}
