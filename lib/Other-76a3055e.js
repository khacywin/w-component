'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-0611c7f0.js');
var ButtonAction = require('./ButtonAction-7441ef33.js');
var dayjs_min = require('./dayjs.min-b3a7684f.js');
var _FormGroup = require('./_FormGroup-adb09714.js');
var Icon = require('./Icon-b6bdc54f.js');
var InputStyle = require('./InputStyle-71a1b4f3.js');
var generatedId = require('./generatedId-3779176c.js');
var styled = require('styled-components');
var index$1 = require('./index-f0e3963b.js');
var useHandleDisplay = require('./useHandleDisplay-16f1a228.js');
var usePositionDropdown = require('./usePositionDropdown-d8f294b5.js');
var index = require('./index-4b1ec35a.js');
var Year = require('./Year-f38cf551.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var DateTime = React__default["default"].memo(({ fnChange, format = "DD MMMM,YYYY", label, name, style, value = "", isRemove = true, defaultValue, disableItem, }) => {
    var _a;
    const id = generatedId.generatedId("date-picker");
    const refDropdown = React.useRef();
    const refMenuDropdown = React.useRef();
    const ref = React.useRef();
    const refTime = React.useRef();
    const [tab, setTab] = React.useState("date");
    const [time, setTime] = React.useState(""); // This is string, HH:MM
    const [date, setDate] = React.useState(null); // Object Date to save
    const widthInputDate = React.useMemo(() => { var _a; return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth; }, []);
    const { isDisplay, show, hide } = useHandleDisplay.useHandleDisplay(refDropdown, false);
    const { handlePosition } = usePositionDropdown.usePositionDropdown(refMenuDropdown, {
        add: {
            height: (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientHeight,
        },
    });
    // Handle show dropdown menu
    const onShow = React.useCallback((container) => () => {
        handlePosition(container === "time" ? { left: widthInputDate } : {});
        show();
        setTab(container);
    }, [show, handlePosition, widthInputDate]);
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
        if (dayjs_min.dayjs_min(val, "DD/MM/YYYY").isValid()) {
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
    return (React__default["default"].createElement(Wrap$1, { ref: refDropdown },
        React__default["default"].createElement(_FormGroup.FormGroup, { style: style || {}, isFocus: true, label: label, id: id },
            React__default["default"].createElement(InputSection$1, null,
                React__default["default"].createElement("input", { type: "hidden", name: name, value: date ? date.toUTCString() : "" }),
                React__default["default"].createElement(InputControl$1, { autoComplete: "off", id: id + "-calendar", placeholder: "DD/MM/YYYY", onClick: onShow("date"), onBlur: onBlurDate, ref: ref }),
                React__default["default"].createElement(InputControl$1, { autoComplete: "off", id: id + "time", onClick: onShow("time"), placeholder: "hh:mm", onBlur: onBlurTime, ref: refTime })),
            isRemove && (React__default["default"].createElement(ButtonClose$1, { onClick: onRemove, type: "button" },
                React__default["default"].createElement(Icon.Icon, { small: true, icon: "i-close" }))),
            React__default["default"].createElement(DropdownMenu$1, { ref: refMenuDropdown, show: isDisplay },
                React__default["default"].createElement(InputDataSelector$1, null,
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
                                React__default["default"].createElement(dayjs_min.Calendar, { selected: new Date(date), disableItem: disableItem, fnSelected: onChange("date-time") })),
                            React__default["default"].createElement(Container, { active: tab === "time" },
                                React__default["default"].createElement(dayjs_min.Clock, { selected: time || date, fnSelected: onChange("time") })))))))));
});
const ButtonClose$1 = styled__default["default"].button `
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
const Wrap$1 = styled__default["default"].div `
  &:hover {
    ${ButtonClose$1} {
      display: block;
    }
  }
`;
const InputControl$1 = styled__default["default"].input `
  ${InputStyle.InputStyle};
`;
const DropdownMenu$1 = styled__default["default"].div `
  background-color: var(--backgroundContent);
  display: none;
  padding: 15px;
  position: absolute;
  z-index: -1;

  ${({ show }) => show &&
    `
    display: block;
    z-index: 300;
  `};
  ${_lineOverflow.normal$1};
  ${index$1.transition.popup};
`;
const InputDataSelector$1 = styled__default["default"].div `
  ${_lineOverflow.P2.a};
`;
const InputSection$1 = styled__default["default"].div `
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
  display: ${({ active }) => (active ? "block" : "none")};
