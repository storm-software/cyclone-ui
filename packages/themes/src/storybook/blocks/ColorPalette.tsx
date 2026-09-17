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
            "14": "#1a1c1f"
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
            "base-hover": "#363636",
            "base-active": "#333333",
            "base-inactive": "#282828",
            "base-disabled": "#3a3a3a99",
            "brand-hover": "#013429",
            "brand-active": "#154338",
            "brand-inactive": "#002b21",
            "brand-disabled": "#213932",
            "danger-hover": "#350005",
            "danger-active": "#410a0e",
            "danger-inactive": "#2f0002",
            "danger-disabled": "#311312",
            "negative-hover": "#6d0000",
            "negative-active": "#83100a",
            "negative-inactive": "#610000",
            "negative-disabled": "#642821",
            "warning-hover": "#432e00",
            "warning-active": "#553e14",
            "warning-inactive": "#3a2500",
            "warning-disabled": "#463923",
            "success-hover": "#093826",
            "success-active": "#1c4835",
            "success-inactive": "#002f1d",
            "success-disabled": "#263d32",
            "positive-hover": "#1c3500",
            "positive-active": "#2b450d",
            "positive-inactive": "#142d00",
            "positive-disabled": "#2b3b1e",
            "info-hover": "#14323d",
            "info-active": "#24424d",
            "info-inactive": "#0b2a34",
            "info-disabled": "#293940",
            "discovery-hover": "#291e45",
            "discovery-active": "#362c54",
            "discovery-inactive": "#22173c",
            "discovery-disabled": "#2f2a41"
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
            "base-hover": "#7d7d7d",
            "base-active": "#d1d1d1",
            "base-disabled": "#61616199",
            "brand-hover": "#008f71",
            "brand-active": "#54d9b8",
            "brand-disabled": "#6eb39f",
            "danger-hover": "#a70037",
            "danger-active": "#e8486a",
            "danger-disabled": "#b05663",
            "negative-hover": "#d00000",
            "negative-active": "#ff3e2f",
            "negative-disabled": "#d65e4f",
            "warning-hover": "#a46900",
            "warning-active": "#f0b14b",
            "warning-disabled": "#c09c66",
            "success-hover": "#009865",
            "success-active": "#68e6ae",
            "success-disabled": "#7bbd9c",
            "positive-hover": "#499400",
            "positive-active": "#93e246",
            "positive-disabled": "#8dba69",
            "info-hover": "#318ca8",
            "info-active": "#83d9f7",
            "info-disabled": "#86b6c7",
            "discovery-hover": "#7656c2",
            "discovery-active": "#b79aff",
            "discovery-disabled": "#998bcd",
            "base-subtle-hover": "#5e5e5e",
            "base-subtle-active": "#9f9f9f",
            "base-subtle-disabled": "#48484899",
            "brand-subtle-hover": "#004e3c",
            "brand-subtle-active": "#2c7965",
            "brand-subtle-disabled": "#3b6357",
            "danger-subtle-hover": "#470008",
            "danger-subtle-active": "#661b21",
            "danger-subtle-disabled": "#4b2122",
            "negative-subtle-hover": "#610000",
            "negative-subtle-active": "#881710",
            "negative-subtle-disabled": "#642821",
            "warning-subtle-hover": "#815300",
            "warning-subtle-active": "#be8d39",
            "warning-subtle-disabled": "#977b50",
            "success-subtle-hover": "#00613e",
            "success-subtle-active": "#41966f",
            "success-subtle-disabled": "#4d7a64",
            "positive-subtle-hover": "#90ad6c",
            "positive-subtle-active": "#ecffc7",
            "positive-subtle-disabled": "#cfe2ba",
            "info-subtle-hover": "#1b596c",
            "info-subtle-active": "#518ca1",
            "info-subtle-disabled": "#547581",
            "discovery-subtle-hover": "#48337d",
            "discovery-subtle-active": "#735fae",
            "discovery-subtle-disabled": "#605683"
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
            "base-hover": "#bababa",
            "base-active": "#ffffff",
            "base-inactive": "#7d7d7d",
            "base-disabled": "#999999",
            "brand-hover": "#008f71",
            "brand-active": "#54d9b8",
            "brand-inactive": "#006449",
            "brand-disabled": "#6eb39f",
            "danger-hover": "#a70037",
            "danger-active": "#e8486a",
            "danger-inactive": "#7f001a",
            "danger-disabled": "#aeaeae",
            "negative-hover": "#d00000",
            "negative-active": "#ff3e2f",
            "negative-inactive": "#a10000",
            "negative-disabled": "#999999",
            "warning-hover": "#a46900",
            "warning-active": "#f0b14b",
            "warning-inactive": "#784000",
            "warning-disabled": "#c09c66",
            "success-hover": "#009865",
            "success-active": "#68e6ae",
            "success-inactive": "#006a3b",
            "success-disabled": "#7bbd9c",
            "positive-hover": "#499400",
            "positive-active": "#93e246",
            "positive-inactive": "#1b6600",
            "positive-disabled": "#8dba69",
            "info-hover": "#318ca8",
            "info-active": "#83d9f7",
            "info-inactive": "#00607a",
            "info-disabled": "#86b6c7",
            "discovery-hover": "#7656c2",
            "discovery-active": "#b79aff",
            "discovery-inactive": "#512c96",
            "discovery-disabled": "#998bcd",
            "base-inverse-hover": "#131314",
            "base-inverse-active": "#262628",
            "base-inverse-inactive": "#030303",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#bababa",
            "brand-inverse-active": "#ffffff",
            "brand-inverse-inactive": "#7d7d7d",
            "brand-inverse-disabled": "#fafafa99",
            "danger-inverse-hover": "#bababa",
            "danger-inverse-active": "#ffffff",
            "danger-inverse-inactive": "#7d7d7d",
            "danger-inverse-disabled": "#aeaeae",
            "negative-inverse-hover": "#bababa",
            "negative-inverse-active": "#ffffff",
            "negative-inverse-inactive": "#7d7d7d",
            "negative-inverse-disabled": "#fafafa99",
            "warning-inverse-hover": "#bababa",
            "warning-inverse-active": "#ffffff",
            "warning-inverse-inactive": "#7d7d7d",
            "warning-inverse-disabled": "#fafafa99",
            "success-inverse-hover": "#bababa",
            "success-inverse-active": "#ffffff",
            "success-inverse-inactive": "#7d7d7d",
            "success-inverse-disabled": "#fafafa99",
            "positive-inverse-hover": "#bababa",
            "positive-inverse-active": "#ffffff",
            "positive-inverse-inactive": "#7d7d7d",
            "positive-inverse-disabled": "#fafafa99",
            "info-inverse-hover": "#bababa",
            "info-inverse-active": "#ffffff",
            "info-inverse-inactive": "#7d7d7d",
            "info-inverse-disabled": "#fafafa99",
            "discovery-inverse-hover": "#bababa",
            "discovery-inverse-active": "#ffffff",
            "discovery-inverse-inactive": "#7d7d7d",
            "discovery-inverse-disabled": "#fafafa99",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#92ffdd",
            "danger-ghost-hover": "#ff7186",
            "negative-ghost-hover": "#ff8e77",
            "warning-ghost-hover": "#ffd484",
            "success-ghost-hover": "#99ffd4",
            "positive-ghost-hover": "#b8ff8d",
            "info-ghost-hover": "#a9ffff",
            "discovery-ghost-hover": "#d9bcff",
            "base-inverse-ghost-hover": "#2d2d2f"
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
            "lowest-hover": "#09090a",
            "lowest-active": "#0f0f10",
            "lowest-inactive": "#060607",
            "lowest-disabled": "#0c0c0d",
            "page-hover": "#19191b",
            "page-active": "#242426",
            "page-inactive": "#141416",
            "page-disabled": "#1f1f20",
            "elevated-hover": "#1e1f22",
            "elevated-active": "#292a2d",
            "elevated-inactive": "#18191b",
            "elevated-disabled": "#242527",
            "floating-hover": "#242529",
            "floating-active": "#313236",
            "floating-inactive": "#1d1e22",
            "floating-disabled": "#2b2c2e",
            "highest-hover": "#3d3d3d",
            "highest-active": "#515151",
            "highest-inactive": "#333333",
            "highest-disabled": "#48484899"
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
            "neutral.subtle": "#1a1c1f",
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
            "body-hover": "#8c8c8c",
            "body-active": "#dedede",
            "body-inactive": "#5e5e5e",
            "body-disabled": "#bebebe99",
            "eyebrow-hover": "#464646",
            "eyebrow-active": "#737373",
            "eyebrow-inactive": "#2d2d2d",
            "eyebrow-disabled": "#61616199",
            "caption-hover": "#757575",
            "caption-active": "#bababa",
            "caption-inactive": "#4d4d4d",
            "caption-disabled": "#9f9f9f99",
            "link-hover": "#2a67d1",
            "link-active": "#6bacff",
            "link-inactive": "#003da4",
            "link-disabled": "#6f95d6",
            "required-hover": "#d00000",
            "required-active": "#ff3e2f",
            "required-inactive": "#a10000",
            "required-disabled": "#d65e4f"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#2b2c30",
            "border": "#616161",
            "backdrop": "#0d0c0766",
            "background-hover": "#242529",
            "background-active": "#313236",
            "background-inactive": "#1d1e22",
            "background-disabled": "#2b2c2e",
            "border-hover": "#464646",
            "border-active": "#737373",
            "border-disabled": "#61616199"
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
            "14": "#373a3d"
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
            "base-hover": "#4c4c4c",
            "base-active": "#4a4a4a",
            "base-inactive": "#424242",
            "base-disabled": "#4f4f4f99",
            "brand-hover": "#1b574a",
            "brand-active": "#31594f",
            "brand-inactive": "#185345",
            "brand-disabled": "#3c504a",
            "danger-hover": "#581a1f",
            "danger-active": "#5b262a",
            "danger-inactive": "#55191b",
            "danger-disabled": "#4d2f2e",
            "negative-hover": "#762222",
            "negative-active": "#81322e",
            "negative-inactive": "#702020",
            "negative-disabled": "#6c423d",
            "warning-hover": "#604a1c",
            "warning-active": "#655231",
            "warning-inactive": "#5b431a",
            "warning-disabled": "#594f3d",
            "success-hover": "#255543",
            "success-active": "#385b4c",
            "success-inactive": "#19553e",
            "success-disabled": "#405249",
            "positive-hover": "#3b581a",
            "positive-active": "#455c2a",
            "positive-inactive": "#335418",
            "positive-disabled": "#445239",
            "info-hover": "#304b55",
            "info-active": "#3e555d",
            "info-inactive": "#274752",
            "info-disabled": "#424f54",
            "discovery-hover": "#423959",
            "discovery-active": "#4c4561",
            "discovery-inactive": "#3d3354",
            "discovery-disabled": "#474355"
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
            "base-hover": "#7e7e7e",
            "base-active": "#b9b9b9",
            "base-disabled": "#6a6a6a99",
            "brand-hover": "#288974",
            "brand-active": "#69b7a3",
            "brand-disabled": "#789f94",
            "danger-hover": "#962c4f",
            "danger-active": "#c06276",
            "danger-disabled": "#9b6970",
            "negative-hover": "#ac3232",
            "negative-active": "#cd5c53",
            "negative-disabled": "#b46e66",
            "warning-hover": "#946e2b",
            "warning-active": "#c6a063",
            "warning-disabled": "#a79273",
            "success-hover": "#298e6c",
            "success-active": "#74c2a0",
            "success-disabled": "#80a793",
            "positive-hover": "#598c29",
            "positive-active": "#8dbb60",
            "positive-disabled": "#8aa375",
            "info-hover": "#508495",
            "info-active": "#82bed3",
            "info-disabled": "#87a4af",
            "discovery-hover": "#7c6aa7",
            "discovery-active": "#a48dde",
            "discovery-disabled": "#938ab4",
            "base-subtle-hover": "#686868",
            "base-subtle-active": "#969696",
            "base-subtle-disabled": "#59595999",
            "brand-subtle-hover": "#1d6655",
            "brand-subtle-active": "#47796c",
            "brand-subtle-disabled": "#516b63",
            "danger-subtle-hover": "#621c24",
            "danger-subtle-active": "#6e393d",
            "danger-subtle-disabled": "#5c3c3d",
            "negative-subtle-hover": "#702020",
            "negative-subtle-active": "#833834",
            "negative-subtle-disabled": "#6c423d",
            "warning-subtle-hover": "#816126",
            "warning-subtle-active": "#a28658",
            "warning-subtle-disabled": "#8b7b63",
            "success-subtle-hover": "#207053",
            "success-subtle-active": "#598a74",
            "success-subtle-disabled": "#5e796c",
            "positive-subtle-hover": "#8b9b76",
            "positive-subtle-active": "#cfe5a5",
            "positive-subtle-disabled": "#b7c7a6",
            "info-subtle-hover": "#396472",
            "info-subtle-active": "#658691",
            "info-subtle-disabled": "#64777e",
            "discovery-subtle-hover": "#5a4d7b",
            "discovery-subtle-active": "#796e9b",
            "discovery-subtle-disabled": "#6b657f"
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
            "base-hover": "#a8a8a8",
            "base-active": "#d9d9d9",
            "base-inactive": "#7e7e7e",
            "base-disabled": "#919191",
            "brand-hover": "#288974",
            "brand-active": "#69b7a3",
            "brand-inactive": "#21725c",
            "brand-disabled": "#789f94",
            "danger-hover": "#962c4f",
            "danger-active": "#c06276",
            "danger-inactive": "#802538",
            "danger-disabled": "#a0a0a0",
            "negative-hover": "#ac3232",
            "negative-active": "#cd5c53",
            "negative-inactive": "#932b2b",
            "negative-disabled": "#919191",
            "warning-hover": "#946e2b",
            "warning-active": "#c6a063",
            "warning-inactive": "#7c5324",
            "warning-disabled": "#a79273",
            "success-hover": "#298e6c",
            "success-active": "#74c2a0",
            "success-inactive": "#227550",
            "success-disabled": "#80a793",
            "positive-hover": "#598c29",
            "positive-active": "#8dbb60",
            "positive-inactive": "#377321",
            "positive-disabled": "#8aa375",
            "info-hover": "#508495",
            "info-active": "#82bed3",
            "info-inactive": "#246a7d",
            "info-disabled": "#87a4af",
            "discovery-hover": "#7c6aa7",
            "discovery-active": "#a48dde",
            "discovery-inactive": "#614a8a",
            "discovery-disabled": "#938ab4",
            "base-inverse-hover": "#333335",
            "base-inverse-active": "#414142",
            "base-inverse-inactive": "#282828",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#a8a8a8",
            "brand-inverse-active": "#d9d9d9",
            "brand-inverse-inactive": "#7e7e7e",
            "brand-inverse-disabled": "#d5d5d599",
            "danger-inverse-hover": "#a8a8a8",
            "danger-inverse-active": "#d9d9d9",
            "danger-inverse-inactive": "#7e7e7e",
            "danger-inverse-disabled": "#a0a0a0",
            "negative-inverse-hover": "#a8a8a8",
            "negative-inverse-active": "#d9d9d9",
            "negative-inverse-inactive": "#7e7e7e",
            "negative-inverse-disabled": "#d5d5d599",
            "warning-inverse-hover": "#a8a8a8",
            "warning-inverse-active": "#d9d9d9",
            "warning-inverse-inactive": "#7e7e7e",
            "warning-inverse-disabled": "#d5d5d599",
            "success-inverse-hover": "#a8a8a8",
            "success-inverse-active": "#d9d9d9",
            "success-inverse-inactive": "#7e7e7e",
            "success-inverse-disabled": "#d5d5d599",
            "positive-inverse-hover": "#a8a8a8",
            "positive-inverse-active": "#d9d9d9",
            "positive-inverse-inactive": "#7e7e7e",
            "positive-inverse-disabled": "#d5d5d599",
            "info-inverse-hover": "#a8a8a8",
            "info-inverse-active": "#d9d9d9",
            "info-inverse-inactive": "#7e7e7e",
            "info-inverse-disabled": "#d5d5d599",
            "discovery-inverse-hover": "#a8a8a8",
            "discovery-inverse-active": "#d9d9d9",
            "discovery-inverse-inactive": "#7e7e7e",
            "discovery-inverse-disabled": "#d5d5d599",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#89ddc2",
            "danger-ghost-hover": "#d77785",
            "negative-ghost-hover": "#d88a7a",
            "warning-ghost-hover": "#dabb81",
            "success-ghost-hover": "#8cdebb",
            "positive-ghost-hover": "#a6dc86",
            "info-ghost-hover": "#95e0e0",
            "discovery-ghost-hover": "#bd9fe3",
            "base-inverse-ghost-hover": "#464647"
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
            "lowest-hover": "#2c2c2e",
            "lowest-active": "#303032",
            "lowest-inactive": "#29292d",
            "lowest-disabled": "#2e2e30",
            "page-hover": "#37373a",
            "page-active": "#3f3f41",
            "page-inactive": "#343436",
            "page-disabled": "#3c3c3d",
            "elevated-hover": "#3b3c3f",
            "elevated-active": "#434346",
            "elevated-inactive": "#36373a",
            "elevated-disabled": "#3f4042",
            "floating-hover": "#3f4044",
            "floating-active": "#48494c",
            "floating-inactive": "#3a3b3f",
            "floating-disabled": "#444547",
            "highest-hover": "#515151",
            "highest-active": "#5f5f5f",
            "highest-inactive": "#4a4a4a",
            "highest-disabled": "#59595999"
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
            "neutral.subtle": "#373a3d",
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
            "body-hover": "#888888",
            "body-active": "#c2c2c2",
            "body-inactive": "#686868",
            "body-disabled": "#ababab99",
            "eyebrow-hover": "#575757",
            "eyebrow-active": "#777777",
            "eyebrow-inactive": "#464646",
            "eyebrow-disabled": "#6a6a6a99",
            "caption-hover": "#787878",
            "caption-active": "#a8a8a8",
            "caption-inactive": "#5c5c5c",
            "caption-disabled": "#96969699",
            "link-hover": "#5072ac",
            "link-active": "#739fd6",
            "link-inactive": "#2b5294",
            "link-disabled": "#7890b8",
            "required-hover": "#ac3232",
            "required-active": "#cd5c53",
            "required-inactive": "#932b2b",
            "required-disabled": "#b46e66"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#444548",
            "border": "#6a6a6a",
            "backdrop": "#35322666",
            "background-hover": "#3f4044",
            "background-active": "#48494c",
            "background-inactive": "#3a3b3f",
            "background-disabled": "#444547",
            "border-hover": "#575757",
            "border-active": "#777777",
            "border-disabled": "#6a6a6a99"
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
            "base-hover": "#151515",
            "base-active": "#111111",
            "base-inactive": "#010101",
            "base-disabled": "#1b1b1b99",
            "brand-hover": "#000000",
            "brand-active": "#020b09",
            "brand-inactive": "#000000",
            "brand-disabled": "#050b09",
            "danger-hover": "#000000",
            "danger-active": "#000000",
            "danger-inactive": "#000000",
            "danger-disabled": "#000000",
            "negative-hover": "#2b0000",
            "negative-active": "#5a0400",
            "negative-inactive": "#1a0000",
            "negative-disabled": "#44100b",
            "warning-hover": "#000000",
            "warning-active": "#231802",
            "warning-inactive": "#000000",
            "warning-disabled": "#1c1509",
            "success-hover": "#000000",
            "success-active": "#051910",
            "success-inactive": "#000000",
            "success-disabled": "#09140f",
            "positive-hover": "#000000",
            "positive-active": "#020400",
            "positive-inactive": "#000000",
            "positive-disabled": "#070b04",
            "info-hover": "#000202",
            "info-active": "#0b1f26",
            "info-inactive": "#000000",
            "info-disabled": "#0c1519",
            "discovery-hover": "#0b0617",
            "discovery-active": "#1b1334",
            "discovery-inactive": "#020105",
            "discovery-disabled": "#100d1b"
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
            "base-hover": "#7c7c7c",
            "base-active": "#f6f6f6",
            "base-disabled": "#53535399",
            "brand-hover": "#005d49",
            "brand-active": "#4bf6cc",
            "brand-disabled": "#68c9ad",
            "danger-hover": "#7f002a",
            "danger-active": "#ff476e",
            "danger-disabled": "#c74256",
            "negative-hover": "#bb0000",
            "negative-active": "#ff5244",
            "negative-disabled": "#f45642",
            "warning-hover": "#7b4f00",
            "warning-active": "#ffbf57",
            "warning-disabled": "#d9a85f",
            "success-hover": "#006a46",
            "success-active": "#73ffc1",
            "success-disabled": "#7ed4a9",
            "positive-hover": "#316400",
            "positive-active": "#9cff3b",
            "positive-disabled": "#93d162",
            "info-hover": "#158eb3",
            "info-active": "#b2ebff",
            "info-disabled": "#91cbdf",
            "discovery-hover": "#7347dc",
            "discovery-active": "#e8dfff",
            "discovery-disabled": "#ab9be5",
            "base-subtle-hover": "#4f4f4f",
            "base-subtle-active": "#adadad",
            "base-subtle-disabled": "#2f2f2f99",
            "brand-subtle-hover": "#000000",
            "brand-subtle-active": "#146953",
            "brand-subtle-disabled": "#235042",
            "danger-subtle-hover": "#000000",
            "danger-subtle-active": "#42060b",
            "danger-subtle-disabled": "#210909",
            "negative-subtle-hover": "#1a0000",
            "negative-subtle-active": "#6a0600",
            "negative-subtle-disabled": "#44100b",
            "warning-subtle-hover": "#482f00",
            "warning-subtle-active": "#d8931b",
            "warning-subtle-disabled": "#a1793b",
            "success-subtle-hover": "#001a11",
            "success-subtle-active": "#299c67",
            "success-subtle-disabled": "#387658",
            "positive-subtle-hover": "#97c163",
            "positive-subtle-active": "#ffffff",
            "positive-subtle-disabled": "#f2fae9",
            "info-subtle-hover": "#063b4b",
            "info-subtle-active": "#3b92b1",
            "info-subtle-disabled": "#417082",
            "discovery-subtle-hover": "#331b72",
            "discovery-subtle-active": "#6d50c3",
            "discovery-subtle-disabled": "#524385"
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
            "base-hover": "#d4d4d4",
            "base-active": "#ffffff",
            "base-inactive": "#7c7c7c",
            "base-disabled": "#a4a4a4",
            "brand-hover": "#005d49",
            "brand-active": "#4bf6cc",
            "brand-inactive": "#001e16",
            "brand-disabled": "#68c9ad",
            "danger-hover": "#7f002a",
            "danger-active": "#ff476e",
            "danger-inactive": "#45000e",
            "danger-disabled": "#c3c3c3",
            "negative-hover": "#bb0000",
            "negative-active": "#ff5244",
            "negative-inactive": "#770000",
            "negative-disabled": "#a4a4a4",
            "warning-hover": "#7b4f00",
            "warning-active": "#ffbf57",
            "warning-inactive": "#3b2000",
            "warning-disabled": "#d9a85f",
            "success-hover": "#006a46",
            "success-active": "#73ffc1",
            "success-inactive": "#002716",
            "success-disabled": "#7ed4a9",
            "positive-hover": "#316400",
            "positive-active": "#9cff3b",
            "positive-inactive": "#092100",
            "positive-disabled": "#93d162",
            "info-hover": "#158eb3",
            "info-active": "#b2ebff",
            "info-inactive": "#00313e",
            "info-disabled": "#91cbdf",
            "discovery-hover": "#7347dc",
            "discovery-active": "#e8dfff",
            "discovery-inactive": "#3f1295",
            "discovery-disabled": "#ab9be5",
            "base-inverse-hover": "#000000",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#000000",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#d4d4d4",
            "brand-inverse-active": "#ffffff",
            "brand-inverse-inactive": "#7c7c7c",
            "brand-inverse-disabled": "#ffffff99",
            "danger-inverse-hover": "#d4d4d4",
            "danger-inverse-active": "#ffffff",
            "danger-inverse-inactive": "#7c7c7c",
            "danger-inverse-disabled": "#c3c3c3",
            "negative-inverse-hover": "#d4d4d4",
            "negative-inverse-active": "#ffffff",
            "negative-inverse-inactive": "#7c7c7c",
            "negative-inverse-disabled": "#ffffff99",
            "warning-inverse-hover": "#d4d4d4",
            "warning-inverse-active": "#ffffff",
            "warning-inverse-inactive": "#7c7c7c",
            "warning-inverse-disabled": "#ffffff99",
            "success-inverse-hover": "#d4d4d4",
            "success-inverse-active": "#ffffff",
            "success-inverse-inactive": "#7c7c7c",
            "success-inverse-disabled": "#ffffff99",
            "positive-inverse-hover": "#d4d4d4",
            "positive-inverse-active": "#ffffff",
            "positive-inverse-inactive": "#7c7c7c",
            "positive-inverse-disabled": "#ffffff99",
            "info-inverse-hover": "#d4d4d4",
            "info-inverse-active": "#ffffff",
            "info-inverse-inactive": "#7c7c7c",
            "info-inverse-disabled": "#ffffff99",
            "discovery-inverse-hover": "#d4d4d4",
            "discovery-inverse-active": "#ffffff",
            "discovery-inverse-inactive": "#7c7c7c",
            "discovery-inverse-disabled": "#ffffff99",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#d4fff1",
            "danger-ghost-hover": "#ffa4b1",
            "negative-ghost-hover": "#ffbaad",
            "warning-ghost-hover": "#ffe9bf",
            "success-ghost-hover": "#defff1",
            "positive-ghost-hover": "#e0ffcc",
            "info-ghost-hover": "#f5ffff",
            "discovery-ghost-hover": "#ffffff",
            "base-inverse-ghost-hover": "#09090a"
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
            "page-hover": "#000000",
            "page-active": "#000000",
            "page-inactive": "#000000",
            "page-disabled": "#000000",
            "elevated-hover": "#000000",
            "elevated-active": "#040506",
            "elevated-inactive": "#000000",
            "elevated-disabled": "#000000",
            "floating-hover": "#000000",
            "floating-active": "#0f1013",
            "floating-inactive": "#000000",
            "floating-disabled": "#060708",
            "highest-hover": "#1f1f1f",
            "highest-active": "#3c3c3c",
            "highest-inactive": "#111111",
            "highest-disabled": "#2f2f2f99"
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
            "body-hover": "#929292",
            "body-active": "#ffffff",
            "body-inactive": "#4f4f4f",
            "body-disabled": "#dadada99",
            "eyebrow-hover": "#2c2c2c",
            "eyebrow-active": "#6d6d6d",
            "eyebrow-inactive": "#080808",
            "eyebrow-disabled": "#53535399",
            "caption-hover": "#707070",
            "caption-active": "#d4d4d4",
            "caption-inactive": "#363636",
            "caption-disabled": "#adadad99",
            "link-hover": "#065df3",
            "link-active": "#9bc7ff",
            "link-inactive": "#002e7b",
            "link-disabled": "#75a2f0",
            "required-hover": "#bb0000",
            "required-active": "#ff5244",
            "required-inactive": "#770000",
            "required-disabled": "#f45642"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#08080a",
            "border": "#535353",
            "backdrop": "#00000066",
            "background-hover": "#000000",
            "background-active": "#0f1013",
            "background-inactive": "#000000",
            "background-disabled": "#060708",
            "border-hover": "#2c2c2c",
            "border-active": "#6d6d6d",
            "border-disabled": "#53535399"
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
            "14": "#1a1c1f"
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
            "base-hover": "#27282b",
            "base-active": "#292a2d",
            "base-inactive": "#313235",
            "base-disabled": "#242527",
            "brand-hover": "#174539",
            "brand-active": "#03352b",
            "brand-inactive": "#204d42",
            "brand-disabled": "#213932",
            "danger-hover": "#a92d1f",
            "danger-active": "#8e0900",
            "danger-inactive": "#b93c2d",
            "danger-disabled": "#813c32",
            "negative-hover": "#e14e2a",
            "negative-active": "#bd2900",
            "negative-inactive": "#f5613e",
            "negative-disabled": "#ae5b47",
            "warning-hover": "#a0731e",
            "warning-active": "#825700",
            "warning-inactive": "#b08332",
            "warning-disabled": "#82683f",
            "success-hover": "#21895b",
            "success-active": "#006e42",
            "success-inactive": "#36996a",
            "success-disabled": "#407358",
            "positive-hover": "#75be45",
            "positive-active": "#519812",
            "positive-inactive": "#8ad45b",
            "positive-disabled": "#77a160",
            "info-hover": "#2184a6",
            "info-active": "#006889",
            "info-inactive": "#3694b7",
            "info-disabled": "#417184",
            "discovery-hover": "#7171c0",
            "discovery-active": "#5655a1",
            "discovery-inactive": "#8081d2",
            "discovery-disabled": "#656795"
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
            "base-hover": "#282828",
            "base-active": "#020202",
            "base-disabled": "#3a3a3a99",
            "brand-hover": "#38836f",
            "brand-active": "#005745",
            "brand-disabled": "#3b6357",
            "danger-hover": "#f85777",
            "danger-active": "#b60342",
            "danger-disabled": "#b05663",
            "negative-hover": "#ff554b",
            "negative-active": "#c20006",
            "negative-disabled": "#ba574e",
            "warning-hover": "#ffc25d",
            "warning-active": "#b57a00",
            "warning-disabled": "#c09c66",
            "success-hover": "#50da97",
            "success-active": "#009557",
            "success-disabled": "#5fa57e",
            "positive-hover": "#ade16b",
            "positive-active": "#679712",
            "positive-disabled": "#8ead6c",
            "info-hover": "#80f8ff",
            "info-active": "#16a6ca",
            "info-disabled": "#7fbfd5",
            "discovery-hover": "#aa91fa",
            "discovery-active": "#7055b8",
            "discovery-disabled": "#8376b2",
            "base-subtle-hover": "#18191b",
            "base-subtle-active": "#010102",
            "base-subtle-disabled": "#242527",
            "brand-subtle-hover": "#204d42",
            "brand-subtle-active": "#003227",
            "brand-subtle-disabled": "#213932",
            "danger-subtle-hover": "#b93c2d",
            "danger-subtle-active": "#870000",
            "danger-subtle-disabled": "#813c32",
            "negative-subtle-hover": "#f5613e",
            "negative-subtle-active": "#b41d00",
            "negative-subtle-disabled": "#ae5b47",
            "warning-subtle-hover": "#b08332",
            "warning-subtle-active": "#7b5000",
            "warning-subtle-disabled": "#82683f",
            "success-subtle-hover": "#36996a",
            "success-subtle-active": "#00673c",
            "success-subtle-disabled": "#407358",
            "positive-subtle-hover": "#8ad45b",
            "positive-subtle-active": "#488f00",
            "positive-subtle-disabled": "#77a160",
            "info-subtle-hover": "#3694b7",
            "info-subtle-active": "#006182",
            "info-subtle-disabled": "#417184",
            "discovery-subtle-hover": "#8081d2",
            "discovery-subtle-active": "#504e9a",
            "discovery-subtle-disabled": "#656795"
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
            "base-inverse": "#1a1c1f",
            "brand-inverse": "#f1f1f1",
            "danger-inverse": "#f1f1f1",
            "negative-inverse": "#f1f1f1",
            "warning-inverse": "#1a1c1f",
            "success-inverse": "#f1f1f1",
            "positive-inverse": "#f1f1f1",
            "info-inverse": "#f1f1f1",
            "discovery-inverse": "#f1f1f1",
            "base-hover": "#b3b3b3",
            "base-active": "#1f1f1f",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff99",
            "brand-hover": "#38836f",
            "brand-active": "#005745",
            "brand-inactive": "#55a08b",
            "brand-disabled": "#999999",
            "danger-hover": "#f85777",
            "danger-active": "#b60342",
            "danger-inactive": "#ff7c99",
            "danger-disabled": "#acacac",
            "negative-hover": "#ff554b",
            "negative-active": "#c20006",
            "negative-inactive": "#ff7d6f",
            "negative-disabled": "#252525",
            "warning-hover": "#ffc25d",
            "warning-active": "#b57a00",
            "warning-inactive": "#fff28e",
            "warning-disabled": "#1e1e1e",
            "success-hover": "#50da97",
            "success-active": "#009557",
            "success-inactive": "#81ffc1",
            "success-disabled": "#191919",
            "positive-hover": "#ade16b",
            "positive-active": "#679712",
            "positive-inactive": "#daff99",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#80f8ff",
            "info-active": "#16a6ca",
            "info-inactive": "#9affff",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#aa91fa",
            "discovery-active": "#7055b8",
            "discovery-inactive": "#d0b8ff",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#101215",
            "base-inverse-active": "#000101",
            "base-inverse-inactive": "#303235",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#ffffff",
            "brand-inverse-active": "#cacaca",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#f1f1f199",
            "danger-inverse-hover": "#ffffff",
            "danger-inverse-active": "#cacaca",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#ffffff",
            "negative-inverse-active": "#cacaca",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#252525",
            "warning-inverse-hover": "#25272a",
            "warning-inverse-active": "#141618",
            "warning-inverse-inactive": "#303235",
            "warning-inverse-disabled": "#1e1e1e",
            "success-inverse-hover": "#ffffff",
            "success-inverse-active": "#cacaca",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#ffffff",
            "positive-inverse-active": "#cacaca",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#ffffff",
            "info-inverse-active": "#cacaca",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#ffffff",
            "discovery-inverse-active": "#cacaca",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#a2edd6",
            "danger-ghost-hover": "#ffc2db",
            "negative-ghost-hover": "#ffc2af",
            "warning-ghost-hover": "#fff38f",
            "success-ghost-hover": "#9affd8",
            "positive-ghost-hover": "#deff9d",
            "info-ghost-hover": "#9fffff",
            "discovery-ghost-hover": "#ffebff",
            "base-inverse-ghost-hover": "#292b2f",
            "warning-inverse-ghost-hover": "#4f5155"
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
            "lowest-hover": "#ffffff",
            "lowest-active": "#c9c9c9",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#e1e1e199",
            "page-hover": "#ffffff",
            "page-active": "#d1d1d1",
            "page-inactive": "#ffffff",
            "page-disabled": "#eaeaea99",
            "elevated-hover": "#ffffff",
            "elevated-active": "#d8d8d8",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#f1f1f199",
            "floating-hover": "#ffffff",
            "floating-active": "#e0e0e0",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#fafafa99",
            "highest-hover": "#ffffff",
            "highest-active": "#e4e4e4",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff99",
            "link-hover": "#5a9eff",
            "link-active": "#3678ed",
            "link-inactive": "#6db3ff",
            "link-disabled": "#668ed3"
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
            "body-hover": "#cbcbcb",
            "body-active": "#848484",
            "body-inactive": "#f9f9f9",
            "body-disabled": "#9f9f9f99",
            "eyebrow-hover": "#5e5e5e",
            "eyebrow-active": "#3b3b3b",
            "eyebrow-inactive": "#757575",
            "eyebrow-disabled": "#48484899",
            "caption-hover": "#7d7d7d",
            "caption-active": "#505050",
            "caption-inactive": "#9b9b9b",
            "caption-disabled": "#61616199",
            "link-hover": "#6db3ff",
            "link-active": "#2d6fe3",
            "link-inactive": "#96deff",
            "link-disabled": "#3a3a3a",
            "required-hover": "#ff554b",
            "required-active": "#c20006",
            "required-inactive": "#ff7d6f",
            "required-disabled": "#ba574e"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#fafafa",
            "border": "#3a3a3a",
            "backdrop": "#1a1c1f66",
            "background-hover": "#ffffff",
            "background-active": "#e0e0e0",
            "background-inactive": "#ffffff",
            "background-disabled": "#fafafa99",
            "border-hover": "#4c4c4c",
            "border-active": "#2f2f2f",
            "border-disabled": "#3a3a3a99"
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
            "14": "#373a3d"
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
            "base-hover": "#414245",
            "base-active": "#434346",
            "base-inactive": "#48494c",
            "base-disabled": "#3f4042",
            "brand-hover": "#335a50",
            "brand-active": "#1d564b",
            "brand-inactive": "#3b5e55",
            "brand-disabled": "#3c504a",
            "danger-hover": "#954c43",
            "danger-active": "#882e28",
            "danger-inactive": "#9f584f",
            "danger-disabled": "#7d534c",
            "negative-hover": "#b76551",
            "negative-active": "#a2482f",
            "negative-inactive": "#c8705c",
            "negative-disabled": "#996a5f",
            "warning-hover": "#907541",
            "warning-active": "#826326",
            "warning-inactive": "#998051",
            "warning-disabled": "#7e6e56",
            "success-hover": "#418366",
            "success-active": "#237755",
            "success-inactive": "#528c70",
            "success-disabled": "#557564",
            "positive-hover": "#7aa25f",
            "positive-active": "#5f8c37",
            "positive-inactive": "#88b46d",
            "positive-disabled": "#7b926e",
            "info-hover": "#447f94",
            "info-active": "#276f86",
            "info-inactive": "#558a9d",
            "info-disabled": "#57747f",
            "discovery-hover": "#7a7aa8",
            "discovery-active": "#686791",
            "discovery-inactive": "#8383b6",
            "discovery-disabled": "#70728b"
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
            "base-hover": "#424242",
            "base-active": "#282828",
            "base-disabled": "#4f4f4f99",
            "brand-hover": "#517f72",
            "brand-active": "#1f6a5b",
            "brand-disabled": "#516b63",
            "danger-hover": "#ce697d",
            "danger-active": "#9e3057",
            "danger-disabled": "#9b6970",
            "negative-hover": "#d16862",
            "negative-active": "#a53033",
            "negative-disabled": "#a16a65",
            "warning-hover": "#d4ad6c",
            "warning-active": "#9d792e",
            "warning-disabled": "#a79273",
            "success-hover": "#66b790",
            "success-active": "#298c63",
            "success-disabled": "#6e957f",
            "positive-hover": "#9fbf76",
            "positive-active": "#6d8c37",
            "positive-disabled": "#899b76",
            "info-hover": "#7fd5da",
            "info-active": "#4194a8",
            "info-disabled": "#82abb8",
            "discovery-hover": "#9c89d8",
            "discovery-active": "#7869a0",
            "discovery-disabled": "#847c9f",
            "base-subtle-hover": "#36373a",
            "base-subtle-active": "#20202f",
            "base-subtle-disabled": "#3f4042",
            "brand-subtle-hover": "#3b5e55",
            "brand-subtle-active": "#195649",
            "brand-subtle-disabled": "#3c504a",
            "danger-subtle-hover": "#9f584f",
            "danger-subtle-active": "#852626",
            "danger-subtle-disabled": "#7d534c",
            "negative-subtle-hover": "#c8705c",
            "negative-subtle-active": "#9d402e",
            "negative-subtle-disabled": "#996a5f",
            "warning-subtle-hover": "#998051",
            "warning-subtle-active": "#7e5f25",
            "warning-subtle-disabled": "#7e6e56",
            "success-subtle-hover": "#528c70",
            "success-subtle-active": "#217351",
            "success-subtle-disabled": "#557564",
            "positive-subtle-hover": "#88b46d",
            "positive-subtle-active": "#598928",
            "positive-subtle-disabled": "#7b926e",
            "info-subtle-hover": "#558a9d",
            "info-subtle-active": "#266a82",
            "info-subtle-disabled": "#57747f",
            "discovery-subtle-hover": "#8383b6",
            "discovery-subtle-active": "#63628d",
            "discovery-subtle-disabled": "#70728b"
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
            "base-inverse": "#373a3d",
            "brand-inverse": "#cfcfcf",
            "danger-inverse": "#cfcfcf",
            "negative-inverse": "#cfcfcf",
            "warning-inverse": "#373a3d",
            "success-inverse": "#cfcfcf",
            "positive-inverse": "#cfcfcf",
            "info-inverse": "#cfcfcf",
            "discovery-inverse": "#cfcfcf",
            "base-hover": "#a4a4a4",
            "base-active": "#3c3c3c",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#d9d9d999",
            "brand-hover": "#517f72",
            "brand-active": "#1f6a5b",
            "brand-inactive": "#679185",
            "brand-disabled": "#919191",
            "danger-hover": "#ce697d",
            "danger-active": "#9e3057",
            "danger-inactive": "#d97d91",
            "danger-disabled": "#9f9f9f",
            "negative-hover": "#d16862",
            "negative-active": "#a53033",
            "negative-inactive": "#d77f76",
            "negative-disabled": "#404040",
            "warning-hover": "#d4ad6c",
            "warning-active": "#9d792e",
            "warning-inactive": "#dcd286",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#66b790",
            "success-active": "#298c63",
            "success-inactive": "#7fdaad",
            "success-disabled": "#383838",
            "positive-hover": "#9fbf76",
            "positive-active": "#6d8c37",
            "positive-inactive": "#c0de8c",
            "positive-disabled": "#525252",
            "info-hover": "#7fd5da",
            "info-active": "#4194a8",
            "info-inactive": "#8ddede",
            "info-disabled": "#393939",
            "discovery-hover": "#9c89d8",
            "discovery-active": "#7869a0",
            "discovery-inactive": "#b59de3",
            "discovery-disabled": "#3b3b3b",
            "base-inverse-hover": "#2f3237",
            "base-inverse-active": "#113c3c",
            "base-inverse-inactive": "#48494c",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#d9d9d9",
            "brand-inverse-active": "#b4b4b4",
            "brand-inverse-inactive": "#d9d9d9",
            "brand-inverse-disabled": "#cfcfcf99",
            "danger-inverse-hover": "#d9d9d9",
            "danger-inverse-active": "#b4b4b4",
            "danger-inverse-inactive": "#d9d9d9",
            "danger-inverse-disabled": "#9f9f9f",
            "negative-inverse-hover": "#d9d9d9",
            "negative-inverse-active": "#b4b4b4",
            "negative-inverse-inactive": "#d9d9d9",
            "negative-inverse-disabled": "#404040",
            "warning-inverse-hover": "#404144",
            "warning-inverse-active": "#333638",
            "warning-inverse-inactive": "#48494c",
            "warning-inverse-disabled": "#3b3b3b",
            "success-inverse-hover": "#d9d9d9",
            "success-inverse-active": "#b4b4b4",
            "success-inverse-inactive": "#d9d9d9",
            "success-inverse-disabled": "#383838",
            "positive-inverse-hover": "#d9d9d9",
            "positive-inverse-active": "#b4b4b4",
            "positive-inverse-inactive": "#d9d9d9",
            "positive-inverse-disabled": "#525252",
            "info-inverse-hover": "#d9d9d9",
            "info-inverse-active": "#b4b4b4",
            "info-inverse-inactive": "#d9d9d9",
            "info-inverse-disabled": "#393939",
            "discovery-inverse-hover": "#d9d9d9",
            "discovery-inverse-active": "#b4b4b4",
            "discovery-inverse-inactive": "#d9d9d9",
            "discovery-inverse-disabled": "#3b3b3b",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#95cfbd",
            "danger-ghost-hover": "#e4a3bd",
            "negative-ghost-hover": "#e1aa98",
            "warning-ghost-hover": "#dcd387",
            "success-ghost-hover": "#8ddebf",
            "positive-ghost-hover": "#c3de8f",
            "info-ghost-hover": "#90dfdf",
            "discovery-ghost-hover": "#ebb9eb",
            "base-inverse-ghost-hover": "#424448",
            "warning-inverse-ghost-hover": "#5e5f62"
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
            "lowest-hover": "#d9d9d9",
            "lowest-active": "#b3b3b3",
            "lowest-inactive": "#d9d9d9",
            "lowest-disabled": "#c4c4c499",
            "page-hover": "#d9d9d9",
            "page-active": "#b9b9b9",
            "page-inactive": "#d9d9d9",
            "page-disabled": "#cacaca99",
            "elevated-hover": "#d9d9d9",
            "elevated-active": "#bdbdbd",
            "elevated-inactive": "#d9d9d9",
            "elevated-disabled": "#cfcfcf99",
            "floating-hover": "#d9d9d9",
            "floating-active": "#c3c3c3",
            "floating-inactive": "#d9d9d9",
            "floating-disabled": "#d5d5d599",
            "highest-hover": "#d9d9d9",
            "highest-active": "#c6c6c6",
            "highest-inactive": "#d9d9d9",
            "highest-disabled": "#d9d9d999",
            "link-hover": "#6a96d4",
            "link-active": "#577dc1",
            "link-inactive": "#75a4d7",
            "link-disabled": "#738bb4"
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
            "body-hover": "#b4b4b4",
            "body-active": "#838383",
            "body-inactive": "#d5d5d5",
            "body-disabled": "#96969699",
            "eyebrow-hover": "#686868",
            "eyebrow-active": "#505050",
            "eyebrow-inactive": "#787878",
            "eyebrow-disabled": "#59595999",
            "caption-hover": "#7e7e7e",
            "caption-active": "#5e5e5e",
            "caption-inactive": "#939393",
            "caption-disabled": "#6a6a6a99",
            "link-hover": "#75a4d7",
            "link-active": "#5277b9",
            "link-inactive": "#8bc3dd",
            "link-disabled": "#4f4f4f",
            "required-hover": "#d16862",
            "required-active": "#a53033",
            "required-inactive": "#d77f76",
            "required-disabled": "#a16a65"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#d5d5d5",
            "border": "#4f4f4f",
            "backdrop": "#373a3d66",
            "background-hover": "#d9d9d9",
            "background-active": "#c3c3c3",
            "background-inactive": "#d9d9d9",
            "background-disabled": "#d5d5d599",
            "border-hover": "#5b5b5b",
            "border-active": "#474747",
            "border-disabled": "#4f4f4f99"
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
            "base-hover": "#020202",
            "base-active": "#040506",
            "base-inactive": "#0f1012",
            "base-disabled": "#000000",
            "brand-hover": "#03100d",
            "brand-active": "#000000",
            "brand-inactive": "#09231c",
            "brand-disabled": "#050b09",
            "danger-hover": "#ae1302",
            "danger-active": "#5b0600",
            "danger-inactive": "#cd220e",
            "danger-disabled": "#77251a",
            "negative-hover": "#ff4011",
            "negative-active": "#9f2300",
            "negative-inactive": "#ff6e4b",
            "negative-disabled": "#c34b2e",
            "warning-hover": "#9f6802",
            "warning-active": "#4a3100",
            "warning-inactive": "#c08315",
            "warning-disabled": "#7d5c28",
            "success-hover": "#087c49",
            "success-active": "#002d1b",
            "success-inactive": "#1c9d60",
            "success-disabled": "#296847",
            "positive-hover": "#70da2b",
            "positive-active": "#3e8400",
            "positive-inactive": "#91f055",
            "positive-disabled": "#72b34f",
            "info-hover": "#047faa",
            "info-active": "#004054",
            "info-inactive": "#199ccc",
            "info-disabled": "#2a6881",
            "discovery-hover": "#7070d8",
            "discovery-active": "#4240b1",
            "discovery-inactive": "#8d8eea",
            "discovery-disabled": "#5659a2"
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
            "base-hover": "#010101",
            "base-active": "#000000",
            "base-disabled": "#1b1b1b99",
            "brand-hover": "#207c64",
            "brand-active": "#000b09",
            "brand-disabled": "#235042",
            "danger-hover": "#ff7490",
            "danger-active": "#9a0036",
            "danger-disabled": "#c74256",
            "negative-hover": "#ff756d",
            "negative-active": "#a70005",
            "negative-disabled": "#d44538",
            "warning-hover": "#ffd287",
            "warning-active": "#946400",
            "warning-disabled": "#d9a85f",
            "success-hover": "#45f8a1",
            "success-active": "#00653b",
            "success-disabled": "#4eb87d",
            "positive-hover": "#bffb74",
            "positive-active": "#538200",
            "positive-disabled": "#95c163",
            "info-hover": "#bafbff",
            "info-active": "#00a8d2",
            "info-disabled": "#8dd5ed",
            "discovery-hover": "#d7cbff",
            "discovery-active": "#6943d1",
            "discovery-disabled": "#8573c7",
            "base-subtle-hover": "#000000",
            "base-subtle-active": "#000000",
            "base-subtle-disabled": "#000000",
            "brand-subtle-hover": "#09231c",
            "brand-subtle-active": "#000000",
            "brand-subtle-disabled": "#050b09",
            "danger-subtle-hover": "#cd220e",
            "danger-subtle-active": "#510000",
            "danger-subtle-disabled": "#77251a",
            "negative-subtle-hover": "#ff6e4b",
            "negative-subtle-active": "#921800",
            "negative-subtle-disabled": "#c34b2e",
            "warning-subtle-hover": "#c08315",
            "warning-subtle-active": "#402900",
            "warning-subtle-disabled": "#7d5c28",
            "success-subtle-hover": "#1c9d60",
            "success-subtle-active": "#002314",
            "success-subtle-disabled": "#296847",
            "positive-subtle-hover": "#91f055",
            "positive-subtle-active": "#2f5d00",
            "positive-subtle-disabled": "#72b34f",
            "info-subtle-hover": "#199ccc",
            "info-subtle-active": "#00374a",
            "info-subtle-disabled": "#2a6881",
            "discovery-subtle-hover": "#8d8eea",
            "discovery-subtle-active": "#3b38a5",
            "discovery-subtle-disabled": "#5659a2"
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
            "base-hover": "#cacaca",
            "base-active": "#000000",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff99",
            "brand-hover": "#207c64",
            "brand-active": "#000b09",
            "brand-inactive": "#41b091",
            "brand-disabled": "#a4a4a4",
            "danger-hover": "#ff7490",
            "danger-active": "#9a0036",
            "danger-inactive": "#ffb4c4",
            "danger-disabled": "#c0c0c0",
            "negative-hover": "#ff756d",
            "negative-active": "#a70005",
            "negative-inactive": "#ffaaa1",
            "negative-disabled": "#000000",
            "warning-hover": "#ffd287",
            "warning-active": "#946400",
            "warning-inactive": "#fff9ce",
            "warning-disabled": "#000000",
            "success-hover": "#45f8a1",
            "success-active": "#00653b",
            "success-inactive": "#bbffde",
            "success-disabled": "#000000",
            "positive-hover": "#bffb74",
            "positive-active": "#538200",
            "positive-inactive": "#f3ffde",
            "positive-disabled": "#212121",
            "info-hover": "#bafbff",
            "info-active": "#00a8d2",
            "info-inactive": "#dfffff",
            "info-disabled": "#000000",
            "discovery-hover": "#d7cbff",
            "discovery-active": "#6943d1",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#000000",
            "base-inverse-hover": "#000000",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#0e0f12",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#ffffff",
            "brand-inverse-active": "#ececec",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#ffffff99",
            "danger-inverse-hover": "#ffffff",
            "danger-inverse-active": "#ececec",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#c0c0c0",
            "negative-inverse-hover": "#ffffff",
            "negative-inverse-active": "#ececec",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#000000",
            "warning-inverse-hover": "#000000",
            "warning-inverse-active": "#000000",
            "warning-inverse-inactive": "#0e0f12",
            "warning-inverse-disabled": "#000000",
            "success-inverse-hover": "#ffffff",
            "success-inverse-active": "#ececec",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#000000",
            "positive-inverse-hover": "#ffffff",
            "positive-inverse-active": "#ececec",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#212121",
            "info-inverse-hover": "#ffffff",
            "info-inverse-active": "#ececec",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#000000",
            "discovery-inverse-hover": "#ffffff",
            "discovery-inverse-active": "#ececec",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#000000",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#d2fef0",
            "danger-ghost-hover": "#ffffff",
            "negative-ghost-hover": "#fffefe",
            "warning-ghost-hover": "#fffacf",
            "success-ghost-hover": "#dffff3",
            "positive-ghost-hover": "#f6ffe4",
            "info-ghost-hover": "#e7ffff",
            "discovery-ghost-hover": "#ffffff",
            "base-inverse-ghost-hover": "#060607",
            "warning-inverse-ghost-hover": "#373b44"
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
            "lowest-hover": "#ffffff",
            "lowest-active": "#eaeaea",
            "lowest-inactive": "#ffffff",
            "lowest-disabled": "#ffffff99",
            "page-hover": "#ffffff",
            "page-active": "#f6f6f6",
            "page-inactive": "#ffffff",
            "page-disabled": "#ffffff99",
            "elevated-hover": "#ffffff",
            "elevated-active": "#ffffff",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#ffffff99",
            "floating-hover": "#ffffff",
            "floating-active": "#ffffff",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#ffffff99",
            "highest-hover": "#ffffff",
            "highest-active": "#ffffff",
            "highest-inactive": "#ffffff",
            "highest-disabled": "#ffffff99",
            "link-hover": "#83b6ff",
            "link-active": "#347dff",
            "link-inactive": "#9ecdff",
            "link-disabled": "#6597ee"
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
            "body-hover": "#ededed",
            "body-active": "#868686",
            "body-inactive": "#ffffff",
            "body-disabled": "#adadad99",
            "eyebrow-hover": "#4f4f4f",
            "eyebrow-active": "#1c1c1c",
            "eyebrow-inactive": "#707070",
            "eyebrow-disabled": "#2f2f2f99",
            "caption-hover": "#7c7c7c",
            "caption-active": "#3b3b3b",
            "caption-inactive": "#a7a7a7",
            "caption-disabled": "#53535399",
            "link-hover": "#9ecdff",
            "link-active": "#196cff",
            "link-inactive": "#daf3ff",
            "link-disabled": "#1b1b1b",
            "required-hover": "#ff756d",
            "required-active": "#a70005",
            "required-inactive": "#ffaaa1",
            "required-disabled": "#d44538"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#ffffff",
            "border": "#1b1b1b",
            "backdrop": "#00000066",
            "background-hover": "#ffffff",
            "background-active": "#ffffff",
            "background-inactive": "#ffffff",
            "background-disabled": "#ffffff99",
            "border-hover": "#353535",
            "border-active": "#0b0b0b",
            "border-disabled": "#1b1b1b99"
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
