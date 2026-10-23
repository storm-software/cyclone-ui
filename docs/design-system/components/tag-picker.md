---
title: Tag picker
description: A text input that turns typed text into removable, editable tags. It works alone or inside a Field.
documentType: reference
tags: [component, tag-picker, form, input, tag]
---

# Tag picker

`TagPicker` is a free-form entry control for keywords or labels. The user types text and presses Enter to add a tag. Each tag is a [`Tag`](./tag.md) with a remove button. The frame uses the same border and focus style as `Input`.

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

## Props

`TagPickerProps` is the Tamagui frame props, without `onChange`, plus these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string[]` | Field value | The tags, for a controlled picker. |
| `defaultValue` | `string[]` | `[]` | The initial tags of an uncontrolled picker. |
| `onChange` | `(tags: string[]) => void` | Field `onChange` | Called when a tag is added, removed, or edited. A prop `onChange` is called together with the field handler. |
| `name` | `string` | Field name | The name and `id` of the text box. |
| `placeholder` | `string` | — | Shown in the text box. Inside a field, the field decides when to show it. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The form control size. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The frame style. Inside a field, the field variant is used. |
| `tagVariant` | `"primary" \| "secondary"` | `"secondary"` | The variant of each tag. |
| `disabled` | `boolean` | Field value, or `false` | Disables the picker. Tags cannot be removed or edited. |
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
- **Edit:** Double-click a tag to edit its text. The edit box has the label `Edit <tag>`.
- **Wrap:** The frame grows by one row as the tags wrap.
- **Focus:** Pressing the frame focuses the text box. Focus moving between the text box and the remove buttons does not count as leaving.
- **Composition:** Key events during IME composition are ignored.

The stories show `DefaultValue`, `Required`, `Wrapping`, `IgnoresDuplicates`, `EditTag`, `Disabled`, `MaxTags`, `Floating`, and the `outlined`, `underlined`, and `inlined` variants with floating or above labels. The `MaxTags` story limits the count with a Field `validate` rule.

## Accessibility

- The text box is a native input. Its `name` is also its `id`, so a label can target it.
- Each remove button has an accessible label. Change the text with `removeButtonLabel`.
- Each edit box has an `aria-label` of `Edit <tag>`.

## Related

- [Design tokens](../tokens/index.md)
- [Tag](./tag.md)
- [Text area](./text-area.md)

## Source

- [`components/tag-picker/src/TagPicker.tsx`](../../../components/tag-picker/src/TagPicker.tsx)
- [`components/tag-picker/src/utilities.ts`](../../../components/tag-picker/src/utilities.ts)
- [`components/tag-picker/src/utilities.spec.ts`](../../../components/tag-picker/src/utilities.spec.ts)
- [`components/tag-picker/src/TagPicker.stories.tsx`](../../../components/tag-picker/src/TagPicker.stories.tsx)
