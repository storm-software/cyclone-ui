---
title: Select
description: A dropdown select with a text box and a list of items. The list is a popover on large screens and a bottom sheet on small screens.
documentType: reference
tags: [component, form, select, dropdown]
component:
  name: select
  package: "@cyclone-ui/select"
  stories:
    - title: Form/Select
      file: components/select/src/Select.stories.tsx
---

# Select

`Select` is a dropdown field. It has `Select.TextBox`, `Select.TextBox.Value`, and `Select.Items` parts. The items open in a `ContextMenu`: a popover on large screens and a bottom [Sheet](./sheet.md) on small screens.

Inside a `Field`, the select reads its name, value, size, variant, and disabled state from the field. If you pass no children, it renders a text box and the items of the field.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add select
pnpm install
```

- **Files:** `Select.tsx`, `SelectItems.tsx`, `SelectTextBox.tsx`, `SelectValue.tsx`, `types.ts`, and `utilities.ts`. The CLI writes them to `<path>/select/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/types`, `@tamagui/core`, `@tamagui/group`, `@tamagui/stacks`, and `@tamagui/web`.

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

## Anatomy

```tsx
<Select>
  <Select.TextBox>
    <Select.TextBox.Value />
  </Select.TextBox>
  <Select.Items>
    <Select.Items.Item value="...">Label</Select.Items.Item>
  </Select.Items>
</Select>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Select` | A [`ContextMenu`](./context-menu.md) inside a React `Suspense` boundary. On web, with a `name`, it also renders `<input type="hidden">`. | The root. It holds the value, size, variant, and disabled state and shares them with its parts. The hidden input carries the value when the form submits. |
| `Select.TextBox` | A Tamagui `XStack` frame around a Tamagui `View` as `<button type="button">`, the `ContextMenu.Trigger` | The trigger that looks like a text box. The frame draws the border and focus ring. After the value, it shows a separator and a chevron that turns up while the menu is open. Inside a `Field`, it also shows the field status icon. The button has `data-select-trigger`, `aria-required`, `aria-invalid`, and `aria-describedby` from the field. |
| `Select.TextBox.Value` | A Tamagui `Text` | Shows the children, else the selected value, else the `placeholder`. A long value ends with an ellipsis and shows the full text in a [`Tooltip`](./tooltip.md). |
| `Select.Items` | `ContextMenu.Content` with a scroll view that has `role="listbox"` | The list of options. It is a popover on large screens and a bottom [Sheet](./sheet.md) on small screens. Without children, it renders the `items` of the field. |
| `Select.Items.Item` | `ContextMenu.Item` (a `<button>`) with `role="option"` and `aria-selected` | One option. The selected option shows a check mark. A disabled option shows a lock. |

Without children, a `Select` inside a `Field` renders a `Select.TextBox`, a `Select.TextBox.Value` with the `placeholder`, and a `Select.Items` with the field items.

`SelectTextBox`, `SelectTextBoxValue`, and `SelectItems` are also exported by name. Use them in React Server Components, which cannot read `Select.TextBox` from a client module. `SelectItemsItem` is exported from `@cyclone-ui/select/SelectItems`.

## Examples

The examples are the stories in [`Select.stories.tsx`](../../../components/select/src/Select.stories.tsx). Most stories put the select in a `Form` and a `Field` with 23 fruit options. Melon and Lemon are disabled.

| Stories | What they show |
| --- | --- |
| `Base` | The default select. The play function chooses Pear, opens the menu again, checks that Pear has `aria-selected="true"`, and checks that the disabled Melon does not close the menu. |
| `Floating`, `FloatingWithPlaceholder` | A floating label without a placeholder, and with the placeholder `email@example.com`. |
| `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating` | The `outlined`, `underlined`, and `inlined` variants with a floating label. |
| `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove` | The same variants with the label above the field. |
| `Description` | A long `Field.Details` description that wraps. |
| `Required`, `Disabled`, `DefaultValue` | A required field, a disabled field, and a field that starts with Starfruit. |
| `Small`, `Large`, `LongValue` | The `sm` and `lg` sizes with a value, and a long value in an `sm` select. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes without a value. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Discovery` and `Error` show it before blur. |
| `TruncatedValue` | Long values in narrow `sm`, `md`, and `lg` selects. The play function checks the ellipsis, checks that the value typography matches an `Input`, and chooses California. |

