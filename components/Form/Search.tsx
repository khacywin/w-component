/**
 * @prop {(val: string) => void} fnSearch
 */

import React, { useState } from 'react';
import { fontSize, opacity, space } from 'css/base';

import ButtonNoStyle from 'css/elements/ButtonNoStyle';
import Icon from 'components/atoms/Icon';
import _t from 'helps/language/_t';
import styled from 'styled-components';
import transition from 'css/transition';

interface Props {
  fnSearch: (val: string) => void;
  defaultValue?: string;
  placeholder?: string;
  dark?: boolean;
  value?: string;
  onChange?: (...arg: any) => void;
}
export default React.memo((props: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');

  function focus() {
    setIsFocus(true);
  }

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function blur(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      setIsFocus(false);
    }
  }

  /**
   * @param {React.FormEvent} e
   */
  function submit(e: React.FormEvent) {
    e.preventDefault();
    props.fnSearch(value);
  }

  return (
    <Search
      dark={props.dark}
      focus={isFocus}
      onSubmit={submit}
      className='w-search'
    >
      <button type='submit'>
        <Icon color={props.dark ? '#fff' : '#1a1a1a'} icon='i-search' />
      </button>
      {props.value !== undefined && props.onChange ? (
        <Input
          value={props.value}
          onChange={props.onChange}
          placeholder={`${props.placeholder || _t('Search')}...`}
          onFocus={() => focus()}
          onBlur={(e: any) => blur(e)}
        />
      ) : (
        <Input
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder={`${props.placeholder || _t('Search')}...`}
          onFocus={() => focus()}
          onBlur={(e: any) => blur(e)}
        />
      )}
    </Search>
  );
});

interface PropsWrap {
  focus: boolean;
  dark: boolean;
}
const Search = styled.form<PropsWrap>`
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${({ dark }) => (dark ? '#fff' : '#c7c7c7')};
  width: 200px;
  input {
    color: ${({ dark }) => (dark ? '#fff' : 'initial')};
  }

  ${space.P2.y};
  ${space.P3.x};
  ${transition.easeIn};
  ${opacity.SemiTransparent};
  ${(props) =>
    props.focus &&
    `
    opacity: 1;
    max-width: 300px;
    width: 100%;
  `};
  button {
    ${ButtonNoStyle};
  }
`;

const Input = styled.input`
  margin-left: 5px;
  background-color: transparent;
  border: none;
  ${fontSize.normal};

  &:focus {
    outline: 0;
  }
`;
