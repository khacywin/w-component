import React, { useCallback, useEffect, useState } from "react";

import generatedId from "components/util/helps/generateKey";

export interface SwitchProps {
  label?: string | JSX.Element;
  labelSub?: string;
  defaultValue?: boolean;
  value?: boolean;
  fnChange?: (val: boolean) => void;
}
export default React.memo((props: SwitchProps) => {
  const id = generatedId();

  const [value, setValue] = useState(
    props.value || props.defaultValue || false
  );

  const _onChange = useCallback(() => {
    if (props.fnChange) {
      props.fnChange(!value);
    }

    setValue(!value);
  }, [props, value]);

  useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value]);

  return (
    <div className="w-switch">
      <div>
        <h5>{props.label}</h5>
        {props.labelSub ? <h6>{props.labelSub}</h6> : ""}
      </div>
      <input id={id} type="checkbox" checked={value} onChange={_onChange} />
      <label className={`w-switch-box ${value ? "active" : ""}`} htmlFor={id}>
        <label className="w-switch-box-button" htmlFor={id} />
      </label>
    </div>
  );
});
