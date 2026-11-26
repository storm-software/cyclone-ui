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
import { Spinner } from "@cyclone-ui/spinner";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, useThemeName, View } from "@tamagui/core";
import { Image } from "@tamagui/image";
import type { Map as MapLibreMap, StyleSpecification } from "maplibre-gl";
import type { ComponentProps, FC, RefAttributes } from "react";
import { useEffect, useRef, useState } from "react";

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
// `@tamagui/image` forwards a ref to its `<img>`; its declared type omits it.
const TileImage = Image as FC<
  ComponentProps<typeof Image> & RefAttributes<HTMLImageElement>
>;
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

  /**
   * The TileJSON URL of a vector tileset in the Protomaps basemap schema, such
   * as a PMTiles archive built by Cyclone's `maps/tiles` and served by a tile
   * server. MapLibre draws it in Cyclone's map style for the current theme,
   * in place of the raster `tileUrl` tiles.
   *
   * @see https://docs.protomaps.com/basemaps/layers
   */
  tiles?: string;

  /** The credit the tile provider requires on its map. */
  attribution?: string;
}

/**
 * MapLibre drawing a vector tileset, centered on a point. It's loaded with the
 * first map that needs it, and reports `src` once the view has rendered.
 */
const VectorTiles = ({
  tiles,
  longitude,
  latitude,
  zoom,
  src,
  onLoad
}: {
  tiles: string;
  longitude: number;
  latitude: number;
  zoom: number;
  src: string;
  onLoad: (src: string) => void;
}) => {
  const container = useRef<HTMLElement>(null);
  const [map, setMap] = useState<MapLibreMap>();
  const dark = !useThemeName().startsWith("light");

  useEffect(() => {
    let instance: MapLibreMap | undefined;
    let cancelled = false;
    void Promise.all([
      import("maplibre-gl"),
      dark
        ? import("./styles/cyclone-dark.json")
        : import("./styles/cyclone-light.json")
    ]).then(([{ Map }, { default: style }]) => {
      if (cancelled || !container.current) {
        return;
      }

      instance = new Map({
        container: container.current,
        style: {
          ...(style as StyleSpecification),
          sources: { stormsoftware: { type: "vector", url: tiles } }
        },
        interactive: false,
        attributionControl: false
      });
      setMap(instance);
    });

    return () => {
      cancelled = true;
      instance?.remove();
    };
  }, [tiles, dark]);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.jumpTo({ center: [longitude, latitude], zoom });
    // An error (a tile, the glyphs) also ends the wait, as a raster tile's does.
    const loaded = () => onLoad(src);
    void map.once("idle", loaded);
    void map.once("error", loaded);

    return () => {
      map.off("idle", loaded);
      map.off("error", loaded);
    };
  }, [map, longitude, latitude, zoom, src, onLoad]);

  return <View ref={container as any} position="absolute" inset={0} />;
};

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

// ponytail: a static map, no panning or zooming; set MapLibre's `interactive`
// if the map ever needs to be dragged. Vector tiles are web only (MapLibre GL
// JS) and use the light/dark styles copied from `maps/styles/__generated__`
// (recopy them when the tokens change); dimmed and high-contrast themes get
// the plain ones.
/**
 * A map of an address: vector or raster tiles centered on its coordinates,
 * with a marker on it, or a placeholder while there is no address.
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
      tiles,
      // Protomaps basemaps are OpenStreetMap data too.
      attribution = tiles || tileUrl === OPEN_STREET_MAP_TILES
        ? OPEN_STREET_MAP_ATTRIBUTION
        : "",
      ...props
    }: GetProps<typeof AddressMapFrame> & AddressMapExtraProps,
    forwardedRef
  ) => {
    // The src of the last center tile that finished (or failed) loading; the
    // map shows a spinner in place of the marker until it matches.
    const [loadedSrc, setLoadedSrc] = useState<string>();

    if (!address) {
      return (
        <AddressMapFrame ref={forwardedRef} {...props}>
          {/* A larger, subdued copy behind, cropped by the frame's corner. */}
          <View
            position="absolute"
            right={-64}
            bottom={-96}
            opacity={0.15}
            transform={[{ rotate: "-12deg" }]}
            aria-hidden>
            <MapTrifold color="subtle" size={320} />
          </View>
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
    // Where the address sits in its tile, in whole pixels: the server's and the
    // browser's `Math.asinh` can differ in the last bit, and an unrounded
    // offset then hashes to a different style class, a hydration mismatch.
    const offsetX = Math.round((x % 1) * TILE_SIZE);
    const offsetY = Math.round((y % 1) * TILE_SIZE);

    const tileSrc = (tileX: number, tileY: number) =>
      tileUrl
        .replace("{z}", String(zoom))
        .replace("{x}", String(tileX))
        .replace("{y}", String(tileY));
    const centerSrc = tiles
      ? `${tiles}#${zoom}/${address.latitude}/${address.longitude}`
      : tileSrc(Math.floor(x) % scale, Math.floor(y));

    return (
      <AddressMapFrame
        ref={forwardedRef}
        role="img"
        aria-label={`Map of ${address.label}`}
        {...props}>
        {tiles ? (
          <VectorTiles
            tiles={tiles}
            longitude={address.longitude}
            latitude={address.latitude}
            zoom={zoom}
            src={centerSrc}
            onLoad={setLoadedSrc}
          />
        ) : (
          /* The tiles are laid out so the address is at the frame's center. */
          <View position="absolute" left="50%" top="50%">
            {TILE_OFFSETS.map(([dx, dy]) => {
              const tileY = Math.floor(y) + dy;
              if (tileY < 0 || tileY >= scale) {
                return null;
              }

              // Longitude wraps around past the antimeridian.
              const tileX = (((Math.floor(x) + dx) % scale) + scale) % scale;

              const src = tileSrc(tileX, tileY);

              return (
                <TileImage
                  key={`${dx},${dy}`}
                  alt=""
                  position="absolute"
                  left={dx * TILE_SIZE - offsetX}
                  top={dy * TILE_SIZE - offsetY}
                  width={TILE_SIZE}
                  // A CSS reset's `img { max-width: 100% }` would squash it to the 0px wrapper.
                  maxWidth={TILE_SIZE}
                  height={TILE_SIZE}
                  src={src}
                  // A server-rendered tile can finish (or fail) before hydration,
                  // and then `onLoad`/`onError` never fire.
                  ref={
                    src === centerSrc
                      ? (image: HTMLImageElement | null) => {
                          if (image?.complete) {
                            setLoadedSrc(src);
                          }
                        }
                      : undefined
                  }
                  onLoad={
                    src === centerSrc ? () => setLoadedSrc(src) : undefined
                  }
                  onError={
                    src === centerSrc ? () => setLoadedSrc(src) : undefined
                  }
                />
              );
            })}
          </View>
        )}

        {/* Positioned, so they paint over the tiles. */}
        {loadedSrc !== centerSrc ? (
          <View position="relative">
            <Spinner size="large" color="var(--primary)" />
          </View>
        ) : (
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
        )}

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
