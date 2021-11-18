import React from "react";
import { TPosition } from "components/util/type";

export interface TooltipProps {
  children: JSX.Element;
  title: string | JSX.Element;
  position?: TPosition;
}
export default function Tooltip({
  children,
  title,
  position = "bottom",
}: TooltipProps) {
  return (
    <div className="w-tooltip">
      <div className="w-tooltip-children">{children}</div>
      <div className={`w-tooltip-container ${position}`}>{title}</div>
    </div>
  );
}
