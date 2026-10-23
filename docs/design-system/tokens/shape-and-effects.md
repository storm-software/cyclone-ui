---
title: "Shape and effects"
description: "Border radius, shadows, blur, focus ring, and z-index tokens in Cyclone UI."
documentType: reference
tags: [tokens, radius, shadow, blur, z-index, focus]
---

# Shape and effects

This page lists tokens for corner radius, depth, blur, focus rings, and stacking order. Source files: [`primitives/tokens.json`](../../../packages/tokens/src/tokens/primitives/tokens.json) and [`semantic/tokens.json`](../../../packages/tokens/src/tokens/semantic/tokens.json).

## Border radius

### Primitive radius scale

CSS variable pattern: `--storm-border-radius-<step>`.

| Step | Token | Value | px | Sample |
| --- | --- | --- | --- | --- |
| `zero` | `border-radius.zero` | `0rem` | 0px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:0rem"></span> |
| `xs` | `border-radius.xs` | `0.125rem` | 2px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:0.125rem"></span> |
| `sm` | `border-radius.sm` | `0.25rem` | 4px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:0.25rem"></span> |
| `md` | `border-radius.md` | `0.375rem` | 6px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:0.375rem"></span> |
| `lg` | `border-radius.lg` | `0.5rem` | 8px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:0.5rem"></span> |
| `xl` | `border-radius.xl` | `0.75rem` | 12px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:0.75rem"></span> |
| `2xl` | `border-radius.2xl` | `1rem` | 16px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:1rem"></span> |
| `3xl` | `border-radius.3xl` | `1.5rem` | 24px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:1.5rem"></span> |
| `4xl` | `border-radius.4xl` | `2rem` | 32px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:2rem"></span> |
| `full` | `border-radius.full` | `100%` | 100px | <span style="display:inline-block;width:2em;height:2em;border:2px solid #1fb2a6;border-radius:100%"></span> |

### Semantic radius

A semantic radius names the corner of a UI part. CSS variable pattern: `--storm-border-radius-<name>`. In a Tamagui component, the same name is a radius token, for example `borderRadius: "button"`.

| Name | Resolves to | Value | Purpose |
| --- | --- | --- | --- |
| `container` | `border-radius.2xl` | 16px | Corner radius for large framed regions that group other content. |
| `trigger` | `border-radius.md` | 6px | Corner radius for triggers interfaces. |
| `card` | `border-radius.md` | 6px | Corner radius for cards and card-like tiles. |
| `button` | `border-radius.md` | 6px | Corner radius for triggers and other pressable elements. |
| `tag` | `border-radius.sm` | 4px | Corner radius for tags. |
| `control` | `border-radius.sm` | 4px | Corner radius for form controls that accept input. |
| `checkbox` | `border-radius.sm` | 4px | Corner radius for the checkbox box. |
| `tab` | `border-radius.sm` | 4px | Corner radius for inset tabs and toggle indicators. |
| `tabs` | `border-radius.md` | 6px | Corner radius for frames that contain inset tab-like controls. |
| `dialog` | `border-radius.md` | 6px | Corner radius for modal dialogs. |
| `sheet` | `border-radius.zero` | 0px | Corner radius for sheets. |
| `drawer` | `border-radius.2xl` | 16px | Corner radius for drawers. |
| `popover` | `border-radius.md` | 6px | Corner radius for popovers and dropdown menus. |
| `tooltip` | `border-radius.md` | 6px | Corner radius for tooltips. |

The values come from the `$value` reference of each token. Some token descriptions in the source file state a different pixel value. Treat `$value` as the authority.

Where components use each radius:

- `container`: Used by Container, Accordion, Callout, CodeBlock, FileTree, FilePicker, Table, Stepper and InlineCodeText.
- `trigger`: Used by Tabs (indicators).
- `card`: Used by Card and FilePicker.
- `button`: Used by Button, Badge, DatePicker triggers, SearchInput results, Select items, Tabs triggers and CodeBlock header controls. Circular and rounded Button variants override it.
- `tag`: Used by Tag.
- `control`: Used by Input, TextArea, Select, Field, RadioGroup and Rating.
- `checkbox`: Used by Checkbox.
- `tab`: Used by Tabs, Toggle and ToggleGroup items.
- `tabs`: Used by Tabs headers, Toggle and ToggleGroup.
- `dialog`: Used by Dialog.
- `sheet`: Applied by Sheet to its exposed corners.
- `popover`: Used by Popover and the Select dropdown list.
- `tooltip`: Used by Tooltip.

## Shadows

### Box shadow

Tailwind CSS default box shadows. CSS variable pattern: `--storm-shadow-<step>`.

| Step | Token | Value |
| --- | --- | --- |
| `2xs` | `shadow.2xs` | `0px 1px 0px 0px #0000000d` |
| `xs` | `shadow.xs` | `0px 1px 2px 0px #0000000d` |
| `sm` | `shadow.sm` | `0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a` |
| `md` | `shadow.md` | `0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a` |
| `lg` | `shadow.lg` | `0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a` |
| `xl` | `shadow.xl` | `0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a` |
| `2xl` | `shadow.2xl` | `0px 25px 50px -12px #00000040` |

