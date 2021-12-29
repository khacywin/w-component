'use strict';

var React = require('react');
var _lineOverflow = require('../../_lineOverflow-b8a457d2.js');
var ButtonAction = require('../../ButtonAction-1bcd2a25.js');
var usePositionDropdown = require('../../usePositionDropdown-7a45ea8c.js');
var _FormGroup = require('../../_FormGroup-4649f433.js');
var Icon = require('../../Icon-b6bdc54f.js');
var InputStyle = require('../../InputStyle-786378de.js');
var weekOfYear = require('../../weekOfYear-3a23eaca.js');
var generatedId = require('../../generatedId-3779176c.js');
var styled = require('styled-components');
var index$1 = require('../../index-f0e3963b.js');
var useHandleDisplay = require('../../useHandleDisplay-86b835d7.js');
var index = require('../../index-a34574a3.js');
require('../../clock-face-00da2ca7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var DateTime = React__default["default"].memo(({ fnChange, format = "DD MMMM,YYYY", label, name, style, value = "", isRemove = true, defaultValue, disableItem, position, }) => {
    const id = generatedId.generatedId("date-picker");
    const refDropdown = React.useRef();
    const refMenuDropdown = React.useRef();
    const ref = React.useRef();
    const refTime = React.useRef();
    const refShow = React.useRef(false); // To check handling position
    const [tab, setTab] = React.useState("date");
    const [time, setTime] = React.useState(""); // This is string, HH:MM
    const [date, setDate] = React.useState(null); // Object Date to save
    const { isDisplay, show, hide } = useHandleDisplay.useHandleDisplay(refDropdown, false);
    const { handlePosition } = usePositionDropdown.usePositionDropdown(refMenuDropdown);
    const handleDropdownChange = React.useCallback((list) => {
        if (list[0].boundingClientRect.height && !refShow.current) {
            refShow.current = true;
            handlePosition();
        }
        else if (list[0].boundingClientRect.height === 0) {
            refShow.current = false;
        }
    }, [handlePosition]);
    usePositionDropdown.useMutationObservable(refMenuDropdown.current, handleDropdownChange);
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
                ref.current.value = index.wDate.format(val, format);
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
        if (weekOfYear.dayjs_min(val, "DD/MM/YYYY").isValid()) {
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
        setTime(index.wDate.format(_date, "hh:mm"));
        ref.current.value = index.wDate.format(_date, format);
        refTime.current.value = index.wDate.format(_date, "hh:mm");
        return () => {
            setDate(null);
            setTime(null);
        };
    }, [value, format, defaultValue]);
    return (React__default["default"].createElement(Wrap, { ref: refDropdown },
        React__default["default"].createElement(_FormGroup.FormGroup, { style: style || {}, isFocus: true, label: label, id: id },
            React__default["default"].createElement(InputSection, null,
                React__default["default"].createElement("input", { type: "hidden", name: name, value: date ? date.toUTCString() : "" }),
                React__default["default"].createElement(InputControl, { autoComplete: "off", id: id + "-calendar", placeholder: "DD/MM/YYYY", onClick: onShow("date"), onBlur: onBlurDate, ref: ref }),
                React__default["default"].createElement(InputControl, { autoComplete: "off", id: id + "time", onClick: onShow("time"), placeholder: "hh:mm", onBlur: onBlurTime, ref: refTime })),
            isRemove && (React__default["default"].createElement(ButtonClose, { onClick: onRemove, type: "button" },
                React__default["default"].createElement(Icon.Icon, { small: true, icon: "i-close" }))),
            React__default["default"].createElement(DropdownMenu, { position: position, ref: refMenuDropdown, show: isDisplay },
                React__default["default"].createElement(InputDataSelector, null,
                    React__default["default"].createElement(WrapContainer, null,
                        React__default["default"].createElement(Top, null,
                            React__default["default"].createElement("div", null,
                                React__default["default"].createElement(ButtonAction.ButtonAction, { isActive: tab === "date", onClick: () => setTab("date") },
                                    React__default["default"].createElement(Icon.Icon, { icon: "i-calendar" })),
                                React__default["default"].createElement(ButtonAction.ButtonAction, { isActive: tab === "time", onClick: () => setTab("time") },
                                    React__default["default"].createElement(Icon.Icon, { icon: "i-time" }))),
                            React__default["default"].createElement("div", null,
                                React__default["default"].createElement(ButtonAction.ButtonAction, { onClick: () => hide() },
                                    React__default["default"].createElement(Icon.Icon, { icon: "i-close" })))),
                        React__default["default"].createElement("div", null,
                            React__default["default"].createElement(Container, { active: tab === "date" },
                                React__default["default"].createElement(usePositionDropdown.Calendar, { selected: new Date(date), disableItem: disableItem, fnSelected: onChange("date-time") })),
                            React__default["default"].createElement(Container, { active: tab === "time" },
                                React__default["default"].createElement(usePositionDropdown.Clock, { selected: time || date, fnSelected: onChange("time") })))))))));
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
  ${InputStyle.InputStyle};
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
  ${_lineOverflow.normal$1};
  ${index$1.transition.popup};
`;
const InputDataSelector = styled__default["default"].div `
  ${_lineOverflow.P2.a};
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
