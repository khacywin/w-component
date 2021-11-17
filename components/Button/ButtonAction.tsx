import React, { RefObject, useCallback, useRef } from "react";

import { TPositionLabel } from "components/util/type";
import useHandleDisplay from "components/util/hooks/useHandleDisplay";

type TypeButton = "submit" | "button";

export interface ButtonActionProps {
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
  (props: ButtonActionProps, ref: RefObject<HTMLButtonElement>) => {
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
      <button
        ref={ref || refButton}
        className={`w-button 
                    w-button-action 
                    ${props.className || ""} 
                    ${props.isActive || isActive ? "w-button-action-active" : ""}`
                  }
        type={props.type || "button"}
        aria-label={props.label}
        data-label-position={props.positionLabel}
        data-is-aria-label={props.isLabel}
        onClick={_preventDefault}
      >
        {props.children}
      </button>
    );
  }
);
