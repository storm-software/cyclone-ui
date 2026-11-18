---
title: Radio Group
description: A group of radio options, each with a label and an optional description. It connects to forms through Field.
documentType: reference
tags: [component, form, radio, selection]
component:
  name: radio-group
  package: "@cyclone-ui/radio-group"
  stories:
    - title: Form/RadioGroup
      file: components/radio-group/src/RadioGroup.stories.tsx
---

# Radio Group

`RadioGroup` lets the user pick one option from a list. Each item shows a label, an optional description, and a radio indicator. It is built on the Tamagui radio group.

Inside a `Field`, the group reads its name, value, size, and disabled state from the field.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add radio-group
pnpm install
```

- **File:** `RadioGroup.tsx`. The CLI writes it to `<path>/radio-group/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Heading Text](./heading-text.md), and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/types`, `@tamagui/core`, `@tamagui/label`, `@tamagui/radio-group`, `@tamagui/stacks`, `@tamagui/web`, and `react-native-svg`.

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

## Anatomy

```tsx
<RadioGroup>
  <RadioGroup.Item value="apple" description="A crisp, sweet fruit." icon={icon}>
    Apple
  </RadioGroup.Item>
</RadioGroup>
```

| Part              | Renders                                                                                                                                  | Purpose                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RadioGroup`      | The Tamagui `RadioGroup`, with `role="radiogroup"`                                                                                       | The root. It holds the value, name, size, and disabled state, and shares them with the items. It stacks the items in a column.                                |
| `RadioGroup.Item` | An `XStack` frame (focusable, `tabIndex` 0) around a Tamagui `Label` as `<label>`, and a Tamagui `RadioGroup.Item` as `<button role="radio">` | One option. The children are the label text (`HeadingSmallText`). `description` shows below it in `BodyText`. `icon` shows on the left side. |

The label points to the radio with `htmlFor`. Pressing anywhere on an item selects it. With `indicatorStyle="check"` (the default), a check icon (`Confirm`) shows in the top right corner of the selected item. With `"circle"`, the radio shows with a filled circle. With `"none"`, only the colors mark the selection. In the `check` and `none` styles, the radio is still in the DOM but out of sight, so the item keeps its role, its arrow-key navigation, and its form value. A disabled item shows a lock icon (`Lock`) in place of the radio indicator.

`RadioGroupItemContainer` is also exported by name. It is the same component as `RadioGroup.Item`. Use it in React Server Components, which cannot read `RadioGroup.Item` from a client module.

## Examples

The examples are the stories in [`RadioGroup.stories.tsx`](../../../components/radio-group/src/RadioGroup.stories.tsx). Each story puts a `Field.Label` and a group of four items with descriptions in a `Field` inside a `Form`.

| Stories                                            | What they show                                                                                                                                       |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`, `DefaultValue`                             | A group with no selection, and a group that the form initializes to `Blackberry`.                                                                    |
| `CircleIndicator`, `NoIndicator`                   | The `circle` and `none` values of `indicatorStyle`, with `Blackberry` selected.                                                                      |
| `Required`, `Disabled`                             | A required field, and a disabled field.                                                                                                              |
| `Description`                                      | A long `Field.Details` text below the group.                                                                                                         |
| `DisabledItem`                                     | A disabled `Blackberry` item. Its play function confirms that a press on the text of an item selects only that item, and that the disabled item cannot be selected. |
| `WithIcons`                                        | An icon on each item, with `color="currentColor"`.                                                                                                   |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Error` shows the message before blur (`showErrorsBeforeBlur`).                                                   |
| `SmallSize`, `MediumSize`, `LargeSize`             | The `sm`, `md`, and `lg` sizes.                                                                                                                      |

## Props

### `RadioGroup`

It accepts the Tamagui radio group props plus the props below. Inside a form control, an unset prop falls back to the control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `FormControlSize` (`"sm" \| "md" \| "lg"`) | form control size, else `"md"` | Size of the items. |
| `value` | `string` | form value | Controlled value. |
| `defaultValue` | `string \| null` | form default value | Initial value when uncontrolled. |
| `onValueChange` | `(value: string) => void` | form change handler | Called with the new value. Inside a field, it gets the value of the field item (which can be a number or a boolean). It is not called when `readOnly` is set. |
| `name` | `string` | form control name | Group name. The hidden inputs of the radios take this name, so the selection submits with its form. It is also the `id` when the form control has no `id`. |
| `required` | `boolean` | form required state | Marks the group as required. |
| `disabled` | `boolean` | form disabled state | Disables every item. |
| `readOnly` | `boolean` | form read-only state, else `false` | Ignores changes and sets `aria-readonly` on the group. |
| `indicatorStyle` | `"check" \| "circle" \| "none"` | `"check"` | How the selected item is marked: a check in its top right corner, the filled circle of the radio, or only its colors. |
| `children` | `ReactNode` | form control items | The items. Without children, the group renders one item for each item of the form control. |

### `RadioGroup.Item`

It also accepts the props of an `XStack`.

| Prop | Type | Description |
| --- | --- | --- |
| `value` | `string \| number \| boolean \| null` | The value of the option. The radio uses it as a string. |
| `description` | `string` | Text shown below the label. |
| `icon` | `ReactNode` | An icon on the left side of the item, centered vertically. Give it `color="currentColor"` to follow the state colors of the item. A Cyclone icon without its own `variant` is drawn `regular`, and `filled` while the item is selected. |
| `disabled` | `boolean` | Disables this item. It shows a lock in place of the indicator. |
| `onPress` | `(event) => void` | Called on press, before the item is selected. It is not called when the group is read-only. |
| `children` | `ReactNode` | The label. |

## Server rendering and forms

The radios' hidden inputs take the group's `name`, so the selection posts with its form. Inside a `Field`, `required` defaults to the field's. Tamagui's roving focus group calls `Math.random()` while rendering, which a Next.js Cache Components prerender only allows inside a Suspense boundary. `RadioGroup` has its own boundary. If a prerender interrupts it, the static shell holds the same items, each with a visible native radio. Their labels select them, and they submit and validate without JavaScript. The full group replaces them once it renders.

## Variants and states

The stories show the sizes `sm`, `md`, and `lg`, and the states required, disabled, default value, and disabled item. They also show the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

- **No selection.** Each item uses the `surface` background and the `hairline` border.
- **Selected.** The selected item uses the `-active` colors (such as `surface-active`). The other items use the `-inactive` colors.
- **Hover.** An item that is not selected uses `surface-hovered` and a `primary-hovered` border.
- **Focus.** A focus ring shows around the item. The `sm` size uses a thinner ring (`ring-subtle-offset`).
- **Validation message.** The border uses the `primary` color of the message theme.
- **Disabled.** The item uses `surface-disabled` and `primary-disabled`, shows no focus ring, and the cursor is `not-allowed`.

Moving focus between the items does not blur the field.

## Accessibility

- The group has `role="radiogroup"`. Each radio is a `<button role="radio">` with `aria-checked`.
- Arrow keys move the focus between the radios and select the focused radio. Enter or Space selects the focused radio. Tamagui's roving focus group supplies this.
- Inside a field, the group gets the field `id`, `aria-invalid` when the field is invalid, and `aria-describedby` for the field messages. `readOnly` sets `aria-readonly`. A disabled item sets `aria-disabled` on its frame.
- Each item label is a `<label>` for its radio.

## Related

- [Select](./select.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/radio-group/src/RadioGroup.tsx`](../../../components/radio-group/src/RadioGroup.tsx)
- [`components/radio-group/src/RadioGroup.stories.tsx`](../../../components/radio-group/src/RadioGroup.stories.tsx)
