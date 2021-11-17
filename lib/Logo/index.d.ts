/// <reference types="react" />
import './index.scss';
export interface LogoProps {
    text?: boolean;
    img?: string;
}
declare const Logo: ({ text, img }: LogoProps) => JSX.Element;
export default Logo;
