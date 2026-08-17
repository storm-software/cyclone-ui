import type { ToastProviderProps as TamaguiToastProviderProps } from "@tamagui/toast";
import type { PropsWithChildren } from "react";
/**
 * The properties provided to the MessageProvider component.
 */
export type MessageProviderProps = PropsWithChildren<Partial<TamaguiToastProviderProps> & Omit<TamaguiToastProviderProps, "id" | "label">>;
/**
 * The MessageProvider component is a wrapper for the Tamagui ToastProvider component.
 *
 * @example
 * <MessageProvider>
 *   <App />
 * </MessageProvider>
 */
export declare const MessageProvider: ({ children, ...props }: MessageProviderProps) => import("react").JSX.Element;
//# sourceMappingURL=MessageProvider.d.ts.map