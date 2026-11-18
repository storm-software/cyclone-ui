<!-- START header -->
<!-- END header -->

# Cyclone UI - NextJS

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
- Layers Tamagui's CSS below Tailwind CSS utilities (`tailwind` option)
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
import { withCycloneUI } from "@cyclone-ui/nextjs"

export default withCycloneUI({
  reactStrictMode: true
})
```

The wrapper also accepts a promised config or a sync/async Next.js config
function. Phase functions remain lazy and receive the original phase and context;
existing `cacheComponents` and `partialPrefetching` values are preserved.

Render the provider in the root layout. The provider sets a class on `<html>`
before React hydrates, so add `suppressHydrationWarning` there:

```tsx
// app/layout.tsx
import { CycloneUIProvider } from "@cyclone-ui/nextjs/provider"

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
  )
}
```

The layout remains a Server Component. The client provider accepts server-rendered
children without moving those child modules into the client bundle. Props that
cross this boundary must be serializable by React. The default config is already
imported inside the provider; if passing a custom Tamagui `config` or an ordinary
callback such as `onChangeTheme`, define them inside an application-owned client
wrapper:

```tsx
// app/providers.tsx
"use client"

import { CycloneUIProvider } from "@cyclone-ui/nextjs/provider"
import type { PropsWithChildren } from "react"
import { config } from "@/tamagui.config" // Use your config's actual export.

export function AppProviders({ children }: PropsWithChildren) {
  return <CycloneUIProvider config={config}>{children}</CycloneUIProvider>
}
```

Render `<AppProviders>{children}</AppProviders>` from the server layout. The
build-time `tokens` option below also replaces the provider's config import, so
it needs no `config` prop.

Read or change the theme with `useThemeSetting`:

```tsx
"use client"

import { useThemeSetting } from "@cyclone-ui/nextjs/provider"

