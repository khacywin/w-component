'use strict';

var _lineOverflow = require('./_lineOverflow-b8a457d2.js');
var styled = require('styled-components');
var React = require('react');
var index = require('./index-f0e3963b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FormGroup = React__default["default"].memo((props) => {
    var _a, _b;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(FromGroupWrap, { isInputTitle: props.isInputTitle, style: props.style, labelFocus: props.labelFocus, isLabel: !!props.label, focus: props.isFocus, inline: props.inline, className: `form-group ` + (props.className || ""), isError: !!((_a = props === null || props === void 0 ? void 0 : props.error) === null || _a === void 0 ? void 0 : _a.type) },
            props.children,
            props.label && React__default["default"].createElement("label", { htmlFor: props.id }, props.label)),
        !!((_b = props.error) === null || _b === void 0 ? void 0 : _b.type) && React__default["default"].createElement(ErrorWrap, null, props.error.message)));
});
const cssFocus = styled.css `
  left: 0;
  bottom: 100%;
  ${_lineOverflow.SemiFully};
  ${_lineOverflow.smaller};

  ${({ isInputTitle }) => isInputTitle &&
    `
      display: none;
    `};
`;
const LabelCss = styled.css `
  position: absolute;
  left: 10px;
  width: 100%;
  bottom: 4px;
  ${index.transition.linear};
`;
const FromGroupWrap = styled__default["default"].div `
  position: relative;
  border-bottom: 1px solid
    ${({ isError }) => (isError ? "var(--error)" : "var(--border)")};
  ${({ isLabel }) => isLabel && "margin-top: 15px"};

  .focus-show {
    display: none;
  }

  & > label {
    ${LabelCss};

    ${({ isInputTitle }) => isInputTitle &&
    `
      ${_lineOverflow.bigger};
      ${_lineOverflow.semiBold};
    `};

    ${({ labelFocus }) => labelFocus && cssFocus};
    ${({ focus }) => focus && cssFocus};
  }

  ${({ isInputTitle }) => isInputTitle &&
    `
      &>input {
        ${_lineOverflow.bigger};
      }
    `};

  ${({ inline }) => inline &&
    `
    display: flex;
    align-items: center;
    border: none;

    & > label {
      order: 0;
      position: initial;
      font-size: initial;
      display: initial;
      width: auto;
      margin-right: 10px;
    }

    div {
      order: 1;
    }
  `};

  &.w-select {
    border-color: transparent;

    &:hover,
    &:focus {
      border-color: ${({ isError }) => isError ? "var(--error)" : "var(--border)"};
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  input:valid,
  select:valid,
  textarea:valid {
    & ~ label {
      ${cssFocus};
    }

    & ~ .focus-show {
      display: block;
    }
  }
`;
const ErrorWrap = styled__default["default"].div `
  color: var(--error);
`;

exports.FormGroup = FormGroup;
exports.LabelCss = LabelCss;
exports.cssFocus = cssFocus;
