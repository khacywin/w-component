'use strict';

var tslib_es6 = require('../tslib.es6-17879f09.js');
var React = require('react');
var _FormGroup = require('../_FormGroup-4649f433.js');
var InputStyle = require('../InputStyle-786378de.js');
var index_es = require('../index.es-eb211e2b.js');
var generatedId = require('../generatedId-3779176c.js');
var _lineOverflow = require('../_lineOverflow-b8a457d2.js');
var styled = require('styled-components');
require('../index-f0e3963b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * @prop {string} label
 * @prop {'text' | 'number' | 'email' | 'password'} type
 */
/** Component */
var Input = React__default["default"].memo((_a) => {
    var { fnChange, isInputTitle, label, name, placeholder, style, type = 'text', value = '' } = _a, props = tslib_es6.__rest(_a, ["fnChange", "isInputTitle", "label", "name", "placeholder", "style", "type", "value"]);
    const id = generatedId.generatedId('input');
    const [error, setError] = React.useState();
    const [color, setColor] = React.useState('');
    const [valState, setValState] = React.useState('');
    const handleInvalid = React.useCallback((e) => {
        e.preventDefault();
        e.persist();
        setError({
            type: 'manual',
            message: e.currentTarget.required ? 'Field is required !!' : '',
        });
    }, []);
    const onChange = React.useCallback((e) => {
        const value = type === 'number' ? +e.target.value : e.target.value;
        setValState(e.target.value);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(value || color);
    }, [type, fnChange, color]);
    const onChangeColor = React.useCallback((col) => {
        setColor(col);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(col);
    }, [fnChange]);
    React.useEffect(() => {
        value && setValState(value);
    }, [value]);
    const inputs = new Map()
        .set('textarea', React__default["default"].createElement(TextareaControl, Object.assign({ className: 'w-textarea', name: name, placeholder: placeholder, id: id }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('text', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'text', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('password', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'password', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('email', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'email', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('number', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'number', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('color', React__default["default"].createElement("div", null,
        React__default["default"].createElement(index_es.App, { width: 20, height: 20, onChange: fnChange ? onChangeColor : setColor, defaultValue: value || color || '#54478c' }),
        React__default["default"].createElement("input", { type: 'hidden', name: name, value: color || value || '#54478c' })));
    return (React__default["default"].createElement(_FormGroup.FormGroup, { isInputTitle: isInputTitle, style: style, label: label, isFocus: value || placeholder, id: id, inline: type === 'color', error: error }, inputs.get(type)));
});
/** Style */
const InputControl = styled__default["default"].input `
  ${InputStyle.InputStyle};
`;
const TextareaControl = styled__default["default"].textarea `
  ${InputStyle.InputStyle};
  ${_lineOverflow.P2.a};
  resize: none;
`;

module.exports = Input;
