---
title: Manual Address Input
description: Reference for the ManualAddressInput component, a set of form fields for entering a postal address by hand that adapts to the selected country.
documentType: reference
tags: [component, form, address, international]
---

# Manual Address Input

`ManualAddressInput` renders the fields of a postal address: the country, three address lines, the city, the state and the ZIP code. The selected country decides what the other fields are called, whether they show, whether they are required and what a valid postal code looks like.

Use it when the user types an address by hand. To search for an address instead, use [Address Input](./address-input.md).

## Import

```tsx
import { ManualAddressInput } from "@cyclone-ui/manual-address-input"
```

## Usage

`ManualAddressInput` renders its own `Field`s, so it must be inside a `Form`.

```tsx
import { Form } from "@cyclone-ui/form"
import { ManualAddressInput } from "@cyclone-ui/manual-address-input"

export const ShippingAddress = () => (
  <Form name="checkout" initialValues={{ country: "US" }}>
    <ManualAddressInput required={true} />
  </Form>
)
```

## Values

The form stores each part under its own field name:

| Field          | Holds                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| `country`      | The ISO 3166-1 alpha-2 code, such as `US`.                                       |
| `addressLine1` | The street address.                                                              |
| `addressLine2` | The apartment, suite, unit, building or floor.                                   |
| `addressLine3` | Any more address detail.                                                         |
| `city`         | The city.                                                                        |
| `state`        | The state code (such as `CA`) when picked from a list, otherwise the typed text. |
| `zipCode`      | The ZIP or postal code.                                                          |

Set `name` to prefix the names, for example `shipping` gives `shippingCountry`, `shippingAddressLine1` and so on. Use this to put two addresses in one form. `getManualAddressFieldNames(prefix)` returns the names.

When the form has no country value, the component sets it to `defaultCountry` without making the form dirty.

## Address lines

Address Line 2 is disabled until Address Line 1 has text, and Address Line 3 is disabled until Address Lines 1 and 2 have text.

## Countries

`getAddressFormat(country)` returns the rules that the component uses:

| Rule              | Examples                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| Postal code label | `ZIP Code` (US), `Postcode` (GB, AU, NZ), `PIN Code` (IN), `Eircode` (IE), otherwise `Postal Code`      |
| State label       | `State` (US, AU, IN, BR, MX, MY), `Prefecture` (JP), `County` (IE), `Region` (RU), otherwise `Province` |
| City label        | `Suburb` (AU), `Town/City` (GB, IE, NZ), otherwise `City`                                               |
| No state line     | Most of Europe, New Zealand, Singapore and others                                                       |
| No postal code    | Hong Kong, the United Arab Emirates, Qatar and others                                                   |
| No city line      | Singapore                                                                                               |
| State list        | The US, Canada and Australia. Other countries have a text box.                                          |
| Postal code first | Germany, France, Italy, Spain, the Netherlands, the Nordic countries and others ("10115 Berlin")        |

Countries without specific rules get an optional `Province` and `Postal Code`.

With `required`, the country, Address Line 1 and the city are required. The state is required only where addresses must have one (such as the US, Canada and Japan), and the postal code only where the country has a known postal code format (Ireland's Eircode stays optional).

A postal code that does not match the country's format shows "Enter a valid ZIP Code, such as 94103" (with the country's label and example) after the field loses focus. `isValidPostalCode(value, country)` runs the same check, for example on a server.

When the user picks another country, the component clears the state, and the city or postal code if the new country has none. It checks the postal code again against the new country's format.

## Props

It also accepts the props of the Tamagui `View`.

| Prop             | Type                                      | Default       | Description                                           |
| ---------------- | ----------------------------------------- | ------------- | ----------------------------------------------------- |
| `name`           | `string`                                  | —             | A prefix for the field names.                         |
| `defaultCountry` | `string`                                  | `"US"`        | The country used while the form has no country value. |
| `countries`      | `string[]`                                | All countries | The ISO 3166-1 alpha-2 codes that the user can pick.  |
| `required`       | `boolean`                                 | `false`       | Require an address (see [Countries](#countries)).     |
| `disabled`       | `boolean`                                 | `false`       | Disable every field.                                  |
| `size`           | `"sm" \| "md" \| "lg"`                    | `"md"`        | The size of the fields.                               |
| `variant`        | `"outlined" \| "underlined" \| "inlined"` | `"outlined"`  | The field style.                                      |
| `labelVariant`   | `"floating" \| "above"`                   | `"floating"`  | Where the labels show.                                |

## Accessibility

- Each field has a label, so assistive technology reads its name.
- The text boxes set `autocomplete` (`address-line1`, `address-level2`, `postal-code` and so on) so browsers can fill them in. With `name`, the values start with `section-<name>`, so the browser keeps two addresses apart.
- In the open country and state lists, typing moves to the first option that starts with the typed text.

## Related

- [Address Input](./address-input.md)
- [Select](./select.md)
- [Input](./input.md)

## Source

- [`components/manual-address-input/src/ManualAddressInput.tsx`](../../../components/manual-address-input/src/ManualAddressInput.tsx)
- [`components/manual-address-input/src/address-format.ts`](../../../components/manual-address-input/src/address-format.ts)
- [`components/manual-address-input/src/ManualAddressInput.stories.tsx`](../../../components/manual-address-input/src/ManualAddressInput.stories.tsx) (title: `Form/ManualAddressInput`)
