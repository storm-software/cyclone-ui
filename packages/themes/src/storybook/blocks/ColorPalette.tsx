import { ColorPalette, ColorItem } from "@storybook/addon-docs/blocks";
import { useThemeVariant } from "./ThemeVariant";


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
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#ff9b9b",
            "2": "#ff7575",
            "3": "#ff4f4f",
            "4": "#e3518e",
            "5": "#ff2a2a",
            "6": "#ff0404",
            "7": "#dc2626",
            "8": "#cd3a13",
            "9": "#d20000",
            "10": "#a60000",
            "11": "#790000",
            "12": "#4d0000"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#c8e7a3",
            "2": "#b4de81",
            "3": "#9fd55e",
            "4": "#c2c261",
            "5": "#8bcc3c",
            "6": "#76c319",
            "7": "#81b33a",
            "8": "#61a92c",
            "9": "#62a412",
            "10": "#4d830c",
            "11": "#386107",
            "12": "#243e04"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#83baff",
            "2": "#82afff",
            "3": "#76a8ff",
            "4": "#6aa0ff",
            "5": "#5e98ff",
            "6": "#4f99f9",
            "7": "#5291ff",
            "8": "#4689ff",
            "9": "#3a82ff",
            "10": "#2e7aff",
            "11": "#1d70f2",
            "12": "#3669ac"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#baf6e8",
            "2": "#9bf1de",
            "3": "#b1e4e0",
            "4": "#7bedd3",
            "5": "#5be8c9",
            "6": "#3be4be",
            "7": "#2dbc9c",
            "8": "#1fb2a6",
            "9": "#219279",
            "10": "#166855",
            "11": "#0c3c31",
            "12": "#052f2c"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#b7ebd5",
            "2": "#9ce4c6",
            "3": "#81ddb6",
            "4": "#66d5a7",
            "5": "#67cc9a",
            "6": "#4bce97",
            "7": "#45c791",
            "8": "#3aae7d",
            "9": "#00af6f",
            "10": "#29815c",
            "11": "#007a4d",
            "12": "#14412e"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#fafafa",
            "2": "#f1f1f1",
            "3": "#eaeaea",
            "4": "#e1e1e1",
            "5": "#dcdcdc",
            "6": "#bebebe",
            "7": "#9f9f9f",
            "8": "#616161",
            "9": "#484848",
            "10": "#3a3a3a",
            "11": "#2b2c30",
            "12": "#242528",
            "13": "#1f1f21",
            "14": "#1a1b1e"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#ffc5a8",
            "2": "#fcb998",
            "3": "#fcab83",
            "4": "#faa276",
            "5": "#f69f73",
            "6": "#f9935f",
            "7": "#f3874e",
            "8": "#ec7a3b",
            "9": "#e97737",
            "10": "#de743a",
            "11": "#b45b2b",
            "12": "#a25226"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#f5c7e4",
            "2": "#f2b3da",
            "3": "#fb9cc0",
            "4": "#ee9ecf",
            "5": "#eb89c5",
            "6": "#e774bb",
            "7": "#e96fa2",
            "8": "#df6db3",
            "9": "#c25c9b",
            "10": "#a34e71",
            "11": "#904272",
            "12": "#482039"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#dbcffd",
            "2": "#cdbdfc",
            "3": "#aeb1ff",
            "4": "#c0abfb",
            "5": "#b299fa",
            "6": "#a587f9",
            "7": "#8d8cfb",
            "8": "#9d7ff0",
            "9": "#866cd1",
            "10": "#6261af",
            "11": "#624e9b",
            "12": "#30264d"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#e791bb",
            "2": "#fb5879",
            "3": "#f75576",
            "4": "#d74765",
            "5": "#cf2d56",
            "6": "#b92647",
            "7": "#a21f39",
            "8": "#9a1c0f",
            "9": "#8a192d",
            "10": "#731421",
            "11": "#5a0f17",
            "12": "#3c050a"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#c4e7f3",
            "2": "#aeddee",
            "3": "#97d4e9",
            "4": "#81cbe5",
            "5": "#6bc2e0",
            "6": "#47c5ea",
            "7": "#64bbd8",
            "8": "#55a2bc",
            "9": "#00a6d6",
            "10": "#3d788c",
            "11": "#007496",
            "12": "#1d3b46"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#ffd285",
            "2": "#ffcb70",
            "3": "#ffc35c",
            "4": "#ffbb47",
            "5": "#ffb433",
            "6": "#e2b259",
            "7": "#d29527",
            "8": "#ca8b00",
            "9": "#a6761c",
            "10": "#8f6300",
            "11": "#795713",
            "12": "#4d370b"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary subtle background color for the dark theme"}
      colors={{
            "base": "#3a3a3a",
            "brand": "#0c3c31",
            "danger": "#3c050a",
            "negative": "#790000",
            "warning": "#4d370b",
            "success": "#14412e",
            "positive": "#243e04",
            "info": "#1d3b46",
            "discovery": "#30264d",
            "base-hover": "#565656",
            "base-active": "#484848",
            "base-inactive": "#282828",
            "base-disabled": "#3a3a3a66",
            "brand-hover": "#29564a",
            "brand-active": "#1b493d",
            "brand-inactive": "#002b21",
            "brand-disabled": "#183a31",
            "danger-hover": "#50191a",
            "danger-active": "#460f12",
            "danger-inactive": "#2f0002",
            "danger-disabled": "#370d0e",
            "negative-hover": "#9d2e24",
            "negative-active": "#8b1b13",
            "negative-inactive": "#610000",
            "negative-disabled": "#6f1b14",
            "warning-hover": "#6b542b",
            "warning-active": "#5c451b",
            "warning-inactive": "#3a2500",
            "warning-disabled": "#4a3819",
            "success-hover": "#315d48",
            "success-active": "#234f3b",
            "success-inactive": "#002f1d",
            "success-disabled": "#1e3f30",
            "positive-hover": "#3e5923",
            "positive-active": "#314b14",
            "positive-inactive": "#142d00",
            "positive-disabled": "#283d13",
            "info-hover": "#385662",
            "info-active": "#2a4854",
            "info-inactive": "#0b2a34",
            "info-disabled": "#233a43",
            "discovery-hover": "#473d67",
            "discovery-active": "#3b325a",
            "discovery-inactive": "#22173c",
            "discovery-disabled": "#2f2847"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#616161",
            "brand": "#2dbc9c",
            "danger": "#cf2d56",
            "negative": "#ff0404",
            "warning": "#d29527",
            "success": "#45c791",
            "positive": "#76c319",
            "info": "#64bbd8",
            "discovery": "#9d7ff0",
            "base-subtle": "#484848",
            "brand-subtle": "#166855",
            "danger-subtle": "#5a0f17",
            "negative-subtle": "#790000",
            "warning-subtle": "#a6761c",
            "success-subtle": "#29815c",
            "positive-subtle": "#c8e7a3",
            "info-subtle": "#3d788c",
            "discovery-subtle": "#624e9b",
            "base-hover": "#8c8c8c",
            "base-active": "#767676",
            "base-disabled": "#61616166",
            "brand-hover": "#82ffe0",
            "brand-active": "#5bdfbe",
            "brand-disabled": "#55b79d",
            "danger-hover": "#ff6a87",
            "danger-active": "#ee4d6e",
            "danger-disabled": "#c0455d",
            "negative-hover": "#ff6b57",
            "negative-active": "#ff4535",
            "negative-disabled": "#eb4436",
            "warning-hover": "#ffda76",
            "warning-active": "#f6b751",
            "warning-disabled": "#c9994c",
            "success-hover": "#96ffd8",
            "success-active": "#6fecb4",
            "success-disabled": "#64c297",
            "positive-hover": "#bcff76",
            "positive-active": "#99e84d",
            "positive-disabled": "#82bf4c",
            "info-hover": "#aeffff",
            "info-active": "#89e0fd",
            "info-disabled": "#77b9d0",
            "discovery-hover": "#dcc0ff",
            "discovery-active": "#bc9fff",
            "discovery-disabled": "#9b85df",
            "base-subtle-hover": "#696969",
            "base-subtle-active": "#585858",
            "base-subtle-disabled": "#48484866",
            "brand-subtle-hover": "#47927d",
            "brand-subtle-active": "#307c69",
            "brand-subtle-disabled": "#2d6556",
            "danger-subtle-hover": "#772b2e",
            "danger-subtle-active": "#681e22",
            "danger-subtle-disabled": "#531a1d",
            "negative-subtle-hover": "#9d2e24",
            "negative-subtle-active": "#8b1b13",
            "negative-subtle-disabled": "#6f1b14",
            "warning-subtle-hover": "#e0ae5c",
            "warning-subtle-active": "#c3913e",
            "warning-subtle-disabled": "#9f793b",
            "success-subtle-hover": "#5fb38b",
            "success-subtle-active": "#459a73",
            "success-subtle-disabled": "#3e7e60",
            "positive-subtle-hover": "#769252",
            "positive-subtle-active": "#9ebc7a",
            "positive-subtle-disabled": "#cce5af",
            "info-subtle-hover": "#6ea9bf",
            "info-subtle-active": "#5590a5",
            "info-subtle-disabled": "#4a7686",
            "discovery-subtle-hover": "#8b79ca",
            "discovery-subtle-active": "#7663b2",
            "discovery-subtle-disabled": "#61528f"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#fafafa",
            "brand": "#2dbc9c",
            "danger": "#cf2d56",
            "negative": "#ff0404",
            "warning": "#d29527",
            "success": "#45c791",
            "positive": "#76c319",
            "info": "#64bbd8",
            "discovery": "#9d7ff0",
            "base-inverse": "#0c0c0d",
            "brand-inverse": "#fafafa",
            "danger-inverse": "#fafafa",
            "negative-inverse": "#fafafa",
            "warning-inverse": "#fafafa",
            "success-inverse": "#fafafa",
            "positive-inverse": "#fafafa",
            "info-inverse": "#fafafa",
            "discovery-inverse": "#fafafa",
            "base-hover": "#9b9b9b",
            "base-active": "#c9c9c9",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#82ffe0",
            "brand-active": "#5bdfbe",
            "brand-inactive": "#008f71",
            "brand-disabled": "#55b79d",
            "danger-hover": "#ff6a87",
            "danger-active": "#ee4d6e",
            "danger-inactive": "#a70037",
            "danger-disabled": "#aeaeae",
            "negative-hover": "#ff6b57",
            "negative-active": "#ff4535",
            "negative-inactive": "#d00000",
            "negative-disabled": "#999999",
            "warning-hover": "#ffda76",
            "warning-active": "#f6b751",
            "warning-inactive": "#a46900",
            "warning-disabled": "#c9994c",
            "success-hover": "#96ffd8",
            "success-active": "#6fecb4",
            "success-inactive": "#009865",
            "success-disabled": "#64c297",
            "positive-hover": "#bcff76",
            "positive-active": "#99e84d",
            "positive-inactive": "#499400",
            "positive-disabled": "#82bf4c",
            "info-hover": "#aeffff",
            "info-active": "#89e0fd",
            "info-inactive": "#318ca8",
            "info-disabled": "#77b9d0",
            "discovery-hover": "#dcc0ff",
            "discovery-active": "#bc9fff",
            "discovery-inactive": "#7656c2",
            "discovery-disabled": "#9b85df",
            "base-inverse-hover": "#282829",
            "base-inverse-active": "#111112",
            "base-inverse-inactive": "#060607",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#151515",
            "brand-inverse-active": "#c9c9c9",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#fafafa66",
            "danger-inverse-hover": "#151515",
            "danger-inverse-active": "#c9c9c9",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#aeaeae",
            "negative-inverse-hover": "#151515",
            "negative-inverse-active": "#c9c9c9",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#fafafa66",
            "warning-inverse-hover": "#151515",
            "warning-inverse-active": "#c9c9c9",
            "warning-inverse-inactive": "#ffffff",
            "warning-inverse-disabled": "#fafafa66",
            "success-inverse-hover": "#151515",
            "success-inverse-active": "#c9c9c9",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#fafafa66",
            "positive-inverse-hover": "#151515",
            "positive-inverse-active": "#c9c9c9",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#fafafa66",
            "info-inverse-hover": "#151515",
            "info-inverse-active": "#c9c9c9",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#fafafa66",
            "discovery-inverse-hover": "#151515",
            "discovery-inverse-active": "#c9c9c9",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#fafafa66",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#9efffb",
            "danger-ghost-hover": "#ffc8e0",
            "negative-ghost-hover": "#ffccb3",
            "warning-ghost-hover": "#fffc97",
            "success-ghost-hover": "#affff1",
            "positive-ghost-hover": "#d4ff8f",
            "info-ghost-hover": "#bfffff",
            "discovery-ghost-hover": "#fff0ff",
            "base-inverse-ghost-hover": "#535354"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the dark theme"}
      colors={{
            "lowest": "#0c0c0d",
            "page": "#1f1f21",
            "elevated": "#242528",
            "floating": "#2b2c30",
            "highest": "#484848",
            "lowest-hover": "#161617",
            "lowest-active": "#111112",
            "lowest-inactive": "#060607",
            "lowest-disabled": "#0c0c0d",
            "page-hover": "#313133",
            "page-active": "#28282a",
            "page-inactive": "#141416",
            "page-disabled": "#1f1f21",
            "elevated-hover": "#38393c",
            "elevated-active": "#2e2f32",
            "elevated-inactive": "#18191b",
            "elevated-disabled": "#242527",
            "floating-hover": "#414347",
            "floating-active": "#36373b",
            "floating-inactive": "#1d1e22",
            "floating-disabled": "#2b2c2f",
            "highest-hover": "#696969",
            "highest-active": "#585858",
            "highest-inactive": "#333333",
            "highest-disabled": "#48484866"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the dark theme"}
      colors={{
            "neutral.emphasis": "#fafafa",
            "neutral.subtle": "#1a1b1e",
            "brand.emphasis": "#baf6e8",
            "brand.subtle": "#9bf1de",
            "red.emphasis": "#a21f39",
            "red.subtle": "#3c050a",
            "orange.emphasis": "#f9935f",
            "orange.subtle": "#b45b2b",
            "yellow.emphasis": "#ffb433",
            "yellow.subtle": "#4d370b",
            "green.emphasis": "#4bce97",
            "green.subtle": "#29815c",
            "sky.emphasis": "#6bc2e0",
            "sky.subtle": "#1d3b46",
            "blue.emphasis": "#5291ff",
            "blue.subtle": "#1d70f2",
            "purple.emphasis": "#a587f9",
            "purple.subtle": "#30264d",
            "pink.emphasis": "#e774bb",
            "pink.subtle": "#482039"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the dark theme"}
      colors={{
            "body": "#bebebe",
            "eyebrow": "#616161",
            "caption": "#9f9f9f",
            "link": "#5291ff",
            "required": "#ff0404",
            "body-hover": "#757575",
            "body-active": "#989898",
            "body-inactive": "#f2f2f2",
            "body-disabled": "#bebebe66",
            "eyebrow-hover": "#8c8c8c",
            "eyebrow-active": "#767676",
            "eyebrow-inactive": "#464646",
            "eyebrow-disabled": "#61616166",
            "caption-hover": "#e2e2e2",
            "caption-active": "#c0c0c0",
            "caption-inactive": "#757575",
            "caption-disabled": "#9f9f9f66",
            "link-hover": "#8fd3ff",
            "link-active": "#70b1ff",
            "link-inactive": "#2a67d1",
            "link-disabled": "#6193ea",
            "required-hover": "#ff6b57",
            "required-active": "#ff4535",
            "required-inactive": "#d00000",
            "required-disabled": "#eb4436"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#2b2c30",
            "border": "#616161",
            "backdrop": "#0d0c0766",
            "background-hover": "#414347",
            "background-active": "#36373b",
            "background-inactive": "#1d1e22",
            "background-disabled": "#2b2c2f",
            "border-hover": "#8c8c8c",
            "border-active": "#767676",
            "border-disabled": "#61616166"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#ffffff00"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
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
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#de8d8d",
            "2": "#d87979",
            "3": "#d26464",
            "4": "#bd678b",
            "5": "#cc5050",
            "6": "#c63c3c",
            "7": "#b34e4e",
            "8": "#aa563f",
            "9": "#ad3232",
            "10": "#952b2b",
            "11": "#7d2424",
            "12": "#651d1d"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#b2ca97",
            "2": "#a4bf83",
            "3": "#95b56e",
            "4": "#a8a870",
            "5": "#87ab5b",
            "6": "#78a442",
            "7": "#7f9b57",
            "8": "#6b954c",
            "9": "#6a9339",
            "10": "#5c8130",
            "11": "#4e6e27",
            "12": "#405b20"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#80a8da",
            "2": "#80a0da",
            "3": "#799cd8",
            "4": "#7397d6",
            "5": "#6c92d4",
            "6": "#6592cd",
            "7": "#668dd3",
            "8": "#5f88d1",
            "9": "#5984cf",
            "10": "#527fcd",
            "11": "#4978c1",
            "12": "#547197"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#a2d9cc",
            "2": "#90d1c3",
            "3": "#a0c8c5",
            "4": "#7ecab9",
            "5": "#6cc2af",
            "6": "#5abba5",
            "7": "#4fa08e",
            "8": "#449a93",
            "9": "#428878",
            "10": "#357062",
            "11": "#28574c",
            "12": "#1f524e"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#a3cebc",
            "2": "#93c7b1",
            "3": "#83bfa5",
            "4": "#73b69a",
            "5": "#74b092",
            "6": "#63ae8f",
            "7": "#60a88a",
            "8": "#57987d",
            "9": "#2d9a72",
            "10": "#467e66",
            "11": "#247d5d",
            "12": "#305847"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#d5d5d5",
            "2": "#cfcfcf",
            "3": "#cacaca",
            "4": "#c4c4c4",
            "5": "#c0c0c0",
            "6": "#ababab",
            "7": "#969696",
            "8": "#6a6a6a",
            "9": "#595959",
            "10": "#4f4f4f",
            "11": "#444548",
            "12": "#3f4043",
            "13": "#3c3c3e",
            "14": "#38393c"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#e0ae95",
            "2": "#dba68d",
            "3": "#d89e81",
            "4": "#d4987a",
            "5": "#d09679",
            "6": "#d08f6d",
            "7": "#c98764",
            "8": "#c17f5a",
            "9": "#be7d58",
            "10": "#b77b5a",
            "11": "#9c694d",
            "12": "#916247"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#d9aac8",
            "2": "#d59fc0",
            "3": "#da8fac",
            "4": "#cf93b8",
            "5": "#ca87b0",
            "6": "#c57ba8",
            "7": "#c67898",
            "8": "#be77a3",
            "9": "#a86d91",
            "10": "#926376",
            "11": "#875975",
            "12": "#5a3b4f"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#baabe3",
            "2": "#b1a1e0",
            "3": "#989ae1",
            "4": "#aa97dc",
            "5": "#a18ed9",
            "6": "#9984d6",
            "7": "#8786d8",
            "8": "#9580cd",
            "9": "#8677b4",
            "10": "#70709b",
            "11": "#6d628e",
            "12": "#47405d"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#c88ca9",
            "2": "#d0697e",
            "3": "#cd687d",
            "4": "#b46172",
            "5": "#ab5268",
            "6": "#9e4a5d",
            "7": "#914252",
            "8": "#8d3e35",
            "9": "#843b48",
            "10": "#77343d",
            "11": "#682e34",
            "12": "#592126"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#a9cbd7",
            "2": "#9cc3d1",
            "3": "#8fbbca",
            "4": "#82b3c5",
            "5": "#76acbe",
            "6": "#61abc1",
            "7": "#72a6b8",
            "8": "#6994a3",
            "9": "#3393af",
            "10": "#557884",
            "11": "#29768d",
            "12": "#38515a"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#dbba82",
            "2": "#d7b476",
            "3": "#d4ae6b",
            "4": "#d1a760",
            "5": "#cea155",
            "6": "#bea16b",
            "7": "#ad8b4e",
            "8": "#a98331",
            "9": "#947741",
            "10": "#896b28",
            "11": "#7a6334",
            "12": "#624f29"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary subtle background color for the dark theme"}
      colors={{
            "base": "#4f4f4f",
            "brand": "#28574c",
            "danger": "#592126",
            "negative": "#7d2424",
            "warning": "#624f29",
            "success": "#305847",
            "positive": "#405b20",
            "info": "#38515a",
            "discovery": "#47405d",
            "base-hover": "#626262",
            "base-active": "#595959",
            "base-inactive": "#424242",
            "base-disabled": "#4f4f4f66",
            "brand-hover": "#43635a",
            "brand-active": "#375c52",
            "brand-inactive": "#185345",
            "brand-disabled": "#34524a",
            "danger-hover": "#613536",
            "danger-active": "#5c2c2e",
            "danger-inactive": "#55191b",
            "danger-disabled": "#53292a",
            "negative-hover": "#8e4b45",
            "negative-active": "#853c36",
            "negative-inactive": "#702020",
            "negative-disabled": "#743934",
            "warning-hover": "#706145",
            "warning-active": "#685738",
            "warning-inactive": "#5b431a",
            "warning-disabled": "#5d4e35",
            "success-hover": "#496759",
            "success-active": "#3e5f50",
            "success-inactive": "#19553e",
            "success-disabled": "#395548",
            "positive-hover": "#52653e",
            "positive-active": "#495e31",
            "positive-inactive": "#335418",
            "positive-disabled": "#42552f",
            "info-hover": "#4e626a",
            "info-active": "#435961",
            "info-inactive": "#274752",
            "info-disabled": "#3d5057",
            "discovery-hover": "#59526d",
            "discovery-active": "#504a65",
            "discovery-inactive": "#3d3354",
            "discovery-disabled": "#474159"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#6a6a6a",
            "brand": "#4fa08e",
            "danger": "#ab5268",
            "negative": "#c63c3c",
            "warning": "#ad8b4e",
            "success": "#60a88a",
            "positive": "#78a442",
            "info": "#72a6b8",
            "discovery": "#9580cd",
            "base-subtle": "#595959",
            "brand-subtle": "#357062",
            "danger-subtle": "#682e34",
            "negative-subtle": "#7d2424",
            "warning-subtle": "#947741",
            "success-subtle": "#467e66",
            "positive-subtle": "#b2ca97",
            "info-subtle": "#557884",
            "discovery-subtle": "#6d628e",
            "base-hover": "#888888",
            "base-active": "#797979",
            "base-disabled": "#6a6a6a66",
            "brand-hover": "#80dac4",
            "brand-active": "#6dbca8",
            "brand-disabled": "#699f91",
            "danger-hover": "#d67386",
            "danger-active": "#c56478",
            "danger-disabled": "#a4606d",
            "negative-hover": "#d37569",
            "negative-active": "#ce6056",
            "negative-disabled": "#bf5f57",
            "warning-hover": "#d8bf79",
            "warning-active": "#cba566",
            "warning-disabled": "#ab8f64",
            "success-hover": "#8bddbf",
            "success-active": "#78c8a4",
            "success-disabled": "#72a88f",
            "positive-hover": "#aad879",
            "positive-active": "#92c064",
            "positive-disabled": "#82a464",
            "info-hover": "#98e1e1",
            "info-active": "#84c4d9",
            "info-disabled": "#7da6b4",
            "discovery-hover": "#bfa2e4",
            "discovery-active": "#a890df",
            "discovery-disabled": "#9485c0",
            "base-subtle-hover": "#707070",
            "base-subtle-active": "#646464",
            "base-subtle-disabled": "#59595966",
            "brand-subtle-hover": "#5c887c",
            "brand-subtle-active": "#4b7a6e",
            "brand-subtle-disabled": "#476c62",
            "danger-subtle-hover": "#774648",
            "danger-subtle-active": "#6f3b3e",
            "danger-subtle-disabled": "#623639",
            "negative-subtle-hover": "#8e4b45",
            "negative-subtle-active": "#853c36",
            "negative-subtle-disabled": "#743934",
            "warning-subtle-hover": "#bd9e6d",
            "warning-subtle-active": "#a5895c",
            "warning-subtle-disabled": "#8f7956",
            "success-subtle-hover": "#6e9e87",
            "success-subtle-active": "#5c8d76",
            "success-subtle-disabled": "#557c69",
            "positive-subtle-hover": "#788864",
            "positive-subtle-active": "#95a67f",
            "positive-subtle-disabled": "#b5c99f",
            "info-subtle-hover": "#789aa7",
            "info-subtle-active": "#688894",
            "info-subtle-disabled": "#5d7781",
            "discovery-subtle-hover": "#8a7fb0",
            "discovery-subtle-active": "#7c719e",
            "discovery-subtle-disabled": "#6c6486"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#d5d5d5",
            "brand": "#4fa08e",
            "danger": "#ab5268",
            "negative": "#c63c3c",
            "warning": "#ad8b4e",
            "success": "#60a88a",
            "positive": "#78a442",
            "info": "#72a6b8",
            "discovery": "#9580cd",
            "base-inverse": "#2e2e30",
            "brand-inverse": "#d5d5d5",
            "danger-inverse": "#d5d5d5",
            "negative-inverse": "#d5d5d5",
            "warning-inverse": "#d5d5d5",
            "success-inverse": "#d5d5d5",
            "positive-inverse": "#d5d5d5",
            "info-inverse": "#d5d5d5",
            "discovery-inverse": "#d5d5d5",
            "base-hover": "#939393",
            "base-active": "#b3b3b3",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#d9d9d966",
            "brand-hover": "#80dac4",
            "brand-active": "#6dbca8",
            "brand-inactive": "#288974",
            "brand-disabled": "#699f91",
            "danger-hover": "#d67386",
            "danger-active": "#c56478",
            "danger-inactive": "#962c4f",
            "danger-disabled": "#a0a0a0",
            "negative-hover": "#d37569",
            "negative-active": "#ce6056",
            "negative-inactive": "#ac3232",
            "negative-disabled": "#919191",
            "warning-hover": "#d8bf79",
            "warning-active": "#cba566",
            "warning-inactive": "#946e2b",
            "warning-disabled": "#ab8f64",
            "success-hover": "#8bddbf",
            "success-active": "#78c8a4",
            "success-inactive": "#298e6c",
            "success-disabled": "#72a88f",
            "positive-hover": "#aad879",
            "positive-active": "#92c064",
            "positive-inactive": "#598c29",
            "positive-disabled": "#82a464",
            "info-hover": "#98e1e1",
            "info-active": "#84c4d9",
            "info-inactive": "#508495",
            "info-disabled": "#7da6b4",
            "discovery-hover": "#bfa2e4",
            "discovery-active": "#a890df",
            "discovery-inactive": "#7c6aa7",
            "discovery-disabled": "#9485c0",
            "base-inverse-hover": "#424243",
            "base-inverse-active": "#323233",
            "base-inverse-inactive": "#29292d",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#353535",
            "brand-inverse-active": "#b3b3b3",
            "brand-inverse-inactive": "#d9d9d9",
            "brand-inverse-disabled": "#d5d5d566",
            "danger-inverse-hover": "#353535",
            "danger-inverse-active": "#b3b3b3",
            "danger-inverse-inactive": "#d9d9d9",
            "danger-inverse-disabled": "#a0a0a0",
            "negative-inverse-hover": "#353535",
            "negative-inverse-active": "#b3b3b3",
            "negative-inverse-inactive": "#d9d9d9",
            "negative-inverse-disabled": "#d5d5d566",
            "warning-inverse-hover": "#353535",
            "warning-inverse-active": "#b3b3b3",
            "warning-inverse-inactive": "#d9d9d9",
            "warning-inverse-disabled": "#d5d5d566",
            "success-inverse-hover": "#353535",
            "success-inverse-active": "#b3b3b3",
            "success-inverse-inactive": "#d9d9d9",
            "success-inverse-disabled": "#d5d5d566",
            "positive-inverse-hover": "#353535",
            "positive-inverse-active": "#b3b3b3",
            "positive-inverse-inactive": "#d9d9d9",
            "positive-inverse-disabled": "#d5d5d566",
            "info-inverse-hover": "#353535",
            "info-inverse-active": "#b3b3b3",
            "info-inverse-inactive": "#d9d9d9",
            "info-inverse-disabled": "#d5d5d566",
            "discovery-inverse-hover": "#353535",
            "discovery-inverse-active": "#b3b3b3",
            "discovery-inverse-inactive": "#d9d9d9",
            "discovery-inverse-disabled": "#d5d5d566",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#8fdfdb",
            "danger-ghost-hover": "#e5a6c1",
            "negative-ghost-hover": "#e2b29a",
            "warning-ghost-hover": "#dddb8b",
            "success-ghost-hover": "#98e1d4",
            "positive-ghost-hover": "#bbdc87",
            "info-ghost-hover": "#a1e4e4",
            "discovery-ghost-hover": "#ebbceb",
            "base-inverse-ghost-hover": "#606061"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the dark theme"}
      colors={{
            "lowest": "#2e2e30",
            "page": "#3c3c3e",
            "elevated": "#3f4043",
            "floating": "#444548",
            "highest": "#595959",
            "lowest-hover": "#353537",
            "lowest-active": "#323233",
            "lowest-inactive": "#29292d",
            "lowest-disabled": "#2e2e30",
            "page-hover": "#48484a",
            "page-active": "#424244",
            "page-inactive": "#343436",
            "page-disabled": "#3c3c3e",
            "elevated-hover": "#4d4e50",
            "elevated-active": "#464749",
            "elevated-inactive": "#36373a",
            "elevated-disabled": "#3f4042",
            "floating-hover": "#545558",
            "floating-active": "#4c4d50",
            "floating-inactive": "#3a3b3f",
            "floating-disabled": "#444547",
            "highest-hover": "#707070",
            "highest-active": "#646464",
            "highest-inactive": "#4a4a4a",
            "highest-disabled": "#59595966"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the dark theme"}
      colors={{
            "neutral.emphasis": "#d5d5d5",
            "neutral.subtle": "#38393c",
            "brand.emphasis": "#a2d9cc",
            "brand.subtle": "#90d1c3",
            "red.emphasis": "#914252",
            "red.subtle": "#592126",
            "orange.emphasis": "#d08f6d",
            "orange.subtle": "#9c694d",
            "yellow.emphasis": "#cea155",
            "yellow.subtle": "#624f29",
            "green.emphasis": "#63ae8f",
            "green.subtle": "#467e66",
            "sky.emphasis": "#76acbe",
            "sky.subtle": "#38515a",
            "blue.emphasis": "#668dd3",
            "blue.subtle": "#4978c1",
            "purple.emphasis": "#9984d6",
            "purple.subtle": "#47405d",
            "pink.emphasis": "#c57ba8",
            "pink.subtle": "#5a3b4f"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the dark theme"}
      colors={{
            "body": "#ababab",
            "eyebrow": "#6a6a6a",
            "caption": "#969696",
            "link": "#668dd3",
            "required": "#c63c3c",
            "body-hover": "#787878",
            "body-active": "#919191",
            "body-inactive": "#d0d0d0",
            "body-disabled": "#ababab66",
            "eyebrow-hover": "#888888",
            "eyebrow-active": "#797979",
            "eyebrow-inactive": "#575757",
            "eyebrow-disabled": "#6a6a6a66",
            "caption-hover": "#c4c4c4",
            "caption-active": "#adadad",
            "caption-inactive": "#787878",
            "caption-disabled": "#96969666",
            "link-hover": "#87bbdc",
            "link-active": "#76a2d7",
            "link-inactive": "#5072ac",
            "link-disabled": "#708fc5",
            "required-hover": "#d37569",
            "required-active": "#ce6056",
            "required-inactive": "#ac3232",
            "required-disabled": "#bf5f57"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#444548",
            "border": "#6a6a6a",
            "backdrop": "#35322666",
            "background-hover": "#545558",
            "background-active": "#4c4d50",
            "background-inactive": "#3a3b3f",
            "background-disabled": "#444547",
            "border-hover": "#888888",
            "border-active": "#797979",
            "border-disabled": "#6a6a6a66"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#d9d9d900"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
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
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#ffe1e1",
            "2": "#ffaaaa",
            "3": "#ff7373",
            "4": "#ff4d97",
            "5": "#ff3d3d",
            "6": "#ff0606",
            "7": "#ff0404",
            "8": "#d22c00",
            "9": "#be0000",
            "10": "#7e0000",
            "11": "#3d0000",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#e6fbce",
            "2": "#caf694",
            "3": "#acf15a",
            "4": "#dbdb58",
            "5": "#90ec20",
            "6": "#70cc00",
            "7": "#81c71e",
            "8": "#55b30f",
            "9": "#529500",
            "10": "#335d00",
            "11": "#142400",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#bedbff",
            "2": "#bdd4ff",
            "3": "#abcaff",
            "4": "#9abeff",
            "5": "#88b3ff",
            "6": "#6aabff",
            "7": "#77a8ff",
            "8": "#659dff",
            "9": "#5493ff",
            "10": "#4387ff",
            "11": "#1772ff",
            "12": "#1a60bb"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#ffffff",
            "2": "#ccfff4",
            "3": "#dff9f7",
            "4": "#98ffe8",
            "5": "#63ffdd",
            "6": "#2effd0",
            "7": "#0ed2a6",
            "8": "#00bcad",
            "9": "#078a6d",
            "10": "#024233",
            "11": "#000000",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#eefdf7",
            "2": "#c1f9e2",
            "3": "#94f5cc",
            "4": "#66f0b7",
            "5": "#64e6a6",
            "6": "#39eca1",
            "7": "#2de498",
            "8": "#1ebf7b",
            "9": "#008b58",
            "10": "#11734a",
            "11": "#003e27",
            "12": "#010705"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#ffffff",
            "4": "#ffffff",
            "5": "#ffffff",
            "6": "#dadada",
            "7": "#adadad",
            "8": "#535353",
            "9": "#2f2f2f",
            "10": "#1b1b1b",
            "11": "#08080a",
            "12": "#000000",
            "13": "#000000",
            "14": "#000000"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#fff7f4",
            "2": "#ffe5d8",
            "3": "#ffd1ba",
            "4": "#ffc2a4",
            "5": "#ffbc9a",
            "6": "#ffac81",
            "7": "#ff9760",
            "8": "#ff803a",
            "9": "#ff7a30",
            "10": "#ff7224",
            "11": "#c44d0d",
            "12": "#a5410a"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#ffffff",
            "2": "#fff1fa",
            "3": "#ffdcea",
            "4": "#ffcdeb",
            "5": "#ffaade",
            "6": "#ff85d0",
            "7": "#ff81b6",
            "8": "#f976c6",
            "9": "#dc50a6",
            "10": "#b3386a",
            "11": "#932b6b",
            "12": "#1c0815"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#fcfcff",
            "4": "#f6f2ff",
            "5": "#e1d7ff",
            "6": "#cdbbff",
            "7": "#c6c5ff",
            "8": "#bba2ff",
            "9": "#8e6eeb",
            "10": "#5553c5",
            "11": "#5538a7",
            "12": "#140d27"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#fcb3d6",
            "2": "#ff7a95",
            "3": "#ff708d",
            "4": "#f6365e",
            "5": "#f00a45",
            "6": "#ca0632",
            "7": "#a20322",
            "8": "#820c00",
            "9": "#790116",
            "10": "#51000b",
            "11": "#260004",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#ffffff",
            "2": "#e5f7fe",
            "3": "#bdecfd",
            "4": "#99e2fc",
            "5": "#73d7fa",
            "6": "#48d6ff",
            "7": "#64cff3",
            "8": "#44b1d5",
            "9": "#0098c4",
            "10": "#25728c",
            "11": "#004f67",
            "12": "#061217"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#ffe8c1",
            "2": "#ffdda2",
            "3": "#ffd285",
            "4": "#ffc767",
            "5": "#ffbc4a",
            "6": "#ffc457",
            "7": "#f39e03",
            "8": "#b27b00",
            "9": "#a76d00",
            "10": "#5d4000",
            "11": "#583b00",
            "12": "#0d0900"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary subtle background color for the dark theme"}
      colors={{
            "base": "#1b1b1b",
            "brand": "#000000",
            "danger": "#000000",
            "negative": "#3d0000",
            "warning": "#0d0900",
            "success": "#010705",
            "positive": "#000000",
            "info": "#061217",
            "discovery": "#140d27",
            "base-hover": "#434343",
            "base-active": "#2f2f2f",
            "base-inactive": "#010101",
            "base-disabled": "#1b1b1b66",
            "brand-hover": "#10352b",
            "brand-active": "#051914",
            "brand-inactive": "#000000",
            "brand-disabled": "#010303",
            "danger-hover": "#210505",
            "danger-active": "#080001",
            "danger-inactive": "#000000",
            "danger-disabled": "#000000",
            "negative-hover": "#9d1509",
            "negative-active": "#720800",
            "negative-inactive": "#1a0000",
            "negative-disabled": "#4b0600",
            "warning-hover": "#543c13",
            "warning-active": "#342406",
            "warning-inactive": "#000000",
            "warning-disabled": "#191104",
            "success-hover": "#18432f",
            "success-active": "#0b281b",
            "success-inactive": "#000000",
            "success-disabled": "#050f0b",
            "positive-hover": "#21350c",
            "positive-active": "#0c1502",
            "positive-inactive": "#000000",
            "positive-disabled": "#010100",
            "info-hover": "#20404d",
            "info-active": "#112933",
            "info-inactive": "#000000",
            "info-disabled": "#091418",
            "discovery-hover": "#312556",
            "discovery-active": "#22193f",
            "discovery-inactive": "#020105",
            "discovery-disabled": "#120d21"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#535353",
            "brand": "#0ed2a6",
            "danger": "#f00a45",
            "negative": "#ff0606",
            "warning": "#f39e03",
            "success": "#2de498",
            "positive": "#70cc00",
            "info": "#64cff3",
            "discovery": "#bba2ff",
            "base-subtle": "#2f2f2f",
            "brand-subtle": "#024233",
            "danger-subtle": "#260004",
            "negative-subtle": "#3d0000",
            "warning-subtle": "#a76d00",
            "success-subtle": "#11734a",
            "positive-subtle": "#e6fbce",
            "info-subtle": "#25728c",
            "discovery-subtle": "#5538a7",
            "base-hover": "#929292",
            "base-active": "#727272",
            "base-disabled": "#53535366",
            "brand-hover": "#bdffef",
            "brand-active": "#59fcd3",
            "brand-disabled": "#42cfaa",
            "danger-hover": "#ff9aad",
            "danger-active": "#ff5779",
            "danger-disabled": "#dc2c4e",
            "negative-hover": "#ff8d7e",
            "negative-active": "#ff5b4d",
            "negative-disabled": "#ff4131",
            "warning-hover": "#ffe8ab",
            "warning-active": "#ffc568",
            "warning-disabled": "#e6a339",
            "success-hover": "#dafff1",
            "success-active": "#85ffc9",
            "success-disabled": "#5ddba1",
            "positive-hover": "#d6ffab",
            "positive-active": "#a5ff4e",
            "positive-disabled": "#83da36",
            "info-hover": "#fcffff",
            "info-active": "#c4f0ff",
            "info-disabled": "#7ecde9",
            "discovery-hover": "#ffffff",
            "discovery-active": "#eee7ff",
            "discovery-disabled": "#b19bf6",
            "base-subtle-hover": "#5f5f5f",
            "base-subtle-active": "#464646",
            "base-subtle-disabled": "#2f2f2f66",
            "brand-subtle-hover": "#30987b",
            "brand-subtle-active": "#186f59",
            "brand-subtle-disabled": "#154c3d",
            "danger-subtle-hover": "#651316",
            "danger-subtle-active": "#47080c",
            "danger-subtle-disabled": "#260507",
            "negative-subtle-hover": "#9d1509",
            "negative-subtle-active": "#720800",
            "negative-subtle-disabled": "#4b0600",
            "warning-subtle-hover": "#fcbf5b",
            "warning-subtle-active": "#e19921",
            "warning-subtle-disabled": "#a87521",
            "success-subtle-hover": "#51ca90",
            "success-subtle-active": "#2da36d",
            "success-subtle-disabled": "#277751",
            "positive-subtle-hover": "#729a3e",
            "positive-subtle-active": "#abd37c",
            "positive-subtle-disabled": "#edfadd",
            "info-subtle-hover": "#6bbad7",
            "info-subtle-active": "#4098b8",
            "info-subtle-disabled": "#347186",
            "discovery-subtle-hover": "#957fe2",
            "discovery-subtle-active": "#7257c8",
            "discovery-subtle-disabled": "#533e96"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#ffffff",
            "brand": "#0ed2a6",
            "danger": "#f00a45",
            "negative": "#ff0606",
            "warning": "#f39e03",
            "success": "#2de498",
            "positive": "#70cc00",
            "info": "#64cff3",
            "discovery": "#bba2ff",
            "base-inverse": "#000000",
            "brand-inverse": "#ffffff",
            "danger-inverse": "#ffffff",
            "negative-inverse": "#ffffff",
            "warning-inverse": "#ffffff",
            "success-inverse": "#ffffff",
            "positive-inverse": "#ffffff",
            "info-inverse": "#ffffff",
            "discovery-inverse": "#ffffff",
            "base-hover": "#a7a7a7",
            "base-active": "#eaeaea",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#bdffef",
            "brand-active": "#59fcd3",
            "brand-inactive": "#005d49",
            "brand-disabled": "#42cfaa",
            "danger-hover": "#ff9aad",
            "danger-active": "#ff5779",
            "danger-inactive": "#7f002a",
            "danger-disabled": "#c3c3c3",
            "negative-hover": "#ff8d7e",
            "negative-active": "#ff5b4d",
            "negative-inactive": "#bb0000",
            "negative-disabled": "#a4a4a4",
            "warning-hover": "#ffe8ab",
            "warning-active": "#ffc568",
            "warning-inactive": "#7b4f00",
            "warning-disabled": "#e6a339",
            "success-hover": "#dafff1",
            "success-active": "#85ffc9",
            "success-inactive": "#006a46",
            "success-disabled": "#5ddba1",
            "positive-hover": "#d6ffab",
            "positive-active": "#a5ff4e",
            "positive-inactive": "#316400",
            "positive-disabled": "#83da36",
            "info-hover": "#fcffff",
            "info-active": "#c4f0ff",
            "info-inactive": "#158eb3",
            "info-disabled": "#7ecde9",
            "discovery-hover": "#ffffff",
            "discovery-active": "#eee7ff",
            "discovery-inactive": "#7347dc",
            "discovery-disabled": "#b19bf6",
            "base-inverse-hover": "#010101",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#000000",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#000000",
            "brand-inverse-active": "#eaeaea",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#ffffff66",
            "danger-inverse-hover": "#000000",
            "danger-inverse-active": "#eaeaea",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#c3c3c3",
            "negative-inverse-hover": "#000000",
            "negative-inverse-active": "#eaeaea",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#ffffff66",
            "warning-inverse-hover": "#000000",
            "warning-inverse-active": "#eaeaea",
            "warning-inverse-inactive": "#ffffff",
            "warning-inverse-disabled": "#ffffff66",
            "success-inverse-hover": "#000000",
            "success-inverse-active": "#eaeaea",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#ffffff66",
            "positive-inverse-hover": "#000000",
            "positive-inverse-active": "#eaeaea",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#ffffff66",
            "info-inverse-hover": "#000000",
            "info-inverse-active": "#eaeaea",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#ffffff66",
            "discovery-inverse-hover": "#000000",
            "discovery-inverse-active": "#eaeaea",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#ffffff66",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#e5fffe",
            "danger-ghost-hover": "#ffffff",
            "negative-ghost-hover": "#ffffff",
            "warning-ghost-hover": "#fffedb",
            "success-ghost-hover": "#feffff",
            "positive-ghost-hover": "#edffcf",
            "info-ghost-hover": "#ffffff",
            "discovery-ghost-hover": "#ffffff",
            "base-inverse-ghost-hover": "#3c3c43"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the dark theme"}
      colors={{
            "lowest": "#000000",
            "page": "#000000",
            "elevated": "#000000",
            "floating": "#08080a",
            "highest": "#2f2f2f",
            "lowest-hover": "#000000",
            "lowest-active": "#000000",
            "lowest-inactive": "#000000",
            "lowest-disabled": "#000000",
            "page-hover": "#0e0e10",
            "page-active": "#020202",
            "page-inactive": "#000000",
            "page-disabled": "#000000",
            "elevated-hover": "#18191d",
            "elevated-active": "#0b0c0e",
            "elevated-inactive": "#000000",
            "elevated-disabled": "#000000",
            "floating-hover": "#25282e",
            "floating-active": "#16171b",
            "floating-inactive": "#000000",
            "floating-disabled": "#070709",
            "highest-hover": "#5f5f5f",
            "highest-active": "#464646",
            "highest-inactive": "#111111",
            "highest-disabled": "#2f2f2f66"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#000000"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the dark theme"}
      colors={{
            "neutral.emphasis": "#ffffff",
            "neutral.subtle": "#000000",
            "brand.emphasis": "#ffffff",
            "brand.subtle": "#ccfff4",
            "red.emphasis": "#a20322",
            "red.subtle": "#000000",
            "orange.emphasis": "#ffac81",
            "orange.subtle": "#c44d0d",
            "yellow.emphasis": "#ffbc4a",
            "yellow.subtle": "#0d0900",
            "green.emphasis": "#39eca1",
            "green.subtle": "#11734a",
            "sky.emphasis": "#73d7fa",
            "sky.subtle": "#061217",
            "blue.emphasis": "#77a8ff",
            "blue.subtle": "#1772ff",
            "purple.emphasis": "#cdbbff",
            "purple.subtle": "#140d27",
            "pink.emphasis": "#ff85d0",
            "pink.subtle": "#1c0815"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the dark theme"}
      colors={{
            "body": "#dadada",
            "eyebrow": "#535353",
            "caption": "#adadad",
            "link": "#77a8ff",
            "required": "#ff0606",
            "body-hover": "#707070",
            "body-active": "#a3a3a3",
            "body-inactive": "#ffffff",
            "body-disabled": "#dadada66",
            "eyebrow-hover": "#929292",
            "eyebrow-active": "#727272",
            "eyebrow-inactive": "#2c2c2c",
            "eyebrow-disabled": "#53535366",
            "caption-hover": "#ffffff",
            "caption-active": "#dddddd",
            "caption-inactive": "#707070",
            "caption-disabled": "#adadad66",
            "link-hover": "#cfecff",
            "link-active": "#a2ccff",
            "link-inactive": "#065df3",
            "link-disabled": "#6ea3ff",
            "required-hover": "#ff8d7e",
            "required-active": "#ff5b4d",
            "required-inactive": "#bb0000",
            "required-disabled": "#ff4131"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#08080a",
            "border": "#535353",
            "backdrop": "#00000066",
            "background-hover": "#25282e",
            "background-active": "#16171b",
            "background-inactive": "#000000",
            "background-disabled": "#070709",
            "border-hover": "#929292",
            "border-active": "#727272",
            "border-disabled": "#53535366"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#ffffff00"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
      colors={{
            "white": "#ffffff"
      }}
    />
        </ColorPalette>
      </section>
    </>
  ),
  "darkMonochromatic": (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#b7b7b7",
            "2": "#a0a0a0",
            "3": "#8f8f8f",
            "4": "#878787",
            "5": "#848484",
            "6": "#7f7f7f",
            "7": "#727272",
            "8": "#707070",
            "9": "#676767",
            "10": "#505050",
            "11": "#393939",
            "12": "#222222"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#dddddd",
            "2": "#d1d1d1",
            "3": "#c5c5c5",
            "4": "#bdbdbd",
            "5": "#bababa",
            "6": "#afafaf",
            "7": "#a4a4a4",
            "8": "#979797",
            "9": "#939393",
            "10": "#757575",
            "11": "#565656",
            "12": "#373737"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#b7b7b7",
            "2": "#afafaf",
            "3": "#a8a8a8",
            "4": "#a1a1a1",
            "5": "#999999",
            "6": "#989898",
            "7": "#939393",
            "8": "#8c8c8c",
            "9": "#878787",
            "10": "#808080",
            "11": "#767676",
            "12": "#686868"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#eaeaea",
            "2": "#e1e1e1",
            "3": "#dadada",
            "4": "#d9d9d9",
            "5": "#d2d2d2",
            "6": "#cccccc",
            "7": "#a8a8a8",
            "8": "#9f9f9f",
            "9": "#828282",
            "10": "#5c5c5c",
            "11": "#353535",
            "12": "#292929"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#e0e0e0",
            "2": "#d5d5d5",
            "3": "#cbcbcb",
            "4": "#c1c1c1",
            "5": "#b9b9b9",
            "6": "#b8b8b8",
            "7": "#b1b1b1",
            "8": "#9b9b9b",
            "9": "#999999",
            "10": "#727272",
            "11": "#6a6a6a",
            "12": "#393939"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#fafafa",
            "2": "#f1f1f1",
            "3": "#eaeaea",
            "4": "#e1e1e1",
            "5": "#dcdcdc",
            "6": "#bebebe",
            "7": "#9f9f9f",
            "8": "#616161",
            "9": "#484848",
            "10": "#3a3a3a",
            "11": "#2c2c2c",
            "12": "#252525",
            "13": "#1f1f1f",
            "14": "#1b1b1b"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#d1d1d1",
            "2": "#c8c8c8",
            "3": "#bebebe",
            "4": "#b7b7b7",
            "5": "#b4b4b4",
            "6": "#adadad",
            "7": "#a4a4a4",
            "8": "#999999",
            "9": "#979797",
            "10": "#919191",
            "11": "#747474",
            "12": "#686868"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#d4d4d4",
            "2": "#c6c6c6",
            "3": "#b8b8b8",
            "4": "#b7b7b7",
            "5": "#a9a9a9",
            "6": "#9c9c9c",
            "7": "#989898",
            "8": "#959595",
            "9": "#808080",
            "10": "#6a6a6a",
            "11": "#5d5d5d",
            "12": "#2e2e2e"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#d5d5d5",
            "2": "#c6c6c6",
            "3": "#b8b8b8",
            "4": "#b7b7b7",
            "5": "#a8a8a8",
            "6": "#9a9a9a",
            "7": "#989898",
            "8": "#929292",
            "9": "#7d7d7d",
            "10": "#696969",
            "11": "#5b5b5b",
            "12": "#2c2c2c"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#ababab",
            "2": "#929292",
            "3": "#8f8f8f",
            "4": "#7b7b7b",
            "5": "#6f6f6f",
            "6": "#626262",
            "7": "#545454",
            "8": "#4f4f4f",
            "9": "#474747",
            "10": "#3a3a3a",
            "11": "#2d2d2d",
            "12": "#1b1b1b"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#e1e1e1",
            "2": "#d5d5d5",
            "3": "#cbcbcb",
            "4": "#c1c1c1",
            "5": "#b7b7b7",
            "6": "#b7b7b7",
            "7": "#b0b0b0",
            "8": "#989898",
            "9": "#9a9a9a",
            "10": "#707070",
            "11": "#6b6b6b",
            "12": "#373737"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#d9d9d9",
            "2": "#d3d3d3",
            "3": "#cdcdcd",
            "4": "#c7c7c7",
            "5": "#c2c2c2",
            "6": "#b9b9b9",
            "7": "#a0a0a0",
            "8": "#979797",
            "9": "#7f7f7f",
            "10": "#6b6b6b",
            "11": "#5d5d5d",
            "12": "#3b3b3b"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary subtle background color for the dark theme"}
      colors={{
            "base": "#3a3a3a",
            "brand": "#353535",
            "danger": "#1b1b1b",
            "negative": "#393939",
            "warning": "#3b3b3b",
            "success": "#393939",
            "positive": "#373737",
            "info": "#373737",
            "discovery": "#2c2c2c",
            "base-hover": "#565656",
            "base-active": "#484848",
            "base-inactive": "#282828",
            "base-disabled": "#3a3a3a66",
            "brand-hover": "#4e4e4e",
            "brand-active": "#414141",
            "brand-inactive": "#252525",
            "brand-disabled": "#343434",
            "danger-hover": "#2c2c2c",
            "danger-active": "#232323",
            "danger-inactive": "#121212",
            "danger-disabled": "#1c1c1c",
            "negative-hover": "#565656",
            "negative-active": "#474747",
            "negative-inactive": "#2c2c2c",
            "negative-disabled": "#3a3a3a",
            "warning-hover": "#575757",
            "warning-active": "#494949",
            "warning-inactive": "#292929",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#545454",
            "success-active": "#474747",
            "success-inactive": "#282828",
            "success-disabled": "#393939",
            "positive-hover": "#515151",
            "positive-active": "#444444",
            "positive-inactive": "#272727",
            "positive-disabled": "#373737",
            "info-hover": "#525252",
            "info-active": "#444444",
            "info-inactive": "#262626",
            "info-disabled": "#373737",
            "discovery-hover": "#434343",
            "discovery-active": "#383838",
            "discovery-inactive": "#1e1e1e",
            "discovery-disabled": "#2d2d2d"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#616161",
            "brand": "#a8a8a8",
            "danger": "#6f6f6f",
            "negative": "#7f7f7f",
            "warning": "#a0a0a0",
            "success": "#b1b1b1",
            "positive": "#afafaf",
            "info": "#b0b0b0",
            "discovery": "#929292",
            "base-subtle": "#484848",
            "brand-subtle": "#5c5c5c",
            "danger-subtle": "#2d2d2d",
            "negative-subtle": "#393939",
            "warning-subtle": "#7f7f7f",
            "success-subtle": "#727272",
            "positive-subtle": "#dddddd",
            "info-subtle": "#707070",
            "discovery-subtle": "#5b5b5b",
            "base-hover": "#8c8c8c",
            "base-active": "#767676",
            "base-disabled": "#61616166",
            "brand-hover": "#e9e9e9",
            "brand-active": "#c9c9c9",
            "brand-disabled": "#a6a6a6",
            "danger-hover": "#9c9c9c",
            "danger-active": "#888888",
            "danger-disabled": "#707070",
            "negative-hover": "#9a9a9a",
            "negative-active": "#8b8b8b",
            "negative-disabled": "#818181",
            "warning-hover": "#dedede",
            "warning-active": "#c2c2c2",
            "warning-disabled": "#a1a1a1",
            "success-hover": "#ebebeb",
            "success-active": "#d5d5d5",
            "success-disabled": "#b0b0b0",
            "positive-hover": "#ececec",
            "positive-active": "#d3d3d3",
            "positive-disabled": "#aeaeae",
            "info-hover": "#f1f1f1",
            "info-active": "#d4d4d4",
            "info-disabled": "#b0b0b0",
            "discovery-hover": "#cccccc",
            "discovery-active": "#afafaf",
            "discovery-disabled": "#939393",
            "base-subtle-hover": "#696969",
            "base-subtle-active": "#585858",
            "base-subtle-disabled": "#48484866",
            "brand-subtle-hover": "#858585",
            "brand-subtle-active": "#707070",
            "brand-subtle-disabled": "#5b5b5b",
            "danger-subtle-hover": "#444444",
            "danger-subtle-active": "#383838",
            "danger-subtle-disabled": "#2d2d2d",
            "negative-subtle-hover": "#565656",
            "negative-subtle-active": "#474747",
            "negative-subtle-disabled": "#3a3a3a",
            "warning-subtle-hover": "#b6b6b6",
            "warning-subtle-active": "#9a9a9a",
            "warning-subtle-disabled": "#7f7f7f",
            "success-subtle-hover": "#a3a3a3",
            "success-subtle-active": "#8a8a8a",
            "success-subtle-disabled": "#727272",
            "positive-subtle-hover": "#898989",
            "positive-subtle-active": "#b2b2b2",
            "positive-subtle-disabled": "#dddddd",
            "info-subtle-hover": "#a1a1a1",
            "info-subtle-active": "#888888",
            "info-subtle-disabled": "#707070",
            "discovery-subtle-hover": "#858585",
            "discovery-subtle-active": "#6f6f6f",
            "discovery-subtle-disabled": "#5b5b5b"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#fafafa",
            "brand": "#a8a8a8",
            "danger": "#6f6f6f",
            "negative": "#7f7f7f",
            "warning": "#a0a0a0",
            "success": "#b1b1b1",
            "positive": "#afafaf",
            "info": "#b0b0b0",
            "discovery": "#929292",
            "base-inverse": "#0c0c0c",
            "brand-inverse": "#fafafa",
            "danger-inverse": "#fafafa",
            "negative-inverse": "#fafafa",
            "warning-inverse": "#fafafa",
            "success-inverse": "#fafafa",
            "positive-inverse": "#fafafa",
            "info-inverse": "#fafafa",
            "discovery-inverse": "#fafafa",
            "base-hover": "#9b9b9b",
            "base-active": "#c9c9c9",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#e9e9e9",
            "brand-active": "#c9c9c9",
            "brand-inactive": "#7e7e7e",
            "brand-disabled": "#a6a6a6",
            "danger-hover": "#9c9c9c",
            "danger-active": "#888888",
            "danger-inactive": "#525252",
            "danger-disabled": "#aeaeae",
            "negative-hover": "#9a9a9a",
            "negative-active": "#8b8b8b",
            "negative-inactive": "#666666",
            "negative-disabled": "#999999",
            "warning-hover": "#dedede",
            "warning-active": "#c2c2c2",
            "warning-inactive": "#767676",
            "warning-disabled": "#a1a1a1",
            "success-hover": "#ebebeb",
            "success-active": "#d5d5d5",
            "success-inactive": "#858585",
            "success-disabled": "#b0b0b0",
            "positive-hover": "#ececec",
            "positive-active": "#d3d3d3",
            "positive-inactive": "#838383",
            "positive-disabled": "#aeaeae",
            "info-hover": "#f1f1f1",
            "info-active": "#d4d4d4",
            "info-inactive": "#828282",
            "info-disabled": "#b0b0b0",
            "discovery-hover": "#cccccc",
            "discovery-active": "#afafaf",
            "discovery-inactive": "#6a6a6a",
            "discovery-disabled": "#939393",
            "base-inverse-hover": "#282828",
            "base-inverse-active": "#111111",
            "base-inverse-inactive": "#060606",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#151515",
            "brand-inverse-active": "#c9c9c9",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#fafafa66",
            "danger-inverse-hover": "#151515",
            "danger-inverse-active": "#c9c9c9",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#aeaeae",
            "negative-inverse-hover": "#151515",
            "negative-inverse-active": "#c9c9c9",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#fafafa66",
            "warning-inverse-hover": "#151515",
            "warning-inverse-active": "#c9c9c9",
            "warning-inverse-inactive": "#ffffff",
            "warning-inverse-disabled": "#fafafa66",
            "success-inverse-hover": "#151515",
            "success-inverse-active": "#c9c9c9",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#fafafa66",
            "positive-inverse-hover": "#151515",
            "positive-inverse-active": "#c9c9c9",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#fafafa66",
            "info-inverse-hover": "#151515",
            "info-inverse-active": "#c9c9c9",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#fafafa66",
            "discovery-inverse-hover": "#151515",
            "discovery-inverse-active": "#c9c9c9",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#fafafa66",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#eeeeee",
            "danger-ghost-hover": "#d7d7d7",
            "negative-ghost-hover": "#d7d7d7",
            "warning-ghost-hover": "#f7f7f7",
            "success-ghost-hover": "#f0f0f0",
            "positive-ghost-hover": "#f0f0f0",
            "info-ghost-hover": "#f3f3f3",
            "discovery-ghost-hover": "#f4f4f4",
            "base-inverse-ghost-hover": "#535353"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the dark theme"}
      colors={{
            "lowest": "#0c0c0c",
            "page": "#1f1f1f",
            "elevated": "#252525",
            "floating": "#2c2c2c",
            "highest": "#484848",
            "lowest-hover": "#161616",
            "lowest-active": "#111111",
            "lowest-inactive": "#060606",
            "lowest-disabled": "#0c0c0c",
            "page-hover": "#313131",
            "page-active": "#282828",
            "page-inactive": "#141414",
            "page-disabled": "#1f1f1f",
            "elevated-hover": "#393939",
            "elevated-active": "#2f2f2f",
            "elevated-inactive": "#191919",
            "elevated-disabled": "#252525",
            "floating-hover": "#434343",
            "floating-active": "#373737",
            "floating-inactive": "#1e1e1e",
            "floating-disabled": "#2c2c2c",
            "highest-hover": "#696969",
            "highest-active": "#585858",
            "highest-inactive": "#333333",
            "highest-disabled": "#48484866"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#0c0c0c"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the dark theme"}
      colors={{
            "neutral.emphasis": "#fafafa",
            "neutral.subtle": "#1b1b1b",
            "brand.emphasis": "#eaeaea",
            "brand.subtle": "#e1e1e1",
            "red.emphasis": "#545454",
            "red.subtle": "#1b1b1b",
            "orange.emphasis": "#adadad",
            "orange.subtle": "#747474",
            "yellow.emphasis": "#c2c2c2",
            "yellow.subtle": "#3b3b3b",
            "green.emphasis": "#b8b8b8",
            "green.subtle": "#727272",
            "sky.emphasis": "#b7b7b7",
            "sky.subtle": "#373737",
            "blue.emphasis": "#939393",
            "blue.subtle": "#767676",
            "purple.emphasis": "#9a9a9a",
            "purple.subtle": "#2c2c2c",
            "pink.emphasis": "#9c9c9c",
            "pink.subtle": "#2e2e2e"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the dark theme"}
      colors={{
            "body": "#bebebe",
            "eyebrow": "#616161",
            "caption": "#9f9f9f",
            "link": "#939393",
            "required": "#7f7f7f",
            "body-hover": "#757575",
            "body-active": "#989898",
            "body-inactive": "#f2f2f2",
            "body-disabled": "#bebebe66",
            "eyebrow-hover": "#8c8c8c",
            "eyebrow-active": "#767676",
            "eyebrow-inactive": "#464646",
            "eyebrow-disabled": "#61616166",
            "caption-hover": "#e2e2e2",
            "caption-active": "#c0c0c0",
            "caption-inactive": "#757575",
            "caption-disabled": "#9f9f9f66",
            "link-hover": "#cbcbcb",
            "link-active": "#aeaeae",
            "link-inactive": "#6b6b6b",
            "link-disabled": "#939393",
            "required-hover": "#9a9a9a",
            "required-active": "#8b8b8b",
            "required-inactive": "#666666",
            "required-disabled": "#818181"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#2c2c2c",
            "border": "#616161",
            "backdrop": "#0c0c0c66",
            "background-hover": "#434343",
            "background-active": "#373737",
            "background-inactive": "#1e1e1e",
            "background-disabled": "#2c2c2c",
            "border-hover": "#8c8c8c",
            "border-active": "#767676",
            "border-disabled": "#61616166"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#ffffff00"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
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
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#ff9b9b",
            "2": "#ff7575",
            "3": "#ff4f4f",
            "4": "#e3518e",
            "5": "#ff2a2a",
            "6": "#ff0404",
            "7": "#dc2626",
            "8": "#cd3a13",
            "9": "#d20000",
            "10": "#a60000",
            "11": "#790000",
            "12": "#4d0000"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#c8e7a3",
            "2": "#b4de81",
            "3": "#9fd55e",
            "4": "#c2c261",
            "5": "#8bcc3c",
            "6": "#76c319",
            "7": "#81b33a",
            "8": "#61a92c",
            "9": "#62a412",
            "10": "#4d830c",
            "11": "#386107",
            "12": "#243e04"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#83baff",
            "2": "#82afff",
            "3": "#76a8ff",
            "4": "#6aa0ff",
            "5": "#5e98ff",
            "6": "#4f99f9",
            "7": "#5291ff",
            "8": "#4689ff",
            "9": "#3a82ff",
            "10": "#2e7aff",
            "11": "#1d70f2",
            "12": "#3669ac"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#baf6e8",
            "2": "#9bf1de",
            "3": "#b1e4e0",
            "4": "#7bedd3",
            "5": "#5be8c9",
            "6": "#3be4be",
            "7": "#2dbc9c",
            "8": "#1fb2a6",
            "9": "#219279",
            "10": "#166855",
            "11": "#0c3c31",
            "12": "#052f2c"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#b7ebd5",
            "2": "#9ce4c6",
            "3": "#81ddb6",
            "4": "#66d5a7",
            "5": "#67cc9a",
            "6": "#4bce97",
            "7": "#45c791",
            "8": "#3aae7d",
            "9": "#00af6f",
            "10": "#29815c",
            "11": "#007a4d",
            "12": "#14412e"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#fafafa",
            "2": "#f1f1f1",
            "3": "#eaeaea",
            "4": "#e1e1e1",
            "5": "#dcdcdc",
            "6": "#bebebe",
            "7": "#9f9f9f",
            "8": "#616161",
            "9": "#484848",
            "10": "#3a3a3a",
            "11": "#2b2c30",
            "12": "#242528",
            "13": "#1f1f21",
            "14": "#1a1b1e"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#ffc5a8",
            "2": "#fcb998",
            "3": "#fcab83",
            "4": "#faa276",
            "5": "#f69f73",
            "6": "#f9935f",
            "7": "#f3874e",
            "8": "#ec7a3b",
            "9": "#e97737",
            "10": "#de743a",
            "11": "#b45b2b",
            "12": "#a25226"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#f5c7e4",
            "2": "#f2b3da",
            "3": "#fb9cc0",
            "4": "#ee9ecf",
            "5": "#eb89c5",
            "6": "#e774bb",
            "7": "#e96fa2",
            "8": "#df6db3",
            "9": "#c25c9b",
            "10": "#a34e71",
            "11": "#904272",
            "12": "#482039"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#dbcffd",
            "2": "#cdbdfc",
            "3": "#aeb1ff",
            "4": "#c0abfb",
            "5": "#b299fa",
            "6": "#a587f9",
            "7": "#8d8cfb",
            "8": "#9d7ff0",
            "9": "#866cd1",
            "10": "#6261af",
            "11": "#624e9b",
            "12": "#30264d"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#e791bb",
            "2": "#fb5879",
            "3": "#f75576",
            "4": "#d74765",
            "5": "#cf2d56",
            "6": "#b92647",
            "7": "#a21f39",
            "8": "#9a1c0f",
            "9": "#8a192d",
            "10": "#731421",
            "11": "#5a0f17",
            "12": "#3c050a"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#c4e7f3",
            "2": "#aeddee",
            "3": "#97d4e9",
            "4": "#81cbe5",
            "5": "#6bc2e0",
            "6": "#47c5ea",
            "7": "#64bbd8",
            "8": "#55a2bc",
            "9": "#00a6d6",
            "10": "#3d788c",
            "11": "#007496",
            "12": "#1d3b46"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#ffd285",
            "2": "#ffcb70",
            "3": "#ffc35c",
            "4": "#ffbb47",
            "5": "#ffb433",
            "6": "#e2b259",
            "7": "#d29527",
            "8": "#ca8b00",
            "9": "#a6761c",
            "10": "#8f6300",
            "11": "#795713",
            "12": "#4d370b"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary background color for the light theme"}
      colors={{
            "base": "#242528",
            "brand": "#0c3c31",
            "danger": "#9a1c0f",
            "negative": "#cd3a13",
            "warning": "#8f6300",
            "success": "#007a4d",
            "positive": "#61a92c",
            "info": "#007496",
            "discovery": "#6261af",
            "base-hover": "#121315",
            "base-active": "#1b1c1e",
            "base-inactive": "#313235",
            "base-disabled": "#242527",
            "brand-hover": "#00231a",
            "brand-active": "#003025",
            "brand-inactive": "#204d42",
            "brand-disabled": "#183a31",
            "danger-hover": "#6d0000",
            "danger-active": "#830000",
            "danger-inactive": "#b93c2d",
            "danger-disabled": "#8e3024",
            "negative-hover": "#920000",
            "negative-active": "#af1500",
            "negative-inactive": "#f5613e",
            "negative-disabled": "#be4d32",
            "warning-hover": "#5f3600",
            "warning-active": "#774c00",
            "warning-inactive": "#b08332",
            "warning-disabled": "#88662a",
            "success-hover": "#004d24",
            "success-active": "#006338",
            "success-inactive": "#36996a",
            "success-disabled": "#2c7752",
            "positive-hover": "#256c00",
            "positive-active": "#438a00",
            "positive-inactive": "#8ad45b",
            "positive-disabled": "#6da54a",
            "info-hover": "#004767",
            "info-active": "#005d7e",
            "info-inactive": "#3694b7",
            "info-disabled": "#2d728d",
            "discovery-hover": "#39337d",
            "discovery-active": "#4d4a96",
            "discovery-inactive": "#8081d2",
            "discovery-disabled": "#6364a2"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"The primary border color for the light theme"}
      colors={{
            "base": "#3a3a3a",
            "brand": "#166855",
            "danger": "#cf2d56",
            "negative": "#dc2626",
            "warning": "#d29527",
            "success": "#00af6f",
            "positive": "#81b33a",
            "info": "#47c5ea",
            "discovery": "#866cd1",
            "base-subtle": "#242528",
            "brand-subtle": "#0c3c31",
            "danger-subtle": "#9a1c0f",
            "negative-subtle": "#cd3a13",
            "warning-subtle": "#8f6300",
            "success-subtle": "#007a4d",
            "positive-subtle": "#61a92c",
            "info-subtle": "#007496",
            "discovery-subtle": "#6261af",
            "base-hover": "#202020",
            "base-active": "#2d2d2d",
            "base-disabled": "#3a3a3a66",
            "brand-hover": "#004130",
            "brand-active": "#005442",
            "brand-disabled": "#2d6556",
            "danger-hover": "#930028",
            "danger-active": "#b1003f",
            "danger-disabled": "#c0455d",
            "negative-hover": "#9d0000",
            "negative-active": "#bd0000",
            "negative-disabled": "#cb453c",
            "warning-hover": "#8d5400",
            "warning-active": "#af7400",
            "warning-disabled": "#c9994c",
            "success-hover": "#007136",
            "success-active": "#009052",
            "success-disabled": "#43aa77",
            "positive-hover": "#447100",
            "positive-active": "#629203",
            "positive-disabled": "#88b056",
            "info-hover": "#007c9f",
            "info-active": "#00a0c4",
            "info-disabled": "#67c2df",
            "discovery-hover": "#543696",
            "discovery-active": "#6c51b3",
            "discovery-disabled": "#8472c2",
            "base-subtle-hover": "#121315",
            "base-subtle-active": "#1b1c1e",
            "base-subtle-disabled": "#242527",
            "brand-subtle-hover": "#00231a",
            "brand-subtle-active": "#003025",
            "brand-subtle-disabled": "#183a31",
            "danger-subtle-hover": "#6d0000",
            "danger-subtle-active": "#830000",
            "danger-subtle-disabled": "#8e3024",
            "negative-subtle-hover": "#920000",
            "negative-subtle-active": "#af1500",
            "negative-subtle-disabled": "#be4d32",
            "warning-subtle-hover": "#5f3600",
            "warning-subtle-active": "#774c00",
            "warning-subtle-disabled": "#88662a",
            "success-subtle-hover": "#004d24",
            "success-subtle-active": "#006338",
            "success-subtle-disabled": "#2c7752",
            "positive-subtle-hover": "#256c00",
            "positive-subtle-active": "#438a00",
            "positive-subtle-disabled": "#6da54a",
            "info-subtle-hover": "#004767",
            "info-subtle-active": "#005d7e",
            "info-subtle-disabled": "#2d728d",
            "discovery-subtle-hover": "#39337d",
            "discovery-subtle-active": "#4d4a96",
            "discovery-subtle-disabled": "#6364a2"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the light theme"}
      colors={{
            "base": "#f1f1f1",
            "brand": "#166855",
            "danger": "#cf2d56",
            "negative": "#dc2626",
            "warning": "#d29527",
            "success": "#00af6f",
            "positive": "#81b33a",
            "info": "#47c5ea",
            "discovery": "#866cd1",
            "base-inverse": "#1a1b1e",
            "brand-inverse": "#f1f1f1",
            "danger-inverse": "#f1f1f1",
            "negative-inverse": "#f1f1f1",
            "warning-inverse": "#1a1b1e",
            "success-inverse": "#f1f1f1",
            "positive-inverse": "#f1f1f1",
            "info-inverse": "#f1f1f1",
            "discovery-inverse": "#f1f1f1",
            "base-hover": "#959595",
            "base-active": "#c2c2c2",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#004130",
            "brand-active": "#005442",
            "brand-inactive": "#38836f",
            "brand-disabled": "#999999",
            "danger-hover": "#930028",
            "danger-active": "#b1003f",
            "danger-inactive": "#f85777",
            "danger-disabled": "#acacac",
            "negative-hover": "#9d0000",
            "negative-active": "#bd0000",
            "negative-inactive": "#ff554b",
            "negative-disabled": "#252525",
            "warning-hover": "#8d5400",
            "warning-active": "#af7400",
            "warning-inactive": "#ffc25d",
            "warning-disabled": "#1d1d1d",
            "success-hover": "#007136",
            "success-active": "#009052",
            "success-inactive": "#50da97",
            "success-disabled": "#191919",
            "positive-hover": "#447100",
            "positive-active": "#629203",
            "positive-inactive": "#ade16b",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#007c9f",
            "info-active": "#00a0c4",
            "info-inactive": "#80f8ff",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#543696",
            "discovery-active": "#6c51b3",
            "discovery-inactive": "#aa91fa",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#46484b",
            "base-inverse-active": "#222326",
            "base-inverse-inactive": "#101114",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#141414",
            "brand-inverse-active": "#c2c2c2",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#f1f1f166",
            "danger-inverse-hover": "#141414",
            "danger-inverse-active": "#c2c2c2",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#141414",
            "negative-inverse-active": "#c2c2c2",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#252525",
            "warning-inverse-hover": "#46484b",
            "warning-inverse-active": "#222326",
            "warning-inverse-inactive": "#101114",
            "warning-inverse-disabled": "#1d1d1d",
            "success-inverse-hover": "#141414",
            "success-inverse-active": "#c2c2c2",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#141414",
            "positive-inverse-active": "#c2c2c2",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#141414",
            "info-inverse-active": "#c2c2c2",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#141414",
            "discovery-inverse-active": "#c2c2c2",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#427966",
            "danger-ghost-hover": "#eb636e",
            "negative-ghost-hover": "#fa6a59",
            "warning-ghost-hover": "#efaf6d",
            "success-ghost-hover": "#71cb8a",
            "positive-ghost-hover": "#9cce6e",
            "info-ghost-hover": "#85e4ff",
            "discovery-ghost-hover": "#9c83ea",
            "base-inverse-ghost-hover": "#8a8d90",
            "warning-inverse-ghost-hover": "#8a8d90"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the light theme"}
      colors={{
            "lowest": "#e1e1e1",
            "page": "#eaeaea",
            "elevated": "#f1f1f1",
            "floating": "#fafafa",
            "highest": "#ffffff",
            "link": "#4689ff",
            "lowest-hover": "#8b8b8b",
            "lowest-active": "#b5b5b5",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#e1e1e166",
            "page-hover": "#919191",
            "page-active": "#bcbcbc",
            "page-inactive": "#ffffff",
            "page-disabled": "#eaeaea66",
            "elevated-hover": "#959595",
            "elevated-active": "#c2c2c2",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#f1f1f166",
            "floating-hover": "#9b9b9b",
            "floating-active": "#c9c9c9",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#fafafa66",
            "highest-hover": "#9e9e9e",
            "highest-active": "#cecece",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff66",
            "link-hover": "#044bbc",
            "link-active": "#286add",
            "link-inactive": "#6db3ff",
            "link-disabled": "#578ce9"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the light theme"}
      colors={{
            "neutral.emphasis": "#484848",
            "neutral.subtle": "#f1f1f1",
            "brand.emphasis": "#b1e4e0",
            "brand.subtle": "#b1e4e0",
            "red.emphasis": "#cf2d56",
            "red.subtle": "#e791bb",
            "orange.emphasis": "#de743a",
            "orange.subtle": "#faa276",
            "yellow.emphasis": "#ca8b00",
            "yellow.subtle": "#e2b259",
            "green.emphasis": "#00af6f",
            "green.subtle": "#67cc9a",
            "sky.emphasis": "#00a6d6",
            "sky.subtle": "#47c5ea",
            "blue.emphasis": "#4f99f9",
            "blue.subtle": "#83baff",
            "purple.emphasis": "#8d8cfb",
            "purple.subtle": "#aeb1ff",
            "pink.emphasis": "#e96fa2",
            "pink.subtle": "#fb9cc0"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the light theme"}
      colors={{
            "body": "#9f9f9f",
            "eyebrow": "#484848",
            "caption": "#616161",
            "link": "#4689ff",
            "required": "#dc2626",
            "body-hover": "#616161",
            "body-active": "#7f7f7f",
            "body-inactive": "#cbcbcb",
            "body-disabled": "#9f9f9f66",
            "eyebrow-hover": "#292929",
            "eyebrow-active": "#383838",
            "eyebrow-inactive": "#5e5e5e",
            "eyebrow-disabled": "#48484866",
            "caption-hover": "#393939",
            "caption-active": "#4d4d4d",
            "caption-inactive": "#7d7d7d",
            "caption-disabled": "#61616166",
            "link-hover": "#044bbc",
            "link-active": "#286add",
            "link-inactive": "#6db3ff",
            "link-disabled": "#3a3a3a",
            "required-hover": "#9d0000",
            "required-active": "#bd0000",
            "required-inactive": "#ff554b",
            "required-disabled": "#cb453c"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#fafafa",
            "border": "#3a3a3a",
            "backdrop": "#1a1c1f66",
            "background-hover": "#9b9b9b",
            "background-active": "#c9c9c9",
            "background-inactive": "#ffffff",
            "background-disabled": "#fafafa66",
            "border-hover": "#202020",
            "border-active": "#2d2d2d",
            "border-disabled": "#3a3a3a66"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#ffffff00"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
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
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#de8d8d",
            "2": "#d87979",
            "3": "#d26464",
            "4": "#bd678b",
            "5": "#cc5050",
            "6": "#c63c3c",
            "7": "#b34e4e",
            "8": "#aa563f",
            "9": "#ad3232",
            "10": "#952b2b",
            "11": "#7d2424",
            "12": "#651d1d"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#b2ca97",
            "2": "#a4bf83",
            "3": "#95b56e",
            "4": "#a8a870",
            "5": "#87ab5b",
            "6": "#78a442",
            "7": "#7f9b57",
            "8": "#6b954c",
            "9": "#6a9339",
            "10": "#5c8130",
            "11": "#4e6e27",
            "12": "#405b20"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#80a8da",
            "2": "#80a0da",
            "3": "#799cd8",
            "4": "#7397d6",
            "5": "#6c92d4",
            "6": "#6592cd",
            "7": "#668dd3",
            "8": "#5f88d1",
            "9": "#5984cf",
            "10": "#527fcd",
            "11": "#4978c1",
            "12": "#547197"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#a2d9cc",
            "2": "#90d1c3",
            "3": "#a0c8c5",
            "4": "#7ecab9",
            "5": "#6cc2af",
            "6": "#5abba5",
            "7": "#4fa08e",
            "8": "#449a93",
            "9": "#428878",
            "10": "#357062",
            "11": "#28574c",
            "12": "#1f524e"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#a3cebc",
            "2": "#93c7b1",
            "3": "#83bfa5",
            "4": "#73b69a",
            "5": "#74b092",
            "6": "#63ae8f",
            "7": "#60a88a",
            "8": "#57987d",
            "9": "#2d9a72",
            "10": "#467e66",
            "11": "#247d5d",
            "12": "#305847"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#d5d5d5",
            "2": "#cfcfcf",
            "3": "#cacaca",
            "4": "#c4c4c4",
            "5": "#c0c0c0",
            "6": "#ababab",
            "7": "#969696",
            "8": "#6a6a6a",
            "9": "#595959",
            "10": "#4f4f4f",
            "11": "#444548",
            "12": "#3f4043",
            "13": "#3c3c3e",
            "14": "#38393c"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#e0ae95",
            "2": "#dba68d",
            "3": "#d89e81",
            "4": "#d4987a",
            "5": "#d09679",
            "6": "#d08f6d",
            "7": "#c98764",
            "8": "#c17f5a",
            "9": "#be7d58",
            "10": "#b77b5a",
            "11": "#9c694d",
            "12": "#916247"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#d9aac8",
            "2": "#d59fc0",
            "3": "#da8fac",
            "4": "#cf93b8",
            "5": "#ca87b0",
            "6": "#c57ba8",
            "7": "#c67898",
            "8": "#be77a3",
            "9": "#a86d91",
            "10": "#926376",
            "11": "#875975",
            "12": "#5a3b4f"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#baabe3",
            "2": "#b1a1e0",
            "3": "#989ae1",
            "4": "#aa97dc",
            "5": "#a18ed9",
            "6": "#9984d6",
            "7": "#8786d8",
            "8": "#9580cd",
            "9": "#8677b4",
            "10": "#70709b",
            "11": "#6d628e",
            "12": "#47405d"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#c88ca9",
            "2": "#d0697e",
            "3": "#cd687d",
            "4": "#b46172",
            "5": "#ab5268",
            "6": "#9e4a5d",
            "7": "#914252",
            "8": "#8d3e35",
            "9": "#843b48",
            "10": "#77343d",
            "11": "#682e34",
            "12": "#592126"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#a9cbd7",
            "2": "#9cc3d1",
            "3": "#8fbbca",
            "4": "#82b3c5",
            "5": "#76acbe",
            "6": "#61abc1",
            "7": "#72a6b8",
            "8": "#6994a3",
            "9": "#3393af",
            "10": "#557884",
            "11": "#29768d",
            "12": "#38515a"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#dbba82",
            "2": "#d7b476",
            "3": "#d4ae6b",
            "4": "#d1a760",
            "5": "#cea155",
            "6": "#bea16b",
            "7": "#ad8b4e",
            "8": "#a98331",
            "9": "#947741",
            "10": "#896b28",
            "11": "#7a6334",
            "12": "#624f29"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary background color for the light theme"}
      colors={{
            "base": "#3f4043",
            "brand": "#28574c",
            "danger": "#8d3e35",
            "negative": "#aa563f",
            "warning": "#896b28",
            "success": "#247d5d",
            "positive": "#6b954c",
            "info": "#29768d",
            "discovery": "#70709b",
            "base-hover": "#323336",
            "base-active": "#393a3c",
            "base-inactive": "#48494c",
            "base-disabled": "#3f4042",
            "brand-hover": "#174e40",
            "brand-active": "#195547",
            "brand-inactive": "#3b5e55",
            "brand-disabled": "#34524a",
            "danger-hover": "#762222",
            "danger-active": "#822626",
            "danger-inactive": "#9f584f",
            "danger-disabled": "#854b44",
            "negative-hover": "#8a2828",
            "negative-active": "#9a3a2d",
            "negative-inactive": "#c8705c",
            "negative-disabled": "#a16253",
            "warning-hover": "#6f4d20",
            "warning-active": "#7c5c24",
            "warning-inactive": "#998051",
            "warning-disabled": "#826d47",
            "success-hover": "#1d653f",
            "success-active": "#21714e",
            "success-inactive": "#528c70",
            "success-disabled": "#477760",
            "positive-hover": "#3f7622",
            "positive-active": "#558627",
            "positive-inactive": "#88b46d",
            "positive-disabled": "#749360",
            "info-hover": "#215a73",
            "info-active": "#256880",
            "info-inactive": "#558a9d",
            "info-disabled": "#4a7485",
            "discovery-hover": "#514d7b",
            "discovery-active": "#615f8a",
            "discovery-inactive": "#8383b6",
            "discovery-disabled": "#707193"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"The primary border color for the light theme"}
      colors={{
            "base": "#4f4f4f",
            "brand": "#357062",
            "danger": "#ab5268",
            "negative": "#b34e4e",
            "warning": "#ad8b4e",
            "success": "#2d9a72",
            "positive": "#7f9b57",
            "info": "#61abc1",
            "discovery": "#8677b4",
            "base-subtle": "#3f4043",
            "brand-subtle": "#28574c",
            "danger-subtle": "#8d3e35",
            "negative-subtle": "#aa563f",
            "warning-subtle": "#896b28",
            "success-subtle": "#247d5d",
            "positive-subtle": "#6b954c",
            "info-subtle": "#29768d",
            "discovery-subtle": "#70709b",
            "base-hover": "#3d3d3d",
            "base-active": "#464646",
            "base-disabled": "#4f4f4f66",
            "brand-hover": "#1b5f4d",
            "brand-active": "#1e6959",
            "brand-disabled": "#476c62",
            "danger-hover": "#8b2843",
            "danger-active": "#9b2d54",
            "danger-disabled": "#a4606d",
            "negative-hover": "#902a2a",
            "negative-active": "#a22f2f",
            "negative-disabled": "#aa605b",
            "warning-hover": "#886127",
            "warning-active": "#9a752d",
            "warning-disabled": "#ab8f64",
            "success-hover": "#23794c",
            "success-active": "#28895f",
            "success-disabled": "#5c9679",
            "positive-hover": "#577923",
            "positive-active": "#6a8a2b",
            "positive-disabled": "#859b69",
            "info-hover": "#2a7b92",
            "info-active": "#3090a6",
            "info-disabled": "#74abbd",
            "discovery-hover": "#63518a",
            "discovery-active": "#75669c",
            "discovery-disabled": "#857aaa",
            "base-subtle-hover": "#323336",
            "base-subtle-active": "#393a3c",
            "base-subtle-disabled": "#3f4042",
            "brand-subtle-hover": "#174e40",
            "brand-subtle-active": "#195547",
            "brand-subtle-disabled": "#34524a",
            "danger-subtle-hover": "#762222",
            "danger-subtle-active": "#822626",
            "danger-subtle-disabled": "#854b44",
            "negative-subtle-hover": "#8a2828",
            "negative-subtle-active": "#9a3a2d",
            "negative-subtle-disabled": "#a16253",
            "warning-subtle-hover": "#6f4d20",
            "warning-subtle-active": "#7c5c24",
            "warning-subtle-disabled": "#826d47",
            "success-subtle-hover": "#1d653f",
            "success-subtle-active": "#21714e",
            "success-subtle-disabled": "#477760",
            "positive-subtle-hover": "#3f7622",
            "positive-subtle-active": "#558627",
            "positive-subtle-disabled": "#749360",
            "info-subtle-hover": "#215a73",
            "info-subtle-active": "#256880",
            "info-subtle-disabled": "#4a7485",
            "discovery-subtle-hover": "#514d7b",
            "discovery-subtle-active": "#615f8a",
            "discovery-subtle-disabled": "#707193"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the light theme"}
      colors={{
            "base": "#cfcfcf",
            "brand": "#357062",
            "danger": "#ab5268",
            "negative": "#b34e4e",
            "warning": "#ad8b4e",
            "success": "#2d9a72",
            "positive": "#7f9b57",
            "info": "#61abc1",
            "discovery": "#8677b4",
            "base-inverse": "#38393c",
            "brand-inverse": "#cfcfcf",
            "danger-inverse": "#cfcfcf",
            "negative-inverse": "#cfcfcf",
            "warning-inverse": "#38393c",
            "success-inverse": "#cfcfcf",
            "positive-inverse": "#cfcfcf",
            "info-inverse": "#cfcfcf",
            "discovery-inverse": "#cfcfcf",
            "base-hover": "#8f8f8f",
            "base-active": "#aeaeae",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#d9d9d966",
            "brand-hover": "#1b5f4d",
            "brand-active": "#1e6959",
            "brand-inactive": "#517f72",
            "brand-disabled": "#919191",
            "danger-hover": "#8b2843",
            "danger-active": "#9b2d54",
            "danger-inactive": "#ce697d",
            "danger-disabled": "#9f9f9f",
            "negative-hover": "#902a2a",
            "negative-active": "#a22f2f",
            "negative-inactive": "#d16862",
            "negative-disabled": "#404040",
            "warning-hover": "#886127",
            "warning-active": "#9a752d",
            "warning-inactive": "#d4ad6c",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#23794c",
            "success-active": "#28895f",
            "success-inactive": "#66b790",
            "success-disabled": "#383838",
            "positive-hover": "#577923",
            "positive-active": "#6a8a2b",
            "positive-inactive": "#9fbf76",
            "positive-disabled": "#525252",
            "info-hover": "#2a7b92",
            "info-active": "#3090a6",
            "info-inactive": "#7fd5da",
            "info-disabled": "#393939",
            "discovery-hover": "#63518a",
            "discovery-active": "#75669c",
            "discovery-inactive": "#9c89d8",
            "discovery-disabled": "#3b3b3b",
            "base-inverse-hover": "#57595b",
            "base-inverse-active": "#3e3e41",
            "base-inverse-inactive": "#303136",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#343434",
            "brand-inverse-active": "#aeaeae",
            "brand-inverse-inactive": "#d9d9d9",
            "brand-inverse-disabled": "#cfcfcf66",
            "danger-inverse-hover": "#343434",
            "danger-inverse-active": "#aeaeae",
            "danger-inverse-inactive": "#d9d9d9",
            "danger-inverse-disabled": "#9f9f9f",
            "negative-inverse-hover": "#343434",
            "negative-inverse-active": "#aeaeae",
            "negative-inverse-inactive": "#d9d9d9",
            "negative-inverse-disabled": "#404040",
            "warning-inverse-hover": "#57595b",
            "warning-inverse-active": "#3e3e41",
            "warning-inverse-inactive": "#303136",
            "warning-inverse-disabled": "#3b3b3b",
            "success-inverse-hover": "#343434",
            "success-inverse-active": "#aeaeae",
            "success-inverse-inactive": "#d9d9d9",
            "success-inverse-disabled": "#383838",
            "positive-inverse-hover": "#343434",
            "positive-inverse-active": "#aeaeae",
            "positive-inverse-inactive": "#d9d9d9",
            "positive-inverse-disabled": "#525252",
            "info-inverse-hover": "#343434",
            "info-inverse-active": "#aeaeae",
            "info-inverse-inactive": "#d9d9d9",
            "info-inverse-disabled": "#393939",
            "discovery-inverse-hover": "#343434",
            "discovery-inverse-active": "#aeaeae",
            "discovery-inverse-inactive": "#d9d9d9",
            "discovery-inverse-disabled": "#3b3b3b",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#57786d",
            "danger-ghost-hover": "#c67178",
            "negative-ghost-hover": "#d0756a",
            "warning-ghost-hover": "#caa176",
            "success-ghost-hover": "#7ab089",
            "positive-ghost-hover": "#94b278",
            "info-ghost-hover": "#82c7db",
            "discovery-ghost-hover": "#9483c9",
            "base-inverse-ghost-hover": "#87898b",
            "warning-inverse-ghost-hover": "#87898b"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the light theme"}
      colors={{
            "lowest": "#c4c4c4",
            "page": "#cacaca",
            "elevated": "#cfcfcf",
            "floating": "#d5d5d5",
            "highest": "#d9d9d9",
            "link": "#5f88d1",
            "lowest-hover": "#888888",
            "lowest-active": "#a5a5a5",
            "lowest-inactive": "#d9d9d9",
            "lowest-disabled": "#c4c4c466",
            "page-hover": "#8c8c8c",
            "page-active": "#aaaaaa",
            "page-inactive": "#d9d9d9",
            "page-disabled": "#cacaca66",
            "elevated-hover": "#8f8f8f",
            "elevated-active": "#aeaeae",
            "elevated-inactive": "#d9d9d9",
            "elevated-disabled": "#cfcfcf66",
            "floating-hover": "#939393",
            "floating-active": "#b3b3b3",
            "floating-inactive": "#d9d9d9",
            "floating-disabled": "#d5d5d566",
            "highest-hover": "#959595",
            "highest-active": "#b6b6b6",
            "highest-inactive": "#d9d9d9",
            "highest-disabled": "#d9d9d966",
            "link-hover": "#325da1",
            "link-active": "#4f74b4",
            "link-inactive": "#75a4d7",
            "link-disabled": "#6a8ac3"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the light theme"}
      colors={{
            "neutral.emphasis": "#595959",
            "neutral.subtle": "#cfcfcf",
            "brand.emphasis": "#a0c8c5",
            "brand.subtle": "#a0c8c5",
            "red.emphasis": "#ab5268",
            "red.subtle": "#c88ca9",
            "orange.emphasis": "#b77b5a",
            "orange.subtle": "#d4987a",
            "yellow.emphasis": "#a98331",
            "yellow.subtle": "#bea16b",
            "green.emphasis": "#2d9a72",
            "green.subtle": "#74b092",
            "sky.emphasis": "#3393af",
            "sky.subtle": "#61abc1",
            "blue.emphasis": "#6592cd",
            "blue.subtle": "#80a8da",
            "purple.emphasis": "#8786d8",
            "purple.subtle": "#989ae1",
            "pink.emphasis": "#c67898",
            "pink.subtle": "#da8fac"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the light theme"}
      colors={{
            "body": "#969696",
            "eyebrow": "#595959",
            "caption": "#6a6a6a",
            "link": "#5f88d1",
            "required": "#b34e4e",
            "body-hover": "#6a6a6a",
            "body-active": "#7f7f7f",
            "body-inactive": "#b4b4b4",
            "body-disabled": "#96969666",
            "eyebrow-hover": "#434343",
            "eyebrow-active": "#4d4d4d",
            "eyebrow-inactive": "#686868",
            "eyebrow-disabled": "#59595966",
            "caption-hover": "#4e4e4e",
            "caption-active": "#5c5c5c",
            "caption-inactive": "#7e7e7e",
            "caption-disabled": "#6a6a6a66",
            "link-hover": "#325da1",
            "link-active": "#4f74b4",
            "link-inactive": "#75a4d7",
            "link-disabled": "#4f4f4f",
            "required-hover": "#902a2a",
            "required-active": "#a22f2f",
            "required-inactive": "#d16862",
            "required-disabled": "#aa605b"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#d5d5d5",
            "border": "#4f4f4f",
            "backdrop": "#373a3d66",
            "background-hover": "#939393",
            "background-active": "#b3b3b3",
            "background-inactive": "#d9d9d9",
            "background-disabled": "#d5d5d566",
            "border-hover": "#3d3d3d",
            "border-active": "#464646",
            "border-disabled": "#4f4f4f66"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#d9d9d900"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
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
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#ffe1e1",
            "2": "#ffaaaa",
            "3": "#ff7373",
            "4": "#ff4d97",
            "5": "#ff3d3d",
            "6": "#ff0606",
            "7": "#ff0404",
            "8": "#d22c00",
            "9": "#be0000",
            "10": "#7e0000",
            "11": "#3d0000",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#e6fbce",
            "2": "#caf694",
            "3": "#acf15a",
            "4": "#dbdb58",
            "5": "#90ec20",
            "6": "#70cc00",
            "7": "#81c71e",
            "8": "#55b30f",
            "9": "#529500",
            "10": "#335d00",
            "11": "#142400",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#bedbff",
            "2": "#bdd4ff",
            "3": "#abcaff",
            "4": "#9abeff",
            "5": "#88b3ff",
            "6": "#6aabff",
            "7": "#77a8ff",
            "8": "#659dff",
            "9": "#5493ff",
            "10": "#4387ff",
            "11": "#1772ff",
            "12": "#1a60bb"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#ffffff",
            "2": "#ccfff4",
            "3": "#dff9f7",
            "4": "#98ffe8",
            "5": "#63ffdd",
            "6": "#2effd0",
            "7": "#0ed2a6",
            "8": "#00bcad",
            "9": "#078a6d",
            "10": "#024233",
            "11": "#000000",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#eefdf7",
            "2": "#c1f9e2",
            "3": "#94f5cc",
            "4": "#66f0b7",
            "5": "#64e6a6",
            "6": "#39eca1",
            "7": "#2de498",
            "8": "#1ebf7b",
            "9": "#008b58",
            "10": "#11734a",
            "11": "#003e27",
            "12": "#010705"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#ffffff",
            "4": "#ffffff",
            "5": "#ffffff",
            "6": "#dadada",
            "7": "#adadad",
            "8": "#535353",
            "9": "#2f2f2f",
            "10": "#1b1b1b",
            "11": "#08080a",
            "12": "#000000",
            "13": "#000000",
            "14": "#000000"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#fff7f4",
            "2": "#ffe5d8",
            "3": "#ffd1ba",
            "4": "#ffc2a4",
            "5": "#ffbc9a",
            "6": "#ffac81",
            "7": "#ff9760",
            "8": "#ff803a",
            "9": "#ff7a30",
            "10": "#ff7224",
            "11": "#c44d0d",
            "12": "#a5410a"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#ffffff",
            "2": "#fff1fa",
            "3": "#ffdcea",
            "4": "#ffcdeb",
            "5": "#ffaade",
            "6": "#ff85d0",
            "7": "#ff81b6",
            "8": "#f976c6",
            "9": "#dc50a6",
            "10": "#b3386a",
            "11": "#932b6b",
            "12": "#1c0815"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#fcfcff",
            "4": "#f6f2ff",
            "5": "#e1d7ff",
            "6": "#cdbbff",
            "7": "#c6c5ff",
            "8": "#bba2ff",
            "9": "#8e6eeb",
            "10": "#5553c5",
            "11": "#5538a7",
            "12": "#140d27"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#fcb3d6",
            "2": "#ff7a95",
            "3": "#ff708d",
            "4": "#f6365e",
            "5": "#f00a45",
            "6": "#ca0632",
            "7": "#a20322",
            "8": "#820c00",
            "9": "#790116",
            "10": "#51000b",
            "11": "#260004",
            "12": "#000000"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#ffffff",
            "2": "#e5f7fe",
            "3": "#bdecfd",
            "4": "#99e2fc",
            "5": "#73d7fa",
            "6": "#48d6ff",
            "7": "#64cff3",
            "8": "#44b1d5",
            "9": "#0098c4",
            "10": "#25728c",
            "11": "#004f67",
            "12": "#061217"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#ffe8c1",
            "2": "#ffdda2",
            "3": "#ffd285",
            "4": "#ffc767",
            "5": "#ffbc4a",
            "6": "#ffc457",
            "7": "#f39e03",
            "8": "#b27b00",
            "9": "#a76d00",
            "10": "#5d4000",
            "11": "#583b00",
            "12": "#0d0900"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary background color for the light theme"}
      colors={{
            "base": "#000000",
            "brand": "#000000",
            "danger": "#820c00",
            "negative": "#d22c00",
            "warning": "#5d4000",
            "success": "#003e27",
            "positive": "#55b30f",
            "info": "#004f67",
            "discovery": "#5553c5",
            "base-hover": "#000000",
            "base-active": "#000000",
            "base-inactive": "#0f1012",
            "base-disabled": "#000000",
            "brand-hover": "#000000",
            "brand-active": "#000000",
            "brand-inactive": "#09231c",
            "brand-disabled": "#010303",
            "danger-hover": "#2b0000",
            "danger-active": "#4b0000",
            "danger-inactive": "#cd220e",
            "danger-disabled": "#85180a",
            "negative-hover": "#610000",
            "negative-active": "#8b1100",
            "negative-inactive": "#ff6e4b",
            "negative-disabled": "#d63913",
            "warning-hover": "#170d00",
            "warning-active": "#3a2500",
            "warning-inactive": "#c08315",
            "warning-disabled": "#7e5711",
            "success-hover": "#000000",
            "success-active": "#001d10",
            "success-inactive": "#1c9d60",
            "success-disabled": "#14663d",
            "positive-hover": "#0e2a00",
            "positive-active": "#295500",
            "positive-inactive": "#91f055",
            "positive-disabled": "#65b533",
            "info-hover": "#001823",
            "info-active": "#003244",
            "info-inactive": "#199ccc",
            "info-disabled": "#146787",
            "discovery-hover": "#221b72",
            "discovery-active": "#38349e",
            "discovery-inactive": "#8d8eea",
            "discovery-disabled": "#5455b4"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"The primary border color for the light theme"}
      colors={{
            "base": "#1b1b1b",
            "brand": "#024233",
            "danger": "#f00a45",
            "negative": "#ff0404",
            "warning": "#f39e03",
            "success": "#008b58",
            "positive": "#81c71e",
            "info": "#48d6ff",
            "discovery": "#8e6eeb",
            "base-subtle": "#000000",
            "brand-subtle": "#000000",
            "danger-subtle": "#820c00",
            "negative-subtle": "#d22c00",
            "warning-subtle": "#5d4000",
            "success-subtle": "#003e27",
            "positive-subtle": "#55b30f",
            "info-subtle": "#004f67",
            "discovery-subtle": "#5553c5",
            "base-hover": "#000000",
            "base-active": "#080808",
            "base-disabled": "#1b1b1b66",
            "brand-hover": "#000000",
            "brand-active": "#000706",
            "brand-disabled": "#154c3d",
            "danger-hover": "#62001b",
            "danger-active": "#8e0033",
            "danger-disabled": "#dc2c4e",
            "negative-hover": "#710000",
            "negative-active": "#9f0000",
            "negative-disabled": "#eb2d20",
            "warning-hover": "#5a3500",
            "warning-active": "#8b5c00",
            "warning-disabled": "#e6a339",
            "success-hover": "#003117",
            "success-active": "#005e36",
            "success-disabled": "#2abb73",
            "positive-hover": "#1e3100",
            "positive-active": "#436500",
            "positive-disabled": "#8cc742",
            "info-hover": "#005a74",
            "info-active": "#008aa9",
            "info-disabled": "#6cd8fa",
            "discovery-hover": "#431c99",
            "discovery-active": "#633bcb",
            "discovery-disabled": "#8972da",
            "base-subtle-hover": "#000000",
            "base-subtle-active": "#000000",
            "base-subtle-disabled": "#000000",
            "brand-subtle-hover": "#000000",
            "brand-subtle-active": "#000000",
            "brand-subtle-disabled": "#010303",
            "danger-subtle-hover": "#2b0000",
            "danger-subtle-active": "#4b0000",
            "danger-subtle-disabled": "#85180a",
            "negative-subtle-hover": "#610000",
            "negative-subtle-active": "#8b1100",
            "negative-subtle-disabled": "#d63913",
            "warning-subtle-hover": "#170d00",
            "warning-subtle-active": "#3a2500",
            "warning-subtle-disabled": "#7e5711",
            "success-subtle-hover": "#000000",
            "success-subtle-active": "#001d10",
            "success-subtle-disabled": "#14663d",
            "positive-subtle-hover": "#0e2a00",
            "positive-subtle-active": "#295500",
            "positive-subtle-disabled": "#65b533",
            "info-subtle-hover": "#001823",
            "info-subtle-active": "#003244",
            "info-subtle-disabled": "#146787",
            "discovery-subtle-hover": "#221b72",
            "discovery-subtle-active": "#38349e",
            "discovery-subtle-disabled": "#5455b4"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the light theme"}
      colors={{
            "base": "#ffffff",
            "brand": "#024233",
            "danger": "#f00a45",
            "negative": "#ff0404",
            "warning": "#f39e03",
            "success": "#008b58",
            "positive": "#81c71e",
            "info": "#48d6ff",
            "discovery": "#8e6eeb",
            "base-inverse": "#000000",
            "brand-inverse": "#ffffff",
            "danger-inverse": "#ffffff",
            "negative-inverse": "#ffffff",
            "warning-inverse": "#000000",
            "success-inverse": "#ffffff",
            "positive-inverse": "#ffffff",
            "info-inverse": "#ffffff",
            "discovery-inverse": "#ffffff",
            "base-hover": "#9f9f9f",
            "base-active": "#e0e0e0",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#000000",
            "brand-active": "#000706",
            "brand-inactive": "#207c64",
            "brand-disabled": "#a4a4a4",
            "danger-hover": "#62001b",
            "danger-active": "#8e0033",
            "danger-inactive": "#ff7490",
            "danger-disabled": "#c0c0c0",
            "negative-hover": "#710000",
            "negative-active": "#9f0000",
            "negative-inactive": "#ff756d",
            "negative-disabled": "#000000",
            "warning-hover": "#5a3500",
            "warning-active": "#8b5c00",
            "warning-inactive": "#ffd287",
            "warning-disabled": "#000000",
            "success-hover": "#003117",
            "success-active": "#005e36",
            "success-inactive": "#45f8a1",
            "success-disabled": "#000000",
            "positive-hover": "#1e3100",
            "positive-active": "#436500",
            "positive-inactive": "#bffb74",
            "positive-disabled": "#212121",
            "info-hover": "#005a74",
            "info-active": "#008aa9",
            "info-inactive": "#bafbff",
            "info-disabled": "#000000",
            "discovery-hover": "#431c99",
            "discovery-active": "#633bcb",
            "discovery-inactive": "#d7cbff",
            "discovery-disabled": "#000000",
            "base-inverse-hover": "#2b2f34",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#000000",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#000000",
            "brand-inverse-active": "#e0e0e0",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#ffffff66",
            "danger-inverse-hover": "#000000",
            "danger-inverse-active": "#e0e0e0",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#c0c0c0",
            "negative-inverse-hover": "#000000",
            "negative-inverse-active": "#e0e0e0",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#000000",
            "warning-inverse-hover": "#2b2f34",
            "warning-inverse-active": "#000000",
            "warning-inverse-inactive": "#000000",
            "warning-inverse-disabled": "#000000",
            "success-inverse-hover": "#000000",
            "success-inverse-active": "#e0e0e0",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#000000",
            "positive-inverse-hover": "#000000",
            "positive-inverse-active": "#e0e0e0",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#212121",
            "info-inverse-hover": "#000000",
            "info-inverse-active": "#e0e0e0",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#000000",
            "discovery-inverse-hover": "#000000",
            "discovery-inverse-active": "#e0e0e0",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#000000",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#2b7159",
            "danger-ghost-hover": "#ff737e",
            "negative-ghost-hover": "#ff887a",
            "warning-ghost-hover": "#ffc487",
            "success-ghost-hover": "#73e493",
            "positive-ghost-hover": "#a9e870",
            "info-ghost-hover": "#c1f1ff",
            "discovery-ghost-hover": "#b79fff",
            "base-inverse-ghost-hover": "#8a939c",
            "warning-inverse-ghost-hover": "#8a939c"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the light theme"}
      colors={{
            "lowest": "#ffffff",
            "page": "#ffffff",
            "elevated": "#ffffff",
            "floating": "#ffffff",
            "highest": "#ffffff",
            "link": "#659dff",
            "lowest-hover": "#909090",
            "lowest-active": "#cdcdcd",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#ffffff66",
            "page-hover": "#999999",
            "page-active": "#d7d7d7",
            "page-inactive": "#ffffff",
            "page-disabled": "#ffffff66",
            "elevated-hover": "#9f9f9f",
            "elevated-active": "#e0e0e0",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#ffffff66",
            "floating-hover": "#a7a7a7",
            "floating-active": "#eaeaea",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#ffffff66",
            "highest-hover": "#acacac",
            "highest-active": "#f1f1f1",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff66",
            "link-hover": "#003fa4",
            "link-active": "#0963ff",
            "link-inactive": "#9ecdff",
            "link-disabled": "#5e99ff"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#000000"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the light theme"}
      colors={{
            "neutral.emphasis": "#2f2f2f",
            "neutral.subtle": "#ffffff",
            "brand.emphasis": "#dff9f7",
            "brand.subtle": "#dff9f7",
            "red.emphasis": "#f00a45",
            "red.subtle": "#fcb3d6",
            "orange.emphasis": "#ff7224",
            "orange.subtle": "#ffc2a4",
            "yellow.emphasis": "#b27b00",
            "yellow.subtle": "#ffc457",
            "green.emphasis": "#008b58",
            "green.subtle": "#64e6a6",
            "sky.emphasis": "#0098c4",
            "sky.subtle": "#48d6ff",
            "blue.emphasis": "#6aabff",
            "blue.subtle": "#bedbff",
            "purple.emphasis": "#c6c5ff",
            "purple.subtle": "#fcfcff",
            "pink.emphasis": "#ff81b6",
            "pink.subtle": "#ffdcea"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the light theme"}
      colors={{
            "body": "#adadad",
            "eyebrow": "#2f2f2f",
            "caption": "#535353",
            "link": "#659dff",
            "required": "#ff0404",
            "body-hover": "#535353",
            "body-active": "#7f7f7f",
            "body-inactive": "#ededed",
            "body-disabled": "#adadad66",
            "eyebrow-hover": "#020202",
            "eyebrow-active": "#181818",
            "eyebrow-inactive": "#4f4f4f",
            "eyebrow-disabled": "#2f2f2f66",
            "caption-hover": "#191919",
            "caption-active": "#363636",
            "caption-inactive": "#7c7c7c",
            "caption-disabled": "#53535366",
            "link-hover": "#003fa4",
            "link-active": "#0963ff",
            "link-inactive": "#9ecdff",
            "link-disabled": "#1b1b1b",
            "required-hover": "#710000",
            "required-active": "#9f0000",
            "required-inactive": "#ff756d",
            "required-disabled": "#eb2d20"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#ffffff",
            "border": "#1b1b1b",
            "backdrop": "#00000066",
            "background-hover": "#a7a7a7",
            "background-active": "#eaeaea",
            "background-inactive": "#ffffff",
            "background-disabled": "#ffffff66",
            "border-hover": "#000000",
            "border-active": "#080808",
            "border-disabled": "#1b1b1b66"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#ffffff00"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
      colors={{
            "white": "#ffffff"
      }}
    />
        </ColorPalette>
      </section>
    </>
  ),
  "lightMonochromatic": (
    <>
      <section>
        <h2>Color palettes</h2>
        <ColorPalette>
          <ColorItem
      title={"color.apple"}
      subtitle={"A light apple negative color"}
      colors={{
            "1": "#b7b7b7",
            "2": "#a0a0a0",
            "3": "#8f8f8f",
            "4": "#878787",
            "5": "#848484",
            "6": "#7f7f7f",
            "7": "#727272",
            "8": "#707070",
            "9": "#676767",
            "10": "#505050",
            "11": "#393939",
            "12": "#222222"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#dddddd",
            "2": "#d1d1d1",
            "3": "#c5c5c5",
            "4": "#bdbdbd",
            "5": "#bababa",
            "6": "#afafaf",
            "7": "#a4a4a4",
            "8": "#979797",
            "9": "#939393",
            "10": "#757575",
            "11": "#565656",
            "12": "#373737"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#b7b7b7",
            "2": "#afafaf",
            "3": "#a8a8a8",
            "4": "#a1a1a1",
            "5": "#999999",
            "6": "#989898",
            "7": "#939393",
            "8": "#8c8c8c",
            "9": "#878787",
            "10": "#808080",
            "11": "#767676",
            "12": "#686868"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#eaeaea",
            "2": "#e1e1e1",
            "3": "#dadada",
            "4": "#d9d9d9",
            "5": "#d2d2d2",
            "6": "#cccccc",
            "7": "#a8a8a8",
            "8": "#9f9f9f",
            "9": "#828282",
            "10": "#5c5c5c",
            "11": "#353535",
            "12": "#292929"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale green success color"}
      colors={{
            "1": "#e0e0e0",
            "2": "#d5d5d5",
            "3": "#cbcbcb",
            "4": "#c1c1c1",
            "5": "#b9b9b9",
            "6": "#b8b8b8",
            "7": "#b1b1b1",
            "8": "#9b9b9b",
            "9": "#999999",
            "10": "#727272",
            "11": "#6a6a6a",
            "12": "#393939"
      }}
    />
          <ColorItem
      title={"color.neutral"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#fafafa",
            "2": "#f1f1f1",
            "3": "#eaeaea",
            "4": "#e1e1e1",
            "5": "#dcdcdc",
            "6": "#bebebe",
            "7": "#9f9f9f",
            "8": "#616161",
            "9": "#484848",
            "10": "#3a3a3a",
            "11": "#2c2c2c",
            "12": "#252525",
            "13": "#1f1f1f",
            "14": "#1b1b1b"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#d1d1d1",
            "2": "#c8c8c8",
            "3": "#bebebe",
            "4": "#b7b7b7",
            "5": "#b4b4b4",
            "6": "#adadad",
            "7": "#a4a4a4",
            "8": "#999999",
            "9": "#979797",
            "10": "#919191",
            "11": "#747474",
            "12": "#686868"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#d4d4d4",
            "2": "#c6c6c6",
            "3": "#b8b8b8",
            "4": "#b7b7b7",
            "5": "#a9a9a9",
            "6": "#9c9c9c",
            "7": "#989898",
            "8": "#959595",
            "9": "#808080",
            "10": "#6a6a6a",
            "11": "#5d5d5d",
            "12": "#2e2e2e"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#d5d5d5",
            "2": "#c6c6c6",
            "3": "#b8b8b8",
            "4": "#b7b7b7",
            "5": "#a8a8a8",
            "6": "#9a9a9a",
            "7": "#989898",
            "8": "#929292",
            "9": "#7d7d7d",
            "10": "#696969",
            "11": "#5b5b5b",
            "12": "#2c2c2c"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#ababab",
            "2": "#929292",
            "3": "#8f8f8f",
            "4": "#7b7b7b",
            "5": "#6f6f6f",
            "6": "#626262",
            "7": "#545454",
            "8": "#4f4f4f",
            "9": "#474747",
            "10": "#3a3a3a",
            "11": "#2d2d2d",
            "12": "#1b1b1b"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#e1e1e1",
            "2": "#d5d5d5",
            "3": "#cbcbcb",
            "4": "#c1c1c1",
            "5": "#b7b7b7",
            "6": "#b7b7b7",
            "7": "#b0b0b0",
            "8": "#989898",
            "9": "#9a9a9a",
            "10": "#707070",
            "11": "#6b6b6b",
            "12": "#373737"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#d9d9d9",
            "2": "#d3d3d3",
            "3": "#cdcdcd",
            "4": "#c7c7c7",
            "5": "#c2c2c2",
            "6": "#b9b9b9",
            "7": "#a0a0a0",
            "8": "#979797",
            "9": "#7f7f7f",
            "10": "#6b6b6b",
            "11": "#5d5d5d",
            "12": "#3b3b3b"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Semantic colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The primary background color for the light theme"}
      colors={{
            "base": "#252525",
            "brand": "#353535",
            "danger": "#4f4f4f",
            "negative": "#707070",
            "warning": "#6b6b6b",
            "success": "#6a6a6a",
            "positive": "#979797",
            "info": "#6b6b6b",
            "discovery": "#696969",
            "base-hover": "#131313",
            "base-active": "#1c1c1c",
            "base-inactive": "#323232",
            "base-disabled": "#252525",
            "brand-hover": "#1e1e1e",
            "brand-active": "#292929",
            "brand-inactive": "#454545",
            "brand-disabled": "#343434",
            "danger-hover": "#333333",
            "danger-active": "#3e3e3e",
            "danger-inactive": "#686868",
            "danger-disabled": "#505050",
            "negative-hover": "#464646",
            "negative-active": "#585858",
            "negative-inactive": "#919191",
            "negative-disabled": "#717171",
            "warning-hover": "#404040",
            "warning-active": "#555555",
            "warning-inactive": "#8b8b8b",
            "warning-disabled": "#6c6c6c",
            "success-hover": "#424242",
            "success-active": "#565656",
            "success-inactive": "#888888",
            "success-disabled": "#6a6a6a",
            "positive-hover": "#5e5e5e",
            "positive-active": "#7a7a7a",
            "positive-inactive": "#c1c1c1",
            "positive-disabled": "#969696",
            "info-hover": "#424242",
            "info-active": "#565656",
            "info-inactive": "#8a8a8a",
            "info-disabled": "#6a6a6a",
            "discovery-hover": "#3d3d3d",
            "discovery-active": "#535353",
            "discovery-inactive": "#898989",
            "discovery-disabled": "#6a6a6a"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"The primary border color for the light theme"}
      colors={{
            "base": "#3a3a3a",
            "brand": "#5c5c5c",
            "danger": "#6f6f6f",
            "negative": "#727272",
            "warning": "#a0a0a0",
            "success": "#999999",
            "positive": "#a4a4a4",
            "info": "#b7b7b7",
            "discovery": "#7d7d7d",
            "base-subtle": "#252525",
            "brand-subtle": "#353535",
            "danger-subtle": "#4f4f4f",
            "negative-subtle": "#707070",
            "warning-subtle": "#6b6b6b",
            "success-subtle": "#6a6a6a",
            "positive-subtle": "#979797",
            "info-subtle": "#6b6b6b",
            "discovery-subtle": "#696969",
            "base-hover": "#202020",
            "base-active": "#2d2d2d",
            "base-disabled": "#3a3a3a66",
            "brand-hover": "#383838",
            "brand-active": "#494949",
            "brand-disabled": "#5b5b5b",
            "danger-hover": "#474747",
            "danger-active": "#585858",
            "danger-disabled": "#707070",
            "negative-hover": "#4c4c4c",
            "negative-active": "#5c5c5c",
            "negative-disabled": "#737373",
            "warning-hover": "#616161",
            "warning-active": "#808080",
            "warning-disabled": "#a1a1a1",
            "success-hover": "#616161",
            "success-active": "#7d7d7d",
            "success-disabled": "#989898",
            "positive-hover": "#656565",
            "positive-active": "#848484",
            "positive-disabled": "#a4a4a4",
            "info-hover": "#727272",
            "info-active": "#939393",
            "info-disabled": "#b6b6b6",
            "discovery-hover": "#494949",
            "discovery-active": "#626262",
            "discovery-disabled": "#7e7e7e",
            "base-subtle-hover": "#131313",
            "base-subtle-active": "#1c1c1c",
            "base-subtle-disabled": "#252525",
            "brand-subtle-hover": "#1e1e1e",
            "brand-subtle-active": "#292929",
            "brand-subtle-disabled": "#343434",
            "danger-subtle-hover": "#333333",
            "danger-subtle-active": "#3e3e3e",
            "danger-subtle-disabled": "#505050",
            "negative-subtle-hover": "#464646",
            "negative-subtle-active": "#585858",
            "negative-subtle-disabled": "#717171",
            "warning-subtle-hover": "#404040",
            "warning-subtle-active": "#555555",
            "warning-subtle-disabled": "#6c6c6c",
            "success-subtle-hover": "#424242",
            "success-subtle-active": "#565656",
            "success-subtle-disabled": "#6a6a6a",
            "positive-subtle-hover": "#5e5e5e",
            "positive-subtle-active": "#7a7a7a",
            "positive-subtle-disabled": "#969696",
            "info-subtle-hover": "#424242",
            "info-subtle-active": "#565656",
            "info-subtle-disabled": "#6a6a6a",
            "discovery-subtle-hover": "#3d3d3d",
            "discovery-subtle-active": "#535353",
            "discovery-subtle-disabled": "#6a6a6a"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the light theme"}
      colors={{
            "base": "#f1f1f1",
            "brand": "#5c5c5c",
            "danger": "#6f6f6f",
            "negative": "#727272",
            "warning": "#a0a0a0",
            "success": "#999999",
            "positive": "#a4a4a4",
            "info": "#b7b7b7",
            "discovery": "#7d7d7d",
            "base-inverse": "#1b1b1b",
            "brand-inverse": "#f1f1f1",
            "danger-inverse": "#f1f1f1",
            "negative-inverse": "#f1f1f1",
            "warning-inverse": "#1b1b1b",
            "success-inverse": "#f1f1f1",
            "positive-inverse": "#f1f1f1",
            "info-inverse": "#f1f1f1",
            "discovery-inverse": "#f1f1f1",
            "base-hover": "#959595",
            "base-active": "#c2c2c2",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#383838",
            "brand-active": "#494949",
            "brand-inactive": "#767676",
            "brand-disabled": "#999999",
            "danger-hover": "#474747",
            "danger-active": "#585858",
            "danger-inactive": "#919191",
            "danger-disabled": "#acacac",
            "negative-hover": "#4c4c4c",
            "negative-active": "#5c5c5c",
            "negative-inactive": "#919191",
            "negative-disabled": "#252525",
            "warning-hover": "#616161",
            "warning-active": "#808080",
            "warning-inactive": "#cccccc",
            "warning-disabled": "#1d1d1d",
            "success-hover": "#616161",
            "success-active": "#7d7d7d",
            "success-inactive": "#c2c2c2",
            "success-disabled": "#191919",
            "positive-hover": "#656565",
            "positive-active": "#848484",
            "positive-inactive": "#d1d1d1",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#727272",
            "info-active": "#939393",
            "info-inactive": "#e6e6e6",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#494949",
            "discovery-active": "#626262",
            "discovery-inactive": "#a1a1a1",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#484848",
            "base-inverse-active": "#232323",
            "base-inverse-inactive": "#111111",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#141414",
            "brand-inverse-active": "#c2c2c2",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#f1f1f166",
            "danger-inverse-hover": "#141414",
            "danger-inverse-active": "#c2c2c2",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#141414",
            "negative-inverse-active": "#c2c2c2",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#252525",
            "warning-inverse-hover": "#484848",
            "warning-inverse-active": "#232323",
            "warning-inverse-inactive": "#111111",
            "warning-inverse-disabled": "#1d1d1d",
            "success-inverse-hover": "#141414",
            "success-inverse-active": "#c2c2c2",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#141414",
            "positive-inverse-active": "#c2c2c2",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#141414",
            "info-inverse-active": "#c2c2c2",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#141414",
            "discovery-inverse-active": "#c2c2c2",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#6f6f6f",
            "danger-ghost-hover": "#909090",
            "negative-ghost-hover": "#989898",
            "warning-ghost-hover": "#bcbcbc",
            "success-ghost-hover": "#b8b8b8",
            "positive-ghost-hover": "#bfbfbf",
            "info-ghost-hover": "#d7d7d7",
            "discovery-ghost-hover": "#939393",
            "base-inverse-ghost-hover": "#8d8d8d",
            "warning-inverse-ghost-hover": "#8d8d8d"
      }}
    />
        </ColorPalette>
      </section>
      <section>
        <h2>Colors</h2>
        <ColorPalette>
          <ColorItem
      title={"color.background"}
      subtitle={"The lowest background color for the light theme"}
      colors={{
            "lowest": "#e1e1e1",
            "page": "#eaeaea",
            "elevated": "#f1f1f1",
            "floating": "#fafafa",
            "highest": "#ffffff",
            "link": "#8c8c8c",
            "lowest-hover": "#8b8b8b",
            "lowest-active": "#b5b5b5",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#e1e1e166",
            "page-hover": "#919191",
            "page-active": "#bcbcbc",
            "page-inactive": "#ffffff",
            "page-disabled": "#eaeaea66",
            "elevated-hover": "#959595",
            "elevated-active": "#c2c2c2",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#f1f1f166",
            "floating-hover": "#9b9b9b",
            "floating-active": "#c9c9c9",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#fafafa66",
            "highest-hover": "#9e9e9e",
            "highest-active": "#cecece",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff66",
            "link-hover": "#535353",
            "link-active": "#6f6f6f",
            "link-inactive": "#afafaf",
            "link-disabled": "#8d8d8d"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A almost black color"}
      colors={{
            "black": "#0c0c0c"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The neutral data visualization emphasis color for the light theme"}
      colors={{
            "neutral.emphasis": "#484848",
            "neutral.subtle": "#f1f1f1",
            "brand.emphasis": "#dadada",
            "brand.subtle": "#dadada",
            "red.emphasis": "#6f6f6f",
            "red.subtle": "#ababab",
            "orange.emphasis": "#919191",
            "orange.subtle": "#b7b7b7",
            "yellow.emphasis": "#979797",
            "yellow.subtle": "#b9b9b9",
            "green.emphasis": "#999999",
            "green.subtle": "#b9b9b9",
            "sky.emphasis": "#9a9a9a",
            "sky.subtle": "#b7b7b7",
            "blue.emphasis": "#989898",
            "blue.subtle": "#b7b7b7",
            "purple.emphasis": "#989898",
            "purple.subtle": "#b8b8b8",
            "pink.emphasis": "#989898",
            "pink.subtle": "#b8b8b8"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the light theme"}
      colors={{
            "body": "#9f9f9f",
            "eyebrow": "#484848",
            "caption": "#616161",
            "link": "#8c8c8c",
            "required": "#727272",
            "body-hover": "#616161",
            "body-active": "#7f7f7f",
            "body-inactive": "#cbcbcb",
            "body-disabled": "#9f9f9f66",
            "eyebrow-hover": "#292929",
            "eyebrow-active": "#383838",
            "eyebrow-inactive": "#5e5e5e",
            "eyebrow-disabled": "#48484866",
            "caption-hover": "#393939",
            "caption-active": "#4d4d4d",
            "caption-inactive": "#7d7d7d",
            "caption-disabled": "#61616166",
            "link-hover": "#535353",
            "link-active": "#6f6f6f",
            "link-inactive": "#afafaf",
            "link-disabled": "#3a3a3a",
            "required-hover": "#4c4c4c",
            "required-active": "#5c5c5c",
            "required-inactive": "#919191",
            "required-disabled": "#737373"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#fafafa",
            "border": "#3a3a3a",
            "backdrop": "#1c1c1c66",
            "background-hover": "#9b9b9b",
            "background-active": "#c9c9c9",
            "background-inactive": "#ffffff",
            "background-disabled": "#fafafa66",
            "border-hover": "#202020",
            "border-active": "#2d2d2d",
            "border-disabled": "#3a3a3a66"
      }}
    />
          <ColorItem
      title={"color.transparent"}
      subtitle={"A transparent color"}
      colors={{
            "transparent": "#ffffff00"
      }}
    />
          <ColorItem
      title={"color.white"}
      subtitle={"A completely white color"}
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
  /** Generated token-set name. Defaults to Storybook's `theme` global. */
  theme?: string;
}

export function ColorPaletteBlock({ theme }: ColorPaletteBlockProps = {}) {
  const activeTheme = useThemeVariant(COLOR_VARIANTS, "dark", theme);

  return COLOR_VARIANTS[activeTheme];
}
