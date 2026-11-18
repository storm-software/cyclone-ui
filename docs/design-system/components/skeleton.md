---
title: Skeleton
description: A placeholder that stands in for content while it loads, with a rectangle or circle shape and an optional smooth or pixelated shimmer.
documentType: reference
tags: [component, skeleton, loading, display]
component:
  name: skeleton
  package: "@cyclone-ui/skeleton"
  stories:
    - title: Display/Skeleton
      file: components/skeleton/src/Skeleton.stories.tsx
    - title: Display/Skeleton/Tailwind
      file: components/skeleton/src/Skeleton.tailwind.stories.tsx
      style: tailwind
---

# Skeleton

`Skeleton` is a placeholder for content that is loading. Use several skeletons to sketch the layout of the content.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add skeleton
pnpm install
```

- **File:** `Skeleton.tsx`. The CLI writes it to `<path>/skeleton/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { Skeleton } from "@cyclone-ui/skeleton";
```

## Usage

```tsx
import { Skeleton } from "@cyclone-ui/skeleton";
import { View } from "@tamagui/core";

<View flexDirection="row" alignItems="center" gap="4xl">
  <Skeleton shape="circle" size={48} />
  <View flex={1} gap="2xl">
    <Skeleton width="40%" />
    <Skeleton width="25%" height={12} />
  </View>
</View>
```

## Anatomy

```tsx
<Skeleton />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Skeleton` | A Tamagui `View` with `aria-hidden` and hidden overflow | The placeholder. Its background is `hairline`. |
| Wave (internal, web only) | A `<style>` element and a `<div class="cyclone-skeleton-wave">` with a linear gradient | The shimmer. The gradient is a lighter tone of `hairline`. It moves from left to right. With `variant="pixel"`, the wave sits inside a `<div class="cyclone-skeleton-pixel">` whose CSS `mask-image` intersects a seeded SVG noise tile with a 4 px `conic-gradient` grid (`mask-composite: intersect`). |

## Examples

The examples are the stories in [`Skeleton.stories.tsx`](../../../components/skeleton/src/Skeleton.stories.tsx). A decorator puts each story on a 480 px `canvas` background.

| Stories | What they show |
| --- | --- |
| `Default` | One full-width rectangle with the wave. |
| `Shapes` | Circles and squares at sizes 32, 48, and 64, and full-width, 75%, and 50% bars. |
| `Card` | A card layout: an avatar circle, two text lines, a 160 px media block, and two button-sized blocks. |
| `Pixel` | The `Card` layout with `variant="pixel"`. |
| `NoAnimation` | The `Card` layout with `animation="none"`. |

[`Skeleton.tailwind.stories.tsx`](../../../components/skeleton/src/Skeleton.tailwind.stories.tsx) (title: `Display/Skeleton/Tailwind`) has the same stories for the Tailwind CSS version in `Skeleton.tailwind.tsx`.

## Props

`SkeletonProps` extends the Tamagui `ViewProps` without `children`. Other view props, such as `width`, `height`, and `borderRadius`, go to the placeholder.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | `"rectangle" \| "circle"` | `"rectangle"` | Placeholder shape. Circles are fully rounded (`full`). Rectangles use the `sm` radius. |
| `size` | `ViewProps["width"]` | — | Sets both width and height. |
| `animation` | `"wave" \| "none"` | `"wave"` | The loading animation. |
| `variant` | `"normal" \| "pixel"` | `"normal"` | The style of the wave. `pixel` shows the wave through a flickering grid of small squares, like the press ripple of [RippleAnimation](./ripple-animation.md). It has no effect when `animation` is `"none"`. |

Without `size`, the height is `16` and the width is `100%`. The background color is the `hairline` token.

## States

- **Wave:** A shimmer moves across the placeholder every `1.2s`. It runs only on web, and not when the user prefers reduced motion.
- **Pixel wave:** With `variant="pixel"`, the shimmer shows through a fixed grid of 3 px squares with half-strength 1 px gaps. The grid does not move, so the wave passes under the squares. A noise tile jumps to a new whole-square offset 8 times every `650ms`, so the squares flicker. The shimmer is a little lighter (`l + 0.12`) to make up for the mask. When the user prefers reduced motion, neither the wave nor the squares move.
- **None:** A static placeholder. Native targets always render a static placeholder.

## Accessibility

The placeholder sets `aria-hidden`. Screen readers skip it. Announce the loading state in the surrounding content, for example with `aria-busy` on the region that loads. The placeholder does not take keyboard focus.

## Related

- [Spinner](./spinner.md)
- [RippleAnimation](./ripple-animation.md), whose pixel grid the pixel wave shares
- [Design tokens](../tokens/index.md)

## Source

- [`components/skeleton/src/Skeleton.tsx`](../../../components/skeleton/src/Skeleton.tsx)
- [`components/skeleton/src/Skeleton.stories.tsx`](../../../components/skeleton/src/Skeleton.stories.tsx)
- [`components/skeleton/src/Skeleton.tailwind.tsx`](../../../components/skeleton/src/Skeleton.tailwind.tsx)
- [`components/skeleton/src/Skeleton.tailwind.stories.tsx`](../../../components/skeleton/src/Skeleton.tailwind.stories.tsx)
