type ThemeVars = "dark" | "light";
type Theme = {
    name?: ThemeVars;
    changeTheme: (name: ThemeVars) => void;
    toggleTheme: () => void;
};
export declare const useThemeState: import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand/vanilla").StoreApi<Theme>>;
export declare const useThemeNameState: (defaultName?: ThemeVars) => ThemeVars | undefined;
export declare const useThemeToggle: () => () => void;
export {};
//# sourceMappingURL=theme-state.d.ts.map