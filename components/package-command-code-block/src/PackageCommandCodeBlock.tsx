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

import {
  CodeBlock,
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  Pre
} from "@cyclone-ui/code-block";
import { useCallback, useEffect, useState } from "react";

const PACKAGE_MANAGERS = ["npm", "pnpm", "yarn", "bun"] as const;
const NI_COMMANDS = [
  "ni",
  "nr",
  "nlx",
  "nup",
  "nun",
  "nci",
  "nd",
  "na"
] as const;
const DEFAULT_PACKAGE_MANAGER: PackageManager = "pnpm";
const PACKAGE_MANAGER_STORAGE_KEY = "cyclone-ui.package-manager";
const PACKAGE_MANAGER_CHANGE_EVENT = "cyclone-ui:package-manager-change";

export type PackageManager = (typeof PACKAGE_MANAGERS)[number];
export type NiCommand = (typeof NI_COMMANDS)[number];

export interface PackageCommandCodeBlockProps {
  /** The ni command to express. @defaultValue "ni" */
  command?: NiCommand;

  /** Arguments passed to the ni command. */
  args?: readonly string[];

  /** The package to install when no `args` are supplied. */
  packageName?: string;

  /** Install `packageName` as a development dependency. */
  dev?: boolean;
}

function isPackageManager(value: string | null): value is PackageManager {
  return PACKAGE_MANAGERS.includes(value as "npm" | "pnpm" | "yarn" | "bun");
}

function getStoredPackageManager(): PackageManager {
  if (typeof window === "undefined") {
    return DEFAULT_PACKAGE_MANAGER;
  }

  try {
    const packageManager = window.localStorage.getItem(
      PACKAGE_MANAGER_STORAGE_KEY
    );

    return isPackageManager(packageManager)
      ? packageManager
      : DEFAULT_PACKAGE_MANAGER;
  } catch {
    return DEFAULT_PACKAGE_MANAGER;
  }
}

function storePackageManager(packageManager: PackageManager) {
  try {
    window.localStorage.setItem(PACKAGE_MANAGER_STORAGE_KEY, packageManager);
  } catch {
    // Storage can be unavailable in private browsing or embedded documents.
  }

  window.dispatchEvent(new Event(PACKAGE_MANAGER_CHANGE_EVENT));
}

function serializeCommand(command: readonly string[]): string {
  return command
    .map(argument => (argument.includes(" ") ? `"${argument}"` : argument))
    .join(" ");
}

function getInstallCommand(
  packageManager: PackageManager,
  args: readonly string[]
): string {
  const normalizedArgs = args.map(argument => {
    if (argument === "-D" && packageManager === "bun") {
      return "-d";
    }

    if (argument === "-P") {
      return packageManager === "npm" ? "--omit=dev" : "--production";
    }

    return argument;
  });
  const withoutGlobal = normalizedArgs.filter(argument => argument !== "-g");

  if (normalizedArgs.includes("-g")) {
    switch (packageManager) {
      case "npm":
        return serializeCommand(["npm", "i", "-g", ...withoutGlobal]);
      case "pnpm":
        return serializeCommand(["pnpm", "add", "-g", ...withoutGlobal]);
      case "yarn":
        return serializeCommand(["yarn", "global", "add", ...withoutGlobal]);
      case "bun":
        return serializeCommand(["bun", "add", "-g", ...withoutGlobal]);
    }
  }

  const frozen = normalizedArgs.includes("--frozen");
  const commandArgs = normalizedArgs.filter(
    argument => argument !== "--frozen"
  );

  if (frozen) {
    switch (packageManager) {
      case "npm":
        return serializeCommand(["npm", "ci", ...commandArgs]);
      case "pnpm":
        return serializeCommand([
          "pnpm",
          "install",
          "--frozen-lockfile",
          ...commandArgs
        ]);
      case "yarn":
        return serializeCommand([
          "yarn",
          "install",
          "--frozen-lockfile",
          ...commandArgs
        ]);
      case "bun":
        return serializeCommand([
          "bun",
          "install",
          "--frozen-lockfile",
          ...commandArgs
        ]);
    }
  }

  const install =
    commandArgs.length === 0 ||
    commandArgs.every(argument => argument.startsWith("-"));

  if (install) {
    return serializeCommand([packageManager, "install", ...commandArgs]);
  }

  return serializeCommand([
    packageManager,
    packageManager === "npm" ? "i" : "add",
    ...commandArgs
  ]);
}

