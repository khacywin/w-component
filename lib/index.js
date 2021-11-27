'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Modal = require('./Modal-ee6f69d6.js');
var ButtonAction = require('./ButtonAction-757b3091.js');
var ButtonNoStyle = require('./ButtonNoStyle-3eedbceb.js');
var React = require('react');
var styled = require('styled-components');
var index$4 = require('./index-40c45e22.js');
var Icon = require('./Icon-b6bdc54f.js');
var _lineOverflow = require('./_lineOverflow-f7594b16.js');
var index$6 = require('./index-e168d184.js');
var reactDom = require('react-dom');
var useHandleDisplay = require('./useHandleDisplay-16f1a228.js');
var usePositionDialog = require('./usePositionDialog-6d2f5d27.js');
var usePositionDropdown = require('./usePositionDropdown-d8f294b5.js');
var base = require('app/css/base');
var Icon$1 = require('components/atoms/Icon');
var clock_face = require('assets/images/clock-face.svg');
var generatedId = require('helps/generatedId');
var index$7 = require('./index-49eba8df.js');
var reactRouterDom = require('./react-router-dom-2b875820.js');
var logoImg = require('assets/images/logo.svg');
var logoText = require('assets/images/logo-character.png');
var _t = require('helps/language/_t');
var useHandlePositionPortal = require('hooks/useHandlePositionPortal');
var tslib_es6 = require('./tslib.es6-17879f09.js');
var FormGroup = require('components/atoms/Form/_FormGroup');
var InputStyle = require('./InputStyle-51ed6d86.js');
var index_es = require('./index.es-eb211e2b.js');
var colorSVG = require('helps/colorSVG');
var polished_esm = require('./polished.esm-76f26fe7.js');
var index$5 = require('./index-84c52f3e.js');
var dayjs_min = require('./dayjs.min-a8023b07.js');
var Select_SelectListOption = require('./Select.SelectListOption-22bbc46d.js');
var logoImg$1 = require('util/assets/images/logo.svg');
require('components/atoms/Button');
require('components/atoms/Button/ButtonAction');
require('./_style-0c593cae.js');
require('./_commonjsHelpers-b30fe163.js');
require('./inheritsLoose-60b82b3e.js');
require('./Other-91030d75.js');
require('components/atoms/Calendar');
require('components/atoms/Clock');
require('components/atoms/Calendar/Month');
require('components/atoms/Calendar/Year');
require('components/atoms/Dropdown');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon$1);
var clock_face__default = /*#__PURE__*/_interopDefaultLegacy(clock_face);
var generatedId__default = /*#__PURE__*/_interopDefaultLegacy(generatedId);
var logoImg__default = /*#__PURE__*/_interopDefaultLegacy(logoImg);
var logoText__default = /*#__PURE__*/_interopDefaultLegacy(logoText);
var _t__default = /*#__PURE__*/_interopDefaultLegacy(_t);
var useHandlePositionPortal__default = /*#__PURE__*/_interopDefaultLegacy(useHandlePositionPortal);
var FormGroup__default = /*#__PURE__*/_interopDefaultLegacy(FormGroup);
var colorSVG__default = /*#__PURE__*/_interopDefaultLegacy(colorSVG);
var logoImg__default$1 = /*#__PURE__*/_interopDefaultLegacy(logoImg$1);

