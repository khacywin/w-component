/**
 * @prop {heading?} label
 * @prop {JSX.Element | JSX.Element[]} content
 * @prop {JSX.Element | JSX.Element[] ?} footer
 * @prop {boolean} show
 */

import React, { useEffect, useImperativeHandle, useState } from 'react';
import {
  borderRadius,
  boxShadow,
  fontSize,
  fontWeight,
  space,
} from 'css/base';
import styled, { css, keyframes } from 'styled-components';

import Button from 'components/Button';
import ButtonAction from 'components/Button/ButtonAction';
import Icon from 'components/Icon';
import { createPortal } from 'react-dom';

interface PropsModalStyled {
  show: boolean;
}

export interface ModalProps {
  heading?: string;
  content?: JSX.Element | JSX.Element[] | string;
  children?: JSX.Element | JSX.Element[] | string;
  footer?: JSX.Element;
  fnClose?: () => void; // When you open Modal only with use ref, you can use this function to handle
  noFooter?: boolean;
  show?: boolean;
  styled?: IObject;
}

export type TRefModal = {
  show: () => void;
  hide: () => void;
} & HTMLDivElement;

export default React.forwardRef(
  (
    {
      heading,
      content,
      children,
      footer,
      fnClose,
      noFooter,
      show,
      styled,
    }: ModalProps,
    ref: any
  ) => {
    const [isShow, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
      show() {
        setShow(true);
      },

      hide() {
        setShow(false);
        setTimeout(() => {
          fnClose?.();
        }, 100);
      },
    }));

    function hide(): void {
      setShow(false);
      if (fnClose) {
        fnClose();
      }
    }

    useEffect(() => {
      setShow(show);
    }, [show]);

    return isShow
      ? createPortal(
          <WrapModal>
            <ModalDialog style={styled} className='w-modal-wrap' show={isShow}>
              <ModalHeading>
                {heading && <span>{heading}</span>}
                <ButtonAction action={() => hide()}>
                  <Icon icon='i-close' />
                </ButtonAction>
              </ModalHeading>

              <ModalContainer>{content || children}</ModalContainer>
              {!noFooter && (
                <ModalFooter>
                  {footer ? (
                    footer
                  ) : (
                    <Button fnClick={() => hide()}> OK </Button>
                  )}
                </ModalFooter>
              )}
            </ModalDialog>
          </WrapModal>,
          document.getElementById('modal-root')
        )
      : null;
  }
);

const WrapModal = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow-x: auto;
  background-color: rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 4px;
  }
`;

const animationShow = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;

const cssShow = css`
  animation: ${animationShow} 0.2s linear;
`;
const ModalDialog = styled.div<PropsModalStyled>`
  min-width: 400px;
  max-width: 600px;
  height: auto;
  background-color: var(--backgroundContent);

  margin: 6vh auto;

  ${borderRadius.normal};
  ${boxShadow.menu};
  ${({ show }) => (show ? cssShow : '')};
`;

const ModalHeading = styled.div`
  ${space.P3.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${fontSize.small};
  ${fontWeight.semiBold};
  user-select: none;

  span {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 70%;
      height: 0.5px;
      background-color: var(--border);
      bottom: 0;
      left: 0;
    }
  }

  button {
    margin-right: 0;
    margin-left: auto;
  }
`;

const ModalContainer = styled.div`
  ${space.P5.x};
`;

const ModalFooter = styled.div`
  ${space.P3.a};
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 70%;
    height: 0.5px;
    background-color: var(--border);
    top: 0;
    right: 0;
  }

  button {
    ${space.M1.l};
  }
`;
