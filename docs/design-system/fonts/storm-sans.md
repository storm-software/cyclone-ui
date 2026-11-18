---
title: "Storm Sans"
description: "Storm Sans is the sans-serif font for Cyclone UI headings, labels, and body text. Includes character set, sizes, weights, styles, files, and usage."
documentType: reference
tags: [fonts, typography, sans-serif]
---

# Storm Sans

<div style="font-family: 'Storm Sans', system-ui, sans-serif; font-size: 72px; line-height: 1.1; font-weight: 700;">Storm Sans</div>
<div style="font-family: 'Storm Sans', system-ui, sans-serif; font-size: 24px; line-height: 1.3;">Sphinx of black quartz, judge my vow.</div>

> The samples on this page use the CSS `font-family` value `'Storm Sans'`. They show the font only when the font is installed or loaded on your device. Otherwise the browser shows a fallback font. See [Use the font](#use-the-font).

## Summary

Storm Sans is the default UI font of Cyclone UI. Three typography roles use it: `display` for headings, labels, and buttons; `body` for running text; and `caption` for supporting text in italic. See [Typography tokens](../tokens/typography.md#typography-roles).

The font is an experimental derivative of IBM Plex Sans. It is not HashiCorp Sans. HashiCorp does not endorse or support it. The font keeps the double-story `a` and `g` of IBM Plex Sans and adds these changes (from the [source README](../../../fonts/storm-sans/README.md)):

- Wide horizontal bridges on `K`, `V`, and `W`.
- Slab details on `i` and `l`, inspired by monospace fonts.
- Stronger contrast at joins, with ink-trap-like pinches.
- Angled terminals on `c`, `e`, and `S`.

The family has eight weights from 100 to 700 (see [Weights](#weights)) and an italic style for each. It is licensed under the SIL Open Font License 1.1. See [`OFL.txt`](../../../fonts/storm-sans/OFL.txt).

## Character sets

<div style="font-family: 'Storm Sans', system-ui, sans-serif; font-size: 40px; line-height: 1.3;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789 .!@#$%^&*()</div>

This page does not list the full character coverage. The font source has no glyph coverage table.

## Sizes

<div style="font-family: 'Storm Sans', system-ui, sans-serif; line-height: 1.3;">
<div style="font-size: 12px;">12px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 14px;">14px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 16px;">16px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 18px;">18px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 24px;">24px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 32px;">32px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 48px;">48px. The quick brown fox jumps.</div>
<div style="font-size: 72px;">72px. Quick fox.</div>
</div>

In components, use the [font size tokens](../tokens/typography.md#font-sizes). They go from `xxs` (0.75rem) to `15xl` (24rem).

## Weights

The family has these faces. The weight is the CSS `font-weight` value.

| Face | Weight | Sample |
| --- | --- | --- |
| Thin | 100 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 100; font-size: 24px;">Sphinx of black quartz</span> |
| ExtraLight | 200 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 200; font-size: 24px;">Sphinx of black quartz</span> |
| Light | 300 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 300; font-size: 24px;">Sphinx of black quartz</span> |
| Regular | 400 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 400; font-size: 24px;">Sphinx of black quartz</span> |
| Text | 450 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 450; font-size: 24px;">Sphinx of black quartz</span> |
| Medium | 500 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 500; font-size: 24px;">Sphinx of black quartz</span> |
| SemiBold | 600 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 600; font-size: 24px;">Sphinx of black quartz</span> |
| Bold | 700 | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-weight: 700; font-size: 24px;">Sphinx of black quartz</span> |

The variable font covers the weight axis `wght` from 100 to 700. The [weight tokens](../tokens/typography.md#font-weights) go up to 900. The family has no face above 700.

## Styles

| Style | Sample |
| --- | --- |
| Normal | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-style: normal; font-size: 24px;">Sphinx of black quartz, judge my vow.</span> |
| Italic | <span style="font-family: 'Storm Sans', system-ui, sans-serif; font-style: italic; font-size: 24px;">Sphinx of black quartz, judge my vow.</span> |

Each weight has an italic face. The family has no oblique style. The `caption` typography role uses the italic style.

## Files

Build output is in [`fonts/storm-sans/dist`](../../../fonts/storm-sans/dist). The static file name is the face name. The italic file adds `Italic`, for example `SemiBoldItalic`. The regular italic is `Italic`.

| Format | Folder | Files |
| --- | --- | --- |
| OpenType (static) | `dist/otf` | 16 files: 8 faces in normal and italic style. |
| TrueType (static) | `dist/ttf` | 16 files: 8 faces in normal and italic style. |
| TrueType (variable) | `dist/ttf` | `Variable.ttf` and `Italic-Variable.ttf`. |
| WOFF2 | `dist/webfonts` | One file for each TrueType file (18 files). |
| Map glyphs | `dist/pbf` | Glyph ranges for MapLibre map labels. |

The `dist` folder is build output. Build the font to create it.

## Use the font

Load the font with [`fonts/fonts.css`](../../../fonts/fonts.css). It declares `Storm Sans` and `Storm Serif` from the variable font files, with weight range 100 to 700 for Storm Sans.

```ts
import "@fonts/fonts.css";
```

Then set the family:

```css
body {
  font-family: "Storm Sans", -apple-system, BlinkMacSystemFont, system-ui,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

In a component, choose a typography role instead of the family name. This example comes from `components/button/src/Button.tsx`:

```ts
fontFamily: "display",
```

The generated token CSS files also declare `Storm Sans` with `@font-face` rules. Those rules load static OpenType and TrueType files from `https://public.storm-cdn.com/fonts`.

## Build the font

The Nx project is `fonts-storm-sans`. The build needs `fontmake`, `fonttools`, `ttfautohint`, and `font-maker`. The `devenv shell` provides them.

```bash
devenv shell -- pnpm nx run fonts-storm-sans:build
```

## Related pages

- [Storm Serif](./storm-serif.md)
- [Typography tokens](../tokens/typography.md)
- [Fonts overview](./index.md)
