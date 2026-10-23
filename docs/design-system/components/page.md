---
title: Page
description: A page layout with Banner, TopNav, SideNav, Main, and Panel areas, with a collapsible and resizable side nav and skip links.
documentType: reference
tags: [component, layout, page, navigation]
---

# Page

`Page` is the shell of an application page. It is a compound component with these areas: `Banner`, `TopNav`, `SideNav`, `Main`, and `Panel`. The side nav and the panel can be resized. The side nav can collapse. The page adds skip links and an optional `Ctrl+[` shortcut.

## Import

```tsx
import { Page } from "@cyclone-ui/page";
```

## Usage

```tsx
<Page>
  <Page.Banner>Scheduled maintenance starts Saturday at 02:00 UTC.</Page.Banner>
  <Page.TopNav>
    <Page.TopNav.Start>
      <Page.SideNavToggle />
      <Logo />
    </Page.TopNav.Start>
    <Page.TopNav.Middle>
      <Search />
    </Page.TopNav.Middle>
    <Page.TopNav.End>
      <ProfileButton />
    </Page.TopNav.End>
  </Page.TopNav>
  <Page.SideNav>
    <Page.SideNav.Header>
      <ProjectSwitcher />
    </Page.SideNav.Header>
    <Page.SideNav.Body>
      <NavigationLinks />
    </Page.SideNav.Body>
    <Page.SideNav.Footer>
      <SettingsLink />
    </Page.SideNav.Footer>
    <Page.SideNav.Splitter />
  </Page.SideNav>
  <Page.Main>
    <Page.Main.Header>
      <HeadingLargeText>Overview</HeadingLargeText>
    </Page.Main.Header>
    <Page.Main.Content>{children}</Page.Main.Content>
  </Page.Main>
  <Page.Panel>
    <Page.Panel.Body>
      <Details />
    </Page.Panel.Body>
    <Page.Panel.Splitter />
  </Page.Panel>
</Page>
```

Render each area as a direct child of `Page`, in any order. Every area is optional.

## Areas

| Area | Parts | Description |
| --- | --- | --- |
| `Page.Banner` | — | Fixed at the top of the screen. Height `48` by default. Takes a `theme` for its color. |
| `Page.TopNav` | `Start`, `Middle`, `End` | Fixed below the banner. Height `56` by default. |
| `Page.SideNav` | `Header`, `Body`, `Footer`, `Splitter` | Inline on desktop. An overlay on mobile. `Body` is the scroll container. |
| `Page.SideNavToggle` | — | Button that expands and collapses the side nav. |
| `Page.Main` | `Header`, `Content` | The page content. `Header` stays at the top while the page scrolls. `Content` adds the standard padding. |
| `Page.Panel` | `Header`, `Body`, `Footer`, `Splitter` | Beside main on desktop and over it on smaller screens. |

While the side nav is expanded on desktop, `Page.TopNav.Start` lines up with it.

## Props

### `Page`

