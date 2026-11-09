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

"use client";

// The `@tamagui/tailwind` variant of FileTree.tsx, installed in its place by
// `cyclone-ui init --style tailwind`. Keep the exports in sync.

import {
  ChevronRight,
  File as FileIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon
} from "@cyclone-ui/icons";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, Text, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef, KeyboardEvent, ReactNode } from "react";
import {
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  use,
  useContext,
  useState
} from "react";

const FileTreeFrame = styled(
  View,
  "w-full flex-col gap-lg rounded-container border-[1px] border-solid border-hairline bg-surface p-5xl",
  { displayName: "FileTree" }
);

const TreeNode = styled(
  View,
  "min-h-7xl flex-row items-center gap-xl rounded-sm px-lg py-xs hover:bg-secondary-hovered focus-visible:outline-[2px] focus-visible:outline-solid focus-visible:outline-primary-active",
  { displayName: "FileTreeNode" }
);

const TreeLabel = styled(Text, "font-code text-lg font-extralight", {
  displayName: "FileTreeLabel"
});

const TreeChildren = styled(
  View,
  // Zero the other widths first: a solid border style gives an unset width
  // the browser's 3px `medium`.
  "ml-2xl flex-col gap-lg border-[0px] border-l-[1px] border-solid border-l-hairline pl-2xl",
  { displayName: "FileTreeChildren" }
);

const FileTreeOpenContext = createContext(false);

const defaultFileIcon = <FileIcon aria-hidden size="2xl" />;

const defaultFolderIcon = <FolderIcon aria-hidden size="2xl" />;

const defaultFolderOpenIcon = <FolderOpenIcon aria-hidden size="2xl" />;

const getTreeIcon = (icon: ReactNode, color: string): ReactNode =>
  isValidElement<{ color?: string }>(icon)
    ? // eslint-disable-next-line react/no-clone-element
      cloneElement(icon, { color })
    : icon;

// An interface, so the component's declaration names it instead of inlining
// the frame's props.
export interface FileTreeProps extends ComponentPropsWithoutRef<
  typeof FileTreeFrame
> {}

/** Container for a hierarchical file structure. */
export const FileTree = forwardRef<TailwindViewElement, FileTreeProps>(
  (props, forwardedRef) => (
    <FileTreeFrame role="tree" {...props} ref={forwardedRef} />
  )
);

export interface FileProps {
  /** File name displayed in tree. */
  name: ReactNode;
  /** Replaces default file icon. */
  icon?: ReactNode;
}

/** Leaf in FileTree. */
export const File = ({ name, icon = defaultFileIcon }: FileProps) => {
  const parentOpen = use(FileTreeOpenContext);
  const [hovered, setHovered] = useState(false);
  const color = hovered || parentOpen ? "primary" : "subtle";

  return (
    <TreeNode
      role="treeitem"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {getTreeIcon(icon, color)}
      <TreeLabel className={`text-${color}`}>{name}</TreeLabel>
    </TreeNode>
  );
};

export interface FolderProps {
  /** Folder name displayed in tree. */
  name: ReactNode;
  /** Folder contents. */
  children: ReactNode;
  /** Whether folder starts expanded. @defaultValue false */
  defaultOpen?: boolean;
  /** Replaces default folder icon. */
  icon?: ReactNode;
  /** Replaces the icon displayed while the folder is expanded. */
  openIcon?: ReactNode;
}

/** Expandable branch in FileTree. */
export const Folder = ({
  name,
  children,
  defaultOpen = false,
  icon = defaultFolderIcon,
  openIcon
}: FolderProps) => {
  const parentOpen = useContext(FileTreeOpenContext);
  const [open, setOpen] = useState(defaultOpen);
  const [hovered, setHovered] = useState(false);
  const color = open || hovered || parentOpen ? "primary" : "subtle";

  const toggle = () => setOpen(value => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <View role="none" className="flex-col">
      <TreeNode
        role="treeitem"
        aria-expanded={open}
        tabIndex={0}
        className="cursor-pointer"
        onPress={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onKeyDown={event => onKeyDown(event)}>
        <ChevronRight
          transition="400ms"
          color={color}
          size="lg"
          rotate={open ? "90deg" : "0deg"}
          aria-hidden
        />
        <View
          className="flex-row"
          aria-hidden
          data-file-tree-folder-icon={open ? "open" : "closed"}>
          {getTreeIcon(
            open ? (openIcon ?? defaultFolderOpenIcon) : icon,
            color
          )}
        </View>
        <TreeLabel className={`text-${color}`}>{name}</TreeLabel>
      </TreeNode>
      <AnimatePresence>
        {open ? (
          <FileTreeOpenContext.Provider value={open || parentOpen}>
            <TreeChildren role="group">{children}</TreeChildren>
          </FileTreeOpenContext.Provider>
        ) : null}
      </AnimatePresence>
    </View>
  );
};
