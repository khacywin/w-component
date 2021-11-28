import React, { useState, useCallback, useEffect } from 'react';
import { b as big, a as P4, P as P2, n as normal, c as P1, f as front_5, d as normal$1, M as M1, e as M3, g as M2 } from './_lineOverflow-fd1b0d7f.js';
import { I as Icon } from './Icon-69b9e7b0.js';
import clock_face from 'assets/images/clock-face.svg';
import { g as generatedId } from './generatedId-52e731a2.js';
import styled from 'styled-components';
import { t as transition } from './index-6556b1ec.js';
import { w as wDate } from './index-3b6eefee.js';

/**
 * @prop {string} selected
 * @prop {(time: [number, number]) => void} fnSelected
 */
var Clock = React.memo(({ selected, fnSelected }) => {
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    /**
     * @param _hour
     */
    const changeHour = useCallback((_hour) => {
        setHour(_hour);
        fnSelected === null || fnSelected === void 0 ? void 0 : fnSelected([_hour, minute]);
    }, [fnSelected, minute]);
    /**
     * @param _minute
     */
    const changeMinute = useCallback((_minute) => {
        setMinute(_minute);
        fnSelected === null || fnSelected === void 0 ? void 0 : fnSelected([hour, _minute]);
    }, [fnSelected, hour]);
    /**
     * TODO
     * Set value
     */
    const setValue = useCallback((val, max) => {
        if (max === 23) {
            if (val === -1)
                changeHour(max);
            else if (val === max + 1)
                changeHour(1);
            else
                changeHour(val);
        }
        else {
            if (val === -1)
                changeMinute(max);
            else if (val === max + 1)
                changeMinute(1);
            else
                changeMinute(val);
        }
    }, [changeHour, changeMinute]);
    /**
     * Print list
     * @param {number} val
     * @param {60| 24} max
     */
    const lists = useCallback((val = 1, max) => {
        const id = generatedId("list");
        const arr = []; // contains list elements
        const start = val - 2 >= 0 ? val - 2 : 0;
        const _max = val + 2 <= max ? val + 2 : max;
        // Previous time
        if (val < 3) {
            for (let index = max + val - 1; index <= max; index++) {
                arr.push(React.createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
            }
        }
        /** Push time */
        for (let index = start; index <= _max; index++) {
            if (index === val)
                arr.push(React.createElement(ClockTimeListsValue, { key: `${id}-${index}` }, index < 10 ? `0${index}` : index));
            else
                arr.push(React.createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
        }
        // Previous time
        if (val > max - 2) {
            for (let index = 0; index <= val + 1 - max; index++) {
                arr.push(React.createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
            }
        }
        /**
         * TODO
         * Add arrow change list
         */
        arr.unshift(React.createElement("div", { key: `${id}-up`, onClick: () => setValue(val - 1, max) },
            React.createElement(Icon, { icon: "i-arrow-up", small: true })));
        arr.push(React.createElement("div", { key: `${id}-down`, onClick: () => setValue(val + 1, max) },
            React.createElement(Icon, { icon: "i-arrow-down", small: true })));
        return React.createElement(React.Fragment, null, arr.map((item) => item));
    }, [setValue]);
    useEffect(() => {
        if (!selected)
            return;
        if (typeof selected === "string") {
            const _time = selected.split(":");
            setMinute(+_time[1] || 0);
            setHour(+_time[0] || 0);
        }
        else {
            const _time = selected ? wDate.identifyDate(selected) : wDate.now();
            setMinute(_time.getMinutes());
            setHour(_time.getHours());
        }
    }, [selected]);
    return (React.createElement(ClockWrap, null,
        React.createElement("input", { type: "hidden" }),
        React.createElement(ClockAnalog, { minutes: minute, hours: hour % 12 },
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null)),
        React.createElement(ClockTime, null,
            React.createElement(ClockTimeItem, null,
                React.createElement(ClockTimeValue, null, hour < 10 ? `0${hour}` : hour),
                React.createElement(ClockTimeLists, null, lists(hour, 23))),
            React.createElement("span", null, " : "),
            React.createElement(ClockTimeItem, null,
                React.createElement(ClockTimeValue, null, minute < 10 ? `0${minute}` : minute),
                React.createElement(ClockTimeLists, null, lists(minute, 59))))));
});
const ClockWrap = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ClockAnalog = styled.div `
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
    transform: ${(props) => `rotate(${props.hours * 30 + props.minutes * 0.5}deg)`};
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
const ClockTimeItem = styled.div `
  position: relative;
`;
const ClockTimeValue = styled.div `
  ${big};
  ${P4.x};
  ${P2.y};
  cursor: pointer;
`;
const ClockTimeLists = styled.ul `
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
  ${normal};
  ${P1.a};
  ${front_5};
  ${normal$1};

  & > li {
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: space-around;
    list-style: none;
    user-select: none;
    width: 100%;
    ${P2.a};
    ${M1.y};
    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }

  & > div {
    cursor: pointer;
  }
`;
const ClockTimeListsValue = styled.div `
  background-color: var(--default);
  cursor: pointer;
  height: 30px;
  left: 50%;
  line-height: 30px;
  position: relative;
  transform: translate(-50%, 0);
  width: 150%;
  ${normal};
`;
const ClockTime = styled.div `
  align-items: center;
  display: flex;
  ${M3.t};

  span {
    ${M2.x};
  }

  &:hover ${ClockTimeLists} {
    transform: scaleY(1);
  }
`;

export { Clock as default };
//# sourceMappingURL=Clock.js.map
