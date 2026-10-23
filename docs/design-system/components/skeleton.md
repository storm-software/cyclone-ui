---
title: Skeleton
description: A placeholder that stands in for content while it loads, with a rectangle or circle shape and an optional shimmer.
documentType: reference
tags: [component, skeleton, loading, display]
---

# Skeleton

`Skeleton` is a placeholder for content that is loading. Use several skeletons to sketch the layout of the content.

## Import

```tsx
import { Skeleton } from "@cyclone-ui/skeleton";
```

## Usage

```tsx
<View flexDirection="row" alignItems="center" gap="4xl">
  <Skeleton shape="circle" size={48} />
  <View flex={1} gap="2xl">
    <Skeleton width="40%" />
    <Skeleton width="25%" height={12} />
  </View>
</View>
```

## Props

`SkeletonProps` extends the Tamagui `ViewProps` without `children`. Other view props, such as `width`, `height`, and `borderRadius`, go to the placeholder.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | `"rectangle" \| "circle"` | `"rectangle"` | Placeholder shape. Circles are fully rounded (`full`). Rectangles use the `sm` radius. |
| `size` | `ViewProps["width"]` | — | Sets both width and height. |
| `animation` | `"wave" \| "none"` | `"wave"` | The loading animation. |

Without `size`, the height is `16` and the width is `100%`. The background color is the `hairline` token.

## States

- **Wave:** A shimmer moves across the placeholder every `1.2s`. It runs only on web, and not when the user prefers reduced motion.
- **None:** A static placeholder. Native targets always render a static placeholder.

## Accessibility

The placeholder sets `aria-hidden`. Screen readers skip it. Announce the loading state in the surrounding content.

## Related

- [Spinner](./spinner.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/skeleton/src/Skeleton.tsx`](../../../components/skeleton/src/Skeleton.tsx)
- [`components/skeleton/src/Skeleton.stories.tsx`](../../../components/skeleton/src/Skeleton.stories.tsx)
