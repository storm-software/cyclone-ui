---
title: Credit card input
description: Reference for the CreditCardInput component, card number, expiry, security code, and name fields with a live card preview.
documentType: reference
tags: [component, form, input]
---

# Credit card input

`CreditCardInput` collects a card number, an expiry date, a security code, and the name on the card. A card preview follows what the user types.

The number is masked and grouped for the detected brand (Visa, Mastercard, Amex, and others) and checked with the Luhn algorithm. The expiry date is checked against today. Each field shows a success icon once it is valid.

Wrap each field part in a [Field](./field.md). The part connects itself to that field.

Source: [`components/credit-card-input`](https://github.com/storm-software/cyclone-ui/tree/main/components/credit-card-input)

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

| Part | Purpose |
| --- | --- |
| `CreditCardInput` | Groups the preview and the fields. |
| `CreditCardInput.Card` | The preview. `bankName` is the issuer name in the top corner. |
| `CreditCardInput.Number` | The card number. The field value is the digits only. |
| `CreditCardInput.Expiry` | The expiry date. The field value is `MM/YY`. |
| `CreditCardInput.SecurityCode` | The security code. |
| `CreditCardInput.Name` | The name on the card. |

Each field part is an [Input](./input.md). It supplies its mask, parsing, and validation to the enclosing field. A field's own `validate` replaces the part's validation.

`getCreditCardBrand` returns the brand for a digit string. The part names are `number`, `expiry`, `securityCode`, and `name`.

## Related pages

- [Field](./field.md)
- [Input](./input.md)
