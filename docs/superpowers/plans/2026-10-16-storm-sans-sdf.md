# Storm Sans SDF Glyph Generation Plan

**Status:** Implemented and validated locally. CDN deployment remains a separate operation.

**Goal:** Generate reproducible, self-hostable SDF glyph PBFs from Storm Sans for Cyclone's MapLibre map labels.

**Confirmed consumer:** The MapLibre styles in `maps/styles/`. Although MapLibre renders through the GPU, its glyph-loading contract is SDF glyph PBFs rather than a standalone PNG/MSDF atlas.

## Design and current source

`fonts/storm-sans/build.mjs` already compiles upright and italic designspaces into static TTF/OTF instances and variable TTFs. Both designspaces expose weights 100, 200, 300, 400, 450, 500, 600, and 700. Use the static TTFs as inputs: each glyph set represents one concrete face, without requiring the generator to select variable axes.

The proposed pipeline is:

```text
Storm Sans UFO + designspace
  -> existing fontmake build
  -> static TTF faces
  -> pinned MapLibre font-maker
  -> <fontstack>/<range>.pbf + manifest + license
  -> local HTTP preview / versioned asset hosting
```

MapLibre requests 256-codepoint ranges such as `0-255.pbf` and packs the returned glyphs into GPU atlases itself. Generate single-channel SDF bitmaps and glyph metrics inside PBFs; a PNG/MSDF atlas is a different renderer contract.

Existing integration points:

- `fonts/storm-sans/project.json`: explicit glyph-generation target, alongside the inferred font build.
- `tools/nx/src/plugins/fonts.ts`: existing build runs the font script and copies its output to the workspace distribution directory. Avoid changing every font project for this first integration.
- `maps/styles/src/generate-cyclone.ts`: currently requests Protomaps-hosted glyph PBFs.
- `maps/styles/src/base-layers.ts` and `language.ts`: default face names mix Noto Sans and Storm Sans; some script-specific formatting also requests Storm Sans.
- `maps/serve.mjs`: local server currently identifies PBF files as text; add the binary content type when exposing glyph output.

## Tool choice

1. **Recommended: MapLibre font-maker CLI.** Purpose-built for the renderer's SDF PBF format; supports multiple input fonts for coverage. Pin the upstream revision and build dependencies in the development environment or a reproducible build image. Keep its source outside this repository's maintained code.
2. **Alternative: a fontnik-based generator.** Produces compatible assets, but introduces native Node dependency/toolchain work. Consider only if font-maker cannot be packaged successfully.
3. **Different consumer: msdfgen / msdf-atlas-gen.** Appropriate for a custom renderer that consumes distance-field images and metadata. Does not directly satisfy MapLibre's glyph endpoint.

## Global constraints

- Run project commands through `devenv shell --`.
- Preserve existing dirty root configuration and the untracked `maps/` work; review current contents before editing.
- Do not modify font outlines, generated Razorwind files, external packages, or vendored generator internals.
- Generate reproducible assets from local fonts; never depend on manually uploading fonts to a web application.
- Retain the font's SIL OFL notices and the notices of any fallback fonts. The repository's Apache license does not replace the font license.
- Keep glyph generation separately runnable; the ordinary font build should not acquire a native SDF generator dependency by default.
- Keep local output under `maps/fonts/dist/`, separate from the ordinary font build's clean/output paths and font publishing root.

## Task 1: Establish the generator and face contract

**Files:** new `fonts/storm-sans/glyphs.config.json`; minimal additions to `devenv.nix` or a dedicated pinned build image configuration.

