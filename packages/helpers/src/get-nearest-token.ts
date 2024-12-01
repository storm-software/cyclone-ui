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

import { hash } from "@storm-stack/hashing";
import { isSet } from "@storm-stack/types/type-checks/is-set";
import type { UnionableString, Variable } from "@tamagui/core";
import { getTokens } from "@tamagui/core";

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

type CacheKey = {
  type: string;
  value: number;
};
const cache: Map<CacheKey, string> = new Map();

type SortedTokensCacheKey = {
  type: string;
};
const cacheSortedTokens: Map<
  SortedTokensCacheKey,
  [string, Variable<number>][]
> = new Map();

export const getNearestToken = <
  TToken extends
    | number
    | `$${string}`
    | `$${number}`
    | UnionableString
    | `$${string}.${string}`
    | `$${string}.${number}` =
    | number
    | `$${string}`
    | `$${number}`
    | UnionableString
    | `$${string}.${string}`
    | `$${string}.${number}`
>(
  value: number,
  type?: "size" | "space" | "zIndex" | "radius" | string,
  tokensMap?: Record<string, Variable<number>>
): TToken => {
  if (!type && !tokensMap) {
    // eslint-disable-next-line no-console
    console.warn("getNearestToken: type or tokensMap is required");

    return "$true" as TToken;
  }

  let _type = type;
  if (!_type) {
    _type = hash(tokensMap);
  }

  const cacheSortedTokensKey = { type: _type };
  const cacheKey = { type: _type, value };

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)! as TToken;
  }

  if (!cacheSortedTokens.has(cacheSortedTokensKey)) {
    const tokens =
      tokensMap ??
      (getTokens({ prefixed: true })[_type] as Record<
        string,
        Variable<number>
      >);
    if (!tokens || Object.values(tokens).length === 0) {
      return "$true" as TToken;
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
    cacheSortedTokens.set(
      cacheSortedTokensKey,
      deduplicated.sort((a, b) => a[1].val - b[1].val)
    );
  }

  const sortedTokens = cacheSortedTokens.get(cacheSortedTokensKey);
  if (!sortedTokens) {
    return "$true" as TToken;
  }

  const values = sortedTokens.map(token => token[1]);

  const index = binarySearch(values, value, 0, values.length);
  if (
    index === -1 ||
    sortedTokens.length <= index ||
    !sortedTokens[index]?.[0]
  ) {
    return "$true" as TToken;
  }

  const result = sortedTokens[index][0];
  cache.set(cacheKey, result);

  return result as TToken;
};
