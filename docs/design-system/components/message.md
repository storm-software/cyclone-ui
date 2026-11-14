---
title: Message
description: A toast notification container that shows each queued toast as a dismissible Alert in the bottom-right corner with a countdown bar.
documentType: reference
tags: [component, message, toast, notification]
component:
  name: message
  package: "@cyclone-ui/message"
  stories:
    - title: Containers/Message
      file: components/message/src/Message.stories.tsx
---

# Message

`Message` is the host for app-wide toast notifications. It is built on Tamagui `Toast`. It renders each queued toast as an [Alert](./alert.md) in the bottom-right corner. Mount it once near the root of the app. Then show messages with the `useMessageActions` hook.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add message
pnpm install
```

- **File:** `Message.tsx`. The CLI writes it to `<path>/message/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Alert](./alert.md), [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/stacks`, and `@tamagui/toast`.

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

## Anatomy

You do not compose these parts. `Message` renders them for each queued toast.

```tsx
<Message>
  <Toast.Viewport label="Messages">
    <Toast.List>
      <Toast.Item>
        <Alert type={alertType}>
          <Alert.Icon />
          <Alert.Content>
            <Alert.Content.Heading>{title}</Alert.Content.Heading>
            <Alert.Content.Body>{description}</Alert.Content.Body>
          </Alert.Content>
          <Alert.Close tooltip="Dismiss" />
          {countdownBar}
        </Alert>
      </Toast.Item>
    </Toast.List>
  </Toast.Viewport>
</Message>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Message` | The Tamagui `Toast` root | Holds the shared settings: position, gap, swipe, and `duration`. |
| Viewport | `Toast.Viewport` with the label "Messages". Tamagui portals it to the root and renders it only while there are toasts. On web it is a polite live region (`aria-live="polite"`). | The area in the bottom-right corner that holds the stack of toasts. |
| Item | `Toast.Item`. Its inner frame has `role="status"`, `aria-live="polite"`, `aria-atomic`, and `tabIndex={0}`. | One toast. It can be swiped away horizontally. In a collapsed stack, only the edge of each card behind the front one shows. |
| Alert | An [Alert](./alert.md) with the mapped type | Shows the toast icon, the title as the heading, and the description as the body (only when it is set). |
| Close | `Alert.Close`: a ghost, circular [Button](./button.md) with the tooltip "Dismiss" | Closes the toast. |
| Countdown bar | A Tamagui `View`, 3 px high, at the bottom edge (`pointerEvents="none"`) | Shrinks over the toast duration. The toast closes when it reaches zero. A `loading` toast has no bar. |

## Examples

The examples are the stories in [`Message.stories.tsx`](../../../components/message/src/Message.stories.tsx). Each story renders `Message` and two buttons. **Show** calls `show` with the heading "Message Heading", a long body, and the story's `type`. **Hide** calls `hide`, which closes all toasts.

| Stories | What they show |
| --- | --- |
| `Base` | A toast with no `type`. It uses the `base` alert style. |
| `Brand`, `Warning`, `Info`, `Success` | A toast with the type of the same name. |
| `Discovery` | `type: "help"`, which shows the `discovery` alert style. |
| `Error` | `type: "error"`, which shows the `danger` alert style. It stays for 60 seconds by default. |

## Props

`MessageProps` is `Partial<ToastRootProps>` from `@tamagui/toast`. The component sets these defaults, and you can override them:

| Prop | Default | Description |
| --- | --- | --- |
| `duration` | - | Time in milliseconds before each toast closes by itself. When you do not set it, a toast closes after `25000` ms, or after `60000` ms when its alert type is `danger`. |
| `gap` | `20` | The space between stacked toasts. |
| `position` | `"bottom-right"` | The viewport position. |
| `swipeDirection` | `"horizontal"` | The swipe direction that dismisses a toast. |
| `swipeThreshold` | `50` | The swipe distance that dismisses a toast. |

A toast can set its own `duration`. It has priority over the `duration` prop. A `loading` toast never closes by itself.

## Message types

The component maps the toast `messageType` (or the toast `type`) to an `Alert` type.

| Message type | Alert type |
| --- | --- |
| `error`, `negative` | `danger` |
| `help` | `discovery` |
| `positive` | `success` |
| `danger`, `brand`, `discovery`, `warning`, `info`, `success` | The same name |
| Any other value | `base` |

The `useMessageActions` hook also has `showInfo`, `showSuccess`, `showWarning`, `showError`, `showHelp`, and `hide`. `showHelp` sets no type, so its toast uses the `base` style. For the `discovery` style, call `show` with `type: "help"`.

## Behavior

- Each toast shows an alert icon, a heading, an optional body, and a close button.
- A bar at the bottom edge shrinks over the toast duration. When it reaches zero, the toast closes and the toast's `onAutoClose` callback runs.
- The timer pauses while the pointer is over the toast, while the toast has focus, and while the stack is expanded.
- The viewport label is "Messages".

## Variants and states

The stories show the default style and these types: `brand`, `help`, `error`, `warning`, `info`, and `success`.

## Accessibility

These behaviors come from Tamagui `Toast` on web:

- Each toast has `role="status"` and `aria-live="polite"`. Screen readers announce it and focus does not move.
- Press `Alt+T` to move focus to the viewport and expand the stack. The viewport's accessible name is "Messages" followed by the hotkey.
- Each toast is in the tab order. Press `Escape` on a focused toast to close it. Focus moves to the next toast.
- Focus on a toast pauses its countdown.
- The close button's accessible name is "Dismiss", from its tooltip.

## Related

- [Alert](./alert.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/message/src/Message.tsx`](../../../components/message/src/Message.tsx)
- [`components/message/src/Message.stories.tsx`](../../../components/message/src/Message.stories.tsx)
- [`packages/state/src/message/hooks/use-message-actions.ts`](../../../packages/state/src/message/hooks/use-message-actions.ts)
