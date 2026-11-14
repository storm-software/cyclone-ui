---
title: Footer
description: Reference for the Footer component, a responsive site footer layout with navigation and a bottom rail.
documentType: reference
tags: [component, layout]
component:
  name: footer
  package: "@cyclone-ui/footer"
  stories:
    - title: Layouts/Footer
      file: components/footer/src/Footer.stories.tsx
---

# Footer

`Footer` is a site footer for a marketing or documentation page. Compose an introduction, an action, navigation sections, social links, and a bottom rail with the brand, the copyright, and legal links.

On wide screens the introduction, the action, and the navigation sit side by side, and the rail spreads across one row. Below the `md` breakpoint they stack into one column.

Use `Footer` at the bottom of a site page. For the same footer with a wireframe terrain backdrop, use [TerrainFooter](./terrain-footer.md), which is built on `Footer`. For the top of the page, use [Navigation header](./navigation-header.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add footer
pnpm install
```

- **File:** `Footer.tsx`. The CLI writes it to `<path>/footer/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Eyebrow Text](./eyebrow-text.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Link](./link.md), and [Link Text](./link-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Footer } from "@cyclone-ui/footer";
```

## Usage

```tsx
<Footer variant="secondary">
  <Footer.Container>
    <Footer.Main>
      <Footer.Introduction>
        <Footer.Statement>Build with Cyclone</Footer.Statement>
        <Footer.Description>Tokens, components, and icons.</Footer.Description>
      </Footer.Introduction>
      <Footer.Action>
        <Button variant="primary">
          <Button.Text>Get started</Button.Text>
        </Button>
      </Footer.Action>
      <Footer.Navigation aria-label="Footer navigation">
        <Footer.Section>
          <Footer.Section.Title>Product</Footer.Section.Title>
          <Footer.Section.Links>
            <Footer.Link href="/tokens">Tokens</Footer.Link>
          </Footer.Section.Links>
        </Footer.Section>
      </Footer.Navigation>
    </Footer.Main>
    <Footer.Rail>
      <Footer.Brand>
        <Logo />
        <Footer.Copyright>© Storm Software</Footer.Copyright>
      </Footer.Brand>
      <Footer.LegalNavigation aria-label="Legal">
        <Footer.Rail.Link href="/license">License</Footer.Rail.Link>
      </Footer.LegalNavigation>
    </Footer.Rail>
  </Footer.Container>
</Footer>
```

## Anatomy

```tsx
<Footer>
  <Footer.Container>
    <Footer.BackgroundLogo />
    <Footer.Main>
      <Footer.Introduction>
        <Footer.Statement />
        <Footer.Description />
      </Footer.Introduction>
      <Footer.Action />
      <Footer.SocialLinks />
      <Footer.Navigation>
        <Footer.Section>
          <Footer.Section.Title />
          <Footer.Section.Links>
            <Footer.Link />
          </Footer.Section.Links>
        </Footer.Section>
      </Footer.Navigation>
    </Footer.Main>
    <Footer.Rail>
      <Footer.Brand>
        <Footer.Copyright />
      </Footer.Brand>
      <Footer.LegalNavigation>
        <Footer.Rail.Link />
      </Footer.LegalNavigation>
    </Footer.Rail>
  </Footer.Container>
