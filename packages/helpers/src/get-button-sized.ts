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

import { isNumber } from "@stryke/type-checks/is-number";
import type { SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { getSize, getSpace } from "@tamagui/get-token";

const FALLBACK_HEIGHT = 44;

const tokenNumber = (token: unknown): number | undefined => {
  if (typeof token === "number") {
    return token;
  }

  if (token && typeof token === "object" && "val" in token) {
    const value = token.val;

    return typeof value === "number" ? value : undefined;
  }

  return undefined;
};

const lookupToken = (group: unknown, key: string) => {
  if (!group || typeof group !== "object") {
    return;
  }

  const tokens = group as Record<string, unknown>;
  const normalized = key.replace(/^\$/, "");

  return tokens[key] ?? tokens[`$${normalized}`] ?? tokens[normalized];
};

const resolveTokenKey = (val: SizeTokens | number | string) => {
  const rawKey = String(val);

  return rawKey === "$true" || rawKey === "true" ? "$5xl" : rawKey;
};

/**
 * Get the sizing related style values for a button component based on the size token or number
 *
 * @param val - The size token or number to use
 * @param param - The props to use
 * @returns The style values for the button sizing
 */
export const getButtonSized = (
  val: SizeTokens | number,
  { props, tokens }: VariantSpreadExtras<any>
) => {
  if (!val) {
    return;
  }

  const circular = Boolean(props.circular);
  const borderRadius = circular ? 100_000 : "$button";

  if (isNumber(val)) {
    return {
      paddingHorizontal: circular ? 0 : val * 0.25,
      gap: val * 0.25,
      height: val,
      minHeight: val,
      ...(circular
        ? { width: val, minWidth: val }
        : { minWidth: "fit-content" }),
      borderRadius
    };
  }

  const tokenKey = resolveTokenKey(val);

  const height =
    tokenNumber(lookupToken(tokens?.size, tokenKey)) ??
    tokenNumber(lookupToken(tokens?.size, "5xl")) ??
    tokenNumber(getSize(tokenKey)) ??
    FALLBACK_HEIGHT;
  const space =
    tokenNumber(getSpace(tokenKey, { shift: -1 })) ??
    tokenNumber(lookupToken(tokens?.space, "2xl")) ??
    10;

  return {
    paddingHorizontal: circular ? 0 : space,
    gap: space,
    height,
    minHeight: height,
    ...(circular
      ? { width: height, minWidth: height }
      : { minWidth: "fit-content" }),
    borderRadius
  };
};
