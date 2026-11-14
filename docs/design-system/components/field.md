---
title: Field
description: A form field wrapper that connects a control to form state and provides label, link, details, and icon parts, with validation messages and three layout variants.
documentType: reference
tags: [component, field, form, validation]
component:
  name: field
  package: "@cyclone-ui/field"
  stories:
    - title: Form/Field
      file: components/field/src/Field.stories.tsx
---

# Field

`Field` wraps a form control, such as [Input](./input.md) or [Date Picker](./date-picker.md). It links the control to the surrounding [Form](./form.md) state, shows the label, and shows validation messages. Use it as the base for labeled form inputs.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add field
pnpm install
```

- **File:** `Field.tsx`. The CLI writes it to `<path>/field/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Link](./link.md), [Link Text](./link-text.md), [Ripple Animation](./ripple-animation.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/types`, `@tamagui/core`, `@tamagui/get-font-sized`, `@tamagui/label`, `@tamagui/stacks`, and `@tamagui/text`.

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

## Anatomy

```tsx
<Field name="email">
  <Field.Label>Email</Field.Label>
  <Field.Link href="/help">Learn more</Field.Link>
  <Input>
    <Input.TextBox>
      <Field.Icon position="start">{icon}</Field.Icon>
      <Input.TextBox.Value />
      <Field.Button>Send</Field.Button>
    </Input.TextBox>
  </Input>
  <Field.Details>Help text</Field.Details>
</Field>
```

| Part              | Renders                                                                                                   | Purpose                                                                                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Field`           | A `FieldProvider` and a `Theme`, around a Tamagui `YStack` (group `field`) that holds the frame `YStack` and a `ValidationText` | The root. It holds the field state, gives the control its form props through `FormControlContext`, and shows the validation messages under the frame. The messages element has the id `<id>-messages`. |
| `Field.Label`     | A `@tamagui/label` `Label` (`<label>`) with the id `<id>-label` and `htmlFor` set to the control id. The text is a Tamagui `SizableText`. | The label. It shows the required asterisk or "(Optional)". When the text is cut off, it shows the full text in a `Tooltip`.                                                                       |
| `Field.Link`      | A [Link](./link.md) in an absolutely positioned Tamagui `XStack`                                          | A link at the top right of the field, for example a "Learn more" link.                                                                                                                         |
| `Field.Details`   | A Tamagui `SizableText` with the id `<id>-details`                                                        | Help text. Under the control, it is hidden while the field shows a validation message. With an `above` label, it renders under the label and stays visible.                                    |
| `Field.Icon`      | A ghost, circular [Button](./button.md) in a Tamagui `View`, with a separator line when `position` is set (except on `underlined`) | An icon button in the control. It sizes the icon from the field size and colors it from the field state.                                                                                       |
| `Field.Button`    | A `primary` [Button](./button.md) in a Tamagui `View`. With `asChild`, a Tamagui `Slot` renders your button instead. | A button that fills the height of the text box, at its start or end. Over a multiline control, it floats at a bottom corner. A string child becomes `Field.Button.Text`.                       |
| `Field.ThemeIcon` | `Field.Icon` with a `Tooltip`, or a `Spinner`                                                            | The status icon. It shows a spinner while the field validates. It shows an icon for the `danger`, `warning`, `info`, `discovery`, `success`, `positive`, and `negative` themes, and when the field is disabled. Its tooltip shows the messages or the details. A press focuses the field. Children replace the status icon. |

`Field.Button.Text` and `Field.Button.Icon` are `Button.Text` and `Button.Icon`.

`FieldLabel`, `FieldLink`, `FieldDetails`, `FieldIconButton`, `FieldButton`, and `FieldThemeIcon` are also exported by name. Use them in React Server Components, which cannot read `Field.Label` from a client module.

The control id (`<id>` above) is the field `name` plus a React `useId` suffix. Two forms can use the same field name, and each label still points to its own control.

## Examples

The examples are the stories in [`Field.stories.tsx`](../../../components/field/src/Field.stories.tsx). Most stories render a `Field` in a `Form`, with a `Field.Label` and a line of placeholder text in place of a control.

| Stories                                                                                                      | What they show                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`                                                                                                       | A field with a label and no args.                                                                                                                                   |
| `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating`, `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove` | Each `variant`. The stories also pass a `labelVariant` arg, which `Field` does not read. To change the label, set `variant` on `Field.Label`.                        |
| `WithLink`                                                                                                   | A `Field.Link` ("Learn more") beside the label.                                                                                                                     |
| `Required`, `Disabled`, `DefaultValue`                                                                       | `required`, `disabled`, and a `defaultValue` option.                                                                                                                |
| `Discovery`, `Error`, `Warning`, `Info`, `Success`                                                           | An `onChange` validator that returns a message of that type. `Error` also sets `showErrorsBeforeBlur`.                                                              |
| `WarningMessageState`                                                                                        | A probe button changes the value. The play function checks that `useFieldHasValidationMessage` becomes `true` after the debounced validation.                       |
| `SmallSize`, `MediumSize`, `LargeSize`                                                                       | The `sm`, `md`, and `lg` sizes.                                                                                                                                     |
| `AboveWithDetails`, `FloatingWithDetails`                                                                    | `Field.Details` with an `above` and a `floating` label. The play functions check that the details stay under an `above` label with a `danger` message, and that they are removed under the control while the message shows. |

## Props

### `Field`

`Field` accepts the field options of `@cyclone-ui/state/form`. It adds `variant` and `showDisabledMessage`. Its type also accepts the frame's view props, but `Field` sends them to the field state, not to the frame.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | The field name. It is the key in the form values. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The visual style of the control frame. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The control size. |
| `theme` | `string` | `"base"` | The field theme. Validation messages change it. |
| `required` | `boolean` | `false` | Marks the field as required, and sets `required` on the control's native element. |
| `minLength`, `maxLength`, `pattern`, `min`, `max`, `step` | Native constraint values | None | Set on a text control's native element. The browser enforces them before JavaScript loads; after that, the field reports the browser's message for them. |
| `disabled` | `boolean` | `false` | Disables the control. |
| `readOnly` | `boolean` | `false` | Prevents user edits and keeps the normal appearance. |
| `showDisabledMessage` | `boolean` | `false` | Shows "This field is disabled" under a disabled control. The tooltip of the lock icon shows it in all cases. |
| `clearable` | `boolean` | `false` | Shows a clear button at the end of the control while the field has a value and is not read-only. It sets the value back to the `defaultValue` option and focuses the control. |
| `validate` | Object | None | Validators for the `on...` validation causes. |
| `showErrorsBeforeBlur` | `boolean` | `false` | Shows errors before the field loses focus. |
| `debounceMs` | `number` | `100` | The debounce time in milliseconds for `onChange` and validation calls. |
| `mask` | `MaskitoOptions` | None | A Maskito input mask. |
| `format` | `(value) => string` | None | Converts the value to text. |
| `parse` | `(value) => value` | None | Converts text to the value. |
| `isEqual` | `(a, b) => boolean` | Default compare function | Compares two values. |
| `items` | Array of `{ name, value }` options | None | The options for a control with items, such as `Select` or `RadioGroup`. |
| `onInitialize`, `onFocus`, `onBlur`, `onChange`, `onSubmit` | Callback | None | Lifecycle callbacks. |

### `Field.Label`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"floating" \| "above"` | `"floating"` for text box controls (Input, TextArea, Select, DatePicker), otherwise `"above"` | A floating label rests inside the control until the field has focus or a value. An above label sits over the control. |
| `hideRequired` | `boolean` | `false` | Hides the required marker and the "(Optional)" note. |
| `hideAsterisk` | `boolean` | `false` | Hides the asterisk. |
| `showOptional` | `boolean` | `false` | Shows an "(Optional)" note when the field is not required. The note is hidden when it does not fit. |
| `floatingLabelLeft` | Position value | None | Sets the left offset of a floating label. |

Other props go to the label text. The label sets `htmlFor` to the control id (`useFormControl().id`). Use `getFieldLabelId(id)` to get the label id (`<id>-label`). Controls that are not labelable HTML elements, such as a slider thumb, reference it with `aria-labelledby`.

### `Field.Icon` and `Field.Button`

Both accept the props of [Button](./button.md#props).

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `"start" \| "end"` | `Field.Button`: `"end"` | The end of the control. A resting floating label stays clear of the icon or button. On `Field.Icon`, it also draws a separator line on the side that faces the text, except on `underlined`. |
| `size`, `controlSize` | `"sm" \| "md" \| "lg"` | The field size | The size. |
| `asChild` | `boolean` | `false` | `Field.Button` only. Renders your single child button (for example a `SubmitButton`) in place of the default `Button`. The child gets the field props, and props that it sets itself win. |

## Variants and states

- **Variants:** `outlined`, `underlined`, and `inlined`. Each works with a `floating` or `above` label (the `variant` of `Field.Label`).
- **Sizes:** `sm`, `md`, and `lg`.
- **States:** required, disabled, a default value, and a field with a link.
- **Validation themes:** `discovery`, `danger`, `warning`, `info`, and `success` appear in the stories. The `positive` and `negative` types are also supported.
- **Focus and hover:** On focus, the border uses `hairline-active`, or `primary-active` while the field shows a validation message. On hover, it uses `hairline-hovered` or `primary-hovered`. The specs check these tokens in the source.

## Accessibility

- The label points to the control with `htmlFor`. A mouse-down on the label does not move focus off the control.
- The control's native element gets `name`, so it submits with a native form post.
- While the field shows an error, the control has `aria-invalid="true"`. Its `aria-describedby` names the visible `Field.Details` text (`<id>-details`) and messages (`<id>-messages`).
- The required marker is an asterisk icon, and you can hide it with `hideAsterisk`.
- The disabled field shows the `not-allowed` cursor.

## Related

- [Form](./form.md)
- [Input](./input.md)
- [Submit Button](./submit-button.md), for `Field.Button asChild`
- [Validation text](./validation-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/field/src/Field.tsx`](../../../components/field/src/Field.tsx)
- [`components/field/src/Field.stories.tsx`](../../../components/field/src/Field.stories.tsx) (title: `Form/Field`)
- [`components/field/src/field-affordances.spec.ts`](../../../components/field/src/field-affordances.spec.ts)
- [`components/field/src/focus-color.spec.ts`](../../../components/field/src/focus-color.spec.ts)
