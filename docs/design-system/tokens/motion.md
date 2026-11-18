---
title: "Motion tokens"
description: "Duration and easing tokens for transitions in Cyclone UI."
documentType: reference
tags: [tokens, motion, duration, easing]
---

# Motion tokens

Motion tokens set how long a transition runs and how it speeds up or slows down. Source: [`primitives/tokens.json`](../../../packages/tokens/src/tokens/primitives/tokens.json).

## Durations

CSS variable pattern: `--storm-durations-<name>`.

| Name | Token | Source value | CSS value | Purpose |
| --- | --- | --- | --- | --- |
| `instant` | `durations.instant` | 0ms | `0s` | Instant duration |
| `short` | `durations.short` | 100ms | `0.1s` | Short duration |
| `medium` | `durations.medium` | 300ms | `0.3s` | Medium duration |
| `long` | `durations.long` | 600ms | `0.6s` | Long duration |

## Easing

CSS variable pattern: `--storm-ease-<name>`.

| Name | Token | Source value (x1, y1, x2, y2) | CSS value |
| --- | --- | --- | --- |
| `in` | `ease.in` | `[0.4, 0, 1, 1]` | `cubic-bezier(0.4, 0, 1, 1)` |
| `out` | `ease.out` | `[0, 0, 0.2, 1]` | `cubic-bezier(0, 0, 0.2, 1)` |
| `in-out` | `ease.in-out` | `[0.4, 0, 0.2, 1]` | `cubic-bezier( 0.4, 0, 0.2, 1 )` |

## Example

```css
.panel {
  transition: opacity var(--storm-durations-medium) var(--storm-ease-out);
}
```

## Related pages

- [Shape and effects](./shape-and-effects.md)
- [Tokens overview](./index.md)
