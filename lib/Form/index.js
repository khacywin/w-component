'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../tslib.es6-17879f09.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useForm() {
    const ref = React.useRef({});
    // Handle change
    const handleChangeForm = (name) => (e) => {
        var _a, _b, _c;
        const _name = name || ((_a = e.target) === null || _a === void 0 ? void 0 : _a.name);
        if (typeof e === "object" && !Array.isArray(e)) {
            if (!Object.keys(ref.current).includes(_name))
                return;
            (_c = (_b = ref.current).onChange) === null || _c === void 0 ? void 0 : _c.call(_b, e);
            ref.current[_name].value = e.currentTarget[_name].value;
        }
        else {
            ref.current[_name].value = e;
        }
    };
    const getValues = React.useCallback(() => {
        const value = {};
        Object.keys(ref.current).map((key) => {
            value[key] = ref.current[key].value;
        });
        return value;
    }, []);
    const FormControl = ({ children, name, defaultValue }) => {
        var _a, _b;
        ref.current[children.props.name || name] = {
            value: children.props.defaultValue || defaultValue,
        };
        return React__default["default"].cloneElement(children, !["textarea", "text", "password", "email", "number"].includes(children.props.type)
            ? {
                value: ((_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a[children.props.name]) === null || _b === void 0 ? void 0 : _b.value) ||
                    children.props.defaultValue ||
                    defaultValue,
                fnChange: handleChangeForm(children.props.name),
            }
            : {
                defaultValue: children.props.defaultValue || defaultValue,
                name: children.props.name || name,
            });
    };
    return {
        form: {
            ref,
            getValues,
        },
        FormControl,
    };
}
function Form(_a) {
    var { children, form: formRef, onChange, onFinish } = _a, props = tslib_es6.__rest(_a, ["children", "form", "onChange", "onFinish"]);
    // Change form
    const handleChangeForm = (e) => {
        var _a;
        const _name = (_a = e.target) === null || _a === void 0 ? void 0 : _a.name;
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
    return (React__default["default"].createElement("form", Object.assign({}, props, { onChange: handleChangeForm, onSubmit: handleSubmit }), children));
}

exports["default"] = Form;
exports.useForm = useForm;
