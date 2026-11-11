---
name: cyclone-ui-nextjs
description: Set up or troubleshoot Cyclone UI and Tamagui in Next.js using @cyclone-ui/nextjs. Use for withCycloneUI, CycloneUIProvider, theme persistence, SSR and hydration, Server Component composition, or Cyclone integration with Cache Components, Partial Prerendering, and Partial Prefetching. Covers App Router and Pages Router with Turbopack or Webpack; use cyclone-ui-setup for copying registry components.
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
import { Footer, FooterContainer, FooterMain } from "@/components/ui/footer"

export default function Page() {
  return (
    <Footer>
      <FooterContainer>
        <FooterMain>Footer content</FooterMain>
      </FooterContainer>
    </Footer>
  )
}
```

Use the app's actual installed component path from `components.json` and verify the available named exports. For example, replace `<Footer.Container>` with `<FooterContainer>` and `<Footer.Main>` with `<FooterMain>`. Apply the same rule to other compound components, including nested members; do not assume every component exposes the same flat naming scheme.

Keep the page or layout a Server Component and preserve the installed components' `"use client"` directives. Do not add `"use client"` to the page merely to make dot notation work. Compound syntax such as `<Footer.Container>` is valid inside a Client Component; use an application-owned client wrapper only when client-side composition is actually needed. If a required flat export is missing, follow the installed-component protection rule below rather than modifying the installed file without specific instructions.

## Keep props serializable across the server/client boundary

Flat exports fix component lookup; props crossing into a Client Component must still be serializable by React. Keep ordinary event handlers, render callbacks, and function-bearing Tamagui config objects inside client modules. Use supported JSX children or slots for server-rendered composition, and an application-owned client wrapper when a component needs callbacks.

The default provider imports its config inside its own client module, so a server layout can render it without passing `config`. The `tokens` option below also replaces that import at build time. For a manually maintained custom config, import it inside an application-owned client provider instead of passing the config object from the server layout:

```tsx
// app/providers.tsx
"use client"

import { CycloneUIProvider } from "@cyclone-ui/nextjs/provider"
import type { PropsWithChildren } from "react"
import { config } from "@/tamagui.config" // Use the app's actual export.

export function AppProviders({ children }: PropsWithChildren) {
  return <CycloneUIProvider config={config}>{children}</CycloneUIProvider>
}
```

Define any `onChangeTheme` callback in that client module too. The server layout can pass `{children}` to `<AppProviders>`: those children retain their Server Component rendering. Do not import server page modules into the client wrapper or mark the entire layout/page `"use client"` to work around a prop error. React Server Function references are a separate supported mechanism, not ordinary event-handler functions.

## Forms and fields

`Form`, `Field` and the form controls render completely on the server; a form does not need its own `<Suspense>` boundary. `Select` and `RadioGroup` wrap their popover and roving-focus parts in an internal boundary. When a Cache Components prerender interrupts that part, the static shell gets a native `<select>` or native radios with the same name, value and `required` state. Those swap for the full control when it renders.

Every control renders a named native element, so the form posts its values without JavaScript. The browser enforces the field's `required` and constraint props (`minLength`, `maxLength`, `pattern`, `min`, `max`, `step`) until the page hydrates. After that, `Form` turns off the browser's validation and the fields report the same checks in their own messages. Submitting validates every field, including ones never focused, and focuses the first invalid control.

Pass a Server Function as `Form`'s `action` and its returned field errors as `errors`. `errors` is keyed by field name, such as Zod's `flattenError(error).fieldErrors`. Use `useActionState` in an application-owned Client Component:

```tsx
// app/signup/form.tsx
"use client"

import { useActionState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Form, FormSubmit } from "@/components/ui/form"
import { signup } from "./actions" // A "use server" module.

