---
title: Text area
description: A multiline text input with outlined, underlined, and inlined variants, three sizes, and field validation styling.
documentType: reference
tags: [component, text-area, form, input]
---

# Text area

`TextArea` is a multiline text input. It renders a `textarea` element. It uses the same tokens and state behavior as `Input`. Use it for longer free text, such as a message or a description.

## Import

```tsx
import { TextArea } from "@cyclone-ui/text-area";
```

## Usage

Use `TextArea` inside a `Field`. The field supplies the name, value, size, disabled state, and focus state.

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { TextArea } from "@cyclone-ui/text-area";

export function Example() {
  return (
    <Form name="contact" initialValues={{ message: "" }}>
      <Field name="message">
        <Field.Label>Message</Field.Label>
        <TextArea placeholder="Enter a message" rows={3} />
      </Field>
    </Form>
  );
}
```

## Props

`TextAreaProps` is `GetProps<typeof TextArea>`. It accepts the `InputValue` props from `@cyclone-ui/input`, plus these:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `rows` | `number` | `3` | The number of visible text rows. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The frame style. Inside a field, the field variant is used. |
| `size` | `"sm" \| "md" \| "lg"` | Field size | The control size. It sets the font size, minimum height, and padding. |
| `disabled` | `boolean` | Field value, or `false` | Disables the control. |
| `focused` | `boolean` | Field focus state | Forces the focus highlight. |
| `name` | `string` | Field name | The control name. |
| `value` | `string` | Field formatted value | The text value. |
| `placeholder` | `string` | — | Shown when empty. Inside a field, the field decides when to show it. |
| `placeholderTextColor` | color token | `"primary-disabled"` | The placeholder color. |
| `onChange`, `onFocus`, `onBlur` | handlers | Field handlers | Change and focus handlers. `onChange` receives a `CustomEvent<string>`. |

## Variants and states

| State | Behavior |
| --- | --- |
| `outlined` | A `surface` background with a 1px `outline` border and the `control` radius. |
| `underlined` | A transparent background with only a bottom border. The text starts at the left edge. |
| `inlined` | Has no extra frame styles in the source. The field label placement controls the layout. |
| Hover | The border uses `outline-hovered`. |
| Focus | The border uses `outline-active` and a `ring-offset` shadow. The `sm` size uses `ring-subtle-offset`. |
| Validation message | The border uses `primary`, `primary-hovered` on hover, and `primary-active` on focus. |
| Disabled | The border uses `primary-disabled`. |
| Floating label | A field label floats by default. The text drops down to leave room for the label. |

The stories show `Floating`, `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating`, the matching `Above` stories, `Disabled`, `Required`, `DefaultValue`, `Discovery`, `Error`, `Warning`, `Info`, `Success`, and the three sizes.

The `minHeight` is `20xl` at the default size. The size variant sets it from `122 × the size scale`.

## Accessibility

- The control is a native `textarea`.
- The text area uses the `ScrollView` scrollbar styles from `@cyclone-ui/scroll-view`.
- Pair it with `Field.Label`. The source adds no other ARIA attributes.

## Related

- [Design tokens](../tokens/index.md)
- [Tag picker](./tag-picker.md)
- [Validation text](./validation-text.md)

## Source

- [`components/text-area/src/TextArea.tsx`](../../../components/text-area/src/TextArea.tsx)
- [`components/text-area/src/TextArea.stories.tsx`](../../../components/text-area/src/TextArea.stories.tsx)
