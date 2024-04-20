import type { GetProps } from "@tamagui/core";
import { TextInput } from "react-native";
export declare const defaultStyles: {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$background";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusStyle: {
        readonly borderColor: "$borderColorFocus";
    };
    readonly focusVisibleStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
    };
    readonly tabIndex: number;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
} | {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$background";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusStyle: {
        readonly borderColor: "$borderColorFocus";
    };
    readonly focusVisibleStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
    };
    readonly focusable: boolean;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
};
export declare const InputFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, TextInput, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
}>;
export type Input = TextInput;
export type InputFrameProps = GetProps<typeof InputFrame>;
export type InputExtraProps = {
    rows?: number;
};
export type InputProps = InputFrameProps & InputExtraProps;
export declare const Input: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}>, "rows"> & InputExtraProps, TextInput, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & InputExtraProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
}>;
export type UseInputResult = InputProps & {
    readOnly?: boolean;
    ref: (node: any) => void;
    onChangeText: (value: any) => void;
    placeholderTextColor: any;
};
export declare function useInputProps(props: InputProps, ref: any): UseInputResult;
//# sourceMappingURL=Input.d.ts.map