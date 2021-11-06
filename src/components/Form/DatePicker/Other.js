import React, { useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { boxShadow, space } from "css/base";
import Calendar from "components/Calendar";
import Clock from "components/Clock";
import FormGroup from "./../_FormGroup";
import Icon from "components/Icon";
import InputStyle from "css/elements/InputStyle";
import Month from "components/Calendar/Month";
import Year from "components/Calendar/Year";
import dayjs from "dayjs";
import generatedId from "helps/generateKey";
import styled from "styled-components";
import transition from "css/transition";
import useHandleDisplay from "hooks/useHandleDisplay";
import usePositionDropdown from "hooks/usePositionDropdown";
export default function Other({ fnChange, format = "DD MMMM,YYYY", label, name, picker = "date-time", style, value = "", isRemove = true, defaultValue, disableItem, }) {
    var _a;
    const id = generatedId("date-picker");
    const refDropdown = useRef();
    const refMenuDropdown = useRef();
    const ref = useRef();
    const [container, setContainer] = useState("date");
    const [val, setVal] = useState("");
    const [time, setTime] = useState("");
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
        handlePosition(container === "time" ? { left: widthInputDate } : {});
        show();
        setContainer(container);
    }, [show, handlePosition, widthInputDate]);
    // Change value
    const onChange = useCallback((field) => (val) => {
        switch (field) {
            case "date": {
                setDate(new Date(dayjs(val).format("YYYY-MM-DD") + (time ? " " + time : "")).toString());
                const dateStr = dayjs(val).format(format);
                setVal(dateStr);
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(dateStr);
                break;
            }
            case "month": {
                setDate(new Date(dayjs(val).format("YYYY-MM-DD") + (time ? " " + time : "")).toString());
                const dateStr = dayjs(val).format(format);
                setVal(dateStr);
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(dateStr);
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
                setVal(dayjs(val).format(format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(dayjs(val).format(format));
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
    const onBlurDate = useCallback((e) => {
        const val = e.target.value;
        if (dayjs(val, "DD/MM/YYYY").isValid()) {
            onChange(picker)(new Date(val));
        }
        else {
            e.target.value = "";
        }
    }, [onChange, picker]);
    const containers = useMemo(() => new Map()
        .set("date", React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Calendar, { selected: val, disableItem: disableItem, fnSelected: onChange("date") })))
        .set("time", React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Clock, { selected: time, fnSelected: onChange("time") })))
        .set("year", React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Year, { selected: val, disableItem: disableItem, fnSelected: onChange("year") })))
        .set("month", React.createElement(InputDateSelectorContainer, { show: true },
        React.createElement(Month, { selected: new Date(date), disableItem: disableItem, fnSelected: onChange("month") }))), [val, disableItem, onChange, time, date]);
    // Handle value and format data
    // Set state of component with value
    useEffect(() => {
        if (!value && !defaultValue)
            return;
        const _val = value || defaultValue;
        if (picker === "date-time" || picker === "date") {
            const _date = new Date(_val);
            setDate(_date);
            setTime(dayjs(_date).format("hh:mm"));
            setVal(dayjs(_date).format(format));
        }
        else if (picker === "year") {
            setVal(new Date(_val.toString()).getFullYear());
        }
        else if (picker === "month") {
            setVal(dayjs(_val).format(format));
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
                (picker === "date" || picker === "month") && (React.createElement("input", { type: "hidden", name: name, defaultValue: date })),
                React.createElement(InputControl, { autoComplete: "off", id: id + "-calendar", name: picker !== "month" ? name : "", placeholder: format, onClick: onShow(picker), onBlur: onBlurDate, ref: ref })),
            isRemove && (React.createElement(ButtonClose, { onClick: onRemove, type: "button" },
                React.createElement(Icon, { small: true, icon: "i-close" }))),
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
  ${boxShadow.normal};
  ${transition.popup};
`;
const InputDataSelector = styled.div `
  ${space.P2.a};
`;
const InputDateSelectorContainer = styled.div `
  ${transition.popup};
  ${(props) => props.show ? transition.slideUpLeft : transition.slideDownLeft};
`;
const InputSection = styled.div `
  display: flex;
`;
//# sourceMappingURL=Other.js.map