import { TPosition, WDate } from 'util/type';

import DateTime from './DateTime';
import Other from './Other';
import React from 'react';

export interface IDatePickerProps {
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
  position?: TPosition;
}

export default function (props: IDatePickerProps) {
  if (props.picker === 'date-time' || !props.picker) return (<DateTime {...props} />)

  return (<Other {...props} />)
}