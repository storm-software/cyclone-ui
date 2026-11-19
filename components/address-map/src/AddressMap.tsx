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

import { BodyText } from "@cyclone-ui/body-text";
import { MapMarker, MapTrifold } from "@cyclone-ui/icons";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { Image } from "@tamagui/image";

/** An address with the coordinates to show it at. */
export interface AddressOption {
  /** The full address as displayed, e.g. "123 Main Street, LA, CA 90012". */
  label: string;
  latitude: number;
  longitude: number;
}

/** Whether a value is an {@link AddressOption}, as an address API answers. */
export const isAddressOption = (value: any): value is AddressOption =>
  typeof value?.label === "string" &&
  Number.isFinite(value.latitude) &&
  Number.isFinite(value.longitude);

const TILE_SIZE = 256;
// The tiles around the address's tile, enough to cover a 1024×512px map.
const TILE_OFFSETS = [-2, -1, 0, 1, 2].flatMap(dx =>
  [-1, 0, 1].map(dy => [dx, dy] as const)
);

const OPEN_STREET_MAP_TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const OPEN_STREET_MAP_ATTRIBUTION = "© OpenStreetMap contributors";

export interface AddressMapExtraProps {
  /** The address to show; without one the map shows a placeholder. */
  address?: AddressOption;

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

const AddressMapFrame = styled(View, {
  displayName: "AddressMap",
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
/**
 * A map of an address: raster tiles centered on its coordinates, with a marker
 * on it, or a placeholder while there is no address.
 *
 * @example
 * ```tsx
 * <AddressMap
 *   address={{ label: "200 N Spring St", latitude: 34.05, longitude: -118.24 }}
 * />
 * ```
 */
export const AddressMap = createStyledHOC(
  AddressMapFrame,
  (
    {
      address,
      zoom = 15,
      tileUrl = OPEN_STREET_MAP_TILES,
      attribution = tileUrl === OPEN_STREET_MAP_TILES
        ? OPEN_STREET_MAP_ATTRIBUTION
        : "",
      ...props
    }: GetProps<typeof AddressMapFrame> & AddressMapExtraProps,
    forwardedRef
  ) => {
    if (!address) {
      return (
        <AddressMapFrame ref={forwardedRef} {...props}>
          <MapTrifold color="subtle" size="16xl" />
        </AddressMapFrame>
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
      <AddressMapFrame
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
            backgroundColor="secondary">
            <MapMarker color="primary" size="5xl" variant="filled" />
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
      </AddressMapFrame>
    );
  },
  { displayName: "AddressMap" }
);

export type AddressMapProps = GetProps<typeof AddressMap>;
