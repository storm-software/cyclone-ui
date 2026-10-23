---
title: Themeable gradient
description: A diagonal linear gradient whose color stops come from a theme color and a palette variant.
documentType: reference
tags: [component, themeable-gradient, gradient, display, theme]
---

# Themeable gradient

`ThemeableGradient` renders a diagonal `LinearGradient`. It builds the color stops from a theme color. Use it for decorative backgrounds that follow the active theme.

## Import

```tsx
import { ThemeableGradient } from "@cyclone-ui/themeable-gradient";
```

## Usage

Give the gradient a size. The component has no default size.

```tsx
import { ThemeableGradient } from "@cyclone-ui/themeable-gradient";

export function Example() {
  return <ThemeableGradient theme="brand" height="14xl" width="100%" />;
}
```

The gradient starts at `[0, 0]` and ends at `[1, 1]`. Pass `start` or `end` to change the direction.

## Props

`ThemeableGradientProps` is the `LinearGradientProps` from `@tamagui/linear-gradient`, without `color` and `theme`, plus these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `ColorProp` | `"primary"` | The theme color key, or a color value, that the stops come from. |
| `variant` | `ColorScientificPalette` | `"surrounding"` | The palette that makes the stops. |
| `theme` | `ThemeName \| null` | Inherited | Wraps the gradient in this theme. The wrapper is added only when the `theme` prop is present. |

## Variants and states

The `variant` values come from `ColorScientificPalette` in `@cyclone-ui/helpers`:

- `surrounding` (default)
- `analogous`
- `triadic`
- `tetradic`
- `complementary`
- `splitComplementary`

The stories show the default gradient and the `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. The `AnalogousSecondary` story uses the `alternate` theme with the `analogous` variant.

## Accessibility

The component draws only a gradient. The source sets no role, label, or text alternative. Treat it as decoration.

## Related

- [Design tokens](../tokens/index.md)
- [Themeable icon](./themeable-icon.md)

## Source

- [`components/themeable-gradient/src/ThemeableGradient.tsx`](../../../components/themeable-gradient/src/ThemeableGradient.tsx)
- [`components/themeable-gradient/src/ThemeableGradient.stories.tsx`](../../../components/themeable-gradient/src/ThemeableGradient.stories.tsx)
