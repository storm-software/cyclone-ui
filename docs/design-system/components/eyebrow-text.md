---
title: Eyebrow Text
description: A small, uppercase, muted label that renders as an h5 and sits above a main heading.
documentType: reference
tags: [component, eyebrow-text, typography]
---

# Eyebrow Text

`EyebrowText` is a short overline label. Use it above a main heading or section title. It is a styled Tamagui `SizableText` that renders an `h5` element.

## Import

```tsx
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
```

## Usage

```tsx
<>
  <EyebrowText>Release notes</EyebrowText>
  <HeadingText level="title">What is new</HeadingText>
</>
```

Set the `theme` prop to change the color theme.

```tsx
<EyebrowText theme="brand">Lorem ipsum dolor sit amet</EyebrowText>
```

## Props

`EyebrowText` accepts the props of `SizableText`. The exported type is `EyebrowTextProps`. The component has no custom props.

## Default style

| Property | Value |
| --- | --- |
| Element | `h5` |
| `color` | `subtle` |
| `fontFamily` | `eyebrow` |
| `size` | `xs` |
| `fontWeight` | `medium` |
| `textTransform` | `uppercase` |

## Variants and states

The component has no variants. The stories show the default style and these `theme` values: `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [Design tokens](../tokens/index.md)
- [Heading Text](./heading-text.md)

## Source

- [`components/eyebrow-text/src/EyebrowText.tsx`](../../../components/eyebrow-text/src/EyebrowText.tsx)
- [`components/eyebrow-text/src/EyebrowText.stories.tsx`](../../../components/eyebrow-text/src/EyebrowText.stories.tsx)
