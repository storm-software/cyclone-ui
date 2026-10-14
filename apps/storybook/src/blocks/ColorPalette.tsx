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
            "5": "#d0d0d1",
            "6": "#c0c0c1",
            "7": "#b0b0b1",
            "8": "#959698",
            "9": "#7b7b7e",
            "10": "#555659",
            "11": "#46464a",
            "12": "#2d2e33",
            "13": "#292a2e",
            "14": "#242528",
            "15": "#1f1f21",
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#151518"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 15% brighter)"}
      colors={{
            "canvas-active": "#1c1c1f"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 10% brighter)"}
      colors={{
            "canvas-hovered": "#19191d"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 15% brighter)"}
      colors={{
            "elevated-active": "#2e2f32"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 10% brighter)"}
      colors={{
            "elevated-hovered": "#2a2b2f"
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
            "floating": "#292a2e"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 15% brighter)"}
      colors={{
            "floating-active": "#343539"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#313236"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 10% brighter)"}
      colors={{
            "floating-hovered": "#303135"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% darker)"}
      colors={{
            "floating-inactive": "#222327"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 15% brighter)"}
      colors={{
            "sunken-active": "#111112"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 10% brighter)"}
      colors={{
            "sunken-hovered": "#0f0f10"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 15% brighter)"}
      colors={{
            "surface-active": "#28282a"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 10% brighter)"}
      colors={{
            "surface-hovered": "#252527"
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
            "emphasis": "#eaeaea"
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
            "emphasis-disabled": "#7d7d7f"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 45% darker)"}
      colors={{
            "emphasis-hovered": "#676767"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% darker)"}
      colors={{
            "emphasis-inactive": "#636363"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#b0b0b1"
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
            "ink-disabled": "#69696b"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 45% brighter)"}
      colors={{
            "ink-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% darker)"}
      colors={{
            "ink-inactive": "#636363"
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
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% brighter)"}
      colors={{
            "subtle-hovered": "#f6f7f9"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtle-inactive": "#636363"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#46464a"
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
            "subtlest-disabled": "#444447"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% brighter)"}
      colors={{
            "subtlest-hovered": "#78787c"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtlest-inactive": "#636363"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators."}
      colors={{
            "hairline": "#2d2e33"
      }}
    />
          <ColorItem
      title={"color.outline"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "outline": "#555659"
      }}
    />
          <ColorItem
      title={"color.outline-active"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
            "outline-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.outline-disabled"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "outline-disabled": "#494a4d"
      }}
    />
          <ColorItem
      title={"color.outline-hovered"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, dark contrast primitive)"}
      colors={{
            "outline-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.outline-inactive"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 50% darker)"}
      colors={{
            "outline-inactive": "#636363"
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
            "neutral.subtle": "#242528",
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
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#f1f1f1",
              "secondary": "#555659",
              "link": "#00bcff",
              "on-primary": "#151518",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#a1a1a1",
              "primary-active": "#ffffff",
              "primary-inactive": "#636363",
              "primary-disabled": "#808082",
              "secondary-hovered": "#656669",
              "secondary-active": "#656669",
              "secondary-inactive": "#636363",
              "secondary-disabled": "#494a4d",
              "link-hovered": "#6bfaff",
              "link-active": "#6bfaff",
              "link-inactive": "#008ccc",
              "link-disabled": "#436d83"
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
              "secondary": "#5d001e",
              "link": "#cf2d56",
              "on-primary": "#FAFAFA",
              "on-secondary": "#ffa6b0",
              "primary-hovered": "#ff607f",
              "primary-active": "#ff607f",
              "primary-inactive": "#a70037",
              "primary-disabled": "#70424d",
              "secondary-hovered": "#751d31",
              "secondary-active": "#751d31",
              "secondary-inactive": "#4a0010",
              "secondary-disabled": "#4a3139",
              "link-hovered": "#ff607f",
              "link-active": "#ff607f",
              "link-inactive": "#a70037",
              "link-disabled": "#70424d"
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
              "link": "#9277da",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#c3a9ff",
              "primary-active": "#c3a9ff",
              "primary-inactive": "#6d51b0",
              "primary-disabled": "#5e5776",
              "secondary-hovered": "#4b3c79",
              "secondary-active": "#4b3c79",
              "secondary-inactive": "#27144e",
              "secondary-disabled": "#3e3a4d",
              "link-hovered": "#c3a9ff",
              "link-active": "#c3a9ff",
              "link-inactive": "#6d51b0",
              "link-disabled": "#5e5776"
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
              "link": "#4d8eff",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#7fc4ff",
              "primary-active": "#7fc4ff",
              "primary-inactive": "#2564d1",
              "primary-disabled": "#4b5e81",
              "secondary-hovered": "#3560ac",
              "secondary-active": "#3560ac",
              "secondary-inactive": "#022c73",
              "secondary-disabled": "#37445b",
              "link-hovered": "#7fc4ff",
              "link-active": "#7fc4ff",
              "link-inactive": "#2564d1",
              "link-disabled": "#4b5e81"
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
              "link": "#45c791",
              "on-primary": "#FAFAFA",
              "on-secondary": "#ffffff",
              "primary-hovered": "#89ffcc",
              "primary-active": "#89ffcc",
              "primary-inactive": "#009865",
              "primary-disabled": "#4c7062",
              "secondary-hovered": "#31815e",
              "secondary-active": "#31815e",
              "secondary-inactive": "#004829",
              "secondary-disabled": "#354d45",
              "link-hovered": "#89ffcc",
              "link-active": "#89ffcc",
              "link-inactive": "#009865",
              "link-disabled": "#4c7062"
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
              "secondary": "#724c00",
              "link": "#f7ac23",
              "on-primary": "#151518",
              "on-secondary": "#ffffff",
              "primary-hovered": "#b56e00",
              "primary-active": "#b56e00",
              "primary-inactive": "#ffe067",
              "primary-disabled": "#7f6948",
              "secondary-hovered": "#946c2d",
              "secondary-active": "#946c2d",
              "secondary-inactive": "#583400",
              "secondary-disabled": "#524736",
              "link-hovered": "#b56e00",
              "link-active": "#b56e00",
              "link-inactive": "#ffe067",
              "link-disabled": "#7f6948"
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
            "5": "#b8b8b9",
            "6": "#adadad",
            "7": "#a1a1a2",
            "8": "#8f8f90",
            "9": "#7d7d7e",
            "10": "#626364",
            "11": "#57575a",
            "12": "#45464a",
            "13": "#434347",
            "14": "#3f4043",
            "15": "#3c3c3e",
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#343438"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 15% brighter)"}
      colors={{
            "canvas-active": "#39393d"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 10% brighter)"}
      colors={{
            "canvas-hovered": "#37373b"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 15% brighter)"}
      colors={{
            "elevated-active": "#464749"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 10% brighter)"}
      colors={{
            "elevated-hovered": "#434448"
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
            "floating": "#434347"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 15% brighter)"}
      colors={{
            "floating-active": "#4a4b4e"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#48494c"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 10% brighter)"}
      colors={{
            "floating-hovered": "#48484c"
      }}
    />
          <ColorItem
      title={"color.floating-inactive"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (inactive, 10% darker)"}
      colors={{
            "floating-inactive": "#3d3e42"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 15% brighter)"}
      colors={{
            "sunken-active": "#323233"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 10% brighter)"}
      colors={{
            "sunken-hovered": "#303032"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 15% brighter)"}
      colors={{
            "surface-active": "#424244"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 10% brighter)"}
      colors={{
            "surface-hovered": "#404042"
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
            "emphasis": "#cacaca"
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
            "emphasis-disabled": "#7e7e7f"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 45% darker)"}
      colors={{
            "emphasis-hovered": "#6e6e6e"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% darker)"}
      colors={{
            "emphasis-inactive": "#6c6c6c"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#a1a1a2"
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
            "ink-disabled": "#707071"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 45% brighter)"}
      colors={{
            "ink-hovered": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% darker)"}
      colors={{
            "ink-inactive": "#6c6c6c"
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
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% brighter)"}
      colors={{
            "subtle-hovered": "#cfd2d8"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtle-inactive": "#6c6c6c"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#57575a"
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
            "subtlest-disabled": "#565658"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% brighter)"}
      colors={{
            "subtlest-hovered": "#7b7b7d"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtlest-inactive": "#6c6c6c"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators."}
      colors={{
            "hairline": "#45464a"
      }}
    />
          <ColorItem
      title={"color.outline"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "outline": "#626364"
      }}
    />
          <ColorItem
      title={"color.outline-active"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
            "outline-active": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.outline-disabled"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "outline-disabled": "#595a5c"
      }}
    />
          <ColorItem
      title={"color.outline-hovered"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, dark contrast primitive)"}
      colors={{
            "outline-hovered": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.outline-inactive"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 50% darker)"}
      colors={{
            "outline-inactive": "#6c6c6c"
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
            "neutral.subtle": "#3f4043",
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
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#cfcfcf",
              "secondary": "#626364",
              "link": "#39a1c6",
              "on-primary": "#343438",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#979797",
              "primary-active": "#d9d9d9",
              "primary-inactive": "#6c6c6c",
              "primary-disabled": "#808081",
              "secondary-hovered": "#6d6e70",
              "secondary-active": "#6d6e70",
              "secondary-inactive": "#6c6c6c",
              "secondary-disabled": "#595a5c",
              "link-hovered": "#73d3d6",
              "link-active": "#73d3d6",
              "link-inactive": "#3184aa",
              "link-disabled": "#58727f"
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
              "secondary": "#6e2039",
              "link": "#ab5268",
              "on-primary": "#d5d5d5",
              "on-secondary": "#e0939c",
              "primary-hovered": "#d56d82",
              "primary-active": "#d56d82",
              "primary-inactive": "#962c4f",
              "primary-disabled": "#73565d",
              "secondary-hovered": "#773c49",
              "secondary-active": "#773c49",
              "secondary-inactive": "#631d2c",
              "secondary-disabled": "#5a484e",
              "link-hovered": "#d56d82",
              "link-active": "#d56d82",
              "link-inactive": "#962c4f",
              "link-disabled": "#73565d"
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
              "link": "#8e7dbb",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#ac95e0",
              "primary-active": "#ac95e0",
              "primary-inactive": "#75669a",
              "primary-disabled": "#696577",
              "secondary-hovered": "#5c5378",
              "secondary-active": "#5c5378",
              "secondary-inactive": "#403160",
              "secondary-disabled": "#524f5c",
              "link-hovered": "#ac95e0",
              "link-active": "#ac95e0",
              "link-inactive": "#75669a",
              "link-disabled": "#696577"
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
              "link": "#638cd2",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#7eb0da",
              "primary-active": "#7eb0da",
              "primary-inactive": "#4d70ac",
              "primary-disabled": "#5e697e",
              "secondary-hovered": "#536c97",
              "secondary-active": "#536c97",
              "secondary-inactive": "#254479",
              "secondary-disabled": "#4d5665",
              "link-hovered": "#7eb0da",
              "link-active": "#7eb0da",
              "link-inactive": "#4d70ac",
              "link-disabled": "#5e697e"
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
              "link": "#60a88a",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d9d9d9",
              "primary-hovered": "#84dbb5",
              "primary-active": "#84dbb5",
              "primary-inactive": "#298e6c",
              "primary-disabled": "#5d736a",
              "secondary-hovered": "#4c7d68",
              "secondary-active": "#4c7d68",
              "secondary-inactive": "#1d6244",
              "secondary-disabled": "#4b5c57",
              "link-hovered": "#84dbb5",
              "link-active": "#84dbb5",
              "link-inactive": "#298e6c",
              "link-disabled": "#5d736a"
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
              "secondary": "#795c23",
              "link": "#c59b4d",
              "on-primary": "#343438",
              "on-secondary": "#d9d9d9",
              "primary-hovered": "#9d722e",
              "primary-active": "#9d722e",
              "primary-inactive": "#d6c171",
              "primary-disabled": "#7c6f5b",
              "secondary-hovered": "#89714b",
              "secondary-active": "#89714b",
              "secondary-inactive": "#6b4c1f",
              "secondary-disabled": "#60584c",
              "link-hovered": "#9d722e",
              "link-active": "#9d722e",
              "link-inactive": "#d6c171",
              "link-disabled": "#7c6f5b"
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
            "5": "#f4f4f6",
            "6": "#dcdce0",
            "7": "#c3c3ca",
            "8": "#9a9fa7",
            "9": "#737383",
            "10": "#3f424a",
            "11": "#2b2b33",
            "12": "#0b0b0e",
            "13": "#050506",
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#000000"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 15% brighter)"}
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 10% brighter)"}
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 15% brighter)"}
      colors={{
            "elevated-active": "#0b0c0e"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 10% brighter)"}
      colors={{
            "elevated-hovered": "#060708"
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
            "floating": "#050506"
      }}
    />
          <ColorItem
      title={"color.floating-active"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 15% brighter)"}
      colors={{
            "floating-active": "#131418"
      }}
    />
          <ColorItem
      title={"color.floating-disabled"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (disabled, 93% saturation, 68% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "floating-disabled": "#0f1013"
      }}
    />
          <ColorItem
      title={"color.floating-hovered"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 10% brighter)"}
      colors={{
            "floating-hovered": "#0e0f12"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 15% brighter)"}
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 10% brighter)"}
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 15% brighter)"}
      colors={{
            "surface-active": "#020202"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 10% brighter)"}
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
            "emphasis-disabled": "#767685"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 45% darker)"}
      colors={{
            "emphasis-hovered": "#5c5c5c"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% darker)"}
      colors={{
            "emphasis-inactive": "#565656"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "ink": "#c3c3ca"
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
            "ink-disabled": "#5a5a66"
      }}
    />
          <ColorItem
      title={"color.ink-hovered"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 45% brighter)"}
      colors={{
            "ink-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% darker)"}
      colors={{
            "ink-inactive": "#565656"
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
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% brighter)"}
      colors={{
            "subtle-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtle-inactive": "#565656"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#2b2b33"
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
            "subtlest-disabled": "#28282f"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% brighter)"}
      colors={{
            "subtlest-hovered": "#6f6f80"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtlest-inactive": "#565656"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators."}
      colors={{
            "hairline": "#0b0b0e"
      }}
    />
          <ColorItem
      title={"color.outline"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "outline": "#3f424a"
      }}
    />
          <ColorItem
      title={"color.outline-active"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
            "outline-active": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.outline-disabled"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "outline-disabled": "#2f3138"
      }}
    />
          <ColorItem
      title={"color.outline-hovered"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, dark contrast primitive)"}
      colors={{
            "outline-hovered": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.outline-inactive"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 50% darker)"}
      colors={{
            "outline-inactive": "#565656"
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
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#ffffff",
              "secondary": "#3f424a",
              "link": "#00bcff",
              "on-primary": "#000000",
              "on-secondary": "#ffffff",
              "primary-hovered": "#b0b0b0",
              "primary-active": "#ffffff",
              "primary-inactive": "#565656",
              "primary-disabled": "#7a7a89",
              "secondary-hovered": "#555863",
              "secondary-active": "#555863",
              "secondary-inactive": "#565656",
              "secondary-disabled": "#2f3138",
              "link-hovered": "#9bfcff",
              "link-active": "#9bfcff",
              "link-inactive": "#007cb5",
              "link-disabled": "#2c6380"
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
              "secondary": "#140006",
              "link": "#f00a45",
              "on-primary": "#ffffff",
              "on-secondary": "#fff1f2",
              "primary-hovered": "#ff8ba2",
              "primary-active": "#ff8ba2",
              "primary-inactive": "#7f002a",
              "primary-disabled": "#642b39",
              "secondary-hovered": "#5a071a",
              "secondary-active": "#5a071a",
              "secondary-inactive": "#000000",
              "secondary-disabled": "#2a151c",
              "link-hovered": "#ff8ba2",
              "link-active": "#ff8ba2",
              "link-inactive": "#7f002a",
              "link-disabled": "#642b39"
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
              "link": "#a283f3",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#f8f5ff",
              "primary-active": "#f8f5ff",
              "primary-inactive": "#643bc7",
              "primary-disabled": "#4f4472",
              "secondary-hovered": "#37256f",
              "secondary-active": "#37256f",
              "secondary-inactive": "#0a0219",
              "secondary-disabled": "#231f32",
              "link-hovered": "#f8f5ff",
              "link-active": "#f8f5ff",
              "link-inactive": "#643bc7",
              "link-disabled": "#4f4472"
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
              "link": "#70a4ff",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#b8deff",
              "primary-active": "#b8deff",
              "primary-inactive": "#0159f1",
              "primary-disabled": "#36507f",
              "secondary-hovered": "#1953bb",
              "secondary-active": "#1953bb",
              "secondary-inactive": "#001437",
              "secondary-disabled": "#1e2b43",
              "link-hovered": "#b8deff",
              "link-active": "#b8deff",
              "link-inactive": "#0159f1",
              "link-disabled": "#36507f"
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
              "link": "#2de498",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#c7ffe7",
              "primary-active": "#c7ffe7",
              "primary-inactive": "#006a46",
              "primary-disabled": "#376754",
              "secondary-hovered": "#19774e",
              "secondary-active": "#19774e",
              "secondary-inactive": "#000000",
              "secondary-disabled": "#1a3029",
              "link-hovered": "#c7ffe7",
              "link-active": "#c7ffe7",
              "link-inactive": "#006a46",
              "link-disabled": "#376754"
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
              "secondary": "#332200",
              "link": "#ffb327",
              "on-primary": "#000000",
              "on-secondary": "#ffffff",
              "primary-hovered": "#945a00",
              "primary-active": "#945a00",
              "primary-inactive": "#ffe995",
              "primary-disabled": "#7c5e32",
              "secondary-hovered": "#926113",
              "secondary-active": "#926113",
              "secondary-inactive": "#0d0800",
              "secondary-disabled": "#372c1c",
              "link-hovered": "#945a00",
              "link-active": "#945a00",
              "link-inactive": "#ffe995",
              "link-disabled": "#7c5e32"
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
            "5": "#d0d0d1",
            "6": "#c0c0c1",
            "7": "#b0b0b1",
            "8": "#959698",
            "9": "#7b7b7e",
            "10": "#555659",
            "11": "#46464a",
            "12": "#2d2e33",
            "13": "#292a2e",
            "14": "#242528",
            "15": "#1f1f21",
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#eaeaea"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 15% darker)"}
      colors={{
            "canvas-active": "#bcbcbc"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 10% darker)"}
      colors={{
            "canvas-hovered": "#cbcbcb"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 15% darker)"}
      colors={{
            "elevated-active": "#c9c9c9"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 10% darker)"}
      colors={{
            "elevated-hovered": "#d9d9d9"
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
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 15% darker)"}
      colors={{
            "floating-active": "#cecece"
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
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 10% darker)"}
      colors={{
            "floating-hovered": "#dedede"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 15% darker)"}
      colors={{
            "sunken-active": "#b5b5b5"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 10% darker)"}
      colors={{
            "sunken-hovered": "#c4c4c4"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 15% darker)"}
      colors={{
            "surface-active": "#c2c2c2"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 10% darker)"}
      colors={{
            "surface-hovered": "#d2d2d2"
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
            "emphasis": "#242528"
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
            "emphasis-disabled": "#38393c"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 45% brighter)"}
      colors={{
            "emphasis-hovered": "#424346"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% darker)"}
      colors={{
            "emphasis-inactive": "#020102"
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
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 45% darker)"}
      colors={{
            "ink-hovered": "#202124"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% darker)"}
      colors={{
            "ink-inactive": "#020102"
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
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% darker)"}
      colors={{
            "subtle-hovered": "#3f4041"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtle-inactive": "#020102"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#b0b0b1"
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
            "subtlest-disabled": "#69696b"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% darker)"}
      colors={{
            "subtlest-hovered": "#4c4c4d"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtlest-inactive": "#020102"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators."}
      colors={{
            "hairline": "#d0d0d1"
      }}
    />
          <ColorItem
      title={"color.outline"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "outline": "#c0c0c1"
      }}
    />
          <ColorItem
      title={"color.outline-active"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
            "outline-active": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.outline-disabled"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "outline-disabled": "#6f6f71"
      }}
    />
          <ColorItem
      title={"color.outline-hovered"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, light contrast primitive)"}
      colors={{
            "outline-hovered": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.outline-inactive"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 50% darker)"}
      colors={{
            "outline-inactive": "#020102"
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
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#1f1f21",
              "secondary": "#b0b0b1",
              "link": "#0084d1",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#606062",
              "primary-active": "#000000",
              "primary-inactive": "#020102",
              "primary-disabled": "#363639",
              "secondary-hovered": "#939394",
              "secondary-active": "#939394",
              "secondary-inactive": "#020102",
              "secondary-disabled": "#69696b",
              "link-hovered": "#0057a0",
              "link-active": "#0057a0",
              "link-inactive": "#40aaf9",
              "link-disabled": "#3c5a72"
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
              "secondary": "#f17d91",
              "link": "#8e223e",
              "on-primary": "#FAFAFA",
              "on-secondary": "#200006",
              "primary-hovered": "#6a0022",
              "primary-active": "#6a0022",
              "primary-inactive": "#ab3e56",
              "primary-disabled": "#5a3c44",
              "secondary-hovered": "#b2455c",
              "secondary-active": "#b2455c",
              "secondary-inactive": "#ffabbe",
              "secondary-disabled": "#7c5a61",
              "link-hovered": "#6a0022",
              "link-active": "#6a0022",
              "link-inactive": "#ab3e56",
              "link-disabled": "#5a3c44"
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
              "link": "#594395",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#3c2372",
              "primary-active": "#3c2372",
              "primary-inactive": "#725db2",
              "primary-disabled": "#4a445f",
              "secondary-hovered": "#725ba7",
              "secondary-active": "#725ba7",
              "secondary-inactive": "#d2bcff",
              "secondary-disabled": "#655f79",
              "link-hovered": "#3c2372",
              "link-active": "#3c2372",
              "link-inactive": "#725db2",
              "link-disabled": "#4a445f"
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
              "link": "#2055b3",
              "on-primary": "#FAFAFA",
              "on-secondary": "#FAFAFA",
              "primary-hovered": "#00318d",
              "primary-active": "#00318d",
              "primary-inactive": "#3b72d3",
              "primary-disabled": "#3b4a68",
              "secondary-hovered": "#396ac2",
              "secondary-active": "#396ac2",
              "secondary-inactive": "#99d1ff",
              "secondary-disabled": "#556582",
              "link-hovered": "#00318d",
              "link-active": "#00318d",
              "link-inactive": "#3b72d3",
              "link-disabled": "#3b4a68"
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
              "link": "#216b53",
              "on-primary": "#FAFAFA",
              "on-secondary": "#002015",
              "primary-hovered": "#004933",
              "primary-active": "#004933",
              "primary-inactive": "#40876e",
              "primary-disabled": "#3c504b",
              "secondary-hovered": "#3b8168",
              "secondary-active": "#3b8168",
              "secondary-inactive": "#a3eacd",
              "secondary-disabled": "#586c66",
              "link-hovered": "#004933",
              "link-active": "#004933",
              "link-inactive": "#40876e",
              "link-disabled": "#3c504b"
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
              "secondary": "#caa46b",
              "link": "#765417",
              "on-primary": "#FAFAFA",
              "on-secondary": "#241500",
              "primary-hovered": "#543400",
              "primary-active": "#543400",
              "primary-inactive": "#926f36",
              "primary-disabled": "#53493b",
              "secondary-hovered": "#906c33",
              "secondary-active": "#906c33",
              "secondary-inactive": "#fbd399",
              "secondary-disabled": "#716557",
              "link-hovered": "#543400",
              "link-active": "#543400",
              "link-inactive": "#926f36",
              "link-disabled": "#53493b"
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
            "5": "#b8b8b9",
            "6": "#adadad",
            "7": "#a1a1a2",
            "8": "#8f8f90",
            "9": "#7d7d7e",
            "10": "#626364",
            "11": "#57575a",
            "12": "#45464a",
            "13": "#434347",
            "14": "#3f4043",
            "15": "#3c3c3e",
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#cacaca"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 15% darker)"}
      colors={{
            "canvas-active": "#aaaaaa"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 10% darker)"}
      colors={{
            "canvas-hovered": "#b4b4b4"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 15% darker)"}
      colors={{
            "elevated-active": "#b3b3b3"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 10% darker)"}
      colors={{
            "elevated-hovered": "#bebebe"
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
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 15% darker)"}
      colors={{
            "floating-active": "#b6b6b6"
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
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 10% darker)"}
      colors={{
            "floating-hovered": "#c2c2c2"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 15% darker)"}
      colors={{
            "sunken-active": "#a5a5a5"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 10% darker)"}
      colors={{
            "sunken-hovered": "#afafaf"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 15% darker)"}
      colors={{
            "surface-active": "#aeaeae"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 10% darker)"}
      colors={{
            "surface-hovered": "#b9b9b9"
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
            "emphasis": "#3f4043"
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
            "emphasis-disabled": "#4d4e50"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 45% brighter)"}
      colors={{
            "emphasis-hovered": "#545557"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% darker)"}
      colors={{
            "emphasis-inactive": "#2f202f"
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
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 45% darker)"}
      colors={{
            "ink-hovered": "#3c3d40"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% darker)"}
      colors={{
            "ink-inactive": "#2f202f"
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
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% darker)"}
      colors={{
            "subtle-hovered": "#525354"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtle-inactive": "#2f202f"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#a1a1a2"
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
            "subtlest-disabled": "#707071"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% darker)"}
      colors={{
            "subtlest-hovered": "#5b5b5c"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtlest-inactive": "#2f202f"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators."}
      colors={{
            "hairline": "#b8b8b9"
      }}
    />
          <ColorItem
      title={"color.outline"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "outline": "#adadad"
      }}
    />
          <ColorItem
      title={"color.outline-active"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
            "outline-active": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.outline-disabled"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "outline-disabled": "#747475"
      }}
    />
          <ColorItem
      title={"color.outline-hovered"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, light contrast primitive)"}
      colors={{
            "outline-hovered": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.outline-inactive"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 50% darker)"}
      colors={{
            "outline-inactive": "#2f202f"
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
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#3c3c3e",
              "secondary": "#a1a1a2",
              "link": "#3280ad",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#6a6a6b",
              "primary-active": "#262626",
              "primary-inactive": "#2f202f",
              "primary-disabled": "#4c4c4e",
              "secondary-hovered": "#8d8d8e",
              "secondary-active": "#8d8d8e",
              "secondary-inactive": "#2f202f",
              "secondary-disabled": "#707071",
              "link-hovered": "#2a6392",
              "link-active": "#2a6392",
              "link-inactive": "#5c9ccb",
              "link-disabled": "#526574"
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
              "secondary": "#ce7f8d",
              "link": "#864254",
              "on-primary": "#d5d5d5",
              "on-secondary": "#4d1620",
              "primary-hovered": "#75223c",
              "primary-active": "#75223c",
              "primary-inactive": "#975967",
              "primary-disabled": "#655156",
              "secondary-hovered": "#9b5e6b",
              "secondary-active": "#9b5e6b",
              "secondary-inactive": "#e196a7",
              "secondary-disabled": "#7b676b",
              "link-hovered": "#75223c",
              "link-active": "#75223c",
              "link-inactive": "#975967",
              "link-disabled": "#655156"
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
              "link": "#675a8a",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#514075",
              "primary-active": "#514075",
              "primary-inactive": "#796d9d",
              "primary-disabled": "#5a5768",
              "secondary-hovered": "#786c96",
              "secondary-active": "#786c96",
              "secondary-inactive": "#b69fe3",
              "secondary-disabled": "#6e6a79",
              "link-hovered": "#514075",
              "link-active": "#514075",
              "link-inactive": "#796d9d",
              "link-disabled": "#5a5768"
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
              "link": "#45649b",
              "on-primary": "#d5d5d5",
              "on-secondary": "#d5d5d5",
              "primary-hovered": "#274988",
              "primary-active": "#274988",
              "primary-inactive": "#5a79af",
              "primary-disabled": "#515a6e",
              "secondary-hovered": "#5873a4",
              "secondary-active": "#5873a4",
              "secondary-inactive": "#8cb9de",
              "secondary-disabled": "#646e7f",
              "link-hovered": "#274988",
              "link-active": "#274988",
              "link-inactive": "#5a79af",
              "link-disabled": "#515a6e"
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
              "link": "#3e7160",
              "on-primary": "#d5d5d5",
              "on-secondary": "#164d3a",
              "primary-hovered": "#1d634e",
              "primary-active": "#1d634e",
              "primary-inactive": "#578172",
              "primary-disabled": "#505e5b",
              "secondary-hovered": "#537d6e",
              "secondary-active": "#537d6e",
              "secondary-inactive": "#96ccb6",
              "secondary-disabled": "#65716d",
              "link-hovered": "#1d634e",
              "link-active": "#1d634e",
              "link-inactive": "#578172",
              "link-disabled": "#505e5b"
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
              "secondary": "#af9876",
              "link": "#786137",
              "on-primary": "#d5d5d5",
              "on-secondary": "#4f3817",
              "primary-hovered": "#694d1e",
              "primary-active": "#694d1e",
              "primary-inactive": "#887351",
              "primary-disabled": "#605950",
              "secondary-hovered": "#86714f",
              "secondary-active": "#86714f",
              "secondary-inactive": "#dabb8d",
              "secondary-disabled": "#746d65",
              "link-hovered": "#694d1e",
              "link-active": "#694d1e",
              "link-inactive": "#887351",
              "link-disabled": "#605950"
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
            "5": "#f4f4f6",
            "6": "#dcdce0",
            "7": "#c3c3ca",
            "8": "#9a9fa7",
            "9": "#737383",
            "10": "#3f424a",
            "11": "#2b2b33",
            "12": "#0b0b0e",
            "13": "#050506",
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "canvas": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.canvas-active"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (active, 15% darker)"}
      colors={{
            "canvas-active": "#d7d7d7"
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
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator. (hovered, 10% darker)"}
      colors={{
            "canvas-hovered": "#ededed"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (active, 15% darker)"}
      colors={{
            "elevated-active": "#eaeaea"
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
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant. (hovered, 10% darker)"}
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
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (active, 15% darker)"}
      colors={{
            "floating-active": "#f1f1f1"
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
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant. (hovered, 10% darker)"}
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (active, 15% darker)"}
      colors={{
            "sunken-active": "#cdcdcd"
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
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. (hovered, 10% darker)"}
      colors={{
            "sunken-hovered": "#e3e3e3"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (active, 15% darker)"}
      colors={{
            "surface-active": "#e0e0e0"
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
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree. (hovered, 10% darker)"}
      colors={{
            "surface-hovered": "#f7f7f7"
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
            "emphasis-disabled": "#18191d"
      }}
    />
          <ColorItem
      title={"color.emphasis-hovered"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (hovered, 45% brighter)"}
      colors={{
            "emphasis-hovered": "#26272d"
      }}
    />
          <ColorItem
      title={"color.emphasis-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 50% darker)"}
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
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (hovered, 45% darker)"}
      colors={{
            "ink-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.ink-inactive"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper. (inactive, 50% darker)"}
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
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% darker)"}
      colors={{
            "subtle-hovered": "#212326"
      }}
    />
          <ColorItem
      title={"color.subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtle-inactive": "#000000"
      }}
    />
          <ColorItem
      title={"color.subtlest"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "subtlest": "#c3c3ca"
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
            "subtlest-disabled": "#5a5a66"
      }}
    />
          <ColorItem
      title={"color.subtlest-hovered"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (hovered, 45% darker)"}
      colors={{
            "subtlest-hovered": "#323239"
      }}
    />
          <ColorItem
      title={"color.subtlest-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 50% darker)"}
      colors={{
            "subtlest-inactive": "#000000"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>{"Separator"}</h2>
        <ColorPalette>
          <ColorItem
      title={"color.hairline"}
      subtitle={"Low-contrast color for borders, dividers and separators."}
      colors={{
            "hairline": "#f4f4f6"
      }}
    />
          <ColorItem
      title={"color.outline"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "outline": "#dcdce0"
      }}
    />
          <ColorItem
      title={"color.outline-active"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
            "outline-active": "#000000"
      }}
    />
          <ColorItem
      title={"color.outline-disabled"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
            "outline-disabled": "#636370"
      }}
    />
          <ColorItem
      title={"color.outline-hovered"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hovered, light contrast primitive)"}
      colors={{
            "outline-hovered": "#000000"
      }}
    />
          <ColorItem
      title={"color.outline-inactive"}
      subtitle={"High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 50% darker)"}
      colors={{
            "outline-inactive": "#000000"
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
        </ColorPalette>
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.base"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "primary": "#000000",
              "secondary": "#c3c3ca",
              "link": "#0077bc",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#4e4e59",
              "primary-active": "#000000",
              "primary-inactive": "#000000",
              "primary-disabled": "#151519",
              "secondary-hovered": "#9797a2",
              "secondary-active": "#9797a2",
              "secondary-inactive": "#000000",
              "secondary-disabled": "#5a5a66",
              "link-hovered": "#004075",
              "link-active": "#004075",
              "link-inactive": "#54b6ff",
              "link-disabled": "#254865"
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
              "secondary": "#ffa1b1",
              "link": "#840929",
              "on-primary": "#ffffff",
              "on-secondary": "#000000",
              "primary-hovered": "#27000c",
              "primary-active": "#27000c",
              "primary-inactive": "#bc2445",
              "primary-disabled": "#44232c",
              "secondary-hovered": "#c82b4c",
              "secondary-active": "#c82b4c",
              "secondary-inactive": "#fff8fa",
              "secondary-disabled": "#7c4853",
              "link-hovered": "#27000c",
              "link-active": "#27000c",
              "link-inactive": "#bc2445",
              "link-disabled": "#44232c"
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
              "link": "#492b9b",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#240c59",
              "primary-active": "#240c59",
              "primary-inactive": "#6c4ec9",
              "primary-disabled": "#342c4d",
              "secondary-hovered": "#6b48bb",
              "secondary-active": "#6b48bb",
              "secondary-inactive": "#ffffff",
              "secondary-disabled": "#584e78",
              "link-hovered": "#240c59",
              "link-active": "#240c59",
              "link-inactive": "#6c4ec9",
              "link-disabled": "#342c4d"
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
              "link": "#0145be",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-hovered": "#001f5a",
              "primary-active": "#001f5a",
              "primary-inactive": "#216df4",
              "primary-disabled": "#233457",
              "secondary-hovered": "#1b61df",
              "secondary-active": "#1b61df",
              "secondary-inactive": "#def0ff",
              "secondary-disabled": "#425983",
              "link-hovered": "#001f5a",
              "link-active": "#001f5a",
              "link-inactive": "#216df4",
              "link-disabled": "#233457"
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
              "link": "#0a4e38",
              "on-primary": "#ffffff",
              "on-secondary": "#000000",
              "primary-hovered": "#000000",
              "primary-active": "#000000",
              "primary-inactive": "#298565",
              "primary-disabled": "#213731",
              "secondary-hovered": "#237b5b",
              "secondary-active": "#237b5b",
              "secondary-inactive": "#d0fdea",
              "secondary-disabled": "#45655b",
              "link-hovered": "#000000",
              "link-active": "#000000",
              "link-inactive": "#298565",
              "link-disabled": "#213731"
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
              "secondary": "#e3b36a",
              "link": "#583902",
              "on-primary": "#ffffff",
              "on-secondary": "#000000",
              "primary-hovered": "#070400",
              "primary-active": "#070400",
              "primary-inactive": "#92661d",
              "primary-disabled": "#3a3021",
              "secondary-hovered": "#8e611a",
              "secondary-active": "#8e611a",
              "secondary-inactive": "#ffefd8",
              "secondary-disabled": "#6b5944",
              "link-hovered": "#070400",
              "link-active": "#070400",
              "link-inactive": "#92661d",
              "link-disabled": "#3a3021"
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