`PageProps` is the Tamagui frame props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultSideNavCollapsed` | `boolean` | `false` | Starts the side nav collapsed on desktop. On mobile, it always starts collapsed. |
| `sideNavShortcutEnabled` | `boolean` | `false` | Lets `Ctrl` + `[` toggle the side nav. |
| `sideNavFlyoutEnabled` | `boolean` | `true` | Lets hovering the toggle open a collapsed side nav as a flyout on desktop. |
| `canToggleSideNavWithShortcut` | `() => boolean` | — | Runs before each shortcut toggle. Return `false` to ignore the key press. |
| `onSideNavExpandedChange` | `(expanded: boolean, details: PageSideNavChangeDetails) => void` | — | Called when the side nav expands or collapses. Persist it to restore `defaultSideNavCollapsed`. |
| `panelOpen` | `boolean` | — | Controls whether `Page.Panel` is open. |
| `defaultPanelOpen` | `boolean` | `true` | Initial panel state. |
| `onPanelOpenChange` | `(open: boolean) => void` | — | Called when the panel opens or closes. |
| `skipLinksLabel` | `string` | `"Skip to"` | Heading above the skip links. |

### `Page.Banner` and `Page.TopNav`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `number` | `48` (banner), `56` (top nav) | Height in pixels. |
| `label` | `string` | `"Banner"`, `"Top navigation"` | Accessible name of the region. |
| `skipLinkLabel` | `string` | `label` | Text of the skip link. |

### `Page.SideNav`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultWidth` | `number` | `320` | Starting width in pixels. |
| `minWidth` | `PageWidth` | `240` | Minimum width. |
| `maxWidth` | `PageWidth` | `"50vw"` | Maximum width. |
| `label` | `string` | `"Sidebar"` | Accessible name of the navigation landmark. |
| `skipLinkLabel` | `string` | `label` | Text of the skip link. |

`PageWidth` is a number, a `"<n>px"` string, or a `"<n>vw"` string.

### `Page.SideNavToggle`

| Prop | Type | Default |
| --- | --- | --- |
| `expandLabel` | `string` | `"Expand sidebar"` |
| `collapseLabel` | `string` | `"Collapse sidebar"` |

### `Page.Main`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `fixed` | `boolean` | `false` | Gives main its own scroll container on desktop. Smaller screens always scroll the document. |
| `skipLinkLabel` | `string` | `"Main content"` | Text of the skip link. |

### `Page.Panel`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultWidth` | `number` | `365` | Starting width. It is also the minimum resize width, up to `400`. |
| `maxWidth` | `PageWidth` | Half of the space beside an inline side nav | Maximum width. |
| `label` | `string` | `"Panel"` | Accessible name of the complementary landmark. |
| `skipLinkLabel` | `string` | `label` | Text of the skip link. |

### Splitters

`Page.SideNav.Splitter` and `Page.Panel.Splitter` accept:

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | Accessible name. Default `"Resize sidebar"` or `"Resize panel"`. |
| `onResizeStart` | `(details: { initialWidth: number }) => void` | Called when a resize starts. |
| `onResizeEnd` | `(details: { initialWidth: number; finalWidth: number }) => void` | Called when a resize ends. Save `finalWidth` and pass it back as `defaultWidth`. |

## Behavior

### Side nav

- The side nav has separate states for desktop and mobile. On mobile, the backdrop click and the `Escape` key close it.
- Hovering the toggle while the side nav is collapsed on desktop opens a flyout.
- The splitter resizes the side nav by drag, or with the arrow, `Home`, and `End` keys. An arrow key moves it `16` pixels. A double click collapses the side nav.
- Resized widths survive a collapse.

### Panel

The panel is open by default. Open and close it with `usePagePanel()` or with the `panelOpen` props.

### Skip links

The first `Tab` shows skip links to the areas of the page. Register more links with `usePageSkipLink(id, label, index?)`.

## Hooks and utilities

| Export | Description |
| --- | --- |
| `usePageSideNav()` | Returns `{ expanded, peeking, expand, collapse, toggle }`. |
| `usePagePanel()` | Returns `{ open, setOpen, toggle }`. |
| `usePageSkipLink(id, label, index?)` | Registers a skip link. |
| `PAGE_BANNER_HEIGHT`, `PAGE_TOP_NAV_HEIGHT`, `PAGE_SIDE_NAV_DEFAULT_WIDTH`, `PAGE_SIDE_NAV_MIN_WIDTH`, `PAGE_PANEL_DEFAULT_WIDTH`, `PAGE_PANEL_MAX_MIN_WIDTH`, `PAGE_RESIZE_STEP` | Layout constants (`48`, `56`, `320`, `240`, `365`, `400`, `16`). |
| `resolvePageWidth`, `clampPageWidth`, `getSideNavWidthBounds`, `getPanelWidthBounds`, `getDraggedWidth`, `getKeyboardResizedWidth`, `isSideNavShortcut`, `sortSkipLinks` | Width and shortcut helpers. |

## Stories

`Default`, `WithBanner`, `WithPanel`, `CollapsedSideNav`, `KeyboardShortcut`, `FixedMain`, `CustomSkipLink`, `ExpandSideNavFromHook`, and `Mobile`.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/page/src/Page.tsx`](../../../components/page/src/Page.tsx)
- [`components/page/src/utilities.ts`](../../../components/page/src/utilities.ts)
- [`components/page/src/Page.stories.tsx`](../../../components/page/src/Page.stories.tsx)
- [`components/page/src/utilities.spec.ts`](../../../components/page/src/utilities.spec.ts)
