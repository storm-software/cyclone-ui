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
import { Button } from "@cyclone-ui/button";
import { Close } from "@cyclone-ui/icons";
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
import { Text, Theme } from "@tamagui/core";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { bindToast, retainToastKeys, springEasing } from "./motion";
import type {
  ToasterState,
  ToastItem,
  ToastLabels,
  ToastPosition,
  ToastSprings,
  ToastType
} from "./store";
import { toast } from "./store";

// The color theme of each status: the icon, timer and progress bar draw in
// the theme's `primary`. A name is always passed, since switching a `Theme`
// from none to a name remounts its children (and so the toast).
const THEMES: Record<ToastType, string> = {
  success: "success",
  error: "danger",
  warning: "warning",
  info: "info",
  loading: "base"
};

// Ported from Ding's stylesheet, with Cyclone UI theme values for the colors.
// The pill's size, shape and entrance are written by `bindToast` every frame;
// everything here is either static or derived from the variables it writes.
const buildCss = (springs: ToastSprings) => {
  const stack = springEasing(springs.stack);
  const pop = springEasing(springs.enter);

  return `
.cyclone-toast-viewport{--toast-stack:${stack.easing};--toast-stack-dur:${stack.duration}ms;--toast-pop:${pop.easing};--toast-pop-dur:${pop.duration}ms;
--toast-bg:var(--floating);--toast-fg:var(--emphasis);--toast-ring:color-mix(in srgb,var(--emphasis) 10%,transparent);
--toast-shadow:0 0 0 1px var(--toast-ring),0 4px 12px -4px oklch(0 0 0/.3);
--toast-size:44px;--toast-radius:22px;--toast-gap:8px;--toast-pad:16px;--toast-stack-offset:10px;--toast-stack-scale:.05;
position:fixed;inset:0;z-index:2147483647;pointer-events:none}
.cyclone-toast-viewport:dir(rtl){--toast-flip:-1}
.cyclone-toast-viewport:dir(rtl) .cyclone-toast-progress::after,.cyclone-toast-viewport:dir(rtl) .cyclone-toast-timer{transform-origin:right}
.cyclone-toast-viewport[data-position^=top]{--toast-dir:-1}
.cyclone-toast-viewport[data-position^=bottom]{--toast-dir:1}
.cyclone-toast-viewport{--toast-y0:calc(var(--toast-dir,-1)*(var(--toast-size) + var(--toast-pad) + 24px))}
.cyclone-toast-viewport[data-position$=center]{--toast-ox:50%;--toast-tx:-50%}
.cyclone-toast-viewport[data-position$=left]{--toast-ox:0%;--toast-tx:0px}
.cyclone-toast-viewport[data-position$=right]{--toast-ox:100%;--toast-tx:0px}
.cyclone-toast-slot{position:absolute;pointer-events:auto;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;cursor:grab;outline:none;
--toast-y:calc(var(--toast-dir)*-1*var(--toast-i,0)*var(--toast-stack-offset));--toast-s:calc(1 - var(--toast-i,0)*var(--toast-stack-scale));
transform:translate(calc(var(--toast-tx) + var(--toast-dx,0px)),calc(var(--toast-y) + var(--toast-dy,0px))) scale(var(--toast-s));
transform-origin:var(--toast-ox) var(--toast-oy);z-index:calc(100 - var(--toast-i,0));
transition-property:transform,opacity;transition-duration:var(--toast-stack-dur),.25s;transition-timing-function:var(--toast-stack),ease-out}
.cyclone-toast-viewport[data-list] .cyclone-toast-slot{--toast-y:calc(var(--toast-dir)*-1*var(--toast-ey,0px));--toast-s:1}
.cyclone-toast-slot[data-new]{transition:none}
.cyclone-toast-slot::after{content:'';position:absolute;z-index:-1;left:0;right:0;top:calc(var(--toast-gap)/-2);bottom:calc(var(--toast-gap)/-2)}
.cyclone-toast-slot[data-dragging]{transition:none;cursor:grabbing}
.cyclone-toast-slot[data-flung]{transition:transform .38s cubic-bezier(.2,.8,.3,1),opacity .25s ease-out;opacity:0;pointer-events:none}
.cyclone-toast-viewport[data-position^=top] .cyclone-toast-slot{top:calc(var(--toast-pad) + env(safe-area-inset-top,0px));--toast-oy:0%}
.cyclone-toast-viewport[data-position^=bottom] .cyclone-toast-slot{bottom:calc(var(--toast-pad) + env(safe-area-inset-bottom,0px));--toast-oy:100%}
.cyclone-toast-viewport[data-position$=center] .cyclone-toast-slot{left:50%}
.cyclone-toast-viewport[data-position$=left] .cyclone-toast-slot{left:var(--toast-pad)}
.cyclone-toast-viewport[data-position$=right] .cyclone-toast-slot{right:var(--toast-pad)}
.cyclone-toast-slot:focus-visible .cyclone-toast,.cyclone-toast-slot[data-shortcut-focus]:focus-within .cyclone-toast{outline:2px solid var(--toast-on);outline-offset:-5px}
.cyclone-toast{--toast-c:var(--primary);--toast-fill:var(--toast-bg);--toast-on:var(--toast-fg);--toast-md:.55s;
position:relative;box-sizing:border-box;width:var(--toast-size);height:var(--toast-size);border:1px solid transparent;
border-radius:var(--toast-r,min(var(--toast-radius),calc(var(--toast-size)/2)));overflow:hidden;color:var(--toast-on);background:var(--toast-fill);box-shadow:var(--toast-shadow);
translate:0 var(--toast-y0);scale:var(--toast-enter-scale,.5);opacity:0;will-change:translate,scale}
.cyclone-toast[data-settled]{will-change:auto}
.cyclone-toast[data-settled] .cyclone-toast-body{filter:none;transform:none}
.cyclone-toast[data-ready]{--toast-md:.05s}
.cyclone-toast[data-phase=exit]{animation:cyclone-toast-out .15s ease-out both}
.cyclone-toast-icon{position:absolute;inset-inline-start:-1px;top:-1px;width:var(--toast-size);height:var(--toast-size);display:grid;place-items:center}
.cyclone-toast-media{width:28px;height:28px;border-radius:50%;object-fit:cover;outline:1px solid var(--toast-ring);outline-offset:-1px;animation:cyclone-toast-swap var(--toast-stack-dur) var(--toast-stack) .1s both}
.cyclone-toast-badge{position:relative;width:24px;height:24px;display:grid;place-items:center}
.cyclone-toast-svg{width:22px;height:22px;fill:none;stroke:var(--toast-c);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:stroke .3s cubic-bezier(.2,0,0,1);animation:cyclone-toast-swap var(--toast-stack-dur) var(--toast-stack) .1s both}
.cyclone-toast-svg path{stroke-dasharray:1;stroke-dashoffset:1;transform-box:fill-box;transform-origin:center;animation:cyclone-toast-draw .5s cubic-bezier(.4,0,.2,1) .15s forwards}
.cyclone-toast-svg path:first-child{stroke-dasharray:1 1;transition:stroke-dasharray .65s cubic-bezier(.4,0,.2,1)}
.cyclone-toast[data-type=loading] .cyclone-toast-svg path:first-child{stroke-dasharray:.28 .72}
.cyclone-toast-svg path:nth-child(n+2){animation-duration:.32s;animation-delay:var(--toast-md)}
.cyclone-toast-svg path:nth-child(3){animation-delay:calc(var(--toast-md) + .08s)}
.cyclone-toast[data-type=success] .cyclone-toast-svg{animation:cyclone-toast-swap var(--toast-stack-dur) var(--toast-stack) .1s both,cyclone-toast-pulse .45s var(--toast-pop) calc(var(--toast-md) + .25s)}
.cyclone-toast[data-type=success] .cyclone-toast-badge::after{content:'';position:absolute;inset:1px;border-radius:50%;border:1.5px solid var(--toast-c);opacity:0;animation:cyclone-toast-ripple .7s cubic-bezier(.2,0,0,1) calc(var(--toast-md) + .25s)}
.cyclone-toast[data-type=error] .cyclone-toast-svg{animation:cyclone-toast-swap var(--toast-stack-dur) var(--toast-stack) .1s both,cyclone-toast-shake .42s cubic-bezier(.3,0,.3,1) calc(var(--toast-md) + .3s)}
.cyclone-toast[data-type=warning] .cyclone-toast-svg path:nth-child(2){stroke-dasharray:none;stroke-dashoffset:0;animation:cyclone-toast-drop .5s var(--toast-pop) var(--toast-md) both}
.cyclone-toast[data-type=warning] .cyclone-toast-svg path:nth-child(3){stroke-dasharray:none;stroke-dashoffset:0;animation:cyclone-toast-dot .38s var(--toast-pop) calc(var(--toast-md) + .16s) both}
.cyclone-toast[data-type=info] .cyclone-toast-svg path:nth-child(3){stroke-dasharray:none;stroke-dashoffset:0;animation:cyclone-toast-dot .4s var(--toast-pop) var(--toast-md) both}
.cyclone-toast[data-type=info] .cyclone-toast-svg path:nth-child(2){animation-delay:calc(var(--toast-md) + .16s)}
.cyclone-toast-body{position:absolute;inset-inline-start:calc(var(--toast-size) - 1px);top:-1px;display:flex;flex-wrap:wrap;align-items:center;gap:0 8px;width:max-content;
max-width:calc(100vw - 2*var(--toast-pad) - var(--toast-size) + 1px);min-height:var(--toast-size);padding-inline-end:8px;
opacity:calc(var(--toast-tp,0)*1.5 - .25);filter:blur(calc((1 - var(--toast-tp,0))*10px));transform:translateX(calc((1 - var(--toast-tp,0))*-12px*var(--toast-flip,1)))}
.cyclone-toast-body[data-wrapped]{padding-bottom:10px}
.cyclone-toast-body[data-wrapped] .cyclone-toast-copy{flex-basis:100%;max-width:none}
.cyclone-toast-body[data-wrapped] .cyclone-toast-copy + *{margin-inline-start:auto}
.cyclone-toast-copy{display:flex;flex-direction:column;width:max-content;max-width:min(340px,calc(100vw - 176px));padding-block:12px;padding-inline:0 6px;text-wrap:pretty;overflow-wrap:anywhere}
.cyclone-toast-ghost{position:absolute;inset-inline-start:0;top:0;pointer-events:none}
.cyclone-toast-extra{margin-inline-start:6px}
.cyclone-toast[data-phase=open] .cyclone-toast-desc{animation:cyclone-toast-in-up var(--toast-pop-dur) var(--toast-pop) .1s both}
.cyclone-toast-timer{position:absolute;inset:auto 0 0 0;height:2px;background:var(--toast-c);opacity:.45;transform-origin:left;animation:cyclone-toast-timer var(--toast-life) linear forwards;pointer-events:none}
.cyclone-toast-viewport:hover .cyclone-toast-timer,.cyclone-toast-viewport:has(:focus-visible) .cyclone-toast-timer,.cyclone-toast-viewport:has(.cyclone-toast-slot[data-shortcut-focus]:focus-within) .cyclone-toast-timer{animation-play-state:paused}
.cyclone-toast-progress{position:absolute;inset:auto 0 0 0;height:3px;background:color-mix(in srgb,var(--toast-on) 14%,transparent);opacity:var(--toast-tp,0);pointer-events:none}
.cyclone-toast-progress::after{content:'';position:absolute;inset:0;background:var(--toast-c);transform-origin:left;transform:scaleX(var(--toast-pg,0));transition:transform .3s cubic-bezier(.2,0,0,1)}
.cyclone-toast-action,.cyclone-toast-close{position:relative;display:flex;flex:none;opacity:calc(var(--toast-ap,0)*1.3 - .15);transform:scale(calc(.85 + var(--toast-ap,0)*.15))}
.cyclone-toast[data-phase=open] .cyclone-toast-action,.cyclone-toast[data-phase=open] .cyclone-toast-close{animation:cyclone-toast-in-btn var(--toast-pop-dur) var(--toast-pop) .16s backwards}
.cyclone-toast[data-phase=open] .cyclone-toast-secondary{animation-delay:.1s}
@keyframes cyclone-toast-out{to{transform:translateY(calc(var(--toast-dir)*12px)) scale(.92);opacity:0;filter:blur(4px)}}
@keyframes cyclone-toast-swap{from{opacity:0;scale:.25;filter:blur(4px)}}
@keyframes cyclone-toast-timer{to{transform:scaleX(0)}}
@keyframes cyclone-toast-in-btn{from{opacity:0;translate:0 8px;filter:blur(4px)}}
@keyframes cyclone-toast-in-up{from{opacity:0;transform:translateY(12px);filter:blur(4px)}}
@keyframes cyclone-toast-draw{to{stroke-dashoffset:0}}
@keyframes cyclone-toast-pulse{40%{transform:scale(1.14)}}
@keyframes cyclone-toast-ripple{from{opacity:.55;transform:scale(1)}to{opacity:0;transform:scale(1.9)}}
@keyframes cyclone-toast-shake{20%{translate:-2.5px 0}45%{translate:2.5px 0}70%{translate:-1.5px 0}to{translate:0}}
@keyframes cyclone-toast-drop{from{opacity:0;translate:0 -5px}}
@keyframes cyclone-toast-dot{from{opacity:0;scale:0}}
@keyframes cyclone-toast-fade{from{opacity:0}}
@media (prefers-reduced-motion:reduce){
.cyclone-toast{translate:none!important;scale:none!important;animation:cyclone-toast-fade .2s ease-out both}
.cyclone-toast[data-phase=exit],.cyclone-toast-body{filter:none!important;transform:none!important}
.cyclone-toast-svg,.cyclone-toast-desc,.cyclone-toast-media,.cyclone-toast-action,.cyclone-toast-close,.cyclone-toast-badge::after{animation:none!important}
.cyclone-toast-timer{display:none}
.cyclone-toast-svg path{animation:none!important;stroke-dashoffset:0!important}
.cyclone-toast-slot{transition-property:opacity}
}
`;
};

