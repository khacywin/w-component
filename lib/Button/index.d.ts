/// <reference types="react" />
interface PropsStyled {
    dark?: boolean;
    error?: boolean;
    normal?: boolean;
    primary?: boolean;
    success?: boolean;
    warning?: boolean;
}
interface Props {
    children: any;
    type?: "submit" | "button" | "reset";
    className?: string;
    fnClick?: () => void;
}
export default function ({ children, className, error, fnClick, normal, primary, success, type, warning, }: Props & PropsStyled): JSX.Element;
export declare const cssButton: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<PropsStyled, any>>;
export {};
