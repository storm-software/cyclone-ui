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
            "4": "#ff2a2a",
            "5": "#ff0404",
            "6": "#d20000",
            "7": "#a60000",
            "8": "#790000",
            "9": "#4d0000"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#c8e7a3",
            "2": "#b4de81",
            "3": "#9fd55e",
            "4": "#8bcc3c",
            "5": "#76c319",
            "6": "#62a412",
            "7": "#4d830c",
            "8": "#386107",
            "9": "#243e04"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#82afff",
            "2": "#76a8ff",
            "3": "#6aa0ff",
            "4": "#5e98ff",
            "5": "#5291ff",
            "6": "#4689ff",
            "7": "#3a82ff",
            "8": "#2e7aff",
            "9": "#1d70f2"
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
            "5": "#4bce97",
            "6": "#45c791",
            "7": "#3aae7d",
            "8": "#29815c",
            "9": "#14412e"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#fafafa",
            "2": "#dcdcdc",
            "3": "#bebebe",
            "4": "#9f9f9f",
            "5": "#616161",
            "6": "#484848",
            "7": "#3a3a3a",
            "8": "#2e2e2e",
            "9": "#1a1c1f"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#ffc5a8",
            "2": "#fcb998",
            "3": "#fcab83",
            "4": "#f69f73",
            "5": "#f9935f",
            "6": "#f3874e",
            "7": "#ec7a3b",
            "8": "#de743a",
            "9": "#b45b2b"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#f5c7e4",
            "2": "#f2b3da",
            "3": "#ee9ecf",
            "4": "#eb89c5",
            "5": "#e774bb",
            "6": "#df6db3",
            "7": "#c25c9b",
            "8": "#904272",
            "9": "#482039"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#dbcffd",
            "2": "#cdbdfc",
            "3": "#c0abfb",
            "4": "#b299fa",
            "5": "#a587f9",
            "6": "#9d7ff0",
            "7": "#866cd1",
            "8": "#624e9b",
            "9": "#30264d"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale raspberry error color"}
      colors={{
            "1": "#fb5879",
            "2": "#f75576",
            "3": "#cf2d56",
            "4": "#b92647",
            "5": "#a21f39",
            "6": "#8a192d",
            "7": "#731421",
            "8": "#5a0f17",
            "9": "#3c050a"
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
            "6": "#64bbd8",
            "7": "#55a2bc",
            "8": "#3d788c",
            "9": "#1d3b46"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - neutral near-black page canvas"}
      colors={{
            "1": "#1f1f21",
            "2": "#242528",
            "3": "#2b2c30",
            "4": "#484848"
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
            "6": "#d29527",
            "7": "#a6761c",
            "8": "#795713",
            "9": "#4d370b"
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
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#baf6e8",
            "2": "#9bf1de",
            "3": "#7bedd3",
            "4": "#5be8c9",
            "5": "#3be4be",
            "6": "#2dbc9c",
            "7": "#219279",
            "8": "#166855",
            "9": "#0c3c31"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the dark theme"}
      colors={{
            "grey.emphasis": "#fafafa",
            "grey.subtle": "#1a1c1f",
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
            "4": "#cc5050",
            "5": "#c63c3c",
            "6": "#ad3232",
            "7": "#952b2b",
            "8": "#7d2424",
            "9": "#651d1d"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#b2ca97",
            "2": "#a4bf83",
            "3": "#95b56e",
            "4": "#87ab5b",
            "5": "#78a442",
            "6": "#6a9339",
            "7": "#5c8130",
            "8": "#4e6e27",
            "9": "#405b20"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#80a0da",
            "2": "#799cd8",
            "3": "#7397d6",
            "4": "#6c92d4",
            "5": "#668dd3",
            "6": "#5f88d1",
            "7": "#5984cf",
            "8": "#527fcd",
            "9": "#4978c1"
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
            "5": "#63ae8f",
            "6": "#60a88a",
            "7": "#57987d",
            "8": "#467e66",
            "9": "#305847"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#d5d5d5",
            "2": "#c0c0c0",
            "3": "#ababab",
            "4": "#969696",
            "5": "#6a6a6a",
            "6": "#595959",
            "7": "#4f4f4f",
            "8": "#464646",
            "9": "#373a3d"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#e0ae95",
            "2": "#dba68d",
            "3": "#d89e81",
            "4": "#d09679",
            "5": "#d08f6d",
            "6": "#c98764",
            "7": "#c17f5a",
            "8": "#b77b5a",
            "9": "#9c694d"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#d9aac8",
            "2": "#d59fc0",
            "3": "#cf93b8",
            "4": "#ca87b0",
            "5": "#c57ba8",
            "6": "#be77a3",
            "7": "#a86d91",
            "8": "#875975",
            "9": "#5a3b4f"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#baabe3",
            "2": "#b1a1e0",
            "3": "#aa97dc",
            "4": "#a18ed9",
            "5": "#9984d6",
            "6": "#9580cd",
            "7": "#8677b4",
            "8": "#6d628e",
            "9": "#47405d"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale raspberry error color"}
      colors={{
            "1": "#d0697e",
            "2": "#cd687d",
            "3": "#ab5268",
            "4": "#9e4a5d",
            "5": "#914252",
            "6": "#843b48",
            "7": "#77343d",
            "8": "#682e34",
            "9": "#592126"
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
            "6": "#72a6b8",
            "7": "#6994a3",
            "8": "#557884",
            "9": "#38515a"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - neutral near-black page canvas"}
      colors={{
            "1": "#3c3c3e",
            "2": "#3f4043",
            "3": "#444548",
            "4": "#595959"
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
            "6": "#ad8b4e",
            "7": "#947741",
            "8": "#7a6334",
            "9": "#624f29"
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
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#a2d9cc",
            "2": "#90d1c3",
            "3": "#7ecab9",
            "4": "#6cc2af",
            "5": "#5abba5",
            "6": "#4fa08e",
            "7": "#428878",
            "8": "#357062",
            "9": "#28574c"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the dark theme"}
      colors={{
            "grey.emphasis": "#d5d5d5",
            "grey.subtle": "#373a3d",
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
            "4": "#ff3d3d",
            "5": "#ff0606",
            "6": "#be0000",
            "7": "#7e0000",
            "8": "#3d0000",
            "9": "#000000"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#e6fbce",
            "2": "#caf694",
            "3": "#acf15a",
            "4": "#90ec20",
            "5": "#70cc00",
            "6": "#529500",
            "7": "#335d00",
            "8": "#142400",
            "9": "#000000"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#bdd4ff",
            "2": "#abcaff",
            "3": "#9abeff",
            "4": "#88b3ff",
            "5": "#77a8ff",
            "6": "#659dff",
            "7": "#5493ff",
            "8": "#4387ff",
            "9": "#1772ff"
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
            "5": "#39eca1",
            "6": "#2de498",
            "7": "#1ebf7b",
            "8": "#11734a",
            "9": "#010705"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#dadada",
            "4": "#adadad",
            "5": "#535353",
            "6": "#2f2f2f",
            "7": "#1b1b1b",
            "8": "#090909",
            "9": "#000000"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#fff7f4",
            "2": "#ffe5d8",
            "3": "#ffd1ba",
            "4": "#ffbc9a",
            "5": "#ffac81",
            "6": "#ff9760",
            "7": "#ff803a",
            "8": "#ff7224",
            "9": "#c44d0d"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#ffffff",
            "2": "#fff1fa",
            "3": "#ffcdeb",
            "4": "#ffaade",
            "5": "#ff85d0",
            "6": "#f976c6",
            "7": "#dc50a6",
            "8": "#932b6b",
            "9": "#1c0815"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#f6f2ff",
            "4": "#e1d7ff",
            "5": "#cdbbff",
            "6": "#bba2ff",
            "7": "#8e6eeb",
            "8": "#5538a7",
            "9": "#140d27"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale raspberry error color"}
      colors={{
            "1": "#ff7a95",
            "2": "#ff708d",
            "3": "#f00a45",
            "4": "#ca0632",
            "5": "#a20322",
            "6": "#790116",
            "7": "#51000b",
            "8": "#260004",
            "9": "#000000"
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
            "6": "#64cff3",
            "7": "#44b1d5",
            "8": "#25728c",
            "9": "#061217"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - neutral near-black page canvas"}
      colors={{
            "1": "#000000",
            "2": "#000000",
            "3": "#08080a",
            "4": "#2f2f2f"
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
            "6": "#f39e03",
            "7": "#a76d00",
            "8": "#583b00",
            "9": "#0d0900"
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
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#ffffff",
            "2": "#ccfff4",
            "3": "#98ffe8",
            "4": "#63ffdd",
            "5": "#2effd0",
            "6": "#0ed2a6",
            "7": "#078a6d",
            "8": "#024233",
            "9": "#000000"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the dark theme"}
      colors={{
            "grey.emphasis": "#ffffff",
            "grey.subtle": "#000000",
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
            "1": "#e3518e",
            "2": "#e14777",
            "3": "#e03c5e",
            "4": "#de3143",
            "5": "#dc2626",
            "6": "#d92b20",
            "7": "#d6301b",
            "8": "#d23516",
            "9": "#cd3a13"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#c2c261",
            "2": "#b4be58",
            "3": "#a4bb4e",
            "4": "#93b744",
            "5": "#81b33a",
            "6": "#79b136",
            "7": "#71ae33",
            "8": "#69ac2f",
            "9": "#61a92c"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#83baff",
            "2": "#7bb7ff",
            "3": "#68acff",
            "4": "#59a2ff",
            "5": "#4f99f9",
            "6": "#4c90e8",
            "7": "#468ae2",
            "8": "#3f7ecf",
            "9": "#3669ac"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale mint green color"}
      colors={{
            "1": "#67cc9a",
            "2": "#57c791",
            "3": "#2fc183",
            "4": "#00b575",
            "5": "#00af6f",
            "6": "#00a469",
            "7": "#009d63",
            "8": "#008f5a",
            "9": "#007a4d"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white"}
      colors={{
            "1": "#f5f5f5",
            "2": "#c7c7c7",
            "3": "#949494",
            "4": "#737373",
            "5": "#525252",
            "6": "#3f3f3f",
            "7": "#333333",
            "8": "#262626",
            "9": "#181818"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#faa276",
            "2": "#fb9c6c",
            "3": "#fa8d54",
            "4": "#f38042",
            "5": "#e97737",
            "6": "#de743a",
            "7": "#d36b2f",
            "8": "#c2612b",
            "9": "#a25226"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#fb9cc0",
            "2": "#f993ba",
            "3": "#f782b1",
            "4": "#f075a8",
            "5": "#e96fa2",
            "6": "#db6a98",
            "7": "#d1608f",
            "8": "#c25b86",
            "9": "#a34e71"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#aeb1ff",
            "2": "#a7a9ff",
            "3": "#a0a0ff",
            "4": "#9695ff",
            "5": "#8d8cfb",
            "6": "#8584eb",
            "7": "#7f7ee4",
            "8": "#7473d1",
            "9": "#6261af"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#e791bb",
            "2": "#e37ea8",
            "3": "#df6c94",
            "4": "#db597d",
            "5": "#d74765",
            "6": "#d3344a",
            "7": "#cf222e",
            "8": "#b51a17",
            "9": "#9a1c0f"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#47c5ea",
            "2": "#2ec3eb",
            "3": "#00b8e6",
            "4": "#00afe0",
            "5": "#00a6d6",
            "6": "#009ecb",
            "7": "#0095c2",
            "8": "#008bb4",
            "9": "#007496"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - soft neutral page canvas"}
      colors={{
            "1": "#e1e1e1",
            "2": "#eaeaea",
            "3": "#f1f1f1",
            "4": "#fafafa"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#e2b259",
            "2": "#deab47",
            "3": "#db9f10",
            "4": "#d49400",
            "5": "#ca8b00",
            "6": "#c08600",
            "7": "#b77d00",
            "8": "#a77200",
            "9": "#8f6300"
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
            "base": "#262626",
            "brand": "#0a514c",
            "danger": "#9a1c0f",
            "negative": "#d23516",
            "warning": "#8f6300",
            "success": "#007a4d",
            "positive": "#61a92c",
            "info": "#007496",
            "discovery": "#6261af",
            "base-hover": "#292929",
            "base-active": "#2b2b2b",
            "base-inactive": "#333333",
            "base-disabled": "#26262699",
            "brand-hover": "#1b5c57",
            "brand-active": "#004844",
            "brand-inactive": "#286762",
            "brand-disabled": "#2c4d4a",
            "danger-hover": "#a92d1f",
            "danger-active": "#8e0900",
            "danger-inactive": "#b93c2d",
            "danger-disabled": "#813c32",
            "negative-hover": "#e64a2d",
            "negative-active": "#c22200",
            "negative-inactive": "#fb5e40",
            "negative-disabled": "#b25a48",
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
            "base": "#333333",
            "brand": "#10736b",
            "danger": "#cf222e",
            "negative": "#d6301b",
            "warning": "#d49400",
            "success": "#00a469",
            "positive": "#79b136",
            "info": "#00b8e6",
            "discovery": "#7f7ee4",
            "base-subtle": "#262626",
            "brand-subtle": "#0a514c",
            "danger-subtle": "#9a1c0f",
            "negative-subtle": "#d23516",
            "warning-subtle": "#8f6300",
            "success-subtle": "#007a4d",
            "positive-subtle": "#61a92c",
            "info-subtle": "#007496",
            "discovery-subtle": "#6261af",
            "base-hover": "#232323",
            "base-active": "#020202",
            "base-disabled": "#33333399",
            "brand-hover": "#3a9188",
            "brand-active": "#006159",
            "brand-disabled": "#406d68",
            "danger-hover": "#f74f4f",
            "danger-active": "#b60018",
            "danger-disabled": "#af514d",
            "negative-hover": "#ff5b43",
            "negative-active": "#bc0500",
            "negative-disabled": "#b5594a",
            "warning-hover": "#ffc24f",
            "warning-active": "#b77800",
            "warning-disabled": "#c19b60",
            "success-hover": "#4bcd8f",
            "success-active": "#008b52",
            "success-disabled": "#589b77",
            "positive-hover": "#a4de66",
            "positive-active": "#5f950b",
            "positive-disabled": "#88aa69",
            "info-hover": "#5ae8ff",
            "info-active": "#009bc8",
            "info-disabled": "#6ab2cd",
            "discovery-hover": "#a5a6ff",
            "discovery-active": "#6865c9",
            "discovery-disabled": "#8386c2",
            "base-subtle-hover": "#191919",
            "base-subtle-active": "#010101",
            "base-subtle-disabled": "#26262699",
            "brand-subtle-hover": "#286762",
            "brand-subtle-active": "#00443f",
            "brand-subtle-disabled": "#2c4d4a",
            "danger-subtle-hover": "#b93c2d",
            "danger-subtle-active": "#870000",
            "danger-subtle-disabled": "#813c32",
            "negative-subtle-hover": "#fb5e40",
            "negative-subtle-active": "#b91300",
            "negative-subtle-disabled": "#b25a48",
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
            "base": "#f5f5f5",
            "brand": "#10736b",
            "danger": "#cf222e",
            "negative": "#d6301b",
            "warning": "#d49400",
            "success": "#00a469",
            "positive": "#79b136",
            "info": "#00b8e6",
            "discovery": "#7f7ee4",
            "base-inverse": "#181818",
            "brand-inverse": "#f5f5f5",
            "danger-inverse": "#f5f5f5",
            "negative-inverse": "#f5f5f5",
            "warning-inverse": "#181818",
            "success-inverse": "#f5f5f5",
            "positive-inverse": "#f5f5f5",
            "info-inverse": "#f5f5f5",
            "discovery-inverse": "#f5f5f5",
            "base-hover": "#b6b6b6",
            "base-active": "#202020",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff99",
            "brand-hover": "#3a9188",
            "brand-active": "#006159",
            "brand-inactive": "#5bb0a7",
            "brand-disabled": "#9c9c9c",
            "danger-hover": "#f74f4f",
            "danger-active": "#b60018",
            "danger-inactive": "#ff7571",
            "danger-disabled": "#acacac",
            "negative-hover": "#ff5b43",
            "negative-active": "#bc0500",
            "negative-inactive": "#ff8167",
            "negative-disabled": "#262626",
            "warning-hover": "#ffc24f",
            "warning-active": "#b77800",
            "warning-inactive": "#fff181",
            "warning-disabled": "#1e1e1e",
            "success-hover": "#4bcd8f",
            "success-active": "#008b52",
            "success-inactive": "#79f7b7",
            "success-disabled": "#191919",
            "positive-hover": "#a4de66",
            "positive-active": "#5f950b",
            "positive-inactive": "#d0ff95",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#5ae8ff",
            "info-active": "#009bc8",
            "info-inactive": "#8affff",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#a5a6ff",
            "discovery-active": "#6865c9",
            "discovery-inactive": "#cdd0ff",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#0f0f0f",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#2c2c2c",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#ffffff",
            "brand-inverse-active": "#cdcdcd",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#9c9c9c",
            "danger-inverse-hover": "#ffffff",
            "danger-inverse-active": "#cdcdcd",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#ffffff",
            "negative-inverse-active": "#cdcdcd",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#262626",
            "warning-inverse-hover": "#222222",
            "warning-inverse-active": "#121212",
            "warning-inverse-inactive": "#2c2c2c",
            "warning-inverse-disabled": "#1e1e1e",
            "success-inverse-hover": "#ffffff",
            "success-inverse-active": "#cdcdcd",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#ffffff",
            "positive-inverse-active": "#cdcdcd",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#ffffff",
            "info-inverse-active": "#cdcdcd",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#ffffff",
            "discovery-inverse-active": "#cdcdcd",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#b0fffb",
            "danger-ghost-hover": "#ffc2b8",
            "negative-ghost-hover": "#ffc5a7",
            "warning-ghost-hover": "#fff484",
            "success-ghost-hover": "#a0ffdb",
            "positive-ghost-hover": "#d9ff9c",
            "info-ghost-hover": "#8dffff",
            "discovery-ghost-hover": "#f2f5ff"
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
            "link": "#468ae2",
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
            "link-hover": "#599ef8",
            "link-active": "#367ad1",
            "link-inactive": "#6db2ff",
            "link-disabled": "#658cc0"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A near black color"}
      colors={{
            "black": "#0c0c0d"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#b1e4e0",
            "2": "#8cd8d1",
            "3": "#68cbc3",
            "4": "#43bfb4",
            "5": "#1fb2a6",
            "6": "#179389",
            "7": "#10736b",
            "8": "#0a514c",
            "9": "#052f2c"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the light theme"}
      colors={{
            "grey.emphasis": "#525252",
            "grey.subtle": "#f5f5f5",
            "brand.emphasis": "#b1e4e0",
            "brand.subtle": "#8cd8d1",
            "red.emphasis": "#d3344a",
            "red.subtle": "#e791bb",
            "orange.emphasis": "#de743a",
            "orange.subtle": "#faa276",
            "yellow.emphasis": "#c08600",
            "yellow.subtle": "#e2b259",
            "green.emphasis": "#00a469",
            "green.subtle": "#67cc9a",
            "sky.emphasis": "#009ecb",
            "sky.subtle": "#47c5ea",
            "blue.emphasis": "#4c90e8",
            "blue.subtle": "#83baff",
            "purple.emphasis": "#8584eb",
            "purple.subtle": "#aeb1ff",
            "pink.emphasis": "#db6a98",
            "pink.subtle": "#fb9cc0"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the light theme"}
      colors={{
            "body": "#949494",
            "eyebrow": "#525252",
            "caption": "#737373",
            "link": "#468ae2",
            "required": "#dc2626",
            "body-hover": "#bdbdbd",
            "body-active": "#7b7b7b",
            "body-inactive": "#e9e9e9",
            "body-disabled": "#94949499",
            "eyebrow-hover": "#6b6b6b",
            "eyebrow-active": "#434343",
            "eyebrow-inactive": "#848484",
            "eyebrow-disabled": "#52525299",
            "caption-hover": "#949494",
            "caption-active": "#5f5f5f",
            "caption-inactive": "#b6b6b6",
            "caption-disabled": "#73737399",
            "link-hover": "#6db2ff",
            "link-active": "#2d72c7",
            "link-inactive": "#95dcff",
            "link-disabled": "#363636",
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
            "border": "#333333",
            "backdrop": "#1a1c1f66",
            "background-hover": "#ffffff",
            "background-active": "#e0e0e0",
            "background-inactive": "#ffffff",
            "background-disabled": "#fafafa99",
            "border-hover": "#444444",
            "border-active": "#292929",
            "border-disabled": "#33333399"
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
            "1": "#bd678b",
            "2": "#bb617d",
            "3": "#b85b6e",
            "4": "#b6555f",
            "5": "#b34e4e",
            "6": "#b1504a",
            "7": "#af5246",
            "8": "#ad5442",
            "9": "#aa563f"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#a8a870",
            "2": "#9fa46b",
            "3": "#95a165",
            "4": "#8a9e5e",
            "5": "#7f9b57",
            "6": "#7a9a54",
            "7": "#759852",
            "8": "#70974f",
            "9": "#6b954c"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#80a8da",
            "2": "#7ca6d9",
            "3": "#729fd6",
            "4": "#6a98d4",
            "5": "#6592cd",
            "6": "#648cc0",
            "7": "#6088bb",
            "8": "#5c80ad",
            "9": "#547197"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale mint green color"}
      colors={{
            "1": "#74b092",
            "2": "#6aaa8b",
            "3": "#51a380",
            "4": "#2e9d76",
            "5": "#2d9a72",
            "6": "#2b946e",
            "7": "#2a906b",
            "8": "#288965",
            "9": "#247d5d"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white"}
      colors={{
            "1": "#d2d2d2",
            "2": "#b2b2b2",
            "3": "#8e8e8e",
            "4": "#777777",
            "5": "#606060",
            "6": "#525252",
            "7": "#4a4a4a",
            "8": "#414141",
            "9": "#373737"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#d4987a",
            "2": "#d39474",
            "3": "#cf8b67",
            "4": "#c7835e",
            "5": "#be7d58",
            "6": "#b77b5a",
            "7": "#ae7453",
            "8": "#a46d4f",
            "9": "#916247"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#da8fac",
            "2": "#d78aa8",
            "3": "#d381a2",
            "4": "#cc7b9c",
            "5": "#c67898",
            "6": "#bb7592",
            "7": "#b2708b",
            "8": "#a76d85",
            "9": "#926376"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#989ae1",
            "2": "#9496e0",
            "3": "#9090df",
            "4": "#8b8add",
            "5": "#8786d8",
            "6": "#8484ca",
            "7": "#8181c4",
            "8": "#7c7bb4",
            "9": "#70709b"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#c88ca9",
            "2": "#c3819c",
            "3": "#be768f",
            "4": "#b96b81",
            "5": "#b46172",
            "6": "#ae5662",
            "7": "#ab4a51",
            "8": "#9c413f",
            "9": "#8d3e35"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#61abc1",
            "2": "#53a8be",
            "3": "#359eb8",
            "4": "#3499b5",
            "5": "#3393af",
            "6": "#318fa9",
            "7": "#3089a5",
            "8": "#2e849d",
            "9": "#29768d"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - soft neutral page canvas"}
      colors={{
            "1": "#c4c4c4",
            "2": "#cacaca",
            "3": "#cfcfcf",
            "4": "#d5d5d5"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#bea16b",
            "2": "#b99b61",
            "3": "#b2903f",
            "4": "#ae8933",
            "5": "#a98331",
            "6": "#a3802f",
            "7": "#9f7b2e",
            "8": "#96742c",
            "9": "#896b28"
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
            "base": "#414141",
            "brand": "#286460",
            "danger": "#8d3e35",
            "negative": "#ad5442",
            "warning": "#896b28",
            "success": "#247d5d",
            "positive": "#6b954c",
            "info": "#29768d",
            "discovery": "#70709b",
            "base-hover": "#434343",
            "base-active": "#444444",
            "base-inactive": "#4a4a4a",
            "base-disabled": "#41414199",
            "brand-hover": "#386864",
            "brand-active": "#1d625e",
            "brand-inactive": "#436e6a",
            "brand-disabled": "#455d5a",
            "danger-hover": "#954c43",
            "danger-active": "#882e28",
            "danger-inactive": "#9f584f",
            "danger-disabled": "#7d534c",
            "negative-hover": "#bb6352",
            "negative-active": "#a54430",
            "negative-inactive": "#cd6e5c",
            "negative-disabled": "#9b6a60",
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
            "base": "#4a4a4a",
            "brand": "#317771",
            "danger": "#ab4a51",
            "negative": "#af5246",
            "warning": "#ae8933",
            "success": "#2b946e",
            "positive": "#7a9a54",
            "info": "#359eb8",
            "discovery": "#8181c4",
            "base-subtle": "#414141",
            "brand-subtle": "#286460",
            "danger-subtle": "#8d3e35",
            "negative-subtle": "#ad5442",
            "warning-subtle": "#896b28",
            "success-subtle": "#247d5d",
            "positive-subtle": "#6b954c",
            "info-subtle": "#29768d",
            "discovery-subtle": "#70709b",
            "base-hover": "#3f3f3f",
            "base-active": "#282828",
            "base-disabled": "#4a4a4a99",
            "brand-hover": "#548782",
            "brand-active": "#207069",
            "brand-disabled": "#55716e",
            "danger-hover": "#cc6565",
            "danger-active": "#9e2e3d",
            "danger-disabled": "#996663",
            "negative-hover": "#d06c5e",
            "negative-active": "#a1322f",
            "negative-disabled": "#9d6a62",
            "warning-hover": "#d2ac64",
            "warning-active": "#9f782e",
            "warning-disabled": "#a7916f",
            "success-hover": "#63ad8a",
            "success-active": "#27875f",
            "success-disabled": "#698e7a",
            "positive-hover": "#99bc73",
            "positive-active": "#688b32",
            "positive-disabled": "#869974",
            "info-hover": "#6ac5d4",
            "info-active": "#318da8",
            "info-disabled": "#76a1b1",
            "discovery-hover": "#9394e0",
            "discovery-active": "#7473ad",
            "discovery-disabled": "#8587ab",
            "base-subtle-hover": "#383838",
            "base-subtle-active": "#272727",
            "base-subtle-disabled": "#41414199",
            "brand-subtle-hover": "#436e6a",
            "brand-subtle-active": "#1c605b",
            "brand-subtle-disabled": "#455d5a",
            "danger-subtle-hover": "#9f584f",
            "danger-subtle-active": "#852626",
            "danger-subtle-disabled": "#7d534c",
            "negative-subtle-hover": "#cd6e5c",
            "negative-subtle-active": "#a03a2e",
            "negative-subtle-disabled": "#9b6a60",
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
            "base": "#d2d2d2",
            "brand": "#317771",
            "danger": "#ab4a51",
            "negative": "#af5246",
            "warning": "#ae8933",
            "success": "#2b946e",
            "positive": "#7a9a54",
            "info": "#359eb8",
            "discovery": "#8181c4",
            "base-inverse": "#373737",
            "brand-inverse": "#d2d2d2",
            "danger-inverse": "#d2d2d2",
            "negative-inverse": "#d2d2d2",
            "warning-inverse": "#373737",
            "success-inverse": "#d2d2d2",
            "positive-inverse": "#d2d2d2",
            "info-inverse": "#d2d2d2",
            "discovery-inverse": "#d2d2d2",
            "base-hover": "#a6a6a6",
            "base-active": "#3d3d3d",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#d9d9d999",
            "brand-hover": "#548782",
            "brand-active": "#207069",
            "brand-inactive": "#6c9b96",
            "brand-disabled": "#939393",
            "danger-hover": "#cc6565",
            "danger-active": "#9e2e3d",
            "danger-inactive": "#d77977",
            "danger-disabled": "#9f9f9f",
            "negative-hover": "#d06c5e",
            "negative-active": "#a1322f",
            "negative-inactive": "#d68271",
            "negative-disabled": "#414141",
            "warning-hover": "#d2ac64",
            "warning-active": "#9f782e",
            "warning-inactive": "#dad07f",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#63ad8a",
            "success-active": "#27875f",
            "success-inactive": "#7cd2a6",
            "success-disabled": "#383838",
            "positive-hover": "#99bc73",
            "positive-active": "#688b32",
            "positive-inactive": "#b8dd8a",
            "positive-disabled": "#525252",
            "info-hover": "#6ac5d4",
            "info-active": "#318da8",
            "info-inactive": "#84dbdb",
            "info-disabled": "#393939",
            "discovery-hover": "#9394e0",
            "discovery-active": "#7473ad",
            "discovery-inactive": "#a9ace6",
            "discovery-disabled": "#3b3b3b",
            "base-inverse-hover": "#313131",
            "base-inverse-active": "#262626",
            "base-inverse-inactive": "#454545",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#d9d9d9",
            "brand-inverse-active": "#b6b6b6",
            "brand-inverse-inactive": "#d9d9d9",
            "brand-inverse-disabled": "#939393",
            "danger-inverse-hover": "#d9d9d9",
            "danger-inverse-active": "#b6b6b6",
            "danger-inverse-inactive": "#d9d9d9",
            "danger-inverse-disabled": "#9f9f9f",
            "negative-inverse-hover": "#d9d9d9",
            "negative-inverse-active": "#b6b6b6",
            "negative-inverse-inactive": "#d9d9d9",
            "negative-inverse-disabled": "#414141",
            "warning-inverse-hover": "#3e3e3e",
            "warning-inverse-active": "#333333",
            "warning-inverse-inactive": "#454545",
            "warning-inverse-disabled": "#3b3b3b",
            "success-inverse-hover": "#d9d9d9",
            "success-inverse-active": "#b6b6b6",
            "success-inverse-inactive": "#d9d9d9",
            "success-inverse-disabled": "#383838",
            "positive-inverse-hover": "#d9d9d9",
            "positive-inverse-active": "#b6b6b6",
            "positive-inverse-inactive": "#d9d9d9",
            "positive-inverse-disabled": "#525252",
            "info-inverse-hover": "#d9d9d9",
            "info-inverse-active": "#b6b6b6",
            "info-inverse-inactive": "#d9d9d9",
            "info-inverse-disabled": "#393939",
            "discovery-inverse-hover": "#d9d9d9",
            "discovery-inverse-active": "#b6b6b6",
            "discovery-inverse-inactive": "#d9d9d9",
            "discovery-inverse-disabled": "#3b3b3b",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#99e1de",
            "danger-ghost-hover": "#e3a79d",
            "negative-ghost-hover": "#e0ae94",
            "warning-ghost-hover": "#dad281",
            "success-ghost-hover": "#90dfc1",
            "positive-ghost-hover": "#bfde8e",
            "info-ghost-hover": "#86dcdc",
            "discovery-ghost-hover": "#bdc8ec"
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
            "link": "#6088bb",
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
            "link-hover": "#6a96ce",
            "link-active": "#577dad",
            "link-inactive": "#75a3d7",
            "link-disabled": "#7289a7"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A near black color"}
      colors={{
            "black": "#2e2e30"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#a0c8c5",
            "2": "#8abcb7",
            "3": "#74afaa",
            "4": "#5ea39d",
            "5": "#449a93",
            "6": "#3b8983",
            "7": "#317771",
            "8": "#286460",
            "9": "#1f524e"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the light theme"}
      colors={{
            "grey.emphasis": "#606060",
            "grey.subtle": "#d2d2d2",
            "brand.emphasis": "#a0c8c5",
            "brand.subtle": "#8abcb7",
            "red.emphasis": "#ae5662",
            "red.subtle": "#c88ca9",
            "orange.emphasis": "#b77b5a",
            "orange.subtle": "#d4987a",
            "yellow.emphasis": "#a3802f",
            "yellow.subtle": "#bea16b",
            "green.emphasis": "#2b946e",
            "green.subtle": "#74b092",
            "sky.emphasis": "#318fa9",
            "sky.subtle": "#61abc1",
            "blue.emphasis": "#648cc0",
            "blue.subtle": "#80a8da",
            "purple.emphasis": "#8484ca",
            "purple.subtle": "#989ae1",
            "pink.emphasis": "#bb7592",
            "pink.subtle": "#da8fac"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the light theme"}
      colors={{
            "body": "#8e8e8e",
            "eyebrow": "#606060",
            "caption": "#777777",
            "link": "#6088bb",
            "required": "#b34e4e",
            "body-hover": "#ababab",
            "body-active": "#7c7c7c",
            "body-inactive": "#c9c9c9",
            "body-disabled": "#8e8e8e99",
            "eyebrow-hover": "#717171",
            "eyebrow-active": "#555555",
            "eyebrow-inactive": "#838383",
            "eyebrow-disabled": "#60606099",
            "caption-hover": "#8e8e8e",
            "caption-active": "#696969",
            "caption-inactive": "#a6a6a6",
            "caption-disabled": "#77777799",
            "link-hover": "#75a3d7",
            "link-active": "#5177a7",
            "link-inactive": "#8ac2dd",
            "link-disabled": "#4c4c4c",
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
            "border": "#4a4a4a",
            "backdrop": "#373a3d66",
            "background-hover": "#d9d9d9",
            "background-active": "#c3c3c3",
            "background-inactive": "#d9d9d9",
            "background-disabled": "#d5d5d599",
            "border-hover": "#565656",
            "border-active": "#434343",
            "border-disabled": "#4a4a4a99"
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
            "1": "#ff4d97",
            "2": "#ff3b78",
            "3": "#ff2a56",
            "4": "#ff172f",
            "5": "#ff0404",
            "6": "#f60f00",
            "7": "#eb1a00",
            "8": "#de2500",
            "9": "#d22c00"
      }}
    />
          <ColorItem
      title={"color.avocado"}
      subtitle={"A light yellow-green positive color"}
      colors={{
            "1": "#dbdb58",
            "2": "#cad749",
            "3": "#b4d539",
            "4": "#9cd029",
            "5": "#81c71e",
            "6": "#76c319",
            "7": "#6abd16",
            "8": "#5fb912",
            "9": "#55b30f"
      }}
    />
          <ColorItem
      title={"color.blue"}
      subtitle={"A pale periwinkle blue color"}
      colors={{
            "1": "#bedbff",
            "2": "#b2d5ff",
            "3": "#97c6ff",
            "4": "#81b8ff",
            "5": "#6aabff",
            "6": "#4d9bff",
            "7": "#3b91ff",
            "8": "#267eef",
            "9": "#1a60bb"
      }}
    />
          <ColorItem
      title={"color.green"}
      subtitle={"A pale mint green color"}
      colors={{
            "1": "#64e6a6",
            "2": "#4ae299",
            "3": "#0fda84",
            "4": "#00945f",
            "5": "#008b58",
            "6": "#007b4f",
            "7": "#007147",
            "8": "#005d3a",
            "9": "#003e27"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white"}
      colors={{
            "1": "#ffffff",
            "2": "#e7e7e7",
            "3": "#9d9d9d",
            "4": "#6d6d6d",
            "5": "#3e3e3e",
            "6": "#222222",
            "7": "#111111",
            "8": "#000000",
            "9": "#000000"
      }}
    />
          <ColorItem
      title={"color.orange"}
      subtitle={"A pale peach orange color"}
      colors={{
            "1": "#ffc2a4",
            "2": "#ffba97",
            "3": "#ffa373",
            "4": "#ff8c4e",
            "5": "#ff7a30",
            "6": "#ff7224",
            "7": "#f6620d",
            "8": "#db550a",
            "9": "#a5410a"
      }}
    />
          <ColorItem
      title={"color.pink"}
      subtitle={"A pale blush pink color"}
      colors={{
            "1": "#ffdcea",
            "2": "#ffcce0",
            "3": "#ffb1d0",
            "4": "#ff94c0",
            "5": "#ff81b6",
            "6": "#f56fa6",
            "7": "#ec5b98",
            "8": "#dc4f8a",
            "9": "#b3386a"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#fcfcff",
            "2": "#f2f2ff",
            "3": "#e8e8ff",
            "4": "#d8d8ff",
            "5": "#c6c5ff",
            "6": "#a3a2ff",
            "7": "#9493fb",
            "8": "#7a79ea",
            "9": "#5553c5"
      }}
    />
          <ColorItem
      title={"color.red"}
      subtitle={"A pale warm coral red color"}
      colors={{
            "1": "#fcb3d6",
            "2": "#fa93be",
            "3": "#f974a2",
            "4": "#f85481",
            "5": "#f6365e",
            "6": "#f51534",
            "7": "#eb0010",
            "8": "#b50300",
            "9": "#820c00"
      }}
    />
          <ColorItem
      title={"color.sky"}
      subtitle={"A pale sky blue color"}
      colors={{
            "1": "#48d6ff",
            "2": "#26d1ff",
            "3": "#00afdb",
            "4": "#00a4d2",
            "5": "#0098c4",
            "6": "#008cb4",
            "7": "#0080a7",
            "8": "#007192",
            "9": "#004f67"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - soft neutral page canvas"}
      colors={{
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#ffffff",
            "4": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.yellow"}
      subtitle={"A pale wheat gold color"}
      colors={{
            "1": "#ffc457",
            "2": "#febb38",
            "3": "#e29f00",
            "4": "#c18600",
            "5": "#b27b00",
            "6": "#a47200",
            "7": "#976700",
            "8": "#7f5700",
            "9": "#5d4000"
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
            "brand": "#001110",
            "danger": "#820c00",
            "negative": "#de2500",
            "warning": "#5d4000",
            "success": "#003e27",
            "positive": "#55b30f",
            "info": "#004f67",
            "discovery": "#5553c5",
            "base-hover": "#020202",
            "base-active": "#050505",
            "base-inactive": "#111111",
            "base-disabled": "#00000099",
            "brand-hover": "#063430",
            "brand-active": "#000000",
            "brand-inactive": "#104c47",
            "brand-disabled": "#122b29",
            "danger-hover": "#ae1302",
            "danger-active": "#5b0600",
            "danger-inactive": "#cd220e",
            "danger-disabled": "#77251a",
            "negative-hover": "#ff401d",
            "negative-active": "#a71d00",
            "negative-inactive": "#ff7257",
            "negative-disabled": "#c9492f",
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
            "base": "#111111",
            "brand": "#004b45",
            "danger": "#eb0010",
            "negative": "#eb1a00",
            "warning": "#c18600",
            "success": "#007b4f",
            "positive": "#76c319",
            "info": "#00afdb",
            "discovery": "#9493fb",
            "base-subtle": "#000000",
            "brand-subtle": "#001110",
            "danger-subtle": "#820c00",
            "negative-subtle": "#de2500",
            "warning-subtle": "#5d4000",
            "success-subtle": "#003e27",
            "positive-subtle": "#55b30f",
            "info-subtle": "#004f67",
            "discovery-subtle": "#5553c5",
            "base-hover": "#000000",
            "base-active": "#000000",
            "base-disabled": "#11111199",
            "brand-hover": "#219287",
            "brand-active": "#001a18",
            "brand-disabled": "#295f59",
            "danger-hover": "#ff6767",
            "danger-active": "#950014",
            "danger-disabled": "#c53b35",
            "negative-hover": "#ff7561",
            "negative-active": "#9e0400",
            "negative-disabled": "#ce4731",
            "warning-hover": "#ffce73",
            "warning-active": "#976300",
            "warning-disabled": "#daa656",
            "success-hover": "#39eb96",
            "success-active": "#005733",
            "success-disabled": "#45a973",
            "positive-hover": "#b4f96a",
            "positive-active": "#477500",
            "positive-disabled": "#8cbe5e",
            "info-hover": "#83eeff",
            "info-active": "#0088af",
            "info-disabled": "#69c5e7",
            "discovery-hover": "#efefff",
            "discovery-active": "#6460e3",
            "discovery-disabled": "#8b8fd9",
            "base-subtle-hover": "#000000",
            "base-subtle-active": "#000000",
            "base-subtle-disabled": "#00000099",
            "brand-subtle-hover": "#104c47",
            "brand-subtle-active": "#000000",
            "brand-subtle-disabled": "#122b29",
            "danger-subtle-hover": "#cd220e",
            "danger-subtle-active": "#510000",
            "danger-subtle-disabled": "#77251a",
            "negative-subtle-hover": "#ff7257",
            "negative-subtle-active": "#9a1000",
            "negative-subtle-disabled": "#c9492f",
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
            "brand": "#004b45",
            "danger": "#eb0010",
            "negative": "#eb1a00",
            "warning": "#c18600",
            "success": "#007b4f",
            "positive": "#76c319",
            "info": "#00afdb",
            "discovery": "#9493fb",
            "base-inverse": "#000000",
            "brand-inverse": "#ffffff",
            "danger-inverse": "#ffffff",
            "negative-inverse": "#ffffff",
            "warning-inverse": "#000000",
            "success-inverse": "#ffffff",
            "positive-inverse": "#ffffff",
            "info-inverse": "#ffffff",
            "discovery-inverse": "#ffffff",
            "base-hover": "#cfcfcf",
            "base-active": "#000000",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff99",
            "brand-hover": "#219287",
            "brand-active": "#001a18",
            "brand-inactive": "#4ac6b9",
            "brand-disabled": "#a9a9a9",
            "danger-hover": "#ff6767",
            "danger-active": "#950014",
            "danger-inactive": "#ffa6a4",
            "danger-disabled": "#c0c0c0",
            "negative-hover": "#ff7561",
            "negative-active": "#9e0400",
            "negative-inactive": "#ffa795",
            "negative-disabled": "#000000",
            "warning-hover": "#ffce73",
            "warning-active": "#976300",
            "warning-inactive": "#fff7bb",
            "warning-disabled": "#000000",
            "success-hover": "#39eb96",
            "success-active": "#005733",
            "success-inactive": "#a4ffd1",
            "success-disabled": "#000000",
            "positive-hover": "#b4f96a",
            "positive-active": "#477500",
            "positive-inactive": "#eeffd8",
            "positive-disabled": "#212121",
            "info-hover": "#83eeff",
            "info-active": "#0088af",
            "info-inactive": "#c8ffff",
            "info-disabled": "#000000",
            "discovery-hover": "#efefff",
            "discovery-active": "#6460e3",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#000000",
            "base-inverse-hover": "#000000",
            "base-inverse-active": "#000000",
            "base-inverse-inactive": "#060606",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#ffffff",
            "brand-inverse-active": "#f0f0f0",
            "brand-inverse-inactive": "#ffffff",
            "brand-inverse-disabled": "#a9a9a9",
            "danger-inverse-hover": "#ffffff",
            "danger-inverse-active": "#f0f0f0",
            "danger-inverse-inactive": "#ffffff",
            "danger-inverse-disabled": "#c0c0c0",
            "negative-inverse-hover": "#ffffff",
            "negative-inverse-active": "#f0f0f0",
            "negative-inverse-inactive": "#ffffff",
            "negative-inverse-disabled": "#000000",
            "warning-inverse-hover": "#000000",
            "warning-inverse-active": "#000000",
            "warning-inverse-inactive": "#060606",
            "warning-inverse-disabled": "#000000",
            "success-inverse-hover": "#ffffff",
            "success-inverse-active": "#f0f0f0",
            "success-inverse-inactive": "#ffffff",
            "success-inverse-disabled": "#000000",
            "positive-inverse-hover": "#ffffff",
            "positive-inverse-active": "#f0f0f0",
            "positive-inverse-inactive": "#ffffff",
            "positive-inverse-disabled": "#212121",
            "info-inverse-hover": "#ffffff",
            "info-inverse-active": "#f0f0f0",
            "info-inverse-inactive": "#ffffff",
            "info-inverse-disabled": "#000000",
            "discovery-inverse-hover": "#ffffff",
            "discovery-inverse-active": "#f0f0f0",
            "discovery-inverse-inactive": "#ffffff",
            "discovery-inverse-disabled": "#000000",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#ffffff",
            "danger-ghost-hover": "#ffffff",
            "negative-ghost-hover": "#fff7f2",
            "warning-ghost-hover": "#fff9bf",
            "success-ghost-hover": "#e8fff6",
            "positive-ghost-hover": "#f4ffe2",
            "info-ghost-hover": "#ccffff",
            "discovery-ghost-hover": "#ffffff"
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
            "link": "#3b91ff",
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
            "link-hover": "#77b2ff",
            "link-active": "#1878f2",
            "link-inactive": "#9eccff",
            "link-disabled": "#5d92d9"
      }}
    />
          <ColorItem
      title={"color.black"}
      subtitle={"A near black color"}
      colors={{
            "black": "#000000"
      }}
    />
          <ColorItem
      title={"color.brand"}
      subtitle={"The Storm Software brand teal color"}
      colors={{
            "1": "#dff9f7",
            "2": "#a2f0e8",
            "3": "#66e5db",
            "4": "#28dbcb",
            "5": "#00bcad",
            "6": "#008479",
            "7": "#004b45",
            "8": "#001110",
            "9": "#000000"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the light theme"}
      colors={{
            "grey.emphasis": "#3e3e3e",
            "grey.subtle": "#ffffff",
            "brand.emphasis": "#dff9f7",
            "brand.subtle": "#a2f0e8",
            "red.emphasis": "#f51534",
            "red.subtle": "#fcb3d6",
            "orange.emphasis": "#ff7224",
            "orange.subtle": "#ffc2a4",
            "yellow.emphasis": "#a47200",
            "yellow.subtle": "#ffc457",
            "green.emphasis": "#007b4f",
            "green.subtle": "#64e6a6",
            "sky.emphasis": "#008cb4",
            "sky.subtle": "#48d6ff",
            "blue.emphasis": "#4d9bff",
            "blue.subtle": "#bedbff",
            "purple.emphasis": "#a3a2ff",
            "purple.subtle": "#fcfcff",
            "pink.emphasis": "#f56fa6",
            "pink.subtle": "#ffdcea"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the light theme"}
      colors={{
            "body": "#9d9d9d",
            "eyebrow": "#3e3e3e",
            "caption": "#6d6d6d",
            "link": "#3b91ff",
            "required": "#ff0404",
            "body-hover": "#d9d9d9",
            "body-active": "#797979",
            "body-inactive": "#ffffff",
            "body-disabled": "#9d9d9d99",
            "eyebrow-hover": "#626262",
            "eyebrow-active": "#282828",
            "eyebrow-inactive": "#868686",
            "eyebrow-disabled": "#3e3e3e99",
            "caption-hover": "#9d9d9d",
            "caption-active": "#505050",
            "caption-inactive": "#cfcfcf",
            "caption-disabled": "#6d6d6d99",
            "link-hover": "#9eccff",
            "link-active": "#0c6ce3",
            "link-inactive": "#d8f2ff",
            "link-disabled": "#151515",
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
            "border": "#111111",
            "backdrop": "#00000066",
            "background-hover": "#ffffff",
            "background-active": "#ffffff",
            "background-inactive": "#ffffff",
            "background-disabled": "#ffffff99",
            "border-hover": "#292929",
            "border-active": "#020202",
            "border-disabled": "#11111199"
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
