export { B as Button, M as Modal } from './Modal-1cd20619.js';
import { B as ButtonAction } from './ButtonAction-761104f9.js';
export { B as ButtonAction } from './ButtonAction-761104f9.js';
import { B as ButtonNoStyle } from './ButtonNoStyle-03feb3c9.js';
import React, { useState, useMemo, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
export { C as Calender } from './index-a3535456.js';
import { I as Icon } from './Icon-69b9e7b0.js';
export { I as Icon } from './Icon-69b9e7b0.js';
import { s as semiBold, h as small, S as SemiTransparent, g as M2, i as M5, j as M0, m as menu, n as normal, k as normal$1, l as P3, b as big, P as P4, a as P2, c as P1, f as front_5, d as normal$2, M as M1, e as M3, o as P0, I as ImageTransparent, p as light, q as one, r as bold, t as front_1, u as front, v as normal$3, w as around } from './_lineOverflow-0f5e92ab.js';
import { t as transition } from './index-8505406e.js';
import { createPortal } from 'react-dom';
import { u as useHandleDisplay } from './useHandleDisplay-fdfdebb5.js';
import { u as usePositionPortal } from './usePositionDialog-50994a2f.js';
import { u as usePositionDropdown } from './usePositionDropdown-f9b23788.js';
import { space, borderRadius, fontSize, fontWeight } from 'app/css/base';
import Icon$1 from 'components/atoms/Icon';
import clock_face from 'assets/images/clock-face.svg';
import generatedId from 'helps/generatedId';
import { w as wDate } from './index-fb604e50.js';
import { L as Link } from './react-router-dom-5c182598.js';
import logoImg from 'assets/images/logo.svg';
import logoText from 'assets/images/logo-character.png';
import _t from 'helps/language/_t';
import useHandlePositionPortal from 'hooks/useHandlePositionPortal';
import { _ as __rest } from './tslib.es6-8e295639.js';
import FormGroup from 'components/atoms/Form/_FormGroup';
import { I as InputStyle } from './InputStyle-cbf70b53.js';
import { A as App } from './index.es-0abe6bb3.js';
import colorSVG from 'helps/colorSVG';
import { r as rgba } from './polished.esm-6e116b49.js';
import { L as LabelCss, c as cssFocus, D as DatePicker } from './index-2b99de7f.js';
export { D as DatePicker } from './index-2b99de7f.js';
import { d as dayjs_min } from './dayjs.min-2ef69f57.js';
import { S as SelectListOption } from './Select.SelectListOption-ddf275b8.js';
import logoImg$1 from 'util/assets/images/logo.svg';
import 'components/atoms/Button';
import 'components/atoms/Button/ButtonAction';
import './_style-462f1c6a.js';
import './_commonjsHelpers-5aa48c35.js';
import './inheritsLoose-bdcbc04b.js';
import './Other-e8b2afec.js';
import 'components/atoms/Calendar';
import 'components/atoms/Clock';
import 'components/atoms/Calendar/Month';
import 'components/atoms/Calendar/Year';
import 'components/atoms/Dropdown';

var ButtonLoadMore = React.memo(({ onClick }) => {
    return React.createElement(Button, { onClick: onClick }, "Load more ...");
});
const Button = styled.button `
  ${ButtonNoStyle};
  margin-top: 10px;
  margin: 0 auto;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

function Month ({ selected, fnSelected, disableItem }) {
    const [year, setYear] = useState(new Date().getFullYear());
    const list = useMemo(() => [
        {
            value: 0,
            label: 'Jan',
        },
        {
            value: 1,
            label: 'Feb',
        },
        {
            value: 2,
            label: 'Mar',
        },
        {
            value: 3,
            label: 'Apr',
        },
        {
            value: 4,
            label: 'May',
        },
        {
            value: 5,
            label: 'Jun',
        },
        {
            value: 6,
            label: 'Jul',
        },
        {
            value: 7,
            label: 'Aug',
        },
        {
            value: 8,
            label: 'Sep',
        },
        {
            value: 9,
            label: 'Oct',
        },
        {
            value: 10,
            label: 'Nov',
        },
        {
            value: 11,
            label: 'Dec',
        },
    ], []);
    const _onSelected = useCallback((month) => () => {
        fnSelected(new Date(`${year}/${month + 1}`));
    }, [fnSelected, year]);
    const _previousYear = useCallback(() => {
        setYear((year) => year - 1);
    }, []);
    const _nextYear = useCallback(() => {
        setYear((year) => year + 1);
    }, []);
    useEffect(() => {
        setYear(selected.getFullYear());
    }, [selected]);
    return (React.createElement(Wrap$6, null,
        React.createElement(WrapHead, null,
            React.createElement("div", null, year),
            React.createElement(ButtonSection, null,
                React.createElement(ButtonAction, { action: _previousYear },
                    React.createElement(Icon, { icon: 'i-arrow-left' })),
                React.createElement(ButtonAction, { action: _nextYear },
                    React.createElement(Icon, { icon: 'i-arrow-right' })))),
        React.createElement(List$2, null, list.map((month) => (React.createElement(Item$1, { active: month.value === selected.getMonth() &&
                year === selected.getFullYear(), key: month.value, onClick: _onSelected(month.value), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(`${year}-${month.value + 1}`) }, month.label))))));
}
const Wrap$6 = styled.div `
  width: 150px;
`;
const WrapHead = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ButtonSection = styled.div `
  display: flex;
`;
const List$2 = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item$1 = styled.li `
  border-radius: 9999px;
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  width: 33.33333%;
  
  ${({ active }) => active &&
    `
    background-color: var(--primary);
    color: #fff;
  `}

  &:hover {
    background-color: var(--backgroundOpacity);
  }

  ${({ disable }) => disable &&
    `
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  `}
`;

function Year ({ selected, fnSelected, disableItem, }) {
    const [list, setList] = useState([]);
    const _onSelected = useCallback((value) => () => {
        fnSelected(value.toString());
    }, [fnSelected]);
    const _setPreviousListYear = useCallback(() => {
        setList((list) => list.map((item) => item - 10));
    }, []);
    const _setNextListYear = useCallback(() => {
        setList((list) => list.map((item) => item + 10));
    }, []);
    useEffect(() => {
        const _year = +new Date(selected.toString()).getFullYear();
        const _list = [];
        for (let i = Math.floor(_year / 10) * 10 - 1; i <= Math.floor(_year / 10) * 10 + 10; i++) {
            _list.push(i);
        }
        setList(_list);
    }, [selected]);
    return (React.createElement(Wrap$5, null,
        React.createElement(ButtonAction, { action: _setPreviousListYear },
            React.createElement(Icon, { icon: "i-arrow-up" })),
        React.createElement(List$1, null, list.map((year, idx) => (React.createElement(Item, { active: year === +selected, key: idx, onClick: _onSelected(year), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(year.toString()) }, year)))),
        React.createElement(ButtonAction, { action: _setNextListYear },
            React.createElement(Icon, { icon: "i-arrow-down" }))));
}
const Wrap$5 = styled.div `
  width: 150px;

  & > button {
    width: 100%;
  }
`;
const List$1 = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled.li `
  border-radius: 9999px;
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  width: 33.33333%;

  ${({ active }) => active &&
    `
    background-color: var(--primary);
    color: #fff;
  `}

  &:last-of-type, &:first-of-type {
    opacity: 0.6;
  }

  &:hover {
    background-color: var(--backgroundOpacity);
  }

  ${({ disable }) => disable &&
    `
    opacity: 0.2 !important;
    user-select: none;
    pointer-events: none;
  `}
`;

/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */
const Collapse = styled.div `
  position: relative;
`;
var index$3 = React.memo((props) => {
    const [show, setShow] = useState(!!props.in);
    return (React.createElement(Collapse, null,
        React.createElement(CollapseHeading, { show: props.noCollapse || show, onClick: () => setShow(!show) },
            props.noCollapse || React.createElement(Icon, { icon: 'i-arrow-down', small: true }),
            React.createElement("span", null, props.heading),
            React.createElement(CollapseHeadingDash, null)),
        React.createElement(CollapseContent, { show: props.noCollapse || show }, props.children)));
});
const CollapseHeadingDash = styled.div `
  align-self: flex-end;
  transition: all 0.2s linear;
  flex: 1 1 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: var(--border);
    right: 0;
    bottom: 0;
    transition-property: width;
    width: 0;
    ${transition.easeIn};
  }
