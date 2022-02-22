import React, { RefObject, useCallback } from "react";

import { TPositionLabel } from "util/type";
import { space } from "components/styles/base";
import styled from "styled-components";
import transition from "components/styles/transition";
import useHandleDisplay from "hooks/useHandleDisplay";
import { useRef } from "react";

type TypeButton = "submit" | "button";

interface Props {
  children: any;
  label?: string;
  isLabel?: "on" | "off";
  positionLabel?: TPositionLabel;
  action?: ({ ...arg }) => void;
  onClick?: ({ ...arg }) => void;
  isActive?: boolean;
  type?: TypeButton;
  className?: string;
}

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
export default React.forwardRef(
  (props: Props, ref: RefObject<HTMLButtonElement>) => {
    const refButton = useRef<HTMLButtonElement>(null);

    const { isDisplay: isActive, show } = useHandleDisplay(
      ref || refButton,
      true
    );

    const _preventDefault = useCallback(
      (e: React.MouseEvent) => {
        props.action && props?.action(e);
        props.onClick && props?.onClick(e);
        show();
        e.preventDefault();
      },
      [props, show]
    );

    return (
      <WrapButtonAction
        ref={ref || refButton}
        className={"button-action " + (props.className || "")}
        active={props.isActive || isActive}
        type={props.type || "button"}
        aria-label={props.label}
        data-label-position={props.positionLabel}
        data-is-aria-label={props.isLabel}
        onClick={_preventDefault}
      >
        {props.children}
      </WrapButtonAction>
    );
  }
);

interface PropsStyled {
  active: boolean;
}
const WrapButtonAction = styled.button<PropsStyled>`
  ${space.P2.a};
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
    /* ${space.P1.x}; */
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
