# design-sync notes — Cyclone UI

## Setup / build

- **Scope (first sync, 2026-10-07): core primitives only** — the 21 packages listed in `.design-sync/pkg/src/index.mjs` / `dist/index.d.ts`. To add a component: add an explicit `export { … } from "../../../components/<c>/dist/index.mjs"` line to BOTH files, add its nx project to `cfg.buildCmd`, re-run the pre-build. Out-of-scope storybook titles drop via `[TITLE_UNMAPPED]` (expected).
- [GENERAL] **Each component is its own npm package** (`@cyclone-ui/<name>`); the converter wants one package. `.design-sync/pkg/` is a repo-owned aggregate package (`@cyclone-ui/design-sync`, never published): `src/index.mjs` → `build.mjs` → `dist/index.mjs` (the converter's `cfg.entry`); `dist/index.d.ts` is hand-written and is what defines the synced component set.
- [GENERAL] **Run `node .design-sync/pkg/build.mjs` before the converter** (it's in `cfg.buildCmd`). It needs `.ds-sync/node_modules/esbuild` (staged converter deps). Why it exists:
  - component dists keep **raw JSX in `.mjs`** (Storybook's Vite compiles it) → converter esbuild fails `JSX syntax extension is not currently enabled`; `bundle.mjs` is not forkable, so the pre-build compiles with `loader: {".mjs": "jsx"}`.
  - pnpm resolves **two `@tamagui/core` peer-variants** → two Tamagui instances → `Can't find Tamagui configuration`. Pre-build resolves every bare import from `apps/storybook` (its `resolve.dedupe` equivalent).
  - mirrors `apps/storybook/.storybook/main.ts`: `react-native`→`react-native-web`, `react-native-svg`→`@tamagui/react-native-svg`, `node:*`/`@stryke/env/runtime-checks` → `.storybook/shims/*`, `.web.*` resolve extensions (else `react-native-safe-area-context` pulls Flow-typed RN internals), `NODE_ENV=production` + Storybook's globals.
- [GENERAL] **`@cyclone-ui/state` dist is minified with JSX preserved** — minified `<e duration=…>` becomes a DOM tag (`The tag <e> is unrecognized`, `initialState` on a DOM element). Storybook aliases workspace packages to `src/` so never sees it; the pre-build resolves `@cyclone-ui/state[/sub]` to `packages/state/src`. Upstream fix belongs in the state package's build (don't minify, or compile JSX).
- [GENERAL] **`themes/tamagui` must be the FIRST export** in `src/index.mjs`: it calls `createTamagui()` at module scope and components read the config at module scope (`Haven't called createTamagui yet`).
- [GENERAL] **Typed components need explicit named re-exports**, not `export *`: `Spinner`/`Tabs`/`Tag` collided with the runtime-only `field`/`form`/`icons` star exports and were silently dropped (`[BUNDLE_EXPORT] … not a component`).
- Runtime-only on the global (not synced as components): `field`, `form`, `icons`, all of `@tamagui/core` + `@tamagui/stacks` — stories import them; `cfg.storyImports.shim` routes those imports to `window.CycloneUI` so previews share the bundle's single Tamagui instance.
- `cfg.provider` mirrors the net effect of `withCycloneTheme` in `.storybook/preview-decorators.tsx`: `SafeAreaProvider` → `TamaguiProvider{config: $ref tamaguiConfig, defaultTheme: "dark"}` → `Theme dark_base` → `PortalProvider` → `MessageProvider`. The decorator bundle itself fails (`@fonts/fonts.css` imports `.ttf`).
- [GENERAL] **Not `@cyclone-ui/state`'s `ThemeProvider`**: it picks the mode from `prefers-color-scheme` and only falls back to `defaultMode`; there is no prop to pin it. The headless capture browser is light, so previews rendered a light root with a nested `Theme dark_base` (washed-out gray buttons, invisible text), while Storybook forces dark via `SyncColorMode` → `changeMode`. `TamaguiProvider defaultTheme="dark"` is what `ThemeStateManager` renders after that. None of the 21 synced components import `@cyclone-ui/state`, and `MessageProvider` doesn't use `ThemeApi`.
- [GENERAL] **The pre-build also writes `dist/styles.css`** (picked up as the package stylesheet): `fonts/fonts.css` with the four variable fonts copied into `dist/fonts/` (the converter drops `url()`s outside the package dir → `[FONT_DANGLING]`), plus the `body { font-family }` rule read from `.storybook/preview-body.html`. Without that body rule, react-native-web `<input>` text (Input value/placeholder, RadioGroup labels, Select value) falls back to Times New Roman.
- [GENERAL] **No `process.env.TAMAGUI_TARGET` define in the pre-build**: Storybook doesn't define it, and defining `"web"` enables `InputValue`'s `::placeholder` `<style>` block that is dead code in Storybook (placeholder near-black vs grey).
- `.design-sync/pkg/dist/` is generated (gitignored); the hand-written typed surface is `.design-sync/pkg/src/index.d.ts`.
- `pnpm` is only on PATH inside `devenv shell`. `nx run-many` project names are bare (`button`, `state`, `themes`), not `@cyclone-ui/*`.
- Converter `--node-modules apps/storybook/node_modules`.

## Validator patch (re-apply after every re-stage of `.ds-sync/`)

The skill's `package-validate.mjs` false-fails every react-native-web preview (user approved patching the staged copy, 2026-10-07):

1. roots selector `document.querySelectorAll('#root, [id^="r"]')` matches RNW's `<head><style id="react-native-stylesheet">` as `roots[0]` → `rootEmpty` for every component. Fix: `document.body.querySelectorAll(...)`.
2. it evaluates at `networkidle`, before React commits heavy cards (Button: 215 mounts, ~2s). Fix: after the `page.goto(...)` in the render check, add
   `await page.waitForFunction(() => document.body.querySelector('#root > *, [id^="r"] > *'), null, { timeout: 15000 }).catch(() => {});`
`.ds-sync/storybook/compare.mjs` needs two patches too (lines marked `// cyclone-ui patch:`):
3. after the preview `dsPage.goto(...)` (grid page), wait for the cell list: `await dsPage.waitForFunction(() => Array.isArray(window.__dsCells) || document.querySelector('section.ds-cell'), null, { timeout: 15_000 }).catch(() => {});` — without it, pairing intermittently reports every story `unpaired` (the 7 MB bundle is still evaluating at networkidle).
4. in `storyShot`, after `await settleRender(dsPage);` add `await dsPage.waitForTimeout(1000);` — without it, `Button.Icon` content was captured before it rendered (Icon/Rounded/Circular stories showed an empty button).

## Grading conventions (from the solo phase)

- Storybook crops its shot to the story root; the preview frame has ~24px page padding and is a few px narrower — text can wrap one word earlier. Framing, not a mismatch (HeadingText: computed font family/size/weight/letter-spacing identical on both sides).
- The dark theme paints near-white text on the white canvas on BOTH sides (no page background in either). Faint-on-both is expected; faint-on-one-side is a mismatch.
- Storybook sometimes captures an animated vector mid-animation (Callout Discovery icon drawing in); the preview shows the settled frame. Match, with a note.
- Overlay components (Dialog, Tooltip, Select) render their closed trigger in stories; `[PORTAL?]` → `cardMode: "single"`.
- Thin lines (Divider, Progress tracks) look lighter on one side of the downscaled sheet — pixel-diff the raw shots with the preview's 24px padding offset (sb x,y == ds x+24,y+24).
- Badge: storybook crops its negative-offset count bubble at the root; the preview shows it whole. Framing.

## Skips and per-component notes

- Tag `triggers-tag--removable` skipped: its play function clicks remove and waits for the tag to disappear, so storybook's root is empty (sb-error). The other removable stories still show the look.
- Progress `Success` adds a random 0–4 every second (setInterval) — nondeterministic; expect fill differences.
- Select's first story sometimes captures before the chevron/divider mount; a plain recapture fixes it.

## Design-system bugs found (faithfully reproduced in the sync, fix in the components)

- **Spinner is invisible** (storybook too): `components/spinner/src/Spinner.tsx` defaults `color="accent"` and only resolves theme values when `color[0] === "$"` (v2 token prefix that v3 dropped) → RNW gets the invalid CSS color `accent`, stroke none. `[RENDER_THIN]` on Spinner is this bug. Fix: `theme[color] ?? theme["$" + color]`.
- **Serif fallbacks**: BodyText `Bold`/`Small Bold` and the Card/Callout eyebrow text render in the browser serif on both sides — a font family that isn't configured (see the SizableText `body` family issue).
- Input `placeholderTextColor="onAccentDisabled"` resolves near-black on the dark input; storybook hides it only because the `::placeholder` style is dead code there.

## Re-sync risks

- **Staged-script patches vanish on re-stage.** Re-copying `.ds-sync/` (every re-sync, §7 step 1) reverts the 4 validator/compare patches above; reapply them before running the driver, or every preview false-fails `rootEmpty` and pairing goes intermittently `unpaired`.
- **Pre-build is a manual step.** The driver does NOT run `cfg.buildCmd`; run the nx builds + `node .design-sync/pkg/build.mjs` first, or the bundle ships stale component dists. `.design-sync/pkg/dist/` is gitignored, so a fresh clone must run it before anything else.
- **Mirrors of Storybook config, by hand:** the pre-build's aliases/defines/resolve-extensions/dedupe copy `apps/storybook/.storybook/main.ts`; `cfg.provider` copies `withCycloneTheme`; `dist/styles.css` copies `preview.tsx`'s CSS imports + `preview-body.html`'s body rule. If Storybook's config changes, update these to match, then rebuild `sb-reference`.
- **State built from source:** `@cyclone-ui/state` is resolved to `packages/state/src` because its dist is minified with raw JSX. If that package's build is fixed, this alias can go.
- **Partially verified:** compare caps at 6 stories per component, so the tail stories (e.g. Tag 43 of 49, Button 209 of 215) were never captured. Most components were graded on their primary story with `sibling-trusted` siblings; exhaustive grading covered Button, HeadingText, Callout, Dialog, Tooltip, Select, Tag, Switch, Divider, Progress, Spinner.
- **Known-faithful-but-broken components** (graded match because storybook matches): Spinner invisible, BodyText bold + Card/Callout eyebrow serif fallbacks. When those are fixed upstream, the grades re-key automatically (story/source change) — re-grade then.
- **Nondeterministic:** Progress `Success` story (random interval).
- **Toolchain at sync time:** Tamagui 3.0.0-beta.1422.1, React 19.3.0, react-native-web 0.19.12, Playwright 1.63, Node 22.
