---
title: Button
description: Reference for the Button component, a pressable control with variants, sizes, cascade hover effects, and a ripple.
documentType: reference
tags: [component, triggers, button, action]
---

# Button

`Button` is the main pressable control of the design system. It has text and icon parts, many visual variants, three named sizes, and a ripple on press.

Use it for actions. To style a button as a link, set `variant="link"`. To render a real anchor, set `render="a"` and `href`.

## Import

```tsx
import { Button } from "@cyclone-ui/button";
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

| Part          | Purpose                                      |
| ------------- | -------------------------------------------- |
| `Button`      | The frame. It holds the state and the variant. |
| `Button.Text` | The label.                                   |
| `Button.Icon` | An icon.                                     |

## Props

`Button` also accepts the props of a Tamagui `View` (except `size`).

| Prop           | Type                                       | Default      | Description                                                                 |
| -------------- | ------------------------------------------ | ------------ | --------------------------------------------------------------------------- |
| `variant`      | `ButtonVariant`                            | `"tertiary"` | The visual style. See [Variants](#variants).                                |
| `size`         | `"sm" \| "md" \| "lg"` or a size token     | `"md"`       | `sm`, `md`, and `lg` also scale the text and icon. A raw size token (such as `13xl`) is also allowed. |
| `theme`        | theme name                                 | -            | The color theme. The stories use `brand`, `danger`, `warning`, `success`, and `info`. |
| `disabled`     | `boolean`                                  | `false`      | Disables the button. Presses are ignored.                                   |
| `circular`     | `boolean`                                  | `false`      | Makes the button a circle.                                                  |
| `rounded`      | `boolean`                                  | `false`      | Fully rounds the left and right sides.                                      |
| `ringed`       | `boolean`                                  | `false`      | Adds a ringed outline.                                                      |
| `noPadding`    | `boolean`                                  | `false`      | Removes the default padding.                                                |
| `animate`      | `boolean`                                  | `true`       | Applies the scale animation on press.                                       |
| `unstyled`     | `boolean`                                  | `false`      | Removes the default styles.                                                 |
| `borderRadius` | radius token                               | `"button"`   | The radius of the border.                                                   |
| `color`        | color token or string                      | -            | Overrides the text color.                                                   |
| `onPress`      | `(event) => void`                          | -            | Called on press.                                                            |
| `onClick`      | `(event?) => void`                         | -            | Another way to set a press handler. It runs after `onPress`.                |
| `href`         | `string`                                   | -            | The URL for the button when it renders as an anchor (`render="a"`).         |
| `download`     | `boolean`                                  | -            | Makes the anchor a download link.                                           |
| `ghostOpacity` | `number`                                   | `0.5`        | The opacity of the ghost background on hover.                               |
| `render`       | element name                               | -            | The element to render. The press handler calls `preventDefault` unless this is `"a"`. |

## Variants

| Variant                      | Notes                                                                       |
| ---------------------------- | --------------------------------------------------------------------------- |
| `primary`                    |                                                                             |
| `secondary`                  |                                                                             |
| `tertiary`                   | The default.                                                                |
| `outlined`                   |                                                                             |
| `ghost`                      | Shows a background on hover.                                                |
| `link`                       | Has no ripple.                                                              |
| `cascade`                    | On hover, a fill slides in from the left. The frame has a 3 px border that becomes 1 px. |
| `cascade-top`, `cascade-left`, `cascade-bottom`, `cascade-right` | The fill enters from that side.                  |
| `double-cascade`             | Two fills slide in. One moves more slowly.                                  |
| `diagonal-cascade`, `diagonal-cascade-top`, `-left`, `-bottom`, `-right` | A diagonal fill.                    |
| `double-diagonal-cascade`    | Two diagonal fills.                                                         |
| `reverse-<cascade variant>`  | The reverse of any cascade variant above. The frame starts filled and the fill leaves on hover. |

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
