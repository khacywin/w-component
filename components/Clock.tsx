/**
 * @prop {string} selected
 * @prop {(time: [number, number]) => void} fnSelected
 */

import React, { useCallback, useEffect, useState } from "react";
import { borderRadius, boxShadow, fontSize, space, zIndex } from "css/base";

import Icon from "components/atoms/Icon";
import clock_face from "assets/images/clock-face.svg";
import generatedId from "helps/generatedId";
import styled from "styled-components";
import transition from "css/transition";
import wdate from "w-date";

interface Props {
  selected?: string | Date; // 'HH:MM || date'
  fnSelected?: (time: [number, number]) => void; // function when selected time
}
export default React.memo(({ selected, fnSelected }: Props) => {
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
            <ClockTimeListsValue key={`${id}-${index}`}>
              {index < 10 ? `0${index}` : index}
            </ClockTimeListsValue>
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
          <Icon icon="i-arrow-up" small />
        </div>
      );

      arr.push(
        <div key={`${id}-down`} onClick={() => setValue(val + 1, max)}>
          <Icon icon="i-arrow-down" small />
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
      const _time: Date = selected ? wdate.identifyDate(selected) : wdate.now();
      setMinute(_time.getMinutes());
      setHour(_time.getHours());
    }
  }, [selected]);

  return (
    <ClockWrap>
      <input type="hidden" />
      <ClockAnalog minutes={minute} hours={hour % 12}>
        <div></div>
        <div></div>
        <div></div>
      </ClockAnalog>
      <ClockTime>
        <ClockTimeItem>
          <ClockTimeValue>{hour < 10 ? `0${hour}` : hour}</ClockTimeValue>
          <ClockTimeLists>{lists(hour, 23)}</ClockTimeLists>
        </ClockTimeItem>
        <span> : </span>
        <ClockTimeItem>
          <ClockTimeValue>{minute < 10 ? `0${minute}` : minute}</ClockTimeValue>
          <ClockTimeLists>{lists(minute, 59)}</ClockTimeLists>
        </ClockTimeItem>
      </ClockTime>
    </ClockWrap>
  );
});

const ClockWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

interface Time {
  hours: number;
  minutes: number;
}
const ClockAnalog = styled.div<Time>`
  background-image: url(${clock_face});
  background-size: cover;
  border-radius: 50%;
  height: 200px;
  position: relative;
  width: 200px;

  div:first-of-type {
    background-color: var(--dark);
    height: 20%;
    left: calc(50% - 1px);
    position: absolute;
    top: 30%;
    transform-origin: calc(100% - 1px) calc(100% - 1px);
    transform: ${(props) =>
      `rotate(${props.hours * 30 + props.minutes * 0.5}deg)`};
    width: 2px;
  }

  div:last-of-type {
    background-color: var(--dark);
    height: 30%;
    left: calc(50% - 0.5px);
    position: absolute;
    top: 20%;
    transform-origin: calc(100% - 0.5px) calc(100% - 0.5px);
    transform: ${(props) => `rotate(${props.minutes * 6}deg)`};
    width: 1px;
  }

  div:nth-of-type(2) {
    background-color: var(--dark);
    border-radius: 50%;
    height: 5px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 5px;
  }
`;

const ClockTimeItem = styled.div`
  position: relative;
`;

const ClockTimeValue = styled.div`
  ${fontSize.big};
  ${space.P4.x};
  ${space.P2.y};
  cursor: pointer;
`;

const ClockTimeLists = styled.ul`
  background-color: var(--backgroundContent);
  height: auto;
  left: 0;
  position: absolute;
  text-align: center;
  top: -337%;
  transform: scaleY(0);
  transition-property: transform;
  width: 100%;
  ${transition.linear};
  ${borderRadius.normal};
  ${space.P1.a};
  ${zIndex.front_5};
  ${boxShadow.normal};

  & > li {
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: space-around;
    list-style: none;
    user-select: none;
    width: 100%;
    ${space.P2.a};
    ${space.M1.y};
    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }

  & > div {
    cursor: pointer;
  }
`;

const ClockTimeListsValue = styled.div`
  background-color: var(--default);
  cursor: pointer;
  height: 30px;
  left: 50%;
  line-height: 30px;
  position: relative;
  transform: translate(-50%, 0);
  width: 150%;
  ${borderRadius.normal};
`;

const ClockTime = styled.div`
  align-items: center;
  display: flex;
  ${space.M3.t};

  span {
    ${space.M2.x};
  }

  &:hover ${ClockTimeLists} {
    transform: scaleY(1);
  }
`;

type MaxTime = 23 | 59;
