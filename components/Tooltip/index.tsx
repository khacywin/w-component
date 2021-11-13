import React from "react";
import { TPosition } from "components/util/type";
import { borderRadius } from "components/util/css/base";
import styled from "styled-components";

export interface TooltipProps {
  children: JSX.Element;
  title: string | JSX.Element;
  position?: TPosition;
}
export default function Tooltip({
  children,
  title,
  position = "bottom",
}: TooltipProps) {
  return (
    <Wrap>
      <WrapChildren>{children}</WrapChildren>
      <WrapTooltip position={position}>{title}</WrapTooltip>
    </Wrap>
  );
}

const WrapTooltip = styled.div<{ position: TPosition }>`
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  color: var(--text);
  padding: 8px 12px;
  box-shadow: 0 2px 2px var(--boxShadow);
  ${borderRadius.normal};

  ${({ position }) =>
    position === "left"
      ? `
      right: calc(100% + 5px);
    `
      : position === "right"
      ? `
      left: calc(100% + 5px);
    `
      : position === "top"
      ? `
      bottom: calc(100% + 5px);
    `
      : `
      top: calc(100% + 5px);
    `}
`;

const WrapChildren = styled.div`
  cursor: pointer;
`;

const Wrap = styled.div`
  position: relative;

  &:hover ${WrapTooltip} {
    display: block;
  }
`;
