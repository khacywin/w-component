import { fontSize, fontWeight, opacity } from "../util/css/base";
import styled, { css } from "styled-components";

import React from "react";
import transition from "../util/css/transition";

interface PropsStyled {
  labelFocus: boolean;
  isInputTitle: boolean;
  focus: boolean;
  inline: boolean;
  isError: boolean;
  isLabel: boolean;
}

export type ErrorFormGroup = {
  type: string;
  message: string;
};
interface Props {
  label?: string;
  labelFocus?: boolean;
  isFocus: boolean;
  id?: string;
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  isInputTitle?: boolean;
  className?: string;
  inline?: boolean;
  error?: ErrorFormGroup;
}

export default React.memo((props: Props) => {
  return (
    <>
      <FromGroupWrap
        isInputTitle={props.isInputTitle}
        style={props.style}
        labelFocus={props.labelFocus}
        isLabel={!!props.label}
        focus={props.isFocus}
        inline={props.inline}
        className={`form-group ` + (props.className || "")}
        isError={!!props?.error?.type}
      >
        {props.children}
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
      </FromGroupWrap>
      {!!props.error?.type && <ErrorWrap>{props.error.message}</ErrorWrap>}
    </>
  );
});

export const cssFocus = css<{ isInputTitle?: boolean }>`
  left: 0;
  bottom: 100%;
  ${opacity.SemiFully};
  ${fontSize.smaller};

  ${({ isInputTitle }) =>
    isInputTitle &&
    `
      display: none;
    `};
`;

export const LabelCss = css`
  position: absolute;
  left: 10px;
  width: 100%;
  bottom: 4px;
  ${transition.linear};
`;

const FromGroupWrap = styled.div<PropsStyled>`
  position: relative;
  border-bottom: 1px solid
    ${({ isError }) => (isError ? "var(--error)" : "var(--border)")};
  ${({ isLabel }) => isLabel && "margin-top: 15px"};

  .focus-show {
    display: none;
  }

  & > label {
    ${LabelCss};

    ${({ isInputTitle }) =>
      isInputTitle &&
      `
      ${fontSize.bigger};
      ${fontWeight.semiBold};
    `};

    ${({ labelFocus }) => labelFocus && cssFocus};
    ${({ focus }) => focus && cssFocus};
  }

  ${({ isInputTitle }) =>
    isInputTitle &&
    `
      &>input {
        ${fontSize.bigger};
      }
    `};

  ${({ inline }) =>
    inline &&
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
      border-color: ${({ isError }) =>
        isError ? "var(--error)" : "var(--border)"};
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

const ErrorWrap = styled.div`
  color: var(--error);
`;
