import React, { useCallback, useMemo } from 'react';

import DatePicker from './DatePicker';
import Icon from 'components/Icon';
import { WDate } from 'components/util/type';
import dayjs from 'dayjs';

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

export default function DateRange({
  fnChange,
  label,
  picker = 'date',
  value = {},
  defaultValue = {},
}: DateRangeProps) {
  const format: any = useMemo(() => {
    switch (picker) {
      case 'date':
        return 'DD MMM, YYYY';

      case 'month':
        return 'MMM, YYYY';

      case 'year':
        return 'YYYY';

      default:
        break;
    }

    return 'DD MMM, YYYY';
  }, [picker]);

  const disablePrevious = useCallback((date: string | Date) => {
    const _date = dayjs(date);

    return value.from ?
      _date.isBefore(dayjs(value.from)) :
      defaultValue.from ?
        _date.isBefore(dayjs(defaultValue.from))
        : false
  }, [defaultValue.from, value.from]);

  const disableNext = useCallback((date: string | Date) => {
    const _date = dayjs(date);

    return value.to ?
      _date.isAfter(dayjs(value.to)) :
      defaultValue.to ?
        _date.isAfter(dayjs(defaultValue.to))
        : false
  }, [defaultValue.to, value.to]);

  const onChangeFrom = (_val: string) => {
    let valTemp: any = _val;
    if (disableNext(_val)) valTemp = value.to;

    fnChange?.({
      from: valTemp,
      to: value.to,
    });
  };

  const onChangeTo = (_val: string) => {
    let valTemp: any = _val;
    if (disablePrevious(_val)) valTemp = value.from;

    fnChange?.({
      from: value.from,
      to: valTemp,
    });
  };

  return (
    <div className='w-date-range'>
      <div className='w-form-focus w-form-label'>{label}</div>
      <DatePicker
        picker={picker}
        value={value.from}
        defaultValue={defaultValue.from}
        fnChange={onChangeFrom}
        format={format}
        isRemove={false}
        disableItem={disableNext}
      />
      <span>
        <Icon icon='i-transfer' />
      </span>
      <DatePicker
        picker={picker}
        value={value.to}
        defaultValue={defaultValue.to}
        fnChange={onChangeTo}
        format={format}
        isRemove={false}
        disableItem={disablePrevious}
      />
    </div>
  );
}