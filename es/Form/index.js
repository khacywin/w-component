import { _ as __rest } from '../tslib.es6-8e295639.js';
import React, { useEffect, useRef, useCallback } from 'react';

function useForm() {
    const ref = useRef({});
    const getValues = useCallback(() => {
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
    var { children, form: formRef, onChange, onFinish } = _a, props = __rest(_a, ["children", "form", "onChange", "onFinish"]);
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
    useEffect(() => {
        children.forEach((ele) => {
            formRef.ref.current[ele.props.name] = { value: ele.props.defaultValue };
        });
    }, [children, formRef]);
    return (React.createElement("form", Object.assign({}, props, { onChange: handleChangeForm(), onSubmit: handleSubmit }), children.map((ele, idx) => {
        var _a, _b;
        return React.cloneElement(ele, !["textarea", "text", "password", "email", "number"].includes(ele.props.type)
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
    return React.createElement("div", null);
}

export { FormControl, Form as default, useForm };
//# sourceMappingURL=index.js.map
