import { borderRadius, fontSize, fontWeight, space } from "components/styles/base";
import styled, { css, keyframes } from "styled-components";

import React from "react";

interface Props {
  sum: number;
  amount: number;
  title?: string;
}
export default function (props: Props) {
  const percent = (props.amount / props.sum) * 100;
  return (
    <>
      <WrapChartProcess sum={props.sum}>
        <ChartProcess amount={props.amount} percent={percent} />
      </WrapChartProcess>
      {props.title ? <ChartProcessTitle>{props.title}</ChartProcessTitle> : ""}
    </>
  );
}

interface PropsWrap {
  sum: number;
}

const AmountTag = css`
  position: absolute;
  top: -30px;
  ${space.P2.a};
  ${borderRadius.normal};
  ${fontSize.small};
  right: 0;
  transform: translate(50%, 0);
`;

const ArrowDown = css`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  position: absolute;
  top: -6px;
  right: 0;
  transform: translate(50%, 0);
`;

const WrapChartProcess = styled.div<PropsWrap>`
  width: 100%;
  height: 5px;
  position: relative;
  background-color: var(--secondary);
  margin-top: 30px;
  ${borderRadius.normal};

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.sum}'`};
    background-color: var(--secondary);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--secondary);
  }
`;

interface PropsChartProcess {
  amount?: number;
  percent: number;
}

const aniProcess = (percent: number) => keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: ${percent}%;
  }
`;

const ChartProcess = styled.div<PropsChartProcess>`
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  width: ${(props) => props.percent}%;
  ${borderRadius.normal};
  background-color: var(--success);
  animation: ${(props) => aniProcess(props.percent)} 1s linear;

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.amount}'`};
    background-color: var(--success);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--success);
  }
`;

const ChartProcessTitle = styled.div`
  ${fontWeight.light};
  ${fontSize.small};
  text-align: center;
  user-select: none;
`;
