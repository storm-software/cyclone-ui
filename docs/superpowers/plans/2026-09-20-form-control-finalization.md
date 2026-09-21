# Form Control Finalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every in-scope form control a `$hairline` resting frame while retaining the matching status accent when a validation message is displayed.

**Architecture:** `Field` will expose its existing, already-prioritized message state through its presentation context. Primitives consume that presentation-only context, so direct `<Field><Input /></Field>` composition and specialized field compounds agree without duplicating `FieldApi` logic. Frame and divider defaults use `$hairline`; focus, disabled, selected, and active overrides retain their current precedence.

**Tech Stack:** React 19, TypeScript, Tamagui, Jotai, Storybook 10 with the Vitest addon, Nx, pnpm.

**Spec:** `docs/superpowers/specs/2026-09-20-form-control-finalization-design.md`

## Global Constraints

- Use semantic tokens only; normal frames and matching dividers use `$hairline`.
- Enable status borders only for `field.messages.get().length > 0`, never for a configured theme without a visible message.
- Preserve current hover, focus, focus-visible, underline, selected, active, and disabled behavior unless a rendered audit proves a defect.
- Do not modify external packages, generated artifacts, or pre-existing worktree changes.
- Run project commands through `devenv shell -- <command>` when the environment is available.
- Treat a rendered Storybook result as visual proof. A source check or build alone is not visual proof.

## Review Focus

- A brand-themed field without validation stays `$hairline`; Task 1 tests it.
- A warning message colors the textbox frame and divider together; Task 2 tests both.
- Focus and disabled borders retain their established treatment; Tasks 2 and 3 test both.
- Underline Input, Select, and TextArea remain one-sided and receive the correct resting/status color; Task 2 tests them.
- A selected radio remains distinct from an unselected warning radio; Task 3 tests this precedence.

---

## File Structure

| File | Responsibility |
| --- | --- |
| `components/field/src/Field.tsx` | Publish message visibility through field presentation context. |
| `components/input/src/{Input.tsx,types.ts,utilities.ts}` | Apply the context to input frames and separators. |
| `components/{text-area,select}/src/*.tsx` | Apply it to text-entry and select frames/dividers. |
| `components/{checkbox,switch,radio-group,file-picker}/src/*.tsx` | Apply it to binary, choice, and upload frames. |
| `components/radio-group-field/src/RadioGroupField.tsx` | Preserve selected-item styling while honoring validation status. |
| Primitive `*.stories.tsx` files | Add live border-contract assertions. |
| Five primitive manifests and `pnpm-lock.yaml` | Declare the presentation-context dependency using pnpm-generated lock data. |

### Task 1: Publish visible validation state from Field

**Files:**
- Modify: `components/field/src/Field.tsx:67-77,250-305`
- Modify: `components/field/src/Field.stories.tsx`
- Modify: `components/{input,checkbox,switch,radio-group,file-picker}/package.json`
- Modify: `pnpm-lock.yaml` through pnpm only

**Interfaces:**
- Consumes: `FieldApi.use().messages.get()` and `FieldPresentationContext`.
- Produces: `useFieldHasValidationMessage(): boolean`, safe outside a Field and false by default.

- [ ] **Step 1: Write a failing message-state story**

Add a small probe to `Field.stories.tsx`. Its brand-only story must show `false`; its warning story must type into a textbox, wait for validation text, then show `true`.

```tsx
const MessageStateProbe = () => {
  const hasValidationMessage = useFieldHasValidationMessage();
  return <output data-testid="field-message-state">{String(hasValidationMessage)}</output>;
};

await expect(canvas.getByTestId("field-message-state")).toHaveTextContent("false");
await userEvent.type(canvas.getByRole("textbox"), "x");
await expect(canvas.getByTestId("field-message-state")).toHaveTextContent("true");
```

- [ ] **Step 2: Run the story before implementation**

Run: `devenv shell -- pnpm exec nx run storybook:test -- --run`

Expected: FAIL because the hook and context value do not yet exist.

- [ ] **Step 3: Implement the presentation-only hook**

Add `hasValidationMessage: boolean` to the context interface and its default. Export this hook beside `useFieldVariant`:

