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
            "9": "#606164",
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
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#fafafa",
            "neutral.subtle": "#151518",
            "brand.emphasis": "#8cb6ff",
            "brand.subtle": "#4d8eff",
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
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#606164"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, 8% brighter)"}
      colors={{
            "hairline-active": "#6b6c6f"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hover, 23% brighter)"}
      colors={{
            "hairline-hover": "#808184"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 20% darker)"}
      colors={{
            "hairline-inactive": "#454649"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Highest-emphasis text and icon color. Use it for headings and content that must stand out from body copy. Used by HeadingText, InlineCodeText, the active Slider value and hovered RadioGroupField options."}
      colors={{
            "emphasis": "#e1e1e1",
            "body": "#cacacb",
            "subtle": "#959698",
            "subtlest": "#7b7b7e"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links."}
      colors={{
            "link": "#6da2ff"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (active, 19% brighter)"}
      colors={{
            "link-active": "#95cdff"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (hover, 23% brighter)"}
      colors={{
            "link-hover": "#9ed6ff"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (inactive, 20% darker)"}
      colors={{
            "link-inactive": "#4375ce"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Background color of a floating overlay panel, matching the topmost surface so overlays stand clear of the page."}
      colors={{
            "background": "#2b2c30",
            "border": "#7b7b7e",
            "backdrop": "#0d0c0766"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields. Field uses it for the asterisk next to the label of a required input; keep it consistent with the danger accent so required and error states read as related."}
      colors={{
            "required": "#cf2d56"
      }}
    />
          <ColorItem
      title={"color.selection"}
      subtitle={"Background color of highlighted text. Follows the brand accent so selection stays on brand in every theme."}
      colors={{
            "background": "#3be4be",
            "foreground": "#151518"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#0c0c0d",
            "canvas": "#151518",
            "elevated": "#1f1f21",
            "floating": "#242528",
            "overlay": "#2b2c30",
            "sunken-hover": "#141415",
            "sunken-active": "#121213",
            "sunken-inactive": "#060607",
            "sunken-disabled": "#0c0c0d",
            "canvas-hover": "#1f1f22",
            "canvas-active": "#1d1d20",
            "canvas-inactive": "#0c0c0f",
            "canvas-disabled": "#151517",
            "elevated-hover": "#2c2c2e",
            "elevated-active": "#2a2a2c",
            "elevated-inactive": "#141416",
            "elevated-disabled": "#1f1f21",
            "floating-hover": "#333437",
            "floating-active": "#303134",
            "floating-inactive": "#18191b",
            "floating-disabled": "#242527",
            "overlay-hover": "#3c3d41",
            "overlay-active": "#393a3e",
            "overlay-inactive": "#1d1e22",
            "overlay-disabled": "#2b2c2f"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"Fully transparent white."}
      colors={{
            "transparent": "#ffffff00"
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
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "base": "#fafafa",
              "base-hover": "#9b9b9b",
              "base-active": "#ffffff",
              "base-inactive": "#808080",
              "base-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base": "#2b2c30",
              "base-hover": "#414347",
              "base-active": "#333438",
              "base-inactive": "#808080",
              "base-disabled": "#2b2c2f"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Text and icon color placed on top of a `base` accent fill, chosen for contrast against it. Exposed as `onAccent`; used for Button labels, Badge text, the Switch thumb icon and the active Slider thumb and value label."}
      colors={{
              "base": "#151518",
              "base-hover": "#232326",
              "base-active": "#ffffff",
              "base-inactive": "#808080",
              "base-disabled": "#151517"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
              "base": "#fafafa",
              "base-hover": "#9b9b9b",
              "base-active": "#ffffff",
              "base-inactive": "#808080",
              "base-disabled": "#fafafa66"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#3be4be",
              "brand-hover": "#00a785",
              "brand-active": "#00b28f",
              "brand-inactive": "#81fff4",
              "brand-disabled": "#6adfc0"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis brand background for the `brand` theme. Exposed as `muted` inside that theme; use it for soft brand-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the brand theme."}
      colors={{
              "brand": "#007e5e",
              "brand-hover": "#3da280",
              "brand-active": "#359c7a",
              "brand-inactive": "#005f41",
              "brand-disabled": "#2f7b61"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#151518",
              "brand-hover": "#1f1f22",
              "brand-active": "#1d1d20",
              "brand-inactive": "#0c0c0f",
              "brand-disabled": "#151517"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated brand foreground on muted backgrounds"}
      colors={{
              "brand": "#3be4be",
              "brand-hover": "#00a785",
              "brand-active": "#00b28f",
              "brand-inactive": "#81fff4",
              "brand-disabled": "#6adfc0"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#cf2d56",
              "danger-hover": "#fd5b7b",
              "danger-active": "#f55474",
              "danger-inactive": "#a70037",
              "danger-disabled": "#c0455d"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated danger muted background for the dark theme"}
      colors={{
              "danger": "#660022",
              "danger-hover": "#7e1e34",
              "danger-active": "#791931",
              "danger-inactive": "#510013",
              "danger-disabled": "#5e1526"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#FAFAFA",
              "danger-hover": "#b2b2b2",
              "danger-active": "#bebebe",
              "danger-inactive": "#ffffff",
              "danger-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated danger foreground on muted backgrounds"}
      colors={{
              "danger": "#ff9ba8",
              "danger-hover": "#c26472",
              "danger-active": "#cc6e7b",
              "danger-inactive": "#ffcedb",
              "danger-disabled": "#f3a3ac"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#9277da",
              "discovery-hover": "#bea4ff",
              "discovery-active": "#b69cff",
              "discovery-inactive": "#6d51b0",
              "discovery-disabled": "#907ccb"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis discovery background for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery": "#362661",
              "discovery-hover": "#483a77",
              "discovery-active": "#453673",
              "discovery-inactive": "#27144e",
              "discovery-disabled": "#352a58"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#FAFAFA",
              "discovery-hover": "#b2b2b2",
              "discovery-active": "#bebebe",
              "discovery-inactive": "#ffffff",
              "discovery-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated discovery foreground on muted backgrounds"}
      colors={{
              "discovery": "#9277da",
              "discovery-hover": "#bea4ff",
              "discovery-active": "#b69cff",
              "discovery-inactive": "#6d51b0",
              "discovery-disabled": "#907ccb"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#4d8eff",
              "info-hover": "#7abeff",
              "info-active": "#72b6ff",
              "info-inactive": "#2564d1",
              "info-disabled": "#5d91ea"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis info background for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info": "#19438c",
              "info-hover": "#325da9",
              "info-active": "#2d59a4",
              "info-inactive": "#022c73",
              "info-disabled": "#24457f"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#FAFAFA",
              "info-hover": "#b2b2b2",
              "info-active": "#bebebe",
              "info-inactive": "#ffffff",
              "info-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated info foreground on muted backgrounds"}
      colors={{
              "info": "#4d8eff",
              "info-hover": "#7abeff",
              "info-active": "#72b6ff",
              "info-inactive": "#2564d1",
              "info-disabled": "#5d91ea"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Negative"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#cf2d56",
              "negative-hover": "#fd5b7b",
              "negative-active": "#f55474",
              "negative-inactive": "#a70037",
              "negative-disabled": "#c0455d"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated negative muted background for the dark theme"}
      colors={{
              "negative": "#660022",
              "negative-hover": "#7e1e34",
              "negative-active": "#791931",
              "negative-inactive": "#510013",
              "negative-disabled": "#5e1526"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#FAFAFA",
              "negative-hover": "#b2b2b2",
              "negative-active": "#bebebe",
              "negative-inactive": "#ffffff",
              "negative-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated negative foreground on muted backgrounds"}
      colors={{
              "negative": "#ff9ba8",
              "negative-hover": "#c26472",
              "negative-active": "#cc6e7b",
              "negative-inactive": "#ffcedb",
              "negative-disabled": "#f3a3ac"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Positive"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#45c791",
              "positive-hover": "#82ffc6",
              "positive-active": "#78f5bc",
              "positive-inactive": "#009865",
              "positive-disabled": "#64c297"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated positive muted background for the dark theme"}
      colors={{
              "positive": "#006a47",
              "positive-hover": "#328964",
              "positive-active": "#2b835f",
              "positive-inactive": "#00502f",
              "positive-disabled": "#26674b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#FAFAFA",
              "positive-hover": "#b2b2b2",
              "positive-active": "#bebebe",
              "positive-inactive": "#ffffff",
              "positive-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated positive foreground on muted backgrounds"}
      colors={{
              "positive": "#ffffff",
              "positive-hover": "#b6b6b6",
              "positive-active": "#c2c2c2",
              "positive-inactive": "#ffffff",
              "positive-disabled": "#ffffff66"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#45c791",
              "success-hover": "#82ffc6",
              "success-active": "#78f5bc",
              "success-inactive": "#009865",
              "success-disabled": "#64c297"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated success muted background for the dark theme"}
      colors={{
              "success": "#006a47",
              "success-hover": "#328964",
              "success-active": "#2b835f",
              "success-inactive": "#00502f",
              "success-disabled": "#26674b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#FAFAFA",
              "success-hover": "#b2b2b2",
              "success-active": "#bebebe",
              "success-inactive": "#ffffff",
              "success-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated success foreground on muted backgrounds"}
      colors={{
              "success": "#ffffff",
              "success-hover": "#b6b6b6",
              "success-active": "#c2c2c2",
              "success-inactive": "#ffffff",
              "success-disabled": "#ffffff66"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#f7ac23",
              "warning-hover": "#bb7400",
              "warning-active": "#c67d00",
              "warning-inactive": "#ffe067",
              "warning-disabled": "#ecb055"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated warning muted background for the dark theme"}
      colors={{
              "warning": "#7d5300",
              "warning-hover": "#9e722e",
              "warning-active": "#986c28",
              "warning-inactive": "#613900",
              "warning-disabled": "#775622"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#151518",
              "warning-hover": "#1f1f22",
              "warning-active": "#1d1d20",
              "warning-inactive": "#0c0c0f",
              "warning-disabled": "#151517"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated warning foreground on muted backgrounds"}
      colors={{
              "warning": "#ffffff",
              "warning-hover": "#b6b6b6",
              "warning-active": "#c2c2c2",
              "warning-inactive": "#ffffff",
              "warning-disabled": "#ffffff66"
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
            "9": "#6a6a6c",
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
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#d5d5d5",
            "neutral.subtle": "#343438",
            "brand.emphasis": "#85a5dc",
            "brand.subtle": "#638cd2",
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
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#6a6a6c"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, 8% brighter)"}
      colors={{
            "hairline-active": "#717274"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hover, 23% brighter)"}
      colors={{
            "hairline-hover": "#808182"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 20% darker)"}
      colors={{
            "hairline-inactive": "#575759"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Highest-emphasis text and icon color. Use it for headings and content that must stand out from body copy. Used by HeadingText, InlineCodeText, the active Slider value and hovered RadioGroupField options."}
      colors={{
            "emphasis": "#c4c4c4",
            "body": "#b4b4b4",
            "subtle": "#8f8f90",
            "subtlest": "#7d7d7e"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links."}
      colors={{
            "link": "#7598d7"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (active, 19% brighter)"}
      colors={{
            "link-active": "#8ab6dd"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (hover, 23% brighter)"}
      colors={{
            "link-hover": "#8fbddf"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (inactive, 20% darker)"}
      colors={{
            "link-inactive": "#5f7bad"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Background color of a floating overlay panel, matching the topmost surface so overlays stand clear of the page."}
      colors={{
            "background": "#444548",
            "border": "#7d7d7e",
            "backdrop": "#35322666"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields. Field uses it for the asterisk next to the label of a required input; keep it consistent with the danger accent so required and error states read as related."}
      colors={{
            "required": "#ab5268"
      }}
    />
          <ColorItem
      title={"color.selection"}
      subtitle={"Background color of highlighted text. Follows the brand accent so selection stays on brand in every theme."}
      colors={{
            "background": "#5abba5",
            "foreground": "#343438"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#2e2e30",
            "canvas": "#343438",
            "elevated": "#3c3c3e",
            "floating": "#3f4043",
            "overlay": "#444548",
            "sunken-hover": "#343435",
            "sunken-active": "#323234",
            "sunken-inactive": "#29292d",
            "sunken-disabled": "#2e2e30",
            "canvas-hover": "#3b3b3f",
            "canvas-active": "#3a3a3d",
            "canvas-inactive": "#2d2d33",
            "canvas-disabled": "#343437",
            "elevated-hover": "#454547",
            "elevated-active": "#434345",
            "elevated-inactive": "#343436",
            "elevated-disabled": "#3c3c3e",
            "floating-hover": "#4a4b4d",
            "floating-active": "#48484b",
            "floating-inactive": "#36373a",
            "floating-disabled": "#3f4042",
            "overlay-hover": "#505154",
            "overlay-active": "#4e4f52",
            "overlay-inactive": "#3a3b3f",
            "overlay-disabled": "#444547"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"Fully transparent white."}
      colors={{
            "transparent": "#d9d9d900"
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
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "base": "#d5d5d5",
              "base-hover": "#939393",
              "base-active": "#d9d9d9",
              "base-inactive": "#808080",
              "base-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base": "#444548",
              "base-hover": "#545558",
              "base-active": "#4a4b4e",
              "base-inactive": "#808080",
              "base-disabled": "#444547"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Text and icon color placed on top of a `base` accent fill, chosen for contrast against it. Exposed as `onAccent`; used for Button labels, Badge text, the Switch thumb icon and the active Slider thumb and value label."}
      colors={{
              "base": "#343438",
              "base-hover": "#3e3e41",
              "base-active": "#d9d9d9",
              "base-inactive": "#808080",
              "base-disabled": "#343437"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
              "base": "#d5d5d5",
              "base-hover": "#939393",
              "base-active": "#d9d9d9",
              "base-inactive": "#808080",
              "base-disabled": "#d5d5d566"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#5abba5",
              "brand-hover": "#2c9680",
              "brand-active": "#2d9c86",
              "brand-inactive": "#7fdad2",
              "brand-disabled": "#75beaa"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis brand background for the `brand` theme. Exposed as `muted` inside that theme; use it for soft brand-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the brand theme."}
      colors={{
              "brand": "#258069",
              "brand-hover": "#57917e",
              "brand-active": "#518e7a",
              "brand-inactive": "#206f56",
              "brand-disabled": "#4a7a69"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#343438",
              "brand-hover": "#3b3b3f",
              "brand-active": "#3a3a3d",
              "brand-inactive": "#2d2d33",
              "brand-disabled": "#343437"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated brand foreground on muted backgrounds"}
      colors={{
              "brand": "#5abba5",
              "brand-hover": "#2c9680",
              "brand-active": "#2d9c86",
              "brand-inactive": "#7fdad2",
              "brand-disabled": "#75beaa"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#ab5268",
              "danger-hover": "#d26b7f",
              "danger-active": "#cb687b",
              "danger-inactive": "#962c4f",
              "danger-disabled": "#a4606d"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated danger muted background for the dark theme"}
      colors={{
              "danger": "#73213c",
              "danger-hover": "#7c3d4c",
              "danger-active": "#7a3949",
              "danger-inactive": "#671e2f",
              "danger-disabled": "#6a3340"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#d5d5d5",
              "danger-hover": "#a3a3a3",
              "danger-active": "#ababab",
              "danger-inactive": "#d9d9d9",
              "danger-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated danger foreground on muted backgrounds"}
      colors={{
              "danger": "#de8d98",
              "danger-hover": "#a8727a",
              "danger-active": "#b07880",
              "danger-inactive": "#e6a9b9",
              "danger-disabled": "#d4959c"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#8e7dbb",
              "discovery-hover": "#a892df",
              "discovery-active": "#a38ede",
              "discovery-inactive": "#75669a",
              "discovery-disabled": "#8d80b1"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis discovery background for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery": "#4c416a",
              "discovery-hover": "#5a5177",
              "discovery-active": "#584e75",
              "discovery-inactive": "#403160",
              "discovery-disabled": "#4b4364"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#d5d5d5",
              "discovery-hover": "#a3a3a3",
              "discovery-active": "#ababab",
              "discovery-inactive": "#d9d9d9",
              "discovery-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated discovery foreground on muted backgrounds"}
      colors={{
              "discovery": "#8e7dbb",
              "discovery-hover": "#a892df",
              "discovery-active": "#a38ede",
              "discovery-inactive": "#75669a",
              "discovery-disabled": "#8d80b1"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#638cd2",
              "info-hover": "#7cabd9",
              "info-active": "#77a6d8",
              "info-inactive": "#4d70ac",
              "info-disabled": "#6d8dc4"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis info background for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info": "#3b5685",
              "info-hover": "#516995",
              "info-active": "#4d6692",
              "info-inactive": "#254479",
              "info-disabled": "#42577d"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#d5d5d5",
              "info-hover": "#a3a3a3",
              "info-active": "#ababab",
              "info-inactive": "#d9d9d9",
              "info-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated info foreground on muted backgrounds"}
      colors={{
              "info": "#638cd2",
              "info-hover": "#7cabd9",
              "info-active": "#77a6d8",
              "info-inactive": "#4d70ac",
              "info-disabled": "#6d8dc4"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Negative"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#ab5268",
              "negative-hover": "#d26b7f",
              "negative-active": "#cb687b",
              "negative-inactive": "#962c4f",
              "negative-disabled": "#a4606d"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated negative muted background for the dark theme"}
      colors={{
              "negative": "#73213c",
              "negative-hover": "#7c3d4c",
              "negative-active": "#7a3949",
              "negative-inactive": "#671e2f",
              "negative-disabled": "#6a3340"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#d5d5d5",
              "negative-hover": "#a3a3a3",
              "negative-active": "#ababab",
              "negative-inactive": "#d9d9d9",
              "negative-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated negative foreground on muted backgrounds"}
      colors={{
              "negative": "#de8d98",
              "negative-hover": "#a8727a",
              "negative-active": "#b07880",
              "negative-inactive": "#e6a9b9",
              "negative-disabled": "#d4959c"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Positive"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#60a88a",
              "positive-hover": "#80dab1",
              "positive-active": "#7cd0aa",
              "positive-inactive": "#298e6c",
              "positive-disabled": "#72a88f"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated positive muted background for the dark theme"}
      colors={{
              "positive": "#227559",
              "positive-hover": "#4d826c",
              "positive-active": "#487f68",
              "positive-inactive": "#1e6749",
              "positive-disabled": "#416e5b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#d5d5d5",
              "positive-hover": "#a3a3a3",
              "positive-active": "#ababab",
              "positive-inactive": "#d9d9d9",
              "positive-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated positive foreground on muted backgrounds"}
      colors={{
              "positive": "#d9d9d9",
              "positive-hover": "#a6a6a6",
              "positive-active": "#aeaeae",
              "positive-inactive": "#d9d9d9",
              "positive-disabled": "#d9d9d966"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#60a88a",
              "success-hover": "#80dab1",
              "success-active": "#7cd0aa",
              "success-inactive": "#298e6c",
              "success-disabled": "#72a88f"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated success muted background for the dark theme"}
      colors={{
              "success": "#227559",
              "success-hover": "#4d826c",
              "success-active": "#487f68",
              "success-inactive": "#1e6749",
              "success-disabled": "#416e5b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#d5d5d5",
              "success-hover": "#a3a3a3",
              "success-active": "#ababab",
              "success-inactive": "#d9d9d9",
              "success-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated success foreground on muted backgrounds"}
      colors={{
              "success": "#d9d9d9",
              "success-hover": "#a6a6a6",
              "success-active": "#aeaeae",
              "success-inactive": "#d9d9d9",
              "success-disabled": "#d9d9d966"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#c59b4d",
              "warning-hover": "#a1752f",
              "warning-active": "#a77b30",
              "warning-inactive": "#d6c171",
              "warning-disabled": "#c4a069"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated warning muted background for the dark theme"}
      colors={{
              "warning": "#7f6125",
              "warning-hover": "#8f754d",
              "warning-active": "#8b7148",
              "warning-inactive": "#704f20",
              "warning-disabled": "#786240"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#343438",
              "warning-hover": "#3b3b3f",
              "warning-active": "#3a3a3d",
              "warning-inactive": "#2d2d33",
              "warning-disabled": "#343437"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated warning foreground on muted backgrounds"}
      colors={{
              "warning": "#d9d9d9",
              "warning-hover": "#a6a6a6",
              "warning-active": "#aeaeae",
              "warning-inactive": "#d9d9d9",
              "warning-disabled": "#d9d9d966"
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
            "9": "#4e515b",
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
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#ffffff",
            "neutral.subtle": "#000000",
            "brand.emphasis": "#cbdeff",
            "brand.subtle": "#70a4ff",
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
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#4e515b"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, 8% brighter)"}
      colors={{
            "hairline-active": "#5d616c"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hover, 23% brighter)"}
      colors={{
            "hairline-hover": "#7a7f8c"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 20% darker)"}
      colors={{
            "hairline-inactive": "#2a2c32"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Highest-emphasis text and icon color. Use it for headings and content that must stand out from body copy. Used by HeadingText, InlineCodeText, the active Slider value and hovered RadioGroupField options."}
      colors={{
            "emphasis": "#ffffff",
            "body": "#ebebed",
            "subtle": "#9a9fa7",
            "subtlest": "#737383"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links."}
      colors={{
            "link": "#9ec1ff"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (active, 19% brighter)"}
      colors={{
            "link-active": "#d8edff"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (hover, 23% brighter)"}
      colors={{
            "link-hover": "#e5f4ff"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (inactive, 20% darker)"}
      colors={{
            "link-inactive": "#2c72ed"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Background color of a floating overlay panel, matching the topmost surface so overlays stand clear of the page."}
      colors={{
            "background": "#08080a",
            "border": "#737383",
            "backdrop": "#00000066"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields. Field uses it for the asterisk next to the label of a required input; keep it consistent with the danger accent so required and error states read as related."}
      colors={{
            "required": "#f00a45"
      }}
    />
          <ColorItem
      title={"color.selection"}
      subtitle={"Background color of highlighted text. Follows the brand accent so selection stays on brand in every theme."}
      colors={{
            "background": "#2effd0",
            "foreground": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#000000",
            "canvas": "#000000",
            "elevated": "#000000",
            "floating": "#000000",
            "overlay": "#08080a",
            "sunken-hover": "#000000",
            "sunken-active": "#000000",
            "sunken-inactive": "#000000",
            "sunken-disabled": "#000000",
            "canvas-hover": "#000000",
            "canvas-active": "#000000",
            "canvas-inactive": "#000000",
            "canvas-disabled": "#000000",
            "elevated-hover": "#070709",
            "elevated-active": "#050505",
            "elevated-inactive": "#000000",
            "elevated-disabled": "#000000",
            "floating-hover": "#121215",
            "floating-active": "#0e0e11",
            "floating-inactive": "#000000",
            "floating-disabled": "#000000",
            "overlay-hover": "#1e1f25",
            "overlay-active": "#1a1b20",
            "overlay-inactive": "#000000",
            "overlay-disabled": "#070709"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"Fully transparent white."}
      colors={{
            "transparent": "#ffffff00"
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
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "base": "#ffffff",
              "base-hover": "#a7a7a7",
              "base-active": "#ffffff",
              "base-inactive": "#808080",
              "base-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base": "#08080a",
              "base-hover": "#25282e",
              "base-active": "#121316",
              "base-inactive": "#808080",
              "base-disabled": "#070709"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Text and icon color placed on top of a `base` accent fill, chosen for contrast against it. Exposed as `onAccent`; used for Button labels, Badge text, the Switch thumb icon and the active Slider thumb and value label."}
      colors={{
              "base": "#000000",
              "base-hover": "#000000",
              "base-active": "#ffffff",
              "base-inactive": "#808080",
              "base-disabled": "#000000"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
              "base": "#ffffff",
              "base-hover": "#a7a7a7",
              "base-active": "#ffffff",
              "base-inactive": "#808080",
              "base-disabled": "#ffffff66"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#2effd0",
              "brand-hover": "#007f65",
              "brand-active": "#008f73",
              "brand-inactive": "#bbfff9",
              "brand-disabled": "#71f9d5"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis brand background for the `brand` theme. Exposed as `muted` inside that theme; use it for soft brand-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the brand theme."}
      colors={{
              "brand": "#004433",
              "brand-hover": "#23ad7f",
              "brand-active": "#1ba175",
              "brand-inactive": "#001710",
              "brand-disabled": "#176d4f"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#000000",
              "brand-hover": "#000000",
              "brand-active": "#000000",
              "brand-inactive": "#000000",
              "brand-disabled": "#000000"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated brand foreground on muted backgrounds"}
      colors={{
              "brand": "#2effd0",
              "brand-hover": "#007f65",
              "brand-active": "#008f73",
              "brand-inactive": "#bbfff9",
              "brand-disabled": "#71f9d5"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#f00a45",
              "danger-hover": "#ff819a",
              "danger-active": "#ff6b89",
              "danger-inactive": "#7f002a",
              "danger-disabled": "#dc2c4e"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated danger muted background for the dark theme"}
      colors={{
              "danger": "#21000b",
              "danger-hover": "#69071d",
              "danger-active": "#5e031a",
              "danger-inactive": "#030001",
              "danger-disabled": "#32020d"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#ffffff",
              "danger-hover": "#c9c9c9",
              "danger-active": "#dadada",
              "danger-inactive": "#ffffff",
              "danger-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated danger foreground on muted backgrounds"}
      colors={{
              "danger": "#ffe1e5",
              "danger-hover": "#db5d6f",
              "danger-active": "#e56f80",
              "danger-inactive": "#ffffff",
              "danger-disabled": "#ffdbdf"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#a283f3",
              "discovery-hover": "#f3eeff",
              "discovery-active": "#eae2ff",
              "discovery-inactive": "#643bc7",
              "discovery-disabled": "#9c84e3"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis discovery background for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme."}
      colors={{
              "discovery": "#1d0f42",
              "discovery-hover": "#33226c",
              "discovery-active": "#2f1e64",
              "discovery-inactive": "#0a0219",
              "discovery-disabled": "#1b1138"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#ffffff",
              "discovery-hover": "#c9c9c9",
              "discovery-active": "#dadada",
              "discovery-inactive": "#ffffff",
              "discovery-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated discovery foreground on muted backgrounds"}
      colors={{
              "discovery": "#a283f3",
              "discovery-hover": "#f3eeff",
              "discovery-active": "#eae2ff",
              "discovery-inactive": "#643bc7",
              "discovery-disabled": "#9c84e3"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#70a4ff",
              "info-hover": "#b1d9ff",
              "info-active": "#a5d1ff",
              "info-inactive": "#0159f1",
              "info-disabled": "#68a0ff"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis info background for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme."}
      colors={{
              "info": "#012e7c",
              "info-hover": "#164fb5",
              "info-active": "#114aab",
              "info-inactive": "#001437",
              "info-disabled": "#0c2f6e"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#ffffff",
              "info-hover": "#c9c9c9",
              "info-active": "#dadada",
              "info-inactive": "#ffffff",
              "info-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated info foreground on muted backgrounds"}
      colors={{
              "info": "#70a4ff",
              "info-hover": "#b1d9ff",
              "info-active": "#a5d1ff",
              "info-inactive": "#0159f1",
              "info-disabled": "#68a0ff"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Negative"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#f00a45",
              "negative-hover": "#ff819a",
              "negative-active": "#ff6b89",
              "negative-inactive": "#7f002a",
              "negative-disabled": "#dc2c4e"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated negative muted background for the dark theme"}
      colors={{
              "negative": "#21000b",
              "negative-hover": "#69071d",
              "negative-active": "#5e031a",
              "negative-inactive": "#030001",
              "negative-disabled": "#32020d"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#ffffff",
              "negative-hover": "#c9c9c9",
              "negative-active": "#dadada",
              "negative-inactive": "#ffffff",
              "negative-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated negative foreground on muted backgrounds"}
      colors={{
              "negative": "#ffe1e5",
              "negative-hover": "#db5d6f",
              "negative-active": "#e56f80",
              "negative-inactive": "#ffffff",
              "negative-disabled": "#ffdbdf"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Positive"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#2de498",
              "positive-hover": "#bdffe1",
              "positive-active": "#a0ffd3",
              "positive-inactive": "#006a46",
              "positive-disabled": "#5ddba1"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated positive muted background for the dark theme"}
      colors={{
              "positive": "#00271a",
              "positive-hover": "#198356",
              "positive-active": "#12774e",
              "positive-inactive": "#000101",
              "positive-disabled": "#0f4b31"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#ffffff",
              "positive-hover": "#c9c9c9",
              "positive-active": "#dadada",
              "positive-inactive": "#ffffff",
              "positive-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated positive foreground on muted backgrounds"}
      colors={{
              "positive": "#ffffff",
              "positive-hover": "#cfcfcf",
              "positive-active": "#e0e0e0",
              "positive-inactive": "#ffffff",
              "positive-disabled": "#ffffff66"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#2de498",
              "success-hover": "#bdffe1",
              "success-active": "#a0ffd3",
              "success-inactive": "#006a46",
              "success-disabled": "#5ddba1"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated success muted background for the dark theme"}
      colors={{
              "success": "#00271a",
              "success-hover": "#198356",
              "success-active": "#12774e",
              "success-inactive": "#000101",
              "success-disabled": "#0f4b31"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#ffffff",
              "success-hover": "#c9c9c9",
              "success-active": "#dadada",
              "success-inactive": "#ffffff",
              "success-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated success foreground on muted backgrounds"}
      colors={{
              "success": "#ffffff",
              "success-hover": "#cfcfcf",
              "success-active": "#e0e0e0",
              "success-inactive": "#ffffff",
              "success-disabled": "#ffffff66"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#ffb327",
              "warning-hover": "#9c6100",
              "warning-active": "#ac6d00",
              "warning-inactive": "#ffe995",
              "warning-disabled": "#ffc060"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated warning muted background for the dark theme"}
      colors={{
              "warning": "#432c00",
              "warning-hover": "#a26a13",
              "warning-active": "#96610d",
              "warning-inactive": "#1a0f00",
              "warning-disabled": "#603f0b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#000000",
              "warning-hover": "#000000",
              "warning-active": "#000000",
              "warning-inactive": "#000000",
              "warning-disabled": "#000000"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated warning foreground on muted backgrounds"}
      colors={{
              "warning": "#ffffff",
              "warning-hover": "#cfcfcf",
              "warning-active": "#e0e0e0",
              "warning-inactive": "#ffffff",
              "warning-disabled": "#ffffff66"
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
            "9": "#606164",
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
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#606164",
            "neutral.subtle": "#eaeaea",
            "brand.emphasis": "#2055b3",
            "brand.subtle": "#6da2ff",
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
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#b0b0b1"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, 8% darker)"}
      colors={{
            "hairline-active": "#9d9d9e"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hover, 23% darker)"}
      colors={{
            "hairline-hover": "#7c7c7d"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 20% brighter)"}
      colors={{
            "hairline-inactive": "#e1e1e2"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Highest-emphasis text and icon color. Use it for headings and content that must stand out from body copy. Used by HeadingText, InlineCodeText, the active Slider value and hovered RadioGroupField options."}
      colors={{
            "emphasis": "#2b2c30",
            "body": "#606164",
            "subtle": "#b0b0b1",
            "subtlest": "#cacacb"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links."}
      colors={{
            "link": "#2055b3"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (active, 19% darker)"}
      colors={{
            "link-active": "#033a96"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (hover, 23% darker)"}
      colors={{
            "link-hover": "#003590"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (inactive, 20% brighter)"}
      colors={{
            "link-inactive": "#3b72d3"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Background color of a floating overlay panel, matching the topmost surface so overlays stand clear of the page."}
      colors={{
            "background": "#ffffff",
            "border": "#b0b0b1",
            "backdrop": "#1a1c1f66"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields. Field uses it for the asterisk next to the label of a required input; keep it consistent with the danger accent so required and error states read as related."}
      colors={{
            "required": "#8e223e"
      }}
    />
          <ColorItem
      title={"color.selection"}
      subtitle={"Background color of highlighted text. Follows the brand accent so selection stays on brand in every theme."}
      colors={{
            "background": "#1fb2a6",
            "foreground": "#FAFAFA"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#e1e1e1",
            "canvas": "#eaeaea",
            "elevated": "#f1f1f1",
            "floating": "#fafafa",
            "overlay": "#ffffff",
            "sunken-hover": "#a0a0a0",
            "sunken-active": "#ababab",
            "sunken-inactive": "#ffffff",
            "sunken-disabled": "#e1e1e166",
            "canvas-hover": "#a6a6a6",
            "canvas-active": "#b2b2b2",
            "canvas-inactive": "#ffffff",
            "canvas-disabled": "#eaeaea66",
            "elevated-hover": "#ababab",
            "elevated-active": "#b7b7b7",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#f1f1f166",
            "floating-hover": "#b2b2b2",
            "floating-active": "#bebebe",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#fafafa66",
            "overlay-hover": "#b6b6b6",
            "overlay-active": "#c2c2c2",
            "overlay-inactive": "#ffffff",
            "overlay-disabled": "#ffffff66"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"Fully transparent white."}
      colors={{
            "transparent": "#ffffff00"
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
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "base": "#151518",
              "base-hover": "#232326",
              "base-active": "#0c0c0d",
              "base-inactive": "#030303",
              "base-disabled": "#151517"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base": "#eaeaea",
              "base-hover": "#919191",
              "base-active": "#cacaca",
              "base-inactive": "#030303",
              "base-disabled": "#eaeaea66"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Text and icon color placed on top of a `base` accent fill, chosen for contrast against it. Exposed as `onAccent`; used for Button labels, Badge text, the Switch thumb icon and the active Slider thumb and value label."}
      colors={{
              "base": "#f1f1f1",
              "base-hover": "#959595",
              "base-active": "#0c0c0d",
              "base-inactive": "#030303",
              "base-disabled": "#f1f1f166"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
              "base": "#151518",
              "base-hover": "#232326",
              "base-active": "#0c0c0d",
              "base-inactive": "#030303",
              "base-disabled": "#151517"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#1fb2a6",
              "brand-hover": "#008277",
              "brand-active": "#008a7f",
              "brand-inactive": "#5ddfd2",
              "brand-disabled": "#4daea4"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis brand background for the `brand` theme. Exposed as `muted` inside that theme; use it for soft brand-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the brand theme."}
      colors={{
              "brand": "#68e8db",
              "brand-hover": "#08a99e",
              "brand-active": "#25b4a8",
              "brand-inactive": "#9bffff",
              "brand-disabled": "#84e3d9"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#FAFAFA",
              "brand-hover": "#b2b2b2",
              "brand-active": "#bebebe",
              "brand-inactive": "#ffffff",
              "brand-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated brand foreground on muted backgrounds"}
      colors={{
              "brand": "#1fb2a6",
              "brand-hover": "#008277",
              "brand-active": "#008a7f",
              "brand-inactive": "#5ddfd2",
              "brand-disabled": "#4daea4"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#8e223e",
              "danger-hover": "#6e0025",
              "danger-active": "#730029",
              "danger-inactive": "#ab3e56",
              "danger-disabled": "#843142"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated danger muted background for the light theme"}
      colors={{
              "danger": "#e77388",
              "danger-hover": "#b1435b",
              "danger-active": "#bb4b62",
              "danger-inactive": "#ff9fb3",
              "danger-disabled": "#da7d8c"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#FAFAFA",
              "danger-hover": "#b2b2b2",
              "danger-active": "#bebebe",
              "danger-inactive": "#ffffff",
              "danger-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated danger foreground on muted backgrounds"}
      colors={{
              "danger": "#270009",
              "danger-hover": "#320611",
              "danger-active": "#300510",
              "danger-inactive": "#1e0004",
              "danger-disabled": "#23040a"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#594395",
              "discovery-hover": "#3f2676",
              "discovery-active": "#432b7b",
              "discovery-inactive": "#725db2",
              "discovery-disabled": "#584889"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated discovery muted background for the light theme"}
      colors={{
              "discovery": "#a18ee7",
              "discovery-hover": "#735eb3",
              "discovery-active": "#7b67bc",
              "discovery-inactive": "#cdbaff",
              "discovery-disabled": "#a092d9"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#FAFAFA",
              "discovery-hover": "#b2b2b2",
              "discovery-active": "#bebebe",
              "discovery-inactive": "#ffffff",
              "discovery-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated discovery foreground on muted backgrounds"}
      colors={{
              "discovery": "#1d0046",
              "discovery-hover": "#270e54",
              "discovery-active": "#250b51",
              "discovery-inactive": "#15003a",
              "discovery-disabled": "#1b093d"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#2055b3",
              "info-hover": "#003590",
              "info-active": "#033a96",
              "info-inactive": "#3b72d3",
              "info-disabled": "#2f58a2"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated info muted background for the light theme"}
      colors={{
              "info": "#6fa4ff",
              "info-hover": "#4071c8",
              "info-active": "#487ad2",
              "info-inactive": "#9bd3ff",
              "info-disabled": "#7ba5ee"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#FAFAFA",
              "info-hover": "#b2b2b2",
              "info-active": "#bebebe",
              "info-inactive": "#ffffff",
              "info-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated info foreground on muted backgrounds"}
      colors={{
              "info": "#00184b",
              "info-hover": "#09265a",
              "info-active": "#072457",
              "info-inactive": "#000b3e",
              "info-disabled": "#051b42"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Negative"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#8e223e",
              "negative-hover": "#6e0025",
              "negative-active": "#730029",
              "negative-inactive": "#ab3e56",
              "negative-disabled": "#843142"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated negative muted background for the light theme"}
      colors={{
              "negative": "#e77388",
              "negative-hover": "#b1435b",
              "negative-active": "#bb4b62",
              "negative-inactive": "#ff9fb3",
              "negative-disabled": "#da7d8c"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#FAFAFA",
              "negative-hover": "#b2b2b2",
              "negative-active": "#bebebe",
              "negative-inactive": "#ffffff",
              "negative-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated negative foreground on muted backgrounds"}
      colors={{
              "negative": "#270009",
              "negative-hover": "#320611",
              "negative-active": "#300510",
              "negative-inactive": "#1e0004",
              "negative-disabled": "#23040a"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Positive"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#216b53",
              "positive-hover": "#004d36",
              "positive-active": "#00523b",
              "positive-inactive": "#40876e",
              "positive-disabled": "#336855"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated positive muted background for the light theme"}
      colors={{
              "positive": "#6db499",
              "positive-hover": "#3b8269",
              "positive-active": "#448b72",
              "positive-inactive": "#9ae2c6",
              "positive-disabled": "#7ab19b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#FAFAFA",
              "positive-hover": "#b2b2b2",
              "positive-active": "#bebebe",
              "positive-inactive": "#ffffff",
              "positive-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated positive foreground on muted backgrounds"}
      colors={{
              "positive": "#00251a",
              "positive-hover": "#0d3227",
              "positive-active": "#0b3024",
              "positive-inactive": "#001a0f",
              "positive-disabled": "#08241b"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#216b53",
              "success-hover": "#004d36",
              "success-active": "#00523b",
              "success-inactive": "#40876e",
              "success-disabled": "#336855"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated success muted background for the light theme"}
      colors={{
              "success": "#6db499",
              "success-hover": "#3b8269",
              "success-active": "#448b72",
              "success-inactive": "#9ae2c6",
              "success-disabled": "#7ab19b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#FAFAFA",
              "success-hover": "#b2b2b2",
              "success-active": "#bebebe",
              "success-inactive": "#ffffff",
              "success-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated success foreground on muted backgrounds"}
      colors={{
              "success": "#00251a",
              "success-hover": "#0d3227",
              "success-active": "#0b3024",
              "success-inactive": "#001a0f",
              "success-disabled": "#08241b"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#765417",
              "warning-hover": "#573700",
              "warning-active": "#5d3c00",
              "warning-inactive": "#926f36",
              "warning-disabled": "#71562a"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated warning muted background for the light theme"}
      colors={{
              "warning": "#c39e65",
              "warning-hover": "#906d34",
              "warning-active": "#99763d",
              "warning-inactive": "#f2cc91",
              "warning-disabled": "#bda073"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#FAFAFA",
              "warning-hover": "#b2b2b2",
              "warning-active": "#bebebe",
              "warning-inactive": "#ffffff",
              "warning-disabled": "#fafafa66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated warning foreground on muted backgrounds"}
      colors={{
              "warning": "#291a00",
              "warning-hover": "#36270a",
              "warning-active": "#342408",
              "warning-inactive": "#1e0f00",
              "warning-disabled": "#271b06"
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
            "9": "#6a6a6c",
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
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#6a6a6c",
            "neutral.subtle": "#cacaca",
            "brand.emphasis": "#45649b",
            "brand.subtle": "#7598d7",
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
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#a1a1a2"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, 8% darker)"}
      colors={{
            "hairline-active": "#949495"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hover, 23% darker)"}
      colors={{
            "hairline-hover": "#7d7d7e"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 20% brighter)"}
      colors={{
            "hairline-inactive": "#c4c4c5"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Highest-emphasis text and icon color. Use it for headings and content that must stand out from body copy. Used by HeadingText, InlineCodeText, the active Slider value and hovered RadioGroupField options."}
      colors={{
            "emphasis": "#444548",
            "body": "#6a6a6c",
            "subtle": "#a1a1a2",
            "subtlest": "#b4b4b4"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links."}
      colors={{
            "link": "#45649b"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (active, 19% darker)"}
      colors={{
            "link-active": "#2b508c"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (hover, 23% darker)"}
      colors={{
            "link-hover": "#284c89"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (inactive, 20% brighter)"}
      colors={{
            "link-inactive": "#5a79af"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Background color of a floating overlay panel, matching the topmost surface so overlays stand clear of the page."}
      colors={{
            "background": "#d9d9d9",
            "border": "#a1a1a2",
            "backdrop": "#373a3d66"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields. Field uses it for the asterisk next to the label of a required input; keep it consistent with the danger accent so required and error states read as related."}
      colors={{
            "required": "#864254"
      }}
    />
          <ColorItem
      title={"color.selection"}
      subtitle={"Background color of highlighted text. Follows the brand accent so selection stays on brand in every theme."}
      colors={{
            "background": "#449a93",
            "foreground": "#d5d5d5"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#c4c4c4",
            "canvas": "#cacaca",
            "elevated": "#cfcfcf",
            "floating": "#d5d5d5",
            "overlay": "#d9d9d9",
            "sunken-hover": "#969696",
            "sunken-active": "#9e9e9e",
            "sunken-inactive": "#d9d9d9",
            "sunken-disabled": "#c4c4c466",
            "canvas-hover": "#9a9a9a",
            "canvas-active": "#a3a3a3",
            "canvas-inactive": "#d9d9d9",
            "canvas-disabled": "#cacaca66",
            "elevated-hover": "#9e9e9e",
            "elevated-active": "#a6a6a6",
            "elevated-inactive": "#d9d9d9",
            "elevated-disabled": "#cfcfcf66",
            "floating-hover": "#a3a3a3",
            "floating-active": "#ababab",
            "floating-inactive": "#d9d9d9",
            "floating-disabled": "#d5d5d566",
            "overlay-hover": "#a6a6a6",
            "overlay-active": "#aeaeae",
            "overlay-inactive": "#d9d9d9",
            "overlay-disabled": "#d9d9d966"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"Fully transparent white."}
      colors={{
            "transparent": "#d9d9d900"
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
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "base": "#343438",
              "base-hover": "#3e3e41",
              "base-active": "#2e2e30",
              "base-inactive": "#282828",
              "base-disabled": "#343437"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base": "#cacaca",
              "base-hover": "#8c8c8c",
              "base-active": "#b4b4b4",
              "base-inactive": "#282828",
              "base-disabled": "#cacaca66"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Text and icon color placed on top of a `base` accent fill, chosen for contrast against it. Exposed as `onAccent`; used for Button labels, Badge text, the Switch thumb icon and the active Slider thumb and value label."}
      colors={{
              "base": "#cfcfcf",
              "base-hover": "#8f8f8f",
              "base-active": "#2e2e30",
              "base-inactive": "#282828",
              "base-disabled": "#cfcfcf66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
              "base": "#343438",
              "base-hover": "#3e3e41",
              "base-active": "#2e2e30",
              "base-inactive": "#282828",
              "base-disabled": "#343437"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#449a93",
              "brand-hover": "#26827a",
              "brand-active": "#27867f",
              "brand-inactive": "#6ebcb4",
              "brand-disabled": "#639993"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis brand background for the `brand` theme. Exposed as `muted` inside that theme; use it for soft brand-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the brand theme."}
      colors={{
              "brand": "#74c4bc",
              "brand-hover": "#32968f",
              "brand-active": "#499c95",
              "brand-inactive": "#8ddede",
              "brand-disabled": "#84c3bd"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#d5d5d5",
              "brand-hover": "#a3a3a3",
              "brand-active": "#ababab",
              "brand-inactive": "#d9d9d9",
              "brand-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated brand foreground on muted backgrounds"}
      colors={{
              "brand": "#449a93",
              "brand-hover": "#26827a",
              "brand-active": "#27867f",
              "brand-inactive": "#6ebcb4",
              "brand-disabled": "#639993"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#864254",
              "danger-hover": "#77233f",
              "danger-active": "#7a2342",
              "danger-inactive": "#975967",
              "danger-disabled": "#7f4c56"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated danger muted background for the light theme"}
      colors={{
              "danger": "#c57a88",
              "danger-hover": "#9a5d6a",
              "danger-active": "#a16370",
              "danger-inactive": "#df90a0",
              "danger-disabled": "#bc818a"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#d5d5d5",
              "danger-hover": "#a3a3a3",
              "danger-active": "#ababab",
              "danger-inactive": "#d9d9d9",
              "danger-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated danger foreground on muted backgrounds"}
      colors={{
              "danger": "#501725",
              "danger-hover": "#53212d",
              "danger-active": "#521f2c",
              "danger-inactive": "#4c161d",
              "danger-disabled": "#4b1d26"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#675a8a",
              "discovery-hover": "#534377",
              "discovery-active": "#56477a",
              "discovery-inactive": "#796d9d",
              "discovery-disabled": "#665c82"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated discovery muted background for the light theme"}
      colors={{
              "discovery": "#978ac8",
              "discovery-hover": "#7a6e9e",
              "discovery-active": "#7f74a5",
              "discovery-inactive": "#b19ee3",
              "discovery-disabled": "#978dbd"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#d5d5d5",
              "discovery-hover": "#a3a3a3",
              "discovery-active": "#ababab",
              "discovery-inactive": "#d9d9d9",
              "discovery-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated discovery foreground on muted backgrounds"}
      colors={{
              "discovery": "#391c61",
              "discovery-hover": "#402c65",
              "discovery-active": "#3f2964",
              "discovery-inactive": "#321a5b",
              "discovery-disabled": "#372558"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#45649b",
              "info-hover": "#284c89",
              "info-active": "#2b508c",
              "info-inactive": "#5a79af",
              "info-disabled": "#4e6691"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated info muted background for the light theme"}
      colors={{
              "info": "#7699d7",
              "info-hover": "#5d78a8",
              "info-active": "#627eb0",
              "info-inactive": "#8dbbde",
              "info-disabled": "#7e9acb"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#d5d5d5",
              "info-hover": "#a3a3a3",
              "info-active": "#ababab",
              "info-inactive": "#d9d9d9",
              "info-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated info foreground on muted backgrounds"}
      colors={{
              "info": "#1d3464",
              "info-hover": "#28406a",
              "info-active": "#263e68",
              "info-inactive": "#1b275d",
              "info-disabled": "#21375d"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Negative"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#864254",
              "negative-hover": "#77233f",
              "negative-active": "#7a2342",
              "negative-inactive": "#975967",
              "negative-disabled": "#7f4c56"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated negative muted background for the light theme"}
      colors={{
              "negative": "#c57a88",
              "negative-hover": "#9a5d6a",
              "negative-active": "#a16370",
              "negative-inactive": "#df90a0",
              "negative-disabled": "#bc818a"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#d5d5d5",
              "negative-hover": "#a3a3a3",
              "negative-active": "#ababab",
              "negative-inactive": "#d9d9d9",
              "negative-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated negative foreground on muted backgrounds"}
      colors={{
              "negative": "#501725",
              "negative-hover": "#53212d",
              "negative-active": "#521f2c",
              "negative-inactive": "#4c161d",
              "negative-disabled": "#4b1d26"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Positive"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#3e7160",
              "positive-hover": "#1d6550",
              "positive-active": "#1e6853",
              "positive-inactive": "#578172",
              "positive-disabled": "#4b6e61"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated positive muted background for the light theme"}
      colors={{
              "positive": "#77a090",
              "positive-hover": "#537e6f",
              "positive-active": "#5a8475",
              "positive-inactive": "#92c5b1",
              "positive-disabled": "#7f9f92"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#d5d5d5",
              "positive-hover": "#a3a3a3",
              "positive-active": "#ababab",
              "positive-inactive": "#d9d9d9",
              "positive-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated positive foreground on muted backgrounds"}
      colors={{
              "positive": "#174f3f",
              "positive-hover": "#295044",
              "positive-active": "#274f42",
              "positive-inactive": "#154933",
              "positive-disabled": "#23483c"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#3e7160",
              "success-hover": "#1d6550",
              "success-active": "#1e6853",
              "success-inactive": "#578172",
              "success-disabled": "#4b6e61"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated success muted background for the light theme"}
      colors={{
              "success": "#77a090",
              "success-hover": "#537e6f",
              "success-active": "#5a8475",
              "success-inactive": "#92c5b1",
              "success-disabled": "#7f9f92"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#d5d5d5",
              "success-hover": "#a3a3a3",
              "success-active": "#ababab",
              "success-inactive": "#d9d9d9",
              "success-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated success foreground on muted backgrounds"}
      colors={{
              "success": "#174f3f",
              "success-hover": "#295044",
              "success-active": "#274f42",
              "success-inactive": "#154933",
              "success-disabled": "#23483c"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#786137",
              "warning-hover": "#6a4f1f",
              "warning-active": "#6e5220",
              "warning-inactive": "#887351",
              "warning-disabled": "#746245"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated warning muted background for the light theme"}
      colors={{
              "warning": "#a99473",
              "warning-hover": "#86714f",
              "warning-active": "#8c7856",
              "warning-inactive": "#d1b58a",
              "warning-disabled": "#a6957b"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#d5d5d5",
              "warning-hover": "#a3a3a3",
              "warning-active": "#ababab",
              "warning-inactive": "#d9d9d9",
              "warning-disabled": "#d5d5d566"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated warning foreground on muted backgrounds"}
      colors={{
              "warning": "#523c18",
              "warning-hover": "#544426",
              "warning-active": "#534223",
              "warning-inactive": "#4c3116",
              "warning-disabled": "#4c3c20"
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
            "9": "#4e515b",
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
      title={"color.data"}
      subtitle={"High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data."}
      colors={{
            "neutral.emphasis": "#4e515b",
            "neutral.subtle": "#ffffff",
            "brand.emphasis": "#0145be",
            "brand.subtle": "#9ec1ff",
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
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle."}
      colors={{
            "hairline": "#c3c3ca"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, 8% darker)"}
      colors={{
            "hairline-active": "#a6a6b0"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (hover, 23% darker)"}
      colors={{
            "hairline-hover": "#747482"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Low-contrast color for 1px borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 20% brighter)"}
      colors={{
            "hairline-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Highest-emphasis text and icon color. Use it for headings and content that must stand out from body copy. Used by HeadingText, InlineCodeText, the active Slider value and hovered RadioGroupField options."}
      colors={{
            "emphasis": "#08080a",
            "body": "#4e515b",
            "subtle": "#c3c3ca",
            "subtlest": "#ebebed"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links."}
      colors={{
            "link": "#0145be"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (active, 19% darker)"}
      colors={{
            "link-active": "#00286b"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (hover, 23% darker)"}
      colors={{
            "link-hover": "#00235e"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Color for hyperlinks and other inline navigation text, with generated hover and active states. Used by LinkText, `link` variant Buttons, FilePicker browse links and TypeTable type links. (inactive, 20% brighter)"}
      colors={{
            "link-inactive": "#216df4"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Background color of a floating overlay panel, matching the topmost surface so overlays stand clear of the page."}
      colors={{
            "background": "#ffffff",
            "border": "#c3c3ca",
            "backdrop": "#00000066"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields. Field uses it for the asterisk next to the label of a required input; keep it consistent with the danger accent so required and error states read as related."}
      colors={{
            "required": "#840929"
      }}
    />
          <ColorItem
      title={"color.selection"}
      subtitle={"Background color of highlighted text. Follows the brand accent so selection stays on brand in every theme."}
      colors={{
            "background": "#00bcad",
            "foreground": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant."}
      colors={{
            "sunken": "#ffffff",
            "canvas": "#ffffff",
            "elevated": "#ffffff",
            "floating": "#ffffff",
            "overlay": "#ffffff",
            "sunken-hover": "#afafaf",
            "sunken-active": "#bfbfbf",
            "sunken-inactive": "#ffffff",
            "sunken-disabled": "#ffffff66",
            "canvas-hover": "#b7b7b7",
            "canvas-active": "#c9c9c9",
            "canvas-inactive": "#ffffff",
            "canvas-disabled": "#ffffff66",
            "elevated-hover": "#bfbfbf",
            "elevated-active": "#d0d0d0",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#ffffff66",
            "floating-hover": "#c9c9c9",
            "floating-active": "#dadada",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#ffffff66",
            "overlay-hover": "#cfcfcf",
            "overlay-active": "#e0e0e0",
            "overlay-inactive": "#ffffff",
            "overlay-disabled": "#ffffff66"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"Fully transparent white."}
      colors={{
            "transparent": "#ffffff00"
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
        <section>
          <h3>{"Base"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
              "base": "#000000",
              "base-hover": "#000000",
              "base-active": "#000000",
              "base-inactive": "#000000",
              "base-disabled": "#000000"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
              "base": "#ffffff",
              "base-hover": "#999999",
              "base-active": "#ececec",
              "base-inactive": "#000000",
              "base-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Text and icon color placed on top of a `base` accent fill, chosen for contrast against it. Exposed as `onAccent`; used for Button labels, Badge text, the Switch thumb icon and the active Slider thumb and value label."}
      colors={{
              "base": "#ffffff",
              "base-hover": "#9f9f9f",
              "base-active": "#000000",
              "base-inactive": "#000000",
              "base-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
              "base": "#000000",
              "base-hover": "#000000",
              "base-active": "#000000",
              "base-inactive": "#000000",
              "base-disabled": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Brand"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#00bcad",
              "brand-hover": "#004a44",
              "brand-active": "#00554f",
              "brand-inactive": "#5cfbeb",
              "brand-disabled": "#35c4b5"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis brand background for the `brand` theme. Exposed as `muted` inside that theme; use it for soft brand-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the brand theme."}
      colors={{
              "brand": "#75fff1",
              "brand-hover": "#008e84",
              "brand-active": "#06c2b2",
              "brand-inactive": "#e1ffff",
              "brand-disabled": "#9cfaf0"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Brand accent (teal) used by the `brand` theme. Use it for primary calls to action and brand moments, and sparingly elsewhere so it keeps its weight. Also drives text selection and is the default theme for Message."}
      colors={{
              "brand": "#ffffff",
              "brand-hover": "#c9c9c9",
              "brand-active": "#dadada",
              "brand-inactive": "#ffffff",
              "brand-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated brand foreground on muted backgrounds"}
      colors={{
              "brand": "#00bcad",
              "brand-hover": "#004a44",
              "brand-active": "#00554f",
              "brand-inactive": "#5cfbeb",
              "brand-disabled": "#35c4b5"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Danger"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#840929",
              "danger-hover": "#2d000f",
              "danger-active": "#340013",
              "danger-inactive": "#bc2445",
              "danger-disabled": "#7b182d"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated danger muted background for the light theme"}
      colors={{
              "danger": "#ff849a",
              "danger-hover": "#c6294b",
              "danger-active": "#d53455",
              "danger-inactive": "#ffe7ec",
              "danger-disabled": "#f28c9d"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText."}
      colors={{
              "danger": "#ffffff",
              "danger-hover": "#c9c9c9",
              "danger-active": "#dadada",
              "danger-inactive": "#ffffff",
              "danger-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated danger foreground on muted backgrounds"}
      colors={{
              "danger": "#000000",
              "danger-hover": "#000000",
              "danger-active": "#000000",
              "danger-inactive": "#000000",
              "danger-disabled": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Discovery"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#492b9b",
              "discovery-hover": "#280e61",
              "discovery-active": "#2d136b",
              "discovery-inactive": "#6c4ec9",
              "discovery-disabled": "#48328a"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated discovery muted background for the light theme"}
      colors={{
              "discovery": "#bfaefc",
              "discovery-hover": "#6e4fca",
              "discovery-active": "#7b5fd4",
              "discovery-inactive": "#ffffff",
              "discovery-disabled": "#b9abf0"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages."}
      colors={{
              "discovery": "#ffffff",
              "discovery-hover": "#c9c9c9",
              "discovery-active": "#dadada",
              "discovery-inactive": "#ffffff",
              "discovery-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated discovery foreground on muted backgrounds"}
      colors={{
              "discovery": "#000000",
              "discovery-hover": "#0a001b",
              "discovery-active": "#070013",
              "discovery-inactive": "#000000",
              "discovery-disabled": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Info"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#0145be",
              "info-hover": "#00235e",
              "info-active": "#00286b",
              "info-inactive": "#216df4",
              "info-disabled": "#1449a9"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated info muted background for the light theme"}
      colors={{
              "info": "#a1c4ff",
              "info-hover": "#266be6",
              "info-active": "#3579f1",
              "info-inactive": "#e1f2ff",
              "info-disabled": "#9abfff"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText."}
      colors={{
              "info": "#ffffff",
              "info-hover": "#c9c9c9",
              "info-active": "#dadada",
              "info-inactive": "#ffffff",
              "info-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated info foreground on muted backgrounds"}
      colors={{
              "info": "#000000",
              "info-hover": "#000a1d",
              "info-active": "#000816",
              "info-inactive": "#000000",
              "info-disabled": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Negative"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#840929",
              "negative-hover": "#2d000f",
              "negative-active": "#340013",
              "negative-inactive": "#bc2445",
              "negative-disabled": "#7b182d"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated negative muted background for the light theme"}
      colors={{
              "negative": "#ff849a",
              "negative-hover": "#c6294b",
              "negative-active": "#d53455",
              "negative-inactive": "#ffe7ec",
              "negative-disabled": "#f28c9d"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Negative accent used by the `negative` theme. Use it for unfavorable values and outcomes, such as a falling metric, where the tone is informational rather than destructive. Applied by Alert `negative`."}
      colors={{
              "negative": "#ffffff",
              "negative-hover": "#c9c9c9",
              "negative-active": "#dadada",
              "negative-inactive": "#ffffff",
              "negative-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated negative foreground on muted backgrounds"}
      colors={{
              "negative": "#000000",
              "negative-hover": "#000000",
              "negative-active": "#000000",
              "negative-inactive": "#000000",
              "negative-disabled": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Positive"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#0a4e38",
              "positive-hover": "#000000",
              "positive-active": "#000403",
              "positive-inactive": "#298565",
              "positive-disabled": "#1b533f"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated positive muted background for the light theme"}
      colors={{
              "positive": "#66caa4",
              "positive-hover": "#237c5d",
              "positive-active": "#2d8c6b",
              "positive-inactive": "#bdf8e1",
              "positive-disabled": "#79c6a7"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Positive accent used by the `positive` theme. Use it for favorable values and outcomes, such as a rising metric, where the tone is informational rather than confirming an action. Applied by Alert `positive`."}
      colors={{
              "positive": "#ffffff",
              "positive-hover": "#c9c9c9",
              "positive-active": "#dadada",
              "positive-inactive": "#ffffff",
              "positive-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated positive foreground on muted backgrounds"}
      colors={{
              "positive": "#000000",
              "positive-hover": "#000000",
              "positive-active": "#000000",
              "positive-inactive": "#000000",
              "positive-disabled": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Success"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#0a4e38",
              "success-hover": "#000000",
              "success-active": "#000403",
              "success-inactive": "#298565",
              "success-disabled": "#1b533f"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated success muted background for the light theme"}
      colors={{
              "success": "#66caa4",
              "success-hover": "#237c5d",
              "success-active": "#2d8c6b",
              "success-inactive": "#bdf8e1",
              "success-disabled": "#79c6a7"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText."}
      colors={{
              "success": "#ffffff",
              "success-hover": "#c9c9c9",
              "success-active": "#dadada",
              "success-inactive": "#ffffff",
              "success-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated success foreground on muted backgrounds"}
      colors={{
              "success": "#000000",
              "success-hover": "#000000",
              "success-active": "#000000",
              "success-inactive": "#000000",
              "success-disabled": "#000000"
      }}
    />
          </ColorPalette>
        </section>
        <section>
          <h3>{"Warning"}</h3>
          <ColorPalette>
            <ColorItem
      title={"color.accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#583902",
              "warning-hover": "#0b0700",
              "warning-active": "#140d00",
              "warning-inactive": "#92661d",
              "warning-disabled": "#5c4012"
      }}
    />
            <ColorItem
      title={"color.muted"}
      subtitle={"Generated warning muted background for the light theme"}
      colors={{
              "warning": "#dcab5e",
              "warning-hover": "#8f631b",
              "warning-active": "#9f7124",
              "warning-inactive": "#ffe6bf",
              "warning-disabled": "#d4ae72"
      }}
    />
            <ColorItem
      title={"color.on-accent"}
      subtitle={"Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText."}
      colors={{
              "warning": "#ffffff",
              "warning-hover": "#c9c9c9",
              "warning-active": "#dadada",
              "warning-inactive": "#ffffff",
              "warning-disabled": "#ffffff66"
      }}
    />
            <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated warning foreground on muted backgrounds"}
      colors={{
              "warning": "#000000",
              "warning-hover": "#000000",
              "warning-active": "#000000",
              "warning-inactive": "#000000",
              "warning-disabled": "#000000"
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
