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

import { definePlugin } from "@razorwind/core/plugin";
import type { PreprocessedTokens } from "style-dictionary/types";

const HEX_RE = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const OKLCH_RE =
  /^oklch\(\s*([0-9.]+%?|none)\s+([0-9.]+|none)\s+([0-9.]+|none)(?:\s*\/\s*([0-9.%]+))?\s*\)$/i;

const RESERVED_KEYS = new Set([
  "$schema",
  "$type",
  "$description",
  "$extensions",
  "$extends",
  "$deprecated",
  "$root",
  "$value",
  "$ref",
  "theme",
  "palette",
  "primitive"
]);

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isTokenNode(value: unknown): value is Record<string, unknown> {
  return isPlainObject(value) && ("$value" in value || "$ref" in value);
}

function isAlias(value: string): boolean {
  const trimmed = value.trim();

  return trimmed.startsWith("{") || trimmed.startsWith("var(");
}

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function toSrgb(channel: number): number {
  const clipped = clamp01(channel);

  return clipped <= 0.003_130_8
    ? 12.92 * clipped
    : 1.055 * clipped ** (1 / 2.4) - 0.055;
}

function fromSrgb(channel: number): number {
  const clipped = clamp01(channel);

  return clipped <= 0.040_45
    ? clipped / 12.92
    : ((clipped + 0.055) / 1.055) ** 2.4;
}

function hexChannel(channel: number): string {
  return Math.round(toSrgb(channel) * 255)
    .toString(16)
    .padStart(2, "0");
}

function srgbHexChannel(channel: number): string {
  return Math.round(clamp01(channel) * 255)
    .toString(16)
    .padStart(2, "0");
}

function alphaHex(alpha: number): string {
  return Math.round(clamp01(alpha) * 255)
    .toString(16)
    .padStart(2, "0");
}

function expandHex(value: string): string {
  const hex = value.startsWith("#") ? value.slice(1) : value;
  if (hex.length === 3 || hex.length === 4) {
    return `#${[...hex].map(digit => digit + digit).join("")}`;
  }

  return `#${hex}`;
}

/**
 * Normalize a hex string or sRGB DTCG color object to `#rrggbb` / `#rrggbbaa`.
 */
function colorValueToHex(value: unknown): string | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!HEX_RE.test(trimmed)) {
      return undefined;
    }

    const expanded = expandHex(trimmed).toLowerCase();
    if (expanded.length === 9 && expanded.endsWith("ff")) {
      return expanded.slice(0, 7);
    }

    return expanded;
  }

  if (!isPlainObject(value)) {
    return undefined;
  }

  if (typeof value.hex === "string" && HEX_RE.test(value.hex)) {
    const hex = expandHex(value.hex).toLowerCase().slice(0, 7);
    const alpha = parseAlpha(value.alpha);
    if (alpha !== undefined && alpha < 1) {
      return `${hex}${alphaHex(alpha)}`;
    }

    return hex;
  }

  if (
    value.colorSpace === "srgb" &&
    Array.isArray(value.components) &&
    value.components.length >= 3
  ) {
    const red = parseComponent(value.components[0]);
    const green = parseComponent(value.components[1]);
    const blue = parseComponent(value.components[2]);
    if (red === undefined || green === undefined || blue === undefined) {
      return undefined;
    }

    const hex = `#${srgbHexChannel(red)}${srgbHexChannel(green)}${srgbHexChannel(blue)}`;
    const alpha = parseAlpha(value.alpha);
    if (alpha !== undefined && alpha < 1) {
      return `${hex}${alphaHex(alpha)}`;
    }

    return hex;
  }

  return undefined;
}

/**
 * Convert OKLCH (L C H) to sRGB hex. Opaque colors are 6-digit; alpha \< 1
 * becomes 8-digit `#rrggbbaa`.
 *
 * @see https://bottosson.github.io/posts/oklab/
 */
