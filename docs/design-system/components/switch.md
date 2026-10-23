---
title: Switch
description: A toggle switch with an animated thumb, three sizes, a disabled state, validation borders, and an optional icon.
documentType: reference
tags: [component, switch, form, input]
---

# Switch

`Switch` is an on/off control. It renders a `button` with a round track and a thumb. Use it for settings that take effect as a binary choice. Put it in a `Field` to connect it to a form.

## Import

```tsx
import { Switch } from "@cyclone-ui/switch";
```

## Usage

Use `Switch` inside a `Field`. The field supplies the name, value, size, disabled state, and focus state. It also receives the change events.

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { Switch } from "@cyclone-ui/switch";

export function Example() {
  return (
    <Form name="settings" initialValues={{ notifications: false }}>
      <Field name="notifications">
        <Switch size="md" />
        <Field.Label>Enable notifications</Field.Label>
      </Field>
    </Form>
  );
}
```

`Switch` also works alone. Set `checked` or `defaultChecked`, and handle `onCheckedChange`.

## Anatomy

- **Frame:** A pill-shaped `button` with a 1px border. The width is two times the height.
- **Thumb:** A round `secondary` surface inside the frame. It is 2px smaller than the frame height.
- **Icon (optional):** `Switch.Icon` places an icon inside the track.

## Props

`Switch` accepts the props of the Tamagui switch (`createSwitch`) and adds these:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Sets the track and thumb size. A field value is used when `size` is not set. |
| `name` | `string` | Field name | Sets the control name. It is also used as the element `id`. |
| `checked` | `boolean` | Field value, or `false` | The checked state. |
| `defaultChecked` | `boolean` | Field default value | The initial checked state for an uncontrolled switch. |
| `disabled` | `boolean` | Field value, or `false` | Disables the switch. |
| `focused` | `boolean` | Field focus state, or `false` | Applies the focus border color. |
| `onCheckedChange` | `(checked: boolean) => void` | Field `onChange` | Called when the user changes the value. |
| `onFocus`, `onBlur` | `() => void` | Field handlers | Focus handlers. |
| `children` | `ReactNode` | — | Content placed in the track, usually `Switch.Icon`. |

Inside a form control, the source uses the form value for each prop that you leave unset.

### `Switch.Icon`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `"left" \| "right"` | `"right"` | Sets the side of the track for the icon. |
| `size` | `"sm" \| "md" \| "lg"` | Switch size | Sets the icon size from the compact form size. |
| `color` | Color token | `on-primary`, or `primary-disabled` when disabled | Sets the icon color. |

`Switch.Icon` renders a [`ThemeableIcon`](./themeable-icon.md), so its other props pass to that component.

## Variants and states

| State | Behavior |
| --- | --- |
| Sizes | `sm`, `md`, and `lg`. The track height comes from the compact form size token. |
| Checked | The frame background changes to `primary`. |
| Hover and focus | The border uses `outline-hovered` on hover and `primary-active` on focus. With no validation message, a focused control uses `outline-active`. |
| Validation message | The border uses `primary`, and `primary-hovered` on hover. The state comes from the wrapping `Field`. |
| Disabled | The cursor is `not-allowed`, and the border uses `primary-disabled`. |
| Field hover | Hovering the field label also changes the switch border. A story checks this. |

The stories show the `Required`, `Disabled`, `DefaultValue`, `Discovery`, `Error`, `Warning`, `Info`, and `Success` cases. The validation types are `danger`, `warning`, `info`, `discovery`, `success`, `positive`, and `negative`.

## Accessibility

- The frame is a `button` element with `tabIndex` set to `0`. The story selects it with the `switch` role.
- The focus ring uses the `ring-offset` shadow token. The `sm` size uses `ring-subtle-offset`.
- Pair the switch with a `Field.Label`. The source sets the label to sit next to the switch.

## Related

- [Design tokens](../tokens/index.md)
- [Themeable icon](./themeable-icon.md)

## Source

- [`components/switch/src/Switch.tsx`](../../../components/switch/src/Switch.tsx)
- [`components/switch/src/Switch.stories.tsx`](../../../components/switch/src/Switch.stories.tsx)
