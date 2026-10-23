---
title: PasswordInput
description: A password input with a show/hide toggle, a caps-lock warning, a strength meter, and a strength validator.
documentType: reference
tags: [component, form, input, password]
---

# PasswordInput

`PasswordInput` is a password field built on [Input](./input.md). It has a show/hide toggle, a caps-lock warning, and an optional strength meter. Inside a `Field`, it can also check the password against four criteria.

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

## Parts

| Part | Description |
| --- | --- |
| `PasswordInput` | The root. |
| `PasswordInput.TextBox` | The text box frame. |
| `PasswordInput.TextBox.Value` | The text entry. |
| `PasswordInput.Trigger` | The show/hide button. It has `Icon` and `Text` parts. |

## Props

`PasswordInputProps` is the [Input](./input.md) props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `showStrength` | `boolean` | `false` | Shows the strength meter below the input. |
| `validateStrength` | `boolean` | `false` | Inside a `Field`, lists each missing criterion. It applies only when the field sets no `validate` of its own. |
| `delay` | `number` | — | Milliseconds to show the last typed character before it is masked. When unset, every character is masked at once. |

## Password strength

The meter rates the password from `0` to `4`. The labels are `Very weak` (1), `Weak` (2), `Good` (3), and `Strong` (4). Strength `0` shows `Password strength`.

The meter has four segments. The filled segments use the `danger` theme at strength `1`, the `warning` theme at `2`, and the `success` theme at `3` and `4`. The segments are `aria-hidden`. The meter has `role="meter"` with the label `Password strength`, `aria-valuemin` `0`, `aria-valuemax` `4`, and the label as `aria-valuetext`.

- An empty password has strength `0`.
- A password with fewer than 8 characters has strength `1`.
- Otherwise, strength is `1` plus the number of character classes (lowercase, uppercase, digit, symbol), up to `4`.
- A password is strong only at strength `4`.

The validator reports each missing criterion as a `danger` message:

1. Use at least 8 characters.
2. Include an uppercase letter.
3. Include a lowercase letter.
4. Include a number or special character.

The package also exports `passwordStrengthValidator` for use as a field validator.

## States

- **Hidden or shown:** The trigger toggles the password. Its label is `Show password` or `Hide password`.
- **Caps lock:** An `info` message `Caps lock on` appears when caps lock is active.
- **Disabled, required, and validation states:** These come from the `Field`.
- **Label variants:** The stories show floating, outlined, underlined, and inlined labels, and labels above the input.

## Related

- [Input](./input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/password-input/src/PasswordInput.tsx`](../../../components/password-input/src/PasswordInput.tsx)
- [`components/password-input/src/password-strength.ts`](../../../components/password-input/src/password-strength.ts)
- [`components/password-input/src/PasswordInput.stories.tsx`](../../../components/password-input/src/PasswordInput.stories.tsx)
- [`components/password-input/src/password-strength.test.ts`](../../../components/password-input/src/password-strength.test.ts)
