/// <reference types="react" />
interface PropsStyled {
    dark?: boolean;
    error?: boolean;
    normal?: boolean;
    primary?: boolean;
    success?: boolean;
    warning?: boolean;
}
export interface ButtonProps extends PropsStyled {
    children: any;
    type?: "submit" | "button" | "reset";
    className?: string;
    fnClick?: () => void;
}
export default function ({ children, className, error, fnClick, normal, primary, success, type, warning, }: ButtonProps): JSX.Element;
export { default as ButtonAction } from "./ButtonAction";
export { default as ButtonLoadMore } from "./ButtonLoadMore";
export declare const cssButton: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<PropsStyled, any>>;