```tsx
export const useFieldHasValidationMessage = () =>
  use(FieldPresentationContext).hasValidationMessage;
```

Inside `FieldGroupInnerImpl`, derive the flag once from the existing atom and nest the existing field content inside a refined provider:

```tsx
const messages = field.messages.get();
const presentation = use(FieldPresentationContext);
const resolvedPresentation = useMemo(
  () => ({ ...presentation, hasValidationMessage: messages.length > 0 }),
  [messages.length, presentation]
);

<Theme name={theme}>
  <FieldPresentationContext.Provider value={resolvedPresentation}>
    {/* existing details contexts, YStack, frame, and validation text */}
  </FieldPresentationContext.Provider>
</Theme>
```

Do not duplicate `atomWithMessages` status priority in the component layer.

- [ ] **Step 4: Add the five direct dependencies and regenerate only lock metadata**

Add `"@cyclone-ui/field": "workspace:*"` to Input, Checkbox, Switch, RadioGroup, and FilePicker manifests. Snapshot the existing lockfile diff, then run:

```bash
devenv shell -- pnpm install --lockfile-only --ignore-scripts
```

Inspect the resulting importer entries. If pnpm rewrites unrelated user-owned lock changes, stop rather than hand-edit generated lock data.

- [ ] **Step 5: Re-run the story and commit**

Run: `devenv shell -- pnpm exec nx run storybook:test -- --run`

Expected: PASS; a brand-only field has no validation message and a changed warning field does.

```bash
git add components/field/src/Field.tsx components/field/src/Field.stories.tsx components/input/package.json components/checkbox/package.json components/switch/package.json components/radio-group/package.json components/file-picker/package.json pnpm-lock.yaml
git commit -m "feat(field): expose validation message presentation state"
```

### Task 2: Correct text-entry and selection frame defaults

**Files:**
- Modify: `components/input/src/{Input.tsx,types.ts,utilities.ts,Input.stories.tsx}`
- Modify: `components/text-area/src/{TextArea.tsx,TextArea.stories.tsx}`
- Modify: `components/select/src/{Select.tsx,utilities.ts,Select.stories.tsx}`

**Interfaces:**
- Consumes: `useFieldHasValidationMessage(): boolean`.
- Produces: `hasValidationMessage` in `InputContextProps` where Input separators need to mirror their root frame.

- [ ] **Step 1: Write failing rendered border-contract stories**

In Input, TextArea, and Select stories add a `BorderContract` story with normal, brand-only, and warning-validator controls. Use this local helper to find the frame without adding production test IDs:

```tsx
const getBorderFrame = (control: HTMLElement) => {
  let element: HTMLElement | null = control;
  while (element && getComputedStyle(element).borderTopWidth === "0px") {
    element = element.parentElement;
  }
  if (!element) throw new Error("Missing control frame");
  return element;
};
```

Type into the warning control, wait for its message, then assert the normal and brand frames have equal border colors while the warning frame differs. For Input and Select, assert the divider color differs from the normal divider at the same time.

- [ ] **Step 2: Run the failing stories**

Run: `devenv shell -- pnpm exec nx run storybook:test -- --run`

Expected: FAIL because normal and brand frames still resolve to their accent instead of the neutral hairline.

- [ ] **Step 3: Implement Input and DatePicker-derived behavior**

Read the hook once in `InputGroupImpl`, add the value to `InputContext.Provider`, and pass it to `InputGroup` and `InputSeparator`. Add this variant to both styled owners:

```tsx
hasValidationMessage: {
  true: {
    borderColor: "$accent",
    hoverStyle: { borderColor: "$accentHover" }
  }
}
```

Set the Input frame, underline frame, and separator resting colors to `$hairline`. Keep focused and disabled variants later in precedence so `$accentActive` and `$accentDisabled` continue to win. Add `hasValidationMessage: boolean` to `InputContextProps` and its context default. DatePicker and DatePickerField compose Input; do not add parallel DatePicker styling.

- [ ] **Step 4: Implement TextArea and Select behavior**

TextArea consumes the hook and passes it to the same-named frame variant. Its normal and underline resting borders become `$hairline`; focus and disabled blocks are unchanged.

