'use strict';

var React = require('react');
var css_base__space = require('../../_space-5cfb2697.js');
require('../../_fontWeight-72109252.js');
require('../../_fontSize-5a701955.js');
require('../../_zIndex-a46cddfb.js');
require('../../_opacity-19bf620b.js');
require('../../_borderRadius-3deadb9d.js');
var css_base__boxShadow = require('../../_boxShadow-6d818d81.js');
require('../../_lineOverflow-94c98c56.js');
var Button_ButtonAction = require('../../Button/ButtonAction.js');
var Calendar_index = require('../../index-f0ef9d11.js');
var Clock = require('../../Clock.js');
var Form__FormGroup = require('../_FormGroup.js');
var Icon = require('../../Icon.js');
var css_elements_InputStyle = require('../../css/elements/InputStyle.js');
var _util_generatedId = require('../../_util/generatedId.js');
var styled = require('styled-components');
var css_transition_index = require('../../index-9390237c.js');
var _util_hooks_useHandleDisplay = require('../../_util/hooks/useHandleDisplay.js');
var _util_hooks_useIntersectionObserver = require('../../_util/hooks/useIntersectionObserver.js');
var _util_hooks_usePositionDropdown = require('../../_util/hooks/usePositionDropdown.js');
require('../../Calendar/_style.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var DateTime = React__default["default"].memo(({ fnChange, format = "DD MMMM,YYYY", label, name, style, value = "", isRemove = true, defaultValue, disableItem, position, }) => {
    const id = _util_generatedId("date-picker");
    const refDropdown = React.useRef();
    const refMenuDropdown = React.useRef();
    const ref = React.useRef();
    const refTime = React.useRef();
    const refShow = React.useRef(false); // To check handling position
    const [tab, setTab] = React.useState("date");
    const [time, setTime] = React.useState(""); // This is string, HH:MM
    const [date, setDate] = React.useState(null); // Object Date to save
    const { isDisplay, show, hide } = _util_hooks_useHandleDisplay(refDropdown, false);
    const { handlePosition } = _util_hooks_usePositionDropdown(refMenuDropdown);
    const handleDropdownChange = React.useCallback((list) => {
        if (list[0].boundingClientRect.height && !refShow.current) {
            refShow.current = true;
            handlePosition();
        }
        else if (list[0].boundingClientRect.height === 0) {
            refShow.current = false;
        }
    }, [handlePosition]);
    _util_hooks_useIntersectionObserver(refMenuDropdown.current, handleDropdownChange);
    // Handle show dropdown menu
    const onShow = React.useCallback((container) => () => {
        setTab(container);
        show();
    }, [show]);
    // Change value
    const onChange = React.useCallback((field) => (val) => {
        switch (field) {
            case "time": {
                // Format for time, adn format is HH:MM
                const _value = `${val[0] < 10 ? "0" + val[0] : val[0]}:${val[1] < 10 ? "0" + val[1] : val[1]}`;
                setTime(_value);
                refTime.current.value = _value;
                if (date) {
                    const _date = new Date(date);
                    _date.setHours(val[0]);
                    _date.setMinutes(val[1]);
                    setDate(_date);
                    fnChange === null || fnChange === void 0 ? void 0 : fnChange(_date.toString());
                }
                break;
            }
            case "date-time": {
                let min, hour;
                if (!time) {
                    min = new Date().getMinutes();
                    hour = new Date().getHours();
                    // Format for time, adn format is HH:MM
                    const _value = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}`;
                    refTime.current.value = _value;
                    setTime(_value);
                }
                else {
                    hour = +time.split(":")[0];
                    min = +time.split(":")[1];
                }
                val.setHours(hour);
                val.setMinutes(min);
                ref.current.value = Calendar_index.dayjs_min(val).format(format);
                setDate(val);
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(val.toString());
                break;
            }
        }
    }, [date, fnChange, time, format]);
    // Set empty data
    const onRemove = React.useCallback(() => {
        fnChange === null || fnChange === void 0 ? void 0 : fnChange("");
        setDate(null);
        setTime("");
        ref.current.value = "";
        refTime.current.value = "";
        hide();
    }, [fnChange, hide]);
    /**
     * Handle date when enter from keyboard
     */
    // Date
    const onBlurDate = React.useCallback((e) => {
        const val = e.target.value;
        if (Calendar_index.dayjs_min(val, "DD/MM/YYYY").isValid()) {
            onChange("date-time")(new Date(val));
        }
        else {
            e.target.value = "";
        }
    }, [onChange]);
    // Time
    const onBlurTime = React.useCallback((e) => {
        const val = e.target.value;
        if (val && /[0-9]{1,2}:[0-9]{1,2}/.test(val)) {
            onChange("time")(val);
        }
        else {
            e.target.value = "";
        }
    }, [onChange]);
    // Handle value and format data
    // Set state of component with value
    React.useEffect(() => {
        if (!value && !defaultValue)
            return;
        const _val = value || defaultValue;
        const _date = new Date(_val);
        setDate(_date);
        setTime(Calendar_index.dayjs_min(_date).format("hh:mm"));
        ref.current.value = Calendar_index.dayjs_min(_date).format(format);
        refTime.current.value = Calendar_index.dayjs_min(_date).format("hh:mm");
        return () => {
            setDate(null);
            setTime(null);
        };
    }, [value, format, defaultValue]);
    return (React__default["default"].createElement(Wrap, { ref: refDropdown },
        React__default["default"].createElement(Form__FormGroup["default"], { style: style || {}, isFocus: true, label: label, id: id },
            React__default["default"].createElement(InputSection, null,
                React__default["default"].createElement("input", { type: "hidden", name: name, value: date ? date.toUTCString() : "" }),
                React__default["default"].createElement(InputControl, { autoComplete: "off", id: id + "-calendar", placeholder: "DD/MM/YYYY", onClick: onShow("date"), onBlur: onBlurDate, ref: ref }),
                React__default["default"].createElement(InputControl, { autoComplete: "off", id: id + "time", onClick: onShow("time"), placeholder: "hh:mm", onBlur: onBlurTime, ref: refTime })),
            isRemove && (React__default["default"].createElement(ButtonClose, { onClick: onRemove, type: "button" },
                React__default["default"].createElement(Icon, { small: true, icon: "i-close" }))),
            React__default["default"].createElement(DropdownMenu, { position: position, ref: refMenuDropdown, show: isDisplay },
                React__default["default"].createElement(InputDataSelector, null,
                    React__default["default"].createElement(WrapContainer, null,
                        React__default["default"].createElement(Top, null,
                            React__default["default"].createElement("div", null,
                                React__default["default"].createElement(Button_ButtonAction, { isActive: tab === "date", onClick: () => setTab("date") },
                                    React__default["default"].createElement(Icon, { icon: "i-calendar" })),
                                React__default["default"].createElement(Button_ButtonAction, { isActive: tab === "time", onClick: () => setTab("time") },
                                    React__default["default"].createElement(Icon, { icon: "i-time" }))),
                            React__default["default"].createElement("div", null,
                                React__default["default"].createElement(Button_ButtonAction, { onClick: () => hide() },
                                    React__default["default"].createElement(Icon, { icon: "i-close" })))),
                        React__default["default"].createElement("div", null,
                            React__default["default"].createElement(Container, { active: tab === "date" },
                                React__default["default"].createElement(Calendar_index.Calendar, { selected: new Date(date), disableItem: disableItem, fnSelected: onChange("date-time") })),
                            React__default["default"].createElement(Container, { active: tab === "time" },
                                React__default["default"].createElement(Clock, { selected: time || date, fnSelected: onChange("time") })))))))));
});
const ButtonClose = styled__default["default"].button `
  background-color: var(--backgroundContent);
  border: none;
  cursor: pointer;
  display: none;
  outline: 0;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  &:focus {
    outline: 0;
  }
`;
const Wrap = styled__default["default"].div `
  &:hover {
    ${ButtonClose} {
      display: block;
    }
  }
`;
const InputControl = styled__default["default"].input `
  ${css_elements_InputStyle};
`;
const DropdownMenu = styled__default["default"].div `
  background-color: var(--backgroundContent);
  display: none;
  padding: 15px;
  position: absolute;
  z-index: -1;

  ${({ position }) => position === "right"
    ? "right: 2px;"
    : position === "left"
        ? "left: 2px;"
        : position === "top"
            ? "bottom: calc(100% + 10px);"
            : position === "bottom"
                ? "top: calc(100% + 10px);"
                : ""};

  ${({ show }) => show &&
    `
    display: block;
    z-index: 300;
  `};
  ${css_base__boxShadow.normal};
  ${css_transition_index.transition.popup};
`;
const InputDataSelector = styled__default["default"].div `
  ${css_base__space.P2.a};
`;
const InputSection = styled__default["default"].div `
  display: flex;
`;
const WrapContainer = styled__default["default"].div ``;
const Top = styled__default["default"].div `
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;
const Container = styled__default["default"].div `
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 285px;
`;

module.exports = DateTime;
