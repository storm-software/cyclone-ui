---
title: Message
description: A toast notification container that shows each queued toast as a dismissible Alert in the bottom-right corner with a countdown bar.
documentType: reference
tags: [component, message, toast, notification]
---

# Message

`Message` is the host for app-wide toast notifications. It is built on Tamagui `Toast`. It renders each queued toast as an [Alert](./alert.md) in the bottom-right corner. Mount it once near the root of the app. Then show messages with the `useMessageActions` hook.

## Import

```tsx
import { Message } from "@cyclone-ui/message";
import { useMessageActions } from "@cyclone-ui/state/message";
```

## Usage

Render `Message` once. Call `show` from any component.

```tsx
export function App() {
  return (
    <>
      <Message />
      <ShowButton />
    </>
  );
}

function ShowButton() {
  const { show } = useMessageActions();

  return (
    <Button
      onPress={() =>
        show("Your changes were saved.", {
          heading: "Saved",
          type: "success"
        })
      }>
      <Button.Text>Save</Button.Text>
    </Button>
  );
}
```

With a `heading`, the heading becomes the toast title and the message becomes the description. Without a `heading`, the message is the title.

## Props

`MessageProps` is `Partial<ToastRootProps>` from `@tamagui/toast`. The component sets these defaults, and you can override them:

| Prop | Default | Description |
| --- | --- | --- |
| `duration` | `30000` | Time in milliseconds before a toast closes by itself. |
| `gap` | `20` | The space between stacked toasts. |
| `position` | `"bottom-right"` | The viewport position. |
| `swipeDirection` | `"horizontal"` | The swipe direction that dismisses a toast. |
| `swipeThreshold` | `50` | The swipe distance that dismisses a toast. |

A toast can set its own `duration`. A `loading` toast never closes by itself.

## Message types

The component maps the toast `messageType` (or the toast `type`) to an `Alert` type.

| Message type | Alert type |
| --- | --- |
| `error` | `danger` |
| `help` | `discovery` |
| `danger`, `brand`, `discovery`, `warning`, `info`, `success`, `positive`, `negative` | The same name |
| Any other value | `base` |

The `useMessageActions` hook also has `showInfo`, `showSuccess`, `showWarning`, `showError`, `showHelp`, and `hide`.

## Behavior

- Each toast shows an alert icon, a heading, an optional body, and a close button.
- A bar at the bottom edge shrinks over the toast duration. When it reaches zero, the toast closes.
- The timer pauses while the pointer is over the toast, while the toast has focus, and while the stack is expanded.
- The viewport label is "Messages".

## Variants and states

The stories show the default style and these types: `brand`, `help`, `error`, `warning`, `info`, and `success`.

## Related

- [Alert](./alert.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/message/src/Message.tsx`](../../../components/message/src/Message.tsx)
- [`components/message/src/Message.stories.tsx`](../../../components/message/src/Message.stories.tsx)
- [`packages/state/src/message/hooks/use-message-actions.ts`](../../../packages/state/src/message/hooks/use-message-actions.ts)
