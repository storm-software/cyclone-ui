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

<Container glass noise>
  A frosted glass surface with a film grain overlay
</Container>
```

## Variants

Each surface variant paints the color token of the same name.

| Variant | Surface |
| --- | --- |
| `primary` | `primary` background, no border. |
| `secondary` | `secondary` background, `border` border. |
| `tertiary` | `surface` background, `hairline` border. |
| `outlined` | Transparent background, 2 px `primary` border. |
| `sunken` | `sunken` background, `border` border. |
| `canvas` | `canvas` background, `border` border. |
| `surface` | `surface` background, `border` border. |
| `elevated` | The default. `elevated` background, `border` border. |
| `floating` | `floating` background, `border` border. |

[Button](./button.md) draws these variants with a `Container`, and so do the surfaces of Card, Dialog, Popover, Tooltip, Sheet, ContextMenu, Accordion, Collapsible and Tag, the floating Tabs pill, and the Toggle indicator.

## Props

| Prop | Default | Purpose |
| --- | --- | --- |
| `variant` | `"elevated"` | The surface. See the table above. |
| `size` | `true` | Padding from a size token or a number. |
| `shadowStyle` | `"none"` | `raised` adds the resting raised shadow, `elevated` a large floating shadow, and `flat` removes the border as well as the shadow. |
| `circular` | `false` | Makes the box a circle. |
| `tight` | `false` | Removes the padding. |
| `accented` | `false` | Draws the border in `primary`. |
| `glass` | `false` | Frosted glass: the variant's background at 60% opacity, a blur and saturation boost on whatever is behind, a faint white sheen from the top edge, and a faint white border. Web only for the blur. |
| `noise` | `false` | Overlays a fine film grain inside the rounded frame, blended with `hard-light` so it lightens and darkens the background. |
| `hovered` | `false` | Shows the variant's hovered background, e.g. while a parent is hovered. |
| `hoverGroup` | - | Shows the variant's hovered background while the ancestor `group` of this name is hovered, in CSS. |

`Container` also accepts the props of its styled frame. Explicit style props, such as `borderWidth={0}`, override the variant's.

## Building on Container

The package also exports what other components use to draw a Container surface:

| Export | Purpose |
| --- | --- |
| `ContainerBackground` | A `Container` drawn as its parent's background: stretched behind the parent's children, following its radius, click-through and hidden from assistive tech. The parent must be positioned (`position: "relative"`; Tamagui views aren't by default) and a stacking context (`zIndex: 0` or `isolation: "isolate"`), and leave its own background and border clear. The layer draws no shadow: the parent draws `containerShadows[shadowStyle]`. Pass the layer the `shadowStyle` anyway, so `flat` drops its border. |
| `ContainerSurfaceProps` | The `variant`, `shadowStyle`, `glass`, `noise` and `accented` props, for components that accept them. |
| `containerVariants` | Each variant's `backgroundColor`, `borderWidth` and `borderColor`. |
| `containerShadows` | Each `shadowStyle`'s `boxShadow` (`flat` is `none`), for the parent of a `ContainerBackground`, which draws the shadow itself. |
| `getContainerForeground(variant, themeName)` | The text color on a variant: `on-primary` on `primary`, `on-secondary` on `secondary` (`primary` on an uncolored theme, where `on-secondary` is faint), and `undefined` otherwise. |
| `useContainerForeground()` | The same color for content inside the nearest `Container`, in that container's theme. Card and Dialog read it for their built-in text. |

## Related pages

- [Card](./card.md)
- [Page](./page.md)
