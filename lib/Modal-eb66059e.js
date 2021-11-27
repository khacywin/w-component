'use strict';

var _lineOverflow = require('./_lineOverflow-f7594b16.js');
var styled = require('styled-components');
var React = require('react');
var polished_esm = require('./polished.esm-76f26fe7.js');
var Button$2 = require('components/atoms/Button');
var ButtonAction = require('components/atoms/Button/ButtonAction');
var Icon = require('components/atoms/Icon');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button$2);
var ButtonAction__default = /*#__PURE__*/_interopDefaultLegacy(ButtonAction);
var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);

function Button ({ children, className, error, fnClick, normal, primary, success, type, warning, }) {
    return (React__default["default"].createElement(Button$1, { type: type || 'button', primary: !!primary, error: !!error, className: className || '', success: !!success, warning: !!warning, 
        // default={!!default}
        normal: !!normal, onClick: fnClick }, children));
}
const cssButton = styled.css `
  border: none;
  cursor: pointer;
  color: var(--white);
  padding: 7px 12px;
  ${_lineOverflow.normal};
  ${_lineOverflow.SemiFully};

  ${(props) => props.primary
    ? `
    background-color: ${props.theme.palette.primary};
  `
    : props.success
        ? `
    background-color: ${props.theme.palette.success};
  `
        : props.error
            ? `
    background-color: ${props.theme.palette.error};
  `
            : props.warning
                ? `
    background-color: ${props.theme.palette.warning};
  `
                : props.dark
                    ? `
    background-color: ${props.theme.palette.dark};
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
    ${_lineOverflow.Fully};
  }

  &:focus {
    outline: 0;
  }

  &:active {
    ${(props) => props.primary
    ? `
    background-color: ${polished_esm.rgba(props.theme.palette.primary, 0.5)};
  `
    : props.success
        ? `
    background-color: ${polished_esm.rgba(props.theme.palette.success, 0.5)};
  `
        : props.error
            ? `
    background-color:${polished_esm.rgba(props.theme.palette.error, 0.5)};
  `
            : props.warning
                ? `
    background-color:${polished_esm.rgba(props.theme.palette.warning, 0.5)};
  `
                : props.dark
                    ? `
    background-color:${polished_esm.rgba(props.theme.palette.dark, 0.5)};
  `
                    : props.normal
                        ? `
    background-color: transparent;
    color: var(--black);
  `
                        : ''}
  }
`;
const Button$1 = styled__default["default"].button `
  ${cssButton};
`;

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
            React__default["default"].createElement(ModalDialog, { style: styled, className: 'w-modal-wrap', show: isShow },
                React__default["default"].createElement(ModalHeading, null,
                    heading && React__default["default"].createElement("span", null, heading),
                    React__default["default"].createElement(ButtonAction__default["default"], { action: () => hide() },
                        React__default["default"].createElement(Icon__default["default"], { icon: 'i-close' }))),
                React__default["default"].createElement(ModalContainer, null, content || children),
                !noFooter && (React__default["default"].createElement(ModalFooter, null, footer ? (footer) : (React__default["default"].createElement(Button__default["default"], { fnClick: () => hide() }, " OK ")))))), document.getElementById('modal-root'))
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
  background-color: ${({ theme }) => theme.palette.backgroundContent};

  margin: 6vh auto;

  ${_lineOverflow.normal};
  ${_lineOverflow.menu};
  ${({ show }) => (show ? cssShow : '')};
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
      content: '';
      position: absolute;
      width: 70%;
      height: 0.5px;
      background-color: ${({ theme }) => theme.palette.border};
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
    content: '';
    position: absolute;
    width: 70%;
    height: 0.5px;
    background-color: ${({ theme }) => theme.palette.border};
    top: 0;
    right: 0;
  }

  button {
    ${_lineOverflow.M1.l};
  }
`;

exports.Button = Button;
exports.Modal = Modal;
