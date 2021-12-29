'use strict';

var React = require('react');
var _lineOverflow = require('../../_lineOverflow-b8a457d2.js');
var usePositionDropdown = require('../../usePositionDropdown-7a45ea8c.js');
var _FormGroup = require('../../_FormGroup-4649f433.js');
var Icon = require('../../Icon-b6bdc54f.js');
var InputStyle = require('../../InputStyle-786378de.js');
var Year = require('../../Year-1d4a1491.js');
var weekOfYear = require('../../weekOfYear-3a23eaca.js');
var generatedId = require('../../generatedId-3779176c.js');
var styled = require('styled-components');
var index = require('../../index-f0e3963b.js');
var useHandleDisplay = require('../../useHandleDisplay-86b835d7.js');
require('../../ButtonAction-1bcd2a25.js');
require('../../clock-face-00da2ca7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Other({ fnChange, format = "DD MMMM,YYYY", label, name, picker = "date-time", style, value = "", isRemove = true, defaultValue, disableItem, position, }) {
    const id = generatedId.generatedId("date-picker");
    const refDropdown = React.useRef();
    const refMenuDropdown = React.useRef();
    const ref = React.useRef();
    const [val, setVal] = React.useState("");
    const [time, setTime] = React.useState("");
    const [date, setDate] = React.useState(null);
    const { isDisplay, show, hide } = useHandleDisplay.useHandleDisplay(refDropdown, true);
    const { handlePosition } = usePositionDropdown.usePositionDropdown(refMenuDropdown);
    const handleDropdownChange = React.useCallback((list) => {
        if (list[0].boundingClientRect.height) {
            handlePosition();
        }
    }, [handlePosition]);
    usePositionDropdown.useMutationObservable(refMenuDropdown.current, handleDropdownChange);
    // Handle show dropdown menu
    const onShow = React.useCallback(() => {
        show();
    }, [show]);
    // Change value
    const onChange = React.useCallback((field) => (val) => {
        switch (field) {
            case "date": {
                setDate(new Date(weekOfYear.dayjs_min(val).format("YYYY/MM/DD") + (time ? " " + time : "")).toString());
                setVal(weekOfYear.dayjs_min(val).format(format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(weekOfYear.dayjs_min(val).format(format));
                break;
            }
            case "month": {
                setDate(new Date(weekOfYear.dayjs_min(val).format("YYYY/MM/DD")));
                setVal(weekOfYear.dayjs_min(val).format(format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(weekOfYear.dayjs_min(val).format(format));
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
                setVal(weekOfYear.dayjs_min(val).format(format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(weekOfYear.dayjs_min(val).format(format));
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
        if (weekOfYear.dayjs_min(val, "DD/MM/YYYY").isValid()) {
            onChange(picker)(new Date(val));
        }
        else {
            e.target.value = "";
        }
    }, [onChange, picker]);
    const containers = React.useMemo(() => new Map()
        .set("date", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(usePositionDropdown.Calendar, { selected: val, disableItem: disableItem, fnSelected: onChange("date") })))
        .set("time", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(usePositionDropdown.Clock, { selected: time, fnSelected: onChange("time") })))
        .set("year", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Year.Year, { selected: val, disableItem: disableItem, fnSelected: onChange("year") })))
        .set("month", React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Year.Month, { selected: date, disableItem: disableItem, fnSelected: onChange("month") }))), [val, disableItem, onChange, time, date]);
    // Handle value and format data
    // Set state of component with value
    React.useEffect(() => {
        if (!value && !defaultValue)
            return;
        const _val = value || defaultValue;
        if (picker === "date-time" || picker === "date") {
            const _date = new Date(_val);
            setDate(_date);
            setTime(weekOfYear.dayjs_min(_date).format("hh:mm"));
            setVal(weekOfYear.dayjs_min(_date).format(format));
        }
        else if (picker === "year") {
            setVal(new Date(_val.toString()).getFullYear());
        }
        else if (picker === "month") {
            setVal(weekOfYear.dayjs_min(_val).format(format));
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
    return (React__default["default"].createElement(Wrap, { ref: refDropdown },
        React__default["default"].createElement(_FormGroup.FormGroup, { style: style || {}, isFocus: true, label: label, id: id },
            React__default["default"].createElement(InputSection, null,
                (picker === "date" || picker === "month") && (React__default["default"].createElement("input", { type: "hidden", name: name, defaultValue: date })),
                React__default["default"].createElement(InputControl, { autoComplete: "off", id: id + "-calendar", name: picker !== "month" ? name : "", placeholder: format, onClick: onShow, onBlur: onBlurDate, ref: ref })),
            isRemove && (React__default["default"].createElement(ButtonClose, { onClick: onRemove, type: "button" },
                React__default["default"].createElement(Icon.Icon, { small: true, icon: "i-close" }))),
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
  ${index.transition.popup};
`;
const InputDataSelector = styled__default["default"].div `
  ${_lineOverflow.P2.a};
`;
const InputDateSelectorContainer = styled__default["default"].div `
  ${index.transition.popup};
  ${(props) => props.show ? index.transition.slideUpLeft : index.transition.slideDownLeft};
`;
const InputSection = styled__default["default"].div `
  display: flex;
`;

module.exports = Other;
