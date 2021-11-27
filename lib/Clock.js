'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-f7594b16.js');
var Icon = require('components/atoms/Icon');
var clock_face = require('assets/images/clock-face.svg');
var generatedId = require('helps/generatedId');
var styled = require('styled-components');
var index = require('./index-e168d184.js');
var index$1 = require('./index-49eba8df.js');
require('./_commonjsHelpers-b30fe163.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
var clock_face__default = /*#__PURE__*/_interopDefaultLegacy(clock_face);
var generatedId__default = /*#__PURE__*/_interopDefaultLegacy(generatedId);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * @prop {string} selected
 * @prop {(time: [number, number]) => void} fnSelected
 */
var Clock = React__default["default"].memo(({ selected, fnSelected }) => {
    const [minute, setMinute] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    /**
     * @param _hour
     */
    const changeHour = React.useCallback((_hour) => {
        setHour(_hour);
        fnSelected === null || fnSelected === void 0 ? void 0 : fnSelected([_hour, minute]);
    }, [fnSelected, minute]);
    /**
     * @param _minute
     */
    const changeMinute = React.useCallback((_minute) => {
        setMinute(_minute);
        fnSelected === null || fnSelected === void 0 ? void 0 : fnSelected([hour, _minute]);
    }, [fnSelected, hour]);
    /**
     * TODO
     * Set value
     */
    const setValue = React.useCallback((val, max) => {
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
    const lists = React.useCallback((val = 1, max) => {
        const id = generatedId__default["default"]("list");
        const arr = []; // contains list elements
        const start = val - 2 >= 0 ? val - 2 : 0;
        const _max = val + 2 <= max ? val + 2 : max;
        // Previous time
        if (val < 3) {
            for (let index = max + val - 1; index <= max; index++) {
                arr.push(React__default["default"].createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
            }
        }
        /** Push time */
        for (let index = start; index <= _max; index++) {
            if (index === val)
                arr.push(React__default["default"].createElement(ClockTimeListsValue, { key: `${id}-${index}` }, index < 10 ? `0${index}` : index));
            else
                arr.push(React__default["default"].createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
        }
        // Previous time
        if (val > max - 2) {
            for (let index = 0; index <= val + 1 - max; index++) {
                arr.push(React__default["default"].createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
            }
        }
        /**
         * TODO
         * Add arrow change list
         */
        arr.unshift(React__default["default"].createElement("div", { key: `${id}-up`, onClick: () => setValue(val - 1, max) },
            React__default["default"].createElement(Icon__default["default"], { icon: "i-arrow-up", small: true })));
        arr.push(React__default["default"].createElement("div", { key: `${id}-down`, onClick: () => setValue(val + 1, max) },
            React__default["default"].createElement(Icon__default["default"], { icon: "i-arrow-down", small: true })));
        return React__default["default"].createElement(React__default["default"].Fragment, null, arr.map((item) => item));
    }, [setValue]);
    React.useEffect(() => {
        if (!selected)
            return;
        if (typeof selected === "string") {
            const _time = selected.split(":");
            setMinute(+_time[1] || 0);
            setHour(+_time[0] || 0);
        }
        else {
            const _time = selected ? index$1.wDate.identifyDate(selected) : index$1.wDate.now();
            setMinute(_time.getMinutes());
            setHour(_time.getHours());
        }
    }, [selected]);
    return (React__default["default"].createElement(ClockWrap, null,
        React__default["default"].createElement("input", { type: "hidden" }),
        React__default["default"].createElement(ClockAnalog, { minutes: minute, hours: hour % 12 },
            React__default["default"].createElement("div", null),
            React__default["default"].createElement("div", null),
            React__default["default"].createElement("div", null)),
        React__default["default"].createElement(ClockTime, null,
            React__default["default"].createElement(ClockTimeItem, null,
                React__default["default"].createElement(ClockTimeValue, null, hour < 10 ? `0${hour}` : hour),
                React__default["default"].createElement(ClockTimeLists, null, lists(hour, 23))),
            React__default["default"].createElement("span", null, " : "),
            React__default["default"].createElement(ClockTimeItem, null,
                React__default["default"].createElement(ClockTimeValue, null, minute < 10 ? `0${minute}` : minute),
                React__default["default"].createElement(ClockTimeLists, null, lists(minute, 59))))));
});
const ClockWrap = styled__default["default"].div `
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ClockAnalog = styled__default["default"].div `
  background-image: url(${clock_face__default["default"]});
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
const ClockTimeItem = styled__default["default"].div `
  position: relative;
`;
const ClockTimeValue = styled__default["default"].div `
  ${_lineOverflow.big};
  ${_lineOverflow.P4.x};
  ${_lineOverflow.P2.y};
  cursor: pointer;
`;
const ClockTimeLists = styled__default["default"].ul `
  background-color: var(--backgroundContent);
  height: auto;
  left: 0;
  position: absolute;
  text-align: center;
  top: -337%;
  transform: scaleY(0);
  transition-property: transform;
  width: 100%;
  ${index.transition.linear};
  ${_lineOverflow.normal};
  ${_lineOverflow.P1.a};
  ${_lineOverflow.front_5};
  ${_lineOverflow.normal$1};

  & > li {
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: space-around;
    list-style: none;
    user-select: none;
    width: 100%;
    ${_lineOverflow.P2.a};
    ${_lineOverflow.M1.y};
    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }

  & > div {
    cursor: pointer;
  }
`;
const ClockTimeListsValue = styled__default["default"].div `
  background-color: var(--default);
  cursor: pointer;
  height: 30px;
  left: 50%;
  line-height: 30px;
  position: relative;
  transform: translate(-50%, 0);
  width: 150%;
  ${_lineOverflow.normal};
`;
const ClockTime = styled__default["default"].div `
  align-items: center;
  display: flex;
  ${_lineOverflow.M3.t};

  span {
    ${_lineOverflow.M2.x};
  }

  &:hover ${ClockTimeLists} {
    transform: scaleY(1);
  }
`;

module.exports = Clock;
