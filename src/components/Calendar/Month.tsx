import React, { useCallback, useEffect, useMemo, useState } from "react";

import ButtonAction from "components/Button/ButtonAction";
import Icon from "components/Icon";
import _t from "helps/_t";
import styled from "styled-components";

export interface MonthPickerProps {
  selected?: Date;
  fnSelected?: (year: Date) => void;
  disableItem?: (date: any) => boolean;
}

export default function ({
  selected = new Date(),
  fnSelected,
  disableItem,
}: MonthPickerProps) {
  const [year, setYear] = useState(new Date().getFullYear());

  const list = useMemo(
    () => [
      {
        value: 0,
        label: _t("Jan"),
      },
      {
        value: 1,
        label: _t("Feb"),
      },
      {
        value: 2,
        label: _t("Mar"),
      },
      {
        value: 3,
        label: _t("Apr"),
      },
      {
        value: 4,
        label: _t("May"),
      },
      {
        value: 5,
        label: _t("Jun"),
      },
      {
        value: 6,
        label: _t("Jul"),
      },
      {
        value: 7,
        label: _t("Aug"),
      },
      {
        value: 8,
        label: _t("Sep"),
      },
      {
        value: 9,
        label: _t("Oct"),
      },
      {
        value: 10,
        label: _t("Nov"),
      },
      {
        value: 11,
        label: _t("Dec"),
      },
    ],
    []
  );

  const onSelected = useCallback(
    (month) => () => {
      fnSelected(new Date(`${year}/${month + 1}`));
    },
    [fnSelected, year]
  );

  const previousYear = useCallback(() => {
    setYear((year) => year - 1);
  }, []);

  const nextYear = useCallback(() => {
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
          <ButtonAction action={previousYear}>
            <Icon icon="i-arrow-left" />
          </ButtonAction>
          <ButtonAction action={nextYear}>
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
            onClick={onSelected(month.value)}
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