var ButtonLoadMore = React__default["default"].memo(({ onClick }) => {
    return React__default["default"].createElement(Button, { onClick: onClick }, "Load more ...");
});
const Button = styled__default["default"].button `
  ${ButtonNoStyle.ButtonNoStyle};
  margin-top: 10px;
  margin: 0 auto;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

function Month ({ selected, fnSelected, disableItem }) {
    const [year, setYear] = React.useState(new Date().getFullYear());
    const list = React.useMemo(() => [
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
    const _onSelected = React.useCallback((month) => () => {
        fnSelected(new Date(`${year}/${month + 1}`));
    }, [fnSelected, year]);
    const _previousYear = React.useCallback(() => {
        setYear((year) => year - 1);
    }, []);
    const _nextYear = React.useCallback(() => {
        setYear((year) => year + 1);
    }, []);
    React.useEffect(() => {
        setYear(selected.getFullYear());
    }, [selected]);
    return (React__default["default"].createElement(Wrap$6, null,
        React__default["default"].createElement(WrapHead, null,
            React__default["default"].createElement("div", null, year),
            React__default["default"].createElement(ButtonSection, null,
                React__default["default"].createElement(ButtonAction.ButtonAction, { action: _previousYear },
                    React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-left' })),
                React__default["default"].createElement(ButtonAction.ButtonAction, { action: _nextYear },
                    React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-right' })))),
        React__default["default"].createElement(List$2, null, list.map((month) => (React__default["default"].createElement(Item$1, { active: month.value === selected.getMonth() &&
                year === selected.getFullYear(), key: month.value, onClick: _onSelected(month.value), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(`${year}-${month.value + 1}`) }, month.label))))));
}
const Wrap$6 = styled__default["default"].div `
  width: 150px;
`;
const WrapHead = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ButtonSection = styled__default["default"].div `
  display: flex;
