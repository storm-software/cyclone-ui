---
title: Password Input
description: A password input with a show/hide toggle, a caps-lock warning, a strength meter, and a strength validator.
documentType: reference
tags: [component, form, input, password]
component:
  name: password-input
  package: "@cyclone-ui/password-input"
  stories:
    - title: Form/PasswordInput
      file: components/password-input/src/PasswordInput.stories.tsx
---

# Password Input

`PasswordInput` is a password field built on [Input](./input.md). It has a show/hide toggle, a caps-lock warning, and an optional strength meter. Inside a `Field`, it can also check the password against four criteria.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add password-input
pnpm install
```

- **Files:** `password-strength.ts` and `PasswordInput.tsx`. The CLI writes them to `<path>/password-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Field](./field.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Ripple Animation](./ripple-animation.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/stacks`.

## Import

```tsx
import { PasswordInput } from "@cyclone-ui/password-input";
```

## Usage

Wrap the input in a `Field` and a `Form` to connect it to form state.

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { PasswordInput } from "@cyclone-ui/password-input";

<Form name="signUp" initialValues={{ password: "" }}>
  <Field name="password">
    <Field.Label>New Password</Field.Label>
    <PasswordInput showStrength validateStrength>
      <PasswordInput.TextBox>
        <PasswordInput.TextBox.Value autoComplete="new-password" />
      </PasswordInput.TextBox>
      <PasswordInput.Trigger />
    </PasswordInput>
  </Field>
</Form>;
```

## Anatomy

```tsx
<PasswordInput>
  <PasswordInput.TextBox>
    <PasswordInput.TextBox.Value />
  </PasswordInput.TextBox>
  <PasswordInput.Trigger />
</PasswordInput>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `PasswordInput` | A Tamagui `YStack` that holds an [Input](./input.md) frame and, with `showStrength`, the strength meter | The root. It holds the shown or hidden state. With `validateStrength`, it gives the field the strength validator. |
| `PasswordInput.TextBox` | `Input.TextBox` | The text box frame. |
| `PasswordInput.TextBox.Value` | `Input.TextBox.Value`, an `<input type="password">`. It is `type="text"` while the password shows. | The text entry. It checks the caps lock state on each key down and key up. With `delay`, it shows the last typed character for a short time on web. |
| `PasswordInput.Trigger` | A `Field.Icon` at the end of the input: a separator line and a circular ghost [Button](./button.md) | The show/hide button. Its `aria-label` is `Show password` or `Hide password`. Its default child is a `Watch` or `WatchOff` icon with `aria-hidden`. |
| `PasswordInput.Trigger.Icon`, `PasswordInput.Trigger.Text` | `Field.Icon` and `Input.Trigger.Text` | Parts to replace the default icon. |
| Strength meter | A Tamagui `View` with `role="meter"` | Shows when `showStrength` is set. See [Password strength](#password-strength). |

`PasswordInputTextBox`, `PasswordInputTextBoxValue`, `PasswordInputTrigger`, `PasswordInputTriggerIcon`, and `PasswordInputTriggerText` are also exported by name. Use them in React Server Components, which cannot read `PasswordInput.TextBox` from a client module.

## Examples

The examples are the stories in [`PasswordInput.stories.tsx`](../../../components/password-input/src/PasswordInput.stories.tsx). Each story puts the input in a `Form` and a `Field` with the label `New Password`. The stories set `showStrength` and `validateStrength` to `true` unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | The meter starts at `0`. A strong password moves it to `Strong`. The trigger shows the password and changes its label to `Hide password`. A caps lock key event shows `Caps lock on`, and a key event without caps lock removes it. |
| `HoverReset` | Without the meter or validator. The separator before the trigger changes color on hover and returns to its resting color after. |
| `MissingCriteria` | The value `pass!`. After blur, the field lists the two missing criteria: length and an uppercase letter. |
| `WithoutStrength` | `showStrength` and `validateStrength` set to `false`. No meter shows and no criteria messages appear. |
| `RevealLastCharacter` | `delay={1000}`. After typing `abc`, an overlay shows `••c`, then goes away. The input stays `type="password"`. |
| `Required`, `Description`, `Disabled` | A required field (no `(Optional)` text), a long `Field.Details` description, and a disabled input. |
| `Floating`, `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating`, `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove` | A floating label centered on the input, then each variant with a floating label and with a label above the input. |
| `DefaultValue`, `VeryWeak`, `Weak`, `Good` | Initial values that rate `Strong`, `Very weak`, `Weak`, and `Good`. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | Each validation message type. `Error` shows its message before blur. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

`PasswordInputProps` is the [Input](./input.md) props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `showStrength` | `boolean` | `false` | Shows the strength meter below the input. |
| `validateStrength` | `boolean` | `false` | Inside a `Field`, lists each missing criterion. It applies only when the field sets no `validate` of its own. |
| `delay` | `number` | — | Milliseconds to show the last typed character before it is masked, on web. When unset, every character is masked at once. Pastes and deletions are masked at once. |

## Password strength

The meter rates the password from `0` to `4`. The labels are `Very weak` (1), `Weak` (2), `Good` (3), and `Strong` (4). Strength `0` shows `Password strength`.

The meter has four segments. The filled segments use the `danger` theme at strength `1`, the `warning` theme at `2`, and the `success` theme at `3` and `4`. The segments are `aria-hidden`. The meter has `role="meter"` with the label `Password strength`, `aria-valuemin` `0`, `aria-valuemax` `4`, the strength as `aria-valuenow`, and the strength label as `aria-valuetext`.

Inside a `Field`, the meter rates the field value. Without a `Field`, it rates the typed text.

- An empty password has strength `0`.
- A password with fewer than 8 characters has strength `1`.
- Otherwise, strength is `1` plus the number of character classes (lowercase, uppercase, digit, symbol), up to `4`.
- A password is strong only at strength `4`.

The validator reports each missing criterion below as a `danger` message. An empty or strong password has no messages.

1. Use at least 8 characters.
2. Include an uppercase letter.
3. Include a lowercase letter.
4. Include a number or special character.

The package also exports `passwordStrengthValidator` for use as a field validator.

## States

- **Hidden or shown:** The trigger toggles the password. Its label is `Show password` or `Hide password`. It does not toggle while the input is disabled.
- **Caps lock:** Inside a `Field`, an `info` message `Caps lock on` appears when caps lock is active. It goes away on blur.
- **Disabled, required, and validation states:** These come from the `Field`.
- **Label variants:** The stories show floating, outlined, underlined, and inlined labels, and labels above the input.

## Related

- [Input](./input.md)
- [Field](./field.md)
- [Form](./form.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/password-input/src/PasswordInput.tsx`](../../../components/password-input/src/PasswordInput.tsx)
- [`components/password-input/src/password-strength.ts`](../../../components/password-input/src/password-strength.ts)
- [`components/password-input/src/PasswordInput.stories.tsx`](../../../components/password-input/src/PasswordInput.stories.tsx) (title: `Form/PasswordInput`)
- [`components/password-input/src/password-strength.test.ts`](../../../components/password-input/src/password-strength.test.ts)
