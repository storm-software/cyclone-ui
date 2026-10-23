---
title: Select
description: A dropdown select with a text box and a list of items. The list is a popover on large screens and a bottom sheet on small screens.
documentType: reference
tags: [component, form, select, dropdown]
---

# Select

`Select` is a dropdown field. It has `Select.TextBox`, `Select.TextBox.Value`, and `Select.Items` parts. The items open in a `ContextMenu`: a popover on large screens and a bottom [Sheet](./sheet.md) on small screens.

Inside a `Field`, the select reads its name, value, size, variant, and disabled state from the field. If you pass no children, it renders a text box and the items of the field.

## Import

```tsx
import { Select } from "@cyclone-ui/select";
```

## Usage

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { Select } from "@cyclone-ui/select";

<Form name="fruit" initialValues={{ fruit: "Pear" }}>
  <Field name="fruit">
    <Field.Label>Label Text</Field.Label>
    <Select size="md">
      <Select.TextBox>
        <Select.TextBox.Value placeholder="Choose a fruit" />
      </Select.TextBox>
      <Select.Items>
        <Select.Items.Item value="Apple">Apple</Select.Items.Item>
        <Select.Items.Item value="Pear">Pear</Select.Items.Item>
        <Select.Items.Item value="Melon" disabled>
          Melon
        </Select.Items.Item>
      </Select.Items>
    </Select>
  </Field>
</Form>;
```

## Parts

| Part | Description |
| --- | --- |
| `Select` | The root. Wraps a `ContextMenu`. |
| `Select.TextBox` | The trigger that looks like a text box. |
| `Select.TextBox.Value` | Shows the selected value or the `placeholder`. |
| `Select.Items` | The list of options. |
| `Select.Items.Item` | One option. |

## Props

### `Select`

It accepts the `ContextMenu` props (without `value` and `onValueChange`) and the Input context props. Inside a form control, an unset prop falls back to the control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | The selected value when controlled. |
| `defaultValue` | `string` | — | The initial value when uncontrolled. |
| `placeholder` | `string` | — | Shown while nothing is selected, when the select renders its own value inside a `Field`. |
| `onChange` | `(event: CustomEvent<string \| null>) => any` | — | Called with the new value in `event.detail`. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size of the text box and items. |
| `variant` | field variant | `"outlined"` (field variant inside a `Field`) | Visual style of the text box. |
| `disabled` | `boolean` | — | Disables the select. A disabled select does not open. |
| `name` | `string` | — | Name of the field. |
| `placement` | placement | `"bottom"` | Placement of the popover. |

### `Select.Items.Item`

| Prop | Type | Description |
| --- | --- | --- |
| `value` | `string` | The value of the option. |
| `disabled` | `boolean` | Disables the option. |
| `children` | `ReactNode` | The label. It does not wrap. |

The item also accepts the other `ContextMenu.Item` props.

## Behavior

- Choosing an item sets the value, calls `onChange`, and closes the menu.
- The text box stays visually active while the menu is open.
- The list is at least as wide as the text box, plus `4px` on each side.
- The list always uses the `base` theme. A validation theme on the field does not tint the options.
- Inside a `Field`, the label uses the floating style by default.

The package also exports `getSelectContentSize`.

## Accessibility

The list has `role="listbox"`. Each item has `role="option"` and `aria-selected`.

## Variants and states

The stories show floating, outlined, underlined, and inlined label variants, labels above the field, the sizes `sm`, `md`, and `lg`, and the states required, disabled, default value, long value, and a disabled option. They also show the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [SearchInput](./search-input.md)
- [RadioGroup](./radio-group.md)
- [Sheet](./sheet.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/select/src/Select.tsx`](../../../components/select/src/Select.tsx)
- [`components/select/src/SelectItems.tsx`](../../../components/select/src/SelectItems.tsx)
- [`components/select/src/SelectTextBox.tsx`](../../../components/select/src/SelectTextBox.tsx)
- [`components/select/src/SelectValue.tsx`](../../../components/select/src/SelectValue.tsx)
- [`components/select/src/Select.stories.tsx`](../../../components/select/src/Select.stories.tsx)
