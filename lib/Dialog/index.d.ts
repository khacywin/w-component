import React, { RefObject } from "react";
import { TPosition } from "util/type";
export declare type TRefDialog = {
    show: () => void;
    hide: () => void;
} & HTMLBaseElement;
interface IProps {
    children: JSX.Element;
    clickOut?: boolean;
    position?: TPosition[];
    setIsShow?: (...arg: any) => void;
    refParent: RefObject<any>;
}
declare const _default: React.ForwardRefExoticComponent<IProps & React.RefAttributes<unknown>>;
export default _default;
