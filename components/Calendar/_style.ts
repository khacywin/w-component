import { fontSize, fontWeight } from 'css/base';

import styled from 'styled-components';

type CalendarWrapProps = {
  noSelect: boolean;
};
export const CalendarWrap = styled.table<CalendarWrapProps>`
  border-collapse: none;

  * {
    user-select: none;
  }

  ${({ noSelect }) =>
    noSelect &&
    `
    li {
      cursor: initial !important;

      & :hover {
        background-color: transparent !important;
      }
    }
    `}
`;

export const CalendarTop = styled.thead`
  ${fontSize.big};
  text-align: left;
  th {
    text-indent: 10px;
  }
`;

export const CalendarHead = styled.tr`
  ${fontWeight.semiBold};
  text-align: center;
  height: 34px;
`;

interface PropsCalendarDate {
  now?: boolean;
  notInMonth?: boolean;
  disable?: boolean;
}
export const CalendarDate = styled.td<PropsCalendarDate>`
  padding: 3px;
  margin: 0;

  li {
    width: 28px;
    height: 28px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }

  ${({ notInMonth }) =>
    notInMonth &&
    `
    opacity: 0.5;
  `};

  &.selected {
    li {
      border-radius: 50%;
      background-color: var(--secondary);
      color: var(--backgroundContent);
    }
  }

  ${({ now }) =>
    now &&
    `
    li {
      background-color:var(--primary) !important;
      color:   var(--backgroundContent) !important;
    }
  `};

  ${({ disable }) => disable && `
    opacity: 0.2;
    user-select: none;
    pointer-events: none;
    
    li:hover {
      background-color: unset;
    }
  `}
`;
