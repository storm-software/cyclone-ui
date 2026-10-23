---
title: PreviousButton
description: A button with an animated left-arrow icon and a default "Previous" label, for back navigation.
documentType: reference
tags: [component, button, navigation, trigger]
---

# PreviousButton

`PreviousButton` is a [Button](./button.md) with a left-arrow icon and the label "Previous". The arrow animates while the pointer is over the button. Use it for back navigation, for example in [Pagination](./pagination.md).

## Import

```tsx
import { PreviousButton } from "@cyclone-ui/previous-button";
```

## Usage

```tsx
<PreviousButton onClick={goBack} />
<PreviousButton>Back to results</PreviousButton>
<PreviousButton hideText />
```

## Props

`PreviousButtonProps` is `ButtonProps` plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hideText` | `boolean` | `false` | Hides the label and shows only the arrow. |
| `animateShrink` | `boolean` | `false` | Makes the arrow shrink. Taken from `LeftArrowProps` in `@cyclone-ui/vectors`. |
| `children` | `ReactNode` | `"Previous"` | Custom label. |
| Other `ButtonProps` | — | — | Variant, size, theme, and so on. See [Button](./button.md). |

## Variants and states

- Default and custom text. The stories show `Base` and `CustomText`.
- The arrow shows its complete state while the button is hovered.

## Accessibility

The button sets `aria-label="Previous"`. This label stays when you pass custom children or set `hideText`.

## Related

- [Button](./button.md)
- [Pagination](./pagination.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/previous-button/src/PreviousButton.tsx`](../../../components/previous-button/src/PreviousButton.tsx)
- [`components/previous-button/src/PreviousButton.stories.tsx`](../../../components/previous-button/src/PreviousButton.stories.tsx)
