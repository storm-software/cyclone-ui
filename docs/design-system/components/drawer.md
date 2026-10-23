---
title: Drawer
description: A side panel built on Sheet that slides in from the right by default, with three sizes and heading, body, footer, and scroll parts.
documentType: reference
tags: [component, drawer, sheet, container]
---

# Drawer

`Drawer` is a panel that slides in beside the main view. Use it for navigation, filters, or secondary content. It is a thin layer over [Sheet](./sheet.md). It sets the default direction to `right` and gives the frame a border and radius.

## Import

```tsx
import { Drawer } from "@cyclone-ui/drawer";
```

## Usage

```tsx
const [open, setOpen] = useState(false);

<>
  <Button onPress={() => setOpen(true)}>
    <Button.Text>Open Drawer</Button.Text>
  </Button>
  <Drawer open={open} onOpenChange={setOpen} size="md">
    <Drawer.Overlay />
    <Drawer.Frame padding="5xl" gap="3xl">
      <Drawer.Handle />
      <Drawer.Heading>Filters</Drawer.Heading>
      <Drawer.Body>Choose how to filter the list.</Drawer.Body>
      <Drawer.Footer>
        <Button onPress={() => setOpen(false)} variant="outlined">
          <Button.Text>Close</Button.Text>
        </Button>
      </Drawer.Footer>
    </Drawer.Frame>
  </Drawer>
</>
```

## Props

`Drawer` accepts the [Sheet](./sheet.md) props, such as `open` and `onOpenChange`, with a narrower `size` type.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"top" \| "right" \| "bottom" \| "left"` | `"right"` | The edge the drawer slides in from. |
| `size` | `"sm" \| "md" \| "lg"` | None | The drawer size. |

### Parts

| Part | Description |
| --- | --- |
| `Drawer.Frame` | The panel. It adds `borderWidth` 1, `borderColor` `hairline`, `borderRadius` `drawer`, and a `lg` margin. You can override the border color and radius. |
| `Drawer.Handle` | The drag handle (from `Sheet.Handle`). |
| `Drawer.Overlay` | The backdrop (from `Sheet.Overlay`). |
| `Drawer.ScrollView` | A scroll area for long content (from `Sheet.ScrollView`). |
| `Drawer.Heading` | The heading (from `Sheet.Heading`). |
| `Drawer.Body` | The body text (from `Sheet.Body`). |
| `Drawer.Footer` | The footer area (from `Sheet.Footer`). |

The types `DrawerDirection`, `DrawerSize`, `DrawerProps`, `DrawerFrameProps`, `DrawerOverlayProps`, `DrawerHandleProps`, `DrawerScrollViewProps`, and `DrawerFooterProps` are exported.

## Variants and states

The stories show the sizes `sm`, `md`, and `lg`, the four directions, and a scrollable drawer. The story text says that a modal drawer keeps focus inside its contents. The user can close it with the overlay, a close button, or the drag handle.

## Related

- [Sheet](./sheet.md)
- [Dialog](./dialog.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/drawer/src/Drawer.tsx`](../../../components/drawer/src/Drawer.tsx)
- [`components/drawer/src/Drawer.stories.tsx`](../../../components/drawer/src/Drawer.stories.tsx)
