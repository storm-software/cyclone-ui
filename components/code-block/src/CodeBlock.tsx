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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type { TamaguiElement } from "@tamagui/core";
import { styled, Text, View, withStaticProperties } from "@tamagui/core";
import { Check, Clipboard } from "@tamagui/lucide-icons-2";
import { XStack } from "@tamagui/stacks";
import { Tabs as TamaguiTabs } from "@tamagui/tabs";
import type { GetProps, ViewProps } from "@tamagui/web";
import type {
  ComponentProps,
  HTMLAttributes,
  ReactNode,
  RefObject
} from "react";
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

const CODE_BLOCK_STYLES = `
.cyclone-code-block-tabs .cyclone-code-block.cyclone-code-block { width: 100%; height: 100%; margin: 0; border-width: 0; border-radius: 0; }
.cyclone-code-block-tabs-content .cyclone-code-block-viewport { border-width: 0 !important; border-radius: 0; }
.cyclone-code-block[data-keep-background] .cyclone-code-block-viewport { background-color: var(--shiki-light-bg); }
.t_dark .cyclone-code-block[data-keep-background] .cyclone-code-block-viewport { background-color: var(--shiki-dark-bg); }
@media (prefers-color-scheme: dark) { .cyclone-code-block[data-keep-background] .cyclone-code-block-viewport { background-color: var(--shiki-dark-bg); } }
.cyclone-code-block-icon, .cyclone-code-block-icon svg { display: block; width: 1rem; height: 1rem; }
.cyclone-code-block-viewport:focus-visible { outline: 2px solid currentColor; outline-offset: -2px; }
.cyclone-code-block-viewport { scrollbar-gutter: stable; }
.cyclone-code-block-viewport, .cyclone-code-block-viewport pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: .8125rem; line-height: 1.25rem; }
.cyclone-code-block-viewport pre { tab-size: 2; }
.cyclone-code-block-viewport > pre > code { display: grid; min-width: 100%; }
.cyclone-code-block-viewport > pre > code:not(:has(> [data-line])) { padding-inline: 1rem 4rem; }
.cyclone-code-block-viewport [data-line] { position: relative; display: inline-block; min-width: 100%; padding-inline: 1rem 4rem; }
.cyclone-code-block[data-line-numbers] .cyclone-code-block-viewport [data-line] { padding-inline-start: 3.5rem; }
.cyclone-code-block[data-line-numbers] .cyclone-code-block-viewport [data-line]::before { position: absolute; left: 0; width: 2.75rem; padding-right: .75rem; color: currentColor; text-align: right; opacity: .45; content: counter(line); counter-increment: line; user-select: none; }
.cyclone-code-block-viewport [data-highlighted-line] { background: color-mix(in srgb, currentColor 8%, transparent); box-shadow: inset 2px 0 currentColor; }
.cyclone-code-block-viewport [data-highlighted-chars] { padding: .125rem .25rem; border-radius: .25rem; background: color-mix(in srgb, currentColor 12%, transparent); }
.cyclone-code-block-viewport .diff.add { background: color-mix(in srgb, #22c55e 14%, transparent); }
.cyclone-code-block-viewport .diff.remove { background: color-mix(in srgb, #ef4444 14%, transparent); opacity: .7; }
.cyclone-code-block-viewport .highlighted.error { background: color-mix(in srgb, #ef4444 14%, transparent); }
.cyclone-code-block-viewport .highlighted.warning { background: color-mix(in srgb, #eab308 14%, transparent); }
.cyclone-code-block-tabs-trigger[data-state="active"] { background-color: var(--backgroundFloating); border-bottom-color: var(--backgroundFloating) !important; }
.cyclone-code-block-tabs-trigger[data-state="active"]::after { position: absolute; right: 1px; bottom: -1px; left: 1px; height: 2px; background-color: var(--backgroundFloating); content: ""; }
.cyclone-code-block-tabs-trigger[data-state="active"] > * { color: var(--foreground); }
`;

export interface CodeBlockActionsProps {
  className?: string;
  children?: ReactNode;
}

export interface CodeBlockProps extends Omit<ViewProps, "title"> {
  /** Optional caption displayed above the code. */
  title?: ReactNode;

