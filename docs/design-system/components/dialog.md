---
title: Dialog
description: A modal dialog compound component with a trigger, overlay, container, heading, body, and close and action buttons.
documentType: reference
tags: [component, dialog, modal, container]
component:
  name: dialog
  package: "@cyclone-ui/dialog"
  stories:
    - title: Containers/Dialog
      file: components/dialog/src/Dialog.stories.tsx
---

# Dialog

`Dialog` is a modal window for confirmations and focused tasks. It is built on the Tamagui dialog. It is a compound component: you compose it from parts.

Use `Dialog` when you want to set the layout yourself. For a ready layout with a pinned header, a scrolling body, and a footer, use [Modal](./modal.md). For a status confirmation with a large icon, use [Alert Dialog](./alert-dialog.md). For a panel that slides in from an edge, use [Drawer](./drawer.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add dialog
pnpm install
```

- **File:** `Dialog.tsx`. The CLI writes it to `<path>/dialog/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Overlay](./overlay.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/dialog`, `@tamagui/dismissable`, `@tamagui/helpers`, `@tamagui/stacks`, and `react-native-svg`.

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

## Anatomy

```tsx
<Dialog>
  <Dialog.Trigger />
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Container>
      <Dialog.Heading />
      <Dialog.Body />
      <Dialog.Close>
        <Dialog.Close.Icon />
        <Dialog.Close.Text />
      </Dialog.Close>
      <Dialog.Action>
        <Dialog.Action.Icon />
        <Dialog.Action.Text />
      </Dialog.Action>
    </Dialog.Container>
  </Dialog.Portal>
</Dialog>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Dialog` | A Tamagui `Dialog` inside a `Theme` and the dialog context | The root. It holds the open state, applies `theme`, and shares the surface props with `Dialog.Container`. |
| `Dialog.Trigger` | The Tamagui `DialogTrigger`, with `aria-haspopup="dialog"`, `aria-expanded`, and `aria-controls` | Opens the dialog. Use `asChild` to render your own button. |
| `Dialog.Portal` | The Tamagui `DialogPortal` | Renders the overlay and the container in a portal. |
| `Dialog.Overlay` | The Tamagui `DialogOverlay` with a 200ms transition, around the shared [Overlay](./overlay.md) | The backdrop. Tamagui handles its presence and pointer events. It is hidden when `overlay` is `false`. |
| `Dialog.Container` | The Tamagui `DialogContent` (`role="dialog"`, `aria-modal`) around a [Container](./container.md) | The dialog content. The outer frame is 95% wide and animates in. The inner `Container` draws the surface (`variant` defaults to `"elevated"`) with the `dialog` border radius and clips its content. It accepts all the `Container` props. |
| `Dialog.Heading` | A `HeadingLargeText` inside the Tamagui `DialogTitle` (`<span>`) | The title. Its color is `primary`. The dialog uses it as its accessible name. |
| `Dialog.Body` | A `BodyText` with the `ink` color inside the Tamagui `DialogDescription` (`<span>`) | The description. The dialog uses it as its accessible description. |
| `Dialog.Close` | A [Button](./button.md) inside the Tamagui `DialogClose` (`asChild`) | Closes the dialog. Its variant is `"outlined"` (`"tertiary"` in a `primary` dialog). |
| `Dialog.Action` | A Button inside the Tamagui `DialogClose` (`asChild`) | The main action. It closes the dialog. Its variant is `"primary"` (`"secondary"` in a `primary` dialog). |
| `Dialog.Close.Text`, `Dialog.Close.Icon`, `Dialog.Action.Text`, `Dialog.Action.Icon` | `Button.Text` and `Button.Icon` | The label and icon of the buttons. |

The package also exports flat names for React Server Components, which cannot read `Dialog.Trigger` from a client module: `DialogTrigger`, `DialogPortal`, `DialogOverlay`, `DialogContainer`, `DialogHeading`, `DialogBody`, `DialogClose`, `DialogAction`, `DialogCloseText`, `DialogCloseIcon`, `DialogActionText`, and `DialogActionIcon`. It also exports `DialogContext`, the styled context that holds `theme`, `overlay`, and the surface props.

## Examples

The examples are the stories in [`Dialog.stories.tsx`](../../../components/dialog/src/Dialog.stories.tsx). Each story renders a trigger button. Press it to open a dialog with a heading, a body, a **Cancel** close button, and an **Action** button.

| Stories | What they show |
| --- | --- |
| `Base` | The default dialog: the `base` theme and the `elevated` surface. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `theme` prop set to `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `Floating` | The `variant` prop on the container. On `primary`, the heading, body, and buttons change to the `on-primary` colors. |
| `Raised`, `Flat` | `shadowStyle` set to `"elevated"` and to `"flat"`. |
| `Accented`, `Glass` | The `primary` border color, and the translucent frosted glass surface. |
| `Noise` | A `primary` dialog with the film grain overlay. |

## Props

### `Dialog`

`Dialog` accepts the Tamagui `Dialog` props, such as `open`, `defaultOpen`, and `onOpenChange`. It adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modal` | `boolean` | `true` | Makes the dialog modal. |
| `theme` | `string` | `"base"` | The theme name applied to the dialog and its parts. |
| `overlay` | `boolean` | `true` | Set to `false` to hide the overlay. |
| `variant` | [Container](./container.md) variant | `"elevated"` | The surface of `Dialog.Container`, which can also set its own. |
| `shadowStyle`, `glass`, `noise`, `accented` | Container props | - | The rest of the surface, passed to `Dialog.Container` the same way. |

### `Dialog.Container`

`Dialog.Container` accepts the [Container](./container.md) props and the Tamagui `DialogContent` props. A `variant`, `shadowStyle`, `glass`, `noise`, or `accented` that you set here overrides the value from `Dialog`. `maxWidth` applies to the outer dialog frame, so the area outside the visible container still closes the dialog on press.

### `Dialog.Close` and `Dialog.Action`

Both accept the [Button](./button.md) props. They call your `onPress` handler and then close the dialog. A `variant` that you set replaces the default.

## Behavior

- The container is 95% wide, has a `7xl` margin, and animates in with a 200ms fade, move, and scale.
- On small screens, `Dialog.Close` and `Dialog.Action` set `flexBasis` to `100%`. A `flexBasis` you set applies to larger screens.
- The container shows the `ring-offset` shadow on `focus-visible`.

## Variants and states

`variant` takes the [Container](./container.md) variants: `primary`, `secondary`, `tertiary`, and `outlined`, alongside the other Container surfaces. On `primary` and `secondary`, `Dialog.Heading` and `Dialog.Body` use `on-primary` / `on-secondary` (`primary` on `secondary` with the uncolored base theme). An `outlined` dialog sits on an opaque `elevated` backing, so its content stays readable over the overlay.

See [Examples](#examples) for the themes and surfaces in the stories.

## Accessibility

- `Dialog.Trigger` sets `aria-haspopup="dialog"`, `aria-expanded`, and `aria-controls` on the trigger.
- `Dialog.Container` has `role="dialog"` and `aria-modal`. It points `aria-labelledby` at `Dialog.Heading` and `aria-describedby` at `Dialog.Body` when they are present. Use both so the dialog has a name and a description.
- The dialog is modal by default. On the web, a modal dialog traps focus and moves it in a loop. It blocks pointer events outside the content and locks page scroll.
- Escape and a press outside the content close the dialog. A right-click outside does not close it.
- When the dialog closes, focus goes back to the trigger.

## Related

- [Alert Dialog](./alert-dialog.md)
- [Modal](./modal.md)
- [Drawer](./drawer.md)
- [Overlay](./overlay.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/dialog/src/Dialog.tsx`](../../../components/dialog/src/Dialog.tsx)
- [`components/dialog/src/Dialog.stories.tsx`](../../../components/dialog/src/Dialog.stories.tsx) (title: `Containers/Dialog`)
