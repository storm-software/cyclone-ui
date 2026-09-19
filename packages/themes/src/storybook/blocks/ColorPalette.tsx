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
            "info": "#2e7aff",
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
            "info-hover": "#59a7ff",
            "info-active": "#4490ff",
            "info-inactive": "#0052d4",
            "info-disabled": "#447fe7",
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
            "danger": "#7e0019",
            "negative": "#7e0019",
            "warning": "#9e5800",
            "success": "#007948",
            "positive": "#007948",
            "info": "#0038ba",
            "discovery": "#593b98",
            "danger-hover": "#9a2730",
            "danger-active": "#8c1724",
            "danger-inactive": "#650004",
            "danger-disabled": "#741c23",
            "negative-hover": "#9a2730",
            "negative-active": "#8c1724",
            "negative-inactive": "#650004",
            "negative-disabled": "#741c23",
            "warning-hover": "#c57c36",
            "warning-active": "#b16a21",
            "warning-inactive": "#7c3900",
            "warning-disabled": "#955d29",
            "success-hover": "#3a9c68",
            "success-active": "#248a58",
            "success-inactive": "#005b2d",
            "success-disabled": "#2c754e",
            "positive-hover": "#3a9c68",
            "positive-active": "#248a58",
            "positive-inactive": "#005b2d",
            "positive-disabled": "#2c754e",
            "info-hover": "#1d57da",
            "info-active": "#0f48ca",
            "info-inactive": "#00169e",
            "info-disabled": "#1541a4",
            "discovery-hover": "#7458b8",
            "discovery-active": "#664aa8",
            "discovery-inactive": "#42207c",
            "discovery-disabled": "#57428a"
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
            "success": "#151518",
            "positive": "#151518",
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
            "success-hover": "#1f1f22",
            "success-active": "#1a1a1d",
            "success-inactive": "#0c0c0f",
            "success-disabled": "#151517",
            "positive-hover": "#1f1f22",
            "positive-active": "#1a1a1d",
            "positive-inactive": "#0c0c0f",
            "positive-disabled": "#151517",
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
            "danger": "#ff7e9a",
            "negative": "#ff7e9a",
            "warning": "#ffef77",
            "success": "#9bffdd",
            "positive": "#9bffdd",
            "info": "#6dbcff",
            "discovery": "#cdb3ff",
            "base-hover": "#9b9b9b",
            "base-active": "#c9c9c9",
            "base-inactive": "#ffffff",
            "base-disabled": "#fafafa66",
            "brand-hover": "#00a785",
            "brand-active": "#00c5a1",
            "brand-inactive": "#81fff4",
            "brand-disabled": "#6adfc0",
            "danger-hover": "#ffb4cf",
            "danger-active": "#ff99b4",
            "danger-inactive": "#ca4f6d",
            "danger-disabled": "#f18a9e",
            "negative-hover": "#ffb4cf",
            "negative-active": "#ff99b4",
            "negative-inactive": "#ca4f6d",
            "negative-disabled": "#f18a9e",
            "warning-hover": "#baaa27",
            "warning-active": "#dccc52",
            "warning-inactive": "#ffff8b",
            "warning-disabled": "#fbef93",
            "success-hover": "#55ba9b",
            "success-active": "#78dcbb",
            "success-inactive": "#b3fff4",
            "success-disabled": "#adfbdf",
            "positive-hover": "#55ba9b",
            "positive-active": "#78dcbb",
            "positive-inactive": "#b3fff4",
            "positive-disabled": "#adfbdf",
            "info-hover": "#3585c5",
            "info-active": "#51a0e2",
            "info-inactive": "#9fefff",
            "info-disabled": "#7ebbf1",
            "discovery-hover": "#947ac2",
            "discovery-active": "#b096e0",
            "discovery-inactive": "#ffe8ff",
            "discovery-disabled": "#cbb7f3"
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
            "body": "#dcdcdc",
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
            "info": "#527fcd",
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
            "info-hover": "#6a9bd4",
            "info-active": "#5e8dd0",
            "info-inactive": "#3362ae",
            "info-disabled": "#5f82bf",
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
            "danger": "#802537",
            "negative": "#802537",
            "warning": "#91632a",
            "success": "#247d59",
            "positive": "#247d59",
            "info": "#2f51a0",
            "discovery": "#66558b",
            "danger-hover": "#8c474d",
            "danger-active": "#853a42",
            "danger-inactive": "#722124",
            "danger-disabled": "#763b40",
            "negative-hover": "#8c474d",
            "negative-active": "#853a42",
            "negative-inactive": "#722124",
            "negative-disabled": "#763b40",
            "warning-hover": "#a67d57",
            "warning-active": "#9a7046",
            "warning-inactive": "#7f4e25",
            "warning-disabled": "#896848",
            "success-hover": "#558e6f",
            "success-active": "#438364",
            "success-inactive": "#206d46",
            "success-disabled": "#47765d",
            "positive-hover": "#558e6f",
            "positive-active": "#438364",
            "positive-inactive": "#206d46",
            "positive-disabled": "#47765d",
            "info-hover": "#4868b1",
            "info-active": "#3c5da8",
            "info-inactive": "#2a3891",
            "info-disabled": "#3b5693",
            "discovery-hover": "#7a6aa0",
            "discovery-active": "#706195",
            "discovery-inactive": "#553f7b",
            "discovery-disabled": "#655883"
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
            "success": "#343438",
            "positive": "#343438",
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
            "success-hover": "#3b3b3f",
            "success-active": "#38383b",
            "success-inactive": "#2d2d33",
            "success-disabled": "#343437",
            "positive-hover": "#3b3b3f",
            "positive-active": "#38383b",
            "positive-inactive": "#2d2d33",
            "positive-disabled": "#343437",
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
            "danger": "#d97e92",
            "negative": "#d97e92",
            "warning": "#d8cd7a",
            "success": "#8ddec3",
            "positive": "#8ddec3",
            "info": "#75aad7",
            "discovery": "#b39ae2",
            "base-hover": "#939393",
            "base-active": "#b3b3b3",
            "base-inactive": "#d9d9d9",
            "base-disabled": "#d5d5d566",
            "brand-hover": "#2c9680",
            "brand-active": "#30a691",
            "brand-inactive": "#7fdad2",
            "brand-disabled": "#75beaa",
            "danger-hover": "#e29bb5",
            "danger-active": "#de8ca2",
            "danger-inactive": "#ac6677",
            "danger-disabled": "#cf8795",
            "negative-hover": "#e29bb5",
            "negative-active": "#de8ca2",
            "negative-inactive": "#ac6677",
            "negative-disabled": "#cf8795",
            "warning-hover": "#9f964b",
            "warning-active": "#b8af67",
            "warning-inactive": "#dcdc85",
            "warning-disabled": "#d9d08a",
            "success-hover": "#69a190",
            "success-active": "#7ebda8",
            "success-inactive": "#9ae2d7",
            "success-disabled": "#99ddc4",
            "positive-hover": "#69a190",
            "positive-active": "#7ebda8",
            "positive-inactive": "#9ae2d7",
            "positive-disabled": "#99ddc4",
            "info-hover": "#5682a6",
            "info-active": "#6796bd",
            "info-inactive": "#90d1df",
            "info-disabled": "#80a9ce",
            "discovery-hover": "#8f7fab",
            "discovery-active": "#a28fc3",
            "discovery-inactive": "#eab7ea",
            "discovery-disabled": "#b2a1d6"
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
            "body": "#c0c0c0",
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
            "info": "#4387ff",
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
            "info-hover": "#81bcff",
            "info-active": "#63a2ff",
            "info-inactive": "#004bc1",
            "info-disabled": "#4085ff",
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
            "danger": "#44000d",
            "negative": "#44000d",
            "warning": "#724000",
            "success": "#003d24",
            "positive": "#003d24",
            "info": "#002f9b",
            "discovery": "#4a229d",
            "danger-hover": "#990c17",
            "danger-active": "#7a000e",
            "danger-inactive": "#200001",
            "danger-disabled": "#58060c",
            "negative-hover": "#990c17",
            "negative-active": "#7a000e",
            "negative-inactive": "#200001",
            "negative-disabled": "#58060c",
            "warning-hover": "#e37a17",
            "warning-active": "#bb6002",
            "warning-inactive": "#411e00",
            "warning-disabled": "#924e0f",
            "success-hover": "#20a35e",
            "success-active": "#0b7f46",
            "success-inactive": "#001109",
            "success-disabled": "#146339",
            "positive-hover": "#20a35e",
            "positive-active": "#0b7f46",
            "positive-inactive": "#001109",
            "positive-disabled": "#146339",
            "info-hover": "#004bf3",
            "info-active": "#003dc8",
            "info-inactive": "#001072",
            "info-disabled": "#002f9a",
            "discovery-hover": "#6f47d0",
            "discovery-active": "#5b32ba",
            "discovery-inactive": "#2b0967",
            "discovery-disabled": "#472b8a"
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
            "success": "#000000",
            "positive": "#000000",
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
            "success-hover": "#000000",
            "success-active": "#000000",
            "success-inactive": "#000000",
            "success-disabled": "#000000",
            "positive-hover": "#000000",
            "positive-active": "#000000",
            "positive-inactive": "#000000",
            "positive-disabled": "#000000",
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
            "danger": "#ffb7c6",
            "negative": "#ffb7c6",
            "warning": "#fff5ad",
            "success": "#e1fff5",
            "positive": "#e1fff5",
            "info": "#9ed3ff",
            "discovery": "#ffffff",
            "base-hover": "#a7a7a7",
            "base-active": "#eaeaea",
            "base-inactive": "#ffffff",
            "base-disabled": "#ffffff66",
            "brand-hover": "#007f65",
            "brand-active": "#00ab8c",
            "brand-inactive": "#bbfff9",
            "brand-disabled": "#71f9d5",
            "danger-hover": "#ffffff",
            "danger-active": "#ffdee7",
            "danger-inactive": "#e73e67",
            "danger-disabled": "#ffb4c2",
            "negative-hover": "#ffffff",
            "negative-active": "#ffdee7",
            "negative-inactive": "#e73e67",
            "negative-disabled": "#ffb4c2",
            "warning-hover": "#ccb707",
            "warning-active": "#fae549",
            "warning-inactive": "#ffffca",
            "warning-disabled": "#fffacf",
            "success-hover": "#43d3a7",
            "success-active": "#86f5d0",
            "success-inactive": "#ffffff",
            "success-disabled": "#f5fffb",
            "positive-hover": "#43d3a7",
            "positive-active": "#86f5d0",
            "positive-inactive": "#ffffff",
            "positive-disabled": "#f5fffb",
            "info-hover": "#1587e2",
            "info-active": "#4badff",
            "info-inactive": "#e7fbff",
            "info-disabled": "#a2d4ff",
            "discovery-hover": "#9f7eda",
            "discovery-active": "#ccb5f6",
            "discovery-inactive": "#ffffff",
            "discovery-disabled": "#faf8ff"
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
            "body": "#ffffff",
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
            "danger": "#d56479",
            "negative": "#d56479",
            "warning": "#b08c52",
            "success": "#5ea48a",
            "positive": "#5ea48a",
            "info": "#5790f3",
            "discovery": "#8f7bd3",
            "danger-hover": "#a43750",
            "danger-active": "#bc4e64",
            "danger-inactive": "#ff8ca0",
            "danger-disabled": "#c96e7d",
            "negative-hover": "#a43750",
            "negative-active": "#bc4e64",
            "negative-inactive": "#ff8ca0",
            "negative-disabled": "#c96e7d",
            "warning-hover": "#826025",
            "warning-active": "#99763c",
            "warning-inactive": "#dbb57a",
            "warning-disabled": "#aa8e61",
            "success-hover": "#2f775e",
            "success-active": "#478d74",
            "success-inactive": "#88ceb3",
            "success-disabled": "#6ba18c",
            "positive-hover": "#2f775e",
            "positive-active": "#478d74",
            "positive-inactive": "#88ceb3",
            "positive-disabled": "#6ba18c",
            "info-hover": "#2c62c0",
            "info-active": "#4179da",
            "info-inactive": "#7fbbff",
            "info-disabled": "#6492e0",
            "discovery-hover": "#6650a4",
            "discovery-active": "#7a65bb",
            "discovery-inactive": "#b6a3fe",
            "discovery-disabled": "#8e7fc5"
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
            "danger": "#49000b",
            "negative": "#49000b",
            "warning": "#432300",
            "success": "#003622",
            "positive": "#003622",
            "info": "#001d79",
            "discovery": "#2a095b",
            "base-hover": "#232326",
            "base-active": "#1c1c1f",
            "base-inactive": "#0c0c0f",
            "base-disabled": "#151517",
            "brand-hover": "#003590",
            "brand-active": "#0f45a2",
            "brand-inactive": "#3b72d3",
            "brand-disabled": "#2f58a2",
            "danger-hover": "#380001",
            "danger-active": "#400005",
            "danger-inactive": "#591117",
            "danger-disabled": "#430c11",
            "negative-hover": "#380001",
            "negative-active": "#400005",
            "negative-inactive": "#591117",
            "negative-disabled": "#430c11",
            "warning-hover": "#311300",
            "warning-active": "#3a1b00",
            "warning-inactive": "#533210",
            "warning-disabled": "#3f250c",
            "success-hover": "#002512",
            "success-active": "#002d1a",
            "success-inactive": "#144631",
            "success-disabled": "#0f3424",
            "positive-hover": "#002512",
            "positive-active": "#002d1a",
            "positive-inactive": "#144631",
            "positive-disabled": "#0f3424",
            "info-hover": "#000164",
            "info-active": "#00116f",
            "info-inactive": "#0b308c",
            "info-disabled": "#08246a",
            "discovery-hover": "#1d004a",
            "discovery-active": "#240052",
            "discovery-inactive": "#361b6b",
            "discovery-disabled": "#281450"
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
            "danger": "#b6727f",
            "negative": "#b6727f",
            "warning": "#9a8767",
            "success": "#6d9486",
            "positive": "#6d9486",
            "info": "#698dca",
            "discovery": "#8c80b7",
            "danger-hover": "#925362",
            "danger-active": "#a26571",
            "danger-inactive": "#dc8594",
            "danger-disabled": "#ae7881",
            "negative-hover": "#925362",
            "negative-active": "#a26571",
            "negative-inactive": "#dc8594",
            "negative-disabled": "#ae7881",
            "warning-hover": "#7e6943",
            "warning-active": "#8c7756",
            "warning-inactive": "#bca47f",
            "warning-disabled": "#98886f",
            "success-hover": "#497767",
            "success-active": "#5c8576",
            "success-inactive": "#88b4a3",
            "success-disabled": "#759387",
            "positive-hover": "#497767",
            "positive-active": "#5c8576",
            "positive-inactive": "#88b4a3",
            "positive-disabled": "#759387",
            "info-hover": "#4f6ea3",
            "info-active": "#5e7eb5",
            "info-inactive": "#7ea9da",
            "info-disabled": "#728ebe",
            "discovery-hover": "#716493",
            "discovery-active": "#7e72a4",
            "discovery-inactive": "#a292de",
            "discovery-disabled": "#8b82ad"
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
            "danger": "#631d27",
            "negative": "#631d27",
            "warning": "#603f1c",
            "success": "#1a5941",
            "positive": "#1a5941",
            "info": "#243a7d",
            "discovery": "#43286a",
            "base-hover": "#3e3e41",
            "base-active": "#39393d",
            "base-inactive": "#2d2d33",
            "base-disabled": "#343437",
            "brand-hover": "#284c89",
            "brand-active": "#365892",
            "brand-inactive": "#5a79af",
            "brand-disabled": "#4e6691",
            "danger-hover": "#5a1a1b",
            "danger-active": "#5e1b21",
            "danger-inactive": "#672f34",
            "danger-disabled": "#5b292d",
            "negative-hover": "#5a1a1b",
            "negative-active": "#5e1b21",
            "negative-inactive": "#672f34",
            "negative-disabled": "#5b292d",
            "warning-hover": "#563119",
            "warning-active": "#5b381a",
            "warning-inactive": "#64492e",
            "warning-disabled": "#594028",
            "success-hover": "#174f32",
            "success-active": "#18543b",
            "success-inactive": "#305b49",
            "success-disabled": "#2b5040",
            "positive-hover": "#174f32",
            "positive-active": "#18543b",
            "positive-inactive": "#305b49",
            "positive-disabled": "#2b5040",
            "info-hover": "#212272",
            "info-active": "#233078",
            "info-inactive": "#304986",
            "info-disabled": "#293e73",
            "discovery-hover": "#391d63",
            "discovery-active": "#3e1e68",
            "discovery-inactive": "#4c3971",
            "discovery-disabled": "#413161"
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
            "danger": "#f0637d",
            "negative": "#f0637d",
            "warning": "#c7923c",
            "success": "#4cb78f",
            "positive": "#4cb78f",
            "info": "#6da2ff",
            "discovery": "#9d86ec",
            "danger-hover": "#af1c3e",
            "danger-active": "#d63958",
            "danger-inactive": "#ffcbd4",
            "danger-disabled": "#e26e81",
            "negative-hover": "#af1c3e",
            "negative-active": "#d63958",
            "negative-inactive": "#ffcbd4",
            "negative-disabled": "#e26e81",
            "warning-hover": "#734d0d",
            "warning-active": "#9f7023",
            "warning-inactive": "#f4c988",
            "warning-disabled": "#be9552",
            "success-hover": "#17674b",
            "success-active": "#31906e",
            "success-inactive": "#97e6c8",
            "success-disabled": "#5fb292",
            "positive-hover": "#17674b",
            "positive-active": "#31906e",
            "positive-inactive": "#97e6c8",
            "positive-disabled": "#5fb292",
            "info-hover": "#0c56d8",
            "info-active": "#2d78fb",
            "info-inactive": "#b8d9ff",
            "info-disabled": "#689ffb",
            "discovery-hover": "#5a3ab5",
            "discovery-active": "#795cd3",
            "discovery-inactive": "#efebff",
            "discovery-disabled": "#9986dd"
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
            "info": "#000f3d",
            "discovery": "#0c001e",
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
            "danger-inactive": "#260104",
            "danger-disabled": "#000000",
            "negative-hover": "#000000",
            "negative-active": "#000000",
            "negative-inactive": "#260104",
            "negative-disabled": "#000000",
            "warning-hover": "#000000",
            "warning-active": "#000000",
            "warning-inactive": "#1c0f01",
            "warning-disabled": "#000000",
            "success-hover": "#000000",
            "success-active": "#000000",
            "success-inactive": "#020e09",
            "success-disabled": "#000000",
            "positive-hover": "#000000",
            "positive-active": "#000000",
            "positive-inactive": "#020e09",
            "positive-disabled": "#000000",
            "info-hover": "#00001e",
            "info-active": "#00072e",
            "info-inactive": "#001e68",
            "info-disabled": "#000e33",
            "discovery-hover": "#000000",
            "discovery-active": "#020004",
            "discovery-inactive": "#1d064a",
            "discovery-disabled": "#0b021c"
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
