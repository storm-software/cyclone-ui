# Tamagui v3 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the workspace from Tamagui 2.7.7 to Tamagui v3 without changing Cyclone UI's custom design values or component behavior.

**Architecture:** Keep the current Razorwind-generated custom config as the design-system source of truth, but establish a supported v3 generator path before changing the catalog. Update configuration and dependencies first, then use the official flat-values codemod as a report-driven transformation: migrate shared primitives before their consumers and manually resolve every report flag. Validate source grammar, focused packages, and rendered Storybook state independently.

**Tech Stack:** pnpm 11 catalog, Nx 23, Tamagui v3, @razorwind/tamagui, TypeScript, Vitest, Storybook/Vite, Playwright.

**Spec:** `docs/superpowers/specs/2026-09-24-tamagui-v3-migration-design.md`

## Global Constraints

- Retain Cyclone UI's current custom token values, custom theme names, media keys, fonts, and motion behavior; do not migrate to Tamagui config v6 or Tailwind scales.
- Never hand-edit `packages/themes/src/tamagui/config.ts`; it is owned by @razorwind/tamagui generation.
- Do not patch node_modules, @razorwind/*, Powerlines, or any other external package in this checkout.
- Keep `exitStyle` on shared/web animation paths unless v3's platform-specific runtime behavior proves a flat replacement is correct.
- Preserve existing raw CSS, `useTheme().val`, `getTokenValue()`, spread order, and type-boundary casts unless a focused regression test proves a separate change is safe.
- Preserve the existing dirty `.agents/skills/tamagui/**`, `.agents/skills/tamagui-upgrade-v3/**`, `.claude/skills/tamagui-upgrade-v3`, and `skills-lock.json` work; never stage it with migration commits.
- Run workspace commands inside `devenv shell --` because `devenv.nix` exists.

## Review Focus

- Generated light and dark semantic themes retain the same representative `surface`, `ink`, `accent`, and `hairline` values after generation.
- The custom `sm`, `md`, and larger media settings still drive responsive styles; a v3 conversion must not silently use default media names.
- Named group hover/press styling keeps the same ancestor relationship and group name; group size styles add `container` only to their actual owner.
- Shared/web overlays retain exit animation behavior; `exitStyle` must not be flattened into a web-inert `exit:` clause.
- Styled component prop order and conditional spreads retain precedence, particularly Button/Field/Select overrides supplied by callers.

---

## File Structure

- `pnpm-workspace.yaml` — workspace catalog; the single source for Tamagui package version ranges and newly required v3 tooling packages.
- `pnpm-lock.yaml` — resolved graph for the catalog update; generated only by pnpm.
- `razorwind.config.ts` — Cyclone-owned generator integration; keeps the custom token inputs and declares only generator options supported by the compatible Razorwind release.
- `packages/themes/src/tamagui/default-config.ts` — consumer-owned media and shorthand extension merged into the generated config.
- `packages/themes/src/tamagui/config.ts` — generated v3 configuration; changed only by the `generate-tokens` workflow.
- `components/**/src/*.{ts,tsx}`, `packages/**/src/*.{ts,tsx}`, `apps/**/src/*.{ts,tsx}`, `tools/**/src/*.{ts,tsx}` — the codemod target corpus. Migrate shared primitive owners before dependent wrappers and stories.
- `eslint.config.mjs`, `tsconfig.base.json` — v3 grammar diagnostics, if their installed v3 packages expose the documented ESLint/language-service integration.
- `docs/tamagui-v3-flat-values-report.md` — checked-in final codemod decision record, containing only resolved warning rationale and command metadata.

### Task 1: Establish the supported generator path and migration baseline

**Files:**
- Modify only if required by a supported Razorwind release: `razorwind.config.ts`, `packages/themes/src/tamagui/default-config.ts`
- Generated only through the owner command: `packages/themes/src/tamagui/config.ts`
- Test: `tools/razorwind/src/shiki-theme-mapping.spec.ts`, `tools/razorwind/src/storybook-theme-mapping.spec.ts`
- Create: `docs/tamagui-v3-flat-values-report.md`

**Interfaces:**
- Consumes: Razorwind generator declaration in `razorwind.config.ts`; custom tokens in `packages/themes/src/tokens/**/*.json`; config extension exported by `packages/themes/src/tamagui/default-config.ts`.
- Produces: a generator-supported v3 `config` default export from `@cyclone-ui/themes/tamagui`; a dated baseline record naming exact package versions and codemod classifications.

- [ ] **Step 1: Snapshot the pre-change generated configuration contract**

Run:

```bash
devenv shell -- pnpm exec tsx -e '
  import config from "./packages/themes/src/tamagui/config.ts";
  const read = value => value?.val ?? value;
  for (const name of ["light", "dark"]) {
    const theme = config.themes[name];
    console.log(name, JSON.stringify({
      surfaceCanvas: read(theme.surfaceCanvas),
      inkEmphasis: read(theme.inkEmphasis),
      accent: read(theme.accent),
      hairline: read(theme.hairline),
    }));
  }
  console.log("media", JSON.stringify(config.media));
  console.log("fonts", Object.keys(config.fonts).sort().join(","));
