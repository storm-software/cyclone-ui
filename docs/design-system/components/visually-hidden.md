---
title: Visually hidden
description: A wrapper that hides its content on screen but keeps it available to screen readers.
documentType: reference
tags: [component, visually-hidden, accessibility]
---

# Visually hidden

`VisuallyHidden` hides its content from sighted users. Assistive technology can still read it. Use it for accessible labels and for text that only a screen reader should announce.

## Import

```tsx
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
```

## Usage

```tsx
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";

export function Example() {
  return <VisuallyHidden>Close dialog</VisuallyHidden>;
}
```

`VisuallyHidden` is a Tamagui `View` with three variants. It accepts all `View` props.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `visible` | `boolean` | `false` | When `true`, shows the content in the normal layout. |
| `preserveDimensions` | `boolean` | — | Keeps the element in the layout with automatic width and height. |
| `animate` | `boolean` | — | Adds a `200ms` transition, so the content can fade between states. |

## Variants and states

| State | Styles |
| --- | --- |
| Hidden (`visible` is `false`) | `position: absolute`, a `1 × 1` box, a `-1` margin, `overflow: hidden`, `opacity: 0.00000001`, `pointerEvents: none`, and `zIndex: -10000`. |
| `visible` | `position: relative`, automatic size, `overflow: visible`, `opacity: 1`, and `pointerEvents: auto`. |
| `preserveDimensions` | `position: relative`, `width: auto`, and `height: auto`. |
| `animate` | A `200ms` transition. |

The stories show `Base`, `PreserveDimensions`, `Visible`, and `Animate`.

The source sets `isVisuallyHidden` on the component. Tamagui core checks this flag when it computes spacing.

## Accessibility

The hidden state uses a near-zero opacity and a `1 × 1` box. It does not use `display: none`, so the content stays in the accessibility tree. The source sets no role or label.

## Related

- [Design tokens](../tokens/index.md)
- [Tooltip](./tooltip.md)

## Source

- [`components/visually-hidden/src/VisuallyHidden.tsx`](../../../components/visually-hidden/src/VisuallyHidden.tsx)
- [`components/visually-hidden/src/VisuallyHidden.stories.tsx`](../../../components/visually-hidden/src/VisuallyHidden.stories.tsx)
