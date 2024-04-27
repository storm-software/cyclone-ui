import {Args, Command, Flags} from '@oclif/core'
import {loadStormConfig} from '@storm-software/config-tools'
import {ColorThemeType} from '../../libs/types.js'
import {getThemeFilePath, getThemePath, writeMultiTheme, writeSingleTheme} from '../../libs/themes.js'
import {isFunction} from '../../libs/is-function.js'
import {cancel, confirm, intro, isCancel, outro, spinner, text} from '@clack/prompts'
import fs from 'fs-extra'

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
    outputPath: Flags.directory({
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
    clean: Flags.boolean({
      char: 'c',
      summary: 'Clean output directory',
      description: 'Remove all theme files from the output directory before generating new themes',
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

    this.log(
      `Using the following args: \n${Object.keys(args)
        .map((key) => ` - ${key}=${isFunction(args[key]) ? '<function>' : JSON.stringify(args[key])}`)
        .join('\n')}\n`,
    )
    this.log(
      `Using the following flags: \n${Object.keys(flags)
        .map((key) => ` - ${key}=${isFunction(flags[key]) ? '<function>' : JSON.stringify(flags[key])}`)
        .join('\n')}\n\n`,
    )

    intro('Cyclone UI - Initialize Themes')

    const s1 = spinner()
    s1.start('Loading Storm configuration')
    const config = await loadStormConfig()
    s1.stop('Loaded Storm configuration')

    let output = flags.outputPath
    if (!output) {
      output = config.outputDirectory
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
            defaultValue: './.storm',
          })
          if (isCancel(promptInput)) {
            cancel('Operation cancelled.')
            process.exit(0)
          }
          output = promptInput as string
        }
      }

      if (!output) {
        this.error(`The output was not provided in the CLI and does not exist in the Storm configuration file`)
      }
    }

    try {
      if (flags.clean) {
        const s2 = spinner()
        s2.start('Cleaning themes from output directory')

        await fs.remove(getThemePath(config.workspaceRoot, output))

        s2.stop('Cleaned themes from output directory')
      } else {
        if (await fs.exists(getThemeFilePath(config.workspaceRoot, output, ColorThemeType.LIGHT, args.name))) {
          this.error(
            `The theme file ${getThemeFilePath(config.workspaceRoot, output, ColorThemeType.LIGHT, args.name)} already exist! Please run "cyclone theme reset" then re-run "cyclone theme init"`,
          )
        }

        if (await fs.exists(getThemeFilePath(config.workspaceRoot, output, ColorThemeType.DARK, args.name))) {
          this.error(
            `The theme file ${getThemeFilePath(config.workspaceRoot, output, ColorThemeType.DARK, args.name)} already exist! Please run "cyclone theme reset" then re-run "cyclone theme init"`,
          )
        }
      }
    } catch {}

    const s3 = spinner()
    s3.start('Writing themes to output directory')

    if (config.colors?.base && typeof config.colors?.base === 'object') {
      for (const key of Object.keys(config.colors)) {
        await writeMultiTheme(config.colors[key], config.workspaceRoot, output, key === 'base' ? args.name : key)
      }
    } else if (config.colors?.light && typeof config.colors?.light === 'object') {
      await writeMultiTheme(config.colors, config.workspaceRoot, output, args.name)
    } else {
      await writeSingleTheme(config.colors, config.workspaceRoot, output, args.name)
    }

    s3.stop('Wrote themes to output directory')
    outro('Theme configurations were successfully generated in the output directory')
  }

  public override async catch(error: Error): Promise<void> {
    this.error(
      error?.message
        ? `\nMessage: ${error.message}\n\n${error.stack ? 'Stacktrace: \n' : ''}${error.stack ? error.stack : ''}\n`
        : error || 'An error occurred',
    )
  }

  public override async init(): Promise<void> {
    this.log('Initializing Cyclone UI Theme Generator...')
  }

  public override async finally(): Promise<void> {
    this.log('Exiting Cyclone UI Theme Generator...')
  }
}
