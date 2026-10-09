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

import { BodyText } from "@cyclone-ui/body-text";
import { ContextMenu } from "@cyclone-ui/context-menu";
import { getFormFontScale } from "@cyclone-ui/helpers";
import { Input } from "@cyclone-ui/input";
import { InputField } from "@cyclone-ui/input-field";
import { SearchInputField } from "@cyclone-ui/search-input-field";
import type { CallbackContext, FieldAtoms } from "@cyclone-ui/state/form";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import type { MaskitoOptions } from "@maskito/core";
import { maskitoPhoneOptionsGenerator } from "@maskito/phone";
import {
  createStyledContext,
  createStyledHOC,
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
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  setCountryCode: (countryCode: CountryCode) => void;
}

const PhoneNumberContext = createStyledContext<
  PhoneNumberContextValue,
  "countryCode" | "setCountryCode"
>(
  {
    countryCode: "US",
    setCountryCode: () => undefined
  } as PhoneNumberContextValue,
  {
    keys: ["countryCode", "setCountryCode"]
  }
);

export interface PhoneNumberInputFieldExtraProps {
  /** ISO 3166-1 alpha-2 country used until the value identifies a country. */
  defaultCountry?: CountryCode;
}

interface PhoneNumberCountrySyncProps {
  setCountryCode: (countryCode: CountryCode) => void;
}

const PhoneNumberCountrySync = ({
  setCountryCode
}: PhoneNumberCountrySyncProps): null => {
  const field = FieldApi.use();
  const value: unknown = field.value.get();
  const { countryCode } = PhoneNumberContext.useStyledContext();
  const initializedRef = useRef<boolean>(false);

  useEffect((): void => {
    if (initializedRef.current || typeof value !== "string" || !value) {
      return;
    }

    const valueCountry: CountryCode | undefined =
      parsePhoneNumberFromString(value)?.country;
    if (valueCountry && valueCountry !== countryCode) {
      setCountryCode(valueCountry);
    }
    initializedRef.current = true;
  }, [countryCode, setCountryCode, value]);

  return null;
};

interface PhoneNumberInputFieldGroupProps extends PhoneNumberInputFieldExtraProps {
  name: string;
  children?: React.ReactNode;
  format?: (value: unknown) => string;
  mask?: any;
  parse?: (value: unknown) => string;
  [key: string]: any;
}

const styleableInputField = ((render: any) =>
  createStyledHOC(InputField as any, render)) as <TProps>(
  component: (props: TProps, forwardedRef: any) => JSX.Element
) => any;

