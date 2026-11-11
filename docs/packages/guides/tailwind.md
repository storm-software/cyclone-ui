---
title: "Use Tailwind CSS with Cyclone UI"
description: Style Cyclone UI components and your own markup with Tailwind CSS v4 classes that use Cyclone themes and tokens.
audience: Application developer with a Vite or Next.js app that uses Tailwind CSS v4
perspective: hands-on
tags: [tailwind, vite, nextjs, tokens, themes, css]
---

# Use Tailwind CSS with Cyclone UI

**Audience:** Application developer with a Vite or Next.js app that uses Tailwind CSS v4 · **Perspective:** hands-on · **Time:** ~10 min

Without any setup, Tailwind and Cyclone UI conflict in two ways:

- **Tamagui wins every conflict.** Tamagui's CSS is not in a cascade layer, and CSS outside a layer beats every layer, including Tailwind's `utilities`. `<Card className="p-8">` keeps the card's own padding.
- **Tailwind doesn't know Cyclone names.** `bg-primary` and `p-lg` generate nothing, and `dark:` follows the operating system instead of the Cyclone theme.

The `tailwind` option of `@cyclone-ui/vite` and `@cyclone-ui/nextjs` fixes the first problem. The stylesheet `@cyclone-ui/tokens/tailwind.css` fixes the second.

## Before you start