- [ ] Package a pinned font-maker revision with its required submodules/dependencies. Verify its executable runs inside the project environment before adding orchestration.
- [ ] Configure initial faces explicitly: `Storm Sans Regular` -> `StormSans-Regular.ttf` (400), `Storm Sans Medium` -> `StormSans-Medium.ttf` (500), `Storm Sans Bold` -> `StormSans-Bold.ttf` (700), and `Storm Sans Italic` -> `StormSans-Italic.ttf` (400 italic).
- [ ] Generate one Regular range as an end-to-end compatibility probe and decode it with a MapLibre-compatible glyph parser. Inspect the generator's actual range policy and bitmap conventions before fixing validation expectations.
- [ ] Enumerate the input font's character map and report coverage. Start with all supported BMP codepoints; explicitly report supplementary-plane omissions and missing requested scripts. Do not claim worldwide coverage from Storm Sans alone.
- [ ] Define output names using the configured face names, independent of inferred internal font naming. If compatibility requires a `Storm Sans` alias, map it explicitly to Regular; prefer canonical face names in new styles.

**Reference CLI shape, verified against upstream documentation:**

```sh
font-maker --name "Storm Sans Regular" <output-directory> <regular.ttf> [fallback.ttf ...]
```

The implementation must confirm the exact directory layout and range selection behavior of the pinned executable using the probe; do not assume undocumented flags.

**Deliverable:** one valid PBF range rendered by MapLibre, plus a fixed face/coverage contract.

## Task 2: Automate generation and validate artifacts

**Files:** new `fonts/storm-sans/generate-glyphs.mjs`, `fonts/storm-sans/generate-glyphs.spec.ts`, and `fonts/storm-sans/project.json` target `generate-glyphs`.

- [ ] Add focused failing checks for missing TTF inputs, failed generator processes, incorrect face/range metadata, and malformed bitmap metrics. Use a real generated fixture for format validation rather than only mocking the CLI.
- [ ] Implement configuration-driven generation into a temporary staging directory; replace only this target's output after every configured face validates successfully. A failed run must leave the previous complete output usable.
- [ ] Write `maps/fonts/dist/<face>/<start>-<end>.pbf`, a manifest containing source hashes, face weights/styles, font and generator versions, generator parameters, emitted ranges, coverage counts, and output hashes, plus font license notices.
- [ ] Validate range boundaries, unique glyph IDs, glyph IDs inside their advertised range, signed bearings, advances, and bitmap payload length according to the selected generator's border convention. Handle spaces and other empty outlines without treating them as corrupt glyphs.
- [ ] Configure the cacheable target to depend on the existing `build` target. Declare font sources, configuration, script, and pinned generator identity as inputs; declare `maps/fonts/dist` as output. Audit the existing build target's clean behavior before running the dependency chain.
- [ ] Run generation twice without cache and compare hashes; then verify Nx can restore the complete output from cache.

**Planned command after implementation:**

```sh
devenv shell -- pnpm nx run fonts-storm-sans:generate-glyphs
```

**Deliverable:** one reproducible command generating and checking the configured faces without changing ordinary font publishing.

## Task 3: Connect Cyclone map styles and local serving

**Files:** `maps/styles/src/generate-cyclone.ts`, `base-layers.ts`, `language.ts`, `maps/serve.mjs`, and focused integration checks; regenerate both Cyclone style JSONs through their source generator.

- [ ] Add a configurable absolute glyph URL template. Local preview uses `http://127.0.0.1:8000/fonts/dist/{fontstack}/{range}.pbf`; production receives its deployed versioned URL. Absolute URLs avoid ambiguity in MapLibre glyph URL handling.
- [ ] Supply canonical Regular/Medium/Bold/Italic names to the existing label-generation seam, retaining existing weight-role choices where applicable. Audit both top-level `text-font` and nested `format` expressions; every reachable font stack must have a serving strategy.
- [ ] Remove accidental script-specific Storm Sans substitutions where its coverage is insufficient. For a multilingual deployment, generate documented fallback coverage within each named stack or provide a glyph service capable of resolving combined stacks. Do not assume a static directory of individual faces handles comma-separated fallback requests.
- [ ] Serve `.pbf` as `application/x-protobuf`, retain CORS, and test paths containing spaces. Generate raw PBF bytes locally; production compression must have matching HTTP headers.
- [ ] Regenerate light/dark styles and run the existing MapLibre style-spec validation. Confirm every requested glyph URL resolves to the correct face and range.