### Inset shadow

Tailwind CSS default inset box shadows. CSS variable pattern: `--storm-inset-shadow-<step>`.

| Step | Token | Value |
| --- | --- | --- |
| `2xs` | `inset-shadow.2xs` | `inset 0px 1px 0px 0px #0000000d` |
| `xs` | `inset-shadow.xs` | `inset 0px 1px 1px 0px #0000000d` |
| `sm` | `inset-shadow.sm` | `inset 0px 2px 4px 0px #0000000d` |

### Drop shadow

Tailwind CSS default drop shadows (filter). Mapped to DTCG shadow type. CSS variable pattern: `--storm-drop-shadow-<step>`.

| Step | Token | Value |
| --- | --- | --- |
| `xs` | `drop-shadow.xs` | `0px 1px 1px 0px #0000000d` |
| `sm` | `drop-shadow.sm` | `0px 1px 2px 0px #00000026` |
| `md` | `drop-shadow.md` | `0px 3px 3px 0px #0000001f` |
| `lg` | `drop-shadow.lg` | `0px 4px 4px 0px #00000026` |
| `xl` | `drop-shadow.xl` | `0px 9px 7px 0px #0000001a` |
| `2xl` | `drop-shadow.2xl` | `0px 25px 25px 0px #00000026` |

### Text shadow

Tailwind CSS default text shadows. Mapped to DTCG shadow type. CSS variable pattern: `--storm-text-shadow-<step>`.

| Step | Token | Value |
| --- | --- | --- |
| `2xs` | `text-shadow.2xs` | `0px 1px 0px 0px #00000026` |
| `xs` | `text-shadow.xs` | `0px 1px 1px 0px #00000033` |
| `sm` | `text-shadow.sm` | `0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013` |
| `md` | `text-shadow.md` | `0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a` |
| `lg` | `text-shadow.lg` | `0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a` |

### Semantic shadow presets

Box-shadow presets for elevation. Resting shadows lift elements slightly off their surface; floating shadows separate content that sits above the page. CSS variable pattern: `--storm-color-shadow-<group>-<size>`. The presets point to the box shadow and inset shadow scales above, and they are the same in light and dark.

| Preset | Token | Points to | Value |
| --- | --- | --- | --- |
| `resting-xsmall` | `color.shadow.resting.xsmall` | `{shadow.2xs}` | `0px 1px 0px 0px #0000000d` |
| `resting-small` | `color.shadow.resting.small` | `{shadow.xs}` | `0px 1px 2px 0px #0000000d` |
| `resting-medium` | `color.shadow.resting.medium` | `{shadow.sm}` | `0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a` |
| `floating-small` | `color.shadow.floating.small` | `{shadow.md}` | `0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a` |
| `floating-medium` | `color.shadow.floating.medium` | `{shadow.lg}` | `0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a` |
| `floating-large` | `color.shadow.floating.large` | `{shadow.xl}` | `0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a` |
| `floating-xlarge` | `color.shadow.floating.xlarge` | `{shadow.2xl}` | `0px 25px 50px -12px #00000040` |
| `inset` | `color.shadow.inset` | `{inset-shadow.xs}` | `inset 0px 1px 1px 0px #0000000d` |

```css
.menu {
  box-shadow: var(--storm-color-shadow-floating-small);
}
```

## Blur

CSS variable pattern: `--storm-blur-<step>`.

| Step | Token | Value |
| --- | --- | --- |
| `xs` | `blur.xs` | 4px |
| `sm` | `blur.sm` | 8px |
| `md` | `blur.md` | 12px |
| `lg` | `blur.lg` | 16px |
| `xl` | `blur.xl` | 24px |
| `2xl` | `blur.2xl` | 40px |
| `3xl` | `blur.3xl` | 64px |

## Focus rings

Ring variables are `box-shadow` values for focus indicators. There is one set for each color group. Each set has four variables: `ring`, `ring-subtle`, `ring-offset`, and `ring-subtle-offset`. The `offset` variants draw a gap in the surface color first. The values change with the theme.

