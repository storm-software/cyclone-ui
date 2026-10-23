---
title: "Walk-through: How Cyclone UI themes and tokens are generated"
description: Follow design tokens from JSON source files through the Razorwind plugins to the Tamagui config, CSS variables, and other generated files.
audience: Contributor who changes tokens or themes in the cyclone-ui repository
perspective: under-the-hood
tags: [tokens, themes, razorwind, theme-builder, contributing]
---

# Walk-through: How Cyclone UI themes and tokens are generated

**Audience:** Contributor who changes tokens or themes · **Perspective:** under the hood · **Time:** ~20 min

## What you will learn

Nobody writes the Tamagui config, the CSS variables, or the theme docs by hand. You edit JSON token files or `razorwind.config.ts`. A Razorwind run then reads those inputs, passes them through the plugins, and writes every output. This guide shows each stop, so you know what to edit and what to leave alone.

## Before you start

- Know the [DTCG-style](https://www.designtokens.org/) token shape: `$type`, `$value`, and `{alias.path}` references.
- Open `razorwind.config.ts` at the repository root.
- Do not edit generated files. Change the source, then regenerate.

## The path at a glance

1. Token sources in `packages/tokens/src/tokens`.
2. `razorwind.config.ts` reads them.
3. The Cyclone preprocessor normalizes colors and adds states.
4. The Tamagui plugin writes the Tamagui config.
5. Other plugins write CSS, JS, docs, and tool configs.
6. The Nx target runs it all.

## Step 1 — Know the token sources

The input is every JSON file under `packages/tokens/src/tokens`, set by `tokensPath` in [razorwind.config.ts:53](../../../razorwind.config.ts):

| File | Contains |
| --- | --- |
| `primitives/tokens.json` | Raw values: `color`, `size`, `spacing`, `font-size`, `border-radius`, `shadow`, `ease`, `durations`, `blur`, and more. Each token has `"primitive": true` where it is a base value. |
| `semantic/tokens.json` | Theme-independent roles: `typography` and `border-radius`. |
| `semantic/light.tokens.json` | Semantic `color` roles for the light theme. |
| `semantic/dark.tokens.json` | Semantic `color` roles for the dark theme. |

Semantic tokens point to primitives with aliases. For example, `color.ink` in the dark theme has the value `{color.neutral.7}` ([dark.tokens.json](../../../packages/tokens/src/tokens/semantic/dark.tokens.json)). Components use the role name (`ink`, `outline`), so the same component works in every theme.

Each token also carries a `$description` that names the components that use it. Keep it accurate when you change a token.

## Step 2 — Read the Razorwind config

`defineConfig` in [razorwind.config.ts](../../../razorwind.config.ts) sets the inputs and the plugin list:

- `splitThemes: true` (line 45) makes Razorwind emit one output set for each theme. The checked-in output has six: `light`, `dark`, `light-dimmed`, `dark-dimmed`, `light-high-contrast`, and `dark-high-contrast` (see `docs/themes`). Where the dimmed and high-contrast variants are derived is inside `@razorwind/*` and was not traced in this repository.
- `fontsPath` points to the built `storm-sans` and `storm-serif` fonts.
- `componentsPath` is `components`. The `shadcn` plugin reads it to build `registry.json`.
- `plugins` is an ordered list. Preprocessors run first. Generators then write files.

Razorwind is an external package. Do not patch it in this repository. Change the config instead.

## Step 3 — Normalize colors in the preprocessor

[`packages/theme-builder/src/preprocessor.ts`](../../../packages/theme-builder/src/preprocessor.ts) is registered first (`preprocessor()`, line 56). It runs `tamaguiPreprocessor` over the token tree. The doc comment above the function (line 1552) lists the rules. In short:

1. **Convert colors to hex.** `oklch()` values and shadow colors become `#rrggbb` or `#rrggbbaa`. Generators then do not need to parse `oklch()`.
2. **Group colors into child themes.** Each color group that has a `primary` token becomes a child theme. A missing `secondary`, `on-primary`, and `on-secondary` are generated.
3. **Add state variants.** Hovered, active, inactive, and disabled colors are derived. Low-saturation colors shift lightness from the theme's contrast primitive. Saturated colors scale their own lightness.
4. **Add focus rings.** Ring tokens and ring opacity are generated for each theme color group.

This is why you do not define `hovered` or `disabled` colors by hand. To change how states look, change the preprocessor, not each token. The specs in [packages/theme-builder/test](../../../packages/theme-builder/test) cover this code. Seven of the 21 tests failed when this guide was written, so run them before you rely on them.

## Step 4 — Generate the Tamagui config

The `generate()` call (line 62) comes from [`packages/theme-builder/src/generate.ts`](../../../packages/theme-builder/src/generate.ts). It wraps `@razorwind/tamagui/generate` and writes `packages/tokens/src/tamagui/config.ts`.

It sets these defaults: `animations: "motion"`, `defaultFont: "body"`, `target: "v3"`, and `tamaguiModule: "@tamagui/core"`. The repository depends on `@tamagui/core`, not the `tamagui` meta-package, so the wrapper rewrites the `tamagui` import in the output.

It also applies two temporary fixes for older `@razorwind/tamagui` versions. The file says to delete them once a fixed release is installed:

- It drops local font files whose weight is not numeric.
- It converts a unitless line-height ratio (for example `1.125`) to pixel values per font size.

The result exports `config`, built with `createTamagui`. Consumers import it from `@cyclone-ui/tokens/tamagui`. `packages/tokens/src/tamagui/index.ts` adds one patch: it copies the `<mode>_base` child theme keys to each root theme, so Tamagui can resolve them (see the comment in that file).

## Step 5 — Write the other outputs

Each plugin in the list reads the same normalized tokens and writes one kind of output:

| Plugin | Output |
| --- | --- |
| `shadcn` | `registry.json` (from `components/`) |
| `designMD` | `DESIGN.md` and `INSTALL.md` |
| `eslint`, `stylelint` | Rules in `packages/eslint-plugin/src` and `packages/stylelint-plugin/src` |
| `shiki` | `packages/shiki/src/<theme>/theme.json` |
| `docgen` | `docs/themes` |
| `llms` | `docs/llms` |
| `maplibre` | `maps/styles/__generated__` |
| `css` | `packages/tokens/src/css/tokens-<theme>.css` |
| `styleDictionary` | `packages/tokens/src/js/tokens-<theme>.js` and `.d.ts` |
| `storybook` | `apps/storybook/src` (theme and token docs) |

The `shiki`, `maplibre`, and `storybook` plugins take a `mapTheme` function. It maps token names, such as `color.canvas` and `color.outline`, to the colors each tool needs. If a token is renamed, update these functions. Tests for two of them are in `packages/theme-builder/test`.

The published `@cyclone-ui/tokens` package exports the Tamagui config, the Storybook theme, the CSS files, and the token JSON files ([package.json](../../../packages/tokens/package.json)).

## Step 6 — Run it with Nx

The `nx.json` file loads `@razorwind/nx/plugin` with `targetName: "build-tokens"` (line 65). The plugin adds a generate target to each project that has a `razorwind.config.ts`, so the root project `monorepo` gets one. Its inputs are the config file and the token, font, and component paths.

```bash
pnpm nx run monorepo:build-tokens
```

Other targets depend on it:

- `monorepo:build-tokens` depends on `fonts:build` ([project.json](../../../project.json)).
- `tokens:build-base` depends on `monorepo:build-tokens` ([packages/tokens/project.json](../../../packages/tokens/project.json)).

After a run, review the diff in the generated files to confirm that only the expected outputs changed.

> **Command name.** [AGENTS.md](../../../AGENTS.md) names `pnpm nx run monorepo:generate-themes`. The Nx configuration in this repository names the target `build-tokens`, and no `generate-themes` target is defined. Use `build-tokens`. This guide could not run the command: Nx failed to load the project graph because the `mvn` executable is missing in the authoring environment.

## Recap

You edit `packages/tokens/src/tokens/**/*.json` or `razorwind.config.ts`. `monorepo:build-tokens` loads them. The Cyclone preprocessor converts colors to hex and derives states and rings. The Tamagui wrapper writes `config.ts`. The other plugins write CSS, JS, docs, lint rules, and tool themes. Never edit those outputs.

## Where to go next

- Add a token: edit a JSON file, run the target, and check the changed files in `packages/tokens/src/css`.
- Read the token reference: [Tokens](../tokens/index.md).
- Use the result in an app: [Adopt Cyclone UI in your app](./adopt-cyclone-ui.md).
- Package pages: [tokens](../../packages/tokens.md) and [theme-builder](../../packages/theme-builder.md).
