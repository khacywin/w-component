import React from "react";
export declare type ErrorFormGroup = {
    type: string;
    message: string;
};
interface Props {
    label?: string;
    labelFocus?: boolean;
    isFocus: boolean;
    id?: string;
    children: JSX.Element[] | JSX.Element;
    style?: React.CSSProperties;
    isInputTitle?: boolean;
    className?: string;
    inline?: boolean;
    error?: ErrorFormGroup;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
export declare const cssFocus: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    isInputTitle?: boolean;
}, any>>;
export declare const LabelCss: import("styled-components").FlattenSimpleInterpolation;
