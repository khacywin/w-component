'use strict';

var React = require('react');
var _lineOverflow = require('../_lineOverflow-b8a457d2.js');
var generatedId = require('../generatedId-3779176c.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const SwitchWrap = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
  user-select: none;

  h5 {
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal$3};
  }
  h6 {
    opacity: 0.8;
    ${_lineOverflow.normal$3};
    ${_lineOverflow.small};
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
  ${_lineOverflow.around};
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
var Switch = React__default["default"].memo((props) => {
    const id = generatedId.generatedId();
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

module.exports = Switch;
