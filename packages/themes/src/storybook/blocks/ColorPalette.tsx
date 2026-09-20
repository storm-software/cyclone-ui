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
            "5": "#dcdcdc",
            "6": "#bebebe",
            "7": "#9f9f9f",
            "8": "#616161",
            "9": "#484848",
            "10": "#3a3a3a",
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
      subtitle={"Primary neutral accent for emphasized controls and content."}
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
            "base-active": "#c9c9c9",
            "base-inactive": "#ffffff",
            "base-disabled": "#fafafa66",
            "brand-hover": "#00a785",
            "brand-active": "#00c5a1",
            "brand-inactive": "#81fff4",
            "brand-disabled": "#6adfc0",
            "danger-hover": "#fd5b7b",
            "danger-active": "#e64568",
            "danger-inactive": "#a70037",
            "danger-disabled": "#c0455d",
            "negative-hover": "#fd5b7b",
            "negative-active": "#e64568",
            "negative-inactive": "#a70037",
            "negative-disabled": "#c0455d",
            "warning-hover": "#bb7400",
            "warning-active": "#d98f00",
            "warning-inactive": "#ffe067",
            "warning-disabled": "#ecb055",
            "success-hover": "#82ffc6",
            "success-active": "#65e3ab",
            "success-inactive": "#009865",
            "success-disabled": "#64c297",
            "positive-hover": "#82ffc6",
            "positive-active": "#65e3ab",
            "positive-inactive": "#009865",
            "positive-disabled": "#64c297",
            "info-hover": "#7abeff",
            "info-active": "#63a6ff",
            "info-inactive": "#2564d1",
            "info-disabled": "#5d91ea",
            "discovery-hover": "#bea4ff",
            "discovery-active": "#a88df2",
            "discovery-inactive": "#6d51b0",
            "discovery-disabled": "#907ccb"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Muted neutral accent background for low-emphasis states."}
      colors={{
            "base": "#2b2c30",
            "brand": "#007e5e",
            "base-hover": "#414347",
            "base-active": "#36373b",
            "base-inactive": "#1d1e22",
            "base-disabled": "#2b2c2f",
            "brand-hover": "#3da280",
            "brand-active": "#26906f",
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
            "danger-active": "#77122c",
            "danger-inactive": "#550013",
            "danger-disabled": "#621727",
            "negative-hover": "#842036",
            "negative-active": "#77122c",
            "negative-inactive": "#550013",
            "negative-disabled": "#621727",
            "warning-hover": "#a77931",
            "warning-active": "#95681d",
            "warning-inactive": "#663c00",
            "warning-disabled": "#7e5b25",
            "success-hover": "#36926b",
            "success-active": "#21815b",
            "success-inactive": "#005532",
            "success-disabled": "#296e50",
            "positive-hover": "#36926b",
            "positive-active": "#21815b",
            "positive-inactive": "#005532",
            "positive-disabled": "#296e50",
            "info-hover": "#2564d1",
            "info-active": "#1555c0",
            "info-inactive": "#002a94",
            "info-disabled": "#1b4b9d",
            "discovery-hover": "#6a4dac",
            "discovery-active": "#5d409e",
            "discovery-inactive": "#3c1875",
            "discovery-disabled": "#4f3982"
      }}
    />
          <ColorItem
      title={"color.on-accent"}
      subtitle={"Content color placed on neutral accent backgrounds."}
      colors={{
            "base": "#151518",
            "base-hover": "#232326",
            "base-active": "#1c1c1f",
            "base-inactive": "#0c0c0f",
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
            "brand-active": "#1a1a1d",
            "brand-inactive": "#0c0c0f",
            "brand-disabled": "#151517",
            "danger-hover": "#b2b2b2",
            "danger-active": "#d5d5d5",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#fafafa66",
            "negative-hover": "#b2b2b2",
            "negative-active": "#d5d5d5",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#fafafa66",
            "warning-hover": "#1f1f22",
            "warning-active": "#1a1a1d",
            "warning-inactive": "#0c0c0f",
            "warning-disabled": "#151517",
            "success-hover": "#b2b2b2",
            "success-active": "#d5d5d5",
            "success-inactive": "#ffffff",
            "success-disabled": "#fafafa66",
            "positive-hover": "#b2b2b2",
            "positive-active": "#d5d5d5",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#fafafa66",
            "info-hover": "#b2b2b2",
            "info-active": "#d5d5d5",
            "info-inactive": "#ffffff",
            "info-disabled": "#fafafa66",
            "discovery-hover": "#b2b2b2",
            "discovery-active": "#d5d5d5",
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
            "base-active": "#c9c9c9",
            "base-inactive": "#ffffff",
            "base-disabled": "#fafafa66",
            "brand-hover": "#00a785",
            "brand-active": "#00c5a1",
            "brand-inactive": "#81fff4",
            "brand-disabled": "#6adfc0",
            "danger-hover": "#c2606e",
            "danger-active": "#e07a88",
            "danger-inactive": "#ffc9d5",
            "danger-disabled": "#f39ea7",
            "negative-hover": "#c2606e",
            "negative-active": "#e07a88",
            "negative-inactive": "#ffc9d5",
            "negative-disabled": "#f39ea7",
            "warning-hover": "#b6b6b6",
            "warning-active": "#dadada",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#ffffff66",
            "success-hover": "#b6b6b6",
            "success-active": "#dadada",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#b6b6b6",
            "positive-active": "#dadada",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#899cbd",
            "info-active": "#a7bcde",
            "info-inactive": "#ebffff",
            "info-disabled": "#cbdcf8",
            "discovery-hover": "#968bbf",
            "discovery-active": "#b4a8df",
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
      subtitle={"High-emphasis neutral data-series color."}
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
      subtitle={"Subtle color for hairline borders and separators."}
      colors={{
            "hairline": "#616161"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Subtle color for hairline borders and separators. (active, 11% brighter)"}
      colors={{
            "hairline-active": "#717171"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Subtle color for hairline borders and separators. (hover, 23% brighter)"}
      colors={{
            "hairline-hover": "#818181"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Subtle color for hairline borders and separators. (inactive, 20% darker)"}
      colors={{
            "hairline-inactive": "#464646"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Primary text and icon color for high-emphasis content."}
      colors={{
            "emphasis": "#f1f1f1",
            "body": "#bebebe",
            "subtle": "#616161"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Interactive color for links and linked text."}
      colors={{
            "link": "#2e7aff"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Interactive color for links and linked text. (active, 11% brighter)"}
      colors={{
            "link-active": "#4490ff"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Interactive color for links and linked text. (hover, 23% brighter)"}
      colors={{
            "link-hover": "#59a7ff"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Interactive color for links and linked text. (inactive, 20% darker)"}
      colors={{
            "link-inactive": "#0052d4"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Surface color for floating overlays."}
      colors={{
            "background": "#2b2c30",
            "border": "#616161",
            "backdrop": "#0d0c0766"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields."}
      colors={{
            "required": "#cf2d56"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface for inset controls and grouped content."}
      colors={{
            "sunken": "#0c0c0d",
            "canvas": "#151518",
            "elevated": "#1f1f21",
            "floating": "#242528",
            "overlay": "#2b2c30",
            "sunken-hover": "#141415",
            "sunken-active": "#101011",
            "sunken-inactive": "#060607",
            "sunken-disabled": "#0c0c0d",
            "canvas-hover": "#1f1f22",
            "canvas-active": "#1a1a1d",
            "canvas-inactive": "#0c0c0f",
            "canvas-disabled": "#151517",
            "elevated-hover": "#2c2c2e",
            "elevated-active": "#252527",
            "elevated-inactive": "#141416",
            "elevated-disabled": "#1f1f21",
            "floating-hover": "#333437",
            "floating-active": "#2b2c2f",
            "floating-inactive": "#18191b",
            "floating-disabled": "#242527",
            "overlay-hover": "#3c3d41",
            "overlay-active": "#333438",
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
            "5": "#c0c0c0",
            "6": "#ababab",
            "7": "#969696",
            "8": "#6a6a6a",
            "9": "#595959",
            "10": "#4f4f4f",
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
      subtitle={"Primary neutral accent for emphasized controls and content."}
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
            "base-active": "#b3b3b3",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#d5d5d566",
            "brand-hover": "#2c9680",
            "brand-active": "#30a691",
            "brand-inactive": "#7fdad2",
            "brand-disabled": "#75beaa",
            "danger-hover": "#d26b7f",
            "danger-active": "#be6074",
            "danger-inactive": "#962c4f",
            "danger-disabled": "#a4606d",
            "negative-hover": "#d26b7f",
            "negative-active": "#be6074",
            "negative-inactive": "#962c4f",
            "negative-disabled": "#a4606d",
            "warning-hover": "#a1752f",
            "warning-active": "#b18633",
            "warning-inactive": "#d6c171",
            "warning-disabled": "#c4a069",
            "success-hover": "#80dab1",
            "success-active": "#72c09d",
            "success-inactive": "#298e6c",
            "success-disabled": "#72a88f",
            "positive-hover": "#80dab1",
            "positive-active": "#72c09d",
            "positive-inactive": "#298e6c",
            "positive-disabled": "#72a88f",
            "info-hover": "#7cabd9",
            "info-active": "#6f9bd5",
            "info-inactive": "#4d70ac",
            "info-disabled": "#6d8dc4",
            "discovery-hover": "#a892df",
            "discovery-active": "#9b88d0",
            "discovery-inactive": "#75669a",
            "discovery-disabled": "#8d80b1"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Muted neutral accent background for low-emphasis states."}
      colors={{
            "base": "#444548",
            "brand": "#258069",
            "base-hover": "#545558",
            "base-active": "#4c4d50",
            "base-inactive": "#3a3b3f",
            "base-disabled": "#444547",
            "brand-hover": "#57917e",
            "brand-active": "#458772",
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
            "danger-active": "#793345",
            "danger-inactive": "#691f2f",
            "danger-disabled": "#6c3541",
            "negative-hover": "#80404e",
            "negative-active": "#793345",
            "negative-inactive": "#691f2f",
            "negative-disabled": "#6c3541",
            "warning-hover": "#947950",
            "warning-active": "#8a6e3f",
            "warning-inactive": "#735121",
            "warning-disabled": "#7c6543",
            "success-hover": "#518870",
            "success-active": "#407e65",
            "success-inactive": "#1f694b",
            "success-disabled": "#44725e",
            "positive-hover": "#518870",
            "positive-active": "#407e65",
            "positive-inactive": "#1f694b",
            "positive-disabled": "#44725e",
            "info-hover": "#4d70ac",
            "info-active": "#3f64a3",
            "info-inactive": "#29458c",
            "info-disabled": "#3f5c8f",
            "discovery-hover": "#736398",
            "discovery-active": "#6a598f",
            "discovery-inactive": "#503877",
            "discovery-disabled": "#5f517e"
      }}
    />
          <ColorItem
      title={"color.on-accent"}
      subtitle={"Content color placed on neutral accent backgrounds."}
      colors={{
            "base": "#343438",
            "base-hover": "#3e3e41",
            "base-active": "#39393d",
            "base-inactive": "#2d2d33",
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
            "brand-active": "#38383b",
            "brand-inactive": "#2d2d33",
            "brand-disabled": "#343437",
            "danger-hover": "#a3a3a3",
            "danger-active": "#bbbbbb",
            "danger-inactive": "#d9d9d9",
            "danger-disabled": "#d5d5d566",
            "negative-hover": "#a3a3a3",
            "negative-active": "#bbbbbb",
            "negative-inactive": "#d9d9d9",
            "negative-disabled": "#d5d5d566",
            "warning-hover": "#3b3b3f",
            "warning-active": "#38383b",
            "warning-inactive": "#2d2d33",
            "warning-disabled": "#343437",
            "success-hover": "#a3a3a3",
            "success-active": "#bbbbbb",
            "success-inactive": "#d9d9d9",
            "success-disabled": "#d5d5d566",
            "positive-hover": "#a3a3a3",
            "positive-active": "#bbbbbb",
            "positive-inactive": "#d9d9d9",
            "positive-disabled": "#d5d5d566",
            "info-hover": "#a3a3a3",
            "info-active": "#bbbbbb",
            "info-inactive": "#d9d9d9",
            "info-disabled": "#d5d5d566",
            "discovery-hover": "#a3a3a3",
            "discovery-active": "#bbbbbb",
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
            "base-active": "#b3b3b3",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#d5d5d566",
            "brand-hover": "#2c9680",
            "brand-active": "#30a691",
            "brand-inactive": "#7fdad2",
            "brand-disabled": "#75beaa",
            "danger-hover": "#a87078",
            "danger-active": "#c07f88",
            "danger-inactive": "#e5a6b4",
            "danger-disabled": "#d39299",
            "negative-hover": "#a87078",
            "negative-active": "#c07f88",
            "negative-inactive": "#e5a6b4",
            "negative-disabled": "#d39299",
            "warning-hover": "#a6a6a6",
            "warning-active": "#bfbfbf",
            "warning-inactive": "#d9d9d9",
            "warning-disabled": "#d9d9d966",
            "success-hover": "#a6a6a6",
            "success-active": "#bfbfbf",
            "success-inactive": "#d9d9d9",
            "success-disabled": "#d9d9d966",
            "positive-hover": "#a6a6a6",
            "positive-active": "#bfbfbf",
            "positive-inactive": "#d9d9d9",
            "positive-disabled": "#d9d9d966",
            "info-hover": "#8894a8",
            "info-active": "#9aaac3",
            "info-inactive": "#b9ebeb",
            "info-disabled": "#abbedd",
            "discovery-hover": "#908aaa",
            "discovery-active": "#a49bc3",
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
      subtitle={"High-emphasis neutral data-series color."}
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
      subtitle={"Subtle color for hairline borders and separators."}
      colors={{
            "hairline": "#6a6a6a"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Subtle color for hairline borders and separators. (active, 11% brighter)"}
      colors={{
            "hairline-active": "#757575"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Subtle color for hairline borders and separators. (hover, 23% brighter)"}
      colors={{
            "hairline-hover": "#818181"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Subtle color for hairline borders and separators. (inactive, 20% darker)"}
      colors={{
            "hairline-inactive": "#575757"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Primary text and icon color for high-emphasis content."}
      colors={{
            "emphasis": "#cfcfcf",
            "body": "#ababab",
            "subtle": "#6a6a6a"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Interactive color for links and linked text."}
      colors={{
            "link": "#527fcd"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Interactive color for links and linked text. (active, 11% brighter)"}
      colors={{
            "link-active": "#5e8dd0"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Interactive color for links and linked text. (hover, 23% brighter)"}
      colors={{
            "link-hover": "#6a9bd4"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Interactive color for links and linked text. (inactive, 20% darker)"}
      colors={{
            "link-inactive": "#3362ae"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Surface color for floating overlays."}
      colors={{
            "background": "#444548",
            "border": "#6a6a6a",
            "backdrop": "#35322666"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields."}
      colors={{
            "required": "#ab5268"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface for inset controls and grouped content."}
      colors={{
            "sunken": "#2e2e30",
            "canvas": "#343438",
            "elevated": "#3c3c3e",
            "floating": "#3f4043",
            "overlay": "#444548",
            "sunken-hover": "#343435",
            "sunken-active": "#313133",
            "sunken-inactive": "#29292d",
            "sunken-disabled": "#2e2e30",
            "canvas-hover": "#3b3b3f",
            "canvas-active": "#38383b",
            "canvas-inactive": "#2d2d33",
            "canvas-disabled": "#343437",
            "elevated-hover": "#454547",
            "elevated-active": "#404042",
            "elevated-inactive": "#343436",
            "elevated-disabled": "#3c3c3e",
            "floating-hover": "#4a4b4d",
            "floating-active": "#444547",
            "floating-inactive": "#36373a",
            "floating-disabled": "#3f4042",
            "overlay-hover": "#505154",
            "overlay-active": "#4a4b4e",
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
      subtitle={"Primary neutral accent for emphasized controls and content."}
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
            "base-active": "#eaeaea",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#007f65",
            "brand-active": "#00ab8c",
            "brand-inactive": "#bbfff9",
            "brand-disabled": "#71f9d5",
            "danger-hover": "#ff819a",
            "danger-active": "#ff4069",
            "danger-inactive": "#7f002a",
            "danger-disabled": "#dc2c4e",
            "negative-hover": "#ff819a",
            "negative-active": "#ff4069",
            "negative-inactive": "#7f002a",
            "negative-disabled": "#dc2c4e",
            "warning-hover": "#9c6100",
            "warning-active": "#c88400",
            "warning-inactive": "#ffe995",
            "warning-disabled": "#ffc060",
            "success-hover": "#bdffe1",
            "success-active": "#6bfebd",
            "success-inactive": "#006a46",
            "success-disabled": "#5ddba1",
            "positive-hover": "#bdffe1",
            "positive-active": "#6bfebd",
            "positive-inactive": "#006a46",
            "positive-disabled": "#5ddba1",
            "info-hover": "#b1d9ff",
            "info-active": "#90bfff",
            "info-inactive": "#0159f1",
            "info-disabled": "#68a0ff",
            "discovery-hover": "#f3eeff",
            "discovery-active": "#ccbaff",
            "discovery-inactive": "#643bc7",
            "discovery-disabled": "#9c84e3"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Muted neutral accent background for low-emphasis states."}
      colors={{
            "base": "#08080a",
            "brand": "#004433",
            "base-hover": "#25282e",
            "base-active": "#16171b",
            "base-inactive": "#000000",
            "base-disabled": "#070709",
            "brand-hover": "#23ad7f",
            "brand-active": "#0c8962",
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
            "danger-active": "#540016",
            "danger-inactive": "#080002",
            "danger-disabled": "#39030f",
            "negative-hover": "#73081f",
            "negative-active": "#540016",
            "negative-inactive": "#080002",
            "negative-disabled": "#39030f",
            "warning-hover": "#b17415",
            "warning-active": "#8c5903",
            "warning-inactive": "#211300",
            "warning-disabled": "#6d470d",
            "success-hover": "#1d9261",
            "success-active": "#096f47",
            "success-inactive": "#000805",
            "success-disabled": "#115739",
            "positive-hover": "#1d9261",
            "positive-active": "#096f47",
            "positive-inactive": "#000805",
            "positive-disabled": "#115739",
            "info-hover": "#0159f1",
            "info-active": "#0049c2",
            "info-inactive": "#001c64",
            "info-disabled": "#003898",
            "discovery-hover": "#6036c1",
            "discovery-active": "#4f27a8",
            "discovery-inactive": "#230357",
            "discovery-disabled": "#3c217b"
      }}
    />
          <ColorItem
      title={"color.on-accent"}
      subtitle={"Content color placed on neutral accent backgrounds."}
      colors={{
            "base": "#000000",
            "base-hover": "#000000",
            "base-active": "#000000",
            "base-inactive": "#000000",
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
            "danger-active": "#fbfbfb",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#ffffff66",
            "negative-hover": "#c9c9c9",
            "negative-active": "#fbfbfb",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#ffffff66",
            "warning-hover": "#000000",
            "warning-active": "#000000",
            "warning-inactive": "#000000",
            "warning-disabled": "#000000",
            "success-hover": "#c9c9c9",
            "success-active": "#fbfbfb",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#c9c9c9",
            "positive-active": "#fbfbfb",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#c9c9c9",
            "info-active": "#fbfbfb",
            "info-inactive": "#ffffff",
            "info-disabled": "#ffffff66",
            "discovery-hover": "#c9c9c9",
            "discovery-active": "#fbfbfb",
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
            "base-active": "#eaeaea",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#007f65",
            "brand-active": "#00ab8c",
            "brand-inactive": "#bbfff9",
            "brand-disabled": "#71f9d5",
            "danger-hover": "#db5669",
            "danger-active": "#f88b9a",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#ffd4d8",
            "negative-hover": "#db5669",
            "negative-active": "#f88b9a",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#ffd4d8",
            "warning-hover": "#cfcfcf",
            "warning-active": "#ffffff",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#ffffff66",
            "success-hover": "#cfcfcf",
            "success-active": "#ffffff",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#cfcfcf",
            "positive-active": "#ffffff",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#92aad4",
            "info-active": "#cddcf5",
            "info-inactive": "#ffffff",
            "info-disabled": "#ffffff",
            "discovery-hover": "#a396d6",
            "discovery-active": "#d7cff6",
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
      subtitle={"High-emphasis neutral data-series color."}
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
      subtitle={"Subtle color for hairline borders and separators."}
      colors={{
            "hairline": "#535353"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Subtle color for hairline borders and separators. (active, 11% brighter)"}
      colors={{
            "hairline-active": "#6a6a6a"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Subtle color for hairline borders and separators. (hover, 23% brighter)"}
      colors={{
            "hairline-hover": "#828282"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Subtle color for hairline borders and separators. (inactive, 20% darker)"}
      colors={{
            "hairline-inactive": "#2c2c2c"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Primary text and icon color for high-emphasis content."}
      colors={{
            "emphasis": "#ffffff",
            "body": "#dadada",
            "subtle": "#535353"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Interactive color for links and linked text."}
      colors={{
            "link": "#4387ff"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Interactive color for links and linked text. (active, 11% brighter)"}
      colors={{
            "link-active": "#63a2ff"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Interactive color for links and linked text. (hover, 23% brighter)"}
      colors={{
            "link-hover": "#81bcff"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Interactive color for links and linked text. (inactive, 20% darker)"}
      colors={{
            "link-inactive": "#004bc1"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Surface color for floating overlays."}
      colors={{
            "background": "#08080a",
            "border": "#535353",
            "backdrop": "#00000066"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields."}
      colors={{
            "required": "#f00a45"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface for inset controls and grouped content."}
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
            "elevated-active": "#000000",
            "elevated-inactive": "#000000",
            "elevated-disabled": "#000000",
            "floating-hover": "#121215",
            "floating-active": "#070709",
            "floating-inactive": "#000000",
            "floating-disabled": "#000000",
            "overlay-hover": "#1e1f25",
            "overlay-active": "#121316",
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
            "5": "#dcdcdc",
            "6": "#bebebe",
            "7": "#9f9f9f",
            "8": "#616161",
            "9": "#484848",
            "10": "#3a3a3a",
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
      subtitle={"Primary neutral accent for emphasized controls and content."}
      colors={{
            "base": "#151518",
            "brand": "#2055b3",
            "danger": "#8e223e",
            "negative": "#8e223e",
            "warning": "#765417",
            "success": "#216b53",
            "positive": "#216b53",
            "info": "#2055b3",
            "discovery": "#594395",
            "base-hover": "#232326",
            "base-active": "#1c1c1f",
            "base-inactive": "#0c0c0f",
            "base-disabled": "#151517",
            "brand-hover": "#003590",
            "brand-active": "#0f45a2",
            "brand-inactive": "#3b72d3",
            "brand-disabled": "#2f58a2",
            "danger-hover": "#6e0025",
            "danger-active": "#7e0f31",
            "danger-inactive": "#ab3e56",
            "danger-disabled": "#843142",
            "negative-hover": "#6e0025",
            "negative-active": "#7e0f31",
            "negative-inactive": "#ab3e56",
            "negative-disabled": "#843142",
            "warning-hover": "#573700",
            "warning-active": "#664500",
            "warning-inactive": "#926f36",
            "warning-disabled": "#71562a",
            "success-hover": "#004d36",
            "success-active": "#095c45",
            "success-inactive": "#40876e",
            "success-disabled": "#336855",
            "positive-hover": "#004d36",
            "positive-active": "#095c45",
            "positive-inactive": "#40876e",
            "positive-disabled": "#336855",
            "info-hover": "#003590",
            "info-active": "#0f45a2",
            "info-inactive": "#3b72d3",
            "info-disabled": "#2f58a2",
            "discovery-hover": "#3f2676",
            "discovery-active": "#4c3485",
            "discovery-inactive": "#725db2",
            "discovery-disabled": "#584889"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Muted neutral accent background for low-emphasis states."}
      colors={{
            "base": "#eaeaea",
            "brand": "#abcaff",
            "base-hover": "#919191",
            "base-active": "#bcbcbc",
            "base-inactive": "#ffffff",
            "base-disabled": "#eaeaea66",
            "brand-hover": "#728fc1",
            "brand-active": "#8eacdf",
            "brand-inactive": "#e0ffff",
            "brand-disabled": "#b1caf4",
            "danger": "#e37085",
            "negative": "#e37085",
            "warning": "#bd985e",
            "success": "#6ab196",
            "positive": "#6ab196",
            "info": "#659dff",
            "discovery": "#9e8ae4",
            "danger-hover": "#ae4158",
            "danger-active": "#c8586e",
            "danger-inactive": "#ff9baf",
            "danger-disabled": "#d67a89",
            "negative-hover": "#ae4158",
            "negative-active": "#c8586e",
            "negative-inactive": "#ff9baf",
            "negative-disabled": "#d67a89",
            "warning-hover": "#8c692e",
            "warning-active": "#a48046",
            "warning-inactive": "#ebc489",
            "warning-disabled": "#b79a6d",
            "success-hover": "#388067",
            "success-active": "#51987e",
            "success-inactive": "#96dfc2",
            "success-disabled": "#77ae98",
            "positive-hover": "#388067",
            "positive-active": "#51987e",
            "positive-inactive": "#96dfc2",
            "positive-disabled": "#77ae98",
            "info-hover": "#376cc9",
            "info-active": "#4e84e4",
            "info-inactive": "#90cbff",
            "info-disabled": "#729fec",
            "discovery-hover": "#715bb1",
            "discovery-active": "#8772ca",
            "discovery-inactive": "#c9b5ff",
            "discovery-disabled": "#9d8ed6"
      }}
    />
          <ColorItem
      title={"color.on-accent"}
      subtitle={"Content color placed on neutral accent backgrounds."}
      colors={{
            "base": "#f1f1f1",
            "base-hover": "#959595",
            "base-active": "#c2c2c2",
            "base-inactive": "#ffffff",
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
            "brand-active": "#d5d5d5",
            "brand-inactive": "#ffffff",
            "brand-disabled": "#fafafa66",
            "danger-hover": "#b2b2b2",
            "danger-active": "#d5d5d5",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#fafafa66",
            "negative-hover": "#b2b2b2",
            "negative-active": "#d5d5d5",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#fafafa66",
            "warning-hover": "#b2b2b2",
            "warning-active": "#d5d5d5",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#fafafa66",
            "success-hover": "#b2b2b2",
            "success-active": "#d5d5d5",
            "success-inactive": "#ffffff",
            "success-disabled": "#fafafa66",
            "positive-hover": "#b2b2b2",
            "positive-active": "#d5d5d5",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#fafafa66",
            "info-hover": "#b2b2b2",
            "info-active": "#d5d5d5",
            "info-inactive": "#ffffff",
            "info-disabled": "#fafafa66",
            "discovery-hover": "#b2b2b2",
            "discovery-active": "#d5d5d5",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#fafafa66"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#151518",
            "brand": "#2055b3",
            "danger": "#2f000c",
            "negative": "#2f000c",
            "warning": "#2d1c00",
            "success": "#002b1e",
            "positive": "#002b1e",
            "info": "#001c54",
            "discovery": "#20004c",
            "base-hover": "#232326",
            "base-active": "#1c1c1f",
            "base-inactive": "#0c0c0f",
            "base-disabled": "#151517",
            "brand-hover": "#003590",
            "brand-active": "#0f45a2",
            "brand-inactive": "#3b72d3",
            "brand-disabled": "#2f58a2",
            "danger-hover": "#3b0916",
            "danger-active": "#350411",
            "danger-inactive": "#240005",
            "danger-disabled": "#2b050e",
            "negative-hover": "#3b0916",
            "negative-active": "#350411",
            "negative-inactive": "#240005",
            "negative-disabled": "#2b050e",
            "warning-hover": "#3b290c",
            "warning-active": "#342305",
            "warning-inactive": "#211100",
            "warning-disabled": "#2a1d07",
            "success-hover": "#001d11",
            "success-active": "#002417",
            "success-inactive": "#0f382a",
            "success-disabled": "#0b2a1f",
            "positive-hover": "#001d11",
            "positive-active": "#002417",
            "positive-inactive": "#0f382a",
            "positive-disabled": "#0b2a1f",
            "info-hover": "#000c44",
            "info-active": "#00144c",
            "info-inactive": "#0a2a63",
            "info-disabled": "#071f4a",
            "discovery-hover": "#2b105a",
            "discovery-active": "#250753",
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
      subtitle={"High-emphasis neutral data-series color."}
      colors={{
            "neutral.emphasis": "#484848",
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
      subtitle={"Subtle color for hairline borders and separators."}
      colors={{
            "hairline": "#bebebe"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Subtle color for hairline borders and separators. (active, 11% darker)"}
      colors={{
            "hairline-active": "#a2a2a2"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Subtle color for hairline borders and separators. (hover, 23% darker)"}
      colors={{
            "hairline-hover": "#868686"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Subtle color for hairline borders and separators. (inactive, 20% brighter)"}
      colors={{
            "hairline-inactive": "#f2f2f2"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Primary text and icon color for high-emphasis content."}
      colors={{
            "emphasis": "#2b2c30",
            "body": "#484848",
            "subtle": "#616161"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Interactive color for links and linked text."}
      colors={{
            "link": "#2055b3"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Interactive color for links and linked text. (active, 11% darker)"}
      colors={{
            "link-active": "#0f45a2"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Interactive color for links and linked text. (hover, 23% darker)"}
      colors={{
            "link-hover": "#003590"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Interactive color for links and linked text. (inactive, 20% brighter)"}
      colors={{
            "link-inactive": "#3b72d3"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Surface color for floating overlays."}
      colors={{
            "background": "#ffffff",
            "border": "#bebebe",
            "backdrop": "#1a1c1f66"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields."}
      colors={{
            "required": "#8e223e"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface for inset controls and grouped content."}
      colors={{
            "sunken": "#e1e1e1",
            "canvas": "#eaeaea",
            "elevated": "#f1f1f1",
            "floating": "#fafafa",
            "overlay": "#ffffff",
            "sunken-hover": "#a0a0a0",
            "sunken-active": "#c0c0c0",
            "sunken-inactive": "#ffffff",
            "sunken-disabled": "#e1e1e166",
            "canvas-hover": "#a6a6a6",
            "canvas-active": "#c8c8c8",
            "canvas-inactive": "#ffffff",
            "canvas-disabled": "#eaeaea66",
            "elevated-hover": "#ababab",
            "elevated-active": "#cecece",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#f1f1f166",
            "floating-hover": "#b2b2b2",
            "floating-active": "#d5d5d5",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#fafafa66",
            "overlay-hover": "#b6b6b6",
            "overlay-active": "#dadada",
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
            "5": "#c0c0c0",
            "6": "#ababab",
            "7": "#969696",
            "8": "#6a6a6a",
            "9": "#595959",
            "10": "#4f4f4f",
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
      subtitle={"Primary neutral accent for emphasized controls and content."}
      colors={{
            "base": "#343438",
            "brand": "#45649b",
            "danger": "#864254",
            "negative": "#864254",
            "warning": "#786137",
            "success": "#3e7160",
            "positive": "#3e7160",
            "info": "#45649b",
            "discovery": "#675a8a",
            "base-hover": "#3e3e41",
            "base-active": "#39393d",
            "base-inactive": "#2d2d33",
            "base-disabled": "#343437",
            "brand-hover": "#284c89",
            "brand-active": "#365892",
            "brand-inactive": "#5a79af",
            "brand-disabled": "#4e6691",
            "danger-hover": "#77233f",
            "danger-active": "#7e3249",
            "danger-inactive": "#975967",
            "danger-disabled": "#7f4c56",
            "negative-hover": "#77233f",
            "negative-active": "#7e3249",
            "negative-inactive": "#975967",
            "negative-disabled": "#7f4c56",
            "warning-hover": "#6a4f1f",
            "warning-active": "#735821",
            "warning-inactive": "#887351",
            "warning-disabled": "#746245",
            "success-hover": "#1d6550",
            "success-active": "#286b58",
            "success-inactive": "#578172",
            "success-disabled": "#4b6e61",
            "positive-hover": "#1d6550",
            "positive-active": "#286b58",
            "positive-inactive": "#578172",
            "positive-disabled": "#4b6e61",
            "info-hover": "#284c89",
            "info-active": "#365892",
            "info-inactive": "#5a79af",
            "info-disabled": "#4e6691",
            "discovery-hover": "#534377",
            "discovery-active": "#5d4e80",
            "discovery-inactive": "#796d9d",
            "discovery-disabled": "#665c82"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Muted neutral accent background for low-emphasis states."}
      colors={{
            "base": "#cacaca",
            "brand": "#96b2e1",
            "base-hover": "#8c8c8c",
            "base-active": "#aaaaaa",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#cacaca66",
            "brand-hover": "#7a8ba9",
            "brand-active": "#8b9fc1",
            "brand-inactive": "#b3e9e9",
            "brand-disabled": "#9db2d6",
            "danger": "#c17986",
            "negative": "#c17986",
            "warning": "#a48f6e",
            "success": "#759e8e",
            "positive": "#759e8e",
            "info": "#7095d6",
            "discovery": "#9588c5",
            "danger-hover": "#985b68",
            "danger-active": "#ab6b78",
            "danger-inactive": "#de8d9e",
            "danger-disabled": "#b97f88",
            "negative-hover": "#985b68",
            "negative-active": "#ab6b78",
            "negative-inactive": "#de8d9e",
            "negative-disabled": "#b97f88",
            "warning-hover": "#846f4b",
            "warning-active": "#937e5e",
            "warning-inactive": "#caaf87",
            "warning-disabled": "#a29177",
            "success-hover": "#517d6d",
            "success-active": "#648c7d",
            "success-inactive": "#90c2ae",
            "success-disabled": "#7d9d90",
            "positive-hover": "#517d6d",
            "positive-active": "#648c7d",
            "positive-inactive": "#90c2ae",
            "positive-disabled": "#7d9d90",
            "info-hover": "#5875a8",
            "info-active": "#6585be",
            "info-inactive": "#87b5dc",
            "info-disabled": "#7996c8",
            "discovery-hover": "#786c9c",
            "discovery-active": "#877aaf",
            "discovery-inactive": "#af9ce2",
            "discovery-disabled": "#958bbb"
      }}
    />
          <ColorItem
      title={"color.on-accent"}
      subtitle={"Content color placed on neutral accent backgrounds."}
      colors={{
            "base": "#cfcfcf",
            "base-hover": "#8f8f8f",
            "base-active": "#aeaeae",
            "base-inactive": "#d9d9d9",
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
            "brand-active": "#bbbbbb",
            "brand-inactive": "#d9d9d9",
            "brand-disabled": "#d5d5d566",
            "danger-hover": "#a3a3a3",
            "danger-active": "#bbbbbb",
            "danger-inactive": "#d9d9d9",
            "danger-disabled": "#d5d5d566",
            "negative-hover": "#a3a3a3",
            "negative-active": "#bbbbbb",
            "negative-inactive": "#d9d9d9",
            "negative-disabled": "#d5d5d566",
            "warning-hover": "#a3a3a3",
            "warning-active": "#bbbbbb",
            "warning-inactive": "#d9d9d9",
            "warning-disabled": "#d5d5d566",
            "success-hover": "#a3a3a3",
            "success-active": "#bbbbbb",
            "success-inactive": "#d9d9d9",
            "success-disabled": "#d5d5d566",
            "positive-hover": "#a3a3a3",
            "positive-active": "#bbbbbb",
            "positive-inactive": "#d9d9d9",
            "positive-disabled": "#d5d5d566",
            "info-hover": "#a3a3a3",
            "info-active": "#bbbbbb",
            "info-inactive": "#d9d9d9",
            "info-disabled": "#d5d5d566",
            "discovery-hover": "#a3a3a3",
            "discovery-active": "#bbbbbb",
            "discovery-inactive": "#d9d9d9",
            "discovery-disabled": "#d5d5d566"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#343438",
            "brand": "#45649b",
            "danger": "#551928",
            "negative": "#551928",
            "warning": "#543d18",
            "success": "#185341",
            "positive": "#185341",
            "info": "#1e3769",
            "discovery": "#3b1d65",
            "base-hover": "#3e3e41",
            "base-active": "#39393d",
            "base-inactive": "#2d2d33",
            "base-disabled": "#343437",
            "brand-hover": "#284c89",
            "brand-active": "#365892",
            "brand-inactive": "#5a79af",
            "brand-disabled": "#4e6691",
            "danger-hover": "#572532",
            "danger-active": "#561f2d",
            "danger-inactive": "#4f171f",
            "danger-disabled": "#4f1f2a",
            "negative-hover": "#572532",
            "negative-active": "#561f2d",
            "negative-inactive": "#4f171f",
            "negative-disabled": "#4f1f2a",
            "warning-hover": "#564428",
            "warning-active": "#554220",
            "warning-inactive": "#4d3316",
            "warning-disabled": "#4d3d22",
            "success-hover": "#164b35",
            "success-active": "#174f3b",
            "success-inactive": "#2b5345",
            "success-disabled": "#274b3e",
            "positive-hover": "#164b35",
            "positive-active": "#174f3b",
            "positive-inactive": "#2b5345",
            "positive-disabled": "#274b3e",
            "info-hover": "#1c2860",
            "info-active": "#1d3065",
            "info-inactive": "#2a436f",
            "info-disabled": "#243a61",
            "discovery-hover": "#442e68",
            "discovery-active": "#3f2566",
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
      subtitle={"High-emphasis neutral data-series color."}
      colors={{
            "neutral.emphasis": "#595959",
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
      subtitle={"Subtle color for hairline borders and separators."}
      colors={{
            "hairline": "#ababab"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Subtle color for hairline borders and separators. (active, 11% darker)"}
      colors={{
            "hairline-active": "#989898"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Subtle color for hairline borders and separators. (hover, 23% darker)"}
      colors={{
            "hairline-hover": "#848484"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Subtle color for hairline borders and separators. (inactive, 20% brighter)"}
      colors={{
            "hairline-inactive": "#d0d0d0"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Primary text and icon color for high-emphasis content."}
      colors={{
            "emphasis": "#444548",
            "body": "#595959",
            "subtle": "#6a6a6a"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Interactive color for links and linked text."}
      colors={{
            "link": "#45649b"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Interactive color for links and linked text. (active, 11% darker)"}
      colors={{
            "link-active": "#365892"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Interactive color for links and linked text. (hover, 23% darker)"}
      colors={{
            "link-hover": "#284c89"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Interactive color for links and linked text. (inactive, 20% brighter)"}
      colors={{
            "link-inactive": "#5a79af"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Surface color for floating overlays."}
      colors={{
            "background": "#d9d9d9",
            "border": "#ababab",
            "backdrop": "#373a3d66"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields."}
      colors={{
            "required": "#864254"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface for inset controls and grouped content."}
      colors={{
            "sunken": "#c4c4c4",
            "canvas": "#cacaca",
            "elevated": "#cfcfcf",
            "floating": "#d5d5d5",
            "overlay": "#d9d9d9",
            "sunken-hover": "#969696",
            "sunken-active": "#adadad",
            "sunken-inactive": "#d9d9d9",
            "sunken-disabled": "#c4c4c466",
            "canvas-hover": "#9a9a9a",
            "canvas-active": "#b2b2b2",
            "canvas-inactive": "#d9d9d9",
            "canvas-disabled": "#cacaca66",
            "elevated-hover": "#9e9e9e",
            "elevated-active": "#b6b6b6",
            "elevated-inactive": "#d9d9d9",
            "elevated-disabled": "#cfcfcf66",
            "floating-hover": "#a3a3a3",
            "floating-active": "#bbbbbb",
            "floating-inactive": "#d9d9d9",
            "floating-disabled": "#d5d5d566",
            "overlay-hover": "#a6a6a6",
            "overlay-active": "#bfbfbf",
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
      subtitle={"Primary neutral accent for emphasized controls and content."}
      colors={{
            "base": "#000000",
            "brand": "#0145be",
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
            "brand-hover": "#00235e",
            "brand-active": "#00348e",
            "brand-inactive": "#216df4",
            "brand-disabled": "#1449a9",
            "danger-hover": "#2d000f",
            "danger-active": "#5a001b",
            "danger-inactive": "#bc2445",
            "danger-disabled": "#7b182d",
            "negative-hover": "#2d000f",
            "negative-active": "#5a001b",
            "negative-inactive": "#bc2445",
            "negative-disabled": "#7b182d",
            "warning-hover": "#0b0700",
            "warning-active": "#211600",
            "warning-inactive": "#92661d",
            "warning-disabled": "#5c4012",
            "success-hover": "#000000",
            "success-active": "#002017",
            "success-inactive": "#298565",
            "success-disabled": "#1b533f",
            "positive-hover": "#000000",
            "positive-active": "#002017",
            "positive-inactive": "#298565",
            "positive-disabled": "#1b533f",
            "info-hover": "#00235e",
            "info-active": "#00348e",
            "info-inactive": "#216df4",
            "info-disabled": "#1449a9",
            "discovery-hover": "#280e61",
            "discovery-active": "#391c7e",
            "discovery-inactive": "#6c4ec9",
            "discovery-disabled": "#48328a"
      }}
    />
          <ColorItem
      title={"color.muted"}
      subtitle={"Muted neutral accent background for low-emphasis states."}
      colors={{
            "base": "#ffffff",
            "brand": "#f8fbff",
            "base-hover": "#999999",
            "base-active": "#d7d7d7",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#7297d9",
            "brand-active": "#a9c5f6",
            "brand-inactive": "#ffffff",
            "brand-disabled": "#f1f6ff",
            "danger": "#fc7d94",
            "negative": "#fc7d94",
            "warning": "#d6a252",
            "success": "#61c6a0",
            "positive": "#61c6a0",
            "info": "#92baff",
            "discovery": "#b9a6fa",
            "danger-hover": "#c12747",
            "danger-active": "#e34c69",
            "danger-inactive": "#ffe1e7",
            "danger-disabled": "#ef8697",
            "negative-hover": "#c12747",
            "negative-active": "#e34c69",
            "negative-inactive": "#ffe1e7",
            "negative-disabled": "#ef8697",
            "warning-hover": "#865c15",
            "warning-active": "#b3802e",
            "warning-inactive": "#ffddaa",
            "warning-disabled": "#cda567",
            "success-hover": "#207859",
            "success-active": "#3ca37d",
            "success-inactive": "#b5f5dc",
            "success-disabled": "#74c2a3",
            "positive-hover": "#207859",
            "positive-active": "#3ca37d",
            "positive-inactive": "#b5f5dc",
            "positive-disabled": "#74c2a3",
            "info-hover": "#1864e9",
            "info-active": "#4a8bff",
            "info-inactive": "#d1e9ff",
            "info-disabled": "#8ab5ff",
            "discovery-hover": "#6a4ac7",
            "discovery-active": "#8f75e3",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#b3a4ee"
      }}
    />
          <ColorItem
      title={"color.on-accent"}
      subtitle={"Content color placed on neutral accent backgrounds."}
      colors={{
            "base": "#ffffff",
            "base-hover": "#9f9f9f",
            "base-active": "#e0e0e0",
            "base-inactive": "#ffffff",
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
            "brand-active": "#fbfbfb",
            "brand-inactive": "#ffffff",
            "brand-disabled": "#ffffff66",
            "danger-hover": "#c9c9c9",
            "danger-active": "#fbfbfb",
            "danger-inactive": "#ffffff",
            "danger-disabled": "#ffffff66",
            "negative-hover": "#c9c9c9",
            "negative-active": "#fbfbfb",
            "negative-inactive": "#ffffff",
            "negative-disabled": "#ffffff66",
            "warning-hover": "#c9c9c9",
            "warning-active": "#fbfbfb",
            "warning-inactive": "#ffffff",
            "warning-disabled": "#ffffff66",
            "success-hover": "#c9c9c9",
            "success-active": "#fbfbfb",
            "success-inactive": "#ffffff",
            "success-disabled": "#ffffff66",
            "positive-hover": "#c9c9c9",
            "positive-active": "#fbfbfb",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#ffffff66",
            "info-hover": "#c9c9c9",
            "info-active": "#fbfbfb",
            "info-inactive": "#ffffff",
            "info-disabled": "#ffffff66",
            "discovery-hover": "#c9c9c9",
            "discovery-active": "#fbfbfb",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#ffffff66"
      }}
    />
          <ColorItem
      title={"color.on-muted"}
      subtitle={"Generated base foreground on muted backgrounds"}
      colors={{
            "base": "#000000",
            "brand": "#0145be",
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
            "brand-hover": "#00235e",
            "brand-active": "#00348e",
            "brand-inactive": "#216df4",
            "brand-disabled": "#1449a9",
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
            "discovery-active": "#060010",
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
      subtitle={"High-emphasis neutral data-series color."}
      colors={{
            "neutral.emphasis": "#2f2f2f",
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
      subtitle={"Subtle color for hairline borders and separators."}
      colors={{
            "hairline": "#dadada"
      }}
    />
          <ColorItem
      title={"color.hairline-active"}
      subtitle={"Subtle color for hairline borders and separators. (active, 11% darker)"}
      colors={{
            "hairline-active": "#b2b2b2"
      }}
    />
          <ColorItem
      title={"color.hairline-hover"}
      subtitle={"Subtle color for hairline borders and separators. (hover, 23% darker)"}
      colors={{
            "hairline-hover": "#898989"
      }}
    />
          <ColorItem
      title={"color.hairline-inactive"}
      subtitle={"Subtle color for hairline borders and separators. (inactive, 20% brighter)"}
      colors={{
            "hairline-inactive": "#ffffff"
      }}
    />
          <ColorItem
      title={"color.ink"}
      subtitle={"Primary text and icon color for high-emphasis content."}
      colors={{
            "emphasis": "#08080a",
            "body": "#2f2f2f",
            "subtle": "#535353"
      }}
    />
          <ColorItem
      title={"color.link"}
      subtitle={"Interactive color for links and linked text."}
      colors={{
            "link": "#0145be"
      }}
    />
          <ColorItem
      title={"color.link-active"}
      subtitle={"Interactive color for links and linked text. (active, 11% darker)"}
      colors={{
            "link-active": "#00348e"
      }}
    />
          <ColorItem
      title={"color.link-hover"}
      subtitle={"Interactive color for links and linked text. (hover, 23% darker)"}
      colors={{
            "link-hover": "#00235e"
      }}
    />
          <ColorItem
      title={"color.link-inactive"}
      subtitle={"Interactive color for links and linked text. (inactive, 20% brighter)"}
      colors={{
            "link-inactive": "#216df4"
      }}
    />
          <ColorItem
      title={"color.overlay"}
      subtitle={"Surface color for floating overlays."}
      colors={{
            "background": "#ffffff",
            "border": "#dadada",
            "backdrop": "#00000066"
      }}
    />
          <ColorItem
      title={"color.required"}
      subtitle={"Indicator color for required form fields."}
      colors={{
            "required": "#840929"
      }}
    />
          <ColorItem
      title={"color.surface"}
      subtitle={"Recessed surface for inset controls and grouped content."}
      colors={{
            "sunken": "#ffffff",
            "canvas": "#ffffff",
            "elevated": "#ffffff",
            "floating": "#ffffff",
            "overlay": "#ffffff",
            "sunken-hover": "#afafaf",
            "sunken-active": "#dddddd",
            "sunken-inactive": "#ffffff",
            "sunken-disabled": "#ffffff66",
            "canvas-hover": "#b7b7b7",
            "canvas-active": "#e9e9e9",
            "canvas-inactive": "#ffffff",
            "canvas-disabled": "#ffffff66",
            "elevated-hover": "#bfbfbf",
            "elevated-active": "#f1f1f1",
            "elevated-inactive": "#ffffff",
            "elevated-disabled": "#ffffff66",
            "floating-hover": "#c9c9c9",
            "floating-active": "#fbfbfb",
            "floating-inactive": "#ffffff",
            "floating-disabled": "#ffffff66",
            "overlay-hover": "#cfcfcf",
            "overlay-active": "#ffffff",
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
  /** Generated token-set name. Defaults to Storybook's `theme` global. */
  theme?: string;
}

export function ColorPaletteBlock({ theme }: ColorPaletteBlockProps = {}) {
  const activeTheme = useThemeVariant(COLOR_VARIANTS, "dark", theme);

  return COLOR_VARIANTS[activeTheme];
}
