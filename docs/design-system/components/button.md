---
title: Button
description: Reference for the Button component, a pressable control with variants, sizes, cascade hover effects, and a ripple.
documentType: reference
tags: [component, triggers, button, action]
component:
  name: button
  package: "@cyclone-ui/button"
  stories:
    - title: Triggers/Button
      file: components/button/src/Button.stories.tsx
---

# Button

`Button` is the main pressable control of the design system. It has text and icon parts, many visual variants, three named sizes, and a ripple on press.

Use it for actions. To style a button as a link, set `variant="link"`. To render a real anchor, set `render="a"` and `href`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add button
pnpm install
```

- **File:** `Button.tsx`. The CLI writes it to `<path>/button/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/helpers`, `@tamagui/stacks`, and `@tamagui/text`.

## Import

```tsx
import { Button } from "@cyclone-ui/button"
```

## Usage

```tsx
<Button variant="primary" theme="brand" onPress={save}>
  <Button.Text>Save</Button.Text>
</Button>

<Button circular={true} variant="ghost" aria-label="Close">
  <Button.Icon>
    <X />
  </Button.Icon>
</Button>
```

## Anatomy

```tsx
<Button>
  <Button.Icon>{icon}</Button.Icon>
  <Button.Text>Label</Button.Text>
</Button>
```

| Part          | Renders                                         | Purpose                                                                                                                         |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `Button`      | A Tamagui `View` as `<button role="button">`     | The frame. It holds the variant, size, and disabled state and shares them with its parts. Container variants draw a `Container` layer under the parts. A ripple layer is added for every variant except `link`. |
| `Button.Text` | A Tamagui `Text` as `<span>`                     | The label. Its color follows the variant and the hover state.                                                                   |
| `Button.Icon` | A Tamagui `View`                                | Holds an icon. It sizes the icon from the button size and colors it from the variant.                                         |

With `tooltip`, the frame is the trigger of a `Tooltip`. With `render="a"`, the frame renders an anchor.

`ButtonText` and `ButtonIcon` are also exported by name. Use them in React Server Components, which cannot read `Button.Text` from a client module.

## Examples

The examples are the stories in [`Button.stories.tsx`](../../../components/button/src/Button.stories.tsx).

| Stories                                                                                                  | What they show                                                                 |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Default`, `Brand`, `Animated`                                                                          | A text button, the `brand` theme, and the press animation.                     |
| `Icon`, `WithTooltip`                                                                                   | An icon-only button, and a circular ghost button with a `tooltip`.             |
| `Rounded`, `Circular`, `NoPadding`                                                                      | The `rounded`, `circular`, and `tight` shapes.                                 |
| `Sizes`, `Sized`, `SizedIcon`                                                                           | The `sm`, `md`, and `lg` sizes, and the raw size token `13xl`.                 |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `Sunken`, `Canvas`, `Surface`, `Elevated`, `Floating`  | Each container variant.                                                        |
| `Raised`, `Flat`, `Accented`, `Glass`, `Noise`                                                          | `shadowStyle`, `accented`, `glass`, and `noise`.                               |
| `Cascade`, `DoubleCascade`, `DiagonalCascade`, `DoubleDiagonalCascade`, `ReverseCascade`, `ReverseDoubleCascade` | The cascade hover variants.                                                    |
| `Ghost`, `Link`, `Disabled`                                                                             | The `ghost` and `link` variants, and a disabled primary button.                |
| `Danger` through `DangerDisabled`, and the same set for `Warning`, `Success`, `Info`, and `Discovery`  | Each status theme on the default, primary, secondary, tertiary, outlined, cascade, ghost, link, and disabled buttons. |

## Props

`Button` also accepts the props of a Tamagui `View` (except `size`).

