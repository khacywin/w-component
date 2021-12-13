'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$2 = require('./index-1bd8de3e.js');
var ButtonAction = require('./ButtonAction-8e7d8a19.js');
var index$1 = require('./index-46a911bd.js');
var usePositionDropdown = require('./usePositionDropdown-bacf5401.js');
var Year = require('./Year-e4fe849d.js');
var Icon = require('./Icon-b6bdc54f.js');
var Modal = require('./Modal-f913bba2.js');
var tslib_es6 = require('./tslib.es6-17879f09.js');
var React = require('react');
var index$3 = require('./index-6c814f67.js');
var index$4 = require('./index-fb9da1b4.js');
var index$5 = require('./index-f0e3963b.js');
require('./_lineOverflow-b8a457d2.js');
require('styled-components');
require('./useHandleDisplay-16f1a228.js');
require('./ButtonNoStyle-3eedbceb.js');
require('react-dom');
require('./usePositionDialog-6d2f5d27.js');
require('./logo-162bc68e.js');
require('./logo-character-73d9a4d2.js');
require('./_FormGroup-4649f433.js');
require('./InputStyle-786378de.js');
require('./index.es-eb211e2b.js');
require('./generatedId-3779176c.js');
require('./polished.esm-bf4b80df.js');
require('./Other-99cf9454.js');
require('./index-4b1ec35a.js');
require('./Heading-04906944.js');
require('./WrapDialog-f6af1600.js');
require('./_style-8674a101.js');
require('./clock-face-00da2ca7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useForm() {
    const ref = React.useRef({});
    const getValues = React.useCallback(() => {
        const value = {};
        Object.keys(ref.current).map((key) => {
            value[key] = ref.current[key].value;
        });
        return value;
    }, []);
    return {
        ref,
        // setValues,
        // setValue,
        getValues,
    };
}
function Form(_a) {
    var { children, form: formRef, onChange, onFinish } = _a, props = tslib_es6.__rest(_a, ["children", "form", "onChange", "onFinish"]);
    // Change form
    const handleChangeForm = (name) => (e) => {
        const _name = name || e.target.name;
        if (typeof e === "object" && !Array.isArray(e)) {
            if (!Object.keys(formRef.ref.current).includes(_name))
                return;
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
            formRef.ref.current[_name].value = e.currentTarget[_name].value;
        }
        else {
            formRef.ref.current[_name].value = e;
        }
    };
    // Handle submit
    const handleSubmit = (e) => {
        var _a;
        e.preventDefault();
        (_a = props.onSubmit) === null || _a === void 0 ? void 0 : _a.call(props, e);
        const value = {};
        Object.keys(formRef.ref.current).map((key) => {
            value[key] = formRef.ref.current[key].value;
        });
        onFinish === null || onFinish === void 0 ? void 0 : onFinish(value);
    };
    // Constructor for form
    React.useEffect(() => {
        children.forEach((ele) => {
            formRef.ref.current[ele.props.name] = { value: ele.props.defaultValue };
        });
    }, [children, formRef]);
    return (React__default["default"].createElement("form", Object.assign({}, props, { onChange: handleChangeForm(), onSubmit: handleSubmit }), children.map((ele, idx) => {
        var _a, _b;
        return React__default["default"].cloneElement(ele, !["textarea", "text", "password", "email", "number"].includes(ele.props.type)
            ? {
                key: idx,
                value: ((_b = (_a = formRef.ref.current) === null || _a === void 0 ? void 0 : _a[ele.props.name]) === null || _b === void 0 ? void 0 : _b.value) ||
                    ele.props.defaultValue,
                fnChange: handleChangeForm(ele.props.name),
            }
            : {
                key: idx,
            });
    })));
}
/**
 * COMPONENT FORM CONTROL
 */
function FormControl() {
    return React__default["default"].createElement("div", null);
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  base: index$4.index,
  transition: index$5.index,
  elements: index$4.index$1
});

if (document) {
    const root = document.documentElement;
    root.style.setProperty("--primary", "#22402F");
    root.style.setProperty("--secondary", "#5A8C70");
    root.style.setProperty("--third", "#7EBF9A");
    root.style.setProperty("--success", "#4caf50");
    root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.5)");
    root.style.setProperty("--text", "rgba(0, 0, 0, 0.87)");
    root.style.setProperty("--textBlur", "#BFBFBF");
    root.style.setProperty("--warning", "#f1c40f");
    root.style.setProperty("--background", "#D5D5D5");
    root.style.setProperty("--backgroundContent", "#FFF");
    root.style.setProperty("--backgroundOpacity", "rgba(0, 0, 0, 0.1)");
    root.style.setProperty("--border", "#d9d9d9");
    root.style.setProperty("--borderLight", "#ECECEC");
    root.style.setProperty("--borderInput", "#D4D4D4");
    root.style.setProperty("--boxShadow", "rgba(0, 0, 0, 0.16)");
}

exports.Button = index$2.Button;
exports.ButtonAction = ButtonAction.ButtonAction;
exports.Avatar = index$1.Avatar;
exports.ButtonLoadMore = index$1.ButtonLoadMore;
exports.ChartProcess = index$1.ChartProcess;
exports.Checkbox = index$1.Checkbox;
exports.Collapse = index$1.index$2;
exports.DateRange = index$1.DateRange;
exports.Dialog = index$1.Dialog;
exports.Dropdown = index$1.Dropdown;
exports.Input = index$1.Input;
exports.List = index$1.List;
exports.Loading = index$1.index;
exports.Logo = index$1.Logo;
exports.NoData = index$1.NoData;
exports.Popover = index$1.Popover;
exports.Search = index$1.Search;
exports.Select = index$1.index$3;
exports.Subtitle = index$1.Subtitle;
exports.Switch = index$1.Switch;
exports.Title = index$1.Title;
exports.Tooltip = index$1.Tooltip;
exports.notification = index$1.index$1;
exports.Calender = usePositionDropdown.Calendar;
exports.Clock = usePositionDropdown.Clock;
exports.CalenderMonth = Year.Month;
exports.CalenderYear = Year.Year;
exports.Icon = Icon.Icon;
exports.Modal = Modal.Modal;
exports.DatePicker = index$3.DatePicker;
exports.Form = Form;
exports.FormControl = FormControl;
exports.css = index;
exports.useForm = useForm;
