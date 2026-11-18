# ColorToken

A swatch that displays a color design token and copies its value.

## Quick Features

- Fills a rounded square with the token's color, with a subtle theme ring so dark swatches stay visible on dark backgrounds.
- Shows the token's name and description in a Tooltip on hover or focus.
- Shows the hex value inline, in a contrasting color, on hover or keyboard focus.
- Copies the hex value on click, or the OKLCH value on Shift-click (or Shift+Enter).
- Shows "Copied" on the swatch and names the copied format in the Tooltip.
- Accepts hex, `rgb()`, `hsl()`, `oklch()` and named CSS colors. An `oklch()` value is copied exactly as written. The hex value of a color outside sRGB is clipped.

## Installation

This package lives at `components/color-token` in the Cyclone UI workspace. It uses the existing Cyclone UI theme configuration. Release availability is not verified here.

## Usage

```tsx
import { ColorToken } from "@cyclone-ui/color-token"

export function Example() {
  return (
    <ColorToken
      name="color.red.1"
      value="oklch(0.714965 0.122063 4.087)"
      description="Pale coral red."
    />
  )
}
```

The swatch is 72px (`14xl`) square by default. Use `width` and `height` to change its size, and `copiedDuration` to change how long the copied feedback shows (1500ms by default). If `value` cannot be parsed, the swatch still renders it and copies it unchanged for both formats.

`getColorFormats(value)` from `@cyclone-ui/color-token/utilities` returns the hex value, the OKLCH value and whether dark text reads better on the color, or `null` for a value that is not a color.

## Development

From the repository root, inside its development environment:

```sh
devenv shell -- pnpm nx run color-token:build-base
devenv shell -- node node_modules/vitest/vitest.mjs run --config components/color-token/vitest.config.mts
devenv shell -- node_modules/.bin/storybook dev --config-dir apps/storybook/.storybook --port 6006
```

The ColorToken stories cover the tooltip, hex and OKLCH copies, hex input, and a palette row.
