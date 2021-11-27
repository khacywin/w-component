import { B as ButtonNoStyle } from '../ButtonNoStyle-03feb3c9.js';
import React from 'react';
import styled from 'styled-components';

var ButtonLoadMore = React.memo(({ onClick }) => {
    return React.createElement(Button, { onClick: onClick }, "Load more ...");
});
const Button = styled.button `
  ${ButtonNoStyle};
  margin-top: 10px;
  margin: 0 auto;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export { ButtonLoadMore as default };
//# sourceMappingURL=ButtonLoadMore.js.map
