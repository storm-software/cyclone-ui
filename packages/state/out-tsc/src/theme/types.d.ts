export type ColorThemeMode = "light" | "dark";
export type ColorThemeName = "base" | "brand" | "alternate" | "accent" | "link" | "discovery" | "info" | "warning" | "danger" | "success" | "positive" | "negative";
export declare const ColorThemeName: {
    readonly BASE: "base";
    readonly BRAND: "brand";
    readonly ALTERNATE: "alternate";
    readonly ACCENT: "accent";
    readonly LINK: "link";
    readonly DISCOVERY: "discovery";
    readonly INFO: "info";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly POSITIVE: "positive";
    readonly NEGATIVE: "negative";
};
export interface ThemeOptions {
    /**
     * The theme mode options.
     *
     * @defaultValue ["light", "dark"]
     */
    items: ColorThemeMode[];
    /**
     * The theme mode to default to.
     *
     * @defaultValue "dark"
     */
    defaultMode: ColorThemeMode;
}
export interface ThemeBaseState {
    /**
     * The theme store options.
     */
    options: ThemeOptions;
    /**
     * The current theme mode.
     */
    mode: ColorThemeMode;
}
//# sourceMappingURL=types.d.ts.map