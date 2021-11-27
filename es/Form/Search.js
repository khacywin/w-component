import React, { useState } from 'react';
import { a as P2, l as P3, S as SemiTransparent, k as normal } from '../_lineOverflow-0f5e92ab.js';
import { B as ButtonNoStyle } from '../ButtonNoStyle-03feb3c9.js';
import Icon from 'components/atoms/Icon';
import _t from 'helps/language/_t';
import styled from 'styled-components';
import { t as transition } from '../index-8505406e.js';

/**
 * @prop {(val: string) => void} fnSearch
 */
var Search = React.memo((props) => {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');
    function focus() {
        setIsFocus(true);
    }
    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    function blur(e) {
        if (!e.target.value) {
            setIsFocus(false);
        }
    }
    /**
     * @param {React.FormEvent} e
     */
    function submit(e) {
        e.preventDefault();
        props.fnSearch(value);
    }
    return (React.createElement(Search$1, { dark: props.dark, focus: isFocus, onSubmit: submit, className: 'w-search' },
        React.createElement("button", { type: 'submit' },
            React.createElement(Icon, { color: props.dark ? '#fff' : '#1a1a1a', icon: 'i-search' })),
        props.value !== undefined && props.onChange ? (React.createElement(Input, { value: props.value, onChange: props.onChange, placeholder: `${props.placeholder || _t('Search')}...`, onFocus: () => focus(), onBlur: (e) => blur(e) })) : (React.createElement(Input, { value: value, onChange: (e) => setValue(e.target.value), placeholder: `${props.placeholder || _t('Search')}...`, onFocus: () => focus(), onBlur: (e) => blur(e) }))));
});
const Search$1 = styled.form `
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${({ dark }) => (dark ? '#fff' : '#c7c7c7')};
  width: 200px;
  input {
    color: ${({ dark }) => (dark ? '#fff' : 'initial')};
  }

  ${P2.y};
  ${P3.x};
  ${transition.easeIn};
  ${SemiTransparent};
  ${(props) => props.focus &&
    `
    opacity: 1;
    max-width: 300px;
    width: 100%;
  `};
  button {
    ${ButtonNoStyle};
  }
`;
const Input = styled.input `
  margin-left: 5px;
  background-color: transparent;
  border: none;
  ${normal};

  &:focus {
    outline: 0;
  }
`;

export { Search as default };
//# sourceMappingURL=Search.js.map