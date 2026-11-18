---
title: Modal
description: Reference for the Modal component, a centered dialog with a pinned header, a scrolling content panel, and a footer for actions.
documentType: reference
tags: [component, containers, modal, dialog]
component:
  name: modal
  package: "@cyclone-ui/modal"
  stories:
    - title: Containers/Modal
      file: components/modal/src/Modal.stories.tsx
---

# Modal

`Modal` is a centered modal window with a fixed layout. It is built on [Dialog](./dialog.md). Its frame holds a bordered content panel and a footer for actions. The header stays at the top of the panel, and the rest of the panel scrolls when it is too tall.

Use `Modal` for short forms and confirmations. It has the same parts as [Drawer](./drawer.md), so you can move content between the two.

- Use [Dialog](./dialog.md) when you want to set the layout yourself.
- Use [Alert Dialog](./alert-dialog.md) for a status confirmation with a large icon.
- Use [Drawer](./drawer.md) or [Sheet](./sheet.md) for a panel that slides in from an edge of the screen.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add modal
pnpm install
```

- **File:** `Modal.tsx`. The CLI writes it to `<path>/modal/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Dialog](./dialog.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Overlay](./overlay.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/dialog`, `@tamagui/helpers`, and `@tamagui/stacks`.

## Import

```tsx
import { Modal } from "@cyclone-ui/modal";
```

## Usage

```tsx
const [open, setOpen] = useState(false);

<Modal open={open} onOpenChange={setOpen}>
  <Modal.Trigger asChild={true}>
    <Button>
      <Button.Text>Invite a member</Button.Text>
    </Button>
  </Modal.Trigger>

  <Modal.Frame>
    <Modal.Content>
      <Modal.Header closable={true}>
        <Modal.Title>Invite a member</Modal.Title>
        <Modal.Description>They get an email invite to the workspace.</Modal.Description>
      </Modal.Header>
      <Modal.Body>Invites expire after 7 days.</Modal.Body>
    </Modal.Content>

    <Modal.Footer>
      <Button variant="outlined" size="sm" flexGrow={0} onPress={() => setOpen(false)}>
        <Button.Text>Cancel</Button.Text>
      </Button>
      <Button variant="primary" size="sm" flexGrow={0} onPress={sendInvite}>
        <Button.Text>Send invite</Button.Text>
      </Button>
    </Modal.Footer>
  </Modal.Frame>
</Modal>
```

Set `flexGrow={0}` on footer buttons. A `Button` grows to fill its row by default.

## Anatomy

```tsx
<Modal>
  <Modal.Trigger />
  <Modal.Frame>
    <Modal.Content>
      <Modal.Header>
        <Modal.Title />
        <Modal.Description />
      </Modal.Header>
      <Modal.Body />
    </Modal.Content>
    <Modal.Footer />
  </Modal.Frame>
</Modal>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Modal` | [Dialog](./dialog.md) | The root. It holds the open state and passes its props to `Dialog`. |
| `Modal.Trigger` | `Dialog.Trigger` | Opens the modal. Use `asChild` to render your own button. |
| `Modal.Frame` | `Dialog.Portal` with `Dialog.Overlay` and `Dialog.Container` (`role="dialog"`) | The outer shell. It renders in a portal over the overlay. It has the `surface` variant, no padding, a `maxWidth` of `480`, and a `maxHeight` of `85vh`. |
| `Modal.Content` | A `YStack` with the `canvas` background, a `hairline` border, and an `lg` margin | The inset panel. Direct `Modal.Header` children stay at the top. The other children go in a [ScrollView](./scroll-view.md) (size `lg`) that scrolls when the frame reaches its `maxHeight`. |
| `Modal.Header` | An `XStack` | The header row. It holds the title and description. With `onBack`, it adds a back button on the left. With `closable`, it adds a close button on the right. |
| `Modal.Title` | `Dialog.Heading` (inside the Tamagui `DialogTitle`) at font size `2xl`, `semibold` | The title. It names the dialog. |
| `Modal.Description` | `Dialog.Body` at size `sm` (inside the Tamagui `DialogDescription`) | The description. It describes the dialog. |
| `Modal.Body` | A `BodyText` with the `ink` color | Body text in the scrolling area. |
| `Modal.Footer` | An `XStack` aligned to the end, with an `xl` padding and a `2xl` gap | The action row. It sits in the frame below `Modal.Content`, so it stays visible while the content scrolls. |

The back and close buttons are ghost, circular, `sm` [Buttons](./button.md). The close button is inside the Tamagui `DialogClose`, so it closes the modal.

The package also exports flat names for React Server Components, which cannot read `Modal.Trigger` from a client module: `ModalTrigger`, `ModalFrame`, `ModalContent`, `ModalHeader`, `ModalTitle`, `ModalDescription`, `ModalBody`, and `ModalFooter`.

## Examples

The examples are the stories in [`Modal.stories.tsx`](../../../components/modal/src/Modal.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | A controlled modal (`open` and `onOpenChange`). The trigger opens an "Invite a member" form with a closable header, two text inputs, and a role select. The footer **Cancel** and **Send invite** buttons close it. |
| `Uncontrolled` | A modal with `defaultOpen`, so it is open when the story loads. It has a closable header and one `Modal.Body` paragraph, and no footer. |
| `Scrollable` | A header with `onBack` and `closable`, and 32 body paragraphs. The header and the footer stay visible while the content scrolls. |

## Props

### `Modal`

`Modal` accepts the [Dialog](./dialog.md) props except `variant`, because `Modal.Frame` sets its own surface.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | - | The open state, for a controlled modal. |
| `defaultOpen` | `boolean` | - | The open state on the first render, for an uncontrolled modal. |
| `onOpenChange` | `(open: boolean) => void` | - | Called when the modal opens or closes. |
| `modal` | `boolean` | `true` | Makes the dialog modal. |
| `theme` | `string` | `"base"` | The theme name applied to the modal and its parts. |
| `overlay` | `boolean` | `true` | Set to `false` to hide the overlay. |
| `shadowStyle`, `glass`, `noise`, `accented` | Container props | - | The surface options of `Modal.Frame`. |

### `Modal.Frame`

`Modal.Frame` accepts the `Dialog.Container` props. A value that you set replaces the default.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `maxWidth` | size value | `480` | The maximum width of the frame. |
| `maxHeight` | size value | `"85vh"` | The maximum height of the frame. The content scrolls past this height. |
| `variant` | [Container](./container.md) variant | `"surface"` | The surface of the frame. |

### `Modal.Header`

`Modal.Header` also accepts the props of a Tamagui `XStack`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onBack` | `() => void` | - | Renders a back arrow button that calls this handler. |
| `closable` | `boolean` | `false` | Renders an X button that closes the modal. |

### Other parts

- `Modal.Content` accepts the `YStack` props.
- `Modal.Footer` accepts the `XStack` props.
- `Modal.Title` accepts the `Dialog.Heading` props.
- `Modal.Description` accepts the `Dialog.Body` props.
- `Modal.Body` accepts the `BodyText` props.

The package exports the `ModalProps`, `ModalFrameProps`, `ModalContentProps`, `ModalHeaderProps`, `ModalTitleProps`, `ModalDescriptionProps`, `ModalFooterProps`, and `ModalComponent` types.

## Behavior

- `Modal.Content` keeps a `Modal.Header` at the top only when it is a direct child. A header in a wrapper scrolls with the body.
- The frame sets the CSS `color` to `var(--primary)`. Inputs in the portal inherit this text color.
- The frame uses the `Dialog.Container` animation: a 200ms fade, move, and scale.

## Accessibility

- `Modal` uses the focus and keyboard behavior of [Dialog](./dialog.md). The trigger has `aria-haspopup="dialog"`, `aria-expanded`, and `aria-controls`. The frame has `role="dialog"` and `aria-modal`.
- `Modal.Title` names the dialog (`aria-labelledby`). `Modal.Description` describes it (`aria-describedby`). `Modal.Body` is not part of the description.
- On the web, focus stays in the modal and moves in a loop. Escape and a press on the overlay close the modal. Focus goes back to the trigger on close.
- The back button has `aria-label="Back"` and the close button has `aria-label="Close"`. Each also shows a tooltip with the same text.

## Related

- [Dialog](./dialog.md)
- [Alert Dialog](./alert-dialog.md)
- [Drawer](./drawer.md)
- [Sheet](./sheet.md)
- [ScrollView](./scroll-view.md)
- [Button](./button.md)

## Source

- [`components/modal/src/Modal.tsx`](../../../components/modal/src/Modal.tsx)
- [`components/modal/src/Modal.stories.tsx`](../../../components/modal/src/Modal.stories.tsx) (title: `Containers/Modal`)
