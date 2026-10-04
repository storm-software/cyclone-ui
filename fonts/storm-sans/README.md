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

This folder is its own Nx project, `fonts-storm-sans`. Its build script (`build.mjs`) compiles the designspaces with fontmake and outputs `StormSans-<Style>.{otf,ttf}` and `StormSans[-Italic]-VF.ttf` to `fonts/storm-sans/dist`. The Nx target also copies the output to `dist/fonts/storm-sans`:

```bash
nx run fonts-storm-sans:build
```

Review note: the source intentionally favors interpolation safety and clean outlines over literal copying of proprietary HashiCorp Sans glyphs.
