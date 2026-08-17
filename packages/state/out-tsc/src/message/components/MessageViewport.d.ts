import type { PropsWithChildren } from "react";
import type { BaseMessageViewportProps } from "../types";
/**
 * The properties provided to the BaseMessageProvider component.
 */
export type MessageViewportProps = PropsWithChildren<BaseMessageViewportProps>;
/**
 * The BaseMessageProvider component is a wrapper for the Tamagui ToastProvider component.
 *
 * @example
 * <MessageProvider>
 *   <App />
 *   <MessageViewport />
 * </MessageProvider>
 */
export declare const MessageViewport: ({ children, ...props }: MessageViewportProps) => import("react").JSX.Element;
//# sourceMappingURL=MessageViewport.d.ts.map