`;
const CollapseHeading = styled.div `
  display: flex;
  align-items: center;
  ${semiBold};
  ${small};
  ${SemiTransparent};
  cursor: pointer;
  user-select: none;

  span {
    width: max-content;
  }

  ${CollapseHeadingDash} {
    &::after {
      ${(props) => (props.show ? 'width:98%' : '')};
    }
  }

  /* Icon */
  div:first-of-type {
    transition: all 0.2s linear;
    ${(props) => (props.show ? '' : 'transform: rotate(180deg)')};
    ${M2.r};
  }
`;
const CollapseContent = styled.div `
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition-property: height;
  transition-duration: 0.2s;
  ${transition.linear};
  ${M5.y};
  ${M0.x};
  ${(props) => (props.show ? 'transform: scaleY(1)' : '')};
`;

function DialogWrap({ children, clickOut = false, position, setIsShow, refParent, setIsShowed, }) {
    const refContent = useRef(null);
    const refIsShowed = useRef(false);
    const { isDisplay, show, hide } = useHandleDisplay(refContent, clickOut);
    const { handlePosition } = usePositionPortal(refContent, refParent, {
        position: position || [],
    });
    useEffect(() => {
        let _hide;
        /**
         * Make animation when dialog hide
         */
        if (!isDisplay) {
            _hide = setTimeout(() => hide(), 200);
        }
        // Clear timeout when Dialog is un-detect
        return () => {
            clearTimeout(_hide);
        };
    }, [isDisplay, hide]);
    useEffect(() => {
        if (isDisplay) {
            handlePosition();
            // Set timeout waiting handle position, to show dialog
            setTimeout(() => {
                refContent.current.style.opacity = "1";
            }, 10);
        }
    }, [handlePosition, isDisplay]);
    useEffect(() => {
        setIsShow === null || setIsShow === void 0 ? void 0 : setIsShow(isDisplay);
    }, [isDisplay, setIsShow]);
    useEffect(() => {
        refIsShowed.current && (setIsShowed === null || setIsShowed === void 0 ? void 0 : setIsShowed(isDisplay));
    }, [isDisplay, setIsShowed]);
    useEffect(() => {
        show();
        refIsShowed.current = true;
    }, [show]);
    return (isDisplay &&
        createPortal(React.createElement(Wrap$4, { className: "dialog-mark" },
            React.createElement(WrapContent, { ref: refContent }, children)), document.getElementById("modal-root")));
}
var index$2 = React.forwardRef((props, ref) => {
    const [isShowed, setIsShowed] = useState(false);
    useImperativeHandle(ref, () => ({
        show() {
            setIsShowed(true);
        },
        hide() {
            setIsShowed(false);
        },
    }));
    return isShowed && React.createElement(DialogWrap, Object.assign({ setIsShowed: setIsShowed }, props));
});
const Wrap$4 = styled.div `
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const WrapContent = styled.div `
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;

/**
 * Dropdown menu
 * @prop {element} dropdown: button to click
 * @prop {element} children: button to click
 * @prop {element} dropdown_menu: menu
 * @prop {TPosition} position: position of menu
 * @prop {boolean} clickOut
 * @prop {string} className
 * @prop {string} className
 */
var index$1 = React.memo(({ dropdown, dropdown_menu, full, clickOut = true, position, children, className, }) => {
    const refDropdownMenu = useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay(refDropdownMenu, clickOut);
    const onToggle = useCallback(() => {
        onToggleDisplay();
    }, [onToggleDisplay]);
    const { handlePosition } = usePositionDropdown(refDropdownMenu, {
        position,
    });
    useEffect(() => {
        isDisplay && handlePosition();
    }, [handlePosition, isDisplay]);
    return (React.createElement(WrapDropdownMenu, { className: className },
        React.createElement(Dropdown$1, { onClick: onToggle }, dropdown || children),
        isDisplay && (React.createElement(DropdownMenu, { className: "dropdown-menu " + (className ? className + "-menu" : ""), full: full, position: position || "left", ref: refDropdownMenu }, dropdown_menu))));
});
const WrapDropdownMenu = styled.div `
  position: relative;
