import { TPosition, WDate } from 'util/type';
import React from 'react';
import wdate from 'w-date';
export interface IDatePickerProps {
    fnChange?: (val: string) => void;
    format?: wdate.formatDate;
    label?: string;
    name?: string;
    picker?: 'year' | 'month' | 'week' | 'date' | 'time' | 'date-time';
    range?: boolean;
    style?: React.CSSProperties;
    value?: WDate;
    isRemove?: boolean;
    defaultValue?: any;
    disableItem?: (date: any) => boolean;
    position?: TPosition;
}
export default function (props: IDatePickerProps): JSX.Element;
