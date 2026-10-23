---
title: "@cyclone-ui/tokens"
description: Reference for the package that ships the generated Tamagui configuration, CSS theme files, and token JSON files.
documentType: reference
tags: [tokens, tamagui, themes, css]
---

# @cyclone-ui/tokens

`@cyclone-ui/tokens` holds the Cyclone UI design tokens and the files generated from them. It has the Tamagui configuration, CSS theme files, and the token source files.

The token values are documented in the [design tokens section](../design-system/tokens/index.md). This page describes the package.

Source: [`packages/tokens`](https://github.com/storm-software/cyclone-ui/tree/main/packages/tokens)

> [!IMPORTANT]
> Razorwind generates most files in this package. Do not edit them by hand. Edit the token JSON files in `src/tokens`, or `razorwind.config.ts`. Then run `pnpm nx run monorepo:generate-themes`.

## Install

```bash
pnpm add @cyclone-ui/tokens
```

The package depends on `@tamagui/config`, `@tamagui/constants`, `@tamagui/core`, `@tamagui/shorthands`, and `@tamagui/theme-builder`.

## Entry points

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/tokens/tamagui` | The generated Tamagui config. It has a named export `config` and a default export. It also exports the `AppTheme` and `AppConfig` types. |
| `@cyclone-ui/tokens/storybook` | The Storybook theme (`dist/storybook/theme`) |
| `@cyclone-ui/tokens/css/*.css` | The CSS theme files |
| `@cyclone-ui/tokens/tokens/primitive/*.json` | Primitive token JSON files |
| `@cyclone-ui/tokens/tokens/semantic/*.json` | Semantic token JSON files |

> [!NOTE]
> The build config (`powerlines.config.ts`) builds only `src/tamagui/index.ts`. The `dist` folder in this checkout contains only `tamagui`. This page could not confirm how the other export paths are produced. Check the package build before you rely on them.

## Use the Tamagui config

Pass the config to `ThemeProvider` from [`@cyclone-ui/state`](./state.md), or to a Tamagui provider.

```ts
// tamagui.config.ts
export { config } from "@cyclone-ui/tokens/tamagui";
```

The generated config calls `createTamagui` with these fonts: `body`, `caption`, `code`, `display`, `editorial`, and `eyebrow`. The default font is `body`. Themes include `light` and `dark`, plus nested semantic themes.

The `storybook` app imports its config this way. See `apps/storybook/tamagui.config.ts`.

Tamagui settings come from `src/tamagui/default-config.ts`. It sets shorthands, such as `p`, `px`, `m`, `h`, and `w`. It uses the `media` queries of `@tamagui/config/v5`.

The generated file also repeats the keys of the `light_base` and `dark_base` themes on the root `light` and `dark` themes. Tamagui v3 resolves static styles against the first theme. Without this step, keys that only the `base` theme defines would not resolve.

## Use the CSS themes

The `src/css` folder has one file for each theme:

- `tokens-light.css`, `tokens-light-dimmed.css`, `tokens-light-high-contrast.css`
- `tokens-dark.css`, `tokens-dark-dimmed.css`, `tokens-dark-high-contrast.css`

Each file has `@font-face` rules for the Storm Sans and Storm Serif fonts, which load from `https://public.storm-cdn.com/fonts`. The JavaScript token files are in `src/js`.

```ts
import "@cyclone-ui/tokens/css/tokens-dark.css";
```

## Token sources

| Path | Contents |
| --- | --- |
| `src/tokens/primitives/tokens.json` | Primitive tokens. Colors use OKLCH values. |
| `src/tokens/semantic/tokens.json` | Shared semantic tokens, such as typography |
| `src/tokens/semantic/light.tokens.json` | Light semantic tokens |
| `src/tokens/semantic/dark.tokens.json` | Dark semantic tokens |

## Tests

| Test file | Checks |
| --- | --- |
| `src/tokens/primitives/tokens.spec.ts` | Primitive colors use OKLCH, one shared file holds twelve-step palettes, and dark semantic paths keep the selected color |
| `src/tamagui/config.spec.ts` | The generated config has no variable font ranges as object keys, and the tabs frame is rounder than each tab |

```bash
pnpm nx test tokens
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/theme-builder](./theme-builder.md) generates the Tamagui config.
- [@cyclone-ui/shiki](./shiki.md) uses the same tokens for code themes.
- [Design tokens](../design-system/tokens/index.md)
