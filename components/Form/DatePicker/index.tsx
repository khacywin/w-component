import DateTime from './DateTime';
import Other from './Other';
import React from 'react';
import { WDate } from 'components/util/type';

export interface DatePickerProps {
  fnChange?: (val: string) => void;
  format?: string;
  label?: string;
  name?: string;
  picker?: 'year' | 'month' | 'week' | 'date' | 'time' | 'date-time';
  range?: boolean;
  style?: React.CSSProperties;
  value?: WDate;
  isRemove?: boolean;
  defaultValue?: any;
  disableItem?: (date: any) => boolean;
}

export default function (props: DatePickerProps) {
  if (props.picker === 'date-time' || !props.picker) return (<DateTime {...props} />)

  return (<Other {...props} />)
}