function getPackageCommand(
  packageManager: PackageManager,
  command: NiCommand,
  args: readonly string[]
): string | undefined {
  switch (command) {
    case "ni":
      return getInstallCommand(packageManager, args);
    case "nci":
      return getInstallCommand(packageManager, [...args, "--frozen"]);
    case "na":
      return serializeCommand([packageManager, ...args]);
    case "nr": {
      const [script, ...scriptArgs] = args;

      if (packageManager === "npm") {
        return serializeCommand([
          "npm",
          "run",
          ...(script ? [script] : []),
          ...(scriptArgs.length > 0 ? ["--", ...scriptArgs] : [])
        ]);
      }

      return serializeCommand([
        packageManager,
        "run",
        ...(script ? [script] : []),
        ...scriptArgs
      ]);
    }
    case "nlx": {
      const local = args.includes("--local");
      const commandArgs = args.filter(argument => argument !== "--local");

      switch (packageManager) {
        case "npm":
          return serializeCommand(["npx", ...commandArgs]);
        case "pnpm":
          return serializeCommand([
            "pnpm",
            local ? "exec" : "dlx",
            ...commandArgs
          ]);
        case "yarn":
          return serializeCommand([
            "yarn",
            local ? "exec" : "dlx",
            ...commandArgs
          ]);
        case "bun":
          return serializeCommand(["bunx", ...commandArgs]);
      }
    }
    case "nup": {
      const interactive = args.includes("-i");
      const commandArgs = args.filter(argument => argument !== "-i");

      if (packageManager === "npm" && interactive) {
        return undefined;
      }

      if (packageManager === "yarn") {
        return serializeCommand([
          "yarn",
          interactive ? "upgrade-interactive" : "upgrade",
          ...commandArgs
        ]);
      }

      return serializeCommand([
        packageManager,
        "update",
        ...(interactive ? ["-i"] : []),
        ...commandArgs
      ]);
    }
    case "nun": {
      const global = args.includes("-g");
      const commandArgs = args.filter(argument => argument !== "-g");

      if (!global) {
        return serializeCommand([
          packageManager,
          packageManager === "npm" ? "uninstall" : "remove",
          ...commandArgs
        ]);
      }

      switch (packageManager) {
        case "npm":
          return serializeCommand(["npm", "uninstall", "-g", ...commandArgs]);
        case "pnpm":
          return serializeCommand(["pnpm", "remove", "-g", ...commandArgs]);
        case "yarn":
          return serializeCommand(["yarn", "global", "remove", ...commandArgs]);
        case "bun":
          return serializeCommand(["bun", "remove", "-g", ...commandArgs]);
      }
    }
    case "nd":
      if (packageManager === "bun") {
        return undefined;
      }

      return serializeCommand([packageManager, "dedupe", ...args]);
  }
}

/**
 * An install-command code block that remembers the visitor's package manager.
 */
export function PackageCommandCodeBlock({
  command = "ni",
  args,
  packageName,
  dev = false
}: PackageCommandCodeBlockProps) {
  const [packageManager, setPackageManager] = useState(DEFAULT_PACKAGE_MANAGER);

  useEffect(() => {
    const syncPackageManager = () => {
      setPackageManager(getStoredPackageManager());
    };
    const syncStorageEvent = (event: StorageEvent) => {
      if (event.key === PACKAGE_MANAGER_STORAGE_KEY) {
        syncPackageManager();
      }
    };

    syncPackageManager();
    window.addEventListener(PACKAGE_MANAGER_CHANGE_EVENT, syncPackageManager);
    window.addEventListener("storage", syncStorageEvent);

    return () => {
      window.removeEventListener(
        PACKAGE_MANAGER_CHANGE_EVENT,
        syncPackageManager
      );
      window.removeEventListener("storage", syncStorageEvent);
    };
  }, []);

  const handlePackageManagerChange = useCallback((value: string) => {
    if (!isPackageManager(value)) {
      return;
    }

    setPackageManager(value);
    storePackageManager(value);
  }, []);

  const commandArgs =
    args ??
    (command === "ni" && packageName
      ? [packageName, ...(dev ? ["-D"] : [])]
      : []);
  const packageCommands = PACKAGE_MANAGERS.flatMap(packageManager => {
    const packageCommand = getPackageCommand(
      packageManager,
      command,
      commandArgs
    );

    return packageCommand ? [{ packageManager, packageCommand }] : [];
  });
  const selectedPackageManager = packageCommands.some(
    ({ packageManager: availablePackageManager }) =>
      availablePackageManager === packageManager
  )
    ? packageManager
    : packageCommands[0]?.packageManager;

  if (!selectedPackageManager) {
    return null;
  }

  return (
    <CodeBlockTabs
      value={selectedPackageManager}
      onValueChange={handlePackageManagerChange}>
      <CodeBlockTabsList aria-label="Package manager">
        {packageCommands.map(({ packageManager: availablePackageManager }) => (
          <CodeBlockTabsTrigger
            key={availablePackageManager}
            value={availablePackageManager}>
            {availablePackageManager}
          </CodeBlockTabsTrigger>
        ))}
      </CodeBlockTabsList>
      {packageCommands.map(({ packageManager, packageCommand }) => (
        <CodeBlockTab key={packageManager} value={packageManager}>
          <CodeBlock allowCopy={true}>
            <Pre>
              <code>{packageCommand}</code>
            </Pre>
          </CodeBlock>
        </CodeBlockTab>
      ))}
    </CodeBlockTabs>
  );
}