`;
const DropdownMenu = styled.div `
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;
  padding: 3px;

  ${menu};
  ${normal};
  ${(props) => props.full && "width: max-content"};
  ${(props) => props.position === "right"
    ? "right: 2px;"
    : props.position === "left"
        ? "left: 2px;"
        : "bottom: calc(100% + 10px);"};

  hr {
    height: 1px;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    display: block !important;
  }

  li {
    ${normal$1};
    ${normal};
    ${P3.a};
    list-style: none;
    position: relative;
    width: max-content;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    div[src] {
      margin-right: 5px;
    }

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }
`;
const Dropdown$1 = styled.div ``;

/**
 * Avatar
 *
 * @property {string} url
 * @property {string} children
 */
var Avatar = React.memo(({ url, children }) => {
    return (React.createElement(AvatarWrap, { className: 'w-avatar' }, url ? (React.createElement("img", { src: url, alt: 'wmtime' })) : children ? (React.createElement(WordOfName, null, children[0])) : null));
});
const AvatarWrap = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
const WordOfName = styled.div `
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--third);
  color: #fff;
  font-weight: bold;
`;

function ChartProcess (props) {
    const percent = (props.amount / props.sum) * 100;
    return (React.createElement(React.Fragment, null,
        React.createElement(WrapChartProcess, { sum: props.sum },
            React.createElement(ChartProcess$1, { amount: props.amount, percent: percent })),
        props.title ? React.createElement(ChartProcessTitle, null, props.title) : ""));
}
const AmountTag = css `
  position: absolute;
  top: -30px;
  ${space.P2.a};
  ${borderRadius.normal};
  ${fontSize.small};
  right: 0;
  transform: translate(50%, 0);
`;
const ArrowDown = css `
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  position: absolute;
  top: -6px;
  right: 0;
  transform: translate(50%, 0);
`;
const WrapChartProcess = styled.div `
  width: 100%;
  height: 5px;
  position: relative;
  background-color: var(--secondary);
  margin-top: 30px;
  ${borderRadius.normal};

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.sum}'`};
    background-color: var(--secondary);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--secondary);
  }
`;
const aniProcess = (percent) => keyframes `
  0%{
    width: 0%;
  }
  100%{
    width: ${percent}%;
  }
`;
const ChartProcess$1 = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  width: ${(props) => props.percent}%;
  ${borderRadius.normal};
  background-color: var(--success);
  animation: ${(props) => aniProcess(props.percent)} 1s linear;

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.amount}'`};
    background-color: var(--success);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--success);
  }
`;
const ChartProcessTitle = styled.div `
  ${fontWeight.light};
  ${fontSize.small};
  text-align: center;
  user-select: none;
`;

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
            React.createElement(Icon$1, { icon: "i-arrow-up", small: true })));
        arr.push(React.createElement("div", { key: `${id}-down`, onClick: () => setValue(val + 1, max) },
            React.createElement(Icon$1, { icon: "i-arrow-down", small: true })));
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
  ${normal$2};

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

function List({ children }) {
    return React.createElement(Wrap$3, null, children);
}
const Wrap$3 = styled.div `
  & > li,
  & > div {
    padding: 3px 10px;
    transition: 0.2s all ease-in;

    ${normal};

    &:hover {
      background-color: var(--background);
    }
  }
