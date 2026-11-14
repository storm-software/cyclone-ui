# Drawer

A side panel built on the Cyclone UI `Sheet` that slides in from the right by default. This package is part of the **🌀 Cyclone UI** monorepo, which contains [Tamagui](https://tamagui.dev) based design components used by Storm Software.

## Quick Features

- Slides in from the `right` by default. Set `direction` to `top`, `bottom`, or `left` to change the edge.
- `sm`, `md`, and `lg` sizes. Below the `sm` breakpoint every size fills 95% of the viewport along the drawer's axis.
- `Footer` buttons wrap onto stacked rows when they don't fit side by side.
- Parts: `Frame`, `Content`, `Handle`, `Overlay`, `ScrollView`, `Header`, `Title`, `Description`, `Heading`, `Body`, and `Footer`.
- A bordered frame that sits flush against its edge like `Sheet`. Set `showGaps` to inset it from the viewport and round every corner with the `drawer` border radius. `Content` is a bordered panel inset in it, and `Footer` sits below `Content` on the frame.
- `Header` stays pinned while the rest of `Content` scrolls once it overflows.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../docs/packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add drawer
pnpm install
```

The [component reference](../../docs/design-system/components/drawer.md) lists the files that the CLI copies and the components it copies with them.

The `@cyclone-ui/drawer` package is not published to npm yet. After it is published, you can also install it with a package manager:

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/drawer
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/drawer
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/drawer
```

</details>

## Usage

```tsx
import { Drawer } from "@cyclone-ui/drawer"
import { useState } from "react"

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Drawer open={open} onOpenChange={setOpen} size="md">
        <Drawer.Overlay />
        <Drawer.Frame padding="5xl" gap="3xl">
          <Drawer.Handle />
          <Drawer.Heading>Filters</Drawer.Heading>
          <Drawer.Body>Choose how to filter the list.</Drawer.Body>
        </Drawer.Frame>
      </Drawer>
    </>
  )
}
```

See the [Drawer documentation](../../docs/design-system/components/drawer.md) for all parts and props.

## Development

This project is built using [Nx](https://nx.dev). To work on the package from a checkout of the monorepo, run `pnpm install` at the repository root first.

- Run `pnpm build-storybook` at the root to check the stories for errors.
- Run `pnpm nx show project drawer` to list the Nx targets that are available for this package.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
