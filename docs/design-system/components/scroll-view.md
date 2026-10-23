---
title: ScrollView
description: A scroll container with a thin themed scrollbar on web, two width sizes, and a fullscreen variant.
documentType: reference
tags: [component, scroll, container]
---

# ScrollView

`ScrollView` is a scroll container built on the Tamagui `ScrollView`. On web, it shows a thin scrollbar that appears when you hover the container.

## Import

```tsx
import { ScrollView } from "@cyclone-ui/scroll-view";
```

## Usage

```tsx
<ScrollView size="lg" maxHeight={240}>
  {items}
</ScrollView>

<ScrollView fullscreen>{items}</ScrollView>
```

## Props

`ScrollViewProps` is `GetProps<typeof ScrollView>`. It accepts the Tamagui `ScrollView` props plus the variants below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "lg"` | `"sm"` | `sm` sets the width to `84%`. `lg` sets the width to `100%`. |
| `fullscreen` | `boolean` | — | Sets `position: absolute` and `inset: 0`. The container fills its parent. |
| `scrollEnabled` | `boolean` | `true` | Turns scrolling on or off. |

## Scrollbar (web)

- The scrollbar is `6px` wide. Its track and thumb are transparent until you hover.
- On hover, the thumb uses the `subtlest` color. On thumb hover, it uses `subtlest-hovered`.
- Scrollbar buttons are hidden.
- The container reserves the scrollbar gutter (`scrollbar-gutter: stable`).
- Browsers without `::-webkit-scrollbar` use `scrollbar-color` instead.
- The component adds the class `cyclone-scroll-view`. The package also exports `SCROLL_VIEW_CLASS_NAME` and `SCROLL_VIEW_STYLES`.

## Variants and states

The stories show the small size, the large size, content that fits within a `maxHeight`, `scrollEnabled: false`, and `fullscreen`.

## Related

- [Popover](./popover.md) uses it as `Popover.Content.ScrollView`.
- [Design tokens](../tokens/index.md)

## Source

- [`components/scroll-view/src/ScrollView.tsx`](../../../components/scroll-view/src/ScrollView.tsx)
- [`components/scroll-view/src/ScrollView.stories.tsx`](../../../components/scroll-view/src/ScrollView.stories.tsx)
- [`components/scroll-view/src/ScrollView.spec.ts`](../../../components/scroll-view/src/ScrollView.spec.ts)
