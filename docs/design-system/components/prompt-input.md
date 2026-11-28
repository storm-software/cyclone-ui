---
title: Prompt Input
description: The field a person types a message to an AI agent in, with attached files, a text box that grows with its text, a footer of tools, and a submit button that follows the chat's status.
documentType: reference
tags: [component, prompt-input, ai, agent, chat, composer, form, attachments]
component:
  name: prompt-input
  package: "@cyclone-ui/prompt-input"
  stories:
    - title: AI/PromptInput
      file: components/prompt-input/src/PromptInput.stories.tsx
---

# Prompt Input

`PromptInput` is the field a person types a message to an AI agent in. It is a form with chips for attached files, a text box that grows with its text, and a footer with tools and a submit button. Enter sends the message and Shift+Enter adds a line. The submit button follows the chat's status: it sends, shows a spinner while the request is on its way, and stops the reply while it streams.

Put a [Model Selector](./model-selector.md) and a [Context](./context.md) meter in its footer to pick the model and show the context window's usage.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add prompt-input
pnpm install
```

- **File:** `PromptInput.tsx`. The CLI writes it to `<path>/prompt-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Input](./input.md), [Ripple Animation](./ripple-animation.md), [Tag](./tag.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/use-controllable-state`.

## Import

```tsx
import { PromptInput, usePromptInput } from "@cyclone-ui/prompt-input";
```

## Usage

With no children, `PromptInput` renders the attached files, the text box, an attach button, and a submit button. With the AI SDK's `useChat`:

```tsx
const { sendMessage, status, stop } = useChat();

<PromptInput
  status={status}
  onStop={stop}
  onSubmit={({ text, files }) => {
    // Not returned: its promise resolves when the reply ends, and the
    // input would only clear then.
    void sendMessage({ text, files });
  }}
/>;
```

`onSubmit` receives the files as data URLs, in the shape of the AI SDK's `FileUIPart`, so they can go straight to `sendMessage`. The input clears once `onSubmit` returns, or once its promise resolves. Don't return `sendMessage`'s promise: it resolves when the reply ends.

To add tools, compose the parts. Put the tools at the start of the footer, and the menus next to the submit button:

```tsx
<PromptInput status={status} onStop={stop} onSubmit={handleSubmit}>
  <PromptInput.Header />
  <PromptInput.Textarea placeholder="Ask the agent to change your code..." />
  <PromptInput.Footer>
    <PromptInput.Tools>
      <PromptInput.AddAttachments />
      <Context usedTokens={usedTokens} maxTokens={128_000} usage={usage} />
    </PromptInput.Tools>
    <PromptInput.Tools>
      <ModelMenu />
      <EffortMenu />
      <PromptInput.Submit />
    </PromptInput.Tools>
  </PromptInput.Footer>
</PromptInput>
```

`ModelMenu` and `EffortMenu` are [Model Selector](./model-selector.md) menus. Send the model and effort with the message:

```tsx
const handleSubmit = ({ text, files }: PromptInputMessage) => {
  void sendMessage({ text, files }, { body: { model, effort } });
};
```

To limit the files, set `accept`, `maxFiles`, and `maxFileSize`, and report the files that are turned away with `onError`, for example in a toast from `@cyclone-ui/toast`:

```tsx
<PromptInput
  accept="image/*"
  maxFiles={4}
  maxFileSize={10 * 1024 * 1024}
  onError={error => toast.error(error.message)}
  onSubmit={handleSubmit}
/>
```

## Anatomy

```tsx
<PromptInput>
  <PromptInput.Header>
    <PromptInput.Attachment />
  </PromptInput.Header>
  <PromptInput.Textarea />
  <PromptInput.Footer>
    <PromptInput.Tools>
      <PromptInput.AddAttachments />
    </PromptInput.Tools>
    <PromptInput.Submit />
  </PromptInput.Footer>
</PromptInput>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `PromptInput` | A `<form>` with a `surface` background, a `hairline` border and a focus ring while the text box has focus, and a hidden file input | Holds the text, the files and the status. Files dropped anywhere on it are attached. |
| `PromptInput.Header` | A wrapping row of `PromptInput.Attachment` chips. Renders nothing while there are no files | The attached files. |
| `PromptInput.Attachment` | A `sunken`, removable [`Tag`](./tag.md) with an image or document icon and the file name | One attached file. |
| `PromptInput.Textarea` | A borderless `<textarea>` ([`Input`](./input.md)'s `InputValue`) from 62 to 192 px tall | The message. Enter sends it, and pasted files are attached. |
| `PromptInput.Footer` | A row with the content at both ends | The tools and the submit button. |
| `PromptInput.Tools` | A wrapping row of buttons and menus | Groups tools, such as the attach button and the menus. |
| `PromptInput.AddAttachments` | A round `ghost` [`Button`](./button.md) with a plus and the tooltip "Attach files" | Opens the file dialog. |
| `PromptInput.Submit` | A round `primary` [`Button`](./button.md) with an arrow, a spinner or a stop square | Sends the message or stops the reply. |

## Examples

The examples are the stories in [`PromptInput.stories.tsx`](../../../components/prompt-input/src/PromptInput.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | The default parts. The play function checks that the empty input can't be sent, adds a line with Shift+Enter, sends with Enter, checks `onSubmit`, the cleared text and the focus, and sends again with the button. |
| `Attachments` | The play function attaches two files with the file input, removes one (focus moves to the text box), pastes an image into the text box, and drops a file on the input. |
| `SendFiles` | The play function sends an image without text and checks that `onSubmit` receives it as a data URL. |
| `AcceptImages` | `accept="image/*"`, `maxFiles={2}` and `maxFileSize={1024}`. The play function drops a PDF, a large image and three images, and checks each `onError` code and the attached files. |
| `Submitted`, `Streaming`, `Error` | The submit button for each status. In `Streaming`, the play function checks that Enter doesn't send and that the button calls `onStop`. |
| `Chat` | A simulated chat that moves from `submitted` to `streaming` to `ready`. The play function sends a message and stops the reply. |
| `Controlled` | `value` and `onValueChange`, with suggestions that fill the text. |
| `WithTools` | A footer with the attach button, a [Context](./context.md) meter, model and effort [Model Selector](./model-selector.md) menus, and the submit button. The play function picks a model and checks that the message isn't sent. |

## Props

### PromptInput

`PromptInput` accepts the `View` props, such as `aria-label`, and these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onSubmit` | `(message: PromptInputMessage, event?: FormEvent<HTMLFormElement>) => void \| Promise<void>` | None | Called with `{ text, files }` when the message is sent. The text and files clear once it returns or its promise resolves; a rejected promise keeps them. |
| `value` | `string` | None | The message text. Setting it makes the text controlled. |
| `defaultValue` | `string` | `""` | The initial text when uncontrolled. |
| `onValueChange` | `(text: string) => void` | None | Called with the new text, including `""` when the input clears after sending. |
| `status` | `"ready" \| "submitted" \| "streaming" \| "error"` | `"ready"` | The chat's status, as `useChat` reports it. While `submitted` or `streaming`, the message can't be sent. |
| `onStop` | `() => void` | None | Stops the reply. While set and a reply is `submitted` or `streaming`, the submit button calls it. |
| `accept` | `string` | None | The file types to accept, as in `<input type="file">`: `image/*`, `image/png` or `.pdf`, separated by commas. |
| `maxFiles` | `number` | None | The most files a message can have. With `1`, the file dialog picks one file. |
| `maxFileSize` | `number` | None | The largest file to accept, in bytes. |
| `onError` | `(error: PromptInputError) => void` | None | Called when files are turned away, with the `code` `"accept"`, `"max_file_size"` or `"max_files"` and a `message`. |
| `children` | `ReactNode` | The default parts | Custom parts. |

### PromptInput.Header

`PromptInput.Header` accepts the `View` props. Its `children` replace the attachment chips.

### PromptInput.Attachment

`PromptInput.Attachment` accepts the [`Tag`](./tag.md) props, such as `variant`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `PromptInputAttachedFile` | Required | The attached file: `{ id, file }`. |

### PromptInput.Textarea

`PromptInput.Textarea` accepts the `InputValue` props, such as `autoFocus` and `aria-label` (default "Message").

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `placeholder` | `string` | `"What would you like to know?"` | The text shown while the text box is empty. |

### PromptInput.Footer and PromptInput.Tools

These parts accept the `View` props.

### PromptInput.AddAttachments and PromptInput.Submit

These parts accept the [`Button`](./button.md) props, such as `tooltip`. `PromptInput.Submit` reads the status from `PromptInput`.

### usePromptInput

`usePromptInput()` returns the state of the nearest `PromptInput`. It throws outside one.

| Field | Type | Description |
| --- | --- | --- |
| `text` | `string` | The message text. |
| `setText` | `(text: string) => void` | Changes the text. |
| `files` | `PromptInputAttachedFile[]` | The attached files. |
| `add` | `(files: File[] \| FileList) => void` | Attaches files, within the `accept`, `maxFileSize` and `maxFiles` limits. |
| `remove` | `(id: string) => void` | Removes a file. |
| `clear` | `() => void` | Removes every file. |
| `openFileDialog` | `() => void` | Opens the file dialog. |
| `status` | `ChatStatus` | The chat's status. |
| `onStop` | `() => void` | The `onStop` prop. |
| `canSend` | `boolean` | Whether there is text or a file to send and no reply is on its way. |
| `submit` | `(event?) => Promise<void>` | Sends the message, as the form's submit does. |

The exported types are `PromptInputProps`, `PromptInputMessage`, `PromptInputFile`, `PromptInputAttachedFile`, `PromptInputError`, `PromptInputContextValue`, `ChatStatus`, `PromptInputHeaderProps`, `PromptInputAttachmentProps`, `PromptInputTextareaProps`, `PromptInputFooterProps`, `PromptInputToolsProps`, `PromptInputAddAttachmentsProps`, and `PromptInputSubmitProps`. For React Server Components, the parts are also exported as `PromptInputHeader`, `PromptInputAttachment`, `PromptInputTextarea`, `PromptInputFooter`, `PromptInputTools`, `PromptInputAddAttachments`, and `PromptInputSubmit`.

## Behavior

- Enter sends the message. Shift+Enter adds a line, and Enter that picks a word from an input method editor (for example, while typing Japanese) doesn't send.
- A message can be sent when it has text other than spaces, or a file, and no reply is `submitted` or `streaming`. Otherwise the submit button is disabled, and Enter does nothing.
- Only the submit button and Enter send. Other buttons in the input, such as tools and menus, never submit the form, even without a `type`.
- After sending, the text and the files clear, and focus returns to the text box, so the next message can be typed at once.
- The text box grows with its text from 62 to 192 px (in browsers that support `field-sizing`), then scrolls.
- Files are attached with the plus button, pasted into the text box, or dropped anywhere on the input, which highlights while files are dragged over it. Files that don't match `accept`, are larger than `maxFileSize`, or are past `maxFiles` are turned away, and `onError` is called once for each reason.
- Removing a file animates its chip out, then moves focus to the text box.
- The submit button shows an arrow while `ready`, a spinner while `submitted`, a stop square while `streaming`, and an arrow in the `danger` theme after an `error`. While a reply is on its way and `onStop` is set, pressing it calls `onStop`.
- Attaching files uses the browser's file input, clipboard and drag and drop, so it works on the web only.

## Variants and states

- **Focused:** while the text box has focus, the input's border darkens and it shows the focus ring.
- **Dragging files:** the background turns `surface-active`.
- **Status:** `ready`, `submitted`, `streaming`, and `error`, shown on the submit button.

## Accessibility

- The input is a `<form>`. Give it an `aria-label` (such as "Message the agent") to make it a landmark.
- The text box is named "Message"; set `aria-label` on `PromptInput.Textarea` to change it.
- The submit button is named "Send", or "Stop" while it stops a reply. The attach button is named "Attach files". Both names show in tooltips.
- Each file chip's remove button is named "Remove" and the file name. After a chip is removed, focus moves to the text box instead of the page.
- The status is shown by the button's icon and name, not by color alone.

## Related

- [Model Selector](./model-selector.md)
- [Context](./context.md)
- [Text Area](./text-area.md)
- [Tag](./tag.md)
- [File Picker](./file-picker.md)

## Source

- [`components/prompt-input/src/PromptInput.tsx`](../../../components/prompt-input/src/PromptInput.tsx)
- [`components/prompt-input/src/PromptInput.stories.tsx`](../../../components/prompt-input/src/PromptInput.stories.tsx)
