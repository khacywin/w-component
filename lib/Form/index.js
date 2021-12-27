'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../tslib.es6-17879f09.js');
var React = require('react');

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
            if (!ele)
                return;
            formRef.ref.current[ele.props.name] = { value: ele.props.defaultValue };
        });
    }, [children, formRef]);
    return (React__default["default"].createElement("form", Object.assign({}, props, { onChange: handleChangeForm(), onSubmit: handleSubmit }), children.map((ele, idx) => {
        var _a, _b;
        if (!ele)
            return;
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

exports.FormControl = FormControl;
exports["default"] = Form;
exports.useForm = useForm;
