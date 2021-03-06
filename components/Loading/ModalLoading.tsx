import React from 'react';
import WrapDialog from 'components/styles/elements/WrapDialog';
import styled from 'styled-components';

interface IProps {
  width: string;
  maxWidth?: string;
  height: string;
  children: JSX.Element;
}
export default ({ width, height, children, maxWidth }: IProps): JSX.Element => {
  return <Wrap>
    <WrapContainer style={{
      width: width,
      maxWidth: maxWidth,
      height: height,
    }}>{children}</WrapContainer>
  </Wrap>;
};

const Wrap = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backgroundOpacity);
`;

const WrapContainer = styled.div`
  position: absolute;
  ${WrapDialog};
  top: 5vh;
`;
