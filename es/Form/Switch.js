import React, { useState, useCallback, useEffect } from 'react';
import { m as normal, u as normal$1, s as small, v as around } from '../_lineOverflow-40abb42a.js';
import { g as generatedId } from '../generatedId-52e731a2.js';
import styled from 'styled-components';

const SwitchWrap = styled.div `
  display: flex;
  justify-content: space-between;
  user-select: none;

  h5 {
    ${normal};
    ${normal$1};
  }
  h6 {
    opacity: 0.8;
    ${normal$1};
    ${small};
  }

  input {
    width: 0;
    height: 0;
    display: none;
  }
`;
const SwitchButton = styled.label `
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
const SwitchBox = styled.label `
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${(props) => props.active ? "var(--primary)" : "var(--shadow)"};
  ${around};
  ${(props) => props.active
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
var Switch = React.memo((props) => {
    const id = generatedId();
    const [value, setValue] = useState(props.value || props.defaultValue || false);
    const _onChange = useCallback(() => {
        if (props.fnChange) {
            props.fnChange(!value);
        }
        setValue(!value);
    }, [props, value]);
    useEffect(() => {
        props.value && setValue(props.value);
    }, [props.value]);
    return (React.createElement(SwitchWrap, null,
        React.createElement("div", null,
            React.createElement("h5", null, props.label),
            props.labelSub ? React.createElement("h6", null, props.labelSub) : ""),
        React.createElement("input", { id: id, type: "checkbox", checked: value, onChange: _onChange }),
        React.createElement(SwitchBox, { active: value, htmlFor: id },
            React.createElement(SwitchButton, { htmlFor: id }))));
});

export { Switch as default };
//# sourceMappingURL=Switch.js.map
