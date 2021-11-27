import { w as SemiFully, z as smaller, A as bigger, h as semiBold } from './_lineOverflow-40abb42a.js';
import styled, { css } from 'styled-components';
import React from 'react';
import { t as transition } from './index-8505406e.js';

var FormGroup = React.memo((props) => {
    var _a, _b;
    return (React.createElement(React.Fragment, null,
        React.createElement(FromGroupWrap, { isInputTitle: props.isInputTitle, style: props.style, labelFocus: props.labelFocus, isLabel: !!props.label, focus: props.isFocus, inline: props.inline, className: `form-group ` + (props.className || ""), isError: !!((_a = props === null || props === void 0 ? void 0 : props.error) === null || _a === void 0 ? void 0 : _a.type) },
            props.children,
            props.label && React.createElement("label", { htmlFor: props.id }, props.label)),
        !!((_b = props.error) === null || _b === void 0 ? void 0 : _b.type) && React.createElement(ErrorWrap, null, props.error.message)));
});
const cssFocus = css `
  left: 0;
  bottom: 100%;
  ${SemiFully};
  ${smaller};

  ${({ isInputTitle }) => isInputTitle &&
    `
      display: none;
    `};
`;
const LabelCss = css `
  position: absolute;
  left: 10px;
  width: 100%;
  bottom: 4px;
  ${transition.linear};
`;
const FromGroupWrap = styled.div `
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
      ${bigger};
      ${semiBold};
    `};

    ${({ labelFocus }) => labelFocus && cssFocus};
    ${({ focus }) => focus && cssFocus};
  }

  ${({ isInputTitle }) => isInputTitle &&
    `
      &>input {
        ${bigger};
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
const ErrorWrap = styled.div `
  color: var(--error);
`;

export { FormGroup as F, LabelCss as L, cssFocus as c };
//# sourceMappingURL=_FormGroup-a38ef777.js.map