'
devenv shell -- pnpm exec nx run tools-razorwind:test
```

Expected: theme values, media map, and font names are printed; Razorwind integration suites pass before migration edits.

- [ ] **Step 2: Run migration reports without writing source**

```bash
devenv shell -- pnpm exec tamagui migrate --from v2
devenv shell -- pnpm exec @tamagui/codemod-flat-values \
  --report /tmp/cyclone-flat-values-v2.md \
  --json /tmp/cyclone-flat-values-v2.json \
  components packages apps tools
```

Expected: no source modifications. Copy only command/version metadata, counts, and human decisions into `docs/tamagui-v3-flat-values-report.md`.

- [ ] **Step 3: Verify generator compatibility before dependency edits**

```bash
devenv shell -- node -p 'require("./node_modules/@razorwind/tamagui/package.json").version'
devenv shell -- node -p 'JSON.stringify(require("./node_modules/@razorwind/tamagui/package.json").peerDependencies ?? {})'
devenv shell -- rg -n "@tamagui/(config|theme-builder)|createThemes|createTamagui" node_modules/@razorwind/tamagui
```

Expected: a generator template explicitly compatible with Tamagui v3, or evidence it emits v2-only imports.

- [ ] **Step 4: Stop on an unsupported generator and prepare the upstream handoff**

If Step 3 finds v2-only generation with no published compatible Razorwind release, do not alter `pnpm-workspace.yaml` or generated files. Add the exact package version, template file, and failing generated import to the upstream outline in the spec, then stop for upstream publication.

- [ ] **Step 5: Regenerate and compare only when the generator is supported**

After selecting the v3-capable generator in Task 2:

```bash
devenv shell -- pnpm exec nx run monorepo:generate-tokens
devenv shell -- pnpm exec tsx -e '
  import config from "./packages/themes/src/tamagui/config.ts";
  const read = value => value?.val ?? value;
  for (const name of ["light", "dark"]) {
    const theme = config.themes[name];
    console.log(name, JSON.stringify({
      surfaceCanvas: read(theme.surfaceCanvas),
      inkEmphasis: read(theme.inkEmphasis),
      accent: read(theme.accent),
      hairline: read(theme.hairline),
    }));
  }
'
```

Expected: all representative values match Step 1. If any differ, revert the consumer configuration change and diagnose it before proceeding.

- [ ] **Step 6: Commit the generator baseline only after supported regeneration**

```bash
git add razorwind.config.ts packages/themes/src/tamagui/default-config.ts \
  packages/themes/src/tamagui/config.ts docs/tamagui-v3-flat-values-report.md