function oklchToHex(
  lightness: number,
  chroma: number,
  hue: number,
  alpha?: number
): string {
  const hueRad = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(hueRad);
  const b = chroma * Math.sin(hueRad);

  const l_ = lightness + 0.396_337_777_4 * a + 0.215_803_757_3 * b;
  const m_ = lightness - 0.105_561_345_8 * a - 0.063_854_172_8 * b;
  const s_ = lightness - 0.089_484_177_5 * a - 1.291_485_548 * b;

  const l3 = l_ ** 3;
  const m3 = m_ ** 3;
  const s3 = s_ ** 3;

  const red =
    4.076_741_662_1 * l3 - 3.307_711_591_3 * m3 + 0.230_969_929_2 * s3;
  const green =
    -1.268_438_004_6 * l3 + 2.609_757_401_1 * m3 - 0.341_319_396_5 * s3;
  const blue =
    -0.004_196_086_3 * l3 - 0.703_418_614_7 * m3 + 1.707_614_701 * s3;

  const hex = `#${hexChannel(red)}${hexChannel(green)}${hexChannel(blue)}`;
  if (alpha === undefined || alpha >= 1) {
    return hex;
  }

  return `${hex}${alphaHex(alpha)}`;
}

function parseComponent(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value !== "string" || value === "none") {
    return undefined;
  }

  const parsed = Number.parseFloat(value);

  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseAlpha(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value > 1 ? value / 100 : value;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) {
    return undefined;
  }

  return value.includes("%")
    ? parsed / 100
    : parsed > 1
      ? parsed / 100
      : parsed;
}

function oklchStringToHex(value: string): string | undefined {
  const match = OKLCH_RE.exec(value.trim());
  if (!match) {
    return undefined;
  }

  let lightness = parseComponent(match[1]);
  const chroma = parseComponent(match[2]);
  const hue = parseComponent(match[3]);
  if (lightness === undefined || chroma === undefined || hue === undefined) {
    return undefined;
  }

  if (match[1]?.includes("%")) {
    lightness /= 100;
  }

  return oklchToHex(lightness, chroma, hue, parseAlpha(match[4]));
}

function oklchObjectToHex(value: Record<string, unknown>): string | undefined {
  if (!Array.isArray(value.components) || value.components.length < 3) {
    return undefined;
  }

  let lightness = parseComponent(value.components[0]);
  const chroma = parseComponent(value.components[1]);
  const hue = parseComponent(value.components[2]);
  if (lightness === undefined || chroma === undefined || hue === undefined) {
    return undefined;
  }

  if (lightness > 1) {
    lightness /= 100;
  }

  return oklchToHex(lightness, chroma, hue, parseAlpha(value.alpha));
}

function convertColor(value: unknown): string | undefined {
  if (typeof value === "string") {
    if (isAlias(value)) {
      return undefined;
    }

    return oklchStringToHex(value) ?? colorValueToHex(value) ?? undefined;
  }

  if (!isPlainObject(value)) {
    return undefined;
  }

  if (
    typeof value.colorSpace === "string" &&
    value.colorSpace.toLowerCase() === "oklch"
  ) {
    return oklchObjectToHex(value);
  }

  return colorValueToHex(value) ?? undefined;
}

function convertShadow(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(layer => convertShadow(layer));
  }

  if (!isPlainObject(value) || !("color" in value)) {
    return value;
  }

  const color = convertColor(value.color);
  if (!color) {
    return value;
  }

  return { ...value, color };
}

function convertValue(value: unknown, type?: string): unknown {
  if (type === "shadow") {
    return convertShadow(value);
  }

  if (type === "border" && isPlainObject(value) && "color" in value) {
    const color = convertColor(value.color);

    return color ? { ...value, color } : value;
  }

  if (type === "color" || type === undefined) {
    return convertColor(value) ?? value;
  }

  return value;
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

function mapTokenNode(
  token: Record<string, unknown>,
  inheritedType?: string
): Record<string, unknown> {
  if ("$ref" in token && !("$value" in token)) {
    return { ...token };
  }

  const type = resolveType(token, inheritedType);
  if (!("$value" in token)) {
    return { ...token };
  }

  return {
    ...token,
    $value: convertValue(token.$value, type)
  };
}

function walk(node: any, inheritedType?: string): unknown {
  if (Array.isArray(node)) {
    return node.map(item => walk(item, inheritedType));
  }

  if (!isPlainObject(node)) {
    return node;
  }

  if (isTokenNode(node)) {
    return mapTokenNode(node, inheritedType);
  }

  const groupType =
    typeof (node as any).$type === "string"
      ? (node as any).$type
      : inheritedType;

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(node)) {
    if (RESERVED_KEYS.has(key) || key.startsWith("$")) {
      result[key] = value;
      continue;
    }

    result[key] = walk(value, groupType);
  }

  return result;
}

