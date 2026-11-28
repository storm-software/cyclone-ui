---
title: Prompt Message
description: One turn of an AI conversation. The person's message sits at the end of the row in a bubble, and the agent's reply spans the row, with copy, feedback, retry and edit actions under it.
documentType: reference
tags: [component, prompt-message, message, chat, ai, bubble, conversation]
component:
  name: prompt-message
  package: "@cyclone-ui/prompt-message"
  stories:
    - title: AI/PromptMessage
      file: components/prompt-message/src/PromptMessage.stories.tsx
---

# Prompt Message

`PromptMessage` shows one turn of a conversation with an AI agent. The person's message sits at the end of the row in a bubble. The agent's reply sits at the start and spans the row, with its actions under it: copy, good and bad response, and retry. A thread of these turns is a chat.

It is the Cyclone UI version of the shadcn AI Elements Message, and combines the shadcn Message and Bubble primitives. It is named `PromptMessage` because [Message](./message.md) is the toast container. Use [Trace](./trace.md) for the steps an agent takes, and `PromptMessage` for its reply.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add prompt-message
pnpm install
```

- **File:** `PromptMessage.tsx`. The CLI writes it to `<path>/prompt-message/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), Copy Button, [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), Toast, [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/use-controllable-state`.

## Import

```tsx
import { PromptMessage, usePromptMessage } from "@cyclone-ui/prompt-message";
```

## Usage

Branch on the sender. The person's message is a bubble, and the agent's reply is text with actions:

```tsx
<PromptMessage from="user">
  <PromptMessage.Content>{prompt}</PromptMessage.Content>
  <PromptMessage.Actions>
    <PromptMessage.Copy value={prompt} />
    <PromptMessage.Action label="Edit" onPress={() => setInput(prompt)}>
      <Pencil />
    </PromptMessage.Action>
  </PromptMessage.Actions>
</PromptMessage>

<PromptMessage from="assistant">
  <PromptMessage.Content>{reply}</PromptMessage.Content>
  <PromptMessage.Actions>
    <PromptMessage.Copy value={reply} />
    <PromptMessage.Feedback value={feedback} onValueChange={setFeedback} />
    <PromptMessage.Action label="Retry" onPress={() => regenerate(id)}>
      <Update />
    </PromptMessage.Action>
  </PromptMessage.Actions>
</PromptMessage>
```

With the AI SDK, pass the message's role: `<PromptMessage from={message.role}>`.

A string in `PromptMessage.Content` is shown as body text that keeps its line breaks. For rich replies, such as rendered markdown or a [Code Block](./code-block.md), pass elements instead; the content stacks them with a small gap. Markdown rendering is not included.

To add a name and an avatar:

```tsx
<PromptMessage from="assistant" avatar={<Avatar name="Cyclone" size="sm" />}>
  <PromptMessage.Header>Cyclone · 2:14 PM</PromptMessage.Header>
  <PromptMessage.Content>{reply}</PromptMessage.Content>
</PromptMessage>
```

For a failed reply, tint the content with a status theme and offer Retry:

```tsx
<PromptMessage.Content variant="tinted" theme="danger">
  The deploy failed: the preview environment is missing DATABASE_URL.
</PromptMessage.Content>
```

For consecutive bubbles from the same sender, put several `PromptMessage.Content` parts in one message. They share its side and its avatar.

## Anatomy

```tsx
<PromptMessage avatar={…}>
  <PromptMessage.Header />
  <PromptMessage.Content />
  <PromptMessage.Actions>
    <PromptMessage.Copy />
    <PromptMessage.Feedback />
    <PromptMessage.Action />
  </PromptMessage.Actions>
</PromptMessage>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `PromptMessage` | A row of the `avatar` and a column of the parts, reversed for `from="user"` | One turn, on its sender's side. |
| `PromptMessage.Header` | A row; text is `xs` `BodyText` in the `subtle` color, on one line | The sender's name, the time. |
| `PromptMessage.Content` | A `View` with a [`ContainerBackground`](./container.md) (`surface`, `primary`), a `primary/10` wash (`tinted`) or no frame (`ghost`) | The message. Text is `sm` `BodyText`. |
| `PromptMessage.Actions` | A row, pulled out by half a button's padding on the sender's side | Holds the actions under the content. |
| `PromptMessage.Action` | A ghost, circular 32px [`Button`](./button.md) with a `tooltip`, and its children in `Button.Icon` | One action, such as Retry or Edit. |
| `PromptMessage.Copy` | A `CopyButton` | Copies the message, and swaps to a check for two seconds. |
| `PromptMessage.Feedback` | A `role="group"` row of two `PromptMessage.Action` toggles | Good response and Bad response. |

## Examples

The examples are the stories in [`PromptMessage.stories.tsx`](../../../components/prompt-message/src/PromptMessage.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | A person's message with Copy and Edit, and a reply with Copy, Feedback and Retry. The play function toggles Good and Bad response (checking `aria-pressed` and `onValueChange`), and presses Retry and Edit. |
| `Streaming` | A reply that streams in. Its actions show once it is done, which the play function waits for. |
| `WithAvatar` | Avatars beside the turns, with a header that names the sender and the time. |
| `Group` | Two consecutive bubbles from the person in one message. |
| `RichContent` | A reply with text and a [Code Block](./code-block.md). |
| `Variants` | The `surface`, `primary`, `tinted`, `tinted` with `theme="info"`, and `ghost` content. |
| `Failed` | A reply that failed, as `tinted` content with `theme="danger"` and a Retry action. The play function presses Retry. |
| `Controlled` | A controlled `PromptMessage.Feedback`. The play function moves to Bad response with Tab and presses it with Enter. |

## Props

### PromptMessage

`PromptMessage` accepts the `View` props and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `from` | `"user" \| "assistant" \| "system"` | `"assistant"` | Who sent the message. A `user` message sits at the end of the row, and its content defaults to a `surface` bubble. The others sit at the start, unframed. |
| `avatar` | `ReactNode` | None | An avatar, such as an [`Avatar`](./avatar.md), beside the message, level with its top. |

### PromptMessage.Header

`PromptMessage.Header` accepts the `View` props. Text children are shown as one line of `xs`, `subtle` body text; other children are shown as they are.

### PromptMessage.Content

`PromptMessage.Content` accepts the `View` props, such as `theme`, and adds this prop:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"surface" \| "primary" \| "tinted" \| "ghost"` | `"surface"` for `from="user"`, `"ghost"` otherwise | The surface. |

| Variant | Looks | Use for |
| --- | --- | --- |
| `surface` | The [Container](./container.md) `surface` variant: a neutral bubble with a border. Text is `ink`. | The person's messages. |
| `primary` | The Container `primary` variant. Text is `on-primary`. | A strong bubble, such as the person's messages in a colored theme. |
| `tinted` | A `primary/10` wash. Text is `primary`. With a status `theme` (`danger`, `warning`, `success`, `info`), it takes that color. | Errors (`theme="danger"`) and notices. |
| `ghost` | No frame. It spans the row. | The agent's replies. |

Bubbles fit their content, up to 80% of the row.

### PromptMessage.Actions

`PromptMessage.Actions` accepts the `View` props.

### PromptMessage.Action

`PromptMessage.Action` accepts the [`Button`](./button.md) props, such as `onPress` and `aria-pressed`, and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tooltip` | `string` | `label` | Shown in a tooltip while the pointer rests on the button, or right away on keyboard focus. |
| `label` | `string` | `tooltip` | The button's accessible name. |

Its children are the icon. It defaults to `variant="ghost"`, `size="8xl"`, `circular`, and `color="ink"`, like `CopyButton`.

### PromptMessage.Copy

`PromptMessage.Copy` is `CopyButton`. It takes the text to copy as `value` (a string, or a function that returns one), and `copiedDuration` (default `2000`). Mount one Toaster in the app to confirm the copy on touch screens.

### PromptMessage.Feedback

`PromptMessage.Feedback` accepts the `View` props and adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `"like" \| "dislike" \| null` | None | The selected feedback. Setting it makes the toggles controlled. |
| `defaultValue` | `"like" \| "dislike" \| null` | `null` | The initial feedback when uncontrolled. |
| `onValueChange` | `(value: "like" \| "dislike" \| null) => void` | None | Called with the new feedback when either toggle is pressed. |

### usePromptMessage

`usePromptMessage()` returns `{ from }` for the nearest `PromptMessage`, or `{ from: "assistant" }` outside one.

The exported types are `PromptMessageProps`, `PromptMessageFrom`, `PromptMessageContextValue`, `PromptMessageHeaderProps`, `PromptMessageContentProps`, `PromptMessageContentVariant`, `PromptMessageActionsProps`, `PromptMessageActionProps`, `PromptMessageCopyProps`, `PromptMessageFeedbackProps`, and `PromptMessageFeedbackValue`. For React Server Components, the parts are also exported as `PromptMessageHeader`, `PromptMessageContent`, `PromptMessageActions`, `PromptMessageAction`, `PromptMessageCopy`, and `PromptMessageFeedback`.

### From AI SDK Elements

| AI SDK Elements | Prompt Message |
| --- | --- |
| `Message` (`from`) | `PromptMessage` (`from`) |
| `MessageContent` | `PromptMessage.Content`. The person's messages are a bubble. |
| `MessageActions` | `PromptMessage.Actions` |
| `MessageAction` (`tooltip`, `label`) | `PromptMessage.Action` (`tooltip`, `label`) |
| `MessageResponse` | Not included: render markdown yourself and pass it as children. |
| Branch parts, `MessageToolbar`, `MessageAttachments` | Not included. |

## Behavior

- `from="user"` reverses the row, so the avatar is on the right and the header, content and actions align to the end. `assistant` and `system` messages align to the start.
- The actions row is pulled out by half a button's padding on the message's side, so the first icon lines up with the reply's text, or the last one with the bubble's edge.
- `PromptMessage.Copy` swaps its icon to a check, in the `primary` color, for two seconds after a copy.
- In `PromptMessage.Feedback`, pressing a toggle selects it and clears the other; pressing the selected one clears it. The selected toggle has a filled icon in the `primary` color.
- Action tooltips show after the pointer rests on the button for two seconds, or right away on keyboard focus. They never show on touch screens.

## Variants and states

- **Sender:** `user`, `assistant`, or `system`.
- **Surface:** `surface`, `primary`, `tinted`, or `ghost` content, and a status `theme` on `tinted` content.
- **Feedback:** none, good, or bad, controlled or uncontrolled.

## Accessibility

- `PromptMessage` adds no roles of its own; a thread of messages takes its semantics from the chat around it. While a reply streams, set `aria-busy` on its message, as the `Streaming` story does.
- Every action is an icon button with an accessible name: its `label` (or `tooltip`). Copy is named "Copy text", then "Copied text" after a copy.
- The feedback toggles are named "Good response" and "Bad response" and set `aria-pressed`. They are grouped as "Feedback".
- The `tinted` danger surface is not the only sign of an error: say it in the text, as in "The deploy failed: …".
- The avatar is decorative next to a `PromptMessage.Header` that names the sender. Without a header, give the avatar a `name`, which becomes its image's alt text.
- Actions show the Cyclone `ring-offset` focus ring on keyboard focus.

## Related

- [Trace](./trace.md)
- [Suggestion](./suggestion.md)
- [Checkpoint](./checkpoint.md)
- [Avatar](./avatar.md)
- [Feedback](./feedback.md)
- [Like Button](./like-button.md)

## Source

- [`components/prompt-message/src/PromptMessage.tsx`](../../../components/prompt-message/src/PromptMessage.tsx)
- [`components/prompt-message/src/PromptMessage.stories.tsx`](../../../components/prompt-message/src/PromptMessage.stories.tsx)