export function SignupForm() {
  const [state, formAction] = useActionState(signup, {})

  return (
    <Form name="signup" action={formAction} errors={state.errors}>
      <Field name="email" required>
        <FieldLabel>Email</FieldLabel>
        {/* An email input */}
      </Field>
      <FormSubmit>Sign up</FormSubmit>
    </Form>
  )
}
```

The errors render on the first server render, count as a submit attempt, don't disable submitting, and clear from a field when the user edits it. Without JavaScript, the browser posts the form and the page re-renders with the returned errors.

These props are serializable, so a Server Component can pass them: `name`, `required`, `disabled`, `readOnly`, the constraint props, `items`, `initialValues`, `errors` and a Server Function `action`. Keep `validate`, `format`, `parse`, `mask` and the `on*` callbacks in Client Components. Check the installed `Form` and `Field` for flat named exports before rendering their parts from a Server Component.

## Protect installed components

Do not change installed or added Cyclone UI component files unless the user specifically instructs you to do so. Use `components.json` to identify the configured component path and installed files. Framework setup, hydration fixes, styling requests, and application bug fixes do not authorize edits, refactors, formatting, renames, deletions, or registry updates/overwrites of those files. Keep changes in framework configuration, providers, application code, supported props, composition, application-owned wrappers, or theme configuration outside the installed components. If a component change is necessary, explain why and ask for specific instructions first. Scope any explicitly requested component addition or change narrowly and preserve unrelated installed files and local edits.

## Inspect the app first

Work in the target Next.js app. Before writing, find:

- **Router:** `app/` (or `src/app/`) is the App Router; `pages/` is the Pages Router. The provider setup differs (see below).
- **Versions:** inspect the installed Next.js, React, Tamagui, and Cyclone versions and fetch version-relevant official documentation (use Context7 when available). Current docs can describe flags absent from the installed version; do not silently upgrade dependencies to use them.
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
import { withCycloneUI } from "@cyclone-ui/nextjs"

export default withCycloneUI({
  reactStrictMode: true
})
```

Keep the app's existing options inside the call. `withCycloneUI` merges `env` and `turbopack.resolveAlias` with the app's own values, and the app's values win on conflicts. It accepts an object, a promised config, or a sync/async Next.js config function; phase functions stay lazy and receive Next.js's original phase and context. Preserve an existing function instead of evaluating it during module import.

For an object config without `tokens`, other wrappers can nest as `withBundleAnalyzer(withCycloneUI(config))`. If a third-party wrapper requires an object, compose it after resolving a function/promise and before the asynchronous token build; do not pass that wrapper a promise or config function it does not support.

What the wrapper adds, which helps when something breaks:

- `env.TAMAGUI_TARGET = "web"`: Cyclone components read this to render web-only styles (placeholders, animations). Don't override it.
- Turbopack aliases: `react-native` → `react-native-web` and `react-native-svg` → `@tamagui/react-native-svg`.
- A `webpack` hook that applies `@tamagui/next-plugin`. Next.js calls it only for Webpack builds.

## Render the provider

### App Router

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

- The layout can stay a server component, because the provider module already carries `"use client"`.
- `suppressHydrationWarning` on `<html>` is required: the provider sets the theme class before React hydrates.
- `CycloneUIProvider` already renders the `TamaguiProvider`, the Cyclone theme state, and `<Theme name="base">`, and it collects react-native-web styles on the server. Remove any other `TamaguiProvider` or `@cyclone-ui/state` `ThemeProvider` it replaces. Nesting them creates competing theme state.
- The provider accepts the `NextThemeProvider` props (`defaultTheme`, `forcedTheme`, `enableSystem`, `storageKey`, …), plus `config` (default: `@cyclone-ui/tokens/tamagui`), `disableInjectCSS` (default `false`), `mode` (a fixed SSR/hydration fallback, default `"light"`) and `modeCookie` (an optional client-written mirror of the resolved mode). Keep non-serializable props in a client wrapper as described above.

### Pages Router

