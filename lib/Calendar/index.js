'use strict';

var _style = require('../_style-477b7a7c.js');
var React = require('react');
var ButtonAction = require('../ButtonAction-7441ef33.js');
var Icon = require('../Icon-b6bdc54f.js');
var index$1 = require('../index-4b1ec35a.js');
require('../_lineOverflow-0611c7f0.js');
require('styled-components');
require('../index-f0e3963b.js');
require('../useHandleDisplay-16f1a228.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Calendar component
 * @prop {date object | string format date} selected
 * @prop {function} fnSelected - params of function is {array[MM, DD, YYYY]}
 */
var index = React__default["default"].memo(({ selected, fnSelected, period = 'date', noSelect = false, disableItem }) => {
    const now = React.useMemo(() => new Date(), []);
    const [month, setMonth] = React.useState(now.getMonth()); // Use format 0-11
    const [year, setYear] = React.useState(now.getFullYear());
    // Date selected
    const [dateSelected, setDateSelected] = React.useState(selected ? index$1.wDate.identifyDate(selected) : new Date());
    /**
     * @param {event} e
     */
    const selectDate = React.useCallback((e) => {
        if (!noSelect) {
            let date_selected = e.currentTarget
                ? e.currentTarget.getAttribute('data-date')
                : e; // Format : MM-DD-YYYY;
            date_selected = index$1.wDate.identifyDate(date_selected);
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
    const checkedSelectedDateFollowPeriod = React.useCallback((index, month, year) => {
        let checked = false;
        const _dateSelected = dateSelected;
        switch (period) {
            case 'week':
                checked =
                    index$1.wDate.getWeek(_dateSelected) ===
                        index$1.wDate.getWeek(`${month + 1}-${index}-${year}`);
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
    const pushIntoArray = React.useCallback(() => {
        const select = new Date();
        select.setMonth(month);
        select.setFullYear(year);
        const numberOfDates = index$1.wDate.amountDateInMonth(month + 1, year), firstDay = index$1.wDate.firstWeekdayInMonth(select), html = [];
        let index = 1, indexNext = 1, indexPrev = index$1.wDate.numberOfDays(index$1.wDate.previousMonth(select)) - firstDay + 1;
        for (let row = 0; row < 7; row++) {
            for (let col = 0; col < 6; col++) {
                /**
                 * TODO Print dates in last month
                 * Check where first date in month and print dates in last month
                 */
                if (row === 0 && col < firstDay) {
                    const _dateString = `${month === 0 ? 12 : month}-${indexPrev}-${month === 0 ? year - 1 : year}`;
                    html.push(React__default["default"].createElement(_style.CalendarDate, { className: checkedSelectedDateFollowPeriod(indexPrev, month === 0 ? 11 : month - 1, month === 0 ? year - 1 : year)
                            ? 'selected'
                            : '', onClick: selectDate, "data-date": _dateString, key: 7 * row + col, notInMonth: true, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateString) },
                        React__default["default"].createElement("li", null, indexPrev++)));
                }
                /**
                 * TODO Print dates in next month
                 * Check where index is bigger number of date
                 */
                else if (row > 0 && index > numberOfDates) {
                    const _dateStr = `${month === 11 ? 1 : month + 2}-${indexNext}-${month === 11 ? year + 1 : year}`;
                    html.push(React__default["default"].createElement(_style.CalendarDate, { className: checkedSelectedDateFollowPeriod(indexNext, month === 11 ? 0 : month + 1, month === 11 ? year + 1 : year)
                            ? 'selected'
                            : '', onClick: selectDate, "data-date": _dateStr, key: 7 * row + col, notInMonth: true, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React__default["default"].createElement("li", null, indexNext++)));
                }
                /**
                 * TODO Print date was selected
                 */
                else {
                    const _dateStr = `${month + 1}-${index}-${year}`;
                    html.push(React__default["default"].createElement(_style.CalendarDate, { className: checkedSelectedDateFollowPeriod(index, month, year)
                            ? 'selected'
                            : '', now: index === now.getDate() &&
                            month === now.getMonth() &&
                            year === now.getFullYear(), "data-date": _dateStr, onClick: selectDate, key: 7 * row + col, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React__default["default"].createElement("li", null, index++)));
                }
            }
        }
        return html;
    }, [month, year, checkedSelectedDateFollowPeriod, selectDate, now, disableItem]);
    /**
     * Divide list html date to two-dimensional array
     */
    const divideArrayToCalendar = React.useCallback((arr) => {
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
        return rows.map((row, key) => React__default["default"].createElement("tr", { key: key }, row));
    }, []);
    // Next month
    const nextMonth = React.useCallback(() => {
        if (month === 11) {
            setYear((year) => year + 1);
            setMonth(0);
        }
        else
            setMonth(month + 1);
    }, [month]);
    // Previous month
    const previousMonth = React.useCallback(() => {
        if (month === 0) {
            setYear((year) => year - 1);
            setMonth(11);
        }
        else
            setMonth(month - 1);
    }, [month]);
    React.useEffect(() => {
        // Set date when selected change
        const _date = selected ? index$1.wDate.identifyDate(selected) : new Date();
        setDateSelected(_date);
    }, [selected]);
    return (React__default["default"].createElement(_style.CalendarWrap, { noSelect: noSelect },
        React__default["default"].createElement(_style.CalendarTop, null,
            React__default["default"].createElement("tr", null,
                React__default["default"].createElement("th", { colSpan: 5 },
                    index$1.wDate.getMonthFull(month),
                    ",",
                    year),
                React__default["default"].createElement("th", null,
                    React__default["default"].createElement(ButtonAction.ButtonAction, { label: 'Previous', action: previousMonth },
                        React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-left' }))),
                React__default["default"].createElement("th", null,
                    React__default["default"].createElement(ButtonAction.ButtonAction, { label: 'Next', action: nextMonth },
                        React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-right' }))))),
        React__default["default"].createElement("tbody", null,
            React__default["default"].createElement(_style.CalendarHead, null,
                React__default["default"].createElement("td", null, index$1.wDate.getWeekdayShort(7)),
                React__default["default"].createElement("td", null, index$1.wDate.getWeekdayShort(1)),
                React__default["default"].createElement("td", null, index$1.wDate.getWeekdayShort(2)),
                React__default["default"].createElement("td", null, index$1.wDate.getWeekdayShort(3)),
                React__default["default"].createElement("td", null, index$1.wDate.getWeekdayShort(4)),
                React__default["default"].createElement("td", null, index$1.wDate.getWeekdayShort(5)),
                React__default["default"].createElement("td", null, index$1.wDate.getWeekdayShort(6))),
            divideArrayToCalendar(pushIntoArray()))));
});

module.exports = index;
