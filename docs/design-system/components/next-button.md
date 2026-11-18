---
title: Next Button
description: A Button preset labeled Next with an animated right arrow that completes on hover.
documentType: reference
tags: [component, next-button, button, trigger]
component:
  name: next-button
  package: "@cyclone-ui/next-button"
  stories:
    - title: Triggers/NextButton
      file: components/next-button/src/NextButton.stories.tsx
---

# Next Button

`NextButton` is a [Button](./button.md) preset for "continue" actions. It shows the text "Next" and an animated right arrow. The arrow completes its animation while the pointer hovers over the button.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add next-button
pnpm install
```

- **File:** `NextButton.tsx`. The CLI writes it to `<path>/next-button/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/hooks`, `@tamagui/core`, and `@tamagui/stacks`.

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

## Anatomy

```tsx
<NextButton>Next</NextButton>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `NextButton` | A [`Button`](./button.md): a Tamagui `View` as `<button role="button">` | The pressable frame, with `aria-label="Next"` and `tooltip="Next"`. It centers its content. |
| Label | `Button.Text` | The children, or "Next" when there are none. `hideText` removes it. |
| Arrow | `Button.Icon` with `RightArrow` from `@cyclone-ui/icons/vectors`, an SVG drawn with `react-native-svg` | The arrow after the label. The label and arrow sit in a row with a `2xl` gap. |

## Examples

The examples are the stories in [`NextButton.stories.tsx`](../../../components/next-button/src/NextButton.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | The default button with the "Next" label. |
| `CustomText` | The label "Custom Text" from `children`. |

## Props

`NextButton` accepts all `ButtonProps` and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | `"Next"` | The button label. |
| `hideText` | `boolean` | `false` | Hides the label and shows only the arrow. |
| `animateShrink` | `boolean` | `false` | Animates the arrow shrinking back when the hover ends. When `false`, the arrow snaps back. |

## Behavior

- The content is centered. The label and arrow sit in a row with a `2xl` gap.
- The component tracks hover with the `useHover` hook and passes the state to `RightArrow` as `isComplete`. While the pointer is on the button, the arrow shaft grows over 250 ms.
- The component sets `aria-label="Next"` and `tooltip="Next"`, and your props can override them.

## Variants and states

Button variants, sizes, and states apply. The stories show the default label and a custom label.

## Accessibility

`aria-label="Next"` stays on the button when `hideText` is set. If you change the label, set `aria-label` to match. The button is a native `button`, so it takes keyboard focus. The `tooltip` shows on keyboard focus, as on [Button](./button.md).

## Related

- [Button](./button.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/next-button/src/NextButton.tsx`](../../../components/next-button/src/NextButton.tsx)
- [`components/next-button/src/NextButton.stories.tsx`](../../../components/next-button/src/NextButton.stories.tsx)