`;

function Other({ fnChange, format = 'DD MMMM,YYYY', label, name, picker = 'date-time', style, value = '', isRemove = true, defaultValue, disableItem, }) {
    var _a;
    const id = generatedId.generatedId('date-picker');
    const refDropdown = React.useRef();
    const refMenuDropdown = React.useRef();
    const ref = React.useRef();
    const [container, setContainer] = React.useState('date');
    const [val, setVal] = React.useState('');
    const [time, setTime] = React.useState('');
    const [date, setDate] = React.useState(null);
    const widthInputDate = React.useMemo(() => { var _a; return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth; }, []);
    const { isDisplay, show, hide } = useHandleDisplay.useHandleDisplay(refDropdown, true);
    const { handlePosition } = usePositionDropdown.usePositionDropdown(refMenuDropdown, {
        add: {
            height: (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientHeight,
        },
    });
    // Handle show dropdown menu
    const onShow = React.useCallback((container) => () => {
        handlePosition(container === 'time' ? { left: widthInputDate } : {});
        show();
        setContainer(container);
    }, [show, handlePosition, widthInputDate]);
    // Change value
    const onChange = React.useCallback((field) => (val) => {
        switch (field) {
            case 'date': {
                setDate(new Date(index.wDate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')).toString());
                setVal(index.wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(index.wDate.format(val, format));
                break;
            }
            case 'month': {
                setDate(new Date(index.wDate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')).toString());
                setVal(index.wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(index.wDate.format(val, format));
                break;
            }
            case 'year': {
                const _year = new Date(val).getFullYear();
                setVal(_year.toString());
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(_year.toString());
                break;
            }
            case 'date-time': {
                const min = val.getMinutes();
                const hour = val.getHours();
                // Format for time, adn format is HH:MM
                const _value = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`;
                setTime(_value);
                setVal(index.wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(index.wDate.format(val, format));
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
        fnChange && fnChange('');
        setVal(null);
        setDate(null);
        setTime('');
        hide();
    }, [fnChange, hide]);
    /**
     * Handle date when enter from keyboard
     */
    // Date
    const onBlurDate = React.useCallback((e) => {
        const val = e.target.value;
        if (dayjs_min.dayjs_min(val, 'DD/MM/YYYY').isValid()) {
            onChange(picker)(new Date(val));
        }
        else {
            e.target.value = '';
        }
    }, [onChange, picker]);
    const containers = React.useMemo(() => new Map()
        .set('date', React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(dayjs_min.Calendar, { selected: val, disableItem: disableItem, fnSelected: onChange('date') })))
        .set('time', React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(dayjs_min.Clock, { selected: time, fnSelected: onChange('time') })))
        .set('year', React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Year.Year, { selected: val, disableItem: disableItem, fnSelected: onChange('year') })))
        .set('month', React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(Year.Month, { selected: new Date(date), disableItem: disableItem, fnSelected: onChange('month') }))), [val, disableItem, onChange, time, date]);
    // Handle value and format data
    // Set state of component with value
    React.useEffect(() => {
        if (!value && !defaultValue)
            return;
        const _val = value || defaultValue;
        if (picker === 'date-time' || picker === 'date') {
            const _date = new Date(_val);
            setDate(_date);
            setTime(index.wDate.format(_date, 'hh:mm'));
            setVal(index.wDate.format(_date, format));
        }
        else if (picker === 'year') {
            setVal(new Date(_val.toString()).getFullYear());
        }
        else if (picker === 'month') {
            setVal(index.wDate.format(_val, format));
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
                (picker === 'date' ||
                    picker === 'month') && (React__default["default"].createElement("input", { type: 'hidden', name: name, defaultValue: date })),
                React__default["default"].createElement(InputControl, { autoComplete: 'off', id: id + '-calendar', name: picker !== 'month' ? name : '', placeholder: format, onClick: onShow(picker), onBlur: onBlurDate, ref: ref })),
            isRemove && React__default["default"].createElement(ButtonClose, { onClick: onRemove, type: 'button' },
                React__default["default"].createElement(Icon.Icon, { small: true, icon: 'i-close' })),
            React__default["default"].createElement(DropdownMenu, { ref: refMenuDropdown, show: isDisplay },
                React__default["default"].createElement(InputDataSelector, null, containers.get(container))))));
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
const InputDateSelectorContainer = styled__default["default"].div `
  ${index$1.transition.popup};
  ${(props) => props.show ? index$1.transition.slideUpLeft : index$1.transition.slideDownLeft};
`;
const InputSection = styled__default["default"].div `
  display: flex;
`;

exports.DateTime = DateTime;
exports.Other = Other;
