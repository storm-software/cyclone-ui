---
title: Feedback
description: A like and dislike control that asks for an optional comment when the user presses dislike.
documentType: reference
tags: [component, feedback, toggle, form]
---

# Feedback

`Feedback` collects a quick thumbs-up or thumbs-down rating on content. It pairs a [Like Button](./like-button.md) with a dislike toggle. Pressing dislike opens a popover with a comment form.

## Import

```tsx
import { Feedback } from "@cyclone-ui/feedback";
```

## Usage

Uncontrolled:

```tsx
<Feedback
  onValueChange={value => track(value)}
  onCommentSubmit={comment => sendComment(comment)}
/>
```

Controlled:

```tsx
const [value, setValue] = useState<FeedbackValue>(null);

<Feedback value={value} onValueChange={setValue} />;
```

## Props

`Feedback` accepts the view props except `children`, and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `"like" \| "dislike" \| null` | None | The selected feedback. Setting it makes the control controlled. |
| `defaultValue` | `"like" \| "dislike" \| null` | `null` | The initial feedback when uncontrolled. |
| `onValueChange` | `(value: FeedbackValue) => void` | None | Called when either toggle is pressed. |
| `onCommentSubmit` | `(comment: string) => void` | None | Called with the trimmed comment, which can be empty, when the dislike form is submitted. |
| `commentLabel` | `string` | `"What could we improve?"` | The prompt above the comment box. |
| `commentPlaceholder` | `string` | `"A suggestion to improve this content..."` | The placeholder in the comment box. |
| `disabled` | `boolean` | `false` | Disables both toggles. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The icon size. |

The exported types are `FeedbackProps`, `FeedbackValue`, and `FeedbackSize`.

## Behavior

- Pressing like selects `like` and closes the popover. Pressing it again sets the value to `null`.
- Pressing dislike selects `dislike` and opens the popover. Pressing it again sets the value to `null` and closes the popover.
- The popover has a three-row text area and a "Send feedback" button. After submit, the component calls `onCommentSubmit`, clears the comment, and closes the popover.
- A vertical [Divider](./divider.md) separates the two toggles.
- The dislike icon is `ThumbsDown`. It uses the `fill` weight when selected.

## Variants and states

The stories show the default control, a disliked start value, a controlled control, a disabled control, and the three sizes.

## Accessibility

- The wrapper has `role="group"` and `aria-label="Feedback"`.
- The dislike toggle has `aria-label="Dislike"` and `aria-expanded` that follows the popover.
- The like toggle has `aria-label="Like"`.

## Related

- [Like Button](./like-button.md)
- [Form](./form.md)
- [Field](./field.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/feedback/src/Feedback.tsx`](../../../components/feedback/src/Feedback.tsx)
- [`components/feedback/src/Feedback.stories.tsx`](../../../components/feedback/src/Feedback.stories.tsx)
