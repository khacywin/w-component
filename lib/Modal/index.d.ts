/**
 * @prop {heading?} label
 * @prop {JSX.Element | JSX.Element[]} content
 * @prop {JSX.Element | JSX.Element[] ?} footer
 * @prop {boolean} show
 */
import React from 'react';
import { IObject } from 'components/util/type';
export interface ModalProps {
    heading?: string;
    content?: JSX.Element | JSX.Element[] | string;
    children?: JSX.Element | JSX.Element[] | string;
    footer?: JSX.Element;
    fnClose?: () => void;
    noFooter?: boolean;
    show?: boolean;
    styled?: IObject;
}
export declare type TRefModal = {
    show: () => void;
    hide: () => void;
} & HTMLDivElement;
declare const _default: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<unknown>>;
export default _default;
