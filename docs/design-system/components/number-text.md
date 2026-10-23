---
title: Number Text
description: Text that renders a number with NumberFlow so digits animate when the value changes.
documentType: reference
tags: [component, number-text, typography]
---

# Number Text

`NumberText` shows a number as text. It uses `NumberFlow` from `@number-flow/react`, so the digits animate when the value changes. It is a `SizableText` wrapper.

## Import

```tsx
import { NumberText } from "@cyclone-ui/number-text";
```

## Usage

Pass the number as `children`.

```tsx
<NumberText>{count}</NumberText>
<NumberText theme="brand">{1234567}</NumberText>
```

## Props

`NumberText` accepts the props of `SizableText`. The exported type is `NumberTextProps`.

| Prop | Type | Description |
| --- | --- | --- |
| `children` | Number or numeric string | The value to show. The component converts it with `Number()`. If the result is `NaN`, the component shows `0`. |

All other props go to the `SizableText` wrapper. The component does not pass format options to `NumberFlow`.

## Variants and states

The component has no variants. The story updates the value each second. The stories show the default style and these `theme` values: `brand`, `discovery`, `info`, `success`, `warning`, and `danger`.

## Related

- [Number Input](./number-input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/number-text/src/NumberText.tsx`](../../../components/number-text/src/NumberText.tsx)
- [`components/number-text/src/NumberText.stories.tsx`](../../../components/number-text/src/NumberText.stories.tsx)
