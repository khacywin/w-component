/**
 * @prop {string} selected
 * @prop {(time: [number, number]) => void} fnSelected
 */
import React from "react";
interface Props {
    selected?: string | Date;
    fnSelected?: (time: [number, number]) => void;
}
declare const _default: React.MemoExoticComponent<({ selected, fnSelected }: Props) => JSX.Element>;
export default _default;
