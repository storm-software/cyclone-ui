# @cyclone-ui/nextjs

Set up [Tamagui](https://tamagui.dev) and Cyclone UI components in a Next.js
application. The package has two entry points:

- `@cyclone-ui/nextjs`: `withCycloneUI`, a wrapper for `next.config.ts`
- `@cyclone-ui/nextjs/provider`: `CycloneUIProvider`, the root client provider
  with server-rendered light and dark themes

They follow the [Tamagui Next.js guide](https://tamagui.dev/docs/guides/next-js),
using `@tamagui/next-plugin` and `@tamagui/next-theme`.

## Quick Features

- Turbopack aliases for `react-native` → `react-native-web` and
  `react-native-svg` → `@tamagui/react-native-svg`
- The Tamagui compiler for Webpack builds through `@tamagui/next-plugin`
- Builds the Tamagui config from your own design tokens (`tokens` option)
- Defines `process.env.TAMAGUI_TARGET`, which Cyclone components read to render
  web-only styles
- Stores the light, dark or system setting and applies it before hydration
- Collects react-native-web styles during server rendering

## Installing

Using [pnpm](http://pnpm.io):

```bash
pnpm add @cyclone-ui/nextjs @cyclone-ui/state @cyclone-ui/tokens @tamagui/core jotai react-native-web
```

Add `@tamagui/react-native-svg` if the app renders SVG icons, and
`@tamagui/next-plugin` if it builds with Webpack.

## Usage

Wrap the Next.js config:

```ts
// next.config.ts
import { withCycloneUI } from "@cyclone-ui/nextjs";

export default withCycloneUI({
  reactStrictMode: true
});
```

Render the provider in the root layout. The provider sets a class on `<html>`
before React hydrates, so add `suppressHydrationWarning` there:

```tsx
// app/layout.tsx
import { CycloneUIProvider } from "@cyclone-ui/nextjs/provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CycloneUIProvider>{children}</CycloneUIProvider>
      </body>
    </html>
  );
}
```

Read or change the theme with `useThemeSetting`:

```tsx
"use client";

import { useThemeSetting } from "@cyclone-ui/nextjs/provider";

export function ThemeToggle() {
  const theme = useThemeSetting();

  return <button onClick={theme.toggle}>Change theme</button>
}
```

`useThemeMode` from `@cyclone-ui/state/theme` also returns the active mode.
Change the theme through `useThemeSetting`: `useThemeActions` changes the
Cyclone state only, so the choice isn't saved.

While `forcedTheme` is set, theme changes are blocked. Hide or disable the
toggle while a theme is forced; releasing it restores the stored preference.
System preference changes apply when the selected setting is `system`.

### Cache Components and static shells

Enable the caching options explicitly in the consuming App Router app:

```ts
import { withCycloneUI } from "@cyclone-ui/nextjs";

export default withCycloneUI({
  cacheComponents: true,
  partialPrefetching: true
});
```

`withCycloneUI` preserves these options; it does not enable them globally.
`partialPrefetching` requires `cacheComponents` and a Next.js version that
supports the option. It changes Link prefetch behavior to fetch the static App
Shell; it does not make request-dependent content static.

Keep the root layout synchronous and render `CycloneUIProvider` directly around
its children, as above. The provider does not read `cookies()` or `headers()`
on the server. Its inline script applies the saved or system theme to the same
prerendered shell before hydration. Keep the provider outside request-dependent
Suspense boundaries so it and its script are included in the shell.

Do not read a theme cookie in the root layout just to populate `mode`. `mode` is
an SSR/hydration fallback, not the user's persisted preference. `modeCookie` is
an optional client-written mirror of the resolved light/dark mode; it does not
require a server cookie read or preserve the distinction between system and an
explicit choice. If a server component needs request cookies, put that component
under a local `<Suspense>` boundary. Do not put cookie reads inside `"use cache"`
or move the whole provider behind that boundary. Cached Server Components can
be passed as children through the client provider.

Use semantic theme tokens and relative sub-themes such as `base` in the shell.
Avoid choosing server markup or literal colors from a browser theme preference.
Theme-dependent text from `useThemeSetting().current`, `resolvedTheme`,
`useRootTheme`, or `useThemeMode` must wait until that component mounts. These values can differ
between the server and the first browser render. The constant-label toggle
above needs no mount guard. If showing a current-mode label, guard only that
label/control, keeping the rest of the shell rendered. `suppressHydrationWarning`
on `<html>` does not suppress mismatches in descendants.

See [Next.js caching](https://nextjs.org/docs/app/getting-started/caching) and
[partialPrefetching](https://nextjs.org/docs/app/api-reference/config/next-config-js/partialPrefetching).

### Custom design tokens

Pass `tokens` to build the Tamagui config from your own design tokens instead
of the Cyclone UI defaults. Use a DTCG token object, or token file paths or
globs relative to the working directory:

```ts
// next.config.ts
import { withCycloneUI } from "@cyclone-ui/nextjs";

export default withCycloneUI(
  { reactStrictMode: true },
  {
    tokens: [
      "tokens/primitives.json",
      "tokens/light.tokens.json",
      "tokens/dark.tokens.json"
    ]
  }
);
```

Files with a theme name (`light.tokens.json`, `dark.tokens.json`, …) become
the `light` and `dark` themes. The tokens go through the same preprocessor and
generator as `@cyclone-ui/tokens`, and a `razorwind.config.ts` in the project
still applies (for example its fonts).

With `tokens`, `withCycloneUI` returns a promise, which Next.js accepts as the
config export. The config is written to `.cyclone-ui/tamagui.config.ts`
(add `.cyclone-ui` to `.gitignore`) and replaces `@cyclone-ui/tokens/tamagui`
everywhere, so `CycloneUIProvider` and the Webpack compiler use it. With
pnpm, Webpack builds also need `@tamagui/web` and `motion` installed in the
app, because the Tamagui compiler evaluates the generated config from the
project root.

### Provider props

`CycloneUIProvider` accepts the
[`NextThemeProvider` props](https://tamagui.dev/docs/guides/next-js#themes)
(`defaultTheme`, `forcedTheme`, `storageKey`, `enableSystem`, and others), and:

| Prop               | Default                                      | Description                                                                          |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| `config`           | The config from `@cyclone-ui/tokens/tamagui` | The Tamagui config                                                                   |
| `disableInjectCSS` | `false`                                      | Skip runtime theme CSS when the app imports CSS generated by the Tamagui compiler    |
| `skipNextHead`     | `true`                                       | Render the theme script inline. Set `false` in the Pages Router to use `next/script` |
| `mode`             | `"light"`                                    | The fallback mode shared by the server and initial client render                     |
| `modeCookie`       | —                                            | An optional client-written cookie containing the resolved mode                       |

### Webpack

`next build --webpack` and `next dev --webpack` run the Tamagui compiler through
`@tamagui/next-plugin`. Install it, then pass any
[plugin options](https://tamagui.dev/docs/guides/next-js#older-versions-webpack)
as the second argument:

```ts
export default withCycloneUI(nextConfig, {
  outputCSS:
    process.env.NODE_ENV === "production"
      ? "./public/tamagui.generated.css"
      : null,
  disableExtraction: process.env.NODE_ENV === "development"
});
```

The defaults are `config: "@cyclone-ui/tokens/tamagui"`,
`components: ["@tamagui/core"]` and `appDir: true`. A `tamagui.build.ts` file
in the project root overrides them.

### Optimizing Turbopack builds

Turbopack doesn't run the Tamagui compiler. To optimize production builds, run
it with the Tamagui CLI (`@tamagui/cli`) before `next build`:

```json
{
  "scripts": {
    "build": "tamagui build --target web ./app -- next build"
  }
}
```

## Development

```bash
pnpm nx run nextjs:build
```

The production integration fixture exercises the source provider with Cache
Components and Partial Prefetching. From the workspace root (Node 22.18+ for
TypeScript imports in the fixture config), build and start it:

```bash
devenv shell -- env NODE_ENV=production node packages/nextjs/node_modules/next/dist/bin/next build packages/nextjs/test/fixture
devenv shell -- env NODE_ENV=production node packages/nextjs/node_modules/next/dist/bin/next start packages/nextjs/test/fixture -p 3197
```

In another terminal, run the browser checks with Playwright Chromium installed:

```bash
devenv shell -- node packages/nextjs/test/theme.browser.mjs
```

`CHROMIUM_PATH` selects an existing Chromium executable; `TEST_URL` overrides
`http://localhost:3197`. The checks cover shell CSS before hydration, persisted
preferences, forced themes, system changes, cookies, streamed content, and client
navigation. They use a mount-safe diagnostic label because a shared shell cannot
know the browser's stored preference.
