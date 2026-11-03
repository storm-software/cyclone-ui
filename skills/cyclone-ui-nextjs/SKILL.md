---
name: cyclone-ui-nextjs
description: Set up Cyclone UI and Tamagui in a Next.js app with @cyclone-ui/nextjs — wrap next.config with withCycloneUI, render CycloneUIProvider in the root layout, and wire light/dark theme switching. Use whenever someone adds Cyclone UI to a Next.js project (App Router or Pages Router, Turbopack or Webpack), mentions withCycloneUI, CycloneUIProvider, or useThemeSetting, or hits Cyclone/Tamagui problems in Next.js such as unstyled components, hydration warnings on <html>, react-native import errors, or a theme toggle that doesn't persist.
---

# Set up Cyclone UI in a Next.js app

`@cyclone-ui/nextjs` replaces the hand-written Tamagui setup. It has two entry points:

- `@cyclone-ui/nextjs`: `withCycloneUI(nextConfig, options?)` (`tokens` plus Webpack options) for `next.config.*`
- `@cyclone-ui/nextjs/provider`: `CycloneUIProvider` (a `"use client"` root provider), plus `useThemeSetting` and `useRootTheme`

To copy Cyclone components into the app (`cyclone-ui init`/`add`), use the **cyclone-ui-setup** skill. In an App Router app, run `init --rsc` so the components keep their `"use client"` directives. This skill covers only the framework wiring.

## Use flat named exports in React Server Components

In App Router Server Components, import and render Cyclone UI's flat named exports instead of accessing compound components through static properties. A Server Component receives a client reference when it imports a component from a `"use client"` module, not the component function with its attached properties. It cannot dot into that client module: `Footer.Container` is undefined on the server, and rendering it can produce `Element type is invalid` or `Cannot access ... on the server`.

```tsx
// app/page.tsx (Server Component)
import { Footer, FooterContainer, FooterMain } from "@/components/ui/footer";

export default function Page() {
  return (
    <Footer>
      <FooterContainer>
        <FooterMain>Footer content</FooterMain>
      </FooterContainer>
    </Footer>
  );
}
```

Use the app's actual installed component path from `components.json` and verify the available named exports. For example, replace `<Footer.Container>` with `<FooterContainer>` and `<Footer.Main>` with `<FooterMain>`. Apply the same rule to other compound components, including nested members; do not assume every component exposes the same flat naming scheme.

Keep the page or layout a Server Component and preserve the installed components' `"use client"` directives. Do not add `"use client"` to the page merely to make dot notation work. Compound syntax such as `<Footer.Container>` is valid inside a Client Component; use an application-owned client wrapper only when client-side composition is actually needed. If a required flat export is missing, follow the installed-component protection rule below rather than modifying the installed file without specific instructions.

## Protect installed components

Do not change installed or added Cyclone UI component files unless the user specifically instructs you to do so. Use `components.json` to identify the configured component path and installed files. Framework setup, hydration fixes, styling requests, and application bug fixes do not authorize edits, refactors, formatting, renames, deletions, or registry updates/overwrites of those files. Keep changes in framework configuration, providers, application code, supported props, composition, application-owned wrappers, or theme configuration outside the installed components. If a component change is necessary, explain why and ask for specific instructions first. Scope any explicitly requested component addition or change narrowly and preserve unrelated installed files and local edits.

## Inspect the app first

Work in the target Next.js app. Before writing, find:

- **Router:** `app/` (or `src/app/`) is the App Router; `pages/` is the Pages Router. The provider setup differs (see below).
- **Bundler:** Next.js 16 uses Turbopack by default. If the `dev`/`build` scripts pass `--webpack`, it's Webpack, which needs `@tamagui/next-plugin`.
- **Existing config:** the `next.config.*` format and any wrappers already in it (bundle analyzer, MDX, Sentry), plus any existing `TamaguiProvider`, `ThemeProvider`, `tamagui.config.ts`, or `tamagui.build.ts`. A `tamagui.build.ts` overrides `withCycloneUI`'s compiler defaults, so keep it only if its settings are intended.

## Install

Use the app's package manager:

```bash
pnpm add @cyclone-ui/nextjs @cyclone-ui/state @cyclone-ui/tokens @tamagui/core jotai react-native-web
```

Add `@tamagui/react-native-svg` if the app renders SVG icons (`withCycloneUI` aliases `react-native-svg` to it). Add `@tamagui/next-plugin` only for Webpack builds. Turbopack never loads it.

## Wrap the Next.js config

```ts
// next.config.ts
import { withCycloneUI } from "@cyclone-ui/nextjs";

export default withCycloneUI({
  reactStrictMode: true
});
```

Keep the app's existing options inside the call. `withCycloneUI` merges `env` and `turbopack.resolveAlias` with the app's own values, and the app's values win on conflicts. When other wrappers exist, nest them: `withBundleAnalyzer(withCycloneUI(config))`.

What the wrapper adds, which helps when something breaks:

- `env.TAMAGUI_TARGET = "web"`: Cyclone components read this to render web-only styles (placeholders, animations). Don't override it.
- Turbopack aliases: `react-native` → `react-native-web` and `react-native-svg` → `@tamagui/react-native-svg`.
- A `webpack` hook that applies `@tamagui/next-plugin`. Next.js calls it only for Webpack builds.

## Render the provider

### App Router

