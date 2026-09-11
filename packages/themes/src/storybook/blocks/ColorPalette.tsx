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
            "1": "#151517",
            "2": "#1b1b1c",
            "3": "#262626",
            "4": "#303030",
            "5": "#3a3a3a",
            "6": "#616161"
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
            "brand": "#0c463c",
            "danger": "#3c050a",
            "negative": "#790000",
            "warning": "#4d370b",
            "success": "#0f4b3c",
            "positive": "#243e04",
            "info": "#00273e",
            "discovery": "#2f2850",
            "base-hover": "#434343",
            "base-active": "#4c4c4c",
            "base-disabled": "#3a3a3a99",
            "brand-hover": "#245a4f",
            "brand-active": "#245a4f",
            "brand-disabled": "#26423c",
            "danger-hover": "#4a1215",
            "danger-active": "#4a1215",
            "danger-disabled": "#311312",
            "negative-hover": "#912219",
            "negative-active": "#912219",
            "negative-disabled": "#642821",
            "warning-hover": "#614a21",
            "warning-active": "#614a21",
            "warning-disabled": "#463923",
            "success-hover": "#286050",
            "success-active": "#286050",
            "success-disabled": "#2a473e",
            "positive-hover": "#355019",
            "positive-active": "#355019",
            "positive-disabled": "#2b3b1e",
            "info-hover": "#0e344c",
            "info-active": "#0e344c",
            "info-disabled": "#132634",
            "discovery-hover": "#3e3861",
            "discovery-active": "#3e3861",
            "discovery-disabled": "#2f2c43"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#3a3a3a",
            "brand": "#2abaa0",
            "danger": "#cf2d56",
            "negative": "#ff0404",
            "warning": "#d29527",
            "success": "#268e62",
            "positive": "#76c319",
            "info": "#00bee7",
            "discovery": "#6c6bc1",
            "base-subtle": "#484848",
            "brand-subtle": "#156e5e",
            "danger-subtle": "#5a0f17",
            "negative-subtle": "#790000",
            "warning-subtle": "#a6761c",
            "success-subtle": "#16624a",
            "positive-subtle": "#c8e7a3",
            "info-subtle": "#073b55",
            "discovery-subtle": "#453e76",
            "base-hover": "#4c4c4c",
            "base-active": "#606060",
            "base-disabled": "#3a3a3a99",
            "brand-hover": "#008d75",
            "brand-active": "#00634d",
            "brand-disabled": "#6db1a1",
            "danger-hover": "#a70037",
            "danger-active": "#7f001a",
            "danger-disabled": "#b05663",
            "negative-hover": "#d00000",
            "negative-active": "#a10000",
            "negative-disabled": "#d65e4f",
            "warning-hover": "#a46900",
            "warning-active": "#784000",
            "warning-disabled": "#c09c66",
            "success-hover": "#006b42",
            "success-active": "#004a24",
            "success-disabled": "#53866c",
            "positive-hover": "#499400",
            "positive-active": "#1b6600",
            "positive-disabled": "#8dba69",
            "info-hover": "#008fb6",
            "info-active": "#006288",
            "info-disabled": "#6db8d0",
            "discovery-hover": "#4d499c",
            "discovery-active": "#312978",
            "discovery-disabled": "#6f71a4",
            "base-subtle-hover": "#5e5e5e",
            "base-subtle-active": "#757575",
            "base-subtle-disabled": "#48484899",
            "brand-subtle-hover": "#3a8b7a",
            "brand-subtle-active": "#59a997",
            "brand-subtle-disabled": "#3e685e",
            "danger-subtle-hover": "#6d2226",
            "danger-subtle-active": "#813436",
            "danger-subtle-disabled": "#4b2122",
            "negative-subtle-hover": "#912219",
            "negative-subtle-active": "#a93a2e",
            "negative-subtle-disabled": "#642821",
            "warning-subtle-hover": "#815300",
            "warning-subtle-active": "#5d3100",
            "warning-subtle-disabled": "#977b50",
            "success-subtle-hover": "#357c63",
            "success-subtle-active": "#51977c",
            "success-subtle-disabled": "#385d4e",
            "positive-subtle-hover": "#90ad6c",
            "positive-subtle-active": "#5c7738",
            "positive-subtle-disabled": "#cfe2ba",
            "info-subtle-hover": "#1e4d68",
            "info-subtle-active": "#31607c",
            "info-subtle-disabled": "#213a49",
            "discovery-subtle-hover": "#5a548e",
            "discovery-subtle-active": "#716ba7",
            "discovery-subtle-disabled": "#454364"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#fafafa",
            "brand": "#2abaa0",
            "danger": "#cf2d56",
            "negative": "#ff0404",
            "warning": "#d29527",
            "success": "#268e62",
            "positive": "#76c319",
            "info": "#00bee7",
            "discovery": "#6c6bc1",
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
            "base-active": "#7d7d7d",
            "base-disabled": "#999999",
            "brand-hover": "#008d75",
            "brand-active": "#00634d",
            "brand-disabled": "#6db1a1",
            "danger-hover": "#a70037",
            "danger-active": "#7f001a",
            "danger-disabled": "#aeaeae",
            "negative-hover": "#d00000",
            "negative-active": "#a10000",
            "negative-disabled": "#999999",
            "warning-hover": "#a46900",
            "warning-active": "#784000",
            "warning-disabled": "#c09c66",
            "success-hover": "#006b42",
            "success-active": "#004a24",
            "success-disabled": "#999999",
            "positive-hover": "#499400",
            "positive-active": "#1b6600",
            "positive-disabled": "#8dba69",
            "info-hover": "#008fb6",
            "info-active": "#006288",
            "info-disabled": "#6db8d0",
            "discovery-hover": "#4d499c",
            "discovery-active": "#312978",
            "discovery-disabled": "#999999",
            "base-inverse-hover": "#131314",
            "base-inverse-active": "#1a1a1b",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#bababa",
            "brand-inverse-active": "#7d7d7d",
            "brand-inverse-disabled": "#fafafa99",
            "danger-inverse-hover": "#bababa",
            "danger-inverse-active": "#7d7d7d",
            "danger-inverse-disabled": "#aeaeae",
            "negative-inverse-hover": "#bababa",
            "negative-inverse-active": "#7d7d7d",
            "negative-inverse-disabled": "#fafafa99",
            "warning-inverse-hover": "#bababa",
            "warning-inverse-active": "#7d7d7d",
            "warning-inverse-disabled": "#fafafa99",
            "success-inverse-hover": "#bababa",
            "success-inverse-active": "#7d7d7d",
            "success-inverse-disabled": "#fafafa99",
            "positive-inverse-hover": "#bababa",
            "positive-inverse-active": "#7d7d7d",
            "positive-inverse-disabled": "#fafafa99",
            "info-inverse-hover": "#bababa",
            "info-inverse-active": "#7d7d7d",
            "info-inverse-disabled": "#fafafa99",
            "discovery-inverse-hover": "#bababa",
            "discovery-inverse-active": "#7d7d7d",
            "discovery-inverse-disabled": "#fafafa99",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#90fce0",
            "danger-ghost-hover": "#ff7186",
            "negative-ghost-hover": "#ff8e77",
            "warning-ghost-hover": "#ffd484",
            "success-ghost-hover": "#6cc193",
            "positive-ghost-hover": "#b8ff8d",
            "info-ghost-hover": "#99ffff",
            "discovery-ghost-hover": "#9a9bf6",
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
            "page": "#151517",
            "elevated": "#1b1b1c",
            "floating": "#262626",
            "high": "#303030",
            "higher": "#3a3a3a",
            "highest": "#616161",
            "lowest-hover": "#131314",
            "lowest-active": "#131314",
            "lowest-disabled": "#0c0c0d",
            "page-hover": "#1e1e20",
            "page-active": "#1e1e20",
            "page-disabled": "#151516",
            "elevated-hover": "#262627",
            "elevated-active": "#262627",
            "elevated-disabled": "#1b1b1c",
            "floating-hover": "#333333",
            "floating-active": "#333333",
            "floating-disabled": "#26262699",
            "high-hover": "#404040",
            "high-active": "#404040",
            "high-disabled": "#30303099",
            "higher-hover": "#4c4c4c",
            "higher-active": "#4c4c4c",
            "higher-disabled": "#3a3a3a99",
            "highest-hover": "#7d7d7d",
            "highest-active": "#7d7d7d",
            "highest-disabled": "#61616199"
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
            "grey.emphasis": "#fafafa",
            "grey.subtle": "#1a1c1f",
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
            "body": "#bebebe",
            "eyebrow": "#616161",
            "caption": "#9f9f9f",
            "link": "#5291ff",
            "required": "#ff0404",
            "body-hover": "#8c8c8c",
            "body-active": "#5e5e5e",
            "body-disabled": "#bebebe99",
            "eyebrow-hover": "#7d7d7d",
            "eyebrow-active": "#9b9b9b",
            "eyebrow-disabled": "#61616199",
            "caption-hover": "#757575",
            "caption-active": "#4d4d4d",
            "caption-disabled": "#9f9f9f99",
            "link-hover": "#2a67d1",
            "link-active": "#003da4",
            "link-disabled": "#6f95d6",
            "required-hover": "#d00000",
            "required-active": "#a10000",
            "required-disabled": "#d65e4f"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#262626",
            "border": "#3a3a3a",
            "backdrop": "#0d0c0766",
            "background-hover": "#333333",
            "background-active": "#333333",
            "background-disabled": "#26262699",
            "border-hover": "#4c4c4c",
            "border-active": "#606060",
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
            "1": "#343437",
            "2": "#39393a",
            "3": "#414141",
            "4": "#484848",
            "5": "#4f4f4f",
            "6": "#6a6a6a"
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
            "brand": "#295d54",
            "danger": "#592126",
            "negative": "#7d2424",
            "warning": "#624f29",
            "success": "#2c5f53",
            "positive": "#405b20",
            "info": "#1b445d",
            "discovery": "#47425f",
            "base-hover": "#555555",
            "base-active": "#5b5b5b",
            "base-disabled": "#4f4f4f99",
            "brand-hover": "#3f665e",
            "brand-active": "#3f665e",
            "brand-disabled": "#405651",
            "danger-hover": "#5e2f31",
            "danger-active": "#5e2f31",
            "danger-disabled": "#4d2f2e",
            "negative-hover": "#88413c",
            "negative-active": "#88413c",
            "negative-disabled": "#6c423d",
            "warning-hover": "#6a5a3d",
            "warning-active": "#6a5a3d",
            "warning-disabled": "#594f3d",
            "success-hover": "#42695e",
            "success-active": "#42695e",
            "success-disabled": "#435952",
            "positive-hover": "#4b6135",
            "positive-active": "#4b6135",
            "positive-disabled": "#445239",
            "info-hover": "#2b4c60",
            "info-active": "#2b4c60",
            "info-disabled": "#2f424f",
            "discovery-hover": "#524e69",
            "discovery-active": "#524e69",
            "discovery-disabled": "#474456"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#4f4f4f",
            "brand": "#4d9f90",
            "danger": "#ab5268",
            "negative": "#c63c3c",
            "warning": "#ad8b4e",
            "success": "#45856a",
            "positive": "#78a442",
            "info": "#36a1b9",
            "discovery": "#7776a8",
            "base-subtle": "#595959",
            "brand-subtle": "#357468",
            "danger-subtle": "#682e34",
            "negative-subtle": "#7d2424",
            "warning-subtle": "#947741",
            "success-subtle": "#346c5b",
            "positive-subtle": "#b2ca97",
            "info-subtle": "#265167",
            "discovery-subtle": "#585477",
            "base-hover": "#5b5b5b",
            "base-active": "#696969",
            "base-disabled": "#4f4f4f99",
            "brand-hover": "#278877",
            "brand-active": "#21715f",
            "brand-disabled": "#779e95",
            "danger-hover": "#962c4f",
            "danger-active": "#802538",
            "danger-disabled": "#9b6970",
            "negative-hover": "#ac3232",
            "negative-active": "#932b2b",
            "negative-disabled": "#b46e66",
            "warning-hover": "#946e2b",
            "warning-active": "#7c5324",
            "warning-disabled": "#a79273",
            "success-hover": "#227555",
            "success-active": "#1d633f",
            "success-disabled": "#638172",
            "positive-hover": "#598c29",
            "positive-active": "#377321",
            "positive-disabled": "#8aa375",
            "info-hover": "#2e869e",
            "info-active": "#276b85",
            "info-disabled": "#77a5b3",
            "discovery-hover": "#615f8e",
            "discovery-active": "#4a4578",
            "discovery-disabled": "#787995",
            "base-subtle-hover": "#686868",
            "base-subtle-active": "#787878",
            "base-subtle-disabled": "#59595999",
            "brand-subtle-hover": "#538379",
            "brand-subtle-active": "#6a978d",
            "brand-subtle-disabled": "#536e67",
            "danger-subtle-hover": "#723f42",
            "danger-subtle-active": "#7d4e4f",
            "danger-subtle-disabled": "#5c3c3d",
            "negative-subtle-hover": "#88413c",
            "negative-subtle-active": "#95554e",
            "negative-subtle-disabled": "#6c423d",
            "warning-subtle-hover": "#816126",
            "warning-subtle-active": "#6e4920",
            "warning-subtle-disabled": "#8b7b63",
            "success-subtle-hover": "#4e7a6b",
            "success-subtle-active": "#648b7c",
            "success-subtle-disabled": "#4e675d",
            "positive-subtle-hover": "#8b9b76",
            "positive-subtle-active": "#667750",
            "positive-subtle-disabled": "#b7c7a6",
            "info-subtle-hover": "#3b5c6f",
            "info-subtle-active": "#4b697a",
            "info-subtle-disabled": "#3c4f5b",
            "discovery-subtle-hover": "#686586",
            "discovery-subtle-active": "#797597",
            "discovery-subtle-disabled": "#57566b"
      }}
    />
          <ColorItem
      title={"color.foreground"}
      subtitle={"The primary foreground color for the dark theme"}
      colors={{
            "base": "#d5d5d5",
            "brand": "#4d9f90",
            "danger": "#ab5268",
            "negative": "#c63c3c",
            "warning": "#ad8b4e",
            "success": "#45856a",
            "positive": "#78a442",
            "info": "#36a1b9",
            "discovery": "#7776a8",
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
            "base-active": "#7e7e7e",
            "base-disabled": "#919191",
            "brand-hover": "#278877",
            "brand-active": "#21715f",
            "brand-disabled": "#779e95",
            "danger-hover": "#962c4f",
            "danger-active": "#802538",
            "danger-disabled": "#a0a0a0",
            "negative-hover": "#ac3232",
            "negative-active": "#932b2b",
            "negative-disabled": "#919191",
            "warning-hover": "#946e2b",
            "warning-active": "#7c5324",
            "warning-disabled": "#a79273",
            "success-hover": "#227555",
            "success-active": "#1d633f",
            "success-disabled": "#919191",
            "positive-hover": "#598c29",
            "positive-active": "#377321",
            "positive-disabled": "#8aa375",
            "info-hover": "#2e869e",
            "info-active": "#276b85",
            "info-disabled": "#77a5b3",
            "discovery-hover": "#615f8e",
            "discovery-active": "#4a4578",
            "discovery-disabled": "#919191",
            "base-inverse-hover": "#333335",
            "base-inverse-active": "#383839",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#a8a8a8",
            "brand-inverse-active": "#7e7e7e",
            "brand-inverse-disabled": "#d5d5d599",
            "danger-inverse-hover": "#a8a8a8",
            "danger-inverse-active": "#7e7e7e",
            "danger-inverse-disabled": "#a0a0a0",
            "negative-inverse-hover": "#a8a8a8",
            "negative-inverse-active": "#7e7e7e",
            "negative-inverse-disabled": "#d5d5d599",
            "warning-inverse-hover": "#a8a8a8",
            "warning-inverse-active": "#7e7e7e",
            "warning-inverse-disabled": "#d5d5d599",
            "success-inverse-hover": "#a8a8a8",
            "success-inverse-active": "#7e7e7e",
            "success-inverse-disabled": "#d5d5d599",
            "positive-inverse-hover": "#a8a8a8",
            "positive-inverse-active": "#7e7e7e",
            "positive-inverse-disabled": "#d5d5d599",
            "info-inverse-hover": "#a8a8a8",
            "info-inverse-active": "#7e7e7e",
            "info-inverse-disabled": "#d5d5d599",
            "discovery-inverse-hover": "#a8a8a8",
            "discovery-inverse-active": "#7e7e7e",
            "discovery-inverse-disabled": "#d5d5d599",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#88dac4",
            "danger-ghost-hover": "#d77785",
            "negative-ghost-hover": "#d88a7a",
            "warning-ghost-hover": "#dabb81",
            "success-ghost-hover": "#77a98e",
            "positive-ghost-hover": "#a6dc86",
            "info-ghost-hover": "#8cdede",
            "discovery-ghost-hover": "#8f90d6",
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
            "page": "#343437",
            "elevated": "#39393a",
            "floating": "#414141",
            "high": "#484848",
            "higher": "#4f4f4f",
            "highest": "#6a6a6a",
            "lowest-hover": "#333335",
            "lowest-active": "#333335",
            "lowest-disabled": "#2e2e30",
            "page-hover": "#3b3b3d",
            "page-active": "#3b3b3d",
            "page-disabled": "#353536",
            "elevated-hover": "#414142",
            "elevated-active": "#414142",
            "elevated-disabled": "#39393a",
            "floating-hover": "#4a4a4a",
            "floating-active": "#4a4a4a",
            "floating-disabled": "#41414199",
            "high-hover": "#535353",
            "high-active": "#535353",
            "high-disabled": "#48484899",
            "higher-hover": "#5b5b5b",
            "higher-active": "#5b5b5b",
            "higher-disabled": "#4f4f4f99",
            "highest-hover": "#7e7e7e",
            "highest-active": "#7e7e7e",
            "highest-disabled": "#6a6a6a99"
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
            "grey.emphasis": "#d5d5d5",
            "grey.subtle": "#373a3d",
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
            "body": "#ababab",
            "eyebrow": "#6a6a6a",
            "caption": "#969696",
            "link": "#668dd3",
            "required": "#c63c3c",
            "body-hover": "#888888",
            "body-active": "#686868",
            "body-disabled": "#ababab99",
            "eyebrow-hover": "#7e7e7e",
            "eyebrow-active": "#939393",
            "eyebrow-disabled": "#6a6a6a99",
            "caption-hover": "#787878",
            "caption-active": "#5c5c5c",
            "caption-disabled": "#96969699",
            "link-hover": "#5072ac",
            "link-active": "#2b5294",
            "link-disabled": "#7890b8",
            "required-hover": "#ac3232",
            "required-active": "#932b2b",
            "required-disabled": "#b46e66"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#414141",
            "border": "#4f4f4f",
            "backdrop": "#35322666",
            "background-hover": "#4a4a4a",
            "background-active": "#4a4a4a",
            "background-disabled": "#41414199",
            "border-hover": "#5b5b5b",
            "border-active": "#696969",
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
            "5": "#1b1b1b",
            "6": "#535353"
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
            "brand": "#000403",
            "danger": "#000000",
            "negative": "#3d0000",
            "warning": "#0d0900",
            "success": "#000f0c",
            "positive": "#000000",
            "info": "#000000",
            "discovery": "#140f2c",
            "base-hover": "#282828",
            "base-active": "#353535",
            "base-disabled": "#1b1b1b99",
            "brand-hover": "#0d372f",
            "brand-active": "#0d372f",
            "brand-disabled": "#0b1916",
            "danger-hover": "#110102",
            "danger-active": "#110102",
            "danger-disabled": "#000000",
            "negative-hover": "#840a00",
            "negative-active": "#840a00",
            "negative-disabled": "#44100b",
            "warning-hover": "#3f2c0b",
            "warning-active": "#3f2c0b",
            "warning-disabled": "#1c1509",
            "success-hover": "#104234",
            "success-active": "#104234",
            "success-disabled": "#0f221c",
            "positive-hover": "#132105",
            "positive-active": "#132105",
            "positive-disabled": "#070b04",
            "info-hover": "#000a10",
            "info-active": "#000a10",
            "info-disabled": "#000000",
            "discovery-hover": "#26204c",
            "discovery-active": "#26204c",
            "discovery-disabled": "#110f1f"
      }}
    />
          <ColorItem
      title={"color.border"}
      subtitle={"Hairline-strong border against ink cards"}
      colors={{
            "base": "#1b1b1b",
            "brand": "#0bcdaa",
            "danger": "#f00a45",
            "negative": "#ff0606",
            "warning": "#f39e03",
            "success": "#0c8652",
            "positive": "#70cc00",
            "info": "#00b5dc",
            "discovery": "#6867d9",
            "base-subtle": "#2f2f2f",
            "brand-subtle": "#014a3d",
            "danger-subtle": "#260004",
            "negative-subtle": "#3d0000",
            "warning-subtle": "#a76d00",
            "success-subtle": "#033828",
            "positive-subtle": "#e6fbce",
            "info-subtle": "#000c13",
            "discovery-subtle": "#2f276b",
            "base-hover": "#353535",
            "base-active": "#525252",
            "base-disabled": "#1b1b1b99",
            "brand-hover": "#005a4a",
            "brand-active": "#001d16",
            "brand-disabled": "#66c6b0",
            "danger-hover": "#7f002a",
            "danger-active": "#45000e",
            "danger-disabled": "#c74256",
            "negative-hover": "#bb0000",
            "negative-active": "#770000",
            "negative-disabled": "#f45642",
            "warning-hover": "#7b4f00",
            "warning-active": "#3b2000",
            "warning-disabled": "#d9a85f",
            "success-hover": "#002819",
            "success-active": "#000000",
            "success-disabled": "#3f8963",
            "positive-hover": "#316400",
            "positive-active": "#092100",
            "positive-disabled": "#93d162",
            "info-hover": "#007595",
            "info-active": "#003b52",
            "info-disabled": "#6fccea",
            "discovery-hover": "#3832a7",
            "discovery-active": "#1a1166",
            "discovery-disabled": "#6669b6",
            "base-subtle-hover": "#4f4f4f",
            "base-subtle-active": "#707070",
            "base-subtle-disabled": "#2f2f2f99",
            "brand-subtle-hover": "#228973",
            "brand-subtle-active": "#46bea3",
            "brand-subtle-disabled": "#26584c",
            "danger-subtle-hover": "#510b0f",
            "danger-subtle-active": "#781c1e",
            "danger-subtle-disabled": "#210909",
            "negative-subtle-hover": "#840a00",
            "negative-subtle-active": "#b32112",
            "negative-subtle-disabled": "#44100b",
            "warning-subtle-hover": "#482f00",
            "warning-subtle-active": "#140b00",
            "warning-subtle-disabled": "#a1793b",
            "success-subtle-hover": "#1d7153",
            "success-subtle-active": "#3ca27a",
            "success-subtle-disabled": "#1f4636",
            "positive-subtle-hover": "#97c163",
            "positive-subtle-active": "#4b6b20",
            "positive-subtle-disabled": "#f2fae9",
            "info-subtle-hover": "#083047",
            "info-subtle-active": "#194f6f",
            "info-subtle-disabled": "#09161e",
            "discovery-subtle-hover": "#494095",
            "discovery-subtle-active": "#6961ba",
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
            "base-hover": "#d4d4d4",
            "base-active": "#7c7c7c",
            "base-disabled": "#a4a4a4",
            "brand-hover": "#005a4a",
            "brand-active": "#001d16",
            "brand-disabled": "#66c6b0",
            "danger-hover": "#7f002a",
            "danger-active": "#45000e",
            "danger-disabled": "#c3c3c3",
            "negative-hover": "#bb0000",
            "negative-active": "#770000",
            "negative-disabled": "#a4a4a4",
            "warning-hover": "#7b4f00",
            "warning-active": "#3b2000",
            "warning-disabled": "#d9a85f",
            "success-hover": "#002819",
            "success-active": "#000000",
            "success-disabled": "#a4a4a4",
            "positive-hover": "#316400",
            "positive-active": "#092100",
            "positive-disabled": "#93d162",
            "info-hover": "#007595",
            "info-active": "#003b52",
            "info-disabled": "#6fccea",
            "discovery-hover": "#3832a7",
            "discovery-active": "#1a1166",
            "discovery-disabled": "#a4a4a4",
            "base-inverse-hover": "#000000",
            "base-inverse-active": "#000000",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#d4d4d4",
            "brand-inverse-active": "#7c7c7c",
            "brand-inverse-disabled": "#ffffff99",
            "danger-inverse-hover": "#d4d4d4",
            "danger-inverse-active": "#7c7c7c",
            "danger-inverse-disabled": "#c3c3c3",
            "negative-inverse-hover": "#d4d4d4",
            "negative-inverse-active": "#7c7c7c",
            "negative-inverse-disabled": "#ffffff99",
            "warning-inverse-hover": "#d4d4d4",
            "warning-inverse-active": "#7c7c7c",
            "warning-inverse-disabled": "#ffffff99",
            "success-inverse-hover": "#d4d4d4",
            "success-inverse-active": "#7c7c7c",
            "success-inverse-disabled": "#ffffff99",
            "positive-inverse-hover": "#d4d4d4",
            "positive-inverse-active": "#7c7c7c",
            "positive-inverse-disabled": "#ffffff99",
            "info-inverse-hover": "#d4d4d4",
            "info-inverse-active": "#7c7c7c",
            "info-inverse-disabled": "#ffffff99",
            "discovery-inverse-hover": "#d4d4d4",
            "discovery-inverse-active": "#7c7c7c",
            "discovery-inverse-disabled": "#ffffff99",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#ccfff2",
            "danger-ghost-hover": "#ffa4b1",
            "negative-ghost-hover": "#ffbaad",
            "warning-ghost-hover": "#ffe9bf",
            "success-ghost-hover": "#68d99c",
            "positive-ghost-hover": "#e0ffcc",
            "info-ghost-hover": "#deffff",
            "discovery-ghost-hover": "#d2d3ff",
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
            "higher": "#1b1b1b",
            "highest": "#535353",
            "lowest-hover": "#000000",
            "lowest-active": "#000000",
            "lowest-disabled": "#000000",
            "page-hover": "#000000",
            "page-active": "#000000",
            "page-disabled": "#000000",
            "elevated-hover": "#000000",
            "elevated-active": "#000000",
            "elevated-disabled": "#000000",
            "floating-hover": "#111111",
            "floating-active": "#111111",
            "floating-disabled": "#00000099",
            "high-hover": "#232323",
            "high-active": "#232323",
            "high-disabled": "#0c0c0c99",
            "higher-hover": "#353535",
            "higher-active": "#353535",
            "higher-disabled": "#1b1b1b99",
            "highest-hover": "#7c7c7c",
            "highest-active": "#7c7c7c",
            "highest-disabled": "#53535399"
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
            "grey.subtle": "#000000",
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
            "body": "#dadada",
            "eyebrow": "#535353",
            "caption": "#adadad",
            "link": "#77a8ff",
            "required": "#ff0606",
            "body-hover": "#929292",
            "body-active": "#4f4f4f",
            "body-disabled": "#dadada99",
            "eyebrow-hover": "#7c7c7c",
            "eyebrow-active": "#a7a7a7",
            "eyebrow-disabled": "#53535399",
            "caption-hover": "#707070",
            "caption-active": "#363636",
            "caption-disabled": "#adadad99",
            "link-hover": "#065df3",
            "link-active": "#002e7b",
            "link-disabled": "#75a2f0",
            "required-hover": "#bb0000",
            "required-active": "#770000",
            "required-disabled": "#f45642"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"The overlay background color for the dark theme"}
      colors={{
            "background": "#000000",
            "border": "#1b1b1b",
            "backdrop": "#00000066",
            "background-hover": "#111111",
            "background-active": "#111111",
            "background-disabled": "#00000099",
            "border-hover": "#353535",
            "border-active": "#525252",
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
            "base-active": "#333333",
            "base-disabled": "#26262699",
            "brand-hover": "#3a8b7a",
            "brand-active": "#3a8b7a",
            "brand-disabled": "#3e685e",
            "danger-hover": "#b93c2d",
            "danger-active": "#b93c2d",
            "danger-disabled": "#813c32",
            "negative-hover": "#aa0000",
            "negative-active": "#aa0000",
            "negative-disabled": "#b25a48",
            "warning-hover": "#6f4500",
            "warning-active": "#6f4500",
            "warning-disabled": "#82683f",
            "success-hover": "#005c31",
            "success-active": "#005c31",
            "success-disabled": "#407358",
            "positive-hover": "#398000",
            "positive-active": "#398000",
            "positive-disabled": "#77a160",
            "info-hover": "#005676",
            "info-active": "#005676",
            "info-disabled": "#417184",
            "discovery-hover": "#46428d",
            "discovery-active": "#46428d",
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
            "base-active": "#555555",
            "base-disabled": "#33333399",
            "brand-hover": "#00705c",
            "brand-active": "#004d3c",
            "brand-disabled": "#558d7f",
            "danger-hover": "#a70006",
            "danger-active": "#800000",
            "danger-disabled": "#af514d",
            "negative-hover": "#ad0000",
            "negative-active": "#840000",
            "negative-disabled": "#b5594a",
            "warning-hover": "#a66800",
            "warning-active": "#793e00",
            "warning-disabled": "#c19b60",
            "success-hover": "#007d45",
            "success-active": "#005722",
            "success-disabled": "#589b77",
            "positive-hover": "#508500",
            "positive-active": "#295c00",
            "positive-disabled": "#88aa69",
            "info-hover": "#008ab6",
            "info-active": "#005e88",
            "info-disabled": "#6ab2cd",
            "discovery-hover": "#5b57b9",
            "discovery-active": "#3b318f",
            "discovery-disabled": "#8386c2",
            "base-subtle-hover": "#333333",
            "base-subtle-active": "#414141",
            "base-subtle-disabled": "#26262699",
            "brand-subtle-hover": "#3a8b7a",
            "brand-subtle-active": "#59a997",
            "brand-subtle-disabled": "#3e685e",
            "danger-subtle-hover": "#b93c2d",
            "danger-subtle-active": "#d85947",
            "danger-subtle-disabled": "#813c32",
            "negative-subtle-hover": "#aa0000",
            "negative-subtle-active": "#820000",
            "negative-subtle-disabled": "#b25a48",
            "warning-subtle-hover": "#6f4500",
            "warning-subtle-active": "#502700",
            "warning-subtle-disabled": "#82683f",
            "success-subtle-hover": "#005c31",
            "success-subtle-active": "#003f17",
            "success-subtle-disabled": "#407358",
            "positive-subtle-hover": "#398000",
            "positive-subtle-active": "#0c5800",
            "positive-subtle-disabled": "#77a160",
            "info-subtle-hover": "#005676",
            "info-subtle-active": "#003958",
            "info-subtle-disabled": "#417184",
            "discovery-subtle-hover": "#46428d",
            "discovery-subtle-active": "#2c246c",
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
            "base-active": "#7b7b7b",
            "base-disabled": "#999999",
            "brand-hover": "#00705c",
            "brand-active": "#004d3c",
            "brand-disabled": "#b8b8b8",
            "danger-hover": "#a70006",
            "danger-active": "#800000",
            "danger-disabled": "#acacac",
            "negative-hover": "#ad0000",
            "negative-active": "#840000",
            "negative-disabled": "#262626",
            "warning-hover": "#a66800",
            "warning-active": "#793e00",
            "warning-disabled": "#1e1e1e",
            "success-hover": "#007d45",
            "success-active": "#005722",
            "success-disabled": "#191919",
            "positive-hover": "#508500",
            "positive-active": "#295c00",
            "positive-disabled": "#3e3e3e",
            "info-hover": "#008ab6",
            "info-active": "#005e88",
            "info-disabled": "#1b1b1b",
            "discovery-hover": "#5b57b9",
            "discovery-active": "#3b318f",
            "discovery-disabled": "#1d1d1d",
            "base-inverse-hover": "#222222",
            "base-inverse-active": "#2c2c2c",
            "base-inverse-disabled": "#999999",
            "brand-inverse-hover": "#b6b6b6",
            "brand-inverse-active": "#7b7b7b",
            "brand-inverse-disabled": "#b8b8b8",
            "danger-inverse-hover": "#b6b6b6",
            "danger-inverse-active": "#7b7b7b",
            "danger-inverse-disabled": "#acacac",
            "negative-inverse-hover": "#b6b6b6",
            "negative-inverse-active": "#7b7b7b",
            "negative-inverse-disabled": "#262626",
            "warning-inverse-hover": "#222222",
            "warning-inverse-active": "#2c2c2c",
            "warning-inverse-disabled": "#1e1e1e",
            "success-inverse-hover": "#b6b6b6",
            "success-inverse-active": "#7b7b7b",
            "success-inverse-disabled": "#191919",
            "positive-inverse-hover": "#b6b6b6",
            "positive-inverse-active": "#7b7b7b",
            "positive-inverse-disabled": "#3e3e3e",
            "info-inverse-hover": "#b6b6b6",
            "info-inverse-active": "#7b7b7b",
            "info-inverse-disabled": "#1b1b1b",
            "discovery-inverse-hover": "#b6b6b6",
            "discovery-inverse-active": "#7b7b7b",
            "discovery-inverse-disabled": "#1d1d1d",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#73cab3",
            "danger-ghost-hover": "#ff7161",
            "negative-ghost-hover": "#ff7562",
            "warning-ghost-hover": "#ffd484",
            "success-ghost-hover": "#7de0a1",
            "positive-ghost-hover": "#b5f181",
            "info-ghost-hover": "#94fdff",
            "discovery-ghost-hover": "#b4b7ff"
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
            "lowest-active": "#bebebe",
            "lowest-disabled": "#ffffff99",
            "page-hover": "#bababa",
            "page-active": "#bababa",
            "page-disabled": "#fafafa99",
            "elevated-hover": "#b5b5b5",
            "elevated-active": "#b5b5b5",
            "elevated-disabled": "#f4f4f499",
            "floating-hover": "#aeaeae",
            "floating-active": "#aeaeae",
            "floating-disabled": "#eaeaea99",
            "high-hover": "#a3a3a3",
            "high-active": "#a3a3a3",
            "high-disabled": "#dcdcdc99",
            "highest-hover": "#939393",
            "highest-active": "#939393",
            "highest-disabled": "#c7c7c799",
            "link-hover": "#1d63b8",
            "link-active": "#1d63b8",
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
            "body-hover": "#6d6d6d",
            "body-active": "#484848",
            "body-disabled": "#94949499",
            "eyebrow-hover": "#6b6b6b",
            "eyebrow-active": "#848484",
            "eyebrow-disabled": "#52525299",
            "caption-hover": "#545454",
            "caption-active": "#363636",
            "caption-disabled": "#73737399",
            "link-hover": "#1d63b8",
            "link-active": "#003d8f",
            "link-disabled": "#363636",
            "required-hover": "#b20000",
            "required-active": "#890000",
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
            "background-active": "#aeaeae",
            "background-disabled": "#eaeaea99",
            "border-hover": "#444444",
            "border-active": "#555555",
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
            "base-active": "#4a4a4a",
            "base-disabled": "#41414199",
            "brand-hover": "#538379",
            "brand-active": "#538379",
            "brand-disabled": "#536e67",
            "danger-hover": "#9f584f",
            "danger-active": "#9f584f",
            "danger-disabled": "#7d534c",
            "negative-hover": "#982c2c",
            "negative-active": "#982c2c",
            "negative-disabled": "#9b6a60",
            "warning-hover": "#785723",
            "warning-active": "#785723",
            "warning-disabled": "#7e6e56",
            "success-hover": "#206d49",
            "success-active": "#206d49",
            "success-disabled": "#557564",
            "positive-hover": "#4e8125",
            "positive-active": "#4e8125",
            "positive-disabled": "#7b926e",
            "info-hover": "#24647b",
            "info-active": "#24647b",
            "info-disabled": "#57747f",
            "discovery-hover": "#5b5985",
            "discovery-active": "#5b5985",
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
            "base-active": "#626262",
            "base-disabled": "#4a4a4a99",
            "brand-hover": "#237869",
            "brand-active": "#1d6555",
            "brand-disabled": "#65857d",
            "danger-hover": "#962c2f",
            "danger-active": "#812525",
            "danger-disabled": "#996663",
            "negative-hover": "#992c2c",
            "negative-active": "#832626",
            "negative-disabled": "#9d6a62",
            "warning-hover": "#956e2b",
            "warning-active": "#7d5224",
            "warning-disabled": "#a7916f",
            "success-hover": "#257f57",
            "success-active": "#1f6a3c",
            "success-disabled": "#698e7a",
            "positive-hover": "#5e8326",
            "positive-active": "#426d20",
            "positive-disabled": "#869974",
            "info-hover": "#2e839e",
            "info-active": "#276885",
            "info-disabled": "#76a1b1",
            "discovery-hover": "#6c6aa1",
            "discovery-active": "#534d86",
            "discovery-disabled": "#8587ab",
            "base-subtle-hover": "#4a4a4a",
            "base-subtle-active": "#545454",
            "base-subtle-disabled": "#41414199",
            "brand-subtle-hover": "#538379",
            "brand-subtle-active": "#6a978d",
            "brand-subtle-disabled": "#536e67",
            "danger-subtle-hover": "#9f584f",
            "danger-subtle-active": "#b46b61",
            "danger-subtle-disabled": "#7d534c",
            "negative-subtle-hover": "#982c2c",
            "negative-subtle-active": "#822626",
            "negative-subtle-disabled": "#9b6a60",
            "warning-subtle-hover": "#785723",
            "warning-subtle-active": "#67411e",
            "warning-subtle-disabled": "#7e6e56",
            "success-subtle-hover": "#206d49",
            "success-subtle-active": "#1b5d33",
            "success-subtle-disabled": "#557564",
            "positive-subtle-hover": "#4e8125",
            "positive-subtle-active": "#296b1f",
            "positive-subtle-disabled": "#7b926e",
            "info-subtle-hover": "#24647b",
            "info-subtle-active": "#1f506b",
            "info-subtle-disabled": "#57747f",
            "discovery-subtle-hover": "#5b5985",
            "discovery-subtle-active": "#464071",
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
            "base-active": "#7c7c7c",
            "base-disabled": "#919191",
            "brand-hover": "#237869",
            "brand-active": "#1d6555",
            "brand-disabled": "#a7a7a7",
            "danger-hover": "#962c2f",
            "danger-active": "#812525",
            "danger-disabled": "#9f9f9f",
            "negative-hover": "#992c2c",
            "negative-active": "#832626",
            "negative-disabled": "#414141",
            "warning-hover": "#956e2b",
            "warning-active": "#7d5224",
            "warning-disabled": "#3b3b3b",
            "success-hover": "#257f57",
            "success-active": "#1f6a3c",
            "success-disabled": "#383838",
            "positive-hover": "#5e8326",
            "positive-active": "#426d20",
            "positive-disabled": "#525252",
            "info-hover": "#2e839e",
            "info-active": "#276885",
            "info-disabled": "#393939",
            "discovery-hover": "#6c6aa1",
            "discovery-active": "#534d86",
            "discovery-disabled": "#3b3b3b",
            "base-inverse-hover": "#3e3e3e",
            "base-inverse-active": "#454545",
            "base-inverse-disabled": "#919191",
            "brand-inverse-hover": "#a6a6a6",
            "brand-inverse-active": "#7c7c7c",
            "brand-inverse-disabled": "#a7a7a7",
            "danger-inverse-hover": "#a6a6a6",
            "danger-inverse-active": "#7c7c7c",
            "danger-inverse-disabled": "#9f9f9f",
            "negative-inverse-hover": "#a6a6a6",
            "negative-inverse-active": "#7c7c7c",
            "negative-inverse-disabled": "#414141",
            "warning-inverse-hover": "#3e3e3e",
            "warning-inverse-active": "#454545",
            "warning-inverse-disabled": "#3b3b3b",
            "success-inverse-hover": "#a6a6a6",
            "success-inverse-active": "#7c7c7c",
            "success-inverse-disabled": "#383838",
            "positive-inverse-hover": "#a6a6a6",
            "positive-inverse-active": "#7c7c7c",
            "positive-inverse-disabled": "#525252",
            "info-inverse-hover": "#a6a6a6",
            "info-inverse-active": "#7c7c7c",
            "info-inverse-disabled": "#393939",
            "discovery-inverse-hover": "#a6a6a6",
            "discovery-inverse-active": "#7c7c7c",
            "discovery-inverse-disabled": "#3b3b3b",
            "base-ghost-hover": "#d9d9d9",
            "brand-ghost-hover": "#7bafa2",
            "danger-ghost-hover": "#d5786e",
            "negative-ghost-hover": "#d57b6f",
            "warning-ghost-hover": "#dabb81",
            "success-ghost-hover": "#80c098",
            "positive-ghost-hover": "#a5ce81",
            "info-ghost-hover": "#8adbdd",
            "discovery-ghost-hover": "#9b9ee2"
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
            "lowest-active": "#ababab",
            "lowest-disabled": "#d9d9d999",
            "page-hover": "#a8a8a8",
            "page-active": "#a8a8a8",
            "page-disabled": "#d5d5d599",
            "elevated-hover": "#a5a5a5",
            "elevated-active": "#a5a5a5",
            "elevated-disabled": "#d1d1d199",
            "floating-hover": "#a0a0a0",
            "floating-active": "#a0a0a0",
            "floating-disabled": "#cacaca99",
            "high-hover": "#989898",
            "high-active": "#989898",
            "high-disabled": "#c0c0c099",
            "highest-hover": "#8d8d8d",
            "highest-active": "#8d8d8d",
            "highest-disabled": "#b2b2b299",
            "link-hover": "#446c9e",
            "link-active": "#446c9e",
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
            "body-hover": "#737373",
            "body-active": "#595959",
            "body-disabled": "#8e8e8e99",
            "eyebrow-hover": "#717171",
            "eyebrow-active": "#838383",
            "eyebrow-disabled": "#60606099",
            "caption-hover": "#616161",
            "caption-active": "#4c4c4c",
            "caption-disabled": "#77777799",
            "link-hover": "#446c9e",
            "link-active": "#285189",
            "link-disabled": "#4c4c4c",
            "required-hover": "#9c2d2d",
            "required-active": "#862727",
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
            "background-active": "#a0a0a0",
            "background-disabled": "#cacaca99",
            "border-hover": "#565656",
            "border-active": "#626262",
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
            "base-active": "#111111",
            "base-disabled": "#00000099",
            "brand-hover": "#228973",
            "brand-active": "#228973",
            "brand-disabled": "#26584c",
            "danger-hover": "#cd220e",
            "danger-active": "#cd220e",
            "danger-disabled": "#77251a",
            "negative-hover": "#840000",
            "negative-active": "#840000",
            "negative-disabled": "#c9492f",
            "warning-hover": "#2e1d00",
            "warning-active": "#2e1d00",
            "warning-disabled": "#7d5c28",
            "success-hover": "#00130a",
            "success-active": "#00130a",
            "success-disabled": "#296847",
            "positive-hover": "#204700",
            "positive-active": "#204700",
            "positive-disabled": "#72b34f",
            "info-hover": "#002938",
            "info-active": "#002938",
            "info-disabled": "#2a6881",
            "discovery-hover": "#302b8f",
            "discovery-active": "#302b8f",
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
            "base-active": "#424242",
            "base-disabled": "#11111199",
            "brand-hover": "#003027",
            "brand-active": "#000000",
            "brand-disabled": "#42937f",
            "danger-hover": "#7f0005",
            "danger-active": "#470000",
            "danger-disabled": "#c53b35",
            "negative-hover": "#880000",
            "negative-active": "#4d0000",
            "negative-disabled": "#ce4731",
            "warning-hover": "#7e4f00",
            "warning-active": "#3d1f00",
            "warning-disabled": "#daa656",
            "success-hover": "#004325",
            "success-active": "#000b04",
            "success-disabled": "#45a973",
            "positive-hover": "#2f4e00",
            "positive-active": "#081300",
            "positive-disabled": "#8cbe5e",
            "info-hover": "#007195",
            "info-active": "#003952",
            "info-disabled": "#69c5e7",
            "discovery-hover": "#4c46d2",
            "discovery-active": "#24188c",
            "discovery-disabled": "#8b8fd9",
            "base-subtle-hover": "#111111",
            "base-subtle-active": "#252525",
            "base-subtle-disabled": "#00000099",
            "brand-subtle-hover": "#228973",
            "brand-subtle-active": "#46bea3",
            "brand-subtle-disabled": "#26584c",
            "danger-subtle-hover": "#cd220e",
            "danger-subtle-active": "#f74e36",
            "danger-subtle-disabled": "#77251a",
            "negative-subtle-hover": "#840000",
            "negative-subtle-active": "#4a0000",
            "negative-subtle-disabled": "#c9492f",
            "warning-subtle-hover": "#2e1d00",
            "warning-subtle-active": "#010100",
            "warning-subtle-disabled": "#7d5c28",
            "success-subtle-hover": "#00130a",
            "success-subtle-active": "#000000",
            "success-subtle-disabled": "#296847",
            "positive-subtle-hover": "#204700",
            "positive-subtle-active": "#020d00",
            "positive-subtle-disabled": "#72b34f",
            "info-subtle-hover": "#002938",
            "info-subtle-active": "#00080d",
            "info-subtle-disabled": "#2a6881",
            "discovery-subtle-hover": "#302b8f",
            "discovery-subtle-active": "#150d51",
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
            "base-active": "#797979",
            "base-disabled": "#a4a4a4",
            "brand-hover": "#003027",
            "brand-active": "#000000",
            "brand-disabled": "#d1d1d1",
            "danger-hover": "#7f0005",
            "danger-active": "#470000",
            "danger-disabled": "#c0c0c0",
            "negative-hover": "#880000",
            "negative-active": "#4d0000",
            "negative-disabled": "#000000",
            "warning-hover": "#7e4f00",
            "warning-active": "#3d1f00",
            "warning-disabled": "#000000",
            "success-hover": "#004325",
            "success-active": "#000b04",
            "success-disabled": "#000000",
            "positive-hover": "#2f4e00",
            "positive-active": "#081300",
            "positive-disabled": "#212121",
            "info-hover": "#007195",
            "info-active": "#003952",
            "info-disabled": "#000000",
            "discovery-hover": "#4c46d2",
            "discovery-active": "#24188c",
            "discovery-disabled": "#000000",
            "base-inverse-hover": "#000000",
            "base-inverse-active": "#060606",
            "base-inverse-disabled": "#a4a4a4",
            "brand-inverse-hover": "#cfcfcf",
            "brand-inverse-active": "#797979",
            "brand-inverse-disabled": "#d1d1d1",
            "danger-inverse-hover": "#cfcfcf",
            "danger-inverse-active": "#797979",
            "danger-inverse-disabled": "#c0c0c0",
            "negative-inverse-hover": "#cfcfcf",
            "negative-inverse-active": "#797979",
            "negative-inverse-disabled": "#000000",
            "warning-inverse-hover": "#000000",
            "warning-inverse-active": "#060606",
            "warning-inverse-disabled": "#000000",
            "success-inverse-hover": "#cfcfcf",
            "success-inverse-active": "#797979",
            "success-inverse-disabled": "#000000",
            "positive-inverse-hover": "#cfcfcf",
            "positive-inverse-active": "#797979",
            "positive-inverse-disabled": "#212121",
            "info-inverse-hover": "#cfcfcf",
            "info-inverse-active": "#797979",
            "info-inverse-disabled": "#000000",
            "discovery-inverse-hover": "#cfcfcf",
            "discovery-inverse-active": "#797979",
            "discovery-inverse-disabled": "#000000",
            "base-ghost-hover": "#ffffff",
            "brand-ghost-hover": "#76e3c6",
            "danger-ghost-hover": "#ff988d",
            "negative-ghost-hover": "#ff9c8e",
            "warning-ghost-hover": "#ffe9bf",
            "success-ghost-hover": "#8ff8b5",
            "positive-ghost-hover": "#d0ffa7",
            "info-ghost-hover": "#d7feff",
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
            "high": "#ffffff",
            "highest": "#e7e7e7",
            "link": "#3b91ff",
            "lowest-hover": "#dadada",
            "lowest-active": "#dadada",
            "lowest-disabled": "#ffffff99",
            "page-hover": "#d4d4d4",
            "page-active": "#d4d4d4",
            "page-disabled": "#ffffff99",
            "elevated-hover": "#cdcdcd",
            "elevated-active": "#cdcdcd",
            "elevated-disabled": "#ffffff99",
            "floating-hover": "#c3c3c3",
            "floating-active": "#c3c3c3",
            "floating-disabled": "#ffffff99",
            "high-hover": "#b3b3b3",
            "high-active": "#b3b3b3",
            "high-disabled": "#ffffff99",
            "highest-hover": "#9c9c9c",
            "highest-active": "#9c9c9c",
            "highest-disabled": "#e7e7e799",
            "link-hover": "#0058c2",
            "link-active": "#0058c2",
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
            "body-hover": "#656565",
            "body-active": "#2f2f2f",
            "body-disabled": "#9d9d9d99",
            "eyebrow-hover": "#626262",
            "eyebrow-active": "#868686",
            "eyebrow-disabled": "#3e3e3e99",
            "caption-hover": "#404040",
            "caption-active": "#151515",
            "caption-disabled": "#6d6d6d99",
            "link-hover": "#0058c2",
            "link-active": "#00285d",
            "link-disabled": "#151515",
            "required-hover": "#8f0000",
            "required-active": "#540000",
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
            "background-active": "#c3c3c3",
            "background-disabled": "#ffffff99",
            "border-hover": "#292929",
            "border-active": "#424242",
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