`;

const Logo = styled.div `
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;
function Logo$1 ({ text }) {
    return (React.createElement(Logo, null,
        React.createElement(Link, { to: "/" }, text ? (React.createElement("img", { src: logoText, alt: "logo" })) : (React.createElement("img", { src: logoImg, alt: "logo" })))));
}

function NoData({ children }) {
    return React.createElement(Wrap$2, { className: 'no-data' }, children || _t('No data'));
}
const Wrap$2 = styled.div `
  text-align: center;
  padding: 20px;
  opacity: 0.6;
  user-select: none;
`;

/**
 * Dropdown menu
 * @props dropdown: button to click
 * @props dropdown_menu: menu
 * @props position: position of menu
 */
const WrapPopover = styled.div `
  display: block;
  position: relative;
  width: min-content;
`;
var Popover = React.memo((props) => {
    const refMenu = useRef();
    const ref = useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay(refMenu);
    useHandlePositionPortal(refMenu, ref);
    return (React.createElement(WrapPopover, null,
        React.createElement(Dropdown, { ref: ref, onClick: onToggleDisplay }, props.children),
        React.createElement(Popover$1, { ref: refMenu, full: !!props.full, position: props.position || "left", show: isDisplay },
            props.title && React.createElement(PopoverTitle, null, props.title),
            React.createElement(PopoverContent, null, props.content))));
});
const Popover$1 = styled.div `
  & > * {
    display: ${(props) => !props.show && "none"};
  }
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;

  ${normal$2};
  ${normal};
  ${transition.popup};
  ${(props) => (props.show ? P2.a : P0.a)};
  ${(props) => (props.show ? transition.showPopup : transition.hiddenPopup)};
  ${(props) => props.position === "right"
    ? "right: 0"
    : props.position === "left"
        ? "left: 0;"
        : props.position === "top" && "bottom: calc(100% + 10px);"};

  ${(props) => props.full && "width: 100%"};

  hr {
    height: 1px;
    ${ImageTransparent};
  }

  li {
    ${normal$1};
    ${normal};
    ${P3.a};
    list-style: none;
    position: relative;
    width: max-content;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    div[src] {
      margin-right: 5px;
    }

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }
`;
const Dropdown = styled.div `
  cursor: pointer;
  width: max-content;
`;
const PopoverTitle = styled.div `
  border-bottom: 1px solid var(--borderLight);
  padding: 5px;
  ${big};
`;
const PopoverContent = styled.div `
  padding: 5px;
  padding-top: 8px;
`;

/**
 * Subtitle
 * @prop {} icon: src of icon
 * @prop {string} title
 * @prop {string} color
 * @prop {Direction} direction: row | column | row-reserve | column-reserve
 */
function Subtitle (props) {
    return (React.createElement(WrapSubtitle, { direction: props.direction || 'row', color: props.color || '#999999' },
        React.createElement(Subtitle$1, null, props.children || props.title),
        props.icon ? React.createElement(Icon$1, { icon: props.icon, color: props.color || '#999999' }) : ''));
}
const WrapSubtitle = styled.div `
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  color: ${(props) => props.color};

  .icon{
    transform: translateY(2px);
  }
`;
const Subtitle$1 = styled.div `
  ${small};
  ${light};
  ${P2.x};
  ${one};
  max-width: 200px;
  width: 100%;
`;

const Title = styled.div `
  ${big};
  ${bold};
`;
function Title$1 (props) {
    return React.createElement(Title, null,
        props.children,
        " ");
}

function Tooltip({ children, title, position = "bottom", }) {
    return (React.createElement(Wrap$1, null,
        React.createElement(WrapChildren, null, children),
        React.createElement(WrapTooltip, { position: position }, title)));
}
const WrapTooltip = styled.div `
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  color: var(--text);
  padding: 8px 12px;
  box-shadow: 0 2px 2px var(--boxShadow);
  ${normal};

  ${({ position }) => position === "left"
    ? `
      right: calc(100% + 5px);
    `
    : position === "right"
        ? `
      left: calc(100% + 5px);
    `
        : position === "top"
            ? `
      bottom: calc(100% + 5px);
    `
            : `
      top: calc(100% + 5px);
    `}
`;
const WrapChildren = styled.div `
  cursor: pointer;
`;
const Wrap$1 = styled.div `
  position: relative;

  &:hover ${WrapTooltip} {
    display: block;
  }
`;

