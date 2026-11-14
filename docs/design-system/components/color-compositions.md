---
title: Color Compositions
description: Reference for the ColorCompositions component, an animated grid of colored panels.
documentType: reference
tags: [component, color, motion]
component:
  name: color-compositions
  package: "@cyclone-ui/color-compositions"
  stories:
    - title: Display/ColorCompositions
      file: components/color-compositions/src/ColorCompositions.stories.tsx
    - title: Display/ColorCompositions/Tailwind
      file: components/color-compositions/src/ColorCompositions.tailwind.stories.tsx
      style: tailwind
---

# Color Compositions

`ColorCompositions` draws a grid of colored panels. It is an animated reproduction of Ellsworth Kelly's "Colors for a Large Wall".

The grid fits as many panels as the box allows, then stretches them slightly so they fill the box. On each interval, two panels of different colors swap.

Use it as a decorative art panel or banner. Its colors are fixed and do not follow the theme. For a background that follows the theme colors, use [Themeable gradient](./themeable-gradient.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add color-compositions
pnpm install
```

- **Files:** `ColorCompositions.tsx` and `utilities.ts`. The CLI writes them to `<path>/color-compositions/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { ColorCompositions } from "@cyclone-ui/color-compositions";
```

## Usage

```tsx
<ColorCompositions height={480} interval={1000} panelSize={80} palette="original" />
```

Set `interval` to `0` to hold the panels still.

## Anatomy

```tsx
<ColorCompositions />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ColorCompositions` | A Tamagui `View` with `role="img"`, `aria-label="Colors for a Large Wall, after Ellsworth Kelly"`, `width: 100%`, `flexDirection: column`, and `overflow: hidden`. Without `height`, it has an `aspectRatio` of `8 / 7`. | The frame. It measures itself with `onLayout` and sets the number of rows and columns from its size and `panelSize`. |
| Row | A Tamagui `View` with `flex: 1` and `flexDirection: row` | One row of panels. |
| Panel | A Tamagui `View` with `flex: 1`, a palette `backgroundColor`, and a `500ms` Tamagui `transition` | One colored panel. The `transition` fades its color when a swap changes it. A `setInterval` swaps two panels every `interval` milliseconds. |

The rows and panels are internal. They are not exported. The first render uses the painting's 8 × 7 panels, so the server and client markup match. When the grid is larger than the painting, the painting repeats. When it is smaller, the painting is cropped.

## Examples

The examples are the stories in [`ColorCompositions.stories.tsx`](../../../components/color-compositions/src/ColorCompositions.stories.tsx). The stories start from `interval={1000}`, `panelSize={80}`, and a `maxWidth` of `640`. The controls have sliders for `interval` (0 to 5000) and `panelSize` (20 to 200).

| Stories | What they show |
| --- | --- |
| `Base` | The default grid with the original palette. |
| `OriginalPalette`, `VibrantPalette` | `palette="original"` and `palette="vibrant"`, with a fast `interval` of `150`. |
| `Fast`, `Still` | `interval={150}`, and `interval={0}`, which holds the panels still. |
| `Banner` | A full-width banner with `height={230}` and no `maxWidth`. |
| `SmallPanels` | `panelSize={40}`, which makes more, smaller panels. |

The Tailwind version has the same stories (`Base`, `OriginalPalette`, `VibrantPalette`, `Fast`, `Still`, `Banner`, and `SmallPanels`) in [`ColorCompositions.tailwind.stories.tsx`](../../../components/color-compositions/src/ColorCompositions.tailwind.stories.tsx). They set the size with `className` (`max-w-[640px]`, and `h-[230px]` for `Banner`).

## Props

`ColorCompositions` also accepts the props of its frame `View`, except `children`.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `interval` | `number` | `1000` | Milliseconds between color changes. `0` holds the panels still. |
| `panelSize` | `number` | `80` | Target width and height of each panel, in pixels. A value of `0` or less uses `80`. |
| `palette` | `"original" \| "vibrant"` or a palette object | `"original"` | `"original"`, `"vibrant"`, or the original palette object. A palette object maps each `ColorCompositionsPanel` color name to a color. |
| `height` | `View` `height` | - | The frame height. Without it, the frame keeps the painting's `8 / 7` aspect ratio. |

`paintColorCompositionsPanels` and `swapColorCompositionsPanels` are exported if you need to drive the grid yourself. A swap does nothing when every panel is the same color. The `ColorCompositionsPanel` type (the panel color names) is also exported.

## Accessibility

- The frame has `role="img"` and the `aria-label` "Colors for a Large Wall, after Ellsworth Kelly". Screen readers announce it as one image.
- When `prefers-reduced-motion: reduce` matches, the panels do not swap. The grid stays still, as with `interval={0}`.

## Related

- [Themeable gradient](./themeable-gradient.md)
- [TopographicBackground](./topographic-background.md)

## Source

- [`components/color-compositions/src/ColorCompositions.tsx`](../../../components/color-compositions/src/ColorCompositions.tsx)
- [`components/color-compositions/src/utilities.ts`](../../../components/color-compositions/src/utilities.ts)
- [`components/color-compositions/src/ColorCompositions.tailwind.tsx`](../../../components/color-compositions/src/ColorCompositions.tailwind.tsx)
- [`components/color-compositions/src/ColorCompositions.stories.tsx`](../../../components/color-compositions/src/ColorCompositions.stories.tsx) (title: `Display/ColorCompositions`)
- [`components/color-compositions/src/ColorCompositions.tailwind.stories.tsx`](../../../components/color-compositions/src/ColorCompositions.tailwind.stories.tsx) (title: `Display/ColorCompositions/Tailwind`)
