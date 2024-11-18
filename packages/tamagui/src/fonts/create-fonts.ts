/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { createMonaSansFont } from "@cyclone-ui/font-mona-sans";
import { createPermanentMarkerFont } from "@cyclone-ui/font-permanent-marker";
import { createSpaceGroteskFont } from "@cyclone-ui/font-space-grotesk";

export const createFonts = () => {
  const titleFont = createPermanentMarkerFont(
    {
      transform: {
        6: "uppercase"
      }
    },
    45,
    "700"
  );
  const eyebrowFont = createPermanentMarkerFont(
    {
      transform: {
        6: "uppercase"
      }
    },
    22,
    "500"
  );

  const headingFont = createMonaSansFont({}, 32, "700");
  const labelFont = createMonaSansFont({}, 20, "550");
  const ctaFont = createMonaSansFont(
    {
      transform: {
        6: "uppercase"
      }
    },
    18,
    "550"
  );

  const bodyFont = createSpaceGroteskFont({}, 18, "300");

  return {
    title: titleFont,
    eyebrow: eyebrowFont,
    heading: headingFont,
    label: labelFont,
    cta: ctaFont,
    body: bodyFont
  };
};
