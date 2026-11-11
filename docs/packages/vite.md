---
title: "@cyclone-ui/vite"
description: Reference for the Vite plugin that sets up Tamagui and Cyclone UI components.
documentType: reference
tags: [vite, tamagui, setup]
---

# @cyclone-ui/vite

`@cyclone-ui/vite` exports `cycloneUI()`, a Vite plugin that sets up Tamagui and Cyclone UI components. It wraps `@tamagui/vite-plugin` with the Cyclone UI Tamagui config.

The package is ESM only. The export map points at `./dist/index.mjs`.

Source: [`packages/vite`](https://github.com/storm-software/cyclone-ui/tree/main/packages/vite)

## Install

```bash
pnpm add -D @cyclone-ui/vite
pnpm add @cyclone-ui/state @cyclone-ui/tokens @tamagui/core jotai react-native-web
```

Peer dependencies are `@cyclone-ui/tokens`, `react-native-web`, and `vite`. The plugin depends on `@tamagui/vite-plugin`.

Use `"type": "module"` in the app `package.json`, or name the config `vite.config.mts`.

The package version in this repository is `0.0.1`. Confirm the registry before you install a published version.

## Quick start

```ts
import { cycloneUI } from "@cyclone-ui/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), cycloneUI()]
});
```

Wrap the tree in the Cyclone theme provider. This package does not export that provider.

```tsx
import { ThemeProvider } from "@cyclone-ui/state/theme";
import { config } from "@cyclone-ui/tokens/tamagui";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider config={config} disableInjectCSS={false}>
    <App />
  </ThemeProvider>
);
```

## What the plugin does

`cycloneUI(options)` returns two Vite plugins.

1. The plugins from `@tamagui/vite-plugin` (`createTamaguiPlugins`). They alias `react-native` to `react-native-web`, resolve `.web.*` files, pre-bundle packages that share React context, and run the Tamagui compiler.
2. A plugin named `cyclone-ui` that defines `process.env.TAMAGUI_TARGET` as `"web"`. Cyclone components read that value to render web-only styles. The Tamagui plugin defines it only while it evaluates its own config.

Defaults passed to `@tamagui/vite-plugin`:

| Option | Default |
| --- | --- |
| `config` | `"@cyclone-ui/tokens/tamagui"` |
| `components` | `["@tamagui/core"]` |

`options` is `TamaguiVitePluginOptions` plus `tokens` and `tailwind`. It is spread after the defaults, so your values win. Pass `disableExtraction: true` to keep styles at runtime.

A `tamagui.build.ts` file in the project root still takes precedence over these options.

## Tailwind CSS

`tailwind: true` sets the app up for Tailwind CSS v4 classes next to Cyclone UI components:

```ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), cycloneUI({ tailwind: true })]
});
```

- It defines `process.env.TAMAGUI_CSS_LAYER` as `"tamagui"` and wraps CSS from the Tamagui compiler and `@tamagui/core/reset.css` in `@layer tamagui`.
- It adds `<style data-precedence="default">@layer theme, base, tamagui, components, utilities;</style>` at the top of `index.html`. The `data-precedence` attribute keeps React from placing Tamagui's provider stylesheet ahead of it. Tailwind utilities passed as `className` then override component styles, and Tailwind's preflight doesn't.
- It adds `@tamagui/tailwind` to `components` when the app depends on it, so the compiler extracts those components too.
- With `tokens`, it also writes `.cyclone-ui/tailwind.css` from the generated config. This needs Node.js 22.18 or later.

Import the Cyclone theme before Tailwind in the app stylesheet: `@import "@cyclone-ui/tokens/tailwind.css";` (or `../.cyclone-ui/tailwind.css` with `tokens`), then `@import "tailwindcss";`. See [Use Tailwind CSS with Cyclone UI](./guides/tailwind.md).

## Custom design tokens

`tokens` builds the Tamagui config from the app's own design tokens: a DTCG token object, or token file paths or globs relative to the Vite root.

```ts
cycloneUI({ tokens: "tokens/**/*.json" });
```

- Files with a theme name (`light.tokens.json`, `dark.tokens.json`, …) become the `light` and `dark` themes.
- The tokens go through the same Cyclone preprocessor and generator as `@cyclone-ui/tokens`. A `razorwind.config.ts` in the project still applies (fonts, extract plugins), but its generators don't run.
- The `cyclone-ui` plugin writes the config to `.cyclone-ui/tamagui.config.ts` in its `config` hook. Add `.cyclone-ui` to `.gitignore`.
- `@cyclone-ui/tokens/tamagui` is aliased to the generated file, and the Tamagui compiler loads it, so app code importing `config` from `@cyclone-ui/tokens/tamagui` gets the custom config.
- The generated config takes its media, shorthands, settings, and animations from `@cyclone-ui/tokens/tamagui-defaults`.
- Token changes need a Vite restart.

## Build

```bash
pnpm nx run vite:build
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/tokens](./tokens.md)
- [@cyclone-ui/state](./state.md)
- [@cyclone-ui/nextjs](./nextjs.md)
- [Use Tailwind CSS with Cyclone UI](./guides/tailwind.md)
