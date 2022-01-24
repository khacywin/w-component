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
var Calendar_index = require('../../index-f0ef9d11.js');
var Clock = require('../../Clock.js');
var Form__FormGroup = require('../_FormGroup.js');
var Icon = require('../../Icon.js');
var css_elements_InputStyle = require('../../css/elements/InputStyle.js');
var Calendar_Month = require('../../Calendar/Month.js');
var Calendar_Year = require('../../Calendar/Year.js');
var _util_generatedId = require('../../_util/generatedId.js');
var styled = require('styled-components');
var css_transition_index = require('../../index-9390237c.js');
var _util_hooks_useHandleDisplay = require('../../_util/hooks/useHandleDisplay.js');
var _util_hooks_useIntersectionObserver = require('../../_util/hooks/useIntersectionObserver.js');
var _util_hooks_usePositionDropdown = require('../../_util/hooks/usePositionDropdown.js');
require('../../Calendar/_style.js');
require('../../Button/ButtonAction.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Other({ fnChange, format = "DD MMMM,YYYY", label, name, picker = "date-time", style, value = "", isRemove = true, defaultValue, disableItem, position, }) {
    const id = _util_generatedId("date-picker");
    const refDropdown = React.useRef();
    const refMenuDropdown = React.useRef();
    const ref = React.useRef();
    const [val, setVal] = React.useState("");
    const [time, setTime] = React.useState("");
    const [date, setDate] = React.useState(null);
    const { isDisplay, show, hide } = _util_hooks_useHandleDisplay(refDropdown, true);
    const { handlePosition } = _util_hooks_usePositionDropdown(refMenuDropdown);
    const handleDropdownChange = React.useCallback((list) => {
        if (list[0].boundingClientRect.height) {
            handlePosition();
        }
    }, [handlePosition]);
    _util_hooks_useIntersectionObserver(refMenuDropdown.current, handleDropdownChange);
    // Handle show dropdown menu
    const onShow = React.useCallback(() => {
        show();
    }, [show]);
    // Change value
    const onChange = React.useCallback((field) => (val) => {
        switch (field) {
            case "date": {
                setDate(new Date(Calendar_index.dayjs_min(val).format("YYYY/MM/DD") + (time ? " " + time : "")).toString());
                setVal(Calendar_index.dayjs_min(val).format(format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(Calendar_index.dayjs_min(val).format(format));
                break;
            }
            case "month": {
                setDate(new Date(Calendar_index.dayjs_min(val).format("YYYY/MM/DD")));
                setVal(Calendar_index.dayjs_min(val).format(format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(Calendar_index.dayjs_min(val).format(format));
                break;
            }
            case "year": {
                const _year = new Date(val).getFullYear();
                setVal(_year.toString());
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(_year.toString());
                break;
            }
            case "date-time": {
                const min = val.getMinutes();
                const hour = val.getHours();
                // Format for time, adn format is HH:MM
                const _value = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}`;
                setTime(_value);
                setVal(Calendar_index.dayjs_min(val).format(format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(Calendar_index.dayjs_min(val).format(format));
                break;
            }
            default:
                setVal(val);
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(val);
                break;
        }
    }, [format, time, fnChange]);
    // Set empty data
    const onRemove = React.useCallback(() => {
        fnChange && fnChange("");
        setVal(null);
        setDate(null);
        setTime("");
        hide();
    }, [fnChange, hide]);
    /**
     * Handle date when enter from keyboard
     */
    // Date
    const onBlurDate = React.useCallback((e) => {
        const val = e.target.value;
        if (Calendar_index.dayjs_min(val, "DD/MM/YYYY").isValid()) {
            onChange(picker)(new Date(val));
        }
        else {
            e.target.value = "";
        }
    }, [onChange, picker]);
    const containers = React.useMemo(() => new Map()
        .set("date", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Calendar_index.Calendar, { selected: val, disableItem: disableItem, fnSelected: onChange("date") })))
        .set("time", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Clock, { selected: time, fnSelected: onChange("time") })))
        .set("year", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Calendar_Year, { selected: val, disableItem: disableItem, fnSelected: onChange("year") })))
        .set("month", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Calendar_Month, { selected: date, disableItem: disableItem, fnSelected: onChange("month") }))), [val, disableItem, onChange, time, date]);
    // Handle value and format data
    // Set state of component with value
    React.useEffect(() => {
        if (!value && !defaultValue)
            return;
        const _val = value || defaultValue;
        if (picker === "date-time" || picker === "date") {
            const _date = new Date(_val);
            setDate(_date);
            setTime(Calendar_index.dayjs_min(_date).format("hh:mm"));
            setVal(Calendar_index.dayjs_min(_date).format(format));
        }
        else if (picker === "year") {
            setVal(new Date(_val.toString()).getFullYear());
        }
        else if (picker === "month") {
            setVal(Calendar_index.dayjs_min(_val).format(format));
            setDate(new Date(_val));
        }
        else {
            setDate(new Date(_val));
        }
        return () => {
            setDate(null);
            setTime(null);
            setVal(null);
        };
    }, [value, format, picker, defaultValue]);
    // Update input control
    React.useEffect(() => {
        if (!ref.current)
            return;
        ref.current.value = val;
    }, [val]);
    return (React__default["default"].createElement(Wrap, { ref: refDropdown, className: "w-form-item" },
        React__default["default"].createElement(Form__FormGroup["default"], { style: style || {}, isFocus: true, label: label, id: id },
            React__default["default"].createElement(InputSection, null,
                (picker === "date" || picker === "month") && (React__default["default"].createElement("input", { type: "hidden", name: name, defaultValue: date })),
                React__default["default"].createElement(InputControl, { autoComplete: "off", id: id + "-calendar", name: picker !== "month" ? name : "", placeholder: format, onClick: onShow, onBlur: onBlurDate, ref: ref })),
            isRemove && (React__default["default"].createElement(ButtonClose, { onClick: onRemove, type: "button" },
                React__default["default"].createElement(Icon, { small: true, icon: "i-close" }))),
            React__default["default"].createElement(DropdownMenu, { position: position, ref: refMenuDropdown, show: isDisplay },
                React__default["default"].createElement(InputDataSelector, null, containers.get(picker))))));
}
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
const InputDateSelectorContainer = styled__default["default"].div `
  ${css_transition_index.transition.popup};
  ${(props) => props.show ? css_transition_index.transition.slideUpLeft : css_transition_index.transition.slideDownLeft};
`;
const InputSection = styled__default["default"].div `
  display: flex;
`;

module.exports = Other;