```css
.field:focus-visible {
  box-shadow: var(--storm-ring-brand);
}
```

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-ring-base` | `0px 0px 0px 3px #1f1f211a` | `0px 0px 0px 3px #ffffff1a` |
| `--storm-ring-base-subtle` | `0px 0px 0px 1px #1f1f211a` | `0px 0px 0px 1px #ffffff1a` |
| `--storm-ring-base-offset` | `0px 0px 0px 3px #fafafa, 0px 0px 0px 7px #1f1f211a` | `0px 0px 0px 3px #242528, 0px 0px 0px 7px #ffffff1a` |
| `--storm-ring-base-subtle-offset` | `0px 0px 0px 2px #fafafa, 0px 0px 0px 3px #1f1f211a` | `0px 0px 0px 2px #242528, 0px 0px 0px 3px #ffffff1a` |
| `--storm-ring-brand` | `0px 0px 0px 3px #1fb2a626` | `0px 0px 0px 3px #3be4be26` |
| `--storm-ring-brand-subtle` | `0px 0px 0px 1px #1fb2a626` | `0px 0px 0px 1px #3be4be26` |
| `--storm-ring-brand-offset` | `0px 0px 0px 3px #fafafa, 0px 0px 0px 7px #1fb2a626` | `0px 0px 0px 3px #242528, 0px 0px 0px 7px #3be4be26` |
| `--storm-ring-brand-subtle-offset` | `0px 0px 0px 2px #fafafa, 0px 0px 0px 3px #1fb2a626` | `0px 0px 0px 2px #242528, 0px 0px 0px 3px #3be4be26` |
| `--storm-ring-danger` | `0px 0px 0px 3px #8e223e26` | `0px 0px 0px 3px #cf2d5626` |
| `--storm-ring-danger-subtle` | `0px 0px 0px 1px #8e223e26` | `0px 0px 0px 1px #cf2d5626` |
| `--storm-ring-danger-offset` | `0px 0px 0px 3px #fafafa, 0px 0px 0px 7px #8e223e26` | `0px 0px 0px 3px #242528, 0px 0px 0px 7px #cf2d5626` |
| `--storm-ring-danger-subtle-offset` | `0px 0px 0px 2px #fafafa, 0px 0px 0px 3px #8e223e26` | `0px 0px 0px 2px #242528, 0px 0px 0px 3px #cf2d5626` |
| `--storm-ring-warning` | `0px 0px 0px 3px #76541726` | `0px 0px 0px 3px #f7ac2326` |
| `--storm-ring-warning-subtle` | `0px 0px 0px 1px #76541726` | `0px 0px 0px 1px #f7ac2326` |
| `--storm-ring-warning-offset` | `0px 0px 0px 3px #fafafa, 0px 0px 0px 7px #76541726` | `0px 0px 0px 3px #242528, 0px 0px 0px 7px #f7ac2326` |
| `--storm-ring-warning-subtle-offset` | `0px 0px 0px 2px #fafafa, 0px 0px 0px 3px #76541726` | `0px 0px 0px 2px #242528, 0px 0px 0px 3px #f7ac2326` |
| `--storm-ring-info` | `0px 0px 0px 3px #2055b326` | `0px 0px 0px 3px #4d8eff26` |
| `--storm-ring-info-subtle` | `0px 0px 0px 1px #2055b326` | `0px 0px 0px 1px #4d8eff26` |
| `--storm-ring-info-offset` | `0px 0px 0px 3px #fafafa, 0px 0px 0px 7px #2055b326` | `0px 0px 0px 3px #242528, 0px 0px 0px 7px #4d8eff26` |
| `--storm-ring-info-subtle-offset` | `0px 0px 0px 2px #fafafa, 0px 0px 0px 3px #2055b326` | `0px 0px 0px 2px #242528, 0px 0px 0px 3px #4d8eff26` |
| `--storm-ring-discovery` | `0px 0px 0px 3px #59439526` | `0px 0px 0px 3px #9277da26` |
| `--storm-ring-discovery-subtle` | `0px 0px 0px 1px #59439526` | `0px 0px 0px 1px #9277da26` |
| `--storm-ring-discovery-offset` | `0px 0px 0px 3px #fafafa, 0px 0px 0px 7px #59439526` | `0px 0px 0px 3px #242528, 0px 0px 0px 7px #9277da26` |
| `--storm-ring-discovery-subtle-offset` | `0px 0px 0px 2px #fafafa, 0px 0px 0px 3px #59439526` | `0px 0px 0px 2px #242528, 0px 0px 0px 3px #9277da26` |
| `--storm-ring-success` | `0px 0px 0px 3px #216b5326` | `0px 0px 0px 3px #45c79126` |
| `--storm-ring-success-subtle` | `0px 0px 0px 1px #216b5326` | `0px 0px 0px 1px #45c79126` |
| `--storm-ring-success-offset` | `0px 0px 0px 3px #fafafa, 0px 0px 0px 7px #216b5326` | `0px 0px 0px 3px #242528, 0px 0px 0px 7px #45c79126` |
| `--storm-ring-success-subtle-offset` | `0px 0px 0px 2px #fafafa, 0px 0px 0px 3px #216b5326` | `0px 0px 0px 2px #242528, 0px 0px 0px 3px #45c79126` |

## Z-index

CSS variable pattern: `--storm-z-index-<step>`.

| Step | Token | Value | Purpose |
| --- | --- | --- | --- |
| `0` | `z-index.0` | 0 | Base stacking level |
| `10` | `z-index.10` | 100 | Low stacking level |
| `20` | `z-index.20` | 200 | Raised stacking level |
| `30` | `z-index.30` | 300 | Elevated stacking level |
| `40` | `z-index.40` | 400 | High stacking level |
| `50` | `z-index.50` | 500 | Overlay stacking level |
| `60` | `z-index.60` | 600 | Modal stacking level |
| `70` | `z-index.70` | 700 | Popover stacking level |
| `80` | `z-index.80` | 800 | Toast stacking level |
| `90` | `z-index.90` | 900 | Topmost stacking level |

## Related pages

- [Semantic colors](./semantic-colors.md)
- [Motion tokens](./motion.md)
- [Tokens overview](./index.md)
