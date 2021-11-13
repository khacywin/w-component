/// <reference types="react" />
import { TPosition } from "components/util/type";
export interface TooltipProps {
    children: JSX.Element;
    title: string | JSX.Element;
    position?: TPosition;
}
export default function Tooltip({ children, title, position, }: TooltipProps): JSX.Element;
