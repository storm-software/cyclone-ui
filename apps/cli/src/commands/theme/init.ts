import {Args, Command, Flags} from '@oclif/core'
import {loadStormConfig} from '@storm-software/config-tools'
import {ColorPaletteType, ColorThemeType} from '../../libs/types.js'
import {addPalette, getThemePath, initialTheme, setTheme} from '../../libs/themes.js'
import {join} from 'node:path'
import {cancel, confirm, intro, isCancel, outro, spinner, text} from '@clack/prompts'
import {exists} from 'fs-extra'

/**
 * A command to generate design tokens based on the colors provided by the user.
 */
export default class Init extends Command {
  public static override args = {
    name: Args.string({
      name: 'Theme Name',
      required: true,
      description: 'The name of the specific theme to assign the design token to',
      default: 'default',
      ignoreStdin: false,
      noCacheDefault: false,
    }),
  }

  public static override flags = {
    output: Flags.directory({
      char: 'o',
      summary: 'Output directory',
      description: 'The location to output the design token file',
      hidden: false,
      env: 'STORM_OUTPUT_DIRECTORY',
      default: '.storm',
      defaultHelp: 'The ".storm/themes" folder in the workspace\'s root directory',
      required: false,
      aliases: ['outDir', 'output-dir'],
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: '<directory>',
    }),
    skip: Flags.boolean({
      char: 's',
      summary: 'Skip confirmation prompts',
      description: 'Skip all confirmation prompts and use the default values',
      hidden: false,
      default: false,
      required: false,
      deprecateAliases: false,
      noCacheDefault: false,
    }),
  }

  public static override summary = 'Cyclone UI - Initialize Themes'
  public static override description =
    'Initialize the theme configuration for the client application based on the colors provided in the Storm configuration file'
  public static override strict = false
  public static override examples = [
    {
      description: 'Initialize the themes using the output path from the Storm configuration file',
      command: '<%= config.bin %> <%= command.id %> init',
    },
    {
      description: 'Initialize the themes, and write the output to ./path/to/output',
      command: '<%= config.bin %> <%= command.id %> init --output=./path/to/output',
    },
    {
      description: 'Initialize the themes, write the output to ./path/to/output, and skip confirmation prompts',
      command: '<%= config.bin %> <%= command.id %> init --output=./path/to/output --skip',
    },
  ]

  public override async run(): Promise<void> {
    const {args, flags} = await this.parse(Init)

    intro('Cyclone UI - Initialize Themes')

    let s = spinner()
    s.start('Loading Storm configuration')
    const config = await loadStormConfig()
    s.stop('Loaded Storm configuration')

    let output = flags.output
    if (!output) {
      output = join(config.outputDirectory, 'themes')
      if (!flags.skip) {
        const useConfigOutput = await confirm({
          message: `Should the output directory be set to ${output} (defaulted from ${config.configPath ? config.configPath : 'Storm configuration'} file)?`,
        })
        if (isCancel(useConfigOutput)) {
          cancel('Operation cancelled.')
          process.exit(0)
        }

        if (!useConfigOutput) {
          const promptInput = await text({
            message: 'Enter the themes output directory',
            defaultValue: './.storm/themes',
          })
          if (isCancel(promptInput)) {
            cancel('Operation cancelled.')
            process.exit(0)
          }
          output = promptInput
        }
      }

      if (!output) {
        this.error(`The output was not provided in the CLI and does not exist in the Storm configuration file`)
      }
    }

    if (await exists(getThemePath(config.workspaceRoot, output, ColorThemeType.LIGHT, args.name))) {
      this.error(
        `The theme file ${getThemePath(config.workspaceRoot, output, ColorThemeType.LIGHT, args.name)} already exist! Please run "cyclone theme reset" then re-run "cyclone theme init"`,
      )
    }

    if (await exists(getThemePath(config.workspaceRoot, output, ColorThemeType.DARK, args.name))) {
      this.error(
        `The theme file ${getThemePath(config.workspaceRoot, output, ColorThemeType.DARK, args.name)} already exist! Please run "cyclone theme reset" then re-run "cyclone theme init"`,
      )
    }

    s = spinner()
    s.start('Writing themes to output directory')

    let lightTheme = await initialTheme(config.colors, ColorThemeType.LIGHT)
    for (const type of Object.keys(config.colors)) {
      lightTheme = addPalette(lightTheme, config.colors[type], type as ColorPaletteType)
    }
    await setTheme(lightTheme, config.workspaceRoot, output, ColorThemeType.LIGHT, args.name)

    let darkTheme = await initialTheme(config.colors, ColorThemeType.DARK)
    for (const type of Object.keys(config.colors)) {
      darkTheme = addPalette(darkTheme, config.colors[type], type as ColorPaletteType)
    }
    await setTheme(darkTheme, config.workspaceRoot, output, ColorThemeType.DARK, args.name)

    s.start('Wrote themes to output directory')

    outro('Theme configurations were successfully generated in the output directory')

    this.exit()
  }

  public override async catch(error: Error): Promise<void> {
    this.error(error.message)
  }

  public override async init(): Promise<void> {
    this.log('Initializing Cyclone UI Theme Generator...')
  }

  public override async finally(): Promise<void> {
    this.log('Exiting Cyclone UI Theme Generator...')
  }
}
