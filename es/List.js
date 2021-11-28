import React from 'react';
import { n as normal } from './_lineOverflow-fd1b0d7f.js';
import styled from 'styled-components';

function List({ children }) {
    return React.createElement(Wrap, null, children);
}
const Wrap = styled.div `
  & > li,
  & > div {
    padding: 3px 10px;
    transition: 0.2s all ease-in;

    ${normal};

    &:hover {
      background-color: var(--background);
    }
  }
`;

export { List as default };
//# sourceMappingURL=List.js.map
