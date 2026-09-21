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

/** Convert OKLCH (L C H) to unclipped linear sRGB channels. */
function oklchToLinearSrgb(
  lightness: number,
  chroma: number,
  hue: number
): { red: number; green: number; blue: number } {
  const hueRad = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(hueRad);
  const b = chroma * Math.sin(hueRad);

  const l_ = lightness + 0.396_337_777_4 * a + 0.215_803_757_3 * b;
  const m_ = lightness - 0.105_561_345_8 * a - 0.063_854_172_8 * b;
  const s_ = lightness - 0.089_484_177_5 * a - 1.291_485_548 * b;

  const l3 = l_ ** 3;
  const m3 = m_ ** 3;
  const s3 = s_ ** 3;

  return {
    red: 4.076_741_662_1 * l3 - 3.307_711_591_3 * m3 + 0.230_969_929_2 * s3,
    green: -1.268_438_004_6 * l3 + 2.609_757_401_1 * m3 - 0.341_319_396_5 * s3,
    blue: -0.004_196_086_3 * l3 - 0.703_418_614_7 * m3 + 1.707_614_701 * s3
  };
}

function oklchToHex(
  lightness: number,
  chroma: number,
  hue: number,
  alpha?: number
): string {
  const { red, green, blue } = oklchToLinearSrgb(lightness, chroma, hue);

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
   * Multiplier applied to OKLCH lightness (e.g. 1.1 = 10%). State direction
   * is determined by the source color and its parent theme.
   */
  brightness?: number;
  /** Resolve base-state colors from the parent theme's contrast primitive. */
  useBaseThemePrimitive?: boolean;
}

type ParentTheme = "dark" | "light";

const BASE_THEME_ACTIVE_PRIMITIVES: Record<ParentTheme, string> = {
  dark: "#ffffff",
  light: "#0c0c0d"
};

function parentThemeFromDescription(
  description: unknown
): ParentTheme | undefined {
  if (typeof description !== "string") {
    return undefined;
  }

  const theme = /\b(dark|light)[\s-]+theme\b/i.exec(description)?.[1];

  return theme?.toLowerCase() === "dark"
    ? "dark"
    : theme?.toLowerCase() === "light"
      ? "light"
      : undefined;
}

function parentThemeFromDictionary(
  dictionary: unknown
): ParentTheme | undefined {
  if (!isPlainObject(dictionary) || !isPlainObject(dictionary.color)) {
    return undefined;
  }

  return parentThemeFromDescription(dictionary.color.$description);
}

const COLOR_STATE_HOVER: ColorStateVariant = {
  name: "hover",
  brightness: 1.3
};

const BASE_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.15,
  useBaseThemePrimitive: true
};

const THEME_COLOR_STATE_HOVER: ColorStateVariant = {
  name: "hover",
  brightness: 1.225
};

const THEME_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.1125
};

const REDUCED_BASE_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.105
};

const REDUCED_THEME_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.07875
};

const COLOR_STATE_INACTIVE: ColorStateVariant = {
  name: "inactive",
  brightness: 0.8
};

const BASE_COLOR_STATE_INACTIVE: ColorStateVariant = {
  name: "inactive",
  brightness: 0.6,
  useBaseThemePrimitive: true
};

const COLOR_STATE_DISABLED: ColorStateVariant = {
  name: "disabled",
  opacity: 0.4,
  saturation: 0.8
};

const BASE_COLOR_STATE_VARIANTS = [
  COLOR_STATE_HOVER,
  BASE_COLOR_STATE_ACTIVE,
  BASE_COLOR_STATE_INACTIVE,
  COLOR_STATE_DISABLED
] as const;

const BASE_COLOR_STATE_TOKEN_VARIANTS = [
  COLOR_STATE_HOVER,
  BASE_COLOR_STATE_ACTIVE,
  BASE_COLOR_STATE_INACTIVE
] as const;

interface ThemeColorStateVariants {
  base: readonly ColorStateVariant[];
  theme: readonly ColorStateVariant[];
}

const ACCENT_COLOR_STATE_VARIANTS: ThemeColorStateVariants = {
  base: BASE_COLOR_STATE_VARIANTS,
  theme: [
    THEME_COLOR_STATE_HOVER,
    THEME_COLOR_STATE_ACTIVE,
    COLOR_STATE_INACTIVE,
    COLOR_STATE_DISABLED
  ]
};

