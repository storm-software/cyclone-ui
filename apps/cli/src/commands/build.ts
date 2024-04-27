import {Args, Command, Flags} from '@oclif/core'
import {loadStormConfig, run} from '@storm-software/config-tools'
import {isFunction} from '../libs/is-function.js'
import {cancel, confirm, intro, isCancel, outro, spinner, text} from '@clack/prompts'
import {exists, remove} from 'fs-extra'
import {join} from 'path'

/**
 * A command to generate design tokens based on the colors provided by the user.
 */
export default class Build extends Command {
  public static override args = {
    projectRoot: Args.directory({
      name: 'Project Path',
      required: true,
      description: 'The path of the project to build relative to the workspace root',
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
      required: false,
      aliases: ['output', 'outDir', 'output-dir'],
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: '<directory>',
    }),
    tsconfig: Flags.file({
      char: 't',
      summary: 'tsconfig.json File',
      description: 'The path to the tsconfig.json file for the project',
      hidden: false,
      required: false,
      aliases: ['tsconfig', 'ts-config'],
      defaultHelp: 'The `tsconfig.json` file in the project root directory',
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: '<file>',
    }),
    bundle: Flags.boolean({
      char: 'b',
      summary: 'Should Bundle',
      description: 'Should the build process bundle the output files',
      hidden: false,
      default: true,
      required: false,
      deprecateAliases: false,
      noCacheDefault: false,
    }),
    clean: Flags.boolean({
      char: 'c',
      summary: 'Clean Output',
      description: 'Should the output directory be cleaned before building',
      hidden: false,
      default: true,
      required: false,
      deprecateAliases: false,
      noCacheDefault: false,
    }),
    skip: Flags.boolean({
      char: 's',
      summary: 'Skip confirmation prompts',
      description: 'Skip all confirmation prompts and use the default values',
      hidden: false,
      default: false,
      required: false,
      aliases: ['is-cli', 'is-cli-mode'],
      deprecateAliases: false,
      noCacheDefault: false,
    }),
  }

  public static override summary = 'Cyclone UI - Build'
  public static override description =
    'Build the theme configuration for the client application based on the colors provided in the Storm configuration file'
  public static override strict = false
  public static override examples = [
    {
      description: 'Build the themes using the output path from the Storm configuration file',
      command: '<%= config.bin %> <%= command.id %> build',
    },
    {
      description: 'Build the themes, and write the output to ./path/to/output',
      command: '<%= config.bin %> <%= command.id %> build --output=./path/to/output',
    },
    {
      description: 'Build the themes, write the output to ./path/to/output, and skip confirmation prompts',
      command: '<%= config.bin %> <%= command.id %> build --output=./path/to/output --skip',
    },
  ]

  public override async run(): Promise<void> {
    const {args, flags} = await this.parse(Build)

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

    intro('Cyclone UI - Build')

    let s1 = spinner()
    s1.start('Loading Storm configuration')
    const config = await loadStormConfig()
    s1.stop('Loaded Storm configuration')

    let projectRoot = args.projectRoot
    let outputPath = flags.outputPath
    if (!outputPath) {
      outputPath = config.outputDirectory
      if (!flags.skip) {
        const useConfigOutput = await confirm({
          message: `Should the output directory be set to ${outputPath} (defaulted from ${config.configPath ? config.configPath : 'Storm configuration'} file)?`,
        })
        if (isCancel(useConfigOutput)) {
          cancel('Operation cancelled.')
          process.exit(0)
        }

        if (!useConfigOutput) {
          const promptInput = await text({
            message: 'Enter the build output directory',
            defaultValue: join('dist', projectRoot),
          })
          if (isCancel(promptInput)) {
            cancel('Operation cancelled.')
            process.exit(0)
          }
          outputPath = promptInput as string
        }
      }

      if (!outputPath) {
        this.error(`The output was not provided in the CLI and does not exist in the Storm configuration file`)
      }
    }

    const s2 = spinner()
    s2.start('Cleaning the build output directory')

    if (await exists(join(config.workspaceRoot, outputPath))) {
      await remove(join(config.workspaceRoot, outputPath))
    }

    s2.start('Cleaned the build output directory')

    const s3 = spinner()
    s3.start('Running the build process')

    const buildArgs = [`--project-root ${projectRoot}`, `--output-path ${outputPath}`, `--tsconfig ${flags.tsconfig}`]
    if (flags.bundle) {
      buildArgs.push('--bundle')
    }
    if (flags.clean) {
      buildArgs.push('--clean')
    }

    await run(
      `${process.env.CYCLONE_BUILD_CMD ? process.env.CYCLONE_BUILD_CMD : 'cyclone-ui-build'} tamagui `,
      buildArgs.join(' '),
    )

    s3.start('Completed the build process')

    outro('The build was successfully completed and distribution files were moved to the output directory')

    this.exit()
  }

  public override async catch(error: Error): Promise<void> {
    this.error(error.message)
  }

  public override async init(): Promise<void> {
    this.log('Cleaning Cyclone UI Themes...')
  }
}
