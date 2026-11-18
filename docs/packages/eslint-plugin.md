---
title: "@cyclone-ui/eslint-plugin"
description: Reference for the ESLint plugin that enforces Cyclone UI design tokens and components in your code.
documentType: reference
tags: [eslint, lint, design-tokens]
---

# @cyclone-ui/eslint-plugin

`@cyclone-ui/eslint-plugin` is an ESLint flat-config plugin. Its rules come from the Cyclone UI design system. The rules find hard-coded colors, spacing, and other values that a design token should replace. They also find raw HTML elements that a design-system component should replace.

Razorwind generates `src/index.ts` with the `@razorwind/eslint` plugin. The settings are in `razorwind.config.ts` (prefix `cyclone-ui`, CSS variable prefix `storm`, Tamagui rules on). Do not edit the generated file by hand. Re-run `pnpm nx run monorepo:generate-themes` after the design system changes.

Source: [`packages/eslint-plugin`](https://github.com/storm-software/cyclone-ui/tree/main/packages/eslint-plugin)

## Install

```bash
pnpm add -D @cyclone-ui/eslint-plugin
```

The package depends on `@razorwind/eslint`. It ships ESM and CommonJS builds.

## Entry points

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/eslint-plugin` | The default config factory and the named exports `plugin`, `rules`, `configs`, and `defaultSeverity` |
| `@cyclone-ui/eslint-plugin/runtime` | A re-export of `@razorwind/eslint/runtime` |

## Quick start

Call the default export in `eslint.config.mjs`. It returns flat-config entries.

```js
import designSystem from "@cyclone-ui/eslint-plugin";

export default [
  designSystem({
    files: ["src/**/*.{ts,tsx}"],
    tokenReference: "css-var",
    severity: { "no-physical-properties": "error" }
  })
];
```

### Options

These options come from the generated `INSTALL.md` file of the package.

| Option | Purpose |
| --- | --- |
| `files` | Globs of the files to lint |
| `tokenReference` | How suggested fixes name a token: `"css-var"` or `"function"` |
| `componentModules` | Only treat components imported from these modules as design-system components |
| `severity` | Overrides the severity of a rule, by rule name without the prefix |

## Rules

All rules have the prefix `cyclone-ui/`. Token rules are on when the design system defines that token category. Component rules are on when the design system defines the replacement component.

| Group | Rules and defaults |
| --- | --- |
| Token usage | `ensure-design-token-usage` (error), `no-unsafe-design-token-usage` (error), `use-tokens-space`, `use-tokens-shape`, `use-tokens-typography`, `use-tokens-motion` (warn), `no-deprecated-design-token-usage` (off) |
| Style syntax | `no-nested-styles` (warn); `no-margin`, `no-physical-properties`, `no-exported-css`, `no-exported-keyframes`, `no-empty-styled-expression`, `no-css-tagged-template-expression`, `no-styled-tagged-template-expression`, `no-keyframes-tagged-template-expression`, `expand-motion-shorthand` (off) |
| Raw HTML elements | `no-html-anchor`, `no-html-button`, `no-html-checkbox`, `no-html-code`, `no-html-radio`, `no-html-range`, `no-html-select`, `no-html-text-input`, `no-html-textarea` (warn); `no-html-heading`, `no-html-image` (off) |
| Components | `use-visually-hidden`, `no-unsafe-style-overrides` (warn); `use-primitives-text`, `prefer-primitives`, `icon-label`, `no-empty-icon-button-label` (off) |
| Forms | `no-placeholder`, `no-readonly-or-disabled-inputs` (warn) |
| Imports | `no-banned-imports` (error); `no-deprecated-imports` (off) |
| Tamagui | `tamagui-no-legacy-token-prefix`, `tamagui-no-legacy-condition-object`, `tamagui-no-color-literal`, `tamagui-no-radius-literal`, `tamagui-no-shadow-literal`, `tamagui-no-dark-pairs` (error); `tamagui-no-stock-palette`, `tamagui-no-spacing-literal`, `tamagui-no-typography-literal`, `tamagui-focus-visible` (warn) |

The generated [`INSTALL.md`](https://github.com/storm-software/cyclone-ui/blob/main/packages/eslint-plugin/src/INSTALL.md) has the description of each rule.

## Make an exception

Use an inline comment with a reason:

```ts
// eslint-disable-next-line cyclone-ui/ensure-design-token-usage -- <reason>
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/stylelint-plugin](./stylelint-plugin.md)
- [Design tokens](../design-system/tokens/index.md)
