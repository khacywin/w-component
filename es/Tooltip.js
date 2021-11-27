import React from 'react';
import { n as normal } from './_lineOverflow-0f5e92ab.js';
import styled from 'styled-components';

function Tooltip({ children, title, position = "bottom", }) {
    return (React.createElement(Wrap, null,
        React.createElement(WrapChildren, null, children),
        React.createElement(WrapTooltip, { position: position }, title)));
}
const WrapTooltip = styled.div `
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  color: var(--text);
  padding: 8px 12px;
  box-shadow: 0 2px 2px var(--boxShadow);
  ${normal};

  ${({ position }) => position === "left"
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
const WrapChildren = styled.div `
  cursor: pointer;
`;
const Wrap = styled.div `
  position: relative;

  &:hover ${WrapTooltip} {
    display: block;
  }
`;

export { Tooltip as default };
//# sourceMappingURL=Tooltip.js.map
