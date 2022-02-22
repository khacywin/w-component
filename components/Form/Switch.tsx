import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
import { borderRadius, fontSize, fontWeight } from "css/base";

import generatedId from "util/generatedId";
import styled from "styled-components";

export interface ISwitchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "defaultValue" | "name" | "value" | "onChange"
  > {
  label?: string | JSX.Element;
  labelSub?: string;
  defaultValue?: boolean;
  value?: boolean;
  fnChange?: (val: boolean) => void;
  name?: string;
}
export default React.memo(
  ({
    label,
    labelSub,
    defaultValue,
    value,
    fnChange,
    name,
    ...props
  }: ISwitchProps) => {
    const id = generatedId();

    const [val, setValue] = useState(defaultValue || false);

    const _onChange = useCallback(() => {
      fnChange?.(!val);

      setValue(!val);
    }, [fnChange, val]);

    useEffect(() => {
      value !== undefined && setValue(value);
    }, [value]);

    useEffect(() => {
      setValue(!!defaultValue);
    }, [defaultValue]);

    return (
      <SwitchWrap>
        <div>
          <h5>{label}</h5>
          {labelSub ? <h6>{labelSub}</h6> : ""}
        </div>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={val}
          onChange={_onChange}
          {...props}
        />
        <SwitchBox active={val} htmlFor={id}>
          <SwitchButton htmlFor={id} />
        </SwitchBox>
      </SwitchWrap>
    );
  }
);

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