interface ColorStateVariant {
  name: string;
  opacity?: number;
  /** Multiplier applied to OKLCH chroma for non-greyscale colors. */
  saturation?: number;
  /**
   * Magnitude of the OKLCH lightness shift (e.g. 1.1 = 10%). Light sources
   * darken on hover; dark sources lighten.
   */
  brightness?: number;
}

const COLOR_STATE_HOVER: ColorStateVariant = {
  name: "hover",
  brightness: 1.2
};

const COLOR_STATE_FOCUSED: ColorStateVariant = {
  name: "focused",
  brightness: 1.4
};

const COLOR_STATE_PRESSED: ColorStateVariant = {
  name: "pressed",
  brightness: 0.6
};

const COLOR_STATE_DISABLED: ColorStateVariant = {
  name: "disabled",
  opacity: 0.6,
  saturation: 0.6
};

const COLOR_STATE_VARIANTS: Record<string, readonly ColorStateVariant[]> = {
  background: [
    COLOR_STATE_HOVER,
    COLOR_STATE_PRESSED,
    COLOR_STATE_FOCUSED,
    COLOR_STATE_DISABLED
  ],
  foreground: [
    COLOR_STATE_HOVER,
    COLOR_STATE_PRESSED,
    COLOR_STATE_FOCUSED,
    COLOR_STATE_DISABLED
  ],
  border: [COLOR_STATE_HOVER, COLOR_STATE_FOCUSED, COLOR_STATE_DISABLED]
};

const COLOR_STATE_GROUP_KEYS = new Set(Object.keys(COLOR_STATE_VARIANTS));

function isStateVariantKey(key: string): boolean {
  return (
    key.toLowerCase().endsWith("-hover") ||
    key.toLowerCase().endsWith("-focused") ||
    key.toLowerCase().endsWith("-pressed") ||
    key.toLowerCase().endsWith("-disabled")
  );
}

function getTokenAtPath(
  tree: unknown,
  path: string
): Record<string, unknown> | undefined {
  let node: unknown = tree;

  for (const part of path.split(".").filter(Boolean)) {
    if (!isPlainObject(node) || !(part in node)) {
      return undefined;
    }

    node = node[part];
  }

  return isTokenNode(node) ? node : undefined;
}

