---
title: Manual Address Input
description: Reference for the ManualAddressInput component, a set of form fields for entering a postal address by hand that adapts to the selected country.
documentType: reference
tags: [component, form, address, international]
component:
  name: manual-address-input
  package: "@cyclone-ui/manual-address-input"
  stories:
    - title: Form/ManualAddressInput
      file: components/manual-address-input/src/ManualAddressInput.stories.tsx
---

# Manual Address Input

`ManualAddressInput` renders the fields of a postal address: the country, three address lines, the city, the state and the ZIP code. The selected country decides what the other fields are called, whether they show, whether they are required and what a valid postal code looks like.

Use it when the user types an address by hand. To search for an address instead, use [Address Input](./address-input.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add manual-address-input
pnpm install
```

- **Files:** `address-format.ts` and `ManualAddressInput.tsx`. The CLI writes them to `<path>/manual-address-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Select](./select.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ManualAddressInput } from "@cyclone-ui/manual-address-input"
```

The package also exports `getManualAddressFieldNames`, `getCountryName`, `getAddressFormat`, `isValidPostalCode`, `COUNTRY_CODES`, and the `AddressFormat` and `ManualAddressFieldKey` types.

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

## Anatomy

```tsx
<ManualAddressInput />
```

`ManualAddressInput` has no child parts. It renders its own fields, in this order:

| Part | Renders | Purpose |
| --- | --- | --- |
| `ManualAddressInput` | A Tamagui `View` with a `4xl` gap | The root. It reads and writes the address values of the enclosing `Form`. |
| Address Line 1, 2, and 3 | One [Field](./field.md) and [Input](./input.md) for each line, with a native `<input>` that has an `autocomplete` value | The street lines. Line 1 has the placeholder `Street address or P.O. box`. Line 2 has `Apartment, suite, unit, building or floor`. |
| Country | A [Field](./field.md) and a [Select](./select.md). The list opens in a popover, or a sheet on small screens. | The countries, sorted by name. |
| City, state, and postal code | A Tamagui `View` row that wraps. Each cell grows from a 140 px basis. The state is a `Select` when the country has a state list, otherwise an `Input`. | The order is city, state, postal code. When the country writes the postal code first, the order is postal code, city, state. |

## Examples

The examples are the stories in [`ManualAddressInput.stories.tsx`](../../../components/manual-address-input/src/ManualAddressInput.stories.tsx). Each story renders the component in a `Form`, 560 px wide at most.

| Stories | What they show |
| --- | --- |
| `Base` | The US default, with a `ZIP Code` and a `State` list. The play test fills Address Line 1 and 2, which enables the next line. Clearing Line 1 disables Lines 2 and 3 again. |
| `Required` | `required`. Typing `9410` and pressing Tab shows `Enter a valid ZIP Code, such as 94103`. One more digit removes the message. |
| `International` | `defaultCountry="CA"`, with `Postal Code` and `Province` labels. |
| `ChangeCountry` | A US address with a UK postcode, which shows the ZIP Code error. Selecting the United Kingdom shows `Town/City` and `Postcode`, removes the state, and accepts the postcode. Selecting the United States again shows an empty state. |
| `PostalCodeFirst`, `NoPostalCode` | `DE`, with the postal code before the city and no state. `HK`, with a province and no postal code. |
| `SavedAddress` | Initial form values. Lines 2 and 3 are enabled, and the state shows `California`. |
| `NamePrefix` | `name="shipping"`. Address Line 1 has `autocomplete="section-shipping address-line1"`. |
| `LimitedCountries` | `countries={["US", "CA", "MX"]}`. |
| `LabelAbove`, `Underlined`, `Disabled` | `labelVariant="above"`, `variant="underlined"`, and `disabled`. |
| `SmallSize`, `LargeSize` | The `sm` and `lg` sizes. |

## Props

It also accepts the props of the Tamagui `View`.

| Prop             | Type                                      | Default       | Description                                           |
| ---------------- | ----------------------------------------- | ------------- | ----------------------------------------------------- |
| `name`           | `string`                                  | —             | A prefix for the field names.                         |
| `defaultCountry` | `string`                                  | `"US"`        | The country used while the form has no country value. |
| `countries`      | `string[]`                                | All countries | The ISO 3166-1 alpha-2 codes that the user can pick.  |
| `required`       | `boolean`                                 | `false`       | Require an address (see [Countries](#countries)).     |
| `disabled`       | `boolean`                                 | `false`       | Disable every field.                                  |
| `readOnly`       | `boolean`                                 | `false`       | Prevent edits to every field. The fields keep their normal colors. |
| `size`           | `"sm" \| "md" \| "lg"`                    | `"md"`        | The size of the fields.                               |
| `variant`        | `"outlined" \| "underlined" \| "inlined"` | `"outlined"`  | The field style.                                      |
| `labelVariant`   | `"floating" \| "above"`                   | `"floating"`  | Where the labels show.                                |

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
