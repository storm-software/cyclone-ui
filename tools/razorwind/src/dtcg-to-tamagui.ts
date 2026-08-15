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

import { formatColorValue, formatTokenValue } from "@razorwind/core/utils";
import type {
  Config,
  PlatformConfig,
  PreprocessedTokens
} from "style-dictionary/types";

/** Rem px base used by Tamagui / web layout math. */
const REM_PX = 16;

/**
 * Top-level DTCG group names → Tamagui `createTokens` categories.
 *
 * @see https://tamagui.dev/docs/core/config-v5
 * @see https://tamagui.dev/docs/core/tokens
 */
const GROUP_TO_TAMAGUI: Record<string, string> = {
  color: "color",
  colours: "color",
  colors: "color",
  colour: "color",
  palette: "color",
  spacing: "space",
  space: "space",
  gap: "space",
  inset: "space",
  size: "size",
  sizing: "size",
  sizes: "size",
  radius: "radius",
  radii: "radius",
  rounded: "radius",
  "border-radius": "radius",
  "z-index": "zIndex",
  zindex: "zIndex",
  zIndex: "zIndex",
  elevation: "zIndex"
};

const FONT_WEIGHT_KEYWORDS: Record<string, number> = {
  thin: 100,
  hairline: 100,
  "extra-light": 200,
  "ultra-light": 200,
  light: 300,
  normal: 400,
  regular: 400,
  book: 400,
  medium: 500,
  "semi-bold": 600,
  "demi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  "ultra-bold": 800,
  black: 900,
  heavy: 900,
  "extra-black": 950,
  "ultra-black": 950
};

const RESERVED_KEYS = new Set([
  "$schema",
  "$type",
  "$description",
  "$extensions",
  "$extends",
  "$deprecated",
  "$root",
  "$value",
  "$ref"
]);

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isTokenNode(value: unknown): value is Record<string, unknown> {
  return isPlainObject(value) && ("$value" in value || "$ref" in value);
}

function mapGroupName(name: string): string {
  return GROUP_TO_TAMAGUI[name] ?? GROUP_TO_TAMAGUI[name.toLowerCase()] ?? name;
}

function dimensionToCss(value: unknown): string {
  if (typeof value === "number") {
    return `${value}px`;
  }

  if (typeof value === "string") {
    return value;
  }

  if (
    isPlainObject(value) &&
    typeof value.value === "number" &&
    typeof value.unit === "string"
  ) {
    return `${value.value}${value.unit}`;
  }

  return String(toTamaguiValue(value, "dimension"));
}

function colorToCss(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  return formatColorValue(value) ?? formatTokenValue(value, "color");
}

/**
 * DTCG shadow object → CSS `box-shadow` layer string.
 */
