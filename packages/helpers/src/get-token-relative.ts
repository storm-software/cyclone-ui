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
import type { Variable } from "@tamagui/core";
import { getTokens, isVariable } from "@tamagui/core";

export type TokenRelativeType = "size" | "space" | "radius" | "zIndex";

export interface GetTokenRelativeOptions {
  shift?: number;
  bounds?: [number] | [number, number];
  excludeHalfSteps?: boolean;
}

const cacheKeys: Partial<Record<TokenRelativeType, string[]>> = {};
const cacheWholeKeys: Partial<Record<TokenRelativeType, string[]>> = {};

const getOrderedKeys = (
  type: TokenRelativeType,
  tokens: Record<string, Variable>,
  excludeHalfSteps?: boolean
) => {
  if (!cacheKeys[type]) {
    const sorted = Object.keys(tokens).sort(
      (a, b) => Number(tokens[a]!.val) - Number(tokens[b]!.val)
    );

    cacheKeys[type] = sorted;
    cacheWholeKeys[type] = sorted.filter(key => !key.endsWith(".5"));
  }

  return (excludeHalfSteps ? cacheWholeKeys : cacheKeys)[type]!;
};

/**
 * Resolve a token and optionally step up or down its scale.
 *
 * @remarks
 * Tamagui v3's `@tamagui/get-token` only performs a same-key lookup. This
 * restores the v2 `shift`, `bounds` and `excludeHalfSteps` behavior against
 * v3's unprefixed token keys.
 *
 * @param type - The token scale to read
 * @param current - The token key (with or without `$`) or token variable
 * @param options - The relative step options
 * @returns The resolved token variable, or `undefined` when none matches
 */
export const getTokenRelative = (
  type: TokenRelativeType,
  current: string | Variable,
  options: GetTokenRelativeOptions = {}
): Variable<number> | undefined => {
  const tokens = getTokens()[type] as Record<string, Variable>;
  const key = isVariable(current)
    ? String(current.key).replace(/^\$/, "")
    : current.replace(/^\$/, "");

  if (!options.shift && !options.bounds && key in tokens) {
    return tokens[key] as Variable<number>;
  }

  // Unknown keys (including the removed `true` alias) clamp to the lower
  // bound, matching v2's `stepTokenUpOrDown`.
  const ordered = getOrderedKeys(type, tokens, options.excludeHalfSteps);
  const min = options.bounds?.[0] ?? 0;
  const max = options.bounds?.[1] ?? ordered.length - 1;
  const index = Math.min(
    max,
    Math.max(min, ordered.indexOf(key) + (options.shift ?? 0))
  );

  return tokens[ordered[index]!] as Variable<number> | undefined;
};
