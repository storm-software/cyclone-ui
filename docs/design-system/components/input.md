---
title: Input
description: A composable text input with text box, value, separator, and trigger parts, three variants, three sizes, and validation colors inside a Field.
documentType: reference
tags: [component, input, form, text]
component:
  name: input
  package: "@cyclone-ui/input"
  stories:
    - title: Form/Input
      file: components/input/src/Input.stories.tsx
---

# Input

`Input` is a text input frame. You compose it from parts: a text box, a value, separators, and trigger buttons. It works on web and native. Put it in a [Field](./field.md) to connect it to form state and to show a label and validation messages.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add input
pnpm install
```

- **Files:** `Input.tsx`, `InputValue.tsx`, `types.ts`, and `utilities.ts`. The CLI writes them to `<path>/input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/focusable`, `@tamagui/group`, `@tamagui/stacks`, and `@tamagui/web`.

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

## Anatomy

```tsx
<Input>
  <Input.TextBox>
    <Input.TextBox.Value />
  </Input.TextBox>
  <Input.Separator />
  <Input.Trigger>
    <Input.Trigger.Icon>{icon}</Input.Trigger.Icon>
    <Input.Trigger.Text>Label</Input.Trigger.Text>
  </Input.Trigger>
</Input>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Input` | A Tamagui `XStack` that holds an `XGroup` with `display: contents` | The frame. It holds the variant, size, focus, disabled, and read-only state and shares them with its parts. It draws the border and the focus ring. It adds an underline for `underlined` and a notched outline when the field label sits on the border. A press on its padding, a separator, or an icon focuses the text control. |
| `Input.TextBox` | A Tamagui `XStack` in an `XGroup.Item` | Holds the value and any icons. It fills the free width. After its children, it renders the field's clear and status icons, unless an end `Field.Button` renders them. |
| `Input.TextBox.Value` | An `<input>`, or a `<textarea>` with `render="textarea"`. On native, a React Native `TextInput`. | The text control. Inside a `Field`, it gets the field `id`, `required`, the field constraints, `aria-invalid`, and `aria-describedby`. |
| `Input.Separator` | A 1px Tamagui `View` in an `XGroup.Item` | A vertical line between parts. Its color follows the focus and validation state. It fades in over 200ms. |
| `Input.Trigger` | A `View` frame as wide as the control is high, that holds a [Button](./button.md) with `variant="link"` | A button in the input. It is disabled when the field is disabled. |
| `Input.Trigger.Icon`, `Input.Trigger.Text` | `Button.Icon` and `Button.Text` | The icon and label of the trigger. |

`InputTextBox`, `InputValue`, `InputSeparator`, `InputTrigger`, `InputTriggerIcon`, and `InputTriggerText` are also exported by name. Use them in React Server Components, which cannot read `Input.TextBox` from a client module.

## Examples

The examples are the stories in [`Input.stories.tsx`](../../../components/input/src/Input.stories.tsx). Most stories put the input in a `Form` and a `Field` with the label `Label Text`.

| Stories | What they show |
| --- | --- |
| `Base` | The default input. A test checks that the `md` input is 43px high, that the resting label is centered on it, and that it accepts typed text. |
| `ReadOnly` | A read-only, clearable input with a value. Typing does not change the value, and no clear button shows. |
| `Floating`, `FloatingWithPlaceholder` | A floating label that rests on the input, then moves up and shrinks on focus. The second story also has a placeholder. |
| `FloatingOptionalLabelFocus` | A press on the `(Optional)` text of a floating label focuses the input and keeps it focused. |
| `FloatingWithStartIcon` | A start `Field.Icon`. The label lines up with the start of the text. |
| `FloatingWithEndIconTruncation` | A long label in a 240px field. It truncates with an ellipsis before the end icon and shows the full text in a tooltip on hover. |
| `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating`, `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove` | Each variant with a floating label and with a label above the input. |
| `Description`, `WithLink` | A long `Field.Details` description, and a `Field.Link` next to the label. |
| `Required`, `Clearable`, `Disabled`, `DefaultValue` | A required field (no `(Optional)` text), a clear button that empties and focuses the input, a disabled input, and an initial value. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success`, and their `Floating` and `Underlined` forms | Each validation message type on the default, floating, and underlined inputs. `Error` shows its message before blur. Its status icon button is 32px wide and shows the message in a tooltip on hover. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |
| `WithButton` | A `Field.Button` in outlined, underlined, and inlined inputs, with and without `circular`. The button fills the text box with a 4px inset, and the resting label truncates before it. |
| `WithSubmitButton` | `Field.Button asChild` with a [Submit Button](./submit-button.md). The button shows `Submitting`, then `Submitted`, and keeps its width. |
| `WithButtonAndStatus` | An end `Field.Button` with the clear and status icons. The icons render before the button. The button is last in the tab order, and its focus ring is not clipped. |