## Props

### `Select`

It accepts the `ContextMenu` props (without `value`, `onValueChange`, and `variant`) and the Input context props. Inside a form control, an unset prop falls back to the control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — (the field value inside a `Field`) | The selected value when controlled. |
| `defaultValue` | `string` | — (the field default value inside a `Field`) | The initial value when uncontrolled. |
| `placeholder` | `string` | — | Shown while nothing is selected, when the select renders its own value inside a `Field`. |
| `onChange` | `(event: CustomEvent<string \| null>) => any` | the field `onChange` | Called with the new value in `event.detail`. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` (the field size inside a `Field`) | Size of the text box and items. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` (field variant inside a `Field`) | Visual style of the text box. `underlined` draws only a bottom border and rounds only the top corners. |
| `circular` | `boolean` | `false` | Fully rounds the text box. |
| `disabled` | `boolean` | — (the field state inside a `Field`) | Disables the select. A disabled select does not open and hides its separator and chevron. |
| `readOnly` | `boolean` | `false` (the field state inside a `Field`) | The menu does not open and choices are ignored. |
| `focused` | `boolean` | — (the field state inside a `Field`) | Shows the focus style. The select also shows it while the menu is open. |
| `name` | `string` | — (the field name inside a `Field`) | Name of the field. It names the hidden input and is the trigger `id` when there is no field `id`. |
| `placement` | placement | `"bottom"` | Placement of the popover. |

### `Select.TextBox.Value`

It accepts the props of a Tamagui `Text`, plus:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `placeholder` | `string` | — | Shown while nothing is selected. Inside a `Field`, a resting floating label hides it. |

### `Select.Items.Item`

| Prop | Type | Description |
| --- | --- | --- |
| `value` | `string` | The value of the option. Other values are converted to a string. |
| `disabled` | `boolean` | Disables the option. |
| `children` | `ReactNode` | The label. It does not wrap. |

The item also accepts the other `ContextMenu.Item` props. It also accepts the `SelectOption` fields `index`, `selected`, `description`, `status`, `icon`, and `image`, but it does not use them. The selected state comes from the select value.

## Behavior

- Choosing an item sets the value, calls `onChange`, and closes the menu.
- The text box stays visually active while the menu is open.
- The list is at least as wide as the text box, plus `4px` on each side.
- The list always uses the `base` theme. A validation theme on the field does not tint the options.
- Inside a `Field`, the label uses the floating style by default.

The package also exports `getSelectContentSize`.

### Server rendering and forms

A hidden input carries the selected value under the select's `name`, so it posts with its form. Tamagui's popover calls `Math.random()` while rendering, which a Next.js Cache Components prerender only allows inside a Suspense boundary. `Select` has its own boundary. If a prerender interrupts it, the static shell holds a native `<select>` drawn like the closed control. That fallback lists the field's `items`, or only the current value when the options come from `Select.Items` children. It submits and validates without JavaScript, and the full select replaces it once it renders.

## Accessibility

- The trigger is a `<button type="button">`. Inside a `Field`, it gets the field `id`, `aria-required`, `aria-invalid`, and `aria-describedby`.
- The list has `role="listbox"`. Each item has `role="option"` and `aria-selected`.
- Opening the menu moves focus to the first item. **Down arrow** and **up arrow** move focus between the enabled items and wrap at the ends.
- The check mark and lock icons are `aria-hidden`.
- The prerendered fallback is a native `<select>` with the field `aria-invalid` and `aria-describedby`.

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
