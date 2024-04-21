import {Args, Command, Flags} from '@oclif/core'
import {loadStormConfig} from '@storm-software/config-tools'
import {execa} from 'execa'
import {isFunction} from '../libs/is-function.js'
import {cancel, confirm, intro, isCancel, outro, spinner, text} from '@clack/prompts'
import {exists, remove} from 'fs-extra'
import {join} from 'path'

/**
 * A command to generate design tokens based on the colors provided by the user.
 */
export default class Build extends Command {
  public static override args = {
    project: Args.string({
      name: 'Project Path',
      required: true,
      description: 'The path of the project to build relative to the workspace root',
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
    root: Flags.directory({
      char: 'r',
      summary: 'Workspace Root directory',
      description: 'The bottom most directory that contains the entire workspace',
      env: 'STORM_WORKSPACE_ROOT',
      hidden: false,
      required: false,
      aliases: ['root', 'workspaceRoot', 'workspace-root'],
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: '<directory>',
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

    let projectRoot = args.project
    let workspaceRoot = flags.root

    if (!workspaceRoot) {
      workspaceRoot = config.workspaceRoot
      if (!flags.skip) {
        const useConfigOutput = await confirm({
          message: `Should the Workspace Root directory be set to ${workspaceRoot} (defaulted from ${config.configPath ? config.configPath : 'Storm configuration'} file)?`,
        })
        if (isCancel(useConfigOutput)) {
          cancel('Operation cancelled.')
          process.exit(0)
        }

        if (!useConfigOutput) {
          const promptInput = await text({
            message: 'Enter the Workspace Root directory',
            defaultValue: join(config.workspaceRoot, '.storm'),
          })
          if (isCancel(promptInput)) {
            cancel('Operation cancelled.')
            process.exit(0)
          }
          workspaceRoot = promptInput
        }
      }

      if (!workspaceRoot) {
        workspaceRoot = process.cwd()
        if (!workspaceRoot) {
          this.error(
            `The  Workspace Root was not provided in the CLI and does not exist in the Storm configuration file`,
          )
        }
      }
    }

    let output = flags.output
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
            message: 'Enter the build output directory',
            defaultValue: join('dist', projectRoot),
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

    const s2 = spinner()
    s2.start('Cleaning the build output directory')

    if (await exists(join(config.workspaceRoot, output))) {
      await remove(join(config.workspaceRoot, output))
    }

    s2.start('Cleaned the build output directory')

    const s3 = spinner()
    s3.start('Running the build process')

    const buildArgs = [`--project-root ${projectRoot}`, `--workspace-root ${workspaceRoot}`, `--output ${output}`]
    if (flags.bundle) {
      buildArgs.push('--bundle')
    }
    if (flags.clean) {
      buildArgs.push('--clean')
    }

    await execa(process.env.CYCLONE_BUILD_CMD ? process.env.CYCLONE_BUILD_CMD : 'cyclone-ui-build', buildArgs)

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