`;
const List$2 = styled__default["default"].div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item$1 = styled__default["default"].li `
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
    const [list, setList] = React.useState([]);
    const _onSelected = React.useCallback((value) => () => {
        fnSelected(value.toString());
    }, [fnSelected]);
    const _setPreviousListYear = React.useCallback(() => {
        setList((list) => list.map((item) => item - 10));
    }, []);
    const _setNextListYear = React.useCallback(() => {
        setList((list) => list.map((item) => item + 10));
    }, []);
    React.useEffect(() => {
        const _year = +new Date(selected.toString()).getFullYear();
        const _list = [];
        for (let i = Math.floor(_year / 10) * 10 - 1; i <= Math.floor(_year / 10) * 10 + 10; i++) {
            _list.push(i);
        }
        setList(_list);
    }, [selected]);
    return (React__default["default"].createElement(Wrap$5, null,
        React__default["default"].createElement(ButtonAction.ButtonAction, { action: _setPreviousListYear },
            React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-up" })),
        React__default["default"].createElement(List$1, null, list.map((year, idx) => (React__default["default"].createElement(Item, { active: year === +selected, key: idx, onClick: _onSelected(year), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(year.toString()) }, year)))),
        React__default["default"].createElement(ButtonAction.ButtonAction, { action: _setNextListYear },
            React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-down" }))));
}
const Wrap$5 = styled__default["default"].div `
  width: 150px;

  & > button {
    width: 100%;
  }
`;
const List$1 = styled__default["default"].div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled__default["default"].li `
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
const Collapse = styled__default["default"].div `
  position: relative;
`;
var index$3 = React__default["default"].memo((props) => {
    const [show, setShow] = React.useState(!!props.in);
    return (React__default["default"].createElement(Collapse, null,
        React__default["default"].createElement(CollapseHeading, { show: props.noCollapse || show, onClick: () => setShow(!show) },
            props.noCollapse || React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-down', small: true }),
            React__default["default"].createElement("span", null, props.heading),
            React__default["default"].createElement(CollapseHeadingDash, null)),
        React__default["default"].createElement(CollapseContent, { show: props.noCollapse || show }, props.children)));
});
const CollapseHeadingDash = styled__default["default"].div `
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
    ${index$6.transition.easeIn};
  }
`;
const CollapseHeading = styled__default["default"].div `
  display: flex;
  align-items: center;
  ${_lineOverflow.semiBold};
  ${_lineOverflow.small};
  ${_lineOverflow.SemiTransparent};
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
    ${_lineOverflow.M2.r};
  }
`;
const CollapseContent = styled__default["default"].div `
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition-property: height;
  transition-duration: 0.2s;
  ${index$6.transition.linear};
  ${_lineOverflow.M5.y};
  ${_lineOverflow.M0.x};
  ${(props) => (props.show ? 'transform: scaleY(1)' : '')};
`;

function DialogWrap({ children, clickOut = false, position, setIsShow, refParent, setIsShowed, }) {
    const refContent = React.useRef(null);
    const refIsShowed = React.useRef(false);
    const { isDisplay, show, hide } = useHandleDisplay.useHandleDisplay(refContent, clickOut);
    const { handlePosition } = usePositionDialog.usePositionPortal(refContent, refParent, {
        position: position || [],
    });
    React.useEffect(() => {
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
    React.useEffect(() => {
        if (isDisplay) {
            handlePosition();
            // Set timeout waiting handle position, to show dialog
            setTimeout(() => {
                refContent.current.style.opacity = "1";
            }, 10);
        }
    }, [handlePosition, isDisplay]);
    React.useEffect(() => {
        setIsShow === null || setIsShow === void 0 ? void 0 : setIsShow(isDisplay);
    }, [isDisplay, setIsShow]);
    React.useEffect(() => {
        refIsShowed.current && (setIsShowed === null || setIsShowed === void 0 ? void 0 : setIsShowed(isDisplay));
    }, [isDisplay, setIsShowed]);
    React.useEffect(() => {
        show();
        refIsShowed.current = true;
    }, [show]);
    return (isDisplay &&
        reactDom.createPortal(React__default["default"].createElement(Wrap$4, { className: "dialog-mark" },
            React__default["default"].createElement(WrapContent, { ref: refContent }, children)), document.getElementById("modal-root")));
}
var index$2 = React__default["default"].forwardRef((props, ref) => {
    const [isShowed, setIsShowed] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
        show() {
            setIsShowed(true);
        },
        hide() {
            setIsShowed(false);
        },
    }));
    return isShowed && React__default["default"].createElement(DialogWrap, Object.assign({ setIsShowed: setIsShowed }, props));
});
const Wrap$4 = styled__default["default"].div `
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const WrapContent = styled__default["default"].div `
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
var index$1 = React__default["default"].memo(({ dropdown, dropdown_menu, full, clickOut = true, position, children, className, }) => {
    const refDropdownMenu = React.useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay.useHandleDisplay(refDropdownMenu, clickOut);
    const onToggle = React.useCallback(() => {
        onToggleDisplay();
    }, [onToggleDisplay]);
    const { handlePosition } = usePositionDropdown.usePositionDropdown(refDropdownMenu, {
        position,
    });
    React.useEffect(() => {
        isDisplay && handlePosition();
    }, [handlePosition, isDisplay]);
    return (React__default["default"].createElement(WrapDropdownMenu, { className: className },
        React__default["default"].createElement(Dropdown$1, { onClick: onToggle }, dropdown || children),
        isDisplay && (React__default["default"].createElement(DropdownMenu, { className: "dropdown-menu " + (className ? className + "-menu" : ""), full: full, position: position || "left", ref: refDropdownMenu }, dropdown_menu))));
});
const WrapDropdownMenu = styled__default["default"].div `
  position: relative;
`;
const DropdownMenu = styled__default["default"].div `
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;
  padding: 3px;

  ${_lineOverflow.menu};
  ${_lineOverflow.normal};
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
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal};
    ${_lineOverflow.P3.a};
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
const Dropdown$1 = styled__default["default"].div ``;

/**
 * Avatar
 *
 * @property {string} url
 * @property {string} children
 */
var Avatar = React__default["default"].memo(({ url, children }) => {
    return (React__default["default"].createElement(AvatarWrap, { className: 'w-avatar' }, url ? (React__default["default"].createElement("img", { src: url, alt: 'wmtime' })) : children ? (React__default["default"].createElement(WordOfName, null, children[0])) : null));
});
const AvatarWrap = styled__default["default"].div `
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
const WordOfName = styled__default["default"].div `
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(WrapChartProcess, { sum: props.sum },
            React__default["default"].createElement(ChartProcess$1, { amount: props.amount, percent: percent })),
        props.title ? React__default["default"].createElement(ChartProcessTitle, null, props.title) : ""));
}
const AmountTag = styled.css `
  position: absolute;
  top: -30px;
  ${base.space.P2.a};
  ${base.borderRadius.normal};
  ${base.fontSize.small};
  right: 0;
  transform: translate(50%, 0);
`;
const ArrowDown = styled.css `
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
const WrapChartProcess = styled__default["default"].div `
  width: 100%;
  height: 5px;
  position: relative;
  background-color: var(--secondary);
  margin-top: 30px;
  ${base.borderRadius.normal};

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
const aniProcess = (percent) => styled.keyframes `
  0%{
    width: 0%;
  }
  100%{
    width: ${percent}%;
  }
`;
const ChartProcess$1 = styled__default["default"].div `
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  width: ${(props) => props.percent}%;
  ${base.borderRadius.normal};
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
const ChartProcessTitle = styled__default["default"].div `
  ${base.fontWeight.light};
  ${base.fontSize.small};
  text-align: center;
  user-select: none;
