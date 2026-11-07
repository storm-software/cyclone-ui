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

import { Button } from "@cyclone-ui/button";
import { ContextMenu } from "@cyclone-ui/context-menu";
import type { DropdownButtonProps } from "@cyclone-ui/dropdown-button";
import { DropdownButton } from "@cyclone-ui/dropdown-button";
import { Clipboard, ClipboardCheck } from "@cyclone-ui/icons";
import { View } from "@tamagui/core";
import type { JSX, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Path, Svg } from "react-native-svg";

export type CopyPageDropdownButtonProps = Omit<
  DropdownButtonProps,
  "items" | "value" | "onValueChange" | "children"
> & {
  /**
   * The URL of the page's Markdown source: the main button copies it, "View
   * as Markdown" opens it, and the AI chats are asked to read it
   */
  markdownUrl: string;
};

// Simple Icons (CC0) logo paths, on a 24 × 24 view box.
const Logo = ({ d }: { d: string }): JSX.Element => (
  <Svg viewBox="0 0 24 24" width="1.25em" height="1.25em">
    <Path fill="currentColor" d={d} />
  </Svg>
);

const ask = (url: string) =>
  encodeURIComponent(`Read ${url}, I want to ask questions about it.`);

const TARGETS: {
  value: string;
  label: string;
  description: string;
  icon: ReactNode;
  href: (url: string) => string;
}[] = [
  {
    value: "markdown",
    label: "View as Markdown",
    description: "Open this page in Markdown",
    icon: (
      <Logo d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" />
    ),
    href: url => url
  },
  {
    value: "claude",
    label: "Open in Claude",
    description: "Ask questions about this page",
    icon: (
      <Logo d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
    ),
    href: url => `https://claude.ai/new?q=${ask(url)}`
  },
  {
    value: "chatgpt",
    label: "Open in ChatGPT",
    description: "Ask questions about this page",
    icon: (
      <Logo d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    ),
    href: url => `https://chatgpt.com/?hints=search&q=${ask(url)}`
  },
  {
    value: "t3",
    label: "Open in T3 Chat",
    description: "Ask questions about this page",
    // No Simple Icons logo: the wordmark's letters.
    icon: "T3",
    href: url => `https://t3.chat/new?q=${ask(url)}`
  },
  {
    value: "cursor",
    label: "Open in Cursor",
    description: "Ask questions about this page",
    icon: (
      <Logo d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    ),
    href: url => `https://cursor.com/link/prompt?text=${ask(url)}`
  }
];

/**
 * A docs "Copy page" `DropdownButton`: the main button copies the page's
 * Markdown source, and its menu opens that Markdown or asks an AI chat about
 * the page.
 */
export const CopyPageDropdownButton = ({
  markdownUrl,
  menuLabel = "More page options",
  onPress,
  ...props
}: CopyPageDropdownButtonProps): JSX.Element => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <DropdownButton
      {...props}
      menuLabel={menuLabel}
      onPress={event => {
        onPress?.(event);
        const text = fetch(markdownUrl).then(async response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${markdownUrl}`);
          }

          return response.text();
        });

        // A promised item keeps Safari's user activation through the fetch;
        // `ClipboardItem` is missing in older Firefox.
        (typeof ClipboardItem === "undefined"
          ? text.then(async value => navigator.clipboard.writeText(value))
          : navigator.clipboard.write([
              new ClipboardItem({
                "text/plain": text.then(
                  value => new Blob([value], { type: "text/plain" })
                )
              })
            ])
        ).then(
          () => setCopied(true),
          // Like CodeBlock's copy button: a failed copy keeps "Copy page".
          () => setCopied(false)
        );
      }}
      onValueChange={value => {
        const target = TARGETS.find(item => item.value === value);
        if (target) {
          // The chats fetch the page themselves, so it must be absolute.
          window.open(
            target.href(new URL(markdownUrl, window.location.href).href),
            "_blank",
            "noopener,noreferrer"
          );
        }
      }}
      items={TARGETS.map(target => (
        <ContextMenu.Item
          key={target.value}
          value={target.value}
          aria-label={target.label}>
          <ContextMenu.Item.Icon
            // Fixed: the "T3" letters are wider than the logos.
            width="1.75em"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="semibold"
            letterSpacing={-1}>
            {target.icon}
          </ContextMenu.Item.Icon>
          <View flex={1} minWidth={0} paddingVertical="sm">
            <ContextMenu.Item.Text
              color="primary"
              fontWeight="medium"
              paddingVertical={0}>
              {target.label}
            </ContextMenu.Item.Text>
            <ContextMenu.Item.Text fontSize="0.875em" paddingVertical={0}>
              {target.description}
            </ContextMenu.Item.Text>
          </View>
        </ContextMenu.Item>
      ))}>
      <Button.Icon>{copied ? <ClipboardCheck /> : <Clipboard />}</Button.Icon>
      <Button.Text>{copied ? "Copied" : "Copy page"}</Button.Text>
    </DropdownButton>
  );
};
