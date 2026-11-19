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

import type { AddressMapProps, AddressOption } from "@cyclone-ui/address-map";
import { AddressMap, isAddressOption } from "@cyclone-ui/address-map";
import { ContextMenu, getContextMenuSize } from "@cyclone-ui/context-menu";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { useFormControl } from "@cyclone-ui/helpers";
import { MapMarkerRadius } from "@cyclone-ui/icons";
import type { SearchInputProps } from "@cyclone-ui/search-input";
import { highlightMatches, SearchInput } from "@cyclone-ui/search-input";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

export type { AddressOption } from "@cyclone-ui/address-map";

// The street on the first line, the rest of the address under it in
// smaller text.
const renderAddressSuggestion = (
  label: string,
  query: string,
  size: FormControlSize
) => {
  const comma = label.indexOf(", ");
  if (comma === -1) {
    return (
      <ContextMenu.Item.Label>
        {highlightMatches(label, query)}
      </ContextMenu.Item.Label>
    );
  }

  const { fontSize, lineHeight } = getContextMenuSize(size);

  return (
    <View flex={1} minWidth={0}>
      <ContextMenu.Item.Text
        paddingBottom={0}
        color="emphasis group-hover:emphasis-hovered">
        {highlightMatches(label.slice(0, comma), query)}
      </ContextMenu.Item.Text>
      <ContextMenu.Item.Text
        color="subtle group-hover:subtle-hovered"
        fontSize={fontSize * 0.875}
        lineHeight={`${lineHeight * 0.875}px`}
        paddingTop={0}>
        {highlightMatches(label.slice(comma + 2), query)}
      </ContextMenu.Item.Text>
    </View>
  );
};

// Wait for a pause in typing before asking the endpoint.
const LOOKUP_DELAY = 600;

const LOOKUP_MESSAGE = {
  code: "address-input.lookup",
  message: "Address suggestions are unavailable",
  type: "warning"
} as const;

interface AddressInputContextValue {
  endpoint: string;
  address?: AddressOption;
  selectAddress: (address?: AddressOption) => void;
}

const AddressInputContext = createContext<AddressInputContextValue>({
  endpoint: "",
  selectAddress: () => {}
});

export interface AddressInputExtraProps {
  /**
   * The address search API. While the user types it is sent
   * `GET <endpoint>?q=<text>`, and answers with a JSON array of
   * {@link AddressOption}s.
   */
  endpoint: string;

  /** The address shown before one is chosen, such as a saved address. */
  defaultAddress?: AddressOption;

  /**
   * Called when an address is chosen, and with `undefined` once the text is
   * edited away from it.
   */
  onAddressChange?: (address?: AddressOption) => void;
}

const AddressInputFrame = styled(View, {
  displayName: "AddressInput",
  gap: "4xl"
});

const AddressInputGroup = createStyledHOC(
  AddressInputFrame,
  (
    {
      children,
      endpoint,
      defaultAddress,
      onAddressChange,
      ...props
    }: GetProps<typeof AddressInputFrame> & AddressInputExtraProps,
    forwardedRef
  ) => {
    const [address, setAddress] = useState(defaultAddress);
    const selectAddress = useCallback(
      (nextAddress?: AddressOption) => {
        setAddress(nextAddress);
        onAddressChange?.(nextAddress);
      },
      [onAddressChange]
    );

    const contextValue = useMemo(
      () => ({ endpoint, address, selectAddress }),
      [endpoint, address, selectAddress]
    );

    return (
      <AddressInputContext value={contextValue}>
        <AddressInputFrame ref={forwardedRef} {...props}>
          {children}
        </AddressInputFrame>
      </AddressInputContext>
    );
  },
  { displayName: "AddressInput" }
);

