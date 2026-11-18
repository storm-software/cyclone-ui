---
title: Spinner
description: A loading indicator that renders the React Native ActivityIndicator inside a themed stack.
documentType: reference
tags: [component, spinner, loading, display]
component:
  name: spinner
  package: "@cyclone-ui/spinner"
  stories:
    - title: Display/Spinner
      file: components/spinner/src/Spinner.stories.tsx
---

# Spinner

`Spinner` shows that something is loading. It renders the React Native `ActivityIndicator` inside a Tamagui `YStack`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add spinner
pnpm install
```

- **File:** `Spinner.tsx`. The CLI writes it to `<path>/spinner/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/stacks`.

## Import

```tsx
import { Spinner } from "@cyclone-ui/spinner";
```

## Usage

```tsx
<Spinner />
<Spinner size="large" theme="brand" />
<Spinner color="var(--subtle)" />
```

## Anatomy

```tsx
<Spinner />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Spinner` | A Tamagui `YStack` | The wrapper. It takes the layout props and the `theme`. |
| Indicator (internal) | The React Native `ActivityIndicator`. On the web, `react-native-web` renders it as a view with `role="progressbar"`, `aria-valuemin="0"`, and `aria-valuemax="1"`, around an SVG of two circles that turns without end. | The turning ring. Its color is `color`. |

## Examples

The examples are the stories in [`Spinner.stories.tsx`](../../../components/spinner/src/Spinner.stories.tsx). The stories do not set `color`, so they use the default.

| Stories | What they show |
| --- | --- |
| `Base` | The default spinner. |
| `Small`, `Large` | The `small` and `large` sizes. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | Each theme. `Error` uses the `danger` theme. |

## Props

`SpinnerProps` is the `YStack` props (without `children`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"small" \| "large"` | — | Size of the indicator. Without it, `ActivityIndicator` uses `small`. On the web, `small` is 20 px and `large` is 36 px. |
| `color` | `ColorTokens \| ThemeTokens \| string \| null` | `"primary"` | Color of the indicator. A value that starts with `$` is resolved from the current theme. Any other value, such as the default `primary`, goes to `ActivityIndicator` unchanged. See the note below. |
| `theme` | theme name | — | Theme. A `var(--primary)` color follows it. |

On the web, `ActivityIndicator` uses `color` as the CSS `stroke` of its SVG circles. A token name such as `primary` is not a CSS color, so the browser draws no stroke. Pass a CSS value, for example `color="var(--primary)"`.

## Variants

The stories show `small` and `large` sizes, and the themes `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. The ring turns once every 0.75 s on the web.

## Accessibility

- The source adds no extra labels. It relies on `ActivityIndicator`.
- On the web, the indicator has `role="progressbar"` with no value, and no accessible name. `Spinner` passes only `size` and `color` to `ActivityIndicator`, so you cannot name the progressbar itself. Describe the loading state in nearby text.
- The spinner does not take keyboard focus.

## Related

- [Progress](./progress.md)
- [Skeleton](./skeleton.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/spinner/src/Spinner.tsx`](../../../components/spinner/src/Spinner.tsx)
- [`components/spinner/src/Spinner.stories.tsx`](../../../components/spinner/src/Spinner.stories.tsx)
