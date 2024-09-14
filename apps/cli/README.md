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

<h3 align="center">💻 Visit <a href="https://stormsoftware.com" target="_blank">stormsoftware.com</a> to stay up to date with this developer</h3><br />

[![Version](https://img.shields.io/badge/version-0.6.1-1fb2a6.svg?style=for-the-badge&color=1fb2a6)](https://prettier.io/)&nbsp;[![Nx](https://img.shields.io/badge/Nx-17.0.2-lightgrey?style=for-the-badge&logo=nx&logoWidth=20&&color=1fb2a6)](http://nx.dev/)&nbsp;[![NextJs](https://img.shields.io/badge/Next.js-14.0.2-lightgrey?style=for-the-badge&logo=nextdotjs&logoWidth=20&color=1fb2a6)](https://nextjs.org/)&nbsp;[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge&logo=commitlint&color=1fb2a6)](http://commitizen.github.io/cz-cli/)&nbsp;![Semantic-Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge&color=1fb2a6)&nbsp;[![documented with docusaurus](https://img.shields.io/badge/documented_with-docusaurus-success.svg?style=for-the-badge&logo=readthedocs&color=1fb2a6)](https://docusaurus.io/)&nbsp;![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/storm-software/cyclone-ui/cr.yml?style=for-the-badge&logo=github-actions&color=1fb2a6)

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

> [!IMPORTANT] 
> This repository, and the apps, libraries, and tools contained within, is still in it's initial development phase. As a result, bugs and issues are expected with it's usage. When the main development phase completes, a proper release will be performed, the packages will be availible through NPM (and other distributions), and this message will be removed. However, in the meantime, please feel free to report any issues you may come across.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<br />

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- END header -->

# cli

<!-- START doctoc -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

  - [Installing](#installing)
- [oclif-hello-world](#oclif-hello-world)
- [Usage](#usage)
- [Commands](#commands)
  - [`cyclone-ui autocomplete [SHELL]`](#cyclone-ui-autocomplete-shell)
  - [`cyclone-ui build PROJECTROOT`](#cyclone-ui-build-projectroot)
  - [`cyclone-ui help [COMMAND]`](#cyclone-ui-help-command)
  - [`cyclone-ui plugins`](#cyclone-ui-plugins)
  - [`cyclone-ui plugins add PLUGIN`](#cyclone-ui-plugins-add-plugin)
  - [`cyclone-ui plugins:inspect PLUGIN...`](#cyclone-ui-pluginsinspect-plugin)
  - [`cyclone-ui plugins install PLUGIN`](#cyclone-ui-plugins-install-plugin)
  - [`cyclone-ui plugins link PATH`](#cyclone-ui-plugins-link-path)
  - [`cyclone-ui plugins remove [PLUGIN]`](#cyclone-ui-plugins-remove-plugin)
  - [`cyclone-ui plugins reset`](#cyclone-ui-plugins-reset)
  - [`cyclone-ui plugins uninstall [PLUGIN]`](#cyclone-ui-plugins-uninstall-plugin)
  - [`cyclone-ui plugins unlink [PLUGIN]`](#cyclone-ui-plugins-unlink-plugin)
  - [`cyclone-ui plugins update`](#cyclone-ui-plugins-update)
  - [`cyclone-ui registry get [COMPONENT]`](#cyclone-ui-registry-get-component)
  - [`cyclone-ui search`](#cyclone-ui-search)
  - [`cyclone-ui theme clean NAME`](#cyclone-ui-theme-clean-name)
  - [`cyclone-ui theme init NAME`](#cyclone-ui-theme-init-name)
  - [`cyclone-ui update [CHANNEL]`](#cyclone-ui-update-channel)
  - [`cyclone-ui version`](#cyclone-ui-version)
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
pnpm add -D @cyclone-ui/cli
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/cli
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/cli
```

</details>

# oclif-hello-world

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->

- [cli](#cli)
- [oclif-hello-world](#oclif-hello-world)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @cyclone-ui/cli
$ cyclone-ui COMMAND
running command...
$ cyclone-ui (--version|-v)
@cyclone-ui/cli/0.6.1 win32-x64 node-v20.11.0
$ cyclone-ui --help [COMMAND]
USAGE
  $ cyclone-ui COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`cyclone-ui autocomplete [SHELL]`](#cyclone-ui-autocomplete-shell)
- [`cyclone-ui build PROJECTROOT`](#cyclone-ui-build-projectroot)
- [`cyclone-ui help [COMMAND]`](#cyclone-ui-help-command)
- [`cyclone-ui plugins`](#cyclone-ui-plugins)
- [`cyclone-ui plugins add PLUGIN`](#cyclone-ui-plugins-add-plugin)
- [`cyclone-ui plugins:inspect PLUGIN...`](#cyclone-ui-pluginsinspect-plugin)
- [`cyclone-ui plugins install PLUGIN`](#cyclone-ui-plugins-install-plugin)
- [`cyclone-ui plugins link PATH`](#cyclone-ui-plugins-link-path)
- [`cyclone-ui plugins remove [PLUGIN]`](#cyclone-ui-plugins-remove-plugin)
- [`cyclone-ui plugins reset`](#cyclone-ui-plugins-reset)
- [`cyclone-ui plugins uninstall [PLUGIN]`](#cyclone-ui-plugins-uninstall-plugin)
- [`cyclone-ui plugins unlink [PLUGIN]`](#cyclone-ui-plugins-unlink-plugin)
- [`cyclone-ui plugins update`](#cyclone-ui-plugins-update)
- [`cyclone-ui registry get [COMPONENT]`](#cyclone-ui-registry-get-component)
- [`cyclone-ui search`](#cyclone-ui-search)
- [`cyclone-ui theme clean NAME`](#cyclone-ui-theme-clean-name)
- [`cyclone-ui theme init NAME`](#cyclone-ui-theme-init-name)
- [`cyclone-ui update [CHANNEL]`](#cyclone-ui-update-channel)
- [`cyclone-ui version`](#cyclone-ui-version)

## `cyclone-ui autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ cyclone-ui autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ cyclone-ui autocomplete

  $ cyclone-ui autocomplete bash

  $ cyclone-ui autocomplete zsh

  $ cyclone-ui autocomplete powershell

  $ cyclone-ui autocomplete --refresh-cache
```

_See code:
[@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.0.13/src/commands/autocomplete/index.ts)_

## `cyclone-ui build PROJECTROOT`

Build a cyclone-ui package

```
USAGE
  $ cyclone-ui build PROJECTROOT... [-o <value>] [-t <value>] [-b] [-c] [-s]

ARGUMENTS
  PROJECTROOT...  The path of the project to build relative to the workspace root

FLAGS
  -b, --bundle                  Should Bundle
  -c, --clean                   Clean Output
  -o, --outputPath=<directory>  Output directory
  -s, --skip                    Skip confirmation prompts
  -t, --tsconfig=<file>         tsconfig.json File

DESCRIPTION
  Build a cyclone-ui package

  Build the theme configuration for the client application based on the colors provided in the Storm configuration file

EXAMPLES
  Build the themes using the output path from the Storm configuration file

    $ cyclone-ui build build

  Build the themes, and write the output to ./path/to/output

    $ cyclone-ui build build --output=./path/to/output

  Build the themes, write the output to ./path/to/output, and skip confirmation prompts

    $ cyclone-ui build build --output=./path/to/output --skip

FLAG DESCRIPTIONS
  -b, --bundle  Should Bundle

    Should the build process bundle the output files

  -c, --clean  Clean Output

    Should the output directory be cleaned before building

  -o, --outputPath=<directory>  Output directory

    The location to output the design token file

  -s, --skip  Skip confirmation prompts

    Skip all confirmation prompts and use the default values

  -t, --tsconfig=<file>  tsconfig.json File

    The path to the tsconfig.json file for the project
```

_See code:
[dist/commands/build.js](https://github.com/storm-software/cyclone-ui/blob/v0.6.1/dist/commands/build.js)_

## `cyclone-ui help [COMMAND]`

Display help for cyclone-ui.

```
USAGE
  $ cyclone-ui help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cyclone-ui.
```

_See code:
[@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.20/src/commands/help.ts)_

## `cyclone-ui plugins`

List installed plugins.

```
USAGE
  $ cyclone-ui plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cyclone-ui plugins
```

_See code:
[@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/index.ts)_

## `cyclone-ui plugins add PLUGIN`

Installs a plugin into cyclone-ui.

```
USAGE
  $ cyclone-ui plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into cyclone-ui.

  Uses bundled npm executable to install plugins into C:\Users\patjo\AppData\Local\cyclone-ui

  Installation of a user-installed plugin will override a core plugin.

  Use the CYCLONE_UI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CYCLONE_UI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cyclone-ui plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cyclone-ui plugins add myplugin

  Install a plugin from a github url.

    $ cyclone-ui plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cyclone-ui plugins add someuser/someplugin
```

## `cyclone-ui plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cyclone-ui plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cyclone-ui plugins inspect myplugin
```

_See code:
[@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/inspect.ts)_

## `cyclone-ui plugins install PLUGIN`

Installs a plugin into cyclone-ui.

```
USAGE
  $ cyclone-ui plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into cyclone-ui.

  Uses bundled npm executable to install plugins into C:\Users\patjo\AppData\Local\cyclone-ui

  Installation of a user-installed plugin will override a core plugin.

  Use the CYCLONE_UI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CYCLONE_UI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cyclone-ui plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cyclone-ui plugins install myplugin

  Install a plugin from a github url.

    $ cyclone-ui plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cyclone-ui plugins install someuser/someplugin
```

_See code:
[@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/install.ts)_

## `cyclone-ui plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ cyclone-ui plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command will
  override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cyclone-ui plugins link myplugin
```

_See code:
[@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/link.ts)_

## `cyclone-ui plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cyclone-ui plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cyclone-ui plugins unlink
  $ cyclone-ui plugins remove

EXAMPLES
  $ cyclone-ui plugins remove myplugin
```

## `cyclone-ui plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ cyclone-ui plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code:
[@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/reset.ts)_

## `cyclone-ui plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cyclone-ui plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cyclone-ui plugins unlink
  $ cyclone-ui plugins remove

EXAMPLES
  $ cyclone-ui plugins uninstall myplugin
```

_See code:
[@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/uninstall.ts)_

## `cyclone-ui plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cyclone-ui plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cyclone-ui plugins unlink
  $ cyclone-ui plugins remove

EXAMPLES
  $ cyclone-ui plugins unlink myplugin
```

## `cyclone-ui plugins update`

Update installed plugins.

```
USAGE
  $ cyclone-ui plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code:
[@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/update.ts)_

## `cyclone-ui registry get [COMPONENT]`

Get design component files from registry

```
USAGE
  $ cyclone-ui registry get [COMPONENT...] [-l <value>] [-s] [-r <value>]

ARGUMENTS
  COMPONENT...  The name of the component to add to the local components library package

FLAGS
  -l, --library=<directory>  Components library directory
  -r, --registry=<url>       Registry URL
  -s, --[no-]skip            Skip confirmation prompts

DESCRIPTION
  Get design component files from registry

  A command to add a copy of a design component from the remote Cyclone UI registry to the local components library package

EXAMPLES
  Initialize the themes using the output path from the Storm configuration file

    $ cyclone-ui registry get init

  Initialize the themes, and write the output to ./path/to/output

    $ cyclone-ui registry get init --output=./path/to/output

  Initialize the themes, write the output to ./path/to/output, and skip confirmation prompts

    $ cyclone-ui registry get init --output=./path/to/output --skip

FLAG DESCRIPTIONS
  -l, --library=<directory>  Components library directory

    The location of the local components library package directory

  -r, --registry=<url>  Registry URL

    The URL of the Cyclone UI remote registry to use for the components library package

  -s, --[no-]skip  Skip confirmation prompts

    Skip all confirmation prompts and use the default values
```

_See code:
[dist/commands/registry/get.js](https://github.com/storm-software/cyclone-ui/blob/v0.6.1/dist/commands/registry/get.js)_

## `cyclone-ui search`

Search for a command.

```
USAGE
  $ cyclone-ui search

DESCRIPTION
  Search for a command.

  Once you select a command, hit enter and it will show the help for that command.
```

_See code:
[@oclif/plugin-search](https://github.com/oclif/plugin-search/blob/v1.0.21/src/commands/search.ts)_

## `cyclone-ui theme clean NAME`

Clean the workspace's theme configuration

```
USAGE
  $ cyclone-ui theme clean NAME... [-o <value>] [-s]

ARGUMENTS
  NAME...  [default: default] The name of the specific theme to assign the design token to

FLAGS
  -o, --output=<directory>  [default: .storm] Output directory
  -s, --skip                Skip confirmation prompts

DESCRIPTION
  Clean the workspace's theme configuration

  Clean the theme configuration for the client application based on the colors provided in the Storm configuration file

EXAMPLES
  Clean the themes using the output path from the Storm configuration file

    $ cyclone-ui theme clean clean

  Clean the themes, and write the output to ./path/to/output

    $ cyclone-ui theme clean clean --output=./path/to/output

  Clean the themes, write the output to ./path/to/output, and skip confirmation prompts

    $ cyclone-ui theme clean clean --output=./path/to/output --skip

FLAG DESCRIPTIONS
  -o, --output=<directory>  Output directory

    The location to output the design token file

  -s, --skip  Skip confirmation prompts

    Skip all confirmation prompts and use the default values
```

_See code:
[dist/commands/theme/clean.js](https://github.com/storm-software/cyclone-ui/blob/v0.6.1/dist/commands/theme/clean.js)_

## `cyclone-ui theme init NAME`

Initialize a theme configuration

```
USAGE
  $ cyclone-ui theme init NAME... [-o <value>] [-s] [-c] [-j]

ARGUMENTS
  NAME...  [default: brand] The name of the specific theme to assign the design token to

FLAGS
  -c, --[no-]clean              Clean output directory
  -j, --[no-]json               Generate JSON file
  -o, --outputPath=<directory>  [default: .storm/themes] Output directory
  -s, --[no-]skip               Skip confirmation prompts

DESCRIPTION
  Initialize a theme configuration

  Initialize the theme configuration for the client application based on the colors provided in the Storm configuration file

EXAMPLES
  Initialize the themes using the output path from the Storm configuration file

    $ cyclone-ui theme init init

  Initialize the themes, and write the output to ./path/to/output

    $ cyclone-ui theme init init --output=./path/to/output

  Initialize the themes, write the output to ./path/to/output, and skip confirmation prompts

    $ cyclone-ui theme init init --output=./path/to/output --skip

FLAG DESCRIPTIONS
  -c, --[no-]clean  Clean output directory

    Remove all theme files from the output directory before generating new themes

  -j, --[no-]json  Generate JSON file

    Should the design token file be generated as a JSON file

  -o, --outputPath=<directory>  Output directory

    The location to output the design token file

  -s, --[no-]skip  Skip confirmation prompts

    Skip all confirmation prompts and use the default values
```

_See code:
[dist/commands/theme/init.js](https://github.com/storm-software/cyclone-ui/blob/v0.6.1/dist/commands/theme/init.js)_

## `cyclone-ui update [CHANNEL]`

update the cyclone-ui CLI

```
USAGE
  $ cyclone-ui update [CHANNEL] [-a] [--force] [-i | -v <value>]

FLAGS
  -a, --available        See available versions.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
      --force            Force a re-download of the requested version.

DESCRIPTION
  update the cyclone-ui CLI

EXAMPLES
  Update to the stable channel:

    $ cyclone-ui update stable

  Update to a specific version:

    $ cyclone-ui update --version 1.0.0

  Interactively select version:

    $ cyclone-ui update --interactive

  See available versions:

    $ cyclone-ui update --available
```

_See code:
[@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v4.2.4/src/commands/update.ts)_

## `cyclone-ui version`

```
USAGE
  $ cyclone-ui version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code:
[@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.0.16/src/commands/version.ts)_

<!-- commandsstop -->

## Reduced Package Size

This project uses [tsup](https://tsup.egoist.dev/) to package the source code
due to its ability to remove unused code and ship smaller javascript files
thanks to code splitting. This helps to greatly reduce the size of the package
and to make it easier to use in other projects.

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual
commands are available to assist in development.

### Building

Run `nx build cli` to build the library.

### Running unit tests

Run `nx test cli` to execute the unit tests via [Jest](https://jestjs.io).

### Linting

Run `nx lint cli` to run [ESLint](https://eslint.org/) on the package.

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
<h3 align="center">💻 Visit <a href="https://stormsoftware.com" target="_blank">stormsoftware.com</a> to stay up to date with this developer</h3>

<br />
<div align="right">[ <a href="#table-of-contents">Back to top ▲</a> ]</div>
<br />


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- END footer -->
