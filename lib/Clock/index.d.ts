/**
 * @prop {string} selected
 * @prop {(time: [number, number]) => void} fnSelected
 */
import React from "react";
interface ClockProps {
    selected?: string | Date;
    fnSelected?: (time: [number, number]) => void;
}
declare const _default: React.MemoExoticComponent<({ selected, fnSelected }: ClockProps) => JSX.Element>;
export default _default;
