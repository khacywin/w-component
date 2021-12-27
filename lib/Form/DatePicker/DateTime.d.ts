import React from "react";
import { IDatePickerProps } from ".";
interface IProps extends IDatePickerProps {
    tabDefault?: "date" | "time";
}
declare const _default: React.MemoExoticComponent<({ fnChange, format, label, name, style, value, isRemove, defaultValue, disableItem, }: IProps) => JSX.Element>;
export default _default;
