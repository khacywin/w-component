import React, { useCallback, useEffect, useMemo, useState } from "react";

import ButtonAction from "../Button/ButtonAction";
import Icon from "../Icon";
import styled from "styled-components";

export interface IMonthPickerProps {
  selected?: Date;
  fnSelected?: (year: Date) => void;
  disableItem?: (date: any) => boolean;
}

export default function ({
  selected,
  fnSelected,
  disableItem,
}: IMonthPickerProps) {
  const [year, setYear] = useState(new Date().getFullYear());

  const list = useMemo(
    () => [
      {
        value: 0,
        label: "Jan",
      },
      {
        value: 1,
        label: "Feb",
      },
      {
        value: 2,
        label: "Mar",
      },
      {
        value: 3,
        label: "Apr",
      },
      {
        value: 4,
        label: "May",
      },
      {
        value: 5,
        label: "Jun",
      },
      {
        value: 6,
        label: "Jul",
      },
      {
        value: 7,
        label: "Aug",
      },
      {
        value: 8,
        label: "Sep",
      },
      {
        value: 9,
        label: "Oct",
      },
      {
        value: 10,
        label: "Nov",
      },
      {
        value: 11,
        label: "Dec",
      },
    ],
    []
  );

  const _onSelected = useCallback(
    (month) => () => {
      fnSelected(new Date(`${year}/${month + 1}`));
    },
    [fnSelected, year]
  );

  const _previousYear = useCallback(() => {
    setYear((year) => year - 1);
  }, []);

  const _nextYear = useCallback(() => {
    setYear((year) => year + 1);
  }, []);

  useEffect(() => {
    setYear(selected.getFullYear());
  }, [selected]);

  return (
    <Wrap>
      <WrapHead>
        <div>{year}</div>
        <ButtonSection>
          <ButtonAction action={_previousYear}>
            <Icon icon="i-arrow-left" />
          </ButtonAction>
          <ButtonAction action={_nextYear}>
            <Icon icon="i-arrow-right" />
          </ButtonAction>
        </ButtonSection>
      </WrapHead>

      <List>
        {list.map((month) => (
          <Item
            active={
              month.value === selected.getMonth() &&
              year === selected.getFullYear()
            }
            key={month.value}
            onClick={_onSelected(month.value)}
            disable={disableItem?.(`${year}-${month.value + 1}`)}
          >
            {month.label}
          </Item>
        ))}
      </List>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 150px;
`;

const WrapHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonSection = styled.div`
  display: flex;
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

  &:hover {
    background-color: var(--backgroundOpacity);
  }

  ${({ disable }) =>
    disable &&
    `
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  `}
`;
