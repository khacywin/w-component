import React from "react";
export interface SwitchProps {
    label?: string | JSX.Element;
    labelSub?: string;
    defaultValue?: boolean;
    value?: boolean;
    fnChange?: (val: boolean) => void;
}
declare const _default: React.MemoExoticComponent<(props: SwitchProps) => JSX.Element>;
export default _default;
