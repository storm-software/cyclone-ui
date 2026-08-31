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

import { Button } from "@cyclone-ui/button";
import { Input } from "@cyclone-ui/input";
import { InputField } from "@cyclone-ui/input-field";
import { Popover } from "@cyclone-ui/popover";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import type { MaskitoOptions } from "@maskito/core";
import { maskitoPhoneOptionsGenerator } from "@maskito/phone";
import { View, createStyledContext, withStaticProperties } from "@tamagui/core";
import { Search } from "@tamagui/lucide-icons-2";
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

const PhoneNumberContext = createStyledContext<PhoneNumberContextValue>({
  countryCode: "US",
  setCountryCode: () => undefined
});

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
  children?: React.ReactNode;
  format?: (value: unknown) => string;
  mask?: any;
  parse?: (value: unknown) => string;
  [key: string]: any;
}

const styleableInputField = InputField.styleable as <TProps>(
  component: (props: TProps, forwardedRef: any) => JSX.Element
) => any;

const PhoneNumberInputFieldGroup =
  styleableInputField<PhoneNumberInputFieldExtraProps>(
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
}

const CountryListItem = memo(
  ({ country, onSelect }: CountryListItemProps): JSX.Element => {
    const handlePress = useCallback(
      (): void => onSelect(country),
      [country, onSelect]
    );

    return (
      <Button
        variant="ghost"
        bordered={false}
        width="100%"
        justifyContent="flex-start"
        aria-label={`${country.name} (${country.code}) +${country.callingCode}`}
        accessibilityLabel={`${country.name} (${country.code}) +${country.callingCode}`}
        onPress={handlePress}>
        <SizableText aria-hidden={true} minWidth="$4xl" fontSize="$xl">
          {country.flag}
        </SizableText>
        <Button.Text>{`${country.code}  +${country.callingCode}`}</Button.Text>
      </Button>
    );
  }
);

const CountryCodeSelector = (): JSX.Element => {
  const field = FieldApi.use();
  const disabled: boolean = field.disabled.get();
  const size: string = field.size.get();

  const { change } = useFieldActions();

  const { countryCode, setCountryCode } = PhoneNumberContext.useStyledContext();
  const selectedCountry: CountryOption = COUNTRY_OPTIONS.find(
    (country: CountryOption) => country.code === countryCode
  )!;

  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
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

  const handleSearchChange = useCallback((event: CustomEvent<string>): void => {
    setSearch(event.detail);
  }, []);
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
    <Popover
      open={open}
      onOpenChange={handleOpenChange}
      size={size}
      placement="bottom-start">
      <Popover.Trigger
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
          <SizableText aria-hidden={true} fontSize="$xl">
            {selectedCountry.flag}
          </SizableText>
        </InputField.Control.Trigger>
      </Popover.Trigger>

      <Popover.Content width="$37xl" maxWidth="90vw" hasArrow={false}>
        <View gap="$xl" width="100%">
          <Input size="$9xl" onChange={handleSearchChange}>
            <Input.TextBox>
              <Input.TextBox.Value
                aria-label="Search countries"
                placeholder="Search countries..."
                value={search}
              />
              <View paddingRight="$xl" pointerEvents="none">
                <Search size="$xl" color="$foregroundSecondary" />
              </View>
            </Input.TextBox>
          </Input>

          <Popover.Content.ScrollView maxHeight="$32xl">
            <View gap="$xxs" width="100%">
              {countries.map(country => (
                <CountryListItem
                  key={country.code}
                  country={country}
                  onSelect={handleSelect}
                />
              ))}
            </View>
          </Popover.Content.ScrollView>
        </View>
      </Popover.Content>
    </Popover>
  );
};

interface PhoneNumberInputFieldControlProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const PhoneNumberInputFieldControl = InputField.Control.styleable(
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

const PhoneNumberInputFieldControlTextBoxValue =
  InputField.Control.TextBox.Value.styleable(
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