Select consumes the hook in `SelectTextBoxImpl`, passes it to `SelectGroup` and `SelectSeparator`, and adds the same variant to both styled owners. Its normal and underline resting borders become `$hairline`; selected-item and disabled behavior remains unchanged.

- [ ] **Step 5: Run focused verification and commit**

```bash
devenv shell -- pnpm exec nx run storybook:test -- --run
devenv shell -- pnpm exec nx run input:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run text-area:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run select:build-base --skip-nx-cache
git add components/input/src components/text-area/src components/select/src
git commit -m "fix(forms): use hairline borders for text entry controls"
```

Expected: border stories pass; focus and disabled stories retain their former results; all three focused builds pass.

### Task 3: Correct binary, choice, and upload value frames

**Files:**
- Modify: `components/checkbox/src/{Checkbox.tsx,Checkbox.stories.tsx}`
- Modify: `components/switch/src/{Switch.tsx,Switch.stories.tsx}`
- Modify: `components/radio-group/src/{RadioGroup.tsx,RadioGroup.stories.tsx}`
- Modify: `components/file-picker/src/{FilePicker.tsx,FilePicker.stories.tsx}`
- Modify: `components/radio-group-field/src/{RadioGroupField.tsx,RadioGroupField.stories.tsx}`

**Interfaces:**
- Consumes: `useFieldHasValidationMessage(): boolean`.
- Produces: neutral resting outer frames and status-colored frames only when validation text is displayed.

- [ ] **Step 1: Write failing Base and Warning story assertions**

Add `BorderContract` stories to Checkbox, Switch, RadioGroup, and FilePicker using the Task 2 `getBorderFrame` helper. Trigger the existing validator through the native input, wait for validation text, then compare the normal and warning frame colors:

```tsx
await userEvent.click(canvas.getByRole("checkbox"));
await expect(canvas.getByText("This is an example validation message")).toBeVisible();
await expect(getComputedStyle(getBorderFrame(warningCheckbox)).borderColor).not.toBe(
  getComputedStyle(getBorderFrame(baseCheckbox)).borderColor
);
```

For RadioGroupField, render one selected and one unselected item. Assert that the selected item keeps its selection treatment and the unselected warning item receives the status treatment.

- [ ] **Step 2: Run the failing stories**

Run: `devenv shell -- pnpm exec nx run storybook:test -- --run`

Expected: FAIL because all normal outer frames still use their old accent color.

- [ ] **Step 3: Implement the primitive variants**

Checkbox and Switch wrapper implementations call the hook and pass it to a `hasValidationMessage` outer-frame variant. Their base border becomes `$hairline`; their indicator, checked, focus, hover, and disabled styling remains unchanged.

RadioGroup calls the hook in `RadioGroupItemContainer`, passes it to `RadioGroupItemContainerFrame`, and adds the same variant. Only unselected resting item frames become `$hairline`.

FilePicker calls the hook in `FilePickerGroup`, passes it to `FilePickerGroupFrame`, and adds the same variant. Its inactive dashed border becomes `$hairline`; active, hover, and disabled variants remain unchanged.

- [ ] **Step 4: Preserve the RadioGroupField override**

`RadioGroupField.tsx` sets `borderColor` directly, so read the presentation hook in its item renderer and use this exact precedence:

```tsx
borderColor={
  selected
    ? "$accentHover"
    : hasValidationMessage
      ? "$accent"
      : "$hairline"
}
```

- [ ] **Step 5: Run focused verification and commit**

```bash
devenv shell -- pnpm exec nx run storybook:test -- --run
devenv shell -- pnpm exec nx run checkbox:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run switch:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run radio-group:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run file-picker:build-base --skip-nx-cache
devenv shell -- pnpm exec nx run radio-group-field:build-base --skip-nx-cache
git add components/checkbox/src components/switch/src components/radio-group/src components/file-picker/src components/radio-group-field/src
git commit -m "fix(forms): quiet resting choice and upload frames"
```

Expected: normal controls are neutral, warning controls use the status accent, and selected radio options remain distinct.

### Task 4: Perform the rendered component display audit

