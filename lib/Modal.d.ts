/**
 * @prop {heading?} label
 * @prop {JSX.Element | JSX.Element[]} content
 * @prop {JSX.Element | JSX.Element[] ?} footer
 * @prop {boolean} show
 */
import React from "react";
export interface IProps {
    heading?: string;
    content?: JSX.Element | JSX.Element[] | string;
    children?: JSX.Element | JSX.Element[] | string;
    footer?: JSX.Element;
    fnClose?: () => void;
    noFooter?: boolean;
    show?: boolean;
    styled?: any;
}
export declare type TRefModal = {
    show: () => void;
    hide: () => void;
} & HTMLDivElement;
declare const _default: React.ForwardRefExoticComponent<IProps & React.RefAttributes<unknown>>;
export default _default;
