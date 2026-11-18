# Modal

A centered modal built on the Cyclone UI `Dialog`, with the same parts as `Drawer`. This package is part of the **🌀 Cyclone UI** monorepo, which contains [Tamagui](https://tamagui.dev) based design components used by Storm Software.

## Quick Features

- Built on `Dialog`: focus is trapped, and the overlay, Escape key, and close button dismiss it.
- Parts: `Trigger`, `Frame`, `Content`, `Header`, `Title`, `Description`, `Body`, and `Footer`.
- `Frame` is a bordered shell (480px wide, 85vh tall at most). `Content` is a bordered panel inset in it, and `Footer` sits below `Content` on the frame.
- `Header` stays pinned while the rest of `Content` scrolls once it overflows.
- `Header` can render a back button (`onBack`) and a close button (`closable`).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../docs/packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add modal
pnpm install
```

The [component reference](../../docs/design-system/components/modal.md) lists the files that the CLI copies and the components it copies with them.

The `@cyclone-ui/modal` package is not published to npm yet. After it is published, you can also install it with a package manager:

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/modal
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/modal
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/modal
```

</details>

## Usage

```tsx
import { Button } from "@cyclone-ui/button"
import { Modal } from "@cyclone-ui/modal"
import { useState } from "react"

export function Example() {
  const [open, setOpen] = useState(false)

  return (
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
            <Modal.Description>They'll get an email invite.</Modal.Description>
          </Modal.Header>
          <Modal.Body>Invites expire after 7 days.</Modal.Body>
        </Modal.Content>
        <Modal.Footer>
          <Button
            variant="outlined"
            size="sm"
            flexGrow={0}
            onPress={() => setOpen(false)}>
            <Button.Text>Cancel</Button.Text>
          </Button>
          <Button
            variant="primary"
            size="sm"
            flexGrow={0}
            onPress={() => setOpen(false)}>
            <Button.Text>Send invite</Button.Text>
          </Button>
        </Modal.Footer>
      </Modal.Frame>
    </Modal>
  )
}
```

## Development

This project is built using [Nx](https://nx.dev). To work on the package from a checkout of the monorepo, run `pnpm install` at the repository root first.

- Run `pnpm build-storybook` at the root to check the stories for errors.
- Run `pnpm nx show project modal` to list the Nx targets that are available for this package.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
