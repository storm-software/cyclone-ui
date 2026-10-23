---
title: Input
description: A composable text input with text box, value, separator, and trigger parts, three variants, three sizes, and validation colors inside a Field.
documentType: reference
tags: [component, input, form, text]
---

# Input

`Input` is a text input frame. You compose it from parts: a text box, a value, separators, and trigger buttons. It works on web and native. Put it in a [Field](./field.md) to connect it to form state and to show a label and validation messages.

## Import

```tsx
import { Input } from "@cyclone-ui/input";
```

## Usage

```tsx
<Form name="account" initialValues={{ email: "" }}>
  <Field name="email">
    <Field.Label>Email</Field.Label>
    <Input>
      <Input.TextBox>
        <Input.TextBox.Value placeholder="email@example.com" />
      </Input.TextBox>
    </Input>
  </Field>
</Form>
```

Add a trigger after the text box.

```tsx
<Input>
  <Input.TextBox>
    <Input.TextBox.Value />
  </Input.TextBox>
  <Input.Separator />
  <Input.Trigger onPress={search}>
    <Input.Trigger.Text>Go</Input.Trigger.Text>
  </Input.Trigger>
</Input>
```

`Input` also works without a `Field`. Then you set `name`, `size`, `variant`, `focused`, and `disabled` yourself.

## Props

### `Input`

Inside a `Field`, each prop that you leave unset takes its value from the field.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Field name | The input name. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | Field variant, or `"outlined"` | The frame style. |
| `size` | `"sm" \| "md" \| "lg"` | Field size, or `"md"` | The control size. |
| `disabled` | `boolean` | Field value, or `false` | Disables the input. |
| `focused` | `boolean` | Field value, or `false` | Shows the focus style. The frame also tracks focus on its own. |
| `circular` | `boolean` | `false` | Uses a fully round border radius. |
| `onChange` | `(event: CustomEvent<string>) => void` | Field `onChange` | Called when the text changes. It runs after `onInput`. |
| `onInput` | `(event: CustomEvent<string>) => void` | None | Called when the user provides input. It runs before `onChange`. |
| `onFocus`, `onBlur` | Event handler | Field handlers | Focus handlers. Focus that moves to a trigger inside the input is not a blur. |

### Parts

| Part | Description |
| --- | --- |
| `Input.TextBox` | The area that holds the value and any icons. It fills the free width. |
| `Input.TextBox.Value` | The native text control. Its value comes from the field's formatted value unless you set `value`. |
| `Input.Separator` | A vertical line between parts. Its color follows the focus and validation state. |
| `Input.Trigger` | A [Button](./button.md) in a square frame that matches the control size. It has `Icon` and `Text` slots. It accepts `size` and `forcePlacement`. |

### `Input.TextBox.Value`

It accepts the standard HTML input props and these extra props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | HTML input type or `"textarea"` | None | The input type. `textarea` renders a multiline control. |
| `placeholder` | `string` | None | The placeholder text. It shows only when the label does not cover it. |
| `placeholderTextColor` | Color token | `primary-disabled` | The placeholder color. |
| `selectionColor` | Color token | None | The text selection color. |
| `enterKeyHint` | `"done" \| "go" \| "next" \| "search" \| "send" \| "enter" \| "previous"` | `"done"` | The enter key label on mobile keyboards. |
| `render` | Element type | None | The HTML element to render on web. |

The props `keyboardType`, `editable`, `secureTextEntry`, `onChangeText`, `multiline`, and `size` on the value are marked as deprecated in the types. Use `type`, `readOnly`, `type="password"`, `onChange`, `render="textarea"` or `rows`, and the `size` of `Input` instead.

## Variants and states

| Variant | Style |
| --- | --- |
| `outlined` | A bordered frame with a `surface` background and the `control` radius. |
| `underlined` | A transparent frame with a bottom border. An underline grows from the center on focus. |
| `inlined` | Uses the outlined frame and its focus ring. The frame sets its own corner radius. |

- **Focus:** Outlined and inlined inputs show a ring (`ring-offset`, or `ring-subtle-offset` at `sm`). Underlined inputs show the underline.
- **Validation:** Inside a `Field` with a message, the border uses the `primary` color of the validation theme.
- **Disabled:** The frame shows the `not-allowed` cursor and the `primary-disabled` border.
- **Label:** The input asks the field for a `floating` label by default. The placeholder fades in 200ms after the label lifts.
- **Click:** A click on the frame padding, a separator, or an icon focuses the text input.

The stories show floating and above labels with each variant, a start icon, end icon truncation, required, clearable, disabled, a default value, the validation themes, and the three sizes. A story test checks that the `md` input is 43px high.

## Related

- [Field](./field.md)
- [Form](./form.md)
- [Number Input](./number-input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/input/src/Input.tsx`](../../../components/input/src/Input.tsx)
- [`components/input/src/InputValue.tsx`](../../../components/input/src/InputValue.tsx)
- [`components/input/src/types.ts`](../../../components/input/src/types.ts)
- [`components/input/src/Input.stories.tsx`](../../../components/input/src/Input.stories.tsx)
