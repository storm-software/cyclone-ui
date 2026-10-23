---
title: Sheet
description: A modal panel that slides in from the top, right, bottom, or left edge, with drag-to-dismiss and sm, md, and lg sizes.
documentType: reference
tags: [component, sheet, modal, container]
---

# Sheet

`Sheet` is a modal panel that slides in from one edge of the screen. The bottom direction uses a draggable Tamagui `Sheet`. The top, right, and left directions use a dialog. The panel can be dragged to dismiss.

## Import

```tsx
import { Sheet } from "@cyclone-ui/sheet";
```

## Usage

```tsx
const [open, setOpen] = useState(false);

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
</>;
```

All parts must render inside `Sheet`. If not, the part throws an error.

## Parts

| Part | Description |
| --- | --- |
| `Sheet` | The root. |
| `Sheet.Overlay` | The backdrop. |
| `Sheet.Container` | The panel. |
| `Sheet.Frame` | A single frame for existing callers. It is the same as `Container` props. |
| `Sheet.Background` | The panel background. |
| `Sheet.Handle` | The drag handle. |
| `Sheet.ScrollView` | A scrollable area for long content. |
| `Sheet.Heading` | A large heading text. |
| `Sheet.Body` | Body text. |
| `Sheet.Footer` | A row for actions. It aligns the content to the end with a `3xl` gap. |

## Props

`SheetProps` is the Tamagui `Sheet` props (without `size`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The edge the sheet slides from. |
| `size` | `"sm" \| "md" \| "lg"` | — | Sets the height (`top`, `bottom`) or width (`left`, `right`) to `30vw`, `60vw`, or `90vw`. |
| `theme` | `string` | `"base"` | Theme name. |
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Called when the state changes. |
| `modal` | `boolean` | `true` | Makes the sheet modal. |
| `dismissOnSnapToBottom` | `boolean` | `true` | Allows dismissal by dragging. |
| `disableDrag` | `boolean` | `false` | Turns off dragging. |
| `snapPoints` | `(number \| string)[]` | `[80]` | Snap points of the bottom sheet. If you set `size` and no snap points, the bottom sheet fits its content. |
| `snapPointsMode` | Tamagui snap mode | — | Snap points mode of the bottom sheet. |
| `transition` | Tamagui transition | Spring | Custom transition. |

## Dragging

The panel closes when the drag passes `25%` of its size, or when the outward speed is above `0.5`. Otherwise, it snaps back. The drag works with the pointer on web and with a pan responder on native.

## Variants

The stories show `Base`, `Top`, `Right`, `Bottom`, `Left`, and `Scrollable` (a `Sheet.ScrollView` with `snapPoints={[90]}`).

## Related

- [Popover](./popover.md) uses a bottom sheet on small screens.
- [Overlay](./overlay.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/sheet/src/Sheet.tsx`](../../../components/sheet/src/Sheet.tsx)
- [`components/sheet/src/Sheet.stories.tsx`](../../../components/sheet/src/Sheet.stories.tsx)
