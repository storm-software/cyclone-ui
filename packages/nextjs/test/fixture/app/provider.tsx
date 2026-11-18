"use client";
import { useState } from "react";
import { CycloneUIProvider } from "../../../src/provider";
export function FixtureProvider({ children }) {
  const [enableColorScheme, setEnableColorScheme] = useState(true);
  const [forcedTheme, setForcedTheme] = useState<string>();
  return (
    <CycloneUIProvider
      forcedTheme={forcedTheme}
      enableColorScheme={enableColorScheme}
      modeCookie="mode">
      <button onClick={() => setEnableColorScheme(false)}>
        Disable browser color scheme
      </button>
      <button onClick={() => setForcedTheme("dark")}>Force dark</button>
      <button onClick={() => setForcedTheme("light")}>Force light</button>
      <button onClick={() => setForcedTheme(undefined)}>Release theme</button>
      {children}
    </CycloneUIProvider>
  );
}
