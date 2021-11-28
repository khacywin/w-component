import React, { useState, useImperativeHandle, useEffect } from 'react';
import { n as normal, E as menu, w as P3, s as small, q as semiBold, G as P5, M as M1 } from './_lineOverflow-fd1b0d7f.js';
import styled, { keyframes, css } from 'styled-components';
import { B as Button } from './index-c6bbddca.js';
import { B as ButtonAction } from './ButtonAction-230acc5c.js';
import { I as Icon } from './Icon-69b9e7b0.js';
import { createPortal } from 'react-dom';
import './index-6556b1ec.js';
import './useHandleDisplay-fdfdebb5.js';

/**
 * @prop {heading?} label
 * @prop {JSX.Element | JSX.Element[]} content
 * @prop {JSX.Element | JSX.Element[] ?} footer
 * @prop {boolean} show
 */
var Modal = React.forwardRef(({ heading, content, children, footer, fnClose, noFooter, show, styled, }, ref) => {
    const [isShow, setShow] = useState(false);
    useImperativeHandle(ref, () => ({
        show() {
            setShow(true);
        },
        hide() {
            setShow(false);
            setTimeout(() => {
                fnClose === null || fnClose === void 0 ? void 0 : fnClose();
            }, 100);
        },
    }));
    function hide() {
        setShow(false);
        if (fnClose) {
            fnClose();
        }
    }
    useEffect(() => {
        setShow(show);
    }, [show]);
    return isShow
        ? createPortal(React.createElement(WrapModal, null,
            React.createElement(ModalDialog, { style: styled, className: "w-modal-wrap", show: isShow },
                React.createElement(ModalHeading, null,
                    heading && React.createElement("span", null, heading),
                    React.createElement(ButtonAction, { action: () => hide() },
                        React.createElement(Icon, { icon: "i-close" }))),
                React.createElement(ModalContainer, null, content || children),
                !noFooter && (React.createElement(ModalFooter, null, footer ? (footer) : (React.createElement(Button, { fnClick: () => hide() }, " OK ")))))), document.getElementById("modal-root"))
        : null;
});
const WrapModal = styled.div `
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
const animationShow = keyframes `
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;
const cssShow = css `
  animation: ${animationShow} 0.2s linear;
`;
const ModalDialog = styled.div `
  min-width: 400px;
  max-width: 600px;
  height: auto;
  background-color: var(--backgroundContent);

  margin: 6vh auto;

  ${normal};
  ${menu};
  ${({ show }) => (show ? cssShow : "")};
`;
const ModalHeading = styled.div `
  ${P3.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${small};
  ${semiBold};
  user-select: none;

  span {
    position: relative;

    &::before {
      content: "";
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
const ModalContainer = styled.div `
  ${P5.x};
`;
const ModalFooter = styled.div `
  ${P3.a};
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 70%;
    height: 0.5px;
    background-color: var(--border);
    top: 0;
    right: 0;
  }

  button {
    ${M1.l};
  }
`;

export { Modal as default };
//# sourceMappingURL=Modal.js.map
