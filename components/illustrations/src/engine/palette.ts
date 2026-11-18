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

/*
 * The palette: five Cyclone UI theme tokens and the classes that use them.
 * Adapted from Hairline's `src/core/styles.ts`
 * (https://github.com/lucasmarkes/hairline, © 2026 Lucas Marques, MIT License),
 * with Hairline's fixed greys replaced by Cyclone UI design tokens.
 */

import type { IllustrationDefinition } from "./stage";
import { markup, mountIllustration, settle, SVG_NS } from "./stage";

/**
 * The five colours of an illustration: the plate fill (the ground), the one
 * bright highlight, the silhouette, the default stroke and the dim crease.
 */
export type PaletteKey = "plate" | "hi" | "edge" | "mid" | "lo";
export type PaletteMode = "light" | "dark";
export const PALETTE_KEYS: readonly PaletteKey[] = [
  "plate",
  "hi",
  "edge",
  "mid",
  "lo"
];

/**
 * The Cyclone UI theme token that paints each colour. The plate is the page
 * (`canvas`) and the highlight is the theme's accent (`primary`, so a
 * `success` theme lights it green). The three greys step away from the plate
 * the same distance in both schemes, so they use the neutral scale where no
 * semantic token sits at that step.
 */
export const PALETTE_TOKENS: Record<PaletteMode, Record<PaletteKey, string>> = {
  light: {
    plate: "canvas",
    hi: "primary",
    edge: "subtle",
    mid: "neutral7",
    lo: "hairline"
  },
  dark: {
    plate: "canvas",
    hi: "primary",
    edge: "neutral10",
    mid: "hairline",
    lo: "neutral12"
  }
};

/** Each token's value in Cyclone UI's default `light_base` and `dark_base` themes, used where a page defines no tokens. */
export const PALETTE_FALLBACKS: Record<
  PaletteMode,
  Record<PaletteKey, string>
> = {
  light: {
    plate: "oklch(0.937 0 0)",
    hi: "oklch(0.2273 0.0038 286.09)",
    edge: "oklch(0.6729 0.0031 264.54)",
    mid: "oklch(0.7575 0.0014 286.37)",
    lo: "oklch(0.8579 0.0014 286.37)"
  },
  dark: {
    plate: "oklch(0.1971 0.006 285.84)",
    hi: "oklch(1 0 0)",
    edge: "oklch(0.4533 0.005 271.3)",
    mid: "oklch(0.3956 0.0067 286.09)",
    lo: "oklch(0.3022 0.0091 276.83)"
  }
};

/** The default stroke width, in screen pixels: strokes do not scale with the drawing. */
export const STROKE_WIDTH = 0.9;
export const EASE = "cubic-bezier(0.5,0,0.1,1)";
/** The CSS transition a stroke or a dot's fill takes when its class changes. */
export const TRANSITION = `stroke 260ms ${EASE}, fill 260ms ${EASE}`;

const vars = (mode: PaletteMode) =>
  PALETTE_KEYS.map(
    k =>
      `--il-${k}:var(--illustration-${k},var(--${PALETTE_TOKENS[mode][k]},${PALETTE_FALLBACKS[mode][k]}));`
  ).join("");

const SVG = ":where([data-illustration]>svg,svg[data-illustration])";

/**
 * The stylesheet for illustrations drawn with classes: the bench page and the
 * static SVG files. `auto` follows `prefers-color-scheme`, and a `t_light` /
 * `t_dark` (Tamagui) or `data-theme` ancestor; `light` and `dark` pin it. Any
 * colour can be overridden with `--illustration-<key>`, and the stroke width
 * with `--illustration-stroke`.
 */
