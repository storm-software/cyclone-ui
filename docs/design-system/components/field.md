---
title: Field
description: A form field wrapper that connects a control to form state and provides label, link, details, and icon parts, with validation messages and three layout variants.
documentType: reference
tags: [component, field, form, validation]
---

# Field

`Field` wraps a form control, such as [Input](./input.md) or [Date Picker](./date-picker.md). It links the control to the surrounding [Form](./form.md) state, shows the label, and shows validation messages. Use it as the base for labeled form inputs.

## Import

```tsx
import { Field } from "@cyclone-ui/field";
```

## Usage

```tsx
<Form name="account" initialValues={{ email: "" }}>
  <Field name="email" required>
    <Field.Label>Email</Field.Label>
    <Input>
      <Input.TextBox>
        <Input.TextBox.Value />
      </Input.TextBox>
    </Input>
    <Field.Details>We never share your email.</Field.Details>
  </Field>
</Form>
```

Add validators with the `validate` prop. A validator returns messages with a `message` and a `type`.

```tsx
<Field
  name="email"
  validate={{
    onChange: [() => [{ message: "Enter a valid email", type: "danger" }]]
  }}>
  ...
</Field>
```

## Props

### `Field`

`Field` accepts the field options of `@cyclone-ui/state/form` and the props of its frame. It adds `variant`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | The field name. It is the key in the form values. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The visual style of the control frame. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The control size. |
| `theme` | `string` | Form theme | The field theme. Validation messages change it. |
| `required` | `boolean` | `false` | Marks the field as required. |
| `disabled` | `boolean` | `false` | Disables the control. |
| `clearable` | `boolean` | `false` | Lets the user clear the value. |
| `validate` | Object | None | Validators for the `on...` validation causes. |
| `showErrorsBeforeBlur` | `boolean` | `false` | Shows errors before the field loses focus. |
| `debounceMs` | `number` | `250` | The debounce time for `onChange` and validation calls. |
| `mask` | `MaskitoOptions` | None | A Maskito input mask. |
| `format` | `(value) => string` | None | Converts the value to text. |
| `parse` | `(value) => value` | None | Converts text to the value. |
| `isEqual` | `(a, b) => boolean` | Default compare function | Compares two values. |
| `items` | Array of options | None | The options for a select control. |
| `onInitialize`, `onFocus`, `onBlur`, `onChange`, `onSubmit` | Callback | None | Lifecycle callbacks. |

### Parts

| Part | Description |
| --- | --- |
| `Field.Label` | The label. See below. |
| `Field.Link` | A [Link](./link.md) placed at the top right of the field, for example a "Learn more" link. |
| `Field.Details` | Help text under the control. It is hidden while the field shows a validation message. |
| `Field.Icon` | An icon button for the field. |
| `Field.ThemeIcon` | The status icon. It shows a spinner while the field validates. It shows an icon for the `danger`, `warning`, `info`, `discovery`, `success`, `positive`, and `negative` themes, and when the field is disabled. Children replace the status icon. |

### `Field.Label`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"floating" \| "above"` | `"floating"` for text box controls (Input, TextArea, Select, DatePicker), otherwise `"above"` | A floating label rests inside the control until the field has focus or a value. An above label sits over the control. |
| `hideRequired` | `boolean` | `false` | Hides the required marker. |
| `hideAsterisk` | `boolean` | `false` | Hides the asterisk. |
| `showOptional` | `boolean` | `false` | Shows an "(Optional)" note. |
| `floatingLabelLeft` | Position value | None | Sets the left offset of a floating label. |

Other props go to the label text. The label sets `htmlFor` to the field name. Use `getFieldLabelId(name)` to get the label id (`<name>-label`). Controls that are not labelable HTML elements, such as a slider thumb, reference it with `aria-labelledby`.

## Variants and states

- **Variants:** `outlined`, `underlined`, and `inlined`. Each works with a `floating` or `above` label. The stories show all six pairs.
- **Sizes:** `sm`, `md`, and `lg`.
- **States:** required, disabled, a default value, and a field with a link.
- **Validation themes:** `discovery`, `danger`, `warning`, `info`, and `success` appear in the stories. The `positive` and `negative` types are also supported.
- **Focus and hover:** The border uses the active border token on focus. Hover uses the validation or outline hover token. Tests check these colors.

## Accessibility

- The label points to the control with `htmlFor`.
- The required marker is an asterisk icon, and you can hide it with `hideAsterisk`.
- The disabled field shows the `not-allowed` cursor.

## Related

- [Form](./form.md)
- [Input](./input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/field/src/Field.tsx`](../../../components/field/src/Field.tsx)
- [`components/field/src/Field.stories.tsx`](../../../components/field/src/Field.stories.tsx)
- [`components/field/src/field-affordances.spec.ts`](../../../components/field/src/field-affordances.spec.ts)
- [`components/field/src/focus-color.spec.ts`](../../../components/field/src/focus-color.spec.ts)
