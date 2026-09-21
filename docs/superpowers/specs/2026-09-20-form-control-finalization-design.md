# Form-control finalization design

## Intent

Finalize the visual contract for Cyclone UI form controls without changing the
visual language of unrelated containers. A control should recede while it is
waiting for input, clearly respond to interaction, and show a matching status
color only when a validation message is visible.

The audience is product teams composing Cyclone UI fields. The outcome is a
consistent frame treatment across standalone primitives and their field-backed
compounds, with Storybook proof of the visible states.

## Visual contract

| State | Border treatment | Rationale |
| --- | --- | --- |
| Resting control | `$hairline` | Keeps inactive form chrome subordinate to the entered value and label. |
| Hover, focus, and focus-visible | Existing interaction styling | Preserve the current hover feedback, active border, and focus ring. |
| Disabled | Existing disabled styling | Preserve the existing unavailable-control treatment. |
| Displayed validation message | The validation theme's `$accent` family | Makes the frame, validation text, and theme icon communicate one status. |

The existing semantic palette is retained: light resting hairlines resolve to
`#BEBEBE`, dark resting hairlines to `#616161`; active and status colors remain
the current theme tokens. No literal colors will be introduced into component
styles.

```text
Label
┌─────────────────────────────────┐
│ value or placeholder        icon │  resting: hairline
└─────────────────────────────────┘  focus: existing ring and active accent
Validation text                       message: matching status accent border
```

## Architecture

`Field` already selects a status theme using its message atoms, with a defined
priority order. Its themes deliberately leave `$hairline` neutral, so simply
changing primitive frames from `$accent` to `$hairline` would incorrectly make
warning and error frames neutral.

Add a small, explicit validation-border state to form primitives. The state is
false by default and changes the resting frame (and any matching internal
divider) from `$hairline` to `$accent` only when a field has one or more
displayed messages. Field compounds derive and pass this state from the
existing `messages` atom. Standalone primitives retain the neutral default.

This is intentionally not a theme-token remapping: redefining `$hairline` in a
status theme would recolor unrelated separators and containers nested beneath a
field. It also does not use a field's configured theme in the absence of a
message; the visible-message condition is the product contract.

## Scope

The initial control sweep covers the frame owners for:

- `Input` (including DatePicker and other input-derived controls) and its
  matching separators;
- `TextArea`, `Select`, `Checkbox`, and `Switch`;
- `RadioGroup` items and `FilePicker` where they act as form values;
- each corresponding field compound that reads `FieldApi`, including direct
  field controls and input-derived compounds.

The sweep excludes cards, tables, popovers, badges, and other bordered
containers. It must not modify external packages, generated artifacts, or the
pre-existing worktree changes.

## Display-quality audit

After the control contract is in place, review component stories by category:
text entry, selection, binary controls, choice groups, uploads, and compound
fields. Make only localized fixes for reproducible issues such as clipped
labels, misaligned icons, missing value inset, invalid inline markup, or state
transitions that fail to clear. Do not normalize unrelated components merely
because their styling differs.

## Verification

1. Add or extend focused story interaction assertions for resting and warning
   field states. Assert computed frame and divider border colors, not just
   source tokens.
2. Render representative standalone controls and field compounds in Storybook
   in both light and dark modes. Inspect default, warning, focus, and disabled
   states; test keyboard focus and blur where the control owns a focus ring.
3. Run affected component lint/type/build targets, formatting, and
   `git diff --check`.
4. Report browser evidence separately from source/build checks, and report any
   pre-existing workspace or Storybook blocker without attributing it to this
   change.

## Acceptance criteria

- A normal textbox/value box and every in-scope standalone form frame render
  `$hairline` at rest.
- A field with a displayed warning (and the other supported message types)
  renders its frame in the matching status accent.
- Focus and disabled states continue to work as before.
- Related dividers do not contradict the frame state.
- No unrelated bordered component changes as a side effect.
