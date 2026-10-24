# @cyclone-ui/vite

A Vite plugin that sets up [Tamagui](https://tamagui.dev) and Cyclone UI
components in a Vite application. It wraps
[`@tamagui/vite-plugin`](https://tamagui.dev/docs/guides/vite) with the Cyclone
UI defaults.

## Quick Features

- Aliases `react-native` to `react-native-web` and resolves `.web.*` files first
- Pre-bundles and dedupes the Tamagui packages that share React contexts
- Runs the Tamagui optimizing compiler with the Cyclone UI config from
  `@cyclone-ui/tokens`
- Defines `process.env.TAMAGUI_TARGET`, which Cyclone components read to render
  web-only styles

## Installing

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/vite
pnpm add @cyclone-ui/state @cyclone-ui/tokens @tamagui/core jotai react-native-web
```

The plugin is ESM only, so the project's `package.json` needs
`"type": "module"` (or a `vite.config.mts` file).

## Usage

Add the plugin to `vite.config.ts`:

```ts
import { cycloneUI } from "@cyclone-ui/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), cycloneUI()]
});
```

Then wrap the app in the Cyclone theme provider:

```tsx
import { ThemeProvider } from "@cyclone-ui/state/theme";
import { config } from "@cyclone-ui/tokens/tamagui";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider config={config} disableInjectCSS={false}>
    <App />
  </ThemeProvider>
);
```

### Options

`cycloneUI()` accepts every
[`@tamagui/vite-plugin` option](https://tamagui.dev/docs/guides/vite). The
defaults are:

| Option       | Default                        |
| ------------ | ------------------------------ |
| `config`     | `"@cyclone-ui/tokens/tamagui"` |
| `components` | `["@tamagui/core"]`            |

Pass your own `config` when the app uses a custom Razorwind token build, and
`disableExtraction: true` to keep styles at runtime (for example while
debugging). A `tamagui.build.ts` file in the project root overrides these
options.

## Development

```bash
pnpm nx run vite:build
```
