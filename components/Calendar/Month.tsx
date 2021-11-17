import React, { useCallback, useEffect, useMemo, useState } from "react";

import ButtonAction from "components/Button/ButtonAction";
import Icon from "components/Icon";
import _t from "components/util/helps/_t";

export interface MonthPickerProps {
  selected?: Date;
  fnSelected?: (year: Date) => void;
  disableItem?: (date: any) => boolean;
}

export default function ({
  selected = new Date(),
  fnSelected,
  disableItem,
}: MonthPickerProps) {
  const [year, setYear] = useState(new Date().getFullYear());

  const list = useMemo(
    () => [
      {
        value: 0,
        label: _t("Jan"),
      },
      {
        value: 1,
        label: _t("Feb"),
      },
      {
        value: 2,
        label: _t("Mar"),
      },
      {
        value: 3,
        label: _t("Apr"),
      },
      {
        value: 4,
        label: _t("May"),
      },
      {
        value: 5,
        label: _t("Jun"),
      },
      {
        value: 6,
        label: _t("Jul"),
      },
      {
        value: 7,
        label: _t("Aug"),
      },
      {
        value: 8,
        label: _t("Sep"),
      },
      {
        value: 9,
        label: _t("Oct"),
      },
      {
        value: 10,
        label: _t("Nov"),
      },
      {
        value: 11,
        label: _t("Dec"),
      },
    ],
    []
  );

  const onSelected = useCallback(
    (month) => () => {
      fnSelected(new Date(`${year}/${month + 1}`));
    },
    [fnSelected, year]
  );

  const previousYear = useCallback(() => {
    setYear((year) => year - 1);
  }, []);

  const nextYear = useCallback(() => {
    setYear((year) => year + 1);
  }, []);

  useEffect(() => {
    setYear(selected.getFullYear());
  }, [selected]);

  return (
    <div className="w-calendar-month">
      <div className="w-calendar-month-head">
        <div>{year}</div>
        <div className="w-calendar-month-button-section">
          <ButtonAction action={previousYear}>
            <Icon icon="i-arrow-left" />
          </ButtonAction>
          <ButtonAction action={nextYear}>
            <Icon icon="i-arrow-right" />
          </ButtonAction>
        </div>
      </div>
      <div className="w-calendar-month-list">
        {list.map((month) => (
          <li
            className={`w-calendar-month-item 
            ${
              month.value === selected.getMonth() &&
              year === selected.getFullYear()
                ? "active"
                : ""
            }
            ${disableItem?.(`${year}-${month.value + 1}`) ? "disable" : ""}
            `}
            key={month.value}
            onClick={onSelected(month.value)}
          >
            {month.label}
          </li>
        ))}
      </div>
    </div>
  );
}
