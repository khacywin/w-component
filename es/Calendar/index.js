import { C as CalendarDate, a as CalendarWrap, b as CalendarTop, c as CalendarHead } from '../_style-e998f8ec.js';
import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { B as ButtonAction } from '../ButtonAction-230acc5c.js';
import { I as Icon } from '../Icon-69b9e7b0.js';
import { w as wDate } from '../index-3b6eefee.js';
import '../_lineOverflow-fd1b0d7f.js';
import 'styled-components';
import '../index-6556b1ec.js';
import '../useHandleDisplay-fdfdebb5.js';

/**
 * Calendar component
 * @prop {date object | string format date} selected
 * @prop {function} fnSelected - params of function is {array[MM, DD, YYYY]}
 */
var index = React.memo(({ selected, fnSelected, period = 'date', noSelect = false, disableItem }) => {
    const now = useMemo(() => new Date(), []);
    const [month, setMonth] = useState(now.getMonth()); // Use format 0-11
    const [year, setYear] = useState(now.getFullYear());
    // Date selected
    const [dateSelected, setDateSelected] = useState(selected ? wDate.identifyDate(selected) : new Date());
    /**
     * @param {event} e
     */
    const selectDate = useCallback((e) => {
        if (!noSelect) {
            let date_selected = e.currentTarget
                ? e.currentTarget.getAttribute('data-date')
                : e; // Format : MM-DD-YYYY;
            date_selected = wDate.identifyDate(date_selected);
            if (fnSelected) {
                fnSelected(date_selected);
            }
            if (date_selected.getMonth() !== month) {
                setMonth(date_selected.getMonth());
                setYear(date_selected.getFullYear());
            }
            setDateSelected(date_selected);
        }
    }, [fnSelected, month, noSelect]);
    const checkedSelectedDateFollowPeriod = useCallback((index, month, year) => {
        let checked = false;
        const _dateSelected = dateSelected;
        switch (period) {
            case 'week':
                checked =
                    wDate.getWeek(_dateSelected) ===
                        wDate.getWeek(`${month + 1}-${index}-${year}`);
                break;
            case 'month':
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
    }, [period, dateSelected]);
    /**
     * Create array date of
     */
    const pushIntoArray = useCallback(() => {
        const select = new Date();
        select.setMonth(month);
        select.setFullYear(year);
        const numberOfDates = wDate.amountDateInMonth(month + 1, year), firstDay = wDate.firstWeekdayInMonth(select), html = [];
        let index = 1, indexNext = 1, indexPrev = wDate.numberOfDays(wDate.previousMonth(select)) - firstDay + 1;
        for (let row = 0; row < 7; row++) {
            for (let col = 0; col < 6; col++) {
                /**
                 * TODO Print dates in last month
                 * Check where first date in month and print dates in last month
                 */
                if (row === 0 && col < firstDay) {
                    const _dateString = `${month === 0 ? 12 : month}-${indexPrev}-${month === 0 ? year - 1 : year}`;
                    html.push(React.createElement(CalendarDate, { className: checkedSelectedDateFollowPeriod(indexPrev, month === 0 ? 11 : month - 1, month === 0 ? year - 1 : year)
                            ? 'selected'
                            : '', onClick: selectDate, "data-date": _dateString, key: 7 * row + col, notInMonth: true, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateString) },
                        React.createElement("li", null, indexPrev++)));
                }
                /**
                 * TODO Print dates in next month
                 * Check where index is bigger number of date
                 */
                else if (row > 0 && index > numberOfDates) {
                    const _dateStr = `${month === 11 ? 1 : month + 2}-${indexNext}-${month === 11 ? year + 1 : year}`;
                    html.push(React.createElement(CalendarDate, { className: checkedSelectedDateFollowPeriod(indexNext, month === 11 ? 0 : month + 1, month === 11 ? year + 1 : year)
                            ? 'selected'
                            : '', onClick: selectDate, "data-date": _dateStr, key: 7 * row + col, notInMonth: true, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React.createElement("li", null, indexNext++)));
                }
                /**
                 * TODO Print date was selected
                 */
                else {
                    const _dateStr = `${month + 1}-${index}-${year}`;
                    html.push(React.createElement(CalendarDate, { className: checkedSelectedDateFollowPeriod(index, month, year)
                            ? 'selected'
                            : '', now: index === now.getDate() &&
                            month === now.getMonth() &&
                            year === now.getFullYear(), "data-date": _dateStr, onClick: selectDate, key: 7 * row + col, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React.createElement("li", null, index++)));
                }
            }
        }
        return html;
    }, [month, year, checkedSelectedDateFollowPeriod, selectDate, now, disableItem]);
    /**
     * Divide list html date to two-dimensional array
     */
    const divideArrayToCalendar = useCallback((arr) => {
        let cols = [];
        const rows = [];
        arr.forEach((date, key) => {
            if (key % 7 === 6) {
                cols.push(date);
                rows.push(cols);
                cols = [];
            }
            else
                cols.push(date);
        });
        return rows.map((row, key) => React.createElement("tr", { key: key }, row));
    }, []);
    // Next month
    const nextMonth = useCallback(() => {
        if (month === 11) {
            setYear((year) => year + 1);
            setMonth(0);
        }
        else
            setMonth(month + 1);
    }, [month]);
    // Previous month
    const previousMonth = useCallback(() => {
        if (month === 0) {
            setYear((year) => year - 1);
            setMonth(11);
        }
        else
            setMonth(month - 1);
    }, [month]);
    useEffect(() => {
        // Set date when selected change
        const _date = selected ? wDate.identifyDate(selected) : new Date();
        setDateSelected(_date);
    }, [selected]);
    return (React.createElement(CalendarWrap, { noSelect: noSelect },
        React.createElement(CalendarTop, null,
            React.createElement("tr", null,
                React.createElement("th", { colSpan: 5 },
                    wDate.getMonthFull(month),
                    ",",
                    year),
                React.createElement("th", null,
                    React.createElement(ButtonAction, { label: 'Previous', action: previousMonth },
                        React.createElement(Icon, { icon: 'i-arrow-left' }))),
                React.createElement("th", null,
                    React.createElement(ButtonAction, { label: 'Next', action: nextMonth },
                        React.createElement(Icon, { icon: 'i-arrow-right' }))))),
        React.createElement("tbody", null,
            React.createElement(CalendarHead, null,
                React.createElement("td", null, wDate.getWeekdayShort(7)),
                React.createElement("td", null, wDate.getWeekdayShort(1)),
                React.createElement("td", null, wDate.getWeekdayShort(2)),
                React.createElement("td", null, wDate.getWeekdayShort(3)),
                React.createElement("td", null, wDate.getWeekdayShort(4)),
                React.createElement("td", null, wDate.getWeekdayShort(5)),
                React.createElement("td", null, wDate.getWeekdayShort(6))),
            divideArrayToCalendar(pushIntoArray()))));
});

export { index as default };
//# sourceMappingURL=index.js.map
