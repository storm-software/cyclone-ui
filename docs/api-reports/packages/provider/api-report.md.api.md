## API Report File for "@cyclone-ui/provider"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import { JSX } from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';
import { StoreApi } from 'zustand/vanilla';
import { TamaguiProviderProps } from '@tamagui/web';
import { Toast } from '@tamagui/toast';
import { ToastProviderProps as ToastProviderProps_2 } from '@tamagui/toast';
import { ToastViewport } from '@tamagui/toast';
import { UseBoundStoreWithEqualityFn } from 'zustand/traditional';
import { useToastController } from '@tamagui/toast';
import { useToastState } from '@tamagui/toast';
import { ViewProps } from '@tamagui/core';

// @public (undocumented)
const getMessageHeading: (message: string, options: MessageOptions) => string;
export { getMessageHeading }
export { getMessageHeading as getMessageHeading_alias_1 }

// @public (undocumented)
type MessageOptions = Omit<MessageProps, "message">;
export { MessageOptions }
export { MessageOptions as MessageOptions_alias_1 }

// @public (undocumented)
interface MessageProps {
    // (undocumented)
    heading?: string;
    // (undocumented)
    icon?: React.ReactNode;
    // (undocumented)
    message: string;
    // (undocumented)
    theme?: string;
}
export { MessageProps }
export { MessageProps as MessageProps_alias_1 }

// @public (undocumented)
const Provider: ({ children, toast, theme, ...props }: ProviderProps) => JSX.Element;
export { Provider }
export { Provider as Provider_alias_1 }

// @public (undocumented)
type ProviderProps = PropsWithChildren<{
    toast?: ToastProviderProps;
    theme?: ThemeProviderProps;
}>;
export { ProviderProps }
export { ProviderProps as ProviderProps_alias_1 }

// @public (undocumented)
const ProviderServer: ({ children, toast, theme, ...props }: ProviderServerProps) => JSX.Element;
export { ProviderServer }
export { ProviderServer as ProviderServer_alias_1 }

// @public (undocumented)
type ProviderServerProps = PropsWithChildren<{
    toast?: ToastProviderProps;
    theme?: ThemeProviderServerProps;
}>;
export { ProviderServerProps }
export { ProviderServerProps as ProviderServerProps_alias_1 }

// @public (undocumented)
const ThemeProvider: ({ children, ...props }: ThemeProviderProps) => JSX.Element;
export { ThemeProvider }
export { ThemeProvider as ThemeProvider_alias_1 }

// @public (undocumented)
type ThemeProviderProps = PropsWithChildren<Partial<TamaguiProviderProps> & Omit<TamaguiProviderProps, "defaultTheme">>;
export { ThemeProviderProps }
export { ThemeProviderProps as ThemeProviderProps_alias_1 }

// @public (undocumented)
const ThemeProviderServer: ({ children, ...props }: ThemeProviderServerProps) => JSX.Element;
export { ThemeProviderServer }
export { ThemeProviderServer as ThemeProviderServer_alias_1 }

// @public (undocumented)
type ThemeProviderServerProps = PropsWithChildren<Partial<TamaguiProviderProps> & Omit<TamaguiProviderProps, "defaultTheme">>;
export { ThemeProviderServerProps }
export { ThemeProviderServerProps as ThemeProviderServerProps_alias_1 }

export { Toast }

// @public (undocumented)
const ToastProvider: ({ children, ...props }: ToastProviderProps) => JSX.Element;
export { ToastProvider }
export { ToastProvider as ToastProvider_alias_1 }

// @public (undocumented)
type ToastProviderProps = PropsWithChildren<Partial<ToastProviderProps_2> & Omit<ToastProviderProps_2, "id" | "label">>;
export { ToastProviderProps }
export { ToastProviderProps as ToastProviderProps_alias_1 }

export { ToastViewport }

// @public (undocumented)
type ToastViewportProps = ViewProps & {
    hotkey?: string[];
    label?: string;
    name?: string;
    multipleToasts?: boolean;
    portalToRoot?: boolean;
};
export { ToastViewportProps }
export { ToastViewportProps as ToastViewportProps_alias_1 }

// @public (undocumented)
const useMessageController: () => UseMessageControllerResult;
export { useMessageController }
export { useMessageController as useMessageController_alias_1 }

// @public (undocumented)
interface UseMessageControllerResult {
    // (undocumented)
    hide: () => void;
    // (undocumented)
    nativeToast: any;
    // (undocumented)
    options?: any;
    // (undocumented)
    show: (message: string, options: MessageOptions) => void;
    // (undocumented)
    showError: (message: string, options: MessageOptions) => void;
    // (undocumented)
    showHelp: (message: string, options: MessageOptions) => void;
    // (undocumented)
    showInfo: (message: string, options: MessageOptions) => void;
    // (undocumented)
    showSuccess: (message: string, options: MessageOptions) => void;
    // (undocumented)
    showWarning: (message: string, options: MessageOptions) => void;
}
export { UseMessageControllerResult }
export { UseMessageControllerResult as UseMessageControllerResult_alias_1 }

// @public (undocumented)
const useThemeNameState: (defaultName?: ThemeVars) => ThemeVars | undefined;
export { useThemeNameState }
export { useThemeNameState as useThemeNameState_alias_1 }

// @public (undocumented)
const useThemeState: UseBoundStoreWithEqualityFn<StoreApi<Theme>>;
export { useThemeState }
export { useThemeState as useThemeState_alias_1 }

// @public (undocumented)
const useThemeToggle: () => () => void;
export { useThemeToggle }
export { useThemeToggle as useThemeToggle_alias_1 }

export { useToastController }

export { useToastState }

// (No @packageDocumentation comment for this package)

```
