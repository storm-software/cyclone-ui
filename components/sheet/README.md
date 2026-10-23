# Cyclone UI - Sheet

A modal panel that slides in from the top, right, bottom, or left edge.

## Quick Features

- Slides in from the `top`, `right`, `bottom` (default), or `left` edge.
- Uses a draggable Tamagui `Sheet` for the bottom direction and a dialog for the other edges.
- Can be dragged to dismiss (turn it off with `disableDrag`).
- `sm`, `md`, and `lg` sizes.
- Parts: `Overlay`, `Container`, `Background`, `Handle`, `ScrollView`, `Heading`, `Body`, and `Footer`.

## Installing

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/sheet
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/sheet
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/sheet
```

</details>

## Usage

```tsx
import { useState } from "react";
import { Button } from "@cyclone-ui/button";
import { Sheet } from "@cyclone-ui/sheet";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        <Button.Text>Open Sheet</Button.Text>
      </Button>
      <Sheet direction="right" size="md" open={open} onOpenChange={setOpen}>
        <Sheet.Overlay />
        <Sheet.Container padding="5xl" gap="3xl">
          <Sheet.Background />
          <Sheet.Handle />
          <Sheet.Heading>Sheet heading</Sheet.Heading>
          <Sheet.Body>Sheet text.</Sheet.Body>
          <Sheet.Footer>
            <Button variant="outlined" onPress={() => setOpen(false)}>
              <Button.Text>Close</Button.Text>
            </Button>
          </Sheet.Footer>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
```

See the [component documentation](../../docs/design-system/components/sheet.md)
for all parts and props.

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual
commands are available to assist in development.

### Building

Run `nx build sheet` to build the library.

### Running unit tests

Run `nx test sheet` to execute the unit tests via
[Vitest](https://vitest.dev).

### Linting

Run `nx lint sheet` to run [ESLint](https://eslint.org/) on the package.
