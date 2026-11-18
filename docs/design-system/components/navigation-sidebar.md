---
title: Navigation Sidebar
description: Reference for the NavigationSidebar block, a vertical navigation with a workspace switcher, a search button, grouped links, expandable folders, and the signed-in account.
documentType: reference
tags: [component, layout, navigation, sidebar]
component:
  name: navigation-sidebar
  package: "@cyclone-ui/navigation-sidebar"
  stories:
    - title: Blocks/NavigationSidebar
      file: components/navigation-sidebar/src/NavigationSidebar.stories.tsx
---

# Navigation Sidebar

`NavigationSidebar` is a vertical navigation block for an app or a docs site. The header holds a workspace switcher and a search button. The body scrolls and holds labeled groups of links and expandable folders. The footer shows the signed-in account.

`NavigationSidebar` fills its container. It has no collapse, resize, or mobile overlay of its own. Use it alone (set `bordered` for a card), or put it inside [`Page.SideNav`](./page.md) or [`DocsPage.SideNav`](./docs-page.md), which add those behaviors. For the links at the top of a marketing site, use [Navigation header](./navigation-header.md). For the sections of one article, use [Table of contents](./table-of-contents.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add navigation-sidebar
pnpm install
```

- **File:** `NavigationSidebar.tsx`. The CLI writes it to `<path>/navigation-sidebar/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Icons](../icons/index.md), [Kbd](./kbd.md), and [Scroll View](./scroll-view.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { NavigationSidebar } from "@cyclone-ui/navigation-sidebar";
```

## Usage

```tsx
<NavigationSidebar bordered={true} aria-label="Sidebar">
  <NavigationSidebar.Header>
    <NavigationSidebar.Switcher
      title="Northwind Logistics"
      description="Enterprise"
      aria-label="Switch workspace"
      onPress={openWorkspaceMenu}
    />
    <NavigationSidebar.Search shortcut={["Ctrl", "K"]} onPress={openSearch} />
  </NavigationSidebar.Header>
  <NavigationSidebar.Body>
    <NavigationSidebar.Group label="Workspace">
      <NavigationSidebar.Item href="/boards" icon={<Grid3 aria-hidden={true} size={16} color="currentColor" />} active={true}>
        Boards
      </NavigationSidebar.Item>
      <NavigationSidebar.Item href="/inbox" icon={<Mailbox aria-hidden={true} size={16} color="currentColor" />} end={7}>
        Inbox
      </NavigationSidebar.Item>
      <NavigationSidebar.Folder label="Projects" icon={<Folder aria-hidden={true} size={16} color="currentColor" />}>
        <NavigationSidebar.Item href="/projects/atlas">Atlas</NavigationSidebar.Item>
      </NavigationSidebar.Folder>
    </NavigationSidebar.Group>
  </NavigationSidebar.Body>
  <NavigationSidebar.Footer>
    <NavigationSidebar.Account name="Dana Mireles" description="Admin" />
  </NavigationSidebar.Footer>
</NavigationSidebar>
```

Inside `Page.SideNav`, set `render="div"`. `Page.SideNav` is already a navigation landmark.

```tsx
<Page.SideNav>
  <NavigationSidebar render="div">{/* Header, Body, Footer */}</NavigationSidebar>
</Page.SideNav>
```

## Anatomy

```tsx
<NavigationSidebar>
  <NavigationSidebar.Header>
    <NavigationSidebar.Switcher />
    <NavigationSidebar.Search />
  </NavigationSidebar.Header>
  <NavigationSidebar.Body>
    <NavigationSidebar.Group>
      <NavigationSidebar.Item />
      <NavigationSidebar.Folder>
        <NavigationSidebar.Item />
      </NavigationSidebar.Folder>
    </NavigationSidebar.Group>
  </NavigationSidebar.Body>
  <NavigationSidebar.Footer>
    <NavigationSidebar.Account />
  </NavigationSidebar.Footer>
</NavigationSidebar>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `NavigationSidebar` | A Tamagui `View` as `<nav>`. A flex column that grows to fill its container. | The frame and the navigation landmark. `bordered` makes it a rounded card with a `surface` background and a `hairline` border. |
| `NavigationSidebar.Header` | A Tamagui `View`. It does not shrink. | The top area for content that does not scroll, such as the switcher, the search button, or a brand row with `Page.SideNavToggle`. |
| `NavigationSidebar.Switcher` | A Tamagui `View` as `<button role="button">` | Shows the current workspace: a square logo (the first letter of `title` by default), the title, the description, and an up-down arrow icon. Open a menu from `onPress`, or wrap it in a menu or popover trigger. |
| `NavigationSidebar.Search` | A Tamagui `View` as `<button role="button">` with `aria-label` and `aria-keyshortcuts` | Shows a search icon, the placeholder, and the shortcut keys as [`Kbd`](./kbd.md) keys. Open search, such as a [`SearchDialog`](./search-dialog.md), from `onPress`. |
| `NavigationSidebar.Body` | A [`ScrollView`](./scroll-view.md) (`size="lg"`) with an inner `View` column | The scroll container between the header and the footer. |
| `NavigationSidebar.Group` | A Tamagui `View` with `role="group"`, labelled by its label | A labeled list of items and folders. The label is a `<span>` in small, subtle text. |
| `NavigationSidebar.Item` | A Tamagui `View` as `<a>` with `href`. Otherwise (or when disabled) a `<button role="button" type="button">`. | One destination: an optional icon, a one-line label, and optional `end` content such as a count. |
| `NavigationSidebar.Folder` | A `NavigationSidebar.Item` button with `aria-expanded` and `aria-controls`, and a `View` for the nested items | An item that expands to show nested items. A chevron turns 90° while it is open. The nested items are indented, with a `hairline` line on the left. |
| `NavigationSidebar.Footer` | A Tamagui `View` with a `hairline` top border. It does not shrink. | The bottom area. |
| `NavigationSidebar.Account` | A Tamagui `View` row | The signed-in user: a round avatar (two initials of `name` by default), the name, the description, and optional `end` content such as a menu button. |

`NavigationSidebarHeader`, `NavigationSidebarSwitcher`, `NavigationSidebarSearch`, `NavigationSidebarBody`, `NavigationSidebarGroup`, `NavigationSidebarItem`, `NavigationSidebarFolder`, `NavigationSidebarFooter`, and `NavigationSidebarAccount` are also exported by name. Use them in React Server Components, which cannot read `NavigationSidebar.Item` from a client module.

## Examples

The examples are the stories in [`NavigationSidebar.stories.tsx`](../../../components/navigation-sidebar/src/NavigationSidebar.stories.tsx). Each story renders the sidebar in a 288 × 740 px box with `aria-label="Sidebar"`.

| Stories | What they show |
| --- | --- |
| `Default` | A bordered sidebar with a workspace switcher, a search button with a `Ctrl` `K` shortcut, three groups (an active item, items with counts, and a disabled item), and the account in the footer. The play function checks the `nav` landmark, `aria-current="page"`, `aria-keyshortcuts`, the named group, `aria-disabled`, and the `DM` initials. |
| `Borderless` | The same sidebar with `bordered={false}`. It sits flush on the page, as in `DocsPage`. |
| `Folders` | A docs tree with a search button and two folders. One folder starts open with `defaultOpen`. The play function opens and closes the folders and checks `aria-expanded` and the visibility of the nested links. |

## Props

### `NavigationSidebar`

`NavigationSidebar` also accepts the props of a Tamagui `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `bordered` | `boolean` | `false` | Makes the sidebar a rounded card with a `surface` background, a `hairline` border, and hidden overflow. |
| `aria-label` | `string` | - | The accessible name of the navigation landmark. |
| `render` | element name | `"nav"` | The element to render. Set `"div"` inside a parent that is already a navigation landmark, such as `Page.SideNav`. |

### `NavigationSidebar.Switcher`

`Switcher` also accepts the props of its button frame (a Tamagui `View`), such as `onPress` and `aria-label`, except `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | - | Required. The workspace, team, or product name. |
| `description` | `ReactNode` | - | A second line, such as the plan or the role. |
| `logo` | `ReactNode` | First letter of `title` | The workspace logo. |

### `NavigationSidebar.Search`

`Search` also accepts the props of its button frame (a Tamagui `View`), such as `onPress`, except `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `placeholder` | `string` | `"Search"` | The visible text. It is also the `aria-label`. |
| `shortcut` | `readonly string[]` | `[]` | The keys of the shortcut that opens search, such as `["Ctrl", "K"]`. They show as `Kbd` keys and set `aria-keyshortcuts` (`"Ctrl+K"`). The component does not listen for the keys. Bind the shortcut in your app. |

### `NavigationSidebar.Body`

`Body` accepts the props of [`ScrollView`](./scroll-view.md).

### `NavigationSidebar.Group`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | The group heading, such as `"Workspace"`. It is also the accessible name of the group. |
| `children` | `ReactNode` | - | Items and folders. |

### `NavigationSidebar.Item`

`Item` also accepts the props of its frame (a Tamagui `View`), such as `onPress`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `string` | - | Required. The label. It shows on one line. |
| `href` | `string` | - | Renders a link. Without it, the item is a button. |
| `icon` | `ReactNode` | - | Shows before the label. Use a 16 px icon with `color="currentColor"`. |
| `end` | `ReactNode` | - | Shows after the label, such as an unread count. |
| `active` | `boolean` | `false` | Marks the current page. Sets `aria-current="page"`, a `secondary` background, and a bold `primary` label and icon. |
| `disabled` | `boolean` | `false` | Renders a button with `aria-disabled`, removes it from the tab order, ignores the pointer, and sets 50% opacity. |

### `NavigationSidebar.Folder`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | Required. The folder label. |
| `icon` | `ReactNode` | - | Shows before the label. |
| `defaultOpen` | `boolean` | `false` | Opens the folder on mount, such as when it holds the current page. |
| `children` | `ReactNode` | - | The nested items. |

### `NavigationSidebar.Footer` and `NavigationSidebar.Header`

These accept the props of a Tamagui `View`.

### `NavigationSidebar.Account`

`Account` also accepts the props of a Tamagui `View`, except `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | - | Required. The name of the user. |
| `description` | `ReactNode` | - | A second line, such as the role or the email. |
| `avatar` | `ReactNode` | Two initials of `name` | A profile image. |
| `end` | `ReactNode` | - | Shows after the name, such as a menu button. |

## States

- **Hover and press.** `Item`, `Switcher`, and `Search` change to the `secondary-hovered` background on hover and to `secondary-active` on press.
- **Focus.** `Item`, `Switcher`, and `Search` show a focus ring on keyboard focus.
- **Active.** An active item has a `secondary` background and a bold `primary` label.
- **Disabled.** A disabled item is at 50% opacity and ignores the pointer.
- **Folder open.** The chevron turns 90° and the nested items show. A closed folder hides its nested items with `display: none`.

## Responsive behavior

`NavigationSidebar` has no breakpoints. It fills the height and the width of its container, and the body scrolls. For a side nav that collapses, resizes, or opens as an overlay on small screens, put it in `Page.SideNav` or `DocsPage.SideNav`.

## Accessibility

- **Landmark.** The frame is a `<nav>` landmark. Give it an `aria-label`. Inside `Page.SideNav`, set `render="div"` so that the page has one navigation landmark, not two.
- **Groups.** Each `Group` has `role="group"`. Its `label` names the group through `aria-labelledby`.
- **Current page.** An active item has `aria-current="page"`.
- **Keyboard.** Items with `href` are links. Items without `href`, folders, the switcher, and the search button are buttons. All of them are in the tab order, except disabled items (`tabIndex={-1}`). A closed folder hides its nested items, so they are not in the tab order.
- **Folders.** The folder button has `aria-expanded` and `aria-controls`, which points to the nested items.
- **Search.** The button has `aria-label` set to `placeholder` and `aria-keyshortcuts` set to the shortcut. The search icon and the `Kbd` keys are hidden from screen readers.
- **Switcher.** The logo and the arrow icon are hidden from screen readers, so the accessible name comes from the title and the description. Set `aria-label` (for example `"Switch workspace"`) to name the action.
- **Account.** The avatar is hidden from screen readers.

## Related

- [Page](./page.md), which hosts the sidebar in `Page.SideNav`
- [Docs page](./docs-page.md), which hosts the sidebar in `DocsPage.SideNav`
- [Navigation header](./navigation-header.md)
- [Search dialog](./search-dialog.md)
- [Kbd](./kbd.md)
- [ScrollView](./scroll-view.md)

## Source

- [`components/navigation-sidebar/src/NavigationSidebar.tsx`](../../../components/navigation-sidebar/src/NavigationSidebar.tsx)
- [`components/navigation-sidebar/src/NavigationSidebar.stories.tsx`](../../../components/navigation-sidebar/src/NavigationSidebar.stories.tsx) (title: `Blocks/NavigationSidebar`)
