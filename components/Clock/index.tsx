/**
 * @prop {string} selected
 * @prop {(time: [number, number]) => void} fnSelected
 */

import React, { useCallback, useEffect, useState } from "react";

import Icon from "components/Icon";
import generatedId from "components/util/helps/generateKey";
import i_arrow_down from "components/util/assets/icon/arrow-down.svg";
import i_arrow_up from "components/util/assets/icon/arrow-up.svg";

interface ClockProps {
  selected?: string | Date; // 'HH:MM || date'
  fnSelected?: (time: [number, number]) => void; // function when selected time
}
export default React.memo(({ selected, fnSelected }: ClockProps) => {
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  /**
   * @param _hour
   */
  const changeHour = useCallback(
    (_hour: number) => {
      setHour(_hour);
      fnSelected?.([_hour, minute]);
    },
    [fnSelected, minute]
  );

  /**
   * @param _minute
   */
  const changeMinute = useCallback(
    (_minute: number) => {
      setMinute(_minute);
      fnSelected?.([hour, _minute]);
    },
    [fnSelected, hour]
  );

  /**
   * TODO
   * Set value
   */
  const setValue = useCallback(
    (val: number, max: MaxTime) => {
      if (max === 23) {
        if (val === -1) changeHour(max);
        else if (val === max + 1) changeHour(1);
        else changeHour(val);
      } else {
        if (val === -1) changeMinute(max);
        else if (val === max + 1) changeMinute(1);
        else changeMinute(val);
      }
    },
    [changeHour, changeMinute]
  );

  /**
   * Print list
   * @param {number} val
   * @param {60| 24} max
   */
  const lists = useCallback(
    (val = 1, max: MaxTime) => {
      const id = generatedId("list");
      const arr: any[] = []; // contains list elements
      const start = val - 2 >= 0 ? val - 2 : 0;
      const _max = val + 2 <= max ? val + 2 : max;

      // Previous time
      if (val < 3) {
        for (let index = max + val - 1; index <= max; index++) {
          arr.push(
            <li key={`${id}-${index}`} onClick={() => setValue(index, max)}>
              {index < 10 ? `0${index}` : index}
            </li>
          );
        }
      }

      /** Push time */
      for (let index = start; index <= _max; index++) {
        if (index === val)
          arr.push(
            <div className="w-clock-time-list-value" key={`${id}-${index}`}>
              {index < 10 ? `0${index}` : index}
            </div>
          );
        else
          arr.push(
            <li key={`${id}-${index}`} onClick={() => setValue(index, max)}>
              {index < 10 ? `0${index}` : index}
            </li>
          );
      }

      // Previous time
      if (val > max - 2) {
        for (let index = 0; index <= val + 1 - max; index++) {
          arr.push(
            <li key={`${id}-${index}`} onClick={() => setValue(index, max)}>
              {index < 10 ? `0${index}` : index}
            </li>
          );
        }
      }

      /**
       * TODO
       * Add arrow change list
       */
      arr.unshift(
        <div key={`${id}-up`} onClick={() => setValue(val - 1, max)}>
          <Icon src={i_arrow_up} small />
        </div>
      );

      arr.push(
        <div key={`${id}-down`} onClick={() => setValue(val + 1, max)}>
          <Icon src={i_arrow_down} small />
        </div>
      );

      return <>{arr.map((item: any) => item)}</>;
    },
    [setValue]
  );

  useEffect(() => {
    if (!selected) return;

    if (typeof selected === "string") {
      const _time = selected.split(":");
      setMinute(+_time[1] || 0);
      setHour(+_time[0] || 0);
    } else {
      const _time: Date = selected ? new Date(selected) : new Date();

      setMinute(_time.getMinutes());
      setHour(_time.getHours());
    }
  }, [selected]);

  return (
    <div className="w-clock">
      <input type="hidden" />
      <div
        className="w-clock-analog"
        data-minutes={minute}
        data-hours={hour % 12}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="w-clock-time">
        <div className="w-clock-time-wrap">
          <div className="w-clock-time-value">
            {hour < 10 ? `0${hour}` : hour}
          </div>
          <div className="w-clock-time-list">{lists(hour, 23)}</div>
        </div>
        <span> : </span>
        <div className="w-clock-time-wrap">
          <div className="w-clock-time-value">
            {minute < 10 ? `0${minute}` : minute}
          </div>
          <div className="w-clock-time-list">{lists(minute, 59)}</div>
        </div>
      </div>
    </div>
  );
});

type MaxTime = 23 | 59;
