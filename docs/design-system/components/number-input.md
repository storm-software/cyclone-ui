---
title: Number Input
description: A number text input with decrease and increase buttons that change the value by a set amount.
documentType: reference
tags: [component, number-input, input, form]
---

# Number Input

`NumberInput` is an [Input](./input.md) with `type="number"`. It adds a decrease button at the start and an increase button at the end of the text box. Wrap it in a [Field](./field.md) to connect it to a form.

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

## Props

`NumberInput` accepts the props of [Input](./input.md) and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `increment` | `number` | `1` | The amount that the buttons add or subtract. |
| `value` | `string` | None | The value of a controlled input. Inside a `Field`, the field holds the value. |
| `defaultValue` | `string` | `""` | The initial value of an uncontrolled input outside a `Field`. |
| `onChange` | `(event: CustomEvent<string>) => void` | Field `onChange` | Called when the value changes. If you set it, the field is not updated. |

### Parts

| Part | Description |
| --- | --- |
| `NumberInput.TextBox` | An `Input.TextBox` that adds the "Decrease value" and "Increase value" icon buttons. |
| `NumberInput.TextBox.Value` | An `Input.TextBox.Value` with `type="number"`. |
| `NumberInput.Trigger` | The `Input.Trigger` button. |

## Behavior

- A button press converts the current value with `Number()`. A value that is not a finite number counts as `0`.
- The new value is the current value plus or minus `increment`. It is passed to `onChange` as a string.
- The buttons are disabled when the input is disabled.

## Variants and states

Variants, sizes, and validation states come from [Input](./input.md) and [Field](./field.md). The stories show the default style, required, disabled, a default value, the `discovery`, `danger`, `warning`, `info`, and `success` themes, and the `sm`, `md`, and `lg` sizes.

## Accessibility

The buttons have the labels "Decrease value" and "Increase value". Their icons have `aria-hidden`.

## Related

- [Input](./input.md)
- [Field](./field.md)
- [Number Text](./number-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/number-input/src/NumberInput.tsx`](../../../components/number-input/src/NumberInput.tsx)
- [`components/number-input/src/NumberInput.stories.tsx`](../../../components/number-input/src/NumberInput.stories.tsx)
