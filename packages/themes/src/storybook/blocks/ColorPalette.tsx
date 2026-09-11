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
            "1": "#beddc3",
            "2": "#a0cdab",
            "3": "#81bd95",
            "4": "#63ae81",
            "5": "#449e71",
            "6": "#268e62",
            "7": "#1e7957",
            "8": "#16624a",
            "9": "#0f4b3c"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#f5f5f5",
            "2": "#dcdcdc",
            "3": "#bebebe",
            "4": "#9f9f9f",
            "5": "#808080",
            "6": "#616161",
            "7": "#484848",
            "8": "#3a3a3a",
            "9": "#2e2e2e",
            "10": "#181818"
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
            "1": "#ffbfd6",
            "2": "#fbb2cc",
            "3": "#faa3c3",
            "4": "#f899bd",
            "5": "#f98cb7",
            "6": "#f37fae",
            "7": "#ed72a5",
            "8": "#de6d9b",
            "9": "#b4567d"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#d3ddec",
            "2": "#becae4",
            "3": "#a9b5db",
            "4": "#949ed2",
            "5": "#8085ca",
            "6": "#6c6bc1",
            "7": "#59549c",
            "8": "#453e76",
            "9": "#2f2850"
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
            "1": "#b3f8e7",
            "2": "#8ff4e5",
            "3": "#6bf1e7",
            "4": "#47ecee",
            "5": "#24d8ea",
            "6": "#00bee7",
            "7": "#0087b2",
            "8": "#073b55",
            "9": "#00273e"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - neutral near-black page canvas"}
      colors={{
            "1": "#181818",
            "2": "#1f1f1f",
            "3": "#262626",
            "4": "#303030",
            "5": "#3a3a3a"
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
            "base": "#2e2e2e",
            "brand": "#0c463c",
            "danger": "#3c050a",
            "negative": "#790000",
            "warning": "#4d370b",
            "success": "#0f4b3c",
            "positive": "#243e04",
            "info": "#00273e",
            "discovery": "#2f2850",
            "base-hover": "#363636",
            "base-active": "#454545",
            "base-disabled": "#2e2e2e99",
            "brand-hover": "#245a4f",
            "brand-active": "#195045",
            "brand-disabled": "#26423c",
            "danger-hover": "#4a1215",
            "danger-active": "#430c0f",
            "danger-disabled": "#311312",
            "negative-hover": "#912219",
            "negative-active": "#85140d",
            "negative-disabled": "#642821",
            "warning-hover": "#614a21",
            "warning-active": "#574016",
            "warning-disabled": "#463923",
            "success-hover": "#286050",
            "success-active": "#1c5546",
            "success-disabled": "#2a473e",
            "positive-hover": "#355019",
            "positive-active": "#2c470f",
            "positive-disabled": "#2b3b1e",
            "info-hover": "#0e344c",
            "info-active": "#062e45",
            "info-disabled": "#132634",
            "discovery-hover": "#3e3861",
            "discovery-active": "#373059",
            "discovery-disabled": "#2f2c43"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#484848",
            "brand": "#2abaa0",
            "danger": "#cf2d56",
            "negative": "#ff0404",
            "warning": "#d29527",
            "success": "#268e62",
            "positive": "#76c319",
            "info": "#00bee7",
            "discovery": "#6c6bc1",
            "base-subtle": "#616161",
            "brand-subtle": "#156e5e",
            "danger-subtle": "#5a0f17",
            "negative-subtle": "#790000",
            "warning-subtle": "#a6761c",
            "success-subtle": "#16624a",
            "positive-subtle": "#c8e7a3",
            "info-subtle": "#073b55",
            "discovery-subtle": "#453e76",
            "base-hover": "#5e5e5e",
            "base-active": "#8d8d8d",
            "base-disabled": "#48484899",
            "brand-hover": "#00634d",
            "brand-active": "#008d75",
            "brand-disabled": "#6db1a1",
            "danger-hover": "#7f001a",
            "danger-active": "#a70037",
            "danger-disabled": "#b05663",
            "negative-hover": "#a10000",
            "negative-active": "#d00000",
            "negative-disabled": "#d65e4f",
            "warning-hover": "#784000",
            "warning-active": "#a46900",
            "warning-disabled": "#c09c66",
            "success-hover": "#004a24",
            "success-active": "#006b42",
            "success-disabled": "#53866c",
            "positive-hover": "#1b6600",
            "positive-active": "#499400",
            "positive-disabled": "#8dba69",
            "info-hover": "#006288",
            "info-active": "#008fb6",
            "info-disabled": "#6db8d0",
            "discovery-hover": "#312978",
            "discovery-active": "#4d499c",
            "discovery-disabled": "#6f71a4",
            "base-subtle-hover": "#7d7d7d",
            "base-subtle-active": "#bababa",
            "base-subtle-disabled": "#61616199",
            "brand-subtle-hover": "#59a997",
            "brand-subtle-active": "#3a8b7a",
            "brand-subtle-disabled": "#3e685e",
            "danger-subtle-hover": "#813436",
            "danger-subtle-active": "#6d2226",
            "danger-subtle-disabled": "#4b2122",
            "negative-subtle-hover": "#a93a2e",
            "negative-subtle-active": "#912219",
            "negative-subtle-disabled": "#642821",
            "warning-subtle-hover": "#5d3100",
            "warning-subtle-active": "#815300",
            "warning-subtle-disabled": "#977b50",
            "success-subtle-hover": "#51977c",
            "success-subtle-active": "#357c63",
            "success-subtle-disabled": "#385d4e",
            "positive-subtle-hover": "#5c7738",
            "positive-subtle-active": "#90ad6c",
            "positive-subtle-disabled": "#cfe2ba",
            "info-subtle-hover": "#31607c",
            "info-subtle-active": "#1e4d68",
            "info-subtle-disabled": "#213a49",
            "discovery-subtle-hover": "#716ba7",
            "discovery-subtle-active": "#5a548e",
            "discovery-subtle-disabled": "#454364"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#f5f5f5",
            "brand": "#2abaa0",
            "danger": "#cf2d56",
            "negative": "#ff0404",
            "warning": "#d29527",
            "success": "#268e62",
            "positive": "#76c319",
            "info": "#00bee7",
            "discovery": "#6c6bc1",
            "base-inverse": "#0c0c0d",
            "brand-inverse": "#f5f5f5",
            "danger-inverse": "#f5f5f5",
            "negative-inverse": "#f5f5f5",
            "warning-inverse": "#f5f5f5",
            "success-inverse": "#f5f5f5",
            "positive-inverse": "#f5f5f5",
            "info-inverse": "#f5f5f5",
            "discovery-inverse": "#f5f5f5",
            "base-hover": "#b6b6b6",
            "base-active": "#444444",
            "base-disabled": "#999999",
            "brand-hover": "#00634d",
            "brand-active": "#008d75",
            "brand-disabled": "#6db1a1",
            "danger-hover": "#7f001a",
            "danger-active": "#a70037",
            "danger-disabled": "#aeaeae",
            "negative-hover": "#a10000",
            "negative-active": "#d00000",
            "negative-disabled": "#999999",
            "warning-hover": "#784000",
            "warning-active": "#a46900",
            "warning-disabled": "#c09c66",
            "success-hover": "#004a24",
            "success-active": "#006b42",
            "success-disabled": "#999999",
            "positive-hover": "#1b6600",
            "positive-active": "#499400",
            "positive-disabled": "#8dba69",
            "info-hover": "#006288",
            "info-active": "#008fb6",
            "info-disabled": "#6db8d0",
            "discovery-hover": "#312978",
            "discovery-active": "#4d499c",
            "discovery-disabled": "#999999",
            "base-inverse-hover": "#131314",
            "base-inverse-active": "#212122",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#7b7b7b",
            "brand-inverse-active": "#b6b6b6",
            "brand-inverse-disabled": "#f5f5f599",
            "danger-inverse-hover": "#7b7b7b",
            "danger-inverse-active": "#b6b6b6",
            "danger-inverse-disabled": "#aeaeae",
            "negative-inverse-hover": "#7b7b7b",
            "negative-inverse-active": "#b6b6b6",
            "negative-inverse-disabled": "#f5f5f599",
            "warning-inverse-hover": "#7b7b7b",
            "warning-inverse-active": "#b6b6b6",
            "warning-inverse-disabled": "#f5f5f599",
            "success-inverse-hover": "#7b7b7b",
            "success-inverse-active": "#b6b6b6",
            "success-inverse-disabled": "#f5f5f599",
            "positive-inverse-hover": "#7b7b7b",
            "positive-inverse-active": "#b6b6b6",
            "positive-inverse-disabled": "#f5f5f599",
            "info-inverse-hover": "#7b7b7b",
            "info-inverse-active": "#b6b6b6",
            "info-inverse-disabled": "#f5f5f599",
            "discovery-inverse-hover": "#7b7b7b",
            "discovery-inverse-active": "#b6b6b6",
            "discovery-inverse-disabled": "#f5f5f599",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#65b49a",
            "danger-ghost-hover": "#cc5558",
            "negative-ghost-hover": "#ff6d5b",
            "warning-ghost-hover": "#ca8c59",
            "success-ghost-hover": "#4a885e",
            "positive-ghost-hover": "#6fb95f",
            "info-ghost-hover": "#6ab8e2",
            "discovery-ghost-hover": "#6565b9",
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
            "page": "#181818",
            "elevated": "#1f1f1f",
            "floating": "#262626",
            "high": "#303030",
            "highest": "#3a3a3a",
            "lowest-hover": "#131314",
            "lowest-active": "#0f0f10",
            "lowest-disabled": "#0c0c0d",
            "page-hover": "#222222",
            "page-active": "#1d1d1d",
            "page-disabled": "#18181899",
            "elevated-hover": "#2b2b2b",
            "elevated-active": "#252525",
            "elevated-disabled": "#1f1f1f99",
            "floating-hover": "#333333",
            "floating-active": "#2d2d2d",
            "floating-disabled": "#26262699",
            "high-hover": "#404040",
            "high-active": "#383838",
            "high-disabled": "#30303099",
            "highest-hover": "#4c4c4c",
            "highest-active": "#434343",
            "highest-disabled": "#3a3a3a99"
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
            "1": "#aff2e6",
            "2": "#90eddc",
            "3": "#72e8d3",
            "4": "#54e3c9",
            "5": "#36dec0",
            "6": "#2abaa0",
            "7": "#1f947f",
            "8": "#156e5e",
            "9": "#0c463c"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the dark theme"}
      colors={{
            "grey.emphasis": "#f5f5f5",
            "grey.subtle": "#2e2e2e",
            "brand.emphasis": "#aff2e6",
            "brand.subtle": "#90eddc",
            "red.emphasis": "#a21f39",
            "red.subtle": "#3c050a",
            "orange.emphasis": "#f9935f",
            "orange.subtle": "#b45b2b",
            "yellow.emphasis": "#ffb433",
            "yellow.subtle": "#4d370b",
            "green.emphasis": "#449e71",
            "green.subtle": "#16624a",
            "sky.emphasis": "#24d8ea",
            "sky.subtle": "#00273e",
            "blue.emphasis": "#5291ff",
            "blue.subtle": "#1d70f2",
            "purple.emphasis": "#8085ca",
            "purple.subtle": "#2f2850",
            "pink.emphasis": "#f98cb7",
            "pink.subtle": "#b4567d"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the dark theme"}
      colors={{
            "body": "#9f9f9f",
            "eyebrow": "#808080",
            "caption": "#808080",
            "link": "#5291ff",
            "required": "#ff0404",
            "body-hover": "#4d4d4d",
            "body-active": "#757575",
            "body-disabled": "#9f9f9f99",
            "eyebrow-hover": "#3d3d3d",
            "eyebrow-active": "#5d5d5d",
            "eyebrow-disabled": "#80808099",
            "caption-hover": "#3d3d3d",
            "caption-active": "#5d5d5d",
            "caption-disabled": "#80808099",
            "link-hover": "#003da4",
            "link-active": "#2a67d1",
            "link-disabled": "#6f95d6",
            "required-hover": "#a10000",
            "required-active": "#d00000",
            "required-disabled": "#d65e4f"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#262626",
            "border": "#484848",
            "backdrop": "#0d0c0766",
            "background-hover": "#333333",
            "background-active": "#2d2d2d",
            "background-disabled": "#26262699",
            "border-hover": "#757575",
            "border-active": "#5e5e5e",
            "border-disabled": "#48484899"
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
            "1": "#aac3ae",
            "2": "#97b59e",
            "3": "#83a890",
            "4": "#719b82",
            "5": "#5c8f75",
            "6": "#45856a",
            "7": "#3d7963",
            "8": "#346c5b",
            "9": "#2c5f53"
      }}
    />
          <ColorItem
      title={"color.grey"}
      subtitle={"A soft neutral white for primary text on dark surfaces"}
      colors={{
            "1": "#d2d2d2",
            "2": "#c0c0c0",
            "3": "#ababab",
            "4": "#969696",
            "5": "#808080",
            "6": "#6a6a6a",
            "7": "#595959",
            "8": "#4f4f4f",
            "9": "#464646",
            "10": "#373737"
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
            "1": "#e4a1b9",
            "2": "#dd9bb3",
            "3": "#da93ad",
            "4": "#d78eaa",
            "5": "#d686a6",
            "6": "#d080a0",
            "7": "#c9799a",
            "8": "#bd7794",
            "9": "#9e697f"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#b6c0d0",
            "2": "#a9b3c9",
            "3": "#9ca5c0",
            "4": "#8f96b8",
            "5": "#8386b1",
            "6": "#7776a8",
            "7": "#69668e",
            "8": "#585477",
            "9": "#47425f"
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
            "1": "#9ddacb",
            "2": "#89d2c8",
            "3": "#75cbc5",
            "4": "#61c3c4",
            "5": "#4db2bc",
            "6": "#36a1b9",
            "7": "#2d819c",
            "8": "#265167",
            "9": "#1b445d"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - neutral near-black page canvas"}
      colors={{
            "1": "#373737",
            "2": "#3c3c3c",
            "3": "#414141",
            "4": "#484848",
            "5": "#4f4f4f"
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
            "base": "#464646",
            "brand": "#295d54",
            "danger": "#592126",
            "negative": "#7d2424",
            "warning": "#624f29",
            "success": "#2c5f53",
            "positive": "#405b20",
            "info": "#1b445d",
            "discovery": "#47425f",
            "base-hover": "#4c4c4c",
            "base-active": "#575757",
            "base-disabled": "#46464699",
            "brand-hover": "#3f665e",
            "brand-active": "#356158",
            "brand-disabled": "#405651",
            "danger-hover": "#5e2f31",
            "danger-active": "#5b292b",
            "danger-disabled": "#4d2f2e",
            "negative-hover": "#88413c",
            "negative-active": "#823631",
            "negative-disabled": "#6c423d",
            "warning-hover": "#6a5a3d",
            "warning-active": "#655433",
            "warning-disabled": "#594f3d",
            "success-hover": "#42695e",
            "success-active": "#386358",
            "success-disabled": "#435952",
            "positive-hover": "#4b6135",
            "positive-active": "#455d2c",
            "positive-disabled": "#445239",
            "info-hover": "#2b4c60",
            "info-active": "#23495e",
            "info-disabled": "#2f424f",
            "discovery-hover": "#524e69",
            "discovery-active": "#4d4864",
            "discovery-disabled": "#474456"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#595959",
            "brand": "#4d9f90",
            "danger": "#ab5268",
            "negative": "#c63c3c",
            "warning": "#ad8b4e",
            "success": "#45856a",
            "positive": "#78a442",
            "info": "#36a1b9",
            "discovery": "#7776a8",
            "base-subtle": "#6a6a6a",
            "brand-subtle": "#357468",
            "danger-subtle": "#682e34",
            "negative-subtle": "#7d2424",
            "warning-subtle": "#947741",
            "success-subtle": "#346c5b",
            "positive-subtle": "#b2ca97",
            "info-subtle": "#265167",
            "discovery-subtle": "#585477",
            "base-hover": "#686868",
            "base-active": "#898989",
            "base-disabled": "#59595999",
            "brand-hover": "#21715f",
            "brand-active": "#278877",
            "brand-disabled": "#779e95",
            "danger-hover": "#802538",
            "danger-active": "#962c4f",
            "danger-disabled": "#9b6970",
            "negative-hover": "#932b2b",
            "negative-active": "#ac3232",
            "negative-disabled": "#b46e66",
            "warning-hover": "#7c5324",
            "warning-active": "#946e2b",
            "warning-disabled": "#a79273",
            "success-hover": "#1d633f",
            "success-active": "#227555",
            "success-disabled": "#638172",
            "positive-hover": "#377321",
            "positive-active": "#598c29",
            "positive-disabled": "#8aa375",
            "info-hover": "#276b85",
            "info-active": "#2e869e",
            "info-disabled": "#77a5b3",
            "discovery-hover": "#4a4578",
            "discovery-active": "#615f8e",
            "discovery-disabled": "#787995",
            "base-subtle-hover": "#7e7e7e",
            "base-subtle-active": "#a8a8a8",
            "base-subtle-disabled": "#6a6a6a99",
            "brand-subtle-hover": "#6a978d",
            "brand-subtle-active": "#538379",
            "brand-subtle-disabled": "#536e67",
            "danger-subtle-hover": "#7d4e4f",
            "danger-subtle-active": "#723f42",
            "danger-subtle-disabled": "#5c3c3d",
            "negative-subtle-hover": "#95554e",
            "negative-subtle-active": "#88413c",
            "negative-subtle-disabled": "#6c423d",
            "warning-subtle-hover": "#6e4920",
            "warning-subtle-active": "#816126",
            "warning-subtle-disabled": "#8b7b63",
            "success-subtle-hover": "#648b7c",
            "success-subtle-active": "#4e7a6b",
            "success-subtle-disabled": "#4e675d",
            "positive-subtle-hover": "#667750",
            "positive-subtle-active": "#8b9b76",
            "positive-subtle-disabled": "#b7c7a6",
            "info-subtle-hover": "#4b697a",
            "info-subtle-active": "#3b5c6f",
            "info-subtle-disabled": "#3c4f5b",
            "discovery-subtle-hover": "#797597",
            "discovery-subtle-active": "#686586",
            "discovery-subtle-disabled": "#57566b"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#d2d2d2",
            "brand": "#4d9f90",
            "danger": "#ab5268",
            "negative": "#c63c3c",
            "warning": "#ad8b4e",
            "success": "#45856a",
            "positive": "#78a442",
            "info": "#36a1b9",
            "discovery": "#7776a8",
            "base-inverse": "#2e2e30",
            "brand-inverse": "#d2d2d2",
            "danger-inverse": "#d2d2d2",
            "negative-inverse": "#d2d2d2",
            "warning-inverse": "#d2d2d2",
            "success-inverse": "#d2d2d2",
            "positive-inverse": "#d2d2d2",
            "info-inverse": "#d2d2d2",
            "discovery-inverse": "#d2d2d2",
            "base-hover": "#a6a6a6",
            "base-active": "#565656",
            "base-disabled": "#919191",
            "brand-hover": "#21715f",
            "brand-active": "#278877",
            "brand-disabled": "#779e95",
            "danger-hover": "#802538",
            "danger-active": "#962c4f",
            "danger-disabled": "#a0a0a0",
            "negative-hover": "#932b2b",
            "negative-active": "#ac3232",
            "negative-disabled": "#919191",
            "warning-hover": "#7c5324",
            "warning-active": "#946e2b",
            "warning-disabled": "#a79273",
            "success-hover": "#1d633f",
            "success-active": "#227555",
            "success-disabled": "#919191",
            "positive-hover": "#377321",
            "positive-active": "#598c29",
            "positive-disabled": "#8aa375",
            "info-hover": "#276b85",
            "info-active": "#2e869e",
            "info-disabled": "#77a5b3",
            "discovery-hover": "#4a4578",
            "discovery-active": "#615f8e",
            "discovery-disabled": "#919191",
            "base-inverse-hover": "#333335",
            "base-inverse-active": "#3d3d3e",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#7c7c7c",
            "brand-inverse-active": "#a6a6a6",
            "brand-inverse-disabled": "#d2d2d299",
            "danger-inverse-hover": "#7c7c7c",
            "danger-inverse-active": "#a6a6a6",
            "danger-inverse-disabled": "#a0a0a0",
            "negative-inverse-hover": "#7c7c7c",
            "negative-inverse-active": "#a6a6a6",
            "negative-inverse-disabled": "#d2d2d299",
            "warning-inverse-hover": "#7c7c7c",
            "warning-inverse-active": "#a6a6a6",
            "warning-inverse-disabled": "#d2d2d299",
            "success-inverse-hover": "#7c7c7c",
            "success-inverse-active": "#a6a6a6",
            "success-inverse-disabled": "#d2d2d299",
            "positive-inverse-hover": "#7c7c7c",
            "positive-inverse-active": "#a6a6a6",
            "positive-inverse-disabled": "#d2d2d299",
            "info-inverse-hover": "#7c7c7c",
            "info-inverse-active": "#a6a6a6",
            "info-inverse-disabled": "#d2d2d299",
            "discovery-inverse-hover": "#7c7c7c",
            "discovery-inverse-active": "#a6a6a6",
            "discovery-inverse-disabled": "#d2d2d299",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#729f90",
            "danger-ghost-hover": "#ae696b",
            "negative-ghost-hover": "#d4766b",
            "warning-ghost-hover": "#ad896b",
            "success-ghost-hover": "#5e8269",
            "positive-ghost-hover": "#78a26f",
            "info-ghost-hover": "#75a6c0",
            "discovery-ghost-hover": "#7272a2",
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
            "page": "#373737",
            "elevated": "#3c3c3c",
            "floating": "#414141",
            "high": "#484848",
            "highest": "#4f4f4f",
            "lowest-hover": "#333335",
            "lowest-active": "#303032",
            "lowest-disabled": "#2e2e30",
            "page-hover": "#3e3e3e",
            "page-active": "#3b3b3b",
            "page-disabled": "#37373799",
            "elevated-hover": "#444444",
            "elevated-active": "#404040",
            "elevated-disabled": "#3c3c3c99",
            "floating-hover": "#4a4a4a",
            "floating-active": "#464646",
            "floating-disabled": "#41414199",
            "high-hover": "#535353",
            "high-active": "#4d4d4d",
            "high-disabled": "#48484899",
            "highest-hover": "#5b5b5b",
            "highest-active": "#555555",
            "highest-disabled": "#4f4f4f99"
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
            "1": "#9cd4ca",
            "2": "#8bcdc1",
            "3": "#79c5b8",
            "4": "#68beae",
            "5": "#57b6a5",
            "6": "#4d9f90",
            "7": "#41897c",
            "8": "#357468",
            "9": "#295d54"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the dark theme"}
      colors={{
            "grey.emphasis": "#d2d2d2",
            "grey.subtle": "#464646",
            "brand.emphasis": "#9cd4ca",
            "brand.subtle": "#8bcdc1",
            "red.emphasis": "#914252",
            "red.subtle": "#592126",
            "orange.emphasis": "#d08f6d",
            "orange.subtle": "#9c694d",
            "yellow.emphasis": "#cea155",
            "yellow.subtle": "#624f29",
            "green.emphasis": "#5c8f75",
            "green.subtle": "#346c5b",
            "sky.emphasis": "#4db2bc",
            "sky.subtle": "#1b445d",
            "blue.emphasis": "#668dd3",
            "blue.subtle": "#4978c1",
            "purple.emphasis": "#8386b1",
            "purple.subtle": "#47425f",
            "pink.emphasis": "#d686a6",
            "pink.subtle": "#9e697f"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the dark theme"}
      colors={{
            "body": "#969696",
            "eyebrow": "#808080",
            "caption": "#808080",
            "link": "#668dd3",
            "required": "#c63c3c",
            "body-hover": "#5c5c5c",
            "body-active": "#787878",
            "body-disabled": "#96969699",
            "eyebrow-hover": "#515151",
            "eyebrow-active": "#676767",
            "eyebrow-disabled": "#80808099",
            "caption-hover": "#515151",
            "caption-active": "#676767",
            "caption-disabled": "#80808099",
            "link-hover": "#2b5294",
            "link-active": "#5072ac",
            "link-disabled": "#7890b8",
            "required-hover": "#932b2b",
            "required-active": "#ac3232",
            "required-disabled": "#b46e66"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#414141",
            "border": "#595959",
            "backdrop": "#35322666",
            "background-hover": "#4a4a4a",
            "background-active": "#464646",
            "background-disabled": "#41414199",
            "border-hover": "#787878",
            "border-active": "#686868",
            "border-disabled": "#59595999"
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
            "1": "#eaf7ec",
            "2": "#b9e6c4",
            "3": "#87d4a0",
            "4": "#56c382",
            "5": "#2ca96a",
            "6": "#0c8652",
            "7": "#07613f",
            "8": "#033828",
            "9": "#000f0c"
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
            "5": "#808080",
            "6": "#535353",
            "7": "#2f2f2f",
            "8": "#1b1b1b",
            "9": "#090909",
            "10": "#000000"
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
            "2": "#fffcfd",
            "3": "#ffe5ef",
            "4": "#ffd4e4",
            "5": "#ffc2da",
            "6": "#ffa7cb",
            "7": "#ff8bbb",
            "8": "#f875aa",
            "9": "#cc437c"
      }}
    />
          <ColorItem
      title={"color.purple"}
      subtitle={"A pale lavender purple color"}
      colors={{
            "1": "#ffffff",
            "2": "#f0f4fb",
            "3": "#cdd6f3",
            "4": "#aab5ea",
            "5": "#8a90e2",
            "6": "#6867d9",
            "7": "#4740aa",
            "8": "#2f276b",
            "9": "#140f2c"
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
            "1": "#f9fffe",
            "2": "#bffff6",
            "3": "#87fff6",
            "4": "#4efdff",
            "5": "#16eaff",
            "6": "#00b5dc",
            "7": "#006d8f",
            "8": "#000c13",
            "9": "#000000"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"The lowest level surface of the palette - neutral near-black page canvas"}
      colors={{
            "1": "#000000",
            "2": "#000000",
            "3": "#000000",
            "4": "#0c0c0c",
            "5": "#1b1b1b"
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
            "base": "#090909",
            "brand": "#000403",
            "danger": "#000000",
            "negative": "#3d0000",
            "warning": "#0d0900",
            "success": "#000f0c",
            "positive": "#000000",
            "info": "#000000",
            "discovery": "#140f2c",
            "base-hover": "#151515",
            "base-active": "#2b2b2b",
            "base-disabled": "#09090999",
            "brand-hover": "#0d372f",
            "brand-active": "#05211b",
            "brand-disabled": "#0b1916",
            "danger-hover": "#110102",
            "danger-active": "#000000",
            "danger-disabled": "#000000",
            "negative-hover": "#840a00",
            "negative-active": "#610600",
            "negative-disabled": "#44100b",
            "warning-hover": "#3f2c0b",
            "warning-active": "#281b03",
            "warning-disabled": "#1c1509",
            "success-hover": "#104234",
            "success-active": "#072a21",
            "success-disabled": "#0f221c",
            "positive-hover": "#132105",
            "positive-active": "#050a00",
            "positive-disabled": "#070b04",
            "info-hover": "#000a10",
            "info-active": "#000000",
            "info-disabled": "#000000",
            "discovery-hover": "#26204c",
            "discovery-active": "#1d173d",
            "discovery-disabled": "#110f1f"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#2f2f2f",
            "brand": "#0bcdaa",
            "danger": "#f00a45",
            "negative": "#ff0606",
            "warning": "#f39e03",
            "success": "#0c8652",
            "positive": "#70cc00",
            "info": "#00b5dc",
            "discovery": "#6867d9",
            "base-subtle": "#535353",
            "brand-subtle": "#014a3d",
            "danger-subtle": "#260004",
            "negative-subtle": "#3d0000",
            "warning-subtle": "#a76d00",
            "success-subtle": "#033828",
            "positive-subtle": "#e6fbce",
            "info-subtle": "#000c13",
            "discovery-subtle": "#2f276b",
            "base-hover": "#4f4f4f",
            "base-active": "#939393",
            "base-disabled": "#2f2f2f99",
            "brand-hover": "#001d16",
            "brand-active": "#005a4a",
            "brand-disabled": "#66c6b0",
            "danger-hover": "#45000e",
            "danger-active": "#7f002a",
            "danger-disabled": "#c74256",
            "negative-hover": "#770000",
            "negative-active": "#bb0000",
            "negative-disabled": "#f45642",
            "warning-hover": "#3b2000",
            "warning-active": "#7b4f00",
            "warning-disabled": "#d9a85f",
            "success-hover": "#000000",
            "success-active": "#002819",
            "success-disabled": "#3f8963",
            "positive-hover": "#092100",
            "positive-active": "#316400",
            "positive-disabled": "#93d162",
            "info-hover": "#003b52",
            "info-active": "#007595",
            "info-disabled": "#6fccea",
            "discovery-hover": "#1a1166",
            "discovery-active": "#3832a7",
            "discovery-disabled": "#6669b6",
            "base-subtle-hover": "#7c7c7c",
            "base-subtle-active": "#d4d4d4",
            "base-subtle-disabled": "#53535399",
            "brand-subtle-hover": "#46bea3",
            "brand-subtle-active": "#228973",
            "brand-subtle-disabled": "#26584c",
            "danger-subtle-hover": "#781c1e",
            "danger-subtle-active": "#510b0f",
            "danger-subtle-disabled": "#210909",
            "negative-subtle-hover": "#b32112",
            "negative-subtle-active": "#840a00",
            "negative-subtle-disabled": "#44100b",
            "warning-subtle-hover": "#140b00",
            "warning-subtle-active": "#482f00",
            "warning-subtle-disabled": "#a1793b",
            "success-subtle-hover": "#3ca27a",
            "success-subtle-active": "#1d7153",
            "success-subtle-disabled": "#1f4636",
            "positive-subtle-hover": "#4b6b20",
            "positive-subtle-active": "#97c163",
            "positive-subtle-disabled": "#f2fae9",
            "info-subtle-hover": "#194f6f",
            "info-subtle-active": "#083047",
            "info-subtle-disabled": "#09161e",
            "discovery-subtle-hover": "#6961ba",
            "discovery-subtle-active": "#494095",
            "discovery-subtle-disabled": "#2e2c54"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#ffffff",
            "brand": "#0bcdaa",
            "danger": "#f00a45",
            "negative": "#ff0606",
            "warning": "#f39e03",
            "success": "#0c8652",
            "positive": "#70cc00",
            "info": "#00b5dc",
            "discovery": "#6867d9",
            "base-inverse": "#000000",
            "brand-inverse": "#ffffff",
            "danger-inverse": "#ffffff",
            "negative-inverse": "#ffffff",
            "warning-inverse": "#ffffff",
            "success-inverse": "#ffffff",
            "positive-inverse": "#ffffff",
            "info-inverse": "#ffffff",
            "discovery-inverse": "#ffffff",
            "base-hover": "#cfcfcf",
            "base-active": "#292929",
            "base-disabled": "#a4a4a4",
            "brand-hover": "#001d16",
            "brand-active": "#005a4a",
            "brand-disabled": "#66c6b0",
            "danger-hover": "#45000e",
            "danger-active": "#7f002a",
            "danger-disabled": "#c3c3c3",
            "negative-hover": "#770000",
            "negative-active": "#bb0000",
            "negative-disabled": "#a4a4a4",
            "warning-hover": "#3b2000",
            "warning-active": "#7b4f00",
            "warning-disabled": "#d9a85f",
            "success-hover": "#000000",
            "success-active": "#002819",
            "success-disabled": "#a4a4a4",
            "positive-hover": "#092100",
            "positive-active": "#316400",
            "positive-disabled": "#93d162",
            "info-hover": "#003b52",
            "info-active": "#007595",
            "info-disabled": "#6fccea",
            "discovery-hover": "#1a1166",
            "discovery-active": "#3832a7",
            "discovery-disabled": "#a4a4a4",
            "base-inverse-hover": "#000000",
            "base-inverse-active": "#000000",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#797979",
            "brand-inverse-active": "#cfcfcf",
            "brand-inverse-disabled": "#ffffff99",
            "danger-inverse-hover": "#797979",
            "danger-inverse-active": "#cfcfcf",
            "danger-inverse-disabled": "#c3c3c3",
            "negative-inverse-hover": "#797979",
            "negative-inverse-active": "#cfcfcf",
            "negative-inverse-disabled": "#ffffff99",
            "warning-inverse-hover": "#797979",
            "warning-inverse-active": "#cfcfcf",
            "warning-inverse-disabled": "#ffffff99",
            "success-inverse-hover": "#797979",
            "success-inverse-active": "#cfcfcf",
            "success-inverse-disabled": "#ffffff99",
            "positive-inverse-hover": "#797979",
            "positive-inverse-active": "#cfcfcf",
            "positive-inverse-disabled": "#ffffff99",
            "info-inverse-hover": "#797979",
            "info-inverse-active": "#cfcfcf",
            "info-inverse-disabled": "#ffffff99",
            "discovery-inverse-hover": "#797979",
            "discovery-inverse-active": "#cfcfcf",
            "discovery-inverse-disabled": "#ffffff99",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#5acaa6",
            "danger-ghost-hover": "#e8484c",
            "negative-ghost-hover": "#ff9184",
            "warning-ghost-hover": "#e5924e",
            "success-ghost-hover": "#348950",
            "positive-ghost-hover": "#69d152",
            "info-ghost-hover": "#73ccfc",
            "discovery-ghost-hover": "#5c5cd0",
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
            "floating": "#000000",
            "high": "#0c0c0c",
            "highest": "#1b1b1b",
            "lowest-hover": "#000000",
            "lowest-active": "#000000",
            "lowest-disabled": "#000000",
            "page-hover": "#000000",
            "page-active": "#000000",
            "page-disabled": "#00000099",
            "elevated-hover": "#050505",
            "elevated-active": "#000000",
            "elevated-disabled": "#00000099",
            "floating-hover": "#111111",
            "floating-active": "#080808",
            "floating-disabled": "#00000099",
            "high-hover": "#232323",
            "high-active": "#181818",
            "high-disabled": "#0c0c0c99",
            "highest-hover": "#353535",
            "highest-active": "#282828",
            "highest-disabled": "#1b1b1b99"
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
            "1": "#ebfffb",
            "2": "#b7fff2",
            "3": "#84ffe9",
            "4": "#51ffdf",
            "5": "#1effd7",
            "6": "#0bcdaa",
            "7": "#058c74",
            "8": "#014a3d",
            "9": "#000403"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the dark theme"}
      colors={{
            "grey.emphasis": "#ffffff",
            "grey.subtle": "#090909",
            "brand.emphasis": "#ebfffb",
            "brand.subtle": "#b7fff2",
            "red.emphasis": "#a20322",
            "red.subtle": "#000000",
            "orange.emphasis": "#ffac81",
            "orange.subtle": "#c44d0d",
            "yellow.emphasis": "#ffbc4a",
            "yellow.subtle": "#0d0900",
            "green.emphasis": "#2ca96a",
            "green.subtle": "#033828",
            "sky.emphasis": "#16eaff",
            "sky.subtle": "#000000",
            "blue.emphasis": "#77a8ff",
            "blue.subtle": "#1772ff",
            "purple.emphasis": "#8a90e2",
            "purple.subtle": "#140f2c",
            "pink.emphasis": "#ffc2da",
            "pink.subtle": "#cc437c"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The body foreground color for the dark theme"}
      colors={{
            "body": "#adadad",
            "eyebrow": "#808080",
            "caption": "#808080",
            "link": "#77a8ff",
            "required": "#ff0606",
            "body-hover": "#363636",
            "body-active": "#707070",
            "body-disabled": "#adadad99",
            "eyebrow-hover": "#1f1f1f",
            "eyebrow-active": "#4d4d4d",
            "eyebrow-disabled": "#80808099",
            "caption-hover": "#1f1f1f",
            "caption-active": "#4d4d4d",
            "caption-disabled": "#80808099",
            "link-hover": "#002e7b",
            "link-active": "#065df3",
            "link-disabled": "#75a2f0",
            "required-hover": "#770000",
            "required-active": "#bb0000",
            "required-disabled": "#f45642"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#000000",
            "border": "#2f2f2f",
            "backdrop": "#00000066",
            "background-hover": "#111111",
            "background-active": "#080808",
            "background-disabled": "#00000099",
            "border-hover": "#707070",
            "border-active": "#4f4f4f",
            "border-disabled": "#2f2f2f99"
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
            "1": "#fafafa",
            "2": "#f4f4f4",
            "3": "#eaeaea",
            "4": "#dcdcdc",
            "5": "#c7c7c7"
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
            "brand": "#156e5e",
            "danger": "#9a1c0f",
            "negative": "#d23516",
            "warning": "#8f6300",
            "success": "#007a4d",
            "positive": "#61a92c",
            "info": "#007496",
            "discovery": "#6261af",
            "base-hover": "#2d2d2d",
            "base-active": "#3a3a3a",
            "base-disabled": "#26262699",
            "brand-hover": "#3a8b7a",
            "brand-active": "#297c6c",
            "brand-disabled": "#3e685e",
            "danger-hover": "#b93c2d",
            "danger-active": "#a92d1f",
            "danger-disabled": "#813c32",
            "negative-hover": "#aa0000",
            "negative-active": "#be1c00",
            "negative-disabled": "#b25a48",
            "warning-hover": "#6f4500",
            "warning-active": "#7f5400",
            "warning-disabled": "#82683f",
            "success-hover": "#005c31",
            "success-active": "#006b3f",
            "success-disabled": "#407358",
            "positive-hover": "#398000",
            "positive-active": "#4d9408",
            "positive-disabled": "#77a160",
            "info-hover": "#005676",
            "info-active": "#006586",
            "info-disabled": "#417184",
            "discovery-hover": "#46428d",
            "discovery-active": "#54529e",
            "discovery-disabled": "#656795"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"The primary border color for the light theme"}
      colors={{
            "base": "#333333",
            "brand": "#1f947f",
            "danger": "#cf222e",
            "negative": "#d6301b",
            "warning": "#d49400",
            "success": "#00a469",
            "positive": "#79b136",
            "info": "#00b8e6",
            "discovery": "#7f7ee4",
            "base-subtle": "#262626",
            "brand-subtle": "#156e5e",
            "danger-subtle": "#9a1c0f",
            "negative-subtle": "#d23516",
            "warning-subtle": "#8f6300",
            "success-subtle": "#007a4d",
            "positive-subtle": "#61a92c",
            "info-subtle": "#007496",
            "discovery-subtle": "#6261af",
            "base-hover": "#444444",
            "base-active": "#676767",
            "base-disabled": "#33333399",
            "brand-hover": "#004d3c",
            "brand-active": "#00705c",
            "brand-disabled": "#558d7f",
            "danger-hover": "#800000",
            "danger-active": "#a70006",
            "danger-disabled": "#af514d",
            "negative-hover": "#840000",
            "negative-active": "#ad0000",
            "negative-disabled": "#b5594a",
            "warning-hover": "#793e00",
            "warning-active": "#a66800",
            "warning-disabled": "#c19b60",
            "success-hover": "#005722",
            "success-active": "#007d45",
            "success-disabled": "#589b77",
            "positive-hover": "#295c00",
            "positive-active": "#508500",
            "positive-disabled": "#88aa69",
            "info-hover": "#005e88",
            "info-active": "#008ab6",
            "info-disabled": "#6ab2cd",
            "discovery-hover": "#3b318f",
            "discovery-active": "#5b57b9",
            "discovery-disabled": "#8386c2",
            "base-subtle-hover": "#333333",
            "base-subtle-active": "#505050",
            "base-subtle-disabled": "#26262699",
            "brand-subtle-hover": "#59a997",
            "brand-subtle-active": "#3a8b7a",
            "brand-subtle-disabled": "#3e685e",
            "danger-subtle-hover": "#d85947",
            "danger-subtle-active": "#b93c2d",
            "danger-subtle-disabled": "#813c32",
            "negative-subtle-hover": "#820000",
            "negative-subtle-active": "#aa0000",
            "negative-subtle-disabled": "#b25a48",
            "warning-subtle-hover": "#502700",
            "warning-subtle-active": "#6f4500",
            "warning-subtle-disabled": "#82683f",
            "success-subtle-hover": "#003f17",
            "success-subtle-active": "#005c31",
            "success-subtle-disabled": "#407358",
            "positive-subtle-hover": "#0c5800",
            "positive-subtle-active": "#398000",
            "positive-subtle-disabled": "#77a160",
            "info-subtle-hover": "#003958",
            "info-subtle-active": "#005676",
            "info-subtle-disabled": "#417184",
            "discovery-subtle-hover": "#2c246c",
            "discovery-subtle-active": "#46428d",
            "discovery-subtle-disabled": "#656795"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the light theme"}
      colors={{
            "base": "#f5f5f5",
            "brand": "#1f947f",
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
            "base-active": "#444444",
            "base-disabled": "#999999",
            "brand-hover": "#004d3c",
            "brand-active": "#00705c",
            "brand-disabled": "#b8b8b8",
            "danger-hover": "#800000",
            "danger-active": "#a70006",
            "danger-disabled": "#acacac",
            "negative-hover": "#840000",
            "negative-active": "#ad0000",
            "negative-disabled": "#262626",
            "warning-hover": "#793e00",
            "warning-active": "#a66800",
            "warning-disabled": "#1e1e1e",
            "success-hover": "#005722",
            "success-active": "#007d45",
            "success-disabled": "#191919",
            "positive-hover": "#295c00",
            "positive-active": "#508500",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#005e88",
            "info-active": "#008ab6",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#3b318f",
            "discovery-active": "#5b57b9",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#222222",
            "base-inverse-active": "#363636",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#7b7b7b",
            "brand-inverse-active": "#b6b6b6",
            "brand-inverse-disabled": "#b8b8b8",
            "danger-inverse-hover": "#7b7b7b",
            "danger-inverse-active": "#b6b6b6",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#7b7b7b",
            "negative-inverse-active": "#b6b6b6",
            "negative-inverse-disabled": "#262626",
            "warning-inverse-hover": "#2c2c2c",
            "warning-inverse-active": "#222222",
            "warning-inverse-disabled": "#1e1e1e",
            "success-inverse-hover": "#7b7b7b",
            "success-inverse-active": "#b6b6b6",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#7b7b7b",
            "positive-inverse-active": "#b6b6b6",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#7b7b7b",
            "info-inverse-active": "#b6b6b6",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#7b7b7b",
            "discovery-inverse-active": "#b6b6b6",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#4f8e7a",
            "danger-ghost-hover": "#cd5647",
            "negative-ghost-hover": "#d3584a",
            "warning-ghost-hover": "#cb8a58",
            "success-ghost-hover": "#569e65",
            "positive-ghost-hover": "#72a857",
            "info-ghost-hover": "#67b1e0",
            "discovery-ghost-hover": "#7877db"
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
            "page": "#fafafa",
            "elevated": "#f4f4f4",
            "floating": "#eaeaea",
            "high": "#dcdcdc",
            "highest": "#c7c7c7",
            "link": "#468ae2",
            "lowest-hover": "#bebebe",
            "lowest-active": "#dedede",
            "lowest-disabled": "#ffffff99",
            "page-hover": "#bababa",
            "page-active": "#d9d9d9",
            "page-disabled": "#fafafa99",
            "elevated-hover": "#b5b5b5",
            "elevated-active": "#d4d4d4",
            "elevated-disabled": "#f4f4f499",
            "floating-hover": "#aeaeae",
            "floating-active": "#cbcbcb",
            "floating-disabled": "#eaeaea99",
            "high-hover": "#a3a3a3",
            "high-active": "#bfbfbf",
            "high-disabled": "#dcdcdc99",
            "highest-hover": "#939393",
            "highest-active": "#adadad",
            "highest-disabled": "#c7c7c799",
            "link-hover": "#1d63b8",
            "link-active": "#3276cd",
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
            "1": "#aff2e6",
            "2": "#90eddc",
            "3": "#72e8d3",
            "4": "#54e3c9",
            "5": "#36dec0",
            "6": "#2abaa0",
            "7": "#1f947f",
            "8": "#156e5e",
            "9": "#0c463c"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the light theme"}
      colors={{
            "grey.emphasis": "#525252",
            "grey.subtle": "#f5f5f5",
            "brand.emphasis": "#aff2e6",
            "brand.subtle": "#90eddc",
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
            "body-hover": "#484848",
            "body-active": "#6d6d6d",
            "body-disabled": "#94949499",
            "eyebrow-hover": "#848484",
            "eyebrow-active": "#6b6b6b",
            "eyebrow-disabled": "#52525299",
            "caption-hover": "#363636",
            "caption-active": "#545454",
            "caption-disabled": "#73737399",
            "link-hover": "#003d8f",
            "link-active": "#1d63b8",
            "link-disabled": "#363636",
            "required-hover": "#890000",
            "required-active": "#b20000",
            "required-disabled": "#ba574e"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#eaeaea",
            "border": "#333333",
            "backdrop": "#1a1c1f66",
            "background-hover": "#aeaeae",
            "background-active": "#cbcbcb",
            "background-disabled": "#eaeaea99",
            "border-hover": "#555555",
            "border-active": "#444444",
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
            "1": "#d5d5d5",
            "2": "#d1d1d1",
            "3": "#cacaca",
            "4": "#c0c0c0",
            "5": "#b2b2b2"
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
            "brand": "#357468",
            "danger": "#8d3e35",
            "negative": "#ad5442",
            "warning": "#896b28",
            "success": "#247d5d",
            "positive": "#6b954c",
            "info": "#29768d",
            "discovery": "#70709b",
            "base-hover": "#464646",
            "base-active": "#4f4f4f",
            "base-disabled": "#41414199",
            "brand-hover": "#538379",
            "brand-active": "#457b70",
            "brand-disabled": "#536e67",
            "danger-hover": "#9f584f",
            "danger-active": "#954c43",
            "danger-disabled": "#7d534c",
            "negative-hover": "#982c2c",
            "negative-active": "#a2402f",
            "negative-disabled": "#9b6a60",
            "warning-hover": "#785723",
            "warning-active": "#806125",
            "warning-disabled": "#7e6e56",
            "success-hover": "#206d49",
            "success-active": "#227553",
            "success-disabled": "#557564",
            "positive-hover": "#4e8125",
            "positive-active": "#5c8b2f",
            "positive-disabled": "#7b926e",
            "info-hover": "#24647b",
            "info-active": "#266d84",
            "info-disabled": "#57747f",
            "discovery-hover": "#5b5985",
            "discovery-active": "#666590",
            "discovery-disabled": "#70728b"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"The primary border color for the light theme"}
      colors={{
            "base": "#4a4a4a",
            "brand": "#41897c",
            "danger": "#ab4a51",
            "negative": "#af5246",
            "warning": "#ae8933",
            "success": "#2b946e",
            "positive": "#7a9a54",
            "info": "#359eb8",
            "discovery": "#8181c4",
            "base-subtle": "#414141",
            "brand-subtle": "#357468",
            "danger-subtle": "#8d3e35",
            "negative-subtle": "#ad5442",
            "warning-subtle": "#896b28",
            "success-subtle": "#247d5d",
            "positive-subtle": "#6b954c",
            "info-subtle": "#29768d",
            "discovery-subtle": "#70709b",
            "base-hover": "#565656",
            "base-active": "#6e6e6e",
            "base-disabled": "#4a4a4a99",
            "brand-hover": "#1d6555",
            "brand-active": "#237869",
            "brand-disabled": "#65857d",
            "danger-hover": "#812525",
            "danger-active": "#962c2f",
            "danger-disabled": "#996663",
            "negative-hover": "#832626",
            "negative-active": "#992c2c",
            "negative-disabled": "#9d6a62",
            "warning-hover": "#7d5224",
            "warning-active": "#956e2b",
            "warning-disabled": "#a7916f",
            "success-hover": "#1f6a3c",
            "success-active": "#257f57",
            "success-disabled": "#698e7a",
            "positive-hover": "#426d20",
            "positive-active": "#5e8326",
            "positive-disabled": "#869974",
            "info-hover": "#276885",
            "info-active": "#2e839e",
            "info-disabled": "#76a1b1",
            "discovery-hover": "#534d86",
            "discovery-active": "#6c6aa1",
            "discovery-disabled": "#8587ab",
            "base-subtle-hover": "#4a4a4a",
            "base-subtle-active": "#5e5e5e",
            "base-subtle-disabled": "#41414199",
            "brand-subtle-hover": "#6a978d",
            "brand-subtle-active": "#538379",
            "brand-subtle-disabled": "#536e67",
            "danger-subtle-hover": "#b46b61",
            "danger-subtle-active": "#9f584f",
            "danger-subtle-disabled": "#7d534c",
            "negative-subtle-hover": "#822626",
            "negative-subtle-active": "#982c2c",
            "negative-subtle-disabled": "#9b6a60",
            "warning-subtle-hover": "#67411e",
            "warning-subtle-active": "#785723",
            "warning-subtle-disabled": "#7e6e56",
            "success-subtle-hover": "#1b5d33",
            "success-subtle-active": "#206d49",
            "success-subtle-disabled": "#557564",
            "positive-subtle-hover": "#296b1f",
            "positive-subtle-active": "#4e8125",
            "positive-subtle-disabled": "#7b926e",
            "info-subtle-hover": "#1f506b",
            "info-subtle-active": "#24647b",
            "info-subtle-disabled": "#57747f",
            "discovery-subtle-hover": "#464071",
            "discovery-subtle-active": "#5b5985",
            "discovery-subtle-disabled": "#70728b"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the light theme"}
      colors={{
            "base": "#d2d2d2",
            "brand": "#41897c",
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
            "base-active": "#565656",
            "base-disabled": "#919191",
            "brand-hover": "#1d6555",
            "brand-active": "#237869",
            "brand-disabled": "#a7a7a7",
            "danger-hover": "#812525",
            "danger-active": "#962c2f",
            "danger-disabled": "#9f9f9f",
            "negative-hover": "#832626",
            "negative-active": "#992c2c",
            "negative-disabled": "#414141",
            "warning-hover": "#7d5224",
            "warning-active": "#956e2b",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#1f6a3c",
            "success-active": "#257f57",
            "success-disabled": "#383838",
            "positive-hover": "#426d20",
            "positive-active": "#5e8326",
            "positive-disabled": "#525252",
            "info-hover": "#276885",
            "info-active": "#2e839e",
            "info-disabled": "#393939",
            "discovery-hover": "#534d86",
            "discovery-active": "#6c6aa1",
            "discovery-disabled": "#3b3b3b",
            "base-inverse-hover": "#3e3e3e",
            "base-inverse-active": "#4c4c4c",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#7c7c7c",
            "brand-inverse-active": "#a6a6a6",
            "brand-inverse-disabled": "#a7a7a7",
            "danger-inverse-hover": "#7c7c7c",
            "danger-inverse-active": "#a6a6a6",
            "danger-inverse-disabled": "#9f9f9f",
            "negative-inverse-hover": "#7c7c7c",
            "negative-inverse-active": "#a6a6a6",
            "negative-inverse-disabled": "#414141",
            "warning-inverse-hover": "#454545",
            "warning-inverse-active": "#3e3e3e",
            "warning-inverse-disabled": "#3b3b3b",
            "success-inverse-hover": "#7c7c7c",
            "success-inverse-active": "#a6a6a6",
            "success-inverse-disabled": "#383838",
            "positive-inverse-hover": "#7c7c7c",
            "positive-inverse-active": "#a6a6a6",
            "positive-inverse-disabled": "#525252",
            "info-inverse-hover": "#7c7c7c",
            "info-inverse-active": "#a6a6a6",
            "info-inverse-disabled": "#393939",
            "discovery-inverse-hover": "#7c7c7c",
            "discovery-inverse-active": "#a6a6a6",
            "discovery-inverse-disabled": "#3b3b3b",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#61867a",
            "danger-ghost-hover": "#ad6961",
            "negative-ghost-hover": "#b16b63",
            "warning-ghost-hover": "#ad886b",
            "success-ghost-hover": "#689070",
            "positive-ghost-hover": "#789669",
            "info-ghost-hover": "#73a1be",
            "discovery-ghost-hover": "#7e7dbc"
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
            "lowest": "#d9d9d9",
            "page": "#d5d5d5",
            "elevated": "#d1d1d1",
            "floating": "#cacaca",
            "high": "#c0c0c0",
            "highest": "#b2b2b2",
            "link": "#6088bb",
            "lowest-hover": "#ababab",
            "lowest-active": "#c2c2c2",
            "lowest-disabled": "#d9d9d999",
            "page-hover": "#a8a8a8",
            "page-active": "#bebebe",
            "page-disabled": "#d5d5d599",
            "elevated-hover": "#a5a5a5",
            "elevated-active": "#bbbbbb",
            "elevated-disabled": "#d1d1d199",
            "floating-hover": "#a0a0a0",
            "floating-active": "#b4b4b4",
            "floating-disabled": "#cacaca99",
            "high-hover": "#989898",
            "high-active": "#acacac",
            "high-disabled": "#c0c0c099",
            "highest-hover": "#8d8d8d",
            "highest-active": "#9f9f9f",
            "highest-disabled": "#b2b2b299",
            "link-hover": "#446c9e",
            "link-active": "#557aaa",
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
            "1": "#9cd4ca",
            "2": "#8bcdc1",
            "3": "#79c5b8",
            "4": "#68beae",
            "5": "#57b6a5",
            "6": "#4d9f90",
            "7": "#41897c",
            "8": "#357468",
            "9": "#295d54"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the light theme"}
      colors={{
            "grey.emphasis": "#606060",
            "grey.subtle": "#d2d2d2",
            "brand.emphasis": "#9cd4ca",
            "brand.subtle": "#8bcdc1",
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
            "body-hover": "#595959",
            "body-active": "#737373",
            "body-disabled": "#8e8e8e99",
            "eyebrow-hover": "#838383",
            "eyebrow-active": "#717171",
            "eyebrow-disabled": "#60606099",
            "caption-hover": "#4c4c4c",
            "caption-active": "#616161",
            "caption-disabled": "#77777799",
            "link-hover": "#285189",
            "link-active": "#446c9e",
            "link-disabled": "#4c4c4c",
            "required-hover": "#862727",
            "required-active": "#9c2d2d",
            "required-disabled": "#a16a65"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the light theme"}
      colors={{
            "background": "#cacaca",
            "border": "#4a4a4a",
            "backdrop": "#373a3d66",
            "background-hover": "#a0a0a0",
            "background-active": "#b4b4b4",
            "background-disabled": "#cacaca99",
            "border-hover": "#626262",
            "border-active": "#565656",
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
            "4": "#ffffff",
            "5": "#e7e7e7"
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
            "brand": "#014a3d",
            "danger": "#820c00",
            "negative": "#de2500",
            "warning": "#5d4000",
            "success": "#003e27",
            "positive": "#55b30f",
            "info": "#004f67",
            "discovery": "#5553c5",
            "base-hover": "#080808",
            "base-active": "#1b1b1b",
            "base-disabled": "#00000099",
            "brand-hover": "#228973",
            "brand-active": "#116c5a",
            "brand-disabled": "#26584c",
            "danger-hover": "#cd220e",
            "danger-active": "#ae1302",
            "danger-disabled": "#77251a",
            "negative-hover": "#840000",
            "negative-active": "#a11800",
            "negative-disabled": "#c9492f",
            "warning-hover": "#2e1d00",
            "warning-active": "#452e00",
            "warning-disabled": "#7d5c28",
            "success-hover": "#00130a",
            "success-active": "#002818",
            "success-disabled": "#296847",
            "positive-hover": "#204700",
            "positive-active": "#376f00",
            "positive-disabled": "#72b34f",
            "info-hover": "#002938",
            "info-active": "#003c50",
            "info-disabled": "#2a6881",
            "discovery-hover": "#302b8f",
            "discovery-active": "#403dac",
            "discovery-disabled": "#5659a2"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"The primary border color for the light theme"}
      colors={{
            "base": "#111111",
            "brand": "#058c74",
            "danger": "#eb0010",
            "negative": "#eb1a00",
            "warning": "#c18600",
            "success": "#007b4f",
            "positive": "#76c319",
            "info": "#00afdb",
            "discovery": "#9493fb",
            "base-subtle": "#000000",
            "brand-subtle": "#014a3d",
            "danger-subtle": "#820c00",
            "negative-subtle": "#de2500",
            "warning-subtle": "#5d4000",
            "success-subtle": "#003e27",
            "positive-subtle": "#55b30f",
            "info-subtle": "#004f67",
            "discovery-subtle": "#5553c5",
            "base-hover": "#292929",
            "base-active": "#5c5c5c",
            "base-disabled": "#11111199",
            "brand-hover": "#000000",
            "brand-active": "#003027",
            "brand-disabled": "#42937f",
            "danger-hover": "#470000",
            "danger-active": "#7f0005",
            "danger-disabled": "#c53b35",
            "negative-hover": "#4d0000",
            "negative-active": "#880000",
            "negative-disabled": "#ce4731",
            "warning-hover": "#3d1f00",
            "warning-active": "#7e4f00",
            "warning-disabled": "#daa656",
            "success-hover": "#000b04",
            "success-active": "#004325",
            "success-disabled": "#45a973",
            "positive-hover": "#081300",
            "positive-active": "#2f4e00",
            "positive-disabled": "#8cbe5e",
            "info-hover": "#003952",
            "info-active": "#007195",
            "info-disabled": "#69c5e7",
            "discovery-hover": "#24188c",
            "discovery-active": "#4c46d2",
            "discovery-disabled": "#8b8fd9",
            "base-subtle-hover": "#111111",
            "base-subtle-active": "#3b3b3b",
            "base-subtle-disabled": "#00000099",
            "brand-subtle-hover": "#46bea3",
            "brand-subtle-active": "#228973",
            "brand-subtle-disabled": "#26584c",
            "danger-subtle-hover": "#f74e36",
            "danger-subtle-active": "#cd220e",
            "danger-subtle-disabled": "#77251a",
            "negative-subtle-hover": "#4a0000",
            "negative-subtle-active": "#840000",
            "negative-subtle-disabled": "#c9492f",
            "warning-subtle-hover": "#010100",
            "warning-subtle-active": "#2e1d00",
            "warning-subtle-disabled": "#7d5c28",
            "success-subtle-hover": "#000000",
            "success-subtle-active": "#00130a",
            "success-subtle-disabled": "#296847",
            "positive-subtle-hover": "#020d00",
            "positive-subtle-active": "#204700",
            "positive-subtle-disabled": "#72b34f",
            "info-subtle-hover": "#00080d",
            "info-subtle-active": "#002938",
            "info-subtle-disabled": "#2a6881",
            "discovery-subtle-hover": "#150d51",
            "discovery-subtle-active": "#302b8f",
            "discovery-subtle-disabled": "#5659a2"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the light theme"}
      colors={{
            "base": "#ffffff",
            "brand": "#058c74",
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
            "base-active": "#292929",
            "base-disabled": "#a4a4a4",
            "brand-hover": "#000000",
            "brand-active": "#003027",
            "brand-disabled": "#d1d1d1",
            "danger-hover": "#470000",
            "danger-active": "#7f0005",
            "danger-disabled": "#c0c0c0",
            "negative-hover": "#4d0000",
            "negative-active": "#880000",
            "negative-disabled": "#000000",
            "warning-hover": "#3d1f00",
            "warning-active": "#7e4f00",
            "warning-disabled": "#000000",
            "success-hover": "#000b04",
            "success-active": "#004325",
            "success-disabled": "#000000",
            "positive-hover": "#081300",
            "positive-active": "#2f4e00",
            "positive-disabled": "#212121",
            "info-hover": "#003952",
            "info-active": "#007195",
            "info-disabled": "#000000",
            "discovery-hover": "#24188c",
            "discovery-active": "#4c46d2",
            "discovery-disabled": "#000000",
            "base-inverse-hover": "#000000",
            "base-inverse-active": "#151515",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#797979",
            "brand-inverse-active": "#cfcfcf",
            "brand-inverse-disabled": "#d1d1d1",
            "danger-inverse-hover": "#797979",
            "danger-inverse-active": "#cfcfcf",
            "danger-inverse-disabled": "#c0c0c0",
            "negative-inverse-hover": "#797979",
            "negative-inverse-active": "#cfcfcf",
            "negative-inverse-disabled": "#000000",
            "warning-inverse-hover": "#060606",
            "warning-inverse-active": "#000000",
            "warning-inverse-disabled": "#000000",
            "success-inverse-hover": "#797979",
            "success-inverse-active": "#cfcfcf",
            "success-inverse-disabled": "#000000",
            "positive-inverse-hover": "#797979",
            "positive-inverse-active": "#cfcfcf",
            "positive-inverse-disabled": "#212121",
            "info-inverse-hover": "#797979",
            "info-inverse-active": "#cfcfcf",
            "info-inverse-disabled": "#000000",
            "discovery-inverse-hover": "#797979",
            "discovery-inverse-active": "#cfcfcf",
            "discovery-inverse-disabled": "#000000",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#3a9477",
            "danger-ghost-hover": "#eb4732",
            "negative-ghost-hover": "#f14c39",
            "warning-ghost-hover": "#e7904d",
            "success-ghost-hover": "#42ad58",
            "positive-ghost-hover": "#6bbd42",
            "info-ghost-hover": "#6dc4fb",
            "discovery-ghost-hover": "#8583f4"
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
            "high": "#ffffff",
            "highest": "#e7e7e7",
            "link": "#3b91ff",
            "lowest-hover": "#dadada",
            "lowest-active": "#ffffff",
            "lowest-disabled": "#ffffff99",
            "page-hover": "#d4d4d4",
            "page-active": "#ffffff",
            "page-disabled": "#ffffff99",
            "elevated-hover": "#cdcdcd",
            "elevated-active": "#fafafa",
            "elevated-disabled": "#ffffff99",
            "floating-hover": "#c3c3c3",
            "floating-active": "#ededed",
            "floating-disabled": "#ffffff99",
            "high-hover": "#b3b3b3",
            "high-active": "#dcdcdc",
            "high-disabled": "#ffffff99",
            "highest-hover": "#9c9c9c",
            "highest-active": "#c1c1c1",
            "highest-disabled": "#e7e7e799",
            "link-hover": "#0058c2",
            "link-active": "#1072ef",
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
            "1": "#ebfffb",
            "2": "#b7fff2",
            "3": "#84ffe9",
            "4": "#51ffdf",
            "5": "#1effd7",
            "6": "#0bcdaa",
            "7": "#058c74",
            "8": "#014a3d",
            "9": "#000403"
      }}
    />
          <ColorItem
      title={"color.data"}
      subtitle={"The grey data visualization emphasis color for the light theme"}
      colors={{
            "grey.emphasis": "#3e3e3e",
            "grey.subtle": "#ffffff",
            "brand.emphasis": "#ebfffb",
            "brand.subtle": "#b7fff2",
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
            "body-hover": "#2f2f2f",
            "body-active": "#656565",
            "body-disabled": "#9d9d9d99",
            "eyebrow-hover": "#868686",
            "eyebrow-active": "#626262",
            "eyebrow-disabled": "#3e3e3e99",
            "caption-hover": "#151515",
            "caption-active": "#404040",
            "caption-disabled": "#6d6d6d99",
            "link-hover": "#00285d",
            "link-active": "#0058c2",
            "link-disabled": "#151515",
            "required-hover": "#540000",
            "required-active": "#8f0000",
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
            "background-hover": "#c3c3c3",
            "background-active": "#ededed",
            "background-disabled": "#ffffff99",
            "border-hover": "#424242",
            "border-active": "#292929",
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
