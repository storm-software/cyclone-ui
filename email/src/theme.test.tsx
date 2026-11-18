/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { render } from "react-email";
import { expect, it } from "vitest";
import {
  BodyText,
  Button,
  Callout,
  Card,
  Divider,
  EmailLayout,
  HeadingText
} from "./components";

// Email clients can't read CSS variables or `rem`, so every inlined token
// value must be resolved.
it.each(["light", "dark"] as const)(
  "inlines resolved %s tokens",
  async mode => {
    const html = await render(
      <EmailLayout preview="Preview" companyName="Cyclone" mode={mode}>
        <Card>
          <HeadingText level="hero">Title</HeadingText>
          <BodyText size="xxs">Body</BodyText>
          <Divider size="lg" />
          <Callout theme="danger">
            <Button href="#" variant="outlined" theme="brand">
              Go
            </Button>
          </Callout>
        </Card>
      </EmailLayout>
    );
    const styles = html.match(/style="[^"]*"/g)!.join("\n");

    expect(styles).toContain("background-color:rgb(");
    expect(styles).not.toMatch(/var\(|\drem\b/);
  }
);
