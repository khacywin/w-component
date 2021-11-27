import React, { useState, useCallback, useEffect } from 'react';
import { B as ButtonAction } from '../ButtonAction-3cf1adce.js';
import { I as Icon } from '../Icon-69b9e7b0.js';
import styled from 'styled-components';
import '../_lineOverflow-40abb42a.js';
import '../index-8505406e.js';
import '../useHandleDisplay-fdfdebb5.js';

function Year ({ selected, fnSelected, disableItem, }) {
    const [list, setList] = useState([]);
    const _onSelected = useCallback((value) => () => {
        fnSelected(value.toString());
    }, [fnSelected]);
    const _setPreviousListYear = useCallback(() => {
        setList((list) => list.map((item) => item - 10));
    }, []);
    const _setNextListYear = useCallback(() => {
        setList((list) => list.map((item) => item + 10));
    }, []);
    useEffect(() => {
        const _year = +new Date(selected.toString()).getFullYear();
        const _list = [];
        for (let i = Math.floor(_year / 10) * 10 - 1; i <= Math.floor(_year / 10) * 10 + 10; i++) {
            _list.push(i);
        }
        setList(_list);
    }, [selected]);
    return (React.createElement(Wrap, null,
        React.createElement(ButtonAction, { action: _setPreviousListYear },
            React.createElement(Icon, { icon: "i-arrow-up" })),
        React.createElement(List, null, list.map((year, idx) => (React.createElement(Item, { active: year === +selected, key: idx, onClick: _onSelected(year), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(year.toString()) }, year)))),
        React.createElement(ButtonAction, { action: _setNextListYear },
            React.createElement(Icon, { icon: "i-arrow-down" }))));
}
const Wrap = styled.div `
  width: 150px;

  & > button {
    width: 100%;
  }
`;
const List = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled.li `
  border-radius: 9999px;
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  width: 33.33333%;

  ${({ active }) => active &&
    `
    background-color: var(--primary);
    color: #fff;
  `}

  &:last-of-type, &:first-of-type {
    opacity: 0.6;
  }

  &:hover {
    background-color: var(--backgroundOpacity);
  }

  ${({ disable }) => disable &&
    `
    opacity: 0.2 !important;
    user-select: none;
    pointer-events: none;
  `}
`;

export { Year as default };
//# sourceMappingURL=Year.js.map
