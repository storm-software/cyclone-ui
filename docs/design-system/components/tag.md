---
title: Tag
description: A compact label chip with text and icon parts. It takes the Container variants, circular, pressable, removable, and editable modes.
documentType: reference
tags: [component, tag, chip, label]
---

# Tag

`Tag` is a compact label chip. Use it to show a short keyword, status, or category. Make it pressable, removable, or editable when the user must act on it.

## Import

```tsx
import { Tag } from "@cyclone-ui/tag";
```

## Usage

```tsx
import { Tag } from "@cyclone-ui/tag";

export function Example() {
  return (
    <Tag
      variant="secondary"
      outlined
      removable
      removeButtonLabel="Remove design"
      onAfterRemove={() => console.log("removed")}>
      <Tag.Text>Design</Tag.Text>
    </Tag>
  );
}
```

## Parts

| Part | Role |
| --- | --- |
| `Tag` | The frame. It sets the variant, size, and mode for its children. |
| `Tag.Text` | The label. It reads the tag variant and size. |
| `Tag.Icon` | An icon sized to the tag. Pass the icon as its child. |
| `Tag.Button` | A round button inside the tag, with a press ripple. It has `alignLeft` and `alignRight` props that move it out of the tag edge. |

## Props

`TagProps` is the Tamagui frame props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | [Container](./container.md) variant | `"primary"` | The surface, drawn by a Container as on [Button](./button.md). See below. |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | `"none"` | The tag's shadow. `flat` also removes the border, including an `outlined` tag's. |
| `glass`, `accented` | `boolean` | `false` | The [Container](./container.md) options: frosted glass and a `primary` border. A tag is too small for `noise`. |
| `size` | `SizeTokens \| number` | `true` | Sets the padding. `Tag.Text` and `Tag.Icon` also follow it. |
| `outlined` | `boolean` | `false` | Deprecated: use `variant="outlined"`. Outlines the tag in the `primary` or `secondary` variant's color. |
| `circular` | `boolean` | `false` | Fully rounds the tag. The `Rounded` story uses this prop. |
| `pressable` | `boolean` | `false` | Makes the tag focusable with `role="button"` and a press ripple. |
| `removable` | `boolean` | `false` | Adds a remove button after the children. |
| `removeButtonLabel` | `string` | `"Remove"` | The accessible label of the remove button. |
| `onBeforeRemove` | `() => boolean` | — | Called before removal. The tag is removed only when it returns `true`. |
| `onAfterRemove` | `() => void` | — | Called after the exit animation ends. |
| `editable` | `boolean` | `false` | Double-click turns a plain-text `Tag.Text` into a text box. |
| `editInputLabel` | `string` | `"Edit tag"` | The accessible label of the text box. |
| `onEdit` | `(value: string) => void` | — | Called with the new text when it differs from the old text. |

`TagContextProps` also lists a `rounded` field. The source applies no style for it.

### `Tag.Icon`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | The icon. |
| `color` | `ColorTokens \| string` | Tag text color | The icon color. |
| `size` | `SizeTokens` | Tag size | The icon size basis. |
| `scaleIcon` | `number` | `0.7` | Scales the icon size. |

## Variants and states

- **Surface:** A [Container](./container.md) of the `variant` draws the background and border (see its variant table). The text is `on-primary` on `primary`, `on-secondary` on `secondary` (`primary` on the uncolored base theme's light `secondary`), and `primary` on the other variants.
- **`outlined`:** A transparent background with a 2px `primary` border and `primary` text. With the deprecated `outlined` flag, a `secondary` tag outlines in `secondary` instead.
- **Pressable:** The background (or the outlined border) changes to its `-hovered` shade on hover. A ripple starts at the press point. The focus ring uses `ring-offset`.
- **Removable:** Hovering or focusing the remove button switches the whole tag to the `danger` theme. The tag fades and shrinks to `0.8` scale on exit, over 200ms.
- **Editable:** The tag responds to hover like a pressable tag. In edit mode, Enter or blur commits the text. Escape restores the old text. The remove button is hidden during editing.
- **Themes:** The stories also show the `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes.

## Accessibility

- The remove control is a native `button` with the `aria-label` from `removeButtonLabel`. Enter and Space activate it.
- A pressable tag and `Tag.Button` set `tabIndex` to `0` and `role="button"`.
- The edit text box has an `aria-label` from `editInputLabel`.
- The remove button stops the press event, so a pressable tag does not also fire.

## Related

- [Design tokens](../tokens/index.md)
- [Tag picker](./tag-picker.md)

## Source

- [`components/tag/src/Tag.tsx`](../../../components/tag/src/Tag.tsx)
- [`components/tag/src/Tag.stories.tsx`](../../../components/tag/src/Tag.stories.tsx)
