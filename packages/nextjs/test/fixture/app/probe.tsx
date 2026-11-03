"use client";

import { useThemeMode } from "@cyclone-ui/state/theme";
import { View } from "@tamagui/core";
import { useSyncExternalStore } from "react";
import { useThemeSetting } from "../../../src/provider";
const subscribe = () => () => {};

export function Probe({ id = "mode" }: { id?: string }) {
  const theme = useThemeSetting();
  const mode = useThemeMode();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  return (
    <View backgroundColor="surface">
      <p id={id}>{mounted ? mode : null}</p>
      <button onClick={() => theme.set("light")}>Light</button>
      <button onClick={() => theme.set("dark")}>Dark</button>
      <button onClick={() => theme.set("system")}>System</button>
    </View>
  );
}
