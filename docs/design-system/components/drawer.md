---
title: Drawer
description: A side panel built on Sheet that slides in from the right by default, with three sizes and heading, body, footer, and scroll parts.
documentType: reference
tags: [component, drawer, sheet, container]
component:
  name: drawer
  package: "@cyclone-ui/drawer"
  stories:
    - title: Containers/Drawer
      file: components/drawer/src/Drawer.stories.tsx
---

# Drawer

`Drawer` is a modal panel that slides in beside the main view. Use it for navigation, filters, or secondary content that the user works with next to the page.

`Drawer` is built on [Sheet](./sheet.md). It slides in from the `right` by default. It adds a bordered `Content` panel with a pinned header and a scrolling body, and a `Footer` that stays visible below that panel. Use [Sheet](./sheet.md) for a bare edge panel, such as a bottom sheet with snap points. Use [Dialog](./dialog.md) for a short task in the center of the screen.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add drawer
pnpm install
```

- **File:** `Drawer.tsx`. The CLI writes it to `<path>/drawer/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/helpers`, and `@tamagui/stacks`.

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
    <Drawer.Frame>
      <Drawer.Handle />
      <Drawer.Content>
        <Drawer.Header closable={true}>
          <Drawer.Title>Filters</Drawer.Title>
          <Drawer.Description>Choose how to filter the list.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>Filter controls go here.</Drawer.Body>
      </Drawer.Content>
      <Drawer.Footer>
        <Button onPress={() => setOpen(false)} variant="outlined" size="sm" flexGrow={0}>
          <Button.Text>Cancel</Button.Text>
        </Button>
        <Button onPress={() => setOpen(false)} variant="primary" size="sm" flexGrow={0}>
          <Button.Text>Apply</Button.Text>
        </Button>
      </Drawer.Footer>
    </Drawer.Frame>
  </Drawer>
</>;
```

## Anatomy

```tsx
<Drawer>
  <Drawer.Overlay />
  <Drawer.Frame>
    <Drawer.Handle />
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title />
        <Drawer.Description />
      </Drawer.Header>
      <Drawer.Body />
    </Drawer.Content>
    <Drawer.Footer />
  </Drawer.Frame>
</Drawer>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Drawer` | A [Sheet](./sheet.md). For `bottom`, a Tamagui `Sheet`. For `top`, `right`, and `left`, a Tamagui `Dialog` in a portal. | The root. It holds the open state, controlled (`open`) or uncontrolled (`defaultOpen`), and shares it so `Drawer.Header` can close the drawer. |
| `Drawer.Overlay` | `Sheet.Overlay` | The backdrop. |
| `Drawer.Frame` | `Sheet.Frame`. For `top`, `right`, and `left`, a Tamagui `Dialog` content frame with `role="dialog"`. For `bottom`, a Tamagui `Sheet` container and background. | The panel. It has a `surface` background and a 1 px `hairline` border on the side that faces the page (on all sides with `showGaps`). With `showGaps`, it also has the `drawer` radius and an `lg` margin. It sets the text color to `var(--primary)`, so `currentColor` icons in the portal stay visible. You can override the background, border color, and radius. |
| `Drawer.Handle` | `Sheet.Handle` with `margin={0}` | The drag handle. |
| `Drawer.Content` | A `YStack` with a `canvas` background, a 1 px `hairline` border, and the `sm` radius. It holds a `Sheet.ScrollView`. | The inset panel. `Drawer.Header` children stay pinned at the top. All other children scroll in the `Sheet.ScrollView` when they are taller than the panel. |
| `Drawer.Header` | An `XStack`. It adds ghost `Button`s with `aria-label="Back"` and `aria-label="Close"` when you set `onBack` or `closable`. | The title row. The back button calls `onBack`. The close button closes the drawer. |
| `Drawer.Title` | `Sheet.Heading` at font size `2xl`, `semibold` | The title. For `top`, `right`, and `left`, it is the dialog title. |
| `Drawer.Description` | `Sheet.Description` at size `sm`, `normal` weight, `ink` color | The supporting text. For `top`, `right`, and `left`, it is the dialog description. |
| `Drawer.Body` | `Sheet.Body` | The body text. |
| `Drawer.Footer` | `Sheet.Footer` with `xl` padding, a `2xl` gap, and `flexWrap: "wrap"` | The action row. It stays below `Drawer.Content`, on the frame surface. Buttons wrap onto new rows when they do not fit side by side. |
| `Drawer.ScrollView` | `Sheet.ScrollView` | A scroll area for a custom layout without `Drawer.Content`. |
| `Drawer.Heading` | `Sheet.Heading` | A large heading for a custom layout without `Drawer.Header`. |