const AddressInputSearch = createStyledHOC(
  SearchInput,
  (
    {
      children,
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
      ...props
    }: Omit<SearchInputProps, "suggestions" | "filterSuggestions">,
    forwardedRef
  ) => {
    const { endpoint, address, selectAddress } = use(AddressInputContext);
    const [options, setOptions] = useState<readonly AddressOption[]>(() =>
      address ? [address] : []
    );

    // Same resolution as `SearchInput`, which needs the text to look it up.
    const formControl = useFormControl();
    const readOnly = props.readOnly ?? formControl?.readOnly ?? false;
    const size = props.size ?? formControl?.size ?? "md";
    const renderSuggestion = useCallback(
      (label: string, query: string) =>
        renderAddressSuggestion(label, query, size),
      [size]
    );
    const setMessage = formControl?.setMessage;
    const [localValue, setLocalValue] = useState(
      defaultValue ?? address?.label ?? ""
    );
    const value = valueProp ?? formControl?.formattedValue ?? localValue;
    const formOnChange = formControl?.onChange;
    const onChange = useCallback<NonNullable<SearchInputProps["onChange"]>>(
      event => {
        if (readOnly) return;
        setLocalValue(event.detail);
        if (onChangeProp) {
          return onChangeProp(event);
        }

        formOnChange?.(event.detail);
      },
      [formOnChange, onChangeProp, readOnly]
    );

    const selected = useMemo(
      () => options.find(option => option.label === value),
      [options, value]
    );
    useEffect(() => {
      if (selected !== address) {
        selectAddress(selected);
      }
    }, [address, selected, selectAddress]);

    const query = value.trim();
    const isSelected = Boolean(selected);
    useEffect(() => {
      if (!query || isSelected || readOnly) {
        return;
      }

      // Aborted when the text changes, so a slow answer for older text never
      // replaces newer suggestions (or the chosen address).
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        fetch(
          `${endpoint}${endpoint.includes("?") ? "&" : "?"}q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        )
          .then(async response => {
            if (!response.ok) {
              throw new Error(`${response.status} ${response.statusText}`);
            }

            const data: unknown = await response.json();
            setOptions(Array.isArray(data) ? data.filter(isAddressOption) : []);
            setMessage?.(LOOKUP_MESSAGE.code);
          })
          .catch(() => {
            if (!controller.signal.aborted) {
              setMessage?.(LOOKUP_MESSAGE.code, LOOKUP_MESSAGE);
            }
          });
      }, LOOKUP_DELAY);

      return () => {
        clearTimeout(timeout);
        controller.abort();
      };
    }, [endpoint, isSelected, query, readOnly, setMessage]);

    const suggestions = useMemo(
      () => options.map(option => option.label),
      [options]
    );

    return (
      <SearchInput
        ref={forwardedRef}
        {...props}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
        // The endpoint already matched them to the text.
        filterSuggestions={false}
        renderSuggestion={renderSuggestion}>
        {children}
      </SearchInput>
    );
  },
  { displayName: "AddressInput" }
);

const AddressInputSearchTextBox = createStyledHOC(
  SearchInput.TextBox,
  (
    { children, ...props }: GetProps<typeof SearchInput.TextBox>,
    forwardedRef
  ) => {
    return (
      <SearchInput.TextBox
        ref={forwardedRef}
        icon={<MapMarkerRadius />}
        {...props}>
        {children}
      </SearchInput.TextBox>
    );
  },
  { displayName: "AddressInput" }
);

/** The `AddressMap` of the address chosen in the surrounding `AddressInput`. */
const AddressInputMap = createStyledHOC(
  AddressMap,
  (props: Omit<AddressMapProps, "address">, forwardedRef) => {
    const { address } = use(AddressInputContext);

    return <AddressMap ref={forwardedRef} {...props} address={address} />;
  },
  { displayName: "AddressInputMap" }
);

/**
 * An address search field: a `SearchInput` whose suggestions come from an
 * address search API, with a map of the chosen address.
 *
 * @example
 * ```tsx
 * <AddressInput endpoint="/api/addresses">
 *   <AddressInput.Map />
 *   <Field name="address">
 *     <Field.Label>Address</Field.Label>
 *     <AddressInput.Search>
 *       <AddressInput.TextBox />
 *     </AddressInput.Search>
 *   </Field>
 * </AddressInput>
 * ```
 *
 * @remarks
 * The map is a part of its own, rather than drawn by the search box, so it
 * can sit outside the `Field`: a floating label is positioned from the top of
 * the field.
 */
export const AddressInput = withStaticProperties(AddressInputGroup, {
  Map: AddressInputMap,
  Search: AddressInputSearch,
  TextBox: AddressInputSearchTextBox
});

export type AddressInputProps = GetProps<typeof AddressInput>;

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`AddressInput.Map` is undefined on the server).
 */
export { AddressInputMap, AddressInputSearch, AddressInputSearchTextBox };
