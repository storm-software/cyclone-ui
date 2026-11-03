---
title: Footer
description: Reference for the Footer component, a responsive site footer layout with navigation and a bottom rail.
documentType: reference
tags: [component, layout]
---

# Footer

`Footer` is a site footer for a marketing or documentation page. Compose an introduction, an action, navigation sections, and a bottom rail.

On wide screens the introduction, action, and navigation sit side by side, and the rail spreads across one row. Below the `md` breakpoint they stack into one column.

For the footer with the wireframe terrain backdrop, use [TerrainFooter](./terrain-footer.md). It is built on `Footer`.

Source: [`components/footer`](https://github.com/storm-software/cyclone-ui/tree/main/components/footer)

## Import

```tsx
import { Footer } from "@cyclone-ui/footer";
```

## Usage

```tsx
<Footer>
  <Footer.Container>
    <Footer.Main>
      <Footer.Introduction>
        <Footer.Statement>Build with Cyclone</Footer.Statement>
        <Footer.Description>Tokens, components, and icons.</Footer.Description>
        <Footer.Action>
          <Button>Get started</Button>
        </Footer.Action>
      </Footer.Introduction>
      <Footer.Navigation>
        <Footer.Section>
          <Footer.Section.Title>Product</Footer.Section.Title>
          <Footer.Section.Links>
            <Footer.Link href="/tokens">Tokens</Footer.Link>
          </Footer.Section.Links>
        </Footer.Section>
      </Footer.Navigation>
    </Footer.Main>
    <Footer.Rail>
      <Footer.Brand>Storm</Footer.Brand>
      <Footer.Copyright>© Storm Software</Footer.Copyright>
      <Footer.LegalNavigation>
        <Footer.Rail.Link href="/license">License</Footer.Rail.Link>
      </Footer.LegalNavigation>
    </Footer.Rail>
  </Footer.Container>
</Footer>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `Footer` | The frame. |
| `Footer.Container` | The inner width. |
| `Footer.Main` | The introduction and navigation. |
| `Footer.Introduction`, `Statement`, `Description`, `Action` | The lead column. |
| `Footer.Navigation` | The link columns. |
| `Footer.Section`, `Section.Title`, `Section.Links` | One column. |
| `Footer.Link` | A link. Hovering one link mutes the others. |
| `Footer.BackgroundLogo` | A logo behind the content. |
| `Footer.Rail` | The bottom row. |
| `Footer.Rail.Link` | A link in the rail. |
| `Footer.Brand`, `Footer.Copyright`, `Footer.LegalNavigation` | Brand, copyright, and legal links. |

## Props

`Footer` accepts the props of its frame. It has no props of its own.

## Related pages

- [Terrain footer](./terrain-footer.md)
- [Navigation header](./navigation-header.md)
- [Page](./page.md)
