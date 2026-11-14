---
title: Phone Number Input
description: A phone number input with a searchable country-code menu. The value is masked and formatted for the selected country.
documentType: reference
tags: [component, form, input, phone]
component:
  name: phone-number-input
  package: "@cyclone-ui/phone-number-input"
  stories:
    - title: Form/PhoneNumberInput
      file: components/phone-number-input/src/PhoneNumberInput.stories.tsx
---

# Phone Number Input

`PhoneNumberInput` is a phone number field built on [Input](./input.md). It adds a searchable country-code menu with flags. The value is masked with `@maskito/phone` and checked against `libphonenumber-js` metadata.

It works alone, as a controlled input (`value` and `onChange`), or inside a `Field`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add phone-number-input
pnpm install
```

- **File:** `PhoneNumberInput.tsx`. The CLI writes it to `<path>/phone-number-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Search Input](./search-input.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@maskito/core`, `@maskito/phone`, `@tamagui/core`, `@tamagui/text`, and `libphonenumber-js`.

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

// Controlled, without a Field
<PhoneNumberInput
  defaultCountry="GB"
  value={phone}
  onChange={event => setPhone(event.detail)}>
  <PhoneNumberInput.TextBox>
    <PhoneNumberInput.TextBox.Value placeholder="Phone number" />
  </PhoneNumberInput.TextBox>
</PhoneNumberInput>;
```

## Anatomy

```tsx
<PhoneNumberInput>
  <PhoneNumberInput.TextBox>
    <PhoneNumberInput.TextBox.Value />
  </PhoneNumberInput.TextBox>
</PhoneNumberInput>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `PhoneNumberInput` | An [Input](./input.md) frame (a Tamagui `XStack`) | The root. It holds the country, the mask, and the value. It adds the country menu and an `Input.Separator` before its children. |
| Country menu (added for you) | An `Input.Trigger` (a `link` [Button](./button.md)) that opens a [Context menu](./context-menu.md) popover, which is a bottom sheet on small screens | Shows the flag of the selected country. The menu holds a [SearchInput](./search-input.md) and one `ContextMenu.Item` for each country. |
| `PhoneNumberInput.TextBox` | `Input.TextBox`, a Tamagui `XStack` | The text box frame. It fills the free width. |
| `PhoneNumberInput.TextBox.Value` | `Input.TextBox.Value`, a native `<input type="tel">` | The text entry. It sets `inputMode="tel"` and `autoComplete="tel"`. Outside a `Field`, it applies the phone mask itself. It remounts when the country changes. |
| `PhoneNumberInput.Trigger` | `Input.Trigger`, a `link` [Button](./button.md) in a square frame | An optional extra trigger. |

`PhoneNumberInputTextBox`, `PhoneNumberInputValue`, and `PhoneNumberInputTrigger` are also exported by name. Use them in React Server Components, which cannot read `PhoneNumberInput.TextBox` from a client module.

## Examples

The examples are the stories in [`PhoneNumberInput.stories.tsx`](../../../components/phone-number-input/src/PhoneNumberInput.stories.tsx). Each story renders the input in a `Form` and a `Field`.

| Stories | What they show |
| --- | --- |
| `Base` | A floating label and the default country `US`. The play test types a number, opens the country menu, searches for `United Kingdom`, selects it, and types a UK number. |
| `Required`, `Description` | A required field (no `(Optional)` text), and an `above` label with a `Field.Details` description. |
| `Disabled`, `DefaultValue` | A disabled field, and the initial value `+44 20 7123-4567`, which selects the UK. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message in each theme. `Error` uses `danger` and shows the message before blur. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

`PhoneNumberInputProps` is the [Input](./input.md) props (without `value` and `defaultValue`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultCountry` | `CountryCode` | `"US"` | ISO 3166-1 alpha-2 country used until the value identifies a country. |
| `value` | `string` | — | The controlled value. Inside a `Field`, the field value is used. |
| `defaultValue` | `string` | — | The initial value when uncontrolled and outside a `Field`. |
| `onChange` | `(event: CustomEvent<string>) => void` | Field `onChange` | Called with the masked text in `event.detail`. When you set it, the field `onChange` is not called. |
| `readOnly` | `boolean` | Field value, or `false` | Ignores changes. The country menu does not open. |

## Behavior

- The input starts with the calling code of the country, for example `+1 `. Typing `2125550123` gives `+1 212 555-0123`.
- Choosing another country clears the entered number.
- The country button opens a menu. A search box with the label `Search countries` filters the list.
- Each country row has the label `<name> (<code>) +<calling code>`.
- When the viewport is narrower than 578 px, the rows hide the country name.
- Inside a `Field`, the label floats past the country button.

## Variants and states

The stories show the sizes `sm`, `md`, and `lg`, and the states required, disabled, default value, and the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

## Accessibility

The country button has the label `Select country code, currently <country> +<calling code>`. The flag is hidden from screen readers. The search box is a `combobox` with the label `Search countries`. Each country item is a button.

## Related

- [Input](./input.md)
- [SearchInput](./search-input.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/phone-number-input/src/PhoneNumberInput.tsx`](../../../components/phone-number-input/src/PhoneNumberInput.tsx)
- [`components/phone-number-input/src/PhoneNumberInput.stories.tsx`](../../../components/phone-number-input/src/PhoneNumberInput.stories.tsx)
