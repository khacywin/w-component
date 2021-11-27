import { borderRadius, opacity } from "css/base";
import styled, { css } from "styled-components";

import React from "react";

interface PropsStyled {
  dark?: boolean;
  error?: boolean;
  normal?: boolean;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
}

interface Props {
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
}: Props & PropsStyled) {
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
    opacity: 0.7;
  }
`;
const Button = styled.button<PropsStyled>`
  ${cssButton};
`;
