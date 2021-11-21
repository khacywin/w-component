import React from "react";
import { DatePickerProps } from ".";
interface DateTimeProps extends DatePickerProps {
    tabDefault?: "date" | "time";
}
declare const _default: React.MemoExoticComponent<({ fnChange, format, label, name, style, value, isRemove, defaultValue, disableItem, }: DateTimeProps) => JSX.Element>;
export default _default;
