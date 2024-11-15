import { getSpaced } from "@cyclone-ui/theme-helpers";
import type { SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { createStyledContext } from "@tamagui/core";
import { SelectContextProps } from "./types";

export const SelectContext = createStyledContext<SelectContextProps>({
  size: "$true",
  circular: false,
  disabled: false,
  focused: false
});

export const getSelectSize = (
  val: SizeTokens | number,
  extras: VariantSpreadExtras<any>
) => {
  const { tokens, props } = extras;
  if (!val || props.circular) {
    return;
  }

  if (typeof val === "number") {
    return {
      paddingHorizontal: val * 0.25,
      height: val,
      borderRadius: props.circular ? 100_000 : val * 0.2
    };
  }

  const xSize = getSpaced(val);
  const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];

  return {
    paddingHorizontal: xSize,
    height: val,
    borderRadius: props.circular ? 100_000 : radiusToken
  };
};
