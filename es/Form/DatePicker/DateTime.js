import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { d as normal, P as P2 } from '../../_lineOverflow-40abb42a.js';
import { B as ButtonAction } from '../../ButtonAction-3cf1adce.js';
import { d as dayjs_min, C as Calendar, a as Clock } from '../../dayjs.min-d1798806.js';
import { F as FormGroup } from '../../_FormGroup-a38ef777.js';
import { I as Icon } from '../../Icon-69b9e7b0.js';
import { I as InputStyle } from '../../InputStyle-d0c9db0e.js';
import { g as generatedId } from '../../generatedId-52e731a2.js';
import styled from 'styled-components';
import { t as transition } from '../../index-8505406e.js';
import { u as useHandleDisplay } from '../../useHandleDisplay-fdfdebb5.js';
import { u as usePositionDropdown } from '../../usePositionDropdown-f9b23788.js';
import { w as wDate } from '../../index-3b6eefee.js';
import '../../_style-e33da27c.js';
import 'assets/images/clock-face.svg';

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
    return (React.createElement(Wrap, { ref: refDropdown },
        React.createElement(FormGroup, { style: style || {}, isFocus: true, label: label, id: id },
            React.createElement(InputSection, null,
                React.createElement("input", { type: "hidden", name: name, value: date ? date.toUTCString() : "" }),
                React.createElement(InputControl, { autoComplete: "off", id: id + "-calendar", placeholder: "DD/MM/YYYY", onClick: onShow("date"), onBlur: onBlurDate, ref: ref }),
                React.createElement(InputControl, { autoComplete: "off", id: id + "time", onClick: onShow("time"), placeholder: "hh:mm", onBlur: onBlurTime, ref: refTime })),
            isRemove && (React.createElement(ButtonClose, { onClick: onRemove, type: "button" },
                React.createElement(Icon, { small: true, icon: "i-close" }))),
            React.createElement(DropdownMenu, { ref: refMenuDropdown, show: isDisplay },
                React.createElement(InputDataSelector, null,
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
const InputSection = styled.div `
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

export { DateTime as default };
//# sourceMappingURL=DateTime.js.map
