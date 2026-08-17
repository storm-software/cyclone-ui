import type { ViewProps } from "@tamagui/core";
export type BaseMessageViewportProps = ViewProps & {
    /**
     * The keys to use as the keyboard shortcut that will move focus to the toast viewport.
     * @defaultValue ['F8']
     */
    hotkey?: string[];
    /**
     * An author-localized label for the toast viewport to provide context for screen reader users
     * when navigating page landmarks. The available `\{hotkey\}` placeholder will be replaced for you.
     * @defaultValue 'Storm Notifications (\{hotkey\})'
     */
    label?: string;
    /**
     * Used to reference the viewport if you want to have multiple viewports in the same provider.
     */
    name?: string;
    /**
     * Pass this when you want to have multiple/duplicated toasts.
     *
     * @defaultValue true
     */
    multipleToasts?: boolean;
    /**
     * When true, uses a portal to render at the very top of the root TamaguiProvider.
     *
     * @defaultValue true
     */
    portalToRoot?: boolean;
};
//# sourceMappingURL=types.d.ts.map