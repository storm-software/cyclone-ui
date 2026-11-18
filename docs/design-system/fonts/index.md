---
title: "Fonts"
description: "The Cyclone UI font families, Storm Sans and Storm Serif, with their roles, weights, and files."
documentType: reference
tags: [fonts, typography]
---

# Fonts

Cyclone UI has two font families. Both are open source and made in this repository.

| Family | Style | Weights | Role in the design system | Page |
| --- | --- | --- | --- | --- |
| Storm Sans | Sans-serif | 100 to 700 (8 faces, with italic) | `display`, `body`, and `caption` typography roles | [Storm Sans](./storm-sans.md) |
| Storm Serif | Serif | 200 to 800 (7 faces, with italic) | `editorial` typography role | [Storm Serif](./storm-serif.md) |

The `eyebrow` and `code` typography roles use Google Sans Code. This repository does not include that font.

## Source

| Item | Path |
| --- | --- |
| Storm Sans project | [`fonts/storm-sans`](../../../fonts/storm-sans) |
| Storm Serif project | [`fonts/storm-serif`](../../../fonts/storm-serif) |
| `@font-face` rules for web apps | [`fonts/fonts.css`](../../../fonts/fonts.css) |

Each font is an Nx project. Its source is a UFO and designspace set. The build compiles the font into OpenType, TrueType, variable TrueType, and WOFF2 files.

## Use a font

1. Build the fonts. The build needs `fontmake` (use `devenv shell`):

   ```bash
   pnpm nx run-many --target=build --projects=fonts-storm-sans,fonts-storm-serif
   ```

2. Load [`fonts/fonts.css`](../../../fonts/fonts.css) in your app.
3. Set a typography role in a component, or set the CSS `font-family` value.

Components choose a font through a typography role. The role also sets the line height. See [Typography tokens](../tokens/typography.md#typography-roles).

## Related pages

- [Typography tokens](../tokens/typography.md)
- [Design system overview](../index.md)
