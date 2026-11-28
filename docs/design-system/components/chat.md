---
title: Chat
description: The thread of a conversation with an AI agent. A scrolling transcript that moves a new turn near the top, lets its reply stream in below, follows the reply only while the reader stays at the end, and never moves the reader against their intent.
documentType: reference
tags: [component, chat, conversation, ai, agent, thread, scroll]
component:
  name: chat
  package: "@cyclone-ui/chat"
  stories:
    - title: AI/Chat
      file: components/chat/src/Chat.stories.tsx
---

# Chat

`Chat` is the thread of a conversation with an AI agent. Each turn is a [Prompt Message](./prompt-message.md) in a `Chat.Item`, inside the scrolling `Chat.Content`. Put a [Prompt Input](./prompt-input.md) under it, and [Suggestions](./suggestion.md) above that.

Streaming replies arrive while the reader may still be reading, so `Chat` keeps their place. The person's message is the scroll anchor: a new one settles near the top, under a peek of the turn before it, and the reply streams into the space below without moving the view. Once the reply fills the view, the view follows it, but only while the reader stays at the end.

It is the Cyclone UI version of the shadcn AI Elements Chat, which replaces the AI SDK Elements `Conversation`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add chat
pnpm install
```

- **File:** `Chat.tsx`. The CLI writes it to `<path>/chat/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/constants` and `@tamagui/core`.

## Import

```tsx
import { Chat } from "@cyclone-ui/chat"
```

## Usage

`Chat` fills its parent, so give the parent a height. Mark the person's messages with `scrollAnchor`, and pass `aria-busy` to `Chat.Content` while a reply streams:

```tsx
<View height="100vh">
  <Chat>
    <Chat.Content aria-busy={status === "streaming"}>
      {messages.map(message => (
        <Chat.Item key={message.id} scrollAnchor={message.role === "user"}>
          <PromptMessage from={message.role}>
            <PromptMessage.Content>{getText(message)}</PromptMessage.Content>
          </PromptMessage>
        </Chat.Item>
      ))}
    </Chat.Content>
    <Chat.ScrollButton />
  </Chat>
  <PromptInput status={status} onSubmit={({ text }) => send(text)} />
</View>
```

Render a `Chat.EmptyState` in place of `Chat.Content` before the first message:

```tsx
<Chat>
  {messages.length === 0 ? (
    <Chat.EmptyState
      icon={<ChatRound size={32} />}
      title="What should we build?"
      description="The agent can read your code, run commands and make changes."
    />
  ) : (
    <Chat.Content>…</Chat.Content>
  )}
</Chat>
```

Every new token renders the thread again, so memoize the rows (with `memo`, keyed by message) and keep finished messages the same objects. Then only the streaming turn renders.

## Anatomy

```tsx
<Chat>
  <Chat.Content>
    <Chat.Item scrollAnchor />
    <Chat.Item />
  </Chat.Content>
  <Chat.ScrollButton />
  <Chat.EmptyState />
</Chat>
<Chat.Download messages={messages} />
```

| Part                | Renders                                                              | Purpose                                                                       |
| ------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `Chat`              | A `View` that fills its parent                                       | Holds the scroll state its parts share.                                       |
| `Chat.Content`      | A [`ScrollView`](./scroll-view.md) region around a `role="log"` list | The transcript. Its props go to the list.                                     |
| `Chat.Item`         | A `View`                                                             | One row: a message, a marker or a checkpoint. `scrollAnchor` starts a turn.   |
| `Chat.ScrollButton` | A circular [`Button`](./button.md) over the bottom of the transcript | Scrolls to the end and follows the reply again. Shows only away from the end. |
| `Chat.EmptyState`   | A centered `View` with an icon, a title and a description            | What an empty thread shows.                                                   |
| `Chat.Download`     | A circular `Button` with a "Download conversation" tooltip           | Saves the thread as a Markdown file. Put it in a header.                      |

## Examples

The examples are the stories in [`Chat.stories.tsx`](../../../components/chat/src/Chat.stories.tsx). Each is a scripted conversation: the agent thinks, runs a command and replies, shown with [Trace](./trace.md) lines and Prompt Messages.

| Stories        | What they show                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Base`         | A saved thread opens at the start of its last turn. The play function checks the position, scrolls to the end with the scroll button and downloads the thread.     |
| `Conversation` | Sending a message moves it near the top, and the reply streams in below it. The play function checks that the turn stays put while the reply streams.              |
| `Following`    | A reply taller than the view. The play function checks that the view follows it, stays put when scrolled up, and follows again after the scroll button is pressed. |
| `Empty`        | An empty thread with suggestions. The play function sends one and waits for the reply.                                                                             |

## Props

### Chat

`Chat` accepts the `View` props.

### Chat.Content

