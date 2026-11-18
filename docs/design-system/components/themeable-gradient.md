---
title: Themeable Gradient
description: A diagonal linear gradient whose color stops come from a theme color and a palette variant.
documentType: reference
tags: [component, themeable-gradient, gradient, display, theme]
component:
  name: themeable-gradient
  package: "@cyclone-ui/themeable-gradient"
  stories:
    - title: Display/ThemeableGradient
      file: components/themeable-gradient/src/ThemeableGradient.stories.tsx
---

# Themeable Gradient

`ThemeableGradient` renders a diagonal `LinearGradient`. It builds the color stops from a theme color. Use it for decorative backgrounds that follow the active theme.

Choose it when the background must change with the theme. For fixed art colors, use [Color compositions](./color-compositions.md). For a full-bleed map image behind a page, use [TopographicBackground](./topographic-background.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add themeable-gradient
pnpm install
```

- **File:** `ThemeableGradient.tsx`. The CLI writes it to `<path>/themeable-gradient/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/helpers-tamagui`, and `@tamagui/linear-gradient`.

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

## Anatomy

```tsx
<ThemeableGradient theme="brand" variant="analogous" />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Theme` wrapper | A Tamagui `Theme` with `name={theme}`. It is added only when the `theme` prop is present. | Sets the theme that the gradient reads its color from. |
| Gradient | A `LinearGradient` from `@tamagui/linear-gradient`, with `start={[0, 0]}` and `end={[1, 1]}` by default | Draws the gradient. It reads `color` from the theme with `useTheme()` and builds the stops with `createStylePalettes` from `@cyclone-ui/helpers`. `variant` selects one of the palettes. |

`ThemeableGradient` has no parts to compose. The wrapper and the gradient are internal.

## Examples

The examples are the stories in [`ThemeableGradient.stories.tsx`](../../../components/themeable-gradient/src/ThemeableGradient.stories.tsx). Each story renders the gradient with `height="14xl"` and `width="100%"`.

| Stories | What they show |
| --- | --- |
| `Base` | The default `surrounding` variant from the `primary` color of the current theme. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `surrounding` variant in the `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |
| `AnalogousSecondary` through `AnalogousSuccess` | The `analogous` variant in the `alternate`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |
| `TriadicSecondary` through `TriadicSuccess` | The `triadic` variant in the same six themes. |
| `TetradicSecondary` through `TetradicSuccess` | The `tetradic` variant in the same six themes. |
| `ComplementarySecondary` through `ComplementarySuccess` | The `complementary` variant in the same six themes. |
| `SplitComplementarySecondary` through `SplitComplementarySuccess` | The `splitComplementary` variant in the same six themes. |

In each variant group, the stories are `Secondary` (`alternate` theme), `Discovery`, `Error` (`danger` theme), `Warning`, `Info`, and `Success`.

## Props

`ThemeableGradientProps` is the `LinearGradientProps` from `@tamagui/linear-gradient`, without `color` and `theme`, plus these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `ColorProp` | `"primary"` | The theme color key, or a color value, that the stops come from. |
| `variant` | `ColorScientificPalette` | `"surrounding"` | The palette that makes the stops. |
| `theme` | `ThemeName \| null` | Inherited | Wraps the gradient in this theme. The wrapper is added only when the `theme` prop is present. |
| `start` | `LinearGradientPoint \| null` | `[0, 0]` | The start point of the gradient. |
| `end` | `LinearGradientPoint \| null` | `[1, 1]` | The end point of the gradient. |

The component always sets `colors` from `color` and `variant`. A `colors` prop has no effect.

## Variants and states

The `variant` values come from `ColorScientificPalette` in `@cyclone-ui/helpers`:

- `surrounding` (default)
- `analogous`
- `triadic`
- `tetradic`
- `complementary`
- `splitComplementary`

`complementary` makes 2 stops, `tetradic` makes 4, and the other variants make 3. The stops are HSL colors.

## Accessibility

The component draws only a gradient. The source sets no role, label, or text alternative. Treat it as decoration.

## Related

- [Design tokens](../tokens/index.md)
- [Themeable icon](../icons/themeable-icon.md)
- [Color compositions](./color-compositions.md)
- [TopographicBackground](./topographic-background.md)

## Source

- [`components/themeable-gradient/src/ThemeableGradient.tsx`](../../../components/themeable-gradient/src/ThemeableGradient.tsx)
- [`components/themeable-gradient/src/ThemeableGradient.stories.tsx`](../../../components/themeable-gradient/src/ThemeableGradient.stories.tsx) (title: `Display/ThemeableGradient`)
