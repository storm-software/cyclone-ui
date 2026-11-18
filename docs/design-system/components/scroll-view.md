---
title: Scroll View
description: A scroll container with a thin themed scrollbar on web, two width sizes, and a fullscreen variant.
documentType: reference
tags: [component, scroll, container]
component:
  name: scroll-view
  package: "@cyclone-ui/scroll-view"
  stories:
    - title: Display/ScrollView
      file: components/scroll-view/src/ScrollView.stories.tsx
---

# Scroll View

`ScrollView` is a scroll container built on the Tamagui `ScrollView`. On web, it shows a thin scrollbar that appears when you hover the container.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add scroll-view
pnpm install
```

- **File:** `ScrollView.tsx`. The CLI writes it to `<path>/scroll-view/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/constants`, `@tamagui/core`, and `@tamagui/scroll-view`.

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

## Anatomy

```tsx
<ScrollView>{children}</ScrollView>
```

| Part         | Renders                                                                                                   | Purpose                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `ScrollView` | A Tamagui `ScrollView` (a DOM scroll view on web) with the class `cyclone-scroll-view`. On web, it also renders a `<style>` element with `SCROLL_VIEW_STYLES`. | The scroll container. It holds the size and `fullscreen` variants and the themed scrollbar styles. |

## Examples

The examples are the stories in [`ScrollView.stories.tsx`](../../../components/scroll-view/src/ScrollView.stories.tsx). Each story puts a diagonal-line pattern in a scroll view with `maxHeight={400}`.

| Stories               | What they show                                                                  |
| --------------------- | ------------------------------------------------------------------------------- |
| `SmallSize`           | The default `sm` size (84% width) with 2000 px of content, so it scrolls.       |
| `LargeSize`           | The `lg` size (full width).                                                     |
| `FitsWithinMaxHeight` | 200 px of content that fits within the `maxHeight`, so it does not scroll.     |
| `ScrollingDisabled`   | `scrollEnabled={false}`.                                                        |
| `Fullscreen`          | `fullscreen`, which fills the parent.                                           |

## Props

`ScrollViewProps` is `GetProps<typeof ScrollView>`. It accepts the Tamagui `ScrollView` props plus the variants below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "lg"` | `"sm"` | `sm` sets the width to `84%`. `lg` sets the width to `100%`. |
| `fullscreen` | `boolean` | — | Sets `position: absolute` and `inset: 0`. The container fills its parent. |
| `scrollEnabled` | `boolean` | `true` | Turns scrolling on or off. |

`contentContainerStyle` goes to the underlying scroll view as is. It does not resolve Tamagui tokens.

## Scrollbar (web)

- The visible thumb is `6px` wide. A transparent `lg` space gap separates it from the outer edge of the container. The track and thumb are transparent until you hover.
- On hover, the thumb uses the `subtle` color. On thumb hover, it uses `subtle-hovered`.
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