export function ThemeToggle() {
  const theme = useThemeSetting()

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

Cache Components in Next.js 16 includes Partial Prerendering (PPR): a prerendered
shell with dynamic content streamed through Suspense. Partial Prefetching is a
separate navigation feature introduced in Next.js 16.3 and requires Cache
Components. Check your installed Next.js version before adding flags. For
Next.js 16.3+ when adopting both features:

```ts
import { withCycloneUI } from "@cyclone-ui/nextjs"

export default withCycloneUI({
  cacheComponents: true,
  partialPrefetching: true
})
```

`withCycloneUI` preserves these options; it does not enable them globally or
choose a caching policy. On Next.js 16.0–16.2, omit `partialPrefetching`. Do not
combine `cacheComponents` with the older `experimental.ppr` flag.

Keep the root layout synchronous and render `CycloneUIProvider` directly around
its children, as above. The provider does not read `cookies()` or `headers()`
on the server. Its inline script applies the saved or system theme to the same
prerendered shell before hydration. Keep the provider outside request-dependent
Suspense boundaries so it and its script are included in the shell.

Do not read a theme cookie in the root layout just to populate `mode`. `mode` is
an SSR/hydration fallback, not the user's persisted preference. `modeCookie` is
an optional client-written mirror of the resolved light/dark mode; it does not
require a server cookie read or preserve the distinction between system and an
explicit choice. Put request reads such as `cookies()`, `headers()`, and
`searchParams` inside the component that needs them, under a local `<Suspense>`
boundary with a useful fallback. Do not put those reads inside `"use cache"` or
move the whole provider behind that boundary. Server Components, including
cached ones, can be passed as children through the client provider.

Static JSX needs no `"use cache"`. Cache reusable application data or server UI
according to its freshness and invalidation policy; keep uncached live work
behind local Suspense. Do not add the directive to client providers or client
primitives as a general optimization.

Use semantic theme tokens and relative sub-themes such as `base` in the shell.
Avoid choosing server markup or literal colors from a browser theme preference.
Theme-dependent text from `useThemeSetting().current`, `resolvedTheme`,
`useRootTheme`, or `useThemeMode` must wait until that component mounts. These
values can differ between the server and the first browser render. The constant-label toggle
above needs no mount guard. If showing a current-mode label, guard only that
label/control, keeping the rest of the shell rendered. `suppressHydrationWarning`
on `<html>` does not suppress mismatches in descendants.

With Partial Prefetching enabled, default links prefetch a reusable route App
Shell rather than all of a destination's content. Use `prefetch={true}` on
selected application links to also resolve cached URL-specific content depending
on `params`, `searchParams`, or the full URL. It no longer includes uncached
dynamic content from the legacy full prefetch; that content streams after
navigation. Audit existing `prefetch={true}` links before enabling the flag, and
verify concrete URL navigations in production. Avoid imposing full prefetching
on every shared link primitive.

See [Next.js caching](https://nextjs.org/docs/app/getting-started/caching),
[adopting Partial Prefetching](https://nextjs.org/docs/app/guides/adopting-partial-prefetching),
and [optimizing prefetching](https://nextjs.org/docs/app/guides/optimizing-prefetching).

### Custom design tokens

Pass `tokens` to build the Tamagui config from your own design tokens instead
of the Cyclone UI defaults. Use a DTCG token object, or token file paths or
globs relative to the working directory:

```ts
// next.config.ts
import { withCycloneUI } from "@cyclone-ui/nextjs"

export default withCycloneUI(
  { reactStrictMode: true },
  {
    tokens: [
      "tokens/primitives.json",
      "tokens/light.tokens.json",
      "tokens/dark.tokens.json"
    ]
  }
)
```

Files with a theme name (`light.tokens.json`, `dark.tokens.json`, …) become
the `light` and `dark` themes. The tokens go through the same preprocessor and
generator as `@cyclone-ui/tokens`, and a `razorwind.config.ts` in the project
still applies (for example its fonts).

With `tokens` and an object config, `withCycloneUI` returns a promise, which
Next.js accepts as the config export. For a phase function, token generation runs
when Next.js resolves that function. Compose object-only third-party wrappers
before the token build. The config is written to `.cyclone-ui/tamagui.config.ts`
(add `.cyclone-ui` to `.gitignore`) and replaces `@cyclone-ui/tokens/tamagui`
everywhere, so `CycloneUIProvider` and the Webpack compiler use it. With
pnpm, Webpack builds also need `@tamagui/web` and `motion` installed in the
app, because the Tamagui compiler evaluates the generated config from the
project root.

### Tailwind CSS

Pass `tailwind: true` to use Tailwind CSS v4 classes on Cyclone components and
your own markup:

```ts
// next.config.ts
import { withCycloneUI } from "@cyclone-ui/nextjs"

export default withCycloneUI({}, { tailwind: true })
```

Then import the Cyclone theme before Tailwind in `app/globals.css`:

```css
@import "@cyclone-ui/tokens/tailwind.css";
@import "tailwindcss";
```

Tamagui writes its CSS inside `@layer tamagui`, and `CycloneUIProvider`
declares the layer order `theme, base, tamagui, components, utilities` ahead
of it. Tailwind utilities passed as `className` then override component styles,
and Tailwind's preflight doesn't. Classes such as `bg-primary`, `p-lg` and
`rounded-container` use the Cyclone themes and tokens, and `dark:` follows the
Cyclone theme. Webpack builds default to `disableExtraction: true`, because
`@tamagui/next-plugin` writes extracted CSS outside the layer. With `tokens`,
import the generated `.cyclone-ui/tailwind.css` instead (Node.js 22.18 or
later). See
[Use Tailwind CSS with Cyclone UI](../../docs/packages/guides/tailwind.md).

### Provider props

`CycloneUIProvider` accepts the
[`NextThemeProvider` props](https://tamagui.dev/docs/guides/next-js#themes)
(`defaultTheme`, `forcedTheme`, `storageKey`, `enableSystem`, and others), and:

| Prop               | Default                                      | Description                                                                          |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| `config`           | The config from `@cyclone-ui/tokens/tamagui` | The Tamagui config; import custom configs inside a client wrapper                    |
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
})
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
devenv shell -- pnpm nx run nextjs:build
```

The production integration rig exercises the source provider with Cache
Components and Partial Prefetching. From the workspace root, run:

```bash
devenv shell -- pnpm --filter @cyclone-ui/nextjs exec playwright test
```

The Playwright config builds and starts the fixture automatically, setting
`EXPOSE_TESTING_API=1` for both build and start so the raw Next.js config can
enable the test API. Use Node 22.18+ for the fixture config's TypeScript imports.
`CHROMIUM_PATH` selects an existing Chromium executable; otherwise Playwright
uses its installed browser. See [instant-nav.rig.md](./instant-nav.rig.md) for
the rig and its assertions.

The checks hold request content back to inspect the immediate shell on initial
load and client navigation, then verify the streamed content arrives. They also
run `test/theme.browser.mjs` against the production server to cover shell CSS
before hydration, persisted preferences, forced themes, system changes, cookies,
and delayed hydration. The theme checks use a mount-safe diagnostic label because
a shared shell cannot know the browser's stored preference.
