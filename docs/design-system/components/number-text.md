---
title: Number Text
description: Text that renders a number with NumberFlow so digits animate when the value changes.
documentType: reference
tags: [component, number-text, typography]
component:
  name: number-text
  package: "@cyclone-ui/number-text"
  stories:
    - title: Typography/NumberText
      file: components/number-text/src/NumberText.stories.tsx
---

# Number Text

`NumberText` shows a number as text. It uses `NumberFlow` from `@number-flow/react`, so the digits animate when the value changes. It is a `SizableText` wrapper.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add number-text
pnpm install
```

- **File:** `NumberText.tsx`. The CLI writes it to `<path>/number-text/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@number-flow/react`, `@tamagui/core`, and `@tamagui/text`.

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

## Anatomy

```tsx
<NumberText>{value}</NumberText>
```

| Part         | Renders                                                                                   | Purpose                                         |
| ------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `NumberText` | A Tamagui `SizableText` in the `ink` color that holds a `NumberFlow` from `@number-flow/react` | A number whose digits animate when it changes. |

The frame sets the `ink` color, the same as [Body Text](./body-text.md). The `SizableText` default color key is not defined in the Cyclone themes.

## Examples

The examples are the stories in [`NumberText.stories.tsx`](../../../components/number-text/src/NumberText.stories.tsx). In each story the value starts at `0` and grows by a random amount from 0 to 24 each second, so the digits animate.

| Stories                                                    | What they show                                                                  |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `Base`                                                     | The default style.                                                              |
| `Brand`, `Discovery`, `Info`, `Success`, `Warning`, `Danger` | The `brand`, `discovery`, `info`, `success`, `warning`, and `danger` themes.   |

## Props

`NumberText` accepts the props of `SizableText`. The exported type is `NumberTextProps`.

| Prop | Type | Description |
| --- | --- | --- |
| `children` | Number or numeric string | The value to show. The component converts it with `Number()`. If the result is `NaN`, the component shows `0`. |

All other props go to the `SizableText` wrapper. The component does not pass format options to `NumberFlow`.

## Variants and states

The component has no variants. The story updates the value each second. The stories show the default style and these `theme` values: `brand`, `discovery`, `info`, `success`, `warning`, and `danger`.

## Related

- [Bytes Text](./bytes-text.md)
- [Number Input](./number-input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/number-text/src/NumberText.tsx`](../../../components/number-text/src/NumberText.tsx)
- [`components/number-text/src/NumberText.stories.tsx`](../../../components/number-text/src/NumberText.stories.tsx) (title: `Typography/NumberText`)