Render `<CycloneUIProvider skipNextHead={false}>` in `pages/_app.tsx`, so the theme script goes through `next/script`. The provider collects react-native-web server styles with `useServerInsertedHTML`, which does nothing outside the App Router. A Pages Router app therefore needs a `pages/_document.tsx` that adds the react-native-web sheet. Tamagui 3 with React 19 injects its own runtime CSS; if using extracted theme CSS, import that CSS and pass `disableInjectCSS`. Follow the `_document` section of the [Tamagui Next.js guide](https://tamagui.dev/docs/guides/next-js). Without it, the first paint is unstyled.

## Theme switching

Read and change the theme with `useThemeSetting` from `@cyclone-ui/nextjs/provider`, in a client component:

```tsx
"use client"

import { useThemeSetting } from "@cyclone-ui/nextjs/provider"

export function ThemeToggle() {
  const theme = useThemeSetting()

  return <button onClick={theme.toggle}>Change theme</button>
}
```

`useThemeSetting` controls `@tamagui/next-theme`, which is the source of truth: it stores the choice and applies it before hydration. `useThemeMode` from `@cyclone-ui/state/theme` correctly reads the active mode. But don't change the theme with `useThemeActions`: it changes only Cyclone's mirrored state, so the choice is lost on reload.

While `forcedTheme` is set, theme changes are blocked. Hide or disable the
toggle while a theme is forced; releasing it restores the stored preference.
System preference changes apply when the selected setting is `system`.

## Cache Components and static shells

When adopting caching in the consuming App Router app, check its installed Next.js version first. Cache Components is available in Next.js 16; enabling `cacheComponents` includes Partial Prerendering (PPR), which combines a prerendered shell with dynamic content streamed through Suspense. Do not add the older `experimental.ppr` flag alongside it. Partial Prefetching is a separate navigation feature introduced in Next.js 16.3 and requires Cache Components.

For Next.js 16.3+ with both features requested:

```ts
import { withCycloneUI } from "@cyclone-ui/nextjs"

export default withCycloneUI({
  cacheComponents: true,
  partialPrefetching: true
})
```

`withCycloneUI` preserves these options; it does not choose a caching policy or enable them globally. On Next.js 16.0–16.2, use `cacheComponents` without the unsupported `partialPrefetching` option. In an existing app, audit links that already use `prefetch={true}` before enabling Partial Prefetching because their behavior changes (see below).

### Preserve the provider shell

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
`searchParams` in the component that needs them under a local `<Suspense>`
boundary, with a meaningful fallback. Do not put those reads inside `"use cache"`
or move the whole provider behind that boundary. The boundary must be above the
read; adding Suspense inside a component after it has awaited request data is
too late. Server Components, including cached ones, can be passed as children
through the client provider.

Static JSX needs no `"use cache"` directive. Cache reusable application data or
server-rendered UI when its freshness policy allows reuse; choose `cacheLife`
and, where needed, `cacheTag` plus mutation invalidation. Keep uncached live or
request-specific work behind local Suspense boundaries. Do not add `"use cache"`
to the client provider, copied client components, or every page as a generic
performance fix. Passing dynamic children through a cached wrapper does not
cache those children.

Use semantic theme tokens and relative sub-themes such as `base` in the shell.
Avoid choosing server markup or literal colors from a browser theme preference.
Theme-dependent text from `useThemeSetting().current`, `resolvedTheme`,
`useRootTheme`, or `useThemeMode` must wait until that component mounts. These
values can differ between the server and the first browser render. The constant-label toggle
above needs no mount guard. If showing a current-mode label, guard only that
label/control, keeping the rest of the shell rendered. `suppressHydrationWarning`
on `<html>` does not suppress mismatches in descendants.

### Choose prefetching per navigation

With `partialPrefetching: true`, default links and `prefetch="auto"` fetch a
reusable route App Shell. It contains output independent of a link's URL;
links to the same route reuse it. A shell may also contain session output that
Next.js caches per session on the client, so do not assume every shell is public
or identical for every user.

Use `<Link prefetch={true}>` on selected application links when cached content
depending on `params`, `searchParams`, or the full URL needs to be available
before navigation. With Partial Prefetching enabled, this no longer includes
the uncached dynamic content from the legacy full prefetch. That content still
streams after navigation behind Suspense. `prefetch={false}` disables prefetch
for an individual link when that is appropriate.

Do not hard-code `prefetch={true}` in a shared Cyclone primitive or convert all
links at once. Check the destination, desired immediate UI, caching policy, and
network cost. Test the concrete source-to-destination URL and relevant query
strings; a successful initial page load does not prove the soft navigation or
prefetch behavior. Use framework development insights to find boundaries and
production navigation/network evidence to verify the result.

See [Next.js caching](https://nextjs.org/docs/app/getting-started/caching),
[adopting Partial Prefetching](https://nextjs.org/docs/app/guides/adopting-partial-prefetching),
and [optimizing prefetching](https://nextjs.org/docs/app/guides/optimizing-prefetching).

## Webpack and production CSS

For `next build --webpack`, install `@tamagui/next-plugin` and pass any [plugin options](https://tamagui.dev/docs/guides/next-js) as the second argument. The defaults are `config: "@cyclone-ui/tokens/tamagui"`, `components: ["@tamagui/core"]`, and `appDir: true`.

```ts
export default withCycloneUI(nextConfig, {
  outputCSS:
    process.env.NODE_ENV === "production"
      ? "./public/tamagui.generated.css"
      : null,
  disableExtraction: process.env.NODE_ENV === "development"
})
```

If you emit `outputCSS`, import that CSS in the root layout and pass `disableInjectCSS` to the provider so the theme CSS isn't injected twice.

Turbopack doesn't run the Tamagui compiler. Builds still work, with styles resolved at runtime. To optimize production output, run the Tamagui CLI (`@tamagui/cli`) before `next build`, pointing it at the app directory (`./app` or `./src`):

```json
{ "scripts": { "build": "tamagui build --target web ./app -- next build" } }
```

## Custom tokens

The default config is the published Cyclone theme. If the app has its own design tokens, pass them as `tokens`: a DTCG token object, or token file paths or globs (theme-named files such as `light.tokens.json` / `dark.tokens.json` become the light and dark themes).

```ts
export default withCycloneUI(nextConfig, { tokens: "tokens/**/*.json" })
```

`withCycloneUI` then builds the Tamagui config into `.cyclone-ui/tamagui.config.ts` (add `.cyclone-ui` to `.gitignore`) and aliases `@cyclone-ui/tokens/tamagui` to it, so the provider and the Webpack compiler need no `config`. With an object config, this returns a promise; with a phase function, token generation happens when Next.js resolves that function. Apply object-only wrappers to the resolved input config before the token build.

## Verify

Run the app's `next build`, then load a page with a Cyclone component in `next start` or `next dev`. Check:

- The component is styled on first paint (view the page source and look for the react-native-web `<style>`).
- The console shows no hydration warning.
- Toggling the theme flips `<html>`'s class and survives a reload, including a saved dark preference with a light system setting.
- With `system` selected, system preference changes keep the active mode in sync. Changes to `forcedTheme` also keep Tamagui, `useThemeMode`, and any `modeCookie` in sync.
- With Cache Components enabled, inspect the production route's prerender result and HTML shell for theme CSS, the inline theme script, useful static content, and local dynamic fallbacks. Test client navigation and delayed Suspense hydration as well as the initial load. A dynamic route label alone does not prove the useful shell is missing.
- If changing prefetching, verify the selected link's destination URL, what renders immediately after clicking, what streams later, and the production prefetch requests. Do not infer this from a build pass or development-mode network behavior.

Report which checks ran, and say so if only the build was verified.

## Troubleshooting

| Symptom                                                                                                                                       | Likely cause                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Footer.Container` is undefined on the server, `Element type is invalid`, or `Cannot access ... on the server` when using compound components | A Server Component is reading static properties from a client reference. Import and render the available flat named exports, such as `FooterContainer`, instead. |
| `Unexpected token '<'` / JSX parse error inside `@cyclone-ui/state`                                                                           | `@cyclone-ui/state` 0.0.31 or earlier, which shipped raw JSX in `dist`. Upgrade it to the version `@cyclone-ui/nextjs` lists as a peer.                          |
| Can't resolve `react-native` or `react-native-svg`                                                                                            | Missing `react-native-web` or `@tamagui/react-native-svg`, or (Webpack) the config isn't wrapped.                                                                |
| `Cannot find module '@tamagui/next-plugin'`                                                                                                   | A Webpack build without the plugin installed.                                                                                                                    |
| Hydration warning on `<html>`                                                                                                                 | Missing `suppressHydrationWarning`.                                                                                                                              |
| Unstyled first paint in the Pages Router                                                                                                      | Missing `_document` style collection (see above).                                                                                                                |
| Placeholders or animations missing only on web                                                                                                | `TAMAGUI_TARGET` overridden or unset; check `env` in the final config.                                                                                           |
| Theme resets on reload                                                                                                                        | Changed with `useThemeActions` instead of `useThemeSetting`.                                                                                                     |