  /**
   * Optional title icon. A string is treated as trusted SVG/HTML so that
   * icons injected by Shiki transformers can be passed through unchanged.
   */
  icon?: ReactNode;

  /** Show the copy action. @defaultValue true */
  allowCopy?: boolean | "true" | "false";

  /** Preserve Shiki's `--shiki-light-bg` and `--shiki-dark-bg` colors. */
  keepBackground?: boolean;

  /** Props applied to the focusable, scrolling code viewport. */
  viewportProps?: HTMLAttributes<HTMLElement>;

  /** Show line numbers for Shiki `[data-line]` elements. */
  "data-line-numbers"?: boolean;

  /** First displayed line number. @defaultValue 1 */
  "data-line-numbers-start"?: number;

  /** Customize the action container while preserving built-in actions. */
  Actions?: (props: CodeBlockActionsProps) => ReactNode;
}

const CodeBlockFrame = styled(View, {
  name: "CodeBlock",
  render: "figure",
  direction: "ltr",
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  marginVertical: "$4xl",
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "$border",
  borderRadius: "$container",
  backgroundColor: "$backgroundElevated"
});

const CodeBlockHeader = styled(XStack, {
  name: "CodeBlockHeader",
  render: "figcaption",
  minHeight: "$10xl",
  paddingHorizontal: "$xl",
  paddingLeft: "$3xl",
  alignItems: "center",
  gap: "$xl",
  overflow: "hidden",
  backgroundColor: "transparent"
});

const CodeBlockHeaderIcon = styled(View, {
  name: "CodeBlockHeaderIcon",
  flexGrow: 0,
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center"
});

const CodeBlockHeaderHeading = styled(BodyText, {
  name: "CodeBlockHeaderHeading",
  render: "span",
  flex: 1,
  minWidth: 0,
  paddingVertical: 0,
  color: "$foregroundCaption",
  fontFamily: "$heading-sm",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
});

const CodeBlockViewport = styled(View, {
  name: "CodeBlockViewport",
  render: "div",
  position: "relative",
  maxHeight: 600,
  paddingVertical: "$3xl",
  overflow: "unset",
  borderRadius: "$container",
  backgroundColor: "$backgroundFloating",
  borderColor: "$border",
  borderWidth: 1,
  borderStyle: "solid"
});

const CodeBlockPre = styled(Text, {
  name: "CodeBlockPre",
  render: "pre",
  minWidth: "100%",
  width: "max-content",
  margin: 0,
  padding: 0,
  backgroundColor: "$backgroundFloating",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  textAlign: "left",
  whiteSpace: "pre"
});

export type PreProps = GetProps<typeof CodeBlockPre>;

/** The semantic `<pre>` used inside a CodeBlock. */
export const Pre = CodeBlockPre.styleable((props, forwardedRef) => (
  <CodeBlockPre ref={forwardedRef} {...props} />
));

export interface CodeBlockCopyButtonProps extends Omit<
  ComponentProps<typeof Button>,
  "children" | "onPress"
> {
  containerRef: RefObject<HTMLElement | null>;
  copiedDuration?: number;
}

const getCopyText = (container: HTMLElement | null) => {
  const pre = container?.getElementsByTagName("pre").item(0);
  if (!pre) {
    return null;
  }

  const clone = pre.cloneNode(true) as HTMLElement;
  clone.querySelectorAll(".nd-copy-ignore").forEach(node => {
    node.replaceWith("\n");
  });

  return clone.textContent ?? "";
};

const writeClipboard = async (text: string) => {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    return;
  }

  if (typeof document === "undefined") {
    throw new TypeError(
      "Clipboard access is not available in this environment."
    );
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) {
    throw new Error("The browser rejected the clipboard operation.");
  }
};

