import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { B as ButtonAction } from './ButtonAction-230acc5c.js';
import { I as Icon } from './Icon-69b9e7b0.js';
import styled from 'styled-components';

function Month ({ selected, fnSelected, disableItem }) {
    const [year, setYear] = useState(new Date().getFullYear());
    const list = useMemo(() => [
        {
            value: 0,
            label: 'Jan',
        },
        {
            value: 1,
            label: 'Feb',
        },
        {
            value: 2,
            label: 'Mar',
        },
        {
            value: 3,
            label: 'Apr',
        },
        {
            value: 4,
            label: 'May',
        },
        {
            value: 5,
            label: 'Jun',
        },
        {
            value: 6,
            label: 'Jul',
        },
        {
            value: 7,
            label: 'Aug',
        },
        {
            value: 8,
            label: 'Sep',
        },
        {
            value: 9,
            label: 'Oct',
        },
        {
            value: 10,
            label: 'Nov',
        },
        {
            value: 11,
            label: 'Dec',
        },
    ], []);
    const _onSelected = useCallback((month) => () => {
        fnSelected(new Date(`${year}/${month + 1}`));
    }, [fnSelected, year]);
    const _previousYear = useCallback(() => {
        setYear((year) => year - 1);
    }, []);
    const _nextYear = useCallback(() => {
        setYear((year) => year + 1);
    }, []);
    useEffect(() => {
        setYear(selected.getFullYear());
    }, [selected]);
    return (React.createElement(Wrap$1, null,
        React.createElement(WrapHead, null,
            React.createElement("div", null, year),
            React.createElement(ButtonSection, null,
                React.createElement(ButtonAction, { action: _previousYear },
                    React.createElement(Icon, { icon: 'i-arrow-left' })),
                React.createElement(ButtonAction, { action: _nextYear },
                    React.createElement(Icon, { icon: 'i-arrow-right' })))),
        React.createElement(List$1, null, list.map((month) => (React.createElement(Item$1, { active: month.value === selected.getMonth() &&
                year === selected.getFullYear(), key: month.value, onClick: _onSelected(month.value), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(`${year}-${month.value + 1}`) }, month.label))))));
}
const Wrap$1 = styled.div `
  width: 150px;
`;
const WrapHead = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ButtonSection = styled.div `
  display: flex;
`;
const List$1 = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item$1 = styled.li `
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

  &:hover {
    background-color: var(--backgroundOpacity);
  }

  ${({ disable }) => disable &&
    `
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  `}
`;

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

export { Month as M, Year as Y };
//# sourceMappingURL=Year-e0936646.js.map
