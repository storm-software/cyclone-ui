import {Args, Command, Flags} from '@oclif/core'
import {loadStormConfig} from '@storm-software/config-tools'
import {ColorPaletteType, ColorThemeType} from '../../libs/types.js'
import {addPalette, getTheme, setTheme} from '../../libs/themes.js'
import {join} from 'node:path'

/**
 * A command to generate design tokens based on the colors provided by the user.
 */
export default class Set extends Command {
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
    type: Flags.directory({
      char: 't',
      summary: 'Theme Type',
      description: 'The name of the specific theme to assign the design token to',
      hidden: false,
      default: 'both',
      options: ['light', 'dark', 'both'],
      required: false,
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: '<type>',
    }),
    color: Flags.directory({
      char: 'c',
      summary: 'Color',
      description: 'The color to use for the design token',
      hidden: false,
      defaultHelp: 'The color defined in the Storm Defaulted theme',
      required: false,
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: '<color>',
    }),
    palette: Flags.string({
      char: 'p',
      summary: 'Color Palette Type',
      required: true,
      default: 'primary',
      description: 'The palette type of the color (primary, secondary, tertiary, etc.)',
      options: ['base', 'primary', 'secondary', 'tertiary', 'accent', 'success', 'info', 'warning', 'error'],
      deprecateAliases: false,
      noCacheDefault: false,
      helpValue: '<palette>',
    }),
    // light: Flags.directory({
    //   char: 'l',
    //   summary: 'Light Color',
    //   description: 'The light color to use for the design token',
    //   hidden: false,
    //   defaultHelp: 'The light color defined in the Storm Defaulted theme',
    //   required: false,
    //   deprecateAliases: false,
    //   noCacheDefault: false,
    //   helpValue: '<color>',
    // }),
    // dark: Flags.directory({
    //   char: 'd',
    //   summary: 'Dark Color',
    //   description: 'The dark color to use for the design token',
    //   hidden: false,
    //   defaultHelp: 'The dark color defined in the Storm Defaulted theme',
    //   required: false,
    //   deprecateAliases: false,
    //   noCacheDefault: false,
    //   helpValue: '<color>',
    // }),
  }

  public static override summary = 'Cyclone UI - Initialize Themes'
  public static override description =
    'Generate themes for the client application based on the colors provided by the user'
  public static override strict = false
  public static override examples = [
    {
      description: "Set default theme's primary color to red",
      command: '<%= config.bin %> <%= command.id %> set --color red --palette primary',
    },
    {
      description: "Set dark default theme's secondary color to blue",
      command: '<%= config.bin %> <%= command.id %> set --color blue --palette secondary --type dark',
    },
    {
      description: "Set light default theme's tertiary color to green and write the output to /path/to/output",
      command:
        '<%= config.bin %> <%= command.id %> set --color green --palette tertiary --type light --output /path/to/output',
    },
    {
      description: "Set dark custom theme's accent color to black and write the output to /path/to/output",
      command:
        '<%= config.bin %> <%= command.id %> set custom --color black --palette accent --type dark --output /path/to/output',
    },
  ]

  public override async run(): Promise<void> {
    const {args, flags} = await this.parse(Set)

    this.log(`hello ${args.name} `)

    const config = await loadStormConfig()

    let color = flags.color
    if (!color) {
      color = config.colors[flags.palette]

      if (!color) {
        this.error(
          `The color ${flags.palette} was not provided in the CLI and does not exist in the Storm configuration file`,
        )
      }
    }

    let output = flags.output
    if (!output) {
      output = join(config.outputDirectory, 'themes')

      if (!output) {
        this.error(`The output was not provided in the CLI and does not exist in the Storm configuration file`)
      }
    }

    const updates = [] as Promise<void>[]
    if (flags.type === ColorThemeType.LIGHT || flags.type === 'both') {
      updates.push(
        this.updateTheme(
          color,
          flags.palette as ColorPaletteType,
          config.workspaceRoot,
          output,
          ColorThemeType.LIGHT,
          args.name,
        ),
      )
    }
    if (flags.type === ColorThemeType.DARK || flags.type === 'both') {
      updates.push(
        this.updateTheme(
          color,
          flags.palette as ColorPaletteType,
          config.workspaceRoot,
          output,
          ColorThemeType.DARK,
          args.name,
        ),
      )
    }

    await Promise.all(updates)

    this.log('Color Palette added to theme successfully')
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

  private async updateTheme(
    color: string,
    type: ColorPaletteType,
    workspaceRoot: string,
    output: string,
    themeType: ColorThemeType,
    name: string = 'default',
  ): Promise<void> {
    const theme = await getTheme(workspaceRoot, output, themeType, name)
    const updatedTheme = addPalette(theme, color, type)

    await setTheme(updatedTheme, workspaceRoot, output, themeType, name)
  }
}
