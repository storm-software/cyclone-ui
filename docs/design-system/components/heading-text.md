---
title: Heading Text
description: Six themed heading components from hero to extra small, and a HeadingText component that picks one from a level prop.
documentType: reference
tags: [component, heading-text, typography]
---

# Heading Text

The heading text package gives page and section titles a consistent size, weight, and color. It exports six level components and `HeadingText`, which chooses a level from the `level` prop. Each component renders a heading element and sets `role="heading"`.

## Import

```tsx
import {
  HeadingExtraSmallText,
  HeadingHeroText,
  HeadingLargeText,
  HeadingMediumText,
  HeadingSmallText,
  HeadingText,
  HeadingTitleText
} from "@cyclone-ui/heading-text";
```

## Usage

Use `HeadingText` with a `level`.

```tsx
<HeadingText level="hero">Build faster</HeadingText>
<HeadingText level={2} variant="editorial">Section title</HeadingText>
```

Or use a level component directly.

```tsx
<HeadingLargeText>Section title</HeadingLargeText>
```

## Props

All components accept the props of `SizableText`. The exported type is `HeadingTextProps`. They add the `variant` prop. `HeadingText` also adds `level`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"base" \| "editorial"` | `"base"` | Sets the font family. `base` uses `display`. `editorial` uses `editorial`. |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| "hero" \| "title" \| "lg" \| "md" \| "sm" \| "xs"` | None | Only on `HeadingText`. Selects the level component. |

Without a `level`, `HeadingText` renders the base style. The base style is a `span` with `role="heading"`, size `xl`, weight `semibold`, and color `primary`.

## Levels

| Component | `level` values | Element | Font size | Line height | Weight | Color |
| --- | --- | --- | --- | --- | --- | --- |
| `HeadingHeroText` | `"hero"` | `h1` | `5xl` | `5xl` | `semibold` | `primary` |
| `HeadingTitleText` | `1`, `"title"` | `h1` | `3xl` | `3xl` | `semibold` | `primary` |
| `HeadingLargeText` | `2`, `"lg"` | `h2` | `3xl` | `3xl` | `semibold` | `emphasis` |
| `HeadingMediumText` | `3`, `"md"` | `h3` | `xl` | `xl` | `bold` | `emphasis` |
| `HeadingSmallText` | `4`, `"sm"` | `h4` | `lg` | `sm` | `semibold` | `emphasis` |
| `HeadingExtraSmallText` | `5`, `"xs"` | `h5` | `md` | `xs` | `semibold` | `emphasis` |

## Variants and states

The stories show the base style, each level, and the `brand` theme.

## Accessibility

- Each level renders its matching `h1` to `h5` element.
- Choose a level that matches the page structure. A visual level and an `h1` to `h5` element are one choice here: `level` 1 and `"hero"` both render `h1`.

## Related

- [Design tokens](../tokens/index.md)
- [Eyebrow Text](./eyebrow-text.md)

## Source

- [`components/heading-text/src/HeadingText.tsx`](../../../components/heading-text/src/HeadingText.tsx)
- [`components/heading-text/src/HeadingText.stories.tsx`](../../../components/heading-text/src/HeadingText.stories.tsx)
