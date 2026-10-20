# Cyclone maps

This directory contains a local copy of [Protomaps Basemaps](https://github.com/protomaps/basemaps) `tiles/` and `styles/` at commit `42ffaaa4a85a41bfcb23e43cc0f5b492a5eca123` (October 2026). `tiles/` builds vector PMTiles from OpenStreetMap and other sources. `styles/` controls how those tiles look when displayed; colors are not stored in the PMTiles archive. The Cyclone additions include `styles/src/create-flavor.ts` and `styles/src/create-style.ts`, which the [`@razorwind/maplibre`](https://github.com/storm-software/razorwind/tree/main/packages/maplibre) plugin in `razorwind.config.ts` uses to generate the styles.

## Generate a PMTiles archive

The tile builder requires Java 21+, Maven, several gigabytes of free disk space for shared source datasets, and network access. From the repository root:

```sh
devenv shell -- pnpm nx run maps-tiles:mvn-package
devenv shell -- sh -c 'cd maps/tiles && java -jar target/*-with-deps.jar --download --force --area=monaco --output=data/monaco.pmtiles'
```

Nx discovers the Maven build through the workspace root `pom.xml`. It also exposes `maps-tiles:mvn-compile`, `maps-tiles:mvn-test`, and `maps-tiles:mvn-verify`. Use `devenv shell -- pnpm nx show project maps-tiles` to inspect all inferred targets.

The output is `maps/tiles/data/monaco.pmtiles`. Replace `monaco` with a [Geofabrik area](https://download.geofabrik.de/) or supply an OSM extract and bounds using the upstream builder options. The copied `tiles/Makefile` includes more area examples. Tile source downloads and generated archives are ignored by Git.

Docker is an alternative when Java and Maven are unavailable locally:

```sh
docker build -t stormsoftware-basemaps maps/tiles
docker run --rm -v "$PWD/maps/tiles/data:/tiles/data" stormsoftware-basemaps --download --force --area=monaco --output=data/monaco.pmtiles
```

## Generate Cyclone map styles

The styles are generated with the rest of the design-token outputs by the `@razorwind/maplibre` plugin in `razorwind.config.ts`:

```sh
devenv shell -- pnpm nx run monorepo:build-tokens
```

This writes one style per Razorwind theme to `maps/styles/__generated__/`: `cyclone-light.json`, `cyclone-dark.json`, and the `-dimmed` and `-high-contrast` variants. Colors are read from the theme's design tokens; a theme with a dark canvas uses the dark map flavor. The styles point at the CDN-hosted PMTiles archive, sprites, and Storm Sans glyphs; change `archiveUrl` or `glyphsUrl` in the `maplibre` plugin options to target other hosts. The plugin validates every style with MapLibre's style specification.

For local development, run `devenv shell -- node maps/serve.mjs`. This serves `./maps` on port 8000 with the HTTP range support PMTiles requires. In a MapLibre client, register the [PMTiles protocol](https://github.com/protomaps/PMTiles/tree/main/js) before loading either style:

```js
import { Protocol } from "pmtiles"

maplibregl.addProtocol("pmtiles", new Protocol().tile)
```

MapLibre then loads the style JSON at `http://localhost:8000/styles/__generated__/cyclone-light.json` or `http://localhost:8000/styles/__generated__/cyclone-dark.json`. With `LOCAL_GLYPHS_URL`, the styles request local Storm Sans glyphs at `http://127.0.0.1:8000/fonts/storm-sans/dist/pbf/{fontstack}/{range}.pbf`. The tile-free preview at `http://127.0.0.1:8000/fonts/preview.html` renders all four generated faces. See the [glyph guide](fonts/README.md) for character coverage, fallback limitations, licenses, and versioned hosting.

For production, host the `.pmtiles` archive at a range-request-capable URL and set `archiveUrl` and `glyphsUrl` in the `maplibre` plugin options to the deployed URLs. Sprites are still referenced from `storm-cdn.com`; host them separately if the complete map must work offline. The glyph preview loads MapLibre itself from unpkg.

## Storm Sans map glyphs

These are MapLibre-compatible single-channel SDF glyphs generated from the
Storm Sans static TTFs. MapLibre fetches glyph PBFs and builds its own GPU atlas;
there is no separate PNG atlas to load.

### Generate

From the repository root, after installing the workspace dependencies:

```sh
devenv shell -- pnpm nx run fonts-storm-sans:build
```

The build compiles the fonts and generates glyphs. `devenv` supplies a
pinned native [font-maker](https://github.com/maplibre/font-maker) and its
FreeType/Boost dependencies. The first native build requires network access;
subsequent runs use the Nix store. No font files are uploaded to a service.

The generated `fonts/storm-sans/dist/pbf/` directory is ignored by Git and contains:

```text
pbf/
  Regular/0-255.pbf ... 65280-65535.pbf
  Medium/0-255.pbf  ... 65280-65535.pbf
  Bold/0-255.pbf    ... 65280-65535.pbf
  Italic/0-255.pbf  ... 65280-65535.pbf
  manifest.json
  OFL.txt
```

Each face has 256 BMP ranges, including valid empty ranges. Generation validates
the face/range metadata, glyph IDs, bitmap dimensions, and character-map coverage
before replacing the previous output. The manifest records source and output
hashes, the generator revision and binary hash, font versions, face weights and
styles, character coverage, omitted supplementary codepoints, and font notices.

### Use in Cyclone styles

Pass `glyphsUrl` to `createStyle` in the `maplibre` plugin options of `razorwind.config.ts` (for local development, `LOCAL_GLYPHS_URL` from `maps/styles/src/create-style.ts`), regenerate, and serve with `devenv shell -- node maps/serve.mjs`.

The local glyph URL is
`http://127.0.0.1:8000/fonts/storm-sans/dist/pbf/{fontstack}/{range}.pbf`. The styles select
`Regular`, `Medium`, and `Italic`; Medium
preserves the existing map's stronger-label weight role. Bold is generated for
layers that explicitly request `Bold`.

Open <http://127.0.0.1:8000/fonts/preview.html> for a tile-free MapLibre preview
of all four faces on light/dark backgrounds. It uses a pinned MapLibre script
and stylesheet from unpkg, so that preview requires internet access.

### Coverage and fallback

The current font maps 891 glyphs per face, including Latin, Greek, Cyrillic,
combining marks, and common symbols. This is not complete coverage of every
character in those scripts. Consult `manifest.json` for the actual codepoints.
Devanagari and CJK are not supplied, and supplementary-plane codepoints are not
generated by this pinned CLI. Missing codepoints have no glyph in their PBF
range and can be omitted from labels by MapLibre.

There is no automatic Noto or system-font fallback in these generated stacks.
MapLibre's local CJK handling is a separate client option. To expand coverage,
extend the generator configuration and implementation to merge a pinned,
licensed fallback font into each named face, or serve combined stacks through
a glyph service. Merely adding a second name to `text-font` requires serving
the combined comma-separated stack, which this static layout does not provide.
Additional glyph coverage also does not supply complex-script shaping.

### Hosting

Upload the **contents** of `fonts/storm-sans/dist/pbf/`, including `manifest.json` and `OFL.txt`, under
a versioned prefix such as `fonts/storm-sans/pbf/1.0.9/`. Preserve font-name
directories, and serve raw `.pbf` files as `application/x-protobuf` with CORS
allowing the map application. If the server compresses responses, its
`Content-Encoding` header must match the actual bytes. Versioned objects may use
`Cache-Control: public, max-age=31536000, immutable`; use a new prefix when assets
change, even if the font version is unchanged.

Set the deployed glyph URL (for example `https://example.com/fonts/storm-sans/pbf/1.0.9/{fontstack}/{range}.pbf`) as `glyphsUrl` in the `maplibre` plugin options. Publishing is separate from generation; no CDN assets
are deployed by the build. The complete
map also needs its PMTiles and sprite assets hosted separately.

### Validate

```sh
devenv shell -- pnpm nx run fonts-storm-sans:test-glyphs
devenv shell -- pnpm --dir maps/styles exec node --import tsx --test test/glyphs.spec.ts
```

The first command checks a real generated fixture, malformed PBFs, process
failures, and preservation of existing output when inputs are missing. The
second validates the Cyclone styles and their font-stack contract. Use the
browser preview to check glyph shape, spacing, multiline placement, and halos;
source tests alone do not establish rendered appearance.

Storm Sans derives from IBM Plex Sans and is distributed under the SIL Open
Font License 1.1. Retain [the copyright notices and license](../../fonts/storm-sans/OFL.txt)
when distributing the font or generated glyphs.
