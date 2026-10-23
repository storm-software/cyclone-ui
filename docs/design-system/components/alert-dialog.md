---
title: Alert Dialog
description: Reference for the AlertDialog component, a modal dialog with a status icon, a message, and actions.
documentType: reference
tags: [component, containers, dialog, modal, status]
---

# Alert Dialog

`AlertDialog` is a modal dialog built on [Dialog](./dialog.md). It adds an overlay and a large status icon. The `theme` prop sets the status color.

Use it to confirm a destructive action or to show an important success, warning, or error message. For an inline message, use [Alert](./alert.md).

## Import

```tsx
import { AlertDialog } from "@cyclone-ui/alert-dialog";
```

## Usage

```tsx
<AlertDialog theme="danger">
  <AlertDialog.Trigger asChild={true}>
    <Button>
      <Button.Text>Delete</Button.Text>
    </Button>
  </AlertDialog.Trigger>

  <AlertDialog.Container>
    <AlertDialog.Container.Icon />
    <AlertDialog.Container.Content>
      <AlertDialog.Container.Content.Heading>
        Delete this file?
      </AlertDialog.Container.Content.Heading>
      <AlertDialog.Container.Content.Body>
        You cannot undo this action.
      </AlertDialog.Container.Content.Body>

      <XStack gap="3xl" marginTop="3xl" width="100%" flexWrap="wrap">
        <AlertDialog.Container.Close>
          <AlertDialog.Container.Close.Text>Cancel</AlertDialog.Container.Close.Text>
        </AlertDialog.Container.Close>
        <AlertDialog.Container.Action>
          <AlertDialog.Container.Action.Text>Delete</AlertDialog.Container.Action.Text>
        </AlertDialog.Container.Action>
      </XStack>
    </AlertDialog.Container.Content>
  </AlertDialog.Container>
</AlertDialog>
```

## Anatomy

| Part                                          | Purpose                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `AlertDialog`                                 | The root. It passes its props to [Dialog](./dialog.md).                                  |
| `AlertDialog.Trigger`                         | The element that opens the dialog (`Dialog.Trigger`).                                    |
| `AlertDialog.Container`                       | The panel. It renders a portal, the overlay, and a bordered container with no padding.   |
| `AlertDialog.Container.Icon`                  | The status icon on a colored band. Pass children to use a custom icon.                  |
| `AlertDialog.Container.Content`               | A centered vertical stack for the text and actions.                                      |
| `AlertDialog.Container.Content.Heading`       | The heading (`Dialog.Heading`).                                                          |
| `AlertDialog.Container.Content.Body`          | The body text (`Dialog.Body`).                                                           |
| `AlertDialog.Container.Action`                | The main action (`Dialog.Action`). It has `Text` and `Icon` parts.                       |
| `AlertDialog.Container.Close`                 | The close button (`Dialog.Close`). It uses the `outlined` variant. It has `Text` and `Icon` parts. |

## Props

`AlertDialog` accepts the props of [Dialog](./dialog.md). The ones that this page relies on:

| Prop    | Type     | Default  | Description                                                             |
| ------- | -------- | -------- | ----------------------------------------------------------------------- |
| `theme` | `string` | `"base"` | The theme name. It sets the color and the default icon.                 |

Set `open`, `onOpenChange`, and other state props as defined by [Dialog](./dialog.md).

## Themes

The stories show these themes: `base`, `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. If you pass no icon children, the icon comes from the theme (`getIconByTheme`). If the theme has no icon, a warning circle is used. The `success` theme gives the icon more padding (`3xl`; other themes use `xl`).

See [Design tokens](../tokens/index.md) for the color roles.

## Accessibility

Focus management and keyboard handling come from [Dialog](./dialog.md). The source of this component adds no extra ARIA attributes.

## Related

- [Dialog](./dialog.md)
- [Alert](./alert.md)
- [Button](./button.md)

## Source

- [`components/alert-dialog/src/AlertDialog.tsx`](../../../components/alert-dialog/src/AlertDialog.tsx)
- [`components/alert-dialog/src/AlertDialog.stories.tsx`](../../../components/alert-dialog/src/AlertDialog.stories.tsx) (title: `Containers/AlertDialog`)
