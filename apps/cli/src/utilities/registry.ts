/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import {
  createRegistryClient,
  type RegistryClient
} from "@cyclone-ui/registry-api/client";

export function registryClient(url: string): RegistryClient {
  try {
    return createRegistryClient(new URL(url).toString().replace(/\/$/, ""));
  } catch {
    throw new Error(`Invalid registry URL: ${url}`);
  }
}

export type CycloneRegistryClient = RegistryClient;

export function normalizeComponentName(name: string): string {
  return name.replace(/^@cyclone-ui\//, "");
}
