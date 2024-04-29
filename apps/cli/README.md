<!-- START header -->
<!-- END header -->

# cli

<!-- START doctoc -->
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
* [cli](#cli)
* [oclif-hello-world](#oclif-hello-world)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @cyclone-ui/cli
$ cyclone-ui COMMAND
running command...
$ cyclone-ui (--version|-v)
@cyclone-ui/cli/0.0.1 win32-x64 node-v20.11.0
$ cyclone-ui --help [COMMAND]
USAGE
  $ cyclone-ui COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`cyclone-ui autocomplete [SHELL]`](#cyclone-ui-autocomplete-shell)
* [`cyclone-ui build PROJECTROOT`](#cyclone-ui-build-projectroot)
* [`cyclone-ui help [COMMAND]`](#cyclone-ui-help-command)
* [`cyclone-ui plugins`](#cyclone-ui-plugins)
* [`cyclone-ui plugins add PLUGIN`](#cyclone-ui-plugins-add-plugin)
* [`cyclone-ui plugins:inspect PLUGIN...`](#cyclone-ui-pluginsinspect-plugin)
* [`cyclone-ui plugins install PLUGIN`](#cyclone-ui-plugins-install-plugin)
* [`cyclone-ui plugins link PATH`](#cyclone-ui-plugins-link-path)
* [`cyclone-ui plugins remove [PLUGIN]`](#cyclone-ui-plugins-remove-plugin)
* [`cyclone-ui plugins reset`](#cyclone-ui-plugins-reset)
* [`cyclone-ui plugins uninstall [PLUGIN]`](#cyclone-ui-plugins-uninstall-plugin)
* [`cyclone-ui plugins unlink [PLUGIN]`](#cyclone-ui-plugins-unlink-plugin)
* [`cyclone-ui plugins update`](#cyclone-ui-plugins-update)
* [`cyclone-ui search`](#cyclone-ui-search)
* [`cyclone-ui theme clean NAME`](#cyclone-ui-theme-clean-name)
* [`cyclone-ui theme init NAME`](#cyclone-ui-theme-init-name)
* [`cyclone-ui update [CHANNEL]`](#cyclone-ui-update-channel)
* [`cyclone-ui version`](#cyclone-ui-version)

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

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.0.13/src/commands/autocomplete/index.ts)_

## `cyclone-ui build PROJECTROOT`

Cyclone UI - Build

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
  Cyclone UI - Build

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

_See code: [dist/commands/build.js](https://github.com/storm-software/cyclone-ui/blob/v0.0.1/dist/commands/build.js)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.20/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/index.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/inspect.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/install.ts)_

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

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command
  will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cyclone-ui plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/link.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/reset.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/uninstall.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/update.ts)_

## `cyclone-ui search`

Search for a command.

```
USAGE
  $ cyclone-ui search

DESCRIPTION
  Search for a command.

  Once you select a command, hit enter and it will show the help for that command.
```

_See code: [@oclif/plugin-search](https://github.com/oclif/plugin-search/blob/v1.0.21/src/commands/search.ts)_

## `cyclone-ui theme clean NAME`

Cyclone UI - Clean Themes

```
USAGE
  $ cyclone-ui theme clean NAME... [-o <value>] [-s]

ARGUMENTS
  NAME...  [default: default] The name of the specific theme to assign the design token to

FLAGS
  -o, --output=<directory>  [default: .storm] Output directory
  -s, --skip                Skip confirmation prompts

DESCRIPTION
  Cyclone UI - Clean Themes

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

_See code: [dist/commands/theme/clean.js](https://github.com/storm-software/cyclone-ui/blob/v0.0.1/dist/commands/theme/clean.js)_

## `cyclone-ui theme init NAME`

Cyclone UI - Initialize Themes

```
USAGE
  $ cyclone-ui theme init NAME... [-o <value>] [-s] [-c] [-j]

ARGUMENTS
  NAME...  [default: default] The name of the specific theme to assign the design token to

FLAGS
  -c, --[no-]clean              Clean output directory
  -j, --[no-]json               Generate JSON file
  -o, --outputPath=<directory>  [default: .storm/themes] Output directory
  -s, --[no-]skip               Skip confirmation prompts

DESCRIPTION
  Cyclone UI - Initialize Themes

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

_See code: [dist/commands/theme/init.js](https://github.com/storm-software/cyclone-ui/blob/v0.0.1/dist/commands/theme/init.js)_

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

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v4.2.4/src/commands/update.ts)_

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

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.0.16/src/commands/version.ts)_
<!-- commandsstop -->

## Reduced Package Size

This project uses [tsup](https://tsup.egoist.dev/) to package the source code due to its ability to remove unused code and ship smaller javascript files thanks to code splitting. This helps to greatly reduce the size of the package and to make it easier to use in other projects.

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual commands are available to assist in development.

### Building

Run `nx build cli` to build the library.

### Running unit tests

Run `nx test cli` to execute the unit tests via [Jest](https://jestjs.io).

### Linting

Run `nx lint cli` to run [ESLint](https://eslint.org/) on the package.

<!-- START footer -->
<!-- END footer -->
