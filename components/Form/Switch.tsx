import React, { useCallback, useEffect, useState } from "react";
import { borderRadius, fontSize, fontWeight } from "components/util/css/base";

import generatedId from "components/util/helps/generateKey";
import styled from "styled-components";

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
  }, [value]);

  useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value]);

  return (
    <SwitchWrap>
      <div>
        <h5>{props.label}</h5>
        {props.labelSub ? <h6>{props.labelSub}</h6> : ""}
      </div>
      <input id={id} type="checkbox" checked={value} onChange={_onChange} />
      <SwitchBox active={value} htmlFor={id}>
        <SwitchButton htmlFor={id} />
      </SwitchBox>
    </SwitchWrap>
  );
});

const SwitchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;

  h5 {
    ${fontSize.normal};
    ${fontWeight.normal};
  }
  h6 {
    opacity: 0.8;
    ${fontWeight.normal};
    ${fontSize.small};
  }

  input {
    width: 0;
    height: 0;
    display: none;
  }
`;

interface PropsSwitch {
  active: boolean;
}
const SwitchButton = styled.label`
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  top: 1px;
  left: 2px;
  cursor: pointer;
  background-color: var(--backgroundContent);
  transition: transform 0.2s linear;
`;

const SwitchBox = styled.label<PropsSwitch>`
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${(props) =>
    props.active ? "var(--primary)" : "var(--shadow)"};
  ${borderRadius.around};
  ${(props) =>
    props.active
      ? `
    ${SwitchButton}{
      transform: translate(100%,0);
    }
  `
      : `
  ${SwitchButton}{
      transform: translate(0,0);
    }`}
`;
