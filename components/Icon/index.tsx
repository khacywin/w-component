import React from "react";

// import colorSVG from 'helps/colorSVG';

interface IconProps {
  small?: boolean;
  normal?: boolean;
  big?: boolean;
  biggest?: boolean;
  bigger?: boolean;
  color?: string;
  icon?: string;
  src?: any;
}

export default React.memo((props: IconProps) => {
  return (
    <div
      className={`
        w-icon icon
        ${props.biggest ? "biggest" : ""}
        ${props.big ? "big" : ""}
        ${props.bigger ? "bigger" : ""}
        ${props.small ? "small" : ""}
        ${props.normal ? "normal" : ""}
      `}
      data-color={props.color}
    >
      {props.icon && <i className={props.icon} />}
      {props.src && <img src={props.src} />}
    </div>
  );
});