```tsx
// app/layout.tsx
import { CycloneUIProvider } from "@cyclone-ui/nextjs/provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CycloneUIProvider>{children}</CycloneUIProvider>
      </body>
    </html>
  );
}
```

- The layout can stay a server component, because the provider module already carries `"use client"`.
- `suppressHydrationWarning` on `<html>` is required: the provider sets the theme class before React hydrates.
- `CycloneUIProvider` already renders the `TamaguiProvider`, the Cyclone theme state, and `<Theme name="<mode>_base">`, and it collects react-native-web styles on the server. Remove any other `TamaguiProvider` or `@cyclone-ui/state` `ThemeProvider` it replaces. Nesting them creates competing theme state.
- The provider accepts the `NextThemeProvider` props (`defaultTheme`, `forcedTheme`, `enableSystem`, `storageKey`, …), plus `config` (default: `@cyclone-ui/tokens/tamagui`) and `disableInjectCSS` (default `false`).

### Pages Router

Render `<CycloneUIProvider skipNextHead={false}>` in `pages/_app.tsx`, so the theme script goes through `next/script`. The provider collects server styles with `useServerInsertedHTML`, which does nothing outside the App Router. A Pages Router app therefore needs a `pages/_document.tsx` that adds the react-native-web sheet and Tamagui CSS to the server render. Follow the `_document` section of the [Tamagui Next.js guide](https://tamagui.dev/docs/guides/next-js). Without it, the first paint is unstyled.

## Theme switching

Read and change the theme with `useThemeSetting` from `@cyclone-ui/nextjs/provider`, in a client component:

```tsx
"use client";

import { useThemeSetting } from "@cyclone-ui/nextjs/provider";

export function ThemeToggle() {
  const theme = useThemeSetting();

  return <button onClick={theme.toggle}>Theme: {theme.current}</button>;
}
```

`useThemeSetting` controls `@tamagui/next-theme`, which is the source of truth: it stores the choice and applies it before hydration. `useThemeMode` from `@cyclone-ui/state/theme` correctly reads the active mode. But don't change the theme with `useThemeActions`: it changes only Cyclone's mirrored state, so the choice is lost on reload.

## Webpack and production CSS

For `next build --webpack`, install `@tamagui/next-plugin` and pass any [plugin options](https://tamagui.dev/docs/guides/next-js) as the second argument. The defaults are `config: "@cyclone-ui/tokens/tamagui"`, `components: ["@tamagui/core"]`, and `appDir: true`.

```ts
export default withCycloneUI(nextConfig, {
  outputCSS:
    process.env.NODE_ENV === "production" ? "./public/tamagui.generated.css" : null,
  disableExtraction: process.env.NODE_ENV === "development"
});
```

If you emit `outputCSS`, import that CSS in the root layout and pass `disableInjectCSS` to the provider so the theme CSS isn't injected twice.

Turbopack doesn't run the Tamagui compiler. Builds still work, with styles resolved at runtime. To optimize production output, run the Tamagui CLI (`@tamagui/cli`) before `next build`, pointing it at the app directory (`./app` or `./src`):

```json
{ "scripts": { "build": "tamagui build --target web ./app -- next build" } }
```

## Custom tokens

The default config is the published Cyclone theme. If the app has its own design tokens, pass them as `tokens`: a DTCG token object, or token file paths or globs (theme-named files such as `light.tokens.json` / `dark.tokens.json` become the light and dark themes).

```ts
export default withCycloneUI(nextConfig, { tokens: "tokens/**/*.json" });
```

`withCycloneUI` then builds the Tamagui config into `.cyclone-ui/tamagui.config.ts` (add `.cyclone-ui` to `.gitignore`) and aliases `@cyclone-ui/tokens/tamagui` to it, so the provider and the Webpack compiler need no `config`. It returns a promise in this case, so apply other wrappers to `nextConfig` inside the call instead of around it.

## Verify

Run the app's `next build`, then load a page with a Cyclone component in `next start` or `next dev`. Check:

- The component is styled on first paint (view the page source and look for the react-native-web `<style>`).
- The console shows no hydration warning.
- Toggling the theme flips `<html>`'s class and survives a reload.

Report which checks ran, and say so if only the build was verified.

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| `Footer.Container` is undefined on the server, `Element type is invalid`, or `Cannot access ... on the server` when using compound components | A Server Component is reading static properties from a client reference. Import and render the available flat named exports, such as `FooterContainer`, instead. |
| `Unexpected token '<'` / JSX parse error inside `@cyclone-ui/state` | `@cyclone-ui/state` 0.0.31 or earlier, which shipped raw JSX in `dist`. Upgrade it to the version `@cyclone-ui/nextjs` lists as a peer. |
| Can't resolve `react-native` or `react-native-svg` | Missing `react-native-web` or `@tamagui/react-native-svg`, or (Webpack) the config isn't wrapped. |
| `Cannot find module '@tamagui/next-plugin'` | A Webpack build without the plugin installed. |
| Hydration warning on `<html>` | Missing `suppressHydrationWarning`. |
| Unstyled first paint in the Pages Router | Missing `_document` style collection (see above). |
| Placeholders or animations missing only on web | `TAMAGUI_TARGET` overridden or unset; check `env` in the final config. |
| Theme resets on reload | Changed with `useThemeActions` instead of `useThemeSetting`. |