</Footer>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Footer` | A Tamagui `View` as `<footer>`, full width, with a top border and hidden overflow | The frame. `variant` sets the background and the border color. It also tracks which `Footer.Link` is hovered. |
| `Footer.Container` | A Tamagui `View`, at most 1440 px wide and centered, with `position: relative` and `zIndex` 10 | The inner width and padding. It stacks the main area and the rail. |
| `Footer.Main` | A Tamagui `View` row (a column below `md`) | Holds the introduction, the action, the social links, and the navigation. |
| `Footer.Introduction` | A Tamagui `View` column, up to 400 px wide (full width below `md`) | The lead column. |
| `Footer.Statement` | `HeadingSmallText` as `<h2>`, uppercase, in `primary` | The headline. |
| `Footer.Description` | `BodyText` as `<p>`, in `primary` at 85% opacity, at most 560 px wide | The supporting text. |
| `Footer.Action` | A Tamagui `View` that grows and centers its content (aligns it to the start below `md`) | A call to action between the introduction and the navigation. |
| `Footer.SocialLinks` | A Tamagui `View` as `<nav>`, laid out with CSS grid | Social icon links. Put it between `Introduction` and `Navigation`. |
| `Footer.Navigation` | A Tamagui `View` as `<nav>`, a wrapping row at most 760 px wide | The link columns. |
| `Footer.Section` | A Tamagui `View` column, at least 120 px wide (132 px below `md`) | One link column. |
| `Footer.Section.Title` | `EyebrowText` as `<h3>` | The column heading. |
| `Footer.Section.Links` | A Tamagui `View` column | The links of a column. |
| `Footer.Link` | A [`Link`](./link.md) with no underline, in `primary` at 85% opacity | A footer link. On hover it moves 3 px to the right and the other footer links dim. |
| `Footer.BackgroundLogo` | A Tamagui `View`, at most 1440 px wide, at 18% opacity, faded toward the bottom, with no pointer events | An oversized wordmark behind the content that runs off the bottom edge. It stretches its children to the content width. |
| `Footer.Rail` | A Tamagui `View` row (a column below `md`) with a `hairline` top border | The bottom row. |
| `Footer.Rail.Link` | A `Footer.Link` with `underline="none"` | A link in the rail. |
| `Footer.Brand` | A Tamagui `View`, a wrapping row | The brand mark and the copyright. |
| `Footer.Copyright` | `BodyText` as `<span>`, small, in `subtle` | The copyright line. |
| `Footer.LegalNavigation` | A Tamagui `View` as `<nav>`, a wrapping row | Legal links. |

`FooterContainer`, `FooterMain`, `FooterBackgroundLogo`, `FooterIntroduction`, `FooterStatement`, `FooterDescription`, `FooterAction`, `FooterNavigation`, `FooterSocialLinks`, `FooterSectionFrame` (`Footer.Section`), `FooterSectionTitle`, `FooterSectionLinks`, `FooterLink`, `FooterRail`, `FooterRailLink`, `FooterBrand`, `FooterCopyright`, and `FooterLegalNavigation` are also exported by name. Use them in React Server Components, which cannot read `Footer.Container` from a client module.

## Examples

The examples are the stories in [`Footer.stories.tsx`](../../../components/footer/src/Footer.stories.tsx). Each story renders the footer under a page of content sections. The footer has a statement and a description, a pill link as the action, two link sections in a `Footer navigation` landmark, and a rail with the brand, the copyright, and a `Legal` landmark. The links are the shared [`Link`](./link.md) component.

| Stories | What they show |
| --- | --- |
| `Base` | The default footer (`tertiary`). |
| `Primary`, `Secondary`, `Tertiary` | Each `variant`. |
| `Compact` | The `mobile1` viewport, where the parts stack into one column. |

## Props

`Footer` also accepts the props of a Tamagui `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"primary" \| "secondary" \| "tertiary"` | `"tertiary"` | The background and the top border. `primary` uses the `primary` background and no visible border. `secondary` uses the `secondary` background and the `border` color. `tertiary` uses the `surface` background and the `hairline` color. |

The parts accept the props of the component they are built on (see [Anatomy](#anatomy)). Each part exports its props type, such as `FooterSectionProps` and `FooterLinkProps`.

## Responsive behavior

| Screen | Layout |
| --- | --- |
| `xl` and up | The introduction, the action, and the navigation sit in one row. `SocialLinks` is one row after the navigation. The rail is one row. |
| `md` to `xl` | The same layout. `SocialLinks` becomes a grid of two columns. |
| Below `md` | `Main` and `Rail` stack into one column. The introduction, the action, and the navigation take the full width. `SocialLinks` becomes a centered row under the introduction. The container has less padding. |

## Accessibility

- **Landmarks.** The frame is a `<footer>`. `Navigation`, `LegalNavigation`, and `SocialLinks` are `<nav>` landmarks. Give each one an `aria-label`, such as `"Footer navigation"` and `"Legal"`, so that screen-reader users can tell them apart.
- **Headings.** `Statement` is an `<h2>`. Each `Section.Title` is an `<h3>`.
- **Focus.** `Footer.Link` and `Footer.Rail.Link` show a 2 px `primary` outline, 3 px from the link, on keyboard focus.
- **Background logo.** `BackgroundLogo` does not set `aria-hidden`. If the logo is decorative, hide it from screen readers yourself.

## Related

- [Terrain footer](./terrain-footer.md)
- [Navigation header](./navigation-header.md)
- [Link](./link.md)
- [Page](./page.md)

## Source

- [`components/footer/src/Footer.tsx`](../../../components/footer/src/Footer.tsx)
- [`components/footer/src/Footer.stories.tsx`](../../../components/footer/src/Footer.stories.tsx) (title: `Layouts/Footer`)
