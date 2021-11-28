import { P as P2, n as normal, s as small, l as light } from './_lineOverflow-fd1b0d7f.js';
import styled, { css, keyframes } from 'styled-components';
import React from 'react';

function ChartProcess (props) {
    const percent = (props.amount / props.sum) * 100;
    return (React.createElement(React.Fragment, null,
        React.createElement(WrapChartProcess, { sum: props.sum },
            React.createElement(ChartProcess$1, { amount: props.amount, percent: percent })),
        props.title ? React.createElement(ChartProcessTitle, null, props.title) : ""));
}
const AmountTag = css `
  position: absolute;
  top: -30px;
  ${P2.a};
  ${normal};
  ${small};
  right: 0;
  transform: translate(50%, 0);
`;
const ArrowDown = css `
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
const WrapChartProcess = styled.div `
  width: 100%;
  height: 5px;
  position: relative;
  background-color: var(--secondary);
  margin-top: 30px;
  ${normal};

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
const aniProcess = (percent) => keyframes `
  0%{
    width: 0%;
  }
  100%{
    width: ${percent}%;
  }
`;
const ChartProcess$1 = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  width: ${(props) => props.percent}%;
  ${normal};
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
const ChartProcessTitle = styled.div `
  ${light};
  ${small};
  text-align: center;
  user-select: none;
`;

export { ChartProcess as default };
//# sourceMappingURL=ChartProcess.js.map
