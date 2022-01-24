'use strict';

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * NOTIFICATIONS
 * @props message - (default) - (error) - (success)
 */
var index = React__default["default"].memo((props) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const handleClose = React.useCallback(() => {
        setIsOpen(false);
        setTimeout(() => {
            props.fnOff(props === null || props === void 0 ? void 0 : props.id);
        }, 200);
    }, [props]);
    React.useEffect(() => {
        const closeState = setTimeout(() => {
            setIsOpen(false);
        }, 4800);
        const closeStore = setTimeout(() => {
            props.fnOff(props === null || props === void 0 ? void 0 : props.id);
        }, 5000);
        return () => {
            clearTimeout(closeState);
            clearTimeout(closeStore);
        };
    }, [props]);
    return (React__default["default"].createElement(NotificationWrap, { open: isOpen, white: !!props.white, success: !!props.success, error: !!props.error },
        typeof props.message === "string" ? (React__default["default"].createElement(Message, { dangerouslySetInnerHTML: { __html: props.message } })) : (React__default["default"].createElement(Message, null, props.message)),
        React__default["default"].createElement(ButtonClose, { white: !!props.white, type: "button", onClick: handleClose },
            React__default["default"].createElement("i", { className: "i-close" }))));
});
const slideRight = styled.keyframes `
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideRightOut = styled.keyframes `
 100% {
    opacity: 0;
    transform: translateX(-100px);
  }
  0% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const NotificationWrap = styled__default["default"].div `
  padding: 8px 10px;
  color: ${(props) => props.white ? "var(--text)" : "var(--backgroundContent)"};
  background-color: ${(props) => props.error
    ? "var(--error)"
    : props.success
        ? "var(--success)"
        : props.white
            ? "var(--backgroundContent)"
            : "var(--dark)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 1px 3px var(--boxShadow);
  animation: ${(props) => (props.open ? slideRight : slideRightOut)} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const Message = styled__default["default"].div `
  position: relative;
  top: -1px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ButtonClose = styled__default["default"].button `
  border: none;
  background-color: transparent;
  margin-left: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;

  i {
    color: ${({ white }) => (white ? "initial" : "var(--backgroundContent)")};
  }

  &:focus {
    border: none;
    outline: 0;
  }
`;

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index
});

exports.index = index$1;
exports.index$1 = index;