function useForm() {
    const ref = useRef({});
    const getValues = useCallback(() => {
        const value = {};
        Object.keys(ref.current).map((key) => {
            value[key] = ref.current[key].value;
        });
        return value;
    }, []);
    return {
        ref,
        // setValues,
        // setValue,
        getValues,
    };
}
function Form(_a) {
    var { children, form: formRef, onChange, onFinish } = _a, props = __rest(_a, ["children", "form", "onChange", "onFinish"]);
    // Change form
    const handleChangeForm = (name) => (e) => {
        const _name = name || e.target.name;
        if (typeof e === "object" && !Array.isArray(e)) {
            if (!Object.keys(formRef.ref.current).includes(_name))
                return;
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
            formRef.ref.current[_name].value = e.currentTarget[_name].value;
        }
        else {
            formRef.ref.current[_name].value = e;
        }
    };
    // Handle submit
    const handleSubmit = (e) => {
        var _a;
        e.preventDefault();
        (_a = props.onSubmit) === null || _a === void 0 ? void 0 : _a.call(props, e);
        const value = {};
        Object.keys(formRef.ref.current).map((key) => {
            value[key] = formRef.ref.current[key].value;
        });
        onFinish === null || onFinish === void 0 ? void 0 : onFinish(value);
    };
    // Constructor for form
    useEffect(() => {
        children.forEach((ele) => {
            formRef.ref.current[ele.props.name] = { value: ele.props.defaultValue };
        });
    }, [children, formRef]);
    return (React.createElement("form", Object.assign({}, props, { onChange: handleChangeForm(), onSubmit: handleSubmit }), children.map((ele, idx) => {
        var _a, _b;
        return React.cloneElement(ele, !["textarea", "text", "password", "email", "number"].includes(ele.props.type)
            ? {
                key: idx,
                value: ((_b = (_a = formRef.ref.current) === null || _a === void 0 ? void 0 : _a[ele.props.name]) === null || _b === void 0 ? void 0 : _b.value) ||
                    ele.props.defaultValue,
                fnChange: handleChangeForm(ele.props.name),
            }
            : {
                key: idx,
            });
    })));
}
/**
 * COMPONENT FORM CONTROL
 */
function FormControl() {
    return React.createElement("div", null);
}

/**
 * @prop {string} label
 * @prop {'text' | 'number' | 'email' | 'password'} type
 */
