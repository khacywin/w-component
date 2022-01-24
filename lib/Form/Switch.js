'use strict';

var React = require('react');
require('../_space-5cfb2697.js');
var css_base__fontWeight = require('../_fontWeight-72109252.js');
var css_base__fontSize = require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
require('../_opacity-19bf620b.js');
var css_base__borderRadius = require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
var _util_generatedId = require('../_util/generatedId.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Switch = React__default["default"].memo((props) => {
    const id = _util_generatedId();
    const [value, setValue] = React.useState(props.value || props.defaultValue || false);
    const _onChange = React.useCallback(() => {
        if (props.fnChange) {
            props.fnChange(!value);
        }
        setValue(!value);
    }, [props, value]);
    React.useEffect(() => {
        props.value && setValue(props.value);
    }, [props.value]);
    return (React__default["default"].createElement(SwitchWrap, null,
        React__default["default"].createElement("div", null,
            React__default["default"].createElement("h5", null, props.label),
            props.labelSub ? React__default["default"].createElement("h6", null, props.labelSub) : ""),
        React__default["default"].createElement("input", { id: id, type: "checkbox", checked: value, onChange: _onChange }),
        React__default["default"].createElement(SwitchBox, { active: value, htmlFor: id },
            React__default["default"].createElement(SwitchButton, { htmlFor: id }))));
});
const SwitchWrap = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
  user-select: none;

  h5 {
    ${css_base__fontSize.normal};
    ${css_base__fontWeight.normal};
  }
  h6 {
    opacity: 0.8;
    ${css_base__fontWeight.normal};
    ${css_base__fontSize.small};
  }

  input {
    width: 0;
    height: 0;
    display: none;
  }
`;
const SwitchButton = styled__default["default"].label `
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  top: 1px;
  left: 2px;
  cursor: pointer;
  background-color: var(--backgroundContent);
  transition: transform 0.2s linear;
`;
const SwitchBox = styled__default["default"].label `
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${(props) => props.active ? "var(--primary)" : "var(--shadow)"};
  ${css_base__borderRadius.around};
  ${(props) => props.active
    ? `
    ${SwitchButton}{
      transform: translate(100%,0);
    }
  `
    : `
  ${SwitchButton}{
      transform: translate(0,0);
    }`}
`;

module.exports = Switch;