**Files:**
- Modify only after reproduction: the precise owner under `components/*/src/`.
- Test: the corresponding `*.stories.tsx` file.

**Interfaces:**
- Consumes: the completed border contract and existing stories.
- Produces: independently reproduced, visually verified display repairs; no speculative styling normalization.

- [ ] **Step 1: Inspect the form-control matrix in Storybook**

```bash
devenv shell -- pnpm exec nx run storybook:serve -- --port 4410
```

Inspect Base, Underline where supported, Warning, Disabled, and Focused states for Input, DatePickerField, TextArea, Select, Checkbox, Switch, RadioGroup, FilePicker, and input-derived fields. Inspect light and dark modes, keyboard focus, and a 360 CSS-pixel viewport.

- [ ] **Step 2: Capture defects before source edits**

Accept an audit item only with this evidence:

```text
story: <story-id>
viewport: <width>x<height>
interaction: <keyboard or pointer path>
expected: <measurable result>
actual: <measurable result>
owner: <components/.../src/file>
```

Reject a candidate that is only a style preference or already explained by a selected or disabled state.

- [ ] **Step 3: Repair each accepted owner with a regression story**

First add a failing `play` assertion to the recorded owner story for the observed geometry or computed style. Then make the smallest edit to that owner. Do not modify a shared primitive when the defect belongs to a field wrapper, and do not modify generated Storybook output.

- [ ] **Step 4: Re-run the exact interaction, full Storybook tests, and the build**

```bash
devenv shell -- pnpm exec nx run storybook:test -- --run
devenv shell -- pnpm exec nx run storybook:build --skip-nx-cache
```

Expected: each accepted issue has a passing regression assertion and live-browser confirmation. If local rendering is unavailable, report the build as a compile check only.

- [ ] **Step 5: Commit each independently verified audit repair**

```bash
git add <recorded-owner> <recorded-story>
git commit -m "fix(<component>): correct rendered <defect>"
```

### Task 5: Final cross-state verification and handoff

**Files:**
- Modify: none unless Task 4 records a new reproducible owner.

**Interfaces:**
- Consumes: completed Tasks 1–4.
- Produces: evidence separated into source, build, Storybook-test, and browser-rendered results.

- [ ] **Step 1: Check formatting and the precise diff**

```bash
devenv shell -- pnpm exec prettier --check components/field/src/Field.tsx components/input/src components/text-area/src components/select/src components/checkbox/src components/switch/src components/radio-group/src components/file-picker/src components/radio-group-field/src
git diff --check
git diff -- components/field components/input components/text-area components/select components/checkbox components/switch components/radio-group components/file-picker pnpm-lock.yaml
```

Expected: no whitespace errors and no unrelated changes in the targeted diff.

- [ ] **Step 2: Run all story assertions**

Run: `devenv shell -- pnpm exec nx run storybook:test -- --run`

Expected: PASS, including every border-contract play assertion.

- [ ] **Step 3: Record browser proof for both color schemes**

Run: `devenv shell -- pnpm exec nx run storybook:build --skip-nx-cache`

Render checked Base and Warning story IDs in light and dark modes. Record outer-frame and divider `border-color` values and screenshots showing no clipped text, icon overlap, or stale focus ring.

- [ ] **Step 4: Hand off exact evidence**

Report changed owners; normal/status/focus/disabled browser results; Storybook-test result; build/type/format results; and every unrelated worktree or environment limitation. Do not claim browser verification from a build alone.

## Self-Review

- Spec coverage: Task 1 owns visible-message routing; Task 2 covers Input, DatePicker-derived controls, TextArea, Select, and dividers; Task 3 covers Checkbox, Switch, RadioGroup, and FilePicker; Task 4 covers the requested display cleanup; Task 5 protects the proof boundary.
- Placeholder scan: the only variable work is Task 4, which deliberately requires a recorded reproduction before any additional repair. No implementation interface is undecided.
- Type consistency: `hasValidationMessage` is the sole new presentation property, and every primitive consumes `useFieldHasValidationMessage()`.
- Review focus coverage: Task 1 tests brand-without-message; Task 2 tests warning dividers, interaction states, and underlines; Task 3 tests binary frames and radio-selection precedence.
