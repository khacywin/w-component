import React from "react";
import { TPosition } from "util/type";
import { borderRadius } from "components/styles/base";
import styled from "styled-components";

export interface ITooltipProps {
  children: JSX.Element;
  title: string | JSX.Element;
  position?: TPosition;
}
export default function Tooltip({
  children,
  title,
  position = "bottom",
}: ITooltipProps) {
  return (
    <Wrap className="w-tooltip">
      <WrapChildren className="w-tooltip-control">{children}</WrapChildren>
      <WrapTooltip className="w-tooltip-content" position={position}>
        {title}
      </WrapTooltip>
    </Wrap>
  );
}

const WrapTooltip = styled.div<{ position: TPosition }>`
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  z-index: 100;
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
