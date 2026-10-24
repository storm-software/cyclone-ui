---
title: Navigation header
description: Reference for the NavigationHeader component, a responsive site header with a mega menu and a compact menu.
documentType: reference
tags: [component, layout, navigation]
---

# Navigation header

`NavigationHeader` is a responsive site header. Compose a logo, navigation, actions, and a menu button.

`Navigation.Item` can contain `Group` and `Link` children. On a large screen those children form a mega menu. On a small screen they form a collapsible panel. The header tracks page scroll.

Source: [`components/navigation-header`](https://github.com/storm-software/cyclone-ui/tree/main/components/navigation-header)

## Import

```tsx
import { NavigationHeader } from "@cyclone-ui/navigation-header";
```

## Usage

```tsx
<NavigationHeader>
  <NavigationHeader.Logo>
    <a href="/">Cyclone</a>
  </NavigationHeader.Logo>
  <NavigationHeader.Navigation label="Primary">
    <NavigationHeader.Navigation.Item>
      Product
      <NavigationHeader.Navigation.Item.Group label="Build">
        <NavigationHeader.Navigation.Item.Link href="/tokens">
          Tokens
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
    </NavigationHeader.Navigation.Item>
  </NavigationHeader.Navigation>
  <NavigationHeader.Actions>
    <Button>Sign in</Button>
  </NavigationHeader.Actions>
  <NavigationHeader.MenuButton label="Open menu" />
</NavigationHeader>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `NavigationHeader` | The bar. `children` is required. |
| `NavigationHeader.Logo` | The brand slot. |
| `NavigationHeader.Navigation` | The primary navigation landmark. `label` defaults to `"Primary navigation"`. |
| `NavigationHeader.Navigation.Item` | One top-level item. |
| `NavigationHeader.Navigation.Item.Group` | A column in the mega menu. `label` is the column heading. `featured` uses prominent type. |
| `NavigationHeader.Navigation.Item.Link` | A destination. |
| `NavigationHeader.Search` | A [search dialog](./search-dialog.md). Same props as `SearchDialog`. |
| `NavigationHeader.Actions` | Actions at the end of the bar. |
| `NavigationHeader.Social` | A landmark of icon links. `label` is its accessible name. |
| `NavigationHeader.Social.Link` | One icon link. `href`, `label`, and `icon` are required. |
| `NavigationHeader.MenuButton` | Opens the compact menu. `label` defaults to `"Navigation menu"`. |

## Link fields

An item or link can set:

| Field | Purpose |
| --- | --- |
| `href` | The destination URL. |
| `target` | The link target. |
| `external` | Marks the destination as external. |
| `active` | Marks the current item. |
| `featured` | Uses prominent type. |
| `onPress` | A press handler. The same type as `Link`'s `onPress`. |

The compact menu stays mounted while it is closed. It is marked `inert`, so the hidden links leave the tab order and the accessibility tree. Reduced motion skips the 300 ms ease-out.

## Related pages

- [Footer](./footer.md)
- [Search dialog](./search-dialog.md)
- [Link](./link.md)
