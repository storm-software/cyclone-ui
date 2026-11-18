---
title: "@cyclone-ui/stylelint-plugin"
description: Reference for the Stylelint plugin that enforces Cyclone UI design tokens in CSS.
documentType: reference
tags: [stylelint, lint, design-tokens]
---

# @cyclone-ui/stylelint-plugin

`@cyclone-ui/stylelint-plugin` is a Stylelint plugin. Its rules come from the Cyclone UI design system. The rules find hard-coded colors, spacing, and other values that a design token should replace.

Razorwind generates `src/index.ts` with the `@razorwind/stylelint` plugin. The settings are in `razorwind.config.ts` (prefix `cyclone-ui`, CSS variable prefix `storm`). Do not edit the generated file by hand. Re-run `pnpm nx run monorepo:generate-themes` after the design system changes.

Source: [`packages/stylelint-plugin`](https://github.com/storm-software/cyclone-ui/tree/main/packages/stylelint-plugin)

## Install

```bash
pnpm add -D @cyclone-ui/stylelint-plugin stylelint
```

The package depends on `@razorwind/stylelint`. It ships ESM and CommonJS builds.

## Entry points

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/stylelint-plugin` | The default config factory and the named exports `plugins`, `rules`, and `defaultSeverity` |
| `@cyclone-ui/stylelint-plugin/runtime` | A re-export of `@razorwind/stylelint/runtime` |

## Quick start

Call the default export in `stylelint.config.mjs`. It returns the plugins and rules.

```js
import designSystem from "@cyclone-ui/stylelint-plugin";

const { plugins, rules } = designSystem({
  tokenUsage: { color: true, spacing: true },
  fallbackUsage: "optional",
  severity: { "no-physical-properties": "error" }
});

export default {
  plugins: [...plugins],
  rules: { ...rules }
};
```

### Options

These options come from the generated `INSTALL.md` file of the package.

| Option | Purpose |
| --- | --- |
| `tokenUsage` | The domains that `ensure-design-token-usage` checks. Colors and shadows are the default. |
| `fallbackUsage` | `"forced"` requires `var(--token, fallback)`. `"none"` forbids fallbacks. The example uses `"optional"`. |
| `severity` | Overrides the severity of a rule, by rule name without the prefix |
| `files` | Moves the rules into an `overrides` entry for these globs |

## Rules

All rules have the prefix `cyclone-ui/`. Token rules are on when the design system defines that token category. The `stylelint --fix` command fixes a literal value that matches exactly one token.

| Rule | Default |
| --- | --- |
| `ensure-design-token-usage` | error |
| `no-unsafe-design-token-usage` | error |
| `use-tokens-space` | warn |
| `use-tokens-shape` | warn |
| `use-tokens-typography` | warn |
| `use-tokens-motion` | warn |
| `use-visually-hidden` | warn |
| `no-deprecated-design-token-usage` | off |
| `no-margin` | off |
| `no-physical-properties` | off |
| `expand-motion-shorthand` | off |

The generated [`INSTALL.md`](https://github.com/storm-software/cyclone-ui/blob/main/packages/stylelint-plugin/src/INSTALL.md) has the description of each rule.

## Make an exception

Use an inline comment with a reason:

```css
/* stylelint-disable-next-line cyclone-ui/ensure-design-token-usage -- <reason> */
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/eslint-plugin](./eslint-plugin.md)
- [Design tokens](../design-system/tokens/index.md)
