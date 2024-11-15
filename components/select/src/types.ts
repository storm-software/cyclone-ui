import type { ColorTokens, SizeTokens } from "@tamagui/core";

export type SelectContextProps = {
  name?: string;
  size: SizeTokens;
  color?: ColorTokens | string;
  circular: boolean;
  disabled: boolean;
  focused: boolean;
};