`;

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
            const _time = selected ? index$7.wDate.identifyDate(selected) : index$7.wDate.now();
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
  ${index$6.transition.linear};
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

function List({ children }) {
    return React__default["default"].createElement(Wrap$3, null, children);
}
const Wrap$3 = styled__default["default"].div `
  & > li,
  & > div {
    padding: 3px 10px;
    transition: 0.2s all ease-in;

    ${_lineOverflow.normal};

    &:hover {
      background-color: var(--background);
    }
  }
`;

const Logo = styled__default["default"].div `
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;
function Logo$1 ({ text }) {
    return (React__default["default"].createElement(Logo, null,
        React__default["default"].createElement(reactRouterDom.Link, { to: "/" }, text ? (React__default["default"].createElement("img", { src: logoText__default["default"], alt: "logo" })) : (React__default["default"].createElement("img", { src: logoImg__default["default"], alt: "logo" })))));
}

function NoData({ children }) {
    return React__default["default"].createElement(Wrap$2, { className: 'no-data' }, children || _t__default["default"]('No data'));
}
const Wrap$2 = styled__default["default"].div `
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
const WrapPopover = styled__default["default"].div `
  display: block;
  position: relative;
  width: min-content;
`;
var Popover = React__default["default"].memo((props) => {
    const refMenu = React.useRef();
    const ref = React.useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay.useHandleDisplay(refMenu);
    useHandlePositionPortal__default["default"](refMenu, ref);
    return (React__default["default"].createElement(WrapPopover, null,
        React__default["default"].createElement(Dropdown, { ref: ref, onClick: onToggleDisplay }, props.children),
        React__default["default"].createElement(Popover$1, { ref: refMenu, full: !!props.full, position: props.position || "left", show: isDisplay },
            props.title && React__default["default"].createElement(PopoverTitle, null, props.title),
            React__default["default"].createElement(PopoverContent, null, props.content))));
});
const Popover$1 = styled__default["default"].div `
  & > * {
    display: ${(props) => !props.show && "none"};
  }
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;

  ${_lineOverflow.normal$1};
  ${_lineOverflow.normal};
  ${index$6.transition.popup};
  ${(props) => (props.show ? _lineOverflow.P2.a : _lineOverflow.P0.a)};
  ${(props) => (props.show ? index$6.transition.showPopup : index$6.transition.hiddenPopup)};
  ${(props) => props.position === "right"
    ? "right: 0"
    : props.position === "left"
        ? "left: 0;"
        : props.position === "top" && "bottom: calc(100% + 10px);"};

  ${(props) => props.full && "width: 100%"};

  hr {
    height: 1px;
    ${_lineOverflow.ImageTransparent};
  }

  li {
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal};
    ${_lineOverflow.P3.a};
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
const Dropdown = styled__default["default"].div `
  cursor: pointer;
  width: max-content;
`;
const PopoverTitle = styled__default["default"].div `
  border-bottom: 1px solid var(--borderLight);
  padding: 5px;
  ${_lineOverflow.big};
`;
const PopoverContent = styled__default["default"].div `
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
    return (React__default["default"].createElement(WrapSubtitle, { direction: props.direction || 'row', color: props.color || '#999999' },
        React__default["default"].createElement(Subtitle$1, null, props.children || props.title),
        props.icon ? React__default["default"].createElement(Icon__default["default"], { icon: props.icon, color: props.color || '#999999' }) : ''));
}
const WrapSubtitle = styled__default["default"].div `
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  color: ${(props) => props.color};

  .icon{
    transform: translateY(2px);
  }
