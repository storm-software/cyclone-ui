<!-- START header -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<div align="center"><img src="https://pub-761b436209f44a4d886487c917806c08.r2.dev/storm-banner.gif" width="100%" alt="Storm Software" /></div>
<br />

<div align="center">
<b>
<a href="https://stormsoftware.com" target="_blank">Website</a>  •
<a href="https://github.com/storm-software/cyclone-ui" target="_blank">GitHub</a>  •
<a href="https://discord.gg/MQ6YVzakM5">Discord</a>  •   <a href="https://docs.stormsoftware.com/cyclone-ui" target="_blank">Docs</a>  •   <a href="https://stormsoftware.com/contact" target="_blank">Contact</a>  •
<a href="https://github.com/storm-software/cyclone-ui/issues/new?assignees=&labels=bug&template=bug-report.yml&title=Bug Report%3A+">Report a Bug</a>
</b>
</div>

<br />
This package is part of the <b>🌀 Cyclone UI</b> monorepo. The repository contains <a href="https://tamagui.dev" target="_blank">Tamagui</a> based design components used by Storm Software. Like <a href="https://ui.shadcn.com" target="_blank">Shadcn UI</a>, the components are copied into other repositories via the Cyclone CLI.
<br />

### 💻 Visit [stormsoftware.com](https://stormsoftware.com) to stay up to date with this developer<br />