- Tailwind CSS v4 is set up with `@tailwindcss/vite` or `@tailwindcss/postcss`. See the [Tailwind installation guide](https://tailwindcss.com/docs/installation).
- The app uses `cycloneUI()` from [`@cyclone-ui/vite`](../vite.md) or `withCycloneUI()` from [`@cyclone-ui/nextjs`](../nextjs.md).

## 1. Turn on the `tailwind` option

Vite (`vite.config.ts`):

```ts
import { cycloneUI } from "@cyclone-ui/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), cycloneUI({ tailwind: true })]
});
```

Next.js (`next.config.ts`):

```ts
import { withCycloneUI } from "@cyclone-ui/nextjs";

export default withCycloneUI({}, { tailwind: true });
```

The option puts all Tamagui CSS in a cascade layer named `tamagui` (`TAMAGUI_CSS_LAYER`). It also declares the layer order before any other stylesheet:

```css
@layer theme, base, tamagui, components, utilities;
```

Tamagui styles then beat Tailwind's preflight (`base`), and Tailwind utilities beat Tamagui styles.

## 2. Import the Cyclone theme before Tailwind

In the stylesheet that imports Tailwind:

```css
@import "@cyclone-ui/tokens/tailwind.css";
@import "tailwindcss";
```

Keep this order. The Cyclone file starts with the layer order statement, which only works if it comes before Tailwind's own layers.

## 3. Use Cyclone names in classes

Tailwind classes now take the same names as Cyclone themes and tokens:

| Classes | Values |
| --- | --- |
| `bg-primary`, `text-on-primary`, `border-hairline`, `bg-blue5`, `bg-primary/50` | The theme's color variables (`var(--primary)`). They resolve where the class is used, so they follow light/dark and `<Theme name="danger">` regions. |
| `p-lg`, `-mt-xl`, `gap-5xl`, `top-lg`, `translate-x-lg`, `space-x-lg` | Space tokens |
| `h-lg`, `min-h-7xl`, `size-lg`, `w-8xl` | Size tokens |
| `rounded-container`, `rounded-button` | Radius tokens |
| `text-xxs`, `text-10xl` | Font size tokens |
| `font-body`, `font-code`, `font-editorial` | Cyclone font families |
| `xxxs:`, `xxs:`, `xs:`, `xxl:` (and `max-xs:` …) | Cyclone breakpoints |
| `dark:` | Tamagui's `t_dark` theme class, not `prefers-color-scheme` |

Classes on Cyclone components override the component's own styles. Here the class sets the Skeleton's height to the `7xl` size token and its corners to the `container` radius, replacing its own `16px` and `sm`:

```tsx
<Skeleton className="h-7xl rounded-container" />
```

## Let the CLI do steps 1 and 2

`cyclone-ui init --style tailwind` sets `tailwind: true` in `vite.config.*` or `next.config.*`. It also adds the theme import above `@import "tailwindcss"` in the app stylesheet. The CLI looks in common places (`src/index.css`, `app/globals.css`, …). To name the file yourself, use `--css`:

```bash
npx cyclone-ui init --style tailwind --css src/styles/app.css
```

If the CLI can't edit a file, it lists the step for you to do by hand. The same style also installs `@tamagui/tailwind` variants of components that provide one. See [`@cyclone-ui/cli`](../cli.md).

## Custom design tokens

When the plugin builds the Tamagui config from your own `tokens`, the `tailwind` option also writes `.cyclone-ui/tailwind.css` from that config. Import it in place of the Cyclone file:

```css
@import "../.cyclone-ui/tailwind.css";
@import "tailwindcss";
```

The plugin loads the generated TypeScript config with Node.js, so this needs Node.js 22.18 or later. For any other Tamagui config, call `buildTailwindThemeCSS()` from [`@cyclone-ui/theme-builder`](../theme-builder.md).

## Where Tailwind and `@tamagui/tailwind` differ

The theme file never redefines a class Tailwind already has. App markup and Cyclone's Tamagui components keep Tailwind's meaning for these classes. Components built with `@tamagui/tailwind` (the `--style tailwind` variants) read class names through Tamagui and use the Cyclone token:

| Class | Tailwind | `@tamagui/tailwind` |
| --- | --- | --- |
| `w-lg`, `max-w-lg` (and other container sizes) | Container scale (`32rem`) | Size token (`12px`) |
| `text-lg` (and Tailwind's other text sizes) | Tailwind font size (`1.125rem`) | Size `lg` of the current font (`20px`) |
| `z-10` | `10` | zIndex token (`100`) |
| `bg-black`, `bg-white` | `#000`, `#fff` | Cyclone `black`, `white` |
| `rounded-full` | Pill (`calc(infinity * 1px)`) | Radius token `full` (`100%`) |

## Limits

- **Plain CSS beats layers.** Once Tamagui's CSS is in a layer, global app CSS outside a layer also overrides components. For example, `button { padding: 0 }` reaches Cyclone buttons. Put such rules in a layer (`@layer base { … }`), or keep the option off if the app relies on them.
- **Inline styles beat classes.** Components that animate (they take a `transition`) write some styles inline, and no class overrides those. For example, the Badge's dot sets its padding inline. Use the component's props for those properties.
- **`dark:` matches any dark ancestor.** A light `<Theme>` region inside a dark page still matches `dark:`, the same as Tailwind's class-based dark mode.
- **Next.js with Webpack.** `@tamagui/next-plugin` writes extracted CSS outside the layer, so `tailwind: true` defaults Webpack builds to `disableExtraction: true`. Turbopack builds don't extract.
- **Precompiled Tamagui CSS.** When CSS comes from `tamagui build` or `outputCSS`, generate it with `TAMAGUI_CSS_LAYER=tamagui` set.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| A class on a component does nothing | In DevTools, check that the layer order statement comes before any `@layer tamagui` rule, and that the property isn't set in the element's `style` attribute. |
| Components lose padding or borders | Tailwind's preflight is beating Tamagui: the layer order statement loaded after Tamagui's CSS. Import the Cyclone theme first, and keep the `tailwind` option on. |
| `bg-primary` is transparent | The color variables come from Cyclone's color themes (`base`, `brand`, …). Render inside one: `CycloneUIProvider` wraps the app in `<Theme name="base">`. With another provider, add it yourself. |

## Related pages

- [@cyclone-ui/vite](../vite.md)
- [@cyclone-ui/nextjs](../nextjs.md)
- [@cyclone-ui/tokens](../tokens.md)
- [@cyclone-ui/theme-builder](../theme-builder.md)
- [@cyclone-ui/cli](../cli.md)
