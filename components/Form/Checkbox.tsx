/**
 * Checkbox component
 * @props color: color of checkbox when checked
 * @props checked
 * @props fnChanged: function
 * @props labelChecked
 */

import React, { ChangeEvent, useCallback, useMemo } from "react";

import colorSVG from "components/util/helps/colorSVG";
import generatedId from "components/util/helps/generateKey";

export interface CheckboxProps {
  color?: string;
  labelChecked?: string[];
  label?: string | JSX.Element;
  id?: string;
  name?: string;
  value?: boolean;
  className?: string;
  fnChange?: (checked: boolean) => void;
}

export default React.memo((props: CheckboxProps) => {
  const id = props.id || generatedId();
  const labelChecked = useMemo(
    () => (props.labelChecked ? props.labelChecked : ["", ""]),
    [props.labelChecked]
  );

  const _onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      props.fnChange && props.fnChange(e.target.checked);
    },
    [props]
  );

  return (
    <div
      className={"w-checkbox " + (props.className ? props.className : "")}
      color={props.color || "var(--black)"}
      style={props.color ? JSON.parse(colorSVG(props.color)) : {}}
      data-is-aria-label={props.labelChecked ? "on" : "off"}
      aria-label={props.value ? labelChecked[1] : labelChecked[0]}
      data-label-position="left-bottom"
    >
      <input
        id={id}
        type="checkbox"
        checked={props.value}
        name={props.name}
        onChange={_onChange}
      />
      <label htmlFor={id}>
        <i className="i-tick" />
      </label>
      <label htmlFor={id}>
        <span>{props.label}</span>
      </label>
    </div>
  );
});
