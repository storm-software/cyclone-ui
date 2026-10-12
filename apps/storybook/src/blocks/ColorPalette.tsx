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
      title={"color.border"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "border": "#555659"
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
      title={"color.primary"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "primary": "#f1f1f1"
      }}
    />
          <ColorItem
      title={"color.secondary"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "secondary": "#cacacb"
      }}
    />
          <ColorItem
      title={"color.surface-canvas"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "surface-canvas": "#151518"
      }}
    />
          <ColorItem
      title={"color.surface-elevated"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface-elevated": "#1f1f21"
      }}
    />
          <ColorItem
      title={"color.surface-floating"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "surface-floating": "#242528"
      }}
    />
          <ColorItem
      title={"color.surface-highest"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "surface-highest": "#2b2c30"
      }}
    />
          <ColorItem
      title={"color.surface-sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "surface-sunken": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.tertiary"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "tertiary": "#46464a"
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
              "base": "#f1f1f1"
      }}
    />
            <ColorItem
      title={"color.base-accent"}
      subtitle={"Alias of base for the base theme"}
      colors={{
              "base-accent": "#f1f1f1"
      }}
    />
            <ColorItem
      title={"color.base-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% darker)"}
      colors={{
              "base-active": "#d0d0d0"
      }}
    />
            <ColorItem
      title={"color.base-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-disabled": "#808082"
      }}
    />
            <ColorItem
      title={"color.base-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
              "base-inactive": "#808080"
      }}
    />
            <ColorItem
      title={"color.base-subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base-subtle": "#46464a"
      }}
    />
            <ColorItem
      title={"color.base-subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 13% brighter)"}
      colors={{
              "base-subtle-active": "#535358"
      }}
    />
            <ColorItem
      title={"color.base-subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-subtle-disabled": "#444447"
      }}
    />
            <ColorItem
      title={"color.base-subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
              "base-subtle-inactive": "#808080"
      }}
    />
            <ColorItem
      title={"color.on-base-accent"}
      subtitle={"Generated text and icon color on base backgrounds"}
      colors={{
              "on-base-accent": "#151518"
      }}
    />
            <ColorItem
      title={"color.on-base-subtle"}
      subtitle={"Generated text and icon color on base-subtle backgrounds"}
      colors={{
              "on-base-subtle": "#FAFAFA"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Border"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.border-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
              "border-active": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.border-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "border-disabled": "#494a4d"
      }}
    />
            <ColorItem
      title={"color.border-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "border-inactive": "#808080"
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
              "danger": "#cf2d56"
      }}
    />
            <ColorItem
      title={"color.danger-accent"}
      subtitle={"Alias of danger for the danger theme"}
      colors={{
              "danger-accent": "#cf2d56"
      }}
    />
            <ColorItem
      title={"color.danger-active"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "danger-active": "#ff607f"
      }}
    />
            <ColorItem
      title={"color.danger-disabled"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-disabled": "#70424d"
      }}
    />
            <ColorItem
      title={"color.danger-inactive"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "danger-inactive": "#a70037"
      }}
    />
            <ColorItem
      title={"color.danger-subtle"}
      subtitle={"Generated low-emphasis danger background for the dark theme"}
      colors={{
              "danger-subtle": "#620020"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-active"}
      subtitle={"Generated low-emphasis danger background for the dark theme (active, 25% brighter)"}
      colors={{
              "danger-subtle-active": "#7b1f34"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-disabled"}
      subtitle={"Generated low-emphasis danger background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-subtle-disabled": "#4c313a"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-inactive"}
      subtitle={"Generated low-emphasis danger background for the dark theme (inactive, 20% darker)"}
      colors={{
              "danger-subtle-inactive": "#4e0011"
      }}
    />
            <ColorItem
      title={"color.on-danger-accent"}
      subtitle={"Generated text and icon color on danger backgrounds"}
      colors={{
              "on-danger-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-danger-subtle"}
      subtitle={"Generated text and icon color on danger-subtle backgrounds"}
      colors={{
              "on-danger-subtle": "#ffa6b0"
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
              "discovery": "#9277da"
      }}
    />
            <ColorItem
      title={"color.discovery-accent"}
      subtitle={"Alias of discovery for the discovery theme"}
      colors={{
              "discovery-accent": "#9277da"
      }}
    />
            <ColorItem
      title={"color.discovery-active"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% brighter)"}
      colors={{
              "discovery-active": "#c3a9ff"
      }}
    />
            <ColorItem
      title={"color.discovery-disabled"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-disabled": "#5e5776"
      }}
    />
            <ColorItem
      title={"color.discovery-inactive"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% darker)"}
      colors={{
              "discovery-inactive": "#6d51b0"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery-subtle": "#362661"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-active"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% brighter)"}
      colors={{
              "discovery-subtle-active": "#4b3c79"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-disabled"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-subtle-disabled": "#3e3a4d"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-inactive"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% darker)"}
      colors={{
              "discovery-subtle-inactive": "#27144e"
      }}
    />
            <ColorItem
      title={"color.on-discovery-accent"}
      subtitle={"Generated text and icon color on discovery backgrounds"}
      colors={{
              "on-discovery-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-discovery-subtle"}
      subtitle={"Generated text and icon color on discovery-subtle backgrounds"}
      colors={{
              "on-discovery-subtle": "#FAFAFA"
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
              "info": "#4d8eff"
      }}
    />
            <ColorItem
      title={"color.info-accent"}
      subtitle={"Alias of info for the info theme"}
      colors={{
              "info-accent": "#4d8eff"
      }}
    />
            <ColorItem
      title={"color.info-active"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "info-active": "#7fc4ff"
      }}
    />
            <ColorItem
      title={"color.info-disabled"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-disabled": "#4b5e81"
      }}
    />
            <ColorItem
      title={"color.info-inactive"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "info-inactive": "#2564d1"
      }}
    />
            <ColorItem
      title={"color.info-subtle"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info-subtle": "#19438c"
      }}
    />
            <ColorItem
      title={"color.info-subtle-active"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% brighter)"}
      colors={{
              "info-subtle-active": "#3560ac"
      }}
    />
            <ColorItem
      title={"color.info-subtle-disabled"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-subtle-disabled": "#37445b"
      }}
    />
            <ColorItem
      title={"color.info-subtle-inactive"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% darker)"}
      colors={{
              "info-subtle-inactive": "#022c73"
      }}
    />
            <ColorItem
      title={"color.on-info-accent"}
      subtitle={"Generated text and icon color on info backgrounds"}
      colors={{
              "on-info-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-info-subtle"}
      subtitle={"Generated text and icon color on info-subtle backgrounds"}
      colors={{
              "on-info-subtle": "#FAFAFA"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-success-accent"}
      subtitle={"Generated text and icon color on success backgrounds"}
      colors={{
              "on-success-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-success-subtle"}
      subtitle={"Generated text and icon color on success-subtle backgrounds"}
      colors={{
              "on-success-subtle": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#45c791"
      }}
    />
            <ColorItem
      title={"color.success-accent"}
      subtitle={"Alias of success for the success theme"}
      colors={{
              "success-accent": "#45c791"
      }}
    />
            <ColorItem
      title={"color.success-active"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "success-active": "#89ffcc"
      }}
    />
            <ColorItem
      title={"color.success-disabled"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-disabled": "#4c7062"
      }}
    />
            <ColorItem
      title={"color.success-inactive"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "success-inactive": "#009865"
      }}
    />
            <ColorItem
      title={"color.success-subtle"}
      subtitle={"Generated low-emphasis success background for the dark theme"}
      colors={{
              "success-subtle": "#006140"
      }}
    />
            <ColorItem
      title={"color.success-subtle-active"}
      subtitle={"Generated low-emphasis success background for the dark theme (active, 25% brighter)"}
      colors={{
              "success-subtle-active": "#31815e"
      }}
    />
            <ColorItem
      title={"color.success-subtle-disabled"}
      subtitle={"Generated low-emphasis success background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-subtle-disabled": "#354d45"
      }}
    />
            <ColorItem
      title={"color.success-subtle-inactive"}
      subtitle={"Generated low-emphasis success background for the dark theme (inactive, 20% darker)"}
      colors={{
              "success-subtle-inactive": "#004829"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-warning-accent"}
      subtitle={"Generated text and icon color on warning backgrounds"}
      colors={{
              "on-warning-accent": "#151518"
      }}
    />
            <ColorItem
      title={"color.on-warning-subtle"}
      subtitle={"Generated text and icon color on warning-subtle backgrounds"}
      colors={{
              "on-warning-subtle": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#f7ac23"
      }}
    />
            <ColorItem
      title={"color.warning-accent"}
      subtitle={"Alias of warning for the warning theme"}
      colors={{
              "warning-accent": "#f7ac23"
      }}
    />
            <ColorItem
      title={"color.warning-active"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "warning-active": "#b56e00"
      }}
    />
            <ColorItem
      title={"color.warning-disabled"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-disabled": "#7f6948"
      }}
    />
            <ColorItem
      title={"color.warning-inactive"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "warning-inactive": "#ffe067"
      }}
    />
            <ColorItem
      title={"color.warning-subtle"}
      subtitle={"Generated low-emphasis warning background for the dark theme"}
      colors={{
              "warning-subtle": "#764e00"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-active"}
      subtitle={"Generated low-emphasis warning background for the dark theme (active, 25% brighter)"}
      colors={{
              "warning-subtle-active": "#996f2f"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-disabled"}
      subtitle={"Generated low-emphasis warning background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-subtle-disabled": "#534837"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-inactive"}
      subtitle={"Generated low-emphasis warning background for the dark theme (inactive, 20% darker)"}
      colors={{
              "warning-subtle-inactive": "#5b3500"
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
      title={"color.border"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "border": "#626364"
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
      title={"color.primary"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "primary": "#cfcfcf"
      }}
    />
          <ColorItem
      title={"color.secondary"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "secondary": "#b4b4b4"
      }}
    />
          <ColorItem
      title={"color.surface-canvas"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "surface-canvas": "#343438"
      }}
    />
          <ColorItem
      title={"color.surface-elevated"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface-elevated": "#3c3c3e"
      }}
    />
          <ColorItem
      title={"color.surface-floating"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "surface-floating": "#3f4043"
      }}
    />
          <ColorItem
      title={"color.surface-highest"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "surface-highest": "#444548"
      }}
    />
          <ColorItem
      title={"color.surface-sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "surface-sunken": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.tertiary"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "tertiary": "#57575a"
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
              "base": "#cfcfcf"
      }}
    />
            <ColorItem
      title={"color.base-accent"}
      subtitle={"Alias of base for the base theme"}
      colors={{
              "base-accent": "#cfcfcf"
      }}
    />
            <ColorItem
      title={"color.base-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% darker)"}
      colors={{
              "base-active": "#b8b8b8"
      }}
    />
            <ColorItem
      title={"color.base-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-disabled": "#808081"
      }}
    />
            <ColorItem
      title={"color.base-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
              "base-inactive": "#808080"
      }}
    />
            <ColorItem
      title={"color.base-subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base-subtle": "#57575a"
      }}
    />
            <ColorItem
      title={"color.base-subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 13% brighter)"}
      colors={{
              "base-subtle-active": "#616164"
      }}
    />
            <ColorItem
      title={"color.base-subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-subtle-disabled": "#565658"
      }}
    />
            <ColorItem
      title={"color.base-subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
              "base-subtle-inactive": "#808080"
      }}
    />
            <ColorItem
      title={"color.on-base-accent"}
      subtitle={"Generated text and icon color on base backgrounds"}
      colors={{
              "on-base-accent": "#343438"
      }}
    />
            <ColorItem
      title={"color.on-base-subtle"}
      subtitle={"Generated text and icon color on base-subtle backgrounds"}
      colors={{
              "on-base-subtle": "#d5d5d5"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Border"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.border-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
              "border-active": "#d9d9d9"
      }}
    />
            <ColorItem
      title={"color.border-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "border-disabled": "#595a5c"
      }}
    />
            <ColorItem
      title={"color.border-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "border-inactive": "#808080"
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
              "danger": "#ab5268"
      }}
    />
            <ColorItem
      title={"color.danger-accent"}
      subtitle={"Alias of danger for the danger theme"}
      colors={{
              "danger-accent": "#ab5268"
      }}
    />
            <ColorItem
      title={"color.danger-active"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "danger-active": "#d56d82"
      }}
    />
            <ColorItem
      title={"color.danger-disabled"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-disabled": "#73565d"
      }}
    />
            <ColorItem
      title={"color.danger-inactive"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "danger-inactive": "#962c4f"
      }}
    />
            <ColorItem
      title={"color.danger-subtle"}
      subtitle={"Generated low-emphasis danger background for the dark theme"}
      colors={{
              "danger-subtle": "#70213b"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-active"}
      subtitle={"Generated low-emphasis danger background for the dark theme (active, 25% brighter)"}
      colors={{
              "danger-subtle-active": "#7a3e4c"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-disabled"}
      subtitle={"Generated low-emphasis danger background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-subtle-disabled": "#5c484f"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-inactive"}
      subtitle={"Generated low-emphasis danger background for the dark theme (inactive, 20% darker)"}
      colors={{
              "danger-subtle-inactive": "#661d2d"
      }}
    />
            <ColorItem
      title={"color.on-danger-accent"}
      subtitle={"Generated text and icon color on danger backgrounds"}
      colors={{
              "on-danger-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-danger-subtle"}
      subtitle={"Generated text and icon color on danger-subtle backgrounds"}
      colors={{
              "on-danger-subtle": "#e0939c"
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
              "discovery": "#8e7dbb"
      }}
    />
            <ColorItem
      title={"color.discovery-accent"}
      subtitle={"Alias of discovery for the discovery theme"}
      colors={{
              "discovery-accent": "#8e7dbb"
      }}
    />
            <ColorItem
      title={"color.discovery-active"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% brighter)"}
      colors={{
              "discovery-active": "#ac95e0"
      }}
    />
            <ColorItem
      title={"color.discovery-disabled"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-disabled": "#696577"
      }}
    />
            <ColorItem
      title={"color.discovery-inactive"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% darker)"}
      colors={{
              "discovery-inactive": "#75669a"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery-subtle": "#4c416a"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-active"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% brighter)"}
      colors={{
              "discovery-subtle-active": "#5c5378"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-disabled"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-subtle-disabled": "#524f5c"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-inactive"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% darker)"}
      colors={{
              "discovery-subtle-inactive": "#403160"
      }}
    />
            <ColorItem
      title={"color.on-discovery-accent"}
      subtitle={"Generated text and icon color on discovery backgrounds"}
      colors={{
              "on-discovery-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-discovery-subtle"}
      subtitle={"Generated text and icon color on discovery-subtle backgrounds"}
      colors={{
              "on-discovery-subtle": "#d5d5d5"
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
              "info": "#638cd2"
      }}
    />
            <ColorItem
      title={"color.info-accent"}
      subtitle={"Alias of info for the info theme"}
      colors={{
              "info-accent": "#638cd2"
      }}
    />
            <ColorItem
      title={"color.info-active"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "info-active": "#7eb0da"
      }}
    />
            <ColorItem
      title={"color.info-disabled"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-disabled": "#5e697e"
      }}
    />
            <ColorItem
      title={"color.info-inactive"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "info-inactive": "#4d70ac"
      }}
    />
            <ColorItem
      title={"color.info-subtle"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info-subtle": "#3b5685"
      }}
    />
            <ColorItem
      title={"color.info-subtle-active"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% brighter)"}
      colors={{
              "info-subtle-active": "#536c97"
      }}
    />
            <ColorItem
      title={"color.info-subtle-disabled"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-subtle-disabled": "#4d5665"
      }}
    />
            <ColorItem
      title={"color.info-subtle-inactive"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% darker)"}
      colors={{
              "info-subtle-inactive": "#254479"
      }}
    />
            <ColorItem
      title={"color.on-info-accent"}
      subtitle={"Generated text and icon color on info backgrounds"}
      colors={{
              "on-info-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-info-subtle"}
      subtitle={"Generated text and icon color on info-subtle backgrounds"}
      colors={{
              "on-info-subtle": "#d5d5d5"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-success-accent"}
      subtitle={"Generated text and icon color on success backgrounds"}
      colors={{
              "on-success-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-success-subtle"}
      subtitle={"Generated text and icon color on success-subtle backgrounds"}
      colors={{
              "on-success-subtle": "#d9d9d9"
      }}
    />
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#60a88a"
      }}
    />
            <ColorItem
      title={"color.success-accent"}
      subtitle={"Alias of success for the success theme"}
      colors={{
              "success-accent": "#60a88a"
      }}
    />
            <ColorItem
      title={"color.success-active"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "success-active": "#84dbb5"
      }}
    />
            <ColorItem
      title={"color.success-disabled"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-disabled": "#5d736a"
      }}
    />
            <ColorItem
      title={"color.success-inactive"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "success-inactive": "#298e6c"
      }}
    />
            <ColorItem
      title={"color.success-subtle"}
      subtitle={"Generated low-emphasis success background for the dark theme"}
      colors={{
              "success-subtle": "#207055"
      }}
    />
            <ColorItem
      title={"color.success-subtle-active"}
      subtitle={"Generated low-emphasis success background for the dark theme (active, 25% brighter)"}
      colors={{
              "success-subtle-active": "#4c7d68"
      }}
    />
            <ColorItem
      title={"color.success-subtle-disabled"}
      subtitle={"Generated low-emphasis success background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-subtle-disabled": "#4b5c57"
      }}
    />
            <ColorItem
      title={"color.success-subtle-inactive"}
      subtitle={"Generated low-emphasis success background for the dark theme (inactive, 20% darker)"}
      colors={{
              "success-subtle-inactive": "#1d6244"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-warning-accent"}
      subtitle={"Generated text and icon color on warning backgrounds"}
      colors={{
              "on-warning-accent": "#343438"
      }}
    />
            <ColorItem
      title={"color.on-warning-subtle"}
      subtitle={"Generated text and icon color on warning-subtle backgrounds"}
      colors={{
              "on-warning-subtle": "#d9d9d9"
      }}
    />
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#c59b4d"
      }}
    />
            <ColorItem
      title={"color.warning-accent"}
      subtitle={"Alias of warning for the warning theme"}
      colors={{
              "warning-accent": "#c59b4d"
      }}
    />
            <ColorItem
      title={"color.warning-active"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "warning-active": "#9d722e"
      }}
    />
            <ColorItem
      title={"color.warning-disabled"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-disabled": "#7c6f5b"
      }}
    />
            <ColorItem
      title={"color.warning-inactive"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "warning-inactive": "#d6c171"
      }}
    />
            <ColorItem
      title={"color.warning-subtle"}
      subtitle={"Generated low-emphasis warning background for the dark theme"}
      colors={{
              "warning-subtle": "#7b5e24"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-active"}
      subtitle={"Generated low-emphasis warning background for the dark theme (active, 25% brighter)"}
      colors={{
              "warning-subtle-active": "#8c734d"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-disabled"}
      subtitle={"Generated low-emphasis warning background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-subtle-disabled": "#60594d"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-inactive"}
      subtitle={"Generated low-emphasis warning background for the dark theme (inactive, 20% darker)"}
      colors={{
              "warning-subtle-inactive": "#6d4c20"
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
      title={"color.border"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "border": "#3f424a"
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
      title={"color.primary"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "primary": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.secondary"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "secondary": "#ebebed"
      }}
    />
          <ColorItem
      title={"color.surface-canvas"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "surface-canvas": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface-elevated"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface-elevated": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface-floating"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "surface-floating": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface-highest"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "surface-highest": "#08080a"
      }}
    />
          <ColorItem
      title={"color.surface-sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "surface-sunken": "#000000"
      }}
    />
          <ColorItem
      title={"color.tertiary"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "tertiary": "#2b2b33"
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
              "base": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.base-accent"}
      subtitle={"Alias of base for the base theme"}
      colors={{
              "base-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.base-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% darker)"}
      colors={{
              "base-active": "#f4f4f4"
      }}
    />
            <ColorItem
      title={"color.base-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-disabled": "#7a7a89"
      }}
    />
            <ColorItem
      title={"color.base-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
              "base-inactive": "#808080"
      }}
    />
            <ColorItem
      title={"color.base-subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base-subtle": "#2b2b33"
      }}
    />
            <ColorItem
      title={"color.base-subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 13% brighter)"}
      colors={{
              "base-subtle-active": "#3d3d49"
      }}
    />
            <ColorItem
      title={"color.base-subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-subtle-disabled": "#28282f"
      }}
    />
            <ColorItem
      title={"color.base-subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
              "base-subtle-inactive": "#808080"
      }}
    />
            <ColorItem
      title={"color.on-base-accent"}
      subtitle={"Generated text and icon color on base backgrounds"}
      colors={{
              "on-base-accent": "#000000"
      }}
    />
            <ColorItem
      title={"color.on-base-subtle"}
      subtitle={"Generated text and icon color on base-subtle backgrounds"}
      colors={{
              "on-base-subtle": "#ffffff"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Border"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.border-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)"}
      colors={{
              "border-active": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.border-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "border-disabled": "#2f3138"
      }}
    />
            <ColorItem
      title={"color.border-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "border-inactive": "#808080"
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
              "danger": "#f00a45"
      }}
    />
            <ColorItem
      title={"color.danger-accent"}
      subtitle={"Alias of danger for the danger theme"}
      colors={{
              "danger-accent": "#f00a45"
      }}
    />
            <ColorItem
      title={"color.danger-active"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "danger-active": "#ff8ba2"
      }}
    />
            <ColorItem
      title={"color.danger-disabled"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-disabled": "#642b39"
      }}
    />
            <ColorItem
      title={"color.danger-inactive"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "danger-inactive": "#7f002a"
      }}
    />
            <ColorItem
      title={"color.danger-subtle"}
      subtitle={"Generated low-emphasis danger background for the dark theme"}
      colors={{
              "danger-subtle": "#1b0009"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-active"}
      subtitle={"Generated low-emphasis danger background for the dark theme (active, 25% brighter)"}
      colors={{
              "danger-subtle-active": "#65081d"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-disabled"}
      subtitle={"Generated low-emphasis danger background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-subtle-disabled": "#2d161d"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-inactive"}
      subtitle={"Generated low-emphasis danger background for the dark theme (inactive, 20% darker)"}
      colors={{
              "danger-subtle-inactive": "#000000"
      }}
    />
            <ColorItem
      title={"color.on-danger-accent"}
      subtitle={"Generated text and icon color on danger backgrounds"}
      colors={{
              "on-danger-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-danger-subtle"}
      subtitle={"Generated text and icon color on danger-subtle backgrounds"}
      colors={{
              "on-danger-subtle": "#fff1f2"
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
              "discovery": "#a283f3"
      }}
    />
            <ColorItem
      title={"color.discovery-accent"}
      subtitle={"Alias of discovery for the discovery theme"}
      colors={{
              "discovery-accent": "#a283f3"
      }}
    />
            <ColorItem
      title={"color.discovery-active"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% brighter)"}
      colors={{
              "discovery-active": "#f8f5ff"
      }}
    />
            <ColorItem
      title={"color.discovery-disabled"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-disabled": "#4f4472"
      }}
    />
            <ColorItem
      title={"color.discovery-inactive"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% darker)"}
      colors={{
              "discovery-inactive": "#643bc7"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery-subtle": "#1d0f42"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-active"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% brighter)"}
      colors={{
              "discovery-subtle-active": "#37256f"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-disabled"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-subtle-disabled": "#231f32"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-inactive"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% darker)"}
      colors={{
              "discovery-subtle-inactive": "#0a0219"
      }}
    />
            <ColorItem
      title={"color.on-discovery-accent"}
      subtitle={"Generated text and icon color on discovery backgrounds"}
      colors={{
              "on-discovery-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-discovery-subtle"}
      subtitle={"Generated text and icon color on discovery-subtle backgrounds"}
      colors={{
              "on-discovery-subtle": "#ffffff"
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
              "info": "#70a4ff"
      }}
    />
            <ColorItem
      title={"color.info-accent"}
      subtitle={"Alias of info for the info theme"}
      colors={{
              "info-accent": "#70a4ff"
      }}
    />
            <ColorItem
      title={"color.info-active"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "info-active": "#b8deff"
      }}
    />
            <ColorItem
      title={"color.info-disabled"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-disabled": "#36507f"
      }}
    />
            <ColorItem
      title={"color.info-inactive"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "info-inactive": "#0159f1"
      }}
    />
            <ColorItem
      title={"color.info-subtle"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info-subtle": "#012e7c"
      }}
    />
            <ColorItem
      title={"color.info-subtle-active"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% brighter)"}
      colors={{
              "info-subtle-active": "#1953bb"
      }}
    />
            <ColorItem
      title={"color.info-subtle-disabled"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-subtle-disabled": "#1e2b43"
      }}
    />
            <ColorItem
      title={"color.info-subtle-inactive"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% darker)"}
      colors={{
              "info-subtle-inactive": "#001437"
      }}
    />
            <ColorItem
      title={"color.on-info-accent"}
      subtitle={"Generated text and icon color on info backgrounds"}
      colors={{
              "on-info-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-info-subtle"}
      subtitle={"Generated text and icon color on info-subtle backgrounds"}
      colors={{
              "on-info-subtle": "#ffffff"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-success-accent"}
      subtitle={"Generated text and icon color on success backgrounds"}
      colors={{
              "on-success-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-success-subtle"}
      subtitle={"Generated text and icon color on success-subtle backgrounds"}
      colors={{
              "on-success-subtle": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#2de498"
      }}
    />
            <ColorItem
      title={"color.success-accent"}
      subtitle={"Alias of success for the success theme"}
      colors={{
              "success-accent": "#2de498"
      }}
    />
            <ColorItem
      title={"color.success-active"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% brighter)"}
      colors={{
              "success-active": "#c7ffe7"
      }}
    />
            <ColorItem
      title={"color.success-disabled"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-disabled": "#376754"
      }}
    />
            <ColorItem
      title={"color.success-inactive"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% darker)"}
      colors={{
              "success-inactive": "#006a46"
      }}
    />
            <ColorItem
      title={"color.success-subtle"}
      subtitle={"Generated low-emphasis success background for the dark theme"}
      colors={{
              "success-subtle": "#001a11"
      }}
    />
            <ColorItem
      title={"color.success-subtle-active"}
      subtitle={"Generated low-emphasis success background for the dark theme (active, 25% brighter)"}
      colors={{
              "success-subtle-active": "#19774e"
      }}
    />
            <ColorItem
      title={"color.success-subtle-disabled"}
      subtitle={"Generated low-emphasis success background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-subtle-disabled": "#1a3029"
      }}
    />
            <ColorItem
      title={"color.success-subtle-inactive"}
      subtitle={"Generated low-emphasis success background for the dark theme (inactive, 20% darker)"}
      colors={{
              "success-subtle-inactive": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-warning-accent"}
      subtitle={"Generated text and icon color on warning backgrounds"}
      colors={{
              "on-warning-accent": "#000000"
      }}
    />
            <ColorItem
      title={"color.on-warning-subtle"}
      subtitle={"Generated text and icon color on warning-subtle backgrounds"}
      colors={{
              "on-warning-subtle": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#ffb327"
      }}
    />
            <ColorItem
      title={"color.warning-accent"}
      subtitle={"Alias of warning for the warning theme"}
      colors={{
              "warning-accent": "#ffb327"
      }}
    />
            <ColorItem
      title={"color.warning-active"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "warning-active": "#945a00"
      }}
    />
            <ColorItem
      title={"color.warning-disabled"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-disabled": "#7c5e32"
      }}
    />
            <ColorItem
      title={"color.warning-inactive"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "warning-inactive": "#ffe995"
      }}
    />
            <ColorItem
      title={"color.warning-subtle"}
      subtitle={"Generated low-emphasis warning background for the dark theme"}
      colors={{
              "warning-subtle": "#382500"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-active"}
      subtitle={"Generated low-emphasis warning background for the dark theme (active, 25% brighter)"}
      colors={{
              "warning-subtle-active": "#9b6615"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-disabled"}
      subtitle={"Generated low-emphasis warning background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-subtle-disabled": "#382e1d"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-inactive"}
      subtitle={"Generated low-emphasis warning background for the dark theme (inactive, 20% darker)"}
      colors={{
              "warning-subtle-inactive": "#110a00"
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
      title={"color.border"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "border": "#b0b0b1"
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
      title={"color.primary"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "primary": "#1f1f21"
      }}
    />
          <ColorItem
      title={"color.secondary"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "secondary": "#555659"
      }}
    />
          <ColorItem
      title={"color.surface-canvas"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "surface-canvas": "#eaeaea"
      }}
    />
          <ColorItem
      title={"color.surface-elevated"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface-elevated": "#f1f1f1"
      }}
    />
          <ColorItem
      title={"color.surface-floating"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "surface-floating": "#fafafa"
      }}
    />
          <ColorItem
      title={"color.surface-highest"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "surface-highest": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "surface-sunken": "#e1e1e1"
      }}
    />
          <ColorItem
      title={"color.tertiary"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "tertiary": "#cacacb"
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
              "base": "#1f1f21"
      }}
    />
            <ColorItem
      title={"color.base-accent"}
      subtitle={"Alias of base for the base theme"}
      colors={{
              "base-accent": "#1f1f21"
      }}
    />
            <ColorItem
      title={"color.base-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% lighter)"}
      colors={{
              "base-active": "#38383a"
      }}
    />
            <ColorItem
      title={"color.base-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-disabled": "#363639"
      }}
    />
            <ColorItem
      title={"color.base-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
              "base-inactive": "#030303"
      }}
    />
            <ColorItem
      title={"color.base-subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base-subtle": "#cacacb"
      }}
    />
            <ColorItem
      title={"color.base-subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 12% darker)"}
      colors={{
              "base-subtle-active": "#a9a9aa"
      }}
    />
            <ColorItem
      title={"color.base-subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-subtle-disabled": "#727275"
      }}
    />
            <ColorItem
      title={"color.base-subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
              "base-subtle-inactive": "#030303"
      }}
    />
            <ColorItem
      title={"color.on-base-accent"}
      subtitle={"Generated text and icon color on base backgrounds"}
      colors={{
              "on-base-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-base-subtle"}
      subtitle={"Generated text and icon color on base-subtle backgrounds"}
      colors={{
              "on-base-subtle": "#151518"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Border"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.border-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
              "border-active": "#0c0c0d"
      }}
    />
            <ColorItem
      title={"color.border-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "border-disabled": "#69696b"
      }}
    />
            <ColorItem
      title={"color.border-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "border-inactive": "#030303"
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
              "danger": "#8e223e"
      }}
    />
            <ColorItem
      title={"color.danger-accent"}
      subtitle={"Alias of danger for the danger theme"}
      colors={{
              "danger-accent": "#8e223e"
      }}
    />
            <ColorItem
      title={"color.danger-active"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "danger-active": "#6a0022"
      }}
    />
            <ColorItem
      title={"color.danger-disabled"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-disabled": "#5a3c44"
      }}
    />
            <ColorItem
      title={"color.danger-inactive"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "danger-inactive": "#ab3e56"
      }}
    />
            <ColorItem
      title={"color.danger-subtle"}
      subtitle={"Generated low-emphasis danger background for the light theme"}
      colors={{
              "danger-subtle": "#ee7a8e"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-active"}
      subtitle={"Generated low-emphasis danger background for the light theme (active, 25% darker)"}
      colors={{
              "danger-subtle-active": "#b0435a"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-disabled"}
      subtitle={"Generated low-emphasis danger background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-subtle-disabled": "#7b5960"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-inactive"}
      subtitle={"Generated low-emphasis danger background for the light theme (inactive, 20% brighter)"}
      colors={{
              "danger-subtle-inactive": "#ffa7ba"
      }}
    />
            <ColorItem
      title={"color.on-danger-accent"}
      subtitle={"Generated text and icon color on danger backgrounds"}
      colors={{
              "on-danger-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-danger-subtle"}
      subtitle={"Generated text and icon color on danger-subtle backgrounds"}
      colors={{
              "on-danger-subtle": "#200006"
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
              "discovery": "#594395"
      }}
    />
            <ColorItem
      title={"color.discovery-accent"}
      subtitle={"Alias of discovery for the discovery theme"}
      colors={{
              "discovery-accent": "#594395"
      }}
    />
            <ColorItem
      title={"color.discovery-active"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% darker)"}
      colors={{
              "discovery-active": "#3c2372"
      }}
    />
            <ColorItem
      title={"color.discovery-disabled"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-disabled": "#4a445f"
      }}
    />
            <ColorItem
      title={"color.discovery-inactive"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% brighter)"}
      colors={{
              "discovery-inactive": "#725db2"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery-subtle": "#a690e1"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-active"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% darker)"}
      colors={{
              "discovery-subtle-active": "#725ba7"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-disabled"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-subtle-disabled": "#655f79"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-inactive"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% brighter)"}
      colors={{
              "discovery-subtle-inactive": "#d2bcff"
      }}
    />
            <ColorItem
      title={"color.on-discovery-accent"}
      subtitle={"Generated text and icon color on discovery backgrounds"}
      colors={{
              "on-discovery-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-discovery-subtle"}
      subtitle={"Generated text and icon color on discovery-subtle backgrounds"}
      colors={{
              "on-discovery-subtle": "#FAFAFA"
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
              "info": "#2055b3"
      }}
    />
            <ColorItem
      title={"color.info-accent"}
      subtitle={"Alias of info for the info theme"}
      colors={{
              "info-accent": "#2055b3"
      }}
    />
            <ColorItem
      title={"color.info-active"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "info-active": "#00318d"
      }}
    />
            <ColorItem
      title={"color.info-disabled"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-disabled": "#3b4a68"
      }}
    />
            <ColorItem
      title={"color.info-inactive"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "info-inactive": "#3b72d3"
      }}
    />
            <ColorItem
      title={"color.info-subtle"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info-subtle": "#6da2ff"
      }}
    />
            <ColorItem
      title={"color.info-subtle-active"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% darker)"}
      colors={{
              "info-subtle-active": "#396ac2"
      }}
    />
            <ColorItem
      title={"color.info-subtle-disabled"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-subtle-disabled": "#556582"
      }}
    />
            <ColorItem
      title={"color.info-subtle-inactive"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% brighter)"}
      colors={{
              "info-subtle-inactive": "#99d1ff"
      }}
    />
            <ColorItem
      title={"color.on-info-accent"}
      subtitle={"Generated text and icon color on info backgrounds"}
      colors={{
              "on-info-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-info-subtle"}
      subtitle={"Generated text and icon color on info-subtle backgrounds"}
      colors={{
              "on-info-subtle": "#FAFAFA"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-success-accent"}
      subtitle={"Generated text and icon color on success backgrounds"}
      colors={{
              "on-success-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-success-subtle"}
      subtitle={"Generated text and icon color on success-subtle backgrounds"}
      colors={{
              "on-success-subtle": "#002217"
      }}
    />
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#216b53"
      }}
    />
            <ColorItem
      title={"color.success-accent"}
      subtitle={"Alias of success for the success theme"}
      colors={{
              "success-accent": "#216b53"
      }}
    />
            <ColorItem
      title={"color.success-active"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "success-active": "#004933"
      }}
    />
            <ColorItem
      title={"color.success-disabled"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-disabled": "#3c504b"
      }}
    />
            <ColorItem
      title={"color.success-inactive"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "success-inactive": "#40876e"
      }}
    />
            <ColorItem
      title={"color.success-subtle"}
      subtitle={"Generated low-emphasis success background for the light theme"}
      colors={{
              "success-subtle": "#74ba9f"
      }}
    />
            <ColorItem
      title={"color.success-subtle-active"}
      subtitle={"Generated low-emphasis success background for the light theme (active, 25% darker)"}
      colors={{
              "success-subtle-active": "#3b8168"
      }}
    />
            <ColorItem
      title={"color.success-subtle-disabled"}
      subtitle={"Generated low-emphasis success background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-subtle-disabled": "#586c66"
      }}
    />
            <ColorItem
      title={"color.success-subtle-inactive"}
      subtitle={"Generated low-emphasis success background for the light theme (inactive, 20% brighter)"}
      colors={{
              "success-subtle-inactive": "#a3eacd"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-warning-accent"}
      subtitle={"Generated text and icon color on warning backgrounds"}
      colors={{
              "on-warning-accent": "#FAFAFA"
      }}
    />
            <ColorItem
      title={"color.on-warning-subtle"}
      subtitle={"Generated text and icon color on warning-subtle backgrounds"}
      colors={{
              "on-warning-subtle": "#241500"
      }}
    />
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#765417"
      }}
    />
            <ColorItem
      title={"color.warning-accent"}
      subtitle={"Alias of warning for the warning theme"}
      colors={{
              "warning-accent": "#765417"
      }}
    />
            <ColorItem
      title={"color.warning-active"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "warning-active": "#543400"
      }}
    />
            <ColorItem
      title={"color.warning-disabled"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-disabled": "#53493b"
      }}
    />
            <ColorItem
      title={"color.warning-inactive"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "warning-inactive": "#926f36"
      }}
    />
            <ColorItem
      title={"color.warning-subtle"}
      subtitle={"Generated low-emphasis warning background for the light theme"}
      colors={{
              "warning-subtle": "#c7a168"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-active"}
      subtitle={"Generated low-emphasis warning background for the light theme (active, 25% darker)"}
      colors={{
              "warning-subtle-active": "#8e6a31"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-disabled"}
      subtitle={"Generated low-emphasis warning background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-subtle-disabled": "#6f6456"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-inactive"}
      subtitle={"Generated low-emphasis warning background for the light theme (inactive, 20% brighter)"}
      colors={{
              "warning-subtle-inactive": "#f7d095"
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
      title={"color.border"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "border": "#a1a1a2"
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
      title={"color.primary"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "primary": "#3c3c3e"
      }}
    />
          <ColorItem
      title={"color.secondary"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "secondary": "#626364"
      }}
    />
          <ColorItem
      title={"color.surface-canvas"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "surface-canvas": "#cacaca"
      }}
    />
          <ColorItem
      title={"color.surface-elevated"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface-elevated": "#cfcfcf"
      }}
    />
          <ColorItem
      title={"color.surface-floating"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "surface-floating": "#d5d5d5"
      }}
    />
          <ColorItem
      title={"color.surface-highest"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "surface-highest": "#d9d9d9"
      }}
    />
          <ColorItem
      title={"color.surface-sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "surface-sunken": "#c4c4c4"
      }}
    />
          <ColorItem
      title={"color.tertiary"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "tertiary": "#b4b4b4"
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
              "base": "#3c3c3e"
      }}
    />
            <ColorItem
      title={"color.base-accent"}
      subtitle={"Alias of base for the base theme"}
      colors={{
              "base-accent": "#3c3c3e"
      }}
    />
            <ColorItem
      title={"color.base-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% lighter)"}
      colors={{
              "base-active": "#4d4d4f"
      }}
    />
            <ColorItem
      title={"color.base-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-disabled": "#4c4c4e"
      }}
    />
            <ColorItem
      title={"color.base-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
              "base-inactive": "#282828"
      }}
    />
            <ColorItem
      title={"color.base-subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base-subtle": "#b4b4b4"
      }}
    />
            <ColorItem
      title={"color.base-subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 12% darker)"}
      colors={{
              "base-subtle-active": "#9d9d9d"
      }}
    />
            <ColorItem
      title={"color.base-subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-subtle-disabled": "#767678"
      }}
    />
            <ColorItem
      title={"color.base-subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
              "base-subtle-inactive": "#282828"
      }}
    />
            <ColorItem
      title={"color.on-base-accent"}
      subtitle={"Generated text and icon color on base backgrounds"}
      colors={{
              "on-base-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-base-subtle"}
      subtitle={"Generated text and icon color on base-subtle backgrounds"}
      colors={{
              "on-base-subtle": "#343438"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Border"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.border-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
              "border-active": "#2e2e30"
      }}
    />
            <ColorItem
      title={"color.border-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "border-disabled": "#707071"
      }}
    />
            <ColorItem
      title={"color.border-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "border-inactive": "#282828"
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
              "danger": "#864254"
      }}
    />
            <ColorItem
      title={"color.danger-accent"}
      subtitle={"Alias of danger for the danger theme"}
      colors={{
              "danger-accent": "#864254"
      }}
    />
            <ColorItem
      title={"color.danger-active"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "danger-active": "#75223c"
      }}
    />
            <ColorItem
      title={"color.danger-disabled"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-disabled": "#655156"
      }}
    />
            <ColorItem
      title={"color.danger-inactive"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "danger-inactive": "#975967"
      }}
    />
            <ColorItem
      title={"color.danger-subtle"}
      subtitle={"Generated low-emphasis danger background for the light theme"}
      colors={{
              "danger-subtle": "#cb7e8b"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-active"}
      subtitle={"Generated low-emphasis danger background for the light theme (active, 25% darker)"}
      colors={{
              "danger-subtle-active": "#9a5d6a"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-disabled"}
      subtitle={"Generated low-emphasis danger background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-subtle-disabled": "#7a676b"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-inactive"}
      subtitle={"Generated low-emphasis danger background for the light theme (inactive, 20% brighter)"}
      colors={{
              "danger-subtle-inactive": "#e094a4"
      }}
    />
            <ColorItem
      title={"color.on-danger-accent"}
      subtitle={"Generated text and icon color on danger backgrounds"}
      colors={{
              "on-danger-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-danger-subtle"}
      subtitle={"Generated text and icon color on danger-subtle backgrounds"}
      colors={{
              "on-danger-subtle": "#4d1620"
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
              "discovery": "#675a8a"
      }}
    />
            <ColorItem
      title={"color.discovery-accent"}
      subtitle={"Alias of discovery for the discovery theme"}
      colors={{
              "discovery-accent": "#675a8a"
      }}
    />
            <ColorItem
      title={"color.discovery-active"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% darker)"}
      colors={{
              "discovery-active": "#514075"
      }}
    />
            <ColorItem
      title={"color.discovery-disabled"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-disabled": "#5a5768"
      }}
    />
            <ColorItem
      title={"color.discovery-inactive"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% brighter)"}
      colors={{
              "discovery-inactive": "#796d9d"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery-subtle": "#9b8cc3"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-active"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% darker)"}
      colors={{
              "discovery-subtle-active": "#786c96"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-disabled"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-subtle-disabled": "#6e6a79"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-inactive"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% brighter)"}
      colors={{
              "discovery-subtle-inactive": "#b69fe3"
      }}
    />
            <ColorItem
      title={"color.on-discovery-accent"}
      subtitle={"Generated text and icon color on discovery backgrounds"}
      colors={{
              "on-discovery-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-discovery-subtle"}
      subtitle={"Generated text and icon color on discovery-subtle backgrounds"}
      colors={{
              "on-discovery-subtle": "#d5d5d5"
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
              "info": "#45649b"
      }}
    />
            <ColorItem
      title={"color.info-accent"}
      subtitle={"Alias of info for the info theme"}
      colors={{
              "info-accent": "#45649b"
      }}
    />
            <ColorItem
      title={"color.info-active"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "info-active": "#274988"
      }}
    />
            <ColorItem
      title={"color.info-disabled"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-disabled": "#515a6e"
      }}
    />
            <ColorItem
      title={"color.info-inactive"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "info-inactive": "#5a79af"
      }}
    />
            <ColorItem
      title={"color.info-subtle"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info-subtle": "#7598d7"
      }}
    />
            <ColorItem
      title={"color.info-subtle-active"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% darker)"}
      colors={{
              "info-subtle-active": "#5873a4"
      }}
    />
            <ColorItem
      title={"color.info-subtle-disabled"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-subtle-disabled": "#646e7f"
      }}
    />
            <ColorItem
      title={"color.info-subtle-inactive"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% brighter)"}
      colors={{
              "info-subtle-inactive": "#8cb9de"
      }}
    />
            <ColorItem
      title={"color.on-info-accent"}
      subtitle={"Generated text and icon color on info backgrounds"}
      colors={{
              "on-info-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-info-subtle"}
      subtitle={"Generated text and icon color on info-subtle backgrounds"}
      colors={{
              "on-info-subtle": "#d5d5d5"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-success-accent"}
      subtitle={"Generated text and icon color on success backgrounds"}
      colors={{
              "on-success-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-success-subtle"}
      subtitle={"Generated text and icon color on success-subtle backgrounds"}
      colors={{
              "on-success-subtle": "#174e3c"
      }}
    />
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#3e7160"
      }}
    />
            <ColorItem
      title={"color.success-accent"}
      subtitle={"Alias of success for the success theme"}
      colors={{
              "success-accent": "#3e7160"
      }}
    />
            <ColorItem
      title={"color.success-active"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "success-active": "#1d634e"
      }}
    />
            <ColorItem
      title={"color.success-disabled"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-disabled": "#505e5b"
      }}
    />
            <ColorItem
      title={"color.success-inactive"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "success-inactive": "#578172"
      }}
    />
            <ColorItem
      title={"color.success-subtle"}
      subtitle={"Generated low-emphasis success background for the light theme"}
      colors={{
              "success-subtle": "#7ba595"
      }}
    />
            <ColorItem
      title={"color.success-subtle-active"}
      subtitle={"Generated low-emphasis success background for the light theme (active, 25% darker)"}
      colors={{
              "success-subtle-active": "#537d6e"
      }}
    />
            <ColorItem
      title={"color.success-subtle-disabled"}
      subtitle={"Generated low-emphasis success background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-subtle-disabled": "#65716d"
      }}
    />
            <ColorItem
      title={"color.success-subtle-inactive"}
      subtitle={"Generated low-emphasis success background for the light theme (inactive, 20% brighter)"}
      colors={{
              "success-subtle-inactive": "#96ccb6"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-warning-accent"}
      subtitle={"Generated text and icon color on warning backgrounds"}
      colors={{
              "on-warning-accent": "#d5d5d5"
      }}
    />
            <ColorItem
      title={"color.on-warning-subtle"}
      subtitle={"Generated text and icon color on warning-subtle backgrounds"}
      colors={{
              "on-warning-subtle": "#4f3817"
      }}
    />
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#786137"
      }}
    />
            <ColorItem
      title={"color.warning-accent"}
      subtitle={"Alias of warning for the warning theme"}
      colors={{
              "warning-accent": "#786137"
      }}
    />
            <ColorItem
      title={"color.warning-active"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "warning-active": "#694d1e"
      }}
    />
            <ColorItem
      title={"color.warning-disabled"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-disabled": "#605950"
      }}
    />
            <ColorItem
      title={"color.warning-inactive"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "warning-inactive": "#887351"
      }}
    />
            <ColorItem
      title={"color.warning-subtle"}
      subtitle={"Generated low-emphasis warning background for the light theme"}
      colors={{
              "warning-subtle": "#ac9674"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-active"}
      subtitle={"Generated low-emphasis warning background for the light theme (active, 25% darker)"}
      colors={{
              "warning-subtle-active": "#856f4d"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-disabled"}
      subtitle={"Generated low-emphasis warning background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-subtle-disabled": "#736c64"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-inactive"}
      subtitle={"Generated low-emphasis warning background for the light theme (inactive, 20% brighter)"}
      colors={{
              "warning-subtle-inactive": "#d6b88c"
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
      title={"color.border"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "border": "#c3c3ca"
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
      title={"color.primary"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "primary": "#000000"
      }}
    />
          <ColorItem
      title={"color.secondary"}
      subtitle={"Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper."}
      colors={{
            "secondary": "#3f424a"
      }}
    />
          <ColorItem
      title={"color.surface-canvas"}
      subtitle={"Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator."}
      colors={{
            "surface-canvas": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-elevated"}
      subtitle={"Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree."}
      colors={{
            "surface-elevated": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-floating"}
      subtitle={"Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant."}
      colors={{
            "surface-floating": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-highest"}
      subtitle={"Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant."}
      colors={{
            "surface-highest": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface-sunken"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "surface-sunken": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.tertiary"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "tertiary": "#ebebed"
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
              "base": "#000000"
      }}
    />
            <ColorItem
      title={"color.base-accent"}
      subtitle={"Alias of base for the base theme"}
      colors={{
              "base-accent": "#000000"
      }}
    />
            <ColorItem
      title={"color.base-active"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% lighter)"}
      colors={{
              "base-active": "#17171b"
      }}
    />
            <ColorItem
      title={"color.base-disabled"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-disabled": "#151519"
      }}
    />
            <ColorItem
      title={"color.base-inactive"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)"}
      colors={{
              "base-inactive": "#000000"
      }}
    />
            <ColorItem
      title={"color.base-subtle"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base-subtle": "#ebebed"
      }}
    />
            <ColorItem
      title={"color.base-subtle-active"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 12% darker)"}
      colors={{
              "base-subtle-active": "#b9b9c0"
      }}
    />
            <ColorItem
      title={"color.base-subtle-disabled"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "base-subtle-disabled": "#676776"
      }}
    />
            <ColorItem
      title={"color.base-subtle-inactive"}
      subtitle={"Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)"}
      colors={{
              "base-subtle-inactive": "#000000"
      }}
    />
            <ColorItem
      title={"color.on-base-accent"}
      subtitle={"Generated text and icon color on base backgrounds"}
      colors={{
              "on-base-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-base-subtle"}
      subtitle={"Generated text and icon color on base-subtle backgrounds"}
      colors={{
              "on-base-subtle": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Border"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.border-active"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)"}
      colors={{
              "border-active": "#000000"
      }}
    />
            <ColorItem
      title={"color.border-disabled"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "border-disabled": "#5a5a66"
      }}
    />
            <ColorItem
      title={"color.border-inactive"}
      subtitle={"Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)"}
      colors={{
              "border-inactive": "#000000"
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
              "danger": "#840929"
      }}
    />
            <ColorItem
      title={"color.danger-accent"}
      subtitle={"Alias of danger for the danger theme"}
      colors={{
              "danger-accent": "#840929"
      }}
    />
            <ColorItem
      title={"color.danger-active"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "danger-active": "#27000c"
      }}
    />
            <ColorItem
      title={"color.danger-disabled"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-disabled": "#44232c"
      }}
    />
            <ColorItem
      title={"color.danger-inactive"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "danger-inactive": "#bc2445"
      }}
    />
            <ColorItem
      title={"color.danger-subtle"}
      subtitle={"Generated low-emphasis danger background for the light theme"}
      colors={{
              "danger-subtle": "#ff98aa"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-active"}
      subtitle={"Generated low-emphasis danger background for the light theme (active, 25% darker)"}
      colors={{
              "danger-subtle-active": "#c5294a"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-disabled"}
      subtitle={"Generated low-emphasis danger background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "danger-subtle-disabled": "#7a4751"
      }}
    />
            <ColorItem
      title={"color.danger-subtle-inactive"}
      subtitle={"Generated low-emphasis danger background for the light theme (inactive, 20% brighter)"}
      colors={{
              "danger-subtle-inactive": "#fff2f5"
      }}
    />
            <ColorItem
      title={"color.on-danger-accent"}
      subtitle={"Generated text and icon color on danger backgrounds"}
      colors={{
              "on-danger-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-danger-subtle"}
      subtitle={"Generated text and icon color on danger-subtle backgrounds"}
      colors={{
              "on-danger-subtle": "#000000"
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
              "discovery": "#492b9b"
      }}
    />
            <ColorItem
      title={"color.discovery-accent"}
      subtitle={"Alias of discovery for the discovery theme"}
      colors={{
              "discovery-accent": "#492b9b"
      }}
    />
            <ColorItem
      title={"color.discovery-active"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% darker)"}
      colors={{
              "discovery-active": "#240c59"
      }}
    />
            <ColorItem
      title={"color.discovery-disabled"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-disabled": "#342c4d"
      }}
    />
            <ColorItem
      title={"color.discovery-inactive"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% brighter)"}
      colors={{
              "discovery-inactive": "#6c4ec9"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery-subtle": "#c1adf7"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-active"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% darker)"}
      colors={{
              "discovery-subtle-active": "#6b48bb"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-disabled"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "discovery-subtle-disabled": "#584e78"
      }}
    />
            <ColorItem
      title={"color.discovery-subtle-inactive"}
      subtitle={"Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% brighter)"}
      colors={{
              "discovery-subtle-inactive": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-discovery-accent"}
      subtitle={"Generated text and icon color on discovery backgrounds"}
      colors={{
              "on-discovery-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-discovery-subtle"}
      subtitle={"Generated text and icon color on discovery-subtle backgrounds"}
      colors={{
              "on-discovery-subtle": "#ffffff"
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
              "info": "#0145be"
      }}
    />
            <ColorItem
      title={"color.info-accent"}
      subtitle={"Alias of info for the info theme"}
      colors={{
              "info-accent": "#0145be"
      }}
    />
            <ColorItem
      title={"color.info-active"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "info-active": "#001f5a"
      }}
    />
            <ColorItem
      title={"color.info-disabled"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-disabled": "#233457"
      }}
    />
            <ColorItem
      title={"color.info-inactive"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "info-inactive": "#216df4"
      }}
    />
            <ColorItem
      title={"color.info-subtle"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info-subtle": "#9ec1ff"
      }}
    />
            <ColorItem
      title={"color.info-subtle-active"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% darker)"}
      colors={{
              "info-subtle-active": "#1b61df"
      }}
    />
            <ColorItem
      title={"color.info-subtle-disabled"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "info-subtle-disabled": "#425983"
      }}
    />
            <ColorItem
      title={"color.info-subtle-inactive"}
      subtitle={"Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% brighter)"}
      colors={{
              "info-subtle-inactive": "#def0ff"
      }}
    />
            <ColorItem
      title={"color.on-info-accent"}
      subtitle={"Generated text and icon color on info backgrounds"}
      colors={{
              "on-info-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-info-subtle"}
      subtitle={"Generated text and icon color on info-subtle backgrounds"}
      colors={{
              "on-info-subtle": "#ffffff"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-success-accent"}
      subtitle={"Generated text and icon color on success backgrounds"}
      colors={{
              "on-success-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-success-subtle"}
      subtitle={"Generated text and icon color on success-subtle backgrounds"}
      colors={{
              "on-success-subtle": "#000000"
      }}
    />
            <ColorItem
      title={"color.success"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#0a4e38"
      }}
    />
            <ColorItem
      title={"color.success-accent"}
      subtitle={"Alias of success for the success theme"}
      colors={{
              "success-accent": "#0a4e38"
      }}
    />
            <ColorItem
      title={"color.success-active"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "success-active": "#000000"
      }}
    />
            <ColorItem
      title={"color.success-disabled"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-disabled": "#213731"
      }}
    />
            <ColorItem
      title={"color.success-inactive"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "success-inactive": "#298565"
      }}
    />
            <ColorItem
      title={"color.success-subtle"}
      subtitle={"Generated low-emphasis success background for the light theme"}
      colors={{
              "success-subtle": "#72d1ac"
      }}
    />
            <ColorItem
      title={"color.success-subtle-active"}
      subtitle={"Generated low-emphasis success background for the light theme (active, 25% darker)"}
      colors={{
              "success-subtle-active": "#237b5b"
      }}
    />
            <ColorItem
      title={"color.success-subtle-disabled"}
      subtitle={"Generated low-emphasis success background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "success-subtle-disabled": "#45655b"
      }}
    />
            <ColorItem
      title={"color.success-subtle-inactive"}
      subtitle={"Generated low-emphasis success background for the light theme (inactive, 20% brighter)"}
      colors={{
              "success-subtle-inactive": "#d0fdea"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.on-warning-accent"}
      subtitle={"Generated text and icon color on warning backgrounds"}
      colors={{
              "on-warning-accent": "#ffffff"
      }}
    />
            <ColorItem
      title={"color.on-warning-subtle"}
      subtitle={"Generated text and icon color on warning-subtle backgrounds"}
      colors={{
              "on-warning-subtle": "#000000"
      }}
    />
            <ColorItem
      title={"color.warning"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#583902"
      }}
    />
            <ColorItem
      title={"color.warning-accent"}
      subtitle={"Alias of warning for the warning theme"}
      colors={{
              "warning-accent": "#583902"
      }}
    />
            <ColorItem
      title={"color.warning-active"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)"}
      colors={{
              "warning-active": "#070400"
      }}
    />
            <ColorItem
      title={"color.warning-disabled"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-disabled": "#3a3021"
      }}
    />
            <ColorItem
      title={"color.warning-inactive"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)"}
      colors={{
              "warning-inactive": "#92661d"
      }}
    />
            <ColorItem
      title={"color.warning-subtle"}
      subtitle={"Generated low-emphasis warning background for the light theme"}
      colors={{
              "warning-subtle": "#e0af64"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-active"}
      subtitle={"Generated low-emphasis warning background for the light theme (active, 25% darker)"}
      colors={{
              "warning-subtle-active": "#8a5e18"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-disabled"}
      subtitle={"Generated low-emphasis warning background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))"}
      colors={{
              "warning-subtle-disabled": "#685843"
      }}
    />
            <ColorItem
      title={"color.warning-subtle-inactive"}
      subtitle={"Generated low-emphasis warning background for the light theme (inactive, 20% brighter)"}
      colors={{
              "warning-subtle-inactive": "#ffebcc"
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
