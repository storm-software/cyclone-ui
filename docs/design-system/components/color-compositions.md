---
title: Color compositions
description: Reference for the ColorCompositions component, an animated grid of colored panels.
documentType: reference
tags: [component, color, motion]
---

# Color compositions

`ColorCompositions` draws a grid of colored panels. It is an animated reproduction of Ellsworth Kelly's "Colors for a Large Wall".

The grid fits as many panels as the box allows, then stretches them slightly so they fill the box. On each interval, two panels of different colors swap.

Source: [`components/color-compositions`](https://github.com/storm-software/cyclone-ui/tree/main/components/color-compositions)

## Import

```tsx
import { ColorCompositions } from "@cyclone-ui/color-compositions";
```

## Usage

```tsx
<ColorCompositions height={480} interval={1000} panelSize={80} palette="original" />
```

Set `interval` to `0` to hold the panels still.

## Props

`ColorCompositions` also accepts the props of its frame `View`, except `children`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `interval` | `1000` | Milliseconds between color changes. `0` holds the panels still. |
| `panelSize` | the component default | Target width and height of each panel, in pixels. |
| `palette` | - | `"original"`, `"vibrant"`, or the original palette object. |

`paintColorCompositionsPanels` and `swapColorCompositionsPanels` are exported if you need to drive the grid yourself. A swap does nothing when every panel is the same color.

## Related pages

- [Themeable gradient](./themeable-gradient.md)
