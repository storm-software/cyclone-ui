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

1. `tamaguiPlugin` from `@tamagui/vite-plugin`. It aliases `react-native` to `react-native-web`, resolves `.web.*` files, pre-bundles packages that share React context, and runs the Tamagui compiler.
2. A plugin named `cyclone-ui` that defines `process.env.TAMAGUI_TARGET` as `"web"`. Cyclone components read that value to render web-only styles. The Tamagui plugin defines it only while it evaluates its own config.

Defaults passed to `tamaguiPlugin`:

| Option | Default |
| --- | --- |
| `config` | `"@cyclone-ui/tokens/tamagui"` |
| `components` | `["@tamagui/core"]` |

`options` is `TamaguiVitePluginOptions`. It is spread after the defaults, so your values win. Pass your own `config` when the app builds tokens with Razorwind. Pass `disableExtraction: true` to keep styles at runtime.

A `tamagui.build.ts` file in the project root still takes precedence over these options.

## Build

```bash
pnpm nx run vite:build
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/tokens](./tokens.md)
- [@cyclone-ui/state](./state.md)
- [@cyclone-ui/nextjs](./nextjs.md)