**Deliverable:** Cyclone styles load local Storm Sans glyphs without missing font-stack requests.

## Task 4: Prove visual behavior and document distribution

**Files:** new `maps/fonts/README.md`; update `fonts/storm-sans/README.md` and `maps/README.md`; add a small map text preview fixture if no suitable preview exists.

- [ ] Render MapLibre labels using `K V W i l a g c e S`, accented names, punctuation, numerals, spaces, and multiline text. Compare Regular, Medium, Bold, and Italic at small and large label sizes, with halos, on light/dark maps and different pixel ratios.
- [ ] Check console/network output and screenshots for clipping, baseline/advance errors, missing codepoints, wrong faces, and SDF halo artifacts. Use a small GeoJSON label source so this check does not require downloading PMTiles.
- [ ] Include a Storybook rendering check if the preview is integrated there. If Storybook cannot run, run `devenv shell -- pnpm build-storybook` and explicitly distinguish build validation from actual rendered MapLibre proof.
- [ ] Document generation, coverage limitations, fallback behavior, required license notices, and the exact local serving paths.
- [ ] Define a versioned hosting prefix such as `glyphs/storm-sans/<font-version>/...`; verify nested paths, CORS, MIME type, and cache headers in a deployment dry run. Keep deployment separate from this generation task and from the current unversioned font uploader until its path mapping has been verified.

**Completion criteria:** clean regeneration succeeds; PBF validation and cache restoration pass; every reachable configured font stack resolves; representative MapLibre labels render correctly; coverage limitations are recorded. Source checks and style validation alone do not establish visual correctness or successful CDN deployment.

## References

- [MapLibre font-maker](https://github.com/maplibre/font-maker), including its CLI instructions in `CONTRIBUTING.md` (inspected at revision `714ccaea67d384717890a3c2c27143dfdd4189b7`; packaging must pin the selected revision).
- [MapLibre glyph loading](https://github.com/maplibre/maplibre-gl-js/blob/main/src/render/glyph_manager.ts): font-stack/range expansion and 256-codepoint requests.
- [MapLibre text limitations](https://github.com/maplibre/maplibre-gl-js/blob/main/developer-guides/unicode.md): glyph coverage is distinct from complex-script shaping.

## Implementation validation — October 16, 2026

- Pinned native font-maker built from unchanged upstream source with its recursive source hash. The Nix build uses the compiler directly because upstream CMake hardcodes `/usr/bin/clang`.
- Full `fonts-storm-sans:generate-glyphs` dependency chain passed. Four faces each contain 891 mapped glyphs across 256 BMP range files, with cmap/bitmap/metrics validation.
- Six glyph-generation/validation/recovery tests, four style-contract tests, and the focused map TypeScript check passed.
- Two uncached glyph generations from identical TTF inputs produced identical manifests and output hashes. Nx restored all 1,026 artifacts with matching hashes after moving the output aside; this restoration check used `--excludeTaskDependencies`, since the complete build dependency chain was verified separately.
- Real headless MapLibre rendering passed on light/dark backgrounds at device pixel ratios 1 and 2, with eight labels per map and no glyph or page errors. The preview uses GeoJSON and does not require PMTiles. PBF requests verified binary MIME, CORS, URL-encoded face names, and HEAD responses.
- `pnpm build-storybook` passed. Unrelated assets regenerated by that check were restored to their pre-check state; existing dirty configuration was preserved.
- Review findings fixed: hash dependent TTF outputs in the glyph cache; retain a recovery backup outside staging if output rollback fails. The server handles asset stream failures without exiting, and style tests reject combined stacks unsupported by static hosting.
- Production hosting was documented, including versioned prefixes and HTTP headers. No CDN upload or live production validation was performed.
