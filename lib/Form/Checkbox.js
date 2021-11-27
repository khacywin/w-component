'use strict';

var React = require('react');
var styled = require('styled-components');
var colorSVG = require('helps/colorSVG');
var generatedId = require('helps/generatedId');
var polished_esm = require('../polished.esm-76f26fe7.js');
var _lineOverflow = require('../_lineOverflow-f7594b16.js');
require('../inheritsLoose-60b82b3e.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var colorSVG__default = /*#__PURE__*/_interopDefaultLegacy(colorSVG);
var generatedId__default = /*#__PURE__*/_interopDefaultLegacy(generatedId);

/**
 * Checkbox component
 * @props color: color of checkbox when checked
 * @props checked
 * @props fnChanged: function
 * @props labelChecked
 */
var Checkbox = React__default["default"].memo((props) => {
    const id = props.id || generatedId__default["default"]();
    const labelChecked = React.useMemo(() => props.labelChecked ? props.labelChecked : ['', ''], [props.labelChecked]);
    const _onChange = React.useCallback((e) => {
        props.fnChange && props.fnChange(e.target.checked);
    }, [props]);
    return (React__default["default"].createElement(Checkbox$1, { className: 'checkbox ' + (props.className ? props.className : ''), color: props.color, "data-is-aria-label": props.labelChecked ? 'on' : 'off', "aria-label": props.value ? labelChecked[1] : labelChecked[0], "data-label-position": 'left-bottom' },
        React__default["default"].createElement("input", { id: id, type: 'checkbox', checked: props.value, name: props.name, onChange: _onChange }),
        React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement("i", { className: 'i-tick' })),
        React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement("span", null, props.label))));
});
const aniScale = styled.keyframes `
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const Checkbox$1 = styled__default["default"].div `
  display: flex;
  align-items: flex-start;

  input {
    width: 0;
    height: 0;
  }

  label {
    cursor: pointer;
    user-select: none;
    width: 100%;
  }

  & > label:first-of-type {
    display: block;
    flex: 0 0 15px;
    width: 15px;
    height: 15px;
    position: relative;
    top: -1px;
    border: 1px solid;
    border-color: ${(props) => (props.color ? props.color : 'var(--black)')};
    border-radius: 5px;

    &::after {
      position: absolute;
      content: '';
      width: 102%;
      height: 100%;
      top: -6%;
      left: 15%;
      display: none;
      animation: ${aniScale} 0.1s linear;
      ${_lineOverflow.front_1};
      ${(props) => props.color && colorSVG__default["default"](props.color)}
    }
    i {
      position: absolute;
      width: 5px;
      height: 5px;
      top: 1px;
      right: 50%;
      display: none;
      background-color: inherit;
      color: ${({ color }) => color};
      ${_lineOverflow.front};
    }

    &:hover {
      background-color: ${polished_esm.rgba('#bdc3c7', 0.1)};
      &::before {
        background-color: ${polished_esm.rgba('#bdc3c7', 0.1)};
      }
    }
  }

  & > label:last-of-type {
    margin-left: 5px;
    ${({ color }) => color && colorSVG__default["default"](color)};
  }

  input:checked ~ label::after,
  input:checked ~ label i {
    display: block;
  }

  input:checked ~ label {
    border-right: none;
    border-top: none;
  }
`;

module.exports = Checkbox;
