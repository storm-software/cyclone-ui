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

import { ContextMenu } from "@cyclone-ui/context-menu";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  FormControlContext,
  getFormFontScale,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldLabelDefaults,
  useFieldOptions,
  useFormControl
} from "@cyclone-ui/helpers";
import type { InputChangeEventHandler } from "@cyclone-ui/input";
import { Input, InputContext } from "@cyclone-ui/input";
import { SearchInput } from "@cyclone-ui/search-input";
import type { MaskitoOptions } from "@maskito/core";
import { Maskito } from "@maskito/core";
import { maskitoPhoneOptionsGenerator } from "@maskito/phone";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  useComposedRefs,
  View,
  withStaticProperties
} from "@tamagui/core";
import { SizableText } from "@tamagui/text";
import type { CountryCode } from "libphonenumber-js";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString
} from "libphonenumber-js/min";
import metadata from "libphonenumber-js/min/metadata";
import type { JSX } from "react";
import {
  createContext,
  memo,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useWindowDimensions } from "react-native";

const COUNTRY_POPOVER_WIDTH = 520;
const COUNTRY_NAME_MIN_VIEWPORT_WIDTH = Math.ceil(COUNTRY_POPOVER_WIDTH / 0.9);

const regionNames =
  typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : undefined;

const getCountryFlag = (countryCode: CountryCode): string =>
  String.fromCodePoint(
    ...countryCode
      .toUpperCase()
      .split("")
      .map((character: string) => 127_397 + character.charCodeAt(0))
  );

interface CountryOption {
  callingCode: string;
  code: CountryCode;
  flag: string;
  name: string;
}

const COUNTRY_OPTIONS: CountryOption[] = getCountries().map(
  (code: CountryCode) => ({
    callingCode: getCountryCallingCode(code),
    code,
    flag: getCountryFlag(code),
    name: regionNames?.of(code) ?? code
  })
);

interface PhoneNumberContextValue {
  countryCode: CountryCode;

  /** Switch country, clearing the entered number. */
  selectCountry: (countryCode: CountryCode) => void;

  /** The displayed value. */
  value: string | undefined;

  /** The mask to apply to the input directly (outside a `Field`). */
  mask: MaskitoOptions | undefined;
}

const PhoneNumberContext = createContext<PhoneNumberContextValue>({
  countryCode: "US",
  selectCountry: () => undefined,
  value: undefined,
  mask: undefined
});

export interface PhoneNumberInputExtraProps {
  /** ISO 3166-1 alpha-2 country used until the value identifies a country. */
  defaultCountry?: CountryCode;

  /** The controlled value. Inside a `Field`, the field's value is used. */
  value?: string;

  /** The initial value when uncontrolled and outside a `Field`. */
  defaultValue?: string;
}

type PhoneNumberInputGroupProps = Omit<
  GetProps<typeof Input>,
  "value" | "defaultValue"
> &
  PhoneNumberInputExtraProps;

interface CountryListItemProps {
  country: CountryOption;
  onSelect: (country: CountryOption) => void;
  showCountryName: boolean;
}

const CountryListItem = memo(
  ({
    country,
    onSelect,
    showCountryName
  }: CountryListItemProps): JSX.Element => {
    const handlePress = useCallback(
      (): void => onSelect(country),
      [country, onSelect]
    );

    return (
      <ContextMenu.Item
        aria-label={`${country.name} (${country.code}) +${country.callingCode}`}
        accessibilityLabel={`${country.name} (${country.code}) +${country.callingCode}`}
        onPress={handlePress}>
        <ContextMenu.Item.Icon>{country.flag}</ContextMenu.Item.Icon>
        {showCountryName && (
          <ContextMenu.Item.Label>{country.name}</ContextMenu.Item.Label>
        )}
        <ContextMenu.Item.Text
          flexShrink={0}
          width="16xl"
          marginLeft="auto"
          textAlign="left">
          {`${country.code}  +${country.callingCode}`}
        </ContextMenu.Item.Text>
      </ContextMenu.Item>
    );
  }
);