`Chat.Content` accepts the `View` props, which go to its `role="log"` list. Its gap is `7xl` and its padding `4xl`; pass `aria-busy` while a reply streams.

### Chat.Item

`Chat.Item` accepts the `View` props and adds these props:

| Prop           | Type      | Default | Description                                                                                         |
| -------------- | --------- | ------- | --------------------------------------------------------------------------------------------------- |
| `scrollAnchor` | `boolean` | `false` | Starts a turn: when it is added, the view scrolls it near the top. Set it on the person's messages. |

### Chat.ScrollButton

`Chat.ScrollButton` accepts the [`Button`](./button.md) props. It is labeled "Scroll to end".

### Chat.EmptyState

`Chat.EmptyState` accepts the `View` props and adds these props:

| Prop          | Type        | Default                                       | Description                                                                 |
| ------------- | ----------- | --------------------------------------------- | --------------------------------------------------------------------------- |
| `title`       | `string`    | `"No messages yet"`                           | The title.                                                                  |
| `description` | `string`    | `"Start a conversation to see messages here"` | The line under the title.                                                   |
| `icon`        | `ReactNode` | None                                          | An icon above the title, in the `subtle` color. Set its `size`, such as 32. |

`children` replace the icon, title and description.

### Chat.Download

`Chat.Download` accepts the [`Button`](./button.md) props and adds these props:

| Prop            | Type                                              | Default             | Description                                       |
| --------------- | ------------------------------------------------- | ------------------- | ------------------------------------------------- |
| `messages`      | `ChatMessage[]`                                   | Required            | The messages to save.                             |
| `filename`      | `string`                                          | `"conversation.md"` | The file's name.                                  |
| `formatMessage` | `(message: ChatMessage, index: number) => string` | `**Role:** text`    | Formats each message, as in `messagesToMarkdown`. |

### messagesToMarkdown

`messagesToMarkdown(messages, formatMessage?)` returns the messages as Markdown, one paragraph each. By default each reads `**User:** text` or `**Assistant:** text`, from the message's text parts.

`ChatMessage` is the shape it reads: `{ role: "system" | "user" | "assistant"; parts: { type: string; text?: string }[] }`. An AI SDK `UIMessage` fits it.

The exported types are `ChatProps`, `ChatContentProps`, `ChatItemProps`, `ChatScrollButtonProps`, `ChatEmptyStateProps`, `ChatDownloadProps`, and `ChatMessage`. For React Server Components, the parts are also exported as `ChatContent`, `ChatItem`, `ChatScrollButton`, `ChatEmptyState`, and `ChatDownload`.

## Behavior

- **Opening:** the transcript opens at the start of the last turn, under a 48px peek of the turn before it, or at the end if the last turn fits.
- **A new turn:** when a `Chat.Item` with `scrollAnchor` is added, the transcript scrolls it near the top. Space is reserved under it, so the reply streams in without moving the view, and the space shrinks as the reply grows.
- **Following:** once the reply fills the view, the view follows it while the reader stays at the end. Scrolling up, by wheel, touch, keyboard or scrollbar, leaves the reader where they are while the reply keeps streaming. Scrolling back to the end, or pressing `Chat.ScrollButton`, follows it again.
- **Scroll button:** it fades in when the reader is away from the end and out when they are back.
- Scrolling is smooth unless the reader prefers reduced motion.
- **Native:** the scroll behavior is web only. On native, `Chat.Content` is a plain scroll view and `Chat.Download` renders nothing.

## Variants and states

- **Empty:** `Chat.EmptyState` in place of `Chat.Content`.
- **Streaming:** `aria-busy` on `Chat.Content`.
- **Scroll position:** at the end (following, no scroll button) or away from it (the scroll button shows).

## Accessibility

- `Chat.Content` is a keyboard-focusable region labeled "Messages", so keyboard users can focus the transcript and scroll it with the arrow and page keys. It shows the Cyclone `ring-offset` focus ring.
- Its list is a `role="log"` live region with `aria-relevant="additions"`: new rows are announced, but streamed text is not read out token by token. Pass `aria-busy` while a reply streams so the finished row is announced.
- `Chat.ScrollButton` is labeled "Scroll to end". When hidden, it is `inert`, so it is out of the tab order.
- `Chat.Download` is named by its "Download conversation" tooltip.

## Related

- [Prompt Message](./prompt-message.md)
- [Prompt Input](./prompt-input.md)
- [Suggestion](./suggestion.md)
- [Trace](./trace.md)
- [Scroll View](./scroll-view.md)

## Source

- [`components/chat/src/Chat.tsx`](../../../components/chat/src/Chat.tsx)
- [`components/chat/src/Chat.stories.tsx`](../../../components/chat/src/Chat.stories.tsx)