function resolveColorHex(
  value: unknown,
  tree: unknown,
  seen: Set<string> = new Set()
): string | undefined {
  const direct = convertColor(value);
  if (direct) {
    return direct;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const ref = /^\{([^{}]+)\}$/.exec(value.trim());
  if (!ref?.[1] || seen.has(ref[1])) {
    return undefined;
  }

  seen.add(ref[1]);
  const token = getTokenAtPath(tree, ref[1]);
  if (!token || !("$value" in token)) {
    return undefined;
  }

  return resolveColorHex(token.$value, tree, seen);
}

function resolveColor(
  value: unknown,
  tree: unknown,
  seen: Set<string> = new Set()
): string | undefined {
  const hex = resolveColorHex(value, tree, seen);
  if (!hex) {
    return hex;
  }

  return isWhiteColor(hex)
    ? DEFAULT_LIGHT_COLOR
    : isBlackColor(hex)
      ? DEFAULT_DARK_COLOR
      : hex;
}

function applyOpacity(hex: string, opacity: number): string {
  const expanded = expandHex(hex).toLowerCase();
  const rgb = expanded.slice(0, 7);
  const existingAlpha =
    expanded.length === 9 ? Number.parseInt(expanded.slice(7, 9), 16) / 255 : 1;
  const alpha = clamp01(existingAlpha * opacity);

  if (alpha >= 1) {
    return rgb;
  }

  return `${rgb}${alphaHex(alpha)}`;
}

function isGreyscale(hex: string): boolean {
  const expanded = expandHex(hex).toLowerCase();

  return (
    expanded.slice(1, 3) === expanded.slice(3, 5) &&
    expanded.slice(3, 5) === expanded.slice(5, 7)
  );
}

/**
 * Convert `#rrggbb` / `#rrggbbaa` to OKLCH so lightness can be scaled.
 *
 * @see https://bottosson.github.io/posts/oklab/
 */
function hexToOklch(hex: string): {
  lightness: number;
  chroma: number;
  hue: number;
  alpha?: number;
} {
  const expanded = expandHex(hex).toLowerCase();
  const red = fromSrgb(Number.parseInt(expanded.slice(1, 3), 16) / 255);
  const green = fromSrgb(Number.parseInt(expanded.slice(3, 5), 16) / 255);
  const blue = fromSrgb(Number.parseInt(expanded.slice(5, 7), 16) / 255);
  const alpha =
    expanded.length === 9
      ? Number.parseInt(expanded.slice(7, 9), 16) / 255
      : undefined;

  const l_ =
    0.412_221_470_8 * red + 0.536_332_536_3 * green + 0.051_445_992_9 * blue;
  const m_ =
    0.211_903_498_2 * red + 0.680_699_545_1 * green + 0.107_396_956_6 * blue;
  const s_ =
    0.088_302_461_9 * red + 0.281_718_837_6 * green + 0.629_978_700_5 * blue;

  const l = Math.cbrt(l_);
  const m = Math.cbrt(m_);
  const s = Math.cbrt(s_);

  const lightness =
    0.210_454_255_3 * l + 0.793_617_785 * m - 0.004_072_046_8 * s;
  const a = 1.977_998_495_1 * l - 2.428_592_205 * m + 0.450_593_709_9 * s;
  const b = 0.025_904_037_1 * l + 0.782_771_766_2 * m - 0.808_675_766 * s;

  const chroma = Math.hypot(a, b);
  let hue = (Math.atan2(b, a) * 180) / Math.PI;
  if (hue < 0) {
    hue += 360;
  }

  return { lightness, chroma, hue, alpha };
}

function applyBrightness(hex: string, factor: number): string {
  const { lightness, chroma, hue, alpha } = hexToOklch(hex);

  return oklchToHex(clamp01(lightness * factor), chroma, hue, alpha);
}

function applySaturation(hex: string, factor: number): string {
  const { lightness, chroma, hue, alpha } = hexToOklch(hex);

  return oklchToHex(lightness, chroma * clamp01(factor), hue, alpha);
}

/** Perceptual midpoint in OKLCH lightness (`0` black → `1` white). */
const OKLCH_LIGHTNESS_MIDPOINT = 0.5;
const MINIMUM_DISABLED_LIGHTNESS_DELTA = 0.3;

function isLightColor(hex: string): boolean {
  return hexToOklch(hex).lightness >= OKLCH_LIGHTNESS_MIDPOINT;
}

function isWhiteColor(hex: string): boolean {
  return hexToOklch(hex).lightness >= 0.75;
}

function isBlackColor(hex: string): boolean {
  return hexToOklch(hex).lightness <= 0.25;
}

/**
 * Resolve a hover lightness multiplier from the source color. Light colors
 * darken and dark colors lighten by the same amount (`|factor - 1|`).
 */
function directedBrightnessFactor(hex: string, factor: number): number {
  const amount = Math.abs(factor - 1);

  return isLightColor(hex) ? 1 - amount : 1 + amount;
}

function applyStateTransform(hex: string, variant: ColorStateVariant): string {
  if (variant.brightness !== undefined) {
    return applyBrightness(
      hex,
      directedBrightnessFactor(hex, variant.brightness)
    );
  }

  if (variant.saturation !== undefined && !isGreyscale(hex)) {
    return applySaturation(hex, variant.saturation);
  }

  if (variant.opacity !== undefined) {
    return applyOpacity(hex, variant.opacity);
  }

  return hex;
}

function variantDetail(variant: ColorStateVariant, hex: string): string {
  if (variant.brightness !== undefined) {
    const factor = directedBrightnessFactor(hex, variant.brightness);
    const percent = Math.round((factor - 1) * 100);

    return percent >= 0
      ? `${percent}% brighter`
      : `${Math.abs(percent)}% darker`;
  }

  if (variant.saturation !== undefined && !isGreyscale(hex)) {
    return `${Math.round(variant.saturation * 100)}% saturation`;
  }

  if (variant.opacity !== undefined) {
    return `${Math.round(variant.opacity * 100)}% opacity`;
  }

  return variant.name;
}

function createStateToken(
  source: Record<string, unknown>,
  hex: string,
  variant: ColorStateVariant
): Record<string, unknown> {
  const detail = variantDetail(variant, hex);
  const transformed = applyStateTransform(hex, variant);

  return {
    ...source,
    $type: "color",
    $value: transformed,
    $description:
      typeof source.$description === "string"
        ? `${source.$description} (${variant.name}, ${detail})`
        : `${variant.name} state at ${detail}`
  };
}

const DEFAULT_DARK_COLOR = "#666666";
const DEFAULT_LIGHT_COLOR = "#AAAAAA";

function updateColorToken(isLightColor: boolean) {
  return isLightColor ? DEFAULT_DARK_COLOR : DEFAULT_LIGHT_COLOR;
}

function ensureDisabledForegroundContrast(
  group: Record<string, unknown>,
  tree: unknown
): void {
  const backgrounds = group.background;
  const foregrounds = group.foreground;
  if (!isPlainObject(backgrounds) || !isPlainObject(foregrounds)) {
    return;
  }

  for (const [name, foreground] of Object.entries(foregrounds)) {
    if (!name.endsWith("-disabled") || !isTokenNode(foreground)) {
      continue;
    }

    const background =
      backgrounds[name.replace("-inverse-disabled", "-disabled")];
    if (!isTokenNode(background)) {
      continue;
    }

    const backgroundHex = resolveColor(background.$value, tree);
    const foregroundHex = resolveColor(foreground.$value, tree);
    if (
      !backgroundHex ||
      !foregroundHex ||
      Math.abs(
        hexToOklch(backgroundHex).lightness -
          hexToOklch(foregroundHex).lightness
      ) >= MINIMUM_DISABLED_LIGHTNESS_DELTA
    ) {
      continue;
    }

    foreground.$value = updateColorToken(isLightColor(backgroundHex));
  }
}

function addColorStateTokens(
  group: Record<string, unknown>,
  tree: unknown,
  variants: readonly ColorStateVariant[],
  onlyKey?: string
): Record<string, unknown> {
  const result = { ...group } as Record<string, any>;
  const names = onlyKey ? [onlyKey] : Object.keys(group);

  for (const name of names) {
    if (name.startsWith("$") || isStateVariantKey(name)) {
      continue;
    }

    const token = group[name];
    if (!isTokenNode(token)) {
      continue;
    }

    const type = resolveType(token);
    if (type && type !== "color") {
      continue;
    }

    const hex = resolveColorHex(token.$value, tree);
    if (!hex) {
      continue;
    }

    for (const variant of variants.filter(
      variant => variant.name !== "hover" || name !== "foreground-inverse"
    )) {
      const variantKey = `${name}-${variant.name}`;
      if (variantKey in result) {
        continue;
      }

      result[variantKey] = createStateToken(token, hex, variant);
    }
  }

  return result;
}

function injectColorStateVariants(
  node: unknown,
  tree: unknown,
  key?: string
): unknown {
  if (Array.isArray(node)) {
    return node.map(item => injectColorStateVariants(item, tree));
  }

  if (!isPlainObject(node) || isTokenNode(node)) {
    return node;
  }

  const result: Record<string, unknown> = {};
  for (const [childKey, value] of Object.entries(node)) {
    if (RESERVED_KEYS.has(childKey) || childKey.startsWith("$")) {
      result[childKey] = value;
      continue;
    }

    result[childKey] = injectColorStateVariants(value, tree, childKey);
  }

  if (key && COLOR_STATE_GROUP_KEYS.has(key)) {
    return addColorStateTokens(result, tree, COLOR_STATE_VARIANTS[key]!);
  }

  let withLoneTokens = result;
  for (const groupKey of COLOR_STATE_GROUP_KEYS) {
    if (isTokenNode(withLoneTokens[groupKey])) {
      withLoneTokens = addColorStateTokens(
        withLoneTokens,
        tree,
        COLOR_STATE_VARIANTS[groupKey]!,
        groupKey
      );
    }
  }

  ensureDisabledForegroundContrast(withLoneTokens, tree);

  return withLoneTokens;
}

/**
 * Style Dictionary preprocessor: rewrite color `$value`s (and nested shadow
 * colors) to hex so generators emit `#rrggbb` / `#rrggbbaa` instead of
 * `oklch()`. For background, foreground, and border colors, also emit
 * `-hover` (10% lighter if the source is dark, 10% darker if light) and
 * `-disabled` variants (60% saturation for colored sources, or 60% opacity
 * for greyscale sources).
 */
export function tamaguiPreprocessor(
  dictionary: PreprocessedTokens
): PreprocessedTokens {
  const converted = walk(dictionary) as PreprocessedTokens;
  const withStateVariants = injectColorStateVariants(
    converted,
    converted
  ) as PreprocessedTokens;

  return withStateVariants;
}

export default definePlugin(() => ({
  name: "cyclone-ui:tamagui-preprocessor",
  preprocessors: [
    {
      name: "tamagui-preprocessor",
      preprocessor: tamaguiPreprocessor
    }
  ]
}));
