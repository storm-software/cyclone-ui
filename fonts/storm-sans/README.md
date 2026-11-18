# Storm Sans — variable sources

This is a normal-width Roman-only experimental derivative of IBM Plex Sans variable sources.
It is NOT HashiCorp Sans and is not affiliated with or endorsed by HashiCorp.

Design target referenced: HashiCorp's official “Introducing HashiCorp Sans” specimen (May 21, 2024).
Applied direction:

- accentuated horizontal bridges/slabs (K, V, W)
- developer/monospace-inspired slabs on i and l
- stronger join contrast / ink-trap-like pinches
- humanist angled terminal emphasis on c, e, S
- preserved IBM Plex double-story a/g foundations, which already provide a useful humanist base

Masters: Thin (100), Regular (400), Bold (700). The designspace retains the original IBM Plex weight mapping and normal-width instances only.

This folder is its own Nx project, `fonts-storm-sans`. Its build script (`build.mjs`) compiles the designspaces with fontmake and writes static faces to `dist/otf/<Style>.otf` and `dist/ttf/<Style>.ttf`, variable faces to `dist/ttf/{Variable,Italic-Variable}.ttf`, WOFF2 versions of every TTF to `dist/webfonts/<Style>.woff2`, and map glyphs to `dist/pbf/<Style>/<range>.pbf`. The Nx target also copies the output to `dist/fonts/storm-sans`:

```bash
devenv shell -- pnpm nx run fonts-storm-sans:build
```

Review note: the source intentionally favors interpolation safety and clean outlines over literal copying of proprietary HashiCorp Sans glyphs.

## MapLibre SDF glyphs

The build also generates map-label glyphs from the Regular, Medium, Bold, and Italic static TTFs.

The PBF output in `dist/pbf/` includes validated metrics, a coverage/hash manifest, and
[OFL notices](OFL.txt). It does not publish assets. See the
[map glyph guide](../../maps/fonts/README.md) for previewing, hosting, and
coverage limitations.
