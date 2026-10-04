# Storm Serif — variable sources

This is an experimental derivative of the Newsreader variable sources by Production Type ([productiontype/Newsreader](https://github.com/productiontype/Newsreader), SIL Open Font License 1.1, see `OFL.txt`).
It is NOT Anthropic Serif and is not affiliated with or endorsed by Anthropic or BSPK.

Design target referenced: the Anthropic Serif specimen images in “Anthropic designed its own type family” (gooova.com, May 2026).
Applied direction, roughly halfway between Newsreader and the specimen's measured proportions:

- larger x-height: lowercase x-height/cap height raised halfway toward the specimen's ~0.755 (16pt 0.64 → 0.70, 72pt → 0.735, 6pt → 0.74); baselines, descenders, cap height and ascender tops are unchanged
- lower display contrast: the 72pt masters are blended 40% toward the 16pt masters, for sturdier hairlines and serifs at large sizes
- slightly heavier text weights: the Regular/Italic masters are blended 5% toward ExtraBold, and Light (300) maps to design location 235
- calmer italic: slant reduced from 17° to 13.5°, set 3% wider at ExtraLight/Regular and 2% narrower at ExtraBold
- flag-terminal `r` (upright only): the ball terminal is replaced by an arm with a vertical cut, a rounded top corner and a bracket where it meets the stem. The arm is drawn as one contour with the stem, and the stem's top-right lean is reduced. ExtraBold follows a fitted reference outline. ExtraLight keeps its own hairline path, and Regular interpolates between the two by stem weight. The advance is reduced by 0.15 × terminal height and the `top` anchor shifts by half that amount. `racute`, `rcaron`, `uni0157`, `uni0211` and `uni0213` follow both changes.
- otherwise preserved Newsreader letterforms, serifs, kerning, features and glyph coverage

Masters: 6pt, 16pt and 72pt × ExtraLight (200), Regular (400) and ExtraBold (800), upright and italic. Axes: `wght` 200–800 and `opsz` 6–72; the static instances are cut at opsz 16.

This folder is its own Nx project, `fonts-storm-serif`. Its build script (`build.mjs`) compiles the designspaces with fontmake and outputs `StormSerif-<Style>.{otf,ttf}` and `StormSerif[-Italic]-VF.ttf` to `fonts/storm-serif/dist`. The Nx target also copies the output to `dist/fonts/storm-serif`:

```bash
nx run fonts-storm-serif:build
```

Source note: compared with upstream, every contour starts on an on-curve point and a duplicated anchor pair in `uni030B` (16pt ExtraLight Italic) is removed. fontmake 3's master compatibility check fails without these fixes.
