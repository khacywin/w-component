'use strict';

var React = require('react');
var css_base__space = require('./_space-5cfb2697.js');
var css_base__fontWeight = require('./_fontWeight-72109252.js');
var css_base__fontSize = require('./_fontSize-5a701955.js');
require('./_zIndex-a46cddfb.js');
require('./_opacity-19bf620b.js');
var css_base__borderRadius = require('./_borderRadius-3deadb9d.js');
var css_base__boxShadow = require('./_boxShadow-6d818d81.js');
require('./_lineOverflow-94c98c56.js');
var styled = require('styled-components');
var Button_index = require('./Button/index.js');
var Button_ButtonAction = require('./Button/ButtonAction.js');
var Icon = require('./Icon.js');
var reactDom = require('react-dom');
require('./index-9390237c.js');
require('./_util/hooks/useHandleDisplay.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * @prop {heading?} label
 * @prop {JSX.Element | JSX.Element[]} content
 * @prop {JSX.Element | JSX.Element[] ?} footer
 * @prop {boolean} show
 */
var Modal = React__default["default"].forwardRef(({ heading, content, children, footer, fnClose, noFooter, show, styled, }, ref) => {
    const [isShow, setShow] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
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
    React.useEffect(() => {
        setShow(show);
    }, [show]);
    // Check id container to add
    React.useEffect(() => {
        const ele = document.getElementById("modal-root");
        if (!ele) {
            const modalRootEle = document.createElement("div");
            modalRootEle.id = "modal-root";
            document.querySelector('body').appendChild(modalRootEle);
        }
    }, []);
    return isShow
        ? reactDom.createPortal(React__default["default"].createElement(WrapModal, null,
            React__default["default"].createElement(ModalDialog, { style: styled, className: "w-modal-wrap", show: isShow },
                React__default["default"].createElement(ModalHeading, null,
                    heading && React__default["default"].createElement("span", null, heading),
                    React__default["default"].createElement(Button_ButtonAction, { action: () => hide() },
                        React__default["default"].createElement(Icon, { icon: "i-close" }))),
                React__default["default"].createElement(ModalContainer, null, content || children),
                !noFooter && (React__default["default"].createElement(ModalFooter, null, footer ? (footer) : (React__default["default"].createElement(Button_index["default"], { fnClick: () => hide() }, " OK ")))))), document.getElementById("modal-root"))
        : null;
});
const WrapModal = styled__default["default"].div `
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
const animationShow = styled.keyframes `
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;
const cssShow = styled.css `
  animation: ${animationShow} 0.2s linear;
`;
const ModalDialog = styled__default["default"].div `
  min-width: 400px;
  max-width: 600px;
  height: auto;
  background-color: var(--backgroundContent);

  margin: 6vh auto;

  ${css_base__borderRadius.normal};
  ${css_base__boxShadow.menu};
  ${({ show }) => (show ? cssShow : "")};
`;
const ModalHeading = styled__default["default"].div `
  ${css_base__space.P3.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${css_base__fontSize.small};
  ${css_base__fontWeight.semiBold};
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
const ModalContainer = styled__default["default"].div `
  ${css_base__space.P5.x};
`;
const ModalFooter = styled__default["default"].div `
  ${css_base__space.P3.a};
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
    ${css_base__space.M1.l};
  }
`;

module.exports = Modal;
