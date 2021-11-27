import { b as big, h as semiBold } from './_lineOverflow-40abb42a.js';
import styled from 'styled-components';

const CalendarWrap = styled.table `
  border-collapse: none;

  * {
    user-select: none;
  }

  ${({ noSelect }) => noSelect &&
    `
    li {
      cursor: initial !important;

      & :hover {
        background-color: transparent !important;
      }
    }
    `}
`;
const CalendarTop = styled.thead `
  ${big};
  text-align: left;
  th {
    text-indent: 10px;
  }
`;
const CalendarHead = styled.tr `
  ${semiBold};
  text-align: center;
  height: 34px;
`;
const CalendarDate = styled.td `
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

  ${({ notInMonth }) => notInMonth &&
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

  ${({ now }) => now &&
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

export { CalendarDate as C, CalendarWrap as a, CalendarTop as b, CalendarHead as c };
//# sourceMappingURL=_style-e33da27c.js.map
