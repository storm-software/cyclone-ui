---
title: "@cyclone-ui/shiki"
description: Reference for the Cyclone UI Shiki themes. Six JSON themes color code blocks with the Cyclone UI design tokens.
documentType: reference
tags: [shiki, themes, syntax-highlighting]
---

# @cyclone-ui/shiki

`@cyclone-ui/shiki` ships six [Shiki](https://shiki.style) themes. They match the Cyclone UI light, dark, dimmed, and high-contrast themes. The package contains JSON files only. It has no JavaScript code.

Razorwind generates the theme files from the design tokens. The mapping is in `razorwind.config.ts`. Do not edit the JSON files by hand. To change a color, edit the token JSON files in `packages/tokens/src/tokens`, then run `pnpm nx run monorepo:generate-themes`.

Source: [`packages/shiki`](https://github.com/storm-software/cyclone-ui/tree/main/packages/shiki)

## Install

```bash
pnpm add shiki @cyclone-ui/shiki
```

`shiki` is not a dependency of this package. Install it in your own project.

## Themes

| Import path | Theme id (`name`) | Type |
| --- | --- | --- |
| `@cyclone-ui/shiki/light/theme.json` | `cyclone-light` | `light` |
| `@cyclone-ui/shiki/light-dimmed/theme.json` | `cyclone-light-dimmed` | `lightDimmed` |
| `@cyclone-ui/shiki/light-high-contrast/theme.json` | `cyclone-light-high-contrast` | `lightHighContrast` |
| `@cyclone-ui/shiki/dark/theme.json` | `cyclone-dark` | `dark` |
| `@cyclone-ui/shiki/dark-dimmed/theme.json` | `cyclone-dark-dimmed` | `darkDimmed` |
| `@cyclone-ui/shiki/dark-high-contrast/theme.json` | `cyclone-dark-high-contrast` | `darkHighContrast` |

The export map is `./*/theme.json` to `./dist/*/theme.json`. The build copies `src` to `dist`.

## Quick start

Register a theme when you create the highlighter. Then pass the theme id to `codeToHtml`.

```ts
import { createHighlighter } from "shiki";
import theme from "@cyclone-ui/shiki/dark/theme.json" with { type: "json" };

const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["javascript"]
});

const html = highlighter.codeToHtml("const x = 1", {
  lang: "javascript",
  theme: "cyclone-dark"
});
```

Your bundler must support JSON imports. If it does not, read the file and pass the parsed JSON to `highlighter.loadTheme`.

## Theme file format

Each `theme.json` has these keys: `name`, `displayName`, `type`, `fg`, `bg`, `colors`, and `settings`. The `settings` list maps TextMate scopes to a foreground color and an optional font style.

## Build

```bash
pnpm nx build shiki
```

The `build` target runs `cp -r packages/shiki/src packages/shiki/dist`.

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/theme-builder](./theme-builder.md)
- [Design tokens](../design-system/tokens/index.md)
