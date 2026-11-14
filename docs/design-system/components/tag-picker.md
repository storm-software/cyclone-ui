---
title: Tag Picker
description: A text input that turns typed text into removable, editable tags. It works alone or inside a Field.
documentType: reference
tags: [component, tag-picker, form, input, tag]
component:
  name: tag-picker
  package: "@cyclone-ui/tag-picker"
  stories:
    - title: Form/TagPicker
      file: components/tag-picker/src/TagPicker.stories.tsx
---

# Tag Picker

`TagPicker` is a free-form entry control for keywords or labels. The user types text and presses Enter to add a tag. Each tag is a [`Tag`](./tag.md) with a remove button. The frame uses the same border and focus style as `Input`.

Use it when the value is a list of free-form strings. For one line of plain text, use an [Input](./input.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add tag-picker
pnpm install
```

- **Files:** `TagPicker.tsx` and `utilities.ts`. The CLI writes them to `<path>/tag-picker/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Input](./input.md), [Ripple Animation](./ripple-animation.md), [Tag](./tag.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/core`, and `@tamagui/stacks`.

## Import

```tsx
import { TagPicker } from "@cyclone-ui/tag-picker";
import {
  appendTag,
  removeTag,
  replaceTag,
  normalizeTag,
  getTagRemoveButtonLabel
} from "@cyclone-ui/tag-picker";
```

## Usage

Use `TagPicker` inside a `Field` to connect it to a form.

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { TagPicker } from "@cyclone-ui/tag-picker";

export function Example() {
  return (
    <Form name="post" initialValues={{ topics: ["Design"] }}>
      <Field name="topics">
        <Field.Label>Topics</Field.Label>
        <TagPicker placeholder="Add a tag" />
      </Field>
    </Form>
  );
}
```

Alone, use `value` and `onChange` for a controlled picker. Use `defaultValue` for an uncontrolled one.

## Anatomy

```tsx
<TagPicker />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `TagPicker` | A Tamagui `XStack` frame. It holds a wrapping row with one [`Tag`](./tag.md) per tag and an `Input.TextBox.Value` (a native `<input>` on the web). | The frame, the tags, and the text box. Each `Tag` has a remove button (`<button>`) and turns into an edit `<input>` on double-click. Tags added from the text box spring in. Removed tags fade out. |

Children render inside the frame, after the tags and the text box. The `underlined` variant adds an underline. A field label on the border adds a notched outline.

## Examples

The examples are the stories in [`TagPicker.stories.tsx`](../../../components/tag-picker/src/TagPicker.stories.tsx). Most stories render the picker in a `Field` inside a `Form`, with the placeholder `Add a tag`.

| Stories | What they show |
| --- | --- |
| `Base` | Enter adds `react` and the trimmed `tamagui`. Backspace removes the last tag. A remove button removes `react` and keeps focus in the text box. The placeholder returns when no tags are left. |
| `DefaultValue`, `Wrapping` | Three starting tags, and seven tags that wrap to more rows. |
| `IgnoresDuplicates` | Enter on a tag that is already in the list adds nothing and clears the text box. |
| `EditTag` | A double-click on `Engineering` opens the `Edit Engineering` box. Enter saves `Operations`. |
| `FocusWithin` | Tab to a remove button and then to the text box. The focus ring stays on the frame. |
| `Disabled` | A disabled picker. It has no remove buttons, and the text box is disabled. |
| `MaxTags` | A Field `validate` rule warns above three tags. Backspace clears the warning. |
| `Required` | A required field, which shows no `(Optional)` text. |
| `Floating`, `FloatingWithValue` | A floating label that rests on the text box and floats after a tag is added, and a floating label with tags. |
| `PrimaryTags` | `tagVariant="primary"`. |
| `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating`, `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove`, `Description` | The `outlined`, `underlined`, and `inlined` variants with floating or above labels, and a long description. |
| `Error`, `ErrorFloating`, `Warning`, `Info`, `Success` | Field validation messages of each type. |
| `Controlled` | A controlled picker outside a field, with its value shown as JSON. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

`TagPickerProps` is the Tamagui frame props, without `onChange`, plus these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string[]` | Field value | The tags, for a controlled picker. |
| `defaultValue` | `string[]` | `[]` | The initial tags of an uncontrolled picker. |
| `onChange` | `(tags: string[]) => void` | Field `onChange` | Called when a tag is added, removed, or edited. A prop `onChange` is called together with the field handler. |
| `name` | `string` | Field name | The name and `id` of the text box. |
| `placeholder` | `string` | — | Shown in the text box while there are no tags. Inside a field, the field decides when to show it. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The form control size. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The frame style. Inside a field, the field variant is used. |
| `tagVariant` | `"primary" \| "secondary"` | `"secondary"` | The variant of each tag. |
| `disabled` | `boolean` | Field value, or `false` | Disables the picker. Tags cannot be removed or edited. |
| `readOnly` | `boolean` | Field value, or `false` | Blocks adding, removing, and editing tags without the disabled colors. |
| `focused` | `boolean` | Field focus state, or `false` | Shows the focus highlight when focus is outside. |
| `removeButtonLabel` | `(tag: string) => string` | `` (tag) => `Remove ${tag}` `` | Returns the label of a remove button. |
| `inputRef` | `Ref<HTMLInputElement>` | — | A ref to the text box. |

## Helpers

The package exports pure functions for tag lists. Tags are unique, and the check is case-sensitive.

| Function | Returns |
| --- | --- |
| `normalizeTag(draft)` | The trimmed text. |
| `appendTag(tags, draft)` | A new list with the trimmed draft added. It returns the same list when the draft is blank or already in the list. |
| `removeTag(tags, tag)` | A new list without the tag. It returns the same list when the tag is absent. |
| `replaceTag(tags, tag, draft)` | A new list with the tag replaced in place. It returns the same list when the draft is blank or already in the list. |
| `getTagRemoveButtonLabel(tag)` | `Remove <tag>`. |

## Behavior

- **Add:** Enter adds the trimmed text as a tag and clears the text box. Enter does not submit a surrounding form. Blank and duplicate text adds nothing.
- **Remove:** Backspace in an empty text box removes the last tag. A held key does not remove more than one. Pressing a remove button removes that tag and moves focus to the text box.
- **Edit:** Double-click a tag to edit its text. Enter or blur saves the edit. Escape cancels it. A blank or duplicate edit changes nothing.
- **Wrap:** The frame grows by one row as the tags wrap.
- **Focus:** Pressing the frame focuses the text box. Focus moving between the text box and the remove buttons does not count as leaving.
- **Composition:** Key events during IME composition are ignored.

## Accessibility

- The text box is a native input. Alone, its `name` is also its `id`, so a label can target it. Inside a field, it takes the field's `id`.
- Each remove button has an accessible label. Change the text with `removeButtonLabel`.
- Each edit box has an `aria-label` of `Edit <tag>`.

## Related

- [Design tokens](../tokens/index.md)
- [Field](./field.md)
- [Input](./input.md)
- [Tag](./tag.md)
- [Text area](./text-area.md)

## Source

- [`components/tag-picker/src/TagPicker.tsx`](../../../components/tag-picker/src/TagPicker.tsx)
- [`components/tag-picker/src/utilities.ts`](../../../components/tag-picker/src/utilities.ts)
- [`components/tag-picker/src/utilities.spec.ts`](../../../components/tag-picker/src/utilities.spec.ts)
- [`components/tag-picker/src/TagPicker.stories.tsx`](../../../components/tag-picker/src/TagPicker.stories.tsx)
