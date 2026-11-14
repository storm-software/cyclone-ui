---
title: Floating Toolbar
description: Reference for the FloatingToolbar component, a draggable pill-shaped toolbar fixed to the bottom of the viewport for page-level controls, with an optional table of contents that shows reading progress.
documentType: reference
tags: [component, layout, toolbar, navigation, table-of-contents, draggable]
component:
  name: floating-toolbar
  package: "@cyclone-ui/floating-toolbar"
  stories:
    - title: Docs/FloatingToolbar
      file: components/floating-toolbar/src/FloatingToolbar.stories.tsx
---

# Floating Toolbar

`FloatingToolbar` is a pill-shaped toolbar that is fixed to the bottom of the viewport. It holds page-level controls in rows: buttons, a brand mark, selects, and toggles, with dividers between them. It draws a frosted `floating` [Container](./container.md) surface.

Its `TableOfContents` part shows the heading that the reader is in, with a reading-progress ring. Press it to open the page's [Table of contents](./table-of-contents.md) upward, inside the toolbar.

Use it for controls that apply to the whole page and must stay in reach while the reader scrolls, for example on a docs page. To show all section links in one sticky row, use [Article Progress Header](./article-progress-header.md). To show the headings beside the content, use a [Table of contents](./table-of-contents.md).

