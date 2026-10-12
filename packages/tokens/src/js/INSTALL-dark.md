# Configuring Theme CSS

The following instructions will guide you through configuring your application to use the generated theme CSS files.

## Files

- `packages/tokens/src/js/tokens.d.ts`
- `packages/tokens/src/js/tokens.js`

## Setup

1. Import or copy generated files into your app.

CSS example:

```ts
import "./packages/tokens/src/js/tokens.d.ts";
```

SCSS example:

```scss
@import "packages/tokens/src/js/tokens.d.ts";
```

2. Reference token variables from the generated file names above (e.g. CSS custom properties or SCSS variables).

3. Re-run `razorwind generate` when tokens change.

## Regeneration

Re-run the following command to regenerate the theme CSS files:

```bash
razorwind generate
```

The generated theme output files are considered build artifacts - adjust tokens or Razorwind configuration to change the output files **(do not manually edit generated files)**.
