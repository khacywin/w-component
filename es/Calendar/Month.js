import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { B as ButtonAction } from '../ButtonAction-230acc5c.js';
import { I as Icon } from '../Icon-69b9e7b0.js';
import styled from 'styled-components';
import '../_lineOverflow-fd1b0d7f.js';
import '../index-6556b1ec.js';
import '../useHandleDisplay-fdfdebb5.js';

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
    return (React.createElement(Wrap, null,
        React.createElement(WrapHead, null,
            React.createElement("div", null, year),
            React.createElement(ButtonSection, null,
                React.createElement(ButtonAction, { action: _previousYear },
                    React.createElement(Icon, { icon: 'i-arrow-left' })),
                React.createElement(ButtonAction, { action: _nextYear },
                    React.createElement(Icon, { icon: 'i-arrow-right' })))),
        React.createElement(List, null, list.map((month) => (React.createElement(Item, { active: month.value === selected.getMonth() &&
                year === selected.getFullYear(), key: month.value, onClick: _onSelected(month.value), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(`${year}-${month.value + 1}`) }, month.label))))));
}
const Wrap = styled.div `
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

export { Month as default };
//# sourceMappingURL=Month.js.map
