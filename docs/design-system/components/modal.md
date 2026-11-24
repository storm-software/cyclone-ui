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
      <Modal.Footer.Actions.Secondary>
        <Button variant="outlined" size="sm" onPress={() => setOpen(false)}>
          <Button.Text>Cancel</Button.Text>
        </Button>
      </Modal.Footer.Actions.Secondary>
      <Modal.Footer.Actions.Primary>
        <Button variant="primary" size="sm" onPress={sendInvite}>
          <Button.Text>Send invite</Button.Text>
        </Button>
      </Modal.Footer.Actions.Primary>
    </Modal.Footer>
  </Modal.Frame>
</Modal>
```

A `Button` grows to fill its row by default. Put footer buttons in action groups (see [Footer actions](#footer-actions)), or set `flexGrow={0}` on buttons placed directly in `Modal.Footer`.

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
    <Modal.Footer>
      <Modal.Footer.Actions.Secondary />
      <Modal.Footer.Actions.Primary />
    </Modal.Footer>
  </Modal.Frame>
</Modal>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Modal` | [Dialog](./dialog.md) | The root. It holds the open state and passes its props to `Dialog`. |
| `Modal.Trigger` | `Dialog.Trigger` | Opens the modal. Use `asChild` to render your own button. |
| `Modal.Frame` | `Dialog.Portal` with `Dialog.Overlay` and `Dialog.Container` (`role="dialog"`) | The outer shell. It renders in a portal over the overlay. It has the `surface` variant, no padding, a `maxWidth` of `480`, and a `maxHeight` of `85vh`. |
| `Modal.Content` | A `YStack` with the `canvas` background, a `hairline` border, and a margin of the modal's `padding` | The inset panel. Direct `Modal.Header` children stay at the top. The other children go in a [ScrollView](./scroll-view.md) (size `lg`) that scrolls when the frame reaches its `maxHeight`. |
| `Modal.Header` | An `XStack` | The header row. It holds the title and description. With `onBack`, it adds a back button on the left. With `closable`, it adds a close button on the right. |
| `Modal.Title` | `Dialog.Heading` (inside the Tamagui `DialogTitle`) at font size `2xl`, `semibold` | The title. It names the dialog. |
| `Modal.Description` | `Dialog.Body` at size `sm` (inside the Tamagui `DialogDescription`) | The description. It describes the dialog. |
| `Modal.Body` | A `BodyText` with the `ink` color | Body text in the scrolling area. |
| `Modal.Footer` | An `XStack` aligned to the end, with the modal's `padding` on the sides and bottom (none on top, where `Modal.Content`'s margin already sits) and the same `gap` | The action row. It sits in the frame below `Modal.Content`, so it stays visible while the content scrolls. |
| `Modal.Footer.Actions.Secondary` | An `XStack` of buttons | The secondary buttons, such as **Cancel**. They start the row and end the column. |
| `Modal.Footer.Actions.Primary` | An `XStack` of buttons | The primary buttons, such as **Send invite**. They end the row and start the column. |

The back and close buttons are ghost, circular, `sm` [Buttons](./button.md). The close button is inside the Tamagui `DialogClose`, so it closes the modal.

The package also exports flat names for React Server Components, which cannot read `Modal.Trigger` from a client module: `ModalTrigger`, `ModalFrame`, `ModalContent`, `ModalHeader`, `ModalTitle`, `ModalDescription`, `ModalBody`, `ModalFooter`, `ModalFooterActions`, `ModalFooterActionsPrimary`, and `ModalFooterActionsSecondary`.

## Footer actions

Put footer buttons in `Modal.Footer.Actions.Secondary` and `Modal.Footer.Actions.Primary` groups. The groups only hold buttons; `Modal.Footer` lays them out:

- In a row, every button is as wide as the widest one. Secondary buttons sit at the start of the row and primary buttons at the end, with an `xl` gap between the buttons in a group.
- Below the `sm` breakpoint, or when the buttons don't fit in one row at that width, they stack in a column at the full width of the footer. Primary buttons come first, then secondary buttons, with the same `xl` gap between every button.
- The order changes in the DOM too, so keyboard focus follows what you see.

The buttons don't need `flexGrow={0}` in a group. `Modal.Footer.Actions` is the [`ActionButtons`](./button.md) component from `@cyclone-ui/button`. Its gap is the modal's `padding` (see [Props](#props)). Without a group, `Modal.Footer` lays out its children as before.

## Examples

The examples are the stories in [`Modal.stories.tsx`](../../../components/modal/src/Modal.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | A controlled modal (`open` and `onOpenChange`). The trigger opens an "Invite a member" form with a closable header, two text inputs, and a role select. The footer **Cancel** and **Send invite** buttons close it. |
| `Uncontrolled` | A modal with `defaultOpen`, so it is open when the story loads. It has a closable header and one `Modal.Body` paragraph, and no footer. |
| `Scrollable` | A header with `onBack` and `closable`, and 32 body paragraphs. The header and the footer stay visible while the content scrolls. |
| `FooterActions` | Secondary **Previous** and **Clear** buttons and a primary **Next** button, all the same width, in one row (stacked below `sm`). Its play function checks the widths and the order. |
| `FooterActionsStacked` | Labels too long to share a row in the 480px modal, so the buttons stack at full width, primary first, on any screen size. Its play function checks the order. |
| `Padding` | `FooterActionsStacked` with `padding="4xl"`. |

## Props

### `Modal`

`Modal` accepts the [Dialog](./dialog.md) props except `variant`, because `Modal.Frame` sets its own surface.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | - | The open state, for a controlled modal. |
| `defaultOpen` | `boolean` | - | The open state on the first render, for an uncontrolled modal. |
| `onOpenChange` | `(open: boolean) => void` | - | Called when the modal opens or closes. |
| `padding` | space token | `"xl"` | The one spacing of the layout: between the frame and `Modal.Content` on every side, between `Modal.Content` and `Modal.Footer`, between the footer buttons, and from the buttons to the frame. |
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
