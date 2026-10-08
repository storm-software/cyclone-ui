# design-sync notes — Cyclone UI

## Scope expansion (2026-10-08): all 100 storied components synced

Uploaded to project `ff43a5f9-…` with a fresh `_ds_sync.json` anchor. 99 components carried forward with every captured story `match`/`close`; the `close` grades are all play-function or layout framing (bullets below). Bullets in this section are the learnings from that run.

- [GENERAL] **Owned previews must import DS components from `@ds-stories/components/<c>/src/index`, never `.../src/<File>`**: a non-index file path bundles the component source (and a second `@tamagui/constants`, which reads bare `process.env` → `ReferenceError: process is not defined`, root empty). Hit on Page.
- [GENERAL] **Bare `react-native` imports in stories bundle raw RN (Flow syntax → `! preview build failed`).** Storybook aliases it to react-native-web; an owned preview imports from `"react-native-web"` instead (RedactedAnimation `Image`).
- [GENERAL] **Animated vectors (`components/vectors`) mostly capture an empty or partly drawn frame on BOTH sides** (e.g. Check's story starts `isComplete=false` and toggles every 3s) and default to near-white `onAccent` strokes on the white canvas. The `[RENDER_THIN] … paint nothing` warns on vectors are this - grade on pixel equality (raw sb vs ds), not on visibility.
- [GENERAL] **Lib fork `.design-sync/overrides/preview-gen-storybook.mjs`** (declared in `cfg.libOverrides`): the stock compose context passes `id: ''`, and every `*Field` story renders `<Form name={`formName-${id}`}>` → all cells of a grid card share one form store (`formName-`), so `defaultValue` stories render empty in the product card (per-story capture was fine, so compare can't see it). The fork sets `id: title + '--' + key`. The three owned previews (Page, Form, RedactedAnimation) carry their own `compose` copy with the same change. On re-stage of `.ds-sync/`, diff the fork against the new stock module and re-apply.
- [GENERAL] **Play-function stories grade `close`:** the sb reference is captured AFTER a story's `play` (userEvent typing/focus/calendar clicks); previews never run `play`, so they show the resting state (InputField Base/Floating/Floating With Start Icon, NumberInputField Base, DatePickerField Base/Range, likely TagPickerField Base/Floating). Not fixable in config; the card shows the resting state, which is the honest default.
- [GENERAL] **Capture-timing races:** Field floating-label transitions and ThemeIcon scale-in can be caught mid-frame on EITHER side; a plain scoped recapture (no `--force`) settles it.
- [GENERAL] **Pixel-diff recipe for grading:** sb raw shots are root-cropped, ds shots carry 24px padding: `magick sb.png \( ds.png -crop <sbW>x<sbH>+24+24 +repage \) -metric AE -fuzz 8% -compare -format '%[distortion]' info:` → ~0 for a faithful pair (compare `-trim`med images for tiny roots like CircularProgress). Use `-fuzz 2%` on dark UI (8% hid a hover circle) and `-fuzz 0` + `-trim -format '%@'` bounding boxes for near-white vectors; centered layouts need the offset measured from where content starts; width-scaling vectors (PdfIcon) need the sb shot resized to the ds width first. For full-width inputs/selects a diff confined to the right edge is the narrower preview frame. System python has no Pillow - use magick.
- [GENERAL] **Preview frame ignores story `parameters.layout`:** `fullscreen` stories render 48px narrower (24px padding) so responsive blocks reflow (Footer's Follow-us column wraps, NavigationHeader logo meets the nav), `centered` stories stretch instead of shrink-wrapping (FileTree, TableOfContents). Real responsive behavior at that width → graded close/match as framing; a `viewport` override would widen both sides, so it doesn't help.
- [GENERAL] **`[PORTAL?]` false alarm from closed Selects:** a closed Select (DataTable's "Per page") injects a hidden style tag + empty containers into body. DataTable stays `cardMode: "column"`.
- [GENERAL] **`import.meta.url` is stubbed to `https://ds-preview.invalid/`** by the converter → `[ASSETS_BLOCKED] ds-preview.invalid` is NOT a sandbox; any component resolving assets relative to its module (PdfDocumentDisplay's pdf.js worker) can't load them in claude.ai/design. Fix upstream (CDN `workerSrc`/inlined worker).
- FileTree is owned: `Toggles Folder` renders with the folder `defaultOpen` (the story opens it in `play`).
- [GENERAL] **Sheet resampling darkens thin lines on one side** (Accordion/Collapsible borders) - compare the raw PNGs before calling it a mismatch.
- [GENERAL] **Do NOT `storyImports.bundle` `@cyclone-ui/icons`**: bundling icons into story previews pulls raw Flow-typed `react-native` (`Expected "from" but found "{"` in `codegenNativeComponent.js`) and breaks every story that imports an icon.
- [GENERAL] **Global name collisions:** `icons` (star export) shares names with components (Anchor, CodeBlock, File, Folder, Binary, Check, CheckCircle, Link, Spinner, Table, Tabs, Tag); explicit component exports win on `window.CycloneUI`. Page.stories imports the `Folder` icon → owned `previews/Page.tsx` is an inlined copy of `Page.stories.tsx` using the `FolderIcon` alias exported from `pkg/src/index.mjs`. **Keep it in sync with the story file** (it won't get `[STORY_CHANGED]` re-derivation).
- [GENERAL] Stories import `useFieldActions` (`@cyclone-ui/state/form`) and `useMessageActions` (`@cyclone-ui/state/message`); both are exported runtime-only from `pkg/src/index.mjs` (the `/packages/state/` shim routes them to the global; missing → Field render error, Message root empty).
- `Form/Sizing` (apps/storybook/src/FormSizes.stories.tsx) maps to `Form` (titleParts takes the rightmost exported segment; `titleMap {Sizing: null}` can't stop it). Its stories are in `overrides.Form.skip` and owned `previews/Form.tsx` drops the module import (its relative `../../../components/*/src` imports don't compile).
- DatePicker.stories imports `formatDate` from `@stryke/date/format` (needs `node:path`): exported from the pre-build (resolved via `components/date-picker/node_modules`) and shimmed via `storyImports.shim: "@stryke/date"`.
- `cardMode: "column"` applied for the 16 `[GRID_OVERFLOW] wide` components.

## Setup / build

- **Scope: every storied component (100)** — the packages listed in `.design-sync/pkg/src/index.mjs` / `src/index.d.ts` (first sync 2026-10-07 was 21 core primitives; expanded 2026-10-08). To add a component: add an explicit `export { … } from "../../../components/<c>/dist/index.mjs"` line to BOTH files, add its nx project to `cfg.buildCmd`, re-run the pre-build. Out-of-scope storybook titles drop via `[TITLE_UNMAPPED]` (expected).
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
- **More unconfigured font families → browser serif** (both sides): InlineCodeText `fontFamily: "code"` (`components/inline-code-text/src/InlineCodeText.tsx:29`), EyebrowText `fontFamily: "eyebrow"` (`components/eyebrow-text/src/EyebrowText.tsx:30` - the likely source of the Card/Callout eyebrow serif).
- NumberInputField `Default Value` story passes `defaultValue: "Defaulted Text"` to a number field → empty value on both sides. Fix the story.
- FilePickerField upload icon renders black on the dark dropzone (icon color not theme-resolved).
- FilePicker shares the black upload icon bug.
- More serif fallbacks (both sides): CodeBlock code text, FileTree labels, TypeTable prop names (unconfigured code font, like InlineCodeText).
- PdfDocumentDisplay is blank in storybook too: `API version "4.8.69" does not match the Worker version "4.10.38"` → pin `pdfjs-dist` to react-pdf's version.
- NavigationHeader at 900px: "Log In" overlaps the Developers/Company nav; "Storm" logo text is serif. Feedback Base `play` looks for "What could be improved?" but the popover says "How can we improve?".
- Message stories show only Hide/Show buttons until clicked - the Message card never displays a message (story design, not the sync).
- CircularProgress `Large` value comes from setInterval + Math.random (nondeterministic).
- **Tag remove button submits forms**: `TagRemoveButton` (`components/tag/src/Tag.tsx` ~651) renders `<button>` without `type="button"`; inside a Field story's `<form>` a click navigates the iframe (`?tagPickerFieldName=`) → TagPickerField `Base` is sb-error and skipped. Fix: `type="button"`.
- ThemeableIcon's card is blank (`[RENDER_BLANK]`, expected): every story is skipped because `ThemeableIcon.stories.tsx` passes no icon child. Fix upstream (e.g. `children: <Lock />`), then drop the skips - don't author an owned preview that storybook can't verify.
- **Skips (stories empty in storybook too):** all 9 `form-form--*` (renders `<Form {...args} />` with no children → zero-height form), all 8 `base-themeableicon--*` (stories pass no icon; ThemeableIcon ships its floor card), `base-visuallyhidden--base`/`--animate` (invisible by design).
- `cardMode: "single"` also for AlertDialog, Sheet, SelectField (`[PORTAL?]`), Page (`[GRID_OVERFLOW] escape`).
- Play-driven `close` grades so far (Slider, SliderField, TagPicker, TagPickerField, TextArea, TextAreaField, OtpInputField, PasswordInputField, PhoneNumberInputField, RatingField, SearchInputField also): InputField, NumberInputField, DatePickerField, Rating Base, LikeButton Base.
- NumberText stories add `Math.random()*25` every 1s (setInterval) - digits are nondeterministic like Progress `Success`; grade color/font only.
- Input `placeholderTextColor="onAccentDisabled"` resolves near-black on the dark input; storybook hides it only because the `::placeholder` style is dead code there.

## Re-sync risks

- **Staged-script patches vanish on re-stage.** Re-copying `.ds-sync/` (every re-sync, §7 step 1) reverts the 4 validator/compare patches above; reapply them before running the driver, or every preview false-fails `rootEmpty` and pairing goes intermittently `unpaired`.
- **Pre-build is a manual step.** The driver does NOT run `cfg.buildCmd`; run the nx builds + `node .design-sync/pkg/build.mjs` first, or the bundle ships stale component dists. `.design-sync/pkg/dist/` is gitignored, so a fresh clone must run it before anything else.
- **Mirrors of Storybook config, by hand:** the pre-build's aliases/defines/resolve-extensions/dedupe copy `apps/storybook/.storybook/main.ts`; `cfg.provider` copies `withCycloneTheme`; `dist/styles.css` copies `preview.tsx`'s CSS imports + `preview-body.html`'s body rule. If Storybook's config changes, update these to match, then rebuild `sb-reference`.
- **State built from source:** `@cyclone-ui/state` is resolved to `packages/state/src` because its dist is minified with raw JSX. If that package's build is fixed, this alias can go.
- **Partially verified:** compare caps at 6 stories per component, so tail stories were never captured (e.g. Container 113 of 119, Button 209 of 215, ThemeableGradient 48 of 54, Tag 42 of 48, InputField 33 of 39). Most fan-out batches graded every captured story from images; a few used `sibling-trusted` siblings (Badge, Checkbox, Container, Divider, Progress, CheckboxField).
- **Lib fork re-apply:** `.design-sync/overrides/preview-gen-storybook.mjs` is a copy of the stock module with one line changed (`id: title + '--' + key`). When the skill updates, diff the stock `lib/preview-gen-storybook.mjs` against the fork and port the change; any fork edit re-keys every component's grade.
- **Owned previews mirror story files by hand:** Page, Form, RedactedAnimation (inlined stories) and FileTree (`Toggles Folder` with `defaultOpen`). A `[STORY_CHANGED]` on these means update the owned `.tsx`.
- **Theme source edited after this sync (2026-10-07 22:06, uncommitted):** `packages/themes/src/tamagui/config.ts` slimmed font faces to one weight; token CSS + fonts also changed. The uploaded build used the 18:08 themes dist. Next sync: rebuild themes + `sb-reference` together, expect a styling re-ship and a spot-check.
- **Known-faithful-but-broken (graded match because storybook matches):** Spinner, serif fallbacks (BodyText bold, eyebrow, code fonts, FileTree/TypeTable/CodeBlock), FilePicker/FilePickerField black upload icon, PdfDocumentDisplay blank, ThemeableIcon blank card (all stories skipped), Message card shows only buttons. Fixing these upstream re-keys their grades - re-grade then, and drop the ThemeableIcon/Form/TagPickerField skips once their stories render.
- **Nondeterministic:** NumberText (random counter), CircularProgress `Large`, Progress `Success`; animated vectors capture mid-draw frames.
- **Known-faithful-but-broken components** (graded match because storybook matches): Spinner invisible, BodyText bold + Card/Callout eyebrow serif fallbacks. When those are fixed upstream, the grades re-key automatically (story/source change) — re-grade then.
- **Nondeterministic:** Progress `Success` story (random interval).
- **Toolchain at sync time (2026-10-08 expansion: Node 26.8.2, Tamagui 3.0.0-beta.1670.1 constants in node_modules):** Tamagui 3.0.0-beta.1422.1, React 19.3.0, react-native-web 0.19.12, Playwright 1.63, Node 22.
