---
title: Navigation Header
description: Reference for the NavigationHeader component, a responsive site header with a mega menu and a compact menu.
documentType: reference
tags: [component, layout, navigation]
component:
  name: navigation-header
  package: "@cyclone-ui/navigation-header"
  stories:
    - title: Blocks/NavigationHeader
      file: components/navigation-header/src/NavigationHeader.stories.tsx
---

# Navigation Header

`NavigationHeader` is a fixed site header for a marketing or documentation site. Compose a logo, the primary navigation, a search button, a theme toggle, actions, and social links. The header lays them out for the screen size.

On wide screens, an item with groups opens a mega menu under the bar. Below the `xl` breakpoint, a menu button opens a full-height menu with the navigation, the actions, and the social links. The header tracks page scroll: at the top of the page it can hide its background, and on wide screens it shows the logo and the navigation larger.

Use it for the top bar of a site. For the sidebar of an app or a docs site, use [Navigation sidebar](./navigation-sidebar.md). For the shell of an app page, use [Page](./page.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add navigation-header
pnpm install
```

- **File:** `NavigationHeader.tsx`. The CLI writes it to `<path>/navigation-header/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Dialog](./dialog.md), [Eyebrow Text](./eyebrow-text.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Kbd](./kbd.md), [Link](./link.md), [Link Text](./link-text.md), [Overlay](./overlay.md), [Redacted Animation](./redacted-animation.md), [Ripple Animation](./ripple-animation.md), [Search Dialog](./search-dialog.md), [Theme Toggler](./theme-toggler.md), [Toggle](./toggle.md), [Toggle Group](./toggle-group.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { NavigationHeader } from "@cyclone-ui/navigation-header";
```

## Usage

```tsx
<NavigationHeader variant="transparent">
  <NavigationHeader.Logo>
    <a href="/">Cyclone</a>
  </NavigationHeader.Logo>
  <NavigationHeader.Navigation label="Primary">
    <NavigationHeader.Navigation.Item href="/product">
      Product
      <NavigationHeader.Navigation.Item.Group label="Build" featured={true}>
        <NavigationHeader.Navigation.Item.Link href="/tokens">
          Tokens
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
    </NavigationHeader.Navigation.Item>
    <NavigationHeader.Navigation.Item href="/pricing">
      Pricing
    </NavigationHeader.Navigation.Item>
  </NavigationHeader.Navigation>
  <NavigationHeader.Search search={searchDocs} />
  <NavigationHeader.ThemeToggler />
  <NavigationHeader.Actions>
    <Button>
      <Button.Text>Sign in</Button.Text>
    </Button>
  </NavigationHeader.Actions>
  <NavigationHeader.Social label="Social links">
    <NavigationHeader.Social.Link href="https://github.com/storm-software" label="GitHub" icon={Github} />
  </NavigationHeader.Social>
  <NavigationHeader.MenuButton label="Navigation menu" />
</NavigationHeader>
```

Every part except `NavigationHeader` is a slot. A slot renders nothing by itself. The header reads the slot props and renders the bar, the mega menu, and the compact menu. Put each slot as a direct child of `NavigationHeader`. The header is `position: fixed`, so add top space to the page content under it.

## Anatomy

```tsx
<NavigationHeader>
  <NavigationHeader.Logo />
  <NavigationHeader.Navigation>
    <NavigationHeader.Navigation.Item>
      Label
      <NavigationHeader.Navigation.Item.Group>
        <NavigationHeader.Navigation.Item.Link />
      </NavigationHeader.Navigation.Item.Group>
    </NavigationHeader.Navigation.Item>
  </NavigationHeader.Navigation>
  <NavigationHeader.Search />
  <NavigationHeader.ThemeToggler />
  <NavigationHeader.Actions />
  <NavigationHeader.Social>
    <NavigationHeader.Social.Link />
  </NavigationHeader.Social>
  <NavigationHeader.MenuButton />
</NavigationHeader>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `NavigationHeader` | A Tamagui `View` as `<header>`, `position: fixed` at the top, full width, `zIndex` 40. A separate absolute layer draws the background. The bar inside is a row, at most 1440 px wide and centered. | The frame. It holds the open-menu state, tracks page scroll, and renders all the slots. `children` is required. |
| `NavigationHeader.Logo` | Its children at the start of the bar | The brand slot. |
| `NavigationHeader.Navigation` | A `<nav>` with `aria-label` in the center of the bar (from `xl` up), and a second `<nav>` with the same label in the compact menu | The primary navigation landmark. `label` defaults to `"Primary navigation"`. |
| `NavigationHeader.Navigation.Item` | In the bar: a [`Link`](./link.md) to `href`, or a `<button>` with `aria-haspopup` when it has groups. In the compact menu: always a link to `href`. | One top-level destination. Its text children are the label. An active item has a 3 px bottom border. |
| `NavigationHeader.Navigation.Item.Group` | A column in the mega menu. `label` renders as [`EyebrowText`](./eyebrow-text.md). | Groups the links of an item. `featured` makes its links prominent. Groups do not show in the compact menu. |
| `NavigationHeader.Navigation.Item.Link` | A [`Link`](./link.md) in the mega menu. A featured link wraps its label in `HeadingLargeText`. | One destination in a group. Pressing it closes the mega menu. |
| `NavigationHeader.Search` | A [`SearchDialog`](./search-dialog.md) after the navigation | A search button and dialog. |
| `NavigationHeader.ThemeToggler` | A [`ThemeToggler`](./theme-toggler.md) after the search | A light and dark mode toggle. |
| `NavigationHeader.Actions` | Its children at the end of the bar (from `xl` up). In the compact menu, each action is stretched to full width under a `hairline` border. | Account and sign-up actions. |
| `NavigationHeader.Social` | A `<nav>` with `aria-label` at the bottom of the compact menu | Social links. They show only in the compact menu. `label` defaults to `"Social links"`. |
| `NavigationHeader.Social.Link` | A [`Link`](./link.md) with `target="_blank"`, `rel="noopener noreferrer"`, and `aria-label`, that holds the icon | One icon link to a social profile. |
| `NavigationHeader.MenuButton` | Sets the label of the menu button. The header always renders the button below `xl`: a circular ghost [`Button`](./button.md) with an animated menu icon and a `tooltip`. | Opens and closes the compact menu. `label` defaults to `"Navigation menu"`. |

`NavigationHeaderLogoSlot`, `NavigationHeaderNavigationSlot`, `NavigationHeaderItemSlot`, `NavigationHeaderGroupSlot`, `NavigationHeaderLinkSlot`, `NavigationHeaderSearchSlot`, `NavigationHeaderThemeTogglerSlot`, `NavigationHeaderActionsSlot`, `NavigationHeaderSocialSlot`, `NavigationHeaderSocialLinkSlot`, and `NavigationHeaderMenuButtonSlotComponent` are also exported by name. Use them in React Server Components, which cannot read `NavigationHeader.Logo` from a client module.

## Examples

The examples are the stories in [`NavigationHeader.stories.tsx`](../../../components/navigation-header/src/NavigationHeader.stories.tsx). Each story renders the header over a page of content sections, so you can scroll content under it.

| Stories | What they show |
| --- | --- |
| `Default` | The full header: a logo, five items (two with mega menus, one with an active `ChatGPT` link), a search, a theme toggle, `Log in` and `Get started` actions, and GitHub and Discord social links. |
| `SignedIn` | The logo, the navigation, and a circular profile button as the only action. It has no search, theme toggle, or social links. |
| `Transparent`, `Dotted` | The `transparent` (blurred, translucent) and `dotted` backgrounds. |
| `TransparentAtTop` | `transparentAtTop`: the background is hidden at the top of the page and shows when the page scrolls. |
| `Compact` | The `mobile2` viewport, with the menu button and the compact menu. |

## Props

### `NavigationHeader`

`NavigationHeader` also accepts the props of a Tamagui `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Required. The slots. |
| `variant` | `"filled" \| "transparent" \| "dotted"` | `"filled"` | The bar background. `filled` is the opaque `canvas` color. `transparent` is a translucent, blurred `canvas`. `dotted` adds a dot pattern over `transparent` and fades it toward the bottom edge. While a menu is open, the background is always `filled`. |
| `transparentAtTop` | `boolean` | `false` | Hides the background while the page is at the top. The `variant` background shows when the page scrolls down. |

### `NavigationHeader.Navigation`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Required. The items. |
| `label` | `string` | `"Primary navigation"` | The accessible name of the navigation landmark. |

### `NavigationHeader.Navigation.Item`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Required. The label, followed by optional `Group` slots. |
| `href` | `string` | - | The destination. An item with groups opens its mega menu in the bar instead. The compact menu always links to `href`. |
| `target` | `string` | - | The link target. |
| `external` | `boolean` | - | Marks the destination as external. |
| `active` | `boolean` | - | Marks the current item. Sets `aria-current="page"` on a link item. An item with groups is also active when one of its links is active. |
| `onPress` | `Link` `onPress` | - | A press handler for an item without groups. In the compact menu, the press also closes the menu. |

### `NavigationHeader.Navigation.Item.Group`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Required. The `Link` slots. |
| `label` | `string` | - | The column heading in the mega menu. |
| `featured` | `boolean` | - | Makes the links of the group prominent, unless a link sets its own `featured`. |

### `NavigationHeader.Navigation.Item.Link`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Required. The label. |
| `href` | `string` | - | The destination. |
| `target` | `string` | - | The link target. |
| `external` | `boolean` | - | Marks the destination as external. |
| `active` | `boolean` | - | Sets `aria-current="page"` and makes the parent item active. |
| `featured` | `boolean` | The group's `featured` | Shows the label in `HeadingLargeText`. |
| `onPress` | `Link` `onPress` | - | Called on press, before the mega menu closes. |

### `NavigationHeader.Search` and `NavigationHeader.ThemeToggler`

`Search` takes the props of [`SearchDialog`](./search-dialog.md). `ThemeToggler` takes the props of [`ThemeToggler`](./theme-toggler.md).

### `NavigationHeader.Logo` and `NavigationHeader.Actions`

Each takes `children` (`ReactNode`, required).

### `NavigationHeader.Social` and `NavigationHeader.Social.Link`

| Part | Prop | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `Social` | `children` | `ReactNode` | - | Required. The `Social.Link` slots. |
| `Social` | `label` | `string` | `"Social links"` | The accessible name of the landmark. |
| `Social.Link` | `href` | `string` | - | Required. The profile URL. It opens in a new tab. |
| `Social.Link` | `label` | `string` | - | Required. The accessible name, because the link shows only its icon. |
| `Social.Link` | `icon` | `IconComponent` | - | Required. The icon component, such as `Github`. |
| `Social.Link` | `size`, `color`, `variant`, `animated`, `mirrored` | icon props | `size="6xl"`, `color="currentColor"` | Passed to the icon. |

### `NavigationHeader.MenuButton`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `"Navigation menu"` | The menu name. The button's `aria-label` is `"Open <label>"` or `"Close <label>"`. |

## Behavior

### Mega menu

- From `xl` up, an item with groups opens its mega menu on hover, on focus, or on press. The menu opens under the bar with a 200 ms clip reveal. Its groups show as columns.
- When the menu opens from closed, the headings and links fade and slide in, 50 ms apart.
- `Escape` on the item closes the menu. The menu also closes when the pointer leaves the header or focus moves out of it.
- While the pointer is on one item or link, the others dim.

### Compact menu

- Below `xl`, the menu button opens a panel under the bar. The panel fills the rest of the screen height and fades and slides in over 300 ms.
- The panel lists the top-level items as links, the actions, and the social links. The item labels play a [`RedactedAnimation`](./redacted-animation.md) reveal each time the menu opens.
- While the panel is open, the page does not scroll. Only the panel scrolls.
- Pressing an item closes the panel.

### Scroll

While the page is at the top, the logo and the center of the bar (navigation, search, and theme toggle) scale to 1.1 at `xl` and 1.25 at `xxl`. They return to normal size when the page scrolls.

## Responsive behavior

| Screen | Layout |
| --- | --- |
| `xxl` and up | The navigation is in the center. The actions are at the end. At the top of the page, the logo and the center scale to 1.25. |
| `xl` | The same layout. The scale at the top of the page is 1.1. |
| Below `xl` | The navigation, the actions, and the mega menu are hidden. The search and the theme toggle move to the end, next to the menu button. The bar gap becomes smaller. |
| Below `md` | The bar has less padding. |

## Accessibility

- **Landmarks.** The frame is a `<header>`. The primary navigation is a `<nav>` named by `label`, in the bar and in the compact menu. The social links are a `<nav>` named by `Social`'s `label`.
- **Mega menu triggers.** An item with groups is a button with `aria-haspopup="true"`, `aria-expanded`, and `aria-controls` (the mega menu). The closed mega menu has `aria-hidden`. `Escape` closes it.
- **Current page.** Active items and links have `aria-current="page"`.
- **Menu button.** It has `aria-expanded`, `aria-controls` (the compact menu), and an `aria-label` of `"Open <label>"` or `"Close <label>"`. Its icon is hidden from screen readers.
- **Closed compact menu.** It stays mounted so it can fade out. It is marked `inert`, so the hidden links leave the tab order and the accessibility tree.
- **Social links.** Each link has an `aria-label`. The icon is hidden from screen readers.
- **Focus.** Item and social links show a 2 px `primary` outline on keyboard focus.
- **Reduced motion.** With `prefers-reduced-motion: reduce`, the header skips the scale, the mega menu reveal, the staggered entrance, the compact menu fade, and the background fade.

## Related

- [Navigation sidebar](./navigation-sidebar.md)
- [Footer](./footer.md)
- [Search dialog](./search-dialog.md)
- [Theme Toggler](./theme-toggler.md)
- [Link](./link.md)
- [Page](./page.md)

## Source

- [`components/navigation-header/src/NavigationHeader.tsx`](../../../components/navigation-header/src/NavigationHeader.tsx)
- [`components/navigation-header/src/NavigationHeader.stories.tsx`](../../../components/navigation-header/src/NavigationHeader.stories.tsx) (title: `Blocks/NavigationHeader`)
