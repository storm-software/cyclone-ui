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
| `@cyclone-ui/theme-builder` | Named exports `generate` and `preprocessor` |
| `@cyclone-ui/theme-builder/generate` | Default export: the generate plugin |
| `@cyclone-ui/theme-builder/preprocessor` | Default export: the preprocessor plugin |

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
2. Fills in missing companion colors for each color group that has a `primary` token. These are `secondary`, `on-primary`, and `on-secondary`.
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

## Tests

The tests check the preprocessor, the Shiki theme mapping, and the Storybook theme mapping.

```bash
pnpm nx test theme-builder
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/tokens](./tokens.md)
- [@cyclone-ui/shiki](./shiki.md)
- [Design tokens](../design-system/tokens/index.md)
