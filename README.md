<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://public.storm-cdn.com/cyclone-ui/media/banner-1280x640-dark.gif">
  <source media="(prefers-color-scheme: light)" srcset="https://public.storm-cdn.com/cyclone-ui/media/banner-1280x640-light.gif">
<img src="https://public.storm-cdn.com/cyclone-ui/media/banner-1280x640-dark.gif" width="100%" alt="Cyclone UI" />
</picture>
</div>
<br />

<div align="center">
<b>
<a href="https://stormsoftware.com" target="_blank">Website</a>  •
<a href="https://github.com/storm-software/cyclone-ui" target="_blank">GitHub</a>  •
<a href="https://discord.gg/MQ6YVzakM5">Discord</a>  •  <a href="https://stormstack.github.io/stormstack/" target="_blank">Docs</a>  •  <a href="https://stormsoftware.com/contact" target="_blank">Contact</a>  •
<a href="https://github.com/storm-software/stack/issues/new?assignees=&labels=bug&template=bug-report.yml&title=Bug Report%3A+">Report a Bug</a>
</b>
</div>
<br />

🌀 A repository containing [Tamagui](https://github.com/tamagui/tamagui) based design components used by Storm Software. Like [shadcn/ui](https://github.com/shadcn-ui/ui), the components are copied into other repositories via the Cyclone CLI.

<h3 align="center">💻 Visit <a href="https://stormsoftware.com" target="_blank">stormsoftware.com</a> to stay up to date with this developer</h3>
<br />

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge&logo=commitlint&color=1fb2a6)](http://commitizen.github.io/cz-cli/)&nbsp;![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge&color=1fb2a6)&nbsp;![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/storm-software/cyclone-ui/release.yml?style=for-the-badge&logo=github-actions&color=1fb2a6)

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

> [!IMPORTANT] 
> This repository, and the apps, libraries, and tools contained within, is still in it's initial development phase. As a result, bugs and issues are expected with it's usage. When the main development phase completes, a proper release will be performed, the packages will be available through NPM (and other distributions), and this message will be removed. However, in the meantime, please feel free to report any issues you may come across.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<div align="center">
<a href="https://github.com/storm-software/cyclone-ui" target="_blank">
<b>Be sure to ⭐ this repository on GitHub so you can keep up to date on any daily progress!</b>
</a>
</div>

<!-- START doctoc -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [Getting Started](#getting-started)
  - [Environment Configuration Help](#environment-configuration-help)
  - [Build](#build)
  - [Development Server](#development-server)
- [Environment Configuration Help](#environment-configuration-help-1)
  - [Plug-Ins](#plug-ins)
  - [Generate an Application](#generate-an-application)
  - [Generate a Library](#generate-a-library)
  - [Code Scaffolding](#code-scaffolding)
- [Testing](#testing)
  - [Running Unit Tests](#running-unit-tests)
  - [Running End-to-End Tests](#running-end-to-end-tests)
  - [Understand your workspace](#understand-your-workspace)
- [☁ Nx Cloud](#-nx-cloud)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Contributors ✨](#contributors-)

<!-- END doctoc -->

<br />

# Getting Started

Once the code is pulled locally, open a command prompt and run `pnpm install` in
the root repo directory (/cyclone-ui).

More information can be found in the
[Powerlines documentation](https://storm-software.github.io/cyclone-ui/docs/getting-started/installation).

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Environment Configuration Help

If you run into any issues while trying to run any of the above steps, please
reach out to Patrick Sullivan. See the [Support](#support) section for more
information.

## Build

Run `pnpm build` to build the project. The build artifacts will be stored in the
`dist/` directory. Use the `--prod` flag for a production build.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Development Server

Run `pnpm serve` for a dev server. Navigate to <http://localhost:4200/>. The app
will automatically reload if you change any of the source files.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# Environment Configuration Help

If you run into any issues while trying to run any of the above steps, please
reach out to Patrick Sullivan. See the [Support](#support) section for more
information.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Plug-Ins

Some of the plug-ins used by this repository are:

- [@nx/next](https://nx.dev/packages/next)
- [@nx/react](https://nx.dev/packages/react)
- [@nx/lint](https://nx.dev/linter/overview)
- [@nx/js](https://nx.dev/js/overview)
- [@nx/node](https://nodejs.org)
- [@nx/web](https://nx.dev/web/overview)
- [@nx/storybook](https://nx.dev/storybook/overview-react)
- [@nx/cypress](https://nx.dev/packages/cypress)
- [@nx/vitest](https://nx.dev/packages/vitest)
- And more...

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Generate an Application

Run `nx g @storm-software/workspace:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same
workspace.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Generate a Library

Run `nx g @storm-software/workspace:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported
from `@cyclone-ui/my-lib`.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Code Scaffolding

Run `nx g @nx/react:component my-component --project=cyclone-ui` to generate a new
component.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# Testing

Open System uses [Jest](https://jestjs.io/) for unit testing and
[Cypress](https://www.cypress.io/) for end-to-end testing.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Running Unit Tests

Run `pnpm test` to execute the unit tests via [Jest](https://jestjs.io).

Run `pnpm affected:test` to execute the unit tests affected by a change.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Running End-to-End Tests

Run `pnpm e2e` to execute the end-to-end tests via
[Cypress](https://www.cypress.io).

Run `pnpm affected:e2e` to execute the end-to-end tests affected by a change.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

## Understand your workspace

Run `pnpm graph` to see a diagram of the dependencies of the Open System
projects.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# ☁ Nx Cloud

Nx caches the output of any previously run command such as testing and building,
so it can replay the cached results instead of rerunning it. Nx Cloud allows you
to share the computation cache across everyone in your team and CI.

<div align="center">
<img src="https://pub-4661138852db4e5da99a6660fbf9b633.r2.dev/Nx Cloud - Dashboard.png" width="100%" alt="Nx Cloud - Dashboard" />
</div>

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# Roadmap

See the [open issues](https://github.com/storm-software/cyclone-ui/issues) for a
list of proposed features (and known issues).

- [Top Feature Requests](https://github.com/storm-software/cyclone-ui/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/storm-software/cyclone-ui/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/storm-software/cyclone-ui/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# Contributing

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
[markdownlint-cli](https://github.com/storm-software/cyclone-ui/markdownlint-cli) to
check for common markdown style inconsistency.

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# Support

Reach out to the maintainer at one of the following places:

- [Contact](https://stormsoftware.com/contact)
- [GitHub discussions](https://github.com/storm-software/cyclone-ui/discussions)
- <contact@stormsoftware.com>

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# License

This project is licensed under the **Apache License 2.0**. Feel free to edit and
distribute this template as you like. If you have any specific questions, please
reach out to the Storm Software development team.

See [LICENSE](LICENSE) for more information.

<br />

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fstorm-software%2Fcyclone-ui.svg?type=large&issueType=license)](https://app.fossa.io/projects/git%2Bgithub.com%2Fstorm-software%2Fcyclone-ui?ref=badge_large&issueType=license)

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

# Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.sullypat.com/"><img src="https://avatars.githubusercontent.com/u/99053093?v=4?s=100" width="100px;" alt="Patrick Sullivan"/><br /><sub><b>Patrick Sullivan</b></sub></a><br /><a href="#design-sullivanpj" title="Design">🎨</a> <a href="https://github.com/storm-software/cyclone-ui/commits?author=sullivanpj" title="Code">💻</a> <a href="#tool-sullivanpj" title="Tools">🔧</a> <a href="https://github.com/storm-software/cyclone-ui/commits?author=sullivanpj" title="Documentation">📖</a> <a href="https://github.com/storm-software/cyclone-ui/commits?author=sullivanpj" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tylerbenning.com/"><img src="https://avatars.githubusercontent.com/u/7265547?v=4?s=100" width="100px;" alt="Tyler Benning"/><br /><sub><b>Tyler Benning</b></sub></a><br /><a href="#design-tbenning" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stormsoftware.com"><img src="https://avatars.githubusercontent.com/u/149802440?v=4?s=100" width="100px;" alt="Stormie"/><br /><sub><b>Stormie</b></sub></a><br /><a href="#maintenance-stormie-bot" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />

---

<br />

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://public.storm-cdn.com/storm-software/banner-1280x320-dark.webp">
  <source media="(prefers-color-scheme: light)" srcset="https://public.storm-cdn.com/storm-software/banner-1280x320-light.webp">
<img src="https://public.storm-cdn.com/storm-software/banner-1280x320-dark.webp" width="100%" alt="Storm Software" />
</picture>
</div>
<br />

<div align="center">
<a href="https://stormsoftware.com" target="_blank">Website</a>  •  <a href="https://stormsoftware.com/contact" target="_blank">Contact</a>  •  <a href="https://linkedin.com/in/patrick-sullivan-865526b0" target="_blank">LinkedIn</a>  •  <a href="https://medium.com/@pat.joseph.sullivan" target="_blank">Medium</a>  •  <a href="https://github.com/storm-software" target="_blank">GitHub</a>  •  <a href="https://keybase.io/sullivanp" target="_blank">OpenPGP Key</a>
</div>

<div align="center">
<b>Fingerprint:</b> F47F 1853 BCAD DE9B 42C8  6316 9FDE EC95 47FE D106
</div>
<br />

Storm Software is an open source software development organization and creator
of Acidic, StormStack and StormCloud.

Our mission is to make software development more accessible. Our ideal future is
one where anyone can create software without years of prior development
experience serving as a barrier to entry. We hope to achieve this via LLMs,
Generative AI, and intuitive, high-level data modeling/programming languages.

Join us on [**Discord**](https://discord.gg/MQ6YVzakM5) to chat with the team, receive release notifications, ask questions, and get involved.

If this sounds interesting, and you would like to help us in creating the next generation of development tools, please reach out on our [**website**](https://stormsoftware.com/contact) or join our [**Slack**](https://join.slack.com/t/storm-software/shared_invite/zt-2gsmk04hs-i6yhK_r6urq0dkZYAwq2pA) channel! If you plan on publishing content that incorporates the Storm Software brand in anyway, please take a quick look at our [**brand guidelines**](https://github.com/storm-software/media-kit).

<br />

<div align="center"><a href="https://stormsoftware.com" target="_blank"><img src="https://public.storm-cdn.com/storm-software/icon-circle-fill-dark.png" alt="Storm Software" width="200px"/></a></div>
<br />
<div align="center"><a href="https://stormsoftware.com" target="_blank"><picture><source media="(prefers-color-scheme: dark)" srcset="https://public.storm-cdn.com/misc/text/visit-us-dark.png"><source media="(prefers-color-scheme: light)" srcset="https://public.storm-cdn.com/misc/text/visit-us-light.png"><img src="https://public.storm-cdn.com/misc/text/visit-us-dark.png" height="90px" alt="Visit us at stormsoftware.com" /></picture></a></div>

<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />
<br />
