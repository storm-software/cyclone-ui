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
            "brand-hover": "#224f44",
            "brand-active": "#18463a",
            "brand-inactive": "#002b21",
            "brand-disabled": "#183a31",
            "danger-hover": "#4b1416",
            "danger-active": "#440c10",
            "danger-inactive": "#2f0002",
            "danger-disabled": "#370d0e",
            "negative-hover": "#94251c",
            "negative-active": "#86160e",
            "negative-inactive": "#610000",
            "negative-disabled": "#6f1b14",
            "warning-hover": "#634c23",
            "warning-active": "#584218",
            "warning-inactive": "#3a2500",
            "warning-disabled": "#4a3819",
            "success-hover": "#2a5642",
            "success-active": "#1f4b38",
            "success-inactive": "#002f1d",
            "success-disabled": "#1e3f30",
            "positive-hover": "#37521c",
            "positive-active": "#2d4811",
            "positive-inactive": "#142d00",
            "positive-disabled": "#283d13",
            "info-hover": "#314f5b",
            "info-active": "#274550",
            "info-inactive": "#0b2a34",
            "info-disabled": "#233a43",
            "discovery-hover": "#413760",
            "discovery-active": "#382f57",
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
            "brand-hover": "#6ff1cf",
            "brand-active": "#50d6b5",
            "brand-disabled": "#55b79d",
            "danger-hover": "#fd5b7b",
            "danger-active": "#e64568",
            "danger-disabled": "#c0455d",
            "negative-hover": "#ff5946",
            "negative-active": "#ff3a2c",
            "negative-disabled": "#eb4436",
            "warning-hover": "#ffc863",
            "warning-active": "#edae47",
            "warning-disabled": "#c9994c",
            "success-hover": "#82ffc6",
            "success-active": "#65e3ab",
            "success-disabled": "#64c297",
            "positive-hover": "#aafb62",
            "positive-active": "#90df43",
            "positive-disabled": "#82bf4c",
            "info-hover": "#9bf2ff",
            "info-active": "#7fd6f4",
            "info-disabled": "#77b9d0",
            "discovery-hover": "#ccafff",
            "discovery-active": "#b497ff",
            "discovery-disabled": "#9b85df",
            "base-subtle-hover": "#696969",
            "base-subtle-active": "#585858",
            "base-subtle-disabled": "#48484866",
            "brand-subtle-hover": "#3c8773",
            "brand-subtle-active": "#2a7764",
            "brand-subtle-disabled": "#2d6556",
            "danger-subtle-hover": "#702428",
            "danger-subtle-active": "#651a20",
            "danger-subtle-disabled": "#531a1d",
            "negative-subtle-hover": "#94251c",
            "negative-subtle-active": "#86160e",
            "negative-subtle-disabled": "#6f1b14",
            "warning-subtle-hover": "#d19f4d",
            "warning-subtle-active": "#bc8a36",
            "warning-subtle-disabled": "#9f793b",
            "success-subtle-hover": "#52a67f",
            "success-subtle-active": "#3e946d",
            "success-subtle-disabled": "#3e7e60",
            "positive-subtle-hover": "#8aa665",
            "positive-subtle-active": "#a8c684",
            "positive-subtle-disabled": "#cce5af",
            "info-subtle-hover": "#629db2",
            "info-subtle-active": "#4f8a9f",
            "info-subtle-disabled": "#4a7686",
            "discovery-subtle-hover": "#816ebe",
            "discovery-subtle-active": "#715eac",
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
            "brand-hover": "#6ff1cf",
            "brand-active": "#50d6b5",
            "brand-inactive": "#008f71",
            "brand-disabled": "#55b79d",
            "danger-hover": "#fd5b7b",
            "danger-active": "#e64568",
            "danger-inactive": "#a70037",
            "danger-disabled": "#aeaeae",
            "negative-hover": "#ff5946",
            "negative-active": "#ff3a2c",
            "negative-inactive": "#d00000",
            "negative-disabled": "#999999",
            "warning-hover": "#ffc863",
            "warning-active": "#edae47",
            "warning-inactive": "#a46900",
            "warning-disabled": "#c9994c",
            "success-hover": "#82ffc6",
            "success-active": "#65e3ab",
            "success-inactive": "#009865",
            "success-disabled": "#64c297",
            "positive-hover": "#aafb62",
            "positive-active": "#90df43",
            "positive-inactive": "#499400",
            "positive-disabled": "#82bf4c",
            "info-hover": "#9bf2ff",
            "info-active": "#7fd6f4",
            "info-inactive": "#318ca8",
            "info-disabled": "#77b9d0",
            "discovery-hover": "#ccafff",
            "discovery-active": "#b497ff",
            "discovery-inactive": "#7656c2",
            "discovery-disabled": "#9b85df",
            "base-inverse-hover": "#282829",
            "base-inverse-active": "#111112",
            "base-inverse-inactive": "#060607",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#151515",
            "brand-inverse-active": "#d5d5d5",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#fafafa66",
            "danger-inverse-hover": "#151515",
            "danger-inverse-active": "#d5d5d5",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#aeaeae",
            "negative-inverse-hover": "#151515",
            "negative-inverse-active": "#d5d5d5",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#fafafa66",
            "warning-inverse-hover": "#151515",
            "warning-inverse-active": "#d5d5d5",
            "warning-inverse-inactive": "#ffffff",
            "warning-inverse-disabled": "#fafafa66",
            "success-inverse-hover": "#151515",
            "success-inverse-active": "#d5d5d5",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#fafafa66",
            "positive-inverse-hover": "#151515",
            "positive-inverse-active": "#d5d5d5",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#fafafa66",
            "info-inverse-hover": "#151515",
            "info-inverse-active": "#d5d5d5",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#fafafa66",
            "discovery-inverse-hover": "#151515",
            "discovery-inverse-active": "#d5d5d5",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#fafafa66",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#9bfff8",
            "danger-ghost-hover": "#ffc2db",
            "negative-ghost-hover": "#ffc4aa",
            "warning-ghost-hover": "#fff691",
            "success-ghost-hover": "#a0ffe3",
            "positive-ghost-hover": "#c9ff83",
            "info-ghost-hover": "#b9ffff",
            "discovery-ghost-hover": "#ffeeff",
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
            "lowest-hover": "#141415",
            "lowest-active": "#101011",
            "lowest-inactive": "#060607",
            "lowest-disabled": "#0c0c0d",
            "page-hover": "#2c2c2e",
            "page-active": "#252527",
            "page-inactive": "#141416",
            "page-disabled": "#1f1f21",
            "elevated-hover": "#333437",
            "elevated-active": "#2b2c2f",
            "elevated-inactive": "#18191b",
            "elevated-disabled": "#242527",
            "floating-hover": "#3c3d41",
            "floating-active": "#333438",
            "floating-inactive": "#1d1e22",
            "floating-disabled": "#2b2c2f",
            "highest-hover": "#616161",
            "highest-active": "#545454",
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
            "body-hover": "#868686",
            "body-active": "#a2a2a2",
            "body-inactive": "#f2f2f2",
            "body-disabled": "#bebebe66",
            "eyebrow-hover": "#818181",
            "eyebrow-active": "#717171",
            "eyebrow-inactive": "#464646",
            "eyebrow-disabled": "#61616166",
            "caption-hover": "#d1d1d1",
            "caption-active": "#b8b8b8",
            "caption-inactive": "#757575",
            "caption-disabled": "#9f9f9f66",
            "link-hover": "#80c2ff",
            "link-active": "#69a9ff",
            "link-inactive": "#2a67d1",
            "link-disabled": "#6193ea",
            "required-hover": "#ff5946",
            "required-active": "#ff3a2c",
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
            "background-hover": "#3c3d41",
            "background-active": "#333438",
            "background-inactive": "#1d1e22",
            "background-disabled": "#2b2c2f",
            "border-hover": "#818181",
            "border-active": "#717171",
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
            "brand-hover": "#3d5f57",
            "brand-active": "#345a50",
            "brand-inactive": "#185345",
            "brand-disabled": "#34524a",
            "danger-hover": "#5e3132",
            "danger-active": "#5c292c",
            "danger-inactive": "#55191b",
            "danger-disabled": "#53292a",
            "negative-hover": "#89443e",
            "negative-active": "#823732",
            "negative-inactive": "#702020",
            "negative-disabled": "#743934",
            "warning-hover": "#6c5b3f",
            "warning-active": "#665535",
            "warning-inactive": "#5b431a",
            "warning-disabled": "#5d4e35",
            "success-hover": "#436354",
            "success-active": "#3a5d4e",
            "success-inactive": "#19553e",
            "success-disabled": "#395548",
            "positive-hover": "#4d6138",
            "positive-active": "#465d2e",
            "positive-inactive": "#335418",
            "positive-disabled": "#42552f",
            "info-hover": "#495d66",
            "info-active": "#41575f",
            "info-inactive": "#274752",
            "info-disabled": "#3d5057",
            "discovery-hover": "#544d69",
            "discovery-active": "#4d4763",
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
            "brand-hover": "#77ccb6",
            "brand-active": "#66b4a1",
            "brand-disabled": "#699f91",
            "danger-hover": "#d26b7f",
            "danger-active": "#be6074",
            "danger-disabled": "#a4606d",
            "negative-hover": "#d16b5f",
            "negative-active": "#cd5951",
            "negative-disabled": "#bf5f57",
            "warning-hover": "#d5b16f",
            "warning-active": "#c39e61",
            "warning-disabled": "#ab8f64",
            "success-hover": "#80dab1",
            "success-active": "#72c09d",
            "success-disabled": "#72a88f",
            "positive-hover": "#9dd26f",
            "positive-active": "#8bb95f",
            "positive-disabled": "#82a464",
            "info-hover": "#8dd4de",
            "info-active": "#80bcd0",
            "info-disabled": "#7da6b4",
            "discovery-hover": "#b398e1",
            "discovery-active": "#a28bdd",
            "discovery-disabled": "#9485c0",
            "base-subtle-hover": "#707070",
            "base-subtle-active": "#646464",
            "base-subtle-disabled": "#59595966",
            "brand-subtle-hover": "#548175",
            "brand-subtle-active": "#46776b",
            "brand-subtle-disabled": "#476c62",
            "danger-subtle-hover": "#734143",
            "danger-subtle-active": "#6e383c",
            "danger-subtle-disabled": "#623639",
            "negative-subtle-hover": "#89443e",
            "negative-subtle-active": "#823732",
            "negative-subtle-disabled": "#743934",
            "warning-subtle-hover": "#b09465",
            "warning-subtle-active": "#a08456",
            "warning-subtle-disabled": "#8f7956",
            "success-subtle-hover": "#66947f",
            "success-subtle-active": "#578972",
            "success-subtle-disabled": "#557c69",
            "positive-subtle-hover": "#869672",
            "positive-subtle-active": "#9cae85",
            "positive-subtle-disabled": "#b5c99f",
            "info-subtle-hover": "#70929d",
            "info-subtle-active": "#638490",
            "info-subtle-disabled": "#5d7781",
            "discovery-subtle-hover": "#8378a7",
            "discovery-subtle-active": "#786e99",
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
            "brand-hover": "#77ccb6",
            "brand-active": "#66b4a1",
            "brand-inactive": "#288974",
            "brand-disabled": "#699f91",
            "danger-hover": "#d26b7f",
            "danger-active": "#be6074",
            "danger-inactive": "#962c4f",
            "danger-disabled": "#a0a0a0",
            "negative-hover": "#d16b5f",
            "negative-active": "#cd5951",
            "negative-inactive": "#ac3232",
            "negative-disabled": "#919191",
            "warning-hover": "#d5b16f",
            "warning-active": "#c39e61",
            "warning-inactive": "#946e2b",
            "warning-disabled": "#ab8f64",
            "success-hover": "#80dab1",
            "success-active": "#72c09d",
            "success-inactive": "#298e6c",
            "success-disabled": "#72a88f",
            "positive-hover": "#9dd26f",
            "positive-active": "#8bb95f",
            "positive-inactive": "#598c29",
            "positive-disabled": "#82a464",
            "info-hover": "#8dd4de",
            "info-active": "#80bcd0",
            "info-inactive": "#508495",
            "info-disabled": "#7da6b4",
            "discovery-hover": "#b398e1",
            "discovery-active": "#a28bdd",
            "discovery-inactive": "#7c6aa7",
            "discovery-disabled": "#9485c0",
            "base-inverse-hover": "#424243",
            "base-inverse-active": "#323233",
            "base-inverse-inactive": "#29292d",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#353535",
            "brand-inverse-active": "#bbbbbb",
            "brand-inverse-inactive": "#d9d9d9",
            "brand-inverse-disabled": "#d5d5d566",
            "danger-inverse-hover": "#353535",
            "danger-inverse-active": "#bbbbbb",
            "danger-inverse-inactive": "#d9d9d9",
            "danger-inverse-disabled": "#a0a0a0",
            "negative-inverse-hover": "#353535",
            "negative-inverse-active": "#bbbbbb",
            "negative-inverse-inactive": "#d9d9d9",
            "negative-inverse-disabled": "#d5d5d566",
            "warning-inverse-hover": "#353535",
            "warning-inverse-active": "#bbbbbb",
            "warning-inverse-inactive": "#d9d9d9",
            "warning-inverse-disabled": "#d5d5d566",
            "success-inverse-hover": "#353535",
            "success-inverse-active": "#bbbbbb",
            "success-inverse-inactive": "#d9d9d9",
            "success-inverse-disabled": "#d5d5d566",
            "positive-inverse-hover": "#353535",
            "positive-inverse-active": "#bbbbbb",
            "positive-inverse-inactive": "#d9d9d9",
            "positive-inverse-disabled": "#d5d5d566",
            "info-inverse-hover": "#353535",
            "info-inverse-active": "#bbbbbb",
            "info-inverse-inactive": "#d9d9d9",
            "info-inverse-disabled": "#d5d5d566",
            "discovery-inverse-hover": "#353535",
            "discovery-inverse-active": "#bbbbbb",
            "discovery-inverse-inactive": "#d9d9d9",
            "discovery-inverse-disabled": "#d5d5d566",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#8dded8",
            "danger-ghost-hover": "#e4a3bd",
            "negative-ghost-hover": "#e0ac96",
            "warning-ghost-hover": "#dcd688",
            "success-ghost-hover": "#90dfc8",
            "positive-ghost-hover": "#b3da80",
            "info-ghost-hover": "#9ee3e3",
            "discovery-ghost-hover": "#ebbaeb",
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
            "lowest-hover": "#343435",
            "lowest-active": "#313133",
            "lowest-inactive": "#29292d",
            "lowest-disabled": "#2e2e30",
            "page-hover": "#454547",
            "page-active": "#404042",
            "page-inactive": "#343436",
            "page-disabled": "#3c3c3e",
            "elevated-hover": "#4a4b4d",
            "elevated-active": "#444547",
            "elevated-inactive": "#36373a",
            "elevated-disabled": "#3f4042",
            "floating-hover": "#505154",
            "floating-active": "#4a4b4e",
            "floating-inactive": "#3a3b3f",
            "floating-disabled": "#444547",
            "highest-hover": "#6a6a6a",
            "highest-active": "#616161",
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
            "body-hover": "#848484",
            "body-active": "#989898",
            "body-inactive": "#d0d0d0",
            "body-disabled": "#ababab66",
            "eyebrow-hover": "#818181",
            "eyebrow-active": "#757575",
            "eyebrow-inactive": "#575757",
            "eyebrow-disabled": "#6a6a6a66",
            "caption-hover": "#b9b9b9",
            "caption-active": "#a7a7a7",
            "caption-inactive": "#787878",
            "caption-disabled": "#96969666",
            "link-hover": "#7faeda",
            "link-active": "#729dd6",
            "link-inactive": "#5072ac",
            "link-disabled": "#708fc5",
            "required-hover": "#d16b5f",
            "required-active": "#cd5951",
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
            "background-hover": "#505154",
            "background-active": "#4a4b4e",
            "background-inactive": "#3a3b3f",
            "background-disabled": "#444547",
            "border-hover": "#818181",
            "border-active": "#757575",
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
            "brand-hover": "#0a2720",
            "brand-active": "#03120e",
            "brand-inactive": "#000000",
            "brand-disabled": "#010303",
            "danger-hover": "#150203",
            "danger-active": "#010000",
            "danger-inactive": "#000000",
            "danger-disabled": "#000000",
            "negative-hover": "#8a0c02",
            "negative-active": "#640700",
            "negative-inactive": "#1a0000",
            "negative-disabled": "#4b0600",
            "warning-hover": "#43300c",
            "warning-active": "#2b1e04",
            "warning-inactive": "#000000",
            "warning-disabled": "#191104",
            "success-hover": "#113625",
            "success-active": "#081f15",
            "success-inactive": "#000000",
            "success-disabled": "#050f0b",
            "positive-hover": "#162606",
            "positive-active": "#070d01",
            "positive-inactive": "#000000",
            "positive-disabled": "#010100",
            "info-hover": "#183540",
            "info-active": "#0e242c",
            "info-inactive": "#000000",
            "info-disabled": "#091418",
            "discovery-hover": "#291e4a",
            "discovery-active": "#1e163a",
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
            "brand-hover": "#8dffe1",
            "brand-active": "#44f4c8",
            "brand-disabled": "#42cfaa",
            "danger-hover": "#ff819a",
            "danger-active": "#ff4069",
            "danger-disabled": "#dc2c4e",
            "negative-hover": "#ff7565",
            "negative-active": "#ff4c40",
            "negative-disabled": "#ff4131",
            "warning-hover": "#ffd890",
            "warning-active": "#ffbb4d",
            "warning-disabled": "#e6a339",
            "success-hover": "#bdffe1",
            "success-active": "#6bfebd",
            "success-disabled": "#5ddba1",
            "positive-hover": "#c0ff88",
            "positive-active": "#98ff33",
            "positive-disabled": "#83da36",
            "info-hover": "#e1fbff",
            "info-active": "#a8e9ff",
            "info-disabled": "#7ecde9",
            "discovery-hover": "#fefeff",
            "discovery-active": "#e5dbff",
            "discovery-disabled": "#b19bf6",
            "base-subtle-hover": "#5f5f5f",
            "base-subtle-active": "#464646",
            "base-subtle-disabled": "#2f2f2f66",
            "brand-subtle-hover": "#24846a",
            "brand-subtle-active": "#126550",
            "brand-subtle-disabled": "#154c3d",
            "danger-subtle-hover": "#570d11",
            "danger-subtle-active": "#40050a",
            "danger-subtle-disabled": "#260507",
            "negative-subtle-hover": "#8a0c02",
            "negative-subtle-active": "#640700",
            "negative-subtle-disabled": "#4b0600",
            "warning-subtle-hover": "#efac3d",
            "warning-subtle-active": "#d48e18",
            "warning-subtle-disabled": "#a87521",
            "success-subtle-hover": "#3cb97f",
            "success-subtle-active": "#269864",
            "success-subtle-disabled": "#277751",
            "positive-subtle-hover": "#8fb957",
            "positive-subtle-active": "#b9de8e",
            "positive-subtle-disabled": "#edfadd",
            "info-subtle-hover": "#55aac8",
            "info-subtle-active": "#398fad",
            "info-subtle-disabled": "#347186",
            "discovery-subtle-hover": "#846bd6",
            "discovery-subtle-active": "#6a4ec1",
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
            "brand-hover": "#8dffe1",
            "brand-active": "#44f4c8",
            "brand-inactive": "#005d49",
            "brand-disabled": "#42cfaa",
            "danger-hover": "#ff819a",
            "danger-active": "#ff4069",
            "danger-inactive": "#7f002a",
            "danger-disabled": "#c3c3c3",
            "negative-hover": "#ff7565",
            "negative-active": "#ff4c40",
            "negative-inactive": "#bb0000",
            "negative-disabled": "#a4a4a4",
            "warning-hover": "#ffd890",
            "warning-active": "#ffbb4d",
            "warning-inactive": "#7b4f00",
            "warning-disabled": "#e6a339",
            "success-hover": "#bdffe1",
            "success-active": "#6bfebd",
            "success-inactive": "#006a46",
            "success-disabled": "#5ddba1",
            "positive-hover": "#c0ff88",
            "positive-active": "#98ff33",
            "positive-inactive": "#316400",
            "positive-disabled": "#83da36",
            "info-hover": "#e1fbff",
            "info-active": "#a8e9ff",
            "info-inactive": "#158eb3",
            "info-disabled": "#7ecde9",
            "discovery-hover": "#fefeff",
            "discovery-active": "#e5dbff",
            "discovery-inactive": "#7347dc",
            "discovery-disabled": "#b19bf6",
            "base-inverse-hover": "#010101",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#000000",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#000000",
            "brand-inverse-active": "#fbfbfb",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#ffffff66",
            "danger-inverse-hover": "#000000",
            "danger-inverse-active": "#fbfbfb",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#c3c3c3",
            "negative-inverse-hover": "#000000",
            "negative-inverse-active": "#fbfbfb",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#ffffff66",
            "warning-inverse-hover": "#000000",
            "warning-inverse-active": "#fbfbfb",
            "warning-inverse-inactive": "#ffffff",
            "warning-inverse-disabled": "#ffffff66",
            "success-inverse-hover": "#000000",
            "success-inverse-active": "#fbfbfb",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#ffffff66",
            "positive-inverse-hover": "#000000",
            "positive-inverse-active": "#fbfbfb",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#ffffff66",
            "info-inverse-hover": "#000000",
            "info-inverse-active": "#fbfbfb",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#ffffff66",
            "discovery-inverse-hover": "#000000",
            "discovery-inverse-active": "#fbfbfb",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#ffffff66",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#e1fffd",
            "danger-ghost-hover": "#ffffff",
            "negative-ghost-hover": "#fff9f6",
            "warning-ghost-hover": "#fffbd2",
            "success-ghost-hover": "#e8fff8",
            "positive-ghost-hover": "#e3ffbe",
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
            "page-hover": "#070709",
            "page-active": "#000000",
            "page-inactive": "#000000",
            "page-disabled": "#000000",
            "elevated-hover": "#121215",
            "elevated-active": "#070709",
            "elevated-inactive": "#000000",
            "elevated-disabled": "#000000",
            "floating-hover": "#1e1f25",
            "floating-active": "#121316",
            "floating-inactive": "#000000",
            "floating-disabled": "#070709",
            "highest-hover": "#535353",
            "highest-active": "#404040",
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
            "body-hover": "#898989",
            "body-active": "#b2b2b2",
            "body-inactive": "#ffffff",
            "body-disabled": "#dadada66",
            "eyebrow-hover": "#828282",
            "eyebrow-active": "#6a6a6a",
            "eyebrow-inactive": "#2c2c2c",
            "eyebrow-disabled": "#53535366",
            "caption-hover": "#f6f6f6",
            "caption-active": "#d1d1d1",
            "caption-inactive": "#707070",
            "caption-disabled": "#adadad66",
            "link-hover": "#badeff",
            "link-active": "#98c4ff",
            "link-inactive": "#065df3",
            "link-disabled": "#6ea3ff",
            "required-hover": "#ff7565",
            "required-active": "#ff4c40",
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
            "background-hover": "#1e1f25",
            "background-active": "#121316",
            "background-inactive": "#000000",
            "background-disabled": "#070709",
            "border-hover": "#828282",
            "border-active": "#6a6a6a",
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
            "brand-hover": "#474747",
            "brand-active": "#3e3e3e",
            "brand-inactive": "#252525",
            "brand-disabled": "#343434",
            "danger-hover": "#272727",
            "danger-active": "#212121",
            "danger-inactive": "#121212",
            "danger-disabled": "#1c1c1c",
            "negative-hover": "#4e4e4e",
            "negative-active": "#434343",
            "negative-inactive": "#2c2c2c",
            "negative-disabled": "#3a3a3a",
            "warning-hover": "#505050",
            "warning-active": "#454545",
            "warning-inactive": "#292929",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#4e4e4e",
            "success-active": "#434343",
            "success-inactive": "#282828",
            "success-disabled": "#393939",
            "positive-hover": "#4a4a4a",
            "positive-active": "#414141",
            "positive-inactive": "#272727",
            "positive-disabled": "#373737",
            "info-hover": "#4b4b4b",
            "info-active": "#414141",
            "info-inactive": "#262626",
            "info-disabled": "#373737",
            "discovery-hover": "#3d3d3d",
            "discovery-active": "#353535",
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
            "brand-hover": "#dbdbdb",
            "brand-active": "#c1c1c1",
            "brand-disabled": "#a6a6a6",
            "danger-hover": "#949494",
            "danger-active": "#818181",
            "danger-disabled": "#707070",
            "negative-hover": "#929292",
            "negative-active": "#888888",
            "negative-disabled": "#818181",
            "warning-hover": "#d1d1d1",
            "warning-active": "#b9b9b9",
            "warning-disabled": "#a1a1a1",
            "success-hover": "#e8e8e8",
            "success-active": "#cccccc",
            "success-disabled": "#b0b0b0",
            "positive-hover": "#e5e5e5",
            "positive-active": "#cacaca",
            "positive-disabled": "#aeaeae",
            "info-hover": "#e4e4e4",
            "info-active": "#cacaca",
            "info-disabled": "#b0b0b0",
            "discovery-hover": "#bdbdbd",
            "discovery-active": "#a8a8a8",
            "discovery-disabled": "#939393",
            "base-subtle-hover": "#696969",
            "base-subtle-active": "#585858",
            "base-subtle-disabled": "#48484866",
            "brand-subtle-hover": "#7a7a7a",
            "brand-subtle-active": "#6b6b6b",
            "brand-subtle-disabled": "#5b5b5b",
            "danger-subtle-hover": "#3e3e3e",
            "danger-subtle-active": "#353535",
            "danger-subtle-disabled": "#2d2d2d",
            "negative-subtle-hover": "#4e4e4e",
            "negative-subtle-active": "#434343",
            "negative-subtle-disabled": "#3a3a3a",
            "warning-subtle-hover": "#a7a7a7",
            "warning-subtle-active": "#939393",
            "warning-subtle-disabled": "#7f7f7f",
            "success-subtle-hover": "#969696",
            "success-subtle-active": "#858585",
            "success-subtle-disabled": "#727272",
            "positive-subtle-hover": "#9d9d9d",
            "positive-subtle-active": "#bcbcbc",
            "positive-subtle-disabled": "#dddddd",
            "info-subtle-hover": "#959595",
            "info-subtle-active": "#828282",
            "info-subtle-disabled": "#707070",
            "discovery-subtle-hover": "#7a7a7a",
            "discovery-subtle-active": "#6a6a6a",
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
            "brand-hover": "#dbdbdb",
            "brand-active": "#c1c1c1",
            "brand-inactive": "#7e7e7e",
            "brand-disabled": "#a6a6a6",
            "danger-hover": "#949494",
            "danger-active": "#818181",
            "danger-inactive": "#525252",
            "danger-disabled": "#aeaeae",
            "negative-hover": "#929292",
            "negative-active": "#888888",
            "negative-inactive": "#666666",
            "negative-disabled": "#999999",
            "warning-hover": "#d1d1d1",
            "warning-active": "#b9b9b9",
            "warning-inactive": "#767676",
            "warning-disabled": "#a1a1a1",
            "success-hover": "#e8e8e8",
            "success-active": "#cccccc",
            "success-inactive": "#858585",
            "success-disabled": "#b0b0b0",
            "positive-hover": "#e5e5e5",
            "positive-active": "#cacaca",
            "positive-inactive": "#838383",
            "positive-disabled": "#aeaeae",
            "info-hover": "#e4e4e4",
            "info-active": "#cacaca",
            "info-inactive": "#828282",
            "info-disabled": "#b0b0b0",
            "discovery-hover": "#bdbdbd",
            "discovery-active": "#a8a8a8",
            "discovery-inactive": "#6a6a6a",
            "discovery-disabled": "#939393",
            "base-inverse-hover": "#282828",
            "base-inverse-active": "#111111",
            "base-inverse-inactive": "#060606",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#151515",
            "brand-inverse-active": "#d5d5d5",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#fafafa66",
            "danger-inverse-hover": "#151515",
            "danger-inverse-active": "#d5d5d5",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#aeaeae",
            "negative-inverse-hover": "#151515",
            "negative-inverse-active": "#d5d5d5",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#fafafa66",
            "warning-inverse-hover": "#151515",
            "warning-inverse-active": "#d5d5d5",
            "warning-inverse-inactive": "#ffffff",
            "warning-inverse-disabled": "#fafafa66",
            "success-inverse-hover": "#151515",
            "success-inverse-active": "#d5d5d5",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#fafafa66",
            "positive-inverse-hover": "#151515",
            "positive-inverse-active": "#d5d5d5",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#fafafa66",
            "info-inverse-hover": "#151515",
            "info-inverse-active": "#d5d5d5",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#fafafa66",
            "discovery-inverse-hover": "#151515",
            "discovery-inverse-active": "#d5d5d5",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#fafafa66",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#eeeeee",
            "danger-ghost-hover": "#d3d3d3",
            "negative-ghost-hover": "#d1d1d1",
            "warning-ghost-hover": "#f3f3f3",
            "success-ghost-hover": "#ededed",
            "positive-ghost-hover": "#eeeeee",
            "info-ghost-hover": "#f2f2f2",
            "discovery-ghost-hover": "#f3f3f3",
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
            "lowest-hover": "#141414",
            "lowest-active": "#101010",
            "lowest-inactive": "#060606",
            "lowest-disabled": "#0c0c0c",
            "page-hover": "#2c2c2c",
            "page-active": "#252525",
            "page-inactive": "#141414",
            "page-disabled": "#1f1f1f",
            "elevated-hover": "#343434",
            "elevated-active": "#2c2c2c",
            "elevated-inactive": "#191919",
            "elevated-disabled": "#252525",
            "floating-hover": "#3d3d3d",
            "floating-active": "#343434",
            "floating-inactive": "#1e1e1e",
            "floating-disabled": "#2c2c2c",
            "highest-hover": "#616161",
            "highest-active": "#545454",
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
            "body-hover": "#868686",
            "body-active": "#a2a2a2",
            "body-inactive": "#f2f2f2",
            "body-disabled": "#bebebe66",
            "eyebrow-hover": "#818181",
            "eyebrow-active": "#717171",
            "eyebrow-inactive": "#464646",
            "eyebrow-disabled": "#61616166",
            "caption-hover": "#d1d1d1",
            "caption-active": "#b8b8b8",
            "caption-inactive": "#757575",
            "caption-disabled": "#9f9f9f66",
            "link-hover": "#bcbcbc",
            "link-active": "#a7a7a7",
            "link-inactive": "#6b6b6b",
            "link-disabled": "#939393",
            "required-hover": "#929292",
            "required-active": "#888888",
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
            "background-hover": "#3d3d3d",
            "background-active": "#343434",
            "background-inactive": "#1e1e1e",
            "background-disabled": "#2c2c2c",
            "border-hover": "#818181",
            "border-active": "#717171",
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
            "brand-hover": "#00291f",
            "brand-active": "#003328",
            "brand-inactive": "#204d42",
            "brand-disabled": "#183a31",
            "danger-hover": "#780000",
            "danger-active": "#890000",
            "danger-inactive": "#b93c2d",
            "danger-disabled": "#8e3024",
            "negative-hover": "#a00000",
            "negative-active": "#b72000",
            "negative-inactive": "#f5613e",
            "negative-disabled": "#be4d32",
            "warning-hover": "#6b4100",
            "warning-active": "#7d5200",
            "warning-inactive": "#b08332",
            "warning-disabled": "#88662a",
            "success-hover": "#00582e",
            "success-active": "#00693d",
            "success-inactive": "#36996a",
            "success-disabled": "#2c7752",
            "positive-hover": "#347b00",
            "positive-active": "#4b9200",
            "positive-inactive": "#8ad45b",
            "positive-disabled": "#6da54a",
            "info-hover": "#005272",
            "info-active": "#006384",
            "info-inactive": "#3694b7",
            "info-disabled": "#2d728d",
            "discovery-hover": "#423f89",
            "discovery-active": "#52509c",
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
            "brand-hover": "#004a39",
            "brand-active": "#005947",
            "brand-disabled": "#2d6556",
            "danger-hover": "#a20033",
            "danger-active": "#b80944",
            "danger-disabled": "#c0455d",
            "negative-hover": "#ad0000",
            "negative-active": "#c4000b",
            "negative-disabled": "#cb453c",
            "warning-hover": "#9e6400",
            "warning-active": "#b87c00",
            "warning-disabled": "#c9994c",
            "success-hover": "#008044",
            "success-active": "#009759",
            "success-disabled": "#43aa77",
            "positive-hover": "#538100",
            "positive-active": "#699a18",
            "positive-disabled": "#88b056",
            "info-hover": "#008eb1",
            "info-active": "#1da9cd",
            "info-disabled": "#67c2df",
            "discovery-hover": "#6043a4",
            "discovery-active": "#7358ba",
            "discovery-disabled": "#8472c2",
            "base-subtle-hover": "#121315",
            "base-subtle-active": "#1b1c1e",
            "base-subtle-disabled": "#242527",
            "brand-subtle-hover": "#00291f",
            "brand-subtle-active": "#003328",
            "brand-subtle-disabled": "#183a31",
            "danger-subtle-hover": "#780000",
            "danger-subtle-active": "#890000",
            "danger-subtle-disabled": "#8e3024",
            "negative-subtle-hover": "#a00000",
            "negative-subtle-active": "#b72000",
            "negative-subtle-disabled": "#be4d32",
            "warning-subtle-hover": "#6b4100",
            "warning-subtle-active": "#7d5200",
            "warning-subtle-disabled": "#88662a",
            "success-subtle-hover": "#00582e",
            "success-subtle-active": "#00693d",
            "success-subtle-disabled": "#2c7752",
            "positive-subtle-hover": "#347b00",
            "positive-subtle-active": "#4b9200",
            "positive-subtle-disabled": "#6da54a",
            "info-subtle-hover": "#005272",
            "info-subtle-active": "#006384",
            "info-subtle-disabled": "#2d728d",
            "discovery-subtle-hover": "#423f89",
            "discovery-subtle-active": "#52509c",
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
            "brand-hover": "#004a39",
            "brand-active": "#005947",
            "brand-inactive": "#38836f",
            "brand-disabled": "#999999",
            "danger-hover": "#a20033",
            "danger-active": "#b80944",
            "danger-inactive": "#f85777",
            "danger-disabled": "#acacac",
            "negative-hover": "#ad0000",
            "negative-active": "#c4000b",
            "negative-inactive": "#ff554b",
            "negative-disabled": "#252525",
            "warning-hover": "#9e6400",
            "warning-active": "#b87c00",
            "warning-inactive": "#ffc25d",
            "warning-disabled": "#1d1d1d",
            "success-hover": "#008044",
            "success-active": "#009759",
            "success-inactive": "#50da97",
            "success-disabled": "#191919",
            "positive-hover": "#538100",
            "positive-active": "#699a18",
            "positive-inactive": "#ade16b",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#008eb1",
            "info-active": "#1da9cd",
            "info-inactive": "#80f8ff",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#6043a4",
            "discovery-active": "#7358ba",
            "discovery-inactive": "#aa91fa",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#46484b",
            "base-inverse-active": "#222326",
            "base-inverse-inactive": "#101114",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#141414",
            "brand-inverse-active": "#cecece",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#f1f1f166",
            "danger-inverse-hover": "#141414",
            "danger-inverse-active": "#cecece",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#141414",
            "negative-inverse-active": "#cecece",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#252525",
            "warning-inverse-hover": "#46484b",
            "warning-inverse-active": "#202124",
            "warning-inverse-inactive": "#101114",
            "warning-inverse-disabled": "#1d1d1d",
            "success-inverse-hover": "#141414",
            "success-inverse-active": "#cecece",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#141414",
            "positive-inverse-active": "#cecece",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#141414",
            "info-inverse-active": "#cecece",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#141414",
            "discovery-inverse-active": "#cecece",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#4c8975",
            "danger-ghost-hover": "#ff6e80",
            "negative-ghost-hover": "#ff7562",
            "warning-ghost-hover": "#ffcb7e",
            "success-ghost-hover": "#80e5a2",
            "positive-ghost-hover": "#b6ea7e",
            "info-ghost-hover": "#98ffff",
            "discovery-ghost-hover": "#b298ff",
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
            "lowest-hover": "#a0a0a0",
            "lowest-active": "#c0c0c0",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#e1e1e166",
            "page-hover": "#a6a6a6",
            "page-active": "#c8c8c8",
            "page-inactive": "#ffffff",
            "page-disabled": "#eaeaea66",
            "elevated-hover": "#ababab",
            "elevated-active": "#cecece",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#f1f1f166",
            "floating-hover": "#b2b2b2",
            "floating-active": "#d5d5d5",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#fafafa66",
            "highest-hover": "#b6b6b6",
            "highest-active": "#dadada",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff66",
            "link-hover": "#185bcd",
            "link-active": "#3072e6",
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
            "body-hover": "#707070",
            "body-active": "#878787",
            "body-inactive": "#cbcbcb",
            "body-disabled": "#9f9f9f66",
            "eyebrow-hover": "#313131",
            "eyebrow-active": "#3c3c3c",
            "eyebrow-inactive": "#5e5e5e",
            "eyebrow-disabled": "#48484866",
            "caption-hover": "#434343",
            "caption-active": "#525252",
            "caption-inactive": "#7d7d7d",
            "caption-disabled": "#61616166",
            "link-hover": "#185bcd",
            "link-active": "#3072e6",
            "link-inactive": "#6db3ff",
            "link-disabled": "#3a3a3a",
            "required-hover": "#ad0000",
            "required-active": "#c4000b",
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
            "background-hover": "#b2b2b2",
            "background-active": "#d5d5d5",
            "background-inactive": "#ffffff",
            "background-disabled": "#fafafa66",
            "border-hover": "#262626",
            "border-active": "#303030",
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
            "brand-hover": "#185243",
            "brand-active": "#19574a",
            "brand-inactive": "#3b5e55",
            "brand-disabled": "#34524a",
            "danger-hover": "#7c2424",
            "danger-active": "#862727",
            "danger-inactive": "#9f584f",
            "danger-disabled": "#854b44",
            "negative-hover": "#922a2a",
            "negative-active": "#9f422e",
            "negative-inactive": "#c8705c",
            "negative-disabled": "#a16253",
            "warning-hover": "#755522",
            "warning-active": "#7f6025",
            "warning-inactive": "#998051",
            "warning-disabled": "#826d47",
            "success-hover": "#1f6b47",
            "success-active": "#227452",
            "success-inactive": "#528c70",
            "success-disabled": "#477760",
            "positive-hover": "#4a7e25",
            "positive-active": "#5b8a28",
            "positive-inactive": "#88b46d",
            "positive-disabled": "#749360",
            "info-hover": "#236179",
            "info-active": "#266c83",
            "info-inactive": "#558a9d",
            "info-disabled": "#4a7485",
            "discovery-hover": "#585682",
            "discovery-active": "#65638e",
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
            "brand-hover": "#1d6353",
            "brand-active": "#1f6c5c",
            "brand-disabled": "#476c62",
            "danger-hover": "#932b4c",
            "danger-active": "#9f3559",
            "danger-disabled": "#a4606d",
            "negative-hover": "#992c2c",
            "negative-active": "#a63037",
            "negative-disabled": "#aa605b",
            "warning-hover": "#916b2a",
            "warning-active": "#9f7a2e",
            "warning-disabled": "#ab8f64",
            "success-hover": "#258156",
            "success-active": "#298d64",
            "success-disabled": "#5c9679",
            "positive-hover": "#618126",
            "positive-active": "#6e8d3c",
            "positive-disabled": "#859b69",
            "info-hover": "#2d869b",
            "info-active": "#4696aa",
            "info-disabled": "#74abbd",
            "discovery-hover": "#6c5c93",
            "discovery-active": "#7a6ba2",
            "discovery-disabled": "#857aaa",
            "base-subtle-hover": "#323336",
            "base-subtle-active": "#393a3c",
            "base-subtle-disabled": "#3f4042",
            "brand-subtle-hover": "#185243",
            "brand-subtle-active": "#19574a",
            "brand-subtle-disabled": "#34524a",
            "danger-subtle-hover": "#7c2424",
            "danger-subtle-active": "#862727",
            "danger-subtle-disabled": "#854b44",
            "negative-subtle-hover": "#922a2a",
            "negative-subtle-active": "#9f422e",
            "negative-subtle-disabled": "#a16253",
            "warning-subtle-hover": "#755522",
            "warning-subtle-active": "#7f6025",
            "warning-subtle-disabled": "#826d47",
            "success-subtle-hover": "#1f6b47",
            "success-subtle-active": "#227452",
            "success-subtle-disabled": "#477760",
            "positive-subtle-hover": "#4a7e25",
            "positive-subtle-active": "#5b8a28",
            "positive-subtle-disabled": "#749360",
            "info-subtle-hover": "#236179",
            "info-subtle-active": "#266c83",
            "info-subtle-disabled": "#4a7485",
            "discovery-subtle-hover": "#585682",
            "discovery-subtle-active": "#65638e",
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
            "brand-hover": "#1d6353",
            "brand-active": "#1f6c5c",
            "brand-inactive": "#517f72",
            "brand-disabled": "#919191",
            "danger-hover": "#932b4c",
            "danger-active": "#9f3559",
            "danger-inactive": "#ce697d",
            "danger-disabled": "#9f9f9f",
            "negative-hover": "#992c2c",
            "negative-active": "#a63037",
            "negative-inactive": "#d16862",
            "negative-disabled": "#404040",
            "warning-hover": "#916b2a",
            "warning-active": "#9f7a2e",
            "warning-inactive": "#d4ad6c",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#258156",
            "success-active": "#298d64",
            "success-inactive": "#66b790",
            "success-disabled": "#383838",
            "positive-hover": "#618126",
            "positive-active": "#6e8d3c",
            "positive-inactive": "#9fbf76",
            "positive-disabled": "#525252",
            "info-hover": "#2d869b",
            "info-active": "#4696aa",
            "info-inactive": "#7fd5da",
            "info-disabled": "#393939",
            "discovery-hover": "#6c5c93",
            "discovery-active": "#7a6ba2",
            "discovery-inactive": "#9c89d8",
            "discovery-disabled": "#3b3b3b",
            "base-inverse-hover": "#57595b",
            "base-inverse-active": "#3e3e41",
            "base-inverse-inactive": "#303136",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#343434",
            "brand-inverse-active": "#b6b6b6",
            "brand-inverse-inactive": "#d9d9d9",
            "brand-inverse-disabled": "#cfcfcf66",
            "danger-inverse-hover": "#343434",
            "danger-inverse-active": "#b6b6b6",
            "danger-inverse-inactive": "#d9d9d9",
            "danger-inverse-disabled": "#9f9f9f",
            "negative-inverse-hover": "#343434",
            "negative-inverse-active": "#b6b6b6",
            "negative-inverse-inactive": "#d9d9d9",
            "negative-inverse-disabled": "#404040",
            "warning-inverse-hover": "#57595b",
            "warning-inverse-active": "#3c3d40",
            "warning-inverse-inactive": "#303136",
            "warning-inverse-disabled": "#3b3b3b",
            "success-inverse-hover": "#343434",
            "success-inverse-active": "#b6b6b6",
            "success-inverse-inactive": "#d9d9d9",
            "success-inverse-disabled": "#383838",
            "positive-inverse-hover": "#343434",
            "positive-inverse-active": "#b6b6b6",
            "positive-inverse-inactive": "#d9d9d9",
            "positive-inverse-disabled": "#525252",
            "info-inverse-hover": "#343434",
            "info-inverse-active": "#b6b6b6",
            "info-inverse-inactive": "#d9d9d9",
            "info-inverse-disabled": "#393939",
            "discovery-inverse-hover": "#343434",
            "discovery-inverse-active": "#b6b6b6",
            "discovery-inverse-inactive": "#d9d9d9",
            "discovery-inverse-disabled": "#3b3b3b",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#5f8377",
            "danger-ghost-hover": "#d77581",
            "negative-ghost-hover": "#d57b6f",
            "warning-ghost-hover": "#d9b47e",
            "success-ghost-hover": "#82c598",
            "positive-ghost-hover": "#a6c880",
            "info-ghost-hover": "#8cdede",
            "discovery-ghost-hover": "#a08cde",
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
            "lowest-hover": "#969696",
            "lowest-active": "#adadad",
            "lowest-inactive": "#d9d9d9",
            "lowest-disabled": "#c4c4c466",
            "page-hover": "#9a9a9a",
            "page-active": "#b2b2b2",
            "page-inactive": "#d9d9d9",
            "page-disabled": "#cacaca66",
            "elevated-hover": "#9e9e9e",
            "elevated-active": "#b6b6b6",
            "elevated-inactive": "#d9d9d9",
            "elevated-disabled": "#cfcfcf66",
            "floating-hover": "#a3a3a3",
            "floating-active": "#bbbbbb",
            "floating-inactive": "#d9d9d9",
            "floating-disabled": "#d5d5d566",
            "highest-hover": "#a6a6a6",
            "highest-active": "#bfbfbf",
            "highest-inactive": "#d9d9d9",
            "highest-disabled": "#d9d9d966",
            "link-hover": "#4369aa",
            "link-active": "#5479bb",
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
            "body-hover": "#757575",
            "body-active": "#858585",
            "body-inactive": "#b4b4b4",
            "body-disabled": "#96969666",
            "eyebrow-hover": "#494949",
            "eyebrow-active": "#505050",
            "eyebrow-inactive": "#686868",
            "eyebrow-disabled": "#59595966",
            "caption-hover": "#555555",
            "caption-active": "#606060",
            "caption-inactive": "#7e7e7e",
            "caption-disabled": "#6a6a6a66",
            "link-hover": "#4369aa",
            "link-active": "#5479bb",
            "link-inactive": "#75a4d7",
            "link-disabled": "#4f4f4f",
            "required-hover": "#992c2c",
            "required-active": "#a63037",
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
            "background-hover": "#a3a3a3",
            "background-active": "#bbbbbb",
            "background-inactive": "#d9d9d9",
            "background-disabled": "#d5d5d566",
            "border-hover": "#414141",
            "border-active": "#484848",
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
            "danger-hover": "#3b0000",
            "danger-active": "#540000",
            "danger-inactive": "#cd220e",
            "danger-disabled": "#85180a",
            "negative-hover": "#750000",
            "negative-active": "#971a00",
            "negative-inactive": "#ff6e4b",
            "negative-disabled": "#d63913",
            "warning-hover": "#281900",
            "warning-active": "#432c00",
            "warning-inactive": "#c08315",
            "warning-disabled": "#7e5711",
            "success-hover": "#000d07",
            "success-active": "#002616",
            "success-inactive": "#1c9d60",
            "success-disabled": "#14663d",
            "positive-hover": "#1b4000",
            "positive-active": "#326100",
            "positive-inactive": "#91f055",
            "positive-disabled": "#65b533",
            "info-hover": "#002433",
            "info-active": "#00394d",
            "info-inactive": "#199ccc",
            "info-disabled": "#146787",
            "discovery-hover": "#2b2788",
            "discovery-active": "#3d3ba9",
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
            "brand-active": "#000e0b",
            "brand-disabled": "#154c3d",
            "danger-hover": "#780026",
            "danger-active": "#a50038",
            "danger-disabled": "#dc2c4e",
            "negative-hover": "#880000",
            "negative-active": "#a9000a",
            "negative-disabled": "#eb2d20",
            "warning-hover": "#724800",
            "warning-active": "#986600",
            "warning-disabled": "#e6a339",
            "success-hover": "#004726",
            "success-active": "#00683d",
            "success-disabled": "#2abb73",
            "positive-hover": "#2f4800",
            "positive-active": "#598f00",
            "positive-disabled": "#8cc742",
            "info-hover": "#00728e",
            "info-active": "#00b3e1",
            "info-disabled": "#6cd8fa",
            "discovery-hover": "#532ab2",
            "discovery-active": "#6e48d3",
            "discovery-disabled": "#8972da",
            "base-subtle-hover": "#000000",
            "base-subtle-active": "#000000",
            "base-subtle-disabled": "#000000",
            "brand-subtle-hover": "#000000",
            "brand-subtle-active": "#000000",
            "brand-subtle-disabled": "#010303",
            "danger-subtle-hover": "#3b0000",
            "danger-subtle-active": "#540000",
            "danger-subtle-disabled": "#85180a",
            "negative-subtle-hover": "#750000",
            "negative-subtle-active": "#971a00",
            "negative-subtle-disabled": "#d63913",
            "warning-subtle-hover": "#281900",
            "warning-subtle-active": "#432c00",
            "warning-subtle-disabled": "#7e5711",
            "success-subtle-hover": "#000d07",
            "success-subtle-active": "#002616",
            "success-subtle-disabled": "#14663d",
            "positive-subtle-hover": "#1b4000",
            "positive-subtle-active": "#326100",
            "positive-subtle-disabled": "#65b533",
            "info-subtle-hover": "#002433",
            "info-subtle-active": "#00394d",
            "info-subtle-disabled": "#146787",
            "discovery-subtle-hover": "#2b2788",
            "discovery-subtle-active": "#3d3ba9",
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
            "brand-active": "#000e0b",
            "brand-inactive": "#207c64",
            "brand-disabled": "#a4a4a4",
            "danger-hover": "#780026",
            "danger-active": "#a50038",
            "danger-inactive": "#ff7490",
            "danger-disabled": "#c0c0c0",
            "negative-hover": "#880000",
            "negative-active": "#a9000a",
            "negative-inactive": "#ff756d",
            "negative-disabled": "#000000",
            "warning-hover": "#724800",
            "warning-active": "#986600",
            "warning-inactive": "#ffd287",
            "warning-disabled": "#000000",
            "success-hover": "#004726",
            "success-active": "#00683d",
            "success-inactive": "#45f8a1",
            "success-disabled": "#000000",
            "positive-hover": "#2f4800",
            "positive-active": "#598f00",
            "positive-inactive": "#bffb74",
            "positive-disabled": "#212121",
            "info-hover": "#00728e",
            "info-active": "#00b3e1",
            "info-inactive": "#bafbff",
            "info-disabled": "#000000",
            "discovery-hover": "#532ab2",
            "discovery-active": "#6e48d3",
            "discovery-inactive": "#d7cbff",
            "discovery-disabled": "#000000",
            "base-inverse-hover": "#2b2f34",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#000000",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#000000",
            "brand-inverse-active": "#f1f1f1",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#ffffff66",
            "danger-inverse-hover": "#000000",
            "danger-inverse-active": "#f1f1f1",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#c0c0c0",
            "negative-inverse-hover": "#000000",
            "negative-inverse-active": "#f1f1f1",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#000000",
            "warning-inverse-hover": "#2b2f34",
            "warning-inverse-active": "#000000",
            "warning-inverse-inactive": "#000000",
            "warning-inverse-disabled": "#000000",
            "success-inverse-hover": "#000000",
            "success-inverse-active": "#f1f1f1",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#000000",
            "positive-inverse-hover": "#000000",
            "positive-inverse-active": "#f1f1f1",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#212121",
            "info-inverse-hover": "#000000",
            "info-inverse-active": "#f1f1f1",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#000000",
            "discovery-inverse-hover": "#000000",
            "discovery-inverse-active": "#f1f1f1",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#000000",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#378b70",
            "danger-ghost-hover": "#ffa0ab",
            "negative-ghost-hover": "#ff9c8e",
            "warning-ghost-hover": "#ffe2b7",
            "success-ghost-hover": "#97fcb9",
            "positive-ghost-hover": "#ceff98",
            "info-ghost-hover": "#dcffff",
            "discovery-ghost-hover": "#e5dcff",
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
            "lowest-hover": "#afafaf",
            "lowest-active": "#dddddd",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#ffffff66",
            "page-hover": "#b7b7b7",
            "page-active": "#e9e9e9",
            "page-inactive": "#ffffff",
            "page-disabled": "#ffffff66",
            "elevated-hover": "#bfbfbf",
            "elevated-active": "#f1f1f1",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#ffffff66",
            "floating-hover": "#c9c9c9",
            "floating-active": "#fbfbfb",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#ffffff66",
            "highest-hover": "#cfcfcf",
            "highest-active": "#ffffff",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff66",
            "link-hover": "#0050d9",
            "link-active": "#2172ff",
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
            "body-hover": "#696969",
            "body-active": "#8a8a8a",
            "body-inactive": "#ededed",
            "body-disabled": "#adadad66",
            "eyebrow-hover": "#0e0e0e",
            "eyebrow-active": "#1e1e1e",
            "eyebrow-inactive": "#4f4f4f",
            "eyebrow-disabled": "#2f2f2f66",
            "caption-hover": "#282828",
            "caption-active": "#3e3e3e",
            "caption-inactive": "#7c7c7c",
            "caption-disabled": "#53535366",
            "link-hover": "#0050d9",
            "link-active": "#2172ff",
            "link-inactive": "#9ecdff",
            "link-disabled": "#1b1b1b",
            "required-hover": "#880000",
            "required-active": "#a9000a",
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
            "background-hover": "#c9c9c9",
            "background-active": "#fbfbfb",
            "background-inactive": "#ffffff",
            "background-disabled": "#ffffff66",
            "border-hover": "#000000",
            "border-active": "#0c0c0c",
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
            "brand-hover": "#232323",
            "brand-active": "#2c2c2c",
            "brand-inactive": "#454545",
            "brand-disabled": "#343434",
            "danger-hover": "#383838",
            "danger-active": "#414141",
            "danger-inactive": "#686868",
            "danger-disabled": "#505050",
            "negative-hover": "#4d4d4d",
            "negative-active": "#5e5e5e",
            "negative-inactive": "#919191",
            "negative-disabled": "#717171",
            "warning-hover": "#4a4a4a",
            "warning-active": "#5b5b5b",
            "warning-inactive": "#8b8b8b",
            "warning-disabled": "#6c6c6c",
            "success-hover": "#4c4c4c",
            "success-active": "#5b5b5b",
            "success-inactive": "#888888",
            "success-disabled": "#6a6a6a",
            "positive-hover": "#6c6c6c",
            "positive-active": "#818181",
            "positive-inactive": "#c1c1c1",
            "positive-disabled": "#969696",
            "info-hover": "#4c4c4c",
            "info-active": "#5c5c5c",
            "info-inactive": "#8a8a8a",
            "info-disabled": "#6a6a6a",
            "discovery-hover": "#484848",
            "discovery-active": "#595959",
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
            "brand-hover": "#404040",
            "brand-active": "#4e4e4e",
            "brand-disabled": "#5b5b5b",
            "danger-hover": "#505050",
            "danger-active": "#5c5c5c",
            "danger-disabled": "#707070",
            "negative-hover": "#545454",
            "negative-active": "#606060",
            "negative-disabled": "#737373",
            "warning-hover": "#717171",
            "warning-active": "#888888",
            "warning-disabled": "#a1a1a1",
            "success-hover": "#6f6f6f",
            "success-active": "#838383",
            "success-disabled": "#989898",
            "positive-hover": "#747474",
            "positive-active": "#8c8c8c",
            "positive-disabled": "#a4a4a4",
            "info-hover": "#838383",
            "info-active": "#9c9c9c",
            "info-disabled": "#b6b6b6",
            "discovery-hover": "#555555",
            "discovery-active": "#696969",
            "discovery-disabled": "#7e7e7e",
            "base-subtle-hover": "#131313",
            "base-subtle-active": "#1c1c1c",
            "base-subtle-disabled": "#252525",
            "brand-subtle-hover": "#232323",
            "brand-subtle-active": "#2c2c2c",
            "brand-subtle-disabled": "#343434",
            "danger-subtle-hover": "#383838",
            "danger-subtle-active": "#414141",
            "danger-subtle-disabled": "#505050",
            "negative-subtle-hover": "#4d4d4d",
            "negative-subtle-active": "#5e5e5e",
            "negative-subtle-disabled": "#717171",
            "warning-subtle-hover": "#4a4a4a",
            "warning-subtle-active": "#5b5b5b",
            "warning-subtle-disabled": "#6c6c6c",
            "success-subtle-hover": "#4c4c4c",
            "success-subtle-active": "#5b5b5b",
            "success-subtle-disabled": "#6a6a6a",
            "positive-subtle-hover": "#6c6c6c",
            "positive-subtle-active": "#818181",
            "positive-subtle-disabled": "#969696",
            "info-subtle-hover": "#4c4c4c",
            "info-subtle-active": "#5c5c5c",
            "info-subtle-disabled": "#6a6a6a",
            "discovery-subtle-hover": "#484848",
            "discovery-subtle-active": "#595959",
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
            "brand-hover": "#404040",
            "brand-active": "#4e4e4e",
            "brand-inactive": "#767676",
            "brand-disabled": "#999999",
            "danger-hover": "#505050",
            "danger-active": "#5c5c5c",
            "danger-inactive": "#919191",
            "danger-disabled": "#acacac",
            "negative-hover": "#545454",
            "negative-active": "#606060",
            "negative-inactive": "#919191",
            "negative-disabled": "#252525",
            "warning-hover": "#717171",
            "warning-active": "#888888",
            "warning-inactive": "#cccccc",
            "warning-disabled": "#1d1d1d",
            "success-hover": "#6f6f6f",
            "success-active": "#838383",
            "success-inactive": "#c2c2c2",
            "success-disabled": "#191919",
            "positive-hover": "#747474",
            "positive-active": "#8c8c8c",
            "positive-inactive": "#d1d1d1",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#838383",
            "info-active": "#9c9c9c",
            "info-inactive": "#e6e6e6",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#555555",
            "discovery-active": "#696969",
            "discovery-inactive": "#a1a1a1",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#484848",
            "base-inverse-active": "#232323",
            "base-inverse-inactive": "#111111",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#141414",
            "brand-inverse-active": "#cecece",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#f1f1f166",
            "danger-inverse-hover": "#141414",
            "danger-inverse-active": "#cecece",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#141414",
            "negative-inverse-active": "#cecece",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#252525",
            "warning-inverse-hover": "#484848",
            "warning-inverse-active": "#212121",
            "warning-inverse-inactive": "#111111",
            "warning-inverse-disabled": "#1d1d1d",
            "success-inverse-hover": "#141414",
            "success-inverse-active": "#cecece",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#141414",
            "positive-inverse-active": "#cecece",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#141414",
            "info-inverse-active": "#cecece",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#141414",
            "discovery-inverse-active": "#cecece",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#7e7e7e",
            "danger-ghost-hover": "#9e9e9e",
            "negative-ghost-hover": "#9f9f9f",
            "warning-ghost-hover": "#d3d3d3",
            "success-ghost-hover": "#d0d0d0",
            "positive-ghost-hover": "#dadada",
            "info-ghost-hover": "#eeeeee",
            "discovery-ghost-hover": "#a8a8a8",
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
            "lowest-hover": "#a0a0a0",
            "lowest-active": "#c0c0c0",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#e1e1e166",
            "page-hover": "#a6a6a6",
            "page-active": "#c8c8c8",
            "page-inactive": "#ffffff",
            "page-disabled": "#eaeaea66",
            "elevated-hover": "#ababab",
            "elevated-active": "#cecece",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#f1f1f166",
            "floating-hover": "#b2b2b2",
            "floating-active": "#d5d5d5",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#fafafa66",
            "highest-hover": "#b6b6b6",
            "highest-active": "#dadada",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff66",
            "link-hover": "#626262",
            "link-active": "#777777",
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
            "body-hover": "#707070",
            "body-active": "#878787",
            "body-inactive": "#cbcbcb",
            "body-disabled": "#9f9f9f66",
            "eyebrow-hover": "#313131",
            "eyebrow-active": "#3c3c3c",
            "eyebrow-inactive": "#5e5e5e",
            "eyebrow-disabled": "#48484866",
            "caption-hover": "#434343",
            "caption-active": "#525252",
            "caption-inactive": "#7d7d7d",
            "caption-disabled": "#61616166",
            "link-hover": "#626262",
            "link-active": "#777777",
            "link-inactive": "#afafaf",
            "link-disabled": "#3a3a3a",
            "required-hover": "#545454",
            "required-active": "#606060",
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
            "background-hover": "#b2b2b2",
            "background-active": "#d5d5d5",
            "background-inactive": "#ffffff",
            "background-disabled": "#fafafa66",
            "border-hover": "#262626",
            "border-active": "#303030",
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
