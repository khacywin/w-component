import { _ as __rest } from '../tslib.es6-8e295639.js';
import React, { useState, useCallback, useEffect } from 'react';
import { F as FormGroup } from '../_FormGroup-a38ef777.js';
import { I as InputStyle } from '../InputStyle-d0c9db0e.js';
import { A as App } from '../index.es-0abe6bb3.js';
import { g as generatedId } from '../generatedId-52e731a2.js';
import { P as P2 } from '../_lineOverflow-40abb42a.js';
import styled from 'styled-components';
import '../index-8505406e.js';

/**
 * @prop {string} label
 * @prop {'text' | 'number' | 'email' | 'password'} type
 */
/** Component */
var Input = React.memo((_a) => {
    var { fnChange, isInputTitle, label, name, placeholder, style, type = 'text', value = '' } = _a, props = __rest(_a, ["fnChange", "isInputTitle", "label", "name", "placeholder", "style", "type", "value"]);
    const id = generatedId('input');
    const [error, setError] = useState();
    const [color, setColor] = useState('');
    const [valState, setValState] = useState('');
    const handleInvalid = useCallback((e) => {
        e.preventDefault();
        e.persist();
        setError({
            type: 'manual',
            message: e.currentTarget.required ? 'Field is required !!' : '',
        });
    }, []);
    const onChange = useCallback((e) => {
        const value = type === 'number' ? +e.target.value : e.target.value;
        setValState(e.target.value);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(value || color);
    }, [type, fnChange, color]);
    const onChangeColor = useCallback((col) => {
        setColor(col);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(col);
    }, [fnChange]);
    useEffect(() => {
        value && setValState(value);
    }, [value]);
    const inputs = new Map()
        .set('textarea', React.createElement(TextareaControl, Object.assign({ className: 'w-textarea', name: name, placeholder: placeholder, id: id }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('text', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'text', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('password', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'password', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('email', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'email', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('number', React.createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'number', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('color', React.createElement("div", null,
        React.createElement(App, { width: 20, height: 20, onChange: fnChange ? onChangeColor : setColor, defaultValue: value || color || '#54478c' }),
        React.createElement("input", { type: 'hidden', name: name, value: color || value || '#54478c' })));
    return (React.createElement(FormGroup, { isInputTitle: isInputTitle, style: style, label: label, isFocus: value || placeholder, id: id, inline: type === 'color', error: error }, inputs.get(type)));
});
/** Style */
const InputControl = styled.input `
  ${InputStyle};
`;
const TextareaControl = styled.textarea `
  ${InputStyle};
  ${P2.a};
  resize: none;
`;

export { Input as default };
//# sourceMappingURL=Input.js.map