The reader can drag the toolbar with the tab on its left side. The toolbar saves its position. Dragged against a side of the viewport, it hides behind a small tab.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add floating-toolbar
pnpm install
```

- **Files:** `FloatingToolbar.tsx` and `utilities.ts`. The CLI writes them to `<path>/floating-toolbar/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Accordion](./accordion.md), [Body Text](./body-text.md), [Circular Progress](./circular-progress.md), [Collapsible](./collapsible.md), [Container](./container.md), [Divider](./divider.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), and [Table of Contents](./table-of-contents.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/core`, and `@tamagui/stacks`.

## Import

```tsx
import { FloatingToolbar } from "@cyclone-ui/floating-toolbar";
```

## Usage

```tsx
const items = [
  { title: "Introduction", url: "#introduction", depth: 2 },
  { title: "Installation", url: "#installation", depth: 2 },
  { title: "Usage", url: "#usage", depth: 2 }
];

<FloatingToolbar>
  <FloatingToolbar.Row>
    <FloatingToolbar.TableOfContents items={items} />
  </FloatingToolbar.Row>

  <FloatingToolbar.Row>
    <Button variant="ghost" size="sm" circular={true} tooltip="Search">
      <Button.Icon>
        <Magnify />
      </Button.Icon>
    </Button>
    <FloatingToolbar.Divider />
    <ToggleGroup defaultValue="dark" allowEmpty={false} size="sm">
      <ToggleGroup.Item value="light" aria-label="Light theme">
        <Sunny size={16} />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="dark" aria-label="Dark theme">
        <Moon size={16} />
      </ToggleGroup.Item>
    </ToggleGroup>
  </FloatingToolbar.Row>
</FloatingToolbar>
```

## Anatomy

```tsx
<FloatingToolbar>
  <FloatingToolbar.Row>
    <FloatingToolbar.TableOfContents items={items} />
  </FloatingToolbar.Row>
  <FloatingToolbar.Row>
    {controls}
    <FloatingToolbar.Divider />
    {controls}
  </FloatingToolbar.Row>
</FloatingToolbar>
```

| Part                              | Renders                                                                                                                                                                                                                                         | Purpose                                                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `FloatingToolbar`                 | A Tamagui `View` as `<nav aria-label="Page toolbar">`, with `position: fixed` at the bottom of the viewport and `zIndex` 40. Inside it, a panel (`YStack`) with a `ContainerBackground` layer draws the surface. With `draggable`, a drag handle (`role="button"`) sticks out of the panel's left side. When docked, a "Show toolbar" tab (`role="button"`) shows at the side of the viewport. | The frame. It holds the rows and the surface props. Outside the panel, pointer events go through to the page. The panel fades and rises in when it mounts. |
| `FloatingToolbar.Row`             | A Tamagui `XStack` (`alignItems: "center"`, gap `md`)                                                                                                                                                                                           | A row of controls. Buttons grow to the width of the widest row.                                                                               |
| `FloatingToolbar.Divider`         | A vertical [Divider](./divider.md), size `sm`                                                                                                                                                                                                   | A line between the controls of a row.                                                                                                         |
| `FloatingToolbar.TableOfContents` | A [Collapsible](./collapsible.md) (`ghost`, no border, `direction="up"`) in a flexible `View`. The header holds a [Circular Progress](./circular-progress.md) ring and the title of the active heading. The content is a [TableOfContents](./table-of-contents.md). | Shows where the reader is, and opens the page's headings upward inside the toolbar. It renders nothing when there is no active heading.      |

`FloatingToolbarRow`, `FloatingToolbarDivider`, and `FloatingToolbarTableOfContents` are also exported by name. Use them in React Server Components, which cannot read `FloatingToolbar.Row` from a client module.

The package also exports the pure helpers `getReadingProgress`, `getDraggedOffset`, `getDockSide`, and `parseStoredOffset`, and the types `FloatingToolbarOffset`, `FloatingToolbarStoredPosition`, and `FloatingToolbarDockSide`.

## Examples

The examples are the stories in [`FloatingToolbar.stories.tsx`](../../../components/floating-toolbar/src/FloatingToolbar.stories.tsx). Most render a long page with five headings under a toolbar of two rows. The first row has a brand mark, a divider, and the table of contents. The second row has a "Framework" button, ghost icon buttons for GitHub, search, and the sidebar, and a light and dark `ToggleGroup`.

| Stories                                   | What they show                                                                                                                                                      |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`                                    | The default toolbar: a frosted `floating` surface with the drag handle.                                                                                             |
| `Solid`                                   | `glass={false}`: an opaque surface.                                                                                                                                 |
| `NotDraggable`                            | `draggable={false}`: no handle, and the toolbar stays at the bottom center.                                                                                         |
| `TableOfContentsOnly`                     | One row with only `FloatingToolbar.TableOfContents`. Scroll the page to move the active heading and its progress ring.                                              |
| `ClosesOnOutsidePress`, `ClosesOnEscape`  | Play functions that open the table of contents. A press on a link in the list keeps it open. A press on the page closes it. `Escape` closes it and moves focus back to its header. |
| `OpensAtScrollEnd`                        | A 400 px scroll area scrolled to the end. The header reads "On this page: Theming", and the open list marks "Theming" with `aria-current="location"`, also after it reopens. |

## Props

### FloatingToolbar

`FloatingToolbar` also accepts the props of a Tamagui `View`. With `draggable`, the toolbar sets its own `x` and `y`.

| Prop          | Type                                         | Default                         | Description                                                                                                                                         |
| ------------- | -------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`     | `ContainerVariant`                           | `"floating"`                    | The background and border of the surface. See the [Container](./container.md) variants. The handle and the dock tab use the same surface.          |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | `"elevated"`                    | The shadow of the surface.                                                                                                                          |
| `glass`       | `boolean`                                    | `true`                          | Turns the background into translucent frosted glass.                                                                                                |
| `noise`       | `boolean`                                    | `false`                         | Overlays a fine film grain on the background.                                                                                                       |
| `accented`    | `boolean`                                    | `false`                         | Draws the border in the `primary` color.                                                                                                            |
| `draggable`   | `boolean`                                    | `true`                          | Shows the tab on the left side that moves the toolbar. With `false`, the toolbar stays at the bottom center and cannot dock.                        |
| `storageKey`  | `string \| false`                            | `"cyclone-ui:floating-toolbar"` | The `localStorage` key for the moved position and the docked side. Use a different key for each toolbar on a site. Set `false` to not save it.      |

### FloatingToolbar.TableOfContents

It also accepts the [Collapsible](./collapsible.md) props, except `children` and `value`. It sets `variant="ghost"`, `bordered={false}`, and `direction="up"`. You can override them.

| Prop                   | Type                                                  | Default          | Description                                                                 |
| ---------------------- | ----------------------------------------------------- | ---------------- | --------------------------------------------------------------------------- |
| `items`                | `readonly TableOfContentsItem[]`                      | -                | The headings in document order. Each has a `title`, a hash `url`, and a `depth`. Required. |
| `heading`              | `ReactNode`                                           | `"On this page"` | The title above the links in the open list.                                 |
| `tableOfContentsProps` | `Omit<TableOfContentsProps, "items" \| "children">`   | -                | Props for the `TableOfContents` in the open list.                           |
| `defaultValue`         | `boolean`                                             | `false`          | Opens the list on mount.                                                    |
| `onValueChange`        | Collapsible `onValueChange`                           | -                | Called when the list opens or closes.                                       |

### FloatingToolbar.Divider

It accepts the [Divider](./divider.md) props. It sets `direction="vertical"`, `size="sm"`, `marginVertical="lg"`, and `marginHorizontal="sm"`. You can override them.

## Behavior

### Moving and docking

- Drag the handle to move the toolbar. Vertically, it stays inside the viewport.
- When the viewport gets smaller, the toolbar moves back inside it. When the viewport gets larger, the toolbar moves back toward where you put it.
- After a drag or a key move, the position is saved under `storageKey`. The saved position is read after hydration, so the server render and the first client render agree.
- Let go of a drag with the toolbar within 32 px of the left or right side of the viewport, or across it, and the toolbar docks to that side. While a drop would dock it, the panel fades to 25% opacity.
- Docked, the panel is hidden and `inert`. A tab with a chevron shows at that side of the viewport, at the toolbar's height. The docked side is saved too.
- Press the tab to bring the toolbar back to the bottom center. Drag the tab more than 4 px to pull the toolbar back out from where it was hidden.

### Table of contents

- The active heading comes from `useActiveTableOfContentsItem`, which watches the scroll position.
- The ring shows the position of the active heading in `items`, from 0 to 100%. At the end of the content, it shows 100%.
- When the active heading changes, the new title slides in from the reading direction.
- On web, a press outside the part or `Escape` closes the open list.

## Accessibility

- The frame is a `<nav>` element with the label "Page toolbar". Set `aria-label` to change it.
- The drag handle has `role="button"`, `tabIndex={0}`, and the label "Move toolbar". When it has focus, the arrow keys move the toolbar 16 px.
- The dock tab has `role="button"`, `tabIndex={0}`, and the label "Show toolbar". `Enter` or `Space` brings the toolbar back and moves focus to the drag handle.
- When docked, the panel is `inert`, so its controls are not in the tab order.
- The table of contents header is the `Collapsible` header button, with `aria-expanded`. Its label is "On this page: " plus the active title, when the title is a string. The label always starts with "On this page", whatever the `heading`.
- The progress ring and the icons have `aria-hidden`.
- `Escape` closes the open list. If focus was in the list, it moves to the header.
- In the open list, the link of the active heading has `aria-current="location"`.
- Give icon-only controls in the rows an accessible name, for example with the `Button` `tooltip` or `aria-label`.

## Related

- [Table of contents](./table-of-contents.md)
- [Article Progress Header](./article-progress-header.md)
- [Collapsible](./collapsible.md)
- [Circular Progress](./circular-progress.md)
- [Container](./container.md)
- [Divider](./divider.md)
- [Button](./button.md)
- [Toggle group](./toggle-group.md)
- [Docs Page](./docs-page.md)

## Source

- [`components/floating-toolbar/src/FloatingToolbar.tsx`](../../../components/floating-toolbar/src/FloatingToolbar.tsx)
- [`components/floating-toolbar/src/utilities.ts`](../../../components/floating-toolbar/src/utilities.ts)
- [`components/floating-toolbar/src/FloatingToolbar.stories.tsx`](../../../components/floating-toolbar/src/FloatingToolbar.stories.tsx) (title: `Docs/FloatingToolbar`)
