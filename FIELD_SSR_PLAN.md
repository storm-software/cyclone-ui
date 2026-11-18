# Field SSR and Progressive Enhancement Plan

Audit of `components/field`, `components/form` and `@cyclone-ui/state/form` for Next.js
App Router support, server-side rendering and progressive enhancement. Written 2026-11-10.

## Findings

### Field itself never suspends

Server rendering `Form > Field > Input` with `renderToString` produces complete HTML with no
`<!--$!-->` markers. The state layer has no async atoms and `useAtomEffect` reads through
`loadable`, so nothing in `packages/state` or `components/field` throws a promise. The Next.js
fixture page `packages/nextjs/test/fixture/app/controls-probe` already asserts that Input,
PasswordInput and TextArea fields land in the static shell without hydration.

### The Suspense requirement is per control, and it is randomness, not async

Under Cache Components, Next.js aborts the prerender of any client component that calls
`Math.random()` during render and requires a Suspense boundary around it. Tamagui's
`createStyledContext` Provider does exactly that: it builds a memo key with `objectIdentityKey`,
which assigns `Math.random()` to every object or function value it is given.

Measured `Math.random` calls per `Field` + control during SSR:

| Control                            | Calls | Source                                                                                   |
| ---------------------------------- | ----- | ---------------------------------------------------------------------------------------- |
| Input, TextArea, Checkbox, Switch  | 0     | Callbacks already live in a plain `InputBehaviorContext`                                  |
| Select                             | 43    | `SelectContext.Provider` receives `onFocus`, `onBlur`, `value` (`components/select/src/Select.tsx:488`) |
| RadioGroup                         | 7     | Upstream `@tamagui/radio-group` context                                                   |

Components that use `createStyledContext` and should be audited the same way: accordion, alert,
breadcrumb, button, calendar, callout, card, context-menu, data-table, date-picker, dialog,
file-picker, popover, stepper, table, tabs, tag, tooltip.

### Progressive enhancement is broken before hydration

- The native `<input>` has no `name` for Input, Checkbox, Switch and RadioGroup, so a form post
  without JavaScript submits nothing. TextArea renders it. Input and Switch put `name` in their
  styled context, and Tamagui's context merge strips it from the DOM element.
- `required` is only drawn as an asterisk. The element gets no `required`, `aria-required`,
  `aria-invalid` or `aria-describedby`, so browser constraint validation and screen readers get
  nothing.
- `Form` renders `<form id>` but attaches no `onSubmit`, and `Form.Submit` has no `type`. The
  `onSubmit` prop is routed into form options, never the DOM, so pressing Enter triggers a native
  navigation to `action` while the JS submit path runs separately.
- `validate`, `format` and `onSubmit` are functions, so `Form` and `Field` can only be rendered
  from a client component. There is no serializable way to describe validation from a Server
  Component.

## Plan

### 1. Remove the Suspense need at the source

- In `Select`, move `onFocus`, `onBlur` and `value` out of `SelectContext` into a plain
  `createContext`, mirroring Input's `InputBehaviorContext`.
- Add `components/field/src/Field.prerender.spec.tsx` that spies on `Math.random` while server
  rendering each control inside a `Field`, so regressions fail in CI.
- RadioGroup's randomness is upstream in Tamagui. Write a fix outline for `@tamagui/radio-group`
  and wrap only that control in Suspense in the meantime.

### 2. Make native submission work

- Pass `name` to the element outside styled contexts in Input, Checkbox, Switch and RadioGroup.
- Have controls mirror `required`, `disabled`, `readOnly` and `aria-*` from `FormControlContext`
  onto the element.
- Render `Field.Details` and the validation text with ids and point `aria-describedby` at them.

### 3. Wire the form element

- Give `Form.Submit` and `Form.Reset` explicit `type` attributes.
- Let `Form` accept a Next.js server function as `action`. When `action` is set, keep native
  submit intact and run client validation in `onSubmit`, calling `event.preventDefault()` only
  when the form is invalid. When `action` is unset, prevent default and call the state `submit()`
  as today.

### 4. Seed server results into field state

`ValidationCause.SERVER` and `Field.setMessage` already exist. Add a serializable `errors` prop
on `Form` (the shape returned from `useActionState`) that hydrates
`validationResultsFields.server` during render through `useHydrateMolecule`, so errors from a
server action show on first paint without JavaScript.

