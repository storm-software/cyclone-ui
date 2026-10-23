---
title: PhoneNumberInput
description: A phone number input with a searchable country-code menu. The value is masked and formatted for the selected country.
documentType: reference
tags: [component, form, input, phone]
---

# PhoneNumberInput

`PhoneNumberInput` is a phone number field built on [Input](./input.md). It adds a searchable country-code menu with flags. The value is masked with `@maskito/phone` and checked against `libphonenumber-js` metadata.

It works alone, as a controlled input (`value` and `onChange`), or inside a `Field`.

## Import

```tsx
import { PhoneNumberInput } from "@cyclone-ui/phone-number-input";
```

## Usage

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { PhoneNumberInput } from "@cyclone-ui/phone-number-input";

<Form name="contact" initialValues={{ phone: "" }}>
  <Field name="phone">
    <Field.Label>Label Text</Field.Label>
    <PhoneNumberInput defaultCountry="US">
      <PhoneNumberInput.TextBox>
        <PhoneNumberInput.TextBox.Value placeholder="Phone number" />
      </PhoneNumberInput.TextBox>
    </PhoneNumberInput>
  </Field>
</Form>;
```

## Parts

| Part | Description |
| --- | --- |
| `PhoneNumberInput` | The root. |
| `PhoneNumberInput.TextBox` | The text box frame. |
| `PhoneNumberInput.TextBox.Value` | The text entry. It uses `type="tel"`, `inputMode="tel"`, and `autoComplete="tel"`. |
| `PhoneNumberInput.Trigger` | The `Input.Trigger`. |

## Props

`PhoneNumberInputProps` is the [Input](./input.md) props (without `value` and `defaultValue`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultCountry` | `CountryCode` | `"US"` | ISO 3166-1 alpha-2 country used until the value identifies a country. |
| `value` | `string` | — | The controlled value. Inside a `Field`, the field value is used. |
| `defaultValue` | `string` | — | The initial value when uncontrolled and outside a `Field`. |

## Behavior

- The input starts with the calling code of the country, for example `+1 `. Typing `2125550123` gives `+1 212 555-0123`.
- Choosing another country clears the entered number.
- The country button opens a menu. A search box with the label `Search countries` filters the list.
- Each country row has the label `<name> (<code>) +<calling code>`.

## Variants and states

The stories show the sizes `sm`, `md`, and `lg`, and the states required, disabled, default value, and the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

## Accessibility

The country button has the label `Select country code, currently <country> +<calling code>`. The search box has the label `Search countries`.

## Related

- [Input](./input.md)
- [SearchInput](./search-input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/phone-number-input/src/PhoneNumberInput.tsx`](../../../components/phone-number-input/src/PhoneNumberInput.tsx)
- [`components/phone-number-input/src/PhoneNumberInput.stories.tsx`](../../../components/phone-number-input/src/PhoneNumberInput.stories.tsx)
