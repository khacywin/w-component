/**
 * Subtitle
 * @prop {} icon: src of icon
 * @prop {string} title
 * @prop {string} color
 * @prop {Direction} direction: row | column | row-reserve | column-reserve
 */

import Icon from "components/Icon";
import React from "react";

type Direction = "row" | "column" | "row-reverse" | "column-revere";

export interface SubtitleProps {
  icon?: any;
  title?: string;
  direction?: Direction;
  color?: string;
  children?: string | JSX.Element;
}
export default function (props: SubtitleProps) {
  return (
    <div
      className="w-subtitle"
      data-direction={props.direction || "row"}
      data-color={props.color || "#999999"}
    >
      <div className='w-subtitle-text line-overflow-1'>{props.children || props.title}</div>
      {props.icon ? (
        <Icon icon={props.icon} color={props.color || "#999999"} />
      ) : (
        ""
      )}
    </div>
  );
}