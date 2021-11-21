/**
 * Checkbox component
 * @props color: color of checkbox when checked
 * @props checked
 * @props fnChanged: function
 * @props labelChecked
 */
import React from "react";
export interface CheckboxProps {
    color?: string;
    labelChecked?: string[];
    label?: string | JSX.Element;
    id?: string;
    name?: string;
    value?: boolean;
    className?: string;
    fnChange?: (checked: boolean) => void;
}
declare const _default: React.MemoExoticComponent<(props: CheckboxProps) => JSX.Element>;
export default _default;
