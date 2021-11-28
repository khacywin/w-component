import React from 'react';
import { W as WrapDialog } from '../WrapDialog-18399383.js';
import styled from 'styled-components';

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
