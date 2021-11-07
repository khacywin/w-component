import React, { RefObject } from 'react';
export declare type TRefDialog = {
    show: () => void;
    hide: () => void;
} & HTMLBaseElement;
export interface DialogProps {
    children: JSX.Element;
    clickOut?: boolean;
    position?: TPosition[];
    setIsShow?: (...arg: any) => void;
    refParent: RefObject<any>;
}
declare const _default: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<unknown>>;
export default _default;
