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

import { AnimatePresence } from "@tamagui/animate-presence";
import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
import {
  ChevronRight,
  File as FileIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon
} from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import type { KeyboardEvent, ReactNode } from "react";
import { useState } from "react";

const FileTreeFrame = styled(YStack, {
  name: "FileTree",
  role: "tree",
  width: "100%",
  gap: "$lg",
  padding: "$5xl",
  borderWidth: 1,
  borderColor: "$accent",
  borderRadius: "$container",
  backgroundColor: "$surfaceElevated"
});

const TreeNode = styled(XStack, {
  name: "FileTreeNode",
  alignItems: "center",
  minHeight: "$7xl",
  gap: "$lg",
  paddingHorizontal: "$lg",
  paddingVertical: "$xs",
  borderRadius: "$sm",
  color: "$inkSubtle",

  hoverStyle: { backgroundColor: "$mutedHover" },

  focusVisibleStyle: {
    outlineColor: "$accentActive",
    outlineWidth: 2,
    outlineStyle: "solid"
  }
});

const TreeLabel = styled(SizableText, {
  name: "FileTreeLabel",
  color: "$accent",
  fontFamily: "$code",
  size: "$true"
});

const TreeChildren = styled(YStack, {
  name: "FileTreeChildren",
  role: "group",
  marginLeft: "$2xl",
  paddingLeft: "$2xl",
  borderLeftWidth: 1,
  borderLeftColor: "$accent",
  gap: "$lg"
});

const defaultFileIcon = <FileIcon aria-hidden color="$inkSubtle" size="$2xl" />;

const defaultFolderIcon = (
  <FolderIcon aria-hidden color="$inkSubtle" size="$2xl" />
);

const defaultFolderOpenIcon = (
  <FolderOpenIcon aria-hidden color="$accent" size="$2xl" />
);

export type FileTreeProps = GetProps<typeof FileTreeFrame>;

/** Container for a hierarchical file structure. */
export const FileTree = FileTreeFrame;

export interface FileProps {
  /** File name displayed in tree. */
  name: ReactNode;
  /** Replaces default file icon. */
  icon?: ReactNode;
}

/** Leaf in FileTree. */
export const File = ({ name, icon = defaultFileIcon }: FileProps) => (
  <TreeNode role="treeitem">
    {icon}
    <TreeLabel>{name}</TreeLabel>
  </TreeNode>
);

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
  const [open, setOpen] = useState(defaultOpen);

  const toggle = () => setOpen(value => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <YStack role="none">
      <TreeNode
        role="treeitem"
        aria-expanded={open}
        tabIndex={0}
        cursor="pointer"
        onPress={toggle}
        onKeyDown={onKeyDown}>
        <ChevronRight
          transition="400ms"
          aria-hidden
          color={open ? "$accent" : "$inkSubtle"}
          size="$lg"
          rotate={open ? "90deg" : "0deg"}
        />
        <XStack
          aria-hidden
          data-file-tree-folder-icon={open ? "open" : "closed"}>
          {open ? (openIcon ?? defaultFolderOpenIcon) : icon}
        </XStack>
        <TreeLabel>{name}</TreeLabel>
      </TreeNode>
      <AnimatePresence>
        {open ? <TreeChildren>{children}</TreeChildren> : null}
      </AnimatePresence>
    </YStack>
  );
};
