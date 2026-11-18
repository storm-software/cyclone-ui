---
title: Feedback
description: A like and dislike control that asks for an optional comment when the user presses dislike.
documentType: reference
tags: [component, feedback, toggle, form]
component:
  name: feedback
  package: "@cyclone-ui/feedback"
  stories:
    - title: Blocks/Feedback
      file: components/feedback/src/Feedback.stories.tsx
---

# Feedback

`Feedback` collects a quick thumbs-up or thumbs-down rating on content. It pairs a [Like Button](./like-button.md) with a dislike toggle. Pressing dislike opens a popover with a comment form.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add feedback
pnpm install
```

- **File:** `Feedback.tsx`. The CLI writes it to `<path>/feedback/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Divider](./divider.md), [Field](./field.md), [Form](./form.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Like Button](./like-button.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Text Area](./text-area.md), [Toggle](./toggle.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

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

## Anatomy

```tsx
<Feedback />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Feedback` | A Tamagui `View` with `role="group"` and `aria-label="Feedback"` | The row that holds the parts. |
| Like | A [`LikeButton`](./like-button.md): a `<button>` with `aria-label="Like"` and `aria-pressed` | Selects `like`. It plays the Like Button animation. |
| Divider | A vertical [`Divider`](./divider.md) | Separates the two toggles. |
| Dislike | A borderless, circular [`Toggle`](./toggle.md): a `<button>` with `aria-label="Dislike"`, `aria-pressed`, and `aria-expanded`. It holds a `ThumbsDown` SVG icon with `aria-hidden`. | Selects `dislike` and opens the comment popover. It is the anchor of the popover. |
| Comment popover | A [`Popover`](./popover.md) below the dislike toggle, 360 px wide (at most `90vw`). It holds a [`Form`](./form.md) with a required [`Field`](./field.md), a [`TextArea`](./text-area.md) of three rows, and a `primary` [`Button`](./button.md) as `Form.Submit`. | Asks for a comment after a dislike. You can close it without sending one. |

## Examples

The examples are the stories in [`Feedback.stories.tsx`](../../../components/feedback/src/Feedback.stories.tsx). A decorator adds space for the confetti and the popover.

| Stories | What they show |
| --- | --- |
| `Base` | The play function presses Like, then Dislike, and checks that only Dislike stays pressed. It types "Too long" in the comment box, presses "Send feedback", checks `onCommentSubmit`, and checks that the popover closes. |
| `Disliked` | `defaultValue="dislike"`. The popover stays closed until you press Dislike. |
| `Controlled` | `value` and `onValueChange` from React state, with the value shown as text. |
| `Disabled` | Both toggles disabled. |
| `Sizes` | The `sm`, `md`, and `lg` sizes. |

## Props

`Feedback` accepts the view props except `children`, and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `"like" \| "dislike" \| null` | None | The selected feedback. Setting it makes the control controlled. |
| `defaultValue` | `"like" \| "dislike" \| null` | `null` | The initial feedback when uncontrolled. |
| `onValueChange` | `(value: FeedbackValue) => void` | None | Called when either toggle is pressed. |
| `onCommentSubmit` | `(comment: string) => void` | None | Called with the trimmed comment when the dislike form is submitted. The comment field is required, so an empty comment shows an error and the form does not submit. |
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
- The dislike icon is `ThumbsDown`. It uses the `filled` variant when selected and the `regular` variant otherwise. Its color is `primary`, `primary-hovered` on hover, and `primary-active` when selected.

## Variants and states

- **Sizes:** `sm`, `md`, and `lg` scale both icons and toggles.
- **Disabled:** Both toggles ignore presses.

## Accessibility

- The wrapper has `role="group"` and `aria-label="Feedback"`.
- The dislike toggle has `aria-label="Dislike"` and `aria-expanded` that follows the popover.
- The like toggle has `aria-label="Like"`.
- Both toggles are native buttons with `aria-pressed`, so each one is a separate Tab stop.
- In the popover, the comment box has the label "What could we improve?" (or `commentLabel`), and the submit button has the name "Send feedback". The `Base` story finds both by these names.
- When you submit an empty comment, the form shows the field error and moves focus to the comment box.

## Related

- [Like Button](./like-button.md)
- [Form](./form.md)
- [Field](./field.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/feedback/src/Feedback.tsx`](../../../components/feedback/src/Feedback.tsx)
- [`components/feedback/src/Feedback.stories.tsx`](../../../components/feedback/src/Feedback.stories.tsx)
