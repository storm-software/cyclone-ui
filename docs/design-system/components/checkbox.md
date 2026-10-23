---
title: Checkbox
description: Reference for the Checkbox component, a form control for a checked, unchecked, or indeterminate value.
documentType: reference
tags: [component, form, checkbox, input]
---

# Checkbox

`Checkbox` is a square control that the user turns on or off. It can also show an indeterminate state. It connects to a form through the surrounding form control, such as a [Field](./field.md).

## Import

```tsx
import { Checkbox } from "@cyclone-ui/checkbox";
```

## Usage

Inside a form and a field, the checkbox takes its name, value, and state from the field:

```tsx
<Form name="settings" initialValues={{ news: true }}>
  <Field name="news">
    <XStack gap="3xl" alignItems="center">
      <Checkbox size="md" />
      <Field.Label paddingBottom={0}>Send me the newsletter</Field.Label>
    </XStack>
  </Field>
</Form>
```

Indeterminate state:

```tsx
<Checkbox checked="indeterminate" />
```

## Props

`Checkbox` accepts the props of the Tamagui checkbox, plus `focused`. Inside a form control, a prop that you do not set falls back to the state of the control.

| Prop              | Type                             | Default                      | Description                                                    |
| ----------------- | -------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| `size`            | `"sm" \| "md" \| "lg"`           | form control size, else `"md"` | The size of the box.                                         |
| `checked`         | `boolean \| "indeterminate"`     | form value, else see note    | The checked state.                                             |
| `defaultChecked`  | `boolean`                        | form default value           | The initial state for an uncontrolled checkbox.                |
| `onCheckedChange` | `(checked) => void`              | -                            | Called when the state changes. The form is updated too.        |
| `disabled`        | `boolean`                        | form disabled state          | Disables the checkbox.                                         |
| `name`            | `string`                         | form control name            | Used as the `id` of the control.                               |
| `focused`         | `boolean`                        | form focus state             | Shows the focused colors.                                      |
| `onFocus`, `onBlur` | handlers                       | form handlers                | Focus events.                                                  |

> **Note:** Outside a form control, the source sets `checked` to `true` when you do not pass it. Use the checkbox inside a [Field](./field.md), or pass `checked` or `defaultChecked` yourself.

## Sizes

| Size | Box size token |
| ---- | -------------- |
| `sm` | `6xl`          |
| `md` | `7xl`          |
| `lg` | `8xl`          |

The box is 80% of the token size. See [Design tokens](../tokens/index.md).

## States

- **Unchecked, checked.** The checked state shows a check mark.
- **Indeterminate.** Shows a horizontal bar.
- **Hover, focus.** The border uses `outline-hovered` and `outline-active`. A focus ring shows on keyboard focus. The `sm` size uses a thinner ring (`ring-subtle`).
- **Validation message.** When the field has a validation message, the border uses the `primary` color of the message theme.
- **Disabled.** The border uses `primary-disabled`.
- **Circular.** The frame has a `circular` variant that rounds it fully.

The stories show: `Base`, `Required`, `Disabled`, `DefaultValue`, `Indeterminate`, and validation stories (`Discovery`, `Error`, `Warning`, `Info`, and others).

## Accessibility

The frame is focusable (`tabIndex` 0). The inner control is the Tamagui checkbox. Pair it with a `Field.Label` so the control has a visible label.

## Related

- [Field](./field.md)
- [Form](./form.md)
- [Switch](./switch.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/checkbox/src/Checkbox.tsx`](../../../components/checkbox/src/Checkbox.tsx)
- [`components/checkbox/src/Checkbox.stories.tsx`](../../../components/checkbox/src/Checkbox.stories.tsx) (title: `Form/Checkbox`)
