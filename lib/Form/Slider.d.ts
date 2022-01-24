import React from "react";
export interface SliderProps {
    defaultValue?: number;
    disabled?: boolean;
    fnChange?: (val: number) => void;
    label?: string;
    name?: string;
    style?: React.CSSProperties;
    value?: number;
    total?: number;
    inline?: boolean;
    color?: string;
    backgroundColor?: string;
    step?: number;
}
declare const _default: React.MemoExoticComponent<({ fnChange, label, name, style, value, total, defaultValue, inline, backgroundColor, color, step, }: SliderProps) => JSX.Element>;
export default _default;
