import React from "react";
interface IProps {
    id: number;
    title?: string;
    message?: string;
    type: "normal" | "yes/no";
    fnOk?: () => void;
    fnYes?: () => void;
    fnNo?: () => void;
}
declare const _default: React.MemoExoticComponent<({ title, message, type, fnOk, fnYes, fnNo, id }: IProps) => JSX.Element>;
export default _default;
