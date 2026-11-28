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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { CodeBlock, Pre } from "@cyclone-ui/code-block";
import type { CopyButtonProps } from "@cyclone-ui/copy-button";
import { CopyButton } from "@cyclone-ui/copy-button";
import { Console, Loading, Trash } from "@cyclone-ui/icons";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps
} from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { Text, View, withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import {
  createContext,
  forwardRef,
  use,
  useLayoutEffect,
  useRef,
  useState
} from "react";

export interface TerminalContextValue {
  /** Everything the command has printed so far. */
  output: string;
  /** Whether the command is still running. */
  isStreaming: boolean;
  /** Whether the output scrolls to its end as it grows. */
  autoScroll: boolean;
  /** Clears the output; the clear button shows only when it is set. */
  onClear?: () => void;
  /** The command, such as `pnpm build`. */
  command?: string;
  /** The command's exit code once it exits. Any code but `0` failed. */
  exitCode?: number;
}

// A plain context: a styled context Provider resets its values to defaults.
const TerminalContext = createContext<TerminalContextValue | null>(null);

/** The state of the nearest `Terminal`. */
export const useTerminal = () => {
  const context = use(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a Terminal");
  }

  return context;
};

export type TerminalProps = TraceCollapsibleProps & {
  /** Everything the command has printed so far. */
  output: string;
  /** Whether the command is still running. Defaults to `false`. */
  isStreaming?: boolean;
  /** Scroll the output to its end as it grows. Defaults to `true`. */
  autoScroll?: boolean;
  /** Clears the output. Shows a clear button beside the line. */
  onClear?: () => void;
  /** The command, such as `pnpm build`, which the title names. */
  command?: string;
  /** The command's exit code once it exits. Any code but `0` failed. */
  exitCode?: number;
};

/**
 * A command the agent runs: a line that opens to its output once the output
 * starts while the command runs, and closes when it is done unless the reader
 * opened or closed it. Without children it renders a `Terminal.Header` and a
 * `Terminal.Content`.
 */
const TerminalRoot = forwardRef<TamaguiElement, TerminalProps>(
  (
    {
      output,
      isStreaming = false,
      autoScroll = true,
      onClear,
      command,
      exitCode,
      open,
      defaultOpen,
      onOpenChange,
      children,
      ...props
    },
    forwardedRef
  ) => {
    // The reader's choice, once they open or close the line.
    const [choice, setChoice] = useState(defaultOpen);
    const context: TerminalContextValue = {
      output,
      isStreaming,
      autoScroll,
      onClear,
      command,
      exitCode
    };

    return (
      <TerminalContext value={context}>
        <Trace>
          <Trace.Collapsible
            ref={forwardedRef}
            open={open ?? choice ?? (isStreaming && output.length > 0)}
            onOpenChange={(next: boolean) => {
              setChoice(next);
              onOpenChange?.(next);
            }}
            {...props}>
            {children ?? (
              <>
                <TerminalHeader />
                <TerminalContent />
              </>
            )}
          </Trace.Collapsible>
        </Trace>
      </TerminalContext>
    );
  }
);

TerminalRoot.displayName = "Terminal";

export type TerminalTitleProps = TraceCollapsibleTriggerProps;

/**
 * The line that opens and closes the output: a terminal icon and "Running
 * pnpm build", "Ran pnpm build", or "pnpm lint exited with code 1" in the
 * danger color. Children replace the title text.
 */
const TerminalTitle = forwardRef<TamaguiElement, TerminalTitleProps>(
  ({ children, ...props }, forwardedRef) => {
    const { command, isStreaming, exitCode } = useTerminal();
    const name = command ?? "the command";

    return (
      <Trace.Collapsible.Trigger ref={forwardedRef} flexShrink={1} {...props}>
        <Trace.Line
          status={isStreaming ? "running" : exitCode ? "error" : undefined}>
          <Trace.Icon>
            <Console />
          </Trace.Icon>
          <Trace.Title>
            {children ??
              (isStreaming
                ? `Running ${name}`
                : exitCode
                  ? command
                    ? `${command} exited with code ${exitCode}`
                    : `Exited with code ${exitCode}`
                  : `Ran ${name}`)}
          </Trace.Title>
        </Trace.Line>
      </Trace.Collapsible.Trigger>
    );
  }
);

TerminalTitle.displayName = "Terminal.Title";

export type TerminalHeaderProps = ViewProps;

/**
 * A row with the `Terminal.Title` line and, beside it rather than in it (a
 * button can't go in a button), `Terminal.Status` and `Terminal.Actions`.
 * Without children it renders the title and the copy and clear buttons.
 */
const TerminalHeader = forwardRef<TamaguiElement, TerminalHeaderProps>(
  ({ children, ...props }, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      gap="lg"
      minWidth={0}
      {...props}>
      {children ?? (
        <>
          <TerminalTitle />
          <TerminalActions>
            <TerminalCopyButton />
            <TerminalClearButton />
          </TerminalActions>
        </>
      )}
    </View>
  )
);

TerminalHeader.displayName = "Terminal.Header";

export interface TerminalStatusProps {
  /** Shown while the command runs. Defaults to a spinner. */
  children?: ReactNode;
}

/**
 * A busy indicator beside the line while the command runs, hidden from
 * assistive tech: the title already says "Running …".
 */
const TerminalStatus = ({ children }: TerminalStatusProps) =>
  useTerminal().isStreaming ? (
    // A View can't carry `color` in v3, so this Text passes it to the icon's
    // `currentColor`.
    <Text display="flex" color="subtle" aria-hidden={true}>
      {children ?? <Loading size={16} color="currentColor" />}
    </Text>
  ) : null;

export type TerminalActionsProps = ViewProps;

/**
 * The buttons at the end of the header, such as copy and clear, lined up with
 * the output's edge.
 */
const TerminalActions = forwardRef<TamaguiElement, TerminalActionsProps>(
  (props, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      marginLeft="auto"
      marginRight="xl"
      {...props}
    />
  )
);

TerminalActions.displayName = "Terminal.Actions";

export type TerminalCopyButtonProps = Omit<CopyButtonProps, "value"> & {
  /** Called when the reader presses the button. */
  onCopy?: () => void;
  /** How long the button shows it copied, in milliseconds. Defaults to 2000. */
  timeout?: number;
};

/** Copies the output. Disabled while there is none. */
const TerminalCopyButton = forwardRef<TamaguiElement, TerminalCopyButtonProps>(
  ({ onCopy, timeout, ...props }, forwardedRef) => {
    const { output } = useTerminal();

    return (
      <CopyButton
        ref={forwardedRef}
        aria-label="Copy output"
        disabled={!output}
        value={output}
        copiedDuration={timeout}
        onPress={onCopy}
        {...props}
      />
    );
  }
);

TerminalCopyButton.displayName = "Terminal.CopyButton";

export type TerminalClearButtonProps = ButtonProps;

/** Clears the output with the terminal's `onClear`. Renders nothing without it. */
const TerminalClearButton = forwardRef<
  TamaguiElement,
  TerminalClearButtonProps
>(({ children, ...props }, forwardedRef) => {
  const { onClear, output } = useTerminal();
  if (!onClear) return null;

  return (
    <Button
      ref={forwardedRef}
      variant="ghost"
      ghostOpacity={0.5}
      circular={true}
      size="8xl"
      flexGrow={0}
      color="ink"
      tooltip="Clear output"
      disabled={!output}
      onPress={onClear}
      {...props}>
      {children ?? (
        <Button.Icon>
          <Trash />
        </Button.Icon>
      )}
    </Button>
  );
});

TerminalClearButton.displayName = "Terminal.ClearButton";

export type TerminalContentProps = TraceCollapsibleContentProps;

/**
 * The output in the code font, wrapped, scrolling past 256px; nothing while
 * there is none. While the command runs it scrolls to its end as it grows,
 * unless `autoScroll` is off. Children replace the output.
 */
const TerminalContent = forwardRef<TamaguiElement, TerminalContentProps>(
  ({ children, ...props }, forwardedRef) => {
    const { output, isStreaming, autoScroll } = useTerminal();
    const blockRef = useRef<TamaguiElement>(null);

    // Before paint, so the new output never shows above the fold.
    useLayoutEffect(() => {
      if (!autoScroll || !isStreaming) return;
      // CodeBlock doesn't expose its scrolling viewport.
      const viewport = (
        blockRef.current as HTMLElement | null
      )?.querySelector?.(".cyclone-code-block-viewport");
      if (viewport) viewport.scrollTop = viewport.scrollHeight;
    }, [output, isStreaming, autoScroll]);

    return (
      <Trace.Collapsible.Content ref={forwardedRef} {...props}>
        {children ??
          (output !== "" && (
            <CodeBlock
              ref={blockRef}
              margin={0}
              allowCopy={false}
              viewportProps={{ style: { maxHeight: 256 } }}>
              <Pre
                color="ink"
                width="100%"
                whiteSpace="pre-wrap"
                wordBreak="break-word">
                <code>{output}</code>
              </Pre>
            </CodeBlock>
          ))}
      </Trace.Collapsible.Content>
    );
  }
);

TerminalContent.displayName = "Terminal.Content";

export const Terminal = withStaticProperties(TerminalRoot, {
  Header: TerminalHeader,
  Title: TerminalTitle,
  Status: TerminalStatus,
  Actions: TerminalActions,
  CopyButton: TerminalCopyButton,
  ClearButton: TerminalClearButton,
  Content: TerminalContent
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Terminal.Header` is undefined on the server).
 */
export {
  TerminalActions,
  TerminalClearButton,
  TerminalContent,
  TerminalCopyButton,
  TerminalHeader,
  TerminalStatus,
  TerminalTitle
};
