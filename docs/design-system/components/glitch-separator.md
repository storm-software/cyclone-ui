---
title: Glitch separator
description: Reference for the GlitchSeparator component, a seeded square-grid divider between two section colors.
documentType: reference
tags: [component, layout, motion]
---

# Glitch separator

`GlitchSeparator` draws a ragged grid of squares between two section colors. The pattern comes from a seeded pseudo-random sequence, so server and client render the same edge.

On the web the edge can stay still, animate always, or animate with scroll. Reduced motion is respected. Native renders a still edge.

Source: [`components/glitch-separator`](https://github.com/storm-software/cyclone-ui/tree/main/components/glitch-separator)

## Import

```tsx
import { GlitchSeparator } from "@cyclone-ui/glitch-separator";
```

## Usage

```tsx
<GlitchSeparator topColor="canvas" bottomColor="secondary" animate="scroll" seed={27} />
```

Use a transparent `topColor` to lay the edge over an image or video.

## Props

`GlitchSeparator` also accepts `View` props except `children`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `topColor` | `"canvas"` | The upper section color. A theme key, a color token, or a CSS color. |
| `bottomColor` | `"secondary"` | The lower section color. It fills the squares. |
| `animate` | `"scroll"` | `"never"`, `"always"`, or `"scroll"`. Native stays still. |
| `animated` | - | Deprecated. `true` means `"always"` and `false` means `"never"`. Ignored when `animate` is set. |
| `seed` | `27` | Stable seed for the square pattern. A non-finite seed falls back to `27`. |

The grid is 30 columns. The row count follows the separator height.

## Related pages

- [Divider](./divider.md)
