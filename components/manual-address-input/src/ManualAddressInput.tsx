/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

"use client";

import type { FieldLabelVariant, FieldVariant } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { Input } from "@cyclone-ui/input";
import { Select } from "@cyclone-ui/select";
import { FormApi } from "@cyclone-ui/state/form";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  COUNTRY_CODES,
  getAddressFormat,
  isValidPostalCode
} from "./address-format";

const regionNames =
  typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : undefined;

/** Get a country's English name from its ISO 3166-1 alpha-2 code. */
export const getCountryName = (code: string): string => {
  try {
    return regionNames?.of(code) ?? code;
  } catch {
    // Not a well-formed region code.
    return code;
  }
};

export type ManualAddressFieldKey =
  | "country"
  | "addressLine1"
  | "addressLine2"
  | "addressLine3"
  | "city"
  | "state"
  | "zipCode";

const FIELD_KEYS: ManualAddressFieldKey[] = [
  "country",
  "addressLine1",
  "addressLine2",
  "addressLine3",
  "city",
  "state",
  "zipCode"
];

/**
 * Get the form field names `ManualAddressInput` uses, such as `addressLine1`,
 * or `shippingAddressLine1` for the `shipping` prefix.
 */
export const getManualAddressFieldNames = (
  prefix?: string
): Record<ManualAddressFieldKey, string> =>
  Object.fromEntries(
    FIELD_KEYS.map(key => [
      key,
      prefix ? `${prefix}${key[0]!.toUpperCase()}${key.slice(1)}` : key
    ])
  ) as Record<ManualAddressFieldKey, string>;

const TYPEAHEAD_RESET_MS = 700;

/**
 * Like a native `<select>`, typing in an open list moves to the first option
 * starting with the typed text, so a long list (countries) is quick to use.
 */
const useTypeahead = () => {
  const searchRef = useRef({ text: "", time: 0 });

  return useCallback((event: any) => {
    const { key } = event;
    if (
      typeof key !== "string" ||
      key.length !== 1 ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      typeof event.currentTarget?.querySelectorAll !== "function"
    ) {
      return;
    }

    const now = Date.now();
    searchRef.current = {
      text:
        now - searchRef.current.time > TYPEAHEAD_RESET_MS
          ? key
          : searchRef.current.text + key,
      time: now
    };

    const text = searchRef.current.text.toLocaleLowerCase();
    const match = Array.from<HTMLElement>(
      event.currentTarget.querySelectorAll('[role="option"]')
    ).find(option =>
      option.textContent?.trim().toLocaleLowerCase().startsWith(text)
    );
    if (match) {
      event.preventDefault();
      match.focus();
    }
  }, []);
};

const ManualAddressInputFrame = styled(View, {
  displayName: "ManualAddressInput",
  gap: "4xl"
});

const ManualAddressInputRow = styled(View, {
  displayName: "ManualAddressInputRow",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "4xl"
});

// Style props on a `Field` go to its options, so a wrapper sizes it.
const ManualAddressInputCell = styled(View, {
  displayName: "ManualAddressInputCell",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 140,
  minWidth: 0
});

export interface ManualAddressInputExtraProps {
  /**
   * Prefixes the field names, such as `shipping` for `shippingAddressLine1`,
   * so a form can hold more than one address (see
   * {@link getManualAddressFieldNames}).
   */
  name?: string;

  /**
   * The ISO 3166-1 alpha-2 country used while the form has no country value.
   *
   * @defaultValue "US"
   */
  defaultCountry?: string;

  /** Limit the selectable countries to these ISO 3166-1 alpha-2 codes. */
  countries?: readonly string[];

  /**
   * Require an address: the first line, the country, and the city, state and
   * postal code where the country's addresses need them.
   *
   * @defaultValue false
   */
  required?: boolean;

  /** Disable every field. */
  disabled?: boolean;

  /** Prevent edits to every field while preserving its normal colors. */
  readOnly?: boolean;

  size?: FormControlSize;
  variant?: FieldVariant;
  labelVariant?: FieldLabelVariant;
}