git commit -m "chore(themes): prepare Tamagui v3 generation"
```

### Task 2: Upgrade the Tamagui dependency graph as one catalog transaction

**Files:**
- Modify: `pnpm-workspace.yaml`, `pnpm-lock.yaml`
- Modify only if a supported generator release is required: `package.json`
- Test: `packages/themes/project.json` and `apps/storybook/project.json` targets

**Interfaces:**
- Consumes: Task 1's supported generator version and generated config contract.
- Produces: one lockfile-resolved Tamagui v3 dependency family consumable by themes, components, Storybook, helpers, and state.

- [ ] **Step 1: Write the failing package-resolution check**

```bash
devenv shell -- pnpm list --depth -1 tamagui @tamagui/core @tamagui/config @tamagui/theme-builder
```

Expected: fails the v3-major assertion because the checked-out catalog resolves 2.7.7.

- [ ] **Step 2: Update the catalog with the compatible v3 package family**

In `pnpm-workspace.yaml`, replace every `@tamagui/*: ^2.7.7` catalog entry and `tamagui: ^2.7.7` with the same selected stable v3 family. Retain the intentional `@tamagui/vite-plugin` pin only if the v3 release matrix confirms compatibility; otherwise update it to the matching v3 plugin. Add `@tamagui/codemod-flat-values`, `@tamagui/eslint-plugin`, and `@tamagui/language-service` only if the selected release documents them as installable packages.

```yaml
catalog:
  "@tamagui/core": ^3.<selected>
  "@tamagui/config": ^3.<selected>
  "@tamagui/theme-builder": ^3.<selected>
  tamagui: ^3.<selected>
```

- [ ] **Step 3: Refresh the lockfile without lifecycle scripts**

```bash
devenv shell -- pnpm install --lockfile-only --ignore-scripts
devenv shell -- pnpm install --ignore-scripts
```

Expected: pnpm resolves one compatible v3 family without catalog validation errors.

- [ ] **Step 4: Verify resolution and the generated config**

```bash
devenv shell -- pnpm list --depth -1 tamagui @tamagui/core @tamagui/config @tamagui/theme-builder
devenv shell -- pnpm exec nx run themes:build-base --skip-nx-cache
```

Expected: all listed Tamagui packages are major version 3 and the themes build reaches the generated config rather than failing on removed v2 imports.

- [ ] **Step 5: Commit the dependency graph**

```bash
git add pnpm-workspace.yaml pnpm-lock.yaml package.json
git commit -m "chore(deps): upgrade Tamagui to v3"
```

### Task 3: Apply mechanical flat-value conversions and preserve ordering

**Files:**
- Modify: all files changed by the codemod under `components/`, `packages/`, `apps/`, and `tools/`
- Modify: `docs/tamagui-v3-flat-values-report.md`
- Test: codemod reports in `/tmp/cyclone-flat-values-v3-*.{md,json}`

**Interfaces:**
- Consumes: v3 config and dependency graph from Tasks 1-2.
- Produces: syntactically valid v3 flat values at every site the codemod can prove safe, with all residual sites classified for Tasks 4-6.

- [ ] **Step 1: Re-run the report against the v3 graph**

```bash
devenv shell -- pnpm exec @tamagui/codemod-flat-values \
  --report /tmp/cyclone-flat-values-v3-before.md \
  --json /tmp/cyclone-flat-values-v3-before.json \
  components packages apps tools
```

Expected: no source modifications. Compare counts with Task 1 and document changed classifications caused by the supported v3 config.

- [ ] **Step 2: Apply only safe transformations**

```bash
devenv shell -- pnpm exec @tamagui/codemod-flat-values \
  --write \
  --report /tmp/cyclone-flat-values-v3-write.md \
  --json /tmp/cyclone-flat-values-v3-write.json \
  components packages apps tools
git diff --check
```

Expected: source parses cleanly; no spreads or props move solely to make a conversion easier.

- [ ] **Step 3: Classify residual sites by owner**

Copy every report row to `docs/tamagui-v3-flat-values-report.md` under one category: `shared primitive`, `dependent wrapper`, `screen/story`, `generated/config`, or `unsupported external owner`. Include file, line, flag code, and the selected resolution rule.

- [ ] **Step 4: Prove static controls after the mechanical conversion**

```bash
devenv shell -- pnpm exec nx run button:test --skip-nx-cache
devenv shell -- pnpm exec nx run checkbox:test --skip-nx-cache
devenv shell -- pnpm exec nx run switch:test --skip-nx-cache
```

Expected: focused suites pass or exact pre-existing failures are recorded separately.

- [ ] **Step 5: Commit the mechanical conversion**

```bash
git add components packages apps tools docs/tamagui-v3-flat-values-report.md
git commit -m "refactor: convert Tamagui styles to flat values"
```

### Task 4: Migrate interactive shared primitive owners

**Files:**
- Modify: `components/button/src/Button.tsx`
- Modify: `components/input/src/Input.tsx`, `components/input/src/utilities.ts`, `components/input/src/InputValue.tsx`, `components/input/src/InputValue.native.tsx`
- Modify: `components/field/src/Field.tsx`, `components/text-area/src/TextArea.tsx`
- Modify: `components/checkbox/src/Checkbox.tsx`, `components/switch/src/Switch.tsx`, `components/radio-group/src/RadioGroup.tsx`, `components/radio-group-field/src/RadioGroupField.tsx`
- Modify: `components/anchor/src/Anchor.tsx`, `components/link/src/Link.tsx`, `components/link-text/src/LinkText.tsx`, `components/badge/src/Badge.tsx`, `components/card/src/Card.tsx`
- Test: existing package Vitest suites and Storybook stories for Button, InputField, Checkbox, Switch, RadioGroup, Field, Link, Badge, and Card

**Interfaces:**
- Consumes: residual shared-primitive report rows from Task 3.
- Produces: v3-compatible shared interaction values that continue to accept current public props and context values.

- [ ] **Step 1: Write failing override-order regression tests**

In existing Button, Input/Field, Checkbox, Switch, and RadioGroup tests, render each owner with a caller-supplied style prop after defaults and assert that caller-supplied base or equal-specificity clauses win:

```tsx
expect(screen.getByRole("button")).toHaveStyle({
  backgroundColor: "rgb(1, 2, 3)",
});
```

Expected: the test fails before its matching manual v3 conversion if defaults still override or are ignored.

- [ ] **Step 2: Convert static pseudo-style objects one target property at a time**

```tsx
// before
borderColor: "$hairline",
hoverStyle: { borderColor: "$hairlineHover" },
focusStyle: { borderColor: "$hairlineActive" },

// after
borderColor: "hairline hover:hairlineHover focus:hairlineActive",
```

For dynamic payloads, lift only that property:

```tsx
bg={disabled ? undefined : "hover:surfaceElevatedHover"}
```

Do not reconstruct pseudo-style objects in a new helper.

- [ ] **Step 3: Convert named group conditions without changing their group owner**

```tsx
color="group-hover/field:accentHover group-press/button:accentActive"
```

Retain the matching `group="<name>"` ancestor. Do not add a container for state-only groups.

- [ ] **Step 4: Preserve native and raw-CSS escape hatches**

Keep `InputValue.native.tsx` platform logic, direct handlers, custom CSS, and `useTheme().val` code unchanged. Use `enter:`/`exit:` only at eligible native-host rows identified by the report.

- [ ] **Step 5: Run focused regressions and builds**

```bash
devenv shell -- pnpm exec nx run button:test --skip-nx-cache
devenv shell -- pnpm exec nx run input:test --skip-nx-cache
devenv shell -- pnpm exec nx run field:test --skip-nx-cache
devenv shell -- pnpm exec nx run checkbox:test --skip-nx-cache
devenv shell -- pnpm exec nx run switch:test --skip-nx-cache
devenv shell -- pnpm exec nx run radio-group:test --skip-nx-cache
devenv shell -- pnpm exec nx run button:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run input:build-base --skip-nx-cache
```

Expected: every failure is fixed at its shared owner or recorded as an independent pre-existing/environmental issue.

- [ ] **Step 6: Commit interactive primitives**

```bash
git add components/button components/input components/field components/text-area \
  components/checkbox components/switch components/radio-group components/radio-group-field \
  components/anchor components/link components/link-text components/badge components/card \
  docs/tamagui-v3-flat-values-report.md
git commit -m "refactor: migrate interactive primitives to Tamagui v3"
```

### Task 5: Migrate overlays, collections, and composite controls

**Files:**
- Modify: `components/dialog/src/Dialog.tsx`, `components/alert-dialog/src/AlertDialog.tsx`, `components/popover/src/Popover.tsx`, `components/sheet/src/Sheet.tsx`, `components/tooltip/src/Tooltip.tsx`
- Modify: `components/select/src/Select.tsx`, `components/select/src/SelectItems.tsx`, `components/select/src/SelectValue.tsx`, `components/select/src/SelectTextBox.tsx`, `components/select-field/src/SelectField.tsx`
- Modify: `components/tabs/src/Tabs.tsx`, `components/accordion/src/Accordion.tsx`, `components/table/src/Table.tsx`, `components/data-table/src/DataTable.tsx`, `components/stepper/src/Stepper.tsx`
- Modify: `components/file-picker/src/FilePicker.tsx`, `components/date-picker/src/DatePicker.tsx`, `components/file-tree/src/FileTree.tsx`, `components/navigation-header/src/NavigationHeader.tsx`, `components/footer/src/Footer.tsx`, `components/footer/src/Footer.stories.tsx`
- Test: corresponding package tests plus Dialog, Sheet, Select, Tabs, Accordion, Table/DataTable, and FilePicker stories

**Interfaces:**
- Consumes: Task 4 primitive flat-value behavior and Task 3 residual classifications.
- Produces: v3-compatible portals, presence behavior, group styles, responsive collection controls, and caller-facing component APIs.

- [ ] **Step 1: Write failing presence/adaptation regressions**

Use existing Dialog/Sheet/Popover/Select test conventions:

```tsx
await user.click(screen.getByRole("button", { name: /open/i }));
expect(screen.getByRole("dialog")).toBeVisible();
await user.keyboard("{Escape}");
await waitFor(() =>
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
);
```

Expected: the test exposes an invalid flattened web exit path or portal lifecycle regression.

- [ ] **Step 2: Keep shared/web exit behavior authored**

Flatten eligible base/hover/press/focus/group/platform values. Retain `exitStyle` object form in shared `.tsx` and `.web.tsx`; use flat `enter:`/`exit:` only for report-confirmed native hosts.

- [ ] **Step 3: Resolve group/container conditions from actual owners**

Retain `group` attributes and convert descendants to `group-hover/<name>:` or `group-press/<name>:`. When the report identifies a group size condition, add `container="<name>"` only to the ancestor declaring `group="<name>"`, then inspect responsive Storybook geometry.

- [ ] **Step 4: Preserve non-migration workarounds**

Do not alter CodeBlock or SelectItems raw custom-property CSS, Select collision-height handling, synchronous child construction, or measured-width workarounds.

- [ ] **Step 5: Run focused package checks**

```bash
devenv shell -- pnpm exec nx run dialog:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run sheet:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run popover:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run select:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run tabs:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run accordion:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run table:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run file-picker:build-base --skip-nx-cache
```

- [ ] **Step 6: Commit composite controls**

```bash
git add components/dialog components/alert-dialog components/popover components/sheet \
  components/tooltip components/select components/select-field components/tabs \
  components/accordion components/table components/data-table components/stepper \
  components/file-picker components/date-picker components/file-tree \
  components/navigation-header components/footer docs/tamagui-v3-flat-values-report.md
git commit -m "refactor: migrate composite controls to Tamagui v3"
```

### Task 6: Resolve leaf sites and enforce v3 syntax

**Files:**
- Modify: every remaining report-named file in `components/`, `packages/`, `apps/`, or `tools/`
- Modify: `eslint.config.mjs` if the selected v3 release exposes `valid-flat-values`
- Modify: `tsconfig.base.json` if the selected v3 release documents a language-service plugin
- Modify: `docs/tamagui-v3-flat-values-report.md`

**Interfaces:**
- Consumes: Tasks 3-5 converted shared owners and residual report rows.
- Produces: zero unresolved legacy syntax and guardrails against legacy style authoring.

- [ ] **Step 1: Resolve every final report row by flag class**

```tsx
// dynamic conditional payload
bg={disabled ? undefined : "hover:surfaceElevatedHover"}

// token constant
const radius = "md";

// theme-only wrapper remains theme-only
<Theme name="base">{children}</Theme>
```

For `legacy-token-dot-path`, verify config keys. For `legacy-numeric-composite-token`, use resolved CSS values. For `unproven-container-group`, locate the declaring group ancestor and put its matching container there.

- [ ] **Step 2: Add only supported static guardrails**

If installed v3 packages provide documented integration APIs, configure language service and the ESLint `valid-flat-values` rule. Confirm availability before config changes:

```bash
devenv shell -- node -e 'console.log(require.resolve("@tamagui/eslint-plugin"))'
devenv shell -- node -e 'console.log(require.resolve("@tamagui/language-service"))'
```

- [ ] **Step 3: Verify there are no unresolved legacy sites**

```bash
devenv shell -- pnpm exec @tamagui/codemod-flat-values \
  --report /tmp/cyclone-flat-values-v3-final.md \
  --json /tmp/cyclone-flat-values-v3-final.json \
  components packages apps tools
devenv shell -- pnpm exec tamagui check
rg -n 'hoverStyle|pressStyle|focusStyle|\$theme-|\$platform-|\$group-' \
  components packages apps tools -g '*.{ts,tsx}'
```

Expected: final codemod report has no unresolved legacy work. Intentional shared/web `exitStyle` uses are documented with driver rationale.

- [ ] **Step 4: Run static validation**

```bash
devenv shell -- pnpm lint
devenv shell -- pnpm typecheck
devenv shell -- pnpm build-components
git diff --check
```

Report successful commands separately. If a broad pre-existing failure occurs, run affected package targets and report both outcomes without treating focused proof as workspace proof.

- [ ] **Step 5: Commit enforcement and residual fixes**

```bash
git add components packages apps tools eslint.config.mjs tsconfig.base.json \
  docs/tamagui-v3-flat-values-report.md
git commit -m "chore: enforce Tamagui v3 flat values"
```

### Task 7: Validate rendered web behavior and native readiness

**Files:**
- Modify only if proof discovers a migration defect: owning component source and existing story/test file
- Test: existing Storybook stories for Button, InputField, Checkbox, Switch, Dialog, Popover, Sheet, Select, Tabs, DataTable, FilePicker, and animated components

**Interfaces:**
- Consumes: complete v3 static migration from Task 6.
- Produces: browser evidence for interaction, responsive, theme, portal, and animation behavior, plus an explicit native-verification status.

- [ ] **Step 1: Build and serve Storybook**

```bash
devenv shell -- pnpm build-storybook
devenv shell -- pnpm exec nx serve storybook --configuration=ci
```

Expected: capture the emitted port. If Storybook cannot serve due to an unrelated issue, retain successful build output as static proof and explicitly mark live browser proof unavailable.

- [ ] **Step 2: Exercise the web visual matrix using repository-local Playwright**

At the emitted Storybook port, inspect actual resolved styles and interactions:

```text
Button/InputField/Checkbox/Switch: light and dark, hover, press, focus.
Dialog/Popover/Sheet: open, Escape close, outside click, responsive Sheet adaptation, exit completion.
Tabs/DataTable/FilePicker: named group hover/press behavior and responsive layout.
Animated component: enter state and retained shared/web exit-driver behavior.
```

- [ ] **Step 3: Perform native validation when a runner is available**

Test one native screen that consumes `useTheme().val` and one Sheet flow with keyboard, safe area, and drag dismissal. Record the device/simulator and result. If unavailable, explicitly record native validation as unrun; web proof does not substitute.

- [ ] **Step 4: Re-check the tree and commit only observed migration repairs**

```bash
git diff --check
git status --short
git add <only migration-repair files>
git commit -m "fix: preserve Tamagui v3 runtime behavior"
```

Omit the final commit if validation finds no source repair.

## Final Acceptance Checklist

- [ ] Every Tamagui package resolves to the selected v3 major and the lockfile is current.
- [ ] Razorwind generation is demonstrated v3-compatible, or the work is stopped with the upstream outline rather than a generated-file patch.
- [ ] Representative custom light/dark semantic theme values, media settings, animations, and fonts match baseline.
- [ ] Final codemod report has no unresolved legacy syntax; retained shared/web `exitStyle` rows are deliberate and documented.
- [ ] Shared primitive and composite package checks pass, or exact independent blockers are reported.
- [ ] Storybook build and browser interaction state are separately reported; native proof is separately reported or explicitly unrun.
- [ ] `git diff --check` passes and unrelated dirty work is preserved.

