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

# Slider

A `Slider` component used to select a value, or a range of values, from a continuous or stepped interval. It is styled after the [Material UI Slider](https://mui.com/material-ui/react-slider/) and built on the [Tamagui Slider](https://tamagui.dev/ui/slider). It supports controlled and uncontrolled values, ranges, marks with labels, value labels, inverted or hidden tracks, vertical orientation, a disabled state, and keyboard input.

<!-- START doctoc -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installing](#installing)
- [Usage](#usage)
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

## Installing

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/slider
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/slider
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/slider
```

</details>

## Usage

```tsx
import { Slider } from "@cyclone-ui/slider";

// Uncontrolled
<Slider defaultValue={30} getAriaLabel={() => "Volume"} />

// Controlled range
<Slider value={value} onChange={setValue} getAriaLabel={i => (i ? "Maximum" : "Minimum")} />

// Discrete, with a mark at every step and a value label while sliding
<Slider defaultValue={30} step={10} marks valueLabelDisplay="auto" />

// Custom marks with labels
<Slider defaultValue={20} marks={[{ value: 0, label: "0°C" }, { value: 100, label: "100°C" }]} />

// Vertical (defaults to a 200px height)
<Slider orientation="vertical" height={300} defaultValue={30} />
```

| Prop | Default | Description |
| --- | --- | --- |
| `value` / `defaultValue` | `min` | A number, or an array of numbers for a range slider. |
| `min` / `max` / `step` | `0` / `100` / `1` | The interval, and the increment values snap to. |
| `onChange` | | Called on every change with the value (a number, or an array for a range) and the moved thumb's index. |
| `onChangeCommitted` | | Called when a drag ends, or a key press changes the value. |
| `size` | `"md"` | `"sm"`, `"md"`, or `"lg"`. |
| `marks` | `false` | `true` for a mark at every step, or an array of `{ value, label? }`. |
| `track` | `"normal"` | `"normal"`, `"inverted"`, or `false`. |
| `valueLabelDisplay` | `"off"` | `"auto"` (on hover, focus and drag), `"on"`, or `"off"`. |
| `valueLabelFormat` | | A string, or a function of the value and thumb index. |
| `orientation` | `"horizontal"` | `"horizontal"` or `"vertical"`. |
| `minStepsBetweenThumbs` | `0` | The minimum number of steps between range thumbs. |
| `disabled` | `false` | Prevent changes. |
| `getAriaLabel` / `getAriaValueText` | | Build each thumb's accessible name and value text. |

The slider uses the theme's `accent` color; wrap it in a `Theme` (for example `success`) to change it. Each thumb is focusable and exposed as a `slider`: arrow keys change the value by `step`, `Page Up` / `Page Down` and `Shift` + arrow keys by ten steps, and `Home` / `End` jump to the minimum and maximum.

## Reduced Package Size

This project uses [tsup](https://tsup.egoist.dev/) to package the source code due to its ability to remove unused code and ship smaller javascript files thanks to code splitting. This helps to greatly reduce the size of the package and to make it easier to use in other projects.

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual commands are available to assist in development.

### Building

Run `nx build slider` to build the library.

### Running unit tests

Run `nx test slider` to execute the unit tests via [Vitest](https://vitest.dev).

### Linting

Run `nx lint slider` to run [ESLint](https://eslint.org/) on the package.

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
