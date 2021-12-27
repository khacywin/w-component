import React from "react";
interface Props {
    label?: string | JSX.Element;
    labelSub?: string;
    defaultValue?: boolean;
    value?: boolean;
    fnChange?: (val: boolean) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
