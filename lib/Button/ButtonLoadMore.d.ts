import React from "react";
interface IProps {
    onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    children?: JSX.Element | string;
}
declare const _default: React.MemoExoticComponent<({ onClick, children }: IProps) => JSX.Element>;
export default _default;
