---
title: "@cyclone-ui/nextjs"
description: Set up Tamagui and Cyclone UI in a Next.js app with a config wrapper and a root provider.
documentType: reference
tags: [nextjs, tamagui, setup]
---

# @cyclone-ui/nextjs

`@cyclone-ui/nextjs` sets up Tamagui and Cyclone UI components in a Next.js application. It has two entry points.

| Import | Export |
| --- | --- |
| `@cyclone-ui/nextjs` | `withCycloneUI` |
| `@cyclone-ui/nextjs/provider` | `CycloneUIProvider`, plus theme helpers from `@tamagui/next-theme` |

Source: [`packages/nextjs`](https://github.com/storm-software/cyclone-ui/tree/main/packages/nextjs)

## Install

```bash
pnpm add @cyclone-ui/nextjs @cyclone-ui/state @cyclone-ui/tokens @tamagui/core jotai react-native-web
```

Peer dependencies:

| Package | Required |
| --- | --- |
| `@cyclone-ui/state`, `@cyclone-ui/tokens`, `@tamagui/core`, `next`, `react`, `react-native-web` | Yes |
| `@tamagui/next-plugin` | Only for Webpack builds (`next build --webpack`) |
| `@tamagui/react-native-svg` | Only when the app renders SVG icons |
| `react-native` | Optional |

The package depends on `@tamagui/next-theme`.

The root README does not publish an npm release status for this package. Confirm the registry before you install a published version. In this repository the package version is `0.0.1`.

## Quick start

Wrap the Next.js config:

```ts
// next.config.ts
import { withCycloneUI } from "@cyclone-ui/nextjs";

export default withCycloneUI({
  reactStrictMode: true
});
```

Render the provider in the root layout. The provider sets a class on `<html>` before hydration, so add `suppressHydrationWarning` there.

```tsx
// app/layout.tsx
import { CycloneUIProvider } from "@cyclone-ui/nextjs/provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CycloneUIProvider>{children}</CycloneUIProvider>
      </body>
    </html>
  );
}
```

Read or change the saved theme with `useThemeSetting`:

```tsx
"use client";

import { useThemeSetting } from "@cyclone-ui/nextjs/provider";

export function ThemeToggle() {
  const theme = useThemeSetting();

  return <button onClick={theme.toggle}>Theme: {theme.current}</button>;
}
```

`useThemeMode` from `@cyclone-ui/state/theme` also returns the active mode. Change the theme through `useThemeSetting`. `useThemeActions` updates the Cyclone state only, so that choice is not saved.

## What the config wrapper does

`withCycloneUI(nextConfig, options)` returns a Next.js config.

- It adds `@cyclone-ui/helpers`, `@cyclone-ui/state`, and `@cyclone-ui/tokens` to `transpilePackages`. Your own `transpilePackages` stay.
- It sets `env.TAMAGUI_TARGET` to `"web"` unless your config already sets that key. Your `env` values are spread after the default, so they win.
- For Turbopack, it aliases `react-native` to `react-native-web` and `react-native-svg` to `@tamagui/react-native-svg`. Your `turbopack.resolveAlias` entries win.
- For Webpack, Next.js calls the `webpack` function. That function loads `@tamagui/next-plugin` from the app directory and runs `withTamagui`. Turbopack does not call it, so a Turbopack app does not need the plugin installed.

Webpack defaults passed to `withTamagui`:

| Option | Default |
| --- | --- |
| `config` | `"@cyclone-ui/tokens/tamagui"` |
| `components` | `["@tamagui/core"]` |
| `appDir` | `true` |

`options` is `Partial<WithTamaguiProps>` from `@tamagui/next-plugin`. It is forwarded after those defaults, so your values win. A `tamagui.build.ts` file in the project root overrides the plugin options.

```ts
export default withCycloneUI(nextConfig, {
  outputCSS:
    process.env.NODE_ENV === "production"
      ? "./public/tamagui.generated.css"
      : null,
  disableExtraction: process.env.NODE_ENV === "development"
});
```

Turbopack does not run the Tamagui compiler. To optimize a production build, run the Tamagui CLI before `next build`:

```json
{
  "scripts": {
    "build": "tamagui build --target web ./app -- next build"
  }
}
```

## Provider

`CycloneUIProvider` renders `NextThemeProvider` around a `TamaguiProvider` and a `<mode>_base` theme. `mode` is `light` or `dark`. It also inserts the react-native-web style sheet during server rendering.

It accepts `NextThemeProvider` props (`defaultTheme`, `forcedTheme`, `storageKey`, `enableSystem`, and the rest) plus:

| Prop | Default | Purpose |
| --- | --- | --- |
| `config` | The config from `@cyclone-ui/tokens/tamagui` | The Tamagui config. |
| `disableInjectCSS` | `false` | Skip runtime theme CSS when the app imports CSS from the Tamagui compiler (`outputCSS`). |
| `skipNextHead` | `true` | Renders the theme script inline. Set `false` in the Pages Router so the provider can use `next/script`. |

The provider re-exports `useRootTheme`, `useThemeSetting`, and the types `ColorScheme`, `ThemeProviderProps`, and `UseThemeProps`.

## Build

```bash
pnpm nx run nextjs:build
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/tokens](./tokens.md)
- [@cyclone-ui/state](./state.md)
- [@cyclone-ui/vite](./vite.md)
