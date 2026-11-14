---
title: Text Area
description: A multiline text input with outlined, underlined, and inlined variants, three sizes, and field validation styling.
documentType: reference
tags: [component, text-area, form, input]
component:
  name: text-area
  package: "@cyclone-ui/text-area"
  stories:
    - title: Form/TextArea
      file: components/text-area/src/TextArea.stories.tsx
---

# Text Area

`TextArea` is a multiline text input. It renders a `textarea` element. It uses the same tokens and state behavior as `Input`. Use it for longer free text, such as a message or a description.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add text-area
pnpm install
```

- **File:** `TextArea.tsx`. The CLI writes it to `<path>/text-area/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Input](./input.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/constants` and `@tamagui/core`.

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

## Anatomy

```tsx
<TextArea>
  <Field.Button>Send</Field.Button>
</TextArea>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `TextArea` | The `InputValue` part of [Input](./input.md), styled as a `<textarea>` | The text control. It draws its own border, background, and focus ring. It hides the browser resize grip and uses the `ScrollView` scrollbar styles. |
| Decoration frame | A Tamagui `View` around the `<textarea>` | Added for the `underlined` and `inlined` variants, when the field label sits on the border, or when the text area has children. It holds the underline (`underlined`) or the notched outline (`outlined`), then the children. |
| children | Any parts, such as `Field.Button` | Optional. They float over the bottom end corner of the text area, above its text. |

`TextArea` is a single export. It has no subcomponents.

## Examples

The examples are the stories in [`TextArea.stories.tsx`](../../../components/text-area/src/TextArea.stories.tsx). Each story puts the text area in a `Form` and a `Field` with the label `Label Text`, the placeholder `Enter a message`, and 3 rows.

| Stories | What they show |
| --- | --- |
| `Base` | The default text area. A test checks that it is a `TEXTAREA`, that the resting label is centered on the first line, that a focus ring shows on focus, and that it accepts typed text. |
| `Floating`, `FloatingWithPlaceholder` | A floating label without a placeholder, and with one. |
| `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating`, `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove` | Each variant with a floating label and with a label above the text area. |
| `Description` | A long `Field.Details` description under a label above the text area. |
| `Disabled`, `Required`, `DefaultValue` | A disabled text area, a required field (no `(Optional)` text), and an initial value. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | Each validation message type. `Error` shows its message before blur. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |
| `WithButton` | A `Field.Button` child in outlined, underlined, and inlined text areas with a long value. The button floats over the bottom end corner with a 4px inset. |

## Props

`TextAreaProps` is `GetProps<typeof TextArea>`. It accepts the `InputValue` props from `@cyclone-ui/input`, plus these:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `rows` | `number` | `3` | The number of visible text rows. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The frame style. Inside a field, the field variant is used. |
| `size` | `"sm" \| "md" \| "lg"` | Field size | The control size. It sets the font size, minimum height, and padding. |
| `disabled` | `boolean` | Field value, or `false` | Disables the control. |
| `readOnly` | `boolean` | Field value, or `false` | Prevents edits without the disabled colors. |
| `focused` | `boolean` | Field focus state | Forces the focus highlight. Without a field, the text area tracks its own focus. |
| `name` | `string` | Field name | The control name. |
| `value` | `string` | Field formatted value | The text value. |
| `placeholder` | `string` | — | Shown when empty. Inside a field, the field decides when to show it. |
| `placeholderTextColor` | color token | `"primary-disabled"` | The placeholder color. |
| `onChange`, `onFocus`, `onBlur` | handlers | Field handlers | Change and focus handlers. `onChange` receives a `CustomEvent<string>`. Focus that moves inside the text area is not a blur. |
| `children` | `ReactNode` | — | Parts that float over the bottom end corner, such as `Field.Button`. |

## Variants and states

| State | Behavior |
| --- | --- |
| `outlined` | A `surface` background with a 1px `hairline` border and the `control` radius. |
| `underlined` | A transparent background with only a bottom border. The text starts at the left edge. An underline grows from the center on focus. |
| `inlined` | Has no extra frame styles in the source. The field label placement controls the layout. |
| Hover | The border uses `hairline-hovered`. |
| Focus | The border uses `hairline-active`. Outlined and inlined text areas show a `ring-offset` shadow. The `sm` size uses `ring-subtle-offset`. |
| Validation message | The border uses `primary`, `primary-hovered` on hover, and `primary-active` on focus. |
| Disabled | A `surface-disabled` background. On hover, the border uses `primary-disabled`. |
| Floating label | A field label floats by default. The text drops down to leave room for the label. |

The `minHeight` is `20xl` when no size is set. The size variant sets it to `122 × the size scale`.

## Accessibility

- The control is a native `textarea`.
- The text area uses the `ScrollView` scrollbar styles from `@cyclone-ui/scroll-view`.
- Pair it with `Field.Label`. Inside a `Field`, the text area gets the field `id`, so the label targets it.
- Inside a `Field`, the text area also gets `required`, `minLength`, `maxLength`, `aria-invalid`, and `aria-describedby` from the field. The browser can then validate the value without JavaScript.

## Related

- [Input](./input.md)
- [Field](./field.md)
- [Form](./form.md)
- [Design tokens](../tokens/index.md)
- [Tag picker](./tag-picker.md)
- [Validation text](./validation-text.md)

## Source

- [`components/text-area/src/TextArea.tsx`](../../../components/text-area/src/TextArea.tsx)
- [`components/text-area/src/TextArea.stories.tsx`](../../../components/text-area/src/TextArea.stories.tsx) (title: `Form/TextArea`)