const MUTED_COLOR_STATE_VARIANTS: ThemeColorStateVariants = {
  base: [
    COLOR_STATE_HOVER,
    REDUCED_BASE_COLOR_STATE_ACTIVE,
    BASE_COLOR_STATE_INACTIVE,
    COLOR_STATE_DISABLED
  ],
  theme: ACCENT_COLOR_STATE_VARIANTS.theme
};

const COLOR_STATE_VARIANTS: Record<string, ThemeColorStateVariants> = {
  surface: {
    base: BASE_COLOR_STATE_VARIANTS,
    theme: [
      THEME_COLOR_STATE_HOVER,
      THEME_COLOR_STATE_ACTIVE,
      COLOR_STATE_INACTIVE,
      COLOR_STATE_DISABLED
    ]
  },
  accent: ACCENT_COLOR_STATE_VARIANTS,
  "on-accent": ACCENT_COLOR_STATE_VARIANTS,
  muted: MUTED_COLOR_STATE_VARIANTS,
  "on-muted": ACCENT_COLOR_STATE_VARIANTS
};

const COLOR_STATE_GROUP_KEYS = new Set(Object.keys(COLOR_STATE_VARIANTS));

const COLOR_STATE_TOKEN_VARIANTS: Record<string, ThemeColorStateVariants> = {
  link: {
    base: BASE_COLOR_STATE_TOKEN_VARIANTS,
    theme: [
      THEME_COLOR_STATE_HOVER,
      THEME_COLOR_STATE_ACTIVE,
      COLOR_STATE_INACTIVE
    ]
  },
  hairline: {
    base: [
      COLOR_STATE_HOVER,
      REDUCED_BASE_COLOR_STATE_ACTIVE,
      BASE_COLOR_STATE_INACTIVE
    ],
    theme: [
      THEME_COLOR_STATE_HOVER,
      REDUCED_THEME_COLOR_STATE_ACTIVE,
      COLOR_STATE_INACTIVE
    ]
  }
};

const BASE_RING_OPACITY = 0.075;
const THEME_RING_OPACITY = 0.125;
const MINIMUM_MUTED_CONTRAST_RATIO = 6;
const MINIMUM_INVERSE_CONTRAST_RATIO = 2;
const MUTED_COLOR_LIGHTNESS_STEP = 0.01;
const MAX_MUTED_COLOR_ADJUSTMENTS = 100;
const MUTED_COLOR_GAMUT_SEARCH_ITERATIONS = 32;

