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
$ cyclone COMMAND
running command...
$ cyclone (--version|-v)
@cyclone-ui/cli/0.0.1 win32-x64 node-v20.11.0
$ cyclone --help [COMMAND]
USAGE
  $ cyclone COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`cyclone autocomplete [SHELL]`](#cyclone-autocomplete-shell)
* [`cyclone help [COMMAND]`](#cyclone-help-command)
* [`cyclone plugins`](#cyclone-plugins)
* [`cyclone plugins add PLUGIN`](#cyclone-plugins-add-plugin)
* [`cyclone plugins:inspect PLUGIN...`](#cyclone-pluginsinspect-plugin)
* [`cyclone plugins install PLUGIN`](#cyclone-plugins-install-plugin)
* [`cyclone plugins link PATH`](#cyclone-plugins-link-path)
* [`cyclone plugins remove [PLUGIN]`](#cyclone-plugins-remove-plugin)
* [`cyclone plugins reset`](#cyclone-plugins-reset)
* [`cyclone plugins uninstall [PLUGIN]`](#cyclone-plugins-uninstall-plugin)
* [`cyclone plugins unlink [PLUGIN]`](#cyclone-plugins-unlink-plugin)
* [`cyclone plugins update`](#cyclone-plugins-update)
* [`cyclone search`](#cyclone-search)
* [`cyclone theme clean NAME`](#cyclone-theme-clean-name)
* [`cyclone theme init NAME`](#cyclone-theme-init-name)
* [`cyclone theme set NAME`](#cyclone-theme-set-name)
* [`cyclone update [CHANNEL]`](#cyclone-update-channel)
* [`cyclone version`](#cyclone-version)

## `cyclone autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ cyclone autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ cyclone autocomplete

  $ cyclone autocomplete bash

  $ cyclone autocomplete zsh

  $ cyclone autocomplete powershell

  $ cyclone autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.0.13/src/commands/autocomplete/index.ts)_

## `cyclone help [COMMAND]`

Display help for cyclone.

```
USAGE
  $ cyclone help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cyclone.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.20/src/commands/help.ts)_

## `cyclone plugins`

List installed plugins.

```
USAGE
  $ cyclone plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cyclone plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/index.ts)_

## `cyclone plugins add PLUGIN`

Installs a plugin into cyclone.

```
USAGE
  $ cyclone plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into cyclone.

  Uses bundled npm executable to install plugins into C:\Users\patjo\AppData\Local\cyclone

  Installation of a user-installed plugin will override a core plugin.

  Use the CYCLONE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CYCLONE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cyclone plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cyclone plugins add myplugin

  Install a plugin from a github url.

    $ cyclone plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cyclone plugins add someuser/someplugin
```

## `cyclone plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cyclone plugins inspect PLUGIN...

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
  $ cyclone plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/inspect.ts)_

## `cyclone plugins install PLUGIN`

Installs a plugin into cyclone.

```
USAGE
  $ cyclone plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into cyclone.

  Uses bundled npm executable to install plugins into C:\Users\patjo\AppData\Local\cyclone

  Installation of a user-installed plugin will override a core plugin.

  Use the CYCLONE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CYCLONE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cyclone plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cyclone plugins install myplugin

  Install a plugin from a github url.

    $ cyclone plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cyclone plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/install.ts)_

## `cyclone plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ cyclone plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command will override the
  user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cyclone plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/link.ts)_

## `cyclone plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cyclone plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cyclone plugins unlink
  $ cyclone plugins remove

EXAMPLES
  $ cyclone plugins remove myplugin
```

## `cyclone plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ cyclone plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/reset.ts)_

## `cyclone plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cyclone plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cyclone plugins unlink
  $ cyclone plugins remove

EXAMPLES
  $ cyclone plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/uninstall.ts)_

## `cyclone plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cyclone plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cyclone plugins unlink
  $ cyclone plugins remove

EXAMPLES
  $ cyclone plugins unlink myplugin
```

## `cyclone plugins update`

Update installed plugins.

```
USAGE
  $ cyclone plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.7/src/commands/plugins/update.ts)_

## `cyclone search`

Search for a command.

```
USAGE
  $ cyclone search

DESCRIPTION
  Search for a command.

  Once you select a command, hit enter and it will show the help for that command.
```

_See code: [@oclif/plugin-search](https://github.com/oclif/plugin-search/blob/v1.0.21/src/commands/search.ts)_

## `cyclone theme clean NAME`

Cyclone UI - Clean Themes

```
USAGE
  $ cyclone theme clean NAME... [-o <value>] [-s]

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

    $ cyclone theme clean clean

  Clean the themes, and write the output to ./path/to/output

    $ cyclone theme clean clean --output=./path/to/output

  Clean the themes, write the output to ./path/to/output, and skip confirmation prompts

    $ cyclone theme clean clean --output=./path/to/output --skip

FLAG DESCRIPTIONS
  -o, --output=<directory>  Output directory

    The location to output the design token file

  -s, --skip  Skip confirmation prompts

    Skip all confirmation prompts and use the default values
```

_See code: [dist/commands/theme/clean.js](https://github.com/storm-software/cyclone-ui/blob/v0.0.1/dist/commands/theme/clean.js)_

## `cyclone theme init NAME`

Cyclone UI - Initialize Themes

```
USAGE
  $ cyclone theme init NAME... [-o <value>] [-s] [-c]

ARGUMENTS
  NAME...  [default: default] The name of the specific theme to assign the design token to

FLAGS
  -c, --clean               Clean output directory
  -o, --output=<directory>  [default: .storm] Output directory
  -s, --skip                Skip confirmation prompts

DESCRIPTION
  Cyclone UI - Initialize Themes

  Initialize the theme configuration for the client application based on the colors provided in the Storm configuration file

EXAMPLES
  Initialize the themes using the output path from the Storm configuration file

    $ cyclone theme init init

  Initialize the themes, and write the output to ./path/to/output

    $ cyclone theme init init --output=./path/to/output

  Initialize the themes, write the output to ./path/to/output, and skip confirmation prompts

    $ cyclone theme init init --output=./path/to/output --skip

FLAG DESCRIPTIONS
  -c, --clean  Clean output directory

    Remove all theme files from the output directory before generating new themes

  -o, --output=<directory>  Output directory

    The location to output the design token file

  -s, --skip  Skip confirmation prompts

    Skip all confirmation prompts and use the default values
```

_See code: [dist/commands/theme/init.js](https://github.com/storm-software/cyclone-ui/blob/v0.0.1/dist/commands/theme/init.js)_

## `cyclone theme set NAME`

Cyclone UI - Initialize Themes

```
USAGE
  $ cyclone theme set NAME... -p base|primary|secondary|tertiary|accent|success|info|warning|error [-o
    <value>] [-t light|dark|both] [-c <value>]

ARGUMENTS
  NAME...  [default: default] The name of the specific theme to assign the design token to

FLAGS
  -c, --color=<color>       Color
  -o, --output=<directory>  [default: .storm] Output directory
  -p, --palette=<palette>   (required) [default: primary] Color Palette Type
  -t, --type=<type>         [default: both] Theme Type

DESCRIPTION
  Cyclone UI - Initialize Themes

  Generate themes for the client application based on the colors provided by the user

EXAMPLES
  Set default theme's primary color to red

    $ cyclone theme set set --color red --palette primary

  Set dark default theme's secondary color to blue

    $ cyclone theme set set --color blue --palette secondary --type dark

  Set light default theme's tertiary color to green and write the output to /path/to/output

    $ cyclone theme set set --color green --palette tertiary --type light --output /path/to/output

  Set dark custom theme's accent color to black and write the output to /path/to/output

    $ cyclone theme set set custom --color black --palette accent --type dark --output /path/to/output

FLAG DESCRIPTIONS
  -c, --color=<color>  Color

    The color to use for the design token

  -o, --output=<directory>  Output directory

    The location to output the design token file

  -p, --palette=<palette>  Color Palette Type

    The palette type of the color (primary, secondary, tertiary, etc.)

  -t, --type=<type>  Theme Type

    The name of the specific theme to assign the design token to
```

_See code: [dist/commands/theme/set.js](https://github.com/storm-software/cyclone-ui/blob/v0.0.1/dist/commands/theme/set.js)_

## `cyclone update [CHANNEL]`

update the cyclone CLI

```
USAGE
  $ cyclone update [CHANNEL] [-a] [--force] [-i | -v <value>]

FLAGS
  -a, --available        See available versions.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
      --force            Force a re-download of the requested version.

DESCRIPTION
  update the cyclone CLI

EXAMPLES
  Update to the stable channel:

    $ cyclone update stable

  Update to a specific version:

    $ cyclone update --version 1.0.0

  Interactively select version:

    $ cyclone update --interactive

  See available versions:

    $ cyclone update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v4.2.4/src/commands/update.ts)_

## `cyclone version`

```
USAGE
  $ cyclone version [--json] [--verbose]

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
