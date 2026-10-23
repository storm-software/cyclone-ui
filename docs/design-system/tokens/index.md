---
title: "Design tokens"
description: "How Cyclone UI defines design tokens, where the source of truth is, and how to use tokens in CSS and Tamagui."
documentType: concept
tags: [tokens, themes, css, tamagui]
---

# Design tokens

Design tokens are the named values behind Cyclone UI: colors, type, spacing, radius, shadows, and motion. A token has one name. Each theme can give it a different value.

## Token groups

| Page | What it lists |
| --- | --- |
| [Color palettes](./colors.md) | Raw colors: `black`, `white`, and 8 ordered palettes. |
| [Semantic colors](./semantic-colors.md) | Roles such as `ink`, `surface`, `primary`, and `danger`, in light and dark. |
| [Color states](./color-states.md) | Generated `hovered`, `active`, `inactive`, and `disabled` colors. |
| [Typography](./typography.md) | Font roles, sizes, line heights, weights, and letter spacing. |
| [Sizes](./sizes.md) | The size scale. |
| [Spacing](./spacing.md) | The spacing scale. |
| [Shape and effects](./shape-and-effects.md) | Radius, shadows, blur, focus rings, and z-index. |
| [Motion](./motion.md) | Durations and easing curves. |

## Primitive and semantic tokens

Cyclone UI has two token layers.

- **Primitive tokens** are raw scales. Example: `color.blue.4` or `spacing.4xl`. They are in [`primitives/tokens.json`](../../../packages/tokens/src/tokens/primitives/tokens.json).
- **Semantic tokens** name a purpose and point to a primitive. Example: `color.ink` points to `color.neutral.10` in the light theme. They are in [`semantic/`](../../../packages/tokens/src/tokens/semantic/).

Choose a semantic token first. Use a primitive token only when no semantic token fits.

| Semantic file | Contents |
| --- | --- |
| [`semantic/tokens.json`](../../../packages/tokens/src/tokens/semantic/tokens.json) | Typography roles and semantic border radius. The same in every theme. |
| [`semantic/light.tokens.json`](../../../packages/tokens/src/tokens/semantic/light.tokens.json) | Semantic colors for the light theme. |
| [`semantic/dark.tokens.json`](../../../packages/tokens/src/tokens/semantic/dark.tokens.json) | Semantic colors for the dark theme. |

## Source of truth

Edit the token JSON files. Do not edit generated files.

1. [`razorwind.config.ts`](../../../razorwind.config.ts) sets `tokensPath` to `packages/tokens/src/tokens/**/*.json`.
2. The Razorwind plugins in that config generate the outputs. The theme builder in [`packages/theme-builder`](../../../packages/theme-builder/src/preprocessor.ts) first adds the generated color states.
3. The outputs are CSS files, JavaScript files, and a Tamagui config.

| Output | Path |
| --- | --- |
| CSS variables | `packages/tokens/src/css/tokens-<theme>.css` |
| JavaScript values | `packages/tokens/src/js/tokens-<theme>.js` |
| Tamagui config | `packages/tokens/src/tamagui/config.ts` |
| Theme documentation | `docs/themes/` |

To change a token, edit the JSON file or `razorwind.config.ts`. Then run:

```bash
pnpm nx run monorepo:generate-themes
```

## Themes

The generated CSS has one file for each of six themes:

- `tokens-light.css`, `tokens-light-dimmed.css`, `tokens-light-high-contrast.css`
- `tokens-dark.css`, `tokens-dark-dimmed.css`, `tokens-dark-high-contrast.css`

This repository has source files only for `light` and `dark`. The four other themes come from the Razorwind tooling. Their rules are not in this repository, so these docs list only the values of `light` and `dark`.

Each CSS file sets its variables on `:root`. Load the file for the theme you want. All variables use the prefix `--storm-`.

## Use tokens

### CSS

Package export: `@cyclone-ui/tokens/css/*.css`. The export map points to `dist/css`. A checkout has no `dist` folder until you build the package. The source files are in `packages/tokens/src/css`.

```css
.card {
  padding: var(--storm-spacing-4xl);
  border-radius: var(--storm-border-radius-card);
  background: var(--storm-color-surface);
  color: var(--storm-color-ink);
  font: var(--storm-typography-body);
}
```

### Tamagui

The package also exports a Tamagui config at `@cyclone-ui/tokens/tamagui`. Tamagui style props use token names without a `$` prefix. This example comes from `components/button/src/Button.tsx`:

```ts
fontFamily: "display",
fontSize: "sm",
color: "primary",
```

The config has the themes `light` and `dark`. Each one has the child themes `base`, `brand`, `danger`, `discovery`, `info`, `success`, and `warning`, for example `dark_danger`.

### JSON

The package exports the token JSON files at `@cyclone-ui/tokens/tokens/semantic/*.json` and `@cyclone-ui/tokens/tokens/primitive/*.json`. Check the built output before you rely on these paths. The `primitive` path in the export map does not match the source folder name `primitives`.

## Known gaps

- The token JSON files contain some descriptions with stale numbers. For example, some semantic radius descriptions give a different pixel value than their `$value` reference. These docs use the resolved `$value`.
- [`tokens.spec.ts`](../../../packages/tokens/src/tokens/primitives/tokens.spec.ts) describes twelve-step palettes. The current palettes have 9 steps (16 for `neutral`).

## Related pages

- [Fonts](../fonts/index.md)
- [Icons](../icons/index.md)
- [Design system overview](../index.md)