export const CodeBlockCopyButton = ({
  containerRef,
  copiedDuration = 2000,
  theme,
  ...props
}: CodeBlockCopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  const handleCopy = useCallback(async () => {
    const text = getCopyText(containerRef.current);
    if (text === null) {
      return;
    }

    try {
      await writeClipboard(text);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setCopied(false), copiedDuration);
    } catch {
      setCopied(false);
    }
  }, [containerRef, copiedDuration]);

  return (
    <Button
      {...props}
      theme={copied ? "success" : theme}
      aria-label={copied ? "Copied text" : "Copy text"}
      accessibilityLabel={copied ? "Copied text" : "Copy text"}
      data-checked={copied || undefined}
      variant="ghost"
      size="$8xl"
      color={copied ? "$foreground" : "$foregroundCaption"}
      circular={true}
      bordered={false}
      flexGrow={0}
      onPress={handleCopy}>
      <Button.Icon size="$8xl">
        {copied ? <Check /> : <Clipboard />}
      </Button.Icon>
    </Button>
  );
};

const DefaultActions = ({ children, className }: CodeBlockActionsProps) =>
  children ? (
    <XStack className={className} alignItems="center">
      {children}
    </XStack>
  ) : null;

const CodeBlockImpl = CodeBlockFrame.styleable<CodeBlockProps>(
  (
    {
      title,
      icon,
      allowCopy = true,
      keepBackground = false,
      viewportProps = {},
      Actions = DefaultActions,
      children,
      "data-line-numbers": lineNumbers,
      "data-line-numbers-start": lineNumbersStart = 1,
      className,
      style,
      ...props
    },
    forwardedRef
  ) => {
    const areaRef = useRef<HTMLElement | null>(null);
    const copyEnabled = allowCopy === true || allowCopy === "true";
    const actions = Actions({
      className: "cyclone-code-block-actions",
      children: copyEnabled ? (
        <CodeBlockCopyButton containerRef={areaRef} />
      ) : undefined
    });

    const viewportStyle = {
      counterSet: lineNumbers
        ? `line ${Number(lineNumbersStart) - 1}`
        : undefined,
      ...viewportProps.style
    } as HTMLAttributes<HTMLElement>["style"];

    const childArray = Children.toArray(children);
    const compoundHeader = childArray.find(
      child => isValidElement(child) && child.type === CodeBlockHeader
    );

    const contentChildren = compoundHeader
      ? childArray.filter(child => child !== compoundHeader)
      : children;

    const header = title ? (
      <CodeBlockHeader>
        {icon ? (
          <CodeBlockHeaderIcon>
            {typeof icon === "string" ? (
              <View
                render="span"
                className="cyclone-code-block-icon"
                // Shiki transformer icon output is trusted application code.
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            ) : (
              <ThemeableIcon size="$xl" color="$foregroundCaption">
                {icon}
              </ThemeableIcon>
            )}
          </CodeBlockHeaderIcon>
        ) : null}
        <CodeBlockHeaderHeading>{title}</CodeBlockHeaderHeading>
        {actions}
      </CodeBlockHeader>
    ) : isValidElement<{ children?: ReactNode }>(compoundHeader) ? (
      cloneElement(
        compoundHeader,
        undefined,
        compoundHeader.props.children,
        actions
      )
    ) : null;

    return (
      <CodeBlockFrame
        ref={forwardedRef}
        {...props}
        direction="ltr"
        data-code-block=""
        data-keep-background={keepBackground ? "" : undefined}
        data-line-numbers={lineNumbers ? "" : undefined}
        data-line-numbers-start={lineNumbers ? lineNumbersStart : undefined}
        tabIndex={-1}
        paddingHorizontal={header ? "$xl" : 0}
        paddingBottom={header ? "$xl" : 0}
        className={`cyclone-code-block${className ? ` ${className}` : ""}`}
        style={style}>
        <style>{CODE_BLOCK_STYLES}</style>
        {header}
        {!header ? (
          <XStack
            position="absolute"
            top="$xl"
            right="$xl"
            zIndex="$20"
            padding="$xs"
            borderRadius="$button">
            {actions}
          </XStack>
        ) : null}
        <CodeBlockViewport
          {...(viewportProps as ViewProps)}
          ref={areaRef as any}
          role="region"
          aria-label={typeof title === "string" ? title : "Code"}
          tabIndex={0}
          className={`cyclone-code-block-viewport${
            viewportProps.className ? ` ${viewportProps.className}` : ""
          }`}
          style={viewportStyle}>
          {contentChildren}
        </CodeBlockViewport>
      </CodeBlockFrame>
    );
  },
  {
    staticConfig: { componentName: "CodeBlock" }
  }
);

