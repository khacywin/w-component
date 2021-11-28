'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-0611c7f0.js');
var styled = require('styled-components');
var index = require('./index-202434c9.js');
var ButtonAction = require('./ButtonAction-7441ef33.js');
var Icon = require('./Icon-b6bdc54f.js');
var reactDom = require('react-dom');

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
    return isShow
        ? reactDom.createPortal(React__default["default"].createElement(WrapModal, null,
            React__default["default"].createElement(ModalDialog, { style: styled, className: "w-modal-wrap", show: isShow },
                React__default["default"].createElement(ModalHeading, null,
                    heading && React__default["default"].createElement("span", null, heading),
                    React__default["default"].createElement(ButtonAction.ButtonAction, { action: () => hide() },
                        React__default["default"].createElement(Icon.Icon, { icon: "i-close" }))),
                React__default["default"].createElement(ModalContainer, null, content || children),
                !noFooter && (React__default["default"].createElement(ModalFooter, null, footer ? (footer) : (React__default["default"].createElement(index.Button, { fnClick: () => hide() }, " OK ")))))), document.getElementById("modal-root"))
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

  ${_lineOverflow.normal};
  ${_lineOverflow.menu};
  ${({ show }) => (show ? cssShow : "")};
`;
const ModalHeading = styled__default["default"].div `
  ${_lineOverflow.P3.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${_lineOverflow.small};
  ${_lineOverflow.semiBold};
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
  ${_lineOverflow.P5.x};
`;
const ModalFooter = styled__default["default"].div `
  ${_lineOverflow.P3.a};
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
    ${_lineOverflow.M1.l};
  }
`;

exports.Modal = Modal;
