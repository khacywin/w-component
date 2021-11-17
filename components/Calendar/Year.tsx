import React, { useCallback, useEffect, useState } from "react";

import ButtonAction from "components/Button/ButtonAction";
import Icon from "components/Icon";

export interface YearPickerProps {
  selected?: string;
  fnSelected?: (year: string) => void;
  disableItem?: (date: any) => boolean;
}

export default function ({
  selected,
  fnSelected,
  disableItem,
}: YearPickerProps) {
  const [list, setList] = useState<number[]>([]);

  const _onSelected = useCallback(
    (value) => () => {
      fnSelected(value.toString());
    },
    [fnSelected]
  );

  const _setPreviousListYear = useCallback(() => {
    setList((list) => list.map((item: number) => item - 10));
  }, []);

  const _setNextListYear = useCallback(() => {
    setList((list) => list.map((item: number) => item + 10));
  }, []);

  useEffect(() => {
    const _year = +new Date(selected.toString()).getFullYear();
    const _list: number[] = [];

    for (
      let i = Math.floor(_year / 10) * 10 - 1;
      i <= Math.floor(_year / 10) * 10 + 10;
      i++
    ) {
      _list.push(i);
    }

    setList(_list);
  }, [selected]);

  return (
    <div className="w-calendar-year">
      <ButtonAction action={_setPreviousListYear}>
        <Icon icon="i-arrow-up" />
      </ButtonAction>

      <div className="w-calendar-year-list">
        {list.map((year, idx) => (
          <li
            className={`w-calendar-year-item
              ${year === +selected ? "active" : ""}
              ${disableItem?.(year.toString()) ? "disable" : ""}
            `}
            key={idx}
            onClick={_onSelected(year)}
          >
            {year}
          </li>
        ))}
      </div>

      <ButtonAction action={_setNextListYear}>
        <Icon icon="i-arrow-down" />
      </ButtonAction>
    </div>
  );
}