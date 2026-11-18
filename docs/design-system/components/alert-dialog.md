---
title: Alert Dialog
description: Reference for the AlertDialog component, a modal dialog with a status icon, a message, and actions.
documentType: reference
tags: [component, containers, dialog, modal, status]
component:
  name: alert-dialog
  package: "@cyclone-ui/alert-dialog"
  stories:
    - title: Containers/AlertDialog
      file: components/alert-dialog/src/AlertDialog.stories.tsx
---

# Alert Dialog

`AlertDialog` is a modal dialog built on [Dialog](./dialog.md). It adds an overlay and a large status icon. The `theme` prop sets the status color.

Use it to confirm a destructive action or to show an important success, warning, or error message. For an inline message, use [Alert](./alert.md). For a dialog without the status icon, use [Dialog](./dialog.md) or [Modal](./modal.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add alert-dialog
pnpm install
```

- **File:** `AlertDialog.tsx`. The CLI writes it to `<path>/alert-dialog/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Dialog](./dialog.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Overlay](./overlay.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/stacks`, and `@tamagui/web`.

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

```tsx
<AlertDialog>
  <AlertDialog.Trigger />
  <AlertDialog.Container>
    <AlertDialog.Container.Icon />
    <AlertDialog.Container.Content>
      <AlertDialog.Container.Content.Heading />
      <AlertDialog.Container.Content.Body />
      <AlertDialog.Container.Close>
        <AlertDialog.Container.Close.Text />
      </AlertDialog.Container.Close>
      <AlertDialog.Container.Action>
        <AlertDialog.Container.Action.Text />
      </AlertDialog.Container.Action>
    </AlertDialog.Container.Content>
  </AlertDialog.Container>
</AlertDialog>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `AlertDialog` | [Dialog](./dialog.md) | The root. It passes all its props to `Dialog`. |
| `AlertDialog.Trigger` | `Dialog.Trigger` | The element that opens the dialog. Use `asChild` to render your own button. |
| `AlertDialog.Container` | `Dialog.Portal` with `Dialog.Overlay` and `Dialog.Container` (`role="dialog"`) | The panel. It has no padding (`tight`) and a `maxHeight` of `85vh`. A `hairline` border layer sits over the content and under the icon band. It accepts the `Dialog.Container` props. |
| `AlertDialog.Container.Icon` | A `ThemeableIcon` at size `14xl` on a round `elevated` backing, over a `primary` band | The status icon. The band fills the top 55% and slides down over 400ms when the dialog opens. Pass children to use a custom icon. |
| `AlertDialog.Container.Content` | A [ScrollView](./scroll-view.md) (size `lg`) around a centered `YStack` | Holds the text and actions. It scrolls when the content is taller than the panel. |
| `AlertDialog.Container.Content.Heading` | `Dialog.Heading` (inside the Tamagui `DialogTitle`) | The heading. It names the dialog. |
| `AlertDialog.Container.Content.Body` | `Dialog.Body` with the `ink` color (inside the Tamagui `DialogDescription`) | The body text. It describes the dialog. |
| `AlertDialog.Container.Action` | `Dialog.Action` | The main action. It closes the dialog. It has `Text` and `Icon` parts. |
| `AlertDialog.Container.Close` | `Dialog.Close` with `variant="outlined"` | The close button. It keeps the `outlined` variant on every surface. It has `Text` and `Icon` parts. |

The package also exports flat names for React Server Components, which cannot read `AlertDialog.Trigger` from a client module: `AlertDialogTrigger`, `AlertDialogContainer`, `AlertDialogIcon`, `AlertDialogContent`, `AlertDialogHeading`, `AlertDialogBody`, `AlertDialogClose`, `AlertDialogContainerAction`, `AlertDialogContainerActionText`, `AlertDialogContainerActionIcon`, `AlertDialogContainerCloseText`, and `AlertDialogContainerCloseIcon`.

## Examples

The examples are the stories in [`AlertDialog.stories.tsx`](../../../components/alert-dialog/src/AlertDialog.stories.tsx). Each story renders a trigger button. Press it to open an alert dialog with the status icon, a heading, a body, a **Close** button, and an **Action** button.

| Stories | What they show |
| --- | --- |
| `Base` | The `base` theme. It has no theme icon, so the `AlertCircle` fallback shows. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `theme` prop set to `brand`, `discovery`, `danger`, `warning`, `info`, and `success`, each with its theme icon. |
| `CustomIcon` | A `QuestionCircle` passed as the children of `AlertDialog.Container.Icon`. |

## Props

`AlertDialog` accepts the props of [Dialog](./dialog.md), such as `open`, `defaultOpen`, `onOpenChange`, `modal`, `overlay`, and the surface props. The one that this component adds behavior to:

| Prop    | Type     | Default  | Description                                                             |
| ------- | -------- | -------- | ----------------------------------------------------------------------- |
| `theme` | `string` | `"base"` | The theme name. It sets the color and the default icon.                 |

`AlertDialog.Container.Icon` accepts the `ThemeableIcon` props. Its children replace the default icon.

The package exports the `AlertDialogProps`, `AlertDialogContentProps`, `AlertDialogHeadingProps`, `AlertDialogBodyProps`, and `AlertDialogIconProps` types.

## Themes

The stories show these themes: `base`, `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. If you pass no icon children, the icon comes from the theme (`getIconByTheme`). If the theme has no icon, an alert circle (`AlertCircle`) is used. The `success` theme gives the icon more padding (`3xl`; other themes use `xl`).

See [Design tokens](../tokens/index.md) for the color roles.

## Accessibility

Focus management and keyboard handling come from [Dialog](./dialog.md): the panel has `role="dialog"` and `aria-modal`, focus stays in the dialog, Escape closes it, and focus goes back to the trigger on close. The heading names the dialog and the body describes it. The source of this component adds no extra ARIA attributes. The source sets no label on the status icon, so put the status in the heading or the body.

## Related

- [Dialog](./dialog.md)
- [Modal](./modal.md)
- [Alert](./alert.md)
- [Button](./button.md)

## Source

- [`components/alert-dialog/src/AlertDialog.tsx`](../../../components/alert-dialog/src/AlertDialog.tsx)
- [`components/alert-dialog/src/AlertDialog.stories.tsx`](../../../components/alert-dialog/src/AlertDialog.stories.tsx) (title: `Containers/AlertDialog`)
