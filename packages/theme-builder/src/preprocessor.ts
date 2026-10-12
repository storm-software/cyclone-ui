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
  /** Resolve state colors from the parent theme's contrast primitive. */
  useContrastPrimitive?: boolean;
  /** Composite the color at `opacity` over this opaque color. */
  fadeOver?: string;
}

type ParentTheme = "dark" | "light";

const CONTRAST_PRIMITIVES: Record<ParentTheme, string> = {
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

const LOW_SATURATION_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.45,
  useContrastPrimitive: true
};

const COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.25
};

const SURFACE_LOW_SATURATION_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.075
};

const SUBTLE_LOW_SATURATION_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.125
};

const BORDER_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.4
};

const INCREASED_LOW_SATURATION_COLOR_STATE_ACTIVE: ColorStateVariant = {
  name: "active",
  brightness: 1.8,
  useContrastPrimitive: true
};

const COLOR_STATE_INACTIVE: ColorStateVariant = {
  name: "inactive",
  brightness: 0.8
};

const LOW_SATURATION_COLOR_STATE_INACTIVE: ColorStateVariant = {
  name: "inactive",
  brightness: 0.6,
  useContrastPrimitive: true
};

const COLOR_STATE_DISABLED: ColorStateVariant = {
  name: "disabled",
  opacity: 0.35,
  saturation: 0.85,
  fadeOver: "oklch(0.3839 0.0045 286.26)"
};

/** State variants for low-saturation (neutral) and saturated colors. */
interface ColorStateVariants {
  lowSaturation: readonly ColorStateVariant[];
  saturated: readonly ColorStateVariant[];
}

const DEFAULT_COLOR_STATE_VARIANTS: ColorStateVariants = {
  lowSaturation: [
    LOW_SATURATION_COLOR_STATE_ACTIVE,
    LOW_SATURATION_COLOR_STATE_INACTIVE,
    COLOR_STATE_DISABLED
  ],
  saturated: [COLOR_STATE_ACTIVE, COLOR_STATE_INACTIVE, COLOR_STATE_DISABLED]
};

const SUBTLE_COLOR_STATE_VARIANTS: ColorStateVariants = {
  lowSaturation: [
    SUBTLE_LOW_SATURATION_COLOR_STATE_ACTIVE,
    LOW_SATURATION_COLOR_STATE_INACTIVE,
    COLOR_STATE_DISABLED
  ],
  saturated: DEFAULT_COLOR_STATE_VARIANTS.saturated
};

/**
 * Surfaces shift their own lightness instead of jumping to the contrast
 * primitive, so their states stay subtler than other low-saturation colors.
 */
const SURFACE_COLOR_STATE_VARIANTS: ColorStateVariants = {
  lowSaturation: [
    SURFACE_LOW_SATURATION_COLOR_STATE_ACTIVE,
    COLOR_STATE_INACTIVE,
    COLOR_STATE_DISABLED
  ],
  saturated: DEFAULT_COLOR_STATE_VARIANTS.saturated
};

/**
 * Status colors that receive generated `on-*` (text) and `*-subtle`
 * (low-emphasis background) companions when missing.
 */
const STATUS_COLOR_KEYS = [
  "danger",
  "warning",
  "info",
  "discovery",
  "success"
] as const;

/**
 * Primary and tertiary colors are copied into the `base` theme as `base` and
 * `base-subtle`, so it is generated like a status theme (`accent`, `active`,
 * `subtle`, `onAccent`, `ring`, …). Rings and states are generated for these
 * copies, not for primary, secondary, or tertiary.
 */
const BASE_THEME_COLOR_NAMES: Record<string, string> = {
  primary: "base",
  tertiary: "base-subtle"
};

/**
 * Colors that get their own Tamagui child theme, with generated companion,
 * state, and focus ring tokens.
 */
const THEME_COLOR_KEYS = ["base", ...STATUS_COLOR_KEYS] as const;

/** Every token in this group receives state variants. */
const COLOR_STATE_GROUP_KEY = "surface";

/** Standalone color tokens that receive state variants. */
const COLOR_STATE_VARIANTS: Record<string, ColorStateVariants> = {
  border: {
    lowSaturation: [
      INCREASED_LOW_SATURATION_COLOR_STATE_ACTIVE,
      LOW_SATURATION_COLOR_STATE_INACTIVE,
      COLOR_STATE_DISABLED
    ],
    saturated: [
      BORDER_COLOR_STATE_ACTIVE,
      COLOR_STATE_INACTIVE,
      COLOR_STATE_DISABLED
    ]
  },
  ...Object.fromEntries(
    THEME_COLOR_KEYS.flatMap(key => [
      [key, DEFAULT_COLOR_STATE_VARIANTS],
      [`${key}-subtle`, SUBTLE_COLOR_STATE_VARIANTS]
    ])
  )
};

