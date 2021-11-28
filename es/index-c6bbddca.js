import { n as normal, D as SemiFully, F as Fully } from './_lineOverflow-fd1b0d7f.js';
import styled, { css } from 'styled-components';
import React from 'react';

function Button ({ children, className, error, fnClick, normal, primary, success, type, warning, }) {
    return (React.createElement(Button$1, { type: type || "button", primary: !!primary, error: !!error, className: className || "", success: !!success, warning: !!warning, 
        // default={!!default}
        normal: !!normal, onClick: fnClick }, children));
}
const cssButton = css `
  border: none;
  cursor: pointer;
  color: var(--white);
  padding: 7px 12px;
  ${normal};
  ${SemiFully};

  ${(props) => props.primary
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
    ${Fully};
  }

  &:focus {
    outline: 0;
  }

  &:active {
    opacity: 0.7;
  }
`;
const Button$1 = styled.button `
  ${cssButton};
`;

export { Button as B };
//# sourceMappingURL=index-c6bbddca.js.map
