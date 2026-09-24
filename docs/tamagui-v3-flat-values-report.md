# Tamagui v3 flat-values migration record

## Baseline

- Recorded: 2026-09-24
- Workspace Tamagui catalog: `2.7.7`
- Razorwind generator baseline: `@razorwind/tamagui@0.0.74`
- Razorwind generator used for v3 output: `@razorwind/tamagui@0.0.75`
- Target runtime: the registry's current `3.0.0-beta.1422.1` line. No stable v3 release is published at this record's date.

### Preserved theme contract

| Theme | `surfaceCanvas` | `inkEmphasis` | `hairline` |
| --- | --- | --- | --- |
| `light` | `#eaeaea` | `#2b2c30` | `#b0b0b1` |
| `dark` | `#151518` | `#e1e1e1` | `#606164` |

The generated configuration currently exposes the custom `sm` (640px), `md`
(768px), `lg` (1024px), `xl` (1280px), and `xxl` (1536px) media keys, plus
the existing height and maximum-width variants. Its 17 font keys are retained
as the upgrade comparison set.

### Generator compatibility decision

`@razorwind/tamagui@0.0.75` adds a supported `target: "v3"` generator mode.
Cyclone enables that mode in `razorwind.config.ts`; the emitted config sets
`styleValueSyntax: "string"`, disables legacy condition objects, and augments
the `tamagui` module. The generated file continues to use
`@tamagui/config/v5-motion` and the separately published
`@tamagui/theme-builder@2.7.7`. No v3 theme-builder package exists. The
standalone builder is retained as the generator's compatibility layer and the
generated config is validated against the v3 runtime rather than hand-patched.

### Baseline limitations

- `tools-razorwind:test` has nine existing failures before migration work.
  They cover Shiki theme mapping plus preprocessor assertions for on-accent,
  muted contrast, state brightness, and ring opacity. These failures do not
  concern the generated Tamagui v3 import/config compatibility gate and are
  not changed by this migration.
- The published `@tamagui/codemod-flat-values`, `@tamagui/eslint-plugin`, and
  `@tamagui/language-service` packages currently expose only a
  `0.0.0-bootstrap.0` release. They are not added to the catalog until their
  supported installation contract is established.

## V3 dependency checkpoint

- Runtime/config family: `3.0.0-beta.1422.1`.
- Compatibility packages without a v3 beta:
  `@tamagui/animations-moti@2.7.7`, `@tamagui/lucide-icons-2@2.7.7`, and
  `@tamagui/theme-builder@2.7.7`.
- `pnpm install --lockfile-only --ignore-scripts` and
  `pnpm install --ignore-scripts` completed against the 90-project workspace.
- The generated config loads through the v3 runtime with the baseline light and
  dark semantic values, media map, and 17 font keys unchanged.

### Reserved token rename

Tamagui v3 rejects `none` as a configured token key because it resolves as a
literal CSS keyword. The owned source tokens `size.none`, `spacing.none`, and
`border-radius.none` are renamed to `zero`; all three retain the numeric value
`0`, the semantic `border-radius.sheet` reference follows the rename, and
Cyclone call sites using the spacing token move from `$none` to `$zero`.

## Decisions

| Category | Decision |
| --- | --- |
| Config scale | Retain the existing custom config and token values; do not adopt config v6. |
| Generated config | Regenerate only through `nx run monorepo:generate-tokens`; never hand-edit `packages/themes/src/tamagui/config.ts`. |
| V3 version | Use the exact `3.0.0-beta.1422.1` family; retain only the three packages that do not publish that beta at 2.7.7. |
| Reserved token keys | Rename the generated zero-value `none` tokens to `zero` at their DTCG source and update token references/call sites without changing values. |
| Baseline failures | Keep the nine Razorwind failures unchanged and report them separately from migration validation. |