const PhoneNumberInputFieldGroup =
  styleableInputField<PhoneNumberInputFieldGroupProps>(
    (
      {
        children,
        defaultCountry = "US",
        format,
        mask,
        parse,
        ...props
      }: PhoneNumberInputFieldGroupProps,
      forwardedRef: any
    ): JSX.Element => {
      const [countryCode, setCountryCode] =
        useState<CountryCode>(defaultCountry);
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
          format
            ? format(value)
            : String(value ?? "").trim()
              ? String(value)
              : prefix,
        [format, prefix]
      );
      const parsePhoneNumber = useCallback(
        (value: unknown): string => {
          if (parse) {
            return parse(value);
          }

          const stringValue: string = String(value ?? "");

          return stringValue.trim() === prefix.trim() ? "" : stringValue;
        },
        [parse, prefix]
      );
      const contextValue = useMemo(
        (): PhoneNumberContextValue => ({ countryCode, setCountryCode }),
        [countryCode]
      );

      return (
        <PhoneNumberContext.Provider {...contextValue}>
          <InputField
            ref={forwardedRef}
            {...props}
            format={formatPhoneNumber}
            mask={mask ?? phoneMask}
            parse={parsePhoneNumber}>
            <PhoneNumberCountrySync setCountryCode={setCountryCode} />
            {children}
          </InputField>
        </PhoneNumberContext.Provider>
      );
    }
  );

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
        <BodyText
          render="span"
          aria-hidden={true}
          flexShrink={0}
          minWidth="2xl">
          {country.flag}
        </BodyText>
        {showCountryName && (
          <ContextMenu.Item.Text flex={1} minWidth={0}>
            {country.name}
          </ContextMenu.Item.Text>
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

interface CountrySearchResetProps {
  open: boolean;
}

const CountrySearchReset = ({ open }: CountrySearchResetProps): null => {
  const { change } = useFieldActions<string>();

  useEffect(() => {
    if (!open) {
      void change("");
    }
  }, [change, open]);

  return null;
};

const CountryCodeSelector = (): JSX.Element => {
  const field = FieldApi.use();
  const { width: viewportWidth } = useWindowDimensions();
  const disabled: boolean = field.disabled.get();
  const size = field.size.get();
  const countrySearchFieldName = `${field.name.get()}__countrySearch`;

  const { change } = useFieldActions();

  const { countryCode, setCountryCode } = PhoneNumberContext.useStyledContext();
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

  const handleSearchChange = useCallback(
    ({ get, atoms }: CallbackContext<FieldAtoms<string>>): void => {
      setSearch(get(atoms.value) ?? "");
    },
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
      setCountryCode(country.code);
      setOpen(false);
      setSearch("");
      change("");
    },
    [change, setCountryCode]
  );

  return (
    <ContextMenu open={open} onOpenChange={handleOpenChange} size={size}>
      <ContextMenu.Trigger
        asChild={true}
        aria-label={`Select country code, currently ${selectedCountry.name} +${selectedCountry.callingCode}`}>
        <InputField.Control.Trigger
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
        </InputField.Control.Trigger>
      </ContextMenu.Trigger>

      <ContextMenu.Content width={COUNTRY_POPOVER_WIDTH}>
        <SearchInputField
          name={countrySearchFieldName}
          size="sm"
          clearable={false}
          onChange={handleSearchChange}>
          <CountrySearchReset open={open} />
          <SearchInputField.Control>
            <SearchInputField.Control.TextBox
              aria-label="Search countries"
              placeholder="Search countries..."
            />
          </SearchInputField.Control>
        </SearchInputField>

        <ContextMenu.Content.ScrollView>
          <View width="100%">
            {countries.map(country => (
              <CountryListItem
                key={country.code}
                country={country}
                onSelect={handleSelect}
                showCountryName={showCountryName}
              />
            ))}
          </View>
        </ContextMenu.Content.ScrollView>
      </ContextMenu.Content>
    </ContextMenu>
  );
};

interface PhoneNumberInputFieldControlProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const PhoneNumberInputFieldControl = createStyledHOC(
  InputField.Control,
  (
    { children, ...props }: PhoneNumberInputFieldControlProps,
    forwardedRef: any
  ): JSX.Element => (
    <InputField.Control ref={forwardedRef} {...props}>
      <CountryCodeSelector />
      <Input.Separator />
      {children}
    </InputField.Control>
  )
);

interface PhoneNumberInputFieldControlTextBoxValueProps {
  [key: string]: any;
}

const PhoneNumberInputFieldControlTextBoxValue = createStyledHOC(
  InputField.Control.TextBox.Value,
  (
    props: PhoneNumberInputFieldControlTextBoxValueProps,
    forwardedRef: any
  ): JSX.Element => {
    const { countryCode } = PhoneNumberContext.useStyledContext();

    return (
      <InputField.Control.TextBox.Value
        key={countryCode}
        ref={forwardedRef}
        {...props}
        autoComplete="tel"
        inputMode="tel"
        type="tel"
      />
    );
  }
);

export const PhoneNumberInputField = withStaticProperties(
  PhoneNumberInputFieldGroup,
  {
    Label: InputField.Label,
    Link: InputField.Link,
    Control: withStaticProperties(PhoneNumberInputFieldControl, {
      TextBox: withStaticProperties(InputField.Control.TextBox, {
        Value: PhoneNumberInputFieldControlTextBoxValue
      }),
      Trigger: InputField.Control.Trigger
    }),
    Details: InputField.Details,
    Icon: InputField.Icon
  }
);