/** OKLCH chroma below which a color uses the low-saturation state variants. */
const LOW_SATURATION_CHROMA = 0.02;

const LOW_SATURATION_RING_OPACITY = 0.2;
const SATURATED_RING_OPACITY = 0.15;
const MINIMUM_SUBTLE_CONTRAST_RATIO = 6.6;
const MINIMUM_INVERSE_CONTRAST_RATIO = 2;
const SUBTLE_COLOR_LIGHTNESS_STEP = 0.01;
const MAX_SUBTLE_COLOR_ADJUSTMENTS = 100;
const SUBTLE_COLOR_GAMUT_SEARCH_ITERATIONS = 32;
/** OKLCH lightness shift for active colors already near the contrast primitive. */
const CONTRAST_SIDE_ACTIVE_LIGHTNESS_SHIFT = 0.1;

function isStateVariantKey(key: string): boolean {
  return (
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

/** Alpha-composite `hex` at `opacity` over an opaque `background` (sRGB). */
function applyFadeOver(
  hex: string,
  background: string,
  opacity: number
): string {
  const foreground = expandHex(hex).toLowerCase();
  const base = expandHex(convertColor(background) ?? background).toLowerCase();
  const existingAlpha =
    foreground.length === 9
      ? Number.parseInt(foreground.slice(7, 9), 16) / 255
      : 1;
  const alpha = clamp01(existingAlpha * opacity);
  const channel = (offset: number) =>
    srgbHexChannel(
      (Number.parseInt(foreground.slice(offset, offset + 2), 16) * alpha +
        Number.parseInt(base.slice(offset, offset + 2), 16) * (1 - alpha)) /
        255
    );

  return `#${channel(1)}${channel(3)}${channel(5)}`;
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
    const applyToLayer = (layer: unknown): unknown => {
      if (!isPlainObject(layer) || !("color" in layer)) {
        return layer;
      }

      const color = resolveColorHex(layer.color, tree);

      return color
        ? {
            ...layer,
            color: applyOpacity(
              color,
              isLowSaturation(color)
                ? LOW_SATURATION_RING_OPACITY
                : SATURATED_RING_OPACITY
            )
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

function ringLayer(color: string, spread: number): Record<string, unknown> {
  const zero = { value: 0, unit: "px" };

  return {
    color,
    offsetX: zero,
    offsetY: zero,
    blur: zero,
    spread: { value: spread, unit: "px" }
  };
}

/**
 * Add the default, subtle, offset, and subtle-offset ring tokens for each
 * ring color (e.g. `ring.danger`, `ring.danger-subtle`, `ring.danger-offset`,
 * `ring.danger-subtle-offset`) unless they are already defined.
 */
function addMissingRingTokens(dictionary: unknown): unknown {
  if (!isPlainObject(dictionary) || !isPlainObject(dictionary.color)) {
    return dictionary;
  }

  const color = dictionary.color;
  const ring = isPlainObject(dictionary.ring) ? { ...dictionary.ring } : {};
  let changed = false;

  for (const name of THEME_COLOR_KEYS) {
    if (!isTokenNode(color[name])) {
      continue;
    }

    const ringColor = `{color.${name}}`;
    const gap = ringLayer("{color.surface-elevated}", 3);
    const variants: Record<string, [string, unknown[]]> = {
      [name]: [`${name} 3px focus ring with no gap`, [ringLayer(ringColor, 3)]],
      [`${name}-subtle`]: [
        `${name} 1px hairline focus ring with no gap`,
        [ringLayer(ringColor, 1)]
      ],
      [`${name}-offset`]: [
        `${name} 3px focus ring with a 3px gap`,
        [gap, ringLayer(ringColor, 6)]
      ],
      [`${name}-subtle-offset`]: [
        `${name} 1px focus ring with a 3px gap`,
        [gap, ringLayer(ringColor, 4)]
      ]
    };

    for (const [key, [description, value]] of Object.entries(variants)) {
      if (key in ring) {
        continue;
      }

      ring[key] = {
        $description: `Generated ${description}`,
        $type: "shadow",
        $value: value,
        theme: colorTokenTheme(name)
      };
      changed = true;
    }
  }

  return changed ? { ...dictionary, ring } : dictionary;
}

function isLowSaturation(hex: string): boolean {
  return hexToOklch(hex).chroma < LOW_SATURATION_CHROMA;
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
  for (
    let index = 0;
    index < SUBTLE_COLOR_GAMUT_SEARCH_ITERATIONS;
    index += 1
  ) {
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

function applyLightnessShift(hex: string, shift: number): string {
  const { lightness, chroma, hue, alpha } = hexToOklch(hex);

  return oklchToHex(clamp01(lightness + shift), chroma, hue, alpha);
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

function createOnColor(hex: string): "#FAFAFA" | "#151518" {
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
): { subtle: string; onMuted?: string } {
  const { lightness, chroma, hue, alpha } = hexToOklch(hex);
  const subtleDirection = parentTheme === "light" ? 1 : -1;
  const onMutedDirection = -subtleDirection;
  let subtleLightness = lightness;
  let onMutedLightness = lightness;
  let subtle = hex;
  let onMuted = hex;

  for (let index = 0; index < MAX_SUBTLE_COLOR_ADJUSTMENTS; index += 1) {
    subtleLightness = clamp01(
      subtleLightness + subtleDirection * SUBTLE_COLOR_LIGHTNESS_STEP
    );
    subtle = oklchToGamutMappedHex(subtleLightness, chroma, hue, alpha);
    if (contrastRatio(subtle, onMuted) >= MINIMUM_SUBTLE_CONTRAST_RATIO) {
      return onMuted === hex ? { subtle } : { subtle, onMuted };
    }

    onMutedLightness = clamp01(
      onMutedLightness + onMutedDirection * SUBTLE_COLOR_LIGHTNESS_STEP
    );
    onMuted = oklchToGamutMappedHex(onMutedLightness, chroma, hue, alpha);
    if (contrastRatio(subtle, onMuted) >= MINIMUM_SUBTLE_CONTRAST_RATIO) {
      return { subtle, onMuted };
    }

    if (
      (subtleLightness === 0 || subtleLightness === 1) &&
      (onMutedLightness === 0 || onMutedLightness === 1)
    ) {
      break;
    }
  }

  throw new Error(`Unable to generate an accessible subtle pair for ${hex}`);
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

function contrastPrimitive(
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): string | undefined {
  return variant.useContrastPrimitive && parentTheme
    ? CONTRAST_PRIMITIVES[parentTheme]
    : undefined;
}

/**
 * Active colors that already sit near the parent theme's contrast primitive
 * (near-white in dark themes, near-black in light themes) would barely change
 * by jumping to it, so their lightness shifts toward the middle instead.
 */
function contrastSideLightnessShift(
  hex: string,
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): number | undefined {
  if (variant.name !== "active" || !contrastPrimitive(variant, parentTheme)) {
    return undefined;
  }

  if (parentTheme === "dark" && isWhiteColor(hex)) {
    return -CONTRAST_SIDE_ACTIVE_LIGHTNESS_SHIFT;
  }

  if (parentTheme === "light" && isBlackColor(hex)) {
    return CONTRAST_SIDE_ACTIVE_LIGHTNESS_SHIFT;
  }

  return undefined;
}

function stateBrightnessFactor(
  hex: string,
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): number {
  if (variant.brightness === undefined) {
    return 1;
  }

  if (contrastPrimitive(variant, parentTheme)) {
    return variant.name === "active" ? 1 : variant.brightness;
  }

  return directedBrightnessFactor(hex, variant.brightness, parentTheme);
}

function applyStateTransform(
  hex: string,
  variant: ColorStateVariant,
  parentTheme?: ParentTheme
): string {
  const shift = contrastSideLightnessShift(hex, variant, parentTheme);
  const primitive =
    shift === undefined ? contrastPrimitive(variant, parentTheme) : undefined;
  let transformed = primitive ?? hex;

  if (shift !== undefined) {
    transformed = applyLightnessShift(hex, shift);
  } else if (
    variant.brightness !== undefined &&
    !(primitive && variant.name === "active")
  ) {
    transformed = applyBrightness(
      transformed,
      stateBrightnessFactor(transformed, variant, parentTheme)
    );
  }

  if (variant.saturation !== undefined && !isGreyscale(hex)) {
    transformed = applySaturation(transformed, variant.saturation);
    if (variant.fadeOver === undefined) {
      return transformed;
    }
  }

  if (variant.fadeOver !== undefined) {
    return applyFadeOver(transformed, variant.fadeOver, variant.opacity ?? 1);
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
  const shift = contrastSideLightnessShift(hex, variant, parentTheme);
  const primitive = contrastPrimitive(variant, parentTheme);

  if (shift !== undefined) {
    details.push(
      `${Math.round(Math.abs(shift) * 100)}% ${shift < 0 ? "darker" : "lighter"}`
    );
  } else if (primitive && variant.name === "active") {
    details.push(`${parentTheme} contrast primitive`);
  } else if (variant.brightness !== undefined) {
    const factor = stateBrightnessFactor(hex, variant, parentTheme);
    const percent = Math.round((factor - 1) * 100);

    details.push(
      percent >= 0 ? `${percent}% brighter` : `${Math.abs(percent)}% darker`
    );
  }

  if (variant.saturation !== undefined && !isGreyscale(hex)) {
    details.push(`${Math.round(variant.saturation * 100)}% saturation`);
  }

  if (variant.fadeOver !== undefined) {
    details.push(
      `${Math.round((variant.opacity ?? 1) * 100)}% over ${variant.fadeOver}`
    );
  } else if (
    variant.opacity !== undefined &&
    (variant.saturation === undefined || isGreyscale(hex))
  ) {
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
  variants: ColorStateVariants,
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

    const tokenVariants = isLowSaturation(hex)
      ? variants.lowSaturation
      : variants.saturated;
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

/**
 * Add an `on-*-accent` text color (renamed from `on-*` when defined), an
 * `*-accent` alias, a `*-subtle` low-emphasis background, and an `on-*-subtle`
 * text color for each theme color (`base` and the status colors) that does
 * not define them, so state variants can be generated for the subtle
 * backgrounds.
 */
function addMissingStatusCompanionTokens(
  color: Record<string, unknown>,
  tree: unknown,
  parentTheme?: ParentTheme
): Record<string, unknown> {
  const result = { ...color };
  for (const name of THEME_COLOR_KEYS) {
    const token = color[name];
    if (!isTokenNode(token)) {
      continue;
    }

    const type = resolveType(token);
    const hex = resolveColorHex(token.$value, tree);
    if ((type && type !== "color") || !hex) {
      continue;
    }

    // Tamagui drops the theme name from child theme keys, so `danger` would be
    // empty and `on-danger` would be `on`. The `*-accent` names become `accent`
    // and `onAccent` in the `danger` theme; `on-danger` is renamed rather than
    // aliased so it does not leak into the root themes.
    const onToken = color[`on-${name}`];
    delete result[`on-${name}`];
    result[`on-${name}-accent`] ??= isTokenNode(onToken)
      ? { ...onToken, theme: name, group: name }
      : {
          ...token,
          $type: "color",
          $value: createOnColor(hex),
          $description: `Generated text and icon color on ${name} backgrounds`,
          theme: name,
          group: name
        };

    result[`${name}-accent`] ??= {
      $type: "color",
      $value: `{color.${name}}`,
      $description: `Alias of ${name} for the ${name} theme`,
      theme: name,
      group: name
    };

    let onMuted: string | undefined;
    if (parentTheme && !(`${name}-subtle` in color)) {
      const pair = createMutedColor(hex, parentTheme);
      result[`${name}-subtle`] = {
        ...token,
        $type: "color",
        $value: pair.subtle,
        $description: `Generated low-emphasis ${name} background for the ${parentTheme} theme`
      };
      onMuted = pair.onMuted ?? hex;
    } else if (isTokenNode(color[`${name}-subtle`])) {
      const subtleHex = resolveColorHex(
        (color[`${name}-subtle`] as Record<string, unknown>).$value,
        tree
      );
      onMuted = subtleHex && createOnColor(subtleHex);
    }

    if (onMuted && !(`on-${name}-subtle` in color)) {
      result[`on-${name}-subtle`] = {
        ...token,
        $type: "color",
        $value: onMuted,
        $description: `Generated text and icon color on ${name}-subtle backgrounds`
      };
    }
  }

  return result;
}

/** Strip the `on-` prefix and `-subtle` / state suffixes from a token name. */
function colorTokenRoot(name: string): string {
  return name
    .replace(/^on-/, "")
    .replace(/-(?:active|inactive|disabled)$/i, "")
    .replace(/-subtle$/, "");
}

/**
 * Resolve the Tamagui theme for a color token name: the theme color name for
 * `base` and status colors (including their `on-*`, `*-subtle`, and state
 * variants). Primary, secondary, and tertiary colors stay in the root light
 * and dark themes so every child theme inherits them.
 */
function colorTokenTheme(name: string): string | undefined {
  const root = colorTokenRoot(name);

  return (THEME_COLOR_KEYS as readonly string[]).includes(root)
    ? root
    : undefined;
}

/**
 * Copy each primary and secondary color (and its `on-*` color) into the
 * `base` theme as `base` / `base-subtle`.
 */
function addBaseThemeAliases(
  color: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...color };
  for (const [name, token] of Object.entries(color)) {
    const root = colorTokenRoot(name);
    const baseName = BASE_THEME_COLOR_NAMES[root];
    if (!baseName || !isTokenNode(token)) {
      continue;
    }

    // Copied rather than referenced so states resolve inside nested
    // `light` / `dark` color groups.
    result[name.replace(root, baseName)] ??= {
      ...token,
      theme: "base",
      group: "base"
    };
  }

  return result;
}

/** Add a `theme` to each themed color token that does not define one. */
function addColorTokenThemes(
  color: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...color };
  for (const [name, token] of Object.entries(color)) {
    const theme = colorTokenTheme(name);
    if (theme && isTokenNode(token) && !("theme" in token)) {
      result[name] = { ...token, theme };
    }
  }

  return result;
}

/**
 * Add a `group` (the main token name) to each state, `on-*`, and `*-subtle`
 * color token that does not define one, e.g. `border-active` → `border`.
 */
function addColorTokenGroups(
  group: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...group };
  for (const [name, token] of Object.entries(group)) {
    const root = colorTokenRoot(name);
    if (root !== name && isTokenNode(token) && !("group" in token)) {
      result[name] = { ...token, group: root };
    }
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

  if (key?.startsWith(`${COLOR_STATE_GROUP_KEY}-`)) {
    return addColorTokenGroups(
      addColorStateTokens(
        result,
        tree,
        SURFACE_COLOR_STATE_VARIANTS,
        undefined,
        parentTheme
      )
    );
  }

  let withStates =
    key === "color"
      ? addMissingStatusCompanionTokens(
          addBaseThemeAliases(result),
          tree,
          parentTheme
        )
      : result;
  for (const [tokenKey, variants] of Object.entries(COLOR_STATE_VARIANTS)) {
    if (isTokenNode(withStates[tokenKey])) {
      withStates = addColorStateTokens(
        withStates,
        tree,
        variants,
        tokenKey,
        parentTheme
      );
    }
  }

  return key === "color"
    ? addColorTokenGroups(addColorTokenThemes(withStates))
    : withStates;
}

/**
 * Style Dictionary preprocessor: rewrite color `$value`s (and nested shadow
 * colors) to hex so generators emit `#rrggbb` / `#rrggbbaa` instead of
 * `oklch()`. Primary and secondary colors are first copied into the `base`
 * theme as `base` / `base-subtle`; primary, secondary, and tertiary themselves
 * stay in the root light and dark themes without rings or states. For `base`
 * and each status color, missing `on-*-accent` text (Tamagui `onAccent`; any
 * `on-*` color is renamed to it), `*-subtle` background, and `on-*-subtle`
 * text colors are generated next, along with a `*-accent` alias (Tamagui
 * `accent`), then active, inactive, and disabled variants are added to the
 * surface colors, border, and each theme color and its `*-subtle` color.
 * Low-saturation colors derive their states from the parent theme's contrast
 * primitive (surfaces use a subtler shift of their own lightness, and active
 * colors already near that primitive shift toward the middle); saturated
 * colors scale their own lightness. Theme colors get their name as theme,
 * unless one is already set. State, `on-*`, and `*-subtle` color tokens also
 * get their main token name as `group` (e.g. `border-active` → `border`).
 * Finally, focus rings are generated for `base` and each status color.
 */
function tamaguiPreprocessor(
  dictionary: PreprocessedTokens
): PreprocessedTokens {
  const converted = walk(dictionary) as PreprocessedTokens;
  const withStateVariants = injectColorStateVariants(
    converted,
    converted,
    undefined,
    parentThemeFromDictionary(converted)
  ) as PreprocessedTokens;
  const withRings = addMissingRingTokens(withStateVariants);

  return applyRingOpacity(withRings, withRings) as PreprocessedTokens;
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
