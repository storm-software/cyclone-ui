---
title: Credit Card Input
description: Reference for the CreditCardInput component, card number, expiry, security code, and name fields with a live card preview.
documentType: reference
tags: [component, form, input]
component:
  name: credit-card-input
  package: "@cyclone-ui/credit-card-input"
  stories:
    - title: Form/CreditCardInput
      file: components/credit-card-input/src/CreditCardInput.stories.tsx
---

# Credit Card Input

`CreditCardInput` collects a card number, an expiry date, a security code, and the name on the card. A card preview follows what the user types.

The number is masked and grouped for the detected brand (Visa, Mastercard, Amex, and others) and checked with the Luhn algorithm. The expiry date is checked against today.

Wrap each field part in a [Field](./field.md). The part connects itself to that field.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add credit-card-input
pnpm install
```

- **File:** `CreditCardInput.tsx`. The CLI writes it to `<path>/credit-card-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Eyebrow Text](./eyebrow-text.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Password Input](./password-input.md), [Ripple Animation](./ripple-animation.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@maskito/core`, `@maskito/kit`, `@maskito/react`, `@tamagui/core`, `@tamagui/helpers-icon`, and `react-native-svg`.

## Import

```tsx
import { CreditCardInput } from "@cyclone-ui/credit-card-input";
import { Field } from "@cyclone-ui/field";
```

## Usage

```tsx
<CreditCardInput>
  <CreditCardInput.Card bankName="Storm" />
  <Field name="number" required>
    <Field.Label>Card number</Field.Label>
    <CreditCardInput.Number />
  </Field>
  <Field name="expiry" required>
    <Field.Label>Expiry date</Field.Label>
    <CreditCardInput.Expiry placeholder="MM/YY" />
  </Field>
  <Field name="securityCode" required>
    <Field.Label>Security code</Field.Label>
    <CreditCardInput.SecurityCode />
  </Field>
  <Field name="nameOnCard" required>
    <Field.Label>Name on card</Field.Label>
    <CreditCardInput.Name />
  </Field>
</CreditCardInput>
```

## Anatomy

```tsx
<CreditCardInput>
  <CreditCardInput.Card />
  <Field>
    <CreditCardInput.Number />
  </Field>
  <Field>
    <CreditCardInput.Expiry />
  </Field>
  <Field>
    <CreditCardInput.SecurityCode />
  </Field>
  <Field>
    <CreditCardInput.Name />
  </Field>
</CreditCardInput>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `CreditCardInput` | A Tamagui `View` with a `4xl` gap | Groups the preview and the fields. It shares the typed values with the preview. |
| `CreditCardInput.Card` | A Tamagui `View` with `aria-hidden`, 380 px wide at most, with an aspect ratio of 1.75. The texture, chip, and brand logo are `react-native-svg` drawings. | The preview. `bankName` is the issuer name in the top corner. It shows the number padded with `•`, the name (or `Full name`), and the expiry date (or `MM/YY`). |
| `CreditCardInput.Number` | An [Input](./input.md) with a native `<input>` (`autocomplete="cc-number"`, `inputMode="numeric"`). When the brand is known, it adds an `Input.Separator` and the brand icon. | The card number. The field value is the digits only. |
| `CreditCardInput.Expiry` | An [Input](./input.md) with a native `<input>` (`autocomplete="cc-exp"`, `inputMode="numeric"`) | The expiry date. The field value is `MM/YY`. |
| `CreditCardInput.SecurityCode` | A [PasswordInput](./password-input.md) with a native `<input type="password">` (`autocomplete="cc-csc"`, `inputMode="numeric"`) | The security code. It shows each typed digit for 500 ms, then masks it. |
| `CreditCardInput.Name` | An [Input](./input.md) with a native `<input>` (`autocomplete="cc-name"`) | The name on the card. |

Each field part supplies its mask, parsing, and validation to the enclosing field. A field's own `validate` replaces the part's validation. Outside a `Field`, the part applies its mask itself.

`getCreditCardBrand` returns the brand for a digit string. The part names are `number`, `expiry`, `securityCode`, and `name`.

`CreditCardInputCard`, `CreditCardInputNumber`, `CreditCardInputExpiry`, `CreditCardInputSecurityCode`, and `CreditCardInputName` are also exported by name. Use them in React Server Components, which cannot read `CreditCardInput.Card` from a client module.

## Examples

The examples are the stories in [`CreditCardInput.stories.tsx`](../../../components/credit-card-input/src/CreditCardInput.stories.tsx). Each story renders the card and four required fields in a `Form`, 480 px wide at most. The expiry date and the security code are side by side.

| Stories | What they show |
| --- | --- |
| `Base` | The play test types a Visa number, `999` as the expiry (padded to `09/99`), `12345` as the security code (cut to `123`), and a name. The card shows each value and the Visa logo. |
| `Description` | An `above` label with a `Field.Details` description on the card number. |
| `Visa`, `Mastercard`, `Discover`, `UnionPay`, `JCB` | A test number for each brand, in groups of four, with the brand icon in the field and the logo on the card. |
| `Amex`, `DinersClub` | The 4-6-5 and 4-6-4 groups. Amex takes a 4-digit security code. |
| `CustomBankName`, `SavedCard` | Saved Mastercard values from the form, with `bankName="Storm Bank"` or the default bank name. |
| `Invalid` | A number that fails the Luhn check, an expired date, and a short security code. Each error shows after its field loses focus. |
| `Disabled`, `SmallSize`, `LargeSize` | Disabled fields, and the `sm` and `lg` sizes. |

## Props

### `CreditCardInput`

It accepts the props of the Tamagui `View`.

### `CreditCardInput.Card`

It also accepts the props of the Tamagui `View`.

| Prop       | Type     | Default         | Description                                  |
| ---------- | -------- | --------------- | -------------------------------------------- |
| `bankName` | `string` | `"Credit Bank"` | The card issuer name, shown in the top corner. |

### Field parts

`CreditCardInput.Number`, `.Expiry`, `.SecurityCode`, and `.Name` take `CreditCardInputPartProps`: the [Input](./input.md) props plus the props below.

| Prop          | Type     | Default                      | Description                                                                                      |
| ------------- | -------- | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| `placeholder` | `string` | -                            | The placeholder of the text box.                                                                 |
| `delay`       | `number` | `500` on `SecurityCode`      | The security code only. The time in milliseconds to show the last typed digit before it is masked. `0` masks it at once. |

## Validation

| Part           | Mask                                                                  | Error messages                                                                    |
| -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `Number`       | Digit groups of the brand, up to the longest brand length              | `Card number is incomplete`, `Card number is invalid` (Luhn check)                 |
| `Expiry`       | `MM/YY`. The month stays in 01–12. A first digit of 2–9 becomes `02`–`09`. | `Expiry date is incomplete`, `Expiry month is invalid`, `Card has expired`         |
| `SecurityCode` | The security code length of the brand                                  | `Security code must be <length> digits`                                            |
| `Name`         | None                                                                  | `Enter the name shown on the card`                                                 |

A card is valid through the last day of its expiry month. While the user types, a part reports an error only when the value is complete. On blur, it reports an error for any value that is not empty.

| Brand       | Leading digits             | Groups    | Lengths        | Security code |
| ----------- | -------------------------- | --------- | -------------- | ------------- |
| Amex        | 34, 37                     | 4-6-5     | 15             | 4             |
| Diners Club | 300–305, 36                | 4-6-4     | 14             | 3             |
| JCB         | 3528–3589                  | 4-4-4-4-3 | 16–19          | 3             |
| Visa        | 4                          | 4-4-4-4-3 | 16, 13, 19     | 3             |
| Mastercard  | 51–55, 2221–2720           | 4-4-4-4   | 16             | 3             |
| Discover    | 6011, 644–649, 65          | 4-4-4-4-3 | 16, 19         | 3             |
| UnionPay    | 62                         | 4-4-4-4-3 | 16–19          | 3             |

A number that matches no brand uses groups of 4-4-4-4, a length of 16, and a 3-digit security code.

## Accessibility

- The card preview has `aria-hidden`. Screen readers read the fields only.
- Each text box sets an `autocomplete` value (`cc-number`, `cc-exp`, `cc-csc`, `cc-name`), so browsers can fill in a saved card.
- The security code is a password input. It shows a caps lock warning from [PasswordInput](./password-input.md).

## Related

- [Field](./field.md)
- [Input](./input.md)
- [PasswordInput](./password-input.md)

## Source

- [`components/credit-card-input/src/CreditCardInput.tsx`](../../../components/credit-card-input/src/CreditCardInput.tsx)
- [`components/credit-card-input/src/CreditCardInput.stories.tsx`](../../../components/credit-card-input/src/CreditCardInput.stories.tsx) (title: `Form/CreditCardInput`)
