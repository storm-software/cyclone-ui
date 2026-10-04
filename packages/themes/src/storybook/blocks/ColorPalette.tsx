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
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "base": "#fafafa",
            "brand": "#3be4be",
            "danger": "#cf2d56",
            "negative": "#cf2d56",
            "warning": "#f7ac23",
            "success": "#45c791",
            "positive": "#45c791",
            "info": "#4d8eff",
            "discovery": "#9277da",
            "base-hover": "#9b9b9b",
            "base-active": "#ffffff",
            "base-inactive": "#808080",
            "base-disabled": "#fafafa66",
            "brand-hover": "#00a785",
            "brand-active": "#00b28f",
            "brand-inactive": "#81fff4",
            "brand-disabled": "#6adfc0",
            "danger-hover": "#fd5b7b",
            "danger-active": "#f55474",
            "danger-inactive": "#a70037",
            "danger-disabled": "#c0455d",
            "negative-hover": "#fd5b7b",
            "negative-active": "#f55474",
            "negative-inactive": "#a70037",
            "negative-disabled": "#c0455d",
            "warning-hover": "#bb7400",
            "warning-active": "#c67d00",
            "warning-inactive": "#ffe067",
            "warning-disabled": "#ecb055",
            "success-hover": "#82ffc6",
            "success-active": "#78f5bc",
            "success-inactive": "#009865",
            "success-disabled": "#64c297",
            "positive-hover": "#82ffc6",
            "positive-active": "#78f5bc",
            "positive-inactive": "#009865",
            "positive-disabled": "#64c297",
            "info-hover": "#7abeff",
            "info-active": "#72b6ff",
            "info-inactive": "#2564d1",
            "info-disabled": "#5d91ea",
            "discovery-hover": "#bea4ff",
            "discovery-active": "#b69cff",
            "discovery-inactive": "#6d51b0",
            "discovery-disabled": "#907ccb"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "base": "#2b2c30",
            "brand": "#007e5e",
            "base-hover": "#414347",
            "base-active": "#333438",
            "base-inactive": "#808080",
            "base-disabled": "#2b2c2f",
            "brand-hover": "#3da280",
            "brand-active": "#359c7a",
            "brand-inactive": "#005f41",
            "brand-disabled": "#2f7b61",
            "danger": "#6b0023",
            "negative": "#6b0023",
            "warning": "#845800",
            "success": "#00714c",
            "positive": "#00714c",
            "info": "#0146b0",
            "discovery": "#51328f",
            "danger-hover": "#842036",
            "danger-active": "#7f1b33",
            "danger-inactive": "#550013",
            "danger-disabled": "#621727",
            "negative-hover": "#842036",
            "negative-active": "#7f1b33",
            "negative-inactive": "#550013",
            "negative-disabled": "#621727",
            "warning-hover": "#a77931",
            "warning-active": "#a0732a",
            "warning-inactive": "#663c00",
            "warning-disabled": "#7e5b25",
            "success-hover": "#36926b",
            "success-active": "#2f8c65",
            "success-inactive": "#005532",
            "success-disabled": "#296e50",
            "positive-hover": "#36926b",
            "positive-active": "#2f8c65",
            "positive-inactive": "#005532",
            "positive-disabled": "#296e50",
            "info-hover": "#2564d1",
            "info-active": "#205fcb",
            "info-inactive": "#002a94",
            "info-disabled": "#1b4b9d",
            "discovery-hover": "#6a4dac",
            "discovery-active": "#6548a7",
            "discovery-inactive": "#3c1875",
            "discovery-disabled": "#4f3982"
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
            "base-disabled": "#151517",
            "brand": "#151518",
            "danger": "#FAFAFA",
            "negative": "#FAFAFA",
            "warning": "#151518",
            "success": "#FAFAFA",
            "positive": "#FAFAFA",
            "info": "#FAFAFA",
            "discovery": "#FAFAFA",
            "brand-hover": "#1f1f22",
            "brand-active": "#1d1d20",
            "brand-inactive": "#0c0c0f",
            "brand-disabled": "#151517",
            "danger-hover": "#b2b2b2",
            "danger-active": "#bebebe",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#fafafa66",
            "negative-hover": "#b2b2b2",
            "negative-active": "#bebebe",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#fafafa66",
            "warning-hover": "#1f1f22",
            "warning-active": "#1d1d20",
            "warning-inactive": "#0c0c0f",
            "warning-disabled": "#151517",
            "success-hover": "#b2b2b2",
            "success-active": "#bebebe",
            "success-inactive": "#ffffff",
            "success-disabled": "#fafafa66",
            "positive-hover": "#b2b2b2",
            "positive-active": "#bebebe",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#fafafa66",
            "info-hover": "#b2b2b2",
            "info-active": "#bebebe",
            "info-inactive": "#ffffff",
            "info-disabled": "#fafafa66",
            "discovery-hover": "#b2b2b2",
            "discovery-active": "#bebebe",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#fafafa66"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#fafafa",
            "brand": "#3be4be",
            "danger": "#ff96a3",
            "negative": "#ff96a3",
            "warning": "#ffffff",
            "success": "#ffffff",
            "positive": "#ffffff",
            "info": "#c7dcff",
            "discovery": "#d3c7ff",
            "base-hover": "#9b9b9b",
            "base-active": "#ffffff",
            "base-inactive": "#808080",
            "base-disabled": "#fafafa66",
            "brand-hover": "#00a785",
            "brand-active": "#00b28f",
            "brand-inactive": "#81fff4",
            "brand-disabled": "#6adfc0",
            "danger-hover": "#c2606e",
            "danger-active": "#cd6977",
            "danger-inactive": "#ffc9d5",
            "danger-disabled": "#f39ea7",
            "negative-hover": "#c2606e",
            "negative-active": "#cd6977",
            "negative-inactive": "#ffc9d5",
            "negative-disabled": "#f39ea7",
            "warning-hover": "#b6b6b6",
            "warning-active": "#c2c2c2",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#ffffff66",
            "success-hover": "#b6b6b6",
            "success-active": "#c2c2c2",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#b6b6b6",
            "positive-active": "#c2c2c2",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#899cbd",
            "info-active": "#93a7c9",
            "info-inactive": "#ebffff",
            "info-disabled": "#cbdcf8",
            "discovery-hover": "#968bbf",
            "discovery-active": "#a195ca",
            "discovery-inactive": "#fff6ff",
            "discovery-disabled": "#d2c9f6"
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
      title={"color.rating"}
      subtitle={"Color for rating indicators, such as stars or other symbols representing user ratings."}
      colors={{
            "rating": "#c58c22"
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
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "base": "#d5d5d5",
            "brand": "#5abba5",
            "danger": "#ab5268",
            "negative": "#ab5268",
            "warning": "#c59b4d",
            "success": "#60a88a",
            "positive": "#60a88a",
            "info": "#638cd2",
            "discovery": "#8e7dbb",
            "base-hover": "#939393",
            "base-active": "#d9d9d9",
            "base-inactive": "#808080",
            "base-disabled": "#d5d5d566",
            "brand-hover": "#2c9680",
            "brand-active": "#2d9c86",
            "brand-inactive": "#7fdad2",
            "brand-disabled": "#75beaa",
            "danger-hover": "#d26b7f",
            "danger-active": "#cb687b",
            "danger-inactive": "#962c4f",
            "danger-disabled": "#a4606d",
            "negative-hover": "#d26b7f",
            "negative-active": "#cb687b",
            "negative-inactive": "#962c4f",
            "negative-disabled": "#a4606d",
            "warning-hover": "#a1752f",
            "warning-active": "#a77b30",
            "warning-inactive": "#d6c171",
            "warning-disabled": "#c4a069",
            "success-hover": "#80dab1",
            "success-active": "#7cd0aa",
            "success-inactive": "#298e6c",
            "success-disabled": "#72a88f",
            "positive-hover": "#80dab1",
            "positive-active": "#7cd0aa",
            "positive-inactive": "#298e6c",
            "positive-disabled": "#72a88f",
            "info-hover": "#7cabd9",
            "info-active": "#77a6d8",
            "info-inactive": "#4d70ac",
            "info-disabled": "#6d8dc4",
            "discovery-hover": "#a892df",
            "discovery-active": "#a38ede",
            "discovery-inactive": "#75669a",
            "discovery-disabled": "#8d80b1"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "base": "#444548",
            "brand": "#258069",
            "base-hover": "#545558",
            "base-active": "#4a4b4e",
            "base-inactive": "#808080",
            "base-disabled": "#444547",
            "brand-hover": "#57917e",
            "brand-active": "#518e7a",
            "brand-inactive": "#206f56",
            "brand-disabled": "#4a7a69",
            "danger": "#75223d",
            "negative": "#75223d",
            "warning": "#836426",
            "success": "#23795d",
            "positive": "#23795d",
            "info": "#2e599b",
            "discovery": "#604e86",
            "danger-hover": "#80404e",
            "danger-active": "#7d3b4b",
            "danger-inactive": "#691f2f",
            "danger-disabled": "#6c3541",
            "negative-hover": "#80404e",
            "negative-active": "#7d3b4b",
            "negative-inactive": "#691f2f",
            "negative-disabled": "#6c3541",
            "warning-hover": "#947950",
            "warning-active": "#90754a",
            "warning-inactive": "#735121",
            "warning-disabled": "#7c6543",
            "success-hover": "#518870",
            "success-active": "#4b846c",
            "success-inactive": "#1f694b",
            "success-disabled": "#44725e",
            "positive-hover": "#518870",
            "positive-active": "#4b846c",
            "positive-inactive": "#1f694b",
            "positive-disabled": "#44725e",
            "info-hover": "#4d70ac",
            "info-active": "#486ca9",
            "info-inactive": "#29458c",
            "info-disabled": "#3f5c8f",
            "discovery-hover": "#736398",
            "discovery-active": "#705f95",
            "discovery-inactive": "#503877",
            "discovery-disabled": "#5f517e"
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
            "base-disabled": "#343437",
            "brand": "#343438",
            "danger": "#d5d5d5",
            "negative": "#d5d5d5",
            "warning": "#343438",
            "success": "#d5d5d5",
            "positive": "#d5d5d5",
            "info": "#d5d5d5",
            "discovery": "#d5d5d5",
            "brand-hover": "#3b3b3f",
            "brand-active": "#3a3a3d",
            "brand-inactive": "#2d2d33",
            "brand-disabled": "#343437",
            "danger-hover": "#a3a3a3",
            "danger-active": "#ababab",
            "danger-inactive": "#d9d9d9",
            "danger-disabled": "#d5d5d566",
            "negative-hover": "#a3a3a3",
            "negative-active": "#ababab",
            "negative-inactive": "#d9d9d9",
            "negative-disabled": "#d5d5d566",
            "warning-hover": "#3b3b3f",
            "warning-active": "#3a3a3d",
            "warning-inactive": "#2d2d33",
            "warning-disabled": "#343437",
            "success-hover": "#a3a3a3",
            "success-active": "#ababab",
            "success-inactive": "#d9d9d9",
            "success-disabled": "#d5d5d566",
            "positive-hover": "#a3a3a3",
            "positive-active": "#ababab",
            "positive-inactive": "#d9d9d9",
            "positive-disabled": "#d5d5d566",
            "info-hover": "#a3a3a3",
            "info-active": "#ababab",
            "info-inactive": "#d9d9d9",
            "info-disabled": "#d5d5d566",
            "discovery-hover": "#a3a3a3",
            "discovery-active": "#ababab",
            "discovery-inactive": "#d9d9d9",
            "discovery-disabled": "#d5d5d566"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#d5d5d5",
            "brand": "#5abba5",
            "danger": "#dd8b95",
            "negative": "#dd8b95",
            "warning": "#d9d9d9",
            "success": "#d9d9d9",
            "positive": "#d9d9d9",
            "info": "#a5bde5",
            "discovery": "#b3a5e5",
            "base-hover": "#939393",
            "base-active": "#d9d9d9",
            "base-inactive": "#808080",
            "base-disabled": "#d5d5d566",
            "brand-hover": "#2c9680",
            "brand-active": "#2d9c86",
            "brand-inactive": "#7fdad2",
            "brand-disabled": "#75beaa",
            "danger-hover": "#a87078",
            "danger-active": "#b1757d",
            "danger-inactive": "#e5a6b4",
            "danger-disabled": "#d39299",
            "negative-hover": "#a87078",
            "negative-active": "#b1757d",
            "negative-inactive": "#e5a6b4",
            "negative-disabled": "#d39299",
            "warning-hover": "#a6a6a6",
            "warning-active": "#aeaeae",
            "warning-inactive": "#d9d9d9",
            "warning-disabled": "#d9d9d966",
            "success-hover": "#a6a6a6",
            "success-active": "#aeaeae",
            "success-inactive": "#d9d9d9",
            "success-disabled": "#d9d9d966",
            "positive-hover": "#a6a6a6",
            "positive-active": "#aeaeae",
            "positive-inactive": "#d9d9d9",
            "positive-disabled": "#d9d9d966",
            "info-hover": "#8894a8",
            "info-active": "#8f9cb1",
            "info-inactive": "#b9ebeb",
            "info-disabled": "#abbedd",
            "discovery-hover": "#908aaa",
            "discovery-active": "#9890b2",
            "discovery-inactive": "#ecbfec",
            "discovery-disabled": "#b4abda"
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
      title={"color.rating"}
      subtitle={"Color for rating indicators, such as stars or other symbols representing user ratings."}
      colors={{
            "rating": "#a58549"
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
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "base": "#ffffff",
            "brand": "#2effd0",
            "danger": "#f00a45",
            "negative": "#f00a45",
            "warning": "#ffb327",
            "success": "#2de498",
            "positive": "#2de498",
            "info": "#70a4ff",
            "discovery": "#a283f3",
            "base-hover": "#a7a7a7",
            "base-active": "#ffffff",
            "base-inactive": "#808080",
            "base-disabled": "#ffffff66",
            "brand-hover": "#007f65",
            "brand-active": "#008f73",
            "brand-inactive": "#bbfff9",
            "brand-disabled": "#71f9d5",
            "danger-hover": "#ff819a",
            "danger-active": "#ff6b89",
            "danger-inactive": "#7f002a",
            "danger-disabled": "#dc2c4e",
            "negative-hover": "#ff819a",
            "negative-active": "#ff6b89",
            "negative-inactive": "#7f002a",
            "negative-disabled": "#dc2c4e",
            "warning-hover": "#9c6100",
            "warning-active": "#ac6d00",
            "warning-inactive": "#ffe995",
            "warning-disabled": "#ffc060",
            "success-hover": "#bdffe1",
            "success-active": "#a0ffd3",
            "success-inactive": "#006a46",
            "success-disabled": "#5ddba1",
            "positive-hover": "#bdffe1",
            "positive-active": "#a0ffd3",
            "positive-inactive": "#006a46",
            "positive-disabled": "#5ddba1",
            "info-hover": "#b1d9ff",
            "info-active": "#a5d1ff",
            "info-inactive": "#0159f1",
            "info-disabled": "#68a0ff",
            "discovery-hover": "#f3eeff",
            "discovery-active": "#eae2ff",
            "discovery-inactive": "#643bc7",
            "discovery-disabled": "#9c84e3"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "base": "#08080a",
            "brand": "#004433",
            "base-hover": "#25282e",
            "base-active": "#121316",
            "base-inactive": "#808080",
            "base-disabled": "#070709",
            "brand-hover": "#23ad7f",
            "brand-active": "#1ba175",
            "brand-inactive": "#001710",
            "brand-disabled": "#176d4f",
            "danger": "#28000d",
            "negative": "#28000d",
            "warning": "#4d3300",
            "success": "#003121",
            "positive": "#003121",
            "info": "#00388e",
            "discovery": "#3f198c",
            "danger-hover": "#73081f",
            "danger-active": "#69041c",
            "danger-inactive": "#080002",
            "danger-disabled": "#39030f",
            "negative-hover": "#73081f",
            "negative-active": "#69041c",
            "negative-inactive": "#080002",
            "negative-disabled": "#39030f",
            "warning-hover": "#b17415",
            "warning-active": "#a46b0e",
            "warning-inactive": "#211300",
            "warning-disabled": "#6d470d",
            "success-hover": "#1d9261",
            "success-active": "#168757",
            "success-inactive": "#000805",
            "success-disabled": "#115739",
            "positive-hover": "#1d9261",
            "positive-active": "#168757",
            "positive-inactive": "#000805",
            "positive-disabled": "#115739",
            "info-hover": "#0159f1",
            "info-active": "#0053e2",
            "info-inactive": "#001c64",
            "info-disabled": "#003898",
            "discovery-hover": "#6036c1",
            "discovery-active": "#5930b8",
            "discovery-inactive": "#230357",
            "discovery-disabled": "#3c217b"
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
            "base-disabled": "#000000",
            "brand": "#000000",
            "danger": "#ffffff",
            "negative": "#ffffff",
            "warning": "#000000",
            "success": "#ffffff",
            "positive": "#ffffff",
            "info": "#ffffff",
            "discovery": "#ffffff",
            "brand-hover": "#000000",
            "brand-active": "#000000",
            "brand-inactive": "#000000",
            "brand-disabled": "#000000",
            "danger-hover": "#c9c9c9",
            "danger-active": "#dadada",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#ffffff66",
            "negative-hover": "#c9c9c9",
            "negative-active": "#dadada",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#ffffff66",
            "warning-hover": "#000000",
            "warning-active": "#000000",
            "warning-inactive": "#000000",
            "warning-disabled": "#000000",
            "success-hover": "#c9c9c9",
            "success-active": "#dadada",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#c9c9c9",
            "positive-active": "#dadada",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#c9c9c9",
            "info-active": "#dadada",
            "info-inactive": "#ffffff",
            "info-disabled": "#ffffff66",
            "discovery-hover": "#c9c9c9",
            "discovery-active": "#dadada",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#ffffff66"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#ffffff",
            "brand": "#2effd0",
            "danger": "#ffdade",
            "negative": "#ffdade",
            "warning": "#ffffff",
            "success": "#ffffff",
            "positive": "#ffffff",
            "info": "#ffffff",
            "discovery": "#ffffff",
            "base-hover": "#a7a7a7",
            "base-active": "#ffffff",
            "base-inactive": "#808080",
            "base-disabled": "#ffffff66",
            "brand-hover": "#007f65",
            "brand-active": "#008f73",
            "brand-inactive": "#bbfff9",
            "brand-disabled": "#71f9d5",
            "danger-hover": "#db5669",
            "danger-active": "#e7687a",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#ffd4d8",
            "negative-hover": "#db5669",
            "negative-active": "#e7687a",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#ffd4d8",
            "warning-hover": "#cfcfcf",
            "warning-active": "#e0e0e0",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#ffffff66",
            "success-hover": "#cfcfcf",
            "success-active": "#e0e0e0",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#cfcfcf",
            "positive-active": "#e0e0e0",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#92aad4",
            "info-active": "#a5bbe1",
            "info-inactive": "#ffffff",
            "info-disabled": "#ffffff",
            "discovery-hover": "#a396d6",
            "discovery-active": "#b5a8e2",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#ffffff"
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
      title={"color.rating"}
      subtitle={"Color for rating indicators, such as stars or other symbols representing user ratings."}
      colors={{
            "rating": "#dc8f00"
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
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "base": "#151518",
            "brand": "#1fb2a6",
            "danger": "#8e223e",
            "negative": "#8e223e",
            "warning": "#765417",
            "success": "#216b53",
            "positive": "#216b53",
            "info": "#2055b3",
            "discovery": "#594395",
            "base-hover": "#232326",
            "base-active": "#0c0c0d",
            "base-inactive": "#030303",
            "base-disabled": "#151517",
            "brand-hover": "#008277",
            "brand-active": "#008a7f",
            "brand-inactive": "#5ddfd2",
            "brand-disabled": "#4daea4",
            "danger-hover": "#6e0025",
            "danger-active": "#730029",
            "danger-inactive": "#ab3e56",
            "danger-disabled": "#843142",
            "negative-hover": "#6e0025",
            "negative-active": "#730029",
            "negative-inactive": "#ab3e56",
            "negative-disabled": "#843142",
            "warning-hover": "#573700",
            "warning-active": "#5d3c00",
            "warning-inactive": "#926f36",
            "warning-disabled": "#71562a",
            "success-hover": "#004d36",
            "success-active": "#00523b",
            "success-inactive": "#40876e",
            "success-disabled": "#336855",
            "positive-hover": "#004d36",
            "positive-active": "#00523b",
            "positive-inactive": "#40876e",
            "positive-disabled": "#336855",
            "info-hover": "#003590",
            "info-active": "#033a96",
            "info-inactive": "#3b72d3",
            "info-disabled": "#2f58a2",
            "discovery-hover": "#3f2676",
            "discovery-active": "#432b7b",
            "discovery-inactive": "#725db2",
            "discovery-disabled": "#584889"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "base": "#eaeaea",
            "brand": "#68e8db",
            "base-hover": "#919191",
            "base-active": "#cacaca",
            "base-inactive": "#030303",
            "base-disabled": "#eaeaea66",
            "brand-hover": "#08a99e",
            "brand-active": "#25b4a8",
            "brand-inactive": "#9bffff",
            "brand-disabled": "#84e3d9",
            "danger": "#e37085",
            "negative": "#e37085",
            "warning": "#bd985e",
            "success": "#6ab196",
            "positive": "#6ab196",
            "info": "#659dff",
            "discovery": "#9e8ae4",
            "danger-hover": "#ae4158",
            "danger-active": "#b74960",
            "danger-inactive": "#ff9baf",
            "danger-disabled": "#d67a89",
            "negative-hover": "#ae4158",
            "negative-active": "#b74960",
            "negative-inactive": "#ff9baf",
            "negative-disabled": "#d67a89",
            "warning-hover": "#8c692e",
            "warning-active": "#947137",
            "warning-inactive": "#ebc489",
            "warning-disabled": "#b79a6d",
            "success-hover": "#388067",
            "success-active": "#41896f",
            "success-inactive": "#96dfc2",
            "success-disabled": "#77ae98",
            "positive-hover": "#388067",
            "positive-active": "#41896f",
            "positive-inactive": "#96dfc2",
            "positive-disabled": "#77ae98",
            "info-hover": "#376cc9",
            "info-active": "#3f74d3",
            "info-inactive": "#90cbff",
            "info-disabled": "#729fec",
            "discovery-hover": "#715bb1",
            "discovery-active": "#7863ba",
            "discovery-inactive": "#c9b5ff",
            "discovery-disabled": "#9d8ed6"
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
            "base-disabled": "#f1f1f166",
            "brand": "#FAFAFA",
            "danger": "#FAFAFA",
            "negative": "#FAFAFA",
            "warning": "#FAFAFA",
            "success": "#FAFAFA",
            "positive": "#FAFAFA",
            "info": "#FAFAFA",
            "discovery": "#FAFAFA",
            "brand-hover": "#b2b2b2",
            "brand-active": "#bebebe",
            "brand-inactive": "#ffffff",
            "brand-disabled": "#fafafa66",
            "danger-hover": "#b2b2b2",
            "danger-active": "#bebebe",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#fafafa66",
            "negative-hover": "#b2b2b2",
            "negative-active": "#bebebe",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#fafafa66",
            "warning-hover": "#b2b2b2",
            "warning-active": "#bebebe",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#fafafa66",
            "success-hover": "#b2b2b2",
            "success-active": "#bebebe",
            "success-inactive": "#ffffff",
            "success-disabled": "#fafafa66",
            "positive-hover": "#b2b2b2",
            "positive-active": "#bebebe",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#fafafa66",
            "info-hover": "#b2b2b2",
            "info-active": "#bebebe",
            "info-inactive": "#ffffff",
            "info-disabled": "#fafafa66",
            "discovery-hover": "#b2b2b2",
            "discovery-active": "#bebebe",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#fafafa66"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#151518",
            "brand": "#1fb2a6",
            "danger": "#2f000c",
            "negative": "#2f000c",
            "warning": "#2d1c00",
            "success": "#002b1e",
            "positive": "#002b1e",
            "info": "#001c54",
            "discovery": "#20004c",
            "base-hover": "#232326",
            "base-active": "#0c0c0d",
            "base-inactive": "#030303",
            "base-disabled": "#151517",
            "brand-hover": "#008277",
            "brand-active": "#008a7f",
            "brand-inactive": "#5ddfd2",
            "brand-disabled": "#4daea4",
            "danger-hover": "#3b0916",
            "danger-active": "#390714",
            "danger-inactive": "#240005",
            "danger-disabled": "#2b050e",
            "negative-hover": "#3b0916",
            "negative-active": "#390714",
            "negative-inactive": "#240005",
            "negative-disabled": "#2b050e",
            "warning-hover": "#3b290c",
            "warning-active": "#392709",
            "warning-inactive": "#211100",
            "warning-disabled": "#2a1d07",
            "success-hover": "#001d11",
            "success-active": "#001f13",
            "success-inactive": "#0f382a",
            "success-disabled": "#0b2a1f",
            "positive-hover": "#001d11",
            "positive-active": "#001f13",
            "positive-inactive": "#0f382a",
            "positive-disabled": "#0b2a1f",
            "info-hover": "#000c44",
            "info-active": "#000f47",
            "info-inactive": "#0a2a63",
            "info-disabled": "#071f4a",
            "discovery-hover": "#2b105a",
            "discovery-active": "#290d58",
            "discovery-inactive": "#17003f",
            "discovery-disabled": "#1e0a42"
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
      title={"color.rating"}
      subtitle={"Color for rating indicators, such as stars or other symbols representing user ratings."}
      colors={{
            "rating": "#c58c22"
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
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "base": "#343438",
            "brand": "#449a93",
            "danger": "#864254",
            "negative": "#864254",
            "warning": "#786137",
            "success": "#3e7160",
            "positive": "#3e7160",
            "info": "#45649b",
            "discovery": "#675a8a",
            "base-hover": "#3e3e41",
            "base-active": "#2e2e30",
            "base-inactive": "#282828",
            "base-disabled": "#343437",
            "brand-hover": "#26827a",
            "brand-active": "#27867f",
            "brand-inactive": "#6ebcb4",
            "brand-disabled": "#639993",
            "danger-hover": "#77233f",
            "danger-active": "#7a2342",
            "danger-inactive": "#975967",
            "danger-disabled": "#7f4c56",
            "negative-hover": "#77233f",
            "negative-active": "#7a2342",
            "negative-inactive": "#975967",
            "negative-disabled": "#7f4c56",
            "warning-hover": "#6a4f1f",
            "warning-active": "#6e5220",
            "warning-inactive": "#887351",
            "warning-disabled": "#746245",
            "success-hover": "#1d6550",
            "success-active": "#1e6853",
            "success-inactive": "#578172",
            "success-disabled": "#4b6e61",
            "positive-hover": "#1d6550",
            "positive-active": "#1e6853",
            "positive-inactive": "#578172",
            "positive-disabled": "#4b6e61",
            "info-hover": "#284c89",
            "info-active": "#2b508c",
            "info-inactive": "#5a79af",
            "info-disabled": "#4e6691",
            "discovery-hover": "#534377",
            "discovery-active": "#56477a",
            "discovery-inactive": "#796d9d",
            "discovery-disabled": "#665c82"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "base": "#cacaca",
            "brand": "#74c4bc",
            "base-hover": "#8c8c8c",
            "base-active": "#b4b4b4",
            "base-inactive": "#282828",
            "base-disabled": "#cacaca66",
            "brand-hover": "#32968f",
            "brand-active": "#499c95",
            "brand-inactive": "#8ddede",
            "brand-disabled": "#84c3bd",
            "danger": "#c17986",
            "negative": "#c17986",
            "warning": "#a48f6e",
            "success": "#759e8e",
            "positive": "#759e8e",
            "info": "#7095d6",
            "discovery": "#9588c5",
            "danger-hover": "#985b68",
            "danger-active": "#9e626e",
            "danger-inactive": "#de8d9e",
            "danger-disabled": "#b97f88",
            "negative-hover": "#985b68",
            "negative-active": "#9e626e",
            "negative-inactive": "#de8d9e",
            "negative-disabled": "#b97f88",
            "warning-hover": "#846f4b",
            "warning-active": "#897452",
            "warning-inactive": "#caaf87",
            "warning-disabled": "#a29177",
            "success-hover": "#517d6d",
            "success-active": "#588273",
            "success-inactive": "#90c2ae",
            "success-disabled": "#7d9d90",
            "positive-hover": "#517d6d",
            "positive-active": "#588273",
            "positive-inactive": "#90c2ae",
            "positive-disabled": "#7d9d90",
            "info-hover": "#5875a8",
            "info-active": "#5c7ab0",
            "info-inactive": "#87b5dc",
            "info-disabled": "#7996c8",
            "discovery-hover": "#786c9c",
            "discovery-active": "#7d71a3",
            "discovery-inactive": "#af9ce2",
            "discovery-disabled": "#958bbb"
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
            "base-disabled": "#cfcfcf66",
            "brand": "#d5d5d5",
            "danger": "#d5d5d5",
            "negative": "#d5d5d5",
            "warning": "#d5d5d5",
            "success": "#d5d5d5",
            "positive": "#d5d5d5",
            "info": "#d5d5d5",
            "discovery": "#d5d5d5",
            "brand-hover": "#a3a3a3",
            "brand-active": "#ababab",
            "brand-inactive": "#d9d9d9",
            "brand-disabled": "#d5d5d566",
            "danger-hover": "#a3a3a3",
            "danger-active": "#ababab",
            "danger-inactive": "#d9d9d9",
            "danger-disabled": "#d5d5d566",
            "negative-hover": "#a3a3a3",
            "negative-active": "#ababab",
            "negative-inactive": "#d9d9d9",
            "negative-disabled": "#d5d5d566",
            "warning-hover": "#a3a3a3",
            "warning-active": "#ababab",
            "warning-inactive": "#d9d9d9",
            "warning-disabled": "#d5d5d566",
            "success-hover": "#a3a3a3",
            "success-active": "#ababab",
            "success-inactive": "#d9d9d9",
            "success-disabled": "#d5d5d566",
            "positive-hover": "#a3a3a3",
            "positive-active": "#ababab",
            "positive-inactive": "#d9d9d9",
            "positive-disabled": "#d5d5d566",
            "info-hover": "#a3a3a3",
            "info-active": "#ababab",
            "info-inactive": "#d9d9d9",
            "info-disabled": "#d5d5d566",
            "discovery-hover": "#a3a3a3",
            "discovery-active": "#ababab",
            "discovery-inactive": "#d9d9d9",
            "discovery-disabled": "#d5d5d566"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#343438",
            "brand": "#449a93",
            "danger": "#551928",
            "negative": "#551928",
            "warning": "#543d18",
            "success": "#185341",
            "positive": "#185341",
            "info": "#1e3769",
            "discovery": "#3b1d65",
            "base-hover": "#3e3e41",
            "base-active": "#2e2e30",
            "base-inactive": "#282828",
            "base-disabled": "#343437",
            "brand-hover": "#26827a",
            "brand-active": "#27867f",
            "brand-inactive": "#6ebcb4",
            "brand-disabled": "#639993",
            "danger-hover": "#572532",
            "danger-active": "#572330",
            "danger-inactive": "#4f171f",
            "danger-disabled": "#4f1f2a",
            "negative-hover": "#572532",
            "negative-active": "#572330",
            "negative-inactive": "#4f171f",
            "negative-disabled": "#4f1f2a",
            "warning-hover": "#564428",
            "warning-active": "#564325",
            "warning-inactive": "#4d3316",
            "warning-disabled": "#4d3d22",
            "success-hover": "#164b35",
            "success-active": "#164c37",
            "success-inactive": "#2b5345",
            "success-disabled": "#274b3e",
            "positive-hover": "#164b35",
            "positive-active": "#164c37",
            "positive-inactive": "#2b5345",
            "positive-disabled": "#274b3e",
            "info-hover": "#1c2860",
            "info-active": "#1c2b62",
            "info-inactive": "#2a436f",
            "info-disabled": "#243a61",
            "discovery-hover": "#442e68",
            "discovery-active": "#422c68",
            "discovery-inactive": "#331b5d",
            "discovery-disabled": "#39275b"
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
      title={"color.rating"}
      subtitle={"Color for rating indicators, such as stars or other symbols representing user ratings."}
      colors={{
            "rating": "#a58549"
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
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.accent"}
      subtitle={"Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators."}
      colors={{
            "base": "#000000",
            "brand": "#00bcad",
            "danger": "#840929",
            "negative": "#840929",
            "warning": "#583902",
            "success": "#0a4e38",
            "positive": "#0a4e38",
            "info": "#0145be",
            "discovery": "#492b9b",
            "base-hover": "#000000",
            "base-active": "#000000",
            "base-inactive": "#000000",
            "base-disabled": "#000000",
            "brand-hover": "#004a44",
            "brand-active": "#00554f",
            "brand-inactive": "#5cfbeb",
            "brand-disabled": "#35c4b5",
            "danger-hover": "#2d000f",
            "danger-active": "#340013",
            "danger-inactive": "#bc2445",
            "danger-disabled": "#7b182d",
            "negative-hover": "#2d000f",
            "negative-active": "#340013",
            "negative-inactive": "#bc2445",
            "negative-disabled": "#7b182d",
            "warning-hover": "#0b0700",
            "warning-active": "#140d00",
            "warning-inactive": "#92661d",
            "warning-disabled": "#5c4012",
            "success-hover": "#000000",
            "success-active": "#000403",
            "success-inactive": "#298565",
            "success-disabled": "#1b533f",
            "positive-hover": "#000000",
            "positive-active": "#000403",
            "positive-inactive": "#298565",
            "positive-disabled": "#1b533f",
            "info-hover": "#00235e",
            "info-active": "#00286b",
            "info-inactive": "#216df4",
            "info-disabled": "#1449a9",
            "discovery-hover": "#280e61",
            "discovery-active": "#2d136b",
            "discovery-inactive": "#6c4ec9",
            "discovery-disabled": "#48328a"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Low-emphasis neutral background for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows."}
      colors={{
            "base": "#ffffff",
            "brand": "#75fff1",
            "base-hover": "#999999",
            "base-active": "#ececec",
            "base-inactive": "#000000",
            "base-disabled": "#ffffff66",
            "brand-hover": "#008e84",
            "brand-active": "#06c2b2",
            "brand-inactive": "#e1ffff",
            "brand-disabled": "#9cfaf0",
            "danger": "#fc7d94",
            "negative": "#fc7d94",
            "warning": "#d6a252",
            "success": "#61c6a0",
            "positive": "#61c6a0",
            "info": "#92baff",
            "discovery": "#b9a6fa",
            "danger-hover": "#c12747",
            "danger-active": "#d13051",
            "danger-inactive": "#ffe1e7",
            "danger-disabled": "#ef8697",
            "negative-hover": "#c12747",
            "negative-active": "#d13051",
            "negative-inactive": "#ffe1e7",
            "negative-disabled": "#ef8697",
            "warning-hover": "#865c15",
            "warning-active": "#96691e",
            "warning-inactive": "#ffddaa",
            "warning-disabled": "#cda567",
            "success-hover": "#207859",
            "success-active": "#2a8866",
            "success-inactive": "#b5f5dc",
            "success-disabled": "#74c2a3",
            "positive-hover": "#207859",
            "positive-active": "#2a8866",
            "positive-inactive": "#b5f5dc",
            "positive-disabled": "#74c2a3",
            "info-hover": "#1864e9",
            "info-active": "#2770f3",
            "info-inactive": "#d1e9ff",
            "info-disabled": "#8ab5ff",
            "discovery-hover": "#6a4ac7",
            "discovery-active": "#7659d2",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#b3a4ee"
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
            "base-disabled": "#ffffff66",
            "brand": "#ffffff",
            "danger": "#ffffff",
            "negative": "#ffffff",
            "warning": "#ffffff",
            "success": "#ffffff",
            "positive": "#ffffff",
            "info": "#ffffff",
            "discovery": "#ffffff",
            "brand-hover": "#c9c9c9",
            "brand-active": "#dadada",
            "brand-inactive": "#ffffff",
            "brand-disabled": "#ffffff66",
            "danger-hover": "#c9c9c9",
            "danger-active": "#dadada",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#ffffff66",
            "negative-hover": "#c9c9c9",
            "negative-active": "#dadada",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#ffffff66",
            "warning-hover": "#c9c9c9",
            "warning-active": "#dadada",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#ffffff66",
            "success-hover": "#c9c9c9",
            "success-active": "#dadada",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#c9c9c9",
            "positive-active": "#dadada",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#c9c9c9",
            "info-active": "#dadada",
            "info-inactive": "#ffffff",
            "info-disabled": "#ffffff66",
            "discovery-hover": "#c9c9c9",
            "discovery-active": "#dadada",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#ffffff66"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#000000",
            "brand": "#00bcad",
            "danger": "#000000",
            "negative": "#000000",
            "warning": "#000000",
            "success": "#000000",
            "positive": "#000000",
            "info": "#000207",
            "discovery": "#000000",
            "base-hover": "#000000",
            "base-active": "#000000",
            "base-inactive": "#000000",
            "base-disabled": "#000000",
            "brand-hover": "#004a44",
            "brand-active": "#00554f",
            "brand-inactive": "#5cfbeb",
            "brand-disabled": "#35c4b5",
            "danger-hover": "#000000",
            "danger-active": "#000000",
            "danger-inactive": "#000000",
            "danger-disabled": "#000000",
            "negative-hover": "#000000",
            "negative-active": "#000000",
            "negative-inactive": "#000000",
            "negative-disabled": "#000000",
            "warning-hover": "#000000",
            "warning-active": "#000000",
            "warning-inactive": "#000000",
            "warning-disabled": "#000000",
            "success-hover": "#000000",
            "success-active": "#000000",
            "success-inactive": "#000000",
            "success-disabled": "#000000",
            "positive-hover": "#000000",
            "positive-active": "#000000",
            "positive-inactive": "#000000",
            "positive-disabled": "#000000",
            "info-hover": "#000000",
            "info-active": "#000000",
            "info-inactive": "#00102b",
            "info-disabled": "#000103",
            "discovery-hover": "#0e0027",
            "discovery-active": "#0c0020",
            "discovery-inactive": "#000000",
            "discovery-disabled": "#000000"
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
      title={"color.rating"}
      subtitle={"Color for rating indicators, such as stars or other symbols representing user ratings."}
      colors={{
            "rating": "#dc8f00"
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