/** Component */
var Input$1 = React.memo((_a) => {
    var { fnChange, isInputTitle, label, name, placeholder, style, type = 'text', value = '' } = _a, props = __rest(_a, ["fnChange", "isInputTitle", "label", "name", "placeholder", "style", "type", "value"]);
    const id = generatedId('input');
    const [error, setError] = useState();
    const [color, setColor] = useState('');
    const [valState, setValState] = useState('');
    const handleInvalid = useCallback((e) => {
        e.preventDefault();
        e.persist();
        setError({
            type: 'manual',
            message: e.currentTarget.required ? _t('Field is required !!') : '',
        });
    }, []);
    const onChange = useCallback((e) => {
        const value = type === 'number' ? +e.target.value : e.target.value;
        setValState(e.target.value);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(value || color);
    }, [type, fnChange, color]);
    const onChangeColor = useCallback((col) => {
        setColor(col);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(col);
    }, [fnChange]);
    useEffect(() => {
        value && setValState(value);
    }, [value]);
    const inputs = new Map()
        .set('textarea', React.createElement(TextareaControl, Object.assign({ className: 'w-textarea', name: name, placeholder: placeholder, id: id }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('text', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'text', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('password', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'password', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('email', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'email', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('number', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'number', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('color', React.createElement("div", null,
        React.createElement(App, { width: 20, height: 20, onChange: fnChange ? onChangeColor : setColor, defaultValue: value || color || '#54478c' }),
        React.createElement("input", { type: 'hidden', name: name, value: color || value || '#54478c' })));
    return (React.createElement(FormGroup, { isInputTitle: isInputTitle, style: style, label: label, isFocus: value || placeholder, id: id, inline: type === 'color', error: error }, inputs.get(type)));
});
/** Style */
const InputControl = styled.input `
  ${InputStyle};
`;
const TextareaControl = styled.textarea `
  ${InputStyle};
  ${P2.a};
  resize: none;
`;

/**
 * Checkbox component
 * @props color: color of checkbox when checked
 * @props checked
 * @props fnChanged: function
 * @props labelChecked
 */
var Checkbox = React.memo((props) => {
    const id = props.id || generatedId();
    const labelChecked = useMemo(() => props.labelChecked ? props.labelChecked : ['', ''], [props.labelChecked]);
    const _onChange = useCallback((e) => {
        props.fnChange && props.fnChange(e.target.checked);
    }, [props]);
    return (React.createElement(Checkbox$1, { className: 'checkbox ' + (props.className ? props.className : ''), color: props.color, "data-is-aria-label": props.labelChecked ? 'on' : 'off', "aria-label": props.value ? labelChecked[1] : labelChecked[0], "data-label-position": 'left-bottom' },
        React.createElement("input", { id: id, type: 'checkbox', checked: props.value, name: props.name, onChange: _onChange }),
        React.createElement("label", { htmlFor: id },
            React.createElement("i", { className: 'i-tick' })),
        React.createElement("label", { htmlFor: id },
            React.createElement("span", null, props.label))));
});
const aniScale = keyframes `
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const Checkbox$1 = styled.div `
  display: flex;
  align-items: flex-start;

  input {
    width: 0;
    height: 0;
  }

  label {
    cursor: pointer;
    user-select: none;
    width: 100%;
  }

  & > label:first-of-type {
    display: block;
    flex: 0 0 15px;
    width: 15px;
    height: 15px;
    position: relative;
    top: -1px;
    border: 1px solid;
    border-color: ${(props) => (props.color ? props.color : 'var(--black)')};
    border-radius: 5px;

    &::after {
      position: absolute;
      content: '';
      width: 102%;
      height: 100%;
      top: -6%;
      left: 15%;
      display: none;
      animation: ${aniScale} 0.1s linear;
      ${front_1};
      ${(props) => props.color && colorSVG(props.color)}
    }
    i {
      position: absolute;
      width: 5px;
      height: 5px;
      top: 1px;
      right: 50%;
      display: none;
      background-color: inherit;
      color: ${({ color }) => color};
      ${front};
    }

    &:hover {
      background-color: ${rgba('#bdc3c7', 0.1)};
      &::before {
        background-color: ${rgba('#bdc3c7', 0.1)};
      }
    }
  }

  & > label:last-of-type {
    margin-left: 5px;
    ${({ color }) => color && colorSVG(color)};
  }

  input:checked ~ label::after,
  input:checked ~ label i {
    display: block;
  }

  input:checked ~ label {
    border-right: none;
    border-top: none;
  }
`;

function DateRange({ fnChange, label, picker = "date", value = {}, defaultValue = {}, }) {
    const format = useMemo(() => {
        switch (picker) {
            case "date":
                return "DD MMM, YYYY";
            case "month":
                return "MMM, YYYY";
            case "year":
                return "YYYY";
        }
        return "DD MMM, YYYY";
    }, [picker]);
    const disablePrevious = useCallback((date) => {
        const _date = dayjs_min(date);
        return value.from
            ? _date.isBefore(dayjs_min(value.from))
            : defaultValue.from
                ? _date.isBefore(dayjs_min(defaultValue.from))
                : false;
    }, [defaultValue.from, value.from]);
    const disableNext = useCallback((date) => {
        const _date = dayjs_min(date);
        return value.to
            ? _date.isAfter(dayjs_min(value.to))
            : defaultValue.to
                ? _date.isAfter(dayjs_min(defaultValue.to))
                : false;
    }, [defaultValue.to, value.to]);
    const onChangeFrom = (_val) => {
        let valTemp = _val;
        if (disableNext(_val))
            valTemp = value.to;
        fnChange({
            from: valTemp,
            to: value.to,
        });
    };
    const onChangeTo = (_val) => {
        let valTemp = _val;
        if (disablePrevious(_val))
            valTemp = value.from;
        fnChange({
            from: value.from,
            to: valTemp,
        });
    };
    return (React.createElement(Wrap, { className: "date-range" },
        React.createElement(Label, null, label),
        React.createElement(DatePicker, { picker: picker, value: value.from, defaultValue: defaultValue.from, fnChange: onChangeFrom, format: format, isRemove: false, disableItem: disableNext }),
        React.createElement("span", null,
            React.createElement(Icon, { icon: "i-transfer" })),
        React.createElement(DatePicker, { picker: picker, value: value.to, defaultValue: defaultValue.to, fnChange: onChangeTo, format: format, isRemove: false, disableItem: disablePrevious })));
}
const Wrap = styled.div `
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  position: relative;

  & > div {
    width: calc(50% - 20px);
  }

  .form-group {
    margin-top: 0;
  }
`;
const Label = styled.div `
  ${LabelCss};
  ${cssFocus};
`;

/**
 * @prop {(val: string) => void} fnSearch
 */
var Search = React.memo((props) => {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');
    function focus() {
        setIsFocus(true);
    }
    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    function blur(e) {
        if (!e.target.value) {
            setIsFocus(false);
        }
    }
    /**
     * @param {React.FormEvent} e
     */
    function submit(e) {
        e.preventDefault();
        props.fnSearch(value);
    }
    return (React.createElement(Search$1, { dark: props.dark, focus: isFocus, onSubmit: submit, className: 'w-search' },
        React.createElement("button", { type: 'submit' },
            React.createElement(Icon$1, { color: props.dark ? '#fff' : '#1a1a1a', icon: 'i-search' })),
        props.value !== undefined && props.onChange ? (React.createElement(Input, { value: props.value, onChange: props.onChange, placeholder: `${props.placeholder || _t('Search')}...`, onFocus: () => focus(), onBlur: (e) => blur(e) })) : (React.createElement(Input, { value: value, onChange: (e) => setValue(e.target.value), placeholder: `${props.placeholder || _t('Search')}...`, onFocus: () => focus(), onBlur: (e) => blur(e) }))));
});
const Search$1 = styled.form `
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${({ dark }) => (dark ? '#fff' : '#c7c7c7')};
  width: 200px;
  input {
    color: ${({ dark }) => (dark ? '#fff' : 'initial')};
  }

  ${P2.y};
  ${P3.x};
  ${transition.easeIn};
  ${SemiTransparent};
  ${(props) => props.focus &&
    `
    opacity: 1;
    max-width: 300px;
    width: 100%;
  `};
  button {
    ${ButtonNoStyle};
  }
`;
const Input = styled.input `
  margin-left: 5px;
  background-color: transparent;
  border: none;
  ${normal$1};

  &:focus {
    outline: 0;
  }
`;

const SwitchWrap = styled.div `
  display: flex;
  justify-content: space-between;
  user-select: none;

  h5 {
    ${normal$1};
    ${normal$3};
  }
  h6 {
    opacity: 0.8;
    ${normal$3};
    ${small};
  }

  input {
    width: 0;
    height: 0;
    display: none;
  }
`;
const SwitchButton = styled.label `
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  top: 1px;
  left: 2px;
  cursor: pointer;
  background-color: var(--backgroundContent);
  transition: transform 0.2s linear;
`;
const SwitchBox = styled.label `
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${(props) => props.active ? "var(--primary)" : "var(--shadow)"};
  ${around};
  ${(props) => props.active
    ? `
    ${SwitchButton}{
      transform: translate(100%,0);
    }
  `
    : `
  ${SwitchButton}{
      transform: translate(0,0);
    }`}
`;
var Switch = React.memo((props) => {
    const id = generatedId();
    const [value, setValue] = useState(props.value || props.defaultValue || false);
    const _onChange = useCallback(() => {
        if (props.fnChange) {
            props.fnChange(!value);
        }
        setValue(!value);
    }, [props, value]);
    useEffect(() => {
        props.value && setValue(props.value);
    }, [props.value]);
    return (React.createElement(SwitchWrap, null,
        React.createElement("div", null,
            React.createElement("h5", null, props.label),
            props.labelSub ? React.createElement("h6", null, props.labelSub) : ""),
        React.createElement("input", { id: id, type: "checkbox", checked: value, onChange: _onChange }),
        React.createElement(SwitchBox, { active: value, htmlFor: id },
            React.createElement(SwitchButton, { htmlFor: id }))));
});

/**
 *
 * @prop {string} label
 * @prop {(val: any) => void} fnChange
 * @prop {boolean} request
 * @prop {string} defaultValue
 * @prop {JSX.Element[]} children
 * @prop {boolean} isSearch
 */
var index = React.memo((props) => {
    const id = generatedId('input');
    const [list, setList] = useState([]);
    const [valState, setValState] = useState();
    // Convert list options from children
    const convertOptionsFromChildren = useCallback((children) => {
        const arrOptions = [];
        children === null || children === void 0 ? void 0 : children.forEach((item) => {
            if (item.length !== 0) {
                if (item.type === 'option') {
                    arrOptions.push({
                        value: item.props.value,
                        label: item.props.children,
                    });
                }
                else if (item.type === 'optgroup') {
                    arrOptions.push({
                        group: {
                            label: item.props.label,
                            options: convertOptionsFromChildren(item.props.children),
                        },
                    });
                }
            }
        });
        return arrOptions;
    }, []);
    /**
     * @param {string} _val
     */
    const handleSelect = useCallback((_val) => {
        setValState(_val);
        props === null || props === void 0 ? void 0 : props.fnChange(_val);
    }, [props]);
    /**
     * When props.list change
     * So it only action as constructor
     */
    useEffect(() => {
        /**
         * TODO
         * Convert list option from children
         */
        let arrOptions = convertOptionsFromChildren(props.children);
        if (!arrOptions.length && !props.isMultiple)
            arrOptions = [
                {
                    value: '',
                    label: '-- Select item',
                },
            ];
        setList(arrOptions);
    }, [convertOptionsFromChildren, props.children, props.isMultiple]);
    useEffect(() => {
        setValState(props.value);
    }, [props.value]);
    useEffect(() => {
        props.defaultValue && setValState(props.defaultValue);
    }, [props.defaultValue]);
    return (React.createElement(FormGroup, { style: props.style || {}, labelFocus: true, isFocus: true, label: props.label, id: id, className: 'w-select' + (props.isMultiple ? ' w-select-multiple' : '') },
        React.createElement(SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
});

function Loading(props) {
    return (React.createElement(LoadingWrap, null,
        React.createElement(LoadingEclipse, { className: "loading-eclipse", small: !!props.small },
            React.createElement("div", null))));
}
const LoadingAnimation = keyframes `
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;
const LoadingWrap = styled.div `
  width: 20px;
  height: 20px;
  display: inline-block;
  /* overflow: hidden; */
  background: transparent;
`;
const LoadingEclipse = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  & div {
    position: absolute;
    animation: ${LoadingAnimation} 1s linear infinite;
    ${(props) => props.small
    ? `
      width: 15px;
      height: 15px;
      top: 1.875px;
      left: 1.875px;
      border-radius: 50%;
      box-shadow: 0 2px 0 0 #ffffff;
      transform-origin: 7.5px 7.6px;
      box-sizing: content-box;
    `
    : `
      position: absolute;
      animation: ${LoadingWrap} 1s linear infinite;
      width: 80px;
      height: 80px;
      top: 10px;
      left: 10px;
      border-radius: 50%;
      box-shadow: 0 2px 0 0 #ffffff;
      transform-origin: 40px 41px;
      box-sizing: content-box;
    `}
  }
`;
/**
 * Loading bound with icon
 */
function LoadingBall() {
    return (React.createElement(LoadingBallWrap, null,
        React.createElement(LoadingBallLogo, null,
            React.createElement("img", { src: logoImg$1, alt: "manage time" })),
        React.createElement(LoadingBallShadow, null)));
}
const LoadingBallAnimation = keyframes `
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 50px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: translate(0, 0);
  }
`;
const LoadingBallShadowAnimation = keyframes `
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: scale(1) rotateX(85deg) translateZ(-13px);
  }
  50% {
    transform: scale(0.2) rotateX(85deg) translateZ(-13px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: scale(1) rotateX(85deg) translateZ(-13px);
  }
`;
const LoadingBallWrap = styled.div `
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
  position: relative;
`;
const LoadingBallLogo = styled.div `
  position: absolute;
  top: 0;
  left: 100px;
  width: 100px;
  height: 100px;
  animation: ${LoadingBallAnimation} 1s linear infinite;
`;
const LoadingBallShadow = styled.div `
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0) 50%
  );
  transform: rotateX(90deg) translateZ(-150px);
  z-index: -1;
  animation: ${LoadingBallShadowAnimation} 1s linear infinite;
`;
/**
 * Loading someone is typing
 */
function LoadingSomeoneTyping() {
    return (React.createElement(LoadingSomeoneTypingWrap, null,
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null)));
}
const LoadingSomeoneTypingWrapAnimation = keyframes `
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
`;
const LoadingSomeoneTypingWrap = styled.div `
  display: flex;
  min-height: 16px;
  align-items: center;

  div {
    border-radius: 50%;
    margin: 0 2px;
    width: 4px;
    height: 4px;
    opacity: 0.2;
    background-color: ${({ theme }) => theme.palette.text};
  }

  div:nth-of-type(1) {
    animation: ${LoadingSomeoneTypingWrapAnimation} 3s linear infinite;
  }

  div:nth-of-type(2) {
    animation: ${LoadingSomeoneTypingWrapAnimation} 3s linear infinite;
    animation-delay: 1s;
  }

  div:nth-of-type(3) {
    animation: ${LoadingSomeoneTypingWrapAnimation} 3s linear infinite;
    animation-delay: 2s;
  }
`;

/**
 * NOTIFICATIONS
 * @props message - (default) - (error) - (success)
 */
React.memo((props) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => {
            props.fnOff(props === null || props === void 0 ? void 0 : props.id);
        }, 200);
    }, [props]);
    useEffect(() => {
        const closeState = setTimeout(() => {
            setIsOpen(false);
        }, 4800);
        const closeStore = setTimeout(() => {
            props.fnOff(props === null || props === void 0 ? void 0 : props.id);
        }, 5000);
        return () => {
            clearTimeout(closeState);
            clearTimeout(closeStore);
        };
    }, [props]);
    return (React.createElement(NotificationWrap, { open: isOpen, white: !!props.white, success: !!props.success, error: !!props.error },
        typeof props.message === "string" ? (React.createElement(Message, { dangerouslySetInnerHTML: { __html: props.message } })) : (React.createElement(Message, null, props.message)),
        React.createElement(ButtonClose, { white: !!props.white, type: "button", onClick: handleClose },
            React.createElement("i", { className: "i-close" }))));
});
const slideRight = keyframes `
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideRightOut = keyframes `
 100% {
    opacity: 0;
    transform: translateX(-100px);
  }
  0% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const NotificationWrap = styled.div `
  padding: 8px 10px;
  color: ${(props) => props.white ? "var(--text)" : "var(--backgroundContent)"};
  background-color: ${(props) => props.error
    ? "var(--error)"
    : props.success
        ? "var(--success)"
        : props.white
            ? "var(--backgroundContent)"
            : "var(--dark)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 1px 3px var(--boxShadow);
  animation: ${(props) => (props.open ? slideRight : slideRightOut)} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const Message = styled.div `
  position: relative;
  top: -1px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ButtonClose = styled.button `
  border: none;
  background-color: transparent;
  margin-left: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;

  i {
    color: ${({ white }) => (white ? "initial" : "var(--backgroundContent)")};
  }

  &:focus {
    border: none;
    outline: 0;
  }
`;

if (document) {
    const root = document.documentElement;
    root.style.setProperty("--primary", "#22402F");
    root.style.setProperty("--secondary", "#5A8C70");
    root.style.setProperty("--third", "#7EBF9A");
    root.style.setProperty("--success", "#4caf50");
    root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.5)");
    root.style.setProperty("--text", "rgba(0, 0, 0, 0.87)");
    root.style.setProperty("--textBlur", "#BFBFBF");
    root.style.setProperty("--warning", "#f1c40f");
    root.style.setProperty("--background", "#D5D5D5");
    root.style.setProperty("--backgroundContent", "#FFF");
    root.style.setProperty("--backgroundOpacity", "rgba(0, 0, 0, 0.1)");
    root.style.setProperty("--border", "#d9d9d9");
    root.style.setProperty("--borderLight", "#ECECEC");
    root.style.setProperty("--borderInput", "#D4D4D4");
    root.style.setProperty("--boxShadow", "#rgba(0, 0, 0, 0.16)");
}

export { Avatar, ButtonLoadMore, Month as CalenderMonth, Year as CalenderYear, ChartProcess, Checkbox, Clock, index$3 as Collapse, DateRange, index$2 as Dialog, index$1 as Dropdown, Form, FormControl, Input$1 as Input, List, Loading, LoadingBall, LoadingSomeoneTyping, Logo$1 as Logo, NoData, Popover, Search, index as Select, Subtitle, Switch, Title$1 as Title, Tooltip, useForm };
//# sourceMappingURL=index.js.map
