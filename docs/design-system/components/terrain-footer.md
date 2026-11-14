---
title: Terrain Footer
description: Reference for the TerrainFooter block, a Footer with a wireframe terrain backdrop and a noise overlay.
documentType: reference
tags: [component, layout]
component:
  name: terrain-footer
  package: "@cyclone-ui/terrain-footer"
  stories:
    - title: Blocks/TerrainFooter
      file: components/terrain-footer/src/TerrainFooter.stories.tsx
---

# Terrain Footer

`TerrainFooter` is a footer block for a marketing page. It is a [Footer](./footer.md) with a wireframe terrain drawn behind the content and a low-opacity noise texture over it.

The terrain ripples slowly. The ripple stops when the device asks for reduced motion. The container leaves extra space above the content, so the terrain ridges show.

Use `TerrainFooter` for a decorative footer on a landing page. For a plain footer, use `Footer`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add terrain-footer
pnpm install
```

- **Files:** `FooterTerrain.tsx` and `TerrainFooter.tsx`. The CLI writes them to `<path>/terrain-footer/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Eyebrow Text](./eyebrow-text.md), [Footer](./footer.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Link](./link.md), and [Link Text](./link-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `react-native-svg`.

## Import

```tsx
import { TerrainFooter } from "@cyclone-ui/terrain-footer";
```

## Usage

`TerrainFooter` has the same parts as `Footer`.

```tsx
<TerrainFooter animate={false}>
  <TerrainFooter.Container>
    <TerrainFooter.BackgroundLogo>
      <Wordmark width="100%" />
    </TerrainFooter.BackgroundLogo>
    <TerrainFooter.Main>
      <TerrainFooter.Introduction>
        <TerrainFooter.Statement>Build with Cyclone</TerrainFooter.Statement>
        <TerrainFooter.Description>Tokens, components, and icons.</TerrainFooter.Description>
      </TerrainFooter.Introduction>
      <TerrainFooter.Navigation aria-label="Footer navigation">
        <TerrainFooter.Section>
          <TerrainFooter.Section.Title>Explore</TerrainFooter.Section.Title>
          <TerrainFooter.Section.Links>
            <TerrainFooter.Link href="/components">Components</TerrainFooter.Link>
          </TerrainFooter.Section.Links>
        </TerrainFooter.Section>
      </TerrainFooter.Navigation>
    </TerrainFooter.Main>
    <TerrainFooter.Rail>
      <TerrainFooter.Brand>
        <TerrainFooter.Copyright>© Storm Software</TerrainFooter.Copyright>
      </TerrainFooter.Brand>
    </TerrainFooter.Rail>
  </TerrainFooter.Container>
</TerrainFooter>
```

## Anatomy

```tsx
<TerrainFooter>
  <TerrainFooter.Container>
    <TerrainFooter.BackgroundLogo />
    <TerrainFooter.Main>
      <TerrainFooter.Introduction />
      <TerrainFooter.Action />
      <TerrainFooter.Navigation>
        <TerrainFooter.Section>
          <TerrainFooter.Section.Title />
          <TerrainFooter.Section.Links>
            <TerrainFooter.Link />
          </TerrainFooter.Section.Links>
        </TerrainFooter.Section>
      </TerrainFooter.Navigation>
    </TerrainFooter.Main>
    <TerrainFooter.Rail>
      <TerrainFooter.Brand />
      <TerrainFooter.LegalNavigation />
    </TerrainFooter.Rail>
  </TerrainFooter.Container>
  {/* added by TerrainFooter: the terrain layer and the noise layer */}
</TerrainFooter>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `TerrainFooter` | A [`Footer`](./footer.md) (`<footer>`). After its children, it adds the terrain layer and, with `noise`, the noise layer. | The frame. It accepts the `Footer` props, such as `variant`. |
| Terrain layer | `FooterTerrain`: a Tamagui `View` (absolute, fills the footer, `zIndex` 20, no pointer events, `aria-hidden`) with a `react-native-svg` `Svg` (`viewBox` 1600 × 780, stretched, at least 800 px wide) | A triangle mesh of hills, drawn with a 0.7 px stroke in the theme `primary` color at 10% opacity. It is not a part that you render. |
| Noise layer | A Tamagui `View` (absolute, fills the footer, `zIndex` 30, 2.5% opacity, no pointer events) with the `BackgroundNoise` vector | A fine grain over the footer. It is not a part that you render. |
| `TerrainFooter.Container` | `Footer.Container` with a top padding of 300 px (160 px below `md`) | The inner width. The top padding leaves space for the terrain ridges. |
| `TerrainFooter.Main`, `.Introduction`, `.Statement`, `.Description`, `.Action`, `.Navigation`, `.Section` (with `.Section.Title` and `.Section.Links`), `.Link`, `.Rail` (with `.Rail.Link`), `.Brand`, `.Copyright`, `.LegalNavigation`, `.BackgroundLogo` | The `Footer` part of the same name | See the [Footer anatomy](./footer.md#anatomy). |

`TerrainFooter` has no `SocialLinks` part. For social links, use `FooterSocialLinks` from `@cyclone-ui/footer`.

`TerrainFooterContainer`, `TerrainFooterMain`, `TerrainFooterBackgroundLogo`, `TerrainFooterIntroduction`, `TerrainFooterStatement`, `TerrainFooterDescription`, `TerrainFooterAction`, `TerrainFooterNavigation`, `TerrainFooterSection`, `TerrainFooterSectionTitle`, `TerrainFooterSectionLinks`, `TerrainFooterLink`, `TerrainFooterRail`, `TerrainFooterRailLink`, `TerrainFooterBrand`, `TerrainFooterCopyright`, and `TerrainFooterLegalNavigation` are also exported by name. Use them in React Server Components, which cannot read `TerrainFooter.Main` from a client module.

## Examples

The examples are the stories in [`TerrainFooter.stories.tsx`](../../../components/terrain-footer/src/TerrainFooter.stories.tsx). The footer has a background wordmark, a statement and a description, a pill link as the action, two link sections, and a rail with the brand, the copyright, and legal links.

| Stories | What they show |
| --- | --- |
| `Default` | The footer under a page of content sections. |
| `Compact` | The same page in the `mobile1` viewport, with the smaller top padding and one column. |
| `Wireframe` | The footer alone, without the page. |
| `Unanimated` | The footer alone with `animate={false}`. The terrain stays still. |
| `NoNoise` | The footer alone with `noise={false}`. It has no noise texture. |

## Props

`TerrainFooter` also accepts the props of [`Footer`](./footer.md#props), such as `variant`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `animate` | `boolean` | `true` | Plays the terrain ripple. Reduced motion keeps the terrain still. |
| `noise` | `boolean` | `true` | Overlays a low-opacity noise texture. |

## Behavior

- The ripple runs on `requestAnimationFrame` and updates the terrain path approximately 30 times per second.
- The footer reads the reduced-motion setting with `AccessibilityInfo` and follows changes to it. With reduced motion, the ripple stops and the terrain goes back to its rest shape.
- The terrain is the same on the server and on the client, so it does not change at hydration.

## Responsive behavior

Below the `md` breakpoint, the top padding of `TerrainFooter.Container` changes from 300 px to 160 px. The other parts follow the [Footer responsive behavior](./footer.md#responsive-behavior). The terrain stretches to the footer size and is at least 800 px wide.

## Accessibility

- The terrain is decorative. It is hidden from screen readers (`aria-hidden`, `accessibilityElementsHidden`, and `importantForAccessibility="no-hide-descendants"`).
- The terrain and the noise layers have no pointer events, so they do not block the links.
- The landmarks, headings, and focus styles are those of [Footer](./footer.md#accessibility).

## Related

- [Footer](./footer.md)
- [Topographic background](./topographic-background.md)
- [Navigation header](./navigation-header.md)

## Source

- [`components/terrain-footer/src/TerrainFooter.tsx`](../../../components/terrain-footer/src/TerrainFooter.tsx)
- [`components/terrain-footer/src/FooterTerrain.tsx`](../../../components/terrain-footer/src/FooterTerrain.tsx)
- [`components/terrain-footer/src/TerrainFooter.stories.tsx`](../../../components/terrain-footer/src/TerrainFooter.stories.tsx) (title: `Blocks/TerrainFooter`)
