import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { d as normal, a as P2 } from '../../_lineOverflow-0f5e92ab.js';
import Calendar from 'components/atoms/Calendar';
import Clock from 'components/atoms/Clock';
import FormGroup from 'components/atoms/Form/_FormGroup';
import Icon from 'components/atoms/Icon';
import { I as InputStyle } from '../../InputStyle-cbf70b53.js';
import Month from 'components/atoms/Calendar/Month';
import Year from 'components/atoms/Calendar/Year';
import { d as dayjs_min } from '../../dayjs.min-2ef69f57.js';
import generatedId from 'helps/generatedId';
import styled from 'styled-components';
import { t as transition } from '../../index-8505406e.js';
import { u as useHandleDisplay } from '../../useHandleDisplay-fdfdebb5.js';
import { u as usePositionDropdown } from '../../usePositionDropdown-f9b23788.js';
import { w as wDate } from '../../index-fb604e50.js';
import '../../_commonjsHelpers-5aa48c35.js';

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

export { Other as default };
//# sourceMappingURL=Other.js.map
