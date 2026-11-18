---
title: Font Preview
description: Reference for the Font Preview component, a font specimen that shows each weight and style of a font in text the reader types, at a size they choose.
documentType: reference
tags: [component, text, font-preview, font, typography, specimen]
component:
  name: font-preview
  package: "@cyclone-ui/font-preview"
  stories:
    - title: Text/FontPreview
      file: components/font-preview/src/FontPreview.stories.tsx
---

# Font Preview

`FontPreview` is a font specimen. It shows one labeled row for each weight and style of a font in the Tamagui config, such as `Regular 400`, `Regular 400 Italic` or `Black 900`. Above the rows are three controls:

- A text input labeled "Type here to preview text". Every row shows what the reader types, or `sampleText` while the input is empty.
- A size select of preset pixel sizes.
- A slider for any size between the smallest and largest preset.

The select and the slider set the same size, so moving one updates the other.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add font-preview
pnpm install
```

- **File:** `FontPreview.tsx`. The CLI writes it to `<path>/font-preview/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Field](./field.md), [Form](./form.md), [Input](./input.md), [Select](./select.md), [Slider](./slider.md) and the components they copy.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/stacks`.

## Import

```tsx
import { FontPreview } from "@cyclone-ui/font-preview";
```

## Usage

Pass the name of a font in the Tamagui config. Without `styles`, the rows are the faces the font declares:

```tsx
<FontPreview fontFamily="editorial" />
```

To show only some weights and styles, list them:

```tsx
<FontPreview
  fontFamily="editorial"
  defaultSize={120}
  styles={[
    { weight: 400 },
    { weight: 400, italic: true },
    { weight: 800 },
    { weight: 800, italic: true }
  ]}
/>
```

`FontPreview` holds its own `Form`, so do not place it inside another form.

## Examples

| Stories | What they show |
| --- | --- |
| `Base` | Every face of the `editorial` font (Storm Serif). The play function types into the input, checks that each row shows the text, and moves the slider to check that the size select follows. |
| `Styles` | Four chosen styles at 120px, as in a specimen of a display face. |
| `Body` | The `body` font (Storm Sans) with a short list of preset sizes. |

## Props

`FontPreview` also accepts the props of a Tamagui `YStack`, except `children`. They apply to its outer frame, which is `100%` wide by default.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `fontFamily` | `FontTokens` | `"body"` | The font to preview: a font in the Tamagui config. |
| `styles` | `FontPreviewStyle[]` | The font's faces | The weights and styles to show, one row each. |
| `sizes` | `number[]` | `[8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280]` | The preset sizes, in pixels, of the size select. The smallest and largest also set the slider's range. |
| `defaultSize` | `number` | `64` | The size, in pixels, that the rows start at. |
| `sampleText` | `string` | `"The quick brown fox jumps over the lazy dog"` | The text the rows show while the input is empty. It is also the input's placeholder. |

### `FontPreviewStyle`

| Field | Type | Description |
| --- | --- | --- |
| `weight` | `number` | The numeric font weight, such as `400`. |
| `italic` | `boolean` | Whether the row uses the italic style. |
| `label` | `string` | The row's label. Defaults to the weight's name, its number and `Italic` for an italic row, such as `SemiBold 600 Italic`. |

The package also exports the `FontPreviewProps` type and these helpers:

- `getFontPreviewStyles(fontFamily)` returns the default rows of a font in the config (see [Behavior](#behavior)).
- `getFontStyleLabel(style)` returns a row's label.

## Behavior

- **Default rows.** For a font with a `face` map in its `createFont` definition, there is one row for each weight the map declares, from lightest to heaviest. `createFont` fills in the weights the map leaves out, by repeating the face before them; those repeated weights get no row. A weight with an `italic` face gets an italic row right after its upright one. A font without faces gets one upright row for each distinct value in its `weight` map. A font that is not in the config gets Regular 400 and Bold 700, each upright and italic.
- **Weight names.** Labels use the common CSS names: Thin (100), ExtraLight (200), Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800) and Black (900). Any other weight shows only its number.
- **Size.** The size is stored once, in the component's form. When the slider picks a size that is not a preset, the select lists that size as well, so it can show it. Each row's line height is 1.25 times the size.
- **Wrapping.** Long text wraps, and words too wide for a row break. Each row clips anything that still overflows, so a large size does not widen the page.
- **Accessibility.** The text input and the size select are labeled fields. The slider thumb is named "Font size", and its value is read in pixels, such as "120px".

## Related

- [Body Text](./body-text.md)
- [Heading Text](./heading-text.md)
- [Slider](./slider.md)
- [Select](./select.md)
- [Fonts](../fonts/index.md)

## Source

- [`components/font-preview/src/FontPreview.tsx`](../../../components/font-preview/src/FontPreview.tsx)
- [`components/font-preview/src/FontPreview.stories.tsx`](../../../components/font-preview/src/FontPreview.stories.tsx) (title: `Text/FontPreview`)