`;
const Subtitle$1 = styled__default["default"].div `
  ${_lineOverflow.small};
  ${_lineOverflow.light};
  ${_lineOverflow.P2.x};
  ${_lineOverflow.one};
  max-width: 200px;
  width: 100%;
`;

const Title = styled__default["default"].div `
  ${_lineOverflow.big};
  ${_lineOverflow.bold};
`;
function Title$1 (props) {
    return React__default["default"].createElement(Title, null,
        props.children,
        " ");
}

function Tooltip({ children, title, position = "bottom", }) {
    return (React__default["default"].createElement(Wrap$1, null,
        React__default["default"].createElement(WrapChildren, null, children),
        React__default["default"].createElement(WrapTooltip, { position: position }, title)));
}
const WrapTooltip = styled__default["default"].div `
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  color: var(--text);
  padding: 8px 12px;
  box-shadow: 0 2px 2px var(--boxShadow);
  ${_lineOverflow.normal};

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
const WrapChildren = styled__default["default"].div `
  cursor: pointer;
`;
const Wrap$1 = styled__default["default"].div `
  position: relative;

  &:hover ${WrapTooltip} {
    display: block;
  }
`;

function useForm() {
    const ref = React.useRef({});
    const getValues = React.useCallback(() => {
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
    var { children, form: formRef, onChange, onFinish } = _a, props = tslib_es6.__rest(_a, ["children", "form", "onChange", "onFinish"]);
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
    React.useEffect(() => {
        children.forEach((ele) => {
            formRef.ref.current[ele.props.name] = { value: ele.props.defaultValue };
        });
    }, [children, formRef]);
    return (React__default["default"].createElement("form", Object.assign({}, props, { onChange: handleChangeForm(), onSubmit: handleSubmit }), children.map((ele, idx) => {
        var _a, _b;
        return React__default["default"].cloneElement(ele, !["textarea", "text", "password", "email", "number"].includes(ele.props.type)
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
    return React__default["default"].createElement("div", null);
}

/**
 * @prop {string} label
 * @prop {'text' | 'number' | 'email' | 'password'} type
 */
/** Component */
var Input$1 = React__default["default"].memo((_a) => {
    var { fnChange, isInputTitle, label, name, placeholder, style, type = 'text', value = '' } = _a, props = tslib_es6.__rest(_a, ["fnChange", "isInputTitle", "label", "name", "placeholder", "style", "type", "value"]);
    const id = generatedId__default["default"]('input');
    const [error, setError] = React.useState();
    const [color, setColor] = React.useState('');
    const [valState, setValState] = React.useState('');
    const handleInvalid = React.useCallback((e) => {
        e.preventDefault();
        e.persist();
        setError({
            type: 'manual',
            message: e.currentTarget.required ? _t__default["default"]('Field is required !!') : '',
        });
    }, []);
    const onChange = React.useCallback((e) => {
        const value = type === 'number' ? +e.target.value : e.target.value;
        setValState(e.target.value);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(value || color);
    }, [type, fnChange, color]);
    const onChangeColor = React.useCallback((col) => {
        setColor(col);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(col);
    }, [fnChange]);
    React.useEffect(() => {
        value && setValState(value);
    }, [value]);
    const inputs = new Map()
        .set('textarea', React__default["default"].createElement(TextareaControl, Object.assign({ className: 'w-textarea', name: name, placeholder: placeholder, id: id }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('text', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'text', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('password', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'password', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('email', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'email', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('number', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'number', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('color', React__default["default"].createElement("div", null,
        React__default["default"].createElement(index_es.App, { width: 20, height: 20, onChange: fnChange ? onChangeColor : setColor, defaultValue: value || color || '#54478c' }),
        React__default["default"].createElement("input", { type: 'hidden', name: name, value: color || value || '#54478c' })));
    return (React__default["default"].createElement(FormGroup__default["default"], { isInputTitle: isInputTitle, style: style, label: label, isFocus: value || placeholder, id: id, inline: type === 'color', error: error }, inputs.get(type)));
});
/** Style */
const InputControl = styled__default["default"].input `
  ${InputStyle.InputStyle};
`;
const TextareaControl = styled__default["default"].textarea `
  ${InputStyle.InputStyle};
  ${_lineOverflow.P2.a};
  resize: none;
`;

/**
 * Checkbox component
 * @props color: color of checkbox when checked
 * @props checked
 * @props fnChanged: function
 * @props labelChecked
 */
var Checkbox = React__default["default"].memo((props) => {
    const id = props.id || generatedId__default["default"]();
    const labelChecked = React.useMemo(() => props.labelChecked ? props.labelChecked : ['', ''], [props.labelChecked]);
    const _onChange = React.useCallback((e) => {
        props.fnChange && props.fnChange(e.target.checked);
    }, [props]);
    return (React__default["default"].createElement(Checkbox$1, { className: 'checkbox ' + (props.className ? props.className : ''), color: props.color, "data-is-aria-label": props.labelChecked ? 'on' : 'off', "aria-label": props.value ? labelChecked[1] : labelChecked[0], "data-label-position": 'left-bottom' },
        React__default["default"].createElement("input", { id: id, type: 'checkbox', checked: props.value, name: props.name, onChange: _onChange }),
        React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement("i", { className: 'i-tick' })),
        React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement("span", null, props.label))));
});
const aniScale = styled.keyframes `
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const Checkbox$1 = styled__default["default"].div `
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
      ${_lineOverflow.front_1};
      ${(props) => props.color && colorSVG__default["default"](props.color)}
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
      ${_lineOverflow.front};
    }

    &:hover {
      background-color: ${polished_esm.rgba('#bdc3c7', 0.1)};
      &::before {
        background-color: ${polished_esm.rgba('#bdc3c7', 0.1)};
      }
    }
  }

  & > label:last-of-type {
    margin-left: 5px;
    ${({ color }) => color && colorSVG__default["default"](color)};
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
    const format = React.useMemo(() => {
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
    const disablePrevious = React.useCallback((date) => {
        const _date = dayjs_min.dayjs_min(date);
        return value.from
            ? _date.isBefore(dayjs_min.dayjs_min(value.from))
            : defaultValue.from
                ? _date.isBefore(dayjs_min.dayjs_min(defaultValue.from))
                : false;
    }, [defaultValue.from, value.from]);
    const disableNext = React.useCallback((date) => {
        const _date = dayjs_min.dayjs_min(date);
        return value.to
            ? _date.isAfter(dayjs_min.dayjs_min(value.to))
            : defaultValue.to
                ? _date.isAfter(dayjs_min.dayjs_min(defaultValue.to))
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
    return (React__default["default"].createElement(Wrap, { className: "date-range" },
        React__default["default"].createElement(Label, null, label),
        React__default["default"].createElement(index$5.DatePicker, { picker: picker, value: value.from, defaultValue: defaultValue.from, fnChange: onChangeFrom, format: format, isRemove: false, disableItem: disableNext }),
        React__default["default"].createElement("span", null,
            React__default["default"].createElement(Icon.Icon, { icon: "i-transfer" })),
        React__default["default"].createElement(index$5.DatePicker, { picker: picker, value: value.to, defaultValue: defaultValue.to, fnChange: onChangeTo, format: format, isRemove: false, disableItem: disablePrevious })));
}
const Wrap = styled__default["default"].div `
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
const Label = styled__default["default"].div `
  ${index$5.LabelCss};
  ${index$5.cssFocus};
`;

/**
 * @prop {(val: string) => void} fnSearch
 */
var Search = React__default["default"].memo((props) => {
    const [isFocus, setIsFocus] = React.useState(false);
    const [value, setValue] = React.useState('');
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
    return (React__default["default"].createElement(Search$1, { dark: props.dark, focus: isFocus, onSubmit: submit, className: 'w-search' },
        React__default["default"].createElement("button", { type: 'submit' },
            React__default["default"].createElement(Icon__default["default"], { color: props.dark ? '#fff' : '#1a1a1a', icon: 'i-search' })),
        props.value !== undefined && props.onChange ? (React__default["default"].createElement(Input, { value: props.value, onChange: props.onChange, placeholder: `${props.placeholder || _t__default["default"]('Search')}...`, onFocus: () => focus(), onBlur: (e) => blur(e) })) : (React__default["default"].createElement(Input, { value: value, onChange: (e) => setValue(e.target.value), placeholder: `${props.placeholder || _t__default["default"]('Search')}...`, onFocus: () => focus(), onBlur: (e) => blur(e) }))));
});
const Search$1 = styled__default["default"].form `
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${({ dark }) => (dark ? '#fff' : '#c7c7c7')};
  width: 200px;
  input {
    color: ${({ dark }) => (dark ? '#fff' : 'initial')};
  }

  ${_lineOverflow.P2.y};
  ${_lineOverflow.P3.x};
  ${index$6.transition.easeIn};
  ${_lineOverflow.SemiTransparent};
  ${(props) => props.focus &&
    `
    opacity: 1;
    max-width: 300px;
    width: 100%;
  `};
  button {
    ${ButtonNoStyle.ButtonNoStyle};
  }
`;
const Input = styled__default["default"].input `
  margin-left: 5px;
  background-color: transparent;
  border: none;
  ${_lineOverflow.normal$2};

  &:focus {
    outline: 0;
  }
`;

const SwitchWrap = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
  user-select: none;

  h5 {
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal$3};
  }
  h6 {
    opacity: 0.8;
    ${_lineOverflow.normal$3};
    ${_lineOverflow.small};
  }

  input {
    width: 0;
    height: 0;
    display: none;
  }
`;
const SwitchButton = styled__default["default"].label `
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
const SwitchBox = styled__default["default"].label `
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${(props) => props.active ? "var(--primary)" : "var(--shadow)"};
  ${_lineOverflow.around};
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
var Switch = React__default["default"].memo((props) => {
    const id = generatedId__default["default"]();
    const [value, setValue] = React.useState(props.value || props.defaultValue || false);
    const _onChange = React.useCallback(() => {
        if (props.fnChange) {
            props.fnChange(!value);
        }
        setValue(!value);
    }, [props, value]);
    React.useEffect(() => {
        props.value && setValue(props.value);
    }, [props.value]);
    return (React__default["default"].createElement(SwitchWrap, null,
        React__default["default"].createElement("div", null,
            React__default["default"].createElement("h5", null, props.label),
            props.labelSub ? React__default["default"].createElement("h6", null, props.labelSub) : ""),
        React__default["default"].createElement("input", { id: id, type: "checkbox", checked: value, onChange: _onChange }),
        React__default["default"].createElement(SwitchBox, { active: value, htmlFor: id },
            React__default["default"].createElement(SwitchButton, { htmlFor: id }))));
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
var index = React__default["default"].memo((props) => {
    const id = generatedId__default["default"]('input');
    const [list, setList] = React.useState([]);
    const [valState, setValState] = React.useState();
    // Convert list options from children
    const convertOptionsFromChildren = React.useCallback((children) => {
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
    const handleSelect = React.useCallback((_val) => {
        setValState(_val);
        props === null || props === void 0 ? void 0 : props.fnChange(_val);
    }, [props]);
    /**
     * When props.list change
     * So it only action as constructor
     */
    React.useEffect(() => {
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
    React.useEffect(() => {
        setValState(props.value);
    }, [props.value]);
    React.useEffect(() => {
        props.defaultValue && setValState(props.defaultValue);
    }, [props.defaultValue]);
    return (React__default["default"].createElement(FormGroup__default["default"], { style: props.style || {}, labelFocus: true, isFocus: true, label: props.label, id: id, className: 'w-select' + (props.isMultiple ? ' w-select-multiple' : '') },
        React__default["default"].createElement(Select_SelectListOption.SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
});

function Loading(props) {
    return (React__default["default"].createElement(LoadingWrap, null,
        React__default["default"].createElement(LoadingEclipse, { className: "loading-eclipse", small: !!props.small },
            React__default["default"].createElement("div", null))));
}
const LoadingAnimation = styled.keyframes `
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;
const LoadingWrap = styled__default["default"].div `
  width: 20px;
  height: 20px;
  display: inline-block;
  /* overflow: hidden; */
  background: transparent;
`;
const LoadingEclipse = styled__default["default"].div `
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
    return (React__default["default"].createElement(LoadingBallWrap, null,
        React__default["default"].createElement(LoadingBallLogo, null,
            React__default["default"].createElement("img", { src: logoImg__default$1["default"], alt: "manage time" })),
        React__default["default"].createElement(LoadingBallShadow, null)));
}
const LoadingBallAnimation = styled.keyframes `
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
const LoadingBallShadowAnimation = styled.keyframes `
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
const LoadingBallWrap = styled__default["default"].div `
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
  position: relative;
`;
const LoadingBallLogo = styled__default["default"].div `
  position: absolute;
  top: 0;
  left: 100px;
  width: 100px;
  height: 100px;
  animation: ${LoadingBallAnimation} 1s linear infinite;
`;
const LoadingBallShadow = styled__default["default"].div `
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
    return (React__default["default"].createElement(LoadingSomeoneTypingWrap, null,
        React__default["default"].createElement("div", null),
        React__default["default"].createElement("div", null),
        React__default["default"].createElement("div", null)));
}
const LoadingSomeoneTypingWrapAnimation = styled.keyframes `
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
const LoadingSomeoneTypingWrap = styled__default["default"].div `
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
React__default["default"].memo((props) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const handleClose = React.useCallback(() => {
        setIsOpen(false);
        setTimeout(() => {
            props.fnOff(props === null || props === void 0 ? void 0 : props.id);
        }, 200);
    }, [props]);
    React.useEffect(() => {
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
    return (React__default["default"].createElement(NotificationWrap, { open: isOpen, white: !!props.white, success: !!props.success, error: !!props.error },
        typeof props.message === "string" ? (React__default["default"].createElement(Message, { dangerouslySetInnerHTML: { __html: props.message } })) : (React__default["default"].createElement(Message, null, props.message)),
        React__default["default"].createElement(ButtonClose, { white: !!props.white, type: "button", onClick: handleClose },
            React__default["default"].createElement("i", { className: "i-close" }))));
});
const slideRight = styled.keyframes `
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideRightOut = styled.keyframes `
 100% {
    opacity: 0;
    transform: translateX(-100px);
  }
  0% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const NotificationWrap = styled__default["default"].div `
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
const Message = styled__default["default"].div `
  position: relative;
  top: -1px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ButtonClose = styled__default["default"].button `
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

exports.Button = Modal.Button;
exports.Modal = Modal.Modal;
exports.ButtonAction = ButtonAction.ButtonAction;
exports.Calender = index$4.Calendar;
exports.Icon = Icon.Icon;
exports.DatePicker = index$5.DatePicker;
exports.Avatar = Avatar;
exports.ButtonLoadMore = ButtonLoadMore;
exports.CalenderMonth = Month;
exports.CalenderYear = Year;
exports.ChartProcess = ChartProcess;
exports.Checkbox = Checkbox;
exports.Clock = Clock;
exports.Collapse = index$3;
exports.DateRange = DateRange;
exports.Dialog = index$2;
exports.Dropdown = index$1;
exports.Form = Form;
exports.FormControl = FormControl;
exports.Input = Input$1;
exports.List = List;
exports.Loading = Loading;
exports.LoadingBall = LoadingBall;
exports.LoadingSomeoneTyping = LoadingSomeoneTyping;
exports.Logo = Logo$1;
exports.NoData = NoData;
exports.Popover = Popover;
exports.Search = Search;
exports.Select = index;
exports.Subtitle = Subtitle;
exports.Switch = Switch;
exports.Title = Title$1;
exports.Tooltip = Tooltip;
exports.useForm = useForm;