interface ToastSlotProps {
  item: ToastItem;
  /** 0 for the newest toast, counting up toward the oldest. */
  index: number;
  state: ToasterState;
}

const ToastSlot = ({ item, index, state }: ToastSlotProps) => {
  const slotRef = useRef<HTMLDivElement>(null);

  // Bound once the markup exists: the motion measures the body on its first
  // frame.
  useEffect(
    () => (slotRef.current ? bindToast(slotRef.current, item.id) : undefined),
    [item.id]
  );

  // Buttons are only reachable while the pill is open.
  const tabIndex = item.phase === "open" ? 0 : -1;
  const held =
    item.duration === 0 && item.type !== "loading" && !item.secondary;

  return (
    <Theme name={THEMES[item.type]}>
      {/* Focusable (with Alt + T) so a toast without buttons can be paused. */}
      <div
        ref={slotRef}
        className="cyclone-toast-slot"
        tabIndex={-1}
        style={{ "--toast-i": index } as CSSProperties}>
        <div
          className={
            item.className ? `cyclone-toast ${item.className}` : "cyclone-toast"
          }
          data-phase={item.phase}
          data-type={item.type}
          // Announced through the viewport's live regions, not here.
          style={{ "--toast-life": `${item.duration}ms` } as CSSProperties}>
          {(item.action ?? item.secondary) && item.duration > 0 && (
            <div key={item.duration} className="cyclone-toast-timer" />
          )}
          {item.progress !== undefined && (
            <div
              className="cyclone-toast-progress"
              style={{ "--toast-pg": item.progress } as CSSProperties}
            />
          )}
          <div className="cyclone-toast-icon">
            {item.image ? (
              <img
                className="cyclone-toast-media"
                src={item.image}
                alt=""
                width={28}
                height={28}
              />
            ) : (
              <div className="cyclone-toast-badge">
                {/* The ring keeps its path (and key) across a type change, so
                    a loading arc closes into the result's ring in place. */}
                <svg
                  className="cyclone-toast-svg"
                  viewBox="0 0 24 24"
                  width={22}
                  height={22}
                  aria-hidden="true">
                  {state.icons[item.type].map(d => (
                    <path key={d} d={d} pathLength={1} />
                  ))}
                </svg>
              </div>
            )}
          </div>
          <div className="cyclone-toast-body">
            <div className="cyclone-toast-copy">
              <BodyText
                className="cyclone-toast-title"
                size="xs"
                lineHeight="sm"
                fontWeight="semibold"
                fontVariant={["tabular-nums"]}
                color="emphasis">
                {item.title}
                {item.count > 1 && (
                  <BodyText
                    render="span"
                    className="cyclone-toast-extra"
                    size="xs"
                    lineHeight="sm"
                    color="subtle">
                    ×{item.count}
                  </BodyText>
                )}
                {item.meta && (
                  <BodyText
                    render="span"
                    className="cyclone-toast-extra"
                    size="xxs"
                    lineHeight="sm"
                    color="subtle">
                    {item.meta}
                  </BodyText>
                )}
              </BodyText>
              {item.description && (
                <BodyText
                  className="cyclone-toast-desc"
                  size="xxs"
                  lineHeight="xs"
                  marginTop={3}>
                  {item.description}
                </BodyText>
              )}
            </div>
            {item.secondary && (
              <div className="cyclone-toast-action cyclone-toast-secondary">
                <Button
                  theme="base"
                  variant="ghost"
                  size="sm"
                  rounded={true}
                  flexGrow={0}
                  tabIndex={tabIndex}
                  onPress={() => toast.act(item.id, "secondary")}>
                  <Button.Text>{item.secondary.label}</Button.Text>
                </Button>
              </div>
            )}
            {item.action && (
              <div className="cyclone-toast-action">
                <Button
                  theme="base"
                  variant="primary"
                  size="sm"
                  rounded={true}
                  flexGrow={0}
                  tabIndex={tabIndex}
                  onPress={() => toast.act(item.id)}>
                  <Button.Text>{item.action.label}</Button.Text>
                </Button>
              </div>
            )}
            {held && (
              <div className="cyclone-toast-close">
                <Button
                  theme="base"
                  variant="ghost"
                  size="sm"
                  circular={true}
                  tight={true}
                  aria-label={state.labels.dismiss}
                  tabIndex={tabIndex}
                  onPress={() => toast.close(item.id)}>
                  <Button.Icon>
                    <Close variant="bold" />
                  </Button.Icon>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Theme>
  );
};

export interface ToasterProps {
  /** Where the toasts appear. Defaults to `top-center`. */
  position?: ToastPosition;
  /** A Tamagui theme name, such as `dark`. Defaults to the page's theme. */
  theme?: string;
  /** Accessible names; keys you leave out keep their English default. */
  labels?: Partial<ToastLabels>;
  /** The page's Content Security Policy nonce, for the toast stylesheet. */
  nonce?: string;
}

/**
 * Renders the toasts shown with `toast`. Mount it once, near the root of the
 * app, then call `toast.success("Saved")` from anywhere.
 *
 * @example
 * <Toaster position="bottom-right" />
 */
export const Toaster = ({ position, theme, labels, nonce }: ToasterProps) => {
  const state = useSyncExternalStore(
    toast.subscribe,
    toast.getState,
    toast.getState
  );

  useEffect(
    () => toast.configure({ position, ...(theme !== undefined && { theme }) }),
    [position, theme]
  );

  // Keyed on the strings, so an inline `labels={{ … }}` doesn't reconfigure
  // the store every render.
  const region = labels?.region;
  const dismiss = labels?.dismiss;
  useEffect(
    () => toast.configure({ labels: { region, dismiss } }),
    [region, dismiss]
  );

  // Shared and counted: two Toasters must not fight over one listener.
  useEffect(() => retainToastKeys(), []);

  const css = useMemo(() => buildCss(state.springs), [state.springs]);

  const viewport = (
    <div
      className="cyclone-toast-viewport"
      role="region"
      aria-label={state.labels.region}
      data-position={state.position}
      // Hovering or keyboard focus pauses every timer.
      onPointerEnter={() => toast.pause()}
      onPointerLeave={event => {
        if (!event.currentTarget.contains(document.activeElement)) {
          toast.resume();
        }
      }}
      onFocus={event => {
        if (event.target.matches(":focus-visible")) {
          toast.pause();
        }
      }}
      onBlur={event => {
        if (
          !event.currentTarget.contains(event.relatedTarget) &&
          !event.currentTarget.matches(":hover")
        ) {
          toast.resume();
        }
      }}>
      <style nonce={nonce}>{css}</style>
      {/* Persistent live regions: errors are assertive, the rest polite. */}
      <VisuallyHidden role="status">
        <Text>{state.status}</Text>
      </VisuallyHidden>
      <VisuallyHidden role="alert">
        <Text>{state.alert}</Text>
      </VisuallyHidden>
      {state.toasts.map((item, index) => (
        <ToastSlot
          key={item.id}
          item={item}
          index={state.toasts.length - 1 - index}
          state={state}
        />
      ))}
    </div>
  );

  return state.theme ? <Theme name={state.theme}>{viewport}</Theme> : viewport;
};
