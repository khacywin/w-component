'use strict';

var React = require('react');
var _lineOverflow = require('../../_lineOverflow-b8a457d2.js');
var usePositionDropdown = require('../../usePositionDropdown-f1817af6.js');
var _FormGroup = require('../../_FormGroup-4649f433.js');
var Icon = require('../../Icon-b6bdc54f.js');
var InputStyle = require('../../InputStyle-786378de.js');
var Year = require('../../Year-4f05b576.js');
var generatedId = require('../../generatedId-3779176c.js');
var styled = require('styled-components');
var index = require('../../index-f0e3963b.js');
var useHandleDisplay = require('../../useHandleDisplay-86b835d7.js');
var index$1 = require('../../index-4b1ec35a.js');
require('../../_style-8674a101.js');
require('../../ButtonAction-1bcd2a25.js');
require('../../clock-face-00da2ca7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
                setDate(new Date(index$1.wDate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')).toString());
                setVal(index$1.wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(index$1.wDate.format(val, format));
                break;
            }
            case 'month': {
                setDate(new Date(index$1.wDate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')).toString());
                setVal(index$1.wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(index$1.wDate.format(val, format));
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
                setVal(index$1.wDate.format(val, format));
                fnChange === null || fnChange === void 0 ? void 0 : fnChange(index$1.wDate.format(val, format));
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
        if (usePositionDropdown.dayjs_min(val, 'DD/MM/YYYY').isValid()) {
            onChange(picker)(new Date(val));
        }
        else {
            e.target.value = '';
        }
    }, [onChange, picker]);
    const containers = React.useMemo(() => new Map()
        .set('date', React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(usePositionDropdown.Calendar, { selected: val, disableItem: disableItem, fnSelected: onChange('date') })))
        .set('time', React__default["default"].createElement(InputDateSelectorContainer, { show: true },
        React__default["default"].createElement(usePositionDropdown.Clock, { selected: time, fnSelected: onChange('time') })))
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
            setTime(index$1.wDate.format(_date, 'hh:mm'));
            setVal(index$1.wDate.format(_date, format));
        }
        else if (picker === 'year') {
            setVal(new Date(_val.toString()).getFullYear());
        }
        else if (picker === 'month') {
            setVal(index$1.wDate.format(_val, format));
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
