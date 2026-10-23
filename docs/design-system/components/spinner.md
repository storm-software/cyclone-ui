---
title: Spinner
description: A loading indicator that renders the React Native ActivityIndicator inside a themed stack.
documentType: reference
tags: [component, spinner, loading, display]
---

# Spinner

`Spinner` shows that something is loading. It renders the React Native `ActivityIndicator` inside a Tamagui `YStack`.

## Import

```tsx
import { Spinner } from "@cyclone-ui/spinner";
```

## Usage

```tsx
<Spinner />
<Spinner size="large" theme="brand" />
<Spinner color="success" />
```

## Props

`SpinnerProps` is the `YStack` props (without `children`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"small" \| "large"` | — | Size of the indicator. |
| `color` | `ColorTokens \| ThemeTokens \| string \| null` | `"primary"` | Color of the indicator. Use a token or a raw value. A value that starts with `$` is resolved from the current theme. |
| `theme` | theme name | — | Theme. The `primary` color follows it. |

## Variants

The stories show `small` and `large` sizes, and the themes `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Accessibility

The source adds no extra labels. It relies on `ActivityIndicator`.

## Related

- [Progress](./progress.md)
- [Skeleton](./skeleton.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/spinner/src/Spinner.tsx`](../../../components/spinner/src/Spinner.tsx)
- [`components/spinner/src/Spinner.stories.tsx`](../../../components/spinner/src/Spinner.stories.tsx)
