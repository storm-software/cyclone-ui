# Drawer

A side panel built on the Cyclone UI `Sheet` that slides in from the right by default. This package is part of the **🌀 Cyclone UI** monorepo, which contains [Tamagui](https://tamagui.dev) based design components used by Storm Software.

## Quick Features

- Slides in from the `right` by default. Set `direction` to `top`, `bottom`, or `left` to change the edge.
- `sm`, `md`, and `lg` sizes.
- Parts: `Frame`, `Handle`, `Overlay`, `ScrollView`, `Heading`, `Body`, and `Footer`.
- A bordered frame with the `drawer` border radius.

## Installation

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
import { Drawer } from "@cyclone-ui/drawer";
import { useState } from "react";

export function Example() {
  const [open, setOpen] = useState(false);

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
  );
}
```

See the [Drawer documentation](../../docs/design-system/components/drawer.md) for all parts and props.

## Development

This project is built using [Nx](https://nx.dev). To work on the package from a checkout of the monorepo, run `pnpm install` at the repository root first.

- Run `pnpm build-storybook` at the root to check the stories for errors.
- Run `pnpm nx show project drawer` to list the Nx targets that are available for this package.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
