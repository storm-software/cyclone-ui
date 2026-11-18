---
title: Checkbox
description: Reference for the Checkbox component, a form control for a checked, unchecked, or indeterminate value.
documentType: reference
tags: [component, form, checkbox, input]
component:
  name: checkbox
  package: "@cyclone-ui/checkbox"
  stories:
    - title: Form/Checkbox
      file: components/checkbox/src/Checkbox.stories.tsx
---

# Checkbox

`Checkbox` is a square control that the user turns on or off. It can also show an indeterminate state. It connects to a form through the surrounding form control, such as a [Field](./field.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add checkbox
pnpm install
```

- **File:** `Checkbox.tsx`. The CLI writes it to `<path>/checkbox/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/checkbox`, `@tamagui/checkbox-headless`, `@tamagui/core`, `@tamagui/stacks`, and `react-native-svg`.

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

## Anatomy

```tsx
<Checkbox />
```

| Part       | Renders                                                                                         | Purpose                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Checkbox` | A Tamagui `View` frame around the Tamagui `Checkbox`, which renders `<button role="checkbox">` on web | The box. The frame draws the border, the focus ring, and the fill. The inner button holds the checked state and takes the presses. |

The checkbox has no public parts. Inside the button, the Tamagui `Checkbox.Indicator` shows a check icon (`Confirm`), or a minus icon (`Minus`) when `checked="indeterminate"`. Inside a `<form>`, Tamagui also renders a hidden `<input type="checkbox">`. That input submits the value with the form under `name`.

## Examples

The examples are the stories in [`Checkbox.stories.tsx`](../../../components/checkbox/src/Checkbox.stories.tsx). Each story (except `Indeterminate`) puts the checkbox and a `Field.Label` in a `Field` inside a `Form`.

| Stories                                         | What they show                                                                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Base`, `DefaultValue`                          | An unchecked checkbox, and a checkbox that the form initializes to checked.                                    |
| `Required`, `Disabled`                          | A required field, and a disabled field.                                                                         |
| `ReadOnly`                                      | A checked, read-only checkbox. Its play function confirms `aria-readonly="true"`, and that a click does not uncheck it. |
| `Indeterminate`                                 | A checkbox outside a field with `checked="indeterminate"`.                                                      |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Error` shows the message before blur (`showErrorsBeforeBlur`).          |
| `SmallSize`, `MediumSize`, `LargeSize`          | The `sm`, `md`, and `lg` sizes.                                                                                 |

## Props

`Checkbox` accepts the props of the Tamagui checkbox, plus `focused` and `readOnly`. Inside a form control, a prop that you do not set falls back to the state of the control.

| Prop                | Type                         | Default                        | Description                                                                                                 |
| ------------------- | ---------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `size`              | `"sm" \| "md" \| "lg"`       | form control size, else `"md"` | The size of the box.                                                                                        |
| `checked`           | `boolean \| "indeterminate"` | form value, else see note      | The checked state.                                                                                          |
| `defaultChecked`    | `boolean \| "indeterminate"` | form default value             | The initial state for an uncontrolled checkbox.                                                             |
| `onCheckedChange`   | `(checked) => void`          | -                              | Called when the state changes. The form is updated too. It is not called when `readOnly` is set.            |
| `disabled`          | `boolean`                    | form disabled state            | Disables the checkbox.                                                                                      |
| `readOnly`          | `boolean`                    | form read-only state, else `false` | Ignores changes and sets `aria-readonly`. The checkbox stays focusable.                                 |
| `name`              | `string`                     | form control name              | The name of the hidden input that the checkbox submits with its form. It is also the `id` when the form control has no `id`. |
| `focused`           | `boolean`                    | form focus state               | Shows the focused colors.                                                                                   |
| `onFocus`, `onBlur` | handlers                     | form handlers                  | Focus events.                                                                                               |

> **Note:** Outside a form control, the source sets `checked` to `true` when you do not pass it. Use the checkbox inside a [Field](./field.md), or pass `checked` or `defaultChecked` yourself.

## Sizes

| Size | Box size token |
| ---- | -------------- |
| `sm` | `6xl`          |
| `md` | `7xl`          |
| `lg` | `8xl`          |

The box is 80% of the token size. The icon is 60% of the token size. See [Design tokens](../tokens/index.md).

## States

- **Unchecked.** The box has a `surface` background and a `hairline` border.
- **Checked, indeterminate.** An `emphasis` fill grows in and a `surface` icon draws in: a check mark for checked, a horizontal bar for indeterminate.
- **Hover, focus.** The border uses `primary-hovered` on hover (also when the pointer is on the field) and `hairline-active` on focus. A focus ring shows on focus. The `sm` size uses a thinner ring (`ring-subtle`).
- **Validation message.** When the field has a validation message, the border uses the `primary` color of the message theme, and `primary-active` on focus.
- **Disabled.** The background uses `surface-disabled`, the checked fill uses `primary-disabled`, and the cursor is `not-allowed`. On hover and press, the border uses `primary-disabled`.
- **Read-only.** Presses do not change the state.
- **Circular.** The frame has a `circular` variant that rounds it fully.

## Accessibility

- The inner control is a `<button role="checkbox">` with `aria-checked`. For the indeterminate state, `aria-checked` is `"mixed"`.
- Press Space to toggle the checkbox. Enter does not toggle it, as WAI-ARIA specifies for checkboxes.
- Inside a field, the checkbox gets the field `id`, `aria-invalid` when the field is invalid, and `aria-describedby` for the field messages. A required field sets `aria-required` (not `required`, because the hidden input cannot take focus). `readOnly` sets `aria-readonly`.
- The frame is also focusable (`tabIndex` 0).
- Pair the checkbox with a `Field.Label` so the control has a visible label. Inside a field, the checkbox asks the label to sit inline and centered beside it. With the `sm` size, the label uses the `xs` font size.

## Related

- [Field](./field.md)
- [Form](./form.md)
- [Switch](./switch.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/checkbox/src/Checkbox.tsx`](../../../components/checkbox/src/Checkbox.tsx)
- [`components/checkbox/src/Checkbox.stories.tsx`](../../../components/checkbox/src/Checkbox.stories.tsx) (title: `Form/Checkbox`)
