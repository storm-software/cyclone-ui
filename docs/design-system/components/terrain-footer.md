---
title: TerrainFooter
description: Reference for the TerrainFooter block, a Footer with a wireframe terrain backdrop and a noise overlay.
documentType: reference
tags: [component, layout]
---

# TerrainFooter

`TerrainFooter` is a footer block for a marketing page. It is a [Footer](./footer.md) with a wireframe terrain drawn behind the content.

The terrain ripples subtly. It respects reduced motion. A low-opacity noise texture sits over the footer.

Source: [`components/terrain-footer`](https://github.com/storm-software/cyclone-ui/tree/main/components/terrain-footer)

## Import

```tsx
import { TerrainFooter } from "@cyclone-ui/terrain-footer";
```

## Usage

`TerrainFooter` has the same parts as `Footer`.

```tsx
<TerrainFooter animate={false}>
  <TerrainFooter.Container>
    <TerrainFooter.Main>
      <TerrainFooter.Introduction>
        <TerrainFooter.Statement>Build with Cyclone</TerrainFooter.Statement>
      </TerrainFooter.Introduction>
    </TerrainFooter.Main>
    <TerrainFooter.Rail>
      <TerrainFooter.Copyright>© Storm Software</TerrainFooter.Copyright>
    </TerrainFooter.Rail>
  </TerrainFooter.Container>
</TerrainFooter>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `TerrainFooter` | The `Footer` frame, the terrain, and the noise overlay. |
| `TerrainFooter.Container` | The inner width, with extra top padding so the terrain ridges show. |

The other parts are the [Footer](./footer.md#anatomy) parts.

## Props

| Prop | Default | Purpose |
| --- | --- | --- |
| `animate` | `true` | Plays the terrain ripple. Reduced motion keeps it still. |
| `noise` | `true` | Overlays a low-opacity noise texture. |

`TerrainFooter` also accepts the props of `Footer`.

`FooterTerrain` is exported separately. Its `animate` prop defaults to `true`.

## Related pages

- [Footer](./footer.md)
