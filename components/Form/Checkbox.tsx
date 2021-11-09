/**
 * Checkbox component
 * @props color: color of checkbox when checked
 * @props checked
 * @props fnChanged: function
 * @props labelChecked
 */

import React, { ChangeEvent, useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

import colorSVG from 'helps/colorSVG';
import generatedId from '../util/helps/generateKey';
import { rgba } from 'polished';
import { zIndex } from '../util/css/base';

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
  const labelChecked = useMemo(() => props.labelChecked ? props.labelChecked : ['', ''], [props.labelChecked]);

  const _onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      props.fnChange && props.fnChange(e.target.checked);
    },
    [props]
  );

  return (
    <Checkbox
      className={'checkbox ' + (props.className ? props.className : '')}
      color={props.color}
      data-is-aria-label={props.labelChecked ? 'on' : 'off'}
      aria-label={props.value ? labelChecked[1] : labelChecked[0]}
      data-label-position='left-bottom'
    >
      <input
        id={id}
        type='checkbox'
        checked={props.value}
        name={props.name}
        onChange={_onChange}
      />
      <label htmlFor={id}>
        <i className='i-tick' />
      </label>
      <label htmlFor={id}>
        <span>{props.label}</span>
      </label>
    </Checkbox>
  );
});


const aniScale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

interface PropsWrap {
  color: string;
}
const Checkbox = styled.div<PropsWrap>`
  display: flex;
  align-items: flex-start;

  input {
    width: 0;
    height: 0;
  }

  label {
    cursor: pointer;
    user-select: none;
    width: 100%;
  }

  & > label:first-of-type {
    display: block;
    flex: 0 0 15px;
    width: 15px;
    height: 15px;
    position: relative;
    top: -1px;
    border: 1px solid;
    border-color: ${(props) => (props.color ? props.color : 'var(--black)')};
    border-radius: 5px;

    &::after {
      position: absolute;
      content: '';
      width: 102%;
      height: 100%;
      top: -6%;
      left: 15%;
      display: none;
      animation: ${aniScale} 0.1s linear;
      ${zIndex.front_1};
      ${(props) => props.color && colorSVG(props.color)}
    }
    i {
      position: absolute;
      width: 5px;
      height: 5px;
      top: 1px;
      right: 50%;
      display: none;
      background-color: inherit;
      color: ${({ color }) => color};
      ${zIndex.front};
    }

    &:hover {
      background-color: ${rgba('#bdc3c7', 0.1)};
      &::before {
        background-color: ${rgba('#bdc3c7', 0.1)};
      }
    }
  }

  & > label:last-of-type {
    margin-left: 5px;
    ${({ color }) => color && colorSVG(color)};
  }

  input:checked ~ label::after,
  input:checked ~ label i {
    display: block;
  }

  input:checked ~ label {
    border-right: none;
    border-top: none;
  }
`;
