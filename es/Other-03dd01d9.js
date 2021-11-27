import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { d as normal, P as P2 } from './_lineOverflow-40abb42a.js';
import { B as ButtonAction } from './ButtonAction-3cf1adce.js';
import { d as dayjs_min, C as Calendar, a as Clock } from './dayjs.min-d1798806.js';
import { F as FormGroup } from './_FormGroup-a38ef777.js';
import { I as Icon } from './Icon-69b9e7b0.js';
import { I as InputStyle } from './InputStyle-d0c9db0e.js';
import { g as generatedId } from './generatedId-52e731a2.js';
import styled from 'styled-components';
import { t as transition } from './index-8505406e.js';
import { u as useHandleDisplay } from './useHandleDisplay-fdfdebb5.js';
import { u as usePositionDropdown } from './usePositionDropdown-f9b23788.js';
import { w as wDate } from './index-3b6eefee.js';
import { Y as Year, M as Month } from './Year-72a2b1c4.js';

var DateTime = React.memo(({ fnChange, format = "DD MMMM,YYYY", label, name, style, value = "", isRemove = true, defaultValue, disableItem, }) => {
    var _a;
    const id = generatedId("date-picker");
    const refDropdown = useRef();
    const refMenuDropdown = useRef();
    const ref = useRef();
    const refTime = useRef();
    const [tab, setTab] = useState("date");
    const [time, setTime] = useState(""); // This is string, HH:MM
    const [date, setDate] = useState(null); // Object Date to save
    const widthInputDate = useMemo(() => { var _a; return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth; }, []);
    const { isDisplay, show, hide } = useHandleDisplay(refDropdown, false);
    const { handlePosition } = usePositionDropdown(refMenuDropdown, {
        add: {
            height: (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientHeight,
        },
    });
    // Handle show dropdown menu
    const onShow = useCallback((container) => () => {
        handlePosition(container === "time" ? { left: widthInputDate } : {});
        show();
        setTab(container);
    }, [show, handlePosition, widthInputDate]);
    // Change value
    const onChange = useCallback((field) => (val) => {
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
                ref.current.value = wDate.format(val, format);
                setDate(val);
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(val.toString());
                break;
            }
        }
    }, [date, fnChange, time, format]);
    // Set empty data
    const onRemove = useCallback(() => {
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
    const onBlurDate = useCallback((e) => {
        const val = e.target.value;
        if (dayjs_min(val, "DD/MM/YYYY").isValid()) {
            onChange("date-time")(new Date(val));
        }
        else {
            e.target.value = "";
        }
    }, [onChange]);
    // Time
    const onBlurTime = useCallback((e) => {
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
    useEffect(() => {
        if (!value && !defaultValue)
            return;
        const _val = value || defaultValue;
        const _date = new Date(_val);
        setDate(_date);
        setTime(wDate.format(_date, "hh:mm"));
        ref.current.value = wDate.format(_date, format);
        refTime.current.value = wDate.format(_date, "hh:mm");
        return () => {
            setDate(null);
            setTime(null);
        };
    }, [value, format, defaultValue]);
    return (React.createElement(Wrap$1, { ref: refDropdown },
        React.createElement(FormGroup, { style: style || {}, isFocus: true, label: label, id: id },
            React.createElement(InputSection$1, null,
                React.createElement("input", { type: "hidden", name: name, value: date ? date.toUTCString() : "" }),
                React.createElement(InputControl$1, { autoComplete: "off", id: id + "-calendar", placeholder: "DD/MM/YYYY", onClick: onShow("date"), onBlur: onBlurDate, ref: ref }),
                React.createElement(InputControl$1, { autoComplete: "off", id: id + "time", onClick: onShow("time"), placeholder: "hh:mm", onBlur: onBlurTime, ref: refTime })),
            isRemove && (React.createElement(ButtonClose$1, { onClick: onRemove, type: "button" },
                React.createElement(Icon, { small: true, icon: "i-close" }))),
            React.createElement(DropdownMenu$1, { ref: refMenuDropdown, show: isDisplay },
                React.createElement(InputDataSelector$1, null,
                    React.createElement(WrapContainer, null,
                        React.createElement(Top, null,
                            React.createElement("div", null,
                                React.createElement(ButtonAction, { isActive: tab === "date", onClick: () => setTab("date") },
                                    React.createElement(Icon, { icon: "i-calendar" })),
                                React.createElement(ButtonAction, { isActive: tab === "time", onClick: () => setTab("time") },
                                    React.createElement(Icon, { icon: "i-time" }))),
                            React.createElement("div", null,
                                React.createElement(ButtonAction, { onClick: () => hide() },
                                    React.createElement(Icon, { icon: "i-close" })))),
                        React.createElement("div", null,
                            React.createElement(Container, { active: tab === "date" },
                                React.createElement(Calendar, { selected: new Date(date), disableItem: disableItem, fnSelected: onChange("date-time") })),
                            React.createElement(Container, { active: tab === "time" },
                                React.createElement(Clock, { selected: time || date, fnSelected: onChange("time") })))))))));
});
const ButtonClose$1 = styled.button `
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
const Wrap$1 = styled.div `
  &:hover {
    ${ButtonClose$1} {
      display: block;
    }
  }
`;
const InputControl$1 = styled.input `
  ${InputStyle};
`;
const DropdownMenu$1 = styled.div `
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
  ${normal};
  ${transition.popup};
`;
const InputDataSelector$1 = styled.div `
  ${P2.a};
`;
const InputSection$1 = styled.div `
  display: flex;
`;
const WrapContainer = styled.div ``;
const Top = styled.div `
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;
const Container = styled.div `
  display: ${({ active }) => (active ? "block" : "none")};
`;

function Other({ fnChange, format = 'DD MMMM,YYYY', label, name, picker = 'date-time', style, value = '', isRemove = true, defaultValue, disableItem, }) {
    var _a;
    const id = generatedId('date-picker');
    const refDropdown = useRef();
    const refMenuDropdown = useRef();
    const ref = useRef();
    const [container, setContainer] = useState('date');
    const [val, setVal] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState(null);
    const widthInputDate = useMemo(() => { var _a; return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth; }, []);
    const { isDisplay, show, hide } = useHandleDisplay(refDropdown, true);
    const { handlePosition } = usePositionDropdown(refMenuDropdown, {
        add: {
            height: (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientHeight,
        },
    });
    // Handle show dropdown menu
    const onShow = useCallback((container) => () => {
        handlePosition(container === 'time' ? { left: widthInputDate } : {});
        show();
        setContainer(container);
    }, [show, handlePosition, widthInputDate]);
    // Change value
    const onChange = useCallback((field) => (val) => {
        switch (field) {
            case 'date': {
                setDate(new Date(wDate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')).toString());
                setVal(wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(wDate.format(val, format));
                break;
            }
            case 'month': {
                setDate(new Date(wDate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')).toString());
                setVal(wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(wDate.format(val, format));
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
                setVal(wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(wDate.format(val, format));
                break;
            }
            default:
                setVal(val);
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(val);
                break;
        }
    }, [format, time, fnChange]);
    // Set empty data
    const onRemove = useCallback(() => {
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
    const onBlurDate = useCallback((e) => {
        const val = e.target.value;
        if (dayjs_min(val, 'DD/MM/YYYY').isValid()) {
            onChange(picker)(new Date(val));
        }
        else {
            e.target.value = '';
        }
    }, [onChange, picker]);
    const containers = useMemo(() => new Map()
        .set('date', React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Calendar, { selected: val, disableItem: disableItem, fnSelected: onChange('date') })))
        .set('time', React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Clock, { selected: time, fnSelected: onChange('time') })))
        .set('year', React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Year, { selected: val, disableItem: disableItem, fnSelected: onChange('year') })))
        .set('month', React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Month, { selected: new Date(date), disableItem: disableItem, fnSelected: onChange('month') }))), [val, disableItem, onChange, time, date]);
    // Handle value and format data
    // Set state of component with value
    useEffect(() => {
        if (!value && !defaultValue)
            return;
        const _val = value || defaultValue;
        if (picker === 'date-time' || picker === 'date') {
            const _date = new Date(_val);
            setDate(_date);
            setTime(wDate.format(_date, 'hh:mm'));
            setVal(wDate.format(_date, format));
        }
        else if (picker === 'year') {
            setVal(new Date(_val.toString()).getFullYear());
        }
        else if (picker === 'month') {
            setVal(wDate.format(_val, format));
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
    useEffect(() => {
        if (!ref.current)
            return;
        ref.current.value = val;
    }, [val]);
    return (React.createElement(Wrap, { ref: refDropdown },
        React.createElement(FormGroup, { style: style || {}, isFocus: true, label: label, id: id },
            React.createElement(InputSection, null,
                (picker === 'date' ||
                    picker === 'month') && (React.createElement("input", { type: 'hidden', name: name, defaultValue: date })),
                React.createElement(InputControl, { autoComplete: 'off', id: id + '-calendar', name: picker !== 'month' ? name : '', placeholder: format, onClick: onShow(picker), onBlur: onBlurDate, ref: ref })),
            isRemove && React.createElement(ButtonClose, { onClick: onRemove, type: 'button' },
                React.createElement(Icon, { small: true, icon: 'i-close' })),
            React.createElement(DropdownMenu, { ref: refMenuDropdown, show: isDisplay },
                React.createElement(InputDataSelector, null, containers.get(container))))));
}
const ButtonClose = styled.button `
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
const Wrap = styled.div `
  &:hover {
    ${ButtonClose} {
      display: block;
    }
  }
`;
const InputControl = styled.input `
  ${InputStyle};
`;
const DropdownMenu = styled.div `
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
  ${normal};
  ${transition.popup};
`;
const InputDataSelector = styled.div `
  ${P2.a};
`;
const InputDateSelectorContainer = styled.div `
  ${transition.popup};
  ${(props) => props.show ? transition.slideUpLeft : transition.slideDownLeft};
`;
const InputSection = styled.div `
  display: flex;
`;

export { DateTime as D, Other as O };
//# sourceMappingURL=Other-03dd01d9.js.map
