'use strict';

var React = require('react');
var css_base__space = require('./_space-5cfb2697.js');
require('./_fontWeight-72109252.js');
var css_base__fontSize = require('./_fontSize-5a701955.js');
var css_base__zIndex = require('./_zIndex-a46cddfb.js');
require('./_opacity-19bf620b.js');
var css_base__borderRadius = require('./_borderRadius-3deadb9d.js');
var css_base__boxShadow = require('./_boxShadow-6d818d81.js');
require('./_lineOverflow-94c98c56.js');
var Icon = require('./Icon.js');
var _util_generatedId = require('./_util/generatedId.js');
var styled = require('styled-components');
var css_transition_index = require('./index-9390237c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 22.0.1%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 300 300' style='enable-background:new 0 0 300 300%3b' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bopacity:0.7%3b%7d .st1%7bfill:%23231F20%3b%7d%3c/style%3e%3cg class='st0'%3e %3cg%3e %3cpath class='st1' d='M151.3%2c24.4c0%2c0.8-0.7%2c1.4-1.6%2c1.4l0%2c0c-0.9%2c0-1.6-0.6-1.6-1.4V7.3c0-0.8%2c0.7-1.4%2c1.6-1.4l0%2c0 c0.9%2c0%2c1.6%2c0.6%2c1.6%2c1.4V24.4z'/%3e %3cpath class='st1' d='M151.3%2c294.3c0%2c0.8-0.7%2c1.4-1.6%2c1.4l0%2c0c-0.9%2c0-1.6-0.7-1.6-1.4v-17.1c0-0.8%2c0.7-1.4%2c1.6-1.4l0%2c0 c0.9%2c0%2c1.6%2c0.6%2c1.6%2c1.4V294.3z'/%3e %3c/g%3e %3cg%3e %3cpath class='st1' d='M219.9%2c37c-0.3%2c0.5-0.9%2c0.6-1.3%2c0.3l0%2c0c-0.5-0.3-0.6-0.9-0.3-1.3l6-9.9c0.3-0.5%2c0.9-0.6%2c1.3-0.3l0%2c0 c0.5%2c0.3%2c0.6%2c0.9%2c0.3%2c1.3L219.9%2c37z'/%3e %3cpath class='st1' d='M75.2%2c275.5c-0.3%2c0.5-0.9%2c0.6-1.3%2c0.3l0%2c0c-0.5-0.3-0.6-0.9-0.3-1.3l6-9.9c0.3-0.5%2c0.9-0.6%2c1.3-0.3l0%2c0 c0.5%2c0.3%2c0.6%2c0.9%2c0.3%2c1.3L75.2%2c275.5z'/%3e %3c/g%3e %3cg%3e %3cpath class='st1' d='M267.5%2c87.6c-0.5%2c0.3-1.1%2c0.1-1.3-0.4l0%2c0c-0.3-0.5-0.1-1.1%2c0.4-1.3l10.1-5.5c0.5-0.3%2c1.1-0.1%2c1.3%2c0.4l0%2c0 c0.3%2c0.5%2c0.1%2c1.1-0.4%2c1.3L267.5%2c87.6z'/%3e %3cpath class='st1' d='M22.6%2c221.2c-0.5%2c0.3-1.1%2c0.1-1.3-0.4l0%2c0c-0.3-0.5-0.1-1.1%2c0.4-1.3l10.1-5.5c0.5-0.3%2c1.1-0.1%2c1.3%2c0.4l0%2c0 c0.3%2c0.5%2c0.1%2c1.1-0.4%2c1.3L22.6%2c221.2z'/%3e %3c/g%3e %3cg%3e %3cpath class='st1' d='M263.5%2c221c-0.5-0.3-0.6-0.9-0.3-1.3l0%2c0c0.3-0.5%2c0.9-0.6%2c1.3-0.3l9.9%2c6c0.5%2c0.3%2c0.6%2c0.9%2c0.3%2c1.3l0%2c0 c-0.3%2c0.5-0.9%2c0.6-1.3%2c0.3L263.5%2c221z'/%3e %3cpath class='st1' d='M25%2c76.2c-0.5-0.3-0.6-0.9-0.3-1.3l0%2c0c0.3-0.5%2c0.9-0.6%2c1.3-0.3l9.9%2c6c0.5%2c0.3%2c0.6%2c0.9%2c0.3%2c1.3l0%2c0 c-0.3%2c0.5-0.9%2c0.6-1.3%2c0.3L25%2c76.2z'/%3e %3c/g%3e %3cg%3e %3cpath class='st1' d='M212.9%2c268.6c-0.3-0.5-0.1-1.1%2c0.4-1.3l0%2c0c0.5-0.3%2c1.1-0.1%2c1.3%2c0.4l5.5%2c10.1c0.3%2c0.5%2c0.1%2c1.1-0.4%2c1.3l0%2c0 c-0.5%2c0.3-1.1%2c0.1-1.3-0.4L212.9%2c268.6z'/%3e %3cpath class='st1' d='M79.3%2c23.7c-0.3-0.5-0.1-1.1%2c0.4-1.3l0%2c0c0.5-0.3%2c1.1-0.1%2c1.3%2c0.4l5.5%2c10.1c0.3%2c0.5%2c0.1%2c1.1-0.4%2c1.3l0%2c0 c-0.5%2c0.3-1.1%2c0.1-1.3-0.4L79.3%2c23.7z'/%3e %3c/g%3e %3cg%3e %3cpath class='st1' d='M276.1%2c152.4c-0.8%2c0-1.4-0.7-1.4-1.6l0%2c0c0-0.9%2c0.6-1.6%2c1.4-1.6h17.1c0.8%2c0%2c1.4%2c0.7%2c1.4%2c1.6l0%2c0 c0%2c0.9-0.6%2c1.6-1.4%2c1.6H276.1z'/%3e %3cpath class='st1' d='M6.2%2c152.4c-0.8%2c0-1.4-0.7-1.4-1.6l0%2c0c0-0.9%2c0.7-1.6%2c1.4-1.6h17.1c0.8%2c0%2c1.4%2c0.7%2c1.4%2c1.6l0%2c0 c0%2c0.9-0.6%2c1.6-1.4%2c1.6H6.2z'/%3e %3c/g%3e%3c/g%3e%3c/svg%3e";

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
        const id = _util_generatedId("list");
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
            React__default["default"].createElement(Icon, { icon: "i-arrow-up", small: true })));
        arr.push(React__default["default"].createElement("div", { key: `${id}-down`, onClick: () => setValue(val + 1, max) },
            React__default["default"].createElement(Icon, { icon: "i-arrow-down", small: true })));
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
            const _time = selected ? new Date(selected) : new Date();
            setMinute(_time.getMinutes());
            setHour(_time.getHours());
        }
    }, [selected]);
    return (React__default["default"].createElement(ClockWrap, null,
        React__default["default"].createElement("input", { type: "hidden" }),
        React__default["default"].createElement(ClockAnalog, { minutes: minute, hours: hour % 12 },
            React__default["default"].createElement("img", { src: img, alt: "w-mtime" }),
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
  background-size: cover;
  border-radius: 50%;
  height: 200px;
  position: relative;
  width: 200px;
  

  img {
    width: 100%;
    height: 100%;
  }

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
  ${css_base__fontSize.big};
  ${css_base__space.P4.x};
  ${css_base__space.P2.y};
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
  ${css_transition_index.transition.linear};
  ${css_base__borderRadius.normal};
  ${css_base__space.P1.a};
  ${css_base__zIndex.front_5};
  ${css_base__boxShadow.normal};

  & > li {
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: space-around;
    list-style: none;
    user-select: none;
    width: 100%;
    ${css_base__space.P2.a};
    ${css_base__space.M1.y};
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
  ${css_base__borderRadius.normal};
`;
const ClockTime = styled__default["default"].div `
  align-items: center;
  display: flex;
  ${css_base__space.M3.t};

  span {
    ${css_base__space.M2.x};
  }

  &:hover ${ClockTimeLists} {
    transform: scaleY(1);
  }
`;

module.exports = Clock;