`DrawerFrame`, `DrawerHandle`, `DrawerOverlay`, `DrawerContent`, `DrawerHeader`, `DrawerTitle`, `DrawerDescription`, `DrawerBody`, `DrawerFooter`, `DrawerScrollView`, and `DrawerHeading` are also exported by name. Use them in React Server Components, which cannot read `Drawer.Frame` from a client module.

## Examples

The examples are the stories in [`Drawer.stories.tsx`](../../../components/drawer/src/Drawer.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | A right drawer with an overlay, a handle, a closable header with a title and description, body text, and a footer with **Cancel** and **Save changes** buttons. |
| `Small`, `Medium`, `Large` | The `sm`, `md`, and `lg` sizes. |
| `Top`, `Right`, `Bottom`, `Left` | Each `direction`. |
| `ShowGaps` | `showGaps`: the frame is inset from the viewport and has rounded corners on all sides. |
| `Uncontrolled` | A drawer that opens with `defaultOpen` and has no `open` state. The header close button closes it. |
| `Scrollable` | 64 paragraphs in `Drawer.Content` with `snapPoints={[90]}`. The header has back and close buttons. The header and footer stay visible while the body scrolls. |

## Props

`Drawer` accepts the [Sheet](./sheet.md) props, such as `open` and `onOpenChange`, except `variant`. `Drawer.Frame` draws its own surface. The `size` type is narrower.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"top" \| "right" \| "bottom" \| "left"` | `"right"` | The edge the drawer slides in from. |
| `size` | `"sm" \| "md" \| "lg"` | None | The drawer size. See [Sizes](#sizes). |
| `showGaps` | `boolean` | `false` | When `true`, insets the frame from the viewport with an `lg` margin and rounds every corner with the `drawer` radius. When `false`, the frame sits flush against its edge with Sheet's radius, like [Sheet](./sheet.md). |
| `open` | `boolean` | None | The controlled open state. |
| `defaultOpen` | `boolean` | `false` | The initial open state when `open` is not set. |
| `onOpenChange` | `(open: boolean) => void` | None | Called when the drawer opens or closes. |
| `snapPoints` | `(number \| string)[]` | See description | The snap points of a `bottom` drawer. An unsized `bottom` drawer on a small screen (`max-sm`) uses `[95]`. Otherwise, the [Sheet](./sheet.md) default applies. |

### Drawer.Header props

`Drawer.Header` also accepts the props of an `XStack`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onBack` | `() => void` | None | Adds a back arrow button that calls this handler. |
| `closable` | `boolean` | `false` | Adds a close (X) button that closes the drawer. It also closes an uncontrolled drawer. |

The types `DrawerDirection`, `DrawerSize`, `DrawerProps`, `DrawerFrameProps`, `DrawerOverlayProps`, `DrawerHandleProps`, `DrawerScrollViewProps`, `DrawerContentProps`, `DrawerHeaderProps`, `DrawerFooterProps`, and `DrawerComponent` are exported.

## Sizes

`size` sets the width (`left`, `right`) or height (`top`, `bottom`) of the frame.

| `size` | Extent |
| --- | --- |
| `sm` | `30vw` |
| `md` | `60vw` |
| `lg` | `90vw` |
| None | `80vw` for `left` and `right`, `80vh` for `top`. A `bottom` drawer uses its snap points. |

On a small screen (`max-sm`), the frame is `95vw` wide or `95vh` tall for every `size`.

## Accessibility

- For `top`, `right`, and `left`, the frame is a Tamagui `Dialog` content frame with `role="dialog"`. `Drawer.Title` labels it and `Drawer.Description` describes it.
- On web, a modal drawer keeps focus inside its contents while it is open. **Escape** closes it.
- A press on the overlay closes the drawer.
- The header buttons have the accessible names "Back" and "Close" and show them as tooltips.

## Related

- [Sheet](./sheet.md)
- [Dialog](./dialog.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/drawer/src/Drawer.tsx`](../../../components/drawer/src/Drawer.tsx)
- [`components/drawer/src/Drawer.stories.tsx`](../../../components/drawer/src/Drawer.stories.tsx) (title: `Containers/Drawer`)
