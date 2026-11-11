---
title: RadioGroup
description: A group of radio options, each with a label and an optional description. It connects to forms through Field.
documentType: reference
tags: [component, form, radio, selection]
---

# RadioGroup

`RadioGroup` lets the user pick one option from a list. Each item shows a label, an optional description, and a radio indicator. It is built on the Tamagui radio group.

Inside a `Field`, the group reads its name, value, size, and disabled state from the field.

## Import

```tsx
import { RadioGroup } from "@cyclone-ui/radio-group";
```

## Usage

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { RadioGroup } from "@cyclone-ui/radio-group";

<Form name="fruit" initialValues={{ fruit: "Pear" }}>
  <Field name="fruit">
    <Field.Label>Label Text</Field.Label>
    <RadioGroup size="md" width="500px">
      <RadioGroup.Item value="Apple" description="A crisp, sweet fruit.">
        Apple
      </RadioGroup.Item>
      <RadioGroup.Item value="Pear">Pear</RadioGroup.Item>
      <RadioGroup.Item value="Peach" disabled>
        Peach
      </RadioGroup.Item>
    </RadioGroup>
  </Field>
</Form>;
```

If you pass no children, the group renders the items of the enclosing form control.

## Parts

| Part | Description |
| --- | --- |
| `RadioGroup` | The root. |
| `RadioGroup.Item` | One option. The children are its label. |

## Props

### `RadioGroup`

It accepts the Tamagui radio group props plus the props below. Inside a form control, an unset prop falls back to the control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `FormControlSize` (`"sm" \| "md" \| "lg"`) | `"md"` | Size of the items. |
| `value` | `string` | — | Controlled value. |
| `defaultValue` | `string \| null` | — | Initial value when uncontrolled. |
| `onValueChange` | `(value: string) => void` | — | Called with the new value. |
| `name` | `string` | — | Group name. |
| `required` | `boolean` | — | Marks the group as required. |
| `disabled` | `boolean` | — | Disables every item. |

### `RadioGroup.Item`

| Prop | Type | Description |
| --- | --- | --- |
| `value` | `string` | The value of the option. |
| `description` | `string` | Text shown below the label. |
| `disabled` | `boolean` | Disables this item. It shows a lock in place of the indicator. |
| `children` | `ReactNode` | The label. |

Pressing anywhere on an item selects it.

## Server rendering and forms

The radios' hidden inputs take the group's `name`, so the selection posts with its form. Inside a `Field`, `required` defaults to the field's. Tamagui's roving focus group calls `Math.random()` while rendering, which a Next.js Cache Components prerender only allows inside a Suspense boundary. `RadioGroup` has its own boundary. If a prerender interrupts it, the static shell holds the same items, each with a visible native radio. Their labels select them, and they submit and validate without JavaScript. The full group replaces them once it renders.

## Variants and states

The stories show the sizes `sm`, `md`, and `lg`, and the states required, disabled, default value, and disabled item. They also show the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

Moving focus between the items does not blur the field.

## Related

- [Select](./select.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/radio-group/src/RadioGroup.tsx`](../../../components/radio-group/src/RadioGroup.tsx)
- [`components/radio-group/src/RadioGroup.stories.tsx`](../../../components/radio-group/src/RadioGroup.stories.tsx)
