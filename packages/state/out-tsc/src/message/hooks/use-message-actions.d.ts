import type { MessageDetails } from "@stryke/types/messages";
export type MessageOptions = Omit<MessageDetails, "message"> & {
    heading?: string;
    eyebrow?: string;
};
export interface UseMessageActionsResult {
    show: (message: string, options?: Partial<MessageOptions>) => void;
    showInfo: (message: string, options?: Omit<MessageOptions, "type">) => void;
    showSuccess: (message: string, options?: Omit<MessageOptions, "type">) => void;
    showWarning: (message: string, options?: Omit<MessageOptions, "type">) => void;
    showError: (message: string, options?: Omit<MessageOptions, "type">) => void;
    showHelp: (message: string, options?: Omit<MessageOptions, "type">) => void;
    hide: () => void;
    nativeToast: any;
    options?: any;
}
export declare const useMessageActions: () => UseMessageActionsResult;
//# sourceMappingURL=use-message-actions.d.ts.map