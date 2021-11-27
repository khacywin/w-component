import React, { useRef, useCallback } from 'react';
import { a as P2, c as P1 } from './_lineOverflow-0f5e92ab.js';
import styled from 'styled-components';
import { t as transition } from './index-8505406e.js';
import { u as useHandleDisplay } from './useHandleDisplay-fdfdebb5.js';

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
var ButtonAction = React.forwardRef((props, ref) => {
    const refButton = useRef(null);
    const { isDisplay: isActive, show } = useHandleDisplay(ref || refButton, true);
    const _preventDefault = useCallback((e) => {
        props.action && (props === null || props === void 0 ? void 0 : props.action(e));
        props.onClick && (props === null || props === void 0 ? void 0 : props.onClick(e));
        show();
        e.preventDefault();
    }, [props, show]);
    return (React.createElement(WrapButtonAction, { ref: ref || refButton, className: "button-action " + (props.className || ""), active: props.isActive || isActive, type: props.type || "button", "aria-label": props.label, "data-label-position": props.positionLabel, "data-is-aria-label": props.isLabel, onClick: _preventDefault }, props.children));
});
const WrapButtonAction = styled.button `
  ${P2.a};
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
    /* ${P1.x}; */
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
    ${transition.def};
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
`;

export { ButtonAction as B };
//# sourceMappingURL=ButtonAction-761104f9.js.map
