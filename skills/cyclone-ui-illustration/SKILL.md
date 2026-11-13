---
name: cyclone-ui-illustration
description: Use when someone asks for a new Cyclone UI illustration, an isometric line drawing that answers the pointer (a hero, an empty state, a product or feature illustration), or wants an existing SVG (an icon, a logo, a drawing) rebuilt as one. Draws it on the Hairline engine with Cyclone UI design tokens, checks it in a browser, and hands over a themed React component (react-native-svg, web and native) plus static light and dark SVG images.
argument-hint: "[idea | file.svg [what the pointer does]]"
---

# Cyclone UI: create an illustration

You are making one illustration: an isometric line drawing, built from rounded solids in a single stroke, that answers the pointer. It is painted with Cyclone UI theme tokens and ships three ways:

- **an animated component**, `<Name>Illustration.tsx`: a Tamagui / react-native-svg component that answers the pointer on web and React Native and renders its rest pose on the server;
- **static images**, `illustration-<name>.svg` (follows the colour scheme), `.light.svg` and `.dark.svg`: the rest pose as plain SVG files;
- **the bench**, `illustration-<name>.html`: one self-contained page to look at and play with it.

This skill is a modified version of the [Hairline](https://github.com/lucasmarkes/hairline) agent skills (`hairline-create` and `hairline-adopt`) by Lucas Marques. The method, the ten rules and the two examples are Hairline's; see [Acknowledgements](#acknowledgements). What Hairline calls a figure is an illustration here.

You write one thing: the illustration, `<name>.js`. The engine (`kernel.js`) and the page (`bench.html`) are fixed. Never edit them, never paste a changed copy of them, and never write again what the kernel already gives you. `examples/terrain.js` and `examples/riffle.js` are the bar, in the format you will write.

Every file named below is in this skill's folder. Work in the person's app, not in this folder: write `<name>.js` in a scratch or working directory and run `build.mjs`, `validate.mjs` and `look.mjs` from there, by their path in this folder.

## 0. Source

Only when the request came with an `.svg` file (the person wants their drawing as an illustration). Given several, make one at a time: ask which comes first. Run `node read.mjs <file.svg>`: it writes the SVG as a picture and a card of what it measured, in the working directory. Then read `source.md` and answer its questions. The object and its parts are now fixed: every concept in step 1 keeps them.

When you offer the concepts, say first, in one line, what you read the drawing as and which of its parts you kept. If the person corrects the reading, read it again their way before any concept is built. The drawing gives the identity: never animate the SVG itself and never trace it.

## 1. Concept

Read `concepts.md`. It has a section for an empty state and one for an illustration drawn from a mark. Then offer two or three concepts, one line each:

> **Name.** The object. What the pointer does to it. What the read-out says. Where the tour stops.

Wait for the person to pick. Skip this step only when they arrived with the object and the gesture already chosen. If there is nobody to ask, take the concept with the strongest rest pose and say which you took.

With a source (step 0), every concept keeps the object and its parts: they differ in the gesture, or, when the gesture came with the request, in the form and the read-out.

One illustration, one idea. A concept that needs a label to be understood is not a concept yet.

## 2. Build

1. Read `rules.md`. The ten rules are not advice: an illustration that breaks one is not finished.
2. Read the index at the top of `kernel.js`: the comment under the hash line, down to `var HL`. It lists everything you may call, and the node methods that exist. Do not read the code under it.
3. Read the example nearer your concept: `examples/terrain.js` for a continuous field, `examples/riffle.js` for discrete items.
4. Write the illustration as `<name>.js` in the shape of the examples: take what you need from `HL`, define `mount({ stage, svg, read }, value)` returning `{ set, destroy }`, and end the file with `illustration({ name, means, rules, range, tour, mount })`.
   - `name`: lowercase, one word or hyphenated. The component is named from it: `deploy-locks` gives `DeployLocksIllustration`.
   - `means`: one sentence, 140 characters at most, saying what the illustration shows. It is the line under the stage and the component's accessible label.
   - `rules`: the numbers of the rules this illustration leans on most.
   - `range`: the one number the slider (the component's `intensity`) drives, at intensity 0, 0.5 and 1. The middle one is the default, and the three move one way. `mount`'s `value`, and the `value` that `set(value)` gets, is this number: the illustration's own, read on `range`, not 0 to 1.
   - `tour`: the three to six viewBox points the unseen pointer visits when the page or the component plays, or `null` to leave. Literal `[x, y]` numbers, at least one of them a point. The illustration never plays itself.
   - It runs on a page, in React Native and in Node: no `window`, `document` or DOM, only `HL` and `performance.now()`.
5. Build it: `node build.mjs <name>.js [--out <dir>] [--import <specifier>]` writes the bench page, the three static SVGs and the component (see step 4 for `--out` and `--import`). Each run of `look.mjs` in step 3 rebuilds the page.

## 3. Check

1. `node look.mjs <name>.js --answer x,y,z --edge x,y,z`, and `--source <file.svg>` when there is one, the points being world points of your illustration, as `look.md` says. It builds the page, validates it, takes the eight pictures and the two static images on one sheet, `illustration-<name>-look.png`, and checks the frame, the read-out and the console. Fix every line it prints as failed, and run it again until it exits 0.
2. Read `look.md`, then the sheet, and answer its questions. Fix what fails, then go back to 1.

`look.mjs` needs a browser. It uses a `playwright-core` the working directory already has, or installs one once outside this folder. Without a browser, check with `node validate.mjs illustration-<name>.html` after each build and do the look as `look.md` says under "Without a browser". Without Node, read the list of checks at the top of `validate.mjs` and answer each one from your code.

Do not hand over a page the validator rejects. Do not say the look is done if you did not look.

## 4. Hand over

Find where the app keeps its components: the `path` in `components.json` (from the Cyclone UI CLI), or the folder its other components live in. Build the files there:

```bash
node < skill folder --out src/components/illustrations > /build.mjs < name > .js
```

The component imports `createIllustration` and `HL` from `@cyclone-ui/illustrations/create-illustration`, so the app needs `@cyclone-ui/illustrations` (`pnpm add @cyclone-ui/illustrations`). When the app copied its source in with the Cyclone UI CLI (`cyclone-ui add illustrations`) instead, point the import at that copy with `--import`, for example `--import @/components/ui/illustrations/create-illustration`. Do not edit the installed illustrations files (see the **cyclone-ui-setup** skill). Move the static SVGs to wherever the app serves images (`public/`, `assets/`) if they belong there.

Show the person how to use it, with the component's real name:

```tsx
import { DeployLocksIllustration } from "@/components/illustrations/DeployLocksIllustration";

<DeployLocksIllustration maxWidth={480} />                       // answers the pointer
<DeployLocksIllustration intensity={0.8} play />                 // walks its tour until a hand arrives
<DeployLocksIllustration animated={false} />                     // the rest pose, still
<DeployLocksIllustration onRead={text => setStatus(text)} />     // hears the read-out ("rest", "lock 3")
<DeployLocksIllustration palette={{ plate: "surface" }} />       // on a card: fill the solids with the card's surface
<Theme name="success"><DeployLocksIllustration /></Theme>        // the highlight takes the theme's primary
```

It takes Tamagui `View` props (`width`, `maxWidth`, margins), keeps a 5 : 4 aspect ratio, follows the surrounding light or dark theme, and lands every motion when the user prefers reduced motion. The static `illustration-<name>.svg` follows `prefers-color-scheme`; use the `.light.svg` or `.dark.svg` file when the app picks its own scheme (an `<img>` cannot see the app's theme).

Then say, one line each:

- the metaphor: what the object is, and what the pointer does to it;
- the rules it leans on;
- the tour: where it stops, in order;
- the files written and where;
- anything you could not verify (no Node, no browser, no React render), plainly.

Then ask the person to press play on the bench page, or open it with `?play=1`, and say whether the lap tells the illustration's story. If there is nobody to ask, say the tour was not judged. If the illustration was made from someone else's mark, say so: the component shows another company's mark, and it is theirs to publish or not.

## 5. Adjust

When the person asks for a change, edit only `<name>.js`, then run `look.mjs` again, read the new sheet, and build again with the same `--out` and `--import`. Never edit the generated component or SVGs: they are rebuilt from `<name>.js`. The tenth version is held to the same bar as the first. A change to the lap is a change to `tour` alone.

## In the Cyclone UI repository

The `@cyclone-ui/illustrations` package is `components/illustrations`: the engine is `src/engine/`, the component factory `src/create-illustration.tsx`, and `kernel.js` is generated from the engine by `node ./scripts/kernel.ts` (run in `components/illustrations`, `--check` to verify). Illustrations that ship with the package go in its `src/`, built with `--import ./create-illustration`, exported from `src/index.ts` and added to `src/Illustrations.stories.tsx`.

## What goes wrong

| If you catch yourself                                                           | Do this instead                                                                                    |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| adding a label, a number or a letter to the drawing                             | say it with geometry (rule 10); names go to `read.textContent`                                     |
| reaching for a colour, a fill or a glow                                         | move one stroke from `sil` to `hi` (rule 04); the palette is the theme's                           |
| writing a timer, a `requestAnimationFrame` or a CSS animation                   | `register(stage, tick)`, with springs or tweens (rules 07 and 08)                                  |
| reaching for `window`, `document` or a DOM method the index does not list       | the illustration also runs in React Native and in Node; use `HL`                                   |
| testing the pointer against what is drawn right now                             | test it against the rest or target pose (rule 01)                                                  |
| drawing a box with twelve edges                                                 | `prism` of two rounded rings: a silhouette and one crease (rule 09)                                |
| drawing a part as a plain rounded block                                         | give it the features that make it what it is, the ones you named in the concept (`concepts.md`)    |
| leaving rest flat, empty, or symmetric because that was easy                    | compose it: rest is the thumbnail and the static image (rule 05)                                   |
| stamping a mark on a box to say whose it is                                     | build the mark as the object, or leave it out (`concepts.md`, "From a mark")                       |
| editing the kernel, the bench or the generated component to make something work | the illustration is wrong; change `<name>.js`                                                      |
| making the tour visit every part in turn                                        | three stops that each show a different answer, then a leave: a lap is a sentence, not an inventory |
| letting in a second idea                                                        | cut it: one illustration, one idea                                                                 |
| tracing a path from the SVG, or copying its coordinates                         | build the part as a solid with the proportions the card gives (`source.md`)                        |
| keeping a part of the SVG that is decoration                                    | drop it: two or three parts make the object                                                        |

## Acknowledgements

This skill, its scripts (`build.mjs`, `validate.mjs`, `look.mjs`, `read.mjs`), its references (`rules.md`, `concepts.md`, `look.md`, `source.md`), the bench and the two examples are adapted from **[Hairline](https://github.com/lucasmarkes/hairline)** by Lucas Marques: isometric line figures that answer the pointer, and the `hairline-create` / `hairline-adopt` agent skills that draw them. The ten rules come from the study behind it, [lucasmarkes.com/lab/hairline](https://lucasmarkes.com/lab/hairline). The engine in `kernel.js` (the `@cyclone-ui/illustrations` engine) ports Hairline's geometry and motion code. Hairline is © 2026 Lucas Marques and released under the MIT License; its license text is in [`LICENSE-hairline.md`](./LICENSE-hairline.md).

The Cyclone UI changes are the design-token palette, the node tree that lets one illustration run on a page, in react-native-svg and in Node, the React component and the static SVG output.
