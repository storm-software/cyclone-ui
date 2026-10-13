import { ColorPalette, ColorItem } from "@storybook/addon-docs/blocks";
import { resolveThemeVariant } from "./ThemeVariant";


/**
 * Color tokens rendered with Storybook's ColorPalette doc block.
 *
 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-colorpalette
 */
const COLOR_VARIANTS = {
  "dark": (
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
            "5": "#cacacb",
            "6": "#b0b0b1",
            "7": "#959698",
            "8": "#7b7b7e",
            "9": "#555659",
            "10": "#46464a",
            "11": "#2b2c30",
            "12": "#242528",
            "13": "#1f1f21",
            "14": "#151518"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#151518"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 4% brighter)"}
      colors={{
            "canvas-active": "#17171a"
      }}
    />
          <ColorItem
      title={"color.canvas-disabled"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "canvas-disabled": "#242427"
      }}
    />
          <ColorItem
      title={"color.canvas-hovered"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 4% brighter)"}
      colors={{
            "canvas-hovered": "#17171a"
      }}
    />
          <ColorItem
      title={"color.canvas-inactive"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% darker)"}
      colors={{
            "canvas-inactive": "#111114"
      }}
    />
          <ColorItem
      title={"color.elevated"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "elevated": "#242528"
      }}
    />
          <ColorItem
      title={"color.elevated-active"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 4% brighter)"}
      colors={{
            "elevated-active": "#26272a"
      }}
    />
          <ColorItem
      title={"color.elevated-disabled"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "elevated-disabled": "#2e2f32"
      }}
    />
          <ColorItem
      title={"color.elevated-hovered"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 4% brighter)"}
      colors={{
            "elevated-hovered": "#26272a"
      }}
    />
          <ColorItem
      title={"color.elevated-inactive"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% darker)"}
      colors={{
            "elevated-inactive": "#1e1f22"
      }}
    />
          <ColorItem
      title={"color.floating"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "floating": "#2b2c30"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 4% brighter)"}
      colors={{
            "floating-active": "#2e2f33"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#333337"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 4% brighter)"}
      colors={{
            "floating-hovered": "#2e2f33"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% darker)"}
      colors={{
            "floating-inactive": "#242529"
      }}
    />
          <ColorItem
      title={"color.sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.sunken-active"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 4% brighter)"}
      colors={{
            "sunken-active": "#0d0d0e"
      }}
    />
          <ColorItem
      title={"color.sunken-disabled"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "sunken-disabled": "#1e1e20"
      }}
    />
          <ColorItem
      title={"color.sunken-hovered"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 4% brighter)"}
      colors={{
            "sunken-hovered": "#0d0d0e"
      }}
    />
          <ColorItem
      title={"color.sunken-inactive"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% darker)"}
      colors={{
            "sunken-inactive": "#09090a"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface": "#1f1f21"
      }}
    />
          <ColorItem
      title={"color.surface-active"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 4% brighter)"}
      colors={{
            "surface-active": "#212123"
      }}
    />
          <ColorItem
      title={"color.surface-disabled"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "surface-disabled": "#2b2b2d"
      }}
    />
          <ColorItem
      title={"color.surface-hovered"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 4% brighter)"}
      colors={{
            "surface-hovered": "#212123"
      }}
    />
          <ColorItem
      title={"color.surface-inactive"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% darker)"}
      colors={{
            "surface-inactive": "#19191b"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.emphasis"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "emphasis": "#f1f1f1"
      }}
    />
          <ColorItem
      title={"color.emphasis-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, dark contrast primitive)"}
      colors={{
            "emphasis-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.emphasis-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "emphasis-disabled": "#808082"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% darker)"}
      colors={{
            "emphasis-hovered": "#a1a1a1"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
            "emphasis-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#cacacb"
      }}
    />
          <ColorItem
      title={"color.ink-active"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, dark contrast primitive)"}
      colors={{
            "ink-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.ink-disabled"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "ink-disabled": "#727275"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% darker)"}
      colors={{
            "ink-hovered": "#7d7d7e"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 40% darker)"}
      colors={{
            "ink-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtle": "#959698"
      }}
    />
          <ColorItem
      title={"color.subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"}
      colors={{
            "subtle-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtle-disabled": "#606063"
      }}
    />
          <ColorItem
      title={"color.subtle-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, dark contrast primitive)"}
      colors={{
            "subtle-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtle-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#555659"
      }}
    />
          <ColorItem
      title={"color.subtlest-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"}
      colors={{
            "subtlest-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtlest-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtlest-disabled": "#494a4d"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, dark contrast primitive)"}
      colors={{
            "subtlest-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtlest-inactive": "#808080"
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
            "black": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"Pure white."}
      colors={{
            "white": "#ffffff"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.backdrop"}
      subtitle={"Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container."}
      colors={{
            "backdrop": "#0d0c0766"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#fafafa",
            "neutral.subtle": "#151518",
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
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#46464a"
      }}
    />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#f1f1f1",
              "secondary": "#7b7b7e",
              "on-primary": "#151518",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#a1a1a1",
              "primary-active": "#ffffff",
              "primary-inactive": "#808080",
              "primary-disabled": "#808082",
              "secondary-hovered": "#919194",
              "secondary-active": "#919194",
              "secondary-inactive": "#808080",
              "secondary-disabled": "#57575a"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.danger"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "primary": "#cf2d56",
              "secondary": "#620020",
              "on-primary": "#FAFAFA",
              "on-secondary": "#ffa6b0",
              "primary-hovered": "#ff607f",
              "primary-active": "#ff607f",
              "primary-inactive": "#a70037",
              "primary-disabled": "#70424d",
              "secondary-hovered": "#7b1f34",
              "secondary-active": "#7b1f34",
              "secondary-inactive": "#4e0011",
              "secondary-disabled": "#4c313a"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.discovery"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "primary": "#9277da",
              "secondary": "#362661",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#c3a9ff",
              "primary-active": "#c3a9ff",
              "primary-inactive": "#6d51b0",
              "primary-disabled": "#5e5776",
              "secondary-hovered": "#4b3c79",
              "secondary-active": "#4b3c79",
              "secondary-inactive": "#27144e",
              "secondary-disabled": "#3e3a4d"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Hairline"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
              "hairline-active": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.hairline-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "hairline-disabled": "#444447"
      }}
    />
            <ColorItem
      title={"color.hairline-hovered"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, dark contrast primitive)"}
      colors={{
              "hairline-hovered": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "hairline-inactive": "#808080"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.info"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "primary": "#4d8eff",
              "secondary": "#19438c",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#7fc4ff",
              "primary-active": "#7fc4ff",
              "primary-inactive": "#2564d1",
              "primary-disabled": "#4b5e81",
              "secondary-hovered": "#3560ac",
              "secondary-active": "#3560ac",
              "secondary-inactive": "#022c73",
              "secondary-disabled": "#37445b"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "primary": "#45c791",
              "secondary": "#006140",
              "on-primary": "#FAFAFA",
              "on-secondary": "#ffffff",
              "primary-hovered": "#89ffcc",
              "primary-active": "#89ffcc",
              "primary-inactive": "#009865",
              "primary-disabled": "#4c7062",
              "secondary-hovered": "#31815e",
              "secondary-active": "#31815e",
              "secondary-inactive": "#004829",
              "secondary-disabled": "#354d45"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "primary": "#f7ac23",
              "secondary": "#764e00",
              "on-primary": "#151518",
              "on-secondary": "#ffffff",
              "primary-hovered": "#b56e00",
              "primary-active": "#b56e00",
              "primary-inactive": "#ffe067",
              "primary-disabled": "#7f6948",
              "secondary-hovered": "#996f2f",
              "secondary-active": "#996f2f",
              "secondary-inactive": "#5b3500",
              "secondary-disabled": "#534837"
      }}
    />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  "darkDimmed": (
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
            "5": "#b4b4b4",
            "6": "#a1a1a2",
            "7": "#8f8f90",
            "8": "#7d7d7e",
            "9": "#626364",
            "10": "#57575a",
            "11": "#444548",
            "12": "#3f4043",
            "13": "#3c3c3e",
            "14": "#343438"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#343438"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 4% brighter)"}
      colors={{
            "canvas-active": "#363639"
      }}
    />
          <ColorItem
      title={"color.canvas-disabled"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "canvas-disabled": "#3f3f42"
      }}
    />
          <ColorItem
      title={"color.canvas-hovered"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 4% brighter)"}
      colors={{
            "canvas-hovered": "#363639"
      }}
    />
          <ColorItem
      title={"color.canvas-inactive"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% darker)"}
      colors={{
            "canvas-inactive": "#313135"
      }}
    />
          <ColorItem
      title={"color.elevated"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "elevated": "#3f4043"
      }}
    />
          <ColorItem
      title={"color.elevated-active"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 4% brighter)"}
      colors={{
            "elevated-active": "#404144"
      }}
    />
          <ColorItem
      title={"color.elevated-disabled"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "elevated-disabled": "#464749"
      }}
    />
          <ColorItem
      title={"color.elevated-hovered"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 4% brighter)"}
      colors={{
            "elevated-hovered": "#404144"
      }}
    />
          <ColorItem
      title={"color.elevated-inactive"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% darker)"}
      colors={{
            "elevated-inactive": "#3b3c3f"
      }}
    />
          <ColorItem
      title={"color.floating"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "floating": "#444548"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 4% brighter)"}
      colors={{
            "floating-active": "#46474a"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#4a4a4d"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 4% brighter)"}
      colors={{
            "floating-hovered": "#46474a"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% darker)"}
      colors={{
            "floating-inactive": "#3f4044"
      }}
    />
          <ColorItem
      title={"color.sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.sunken-active"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 4% brighter)"}
      colors={{
            "sunken-active": "#2f2f31"
      }}
    />
          <ColorItem
      title={"color.sunken-disabled"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "sunken-disabled": "#3b3b3d"
      }}
    />
          <ColorItem
      title={"color.sunken-hovered"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 4% brighter)"}
      colors={{
            "sunken-hovered": "#2f2f31"
      }}
    />
          <ColorItem
      title={"color.sunken-inactive"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% darker)"}
      colors={{
            "sunken-inactive": "#2c2c2e"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface": "#3c3c3e"
      }}
    />
          <ColorItem
      title={"color.surface-active"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 4% brighter)"}
      colors={{
            "surface-active": "#3d3d3f"
      }}
    />
          <ColorItem
      title={"color.surface-disabled"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "surface-disabled": "#444446"
      }}
    />
          <ColorItem
      title={"color.surface-hovered"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 4% brighter)"}
      colors={{
            "surface-hovered": "#3d3d3f"
      }}
    />
          <ColorItem
      title={"color.surface-inactive"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% darker)"}
      colors={{
            "surface-inactive": "#37373a"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.emphasis"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "emphasis": "#cfcfcf"
      }}
    />
          <ColorItem
      title={"color.emphasis-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, dark contrast primitive)"}
      colors={{
            "emphasis-active": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.emphasis-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "emphasis-disabled": "#808081"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% darker)"}
      colors={{
            "emphasis-hovered": "#979797"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
            "emphasis-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#b4b4b4"
      }}
    />
          <ColorItem
      title={"color.ink-active"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, dark contrast primitive)"}
      colors={{
            "ink-active": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.ink-disabled"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "ink-disabled": "#767678"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% darker)"}
      colors={{
            "ink-hovered": "#7e7e7e"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 40% darker)"}
      colors={{
            "ink-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtle": "#8f8f90"
      }}
    />
          <ColorItem
      title={"color.subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"}
      colors={{
            "subtle-active": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtle-disabled": "#6a6a6b"
      }}
    />
          <ColorItem
      title={"color.subtle-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, dark contrast primitive)"}
      colors={{
            "subtle-hovered": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtle-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#626364"
      }}
    />
          <ColorItem
      title={"color.subtlest-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"}
      colors={{
            "subtlest-active": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.subtlest-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtlest-disabled": "#595a5c"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, dark contrast primitive)"}
      colors={{
            "subtlest-hovered": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtlest-inactive": "#808080"
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
            "black": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"Pure white."}
      colors={{
            "white": "#d9d9d9"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.backdrop"}
      subtitle={"Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container."}
      colors={{
            "backdrop": "#35322666"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#d5d5d5",
            "neutral.subtle": "#343438",
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
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#57575a"
      }}
    />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#cfcfcf",
              "secondary": "#7d7d7e",
              "on-primary": "#343438",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#979797",
              "primary-active": "#d9d9d9",
              "primary-inactive": "#808080",
              "primary-disabled": "#808081",
              "secondary-hovered": "#8c8c8e",
              "secondary-active": "#8c8c8e",
              "secondary-inactive": "#808080",
              "secondary-disabled": "#636365"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.danger"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "primary": "#ab5268",
              "secondary": "#70213b",
              "on-primary": "#d5d5d5",
              "on-secondary": "#e0939c",
              "primary-hovered": "#d56d82",
              "primary-active": "#d56d82",
              "primary-inactive": "#962c4f",
              "primary-disabled": "#73565d",
              "secondary-hovered": "#7a3e4c",
              "secondary-active": "#7a3e4c",
              "secondary-inactive": "#661d2d",
              "secondary-disabled": "#5c484f"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.discovery"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "primary": "#8e7dbb",
              "secondary": "#4c416a",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#ac95e0",
              "primary-active": "#ac95e0",
              "primary-inactive": "#75669a",
              "primary-disabled": "#696577",
              "secondary-hovered": "#5c5378",
              "secondary-active": "#5c5378",
              "secondary-inactive": "#403160",
              "secondary-disabled": "#524f5c"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Hairline"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
              "hairline-active": "#d9d9d9"
      }}
    />
            <ColorItem
      title={"color.hairline-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "hairline-disabled": "#565658"
      }}
    />
            <ColorItem
      title={"color.hairline-hovered"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, dark contrast primitive)"}
      colors={{
              "hairline-hovered": "#d9d9d9"
      }}
    />
            <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "hairline-inactive": "#808080"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.info"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "primary": "#638cd2",
              "secondary": "#3b5685",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#7eb0da",
              "primary-active": "#7eb0da",
              "primary-inactive": "#4d70ac",
              "primary-disabled": "#5e697e",
              "secondary-hovered": "#536c97",
              "secondary-active": "#536c97",
              "secondary-inactive": "#254479",
              "secondary-disabled": "#4d5665"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "primary": "#60a88a",
              "secondary": "#207055",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d9d9d9",
              "primary-hovered": "#84dbb5",
              "primary-active": "#84dbb5",
              "primary-inactive": "#298e6c",
              "primary-disabled": "#5d736a",
              "secondary-hovered": "#4c7d68",
              "secondary-active": "#4c7d68",
              "secondary-inactive": "#1d6244",
              "secondary-disabled": "#4b5c57"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "primary": "#c59b4d",
              "secondary": "#7b5e24",
              "on-primary": "#343438",
              "on-secondary": "#d9d9d9",
              "primary-hovered": "#9d722e",
              "primary-active": "#9d722e",
              "primary-inactive": "#d6c171",
              "primary-disabled": "#7c6f5b",
              "secondary-hovered": "#8c734d",
              "secondary-active": "#8c734d",
              "secondary-inactive": "#6d4c20",
              "secondary-disabled": "#60594d"
      }}
    />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  "darkHighContrast": (
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
            "5": "#ebebed",
            "6": "#c3c3ca",
            "7": "#9a9fa7",
            "8": "#737383",
            "9": "#3f424a",
            "10": "#2b2b33",
            "11": "#08080a",
            "12": "#000000",
            "13": "#000000",
            "14": "#000000"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#000000"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 4% brighter)"}
      colors={{
            "canvas-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.canvas-disabled"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "canvas-disabled": "#000000"
      }}
    />
          <ColorItem
      title={"color.canvas-hovered"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 4% brighter)"}
      colors={{
            "canvas-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.canvas-inactive"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% darker)"}
      colors={{
            "canvas-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.elevated"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "elevated": "#000000"
      }}
    />
          <ColorItem
      title={"color.elevated-active"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 4% brighter)"}
      colors={{
            "elevated-active": "#010101"
      }}
    />
          <ColorItem
      title={"color.elevated-disabled"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "elevated-disabled": "#0b0c0e"
      }}
    />
          <ColorItem
      title={"color.elevated-hovered"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 4% brighter)"}
      colors={{
            "elevated-hovered": "#010101"
      }}
    />
          <ColorItem
      title={"color.elevated-inactive"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% darker)"}
      colors={{
            "elevated-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.floating"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "floating": "#08080a"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 4% brighter)"}
      colors={{
            "floating-active": "#0b0c0e"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#121215"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 4% brighter)"}
      colors={{
            "floating-hovered": "#0b0c0e"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% darker)"}
      colors={{
            "floating-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#000000"
      }}
    />
          <ColorItem
      title={"color.sunken-active"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 4% brighter)"}
      colors={{
            "sunken-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.sunken-disabled"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "sunken-disabled": "#000000"
      }}
    />
          <ColorItem
      title={"color.sunken-hovered"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 4% brighter)"}
      colors={{
            "sunken-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.sunken-inactive"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% darker)"}
      colors={{
            "sunken-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface-active"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 4% brighter)"}
      colors={{
            "surface-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface-disabled"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "surface-disabled": "#060607"
      }}
    />
          <ColorItem
      title={"color.surface-hovered"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 4% brighter)"}
      colors={{
            "surface-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface-inactive"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% darker)"}
      colors={{
            "surface-inactive": "#000000"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Foreground"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.emphasis"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "emphasis": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.emphasis-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, dark contrast primitive)"}
      colors={{
            "emphasis-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.emphasis-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "emphasis-disabled": "#7a7a89"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% darker)"}
      colors={{
            "emphasis-hovered": "#b0b0b0"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
            "emphasis-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#ebebed"
      }}
    />
          <ColorItem
      title={"color.ink-active"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, dark contrast primitive)"}
      colors={{
            "ink-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.ink-disabled"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "ink-disabled": "#676776"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 25% darker)"}
      colors={{
            "ink-hovered": "#767684"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 40% darker)"}
      colors={{
            "ink-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtle": "#9a9fa7"
      }}
    />
          <ColorItem
      title={"color.subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"}
      colors={{
            "subtle-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtle-disabled": "#4e4e5a"
      }}
    />
          <ColorItem
      title={"color.subtle-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, dark contrast primitive)"}
      colors={{
            "subtle-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtle-inactive": "#808080"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#3f424a"
      }}
    />
          <ColorItem
      title={"color.subtlest-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, dark contrast primitive)"}
      colors={{
            "subtlest-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtlest-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtlest-disabled": "#2f3138"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, dark contrast primitive)"}
      colors={{
            "subtlest-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtlest-inactive": "#808080"
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
            "black": "#000000"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"Pure white."}
      colors={{
            "white": "#ffffff"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.backdrop"}
      subtitle={"Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container."}
      colors={{
            "backdrop": "#00000066"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
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
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#2b2b33"
      }}
    />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#ffffff",
              "secondary": "#737383",
              "on-primary": "#000000",
              "on-secondary": "#ffffff",
              "primary-hovered": "#b0b0b0",
              "primary-active": "#ffffff",
              "primary-inactive": "#808080",
              "primary-disabled": "#7a7a89",
              "secondary-hovered": "#9494a2",
              "secondary-active": "#9494a2",
              "secondary-inactive": "#808080",
              "secondary-disabled": "#42424c"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.danger"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "primary": "#f00a45",
              "secondary": "#1b0009",
              "on-primary": "#ffffff",
              "on-secondary": "#fff1f2",
              "primary-hovered": "#ff8ba2",
              "primary-active": "#ff8ba2",
              "primary-inactive": "#7f002a",
              "primary-disabled": "#642b39",
              "secondary-hovered": "#65081d",
              "secondary-active": "#65081d",
              "secondary-inactive": "#000000",
              "secondary-disabled": "#2d161d"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.discovery"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "primary": "#a283f3",
              "secondary": "#1d0f42",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#f8f5ff",
              "primary-active": "#f8f5ff",
              "primary-inactive": "#643bc7",
              "primary-disabled": "#4f4472",
              "secondary-hovered": "#37256f",
              "secondary-active": "#37256f",
              "secondary-inactive": "#0a0219",
              "secondary-disabled": "#231f32"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Hairline"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
              "hairline-active": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.hairline-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "hairline-disabled": "#28282f"
      }}
    />
            <ColorItem
      title={"color.hairline-hovered"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, dark contrast primitive)"}
      colors={{
              "hairline-hovered": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "hairline-inactive": "#808080"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.info"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "primary": "#70a4ff",
              "secondary": "#012e7c",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#b8deff",
              "primary-active": "#b8deff",
              "primary-inactive": "#0159f1",
              "primary-disabled": "#36507f",
              "secondary-hovered": "#1953bb",
              "secondary-active": "#1953bb",
              "secondary-inactive": "#001437",
              "secondary-disabled": "#1e2b43"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "primary": "#2de498",
              "secondary": "#001a11",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#c7ffe7",
              "primary-active": "#c7ffe7",
              "primary-inactive": "#006a46",
              "primary-disabled": "#376754",
              "secondary-hovered": "#19774e",
              "secondary-active": "#19774e",
              "secondary-inactive": "#000000",
              "secondary-disabled": "#1a3029"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "primary": "#ffb327",
              "secondary": "#382500",
              "on-primary": "#000000",
              "on-secondary": "#ffffff",
              "primary-hovered": "#945a00",
              "primary-active": "#945a00",
              "primary-inactive": "#ffe995",
              "primary-disabled": "#7c5e32",
              "secondary-hovered": "#9b6615",
              "secondary-active": "#9b6615",
              "secondary-inactive": "#110a00",
              "secondary-disabled": "#382e1d"
      }}
    />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  "light": (
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
            "5": "#cacacb",
            "6": "#b0b0b1",
            "7": "#959698",
            "8": "#7b7b7e",
            "9": "#555659",
            "10": "#46464a",
            "11": "#2b2c30",
            "12": "#242528",
            "13": "#1f1f21",
            "14": "#151518"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#eaeaea"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 4% darker)"}
      colors={{
            "canvas-active": "#dedede"
      }}
    />
          <ColorItem
      title={"color.canvas-disabled"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "canvas-disabled": "#b4b4b5"
      }}
    />
          <ColorItem
      title={"color.canvas-hovered"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 4% darker)"}
      colors={{
            "canvas-hovered": "#dedede"
      }}
    />
          <ColorItem
      title={"color.canvas-inactive"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% brighter)"}
      colors={{
            "canvas-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.elevated"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "elevated": "#fafafa"
      }}
    />
          <ColorItem
      title={"color.elevated-active"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 4% darker)"}
      colors={{
            "elevated-active": "#eeeeee"
      }}
    />
          <ColorItem
      title={"color.elevated-disabled"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "elevated-disabled": "#bfbfc0"
      }}
    />
          <ColorItem
      title={"color.elevated-hovered"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 4% darker)"}
      colors={{
            "elevated-hovered": "#eeeeee"
      }}
    />
          <ColorItem
      title={"color.elevated-inactive"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% brighter)"}
      colors={{
            "elevated-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.floating"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "floating": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 4% darker)"}
      colors={{
            "floating-active": "#f2f2f2"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#c2c2c3"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 4% darker)"}
      colors={{
            "floating-hovered": "#f2f2f2"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% brighter)"}
      colors={{
            "floating-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#e1e1e1"
      }}
    />
          <ColorItem
      title={"color.sunken-active"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 4% darker)"}
      colors={{
            "sunken-active": "#d6d6d6"
      }}
    />
          <ColorItem
      title={"color.sunken-disabled"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "sunken-disabled": "#aeaeaf"
      }}
    />
          <ColorItem
      title={"color.sunken-hovered"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 4% darker)"}
      colors={{
            "sunken-hovered": "#d6d6d6"
      }}
    />
          <ColorItem
      title={"color.sunken-inactive"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% brighter)"}
      colors={{
            "sunken-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface": "#f1f1f1"
      }}
    />
          <ColorItem
      title={"color.surface-active"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 4% darker)"}
      colors={{
            "surface-active": "#e5e5e5"
      }}
    />
          <ColorItem
      title={"color.surface-disabled"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "surface-disabled": "#b8b8b9"
      }}
    />
          <ColorItem
      title={"color.surface-hovered"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 4% darker)"}
      colors={{
            "surface-hovered": "#e5e5e5"
      }}
    />
          <ColorItem
      title={"color.surface-inactive"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% brighter)"}
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
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "emphasis": "#1f1f21"
      }}
    />
          <ColorItem
      title={"color.emphasis-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, pure black)"}
      colors={{
            "emphasis-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.emphasis-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "emphasis-disabled": "#363639"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% lighter)"}
      colors={{
            "emphasis-hovered": "#606062"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
            "emphasis-inactive": "#030303"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#555659"
      }}
    />
          <ColorItem
      title={"color.ink-active"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, light contrast primitive)"}
      colors={{
            "ink-active": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.ink-disabled"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "ink-disabled": "#494a4d"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, light contrast primitive)"}
      colors={{
            "ink-hovered": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 40% darker)"}
      colors={{
            "ink-inactive": "#030303"
      }}
    />
          <ColorItem
      title={"color.subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtle": "#959698"
      }}
    />
          <ColorItem
      title={"color.subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"}
      colors={{
            "subtle-active": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtle-disabled": "#606063"
      }}
    />
          <ColorItem
      title={"color.subtle-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, light contrast primitive)"}
      colors={{
            "subtle-hovered": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtle-inactive": "#030303"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#cacacb"
      }}
    />
          <ColorItem
      title={"color.subtlest-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"}
      colors={{
            "subtlest-active": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.subtlest-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtlest-disabled": "#727275"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, light contrast primitive)"}
      colors={{
            "subtlest-hovered": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtlest-inactive": "#030303"
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
            "black": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"Pure white."}
      colors={{
            "white": "#ffffff"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.backdrop"}
      subtitle={"Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container."}
      colors={{
            "backdrop": "#1a1c1f66"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
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
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#e1e1e1"
      }}
    />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#1f1f21",
              "secondary": "#555659",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#606062",
              "primary-active": "#000000",
              "primary-inactive": "#030303",
              "primary-disabled": "#363639",
              "secondary-hovered": "#46474a",
              "secondary-active": "#46474a",
              "secondary-inactive": "#030303",
              "secondary-disabled": "#494a4d"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.danger"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "primary": "#8e223e",
              "secondary": "#ee7a8e",
              "on-primary": "#FAFAFA",
              "on-secondary": "#200006",
              "primary-hovered": "#6a0022",
              "primary-active": "#6a0022",
              "primary-inactive": "#ab3e56",
              "primary-disabled": "#5a3c44",
              "secondary-hovered": "#b0435a",
              "secondary-active": "#b0435a",
              "secondary-inactive": "#ffa7ba",
              "secondary-disabled": "#7b5960"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.discovery"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "primary": "#594395",
              "secondary": "#a690e1",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#3c2372",
              "primary-active": "#3c2372",
              "primary-inactive": "#725db2",
              "primary-disabled": "#4a445f",
              "secondary-hovered": "#725ba7",
              "secondary-active": "#725ba7",
              "secondary-inactive": "#d2bcff",
              "secondary-disabled": "#655f79"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Hairline"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
              "hairline-active": "#0c0c0d"
      }}
    />
            <ColorItem
      title={"color.hairline-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "hairline-disabled": "#7a7a7c"
      }}
    />
            <ColorItem
      title={"color.hairline-hovered"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, light contrast primitive)"}
      colors={{
              "hairline-hovered": "#0c0c0d"
      }}
    />
            <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "hairline-inactive": "#030303"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.info"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "primary": "#2055b3",
              "secondary": "#6da2ff",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#00318d",
              "primary-active": "#00318d",
              "primary-inactive": "#3b72d3",
              "primary-disabled": "#3b4a68",
              "secondary-hovered": "#396ac2",
              "secondary-active": "#396ac2",
              "secondary-inactive": "#99d1ff",
              "secondary-disabled": "#556582"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "primary": "#216b53",
              "secondary": "#74ba9f",
              "on-primary": "#FAFAFA",
              "on-secondary": "#002217",
              "primary-hovered": "#004933",
              "primary-active": "#004933",
              "primary-inactive": "#40876e",
              "primary-disabled": "#3c504b",
              "secondary-hovered": "#3b8168",
              "secondary-active": "#3b8168",
              "secondary-inactive": "#a3eacd",
              "secondary-disabled": "#586c66"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "primary": "#765417",
              "secondary": "#c7a168",
              "on-primary": "#FAFAFA",
              "on-secondary": "#241500",
              "primary-hovered": "#543400",
              "primary-active": "#543400",
              "primary-inactive": "#926f36",
              "primary-disabled": "#53493b",
              "secondary-hovered": "#8e6a31",
              "secondary-active": "#8e6a31",
              "secondary-inactive": "#f7d095",
              "secondary-disabled": "#6f6456"
      }}
    />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  "lightDimmed": (
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
            "5": "#b4b4b4",
            "6": "#a1a1a2",
            "7": "#8f8f90",
            "8": "#7d7d7e",
            "9": "#626364",
            "10": "#57575a",
            "11": "#444548",
            "12": "#3f4043",
            "13": "#3c3c3e",
            "14": "#343438"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#cacaca"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 4% darker)"}
      colors={{
            "canvas-active": "#c2c2c2"
      }}
    />
          <ColorItem
      title={"color.canvas-disabled"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "canvas-disabled": "#a4a4a5"
      }}
    />
          <ColorItem
      title={"color.canvas-hovered"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 4% darker)"}
      colors={{
            "canvas-hovered": "#c2c2c2"
      }}
    />
          <ColorItem
      title={"color.canvas-inactive"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% brighter)"}
      colors={{
            "canvas-inactive": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.elevated"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "elevated": "#d5d5d5"
      }}
    />
          <ColorItem
      title={"color.elevated-active"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 4% darker)"}
      colors={{
            "elevated-active": "#cdcdcd"
      }}
    />
          <ColorItem
      title={"color.elevated-disabled"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "elevated-disabled": "#acacad"
      }}
    />
          <ColorItem
      title={"color.elevated-hovered"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 4% darker)"}
      colors={{
            "elevated-hovered": "#cdcdcd"
      }}
    />
          <ColorItem
      title={"color.elevated-inactive"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% brighter)"}
      colors={{
            "elevated-inactive": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.floating"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "floating": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 4% darker)"}
      colors={{
            "floating-active": "#d0d0d0"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#aeaeaf"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 4% darker)"}
      colors={{
            "floating-hovered": "#d0d0d0"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% brighter)"}
      colors={{
            "floating-inactive": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#c4c4c4"
      }}
    />
          <ColorItem
      title={"color.sunken-active"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 4% darker)"}
      colors={{
            "sunken-active": "#bcbcbc"
      }}
    />
          <ColorItem
      title={"color.sunken-disabled"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "sunken-disabled": "#a0a0a1"
      }}
    />
          <ColorItem
      title={"color.sunken-hovered"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 4% darker)"}
      colors={{
            "sunken-hovered": "#bcbcbc"
      }}
    />
          <ColorItem
      title={"color.sunken-inactive"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% brighter)"}
      colors={{
            "sunken-inactive": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface": "#cfcfcf"
      }}
    />
          <ColorItem
      title={"color.surface-active"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 4% darker)"}
      colors={{
            "surface-active": "#c7c7c7"
      }}
    />
          <ColorItem
      title={"color.surface-disabled"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "surface-disabled": "#a7a7a8"
      }}
    />
          <ColorItem
      title={"color.surface-hovered"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 4% darker)"}
      colors={{
            "surface-hovered": "#c7c7c7"
      }}
    />
          <ColorItem
      title={"color.surface-inactive"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% brighter)"}
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
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "emphasis": "#3c3c3e"
      }}
    />
          <ColorItem
      title={"color.emphasis-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, pure black)"}
      colors={{
            "emphasis-active": "#262626"
      }}
    />
          <ColorItem
      title={"color.emphasis-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "emphasis-disabled": "#4c4c4e"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% lighter)"}
      colors={{
            "emphasis-hovered": "#6a6a6b"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
            "emphasis-inactive": "#282828"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#626364"
      }}
    />
          <ColorItem
      title={"color.ink-active"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, light contrast primitive)"}
      colors={{
            "ink-active": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.ink-disabled"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "ink-disabled": "#595a5c"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, light contrast primitive)"}
      colors={{
            "ink-hovered": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 40% darker)"}
      colors={{
            "ink-inactive": "#282828"
      }}
    />
          <ColorItem
      title={"color.subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtle": "#8f8f90"
      }}
    />
          <ColorItem
      title={"color.subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"}
      colors={{
            "subtle-active": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtle-disabled": "#6a6a6b"
      }}
    />
          <ColorItem
      title={"color.subtle-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, light contrast primitive)"}
      colors={{
            "subtle-hovered": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtle-inactive": "#282828"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#b4b4b4"
      }}
    />
          <ColorItem
      title={"color.subtlest-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"}
      colors={{
            "subtlest-active": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.subtlest-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtlest-disabled": "#767678"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, light contrast primitive)"}
      colors={{
            "subtlest-hovered": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtlest-inactive": "#282828"
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
            "black": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"Pure white."}
      colors={{
            "white": "#d9d9d9"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.backdrop"}
      subtitle={"Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container."}
      colors={{
            "backdrop": "#373a3d66"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
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
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#c4c4c4"
      }}
    />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#3c3c3e",
              "secondary": "#626364",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#6a6a6b",
              "primary-active": "#262626",
              "primary-inactive": "#282828",
              "primary-disabled": "#4c4c4e",
              "secondary-hovered": "#57585a",
              "secondary-active": "#57585a",
              "secondary-inactive": "#282828",
              "secondary-disabled": "#595a5c"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.danger"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "primary": "#864254",
              "secondary": "#cb7e8b",
              "on-primary": "#d5d5d5",
              "on-secondary": "#4d1620",
              "primary-hovered": "#75223c",
              "primary-active": "#75223c",
              "primary-inactive": "#975967",
              "primary-disabled": "#655156",
              "secondary-hovered": "#9a5d6a",
              "secondary-active": "#9a5d6a",
              "secondary-inactive": "#e094a4",
              "secondary-disabled": "#7a676b"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.discovery"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "primary": "#675a8a",
              "secondary": "#9b8cc3",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#514075",
              "primary-active": "#514075",
              "primary-inactive": "#796d9d",
              "primary-disabled": "#5a5768",
              "secondary-hovered": "#786c96",
              "secondary-active": "#786c96",
              "secondary-inactive": "#b69fe3",
              "secondary-disabled": "#6e6a79"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Hairline"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
              "hairline-active": "#2e2e30"
      }}
    />
            <ColorItem
      title={"color.hairline-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "hairline-disabled": "#7c7c7d"
      }}
    />
            <ColorItem
      title={"color.hairline-hovered"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, light contrast primitive)"}
      colors={{
              "hairline-hovered": "#2e2e30"
      }}
    />
            <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "hairline-inactive": "#282828"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.info"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "primary": "#45649b",
              "secondary": "#7598d7",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#274988",
              "primary-active": "#274988",
              "primary-inactive": "#5a79af",
              "primary-disabled": "#515a6e",
              "secondary-hovered": "#5873a4",
              "secondary-active": "#5873a4",
              "secondary-inactive": "#8cb9de",
              "secondary-disabled": "#646e7f"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "primary": "#3e7160",
              "secondary": "#7ba595",
              "on-primary": "#d5d5d5",
              "on-secondary": "#174e3c",
              "primary-hovered": "#1d634e",
              "primary-active": "#1d634e",
              "primary-inactive": "#578172",
              "primary-disabled": "#505e5b",
              "secondary-hovered": "#537d6e",
              "secondary-active": "#537d6e",
              "secondary-inactive": "#96ccb6",
              "secondary-disabled": "#65716d"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "primary": "#786137",
              "secondary": "#ac9674",
              "on-primary": "#d5d5d5",
              "on-secondary": "#4f3817",
              "primary-hovered": "#694d1e",
              "primary-active": "#694d1e",
              "primary-inactive": "#887351",
              "primary-disabled": "#605950",
              "secondary-hovered": "#856f4d",
              "secondary-active": "#856f4d",
              "secondary-inactive": "#d6b88c",
              "secondary-disabled": "#736c64"
      }}
    />
          </ColorPalette>
        </section>
      </section>
    </>
  ),
  "lightHighContrast": (
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
            "5": "#ebebed",
            "6": "#c3c3ca",
            "7": "#9a9fa7",
            "8": "#737383",
            "9": "#3f424a",
            "10": "#2b2b33",
            "11": "#08080a",
            "12": "#000000",
            "13": "#000000",
            "14": "#000000"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 4% darker)"}
      colors={{
            "canvas-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.canvas-disabled"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "canvas-disabled": "#c9c9cf"
      }}
    />
          <ColorItem
      title={"color.canvas-hovered"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 4% darker)"}
      colors={{
            "canvas-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.canvas-inactive"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (inactive, 10% brighter)"}
      colors={{
            "canvas-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.elevated"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "elevated": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.elevated-active"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 4% darker)"}
      colors={{
            "elevated-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.elevated-disabled"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "elevated-disabled": "#dadade"
      }}
    />
          <ColorItem
      title={"color.elevated-hovered"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 4% darker)"}
      colors={{
            "elevated-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.elevated-inactive"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (inactive, 10% brighter)"}
      colors={{
            "elevated-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.floating"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "floating": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 4% darker)"}
      colors={{
            "floating-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#dfdfe3"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 4% darker)"}
      colors={{
            "floating-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% brighter)"}
      colors={{
            "floating-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.sunken-active"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 4% darker)"}
      colors={{
            "sunken-active": "#fdfdfd"
      }}
    />
          <ColorItem
      title={"color.sunken-disabled"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "sunken-disabled": "#c0c0c7"
      }}
    />
          <ColorItem
      title={"color.sunken-hovered"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 4% darker)"}
      colors={{
            "sunken-hovered": "#fdfdfd"
      }}
    />
          <ColorItem
      title={"color.sunken-inactive"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (inactive, 10% brighter)"}
      colors={{
            "sunken-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-active"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 4% darker)"}
      colors={{
            "surface-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-disabled"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (disabled, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "surface-disabled": "#cfcfd5"
      }}
    />
          <ColorItem
      title={"color.surface-hovered"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 4% darker)"}
      colors={{
            "surface-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-inactive"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (inactive, 10% brighter)"}
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
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "emphasis": "#000000"
      }}
    />
          <ColorItem
      title={"color.emphasis-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, pure black)"}
      colors={{
            "emphasis-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.emphasis-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "emphasis-disabled": "#151519"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 25% lighter)"}
      colors={{
            "emphasis-hovered": "#4e4e59"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
            "emphasis-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#3f424a"
      }}
    />
          <ColorItem
      title={"color.ink-active"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (active, light contrast primitive)"}
      colors={{
            "ink-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.ink-disabled"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "ink-disabled": "#2f3138"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, light contrast primitive)"}
      colors={{
            "ink-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 40% darker)"}
      colors={{
            "ink-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtle": "#9a9fa7"
      }}
    />
          <ColorItem
      title={"color.subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"}
      colors={{
            "subtle-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtle-disabled": "#4e4e5a"
      }}
    />
          <ColorItem
      title={"color.subtle-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, light contrast primitive)"}
      colors={{
            "subtle-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtle-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#ebebed"
      }}
    />
          <ColorItem
      title={"color.subtlest-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, light contrast primitive)"}
      colors={{
            "subtlest-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.subtlest-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "subtlest-disabled": "#676776"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, light contrast primitive)"}
      colors={{
            "subtlest-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
            "subtlest-inactive": "#000000"
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
            "black": "#000000"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"Pure white."}
      colors={{
            "white": "#ffffff"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.backdrop"}
      subtitle={"Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container."}
      colors={{
            "backdrop": "#00000066"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
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
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#ffffff"
      }}
    />
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#000000",
              "secondary": "#3f424a",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#4e4e59",
              "primary-active": "#000000",
              "primary-inactive": "#000000",
              "primary-disabled": "#151519",
              "secondary-hovered": "#2b2d33",
              "secondary-active": "#2b2d33",
              "secondary-inactive": "#000000",
              "secondary-disabled": "#2f3138"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.danger"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "primary": "#840929",
              "secondary": "#ff98aa",
              "on-primary": "#ffffff",
              "on-secondary": "#000000",
              "primary-hovered": "#27000c",
              "primary-active": "#27000c",
              "primary-inactive": "#bc2445",
              "primary-disabled": "#44232c",
              "secondary-hovered": "#c5294a",
              "secondary-active": "#c5294a",
              "secondary-inactive": "#fff2f5",
              "secondary-disabled": "#7a4751"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.discovery"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "primary": "#492b9b",
              "secondary": "#c1adf7",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#240c59",
              "primary-active": "#240c59",
              "primary-inactive": "#6c4ec9",
              "primary-disabled": "#342c4d",
              "secondary-hovered": "#6b48bb",
              "secondary-active": "#6b48bb",
              "secondary-inactive": "#ffffff",
              "secondary-disabled": "#584e78"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Hairline"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
              "hairline-active": "#000000"
      }}
    />
            <ColorItem
      title={"color.hairline-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "hairline-disabled": "#727280"
      }}
    />
            <ColorItem
      title={"color.hairline-hovered"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, light contrast primitive)"}
      colors={{
              "hairline-hovered": "#000000"
      }}
    />
            <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "hairline-inactive": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.info"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "primary": "#0145be",
              "secondary": "#9ec1ff",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#001f5a",
              "primary-active": "#001f5a",
              "primary-inactive": "#216df4",
              "primary-disabled": "#233457",
              "secondary-hovered": "#1b61df",
              "secondary-active": "#1b61df",
              "secondary-inactive": "#def0ff",
              "secondary-disabled": "#425983"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "primary": "#0a4e38",
              "secondary": "#72d1ac",
              "on-primary": "#ffffff",
              "on-secondary": "#000000",
              "primary-hovered": "#000000",
              "primary-active": "#000000",
              "primary-inactive": "#298565",
              "primary-disabled": "#213731",
              "secondary-hovered": "#237b5b",
              "secondary-active": "#237b5b",
              "secondary-inactive": "#d0fdea",
              "secondary-disabled": "#45655b"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "primary": "#583902",
              "secondary": "#e0af64",
              "on-primary": "#ffffff",
              "on-secondary": "#000000",
              "primary-hovered": "#070400",
              "primary-active": "#070400",
              "primary-inactive": "#92661d",
              "primary-disabled": "#3a3021",
              "secondary-hovered": "#8a5e18",
              "secondary-active": "#8a5e18",
              "secondary-inactive": "#ffebcc",
              "secondary-disabled": "#685843"
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
