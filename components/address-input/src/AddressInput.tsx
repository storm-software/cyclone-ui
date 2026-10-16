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
import { ContextMenu, getContextMenuSize } from "@cyclone-ui/context-menu";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { useFormControl } from "@cyclone-ui/helpers";
import { MapPin, MapTrifold } from "@cyclone-ui/icons";
import type { SearchInputProps } from "@cyclone-ui/search-input";
import { SearchInput } from "@cyclone-ui/search-input";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Image } from "@tamagui/image";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

/** An address offered by the search endpoint. */
export interface AddressOption {
  /** The full address as displayed, e.g. "123 Main Street, LA, CA 90012". */
  label: string;
  latitude: number;
  longitude: number;
}

// The street on the first line, the rest of the address under it in
// smaller text.
const renderAddressSuggestion = (label: string, size: FormControlSize) => {
  const comma = label.indexOf(", ");
  if (comma === -1) {
    return <ContextMenu.Item.Label>{label}</ContextMenu.Item.Label>;
  }

  const { fontSize, lineHeight } = getContextMenuSize(size);

  return (
    <View flex={1} minWidth={0}>
      <ContextMenu.Item.Text paddingBottom={0}>
        {label.slice(0, comma)}
      </ContextMenu.Item.Text>
      <ContextMenu.Item.Text
        color="subtle"
        fontSize={fontSize * 0.875}
        lineHeight={`${lineHeight * 0.875}px`}
        paddingTop={0}>
        {label.slice(comma + 2)}
      </ContextMenu.Item.Text>
    </View>
  );
};

const isAddressOption = (value: any): value is AddressOption =>
  typeof value?.label === "string" &&
  Number.isFinite(value.latitude) &&
  Number.isFinite(value.longitude);

// Wait for a pause in typing before asking the endpoint.
const LOOKUP_DELAY = 300;

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
    const size = props.size ?? formControl?.size ?? "md";
    const renderSuggestion = useCallback(
      (label: string) => renderAddressSuggestion(label, size),
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
        setLocalValue(event.detail);
        if (onChangeProp) {
          return onChangeProp(event);
        }

        formOnChange?.(event.detail);
      },
      [formOnChange, onChangeProp]
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
      if (!query || isSelected) {
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
    }, [endpoint, isSelected, query, setMessage]);

    const suggestions = useMemo(
      () => options.map(option => option.label),
      [options]
    );

    return (
      <SearchInput
        ref={forwardedRef}
        {...props}
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

const TILE_SIZE = 256;
// The tiles around the address's tile, enough to cover a 1024×512px map.
const TILE_OFFSETS = [-2, -1, 0, 1, 2].flatMap(dx =>
  [-1, 0, 1].map(dy => [dx, dy] as const)
);

const OPEN_STREET_MAP_TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const OPEN_STREET_MAP_ATTRIBUTION = "© OpenStreetMap contributors";

export interface AddressInputMapExtraProps {
  /**
   * The map zoom level, from 0 (the world) to 19 (a building).
   *
   * @defaultValue 15
   */
  zoom?: number;

  /**
   * The 256px raster tile URL, with `{z}`, `{x}` and `{y}` placeholders.
   * OpenStreetMap's tiles are for light use only; set your own provider's
   * (and its `attribution`) in production.
   *
   * @see https://operations.osmfoundation.org/policies/tiles/
   */
  tileUrl?: string;

  /** The credit the tile provider requires on its map. */
  attribution?: string;
}

const AddressInputSearchTextBox = createStyledHOC(
  SearchInput.TextBox,
  (
    { children, ...props }: GetProps<typeof SearchInput.TextBox>,
    forwardedRef
  ) => {
    return (
      <SearchInput.TextBox ref={forwardedRef} icon={<MapPin />} {...props}>
        {children}
      </SearchInput.TextBox>
    );
  },
  { displayName: "AddressInput" }
);

const AddressInputMapFrame = styled(View, {
  displayName: "AddressInputMap",
  position: "relative",
  overflow: "hidden",
  height: 240,
  borderRadius: "control",
  backgroundColor: "hairline",
  alignItems: "center",
  justifyContent: "center"
});

// ponytail: static tiles, no panning or zooming; swap in MapLibre (or a native
// map) if the map ever needs to be dragged.
const AddressInputMap = createStyledHOC(
  AddressInputMapFrame,
  (
    {
      zoom = 15,
      tileUrl = OPEN_STREET_MAP_TILES,
      attribution = tileUrl === OPEN_STREET_MAP_TILES
        ? OPEN_STREET_MAP_ATTRIBUTION
        : "",
      ...props
    }: GetProps<typeof AddressInputMapFrame> & AddressInputMapExtraProps,
    forwardedRef
  ) => {
    const { address } = use(AddressInputContext);

    if (!address) {
      return (
        <AddressInputMapFrame ref={forwardedRef} {...props}>
          <MapTrifold color="subtle" size="10xl" />
        </AddressInputMapFrame>
      );
    }

    // The address's position in Web Mercator tiles at this zoom.
    const scale = 2 ** zoom;
    const x = ((address.longitude + 180) / 360) * scale;
    const y =
      ((1 -
        Math.asinh(Math.tan((address.latitude * Math.PI) / 180)) / Math.PI) /
        2) *
      scale;

    return (
      <AddressInputMapFrame
        ref={forwardedRef}
        role="img"
        aria-label={`Map of ${address.label}`}
        {...props}>
        {/* The tiles are laid out so the address is at the frame's center. */}
        <View position="absolute" left="50%" top="50%">
          {TILE_OFFSETS.map(([dx, dy]) => {
            const tileY = Math.floor(y) + dy;
            if (tileY < 0 || tileY >= scale) {
              return null;
            }

            // Longitude wraps around past the antimeridian.
            const tileX = (((Math.floor(x) + dx) % scale) + scale) % scale;

            return (
              <Image
                key={`${dx},${dy}`}
                alt=""
                position="absolute"
                left={(dx - (x % 1)) * TILE_SIZE}
                top={(dy - (y % 1)) * TILE_SIZE}
                width={TILE_SIZE}
                height={TILE_SIZE}
                src={tileUrl
                  .replace("{z}", String(zoom))
                  .replace("{x}", String(tileX))
                  .replace("{y}", String(tileY))}
              />
            );
          })}
        </View>

        {/* Positioned, so it paints over the tiles. */}
        <View
          position="relative"
          alignItems="center"
          justifyContent="center"
          width={56}
          height={56}
          borderRadius="full">
          <View
            position="absolute"
            inset={0}
            borderRadius="full"
            backgroundColor="primary"
            opacity={0.3}
          />
          <View
            alignItems="center"
            justifyContent="center"
            width={32}
            height={32}
            borderRadius="full"
            backgroundColor="primary">
            <MapPin color="onPrimary" size="2xl" weight="fill" />
          </View>
        </View>

        <BodyText
          size="sm"
          position="absolute"
          right={0}
          bottom={0}
          paddingHorizontal="lg"
          backgroundColor="surface"
          opacity={0.8}>
          {attribution}
        </BodyText>
      </AddressInputMapFrame>
    );
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
