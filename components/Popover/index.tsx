/**
 * Dropdown menu
 * @props dropdown: button to click
 * @props dropdown_menu: menu
 * @props position: position of menu
 */

import React, { ReactElement, useRef } from "react";

import useHandleDisplay from "components/util/hooks/useHandleDisplay";
import usePositionDialog from "components/util/hooks/usePositionDialog";

type Position = "left" | "right" | "top" | "bottom";

export interface PopoverProps {
  full?: boolean; // set width is 100% or initial
  position?: Position;
  title?: ReactElement | string;
  content: ReactElement | string;
  children: ReactElement | string;
}
export default React.memo((props: PopoverProps) => {
  const refMenu: any = useRef();
  const ref = useRef();
  const { isDisplay, onToggleDisplay } = useHandleDisplay(refMenu);
  usePositionDialog(refMenu, ref);

  return (
    <div className="w-popover-mark">
      <div className="w-popover-control" ref={ref} onClick={onToggleDisplay}>
        {props.children}
      </div>
      <div
        className={`w-popover 
        ${props.full ? "full" : ""}
        ${props.position || "left"}
        ${isDisplay ? "show" : ""}
      `}
        ref={refMenu}
      >
        {props.title && <div className="w-popover-title">{props.title}</div>}
        <div className="w-popover-content">{props.content}</div>
      </div>
    </div>
  );
});
