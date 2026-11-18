---
title: Number Input
description: A number text input with decrease and increase buttons that change the value by a set amount.
documentType: reference
tags: [component, number-input, input, form]
component:
  name: number-input
  package: "@cyclone-ui/number-input"
  stories:
    - title: Form/NumberInput
      file: components/number-input/src/NumberInput.stories.tsx
---

# Number Input

`NumberInput` is an [Input](./input.md) with `type="number"`. It adds a decrease button at the start and an increase button at the end of the text box. Wrap it in a [Field](./field.md) to connect it to a form.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add number-input
pnpm install
```

- **File:** `NumberInput.tsx`. The CLI writes it to `<path>/number-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Field](./field.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Ripple Animation](./ripple-animation.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { NumberInput } from "@cyclone-ui/number-input";
```

## Usage

```tsx
<Form name="order" initialValues={{ quantity: "" }}>
  <Field name="quantity">
    <Field.Label>Quantity</Field.Label>
    <NumberInput increment={5}>
      <NumberInput.TextBox>
        <NumberInput.TextBox.Value placeholder="0" />
      </NumberInput.TextBox>
    </NumberInput>
  </Field>
</Form>
```

## Anatomy

```tsx
<NumberInput>
  <NumberInput.TextBox>
    <NumberInput.TextBox.Value />
  </NumberInput.TextBox>
  <NumberInput.Trigger />
</NumberInput>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `NumberInput` | An [`Input`](./input.md) frame (a Tamagui `XStack`) | The root. It holds the value and the `increment`, and shares them with its parts. |
| `NumberInput.TextBox` | An `Input.TextBox` (a Tamagui `XStack`), with two `Field.Icon` buttons: a ghost, circular `Button` (`<button>`) with a `Minus` icon at the start, and one with a `Plus` icon at the end | Holds the value and the "Decrease value" and "Increase value" icon buttons. |
| `NumberInput.TextBox.Value` | An `Input.TextBox.Value` as a native `<input type="number">` | The text box. On web, it hides the native spin buttons, because the icon buttons replace them. |
| `NumberInput.Trigger` | The `Input.Trigger`: a `Button` with the `link` variant | An optional button at the end of the input. |

`NumberInputTextBox`, `NumberInputTextBoxValue`, and `NumberInputTrigger` are also exported by name. Use them in React Server Components, which cannot read `NumberInput.TextBox` from a client module.

## Examples

The examples are the stories in [`NumberInput.stories.tsx`](../../../components/number-input/src/NumberInput.stories.tsx). Each story puts a `Field.Label` and a number input with the placeholder `0` in a `Field` inside a `Form`.

| Stories | What they show |
| --- | --- |
| `Base` | `increment={2}`. Its play function types `12`, presses the increase and decrease buttons (14, then 12), and uses ArrowUp and ArrowDown (13, then 12). It also checks the 43px text box height. |
| `Required` | A required field. Its play function confirms that the label shows no "(Optional)" text. |
| `Description` | A long `Field.Details` text, with the label above the input. |
| `Disabled` | A disabled field. The buttons are disabled too. |
| `DefaultValue` | A form initial value of `"Defaulted Text"`. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Error` shows the message before blur (`showErrorsBeforeBlur`). Its play function checks that the last icon button keeps a 32px width. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

`NumberInput` accepts the props of [Input](./input.md) and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `increment` | `number` | `1` | The amount that the buttons add or subtract. |
| `value` | `string` | None | The value of a controlled input. Inside a `Field`, the field holds the value. |
| `defaultValue` | `string` | `""` | The initial value of an uncontrolled input outside a `Field`. |
| `onChange` | `(event: CustomEvent<string>) => void` | Field `onChange` | Called when the value changes. If you set it, the field is not updated. |
| `readOnly` | `boolean` | Field read-only state, else `false` | From `Input`. Ignores changes from typing and from the buttons. |

`NumberInput.TextBox`, `NumberInput.TextBox.Value`, and `NumberInput.Trigger` accept the props of `Input.TextBox`, `Input.TextBox.Value`, and `Input.Trigger`. `NumberInput.TextBox.Value` always sets `type="number"`.

## Behavior

- A button press converts the current value with `Number()`. A value that is not a finite number counts as `0`.
- The new value is the current value plus or minus `increment`. It is passed to `onChange` as a string.
- The buttons are disabled when the input is disabled.
- When the input is read-only, the buttons and typing do not change the value.
- Outside a `Field`, and without `value`, the input keeps the typed value in its own state.

## Variants and states

Variants, sizes, and validation states come from [Input](./input.md) and [Field](./field.md). The stories show the default style, required, disabled, a default value, the `discovery`, `danger`, `warning`, `info`, and `success` themes, and the `sm`, `md`, and `lg` sizes.

## Accessibility

- The buttons have the labels "Decrease value" and "Increase value". Their icons have `aria-hidden`.
- The text box is a native number input (`role="spinbutton"`). ArrowUp and ArrowDown change the value by 1, as the `Base` story shows.

## Related

- [Input](./input.md)
- [Field](./field.md)
- [Number Text](./number-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/number-input/src/NumberInput.tsx`](../../../components/number-input/src/NumberInput.tsx)
- [`components/number-input/src/NumberInput.stories.tsx`](../../../components/number-input/src/NumberInput.stories.tsx)
