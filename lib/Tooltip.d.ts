/// <reference types="react" />
import { TPosition } from "util/type";
export interface ITooltipProps {
    children: JSX.Element;
    title: string | JSX.Element;
    position?: TPosition;
}
export default function Tooltip({ children, title, position, }: ITooltipProps): JSX.Element;
