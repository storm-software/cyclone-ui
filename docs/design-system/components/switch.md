---
title: Switch
description: A toggle switch with an animated thumb, three sizes, a disabled state, validation borders, and an optional icon.
documentType: reference
tags: [component, switch, form, input]
component:
  name: switch
  package: "@cyclone-ui/switch"
  stories:
    - title: Form/Switch
      file: components/switch/src/Switch.stories.tsx
---

# Switch

`Switch` is an on/off control. It renders a `button` with a round track and a thumb. Use it for settings that take effect as a binary choice. Put it in a `Field` to connect it to a form.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add switch
pnpm install
```

- **File:** `Switch.tsx`. The CLI writes it to `<path>/switch/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/get-token`, `@tamagui/react-native-types`, `@tamagui/stacks`, `@tamagui/switch`, and `@tamagui/switch-headless`.

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

```tsx
<Switch>
  <Switch.Icon placement="left">{icon}</Switch.Icon>
</Switch>
```

| Part          | Renders                                                                                      | Purpose                                                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `Switch`      | A Tamagui `View` as `<button role="switch">`, made with the Tamagui `createSwitch`            | The frame: a pill-shaped track with a 1px border. The width is two times the height. It holds the checked state and takes the presses. |
| Thumb         | A Tamagui `View` (the switch thumb)                                                          | A round knob inside the track. It is 2px smaller than the frame height. `Switch` adds it for you, after its children.        |
| `Switch.Icon` | A Tamagui `View`, absolutely positioned, around a `ThemeableIcon`                            | Optional. Places an icon inside the track, on the left or the right side.                                                     |

Inside a `<form>`, Tamagui also renders a hidden input. That input submits the value with the form under `name`.

`SwitchIcon` is also exported by name. Use it in React Server Components, which cannot read `Switch.Icon` from a client module.

## Examples

The examples are the stories in [`Switch.stories.tsx`](../../../components/switch/src/Switch.stories.tsx). Each story puts the switch and a `Field.Label` in a `Field` inside a `Form`.

| Stories                                            | What they show                                                                                                          |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `Base`                                             | An unchecked switch. Its play function confirms that a hover on the field label changes the switch border to the label color. |
| `Required`, `Disabled`                             | A required field, and a disabled field.                                                                                 |
| `DefaultValue`                                     | A field with `defaultValue` set to `true`.                                                                              |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Error` shows the message before blur (`showErrorsBeforeBlur`).                      |
| `SmallSize`, `MediumSize`, `LargeSize`             | The `sm`, `md`, and `lg` sizes.                                                                                         |

## Props

`Switch` accepts the props of the Tamagui switch (`createSwitch`) and adds these:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Sets the track and thumb size. A field value is used when `size` is not set. |
| `name` | `string` | Field name | Names the hidden input that the switch submits with its form. It is also the element `id` when the form control has no `id`. |
| `checked` | `boolean` | Field value, or `false` | The checked state. |
| `defaultChecked` | `boolean` | Field default value | The initial checked state for an uncontrolled switch. |
| `disabled` | `boolean` | Field value, or `false` | Disables the switch. |
| `readOnly` | `boolean` | Field value, or `false` | Ignores changes and sets `aria-readonly`. |
| `focused` | `boolean` | Field focus state, or `false` | Applies the focus border color. |
| `onCheckedChange` | `(checked: boolean) => void` | Field `onChange` | Called when the user changes the value. It is not called when `readOnly` is set. |
| `onFocus`, `onBlur` | `() => void` | Field handlers | Focus handlers. |
| `children` | `ReactNode` | — | Content placed in the track, usually `Switch.Icon`. |

Inside a form control, the source uses the form value for each prop that you leave unset.

### `Switch.Icon`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `"left" \| "right"` | `"right"` | Sets the side of the track for the icon. |
| `size` | `"sm" \| "md" \| "lg"` | Switch size | Sets the icon size from the compact form size. |
| `color` | Color token | `on-primary`, or `primary-disabled` when disabled | Sets the icon color. |

`Switch.Icon` renders a [`ThemeableIcon`](../icons/themeable-icon.md), so its other props pass to that component.

## Variants and states

| State | Behavior |
| --- | --- |
| Sizes | `sm`, `md`, and `lg`. The track height comes from the compact form size token. |
| Unchecked | The frame uses `surface` and a `hairline` border. The thumb uses `primary`. |
| Checked | The frame background changes to `primary`, and the border to `primary-active`. The thumb uses `surface`. |
| Hover and focus | The border uses `primary-hovered` on hover. On focus, it uses `hairline-active`, or `primary-active` when the switch is checked or has a validation message. A focus ring shows. |
| Validation message | The border uses `primary`, and `primary-hovered` on hover. The state comes from the wrapping `Field`. |
| Disabled | The frame uses `surface-disabled`, the border uses `primary-disabled`, and the cursor is `not-allowed`. The thumb uses `secondary-disabled`. A checked track uses `primary-disabled`. |
| Field hover | Hovering the field label also changes the switch border. The `Base` story checks this. |

The validation types are `danger`, `warning`, `info`, `discovery`, `success`, `positive`, and `negative`.

## Accessibility

- The frame is a `button` element with `role="switch"`, `aria-checked`, and `tabIndex` set to `0`. Because it is a native button, it takes keyboard focus, and Space or Enter toggles it.
- Inside a field, the switch gets the field `id`, `aria-invalid` when the field is invalid, and `aria-describedby` for the field messages. A required field sets `aria-required` (not `required`, because the hidden input cannot take focus). `readOnly` sets `aria-readonly`.
- The focus ring uses the `ring-offset` shadow token. The `sm` size uses `ring-subtle-offset`.
- Pair the switch with a `Field.Label`. The source sets the label to sit next to the switch.

## Related

- [Design tokens](../tokens/index.md)
- [Themeable icon](../icons/themeable-icon.md)

## Source

- [`components/switch/src/Switch.tsx`](../../../components/switch/src/Switch.tsx)
- [`components/switch/src/Switch.stories.tsx`](../../../components/switch/src/Switch.stories.tsx)
