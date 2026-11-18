---
title: Page
description: A page layout with Banner, TopNav, SideNav, Main, and Panel areas, with a collapsible and resizable side nav and skip links.
documentType: reference
tags: [component, layout, page, navigation]
component:
  name: page
  package: "@cyclone-ui/page"
  stories:
    - title: Layouts/Page
      file: components/page/src/Page.stories.tsx
---

# Page

`Page` is the shell of an application page. It is a compound component with these areas: `Banner`, `TopNav`, `SideNav`, `Main`, and `Panel`. The side nav and the panel can be resized. The side nav can collapse. The page adds skip links and an optional `Ctrl+[` shortcut.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add page
pnpm install
```

- **Files:** `Page.tsx` and `utilities.ts`. The CLI writes them to `<path>/page/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Icons](../icons/index.md), and [Scroll View](./scroll-view.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/constants`, and `@tamagui/core`.

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

## Anatomy

```tsx
<Page>
  <Page.Banner />
  <Page.TopNav>
    <Page.TopNav.Start>
      <Page.SideNavToggle />
    </Page.TopNav.Start>
    <Page.TopNav.Middle />
    <Page.TopNav.End />
  </Page.TopNav>
  <Page.SideNav>
    <Page.SideNav.Header />
    <Page.SideNav.Body />
    <Page.SideNav.Footer />
    <Page.SideNav.Splitter />
  </Page.SideNav>
  <Page.Main>
    <Page.Main.Header />
    <Page.Main.Content />
  </Page.Main>
  <Page.Panel>
    <Page.Panel.Header />
    <Page.Panel.Body />
    <Page.Panel.Footer />
    <Page.Panel.Splitter />
  </Page.Panel>
</Page>
```

"Desktop" is the `lg` media query. The stories use 1024 px as the breakpoint.

| Part | Renders | Purpose |
| --- | --- | --- |
| `Page` | A Tamagui `View` as a CSS grid with the columns `auto minmax(0, 1fr) auto`, at least `100dvh` tall | The root. It holds the side nav, panel, and skip link state. Its top padding equals the banner and top nav heights. It renders the skip links first. While the side nav is open on mobile, it adds a backdrop with `aria-hidden`. |
| `Page.Banner` | A `View` with `role="region"` and `aria-label`, `position: fixed` at the top | A strip for announcements on the `primary` background. Height `48` by default. Takes a `theme` for its color. |
| `Page.TopNav` | A `View` as `<header>` with `aria-label`, `position: fixed` below the banner | The top bar. Height `56` by default. |
| `Page.TopNav.Start` | A row `View` | The start slot. While the side nav is expanded on desktop, it takes the side nav width and lines up with it. |
| `Page.TopNav.Middle` | A row `View` that grows | The centered middle slot. |
| `Page.TopNav.End` | A row `View` with `marginLeft: auto` | The end slot. It stays on the end edge when there is no `Middle`. |
| `Page.SideNavToggle` | A `View` as `<button>` with `aria-controls`, `aria-expanded`, and `aria-label` | Expands and collapses the side nav. It shows a `MenuFoldLeft` icon. It renders nothing when the page has no `Page.SideNav`. |
| `Page.SideNav` | A `View` as `<nav>` with `aria-label`, in grid column 1. `position: sticky` on desktop, `fixed` below it | The navigation column. Inline on desktop. An overlay on mobile. It has `display: none` while collapsed. |
| `Page.SideNav.Header`, `Page.Panel.Header` | A column `View` | The top section of the area. |
| `Page.SideNav.Body`, `Page.Panel.Body` | A `ScrollView` (size `lg`) with a padded column inside | The scroll container between the header and the footer. |
| `Page.SideNav.Footer`, `Page.Panel.Footer` | A column `View` with a top border | The bottom section of the area. |
| `Page.SideNav.Splitter`, `Page.Panel.Splitter` | A `View` with `role="separator"`, `tabIndex={0}`, `aria-orientation="vertical"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-controls`. Hidden below desktop | The resize handle on the edge of the area. |
| `Page.Main` | A `View` as `<main>`, in grid column 2 | The page content. With `fixed`, it is `sticky` on desktop and scrolls on its own. |
| `Page.Main.Header` | A `View` as `<header>`, `position: sticky` below the top nav | Stays at the top of main while its content scrolls. |
| `Page.Main.Content` | A column `View`, centered, at most `1440` px wide | Adds the standard padding. |
| `Page.Panel` | A `View` as `<aside>` with `aria-label`, in grid column 3. `position: sticky` on desktop, `fixed` below it | Beside main on desktop and over it on smaller screens. It fades and slides in when it opens. |

Each part is also exported by name: `PageBanner`, `PageTopNav`, `PageTopNavStart`, `PageTopNavMiddle`, `PageTopNavEnd`, `PageSideNav`, `PageSideNavHeader`, `PageSideNavBody`, `PageSideNavFooter`, `PageSideNavSplitter`, `PageSideNavToggle`, `PageMain`, `PageMainHeader`, `PageMainContent`, `PagePanel`, `PagePanelHeader`, `PagePanelBody`, `PagePanelFooter`, and `PagePanelSplitter`. Use them in React Server Components, which cannot read `Page.Banner` from a client module.

## Examples

The examples are the stories in [`Page.stories.tsx`](../../../components/page/src/Page.stories.tsx). Each one renders a top nav, a side nav, and main.

| Stories | What they show |
| --- | --- |
| `Default` | The side nav expanded on desktop and collapsed on mobile. The play function toggles it twice with `Page.SideNavToggle` and checks `aria-expanded` and the toggle label. |
| `WithBanner` | A `Page.Banner` above the top nav. |
| `WithPanel`, `ExpandSideNavFromHook` | A `Page.Panel` opened and closed from a top nav button with `usePagePanel()`, and a button in main that expands a collapsed side nav with `usePageSideNav()`. |
| `CollapsedSideNav` | `defaultSideNavCollapsed`. Hover the toggle to open the side nav as a flyout. |
| `KeyboardShortcut` | `sideNavShortcutEnabled`. The play function presses `Ctrl` + `[` to collapse and expand the side nav. |
| `FixedMain` | `Page.Main` with `fixed`, so main scrolls on its own on desktop. |
| `CustomSkipLink` | A section that registers its own skip link with `usePageSkipLink`. The play function presses `Tab` and checks that the skip links show. |
| `Mobile` | The `mobile2` viewport, with the panel closed by `defaultPanelOpen={false}`. The side nav and panel open over main. |

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

- The side nav has separate states for desktop and mobile. On mobile, the backdrop click and the `Escape` key close it. When the screen crosses the breakpoint, an open mobile side nav closes.
- Hovering the toggle while the side nav is collapsed on desktop opens a flyout after 200 ms. `Escape` closes the flyout.
- The splitter resizes the side nav by drag, or with the arrow, `Home`, and `End` keys. An arrow key moves it `16` pixels. A double click collapses the side nav.
- Resized widths survive a collapse.

### Panel

The panel is open by default. Open and close it with `usePagePanel()` or with the `panelOpen` props.

### Skip links

The first `Tab` shows skip links to the areas of the page. The built-in links come in this order: main, side nav, panel, top nav, banner. A link to the side nav also expands it. Register more links with `usePageSkipLink(id, label, index?)`. They come after the built-in links.

## Hooks and utilities

| Export | Description |
| --- | --- |
| `usePageSideNav()` | Returns `{ expanded, peeking, expand, collapse, toggle }`. |
| `usePagePanel()` | Returns `{ open, setOpen, toggle }`. |
| `usePageSkipLink(id, label, index?)` | Registers a skip link to the element with `id`. Pass `undefined` as `id` to remove it. `index` defaults to `PAGE_CUSTOM_SKIP_LINK_INDEX`. |
| `PAGE_BANNER_HEIGHT`, `PAGE_TOP_NAV_HEIGHT`, `PAGE_SIDE_NAV_DEFAULT_WIDTH`, `PAGE_SIDE_NAV_MIN_WIDTH`, `PAGE_PANEL_DEFAULT_WIDTH`, `PAGE_PANEL_MAX_MIN_WIDTH`, `PAGE_RESIZE_STEP` | Layout constants (`48`, `56`, `320`, `240`, `365`, `400`, `16`). |
| `PAGE_CUSTOM_SKIP_LINK_INDEX` | `5`. The first skip link position after the built-in links. |
| `resolvePageWidth`, `clampPageWidth`, `getSideNavWidthBounds`, `getPanelWidthBounds`, `getDraggedWidth`, `getKeyboardResizedWidth`, `isSideNavShortcut`, `sortSkipLinks` | Width and shortcut helpers. |

## Related

- [Docs page](./docs-page.md), a documentation layout built on `Page`
- [Navigation sidebar](./navigation-sidebar.md), for the contents of `Page.SideNav`
- [ScrollView](./scroll-view.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/page/src/Page.tsx`](../../../components/page/src/Page.tsx)
- [`components/page/src/utilities.ts`](../../../components/page/src/utilities.ts)
- [`components/page/src/Page.stories.tsx`](../../../components/page/src/Page.stories.tsx) (title: `Layouts/Page`)
- [`components/page/src/utilities.spec.ts`](../../../components/page/src/utilities.spec.ts)
