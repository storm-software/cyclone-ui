---
title: Sheet
description: A modal panel that slides in from the top, right, bottom, or left edge, with drag-to-dismiss and sm, md, and lg sizes.
documentType: reference
tags: [component, sheet, modal, container]
component:
  name: sheet
  package: "@cyclone-ui/sheet"
  stories:
    - title: Containers/Sheet
      file: components/sheet/src/Sheet.stories.tsx
---

# Sheet

`Sheet` is a modal panel that slides in from one edge of the screen. The bottom direction uses a draggable Tamagui `Sheet` with snap points. The top, right, and left directions use a Tamagui `Dialog`. The user can drag the panel to close it.

Use `Sheet` for a bottom sheet or a plain edge panel that you lay out yourself. Use [Drawer](./drawer.md) for a side panel with a pinned header, a scrolling body, and a footer. Use [Dialog](./dialog.md) for a short task in the center of the screen.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add sheet
pnpm install
```

- **File:** `Sheet.tsx`. The CLI writes it to `<path>/sheet/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), and [Scroll View](./scroll-view.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/constants`, `@tamagui/core`, `@tamagui/dialog`, `@tamagui/helpers`, `@tamagui/sheet`, and `@tamagui/stacks`.

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

## Anatomy

```tsx
<Sheet>
  <Sheet.Overlay />
  <Sheet.Container>
    <Sheet.Background />
    <Sheet.Handle />
    <Sheet.ScrollView>
      <Sheet.Heading />
      <Sheet.Description />
      <Sheet.Body />
    </Sheet.ScrollView>
    <Sheet.Footer />
  </Sheet.Container>
</Sheet>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Sheet` | For `bottom`, a Tamagui `Sheet`. For `top`, `right`, and `left`, a Tamagui `Dialog` with a `Dialog.Portal` (`role="presentation"`). Both are in a `Theme` (`base` by default). | The root. It holds the open state and the drag state. On web, it renders nothing until hydration ends, except a non-modal bottom sheet. |
| `Sheet.Overlay` | For `bottom`, a Tamagui `Sheet.Overlay`. For the other directions, a Tamagui `Dialog.Overlay`. | The backdrop. It uses the `backdrop` color at `0.6` opacity and fades in and out in `200ms`. |
| `Sheet.Container` | For `bottom`, a Tamagui `Sheet.Container`. For the other directions, an absolutely positioned Tamagui `Dialog` content frame with `role="dialog"`. | The panel. It sets the size, a `3xl` padding on the handle side, and the slide and drag offset. It clips its content (`overflow: hidden`). |
| `Sheet.Background` | For `bottom`, a Tamagui `Sheet.Background`. For the other directions, an absolutely positioned `YStack` behind the content. | The panel surface: a borderless `elevated` background. When a [Container](./container.md) surface is set, it draws that surface. For the other directions, the frame draws a Container surface and this part renders nothing. |
| `Sheet.Frame` | For `bottom`, a `Sheet.Container` with a `Sheet.Background`. For the other directions, the same frame as `Sheet.Container`. | A single frame for existing callers, such as `Drawer.Frame`. For `bottom`, it sends the background, border, and shadow props to the background, and the radius props to both. |
| `Sheet.Handle` | For `bottom`, a Tamagui `Sheet.Handle`. For the other directions, an `XStack` with pointer handlers on web and a pan responder on native. | The drag handle: a bar centered on the edge that faces the page. For `top`, `right`, and `left`, only the handle starts a drag. With `disableDrag`, it ignores the pointer. |
| `Sheet.ScrollView` | For `bottom`, a Tamagui `Sheet.ScrollView` with the [ScrollView](./scroll-view.md) styles and a stable scrollbar gutter. For the other directions, a [ScrollView](./scroll-view.md) with `flex: 1` and size `lg`. | A scroll area for long content. |
| `Sheet.Heading` | `HeadingLargeText` in the `primary` color. For the other directions, it is the `Dialog.Title`. | A large heading. For `top`, `right`, and `left`, it labels the dialog. |
| `Sheet.Description` | `BodyText`. For the other directions, it is the `Dialog.Description`. | Supporting text. For `top`, `right`, and `left`, it describes the dialog. |
| `Sheet.Body` | `BodyText` in the `ink` color, with `flexGrow: 1` | Body text. |
| `Sheet.Footer` | An `XStack` | A row for actions. It aligns the content to the end with a `3xl` gap and has a `2xl` padding on the handle side. |

`SheetOverlay`, `SheetContainer`, `SheetBackground`, `SheetFrame`, `SheetHandle`, `SheetScrollView`, `SheetHeading`, `SheetDescription`, `SheetBody`, and `SheetFooter` are also exported by name. Use them in React Server Components, which cannot read `Sheet.Frame` from a client module.

## Examples

The examples are the stories in [`Sheet.stories.tsx`](../../../components/sheet/src/Sheet.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | A bottom sheet with an overlay, a handle, a heading, body text, and a **Close** button in the footer. |
| `Top`, `Right`, `Bottom`, `Left` | Each `direction`. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined` | Each filled or outlined `variant` on a bottom sheet. On `Primary`, the **Close** button is `tertiary` so it stays visible. |
| `RightPrimary`, `RightOutlined`, `RightGlass` | A right sheet with `primary`, with `outlined`, and with `primary` and `glass`. |
| `Floating`, `Raised`, `Flat`, `Accented` | The `floating` variant, `surface` with the `elevated` shadow, `secondary` with the `flat` shadow, and `elevated` with `accented`. |
| `Glass`, `Noise` | `glass` on the default surface, and `primary` with `noise`. |
| `Scrollable` | A `Sheet.ScrollView` with 64 paragraphs and `snapPoints={[90]}`. |

## Props

`SheetProps` is the Tamagui `Sheet` props (without `size`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | Required. The sheet parts. |
| `direction` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The edge the sheet slides from. |
| `size` | `"sm" \| "md" \| "lg"` | — | Sets the height (`top`, `bottom`) or width (`left`, `right`) to `30vw`, `60vw`, or `90vw`. Without `size`, a `top` sheet is `80vh` tall and a `left` or `right` sheet is `80vw` wide. |
| `theme` | `string` | `"base"` | Theme name. |
| `variant` | [Container](./container.md) variant | — | The sheet surface. See [Variants](#variants). Unset keeps the borderless `elevated` surface. |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | — | The panel's shadow. |
| `glass`, `noise`, `accented` | `boolean` | `false` | The [Container](./container.md) options: frosted glass, film grain, and a `primary` border. Any of them draws the surface with a Container. |
| `open` | `boolean` | — | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | The initial open state when `open` is not set. |
| `onOpenChange` | `(open: boolean) => void` | — | Called when the state changes. |
| `modal` | `boolean` | `true` | Makes the sheet modal. |
| `dismissOnSnapToBottom` | `boolean` | `true` | Allows dismissal by dragging. |
| `disableDrag` | `boolean` | `false` | Turns off dragging. |
| `snapPoints` | `(number \| string)[]` | `[80]` | Snap points of the bottom sheet. If you set `size` and no snap points, the bottom sheet fits its content. |
| `snapPointsMode` | Tamagui snap mode | — | Snap points mode of the bottom sheet. |
| `transition` | Tamagui transition | See description | Custom transition. The bottom sheet uses a spring (stiffness `100`, damping `16`) by default. The other directions slide in `400ms` by default. |

## Dragging

For `top`, `right`, and `left`, the user drags `Sheet.Handle`. The panel closes when the drag passes `25%` of its size, or when the outward speed is above `0.5` px per ms. Otherwise, it snaps back. Set `dismissOnSnapToBottom={false}` to always snap back. The drag uses pointer events on web and a pan responder on native.

For `bottom`, the Tamagui `Sheet` controls the drag and the snap points.

## Variants

`variant` takes any [Container](./container.md) variant (`primary`, `secondary`, `tertiary`, `outlined`, `sunken`, `canvas`, `surface`, `elevated`, or `floating`) for every `direction`. A Container draws the surface: in `Sheet.Background` for a bottom sheet, and in the frame for the other directions (so `Sheet.Frame` callers get it too).

On `primary` and `secondary`, `Sheet.Heading`, `Sheet.Body`, and `Sheet.Description` use `on-primary` / `on-secondary` (`primary` on `secondary` with the uncolored base theme). An `outlined` sheet keeps an opaque `elevated` backing. Other content, such as buttons, keeps its own colors.

## Accessibility

- On web, when `modal` is `true`, the panel has `role="dialog"` and `aria-modal`. Focus stays inside the panel while it is open. **Escape** closes it.
- For `top`, `right`, and `left`, `Sheet.Heading` labels the dialog and `Sheet.Description` describes it.
- A press on the overlay closes the sheet.

## Related

- [Drawer](./drawer.md) is built on `Sheet`.
- [Popover](./popover.md) uses a bottom sheet on small screens.
- [Overlay](./overlay.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/sheet/src/Sheet.tsx`](../../../components/sheet/src/Sheet.tsx)
- [`components/sheet/src/Sheet.stories.tsx`](../../../components/sheet/src/Sheet.stories.tsx) (title: `Containers/Sheet`)
