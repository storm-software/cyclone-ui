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

import type { R2Bucket } from "@cloudflare/workers-types";

export type ComponentPlatform = "web" | "mobile" | "all";
export const ComponentPlatform = {
  WEB: "web" as ComponentPlatform,
  MOBILE: "mobile" as ComponentPlatform,
  ALL: "all" as ComponentPlatform
};

interface ComponentHeader {
  name: string;
  version?: string;
  release: string;
  tags: string[];
  description: string;
}

export interface ComponentSummary extends ComponentHeader {
  updatedOn: Date;
}

export interface ComponentMeta extends ComponentHeader {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  internalDependencies: string[];
}

export interface ComponentFile {
  name: string;
  content: string;
  checksum?: string;
  updatedOn: Date;
}

export interface ComponentDetails extends ComponentMeta {
  files: ComponentFile[];
}

export const HttpHeaders = {
  Version: "x-cyclone-version",
  Checksum: "x-cyclone-checksum"
};

export type Env = {
  STORAGE_BUCKET: R2Bucket;
};