## Props

### `Input`

`Input` also accepts the props of a Tamagui `XStack`. Inside a `Field`, each prop that you leave unset takes its value from the field.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Field name | The input name. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | Field variant, or `"outlined"` | The frame style. |
| `size` | `"sm" \| "md" \| "lg"` | Field size, or `"md"` | The control size. |
| `disabled` | `boolean` | Field value, or `false` | Disables the input. |
| `readOnly` | `boolean` | Field value, or `false` | Prevents edits without the disabled colors. |
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
| `Input.Trigger` | A [Button](./button.md) in a frame that matches the control size. It has `Icon` and `Text` slots. It accepts the `Button` props, and a `size` (`"sm" \| "md" \| "lg"`) that replaces the input size. |

### `Input.TextBox.Value`

It accepts the standard HTML input props and these extra props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | Field formatted value | The text value. |
| `type` | HTML input type or `"textarea"` | None | The input type. On native, `"textarea"` makes the control multiline. On web, use `render="textarea"`. |
| `render` | `"input" \| "textarea"` | `"input"` | The HTML element to render on web. Any other value renders an `<input>`. |
| `placeholder` | `string` | None | The placeholder text. It shows only when the label does not cover it. |
| `placeholderTextColor` | Color token | `primary-disabled` | The placeholder color. The part always sets `primary-disabled`, so a value that you set has no effect. |
| `selectionColor` | Color token | None | The text selection color. |
| `autoComplete` | `string` | `"off"` | The browser autocomplete hint. |
| `enterKeyHint` | `"done" \| "go" \| "next" \| "search" \| "send" \| "enter" \| "previous"` | `"done"` | The enter key label on mobile keyboards. |

These props on the value are marked as deprecated in the types: `keyboardType` (use `type`), `editable` (use `readOnly`), `secureTextEntry` (use `type="password"`), `onChangeText` (use `onChange`), `multiline` (use `render="textarea"`), and `size`.

## Variants and states

| Variant | Style |
| --- | --- |
| `outlined` | A bordered frame with a `surface` background and the `control` radius. |
| `underlined` | A transparent frame with a bottom border. An underline grows from the center on focus. |
| `inlined` | Uses the outlined frame and its focus ring. The frame sets its own corner radius. |

- **Focus:** Outlined and inlined inputs show a ring (`ring-offset`, or `ring-subtle-offset` at `sm`). Underlined inputs show the underline.
- **Validation:** Inside a `Field` with a message, the border uses the `primary` color of the validation theme.
- **Disabled:** The frame shows the `not-allowed` cursor and the `surface-disabled` background.
- **Label:** The input asks the field for a `floating` label by default. When motion is not reduced, the placeholder fades in over 200ms after a 100ms delay, so it shows after the label lifts.
- **Click:** A click on the frame padding, a separator, or an icon focuses the text input.

## Related

- [Field](./field.md)
- [Form](./form.md)
- [Number Input](./number-input.md)
- [Password Input](./password-input.md)
- [Text area](./text-area.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/input/src/Input.tsx`](../../../components/input/src/Input.tsx)
- [`components/input/src/InputValue.tsx`](../../../components/input/src/InputValue.tsx)
- [`components/input/src/InputValue.native.tsx`](../../../components/input/src/InputValue.native.tsx)
- [`components/input/src/types.ts`](../../../components/input/src/types.ts)
- [`components/input/src/utilities.ts`](../../../components/input/src/utilities.ts)
- [`components/input/src/Input.stories.tsx`](../../../components/input/src/Input.stories.tsx) (title: `Form/Input`)