export type CodeBlockTabsProps = ComponentProps<typeof TamaguiTabs>;

export const CodeBlockTabs = forwardRef<TamaguiElement, CodeBlockTabsProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <TamaguiTabs
      ref={forwardedRef}
      flexDirection="column"
      width="100%"
      marginVertical="$4xl"
      overflow="hidden"
      borderWidth={1}
      borderColor="$border"
      borderRadius="$container"
      backgroundColor="$backgroundElevated"
      padding="$xl"
      {...props}
      className={`cyclone-code-block-tabs${className ? ` ${className}` : ""}`}>
      {children}
    </TamaguiTabs>
  )
);

export type CodeBlockTabsListProps = ComponentProps<typeof TamaguiTabs.List>;
export const CodeBlockTabsList = forwardRef<
  TamaguiElement,
  CodeBlockTabsListProps
>(({ "aria-label": ariaLabel, ...props }, forwardedRef) => (
  <TamaguiTabs.List
    ref={forwardedRef}
    {...props}
    aria-label={ariaLabel ?? "Code samples"}
    flexDirection="row"
    width="100%"
    gap="$md"
    overflowX="auto"
    overflowY="hidden"
    backgroundColor="transparent"
  />
));

export type CodeBlockTabsTriggerProps = ComponentProps<typeof TamaguiTabs.Tab>;
export const CodeBlockTabsTrigger = forwardRef<
  TamaguiElement,
  CodeBlockTabsTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <TamaguiTabs.Tab
    ref={forwardedRef}
    {...props}
    className="cyclone-code-block-tabs-trigger"
    flexGrow={0}
    flexShrink={0}
    paddingHorizontal="$2xl"
    position="relative"
    zIndex={2}
    borderWidth={1}
    borderColor="$border"
    borderBottomColor="$border"
    borderTopLeftRadius="$container"
    borderTopRightRadius="$container"
    borderBottomLeftRadius={0}
    borderBottomRightRadius={0}
    backgroundColor="$backgroundPage"
    cursor="pointer">
    <BodyText
      color="$foregroundCaption"
      fontFamily="$heading-sm"
      fontSize="$lg"
      fontWeight="$semibold"
      lineHeight="$lg"
      textAlign="center"
      whiteSpace="nowrap">
      {children}
    </BodyText>
  </TamaguiTabs.Tab>
));

export type CodeBlockTabProps = ComponentProps<typeof TamaguiTabs.Content>;
export const CodeBlockTab = forwardRef<TamaguiElement, CodeBlockTabProps>(
  ({ className, ...props }, forwardedRef) => (
    <TamaguiTabs.Content
      ref={forwardedRef}
      {...props}
      flexGrow={1}
      minHeight={0}
      width="100%"
      marginTop={-1}
      borderWidth={1}
      borderTopWidth={1}
      borderColor="$border"
      borderBottomLeftRadius="$container"
      borderBottomRightRadius="$container"
      overflow="hidden"
      backgroundColor="$backgroundElevated"
      outlineStyle="none"
      className={`cyclone-code-block-tabs-content${
        className ? ` ${className}` : ""
      }`}
    />
  )
);

export type CodeBlockHeaderProps = GetProps<typeof CodeBlockHeader>;
export type CodeBlockHeaderIconProps = GetProps<typeof CodeBlockHeaderIcon>;
export type CodeBlockHeaderHeadingProps = GetProps<
  typeof CodeBlockHeaderHeading
>;

/**
 * A Shiki/rehype-code presentation component. Syntax highlighting is expected
 * to be performed before render; CodeBlock owns framing and interaction.
 */
export const CodeBlock = withStaticProperties(CodeBlockImpl, {
  Header: withStaticProperties(CodeBlockHeader, {
    Icon: CodeBlockHeaderIcon,
    Heading: CodeBlockHeaderHeading
  }),
  Body: Pre,
  Pre,
  CopyButton: CodeBlockCopyButton,
  Tabs: withStaticProperties(CodeBlockTabs, {
    List: CodeBlockTabsList,
    Trigger: CodeBlockTabsTrigger,
    Content: CodeBlockTab
  })
});
