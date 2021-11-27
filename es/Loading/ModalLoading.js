import React from 'react';
import styled, { css } from 'styled-components';

var WrapDialog = css `
  background-color: ${({ theme }) => theme.palette.backgroundContent};
  border-top: 5px solid ${({ theme }) => theme.palette.secondary};
  box-shadow: 0 3px 20px ${({ theme }) => theme.palette.boxShadow};
  left: 50%;
  transform: translateX(-50%);
`;

var ModalLoading = ({ width, height, children, maxWidth }) => {
    return React.createElement(Wrap, null,
        React.createElement(WrapContainer, { style: {
                width: width,
                maxWidth: maxWidth,
                height: height,
            } }, children));
};
const Wrap = styled.div `
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backgroundOpacity);
`;
const WrapContainer = styled.div `
  position: absolute;
  ${WrapDialog};
  top: 5vh;
`;

export { ModalLoading as default };
//# sourceMappingURL=ModalLoading.js.map