### 5. Declarative validation for Server Components

- Add a small serializable validator spec such as `{ required: true, minLength: 8, pattern: "..." }`.
  `FieldProvider` maps it to the existing validator functions on the client and controls map it to
  native attributes on the element.
- Function validators stay for client-only forms.
- Document in the `cyclone-ui-nextjs` skill which props may cross the RSC boundary.

### 6. Document and test

- Extend the `controls-probe` fixture with Select and RadioGroup, plus a server action post with
  JavaScript disabled in Playwright.
- Add the Suspense rule to the Next.js skill: only controls that still call `Math.random` need a
  boundary, and name them.

## Caveats

- The fixture browser spec could not be run. `next build` for the fixture fails type-check on
  `components/password-input/src/PasswordInput.tsx` and `app/footer-probe/page.tsx`; that failure
  predates this audit.
- The SSR repro ran under a bare `createTamagui({ tokens: {} })` config, which is why the HTML
  shows `padding-inline:NaNpx`. Real tokens would not change the randomness or `name` findings.

## SSR repro recipe

Vitest from `components/input`, config file inside the repo:

- Alias `/^@tamagui\/(web|core)$/` to the copy resolved from `components/input/node_modules` and
  set `test.server.deps.inline: true`; externalized deps ignore aliases and fail with
  "Can't find Tamagui configuration".
- Call `createTamagui` in `setupFiles` before importing Select, because context-menu reads tokens
  at import time.
- Spy on `Math.random` and `Date.now`, and ignore stacks containing `console` (vitest's console
  writer calls `Date.now`).

## Status (2026-11-10)

All six steps are implemented. Deviations from the plan:

- **The randomness is upstream for both controls.** Select's own context gave 7 of its 44
  `Math.random` calls; Tamagui's Popover, Popper and Adapt gave the rest. RadioGroup's came
  from `@tamagui/roving-focus` and `@tamagui/collection`, not `@tamagui/radio-group`. Both
  controls now wrap that part in their own Suspense boundary. The fallback is a native
  control (a `<select>`, or the same items with native radios) that submits without
  JavaScript, instead of a placeholder.
- **The prerender spec lives in `packages/nextjs/test/ssr/fields.prerender.spec.tsx`.** The
  field package can't import the controls, which depend on it.
- **Constraint messages come from the browser.** Fields put the constraint props on the
  native element and report its `validationMessage` (localized) through a change validator,
  instead of mapping each constraint to a JavaScript validator. React Native gets the
  attributes' values but no enforcement.
- **`Form.Submit` and `Form.Reset` no longer disable an invalid form.** Submitting is what
  shows a never-blurred field's errors.
- **`required` now adds its validator next to a field's own `onBlur` validators.** Before,
  any `validate` option replaced it.
- **`Form` skips the `form.reset()` React runs after a function `action` settles.** Without
  this, a server action's errors came back with the fields already cleared. The reset event is
  trusted, so `Form` marks a valid submit with a function action and skips the next reset.

Not covered: other `Field` controls (date pickers, tag picker, slider, file picker and so on)
don't yet render named native elements. TagPicker still passes `name` through its styled
context, which swallows it.

### Upstream fix outline: Tamagui `objectIdentityKey`

`@tamagui/web` `helpers/objectIdentityKey` keys each object or function value of a styled
context Provider with `Math.random()` (cached in a `WeakMap`). Any Provider given a callback
therefore reads randomness while rendering, which Next.js Cache Components only allows
inside a Suspense boundary. Replacing the random number with a module-level counter
(`cache.set(arg, ++nextId)`) keeps keys unique per object, removes the randomness, and would
let Select, RadioGroup and Tooltip drop their boundaries.

### Verification environment notes

- `next build` of the fixture fails on `/_global-error` ("reading 'useContext'") under
  Node 26.12.1. It builds under Node 24.21.0.
- Components resolve three pnpm peer variants of `@tamagui/core`. The fixture's
  `next.config.mjs` now aliases `@tamagui/core` and `@tamagui/web` to one copy
  (project-relative paths; absolute ones are ignored), as the vitest config does.
