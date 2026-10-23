---
title: OTP Input
description: A one-time passcode input with one numeric text box per digit, paste support, and keyboard navigation.
documentType: reference
tags: [component, otp-input, input, form]
---

# OTP Input

`OtpInput` collects a one-time passcode. It shows one numeric text box for each digit. It moves focus as the user types. Wrap it in a [Field](./field.md) to connect the whole code to a form.

## Import

```tsx
import { OtpInput } from "@cyclone-ui/otp-input";
```

## Usage

```tsx
<Form name="verify" initialValues={{ code: "" }}>
  <Field name="code">
    <Field.Label>Code</Field.Label>
    <OtpInput length={6} onComplete={code => verify(code)} />
  </Field>
</Form>
```

## Props

`OtpInput` accepts the props of a `View` and adds these props. Inside a `Field`, each prop that you leave unset takes its value from the field.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | `number` | `4` | The number of digits. The component rounds it down and uses at least `1`. |
| `onComplete` | `(value: string) => void` | None | Called after the user fills every digit. |
| `name` | `string` | Field name, or a generated id | The name and `id` of the first digit. Other digits use `<name>-<index>`. |
| `size` | `"sm" \| "md" \| "lg"` | Field size | The size of the digit boxes. |
| `disabled` | `boolean` | Field value, or `false` | Disables all digits. |
| `value` | `string` | None | The code of a controlled input. Inside a `Field`, the field holds the value. |
| `defaultValue` | `string` | `""` | The initial code of an uncontrolled input outside a `Field`. |
| `onChange` | `(value: string) => void` | Field `onChange` | Called with the new code when a digit changes. |

## Behavior

- Each digit box accepts digits only. Other characters are removed.
- Typing a digit moves focus to the next box.
- A pasted code fills the boxes from the current one. The code is cut to fit.
- **Backspace** clears the current digit. If the box is empty, it clears the previous digit and moves focus there.
- **Left arrow** and **right arrow** move focus to the previous and next box.
- Focus selects the text in a box.
- The first box has `autoComplete="one-time-code"`. The numeric keyboard shows on mobile, and the last box uses the `done` enter key hint. Other boxes use `next`.
- Each box uses the `outlined` input style, and the active box shows the focus style.
- The group fires the field blur when focus leaves the whole group.

## Variants and states

The stories show the default four digits, paste, required, disabled, a default value, six digits, an error, and the three sizes.

## Accessibility

- The wrapper has `role="group"`.
- Each box has the label "Digit *n* of *length*".
- Each box uses `inputMode="numeric"` and `pattern="[0-9]*"`.

## Related

- [Input](./input.md)
- [Field](./field.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/otp-input/src/OtpInput.tsx`](../../../components/otp-input/src/OtpInput.tsx)
- [`components/otp-input/src/OtpInput.stories.tsx`](../../../components/otp-input/src/OtpInput.stories.tsx)
