"use client";

import { useServerInsertedHTML } from "next/navigation";
import { TamaguiProvider } from "tamagui";

export function NextTamaguiProvider({ children }: { children: any }) {
  useServerInsertedHTML(() => {
    // the first time this runs you'll get the full CSS including all themes

    // after that, it will only return CSS generated since the last call

    return <style dangerouslySetInnerHTML={{ __html: Tamagui.getNewCSS() }} />;
  });
  // see Tamagui provider setup in the example above

  return <TamaguiProvider>{children}</TamaguiProvider>;
}
