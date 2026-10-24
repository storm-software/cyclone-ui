---
name: cyclone-ui-vite
description: Set up Cyclone UI and Tamagui in a Vite + React app with the @cyclone-ui/vite plugin — add cycloneUI() to vite.config, wrap the app in the Cyclone ThemeProvider, and follow light/dark mode. Use whenever someone adds Cyclone UI to a Vite project, mentions cycloneUI() or @cyclone-ui/vite, or hits Cyclone/Tamagui problems under Vite such as unstyled components, "JSX syntax extension is not currently enabled", react-native import errors, or an ESM/require error loading the plugin.
---

# Set up Cyclone UI in a Vite app

`@cyclone-ui/vite` exports `cycloneUI(options?)`, which wraps `@tamagui/vite-plugin` with Cyclone defaults:

- aliases `react-native` → `react-native-web` and resolves `.web.*` files first
- pre-bundles and dedupes the Tamagui packages that share React contexts
- runs the Tamagui compiler with the `@cyclone-ui/tokens/tamagui` config
- defines `process.env.TAMAGUI_TARGET = "web"`, which Cyclone components read to render web-only styles

To copy Cyclone components into the app (`cyclone-ui init`/`add`), use the **cyclone-ui-setup** skill. This skill covers only the framework wiring. It targets client-rendered Vite + React apps. The plugin does nothing to collect styles during server rendering, so treat an SSR framework built on Vite as unverified.

## Inspect the app first

Work in the target Vite app. Before writing, find:

- the `vite.config.*` file and its existing plugins (the React plugin is `@vitejs/plugin-react` or `@vitejs/plugin-react-swc`)
- whether `package.json` has `"type": "module"`
- the entry file (usually `src/main.tsx`) and any existing `TamaguiProvider`
- any `tamagui.config.ts` or `tamagui.build.ts`: a `tamagui.build.ts` overrides the plugin's options, so keep it only if its settings are intended

## Install

Use the app's package manager:

```bash
pnpm add -D @cyclone-ui/vite
pnpm add @cyclone-ui/state @cyclone-ui/tokens @tamagui/core jotai react-native-web
```

The plugin is ESM only. If `package.json` lacks `"type": "module"`, rename the config to `vite.config.mts` rather than flipping the whole package's module type, which can break other `.js` files.

## Add the plugin

```ts
// vite.config.ts
import { cycloneUI } from "@cyclone-ui/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), cycloneUI()]
});
```

Keep the existing plugins and add `cycloneUI()` after the React plugin. It returns an array of plugins, which Vite flattens, so don't spread it. If the app already uses `tamaguiPlugin` from `@tamagui/vite-plugin` directly, replace it with `cycloneUI()` instead of running both. Move any options it had into `cycloneUI(...)`.

`cycloneUI()` accepts every [`@tamagui/vite-plugin` option](https://tamagui.dev/docs/guides/vite). The defaults are `config: "@cyclone-ui/tokens/tamagui"` and `components: ["@tamagui/core"]`. Common overrides:

- `config`: the path to the app's own Tamagui config when it uses a custom Razorwind token build
- `disableExtraction: true`: keep styles at runtime, for example while debugging a compiler issue

## Wrap the app in the theme provider

```tsx
// src/main.tsx
import { ThemeProvider, useThemeMode } from "@cyclone-ui/state/theme";
import { config } from "@cyclone-ui/tokens/tamagui";
import { Theme } from "@tamagui/core";
import type { PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

function BaseTheme({ children }: PropsWithChildren) {
  const mode = useThemeMode();

  return <Theme name={`${mode}_base`}>{children}</Theme>;
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider config={config} disableInjectCSS={false}>
    <BaseTheme>
      <App />
    </BaseTheme>
  </ThemeProvider>
);
```

- Pass `disableInjectCSS={false}`. `ThemeProvider` defaults to `true`, which expects compiler-generated CSS to be imported. Without that CSS and without this prop, components render unstyled.
- Cyclone components are designed against the `light_base` and `dark_base` themes. The small `BaseTheme` wrapper follows the active mode, unlike a hard-coded `<Theme name="dark_base">`.
- `ThemeProvider` starts from the OS `prefers-color-scheme` and falls back to `defaultMode` (default `"dark"`). Change the mode with `useThemeActions().changeMode("light" | "dark")`. The provider doesn't save the choice, so if the user wants it persisted, store it (for example in `localStorage`) and pass it back as `defaultMode`.
- Use the same `config` here as in the plugin's `config` option. A custom token build has to be passed to both.

## Verify

Run `vite build`, then `vite preview` (or `vite dev`) with a Cyclone component on screen. Check:

- The component is styled.
- Switching the mode changes its colors.
- The console shows no duplicate-React or Tamagui context warnings.

Report which checks ran, and say so if only the build was verified.

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| `The JSX syntax extension is not currently enabled` from `@cyclone-ui/state` | `@cyclone-ui/state` 0.0.31 or earlier, which shipped raw JSX in `dist`. Upgrade it to a later version. |
| `require() of ES Module` / `ERR_REQUIRE_ESM` loading the config | The package isn't `"type": "module"`. Rename the config to `vite.config.mts`. |
| Components unstyled | `disableInjectCSS` left at its default `true`, or the plugin is missing from `plugins`. |
| Placeholders or animations missing | `process.env.TAMAGUI_TARGET` undefined. `cycloneUI()` isn't in the final plugin list, or another `define` overrides it. |
| Can't resolve `react-native` | `react-native-web` not installed. |
| Wrong theme colors or theme hooks return defaults | Two copies of `@tamagui/core` or `@cyclone-ui/state`. Dedupe the lockfile, and check that nothing else registers `tamaguiPlugin`. |
