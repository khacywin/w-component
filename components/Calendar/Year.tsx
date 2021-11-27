import React, { useCallback, useEffect, useState } from "react";

import ButtonAction from "../Button/ButtonAction";
import Icon from "../Icon";
import styled from "styled-components";

export interface IYearPickerProps {
  selected?: string;
  fnSelected?: (year: string) => void;
  disableItem?: (date: any) => boolean;
}

export default function ({
  selected,
  fnSelected,
  disableItem,
}: IYearPickerProps) {
  const [list, setList] = useState<number[]>([]);

  const _onSelected = useCallback(
    (value) => () => {
      fnSelected(value.toString());
    },
    [fnSelected]
  );

  const _setPreviousListYear = useCallback(() => {
    setList((list) => list.map((item: number) => item - 10));
  }, []);

  const _setNextListYear = useCallback(() => {
    setList((list) => list.map((item: number) => item + 10));
  }, []);

  useEffect(() => {
    const _year = +new Date(selected.toString()).getFullYear();
    const _list: number[] = [];

    for (
      let i = Math.floor(_year / 10) * 10 - 1;
      i <= Math.floor(_year / 10) * 10 + 10;
      i++
    ) {
      _list.push(i);
    }

    setList(_list);
  }, [selected]);

  return (
    <Wrap>
      <ButtonAction action={_setPreviousListYear}>
        <Icon icon="i-arrow-up" />
      </ButtonAction>

      <List>
        {list.map((year, idx) => (
          <Item
            active={year === +selected}
            key={idx}
            onClick={_onSelected(year)}
            disable={disableItem?.(year.toString())}
          >
            {year}
          </Item>
        ))}
      </List>

      <ButtonAction action={_setNextListYear}>
        <Icon icon="i-arrow-down" />
      </ButtonAction>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 150px;

  & > button {
    width: 100%;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface IPropsItem {
  active: boolean;
  disable: boolean;
}
const Item = styled.li<IPropsItem>`
  border-radius: 9999px;
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  width: 33.33333%;

  ${({ active }) =>
    active &&
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

  ${({ disable }) =>
    disable &&
    `
    opacity: 0.2 !important;
    user-select: none;
    pointer-events: none;
  `}
`;