const CountryCodeSelector = (): JSX.Element => {
  const { disabled, size } = InputContext.useStyledContext();
  const { width: viewportWidth } = useWindowDimensions();
  const { countryCode, selectCountry } = use(PhoneNumberContext);
  const selectedCountry: CountryOption = COUNTRY_OPTIONS.find(
    (country: CountryOption) => country.code === countryCode
  )!;

  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const showCountryName = viewportWidth >= COUNTRY_NAME_MIN_VIEWPORT_WIDTH;
  const normalizedSearch: string = search.trim().toLocaleLowerCase();

  const countries = useMemo(
    (): CountryOption[] =>
      normalizedSearch
        ? COUNTRY_OPTIONS.filter((country: CountryOption) =>
            `${country.name} ${country.code} +${country.callingCode}`
              .toLocaleLowerCase()
              .includes(normalizedSearch)
          )
        : COUNTRY_OPTIONS,
    [normalizedSearch]
  );

  const handleSearchChange = useCallback<InputChangeEventHandler>(
    event => setSearch(event.detail),
    []
  );
  const handleOpenChange = useCallback((nextOpen: boolean): void => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setSearch("");
    }
  }, []);
  const handleSelect = useCallback(
    (country: CountryOption): void => {
      selectCountry(country.code);
      setOpen(false);
      setSearch("");
    },
    [selectCountry]
  );

  return (
    <ContextMenu open={open} onOpenChange={handleOpenChange} size={size}>
      <ContextMenu.Trigger
        asChild={true}
        aria-label={`Select country code, currently ${selectedCountry.name} +${selectedCountry.callingCode}`}>
        <Input.Trigger
          disabled={disabled}
          aria-label={`Select country code, currently ${selectedCountry.name} +${selectedCountry.callingCode}`}
          accessibilityLabel={`Select country code, currently ${selectedCountry.name} +${selectedCountry.callingCode}`}>
          <SizableText
            position="absolute"
            width={1}
            height={1}
            overflow="hidden"
            opacity={0}>
            {`Select country code, currently ${selectedCountry.name} +${selectedCountry.callingCode}`}
          </SizableText>
          <SizableText
            aria-hidden={true}
            fontSize={20 * getFormFontScale(size)}>
            {selectedCountry.flag}
          </SizableText>
        </Input.Trigger>
      </ContextMenu.Trigger>

      <ContextMenu.Content width={COUNTRY_POPOVER_WIDTH}>
        {/* The country search is local UI state, not part of the phone
            number's field: hide the enclosing field from it. */}
        <FormControlContext value={undefined}>
          {/* Its own `field` group: groups flow through context into the
              portal, so it would otherwise follow the phone field's hover. */}
          <View group="field">
            <SearchInput size="sm" value={search} onChange={handleSearchChange}>
              <SearchInput.TextBox
                aria-label="Search countries"
                placeholder="Search countries..."
              />
            </SearchInput>
          </View>
        </FormControlContext>

        <ContextMenu.Content.ScrollView>
          {countries.map(country => (
            <CountryListItem
              key={country.code}
              country={country}
              onSelect={handleSelect}
              showCountryName={showCountryName}
            />
          ))}
        </ContextMenu.Content.ScrollView>
      </ContextMenu.Content>
    </ContextMenu>
  );
};

