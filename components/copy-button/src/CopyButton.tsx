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

import { BodyText } from "@cyclone-ui/body-text";
import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { ClipboardText } from "@cyclone-ui/icons";
import { Check } from "@cyclone-ui/icons/vectors";
import { toast } from "@cyclone-ui/toast";
import { Tooltip } from "@cyclone-ui/tooltip";
import type { TamaguiElement } from "@tamagui/core";
import { useMedia, View } from "@tamagui/core";
import type { ReactNode } from "react";
import {
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState
} from "react";
import { writeClipboard } from "./clipboard";

export interface CopyButtonProps extends Omit<
  ButtonProps,
  "value" | "children" | "tooltip"
> {
  /** Text to copy, or a supplier evaluated on press. Return null to skip copying. */
  value: string | (() => string | null | Promise<string>);
  /** How long to show the check icon and success tooltip. @defaultValue 2000 */
  copiedDuration?: number;
  /** Optional label/content, with access to the successful copy state. */
  children?: ReactNode | ((copied: boolean) => ReactNode);
}

const TOOLTIP_DELAY = { open: 2000 };

const LABEL_STYLES = `
@media (prefers-reduced-motion: no-preference) {
  @keyframes cyclone-copy-label-in {
    from { opacity: 0; translate: 0 3px; }
    to { opacity: 1; translate: 0 0; }
  }
  .cyclone-copy-label { animation: cyclone-copy-label-in 150ms ease-out; }
}
`;

// Preserve the button's direct children and spacing, including icon/label
// fragments. Only labels remount when the copy state changes.
const animateLabels = (
  children: ReactNode,
  copied: boolean,
  enabled: boolean
): ReactNode =>
  Children.map(children, child => {
    if (typeof child === "string" || typeof child === "number") {
      return (
        <Button.Text
          key={String(copied)}
          className={enabled ? "cyclone-copy-label" : undefined}>
          {child}
        </Button.Text>
      );
    }
    if (!isValidElement<{ children?: ReactNode; className?: string }>(child))
      return child;
    if (child.type === Fragment) {
      return cloneElement(
        child,
        undefined,
        animateLabels(child.props.children, copied, enabled)
      );
    }
    if (child.type === Button.Text) {
      return cloneElement(child, {
        key: `${child.key ?? "label"}-${copied}`,
        className: enabled
          ? `${child.props.className ?? ""} cyclone-copy-label`.trim()
          : child.props.className
      });
    }
    return child;
  });

/** Copies text with success feedback. Mount one Toaster in the app for touch feedback. */
export const CopyButton = forwardRef<TamaguiElement, CopyButtonProps>(
  (
    {
      value,
      copiedDuration = 2000,
      children,
      onPress,
      disabled,
      color = "ink",
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const touchable = useMedia().touchable ?? false;
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const attemptRef = useRef(0);

    const content =
      typeof children === "function" ? children(copied) : children;
    const animateLabel = hasCopied && props.animate !== false;

    useEffect(
      () => () => {
        attemptRef.current++;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      },
      []
    );

    const copy = async () => {
      const attempt = ++attemptRef.current;
      try {
        const text = typeof value === "function" ? value() : value;
        if (text === null) return;
        await writeClipboard(text);
        if (attempt !== attemptRef.current) return;
        setHasCopied(true);
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), copiedDuration);
        if (touchable) toast.success("Copied to clipboard");
      } catch {
        if (attempt !== attemptRef.current) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setCopied(false);
        setTooltipOpen(false);
      }
    };

    return (
      <Tooltip
        delay={TOOLTIP_DELAY}
        open={!touchable && (copied || tooltipOpen)}
        onOpenChange={setTooltipOpen}
        placement="top">
        <Tooltip.Trigger
          asChild={true}
          disablePressTrigger={true}
          aria-expanded={undefined}
          // Button prevents the native click's default. Put the action on the
          // trigger so Slot's default-prevention check cannot skip it.
          onPress={event => {
            if (disabled) return;
            onPress?.(event);
            void copy();
          }}>
          <Button
            ref={ref}
            variant="ghost"
            ghostOpacity={0.5}
            size="8xl"
            circular={true}
            flexGrow={0}
            {...props}
            disabled={disabled}
            color={copied ? "primary" : color}
            aria-label={
              copied ? "Copied text" : (props["aria-label"] ?? "Copy text")
            }
            data-checked={copied || undefined}>
            {content != null ? (
              animateLabels(content, copied, animateLabel)
            ) : (
              <Button.Icon>
                {copied ? <Check strokeWidth={3} /> : <ClipboardText />}
              </Button.Icon>
            )}
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <View paddingVertical="2xl" paddingHorizontal="3xl">
            <BodyText>
              {copied ? "Copied to clipboard" : "Copy to clipboard"}
            </BodyText>
          </View>
        </Tooltip.Content>
        {animateLabel && content != null ? <style>{LABEL_STYLES}</style> : null}
      </Tooltip>
    );
  }
);

CopyButton.displayName = "CopyButton";
