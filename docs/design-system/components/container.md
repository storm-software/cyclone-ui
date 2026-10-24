---
title: Container
description: Reference for the Container component, a padded, rounded surface with theme variants.
documentType: reference
tags: [component, layout]
---

# Container

`Container` wraps content in a padded, rounded box. Use it for cards and panels.

Source: [`components/container`](https://github.com/storm-software/cyclone-ui/tree/main/components/container)

## Import

```tsx
import { Container } from "@cyclone-ui/container";
```

## Usage

```tsx
<Container variant="elevated" size="4xl">
  Panel content
</Container>

<Container variant="glass" noise>
  A blurred surface with a noise overlay
</Container>
```

## Variants

| Variant | Surface |
| --- | --- |
| `primary` | `primary` background, `outline` border. |
| `secondary` | `secondary` background, `hairline` border. |
| `tertiary` | `surface` background, `hairline` border. |
| `sunken` | `sunken` background, `hairline` border. |
| `canvas` | `canvas` background, `hairline` border. |
| `elevated` | The default. `surface` background, `hairline` border. |
| `floating` | `elevated` background, `hairline` border. |
| `overlay` | `floating` background, `hairline` border. |
| `outlined` | Transparent background, 3 px `primary` border. |
| `glass` | Transparent background, `hairline` border, and a blurred gradient. |

## Props

| Prop | Default | Purpose |
| --- | --- | --- |
| `variant` | `"elevated"` | The surface. See the table above. |
| `size` | `true` | Padding from a size token or a number. |
| `bordered` | `true` | `false` removes the border. A size token sets the border width. |
| `shadowed` | `false` | Adds a shadow. |
| `circular` | `false` | Makes the box a circle. |
| `noPadding` | `false` | Removes the padding. |
| `accentBordered` | `false` | The tertiary variant uses an accent border when `bordered` is not `false`. |
| `noise` | - | Overlays a noise texture inside the rounded frame. |

`Container` also accepts the props of its styled frame.

## Related pages

- [Card](./card.md)
- [Page](./page.md)
