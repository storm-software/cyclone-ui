---
title: Previous Button
description: A button with an animated left-arrow icon and a default "Previous" label, for back navigation.
documentType: reference
tags: [component, button, navigation, trigger]
component:
  name: previous-button
  package: "@cyclone-ui/previous-button"
  stories:
    - title: Triggers/PreviousButton
      file: components/previous-button/src/PreviousButton.stories.tsx
---

# Previous Button

`PreviousButton` is a [Button](./button.md) with a left-arrow icon and the label "Previous". The arrow animates while the pointer is over the button. Use it for back navigation, for example in [Pagination](./pagination.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add previous-button
pnpm install
```

- **File:** `PreviousButton.tsx`. The CLI writes it to `<path>/previous-button/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/hooks`, `@tamagui/core`, and `@tamagui/stacks`.

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

## Anatomy

```tsx
<PreviousButton>Previous</PreviousButton>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `PreviousButton` | A [`Button`](./button.md): a Tamagui `View` as `<button role="button">` | The pressable frame, with `aria-label="Previous"` and `tooltip="Previous"`. It centers its content. |
| Arrow | `Button.Icon` with `LeftArrow` from `@cyclone-ui/icons/vectors`, an SVG drawn with `react-native-svg` | The arrow before the label. The arrow and label sit in a row with a `2xl` gap. |
| Label | `Button.Text` | The children, or "Previous" when there are none. `hideText` removes it. |

## Examples

The examples are the stories in [`PreviousButton.stories.tsx`](../../../components/previous-button/src/PreviousButton.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | The default button with the "Previous" label. |
| `CustomText` | The label "Custom Text" from `children`. |

## Props

`PreviousButtonProps` is `ButtonProps` plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hideText` | `boolean` | `false` | Hides the label and shows only the arrow. |
| `animateShrink` | `boolean` | `false` | Animates the arrow shrinking back when the hover ends. When `false`, the arrow snaps back. |
| `children` | `ReactNode` | `"Previous"` | Custom label. |
| Other `ButtonProps` | — | — | Variant, size, theme, and so on. See [Button](./button.md). |

## Variants and states

- Default and custom text. The stories show `Base` and `CustomText`.
- The arrow shows its complete state while the button is hovered. The component tracks hover with the `useHover` hook. The arrow shaft grows over 250 ms.

## Accessibility

The button sets `aria-label="Previous"` and `tooltip="Previous"`. This label stays when you pass custom children or set `hideText`. If you change the label, set `aria-label` to match. The button is a native `button`, so it takes keyboard focus. The `tooltip` shows on keyboard focus, as on [Button](./button.md).

## Related

- [Button](./button.md)
- [Pagination](./pagination.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/previous-button/src/PreviousButton.tsx`](../../../components/previous-button/src/PreviousButton.tsx)
- [`components/previous-button/src/PreviousButton.stories.tsx`](../../../components/previous-button/src/PreviousButton.stories.tsx)