const PhoneNumberInputGroup = createStyledHOC(
  Input,
  (
    {
      children,
      defaultCountry = "US",
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
      ...props
    }: PhoneNumberInputGroupProps,
    forwardedRef
  ): JSX.Element => {
    const formControl = useFormControl();
    const [countryCode, setCountryCode] = useState<CountryCode>(defaultCountry);
    const prefix: string = `+${getCountryCallingCode(countryCode)} `;

    const phoneMask = useMemo<MaskitoOptions>(
      (): MaskitoOptions =>
        maskitoPhoneOptionsGenerator({
          countryIsoCode: countryCode,
          metadata,
          strict: true
        }),
      [countryCode]
    );
    const formatPhoneNumber = useCallback(
      (value: unknown): string =>
        String(value ?? "").trim() ? String(value) : prefix,
      [prefix]
    );
    const parsePhoneNumber = useCallback(
      (value: unknown): string => {
        const stringValue: string = String(value ?? "");

        return stringValue.trim() === prefix.trim() ? "" : stringValue;
      },
      [prefix]
    );

    // Inside a `Field`, the field formats, parses and masks the value; its own
    // `format`/`parse`/`mask` props still win over these.
    const fieldOptions = useMemo(
      () => ({
        defaults: {
          format: formatPhoneNumber,
          parse: parsePhoneNumber,
          mask: phoneMask
        }
      }),
      [formatPhoneNumber, parsePhoneNumber, phoneMask]
    );
    useFieldOptions(fieldOptions);

    // Float the field's label past the country trigger and separator, where
    // the number's text starts. Runs after `Input`'s own (floating) defaults,
    // as a parent's layout effect follows its children's, so this one wins.
    const size: FormControlSize = props.size ?? formControl?.size ?? "md";
    const underlined = (props.variant ?? formControl?.variant) === "underlined";
    const labelDefaults = useMemo(
      () => ({
        variant: "floating" as const,
        floatingLabelLeft:
          getSized(getFormSizeToken(size)) +
          (underlined ? 0 : 1 + getSpaced("4xl") * getFormSizeScale(size))
      }),
      [size, underlined]
    );
    useFieldLabelDefaults(labelDefaults);

    // Uncontrolled outside a field: keep the (parsed) value here.
    const [localValue, setLocalValue] = useState<string>(defaultValue ?? "");
    const formOnChange = formControl?.onChange;
    const onChange = useCallback<InputChangeEventHandler>(
      event => {
        setLocalValue(parsePhoneNumber(event.detail));
        if (onChangeProp) {
          return onChangeProp(event);
        }

        formOnChange?.(event.detail);
      },
      [formOnChange, onChangeProp, parsePhoneNumber]
    );

    // Pick the country from the first non-empty value.
    const currentValue: unknown = formControl
      ? formControl.value
      : (valueProp ?? localValue);
    const initializedRef = useRef<boolean>(false);
    useEffect((): void => {
      if (
        initializedRef.current ||
        typeof currentValue !== "string" ||
        !currentValue
      ) {
        return;
      }

      const valueCountry: CountryCode | undefined =
        parsePhoneNumberFromString(currentValue)?.country;
      if (valueCountry && valueCountry !== countryCode) {
        setCountryCode(valueCountry);
      }
      initializedRef.current = true;
    }, [countryCode, currentValue]);

    const selectCountry = useCallback(
      (nextCountryCode: CountryCode): void => {
        setCountryCode(nextCountryCode);
        onChange(new CustomEvent("change", { detail: "" }));
      },
      [onChange]
    );

    const value =
      valueProp !== undefined
        ? formatPhoneNumber(valueProp)
        : formControl
          ? formControl.formattedValue
          : formatPhoneNumber(localValue);
    const contextValue = useMemo(
      (): PhoneNumberContextValue => ({
        countryCode,
        selectCountry,
        value,
        mask: formControl ? undefined : phoneMask
      }),
      [countryCode, formControl, phoneMask, selectCountry, value]
    );

    return (
      <PhoneNumberContext value={contextValue}>
        <Input ref={forwardedRef} {...props} onChange={onChange}>
          <CountryCodeSelector />
          <Input.Separator />
          {children}
        </Input>
      </PhoneNumberContext>
    );
  },
  { displayName: "PhoneNumberInput" }
);

const PhoneNumberInputValue = createStyledHOC(
  Input.TextBox.Value,
  (props, forwardedRef): JSX.Element => {
    const { countryCode, value, mask } = use(PhoneNumberContext);
    const [element, setElement] = useState<HTMLInputElement | null>(null);
    const ref = useComposedRefs(forwardedRef, setElement);

    // Inside a `Field`, the field's input ref applies the mask instead.
    useEffect(() => {
      if (!element || !mask) {
        return;
      }

      const maskito = new Maskito(element, mask);

      return () => maskito.destroy();
    }, [element, mask]);

    return (
      <Input.TextBox.Value
        // Remount with the country so the new mask applies to a fresh input.
        key={countryCode}
        ref={ref}
        value={value}
        {...props}
        autoComplete="tel"
        inputMode="tel"
        type="tel"
      />
    );
  },
  { displayName: "PhoneNumberInputValue" }
);

/**
 * A phone number input with a searchable country-code menu; the value is
 * masked and formatted for the selected country.
 *
 * @remarks
 * Uncontrolled on its own (or controlled with `value`/`onChange`); wrap it in
 * a `Field` to connect it to a form.
 */
export const PhoneNumberInput = withStaticProperties(PhoneNumberInputGroup, {
  TextBox: withStaticProperties(Input.TextBox, {
    Value: PhoneNumberInputValue
  }),
  Trigger: Input.Trigger
});

export type PhoneNumberInputProps = GetProps<typeof PhoneNumberInput>;
