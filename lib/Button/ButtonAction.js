'use strict';

var React = require('react');
var _lineOverflow = require('../_lineOverflow-b8a457d2.js');
var styled = require('styled-components');
var index = require('../index-f0e3963b.js');
var useHandleDisplay = require('../useHandleDisplay-16f1a228.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * ButtonAction
 * @property {any} children
 * @property {string} label - optional
 * @property {'on' | 'off'} isLabel - optional
 * @property {'left' | 'right' | 'right-bottom' | 'left-bottom'} positionLabel - optional
 * @property {boolean} isActive - optional
 * @property {TypeButton} type - optional
 * @property {string} className - optional
 * @property {RefObject<HTMLButtonElement>} refElement - optional
 * @property {void} action - optional
 * @property {void} onClick - optional
 */
var ButtonAction = React__default["default"].forwardRef((props, ref) => {
    const refButton = React.useRef(null);
    const { isDisplay: isActive, show } = useHandleDisplay.useHandleDisplay(ref || refButton, true);
    const _preventDefault = React.useCallback((e) => {
        props.action && (props === null || props === void 0 ? void 0 : props.action(e));
        props.onClick && (props === null || props === void 0 ? void 0 : props.onClick(e));
        show();
        e.preventDefault();
    }, [props, show]);
    return (React__default["default"].createElement(WrapButtonAction, { ref: ref || refButton, className: "button-action " + (props.className || ""), active: props.isActive || isActive, type: props.type || "button", "aria-label": props.label, "data-label-position": props.positionLabel, "data-is-aria-label": props.isLabel, onClick: _preventDefault }, props.children));
});
const WrapButtonAction = styled__default["default"].button `
  ${_lineOverflow.P2.a};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  & > * {
    /* ${_lineOverflow.P1.x}; */
    user-select: none;
  }

  &:focus {
    outline: 0;
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--backgroundOpacity);
    top: 0;
    left: 0;
    border-radius: 9999px;
    z-index: -1;
    transform: ${(props) => (props.active ? `scale(1)` : `scale(0)`)};
    ${index.transition.def};
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
`;

module.exports = ButtonAction;