function shadowLayerToCss(layer: Record<string, unknown>): string {
  const inset = layer.inset === true ? "inset " : "";
  const offsetX = dimensionToCss(layer.offsetX ?? 0);
  const offsetY = dimensionToCss(layer.offsetY ?? 0);
  const blur = dimensionToCss(layer.blur ?? 0);
  const spread = dimensionToCss(layer.spread ?? 0);
  const color = colorToCss(layer.color ?? "#000");

  return `${inset}${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
}

function shadowToCss(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .map(layer =>
        isPlainObject(layer)
          ? shadowLayerToCss(layer)
          : String(toTamaguiValue(layer))
      )
      .join(", ");
  }

  if (isPlainObject(value)) {
    return shadowLayerToCss(value);
  }

  return formatTokenValue(value, "shadow");
}

/**
 * Convert DTCG dimension / duration / number-like values to Tamagui primitives.
 *
 * Tamagui `size` / `space` / `radius` / `zIndex` expect unitless numbers (px).
 * Colors stay CSS strings.
 */
export function toTamaguiValue(value: unknown, type?: string): string | number {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "boolean") {
    return Number(value);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    const weight = FONT_WEIGHT_KEYWORDS[trimmed.toLowerCase()];
    if (weight !== undefined) {
      return weight;
    }

    const px = /^(-?\d+(?:\.\d+)?)px$/i.exec(trimmed);
    if (px) {
      return Number(px[1]);
    }

    const rem = /^(-?\d+(?:\.\d+)?)rem$/i.exec(trimmed);
    if (rem) {
      return Number(rem[1]) * REM_PX;
    }

    const asNumber = Number(trimmed);
    if (!Number.isNaN(asNumber) && trimmed !== "") {
      return asNumber;
    }

    return value;
  }

  if (Array.isArray(value)) {
    if (
      type === "cubicBezier" ||
      (value.length === 4 && value.every(entry => typeof entry === "number"))
    ) {
      return `cubic-bezier(${value.join(", ")})`;
    }

    if (type === "shadow") {
      return shadowToCss(value);
    }

    if (
      type === "fontFamily" ||
      value.every(entry => typeof entry === "string")
    ) {
      return value.join(", ");
    }

    if (type === "gradient") {
      return formatTokenValue(value, type);
    }

    return value.map(String).join(", ");
  }

  if (isPlainObject(value)) {
    if ("colorSpace" in value || "hex" in value || type === "color") {
      return formatColorValue(value) ?? formatTokenValue(value, "color");
    }

    if (typeof value.value === "number" && typeof value.unit === "string") {
      const unit = value.unit.toLowerCase();

      if (type === "duration" || unit === "ms" || unit === "s") {
        return unit === "s" ? value.value * 1000 : value.value;
      }

      if (unit === "px" || unit === "") {
        return value.value;
      }

      if (unit === "rem") {
        return value.value * REM_PX;
      }

      // % and other CSS units stay as strings (e.g. radius.full)
      return `${value.value}${value.unit}`;
    }

    if (type === "shadow") {
      return shadowToCss(value);
    }

    if (type === "border" || type === "transition" || type === "typography") {
      return formatTokenValue(value, type);
    }
  }

  return formatTokenValue(value, type);
}

function resolveType(
  token: Record<string, unknown>,
  inheritedType?: string
): string | undefined {
  if (typeof token.$type === "string") {
    return token.$type;
  }

  if (typeof token.type === "string") {
    return token.type;
  }

  return inheritedType;
}

/**
 * After value conversion, Tamagui categories prefer these `$type` labels.
 */
function tamaguiTokenType(
  category: string | undefined,
  originalType: string | undefined,
  value: string | number
): string | undefined {
  if (category === "color" || originalType === "color") {
    return "color";
  }

  if (
    category === "size" ||
    category === "space" ||
    category === "radius" ||
    category === "zIndex"
  ) {
    return typeof value === "number" ? "number" : "dimension";
  }

  if (originalType === "dimension" && typeof value === "number") {
    return "number";
  }

  if (originalType === "duration" && typeof value === "number") {
    return "number";
  }

  if (originalType === "fontWeight" && typeof value === "number") {
    return "fontWeight";
  }

  return originalType;
}

function mapTokenNode(
  token: Record<string, unknown>,
  inheritedType?: string,
  category?: string
): Record<string, unknown> {
  if ("$ref" in token && !("$value" in token)) {
    return { ...token };
  }

  const type = resolveType(token, inheritedType);
  const next: Record<string, unknown> = { ...token };

  if ("$value" in token) {
    const tamaguiValue = toTamaguiValue(token.$value, type);
    next.$value = tamaguiValue;

    const nextType = tamaguiTokenType(category, type, tamaguiValue);
    if (nextType) {
      next.$type = nextType;
    }
  }

  return next;
}

function walkGroup(
  node: any,
  inheritedType?: string,
  category?: string
): unknown {
  if (!isPlainObject(node)) {
    return node;
  }

  if (isTokenNode(node)) {
    return mapTokenNode(node, inheritedType, category);
  }

  const groupType =
    typeof (node as Record<string, unknown>).$type === "string"
      ? (node as Record<string, unknown>).$type
      : inheritedType;
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(node)) {
    if (RESERVED_KEYS.has(key) || key.startsWith("$")) {
      result[key] = value;
      continue;
    }

    result[key] = walkGroup(value, groupType as string, category);
  }

  return result;
}

function mergeGroups(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...target };

  for (const [key, value] of Object.entries(source)) {
    if (key.startsWith("$")) {
      if (!(key in result)) {
        result[key] = value;
      }
      continue;
    }

    const existing = result[key];
    if (
      isPlainObject(existing) &&
      isPlainObject(value) &&
      !isTokenNode(existing) &&
      !isTokenNode(value)
    ) {
      result[key] = mergeGroups(existing, value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

function collectNumericTokens(
  node: Record<string, unknown>,
  path: string[] = []
): Array<{ key: string; value: number; token: Record<string, unknown> }> {
  const out: Array<{
    key: string;
    value: number;
    token: Record<string, unknown>;
  }> = [];

  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$")) {
      continue;
    }

    if (isTokenNode(value) && typeof value.$value === "number") {
      out.push({
        key: [...path, key].join("."),
        value: value.$value,
        token: value
      });
      continue;
    }

    if (isPlainObject(value) && !isTokenNode(value)) {
      out.push(...collectNumericTokens(value, [...path, key]));
    }
  }

  return out;
}

/**
 * Tamagui `space` tokens include negatives (`-sm`, `-1`, …) for margin pull.
 */
function addNegativeSpaceTokens(
  space: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...space };
  const numerics = collectNumericTokens(space);

  for (const { key, value, token } of numerics) {
    if (value === 0 || key.startsWith("-")) {
      continue;
    }

    const negativeKey = `-${key}`;
    if (
      negativeKey in result ||
      key.split(".").some(part => part.startsWith("-"))
    ) {
      continue;
    }

    // Only add flat negatives for leaf keys (Tamagui space is flat-ish)
    if (!key.includes(".")) {
      result[negativeKey] = {
        ...token,
        $value: -value,
        $description:
          typeof token.$description === "string"
            ? `Negative of ${key}`
            : token.$description
      };
    }
  }

  return result;
}

function ensureTrueDefault(
  group: Record<string, unknown>,
  preferredKeys: string[]
): Record<string, unknown> {
  if ("true" in group || "$true" in group) {
    return group;
  }

  for (const key of preferredKeys) {
    const candidate = group[key];
    if (isTokenNode(candidate)) {
      return {
        ...group,
        true: {
          ...candidate,
          $description:
            typeof candidate.$description === "string"
              ? `${candidate.$description} (Tamagui default)`
              : "Tamagui default token"
        }
      };
    }
  }

  return group;
}

/**
 * Map a Style Dictionary / DTCG token dictionary onto Tamagui config v5
 * `createTokens` categories and value shapes.
 *
 * - Remaps groups: `spacing`→`space`, `border-radius`→`radius`, `z-index`→`zIndex`
 * - Converts DTCG `$value` objects (dimension, color, duration, …) to Tamagui
 *   primitives (numbers for size/space/radius/zIndex, CSS strings for color)
 * - Adds negative `space` keys and a `true` default when missing
 *
 * @see https://tamagui.dev/docs/core/config-v5
 * @see https://github.com/storm-software/power-plant/blob/main/packages/schemas/dtcg-schema/src/schema/tokens.ts
 */
export function mapDtcgDictionaryToTamaguiV5(
  dictionary: PreprocessedTokens,
  _options?: Config | PlatformConfig
): PreprocessedTokens {
  const result: Record<string, unknown> = { primary: dictionary };

  for (const [key, value] of Object.entries(dictionary)) {
    if (key.startsWith("$")) {
      result[key] = value;
      continue;
    }

    if (!isPlainObject(value)) {
      result[key] = value;
      continue;
    }

    const category = mapGroupName(key);
    const mapped = walkGroup(
      value,
      undefined,
      GROUP_TO_TAMAGUI[category] ? category : undefined
    ) as Record<string, unknown>;

    if (isPlainObject(result[category]) && !isTokenNode(result[category])) {
      result[category] = mergeGroups(result[category], mapped);
    } else {
      result[category] = mapped;
    }
  }

  if (isPlainObject(result.space)) {
    result.space = addNegativeSpaceTokens(result.space);
    result.space = ensureTrueDefault(result.space as Record<string, unknown>, [
      "md",
      "true",
      "5xl",
      "4"
    ]);
  }

  if (isPlainObject(result.size)) {
    result.size = ensureTrueDefault(result.size, ["5xl", "md", "true", "4"]);
  }

  if (isPlainObject(result.radius)) {
    result.radius = ensureTrueDefault(result.radius, ["md", "true", "5"]);
  }

  if (isPlainObject(result.zIndex)) {
    result.zIndex = ensureTrueDefault(result.zIndex, ["50", "md", "true", "5"]);
  }

  return result as PreprocessedTokens;
}
