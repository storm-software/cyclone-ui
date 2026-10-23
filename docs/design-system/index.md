---
title: "Cyclone UI design system"
description: "Overview of the Cyclone UI design system: tokens, fonts, icons, and components, with links to each section and guide."
documentType: getting-started
tags: [design-system, overview]
---

# Cyclone UI design system

Cyclone UI is a set of design components for [Tamagui](https://tamagui.dev), made by Storm Software. The components are for web and React Native. Like shadcn/ui, you copy the components into your app with the Cyclone CLI.

This section describes the parts of the design system that you use to build an interface.

## Sections

| Section | What you find there |
| --- | --- |
| [Tokens](./tokens/index.md) | Named values for color, type, spacing, size, radius, shadow, and motion. |
| [Fonts](./fonts/index.md) | The font families [Storm Sans](./fonts/storm-sans.md) and [Storm Serif](./fonts/storm-serif.md). |
| [Icons](./icons/index.md) | 1512 icon components from the Phosphor collection. |
| [Components](./components/index.md) | One page for each component in the `components` folder. |

### Tokens

| Page | Contents |
| --- | --- |
| [Overview](./tokens/index.md) | Primitive and semantic tokens, source of truth, themes, and how to use tokens. |
| [Color palettes](./tokens/colors.md) | `black`, `white`, and 8 palettes. |
| [Semantic colors](./tokens/semantic-colors.md) | Color roles in light and dark. |
| [Color states](./tokens/color-states.md) | Hovered, active, inactive, and disabled colors. |
| [Typography](./tokens/typography.md) | Font roles, sizes, line heights, weights, and letter spacing. |
| [Sizes](./tokens/sizes.md) and [Spacing](./tokens/spacing.md) | The size and spacing scales. |
| [Shape and effects](./tokens/shape-and-effects.md) | Radius, shadows, blur, focus rings, and z-index. |
| [Motion](./tokens/motion.md) | Durations and easing. |

## How the parts fit together

1. **Tokens** hold the values. The source is JSON in `packages/tokens/src/tokens`. Razorwind generates CSS variables, JavaScript values, and a Tamagui config from it.
2. **Fonts** supply the typefaces. A typography token chooses a family for each text role.
3. **Components** use token names and theme keys. Example: the Button uses `fontFamily: "display"` and `color: "primary"`.
4. **Icons** are components. They take their color from the theme and their size from the size tokens.

## Guides

- [Adopt Cyclone UI in your app](./guides/adopt-cyclone-ui.md): copy the Button component, set up the Tamagui theme, and render the component.
- [How themes and tokens are generated](./guides/how-themes-and-tokens-are-generated.md): follow a token from the JSON source to the generated files.

## Rules that apply to all sections

- Choose a semantic token before a primitive token.
- Do not edit generated files. Change the token JSON or `razorwind.config.ts`, then run `pnpm nx run monorepo:generate-themes`.
- The project is in its initial development phase. Expect changes to names and values.

## Related documentation

- [Library packages](../packages/index.md)
