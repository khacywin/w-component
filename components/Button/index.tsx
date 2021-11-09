import { borderRadius, opacity } from "../util/css/base";
import styled, { css } from "styled-components";

import React from "react";
import { rgba } from "polished";

interface PropsStyled {
  dark?: boolean;
  error?: boolean;
  normal?: boolean;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
}

export interface ButtonProps extends PropsStyled {
  children: any;
  type?: "submit" | "button" | "reset";
  className?: string;
  fnClick?: () => void;
}

export default function ({
  children,
  className,
  error,
  fnClick,
  normal,
  primary,
  success,
  type,
  warning,
}: ButtonProps) {
  return (
    <Button
      type={type || "button"}
      primary={!!primary}
      error={!!error}
      className={className || ""}
      success={!!success}
      warning={!!warning}
      // default={!!default}
      normal={!!normal}
      onClick={fnClick}
    >
      {children}
    </Button>
  );
}

export { default as ButtonAction } from "./ButtonAction";
export { default as ButtonLoadMore } from "./ButtonLoadMore";

export const cssButton = css<PropsStyled>`
  border: none;
  cursor: pointer;
  color: var(--white);
  padding: 7px 12px;
  ${borderRadius.normal};
  ${opacity.SemiFully};

  ${(props) =>
    props.primary
      ? `
    background-color: var(--primary);
  `
      : props.success
      ? `
    background-color: var(--success);
  `
      : props.error
      ? `
    background-color: var(--error);
  `
      : props.warning
      ? `
    background-color: var(--warning);
  `
      : props.dark
      ? `
    background-color: var(--dark);
  `
      : props.normal
      ? `
    background-color: transparent;
    color: var(--black);
  `
      : `
    color: var(--black);
  `}

  &:hover {
    ${opacity.Fully};
  }

  &:focus {
    outline: 0;
  }

  &:active {
    ${(props) =>
      props.primary
        ? `
    background-color: rgba(var(--primary), 0.5);
  `
        : props.success
        ? `
    background-color: rgba(var(--success), 0.5);
  `
        : props.error
        ? `
    background-color: rgba(var(--error), 0.5);
  `
        : props.warning
        ? `
    background-color: rgba(var(--warning), 0.5);
  `
        : props.dark
        ? `
    background-color: rgba(var(--dark), 0.5);
  `
        : props.normal
        ? `
    background-color: transparent;
    color: var(--black);
  `
        : ""}
  }
`;

const Button = styled.button<PropsStyled>`
  ${cssButton};
`;
