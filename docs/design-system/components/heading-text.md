---
title: Heading Text
description: Six themed heading components from hero to extra small, and a HeadingText component that picks one from a level prop.
documentType: reference
tags: [component, heading-text, typography]
component:
  name: heading-text
  package: "@cyclone-ui/heading-text"
  stories:
    - title: Typography/HeadingText
      file: components/heading-text/src/HeadingText.stories.tsx
---

# Heading Text

The heading text package gives page and section titles a consistent size, weight, and color. It exports six level components and `HeadingText`, which chooses a level from the `level` prop. Each component renders a heading element and sets `role="heading"`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add heading-text
pnpm install
```

- **File:** `HeadingText.tsx`. The CLI writes it to `<path>/heading-text/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/get-font-sized`, and `@tamagui/text`.

## Import

```tsx
import {
  HeadingExtraSmallText,
  HeadingHeroText,
  HeadingLargeText,
  HeadingMediumText,
  HeadingSmallText,
  HeadingText,
  HeadingTitleText
} from "@cyclone-ui/heading-text";
```

## Usage

Use `HeadingText` with a `level`.

```tsx
<HeadingText level="hero">Build faster</HeadingText>
<HeadingText level={2} variant="editorial">Section title</HeadingText>
```

Or use a level component directly.

```tsx
<HeadingLargeText>Section title</HeadingLargeText>
```

## Anatomy

```tsx
<HeadingText level={2}>Section title</HeadingText>
// renders the same element as:
<HeadingLargeText>Section title</HeadingLargeText>
```

| Part                    | Renders                                                                   | Purpose                                                                 |
| ----------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `HeadingText`           | The level component that `level` selects. Without `level`, a Tamagui `SizableText` as `<span role="heading">` | Picks a level from one prop.                                            |
| `HeadingHeroText`       | A Tamagui `SizableText` as `<h1 role="heading">`                          | The largest title, for example a landing page hero.                    |
| `HeadingTitleText`      | A Tamagui `SizableText` as `<h1 role="heading">`                          | The page title.                                                         |
| `HeadingLargeText`      | A Tamagui `SizableText` as `<h2 role="heading">`                          | A section title.                                                        |
| `HeadingMediumText`     | A Tamagui `SizableText` as `<h3 role="heading">`                          | A subsection title.                                                     |
| `HeadingSmallText`      | A Tamagui `SizableText` as `<h4 role="heading">`                          | A small title.                                                          |
| `HeadingExtraSmallText` | A Tamagui `SizableText` as `<h5 role="heading">`                          | The smallest title.                                                     |

All parts use the `display` font family, or the `editorial` font family with `variant="editorial"`. See [Levels](#levels) for the size, weight, and color of each part.

## Examples

The examples are the stories in [`HeadingText.stories.tsx`](../../../components/heading-text/src/HeadingText.stories.tsx). Each story renders `HeadingText` with the same long text.

| Stories                                                                                                   | What they show                                                           |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `Base`                                                                                                    | `HeadingText` without a `level`: the base `span` style.                  |
| `HeadingHero`, `HeadingTitle`, `HeadingLarge`, `HeadingMedium`, `HeadingSmall`, `HeadingExtraSmall`       | The `level` values `"hero"`, `"title"`, `"lg"`, `"md"`, `"sm"`, and `"xs"` in the `base` variant. |
| `EditorialHero`, `EditorialTitle`, `EditorialLarge`, `EditorialMedium`, `EditorialSmall`, `EditorialExtraSmall` | The same levels with `variant="editorial"`.                         |
| `Brand`, `Discovery`, `Danger`, `Warning`, `Info`, `Success`                                              | The base style in the `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |

## Props

All components accept the props of `SizableText`. The exported type is `HeadingTextProps`. They add the `variant` prop. `HeadingText` also adds `level`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"base" \| "editorial"` | `"base"` | Sets the font family. `base` uses `display`. `editorial` uses `editorial`. |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| "hero" \| "title" \| "lg" \| "md" \| "sm" \| "xs"` | None | Only on `HeadingText`. Selects the level component. |

Without a `level`, `HeadingText` renders the base style. The base style is a `span` with `role="heading"`, font size and line height `xl` (`lg` below the `sm` breakpoint), weight `semibold`, and color `primary`.

## Levels

The font size and line height become smaller below the `sm` breakpoint (`max-sm`). The value in parentheses is the `max-sm` value.

| Component | `level` values | Element | Font size | Line height | Weight | Color |
| --- | --- | --- | --- | --- | --- | --- |
| `HeadingHeroText` | `"hero"` | `h1` | `5xl` (`3xl`) | `5xl` (`3xl`) | `semibold` | `primary` |
| `HeadingTitleText` | `1`, `"title"` | `h1` | `3xl` (`2xl`) | `3xl` (`2xl`) | `semibold` | `primary` |
| `HeadingLargeText` | `2`, `"lg"` | `h2` | `3xl` (`2xl`) | `3xl` (`2xl`) | `semibold` | `emphasis` |
| `HeadingMediumText` | `3`, `"md"` | `h3` | `xl` (`lg`) | `xl` (`lg`) | `bold` | `emphasis` |
| `HeadingSmallText` | `4`, `"sm"` | `h4` | `lg` (`md`) | `sm` | `semibold` | `emphasis` |
| `HeadingExtraSmallText` | `5`, `"xs"` | `h5` | `md` (`sm`) | `xs` | `semibold` | `emphasis` |

## Variants and states

The `variant` prop sets the font family. The stories show each level in both variants, and the base style in the `brand` and status themes.

## Accessibility

- Each level renders its matching `h1` to `h5` element.
- Choose a level that matches the page structure. A visual level and an `h1` to `h5` element are one choice here: `level` 1 and `"hero"` both render `h1`.

## Related

- [Eyebrow Text](./eyebrow-text.md)
- [Body Text](./body-text.md)
- [Anchor](./anchor.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/heading-text/src/HeadingText.tsx`](../../../components/heading-text/src/HeadingText.tsx)
- [`components/heading-text/src/HeadingText.stories.tsx`](../../../components/heading-text/src/HeadingText.stories.tsx) (title: `Typography/HeadingText`)
