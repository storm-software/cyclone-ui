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

import type { TailwindConfig } from "react-email";
import { pixelBasedPreset } from "react-email";

/** The color mode, matching the `light` and `dark` Cyclone UI themes. */
export type EmailMode = "light" | "dark";

/** The Cyclone UI color theme a component is rendered in. */
export type EmailTheme =
  "base" | "brand" | "danger" | "warning" | "info" | "success" | "discovery";

// Resolved hex values of `packages/tokens/src/js/tokens-{light,dark}.js`.
// Email clients can't read CSS variables or oklch, so the generated tokens are
// copied here; `theme.test.ts` fails when they drift.
const light = {
  emphasis: "#242528",
  ink: "#555659",
  subtle: "#959698",
  subtlest: "#b0b0b1",
  outline: "#c0c0c1",
  hairline: "#d0d0d1",
  sunken: "#e1e1e1",
  canvas: "#eaeaea",
  surface: "#f1f1f1",
  elevated: "#fafafa",
  floating: "#ffffff",
  "base-primary": "#1f1f21",
  "base-on-primary": "#fafafa",
  "base-secondary": "#b0b0b1",
  "base-on-secondary": "#fafafa",
  "base-link": "#0084d1",
  "brand-primary": "#1fb2a6",
  "brand-on-primary": "#fafafa",
  "brand-secondary": "#d6fff9",
  "brand-on-secondary": "#005a53",
  "brand-link": "#1fb2a6",
  "danger-primary": "#8e223e",
  "danger-on-primary": "#fafafa",
  "danger-secondary": "#f17d91",
  "danger-on-secondary": "#200006",
  "danger-link": "#8e223e",
  "warning-primary": "#765417",
  "warning-on-primary": "#fafafa",
  "warning-secondary": "#caa46b",
  "warning-on-secondary": "#241500",
  "warning-link": "#765417",
  "info-primary": "#2055b3",
  "info-on-primary": "#fafafa",
  "info-secondary": "#6da2ff",
  "info-on-secondary": "#fafafa",
  "info-link": "#2055b3",
  "success-primary": "#216b53",
  "success-on-primary": "#fafafa",
  "success-secondary": "#74ba9f",
  "success-on-secondary": "#002015",
  "success-link": "#216b53",
  "discovery-primary": "#594395",
  "discovery-on-primary": "#fafafa",
  "discovery-secondary": "#a690e1",
  "discovery-on-secondary": "#fafafa",
  "discovery-link": "#594395"
};

const dark: typeof light = {
  emphasis: "#f1f1f1",
  ink: "#b0b0b1",
  subtle: "#959698",
  subtlest: "#555659",
  outline: "#46464a",
  hairline: "#2d2e33",
  sunken: "#0c0c0d",
  canvas: "#151518",
  surface: "#1f1f21",
  elevated: "#242528",
  floating: "#292a2e",
  "base-primary": "#ffffff",
  "base-on-primary": "#151518",
  "base-secondary": "#555659",
  "base-on-secondary": "#fafafa",
  "base-link": "#00bcff",
  "brand-primary": "#3be4be",
  "brand-on-primary": "#151518",
  "brand-secondary": "#00604d",
  "brand-on-secondary": "#ffffff",
  "brand-link": "#3be4be",
  "danger-primary": "#cf2d56",
  "danger-on-primary": "#fafafa",
  "danger-secondary": "#5d001e",
  "danger-on-secondary": "#ffa6b0",
  "danger-link": "#cf2d56",
  "warning-primary": "#f7ac23",
  "warning-on-primary": "#151518",
  "warning-secondary": "#c58c22",
  "warning-on-secondary": "#fafafa",
  "warning-link": "#f7ac23",
  "info-primary": "#4d8eff",
  "info-on-primary": "#fafafa",
  "info-secondary": "#19438c",
  "info-on-secondary": "#fafafa",
  "info-link": "#4d8eff",
  "success-primary": "#45c791",
  "success-on-primary": "#fafafa",
  "success-secondary": "#006140",
  "success-on-secondary": "#ffffff",
  "success-link": "#45c791",
  "discovery-primary": "#9277da",
  "discovery-on-primary": "#fafafa",
  "discovery-secondary": "#362661",
  "discovery-on-secondary": "#fafafa",
  "discovery-link": "#9277da"
};

export const palettes: Record<EmailMode, typeof light> = { light, dark };

/**
 * The Cyclone UI font size steps, each with the `line-height.<step>` token
 * (`xxs` has none, so it borrows the `xs` leading).
 */
const fontSize = {
  xxs: ["12px", { lineHeight: "1.2" }],
  xs: ["14px", { lineHeight: "1.2" }],
  sm: ["16px", { lineHeight: "1.285714" }],
  md: ["18px", { lineHeight: "1.35" }],
  lg: ["20px", { lineHeight: "1.4" }],
  xl: ["24px", { lineHeight: "1.26" }],
  "2xl": ["30px", { lineHeight: "1.2" }],
  "3xl": ["36px", { lineHeight: "1.08" }],
  "4xl": ["48px", { lineHeight: "1" }],
  "5xl": ["60px", { lineHeight: "0.9" }]
} satisfies Record<string, [string, { lineHeight: string }]>;

const sans = ['"Storm Sans"', "Helvetica", "Arial", "sans-serif"];

/** Join the truthy class names. */
export const cx = (...classNames: (string | false | null | undefined)[]) =>
  classNames.filter(Boolean).join(" ");

/**
 * Build the `<Tailwind>` config for a color mode. Colors replace Tailwind's
 * defaults so only color tokens can be used.
 *
 * In class names, give a line height with the size (`text-5xl/[1.2375]`):
 * the inliner resolves a `text-*` line height before a separate `leading-*`.
 */
export const getTailwindConfig = (mode: EmailMode): TailwindConfig => ({
  presets: [pixelBasedPreset],
  theme: {
    colors: { transparent: "transparent", ...palettes[mode] },
    extend: {
      // In `extend`, as the preset's own `extend.fontSize` would win otherwise
      fontSize,
      fontFamily: {
        display: sans,
        body: sans,
        editorial: ['"Storm Serif"', "Georgia", "serif"],
        code: ['"Google Sans Code"', "ui-monospace", "Menlo", "monospace"]
      }
    }
  }
});
