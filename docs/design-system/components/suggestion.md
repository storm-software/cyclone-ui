---
title: Suggestion
description: A row of prompts that the person can send to an AI agent in one press. The row scrolls sideways when the suggestions don't fit and fades the edge that has more to show.
documentType: reference
tags: [component, suggestion, chat, ai, prompt, button]
component:
  name: suggestion
  package: "@cyclone-ui/suggestion"
  stories:
    - title: AI/Suggestion
      file: components/suggestion/src/Suggestion.stories.tsx
---

# Suggestion

A `Suggestion` is a prompt that the person can send without typing: a rounded [Button](./button.md) labeled with the prompt. Put a row of them, in `Suggestions`, above the prompt input. The label is the message, so send it as it is.

It is the Cyclone UI version of the shadcn AI Elements Suggestion.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add suggestion
pnpm install
```

- **File:** `Suggestion.tsx`. The CLI writes it to `<path>/suggestion/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/constants` and `@tamagui/core`.

## Import

```tsx
import { Suggestion, Suggestions } from "@cyclone-ui/suggestion";
```

## Usage

```tsx
<Suggestions>
  {suggestions.map(suggestion => (
    <Suggestion
      key={suggestion}
      suggestion={suggestion}
      onClick={text => sendMessage({ text })}
    />
  ))}
</Suggestions>
```

To show a different label, such as an icon and a shorter text, pass `Button.Icon` and `Button.Text` as children; `onClick` still receives `suggestion`.

## Anatomy

```tsx
<Suggestions>
  <Suggestion />
</Suggestions>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Suggestions` | A horizontal [`ScrollView`](./scroll-view.md) around a row `View` | Keeps the suggestions on one line and scrolls them. Props go to the row. |
| `Suggestion` (also `Suggestions.Item`) | A small, rounded `tertiary` [`Button`](./button.md) that does not shrink | One prompt. |

## Examples

The examples are the stories in [`Suggestion.stories.tsx`](../../../components/suggestion/src/Suggestion.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | Six suggestions under the turn they send. The play function presses "Fix the failing build" and checks that it was sent and answered. |
| `Scrolling` | The same suggestions in a 320px column, which overflow and fade at the right edge. The play function tabs to the last suggestion, checks that the row scrolled it into view, and sends it with Enter. |
| `Fits` | Two suggestions that fit, with no fade. |

## Props

### Suggestions

`Suggestions` accepts the `View` props of its row, such as `gap`, `role` and `aria-label`.

### Suggestion

`Suggestion` accepts the [`Button`](./button.md) props except `onClick`, and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `suggestion` | `string` | Required | The prompt to send. It is also the label, unless `children` are set. |
| `onClick` | `(suggestion: string) => void` | None | Called with `suggestion` when the suggestion is pressed. `onPress` is still called too. |

It defaults to `size="sm"` and `rounded`.

The exported types are `SuggestionsProps` and `SuggestionProps`.

## Behavior

- The row fills its parent's width (in a column) and keeps every suggestion on one line. When they don't fit, it scrolls sideways, and the [Scroll View](./scroll-view.md) scrollbar shows while the pointer is over it.
- On the web, the edge that has more to show fades out over 32px, and the fade follows the scroll position. Browsers without scroll-driven animations, and rows that fit, show no fade.
- The row is padded so that focus rings aren't clipped, and pulled back out by as much, so the first suggestion lines up with the content above it.
- Tabbing to a suggestion that is scrolled out of view scrolls it into view.

## Variants and states

- **Overflow:** a row that fits, or one that scrolls with faded edges.
- Each `Suggestion` takes the [Button](./button.md) states: hovered, pressed, focused, and `disabled`.

## Accessibility

- Each suggestion is a `<button>` named by its label.
- To tell screen reader users what the row is, pass `role="group"` and an `aria-label` such as "Suggestions", as the `Base` story does.
- The fade only hides the edge visually; every suggestion stays in the Tab order and is announced.

## Related

- [Prompt Message](./prompt-message.md)
- [Button](./button.md)
- [Scroll View](./scroll-view.md)

## Source

- [`components/suggestion/src/Suggestion.tsx`](../../../components/suggestion/src/Suggestion.tsx)
- [`components/suggestion/src/Suggestion.stories.tsx`](../../../components/suggestion/src/Suggestion.stories.tsx)