| Prop           | Type                                   | Default      | Description                                                                                                                                                                                                                                                                                |
| -------------- | -------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variant`      | `ButtonVariant`                        | `"tertiary"` | The visual style. See [Variants](#variants).                                                                                                                                                                                                                                               |
| `size`         | `"sm" \| "md" \| "lg"` or a size token | `"md"`       | `sm`, `md`, and `lg` also scale the text and icon. A raw size token (such as `13xl`) is also allowed.                                                                                                                                                                                      |
| `theme`        | theme name                             | -            | The color theme. The stories use `brand`, `danger`, `warning`, `success`, and `info`.                                                                                                                                                                                                      |
| `disabled`     | `boolean`                              | `false`      | Disables the button. Presses are ignored.                                                                                                                                                                                                                                                  |
| `circular`     | `boolean`                              | `false`      | Makes the button a circle.                                                                                                                                                                                                                                                                 |
| `rounded`      | `boolean`                              | `false`      | Fully rounds the left and right sides.                                                                                                                                                                                                                                                     |
| `ringed`       | `boolean`                              | `false`      | Adds a ringed outline.                                                                                                                                                                                                                                                                     |
| `tight`        | `boolean`                              | `false`      | Removes the default padding.                                                                                                                                                                                                                                                               |
| `shadowStyle`  | `"raised" \| "elevated" \| "flat" \| "none"`     | `"none"`     | The `Container` shadow under the button.                                                                                                                                                                                                                                                   |
| `glass`        | `boolean`                              | `false`      | Turns a container variant's background into translucent frosted glass.                                                                                                                                                                                                                     |
| `noise`        | `boolean`                              | `false`      | Overlays a fine film grain on a container variant's background.                                                                                                                                                                                                                            |
| `accented`     | `boolean`                              | `false`      | Draws a container variant's border in the `primary` color.                                                                                                                                                                                                                                 |
| `animate`      | `boolean`                              | `true`       | Applies the scale animation on press.                                                                                                                                                                                                                                                      |
| `unstyled`     | `boolean`                              | `false`      | Removes the default styles.                                                                                                                                                                                                                                                                |
| `borderRadius` | radius token                           | `"button"`   | The radius of the border.                                                                                                                                                                                                                                                                  |
| `color`        | color token or string                  | -            | Overrides the text color.                                                                                                                                                                                                                                                                  |
| `onPress`      | `(event) => void`                      | -            | Called on press.                                                                                                                                                                                                                                                                           |
| `onClick`      | `(event?) => void`                     | -            | Another way to set a press handler. It runs after `onPress`.                                                                                                                                                                                                                               |
| `href`         | `string`                               | -            | The URL for the button when it renders as an anchor (`render="a"`).                                                                                                                                                                                                                        |
| `download`     | `boolean`                              | -            | Makes the anchor a download link.                                                                                                                                                                                                                                                          |
| `ghostOpacity` | `number`                               | `0.5`        | The opacity of the ghost background on hover.                                                                                                                                                                                                                                              |
| `render`       | element name                           | -            | The element to render. The press handler calls `preventDefault` unless this is `"a"`.                                                                                                                                                                                                      |
| `tooltip`      | `string`                               | -            | Describes what pressing the button does (for example `"Close dialog"`). It shows in a `Tooltip` after the pointer rests on the button for 1 second, or right away on keyboard focus. Touch screens (a coarse primary pointer) never show it. It is also the `aria-label` when none is set. |

## Variants

| Variant                                                                  | Notes                                                                                           |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `primary`                                                                |                                                                                                 |
| `secondary`                                                              |                                                                                                 |
| `tertiary`                                                               | The default.                                                                                    |
| `outlined`                                                               |                                                                                                 |
| `sunken`, `canvas`, `surface`, `elevated`, `floating`                    | Neutral surface fills, matching the `Container` variants of the same name.                      |
| `ghost`                                                                  | Shows a background on hover.                                                                    |
| `link`                                                                   | Has no ripple.                                                                                  |
| `cascade`                                                                | On hover, a fill slides in from the left. The frame has a 3 px border that becomes 1 px.        |
| `cascade-top`, `cascade-left`, `cascade-bottom`, `cascade-right`         | The fill enters from that side.                                                                 |
| `double-cascade`                                                         | Two fills slide in. One moves more slowly.                                                      |
| `diagonal-cascade`, `diagonal-cascade-top`, `-left`, `-bottom`, `-right` | A diagonal fill.                                                                                |
| `double-diagonal-cascade`                                                | Two diagonal fills.                                                                             |
| `reverse-<cascade variant>`                                              | The reverse of any cascade variant above. The frame starts filled and the fill leaves on hover. |

The `primary` through `floating` variants are the [`Container`](./container.md) variants: a `Container` layer under the label draws their background and border, and switches to the variant's hovered background while the button is hovered. `glass`, `noise`, and `accented` apply to these variants only. The button still colors its own text and icons.

## Sizes

The `sm`, `md`, and `lg` sizes map to control size tokens. The `Sizes` story shows all three. A raw size token such as `13xl` is allowed. See [Design tokens](../tokens/index.md).

## States

- **Default, hover, press.** Variants change color on hover and press. Cascade variants animate their border and fill.
- **Pressed animation.** A scale animation plays on press unless `animate={false}`.
- **Ripple.** A ripple plays on press for every variant except `link`.
- **Disabled.** Presses are ignored. The ripple, `onPress`, and `onClick` do not run.

## Accessibility

For an icon-only button, set an accessible name, for example `aria-label`. The component passes `aria-*` attributes to the rendered element.

## Related

- [Link](./link.md)
- [Alert](./alert.md), which uses `Button` for its close control
- [Design tokens](../tokens/index.md)

## Source

- [`components/button/src/Button.tsx`](../../../components/button/src/Button.tsx)
- [`components/button/src/Button.stories.tsx`](../../../components/button/src/Button.stories.tsx) (title: `Triggers/Button`)
