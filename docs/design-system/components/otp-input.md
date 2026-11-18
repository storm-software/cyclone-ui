---
title: OTP Input
description: A one-time passcode input with one numeric text box per digit, paste support, and keyboard navigation.
documentType: reference
tags: [component, otp-input, input, form]
component:
  name: otp-input
  package: "@cyclone-ui/otp-input"
  stories:
    - title: Form/OtpInput
      file: components/otp-input/src/OtpInput.stories.tsx
---

# OTP Input

`OtpInput` collects a one-time passcode. It shows one numeric text box for each digit. It moves focus as the user types. Wrap it in a [Field](./field.md) to connect the whole code to a form.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add otp-input
pnpm install
```

- **File:** `OtpInput.tsx`. The CLI writes it to `<path>/otp-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Input](./input.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

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

## Anatomy

```tsx
<OtpInput length={4} />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `OtpInput` | A Tamagui `View` with `role="group"`. It holds one [`Input`](./input.md) for each digit, and each `Input.TextBox.Value` renders `<input type="text">`. | The whole code. It connects the code to the field as one value. The field ref (masks and form registration) goes on the first digit. The digits do not read the field value, focus, label defaults, or status icon. |

`OtpInput` is a single part. It has no subcomponents.

## Examples

The examples are the stories in [`OtpInput.stories.tsx`](../../../components/otp-input/src/OtpInput.stories.tsx). Each story puts the input in a `Form` and a `Field` with the label "Code".

| Stories | What they show |
| --- | --- |
| `Base` | Four digits. The play function checks `autocomplete="one-time-code"` and `inputmode="numeric"`, types `1234`, checks that focus moves and `onComplete` gets `"1234"`, then clears two digits with **Backspace**. |
| `Paste` | Pasting `0123` into the first box fills all four boxes and calls `onComplete`. |
| `Required` | A required field. The play function checks that the label has no "(Optional)" text. |
| `Description` | A long `Field.Details` description that wraps. |
| `Disabled`, `DefaultValue` | Disabled digits, and a code that starts as `0123`. |
| `SixDigits` | `length={6}`. |
| `Error` | A `danger` validation message shown before blur. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

`OtpInput` accepts the props of a `View` and adds these props (`OtpInputProps`). Inside a `Field`, each prop that you leave unset takes its value from the field.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | `number` | `4` | The number of digits. The component rounds it down and uses at least `1`. |
| `onComplete` | `(value: string) => void` | None | Called after the user fills every digit. |
| `name` | `string` | Field name, or a generated id | The name and `id` of the first digit. Other digits use `<name>-<index>`. |
| `size` | `"sm" \| "md" \| "lg"` | Field size | The size of the digit boxes. |
| `disabled` | `boolean` | Field value, or `false` | Disables all digits. |
| `readOnly` | `boolean` | Field value, or `false` | Prevents edits without the disabled colors. |
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
- Each box is a tab stop (`tabIndex={0}`). The `Input` frame around it is not (`tabIndex={-1}`).

## Related

- [Input](./input.md)
- [Field](./field.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/otp-input/src/OtpInput.tsx`](../../../components/otp-input/src/OtpInput.tsx)
- [`components/otp-input/src/OtpInput.stories.tsx`](../../../components/otp-input/src/OtpInput.stories.tsx)
