import { ColorItem, ColorPalette } from "@storybook/addon-docs/blocks";
import { resolveThemeVariant } from "./ThemeVariant";

/**
 * Color tokens rendered with Storybook's ColorPalette doc block.
 *
 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-colorpalette
 */
const COLOR_VARIANTS = {
  dark: (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
            title={"color.blue"}
            subtitle={"Pale periwinkle blue."}
            colors={{
              "1": "#abcaff",
              "2": "#8cb6ff",
              "3": "#6da2ff",
              "4": "#4d8eff",
              "5": "#2e7aff",
              "6": "#2768d9",
              "7": "#2055b3",
              "8": "#19438c",
              "9": "#123166"
            }}
          />
          <ColorItem
            title={"color.green"}
            subtitle={"Pale mint green."}
            colors={{
              "1": "#d1f1d6",
              "2": "#a2e3b6",
              "3": "#74d59f",
              "4": "#45c791",
              "5": "#38a97e",
              "6": "#2c8a69",
              "7": "#216b53",
              "8": "#164a3c",
              "9": "#0c2a22"
            }}
          />
          <ColorItem
            title={"color.neutral"}
            subtitle={"Bright off-white gray."}
            colors={{
              "1": "#fafafa",
              "2": "#f1f1f1",
              "3": "#eaeaea",
              "4": "#e1e1e1",
              "5": "#d0d0d1",
              "6": "#c0c0c1",
              "7": "#b0b0b1",
              "8": "#959698",
              "9": "#7b7b7e",
              "10": "#555659",
              "11": "#46464a",
              "12": "#2d2e33",
              "13": "#242528",
              "14": "#1f1f21",
              "15": "#1c1c1e",
              "16": "#151518"
            }}
          />
          <ColorItem
            title={"color.orange"}
            subtitle={"Pale peach orange."}
            colors={{
              "1": "#f6c3a7",
              "2": "#f4b18c",
              "3": "#f19f71",
              "4": "#ef8c56",
              "5": "#ec7a3b",
              "6": "#df6520",
              "7": "#bf520b",
              "8": "#9f4000",
              "9": "#803000"
            }}
          />
          <ColorItem
            title={"color.pink"}
            subtitle={"Pale blush pink."}
            colors={{
              "1": "#f5c7e4",
              "2": "#f49ed1",
              "3": "#eb89c5",
              "4": "#e774bb",
              "5": "#e171b7",
              "6": "#df6db3",
              "7": "#c25c9b",
              "8": "#904272",
              "9": "#482039"
            }}
          />
          <ColorItem
            title={"color.purple"}
            subtitle={"Pale lavender purple."}
            colors={{
              "1": "#cec2ee",
              "2": "#baa9e8",
              "3": "#a690e1",
              "4": "#9277da",
              "5": "#7f64c4",
              "6": "#6c53ad",
              "7": "#594395",
              "8": "#47347c",
              "9": "#362661"
            }}
          />
          <ColorItem
            title={"color.red"}
            subtitle={"Pale coral red."}
            colors={{
              "1": "#e2819a",
              "2": "#dd6c89",
              "3": "#d95778",
              "4": "#d44267",
              "5": "#cf2d56",
              "6": "#ae284a",
              "7": "#8e223e",
              "8": "#6f1c31",
              "9": "#501524"
            }}
          />
          <ColorItem
            title={"color.yellow"}
            subtitle={"Pale wheat yellow."}
            colors={{
              "1": "#facd7b",
              "2": "#f9c25e",
              "3": "#f8b740",
              "4": "#f7ac23",
              "5": "#f0a824",
              "6": "#df9d24",
              "7": "#c58c22",
              "8": "#a2731e",
              "9": "#765417"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Background"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.canvas"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."
            }
            colors={{
              canvas: "#151518"
            }}
          />
          <ColorItem
            title={"color.canvas-active"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 30% brighter)"
            }
            colors={{
              "canvas-active": "#232326"
            }}
          />
          <ColorItem
            title={"color.canvas-disabled"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "canvas-disabled": "#38383b"
            }}
          />
          <ColorItem
            title={"color.canvas-hovered"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 15% brighter)"
            }
            colors={{
              "canvas-hovered": "#1c1c1f"
            }}
          />
          <ColorItem
            title={"color.canvas-inactive"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% less bright)"
            }
            colors={{
              "canvas-inactive": "#111114"
            }}
          />
          <ColorItem
            title={"color.elevated"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."
            }
            colors={{
              elevated: "#1f1f21"
            }}
          />
          <ColorItem
            title={"color.elevated-active"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 30% brighter)"
            }
            colors={{
              "elevated-active": "#313133"
            }}
          />
          <ColorItem
            title={"color.elevated-disabled"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "elevated-disabled": "#3a3a3d"
            }}
          />
          <ColorItem
            title={"color.elevated-hovered"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "elevated-hovered": "#28282a"
            }}
          />
          <ColorItem
            title={"color.elevated-inactive"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "elevated-inactive": "#19191b"
            }}
          />
          <ColorItem
            title={"color.floating"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."
            }
            colors={{
              floating: "#242528"
            }}
          />
          <ColorItem
            title={"color.floating-active"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 30% brighter)"
            }
            colors={{
              "floating-active": "#38393c"
            }}
          />
          <ColorItem
            title={"color.floating-disabled"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "floating-disabled": "#3b3c3f"
            }}
          />
          <ColorItem
            title={"color.floating-hovered"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "floating-hovered": "#2e2f32"
            }}
          />
          <ColorItem
            title={"color.floating-inactive"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "floating-inactive": "#1e1f22"
            }}
          />
          <ColorItem
            title={"color.sunken"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."
            }
            colors={{
              sunken: "#0c0c0d"
            }}
          />
          <ColorItem
            title={"color.sunken-active"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 30% brighter)"
            }
            colors={{
              "sunken-active": "#161617"
            }}
          />
          <ColorItem
            title={"color.sunken-disabled"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "sunken-disabled": "#353538"
            }}
          />
          <ColorItem
            title={"color.sunken-hovered"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "sunken-hovered": "#111112"
            }}
          />
          <ColorItem
            title={"color.sunken-inactive"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "sunken-inactive": "#09090a"
            }}
          />
          <ColorItem
            title={"color.surface"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."
            }
            colors={{
              surface: "#1c1c1e"
            }}
          />
          <ColorItem
            title={"color.surface-active"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 30% brighter)"
            }
            colors={{
              "surface-active": "#2c2c2f"
            }}
          />
          <ColorItem
            title={"color.surface-disabled"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "surface-disabled": "#39393c"
            }}
          />
          <ColorItem
            title={"color.surface-hovered"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 15% brighter)"
            }
            colors={{
              "surface-hovered": "#242426"
            }}
          />
          <ColorItem
            title={"color.surface-inactive"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% less bright)"
            }
            colors={{
              "surface-inactive": "#171719"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Border"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.hairline"}
            subtitle={
              "Low-contrast color for borders, dividers and separators."
            }
            colors={{
              hairline: "#46464a"
            }}
          />
          <ColorItem
            title={"color.hairline-active"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (active, dark contrast primitive)"
            }
            colors={{
              "hairline-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.hairline-disabled"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "hairline-disabled": "#444447"
            }}
          />
          <ColorItem
            title={"color.hairline-hovered"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (hovered, 40% brighter)"
            }
            colors={{
              "hairline-hovered": "#727276"
            }}
          />
          <ColorItem
            title={"color.hairline-inactive"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "hairline-inactive": "#636363"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.emphasis"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
            }
            colors={{
              emphasis: "#f1f1f1"
            }}
          />
          <ColorItem
            title={"color.emphasis-active"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, dark contrast primitive)"
            }
            colors={{
              "emphasis-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.emphasis-disabled"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "emphasis-disabled": "#777779"
            }}
          />
          <ColorItem
            title={"color.emphasis-hovered"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% less bright)"
            }
            colors={{
              "emphasis-hovered": "#a4a4a4"
            }}
          />
          <ColorItem
            title={"color.emphasis-inactive"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "emphasis-inactive": "#636363"
            }}
          />
          <ColorItem
            title={"color.ink"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."
            }
            colors={{
              ink: "#b0b0b1"
            }}
          />
          <ColorItem
            title={"color.ink-active"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, dark contrast primitive)"
            }
            colors={{
              "ink-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.ink-disabled"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "ink-disabled": "#646466"
            }}
          />
          <ColorItem
            title={"color.ink-hovered"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% brighter)"
            }
            colors={{
              "ink-hovered": "#d7d7d8"
            }}
          />
          <ColorItem
            title={"color.ink-inactive"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "ink-inactive": "#636363"
            }}
          />
          <ColorItem
            title={"color.subtle"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."
            }
            colors={{
              subtle: "#959698"
            }}
          />
          <ColorItem
            title={"color.subtle-active"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"
            }
            colors={{
              "subtle-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.subtle-disabled"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "subtle-disabled": "#5c5c5f"
            }}
          />
          <ColorItem
            title={"color.subtle-hovered"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 25% brighter)"
            }
            colors={{
              "subtle-hovered": "#c8c9cb"
            }}
          />
          <ColorItem
            title={"color.subtle-inactive"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "subtle-inactive": "#636363"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.black"}
            subtitle={"Near-black neutral."}
            colors={{
              black: "#0c0c0d"
            }}
          />
          <ColorItem
            title={"color.white"}
            subtitle={"Pure white."}
            colors={{
              white: "#ffffff"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.data"}
            subtitle={
              "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."
            }
            colors={{
              "neutral.emphasis": "#fafafa",
              "neutral.subtle": "#1f1f21",
              "red.emphasis": "#8e223e",
              "red.subtle": "#501524",
              "orange.emphasis": "#df6520",
              "orange.subtle": "#803000",
              "yellow.emphasis": "#f0a824",
              "yellow.subtle": "#765417",
              "green.emphasis": "#2c8a69",
              "green.subtle": "#216b53",
              "blue.emphasis": "#2055b3",
              "blue.subtle": "#123166",
              "purple.emphasis": "#6c53ad",
              "purple.subtle": "#362661",
              "pink.emphasis": "#df6db3",
              "pink.subtle": "#482039"
            }}
          />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.base"}
              subtitle={
                "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
              }
              colors={{
                primary: "#ffffff",
                secondary: "#2d2e33",
                link: "#00bcff",
                "on-primary": "#151518",
                backdrop: "#41414126",
                "on-secondary": "#FAFAFA",
                border: "#404147",
                "primary-hovered": "#aeaeae",
                "primary-active": "#ffffff",
                "primary-inactive": "#636363",
                "primary-disabled": "#7b7b7e",
                "secondary-hovered": "#333439",
                "secondary-active": "#3a3b41",
                "secondary-inactive": "#1e1f24",
                "secondary-disabled": "#3c3d40",
                "link-hovered": "#8bd6ff",
                "link-active": "#a5dfff",
                "link-inactive": "#008bbe",
                "link-disabled": "#43677a"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.brand"}
              subtitle={
                "The Storm Teal color is used as the primary brand color for Storm Software."
              }
              colors={{
                primary: "#3be4be",
                secondary: "#00604d",
                link: "#3be4be",
                "on-primary": "#151518",
                backdrop: "#00442a26",
                "on-secondary": "#ffffff",
                border: "#31806b",
                "primary-hovered": "#00c19e",
                "primary-active": "#74ffdb",
                "primary-inactive": "#00ab8c",
                "primary-disabled": "#4c726a",
                "secondary-hovered": "#1d705c",
                "secondary-active": "#31806b",
                "secondary-inactive": "#004537",
                "secondary-disabled": "#374b48",
                "link-hovered": "#00c19e",
                "link-active": "#74ffdb",
                "link-inactive": "#00ab8c",
                "link-disabled": "#4c726a"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.danger"}
              subtitle={
                "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."
              }
              colors={{
                primary: "#d44267",
                secondary: "#6b0027",
                link: "#d44267",
                "on-primary": "#FAFAFA",
                backdrop: "#53000726",
                "on-secondary": "#ffb6c0",
                border: "#86233c",
                "primary-hovered": "#ef5b7d",
                "primary-active": "#ff7e97",
                "primary-inactive": "#aa1046",
                "primary-disabled": "#6b4751",
                "secondary-hovered": "#791332",
                "secondary-active": "#86233c",
                "secondary-inactive": "#4e001a",
                "secondary-disabled": "#4d353e",
                "link-hovered": "#ef5b7d",
                "link-active": "#ff7e97",
                "link-inactive": "#aa1046",
                "link-disabled": "#6b4751"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.discovery"}
              subtitle={
                "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."
              }
              colors={{
                primary: "#9277da",
                secondary: "#362661",
                link: "#9277da",
                "on-primary": "#FAFAFA",
                backdrop: "#28005b26",
                "on-secondary": "#FAFAFA",
                border: "#4b3c79",
                "primary-hovered": "#aa90f5",
                "primary-active": "#c1aeff",
                "primary-inactive": "#6d51b0",
                "primary-disabled": "#5a546f",
                "secondary-hovered": "#40316d",
                "secondary-active": "#4b3c79",
                "secondary-inactive": "#27144e",
                "secondary-disabled": "#3f3b4c",
                "link-hovered": "#aa90f5",
                "link-active": "#c1aeff",
                "link-inactive": "#6d51b0",
                "link-disabled": "#5a546f"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.info"}
              subtitle={
                "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."
              }
              colors={{
                primary: "#4d8eff",
                secondary: "#19438c",
                link: "#4d8eff",
                "on-primary": "#FAFAFA",
                backdrop: "#00007526",
                "on-secondary": "#FAFAFA",
                border: "#3560ac",
                "primary-hovered": "#7aabff",
                "primary-active": "#a6c7ff",
                "primary-inactive": "#2564d1",
                "primary-disabled": "#4a5a79",
                "secondary-hovered": "#27519c",
                "secondary-active": "#3560ac",
                "secondary-inactive": "#022c73",
                "secondary-disabled": "#394458",
                "link-hovered": "#7aabff",
                "link-active": "#a6c7ff",
                "link-inactive": "#2564d1",
                "link-disabled": "#4a5a79"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.success"}
              subtitle={
                "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."
              }
              colors={{
                primary: "#45c791",
                secondary: "#006140",
                link: "#45c791",
                "on-primary": "#FAFAFA",
                backdrop: "#003a1026",
                "on-secondary": "#ffffff",
                border: "#31815e",
                "primary-hovered": "#68e6ae",
                "primary-active": "#74f1b9",
                "primary-inactive": "#009666",
                "primary-disabled": "#4b695e",
                "secondary-hovered": "#1d714f",
                "secondary-active": "#31815e",
                "secondary-inactive": "#00462d",
                "secondary-disabled": "#374b45",
                "link-hovered": "#68e6ae",
                "link-active": "#74f1b9",
                "link-inactive": "#009666",
                "link-disabled": "#4b695e"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.warning"}
              subtitle={
                "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."
              }
              colors={{
                primary: "#f9c25e",
                secondary: "#a2731e",
                link: "#f9c25e",
                "on-primary": "#151518",
                backdrop: "#53240026",
                "on-secondary": "#FAFAFA",
                border: "#d1a052",
                "primary-hovered": "#d6a038",
                "primary-active": "#ffe1af",
                "primary-inactive": "#c18c1c",
                "primary-disabled": "#786a54",
                "secondary-hovered": "#b98939",
                "secondary-active": "#d1a052",
                "secondary-inactive": "#7a5300",
                "secondary-disabled": "#5e5241",
                "link-hovered": "#d6a038",
                "link-active": "#ffe1af",
                "link-inactive": "#c18c1c",
                "link-disabled": "#786a54"
              }}
            />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  darkDimmed: (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
            title={"color.blue"}
            subtitle={"Pale periwinkle blue."}
            colors={{
              "1": "#96b2e1",
              "2": "#85a5dc",
              "3": "#7598d7",
              "4": "#638cd2",
              "5": "#527fcd",
              "6": "#4f73b1",
              "7": "#45649b",
              "8": "#3b5685",
              "9": "#31486f"
            }}
          />
          <ColorItem
            title={"color.green"}
            subtitle={"Pale mint green."}
            colors={{
              "1": "#b2d5b8",
              "2": "#97c6a5",
              "3": "#7bb796",
              "4": "#60a88a",
              "5": "#55957d",
              "6": "#49836f",
              "7": "#3e7160",
              "8": "#325d52",
              "9": "#284b41"
            }}
          />
          <ColorItem
            title={"color.neutral"}
            subtitle={"Bright off-white gray."}
            colors={{
              "1": "#d5d5d5",
              "2": "#cfcfcf",
              "3": "#cacaca",
              "4": "#c4c4c4",
              "5": "#b8b8b9",
              "6": "#adadad",
              "7": "#a1a1a2",
              "8": "#8f8f90",
              "9": "#7d7d7e",
              "10": "#626364",
              "11": "#57575a",
              "12": "#45464a",
              "13": "#3f4043",
              "14": "#3c3c3e",
              "15": "#39393c",
              "16": "#343438"
            }}
          />
          <ColorItem
            title={"color.orange"}
            subtitle={"Pale peach orange."}
            colors={{
              "1": "#d7ad96",
              "2": "#d2a287",
              "3": "#cc9678",
              "4": "#c78a69",
              "5": "#c17f5a",
              "6": "#b4714b",
              "7": "#a26238",
              "8": "#92542a",
              "9": "#814825"
            }}
          />
          <ColorItem
            title={"color.pink"}
            subtitle={"Pale blush pink."}
            colors={{
              "1": "#d9aac8",
              "2": "#d492b9",
              "3": "#ca87b0",
              "4": "#c57ba8",
              "5": "#c079a5",
              "6": "#be77a3",
              "7": "#a86d91",
              "8": "#875975",
              "9": "#5a3b4f"
            }}
          />
          <ColorItem
            title={"color.purple"}
            subtitle={"Pale lavender purple."}
            colors={{
              "1": "#b4a9d2",
              "2": "#a79acb",
              "3": "#9b8cc3",
              "4": "#8e7dbb",
              "5": "#8272aa",
              "6": "#756799",
              "7": "#675a8a",
              "8": "#594d7a",
              "9": "#4c416a"
            }}
          />
          <ColorItem
            title={"color.red"}
            subtitle={"Pale coral red."}
            colors={{
              "1": "#c28393",
              "2": "#bc7788",
              "3": "#b76a7e",
              "4": "#b15e73",
              "5": "#ab5268",
              "6": "#984a5e",
              "7": "#864254",
              "8": "#733a49",
              "9": "#61323e"
            }}
          />
          <ColorItem
            title={"color.yellow"}
            subtitle={"Pale wheat yellow."}
            colors={{
              "1": "#d5b67d",
              "2": "#d0ad6d",
              "3": "#caa45c",
              "4": "#c59b4d",
              "5": "#c0984d",
              "6": "#b5904d",
              "7": "#a58549",
              "8": "#917542",
              "9": "#786137"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Background"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.canvas"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."
            }
            colors={{
              canvas: "#343438"
            }}
          />
          <ColorItem
            title={"color.canvas-active"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 30% brighter)"
            }
            colors={{
              "canvas-active": "#3e3e41"
            }}
          />
          <ColorItem
            title={"color.canvas-disabled"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "canvas-disabled": "#4d4d50"
            }}
          />
          <ColorItem
            title={"color.canvas-hovered"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 15% brighter)"
            }
            colors={{
              "canvas-hovered": "#39393d"
            }}
          />
          <ColorItem
            title={"color.canvas-inactive"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% less bright)"
            }
            colors={{
              "canvas-inactive": "#313135"
            }}
          />
          <ColorItem
            title={"color.elevated"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."
            }
            colors={{
              elevated: "#3c3c3e"
            }}
          />
          <ColorItem
            title={"color.elevated-active"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 30% brighter)"
            }
            colors={{
              "elevated-active": "#48484a"
            }}
          />
          <ColorItem
            title={"color.elevated-disabled"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "elevated-disabled": "#4f4f51"
            }}
          />
          <ColorItem
            title={"color.elevated-hovered"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "elevated-hovered": "#424244"
            }}
          />
          <ColorItem
            title={"color.elevated-inactive"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "elevated-inactive": "#37373a"
            }}
          />
          <ColorItem
            title={"color.floating"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."
            }
            colors={{
              floating: "#3f4043"
            }}
          />
          <ColorItem
            title={"color.floating-active"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 30% brighter)"
            }
            colors={{
              "floating-active": "#4d4e50"
            }}
          />
          <ColorItem
            title={"color.floating-disabled"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "floating-disabled": "#4f5052"
            }}
          />
          <ColorItem
            title={"color.floating-hovered"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "floating-hovered": "#464749"
            }}
          />
          <ColorItem
            title={"color.floating-inactive"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "floating-inactive": "#3b3c3f"
            }}
          />
          <ColorItem
            title={"color.sunken"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."
            }
            colors={{
              sunken: "#2e2e30"
            }}
          />
          <ColorItem
            title={"color.sunken-active"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 30% brighter)"
            }
            colors={{
              "sunken-active": "#353537"
            }}
          />
          <ColorItem
            title={"color.sunken-disabled"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "sunken-disabled": "#4b4b4e"
            }}
          />
          <ColorItem
            title={"color.sunken-hovered"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "sunken-hovered": "#323233"
            }}
          />
          <ColorItem
            title={"color.sunken-inactive"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "sunken-inactive": "#2c2c2e"
            }}
          />
          <ColorItem
            title={"color.surface"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."
            }
            colors={{
              surface: "#39393c"
            }}
          />
          <ColorItem
            title={"color.surface-active"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 30% brighter)"
            }
            colors={{
              "surface-active": "#454547"
            }}
          />
          <ColorItem
            title={"color.surface-disabled"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "surface-disabled": "#4e4e50"
            }}
          />
          <ColorItem
            title={"color.surface-hovered"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 15% brighter)"
            }
            colors={{
              "surface-hovered": "#3f3f41"
            }}
          />
          <ColorItem
            title={"color.surface-inactive"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% less bright)"
            }
            colors={{
              "surface-inactive": "#363638"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Border"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.hairline"}
            subtitle={
              "Low-contrast color for borders, dividers and separators."
            }
            colors={{
              hairline: "#57575a"
            }}
          />
          <ColorItem
            title={"color.hairline-active"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (active, dark contrast primitive)"
            }
            colors={{
              "hairline-active": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.hairline-disabled"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "hairline-disabled": "#565658"
            }}
          />
          <ColorItem
            title={"color.hairline-hovered"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (hovered, 40% brighter)"
            }
            colors={{
              "hairline-hovered": "#767679"
            }}
          />
          <ColorItem
            title={"color.hairline-inactive"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "hairline-inactive": "#6c6c6c"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.emphasis"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
            }
            colors={{
              emphasis: "#cfcfcf"
            }}
          />
          <ColorItem
            title={"color.emphasis-active"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, dark contrast primitive)"
            }
            colors={{
              "emphasis-active": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.emphasis-disabled"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "emphasis-disabled": "#7a7a7b"
            }}
          />
          <ColorItem
            title={"color.emphasis-hovered"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% less bright)"
            }
            colors={{
              "emphasis-hovered": "#999999"
            }}
          />
          <ColorItem
            title={"color.emphasis-inactive"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "emphasis-inactive": "#6c6c6c"
            }}
          />
          <ColorItem
            title={"color.ink"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."
            }
            colors={{
              ink: "#a1a1a2"
            }}
          />
          <ColorItem
            title={"color.ink-active"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, dark contrast primitive)"
            }
            colors={{
              "ink-active": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.ink-disabled"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "ink-disabled": "#6c6c6e"
            }}
          />
          <ColorItem
            title={"color.ink-hovered"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% brighter)"
            }
            colors={{
              "ink-hovered": "#bdbdbe"
            }}
          />
          <ColorItem
            title={"color.ink-inactive"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "ink-inactive": "#6c6c6c"
            }}
          />
          <ColorItem
            title={"color.subtle"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."
            }
            colors={{
              subtle: "#8f8f90"
            }}
          />
          <ColorItem
            title={"color.subtle-active"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"
            }
            colors={{
              "subtle-active": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.subtle-disabled"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "subtle-disabled": "#676769"
            }}
          />
          <ColorItem
            title={"color.subtle-hovered"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 25% brighter)"
            }
            colors={{
              "subtle-hovered": "#b2b3b4"
            }}
          />
          <ColorItem
            title={"color.subtle-inactive"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "subtle-inactive": "#6c6c6c"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.black"}
            subtitle={"Near-black neutral."}
            colors={{
              black: "#2e2e30"
            }}
          />
          <ColorItem
            title={"color.white"}
            subtitle={"Pure white."}
            colors={{
              white: "#d9d9d9"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.data"}
            subtitle={
              "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."
            }
            colors={{
              "neutral.emphasis": "#d5d5d5",
              "neutral.subtle": "#3c3c3e",
              "red.emphasis": "#864254",
              "red.subtle": "#61323e",
              "orange.emphasis": "#b4714b",
              "orange.subtle": "#814825",
              "yellow.emphasis": "#c0984d",
              "yellow.subtle": "#786137",
              "green.emphasis": "#49836f",
              "green.subtle": "#3e7160",
              "blue.emphasis": "#45649b",
              "blue.subtle": "#31486f",
              "purple.emphasis": "#756799",
              "purple.subtle": "#4c416a",
              "pink.emphasis": "#be77a3",
              "pink.subtle": "#5a3b4f"
            }}
          />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.base"}
              subtitle={
                "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
              }
              colors={{
                primary: "#d9d9d9",
                secondary: "#45464a",
                link: "#39a1c6",
                "on-primary": "#343438",
                backdrop: "#54545426",
                "on-secondary": "#d5d5d5",
                border: "#535458",
                "primary-hovered": "#a0a0a0",
                "primary-active": "#d9d9d9",
                "primary-inactive": "#6c6c6c",
                "primary-disabled": "#7d7d7e",
                "secondary-hovered": "#4a4b4e",
                "secondary-active": "#4f4f54",
                "secondary-inactive": "#3a3b40",
                "secondary-disabled": "#505153",
                "link-hovered": "#85bddc",
                "link-active": "#93c4e0",
                "link-inactive": "#2f83a2",
                "link-disabled": "#586e79"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.brand"}
              subtitle={
                "The Storm Teal color is used as the primary brand color for Storm Software."
              }
              colors={{
                primary: "#5abba5",
                secondary: "#206f60",
                link: "#5abba5",
                "on-primary": "#343438",
                backdrop: "#1c604626",
                "on-secondary": "#d9d9d9",
                border: "#4c7d70",
                "primary-hovered": "#30a48f",
                "primary-active": "#78d8bf",
                "primary-inactive": "#2c9884",
                "primary-disabled": "#5d746f",
                "secondary-hovered": "#3b7466",
                "secondary-active": "#4c7d70",
                "secondary-inactive": "#1c6153",
                "secondary-disabled": "#4d5b59",
                "link-hovered": "#30a48f",
                "link-active": "#78d8bf",
                "link-inactive": "#2c9884",
                "link-disabled": "#5d746f"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.danger"}
              subtitle={
                "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."
              }
              colors={{
                primary: "#b15e73",
                secondary: "#752240",
                link: "#b15e73",
                "on-primary": "#d5d5d5",
                backdrop: "#681e2526",
                "on-secondary": "#e29ca6",
                border: "#814252",
                "primary-hovered": "#c86c81",
                "primary-active": "#d97e90",
                "primary-inactive": "#963859",
                "primary-disabled": "#705960",
                "secondary-hovered": "#7a344a",
                "secondary-active": "#814252",
                "secondary-inactive": "#661d36",
                "secondary-disabled": "#5c4b52",
                "link-hovered": "#c86c81",
                "link-active": "#d97e90",
                "link-inactive": "#963859",
                "link-disabled": "#705960"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.discovery"}
              subtitle={
                "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."
              }
              colors={{
                primary: "#8e7dbb",
                secondary: "#4c416a",
                link: "#8e7dbb",
                "on-primary": "#d5d5d5",
                backdrop: "#41206d26",
                "on-secondary": "#d5d5d5",
                border: "#5c5378",
                "primary-hovered": "#9c89d3",
                "primary-active": "#a998e1",
                "primary-inactive": "#75669a",
                "primary-disabled": "#666273",
                "secondary-hovered": "#544a71",
                "secondary-active": "#5c5378",
                "secondary-inactive": "#403160",
                "secondary-disabled": "#52505b",
                "link-hovered": "#9c89d3",
                "link-active": "#a998e1",
                "link-inactive": "#75669a",
                "link-disabled": "#666273"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.info"}
              subtitle={
                "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."
              }
              colors={{
                primary: "#638cd2",
                secondary: "#3b5685",
                link: "#638cd2",
                "on-primary": "#d5d5d5",
                backdrop: "#24247b26",
                "on-secondary": "#d5d5d5",
                border: "#536c97",
                "primary-hovered": "#7c9ed9",
                "primary-active": "#93b0e0",
                "primary-inactive": "#4d70ac",
                "primary-disabled": "#5c6679",
                "secondary-hovered": "#47618e",
                "secondary-active": "#536c97",
                "secondary-inactive": "#254479",
                "secondary-disabled": "#4f5663",
                "link-hovered": "#7c9ed9",
                "link-active": "#93b0e0",
                "link-inactive": "#4d70ac",
                "link-disabled": "#5c6679"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.success"}
              subtitle={
                "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."
              }
              colors={{
                primary: "#60a88a",
                secondary: "#207055",
                link: "#60a88a",
                "on-primary": "#d5d5d5",
                backdrop: "#1a5b2c26",
                "on-secondary": "#d9d9d9",
                border: "#4c7d68",
                "primary-hovered": "#74c2a0",
                "primary-active": "#7acca7",
                "primary-inactive": "#298d6d",
                "primary-disabled": "#5c6f68",
                "secondary-hovered": "#3b755d",
                "secondary-active": "#4c7d68",
                "secondary-inactive": "#1c6149",
                "secondary-disabled": "#4d5b57",
                "link-hovered": "#74c2a0",
                "link-active": "#7acca7",
                "link-inactive": "#298d6d",
                "link-disabled": "#5c6f68"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.warning"}
              subtitle={
                "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."
              }
              colors={{
                primary: "#d0ad6d",
                secondary: "#917542",
                link: "#d0ad6d",
                "on-primary": "#343438",
                backdrop: "#683e1e26",
                "on-secondary": "#d5d5d5",
                border: "#b19467",
                "primary-hovered": "#b19358",
                "primary-active": "#e1c698",
                "primary-inactive": "#a38544",
                "primary-disabled": "#787063",
                "secondary-hovered": "#9f8457",
                "secondary-active": "#b19467",
                "secondary-inactive": "#7d6124",
                "secondary-disabled": "#676054",
                "link-hovered": "#b19358",
                "link-active": "#e1c698",
                "link-inactive": "#a38544",
                "link-disabled": "#787063"
              }}
            />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  darkHighContrast: (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
            title={"color.blue"}
            subtitle={"Pale periwinkle blue."}
            colors={{
              "1": "#f8fbff",
              "2": "#cbdeff",
              "3": "#9ec1ff",
              "4": "#70a4ff",
              "5": "#4387ff",
              "6": "#025eff",
              "7": "#0145be",
              "8": "#012e7c",
              "9": "#00163b"
            }}
          />
          <ColorItem
            title={"color.green"}
            subtitle={"Pale mint green."}
            colors={{
              "1": "#ffffff",
              "2": "#c9f8d8",
              "3": "#7ceeaf",
              "4": "#2de498",
              "5": "#1db77c",
              "6": "#13825b",
              "7": "#0a4e38",
              "8": "#031611",
              "9": "#000000"
            }}
          />
          <ColorItem
            title={"color.neutral"}
            subtitle={"Bright off-white gray."}
            colors={{
              "1": "#ffffff",
              "2": "#ffffff",
              "3": "#ffffff",
              "4": "#ffffff",
              "5": "#f4f4f6",
              "6": "#dcdce0",
              "7": "#c3c3ca",
              "8": "#9a9fa7",
              "9": "#737383",
              "10": "#3f424a",
              "11": "#2b2b33",
              "12": "#0b0b0e",
              "13": "#000000",
              "14": "#000000",
              "15": "#000000",
              "16": "#000000"
            }}
          />
          <ColorItem
            title={"color.orange"}
            subtitle={"Pale peach orange."}
            colors={{
              "1": "#ffeee5",
              "2": "#ffd3bb",
              "3": "#ffb890",
              "4": "#ff9c65",
              "5": "#ff803a",
              "6": "#ff5c00",
              "7": "#b24600",
              "8": "#742f00",
              "9": "#471b00"
            }}
          />
          <ColorItem
            title={"color.pink"}
            subtitle={"Pale blush pink."}
            colors={{
              "1": "#ffffff",
              "2": "#ffd5ee",
              "3": "#ffaade",
              "4": "#ff85d0",
              "5": "#fa7dcb",
              "6": "#f976c6",
              "7": "#dc50a6",
              "8": "#932b6b",
              "9": "#1c0815"
            }}
          />
          <ColorItem
            title={"color.purple"}
            subtitle={"Pale lavender purple."}
            colors={{
              "1": "#ffffff",
              "2": "#e1d7fb",
              "3": "#c1adf7",
              "4": "#a283f3",
              "5": "#815ddd",
              "6": "#623dc3",
              "7": "#492b9b",
              "8": "#321c71",
              "9": "#1d0f42"
            }}
          />
          <ColorItem
            title={"color.red"}
            subtitle={"Pale coral red."}
            colors={{
              "1": "#f997b0",
              "2": "#f77395",
              "3": "#f6507a",
              "4": "#f42c5f",
              "5": "#f00a45",
              "6": "#b90a37",
              "7": "#840929",
              "8": "#510619",
              "9": "#1d0309"
            }}
          />
          <ColorItem
            title={"color.yellow"}
            subtitle={"Pale wheat yellow."}
            colors={{
              "1": "#ffe1ab",
              "2": "#ffd280",
              "3": "#ffc253",
              "4": "#ffb327",
              "5": "#ffb01e",
              "6": "#ffa706",
              "7": "#dc8f00",
              "8": "#a26902",
              "9": "#583902"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Background"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.canvas"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."
            }
            colors={{
              canvas: "#000000"
            }}
          />
          <ColorItem
            title={"color.canvas-active"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 30% brighter)"
            }
            colors={{
              "canvas-active": "#000000"
            }}
          />
          <ColorItem
            title={"color.canvas-disabled"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "canvas-disabled": "#18181c"
            }}
          />
          <ColorItem
            title={"color.canvas-hovered"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 15% brighter)"
            }
            colors={{
              "canvas-hovered": "#000000"
            }}
          />
          <ColorItem
            title={"color.canvas-inactive"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% less bright)"
            }
            colors={{
              "canvas-inactive": "#000000"
            }}
          />
          <ColorItem
            title={"color.elevated"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."
            }
            colors={{
              elevated: "#000000"
            }}
          />
          <ColorItem
            title={"color.elevated-active"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 30% brighter)"
            }
            colors={{
              "elevated-active": "#0e0e10"
            }}
          />
          <ColorItem
            title={"color.elevated-disabled"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "elevated-disabled": "#1a1a1f"
            }}
          />
          <ColorItem
            title={"color.elevated-hovered"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "elevated-hovered": "#020202"
            }}
          />
          <ColorItem
            title={"color.elevated-inactive"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "elevated-inactive": "#000000"
            }}
          />
          <ColorItem
            title={"color.floating"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."
            }
            colors={{
              floating: "#000000"
            }}
          />
          <ColorItem
            title={"color.floating-active"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 30% brighter)"
            }
            colors={{
              "floating-active": "#18191d"
            }}
          />
          <ColorItem
            title={"color.floating-disabled"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "floating-disabled": "#1c1e22"
            }}
          />
          <ColorItem
            title={"color.floating-hovered"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "floating-hovered": "#0b0c0e"
            }}
          />
          <ColorItem
            title={"color.floating-inactive"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "floating-inactive": "#000000"
            }}
          />
          <ColorItem
            title={"color.sunken"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."
            }
            colors={{
              sunken: "#000000"
            }}
          />
          <ColorItem
            title={"color.sunken-active"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 30% brighter)"
            }
            colors={{
              "sunken-active": "#000000"
            }}
          />
          <ColorItem
            title={"color.sunken-disabled"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "sunken-disabled": "#141418"
            }}
          />
          <ColorItem
            title={"color.sunken-hovered"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "sunken-hovered": "#000000"
            }}
          />
          <ColorItem
            title={"color.sunken-inactive"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "sunken-inactive": "#000000"
            }}
          />
          <ColorItem
            title={"color.surface"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."
            }
            colors={{
              surface: "#000000"
            }}
          />
          <ColorItem
            title={"color.surface-active"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 30% brighter)"
            }
            colors={{
              "surface-active": "#080809"
            }}
          />
          <ColorItem
            title={"color.surface-disabled"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 93% saturation, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "surface-disabled": "#19191e"
            }}
          />
          <ColorItem
            title={"color.surface-hovered"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 15% brighter)"
            }
            colors={{
              "surface-hovered": "#000000"
            }}
          />
          <ColorItem
            title={"color.surface-inactive"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% less bright)"
            }
            colors={{
              "surface-inactive": "#000000"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Border"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.hairline"}
            subtitle={
              "Low-contrast color for borders, dividers and separators."
            }
            colors={{
              hairline: "#2b2b33"
            }}
          />
          <ColorItem
            title={"color.hairline-active"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (active, dark contrast primitive)"
            }
            colors={{
              "hairline-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.hairline-disabled"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "hairline-disabled": "#28282f"
            }}
          />
          <ColorItem
            title={"color.hairline-hovered"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (hovered, 40% brighter)"
            }
            colors={{
              "hairline-hovered": "#676777"
            }}
          />
          <ColorItem
            title={"color.hairline-inactive"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "hairline-inactive": "#565656"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.emphasis"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
            }
            colors={{
              emphasis: "#ffffff"
            }}
          />
          <ColorItem
            title={"color.emphasis-active"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, dark contrast primitive)"
            }
            colors={{
              "emphasis-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.emphasis-disabled"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "emphasis-disabled": "#6d6d7c"
            }}
          />
          <ColorItem
            title={"color.emphasis-hovered"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% less bright)"
            }
            colors={{
              "emphasis-hovered": "#b4b4b4"
            }}
          />
          <ColorItem
            title={"color.emphasis-inactive"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "emphasis-inactive": "#565656"
            }}
          />
          <ColorItem
            title={"color.ink"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."
            }
            colors={{
              ink: "#c3c3ca"
            }}
          />
          <ColorItem
            title={"color.ink-active"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, dark contrast primitive)"
            }
            colors={{
              "ink-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.ink-disabled"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "ink-disabled": "#53535f"
            }}
          />
          <ColorItem
            title={"color.ink-hovered"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% brighter)"
            }
            colors={{
              "ink-hovered": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.ink-inactive"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "ink-inactive": "#565656"
            }}
          />
          <ColorItem
            title={"color.subtle"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."
            }
            colors={{
              subtle: "#9a9fa7"
            }}
          />
          <ColorItem
            title={"color.subtle-active"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"
            }
            colors={{
              "subtle-active": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.subtle-disabled"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "subtle-disabled": "#494954"
            }}
          />
          <ColorItem
            title={"color.subtle-hovered"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 25% brighter)"
            }
            colors={{
              "subtle-hovered": "#e9eaed"
            }}
          />
          <ColorItem
            title={"color.subtle-inactive"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% of the dark contrast primitive's brightness)"
            }
            colors={{
              "subtle-inactive": "#565656"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.black"}
            subtitle={"Near-black neutral."}
            colors={{
              black: "#000000"
            }}
          />
          <ColorItem
            title={"color.white"}
            subtitle={"Pure white."}
            colors={{
              white: "#ffffff"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.data"}
            subtitle={
              "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."
            }
            colors={{
              "neutral.emphasis": "#ffffff",
              "neutral.subtle": "#000000",
              "red.emphasis": "#840929",
              "red.subtle": "#1d0309",
              "orange.emphasis": "#ff5c00",
              "orange.subtle": "#471b00",
              "yellow.emphasis": "#ffb01e",
              "yellow.subtle": "#583902",
              "green.emphasis": "#13825b",
              "green.subtle": "#0a4e38",
              "blue.emphasis": "#0145be",
              "blue.subtle": "#00163b",
              "purple.emphasis": "#623dc3",
              "purple.subtle": "#1d0f42",
              "pink.emphasis": "#f976c6",
              "pink.subtle": "#1c0815"
            }}
          />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.base"}
              subtitle={
                "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
              }
              colors={{
                primary: "#ffffff",
                secondary: "#0b0b0e",
                link: "#00bcff",
                "on-primary": "#000000",
                backdrop: "#25252526",
                "on-secondary": "#ffffff",
                border: "#24252d",
                "primary-hovered": "#c3c3c3",
                "primary-active": "#ffffff",
                "primary-inactive": "#565656",
                "primary-disabled": "#737383",
                "secondary-hovered": "#121318",
                "secondary-active": "#1c1d24",
                "secondary-inactive": "#000000",
                "secondary-disabled": "#1d1f24",
                "link-hovered": "#caecff",
                "link-active": "#eff9ff",
                "link-inactive": "#0076a1",
                "link-disabled": "#2c5b73"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.brand"}
              subtitle={
                "The Storm Teal color is used as the primary brand color for Storm Software."
              }
              colors={{
                primary: "#2effd0",
                secondary: "#001814",
                link: "#2effd0",
                "on-primary": "#000000",
                backdrop: "#00000026",
                "on-secondary": "#ffffff",
                border: "#19755d",
                "primary-hovered": "#00a587",
                "primary-active": "#a8ffe9",
                "primary-inactive": "#00856d",
                "primary-disabled": "#376a5f",
                "secondary-hovered": "#075340",
                "secondary-active": "#19755d",
                "secondary-inactive": "#000000",
                "secondary-disabled": "#1b2e2c",
                "link-hovered": "#00a587",
                "link-active": "#a8ffe9",
                "link-inactive": "#00856d",
                "link-disabled": "#376a5f"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.danger"}
              subtitle={
                "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."
              }
              colors={{
                primary: "#f42c5f",
                secondary: "#28000f",
                link: "#f42c5f",
                "on-primary": "#ffffff",
                backdrop: "#06000026",
                "on-secondary": "#ffffff",
                border: "#780a26",
                "primary-hovered": "#ff6d8e",
                "primary-active": "#ffb7c5",
                "primary-inactive": "#9b0036",
                "primary-disabled": "#5f313d",
                "secondary-hovered": "#58001b",
                "secondary-active": "#780a26",
                "secondary-inactive": "#000000",
                "secondary-disabled": "#301a22",
                "link-hovered": "#ff6d8e",
                "link-active": "#ffb7c5",
                "link-inactive": "#9b0036",
                "link-disabled": "#5f313d"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.discovery"}
              subtitle={
                "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."
              }
              colors={{
                primary: "#a283f3",
                secondary: "#1d0f42",
                link: "#a283f3",
                "on-primary": "#ffffff",
                backdrop: "#08001126",
                "on-secondary": "#ffffff",
                border: "#37256f",
                "primary-hovered": "#d2c2ff",
                "primary-active": "#fdfcff",
                "primary-inactive": "#643bc7",
                "primary-disabled": "#494068",
                "secondary-hovered": "#291959",
                "secondary-active": "#37256f",
                "secondary-inactive": "#0a0219",
                "secondary-disabled": "#242031",
                "link-hovered": "#d2c2ff",
                "link-active": "#fdfcff",
                "link-inactive": "#643bc7",
                "link-disabled": "#494068"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.info"}
              subtitle={
                "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."
              }
              colors={{
                primary: "#70a4ff",
                secondary: "#012e7c",
                link: "#70a4ff",
                "on-primary": "#ffffff",
                backdrop: "#00003726",
                "on-secondary": "#ffffff",
                border: "#1953bb",
                "primary-hovered": "#b1ceff",
                "primary-active": "#f1f6ff",
                "primary-inactive": "#0159f1",
                "primary-disabled": "#344a74",
                "secondary-hovered": "#0c409c",
                "secondary-active": "#1953bb",
                "secondary-inactive": "#001437",
                "secondary-disabled": "#202b40",
                "link-hovered": "#b1ceff",
                "link-active": "#f1f6ff",
                "link-inactive": "#0159f1",
                "link-disabled": "#344a74"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.success"}
              subtitle={
                "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."
              }
              colors={{
                primary: "#2de498",
                secondary: "#001a11",
                link: "#2de498",
                "on-primary": "#ffffff",
                backdrop: "#00000026",
                "on-secondary": "#ffffff",
                border: "#19774e",
                "primary-hovered": "#73ffc1",
                "primary-active": "#94ffcf",
                "primary-inactive": "#006746",
                "primary-disabled": "#355d4e",
                "secondary-hovered": "#075435",
                "secondary-active": "#19774e",
                "secondary-inactive": "#000000",
                "secondary-disabled": "#1b2e29",
                "link-hovered": "#73ffc1",
                "link-active": "#94ffcf",
                "link-inactive": "#006746",
                "link-disabled": "#355d4e"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.warning"}
              subtitle={
                "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."
              }
              colors={{
                primary: "#ffd280",
                secondary: "#a26902",
                link: "#ffd280",
                "on-primary": "#000000",
                backdrop: "#06020026",
                "on-secondary": "#ffffff",
                border: "#eead45",
                "primary-hovered": "#f8ad1d",
                "primary-active": "#fffffe",
                "primary-inactive": "#ce8c00",
                "primary-disabled": "#756040",
                "secondary-hovered": "#d08d1c",
                "secondary-active": "#eead45",
                "secondary-inactive": "#3e2a00",
                "secondary-disabled": "#4b3d29",
                "link-hovered": "#f8ad1d",
                "link-active": "#fffffe",
                "link-inactive": "#ce8c00",
                "link-disabled": "#756040"
              }}
            />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  light: (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
            title={"color.blue"}
            subtitle={"Pale periwinkle blue."}
            colors={{
              "1": "#abcaff",
              "2": "#8cb6ff",
              "3": "#6da2ff",
              "4": "#4d8eff",
              "5": "#2e7aff",
              "6": "#2768d9",
              "7": "#2055b3",
              "8": "#19438c",
              "9": "#123166"
            }}
          />
          <ColorItem
            title={"color.green"}
            subtitle={"Pale mint green."}
            colors={{
              "1": "#d1f1d6",
              "2": "#a2e3b6",
              "3": "#74d59f",
              "4": "#45c791",
              "5": "#38a97e",
              "6": "#2c8a69",
              "7": "#216b53",
              "8": "#164a3c",
              "9": "#0c2a22"
            }}
          />
          <ColorItem
            title={"color.neutral"}
            subtitle={"Bright off-white gray."}
            colors={{
              "1": "#fafafa",
              "2": "#f1f1f1",
              "3": "#eaeaea",
              "4": "#e1e1e1",
              "5": "#d0d0d1",
              "6": "#c0c0c1",
              "7": "#b0b0b1",
              "8": "#959698",
              "9": "#7b7b7e",
              "10": "#555659",
              "11": "#46464a",
              "12": "#2d2e33",
              "13": "#242528",
              "14": "#1f1f21",
              "15": "#1c1c1e",
              "16": "#151518"
            }}
          />
          <ColorItem
            title={"color.orange"}
            subtitle={"Pale peach orange."}
            colors={{
              "1": "#f6c3a7",
              "2": "#f4b18c",
              "3": "#f19f71",
              "4": "#ef8c56",
              "5": "#ec7a3b",
              "6": "#df6520",
              "7": "#bf520b",
              "8": "#9f4000",
              "9": "#803000"
            }}
          />
          <ColorItem
            title={"color.pink"}
            subtitle={"Pale blush pink."}
            colors={{
              "1": "#f5c7e4",
              "2": "#f49ed1",
              "3": "#eb89c5",
              "4": "#e774bb",
              "5": "#e171b7",
              "6": "#df6db3",
              "7": "#c25c9b",
              "8": "#904272",
              "9": "#482039"
            }}
          />
          <ColorItem
            title={"color.purple"}
            subtitle={"Pale lavender purple."}
            colors={{
              "1": "#cec2ee",
              "2": "#baa9e8",
              "3": "#a690e1",
              "4": "#9277da",
              "5": "#7f64c4",
              "6": "#6c53ad",
              "7": "#594395",
              "8": "#47347c",
              "9": "#362661"
            }}
          />
          <ColorItem
            title={"color.red"}
            subtitle={"Pale coral red."}
            colors={{
              "1": "#e2819a",
              "2": "#dd6c89",
              "3": "#d95778",
              "4": "#d44267",
              "5": "#cf2d56",
              "6": "#ae284a",
              "7": "#8e223e",
              "8": "#6f1c31",
              "9": "#501524"
            }}
          />
          <ColorItem
            title={"color.yellow"}
            subtitle={"Pale wheat yellow."}
            colors={{
              "1": "#facd7b",
              "2": "#f9c25e",
              "3": "#f8b740",
              "4": "#f7ac23",
              "5": "#f0a824",
              "6": "#df9d24",
              "7": "#c58c22",
              "8": "#a2731e",
              "9": "#765417"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Background"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.canvas"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."
            }
            colors={{
              canvas: "#eaeaea"
            }}
          />
          <ColorItem
            title={"color.canvas-active"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 30% brighter)"
            }
            colors={{
              "canvas-active": "#919191"
            }}
          />
          <ColorItem
            title={"color.canvas-disabled"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "canvas-disabled": "#6d6d6f"
            }}
          />
          <ColorItem
            title={"color.canvas-hovered"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 15% brighter)"
            }
            colors={{
              "canvas-hovered": "#bcbcbc"
            }}
          />
          <ColorItem
            title={"color.canvas-inactive"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% less bright)"
            }
            colors={{
              "canvas-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.elevated"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."
            }
            colors={{
              elevated: "#fafafa"
            }}
          />
          <ColorItem
            title={"color.elevated-active"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 30% brighter)"
            }
            colors={{
              "elevated-active": "#9b9b9b"
            }}
          />
          <ColorItem
            title={"color.elevated-disabled"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "elevated-disabled": "#717173"
            }}
          />
          <ColorItem
            title={"color.elevated-hovered"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "elevated-hovered": "#c9c9c9"
            }}
          />
          <ColorItem
            title={"color.elevated-inactive"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "elevated-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.floating"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."
            }
            colors={{
              floating: "#ffffff"
            }}
          />
          <ColorItem
            title={"color.floating-active"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 30% brighter)"
            }
            colors={{
              "floating-active": "#9e9e9e"
            }}
          />
          <ColorItem
            title={"color.floating-disabled"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "floating-disabled": "#727274"
            }}
          />
          <ColorItem
            title={"color.floating-hovered"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "floating-hovered": "#cecece"
            }}
          />
          <ColorItem
            title={"color.floating-inactive"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "floating-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.sunken"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."
            }
            colors={{
              sunken: "#e1e1e1"
            }}
          />
          <ColorItem
            title={"color.sunken-active"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 30% brighter)"
            }
            colors={{
              "sunken-active": "#8b8b8b"
            }}
          />
          <ColorItem
            title={"color.sunken-disabled"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "sunken-disabled": "#6b6b6d"
            }}
          />
          <ColorItem
            title={"color.sunken-hovered"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "sunken-hovered": "#b5b5b5"
            }}
          />
          <ColorItem
            title={"color.sunken-inactive"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "sunken-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.surface"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."
            }
            colors={{
              surface: "#f1f1f1"
            }}
          />
          <ColorItem
            title={"color.surface-active"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 30% brighter)"
            }
            colors={{
              "surface-active": "#959595"
            }}
          />
          <ColorItem
            title={"color.surface-disabled"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "surface-disabled": "#6f6f71"
            }}
          />
          <ColorItem
            title={"color.surface-hovered"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 15% brighter)"
            }
            colors={{
              "surface-hovered": "#c2c2c2"
            }}
          />
          <ColorItem
            title={"color.surface-inactive"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% less bright)"
            }
            colors={{
              "surface-inactive": "#ffffff"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.emphasis"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
            }
            colors={{
              emphasis: "#1f1f21"
            }}
          />
          <ColorItem
            title={"color.emphasis-active"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, pure black)"
            }
            colors={{
              "emphasis-active": "#000000"
            }}
          />
          <ColorItem
            title={"color.emphasis-disabled"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "emphasis-disabled": "#38383b"
            }}
          />
          <ColorItem
            title={"color.emphasis-hovered"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% less bright)"
            }
            colors={{
              "emphasis-hovered": "#4f4f52"
            }}
          />
          <ColorItem
            title={"color.emphasis-inactive"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "emphasis-inactive": "#79797b"
            }}
          />
          <ColorItem
            title={"color.ink"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."
            }
            colors={{
              ink: "#555659"
            }}
          />
          <ColorItem
            title={"color.ink-active"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, light contrast primitive)"
            }
            colors={{
              "ink-active": "#0c0c0d"
            }}
          />
          <ColorItem
            title={"color.ink-disabled"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "ink-disabled": "#48494c"
            }}
          />
          <ColorItem
            title={"color.ink-hovered"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% brighter)"
            }
            colors={{
              "ink-hovered": "#37383b"
            }}
          />
          <ColorItem
            title={"color.ink-inactive"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "ink-inactive": "#79797b"
            }}
          />
          <ColorItem
            title={"color.subtle"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."
            }
            colors={{
              subtle: "#959698"
            }}
          />
          <ColorItem
            title={"color.subtle-active"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"
            }
            colors={{
              "subtle-active": "#0c0c0d"
            }}
          />
          <ColorItem
            title={"color.subtle-disabled"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "subtle-disabled": "#5c5c5f"
            }}
          />
          <ColorItem
            title={"color.subtle-hovered"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 25% brighter)"
            }
            colors={{
              "subtle-hovered": "#646466"
            }}
          />
          <ColorItem
            title={"color.subtle-inactive"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "subtle-inactive": "#79797b"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.hairline"}
            subtitle={
              "Low-contrast color for borders, dividers and separators."
            }
            colors={{
              hairline: "#d0d0d1"
            }}
          />
          <ColorItem
            title={"color.hairline-active"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (active, light contrast primitive)"
            }
            colors={{
              "hairline-active": "#0c0c0d"
            }}
          />
          <ColorItem
            title={"color.hairline-disabled"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "hairline-disabled": "#6d6d70"
            }}
          />
          <ColorItem
            title={"color.hairline-hovered"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (hovered, 40% brighter)"
            }
            colors={{
              "hairline-hovered": "#676768"
            }}
          />
          <ColorItem
            title={"color.hairline-inactive"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "hairline-inactive": "#79797b"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.black"}
            subtitle={"Near-black neutral."}
            colors={{
              black: "#0c0c0d"
            }}
          />
          <ColorItem
            title={"color.white"}
            subtitle={"Pure white."}
            colors={{
              white: "#ffffff"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.data"}
            subtitle={
              "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."
            }
            colors={{
              "neutral.emphasis": "#555659",
              "neutral.subtle": "#eaeaea",
              "red.emphasis": "#8e223e",
              "red.subtle": "#dd6c89",
              "orange.emphasis": "#9f4000",
              "orange.subtle": "#f19f71",
              "yellow.emphasis": "#765417",
              "yellow.subtle": "#f8b740",
              "green.emphasis": "#216b53",
              "green.subtle": "#74d59f",
              "blue.emphasis": "#2055b3",
              "blue.subtle": "#6da2ff",
              "purple.emphasis": "#594395",
              "purple.subtle": "#a690e1",
              "pink.emphasis": "#904272",
              "pink.subtle": "#eb89c5"
            }}
          />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.base"}
              subtitle={
                "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
              }
              colors={{
                primary: "#1c1c1e",
                secondary: "#b0b0b1",
                link: "#0084d1",
                "on-primary": "#FAFAFA",
                backdrop: "#02020326",
                "on-secondary": "#FAFAFA",
                border: "#777778",
                "primary-hovered": "#4d4d4f",
                "primary-active": "#000000",
                "primary-inactive": "#79797b",
                "primary-disabled": "#37373a",
                "secondary-hovered": "#9d9d9e",
                "secondary-active": "#878788",
                "secondary-inactive": "#e1e1e2",
                "secondary-disabled": "#646466",
                "link-hovered": "#006eaf",
                "link-active": "#00588e",
                "link-inactive": "#40aaf9",
                "link-disabled": "#3d576c"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.brand"}
              subtitle={
                "The Storm Teal color is used as the primary brand color for Storm Software."
              }
              colors={{
                primary: "#1fb2a6",
                secondary: "#d6fff9",
                link: "#1fb2a6",
                "on-primary": "#FAFAFA",
                backdrop: "#00332c26",
                "on-secondary": "#005a53",
                border: "#89b0ab",
                "primary-hovered": "#00958b",
                "primary-active": "#007970",
                "primary-inactive": "#5ddfd2",
                "primary-disabled": "#436362",
                "secondary-hovered": "#afd7d1",
                "secondary-active": "#89b0ab",
                "secondary-inactive": "#ffffff",
                "secondary-disabled": "#717b7b",
                "link-hovered": "#00958b",
                "link-active": "#007970",
                "link-inactive": "#5ddfd2",
                "link-disabled": "#436362"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.danger"}
              subtitle={
                "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."
              }
              colors={{
                primary: "#8e223e",
                secondary: "#f17d91",
                link: "#8e223e",
                "on-primary": "#FAFAFA",
                backdrop: "#35000126",
                "on-secondary": "#200006",
                border: "#b2455c",
                "primary-hovered": "#7c0c30",
                "primary-active": "#660024",
                "primary-inactive": "#ab3e56",
                "primary-disabled": "#573d45",
                "secondary-hovered": "#d16176",
                "secondary-active": "#b2455c",
                "secondary-inactive": "#ffc2c9",
                "secondary-disabled": "#74575d",
                "link-hovered": "#7c0c30",
                "link-active": "#660024",
                "link-inactive": "#ab3e56",
                "link-disabled": "#573d45"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.discovery"}
              subtitle={
                "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."
              }
              colors={{
                primary: "#594395",
                secondary: "#a690e1",
                link: "#594395",
                "on-primary": "#FAFAFA",
                backdrop: "#17004026",
                "on-secondary": "#FAFAFA",
                border: "#725ba7",
                "primary-hovered": "#4a3383",
                "primary-active": "#3c2372",
                "primary-inactive": "#725db2",
                "primary-disabled": "#49445b",
                "secondary-hovered": "#8b75c4",
                "secondary-active": "#725ba7",
                "secondary-inactive": "#d0c1ff",
                "secondary-disabled": "#605b72",
                "link-hovered": "#4a3383",
                "link-active": "#3c2372",
                "link-inactive": "#725db2",
                "link-disabled": "#49445b"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.info"}
              subtitle={
                "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."
              }
              colors={{
                primary: "#2055b3",
                secondary: "#6da2ff",
                link: "#2055b3",
                "on-primary": "#FAFAFA",
                backdrop: "#00005526",
                "on-secondary": "#FAFAFA",
                border: "#396ac2",
                "primary-hovered": "#0d43a0",
                "primary-active": "#003388",
                "primary-inactive": "#3b72d3",
                "primary-disabled": "#3c4963",
                "secondary-hovered": "#5386e0",
                "secondary-active": "#396ac2",
                "secondary-inactive": "#b8d2ff",
                "secondary-disabled": "#52607a",
                "link-hovered": "#0d43a0",
                "link-active": "#003388",
                "link-inactive": "#3b72d3",
                "link-disabled": "#3c4963"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.success"}
              subtitle={
                "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."
              }
              colors={{
                primary: "#216b53",
                secondary: "#74ba9f",
                link: "#216b53",
                "on-primary": "#FAFAFA",
                backdrop: "#001b0926",
                "on-secondary": "#002015",
                border: "#3b8168",
                "primary-hovered": "#065a43",
                "primary-active": "#004835",
                "primary-inactive": "#40876e",
                "primary-disabled": "#3d4e4a",
                "secondary-hovered": "#589d83",
                "secondary-active": "#3b8168",
                "secondary-inactive": "#a3eacd",
                "secondary-disabled": "#556661",
                "link-hovered": "#065a43",
                "link-active": "#004835",
                "link-inactive": "#40876e",
                "link-disabled": "#3d4e4a"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.warning"}
              subtitle={
                "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."
              }
              colors={{
                primary: "#765417",
                secondary: "#caa46b",
                link: "#765417",
                "on-primary": "#FAFAFA",
                backdrop: "#24070026",
                "on-secondary": "#241500",
                border: "#906c33",
                "primary-hovered": "#644400",
                "primary-active": "#503500",
                "primary-inactive": "#926f36",
                "primary-disabled": "#51483c",
                "secondary-hovered": "#ac884f",
                "secondary-active": "#906c33",
                "secondary-inactive": "#fbd399",
                "secondary-disabled": "#6a6054",
                "link-hovered": "#644400",
                "link-active": "#503500",
                "link-inactive": "#926f36",
                "link-disabled": "#51483c"
              }}
            />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  lightDimmed: (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
            title={"color.blue"}
            subtitle={"Pale periwinkle blue."}
            colors={{
              "1": "#96b2e1",
              "2": "#85a5dc",
              "3": "#7598d7",
              "4": "#638cd2",
              "5": "#527fcd",
              "6": "#4f73b1",
              "7": "#45649b",
              "8": "#3b5685",
              "9": "#31486f"
            }}
          />
          <ColorItem
            title={"color.green"}
            subtitle={"Pale mint green."}
            colors={{
              "1": "#b2d5b8",
              "2": "#97c6a5",
              "3": "#7bb796",
              "4": "#60a88a",
              "5": "#55957d",
              "6": "#49836f",
              "7": "#3e7160",
              "8": "#325d52",
              "9": "#284b41"
            }}
          />
          <ColorItem
            title={"color.neutral"}
            subtitle={"Bright off-white gray."}
            colors={{
              "1": "#d5d5d5",
              "2": "#cfcfcf",
              "3": "#cacaca",
              "4": "#c4c4c4",
              "5": "#b8b8b9",
              "6": "#adadad",
              "7": "#a1a1a2",
              "8": "#8f8f90",
              "9": "#7d7d7e",
              "10": "#626364",
              "11": "#57575a",
              "12": "#45464a",
              "13": "#3f4043",
              "14": "#3c3c3e",
              "15": "#39393c",
              "16": "#343438"
            }}
          />
          <ColorItem
            title={"color.orange"}
            subtitle={"Pale peach orange."}
            colors={{
              "1": "#d7ad96",
              "2": "#d2a287",
              "3": "#cc9678",
              "4": "#c78a69",
              "5": "#c17f5a",
              "6": "#b4714b",
              "7": "#a26238",
              "8": "#92542a",
              "9": "#814825"
            }}
          />
          <ColorItem
            title={"color.pink"}
            subtitle={"Pale blush pink."}
            colors={{
              "1": "#d9aac8",
              "2": "#d492b9",
              "3": "#ca87b0",
              "4": "#c57ba8",
              "5": "#c079a5",
              "6": "#be77a3",
              "7": "#a86d91",
              "8": "#875975",
              "9": "#5a3b4f"
            }}
          />
          <ColorItem
            title={"color.purple"}
            subtitle={"Pale lavender purple."}
            colors={{
              "1": "#b4a9d2",
              "2": "#a79acb",
              "3": "#9b8cc3",
              "4": "#8e7dbb",
              "5": "#8272aa",
              "6": "#756799",
              "7": "#675a8a",
              "8": "#594d7a",
              "9": "#4c416a"
            }}
          />
          <ColorItem
            title={"color.red"}
            subtitle={"Pale coral red."}
            colors={{
              "1": "#c28393",
              "2": "#bc7788",
              "3": "#b76a7e",
              "4": "#b15e73",
              "5": "#ab5268",
              "6": "#984a5e",
              "7": "#864254",
              "8": "#733a49",
              "9": "#61323e"
            }}
          />
          <ColorItem
            title={"color.yellow"}
            subtitle={"Pale wheat yellow."}
            colors={{
              "1": "#d5b67d",
              "2": "#d0ad6d",
              "3": "#caa45c",
              "4": "#c59b4d",
              "5": "#c0984d",
              "6": "#b5904d",
              "7": "#a58549",
              "8": "#917542",
              "9": "#786137"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Background"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.canvas"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."
            }
            colors={{
              canvas: "#cacaca"
            }}
          />
          <ColorItem
            title={"color.canvas-active"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 30% brighter)"
            }
            colors={{
              "canvas-active": "#8c8c8c"
            }}
          />
          <ColorItem
            title={"color.canvas-disabled"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "canvas-disabled": "#737374"
            }}
          />
          <ColorItem
            title={"color.canvas-hovered"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 15% brighter)"
            }
            colors={{
              "canvas-hovered": "#aaaaaa"
            }}
          />
          <ColorItem
            title={"color.canvas-inactive"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% less bright)"
            }
            colors={{
              "canvas-inactive": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.elevated"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."
            }
            colors={{
              elevated: "#d5d5d5"
            }}
          />
          <ColorItem
            title={"color.elevated-active"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 30% brighter)"
            }
            colors={{
              "elevated-active": "#939393"
            }}
          />
          <ColorItem
            title={"color.elevated-disabled"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "elevated-disabled": "#757577"
            }}
          />
          <ColorItem
            title={"color.elevated-hovered"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "elevated-hovered": "#b3b3b3"
            }}
          />
          <ColorItem
            title={"color.elevated-inactive"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "elevated-inactive": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.floating"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."
            }
            colors={{
              floating: "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.floating-active"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 30% brighter)"
            }
            colors={{
              "floating-active": "#959595"
            }}
          />
          <ColorItem
            title={"color.floating-disabled"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "floating-disabled": "#767677"
            }}
          />
          <ColorItem
            title={"color.floating-hovered"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "floating-hovered": "#b6b6b6"
            }}
          />
          <ColorItem
            title={"color.floating-inactive"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "floating-inactive": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.sunken"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."
            }
            colors={{
              sunken: "#c4c4c4"
            }}
          />
          <ColorItem
            title={"color.sunken-active"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 30% brighter)"
            }
            colors={{
              "sunken-active": "#888888"
            }}
          />
          <ColorItem
            title={"color.sunken-disabled"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "sunken-disabled": "#717172"
            }}
          />
          <ColorItem
            title={"color.sunken-hovered"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "sunken-hovered": "#a5a5a5"
            }}
          />
          <ColorItem
            title={"color.sunken-inactive"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "sunken-inactive": "#d9d9d9"
            }}
          />
          <ColorItem
            title={"color.surface"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."
            }
            colors={{
              surface: "#cfcfcf"
            }}
          />
          <ColorItem
            title={"color.surface-active"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 30% brighter)"
            }
            colors={{
              "surface-active": "#8f8f8f"
            }}
          />
          <ColorItem
            title={"color.surface-disabled"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "surface-disabled": "#747475"
            }}
          />
          <ColorItem
            title={"color.surface-hovered"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 15% brighter)"
            }
            colors={{
              "surface-hovered": "#aeaeae"
            }}
          />
          <ColorItem
            title={"color.surface-inactive"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% less bright)"
            }
            colors={{
              "surface-inactive": "#d9d9d9"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.emphasis"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
            }
            colors={{
              emphasis: "#3c3c3e"
            }}
          />
          <ColorItem
            title={"color.emphasis-active"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, pure black)"
            }
            colors={{
              "emphasis-active": "#262626"
            }}
          />
          <ColorItem
            title={"color.emphasis-disabled"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "emphasis-disabled": "#4d4d50"
            }}
          />
          <ColorItem
            title={"color.emphasis-hovered"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% less bright)"
            }
            colors={{
              "emphasis-hovered": "#5e5e60"
            }}
          />
          <ColorItem
            title={"color.emphasis-inactive"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "emphasis-inactive": "#7b7b7c"
            }}
          />
          <ColorItem
            title={"color.ink"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."
            }
            colors={{
              ink: "#626364"
            }}
          />
          <ColorItem
            title={"color.ink-active"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, light contrast primitive)"
            }
            colors={{
              "ink-active": "#2e2e30"
            }}
          />
          <ColorItem
            title={"color.ink-disabled"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "ink-disabled": "#59595b"
            }}
          />
          <ColorItem
            title={"color.ink-hovered"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% brighter)"
            }
            colors={{
              "ink-hovered": "#4d4d50"
            }}
          />
          <ColorItem
            title={"color.ink-inactive"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "ink-inactive": "#7b7b7c"
            }}
          />
          <ColorItem
            title={"color.subtle"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."
            }
            colors={{
              subtle: "#8f8f90"
            }}
          />
          <ColorItem
            title={"color.subtle-active"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"
            }
            colors={{
              "subtle-active": "#2e2e30"
            }}
          />
          <ColorItem
            title={"color.subtle-disabled"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "subtle-disabled": "#676769"
            }}
          />
          <ColorItem
            title={"color.subtle-hovered"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 25% brighter)"
            }
            colors={{
              "subtle-hovered": "#6c6c6e"
            }}
          />
          <ColorItem
            title={"color.subtle-inactive"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "subtle-inactive": "#7b7b7c"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.hairline"}
            subtitle={
              "Low-contrast color for borders, dividers and separators."
            }
            colors={{
              hairline: "#b8b8b9"
            }}
          />
          <ColorItem
            title={"color.hairline-active"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (active, light contrast primitive)"
            }
            colors={{
              "hairline-active": "#2e2e30"
            }}
          />
          <ColorItem
            title={"color.hairline-disabled"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "hairline-disabled": "#737374"
            }}
          />
          <ColorItem
            title={"color.hairline-hovered"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (hovered, 40% brighter)"
            }
            colors={{
              "hairline-hovered": "#6e6e6f"
            }}
          />
          <ColorItem
            title={"color.hairline-inactive"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "hairline-inactive": "#7b7b7c"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.black"}
            subtitle={"Near-black neutral."}
            colors={{
              black: "#2e2e30"
            }}
          />
          <ColorItem
            title={"color.white"}
            subtitle={"Pure white."}
            colors={{
              white: "#d9d9d9"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.data"}
            subtitle={
              "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."
            }
            colors={{
              "neutral.emphasis": "#626364",
              "neutral.subtle": "#cacaca",
              "red.emphasis": "#864254",
              "red.subtle": "#bc7788",
              "orange.emphasis": "#92542a",
              "orange.subtle": "#cc9678",
              "yellow.emphasis": "#786137",
              "yellow.subtle": "#caa45c",
              "green.emphasis": "#3e7160",
              "green.subtle": "#7bb796",
              "blue.emphasis": "#45649b",
              "blue.subtle": "#7598d7",
              "purple.emphasis": "#675a8a",
              "purple.subtle": "#9b8cc3",
              "pink.emphasis": "#875975",
              "pink.subtle": "#ca87b0"
            }}
          />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.base"}
              subtitle={
                "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
              }
              colors={{
                primary: "#39393c",
                secondary: "#a1a1a2",
                link: "#3280ad",
                "on-primary": "#d5d5d5",
                backdrop: "#24242c26",
                "on-secondary": "#d5d5d5",
                border: "#7a7a7a",
                "primary-hovered": "#5c5c5e",
                "primary-active": "#262626",
                "primary-inactive": "#7b7b7c",
                "primary-disabled": "#4d4d4f",
                "secondary-hovered": "#949495",
                "secondary-active": "#858585",
                "secondary-inactive": "#c4c4c5",
                "secondary-disabled": "#6c6c6e",
                "link-hovered": "#2d729a",
                "link-active": "#286488",
                "link-inactive": "#5c9ccb",
                "link-disabled": "#536370"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.brand"}
              subtitle={
                "The Storm Teal color is used as the primary brand color for Storm Software."
              }
              colors={{
                primary: "#449a93",
                secondary: "#ade7df",
                link: "#449a93",
                "on-primary": "#d5d5d5",
                backdrop: "#19574e26",
                "on-secondary": "#1f6c66",
                border: "#889f9c",
                "primary-hovered": "#298c85",
                "primary-active": "#247d76",
                "primary-inactive": "#6ebcb4",
                "primary-disabled": "#566b6a",
                "secondary-hovered": "#a0bdb9",
                "secondary-active": "#889f9c",
                "secondary-inactive": "#d9d9d9",
                "secondary-disabled": "#767c7c",
                "link-hovered": "#298c85",
                "link-active": "#247d76",
                "link-inactive": "#6ebcb4",
                "link-disabled": "#566b6a"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.danger"}
              subtitle={
                "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."
              }
              colors={{
                primary: "#864254",
                secondary: "#ce7f8d",
                link: "#864254",
                "on-primary": "#d5d5d5",
                backdrop: "#581a1b26",
                "on-secondary": "#4d1620",
                border: "#9b5e6b",
                "primary-hovered": "#7d2f48",
                "primary-active": "#73213e",
                "primary-inactive": "#975967",
                "primary-disabled": "#635157",
                "secondary-hovered": "#b2707d",
                "secondary-active": "#9b5e6b",
                "secondary-inactive": "#e4a3aa",
                "secondary-disabled": "#766568",
                "link-hovered": "#7d2f48",
                "link-active": "#73213e",
                "link-inactive": "#975967",
                "link-disabled": "#635157"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.discovery"}
              subtitle={
                "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."
              }
              colors={{
                primary: "#675a8a",
                secondary: "#9b8cc3",
                link: "#675a8a",
                "on-primary": "#d5d5d5",
                backdrop: "#331b5e26",
                "on-secondary": "#d5d5d5",
                border: "#786c96",
                "primary-hovered": "#5b4d7f",
                "primary-active": "#514075",
                "primary-inactive": "#796d9d",
                "primary-disabled": "#5a5665",
                "secondary-hovered": "#897cab",
                "secondary-active": "#786c96",
                "secondary-inactive": "#b2a2e4",
                "secondary-disabled": "#6a6775",
                "link-hovered": "#5b4d7f",
                "link-active": "#514075",
                "link-inactive": "#796d9d",
                "link-disabled": "#5a5665"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.info"}
              subtitle={
                "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."
              }
              colors={{
                primary: "#45649b",
                secondary: "#7598d7",
                link: "#45649b",
                "on-primary": "#d5d5d5",
                backdrop: "#1f1f6926",
                "on-secondary": "#d5d5d5",
                border: "#5873a4",
                "primary-hovered": "#355791",
                "primary-active": "#274a85",
                "primary-inactive": "#5a79af",
                "primary-disabled": "#515a6b",
                "secondary-hovered": "#6886bb",
                "secondary-active": "#5873a4",
                "secondary-inactive": "#9db7e3",
                "secondary-disabled": "#626a79",
                "link-hovered": "#355791",
                "link-active": "#274a85",
                "link-inactive": "#5a79af",
                "link-disabled": "#515a6b"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.success"}
              subtitle={
                "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."
              }
              colors={{
                primary: "#3e7160",
                secondary: "#7ba595",
                link: "#3e7160",
                "on-primary": "#d5d5d5",
                backdrop: "#154a2726",
                "on-secondary": "#164d3a",
                border: "#537d6e",
                "primary-hovered": "#256a57",
                "primary-active": "#1d6250",
                "primary-inactive": "#578172",
                "primary-disabled": "#515d5a",
                "secondary-hovered": "#698f81",
                "secondary-active": "#537d6e",
                "secondary-inactive": "#96ccb6",
                "secondary-disabled": "#636d6a",
                "link-hovered": "#256a57",
                "link-active": "#1d6250",
                "link-inactive": "#578172",
                "link-disabled": "#515d5a"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.warning"}
              subtitle={
                "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."
              }
              colors={{
                primary: "#786137",
                secondary: "#af9876",
                link: "#786137",
                "on-primary": "#d5d5d5",
                backdrop: "#4f221726",
                "on-secondary": "#4f3817",
                border: "#86714f",
                "primary-hovered": "#725821",
                "primary-active": "#674e1e",
                "primary-inactive": "#887351",
                "primary-disabled": "#5f5950",
                "secondary-hovered": "#988464",
                "secondary-active": "#86714f",
                "secondary-inactive": "#dabb8d",
                "secondary-disabled": "#6f6962",
                "link-hovered": "#725821",
                "link-active": "#674e1e",
                "link-inactive": "#887351",
                "link-disabled": "#5f5950"
              }}
            />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  lightHighContrast: (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
            title={"color.blue"}
            subtitle={"Pale periwinkle blue."}
            colors={{
              "1": "#f8fbff",
              "2": "#cbdeff",
              "3": "#9ec1ff",
              "4": "#70a4ff",
              "5": "#4387ff",
              "6": "#025eff",
              "7": "#0145be",
              "8": "#012e7c",
              "9": "#00163b"
            }}
          />
          <ColorItem
            title={"color.green"}
            subtitle={"Pale mint green."}
            colors={{
              "1": "#ffffff",
              "2": "#c9f8d8",
              "3": "#7ceeaf",
              "4": "#2de498",
              "5": "#1db77c",
              "6": "#13825b",
              "7": "#0a4e38",
              "8": "#031611",
              "9": "#000000"
            }}
          />
          <ColorItem
            title={"color.neutral"}
            subtitle={"Bright off-white gray."}
            colors={{
              "1": "#ffffff",
              "2": "#ffffff",
              "3": "#ffffff",
              "4": "#ffffff",
              "5": "#f4f4f6",
              "6": "#dcdce0",
              "7": "#c3c3ca",
              "8": "#9a9fa7",
              "9": "#737383",
              "10": "#3f424a",
              "11": "#2b2b33",
              "12": "#0b0b0e",
              "13": "#000000",
              "14": "#000000",
              "15": "#000000",
              "16": "#000000"
            }}
          />
          <ColorItem
            title={"color.orange"}
            subtitle={"Pale peach orange."}
            colors={{
              "1": "#ffeee5",
              "2": "#ffd3bb",
              "3": "#ffb890",
              "4": "#ff9c65",
              "5": "#ff803a",
              "6": "#ff5c00",
              "7": "#b24600",
              "8": "#742f00",
              "9": "#471b00"
            }}
          />
          <ColorItem
            title={"color.pink"}
            subtitle={"Pale blush pink."}
            colors={{
              "1": "#ffffff",
              "2": "#ffd5ee",
              "3": "#ffaade",
              "4": "#ff85d0",
              "5": "#fa7dcb",
              "6": "#f976c6",
              "7": "#dc50a6",
              "8": "#932b6b",
              "9": "#1c0815"
            }}
          />
          <ColorItem
            title={"color.purple"}
            subtitle={"Pale lavender purple."}
            colors={{
              "1": "#ffffff",
              "2": "#e1d7fb",
              "3": "#c1adf7",
              "4": "#a283f3",
              "5": "#815ddd",
              "6": "#623dc3",
              "7": "#492b9b",
              "8": "#321c71",
              "9": "#1d0f42"
            }}
          />
          <ColorItem
            title={"color.red"}
            subtitle={"Pale coral red."}
            colors={{
              "1": "#f997b0",
              "2": "#f77395",
              "3": "#f6507a",
              "4": "#f42c5f",
              "5": "#f00a45",
              "6": "#b90a37",
              "7": "#840929",
              "8": "#510619",
              "9": "#1d0309"
            }}
          />
          <ColorItem
            title={"color.yellow"}
            subtitle={"Pale wheat yellow."}
            colors={{
              "1": "#ffe1ab",
              "2": "#ffd280",
              "3": "#ffc253",
              "4": "#ffb327",
              "5": "#ffb01e",
              "6": "#ffa706",
              "7": "#dc8f00",
              "8": "#a26902",
              "9": "#583902"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Background"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.canvas"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."
            }
            colors={{
              canvas: "#ffffff"
            }}
          />
          <ColorItem
            title={"color.canvas-active"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 30% brighter)"
            }
            colors={{
              "canvas-active": "#999999"
            }}
          />
          <ColorItem
            title={"color.canvas-disabled"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "canvas-disabled": "#60606c"
            }}
          />
          <ColorItem
            title={"color.canvas-hovered"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 15% brighter)"
            }
            colors={{
              "canvas-hovered": "#d7d7d7"
            }}
          />
          <ColorItem
            title={"color.canvas-inactive"}
            subtitle={
              "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% less bright)"
            }
            colors={{
              "canvas-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.elevated"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."
            }
            colors={{
              elevated: "#ffffff"
            }}
          />
          <ColorItem
            title={"color.elevated-active"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 30% brighter)"
            }
            colors={{
              "elevated-active": "#a7a7a7"
            }}
          />
          <ColorItem
            title={"color.elevated-disabled"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "elevated-disabled": "#656573"
            }}
          />
          <ColorItem
            title={"color.elevated-hovered"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "elevated-hovered": "#eaeaea"
            }}
          />
          <ColorItem
            title={"color.elevated-inactive"}
            subtitle={
              "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "elevated-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.floating"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."
            }
            colors={{
              floating: "#ffffff"
            }}
          />
          <ColorItem
            title={"color.floating-active"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 30% brighter)"
            }
            colors={{
              "floating-active": "#acacac"
            }}
          />
          <ColorItem
            title={"color.floating-disabled"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "floating-disabled": "#676774"
            }}
          />
          <ColorItem
            title={"color.floating-hovered"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "floating-hovered": "#f1f1f1"
            }}
          />
          <ColorItem
            title={"color.floating-inactive"}
            subtitle={
              "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "floating-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.sunken"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."
            }
            colors={{
              sunken: "#ffffff"
            }}
          />
          <ColorItem
            title={"color.sunken-active"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 30% brighter)"
            }
            colors={{
              "sunken-active": "#909090"
            }}
          />
          <ColorItem
            title={"color.sunken-disabled"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "sunken-disabled": "#5d5d69"
            }}
          />
          <ColorItem
            title={"color.sunken-hovered"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 15% brighter)"
            }
            colors={{
              "sunken-hovered": "#cdcdcd"
            }}
          />
          <ColorItem
            title={"color.sunken-inactive"}
            subtitle={
              "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% less bright)"
            }
            colors={{
              "sunken-inactive": "#ffffff"
            }}
          />
          <ColorItem
            title={"color.surface"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."
            }
            colors={{
              surface: "#ffffff"
            }}
          />
          <ColorItem
            title={"color.surface-active"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 30% brighter)"
            }
            colors={{
              "surface-active": "#9f9f9f"
            }}
          />
          <ColorItem
            title={"color.surface-disabled"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 25% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "surface-disabled": "#636370"
            }}
          />
          <ColorItem
            title={"color.surface-hovered"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 15% brighter)"
            }
            colors={{
              "surface-hovered": "#e0e0e0"
            }}
          />
          <ColorItem
            title={"color.surface-inactive"}
            subtitle={
              "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% less bright)"
            }
            colors={{
              "surface-inactive": "#ffffff"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.emphasis"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
            }
            colors={{
              emphasis: "#000000"
            }}
          />
          <ColorItem
            title={"color.emphasis-active"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, pure black)"
            }
            colors={{
              "emphasis-active": "#000000"
            }}
          />
          <ColorItem
            title={"color.emphasis-disabled"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "emphasis-disabled": "#18181c"
            }}
          />
          <ColorItem
            title={"color.emphasis-hovered"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% less bright)"
            }
            colors={{
              "emphasis-hovered": "#373740"
            }}
          />
          <ColorItem
            title={"color.emphasis-inactive"}
            subtitle={
              "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "emphasis-inactive": "#70707f"
            }}
          />
          <ColorItem
            title={"color.ink"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."
            }
            colors={{
              ink: "#3f424a"
            }}
          />
          <ColorItem
            title={"color.ink-active"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, light contrast primitive)"
            }
            colors={{
              "ink-active": "#000000"
            }}
          />
          <ColorItem
            title={"color.ink-disabled"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "ink-disabled": "#2e3036"
            }}
          />
          <ColorItem
            title={"color.ink-hovered"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% brighter)"
            }
            colors={{
              "ink-hovered": "#17181c"
            }}
          />
          <ColorItem
            title={"color.ink-inactive"}
            subtitle={
              "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "ink-inactive": "#70707f"
            }}
          />
          <ColorItem
            title={"color.subtle"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."
            }
            colors={{
              subtle: "#9a9fa7"
            }}
          />
          <ColorItem
            title={"color.subtle-active"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"
            }
            colors={{
              "subtle-active": "#000000"
            }}
          />
          <ColorItem
            title={"color.subtle-disabled"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "subtle-disabled": "#494954"
            }}
          />
          <ColorItem
            title={"color.subtle-hovered"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 25% brighter)"
            }
            colors={{
              "subtle-hovered": "#53535f"
            }}
          />
          <ColorItem
            title={"color.subtle-inactive"}
            subtitle={
              "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "subtle-inactive": "#70707f"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
            title={"color.hairline"}
            subtitle={
              "Low-contrast color for borders, dividers and separators."
            }
            colors={{
              hairline: "#f4f4f6"
            }}
          />
          <ColorItem
            title={"color.hairline-active"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (active, light contrast primitive)"
            }
            colors={{
              "hairline-active": "#000000"
            }}
          />
          <ColorItem
            title={"color.hairline-disabled"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (disabled, 85% saturation, 30% over oklch(0.3839 0.0045 286.26))"
            }
            colors={{
              "hairline-disabled": "#60606e"
            }}
          />
          <ColorItem
            title={"color.hairline-hovered"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (hovered, 40% brighter)"
            }
            colors={{
              "hairline-hovered": "#575762"
            }}
          />
          <ColorItem
            title={"color.hairline-inactive"}
            subtitle={
              "Low-contrast color for borders, dividers and separators. (inactive, 50% of the light contrast primitive's brightness)"
            }
            colors={{
              "hairline-inactive": "#70707f"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.black"}
            subtitle={"Near-black neutral."}
            colors={{
              black: "#000000"
            }}
          />
          <ColorItem
            title={"color.white"}
            subtitle={"Pure white."}
            colors={{
              white: "#ffffff"
            }}
          />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
            title={"color.data"}
            subtitle={
              "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."
            }
            colors={{
              "neutral.emphasis": "#3f424a",
              "neutral.subtle": "#ffffff",
              "red.emphasis": "#840929",
              "red.subtle": "#f77395",
              "orange.emphasis": "#742f00",
              "orange.subtle": "#ffb890",
              "yellow.emphasis": "#583902",
              "yellow.subtle": "#ffc253",
              "green.emphasis": "#0a4e38",
              "green.subtle": "#7ceeaf",
              "blue.emphasis": "#0145be",
              "blue.subtle": "#9ec1ff",
              "purple.emphasis": "#492b9b",
              "purple.subtle": "#c1adf7",
              "pink.emphasis": "#932b6b",
              "pink.subtle": "#ffaade"
            }}
          />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.base"}
              subtitle={
                "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."
              }
              colors={{
                primary: "#000000",
                secondary: "#c3c3ca",
                link: "#0077bc",
                "on-primary": "#ffffff",
                backdrop: "#00000026",
                "on-secondary": "#ffffff",
                border: "#6d6d7a",
                "primary-hovered": "#34343b",
                "primary-active": "#000000",
                "primary-inactive": "#70707f",
                "primary-disabled": "#16161b",
                "secondary-hovered": "#a6a6b0",
                "secondary-active": "#858592",
                "secondary-inactive": "#ffffff",
                "secondary-disabled": "#53535f",
                "link-hovered": "#00578b",
                "link-active": "#00385b",
                "link-inactive": "#54b6ff",
                "link-disabled": "#25445d"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.brand"}
              subtitle={
                "The Storm Teal color is used as the primary brand color for Storm Software."
              }
              colors={{
                primary: "#00bcad",
                secondary: "#ffffff",
                link: "#00bcad",
                "on-primary": "#ffffff",
                backdrop: "#00000026",
                "on-secondary": "#00100f",
                border: "#8ec5be",
                "primary-hovered": "#00655f",
                "primary-active": "#003d38",
                "primary-inactive": "#5cfbeb",
                "primary-disabled": "#2b5351",
                "secondary-hovered": "#d3f0ec",
                "secondary-active": "#8ec5be",
                "secondary-inactive": "#ffffff",
                "secondary-disabled": "#667e7e",
                "link-hovered": "#00655f",
                "link-active": "#003d38",
                "link-inactive": "#5cfbeb",
                "link-disabled": "#2b5351"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.danger"}
              subtitle={
                "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."
              }
              colors={{
                primary: "#840929",
                secondary: "#ffa1b1",
                link: "#840929",
                "on-primary": "#ffffff",
                backdrop: "#00000026",
                "on-secondary": "#000000",
                border: "#c82b4c",
                "primary-hovered": "#52001b",
                "primary-active": "#21000c",
                "primary-inactive": "#bc2445",
                "primary-disabled": "#40242c",
                "secondary-hovered": "#ec5d78",
                "secondary-active": "#c82b4c",
                "secondary-inactive": "#ffffff",
                "secondary-disabled": "#70444d",
                "link-hovered": "#52001b",
                "link-active": "#21000c",
                "link-inactive": "#bc2445",
                "link-disabled": "#40242c"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.discovery"}
              subtitle={
                "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."
              }
              colors={{
                primary: "#492b9b",
                secondary: "#c1adf7",
                link: "#492b9b",
                "on-primary": "#ffffff",
                backdrop: "#00000026",
                "on-secondary": "#ffffff",
                border: "#6b48bb",
                "primary-hovered": "#361b7b",
                "primary-active": "#240c59",
                "primary-inactive": "#6c4ec9",
                "primary-disabled": "#322c48",
                "secondary-hovered": "#9377dc",
                "secondary-active": "#6b48bb",
                "secondary-inactive": "#ffffff",
                "secondary-disabled": "#51496e",
                "link-hovered": "#361b7b",
                "link-active": "#240c59",
                "link-inactive": "#6c4ec9",
                "link-disabled": "#322c48"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.info"}
              subtitle={
                "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."
              }
              colors={{
                primary: "#0145be",
                secondary: "#9ec1ff",
                link: "#0145be",
                "on-primary": "#ffffff",
                backdrop: "#00000826",
                "on-secondary": "#ffffff",
                border: "#1b61df",
                "primary-hovered": "#003288",
                "primary-active": "#001f52",
                "primary-inactive": "#216df4",
                "primary-disabled": "#243350",
                "secondary-hovered": "#4d8dfe",
                "secondary-active": "#1b61df",
                "secondary-inactive": "#ffffff",
                "secondary-disabled": "#3e5277",
                "link-hovered": "#003288",
                "link-active": "#001f52",
                "link-inactive": "#216df4",
                "link-disabled": "#243350"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.success"}
              subtitle={
                "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."
              }
              colors={{
                primary: "#0a4e38",
                secondary: "#72d1ac",
                link: "#0a4e38",
                "on-primary": "#ffffff",
                backdrop: "#00000026",
                "on-secondary": "#000000",
                border: "#237b5b",
                "primary-hovered": "#001812",
                "primary-active": "#000000",
                "primary-inactive": "#298565",
                "primary-disabled": "#223530",
                "secondary-hovered": "#45ac85",
                "secondary-active": "#237b5b",
                "secondary-inactive": "#d0fdea",
                "secondary-disabled": "#415c54",
                "link-hovered": "#001812",
                "link-active": "#000000",
                "link-inactive": "#298565",
                "link-disabled": "#223530"
              }}
            />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
              title={"color.warning"}
              subtitle={
                "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."
              }
              colors={{
                primary: "#583902",
                secondary: "#e3b36a",
                link: "#583902",
                "on-primary": "#ffffff",
                backdrop: "#00000026",
                "on-secondary": "#000000",
                border: "#8e611a",
                "primary-hovered": "#1e1500",
                "primary-active": "#010100",
                "primary-inactive": "#92661d",
                "primary-disabled": "#382e22",
                "secondary-hovered": "#c18c38",
                "secondary-active": "#8e611a",
                "secondary-inactive": "#ffefd8",
                "secondary-disabled": "#615240",
                "link-hovered": "#1e1500",
                "link-active": "#010100",
                "link-inactive": "#92661d",
                "link-disabled": "#382e22"
              }}
            />
          </ColorPalette>
        </section>
      </section>
    </>
  )
};

export interface ColorPaletteBlockProps {
  /** Generated token-set name. Defaults to the first generated variant. */
  theme?: string;
}

export function ColorPaletteBlock({ theme }: ColorPaletteBlockProps = {}) {
  const activeTheme = resolveThemeVariant(COLOR_VARIANTS, "dark", theme);

  return COLOR_VARIANTS[activeTheme];
}
