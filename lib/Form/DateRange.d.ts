/// <reference types="react" />
import { WDate } from "util/type";
export interface IDateRangeProps {
    fnChange?: (val: any) => void;
    label?: string;
    name?: string;
    picker?: "year" | "month" | "date";
    defaultValue?: {
        from?: WDate;
        to?: WDate;
    };
    value?: {
        from?: WDate;
        to?: WDate;
    };
}
export default function DateRange({ fnChange, label, picker, value, defaultValue, }: IDateRangeProps): JSX.Element;
