---
title: "@cyclone-ui/theme-builder"
description: Reference for the Razorwind plugins that preprocess Cyclone UI design tokens and generate the Tamagui configuration.
documentType: reference
tags: [theme-builder, razorwind, tamagui, tokens]
---

# @cyclone-ui/theme-builder

`@cyclone-ui/theme-builder` has two [Razorwind](https://github.com/storm-software/razorwind) plugins. They turn the Cyclone UI design tokens into a Tamagui configuration.

- `preprocessor` changes token values before Style Dictionary builds them.
- `generate` wraps the Razorwind Tamagui generator and fixes its output.

The [CLI](./cli.md) depends on this package for its `build` and `build-tokens` commands. The repository `razorwind.config.ts` file uses both plugins.

Source: [`packages/theme-builder`](https://github.com/storm-software/cyclone-ui/tree/main/packages/theme-builder)

> [!NOTE]
> Do not edit files that Razorwind generates. To change a theme, edit `razorwind.config.ts` or the token JSON files in `packages/tokens/src/tokens`. Then run `pnpm nx run monorepo:generate-themes`.

## Install

```bash
pnpm add -D @cyclone-ui/theme-builder
```

The package depends on `@razorwind/core`, `@razorwind/style-dictionary`, `@razorwind/tamagui`, and `style-dictionary`.

## Entry points

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/theme-builder` | Named exports `generate`, `preprocessor`, `buildTamaguiConfig`, and the Tailwind functions below |
| `@cyclone-ui/theme-builder/generate` | Default export: the generate plugin |
| `@cyclone-ui/theme-builder/preprocessor` | Default export: the preprocessor plugin |
| `@cyclone-ui/theme-builder/tailwind` | The Tailwind functions below, without loading Razorwind |

## Use the plugins

Add both plugins to the `plugins` list in `razorwind.config.ts`. The `generate` options are the options of the Razorwind Tamagui plugin.

```ts
import { defineConfig } from "@razorwind/core";
import { generate, preprocessor } from "@cyclone-ui/theme-builder";

export default defineConfig({
  name: "cyclone-ui",
  tokensPath: "packages/tokens/src/tokens/**/*.json",
  plugins: [
    preprocessor(),
    generate({
      importConfig: "./default-config",
      outputPath: "packages/tokens/src/tamagui/config.ts"
    })
  ]
});
```

This repository imports the plugins from their source paths (`./packages/theme-builder/src/generate`). Use the package name outside this repository.

## `preprocessor()`

Returns a Razorwind plugin named `cyclone-ui:tamagui-preprocessor`. It registers one Style Dictionary preprocessor that does these steps:

1. Converts color values to hex (`#rrggbb` or `#rrggbbaa`). It reads hex strings, sRGB design-token color objects, and `oklch()` values.
2. Fills in missing companion colors for each color group that has a `primary` token. These are `secondary`, `on-primary`, and `on-secondary`. A missing `border` is then derived from `secondary`, 15% brighter in OKLCH lightness (15% darker in light themes), to outline `secondary` backgrounds.
3. Adds hovered, active, inactive, and disabled state variants.
4. Sets `theme` and `group` on tokens in a color group. For example, `danger.on-primary` goes to the `danger` theme.
5. Copies base colors into an empty `brand` theme.
6. Adds focus ring tokens for each theme color group.

Values that you set in the tokens are not overwritten. The tests cover this behavior in `test/preprocessor.spec.ts`.

## `generate(options?)`

Returns a Razorwind plugin named `cyclone-ui:tamagui-generate`. It extends the Razorwind Tamagui generator.

Defaults:

| Option | Default |
| --- | --- |
| `animations` | `"motion"` |
| `defaultFont` | `"body"` |
| `target` | `"v3"` |
| `tamaguiModule` | `"@tamagui/core"` |

Your options override these defaults. The plugin also does the following:

- It replaces imports and module declarations of `tamagui` in the output with the `tamaguiModule` value. This repository uses `@tamagui/core`, not the `tamagui` meta-package.
- It converts a unitless line-height ratio into pixel values for each font size step.
- It removes local font files whose weight is not a plain number.

The source marks the first two fixes as temporary shims for `@razorwind/tamagui` 0.0.101 and earlier.

## Tailwind theme stylesheet

These functions build the Tailwind CSS v4 stylesheet that `@cyclone-ui/tokens/tailwind.css` ships, so Tailwind classes use Cyclone theme and token names. See [Use Tailwind CSS with Cyclone UI](./guides/tailwind.md).

| Export | Purpose |
| --- | --- |
| `createTailwindThemeCSS(config, { reserved })` | Returns the stylesheet for a created Tamagui config (evaluated with `TAMAGUI_TARGET=web`). |
| `readTailwindThemeNames(cwd)` | Reads the theme variable names Tailwind defines by default from `tailwindcss/theme.css` in `cwd`. |
| `buildTailwindThemeCSS({ configPath, cwd, outputPath })` | Loads a config file with Node.js and writes the stylesheet. `outputPath` defaults to `.cyclone-ui/tailwind.css`. TypeScript configs need Node.js 22.18 or later. |
| `TAILWIND_LAYER_ORDER` | `@layer theme, base, tamagui, components, utilities;` |

The stylesheet has three parts:

- The layer order statement.
- An `@theme inline` block. Colors point at Tamagui theme variables (`--color-primary: var(--primary)`), so they resolve where the class is used and follow sub-themes. Space tokens feed the spacing utilities (`--padding-*`, `--margin-*`, `--gap-*`, `--inset-*`, `--translate-*`, …). Size tokens feed the sizing utilities (`--width-*`, `--height-*`, `--size-*`, …). Radius, font size, font weight, blur, and shadow tokens feed their Tailwind namespaces. Font families and min-width breakpoints are literal values.
- A `dark` variant on Tamagui's `t_dark` class.

Names in `reserved` are skipped, and so are names Tailwind falls back to for the same class. For example, `--width-lg` is skipped because Tailwind's `--container-lg` is reserved. Numeric keys and Tailwind keywords (`full`, `auto`, `screen`, …) are skipped too. Standard Tailwind classes keep their meaning.

## Tests

The tests check the preprocessor, the Shiki theme mapping, the Storybook theme mapping, and the Tailwind stylesheet. The Tailwind test compiles the stylesheet with `tailwindcss`. It also compares the stylesheet with `packages/tokens/tailwind.css`. After a token change, regenerate that file with `vitest run -u test/tailwind.spec.ts`.

```bash
pnpm nx test theme-builder
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/tokens](./tokens.md)
- [@cyclone-ui/shiki](./shiki.md)
- [Use Tailwind CSS with Cyclone UI](./guides/tailwind.md)
- [Design tokens](../design-system/tokens/index.md)
