/// <reference types="react" />
import { WDate } from 'components/util/type';
export interface DateRangeProps {
    fnChange?: (val: any) => void;
    label?: string;
    name?: string;
    picker?: 'year' | 'month' | 'date';
    defaultValue?: {
        from?: WDate;
        to?: WDate;
    };
    value?: {
        from?: WDate;
        to?: WDate;
    };
}
export default function DateRange({ fnChange, label, picker, value, defaultValue, }: DateRangeProps): JSX.Element;
