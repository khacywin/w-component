import {
  CalendarDate,
  CalendarHead,
  CalendarTop,
  CalendarWrap,
} from "./_style";
import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import ButtonAction from "components/Button/ButtonAction";
import Icon from "components/Icon";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);

export interface IDateProps {
  noSelect?: boolean;
  selected?: any;
  period?: "all" | "year" | "month" | "week" | "date";
  fnSelected?: (date: Date) => void;
  disableItem?: (date: any) => boolean;
}

/**
 * Calendar component
 * @prop {date object | string format date} selected
 * @prop {function} fnSelected - params of function is {array[MM, DD, YYYY]}
 */
export default React.memo(
  ({
    selected,
    fnSelected,
    period = "date",
    noSelect = false,
    disableItem,
  }: IDateProps) => {
    const now: any = useMemo(() => new Date(), []);
    const [month, setMonth] = useState(now.getMonth()); // Use format 0-11
    const [year, setYear] = useState(now.getFullYear());

    // Date selected
    const [dateSelected, setDateSelected] = useState(
      selected ? new Date(selected) : new Date()
    );

    /**
     * @param {event} e
     */
    const selectDate = useCallback(
      (e: SyntheticEvent<HTMLTableCellElement>) => {
        if (!noSelect) {
          let date_selected: any = e.currentTarget
            ? e.currentTarget.getAttribute("data-date")
            : e; // Format : MM-DD-YYYY;
          date_selected = new Date(date_selected);

          if (fnSelected) {
            fnSelected(date_selected);
          }

          if (date_selected.getMonth() !== month) {
            setMonth(date_selected.getMonth());
            setYear(date_selected.getFullYear());
          }
          setDateSelected(date_selected);
        }
      },
      [fnSelected, month, noSelect]
    );

    const checkedSelectedDateFollowPeriod = useCallback(
      (index: number, month: number, year: number) => {
        let checked = false;
        const _dateSelected = dateSelected;
        switch (period) {
          case "week":
            checked =
              dayjs(_dateSelected).week() ===
              dayjs(`${year}/${month + 1}/${index}`).week();
            break;

          case "month":
            checked = _dateSelected.getMonth() === month;
            break;

          default:
            checked =
              index === _dateSelected.getDate() &&
              month === _dateSelected.getMonth() &&
              year === _dateSelected.getFullYear();
            break;
        }

        return checked;
      },
      [period, dateSelected]
    );

    /**
     * Create array date of
     */
    const pushIntoArray = useCallback(() => {
      const select = new Date();
      select.setMonth(month);
      select.setFullYear(year);

      const numberOfDates: number = dayjs(`${year}/${month + 1}`).daysInMonth(),
        firstDay: number = dayjs(select).startOf("month").get("d"),
        html: any[] = [];

      let index = 1,
        indexNext = 1,
        indexPrev: number =
          dayjs(dayjs(select).subtract(1, "month")).daysInMonth() -
          firstDay +
          1;
      for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 6; col++) {
          /**
           * TODO Print dates in last month
           * Check where first date in month and print dates in last month
           */
          if (row === 0 && col < firstDay) {
            const _dateString = `${month === 0 ? 12 : month}-${indexPrev}-${
              month === 0 ? year - 1 : year
            }`;

            html.push(
              <CalendarDate
                className={
                  checkedSelectedDateFollowPeriod(
                    indexPrev,
                    month === 0 ? 11 : month - 1,
                    month === 0 ? year - 1 : year
                  )
                    ? "selected"
                    : ""
                }
                onClick={selectDate}
                data-date={_dateString}
                key={7 * row + col}
                notInMonth
                disable={disableItem?.(_dateString)}
              >
                <li>{indexPrev++}</li>
              </CalendarDate>
            );
          } else if (row > 0 && index > numberOfDates) {
            /**
             * TODO Print dates in next month
             * Check where index is bigger number of date
             */
            const _dateStr = `${month === 11 ? 1 : month + 2}-${indexNext}-${
              month === 11 ? year + 1 : year
            }`;
            html.push(
              <CalendarDate
                className={
                  checkedSelectedDateFollowPeriod(
                    indexNext,
                    month === 11 ? 0 : month + 1,
                    month === 11 ? year + 1 : year
                  )
                    ? "selected"
                    : ""
                }
                onClick={selectDate}
                data-date={_dateStr}
                key={7 * row + col}
                notInMonth
                disable={disableItem?.(_dateStr)}
              >
                <li>{indexNext++}</li>
              </CalendarDate>
            );
          } else {
            /**
             * TODO Print date was selected
             */
            const _dateStr = `${month + 1}-${index}-${year}`;
            html.push(
              <CalendarDate
                className={
                  checkedSelectedDateFollowPeriod(index, month, year)
                    ? "selected"
                    : ""
                }
                now={
                  index === now.getDate() &&
                  month === now.getMonth() &&
                  year === now.getFullYear()
                }
                data-date={_dateStr}
                onClick={selectDate}
                key={7 * row + col}
                disable={disableItem?.(_dateStr)}
              >
                <li>{index++}</li>
              </CalendarDate>
            );
          }
        }
      }
      return html;
    }, [
      month,
      year,
      checkedSelectedDateFollowPeriod,
      selectDate,
      now,
      disableItem,
    ]);

    /**
     * Divide list html date to two-dimensional array
     */
    const divideArrayToCalendar = useCallback((arr: any[]) => {
      let cols: any[] = [];
      const rows: any[] = [];
      arr.forEach((date, key) => {
        if (key % 7 === 6) {
          cols.push(date);
          rows.push(cols);
          cols = [];
        } else cols.push(date);
      });

      return rows.map((row, key) => <tr key={key}>{row}</tr>);
    }, []);

    // Next month
    const nextMonth = useCallback(() => {
      if (month === 11) {
        setYear((year: number) => year + 1);
        setMonth(0);
      } else setMonth(month + 1);
    }, [month]);

    // Previous month
    const previousMonth = useCallback(() => {
      if (month === 0) {
        setYear((year: number) => year - 1);
        setMonth(11);
      } else setMonth(month - 1);
    }, [month]);

    useEffect(() => {
      // Set date when selected change
      const _date = selected ? new Date(selected) : new Date();
      setDateSelected(_date);
    }, [selected]);

    return (
      <CalendarWrap noSelect={noSelect}>
        <CalendarTop>
          <tr>
            <th colSpan={5}>
              {dayjs(`${year}/${month + 1}`).format("MMMM")},{year}
            </th>
            <th>
              <ButtonAction label="Previous" action={previousMonth}>
                <Icon icon="i-arrow-left" />
              </ButtonAction>
            </th>
            <th>
              <ButtonAction label="Next" action={nextMonth}>
                <Icon icon="i-arrow-right" />
              </ButtonAction>
            </th>
          </tr>
        </CalendarTop>
        <tbody>
          <CalendarHead>
            <td>Sun</td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
          </CalendarHead>
          {divideArrayToCalendar(pushIntoArray())}
        </tbody>
      </CalendarWrap>
    );
  }
);
