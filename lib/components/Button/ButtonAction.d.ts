import React from "react";
declare type TypeButton = "submit" | "button";
export interface ButtonActionProps {
    children: any;
    label?: string;
    isLabel?: "on" | "off";
    positionLabel?: TPositionLabel;
    action?: ({ ...arg }: {
        [x: string]: any;
    }) => void;
    onClick?: ({ ...arg }: {
        [x: string]: any;
    }) => void;
    isActive?: boolean;
    type?: TypeButton;
    className?: string;
}
declare const _default: React.ForwardRefExoticComponent<ButtonActionProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * ButtonAction
 * @property {any} children
 * @property {string} label - optional
 * @property {'on' | 'off'} isLabel - optional
 * @property {'left' | 'right' | 'right-bottom' | 'left-bottom'} positionLabel - optional
 * @property {boolean} isActive - optional
 * @property {TypeButton} type - optional
 * @property {string} className - optional
 * @property {RefObject<HTMLButtonElement>} refElement - optional
 * @property {void} action - optional
 * @property {void} onClick - optional
 */
export default _default;
