---
title: Dialog
description: A modal dialog compound component with a trigger, overlay, container, heading, body, and close and action buttons.
documentType: reference
tags: [component, dialog, modal, container]
---

# Dialog

`Dialog` is a modal window for confirmations and focused tasks. It is built on the Tamagui dialog. It is a compound component: you compose it from parts.

## Import

```tsx
import { Dialog } from "@cyclone-ui/dialog";
```

## Usage

```tsx
<Dialog>
  <Dialog.Trigger asChild>
    <Button>
      <Button.Text>Show Dialog</Button.Text>
    </Button>
  </Dialog.Trigger>

  <Dialog.Portal>
    <Dialog.Overlay key="overlay" />
    <Dialog.Container key="content">
      <YStack gap="3xl" padding="3xl">
        <Dialog.Heading>Delete file</Dialog.Heading>
        <Dialog.Body>This action cannot be undone.</Dialog.Body>

        <XStack gap="3xl" justifyContent="flex-end" flexWrap="wrap">
          <Dialog.Close>
            <Dialog.Close.Text>Cancel</Dialog.Close.Text>
          </Dialog.Close>
          <Dialog.Action onPress={deleteFile}>
            <Dialog.Action.Text>Delete</Dialog.Action.Text>
          </Dialog.Action>
        </XStack>
      </YStack>
    </Dialog.Container>
  </Dialog.Portal>
</Dialog>
```

## Props

### `Dialog`

`Dialog` accepts the Tamagui `Dialog` props, such as `open`, `defaultOpen`, and `onOpenChange`. It adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modal` | `boolean` | `true` | Makes the dialog modal. |
| `theme` | `string` | `"base"` | The theme name applied to the dialog and its parts. |
| `overlay` | `boolean` | `true` | Set to `false` to hide the overlay. |

### Parts

| Part | Description |
| --- | --- |
| `Dialog.Trigger` | The Tamagui dialog trigger. Use `asChild` to render your own button. |
| `Dialog.Portal` | The Tamagui dialog portal. |
| `Dialog.Overlay` | The shared [Overlay](./overlay.md) inside the Tamagui dialog overlay. It has a 200ms transition and is hidden when `overlay` is `false`. |
| `Dialog.Container` | The dialog content. It wraps a [Container](./container.md) with `variant="floating"`, `bordered`, and the `dialog` border radius. It accepts the `Container` props. |
| `Dialog.Heading` | A `HeadingLargeText` wrapped in the dialog title. |
| `Dialog.Body` | A `BodyText` with the `ink` color, wrapped in the dialog description. |
| `Dialog.Close` | A [Button](./button.md) with `variant="outlined"` that closes the dialog. It has `Text` and `Icon` slots. |
| `Dialog.Action` | A Button with `variant="primary"` that closes the dialog. It has `Text` and `Icon` slots. |

`Dialog.Close` and `Dialog.Action` call your `onPress` handler and then close the dialog. You can set `variant` on both.

## Behavior

- The container is 95% wide, has a `7xl` margin, and animates in with a 200ms fade, move, and scale.
- On small screens, `Dialog.Close` and `Dialog.Action` set `flexBasis` to `100%`. A `flexBasis` you set applies to larger screens.
- The container shows the `ring-offset` shadow on `focus-visible`.

## Variants and states

The stories show the default theme and these `theme` values: `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Accessibility

- `Dialog.Heading` renders inside the Tamagui `DialogTitle`. `Dialog.Body` renders inside `DialogDescription`. Use both so the dialog has a name and a description.
- The dialog is modal by default.

## Related

- [Alert Dialog](./alert-dialog.md)
- [Drawer](./drawer.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/dialog/src/Dialog.tsx`](../../../components/dialog/src/Dialog.tsx)
- [`components/dialog/src/Dialog.stories.tsx`](../../../components/dialog/src/Dialog.stories.tsx)
