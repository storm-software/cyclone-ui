/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { isSet } from "@storm-stack/types";
import type { Variable } from "@tamagui/core";
import { getTokens } from "@tamagui/core";

const getCacheKey = (
  type: "size" | "space" | "zIndex" | "radius",
  value: number
) => `${type}-${value}`;

const binarySearch = (
  tokens: Variable<number>[],
  value: number,
  start: number,
  end: number
) => {
  if (start > end) {
    return start;
  }

  let mid = Math.floor((start + end) / 2);
  if (tokens.length <= mid || !isSet(tokens[mid])) {
    return start;
  } else if (tokens[mid].val === value) {
    return mid;
  } else if (tokens[mid].val > value) {
    return binarySearch(tokens, value, start, mid - 1);
  }

  return binarySearch(tokens, value, mid + 1, end);
};

const cache: Record<string, string> = {};
const cacheSortedTokens: Record<string, [string, Variable<number>][]> = {};

export const getNearestToken = (
  type: "size" | "space" | "zIndex" | "radius",
  value: number
): string => {
  if (cache[getCacheKey(type, value)]) {
    return cache[getCacheKey(type, value)]!;
  }

  if (!cacheSortedTokens[type]) {
    const tokens = getTokens({ prefixed: true })[type] as Record<
      string,
      Variable<number>
    >;
    if (!tokens || Object.values(tokens).length === 0) {
      return "$true";
    }

    const deduplicated = Object.entries(tokens).reduce(
      (ret, [key, token]) => {
        if (
          isSet(token) &&
          !ret.some(existing => existing[1].val === token.val)
        ) {
          ret.push([key, token]);
        }

        return ret;
      },
      [] as [string, Variable<number>][]
    );
    cacheSortedTokens[type] = deduplicated.sort((a, b) => a[1].val - b[1].val);
  }

  const sortedTokens = cacheSortedTokens[type];
  if (!sortedTokens) {
    return "$true";
  }

  const values = sortedTokens.map(token => token[1]);

  const index = binarySearch(values, value, 0, values.length);
  if (
    index === -1 ||
    sortedTokens.length <= index ||
    !sortedTokens[index]?.[0]
  ) {
    return "$true";
  }

  const result = sortedTokens[index][0];
  cache[getCacheKey(type, value)] = result;

  return result;
};
