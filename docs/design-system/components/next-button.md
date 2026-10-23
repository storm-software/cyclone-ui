---
title: Next Button
description: A Button preset labeled Next with an animated right arrow that completes on hover.
documentType: reference
tags: [component, next-button, button, trigger]
---

# Next Button

`NextButton` is a [Button](./button.md) preset for "continue" actions. It shows the text "Next" and an animated right arrow. The arrow completes its animation while the pointer hovers over the button.

## Import

```tsx
import { NextButton } from "@cyclone-ui/next-button";
```

## Usage

```tsx
<NextButton onPress={goToNextStep} />
<NextButton>Continue</NextButton>
<NextButton hideText />
```

## Props

`NextButton` accepts all `ButtonProps` and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | `"Next"` | The button label. |
| `hideText` | `boolean` | `false` | Hides the label and shows only the arrow. |
| `animateShrink` | `boolean` | `false` | Passed to the `RightArrow` component from `@cyclone-ui/vectors`. |

## Behavior

- The content is centered. The label and arrow sit in a row with a `2xl` gap.
- The component tracks hover with the `useHover` hook and passes the state to `RightArrow` as `isComplete`.
- The component sets `aria-label="Next"`, and your props can override it.

## Variants and states

Button variants, sizes, and states apply. The stories show the default label and a custom label.

## Accessibility

`aria-label="Next"` stays on the button when `hideText` is set. If you change the label, set `aria-label` to match.

## Related

- [Button](./button.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/next-button/src/NextButton.tsx`](../../../components/next-button/src/NextButton.tsx)
- [`components/next-button/src/NextButton.stories.tsx`](../../../components/next-button/src/NextButton.stories.tsx)