[![Version](https://img.shields.io/badge/version-0.5.0-1fb2a6.svg?style=for-the-badge&color=1fb2a6)](https://prettier.io/)&nbsp;[![Nx](https://img.shields.io/badge/Nx-17.0.2-lightgrey?style=for-the-badge&logo=nx&logoWidth=20&&color=1fb2a6)](http://nx.dev/)&nbsp;[![NextJs](https://img.shields.io/badge/Next.js-14.0.2-lightgrey?style=for-the-badge&logo=nextdotjs&logoWidth=20&color=1fb2a6)](https://nextjs.org/)&nbsp;[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge&logo=commitlint&color=1fb2a6)](http://commitizen.github.io/cz-cli/)&nbsp;![Semantic-Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge&color=1fb2a6)&nbsp;[![documented with docusaurus](https://img.shields.io/badge/documented_with-docusaurus-success.svg?style=for-the-badge&logo=readthedocs&color=1fb2a6)](https://docusaurus.io/)&nbsp;![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/storm-software/cyclone-ui/cr.yml?style=for-the-badge&logo=github-actions&color=1fb2a6)

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

> [!IMPORTANT] 
> This repository, and the apps, libraries, and tools contained within, is still in it's initial development phase. As a result, bugs and issues are expected with it's usage. When the main development phase completes, a proper release will be performed, the packages will be available through NPM (and other distributions), and this message will be removed. However, in the meantime, please feel free to report any issues you may come across.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<br />

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- END header -->

# Illustrations

Isometric line illustrations that answer the pointer: a field of pillars that rises under it, a vault dial that turns as you circle it, a patch panel whose cables lift as you pass. The thirty-three here are the figures of [Hairline](https://github.com/lucasmarkes/hairline) by Lucas Marques, built on its engine, painted with Cyclone UI theme tokens, and rendered with `react-native-svg`, so one illustration runs on web, on React Native and on the server, where it renders its rest pose.

<!-- START doctoc -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [Quick Features](#quick-features)
- [Installation](#installation)
- [Usage](#usage)
  - [Illustrations](#illustrations-1)
  - [Props](#props)
  - [Palette](#palette)
- [Creating an illustration](#creating-an-illustration)
- [Acknowledgements](#acknowledgements)
- [Reduced Package Size](#reduced-package-size)
- [Development](#development)
  - [Building](#building)
  - [Running unit tests](#running-unit-tests)
  - [Linting](#linting)
- [Storm Workspaces](#storm-workspaces)
- [Roadmap](#roadmap)
- [Support](#support)
- [License](#license)
  - [Documentation](#documentation)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [Contributors](#contributors)
  - [💻 Visit stormsoftware.com to stay up to date with this developer](#-visit-stormsoftwarecom-to-stay-up-to-date-with-this-developer)

<!-- END doctoc -->

## Quick Features

- Isometric line drawings built from rounded solids in a single stroke, after Hairline's ten rules.
- They answer the pointer (mouse, touch, pen) with springs and staggered tweens, and say what is under it through `onRead`.
- Painted with five Cyclone UI theme tokens: they follow the light or dark theme, and a sub-theme such as `success` colours the highlight.
- One `react-native-svg` tree on web and native; the server renders the rest pose; `animated={false}` draws it still.
- One shared frame loop that sleeps when nothing moves and when an illustration is off screen (web), and lands every motion at once when the user prefers reduced motion.
- `createIllustration` turns any illustration file written by the `cyclone-ui-illustration` agent skill into a component.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../docs/packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add illustrations
pnpm install
```

The [component reference](../../docs/design-system/illustrations/index.md) lists the files that the CLI copies and the components it copies with them.

The `@cyclone-ui/illustrations` package is not published to npm yet. After it is published, you can also install it with a package manager:

Using [pnpm](http://pnpm.io):

```bash
pnpm add @cyclone-ui/illustrations
```

<details>
  <summary>Using npm</summary>

```bash
npm install @cyclone-ui/illustrations
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add @cyclone-ui/illustrations
```

</details>

## Usage

```tsx
import { RiffleIllustration, TerrainIllustration } from "@cyclone-ui/illustrations";

<TerrainIllustration maxWidth={480} />
<RiffleIllustration intensity={0.8} play />
<TerrainIllustration animated={false} />
<RiffleIllustration onRead={text => setStatus(text)} />
<TerrainIllustration palette={{ plate: "surface" }} />
```

Each illustration is also its own entry point (`@cyclone-ui/illustrations/TerrainIllustration`), and `createIllustration` and the engine (`HL`) come from `@cyclone-ui/illustrations/create-illustration`.

### Illustrations

The package ships Hairline's thirty-three figures as illustrations. Each answers the pointer as described, and its `intensity` scales that answer.

| Component               | What it draws, and how it answers                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `BasketIllustration`    | An empty wire basket under a bail handle: the pointer tilts it toward itself so the bare floor shows, and the handle swings after it, late. |
| `BranchesIllustration`  | A commit graph on a board: the commit under the pointer rises, and its history rises after it, the farther back the less.                   |
| `CabinetIllustration`   | A rack of twelve blades: the pointer's height pulls the nearest ones out on their rails, the farther the less.                              |
| `DishIllustration`      | A parabolic dish on a two-axis gimbal: the pointer aims it, and it follows on a spring.                                                     |
| `DrawerIllustration`    | A filing cabinet of three drawers: the pointer's height picks one, it slides out, and inside are two dividers and nothing between them.     |
| `ElevatorIllustration`  | Four floors beside an open shaft. The pointer's height picks a floor, and the car travels there through the ones between.                   |
| `ExplodedIllustration`  | An app window taken apart into four layers. Moving across opens the gap; moving down picks a layer.                                         |
| `FormatIllustration`    | A file of ten crooked lines: the pointer runs the formatter down it, and every line above snaps square to its indent.                       |
| `HubIllustration`       | A hub and eight tiles on a grid: the tile under the pointer rises and its link turns solid; its neighbours rise less.                       |
| `KeyboardIllustration`  | A sixty-key board. The key under the pointer sinks, and its neighbours follow it down, less the further away.                               |
| `LaptopIllustration`    | A thin laptop: the pointer's height sets how far the lid stands open, and the lid follows it on a spring.                                   |
| `LockersIllustration`   | A bank of twelve lockers, one ajar at rest: the locker under the pointer opens, and the one open before it swings shut.                     |
| `LoupeIllustration`     | A stand loupe over a blank ruled sheet: the pointer drags it across, and the rules pass enlarged under the glass with nothing between them. |
| `PadlockIllustration`   | A padlock: as the pointer nears, the shackle springs up out of the body and swings open about its long leg.                                 |
| `PatchIllustration`     | A patch panel of twenty-four ports: the cable under the pointer lifts, and its neighbours lean away, less the further away.                 |
| `PhoneIllustration`     | A phone in layers: glass, board, battery, shell. Moving across opens the gap; moving down picks a layer.                                    |
| `PhosphorIllustration`  | A seven by seven dot matrix on a floating tile that plays a loop, and fades like phosphor where you paint it.                               |
| `PlotIllustration`      | A bar chart with no data: seven flat tabs before a grid. The pointer brushes them; each lifts a little, the nearest most, and drops back.   |
| `PlugIllustration`      | A wall socket and a plug lying on the floor at the end of its cord: the pointer draws the plug up toward the socket, and it stops short.    |
| `QueryIllustration`     | A question mark built as a solid on a plinth, its dot a loose ball: the hook turns toward the pointer, and the ball rolls after it.         |
| `RailIllustration`      | A garment rail with seven bare hangers: the pointer brushes them, and each rocks away from it, the nearest most, and settles.               |
| `RebuildIllustration`   | A tree of package tiles: the one touched rises, and every package that depends on it rises after it along the links.                        |
| `RelayIllustration`     | A hub and four branches of tiles: the path to the leaf under the pointer lights hop by hop, each tile rising in turn.                       |
| `RiffleIllustration`    | Eight cards in a tray: the one under the pointer stands up, and its neighbours lean away in turn.                                           |
| `RouterIllustration`    | A wifi router whose antennas lean toward the pointer, the nearest the most and the others less the further away.                            |
| `SettleIllustration`    | Twelve tiles lie crooked round a hub; as the pointer nears it they slide into a tree and the links draw in.                                 |
| `SieveIllustration`     | Three test sieves stacked over a pan: the pointer's height picks one, it rises clear of the stack, and every mesh is bare.                  |
| `SlowIllustration`      | Crates riding a belt through a gate. Hovering slows the clock without stopping it.                                                          |
| `StackIllustration`     | A call stack of five frames: the pointer's height picks one, and the frames above lift away to open it.                                     |
| `TerminalIllustration`  | A terminal window: the pointer's height scrolls back through its history, and the line under it lifts off the screen.                       |
| `TerrainIllustration`   | A field of pillars rises under the pointer and falls off with distance.                                                                     |
| `TurntableIllustration` | Blocks on a turntable. Flick across it to spin it; it settles on the nearest quarter turn.                                                  |
| `VaultIllustration`     | A vault door: circling the pointer turns its dial, which coasts and catches every ten; on forty its three bolts draw back.                  |

### Props

| Prop          | Type                                  | Default     | Description                                                                                                  |
| ------------- | ------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `intensity`   | `number`                              | `0.5`       | How strongly it answers, from 0 to 1, mapped onto the illustration's own `range`.                            |
| `animated`    | `boolean`                             | `true`      | Answer the pointer and move. `false` draws the rest pose, still.                                             |
| `play`        | `boolean`                             | `false`     | Walk the illustration's tour with an unseen pointer until a real one arrives.                                |
| `label`       | `string`                              | its `means` | The accessible label (`role="img"`).                                                                         |
| `onRead`      | `(text: string) => void`              |             | Hears the read-out: what is under the pointer (`cell 2·6`, `05`), or `rest`.                                 |
| `strokeWidth` | `number`                              | `0.9`       | The stroke width in pixels. Strokes do not scale with the drawing.                                           |
| `palette`     | `Partial<Record<PaletteKey, string>>` |             | Overrides a colour with a theme token name or a colour; set `plate` to the surface the illustration sits on. |

Every other prop is a Tamagui `View` prop (`width`, `maxWidth`, margins); the illustration keeps a 5 : 4 aspect ratio.

### Palette

The five colours are theme tokens (`HL.PALETTE_TOKENS`). The highlight is `primary`, so `<Theme name="success">` colours it:

| Colour  | Paints                                 | Light      | Dark        |
| ------- | -------------------------------------- | ---------- | ----------- |
| `plate` | the fill of every solid (the ground)   | `canvas`   | `canvas`    |
| `hi`    | the one bright highlight (`hi`, `dot`) | `primary`  | `primary`   |
| `edge`  | silhouettes (`sil`, `dot m`)           | `subtle`   | `neutral10` |
| `mid`   | the default stroke                     | `neutral7` | `hairline`  |
| `lo`    | the dim crease (`lo`, `dot off`)       | `hairline` | `neutral12` |

## Creating an illustration

Use the [`cyclone-ui-illustration`](../../skills/cyclone-ui-illustration/SKILL.md) agent skill. It writes the illustration as a small JavaScript file on the engine (`HL`), checks it in a browser, and builds a `<Name>Illustration.tsx` component with `createIllustration`, plus static `illustration-<name>.svg`, `.light.svg` and `.dark.svg` images of its rest pose.

The illustrations that ship with this package are written the same way: Hairline's figures, ported to the engine, are in `sources/`, and Terrain and Riffle are the skill's `examples/`. After changing one, rebuild every `src/<Name>Illustration.tsx`:

```bash
pnpm --filter @cyclone-ui/illustrations illustrations
```

The skill's standalone `kernel.js` is generated from `src/engine/`; after changing the engine, regenerate it:

```bash
pnpm --filter @cyclone-ui/illustrations kernel
```

## Acknowledgements

This package (its engine in `src/engine/`, `createIllustration` and its thirty-three illustrations, which are Hairline's figures) and the `cyclone-ui-illustration` skill are adapted from [Hairline](https://github.com/lucasmarkes/hairline) by Lucas Marques: isometric line figures that answer the pointer, and the agent skills that draw them. Its ten rules come from the study at [lucasmarkes.com/lab/hairline](https://lucasmarkes.com/lab/hairline). Hairline is released under the MIT License:

```text
MIT License

Copyright (c) 2026 Lucas Marques

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Reduced Package Size

This project uses [tsdown](https://tsdown.dev/) to package the source code due to its ability to remove unused code and ship smaller javascript files thanks to code splitting. This helps to greatly reduce the size of the package and to make it easier to use in other projects.

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual commands are available to assist in development.

### Building

Run `nx build illustrations` to build the library.

### Running unit tests

Run `nx test illustrations` to execute the unit tests via [Vitest](https://vitest.dev).

### Linting

Run `nx lint illustrations` to run [ESLint](https://eslint.org/) on the package.

<!-- START footer -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


## Storm Workspaces

Storm workspaces are built using
<a href="https://nx.dev/" target="_blank">Nx</a>, a set of extensible dev tools
for monorepos, which helps you develop like Google, Facebook, and Microsoft.
Building on top of Nx, the Open System provides a set of tools and patterns that
help you scale your monorepo to many teams while keeping the codebase
maintainable.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Roadmap

See the [open issues](https://github.com/storm-software/cyclone-ui/issues) for a
list of proposed features (and known issues).

- [Top Feature Requests](https://github.com/storm-software/cyclone-ui/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/storm-software/cyclone-ui/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/storm-software/cyclone-ui/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Support

Reach out to the maintainer at one of the following places:

- [Contact](https://stormsoftware.com/contact)
- [GitHub discussions](https://github.com/storm-software/cyclone-ui/discussions)
- <support@stormsoftware.com>

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## License

This project is licensed under the **Apache License, Version 2.0**. Feel free to
edit and distribute this template as you like.

```
  Copyright (C) 2023 - 2024 Storm Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
```

See [LICENSE](LICENSE) for more information.

### Documentation

All documentation is licensed under the
[Creative Commons](http://creativecommons.org/licenses/by/4.0/) (attribute)
license.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Changelog

This project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html). Every release, along
with the migration instructions, is documented in the [CHANGELOG](CHANGELOG.md)
file

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Contributing

First off, thanks for taking the time to contribute! Contributions are what
makes the open-source community such an amazing place to learn, inspire, and
create. Any contributions you make will benefit everybody else and are **greatly
appreciated**.

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what
  environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

Please adhere to this project's [code of conduct](.github/CODE_OF_CONDUCT.md).

You can use
[markdownlint-cli](https://github.com/storm-software/cyclone-ui/markdownlint-cli)
to check for common markdown style inconsistency.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Contributors

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://patsullivan.org"><img src="https://avatars.githubusercontent.com/u/99053093?v=4?s=100" width="100px;" alt="Patrick Sullivan"/><br /><sub><b>Patrick Sullivan</b></sub></a><br /><a href="#design-sullivanpj" title="Design">🎨</a> <a href="https://github.com/storm-software/cyclone-ui/commits?author=sullivanpj" title="Code">💻</a> <a href="#tool-sullivanpj" title="Tools">🔧</a> <a href="https://github.com/storm-software/cyclone-ui/commits?author=sullivanpj" title="Documentation">📖</a> <a href="https://github.com/storm-software/cyclone-ui/commits?author=sullivanpj" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tylerbenning.com/"><img src="https://avatars.githubusercontent.com/u/7265547?v=4?s=100" width="100px;" alt="Tyler Benning"/><br /><sub><b>Tyler Benning</b></sub></a><br /><a href="#design-tbenning" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stormsoftware.com"><img src="https://avatars.githubusercontent.com/u/149802440?v=4?s=100" width="100px;" alt="Stormie"/><br /><sub><b>Stormie</b></sub></a><br /><a href="#maintenance-stormie-bot" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg" alt="All Contributors">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

<hr />
<br />

<div align="center">
<img src="https://pub-761b436209f44a4d886487c917806c08.r2.dev/logo-banner.png" width="100%" alt="Storm Software" />
</div>
<br />

<div align="center">
<b>
<a href="https://stormsoftware.com" target="_blank">Website</a>   •   <a href="https://stormsoftware.com/contact" target="_blank">Contact</a>  •   <a href="https://discord.gg/MQ6YVzakM5">Discord</a>  •   <a href="https://linkedin.com/in/pat-sullivan-dev" target="_blank">LinkedIn</a>  •   <a href="https://medium.com/@pat.joseph.sullivan" target="_blank">Medium</a>  •   <a href="https://github.com/storm-software" target="_blank">GitHub</a>  •   <a href="https://keybase.io/sullivanp" target="_blank">OpenPGP Key</a>
</b>
</div>

<div align="center">
<b>Fingerprint:</b> 1BD2 7192 7770 2549 F4C9 F238 E6AD C420 DA5C 4C2D
</div>
<br />

Storm Software is an open source software development organization and creator
of Acidic, StormStack and StormCloud.

Our mission is to make software development more accessible. Our ideal future is
one where anyone can create software without years of prior development
experience serving as a barrier to entry. We hope to achieve this via LLMs,
Generative AI, and intuitive, high-level data modeling/programming languages.

If this sounds interesting, and you would like to help us in creating the next
generation of development tools, please reach out on our website!

<br />
### 💻 Visit [stormsoftware.com](https://stormsoftware.com) to stay up to date with this developer

<br />
<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- END footer -->