export type ManualAddressInputProps = Omit<
  GetProps<typeof ManualAddressInputFrame>,
  keyof ManualAddressInputExtraProps
> &
  ManualAddressInputExtraProps;

/**
 * Address fields for entering an address by hand: the country, three address
 * lines, the city, the state and the ZIP code. It renders its own `Field`s, so
 * it goes inside a `Form`.
 *
 * @example
 * ```tsx
 * <Form name="checkout" initialValues={{ country: "US" }}>
 *   <ManualAddressInput required={true} />
 * </Form>
 * ```
 *
 * @remarks
 * The country decides the other fields: their labels ("ZIP Code" or "Postal
 * Code", "State" or "Province"), whether they show and are required, the
 * postal code's format, the state options, and whether the postal code comes
 * before the city. Changing the country clears the state. Address lines 2 and 3
 * are disabled until the line before them is filled in. Values are kept under
 * the names from {@link getManualAddressFieldNames}; the state holds its code
 * (`CA`) when picked from a list.
 */
export const ManualAddressInput = createStyledHOC(
  ManualAddressInputFrame,
  (
    {
      name,
      defaultCountry = "US",
      countries,
      required = false,
      disabled,
      readOnly,
      size,
      variant,
      labelVariant,
      ...props
    }: ManualAddressInputProps,
    forwardedRef
  ) => {
    const names = useMemo(() => getManualAddressFieldNames(name), [name]);
    const form = FormApi.use();
    const values = form.values.get() as Record<string, unknown>;
    const setValues = form.values.set();
    const setInitialValues = form.initialValues.set();
    const text = (key: ManualAddressFieldKey) =>
      String(values[names[key]] ?? "").trim();

    const country = (text("country") || defaultCountry).toUpperCase();
    const format = getAddressFormat(country);

    // Without a country (at the start, or after a reset) the form takes
    // `defaultCountry`, without being made dirty.
    const hasCountry = Boolean(values[names.country]);
    useEffect(() => {
      if (!hasCountry) {
        const update = (previous: Record<string, unknown>) => ({
          ...previous,
          [names.country]: defaultCountry.toUpperCase()
        });
        setInitialValues(update as any);
        setValues(update as any);
      }
    }, [
      defaultCountry,
      hasCountry,
      names.country,
      setInitialValues,
      setValues
    ]);

    // A state belongs to the country it was entered for, as do a city or
    // postal code the new country's addresses have no line for.
    const previousCountryRef = useRef(country);
    useEffect(() => {
      if (previousCountryRef.current === country) {
        return;
      }
      previousCountryRef.current = country;

      setValues(((previous: Record<string, unknown>) => ({
        ...previous,
        [names.state]: "",
        ...(!format.cityLabel && { [names.city]: "" }),
        ...(!format.postalCodeLabel && { [names.zipCode]: "" })
      })) as any);
    }, [country, format.cityLabel, format.postalCodeLabel, names, setValues]);

    const countryItems = useMemo(
      () =>
        (countries ?? COUNTRY_CODES)
          .map(code => ({
            value: code.toUpperCase(),
            name: getCountryName(code.toUpperCase())
          }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      [countries]
    );
    const stateItems = useMemo(
      () =>
        format.states &&
        Object.entries(format.states).map(([value, stateName]) => ({
          value,
          name: stateName
        })),
      [format.states]
    );

    const postalCodeValidate = useMemo(() => {
      const label = format.postalCodeLabel ?? "postal code";
      const message = format.postalCodeExample
        ? `Enter a valid ${label}, such as ${format.postalCodeExample}`
        : `Enter a valid ${label}`;

      // `onChange` only: `onBlur` validators would replace the required check.
      return {
        onChange: [
          (value: unknown) =>
            isValidPostalCode(String(value ?? ""), country)
              ? []
              : [
                  {
                    code: "manual-address-input.zip-code",
                    message,
                    type: "danger" as const
                  }
                ]
        ]
      };
    }, [country, format.postalCodeExample, format.postalCodeLabel]);

    const typeahead = useTypeahead();

    // A floating label sits over the text, so placeholders only show on focus.
    const textField = (
      key: ManualAddressFieldKey,
      label: string,
      autoComplete: string,
      options: {
        required?: boolean;
        disabled?: boolean;
        placeholder?: string;
        validate?: typeof postalCodeValidate;
      } = {}
    ): ReactNode => (
      <Field
        name={names[key]}
        size={size}
        variant={variant}
        required={options.required ?? false}
        disabled={(disabled ?? false) || (options.disabled ?? false)}
        readOnly={readOnly}
        validate={options.validate}>
        <Field.Label variant={labelVariant}>{label}</Field.Label>
        <Input size={size} variant={variant}>
          <Input.TextBox>
            <Input.TextBox.Value
              placeholder={options.placeholder}
              // A section keeps autofill from mixing two addresses' values.
              autoComplete={
                name ? `section-${name} ${autoComplete}` : autoComplete
              }
            />
          </Input.TextBox>
        </Input>
      </Field>
    );

    const city = format.cityLabel && (
      <ManualAddressInputCell key="city">
        {textField("city", format.cityLabel, "address-level2", { required })}
      </ManualAddressInputCell>
    );

    // Keyed by country: the control and its options change with it.
    const state = format.stateLabel && (
      <ManualAddressInputCell key={`state-${country}`}>
        {stateItems ? (
          <Field
            name={names.state}
            size={size}
            variant={variant}
            required={required && format.stateRequired}
            disabled={disabled}
            readOnly={readOnly}
            items={stateItems}>
            <Field.Label variant={labelVariant}>
              {format.stateLabel}
            </Field.Label>
            <Select size={size} variant={variant}>
              <Select.TextBox>
                <Select.TextBox.Value>
                  {format.states?.[text("state")]}
                </Select.TextBox.Value>
              </Select.TextBox>
              <Select.Items onKeyDown={typeahead} />
            </Select>
          </Field>
        ) : (
          textField("state", format.stateLabel, "address-level1", {
            required: required && format.stateRequired
          })
        )}
      </ManualAddressInputCell>
    );

    // Remounted per country, so a code entered for another country is
    // validated again against this one's format.
    const postalCode = format.postalCodeLabel && (
      <ManualAddressInputCell key={`zip-code-${country}`}>
        {textField("zipCode", format.postalCodeLabel, "postal-code", {
          required: required && format.postalCodeRequired,
          validate: postalCodeValidate
        })}
      </ManualAddressInputCell>
    );

    const hasLine1 = Boolean(text("addressLine1"));
    const hasLine2 = Boolean(text("addressLine2"));

    return (
      <ManualAddressInputFrame ref={forwardedRef} {...props}>
        {textField("addressLine1", "Address Line 1", "address-line1", {
          required,
          placeholder: "Street address or P.O. box"
        })}
        {/* Each further line opens once the one before it is filled in. */}
        {textField("addressLine2", "Address Line 2", "address-line2", {
          disabled: !hasLine1,
          placeholder: "Apartment, suite, unit, building or floor"
        })}
        {textField("addressLine3", "Address Line 3", "address-line3", {
          disabled: !hasLine1 || !hasLine2
        })}
        <Field
          name={names.country}
          size={size}
          variant={variant}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          items={countryItems}>
          <Field.Label variant={labelVariant}>Country</Field.Label>
          <Select size={size} variant={variant}>
            <Select.TextBox>
              <Select.TextBox.Value>
                {text("country") ? getCountryName(country) : undefined}
              </Select.TextBox.Value>
            </Select.TextBox>
            <Select.Items onKeyDown={typeahead} />
          </Select>
        </Field>
        <ManualAddressInputRow>
          {format.postalCodeFirst
            ? [postalCode, city, state]
            : [city, state, postalCode]}
        </ManualAddressInputRow>
      </ManualAddressInputFrame>
    );
  },
  { displayName: "ManualAddressInput" }
);
