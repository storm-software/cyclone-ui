---
title: "Storm Serif"
description: "Storm Serif is the serif font for Cyclone UI editorial headings. Includes character set, sizes, weights, optical size axis, styles, files, and usage."
documentType: reference
tags: [fonts, typography, serif]
---

# Storm Serif

<div style="font-family: 'Storm Serif', Georgia, serif; font-size: 72px; line-height: 1.1; font-weight: 500;">Storm Serif</div>
<div style="font-family: 'Storm Serif', Georgia, serif; font-size: 24px; line-height: 1.3;">Sphinx of black quartz, judge my vow.</div>

> The samples on this page use the CSS `font-family` value `'Storm Serif'`. They show the font only when the font is installed or loaded on your device. Otherwise the browser shows a fallback font. See [Use the font](#use-the-font).

## Summary

Storm Serif is the serif font of Cyclone UI. The `editorial` typography role uses it. `HeadingText` uses that role for the larger levels of its `editorial` variant. The smallest levels use Storm Sans for legibility. See [Typography tokens](../tokens/typography.md#editorial).

The font is an experimental derivative of Newsreader by Production Type (SIL Open Font License 1.1). It is not Anthropic Serif. Anthropic and BSPK do not endorse or support it. The changes from Newsreader are (from the [source README](../../../fonts/storm-serif/README.md)):

- A larger x-height.
- Lower contrast at large display sizes.
- Slightly heavier text weights.
- A calmer italic, with a slant of 13.5° instead of 17°.
- A flag-terminal `r` in the upright style.

The family has seven weights from 200 to 800 and an italic style for each. It has an optical size axis from 6 to 72. See [`OFL.txt`](../../../fonts/storm-serif/OFL.txt) for the license.

## Character sets

<div style="font-family: 'Storm Serif', Georgia, serif; font-size: 40px; line-height: 1.3;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789 .!@#$%^&*()</div>

This page does not list the full character coverage. The README says that the font keeps the glyph coverage of Newsreader. The font source has no coverage table to check this.

The source folder [`features`](../../../fonts/storm-serif/features) has OpenType feature files for case, ligatures, localized forms, ordinals, proportional numbers, superscripts, and tabular numbers.

## Sizes

<div style="font-family: 'Storm Serif', Georgia, serif; line-height: 1.3;">
<div style="font-size: 12px;">12px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 14px;">14px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 16px;">16px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 18px;">18px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 24px;">24px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 32px;">32px. The quick brown fox jumps over the lazy dog.</div>
<div style="font-size: 48px;">48px. The quick brown fox jumps.</div>
<div style="font-size: 72px;">72px. Quick fox.</div>
</div>

In components, use the [font size tokens](../tokens/typography.md#font-sizes).

### Optical size

The variable font has an optical size axis `opsz` from 6 to 72. The default is 18. The browser sets `opsz` from the font size when `font-optical-sizing` is `auto`. The static files are cut at `opsz` 16.

## Weights

The family has these faces. The weight is the CSS `font-weight` value.

| Face | Weight | Sample |
| --- | --- | --- |
| ExtraLight | 200 | <span style="font-family: 'Storm Serif', Georgia, serif; font-weight: 200; font-size: 24px;">Sphinx of black quartz</span> |
| Light | 300 | <span style="font-family: 'Storm Serif', Georgia, serif; font-weight: 300; font-size: 24px;">Sphinx of black quartz</span> |
| Regular | 400 | <span style="font-family: 'Storm Serif', Georgia, serif; font-weight: 400; font-size: 24px;">Sphinx of black quartz</span> |
| Medium | 500 | <span style="font-family: 'Storm Serif', Georgia, serif; font-weight: 500; font-size: 24px;">Sphinx of black quartz</span> |
| SemiBold | 600 | <span style="font-family: 'Storm Serif', Georgia, serif; font-weight: 600; font-size: 24px;">Sphinx of black quartz</span> |
| Bold | 700 | <span style="font-family: 'Storm Serif', Georgia, serif; font-weight: 700; font-size: 24px;">Sphinx of black quartz</span> |
| ExtraBold | 800 | <span style="font-family: 'Storm Serif', Georgia, serif; font-weight: 800; font-size: 24px;">Sphinx of black quartz</span> |

The variable font covers the weight axis `wght` from 200 to 800. The family has no face below 200 or above 800. The [weight tokens](../tokens/typography.md#font-weights) go from 100 to 900.

## Styles

| Style | Sample |
| --- | --- |
| Normal | <span style="font-family: 'Storm Serif', Georgia, serif; font-style: normal; font-size: 24px;">Sphinx of black quartz, judge my vow.</span> |
| Italic | <span style="font-family: 'Storm Serif', Georgia, serif; font-style: italic; font-size: 24px;">Sphinx of black quartz, judge my vow.</span> |

Each weight has an italic face. The family has no oblique style.

## Files

Build output is in [`fonts/storm-serif/dist`](../../../fonts/storm-serif/dist). The static file name is the face name. The italic file adds `Italic`, for example `SemiBoldItalic`. The regular italic is `Italic`.

| Format | Folder | Files |
| --- | --- | --- |
| OpenType (static) | `dist/otf` | 14 files: 7 faces in normal and italic style. |
| TrueType (static) | `dist/ttf` | 14 files: 7 faces in normal and italic style. |
| TrueType (variable) | `dist/ttf` | `Variable.ttf` and `Italic-Variable.ttf`. |
| WOFF2 | `dist/webfonts` | One file for each TrueType file (16 files). |
| Map glyphs | `dist/pbf` | Glyph ranges for MapLibre map labels. |

The `dist` folder is build output. Build the font to create it.

## Use the font

Load the font with [`fonts/fonts.css`](../../../fonts/fonts.css). It declares `Storm Sans` and `Storm Serif` from the variable font files, with weight range 200 to 800 for Storm Serif.

```ts
import "@fonts/fonts.css";
```

Then set the family:

```css
.article-title {
  font-family: "Storm Serif", Georgia, Cambria, "Times New Roman", Times, serif;
}
```

In a component, choose a typography role instead of the family name:

```ts
fontFamily: "editorial",
```

The `fontFamily: "display"` example in `components/button/src/Button.tsx` shows the same pattern for the `display` role.

The generated token CSS files also declare `Storm Serif` with `@font-face` rules. Those rules load static OpenType and TrueType files from `https://public.storm-cdn.com/fonts`.

## Build the font

The Nx project is `fonts-storm-serif`. The build needs `fontmake` and the other tools that `devenv shell` provides.

```bash
devenv shell -- pnpm nx run fonts-storm-serif:build
```

## Related pages

- [Storm Sans](./storm-sans.md)
- [Typography tokens](../tokens/typography.md)
- [Fonts overview](./index.md)