export function css(mode: PaletteMode | "auto" = "auto") {
  const own = mode === "auto" ? "light" : mode;

  return [
    `:where([data-illustration]){display:block;position:relative;aspect-ratio:5/4;touch-action:pan-y;user-select:none;-webkit-user-select:none;--il-sw:var(--illustration-stroke,${STROKE_WIDTH});${vars(own)}}`,
    mode === "auto"
      ? `@media (prefers-color-scheme:dark){:where([data-illustration]){${vars("dark")}}}` +
        `:where(.t_light,[data-theme="light"]) :where([data-illustration]){${vars("light")}}` +
        `:where(.t_dark,[data-theme="dark"]) :where([data-illustration]){${vars("dark")}}`
      : "",
    `:where([data-illustration]:focus-visible){outline:1.5px solid var(--il-hi);outline-offset:2px}`,
    `:where([data-illustration]>svg){position:absolute;inset:0;width:100%;height:100%;display:block}`,
    `${SVG} :where(path,polygon,ellipse,line,circle){fill:var(--il-plate);stroke:var(--il-mid);stroke-width:var(--il-sw);vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round;transition:${TRANSITION}}`,
    `${SVG} :where(.nf){fill:none}`,
    `${SVG} :where(.fo){stroke:none}`,
    `${SVG} :where(.sil){stroke:var(--il-edge)}`,
    `${SVG} :where(.hi){stroke:var(--il-hi)}`,
    `${SVG} :where(.lo){stroke:var(--il-lo)}`,
    `${SVG} :where(.dash){stroke-dasharray:1 3}`,
    `${SVG} :where(.dot){stroke:none;fill:var(--il-hi)}`,
    `${SVG} :where(.dot.m){fill:var(--il-edge)}`,
    `${SVG} :where(.dot.off){fill:var(--il-lo)}`,
    `${SVG} :where(.ghost path){fill:none;stroke:var(--il-mid)}`
  ].join("");
}

/** The elements the palette paints; anything else keeps its own attributes. */
export const PAINTED = new Set([
  "path",
  "polygon",
  "ellipse",
  "line",
  "circle"
]);

export interface Paint {
  fill: string;
  stroke: string;
  strokeDasharray?: string;
}

/**
 * What the stylesheet gives an element with these classes, for a renderer
 * without CSS (React Native). The rules apply in the stylesheet's order, so a
 * later class wins as it does there. `ghost` is whether it sits in a `ghost`
 * group (a reflection).
 */
export function paint(
  tag: string,
  cls: string | undefined,
  ghost: boolean,
  colors: Record<PaletteKey, string>
): Paint | null {
  const c = new Set((cls ?? "").split(/\s+/));
  if (!PAINTED.has(tag) && !c.has("dot")) return null;
  const out: Paint = { fill: colors.plate, stroke: colors.mid };
  if (c.has("nf")) out.fill = "none";
  if (c.has("fo")) out.stroke = "none";
  if (c.has("sil")) out.stroke = colors.edge;
  if (c.has("hi")) out.stroke = colors.hi;
  if (c.has("lo")) out.stroke = colors.lo;
  if (c.has("dash")) out.strokeDasharray = "1 3";
  if (c.has("dot")) {
    out.stroke = "none";
    out.fill = c.has("off") ? colors.lo : c.has("m") ? colors.edge : colors.hi;
  }
  if (ghost && tag === "path") {
    out.fill = "none";
    out.stroke = colors.mid;
  }

  return out;
}

const esc = (s: string) => s.replace(/[&<>"]/g, c => `&#${c.charCodeAt(0)};`);

/**
 * The illustration at rest as a static SVG file: mounted with no page, every
 * motion landed, written out with its classes and the palette's stylesheet.
 * `auto` follows the colour scheme; `light` and `dark` pin it.
 */
export function snapshot(
  def: IllustrationDefinition,
  value: number,
  mode: PaletteMode | "auto" = "auto"
) {
  const run = mountIllustration(def, value, {
    idPrefix: `il-${def.name}-${mode}`
  });
  settle(run.stage);
  const label = esc(def.means);

  return (
    `<svg xmlns="${SVG_NS}" viewBox="0 0 400 320" width="400" height="320" data-illustration="${esc(def.name)}" role="img" aria-label="${label}">` +
    `<title>${label}</title><style>${css(mode)}</style>${run.svg.children
      .map(markup)
      .join("")}</svg>\n`
  );
}
