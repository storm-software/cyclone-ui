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

# Icons

Animated [Tamagui](https://tamagui.dev) icon components (React Native and web) for the [Material Line Icons](https://github.com/cyberalien/line-md) (line-md) collection. The package works like [`@tamagui/lucide-icons-2`](https://github.com/tamagui/tamagui/tree/main/code/packages/lucide-icons): each icon is a `react-native-svg` component wrapped with `themed` from `@tamagui/helpers-icon`, so it resolves theme colors and size tokens.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installing](#installing)
- [Usage](#usage)
  - [Animation](#animation)
- [Generating the icons](#generating-the-icons)
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

<!-- END doctoc -->

## Installing

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/icons
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/icons
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/icons
```

</details>

## Usage

```tsx
import { Bell, Heart } from "@cyclone-ui/icons";
// or import a single icon module directly
import { Loading } from "@cyclone-ui/icons/icons/Loading";

<Bell />
<Bell variant="loop" />
<Heart variant="filled" color="red" size={32} />
<Loading variant="loop" size="4xl" />
<Heart animated={false} />
```

Every icon accepts the same props as the `@tamagui/lucide-icons-2` icons (`size`, `color`, `style`, `disableTheme`, and the other `react-native-svg` props), plus:

| Prop       | Type                                                         | Default     | Description                                                                                                                                                |
| ---------- | ------------------------------------------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`  | `"regular" \| "bold" \| "loop" \| "filled" \| "filled-loop"` | `"regular"` | The style to render. `bold` keeps the original 2px line-md strokes. An icon without the variant uses its closest one (same fill first, then same looping). |
| `animated` | `boolean`                                                    | `true`      | Play the drawing animation on mount and when the variant changes. `false` renders the final frame.                                                         |
| `mirrored` | `boolean`                                                    | `false`     | Flip the icon horizontally (for right-to-left UIs).                                                                                                        |

The `size` prop accepts a number of pixels or a token. A string is resolved against the theme's `size` tokens first (for example `size="4xl"`; a legacy `$` prefix is ignored). If it is not a `size` token, it is treated as a font size token so the icon matches text at that size. The `resolveIconSize` export applies the same resolution.

`color` paints the icon's `currentColor` strokes and fills; `strokeWidth` has no effect. The `allIcons` export maps every component name to its component, and `createIcon` builds a custom icon with the same behavior.

### Animation

line-md icons are animated with SVG `<animate>` elements, which `react-native-svg` does not run. The generator turns each animation into data, and `createIcon` plays it with `requestAnimationFrame`, so icons animate the same way on web and React Native. `loop` and `filled-loop` variants keep animating while mounted. When the user prefers reduced motion (`AccessibilityInfo.isReduceMotionEnabled`), the final frame is shown and loops stay still.

## Custom SVG vectors

Custom SVG components live in `src/vectors/`, alongside the generated `src/icons/` folder. Import them from the vectors entry point or an individual component path:

```tsx
import { Check, StormLogoIcon } from "@cyclone-ui/icons/vectors"
import { BackgroundNoise } from "@cyclone-ui/icons/vectors/BackgroundNoise"
```

The package root also exposes the `vectors` namespace. Custom components keep their own props and animations; names such as `Check` and `AlertCircle` remain separate from the generated icons. Existing `@cyclone-ui/vectors` imports should use `@cyclone-ui/icons/vectors` instead.

## Themeable icons

`ThemeableIcon` applies size and color tokens to a child icon. `ThemedIcon` and `getIconByTheme` select a status icon for the current theme, or a lock when disabled.

```tsx
import { Lock, ThemeableIcon, ThemedIcon } from "@cyclone-ui/icons";
import type { ThemeableIconProps, ThemedIconProps } from "@cyclone-ui/icons";

<ThemeableIcon size="lg"><Lock /></ThemeableIcon>
<ThemedIcon theme="success" />
```

The same exports are available from `@cyclone-ui/icons/ThemeableIcon`. Replace existing `@cyclone-ui/themeable-icon` imports with `@cyclone-ui/icons`.

## Generating the icons

The files in `src/icons/`, plus `src/index.ts` and `src/all.ts`, are **generated**. Do not edit them by hand. The [Power Plant](https://github.com/storm-software/power-plant) generator in [`scripts/generate.ts`](./scripts/generate.ts) reads the animated SVGs from the [`line-md`](https://github.com/cyberalien/line-md) package and from [`assets/`](./assets), then writes, formats, and prunes the components. To regenerate after upgrading `line-md` or editing `assets/`, run:

```bash
pnpm --filter @cyclone-ui/icons generate
```

- Only the `regular`, `loop`, `filled`, and `filled-loop` variants are included; `twotone` and `-transition` icons are skipped.
- Strokes are scaled to 75% (2px lines render at 1.5px) so the icons sit closer to [Material Design Light](https://github.com/Templarian/MaterialDesignLight). Change `STROKE_SCALE` in the generator to adjust. Each `regular` file is also read unscaled as the `bold` variant, which matches the original line-md icons.
- `assets/` holds icons line-md does not have (for example `Lock`, `Clock`, `DotsHorizontal`, and the [Material Design Icons](https://pictogrammers.com/library/mdi/) shapes such as `Alarm`, `Robot`, `Qrcode`, and the `Language*` logos), drawn in the same style: 24×24 grid, 2px round strokes, and `stroke-dashoffset` draw-in animations. An asset with the same name as a line-md icon (`clipboard`, `rss`, `share`, and the mdi-shaped `github`, `facebook`, `linkedin`, `thumbs-up`, `thumbs-down`) replaces it, so it must also provide every variant it keeps (for example `github-loop.svg`). Name variant files `<name>-filled.svg`, `<name>-loop.svg`, and `<name>-filled-loop.svg`.

The line-md artwork is © Vjacheslav Trushkin and is licensed under the [MIT License](https://github.com/cyberalien/line-md/blob/main/license.txt).

## Reduced Package Size

This project uses [tsdown](https://tsdown.dev/) to package the source code due to its ability to remove unused code and ship smaller javascript files thanks to code splitting. This helps to greatly reduce the size of the package and to make it easier to use in other projects.

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual commands are available to assist in development.

### Building

Run `nx build icons` to build the library.

### Running unit tests

Run `nx test icons` to execute the unit tests via [Vitest](https://vitest.dev).

### Linting

Run `nx lint icons` to run [ESLint](https://eslint.org/) on the package.

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
