---
title: "@cyclone-ui/helpers"
description: Reference for the style and form-control helper functions that Cyclone UI components use to read Tamagui tokens.
documentType: reference
tags: [helpers, tamagui, tokens, forms]
---

# @cyclone-ui/helpers

`@cyclone-ui/helpers` contains the helper code that Cyclone UI components use to turn design tokens into styles. It also contains the shared form-control context.

Use this package when you write a Tamagui `styled.dynamic` variant. Use it when you build a form control that works inside a `Field`.

Source: [`packages/helpers`](https://github.com/storm-software/cyclone-ui/tree/main/packages/helpers)

## Install

```bash
pnpm add @cyclone-ui/helpers
```

The package declares `react` as a peer dependency. It depends on `@tamagui/core`, `@tamagui/constants`, `chroma-js`, and two `@stryke` packages.

The README of this package shows `-D` (development dependency) in its install command. The [CLI](./cli.md) adds `@cyclone-ui/helpers` to your `package.json` when you copy components that use it.

## Entry points

The root entry point re-exports every module. Each module also has its own subpath export.

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/helpers` | All exports below |
| `@cyclone-ui/helpers/form-control` | Form-control context and hooks |
| `@cyclone-ui/helpers/form-size` | Form-control size helpers |
| `@cyclone-ui/helpers/get-button-sized` | `getButtonSized` |
| `@cyclone-ui/helpers/get-colors` | Color palette helpers |
| `@cyclone-ui/helpers/get-font-sized` | Font size helpers |
| `@cyclone-ui/helpers/get-nearest-token` | `getNearestToken` |
| `@cyclone-ui/helpers/get-sized` | Size, space, and radius helpers |
| `@cyclone-ui/helpers/get-token-relative` | `getTokenRelative` |
| `@cyclone-ui/helpers/token-value` | `normalizeTokenValue` |
| `@cyclone-ui/helpers/types` | Shared types |

Each path ships ESM and CommonJS builds with type declarations.

## Quick start

Build a size variant for a styled component. `formSizeVariants` accepts only `sm`, `md`, and `lg`. It passes the Tamagui environment to your callback.

```tsx
import { styled, View } from "@tamagui/core";
import {
  formSizeVariants,
  getFormFontSize,
  getFormSizeToken
} from "@cyclone-ui/helpers";

export const Box = styled(View, {
  variants: {
    size: formSizeVariants((size, env) => ({
      height: getFormSizeToken(size),
      ...getFormFontSize(size, env)
    }))
  }
});
```

For any other value, the variant returns `undefined`.

## Token values

### `normalizeTokenValue(value)`

Prepares a value for a Tamagui token lookup.

| Input | Result |
| --- | --- |
| A number | The same number |
| `true` | `"true"`, the default size key |
| `"$4"` | `"4"` (the `$` prefix is removed) |
| `"[12px]"` or `"[1.5rem]"` | A number, in pixels (1 rem is 16 px) |
| Other strings | The string, as a token name |

A bare string such as `"4"` is a token name. It is never a pixel value. Use the bracket form for a literal length.

Types: `TokenValue` is `number | string`. `TokenInput` is `TokenValue | boolean`.

### `getTokenRelative(type, current, options?)`

Resolves a token and can step up or down the scale. `type` is `"size"`, `"space"`, `"radius"`, or `"zIndex"`. `current` is a token key or a Tamagui variable.

| Option | Type | Purpose |
| --- | --- | --- |
| `shift` | `number` | Steps along the sorted token scale |
| `bounds` | `[number] \| [number, number]` | Limits the result to a range of steps |
| `excludeHalfSteps` | `boolean` | Skips keys that end in `.5` |

It returns the token variable, or `undefined` when no token matches.

### `getNearestToken(value, type?, tokensMap?)`

Returns the key of the token whose numeric value is nearest to `value`. Give a `type` (`"size"`, `"space"`, `"zIndex"`, or `"radius"`) or a `tokensMap`. Without both, it logs a warning and returns `"true"`.

## Size helpers

These helpers take a `TokenInput` and an options object (`GetSizedOptions`).

| Option | Type | Purpose |
| --- | --- | --- |
| `scale` | `number` | Multiplies the result. The default is `1`. |
| `shift` | `number` | Steps along the token scale |
| `bounds` | `[number] \| [number, number]` | Limits the steps |
| `excludeHalfSteps` | `boolean` | Skips `.5` keys |
| `nearest` | `boolean` | Set to `false` to keep a numeric input as is before a shift |

| Function | Returns |
| --- | --- |
| `getSized(val, options?)` | A size number |
| `getSpaced(val, options?)` | A space number |
| `getRadius(val, options?)` | A radius number. `circular: true` returns `100000`. |
| `getSizeFromFontSized(val, options?)` | A size number for a font size input |
| `fontSizeToSize(fontSize)` | The nearest `size` token key |
| `sizeToSpace(val)` | A space number for a size input |

## Font helpers

| Function | Purpose |
| --- | --- |
| `getFontSized(token?, env?)` | Returns font styles for a size token. Without `env.font`, it returns only `fontSize`. |
| `getFontSizedFromSize(token?, env?)` | Same, but maps a numeric size to the nearest size token first. |
| `getFontWeightFromSize(token?, { font, scale }?)` | Returns a font weight for a size token or pixel size. |

`env` is a `StyleEnv`: an object with optional `tokens`, `font`, and `fontFamily`. This is the environment that Tamagui passes to `styled.dynamic` callbacks.

Values you set on the component, such as `color` and `fontStyle`, take precedence over the values `getFontSized` returns.

## Button size

`getButtonSized(val, env?, circular?)` returns the sizing styles for a button from a size token or number. Without `val`, it returns `undefined`. When `circular` is `true`, the border radius is `100000`. The default size key is `5xl`.

## Form-control sizes

`FormControlSize` is `"sm" | "md" | "lg"`. Values in the table are in the order `sm`, `md`, `lg`.

| Function | Result |
| --- | --- |
| `getFormSizeToken(size = "md", kind = "control")` | `control`: `8xl`, `10xl`, `12xl`. `compact`: `4xl`, `6xl`, `7xl`. |
| `getFormSizeScale(size = "md")` | `32/42`, `1`, `52/42` |
| `getFormFontScale(size = "md")` | `0.875`, `1`, `1.125` |
| `getFormFontSize(size, env, token = "md")` | Scaled font styles. `md` returns the unscaled styles. |
| `formSizeVariants(style)` | A `styled.dynamic` variant for `sm`, `md`, and `lg` |

## Color palettes

| Function | Returns |
| --- | --- |
| `createScientificPalettes(color)` | A record of `chroma-js` colors. Keys are `ColorScientificPalette` values. |
| `createStylePalettes(color, scale?)` | A record of color strings for the same keys |

Palette keys: `surrounding`, `analogous`, `triadic`, `tetradic`, `complementary`, `splitComplementary`. The `ColorScientificPalette` constant lists them. Both functions rotate the hue of the input color in the OKLCH color space. They cache results per input color.

Related types: `LCHColor`, `ColorScientificPaletteRecord`, `ColorStylePaletteRecord`, `DefaultStatusColorTheme`.

## Form-control context

A `Field` shares state with the control inside it. Controls read this state with `useFormControl()`. The state holds plain values and callbacks. It does not depend on a form-state library.

Types:

- `FieldVariant`: `"outlined" | "underlined" | "inlined"`
- `FieldLabelVariant`: `"floating" | "above"`
- `FieldLabelPlacement`: `"border" | "inset"`
- `FormControlState`: the shared state (name, value, size, theme, disabled, focused, callbacks, and label data)
- `FieldLabelDefaults`, `FieldControlOptions`

| Export | Purpose |
| --- | --- |
| `FormControlContext` | The React context. Its value is `undefined` outside a field. |
| `useFormControl()` | Returns the enclosing state or `undefined`. |
| `useFieldLabelDefaults(defaults)` | Registers how the control prefers its label. Pass a stable value. |
| `useFieldOptions(options)` | Supplies field options (`overrides`, `defaults`). Pass a stable value. |
| `useFieldVariant(placeholder?)` | Returns the field variant. The default is `"outlined"`. |
| `useFieldHasStartIcon()` | `true` when the field has a start icon. |
| `useFieldHasValidationMessage()` | `true` when the field shows a validation message. |
| `useFieldLabelPlacement()` | Returns `"border"` for an outlined floating label, `"inset"` for other floating labels, or `undefined`. |
| `getFieldLabelInset(placement, size?)` | Returns extra height in pixels: `3` for `border`, `13` times the size scale for `inset`. |
| `useFieldShouldShowPlaceholder(value)` | `false` while a floating label rests over an empty, unfocused control. |
| `useFieldLabelFloated(labelVariant?)` | `true` when a floating label is raised. |
| `useFieldIconColor()` | Returns `iconColor`, `hoverIconColor`, and `isNeutral`. |
| `FieldNotchedOutline` | A styled `fieldset` that draws the outlined border. |

## Tests

The package has tests for form sizes (`test/form-size.spec.ts`) and token values (`test/token-value.spec.ts`).

```bash
pnpm nx test helpers
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/state](./state.md) depends on this package.
- [Design tokens](../design-system/tokens/index.md)