function isStateVariantKey(key: string): boolean {
  return (
    key.toLowerCase().endsWith("-hover") ||
    key.toLowerCase().endsWith("-active") ||
    key.toLowerCase().endsWith("-inactive") ||
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

function applyRingOpacity(
  node: unknown,
  tree: unknown,
  inRingGroup = false
): unknown {
  if (Array.isArray(node)) {
    return node.map(item => applyRingOpacity(item, tree, inRingGroup));
  }

  if (!isPlainObject(node)) {
    return node;
  }

  if (inRingGroup && isTokenNode(node) && resolveType(node) === "shadow") {
    const value = node.$value;
    const opacity =
      node.theme === "base" ? BASE_RING_OPACITY : THEME_RING_OPACITY;
    const applyToLayer = (layer: unknown): unknown => {
      if (!isPlainObject(layer) || !("color" in layer)) {
        return layer;
      }

      const color = resolveColorHex(layer.color, tree);

      return color
        ? {
            ...layer,
            color: applyOpacity(color, opacity)
          }
        : layer;
    };

    return {
      ...node,
      // CSS paints the first shadow layer on top. Ring tokens may use those
      // leading layers as opaque offset masks, so only tint the final,
      // visible ring layer.
      $value: Array.isArray(value)
        ? value.map((layer, index) =>
            index === value.length - 1 ? applyToLayer(layer) : layer
          )
        : applyToLayer(value)
    };
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(node)) {
    result[key] = applyRingOpacity(
      value,
      tree,
      inRingGroup || key.toLowerCase() === "ring"
    );
  }

  return result;
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

function isInSrgbGamut({
  red,
  green,
  blue
}: {
  red: number;
  green: number;
  blue: number;
}): boolean {
  return (
    red >= 0 && red <= 1 && green >= 0 && green <= 1 && blue >= 0 && blue <= 1
  );
}

function oklchToGamutMappedHex(
  lightness: number,
  chroma: number,
  hue: number,
  alpha?: number
): string {
  if (isInSrgbGamut(oklchToLinearSrgb(lightness, chroma, hue))) {
    return oklchToHex(lightness, chroma, hue, alpha);
  }

  let minimumChroma = 0;
  let maximumChroma = chroma;

  // Find the highest in-gamut chroma while holding lightness and hue fixed.
  for (let index = 0; index < MUTED_COLOR_GAMUT_SEARCH_ITERATIONS; index += 1) {
    const candidateChroma = (minimumChroma + maximumChroma) / 2;
    if (isInSrgbGamut(oklchToLinearSrgb(lightness, candidateChroma, hue))) {
      minimumChroma = candidateChroma;
    } else {
      maximumChroma = candidateChroma;
    }
  }

  return oklchToHex(lightness, minimumChroma, hue, alpha);
}

function applyBrightness(hex: string, factor: number): string {
  const { lightness, chroma, hue, alpha } = hexToOklch(hex);

  return oklchToHex(clamp01(lightness * factor), chroma, hue, alpha);
}

function applySaturation(hex: string, factor: number): string {
  const { lightness, chroma, hue, alpha } = hexToOklch(hex);

  return oklchToHex(lightness, chroma * clamp01(factor), hue, alpha);
}

function relativeLuminance(hex: string): number {
  const expanded = expandHex(hex).toLowerCase();
  const channel = (offset: number) => {
    const value = Number.parseInt(expanded.slice(offset, offset + 2), 16) / 255;

    return value <= 0.040_45 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
}

function contrastRatio(first: string, second: string): number {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

function createOnAccentColor(hex: string): "#FAFAFA" | "#151518" {
  const whiteContrast = contrastRatio(hex, "#FAFAFA");
  if (whiteContrast >= MINIMUM_INVERSE_CONTRAST_RATIO) {
    return "#FAFAFA";
  }

  const blackContrast = contrastRatio(hex, "#151518");
  if (blackContrast * 0.5 > whiteContrast) {
    return "#151518";
  }

  return "#FAFAFA";
}

function createMutedColor(
  hex: string,
  parentTheme: ParentTheme
): { muted: string; onMuted?: string } {
  const { lightness, chroma, hue, alpha } = hexToOklch(hex);
  const mutedDirection = parentTheme === "light" ? 1 : -1;
  const onMutedDirection = -mutedDirection;
  let mutedLightness = lightness;
  let onMutedLightness = lightness;
  let muted = hex;
  let onMuted = hex;

  for (let index = 0; index < MAX_MUTED_COLOR_ADJUSTMENTS; index += 1) {
    mutedLightness = clamp01(
      mutedLightness + mutedDirection * MUTED_COLOR_LIGHTNESS_STEP
    );
    muted = oklchToGamutMappedHex(mutedLightness, chroma, hue, alpha);
    if (contrastRatio(muted, onMuted) >= MINIMUM_MUTED_CONTRAST_RATIO) {
      return onMuted === hex ? { muted } : { muted, onMuted };
    }

    onMutedLightness = clamp01(
      onMutedLightness + onMutedDirection * MUTED_COLOR_LIGHTNESS_STEP
    );
    onMuted = oklchToGamutMappedHex(onMutedLightness, chroma, hue, alpha);
    if (contrastRatio(muted, onMuted) >= MINIMUM_MUTED_CONTRAST_RATIO) {
      return { muted, onMuted };
    }

    if (
      (mutedLightness === 0 || mutedLightness === 1) &&
      (onMutedLightness === 0 || onMutedLightness === 1)
    ) {
      break;
    }
  }

  throw new Error(`Unable to generate an accessible muted pair for ${hex}`);
}

function isLightColor(hex: string, parentTheme?: ParentTheme): boolean {
  if (parentTheme === "dark") {
    return isWhiteColor(hex);
  }

  if (parentTheme === "light") {
    return !isBlackColor(hex);
  }

  return hexToOklch(hex).lightness >= 0.5;
}

function isDarkColor(hex: string, parentTheme?: ParentTheme): boolean {
  return !isLightColor(hex, parentTheme);
}

function isWhiteColor(hex: string): boolean {
  return hexToOklch(hex).lightness >= 0.75;
}

function isBlackColor(hex: string): boolean {
  return hexToOklch(hex).lightness <= 0.25;
}

/** Resolve a state multiplier from the source color and parent theme. */
function directedBrightnessFactor(
  hex: string,
  factor: number,
  parentTheme?: ParentTheme
): number {
  return isDarkColor(hex, parentTheme) ? factor : 2 - factor;
}

function baseThemePrimitive(
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): string | undefined {
  return variant.useBaseThemePrimitive && parentTheme
    ? BASE_THEME_ACTIVE_PRIMITIVES[parentTheme]
    : undefined;
}

function stateBrightnessFactor(
  hex: string,
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): number {
  if (variant.brightness === undefined) {
    return 1;
  }

  if (baseThemePrimitive(variant, parentTheme)) {
    return variant.name === "active" ? 1 : variant.brightness;
  }

  return directedBrightnessFactor(hex, variant.brightness, parentTheme);
}

function applyStateTransform(
  hex: string,
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): string {
  const primitive = baseThemePrimitive(variant, parentTheme);
  let transformed = primitive ?? hex;

  if (
    variant.brightness !== undefined &&
    !(primitive && variant.name === "active")
  ) {
    transformed = applyBrightness(
      transformed,
      stateBrightnessFactor(transformed, variant, parentTheme)
    );
  }

  if (variant.saturation !== undefined && !isGreyscale(hex)) {
    return applySaturation(transformed, variant.saturation);
  }

  if (variant.opacity !== undefined) {
    return applyOpacity(transformed, variant.opacity);
  }

  return transformed;
}

function variantDetail(
  variant: ColorStateVariant,
  hex: string,
  parentTheme?: ParentTheme
): string {
  const details: string[] = [];
  const primitive = baseThemePrimitive(variant, parentTheme);

  if (primitive && variant.name === "active") {
    details.push(`${parentTheme} base primitive`);
  } else if (variant.brightness !== undefined) {
    const factor = stateBrightnessFactor(hex, variant, parentTheme);
    const percent = Math.round((factor - 1) * 100);

    details.push(
      percent >= 0 ? `${percent}% brighter` : `${Math.abs(percent)}% darker`
    );
  }

  if (variant.saturation !== undefined && !isGreyscale(hex)) {
    details.push(`${Math.round(variant.saturation * 100)}% saturation`);
  } else if (variant.opacity !== undefined) {
    details.push(`${Math.round(variant.opacity * 100)}% opacity`);
  }

  return details.join(", ") || variant.name;
}

function createStateToken(
  source: Record<string, unknown>,
  hex: string,
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): Record<string, unknown> {
  const detail = variantDetail(variant, hex, parentTheme);
  const transformed = applyStateTransform(hex, variant, parentTheme);

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

function addColorStateTokens(
  group: Record<string, unknown>,
  tree: unknown,
  variants: readonly ColorStateVariant[] | ThemeColorStateVariants,
  onlyKey?: string,
  parentTheme?: ParentTheme
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

    const tokenVariants =
      "base" in variants
        ? variants[token.theme === "base" ? "base" : "theme"]
        : variants;
    const tokenParentTheme =
      parentThemeFromDescription(token.$description) ?? parentTheme;

    for (const variant of tokenVariants) {
      const variantKey = `${name}-${variant.name}`;
      if (variantKey in result) {
        continue;
      }

      result[variantKey] = createStateToken(
        token,
        hex,
        variant,
        tokenParentTheme
      );
    }
  }

  return result;
}

function accentThemeName(token: Record<string, unknown>): string | undefined {
  return typeof token.theme === "string"
    ? token.theme
    : typeof token.$theme === "string"
      ? token.$theme
      : undefined;
}

function colorGroup(
  group: Record<string, unknown>,
  key: string
): Record<string, unknown> {
  const value = group[key];

  if (!isPlainObject(value) || isTokenNode(value)) {
    return {};
  }

  return { ...(value as Record<string, unknown>) };
}

function addMissingAccentCompanionTokens(
  color: Record<string, unknown>,
  tree: unknown,
  parentTheme?: ParentTheme
): Record<string, unknown> {
  const accent = colorGroup(color, "accent");
  if (Object.keys(accent).length === 0) {
    return color;
  }

  const onAccent = colorGroup(color, "on-accent");
  const muted = colorGroup(color, "muted");
  const onMuted = colorGroup(color, "on-muted");
  let changed = false;

  for (const [name, token] of Object.entries(accent)) {
    if (
      !isTokenNode(token) ||
      name.startsWith("$") ||
      isStateVariantKey(name)
    ) {
      continue;
    }

    if (accentThemeName(token) !== name) {
      continue;
    }

    const type = resolveType(token);
    const hex = resolveColorHex(token.$value, tree);
    if ((type && type !== "color") || !hex) {
      continue;
    }

    if (!(name in onAccent)) {
      onAccent[name] = {
        ...token,
        $type: "color",
        $value: createOnAccentColor(hex)
      };
      changed = true;
    }

    if (!parentTheme) {
      continue;
    }

    let generatedOnMuted: unknown = token.$value;
    if (!(name in muted)) {
      const generated = createMutedColor(hex, parentTheme);
      generatedOnMuted = generated.onMuted ?? token.$value;
      muted[name] = {
        ...token,
        $type: "color",
        $value: generated.muted,
        $description: `Generated ${name} muted background for the ${parentTheme} theme`
      };
      changed = true;
    }

    if (!(name in onMuted)) {
      onMuted[name] = {
        ...token,
        $type: "color",
        $value: generatedOnMuted,
        $description: `Generated ${name} foreground on muted backgrounds`
      };
      changed = true;
    }
  }

  return changed
    ? {
        ...color,
        "on-accent": onAccent,
        muted,
        "on-muted": onMuted
      }
    : color;
}

function addAccentCompanionStateVariants(
  color: Record<string, unknown>,
  tree: unknown,
  parentTheme?: ParentTheme
): Record<string, unknown> {
  let result = color;
  for (const groupKey of ["on-accent", "muted", "on-muted"]) {
    const group = result[groupKey];
    if (!isPlainObject(group) || isTokenNode(group)) {
      continue;
    }

    result = {
      ...result,
      [groupKey]: addColorStateTokens(
        group,
        tree,
        COLOR_STATE_VARIANTS[groupKey]!,
        undefined,
        parentTheme
      )
    };
  }

  return result;
}

function injectColorStateVariants(
  node: unknown,
  tree: unknown,
  key?: string,
  parentTheme?: ParentTheme
): unknown {
  if (Array.isArray(node)) {
    return node.map(item =>
      injectColorStateVariants(item, tree, undefined, parentTheme)
    );
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

    const childTheme =
      childKey === "dark" || childKey === "light" ? childKey : parentTheme;
    result[childKey] = injectColorStateVariants(
      value,
      tree,
      childKey,
      childTheme
    );
  }

  if (key && COLOR_STATE_GROUP_KEYS.has(key)) {
    return addColorStateTokens(
      result,
      tree,
      COLOR_STATE_VARIANTS[key]!,
      undefined,
      parentTheme
    );
  }

  let withLoneTokens = result;
  for (const groupKey of COLOR_STATE_GROUP_KEYS) {
    if (isTokenNode(withLoneTokens[groupKey])) {
      withLoneTokens = addColorStateTokens(
        withLoneTokens,
        tree,
        COLOR_STATE_VARIANTS[groupKey]!,
        groupKey,
        parentTheme
      );
    }
  }

  for (const [tokenKey, variants] of Object.entries(
    COLOR_STATE_TOKEN_VARIANTS
  )) {
    if (isTokenNode(withLoneTokens[tokenKey])) {
      withLoneTokens = addColorStateTokens(
        withLoneTokens,
        tree,
        variants,
        tokenKey,
        parentTheme
      );
    }
  }

  if (key === "color") {
    return addAccentCompanionStateVariants(
      addMissingAccentCompanionTokens(withLoneTokens, tree, parentTheme),
      tree,
      parentTheme
    );
  }

  return withLoneTokens;
}

/**
 * Style Dictionary preprocessor: rewrite color `$value`s (and nested shadow
 * colors) to hex so generators emit `#rrggbb` / `#rrggbbaa` instead of
 * `oklch()`. State variants are limited to surface and accent color groups,
 * plus the standalone link and hairline colors. Surface and accent colors
 * receive hover, active, inactive, and disabled variants; link and hairline
 * colors receive hover, active, and inactive variants.
 */
export function tamaguiPreprocessor(
  dictionary: PreprocessedTokens
): PreprocessedTokens {
  const converted = walk(dictionary) as PreprocessedTokens;
  const withRingOpacity = applyRingOpacity(
    converted,
    converted
  ) as PreprocessedTokens;
  const withStateVariants = injectColorStateVariants(
    withRingOpacity,
    withRingOpacity,
    undefined,
    parentThemeFromDictionary(withRingOpacity)
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
