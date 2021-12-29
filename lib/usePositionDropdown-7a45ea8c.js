'use strict';

var weekOfYear = require('./weekOfYear-3a23eaca.js');
var React = require('react');
var ButtonAction = require('./ButtonAction-1bcd2a25.js');
var Icon = require('./Icon-b6bdc54f.js');
var _lineOverflow = require('./_lineOverflow-b8a457d2.js');
var clockFace = require('./clock-face-00da2ca7.js');
var generatedId = require('./generatedId-3779176c.js');
var styled = require('styled-components');
var index = require('./index-f0e3963b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

weekOfYear.dayjs_min.extend(weekOfYear.weekOfYear);
/**
 * Calendar component
 * @prop {date object | string format date} selected
 * @prop {function} fnSelected - params of function is {array[MM, DD, YYYY]}
 */
var Calendar = React__default["default"].memo(({ selected, fnSelected, period = "date", noSelect = false, disableItem, }) => {
    const now = React.useMemo(() => new Date(), []);
    const [month, setMonth] = React.useState(now.getMonth()); // Use format 0-11
    const [year, setYear] = React.useState(now.getFullYear());
    // Date selected
    const [dateSelected, setDateSelected] = React.useState(selected ? new Date(selected) : new Date());
    /**
     * @param {event} e
     */
    const selectDate = React.useCallback((e) => {
        if (!noSelect) {
            let date_selected = e.currentTarget
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
    }, [fnSelected, month, noSelect]);
    const checkedSelectedDateFollowPeriod = React.useCallback((index, month, year) => {
        let checked = false;
        const _dateSelected = dateSelected;
        switch (period) {
            case "week":
                checked =
                    weekOfYear.dayjs_min(_dateSelected).week() ===
                        weekOfYear.dayjs_min(`${year}/${month + 1}/${index}`).week();
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
    }, [period, dateSelected]);
    /**
     * Create array date of
     */
    const pushIntoArray = React.useCallback(() => {
        const select = new Date();
        select.setMonth(month);
        select.setFullYear(year);
        const numberOfDates = weekOfYear.dayjs_min(`${year}/${month + 1}`).daysInMonth(), firstDay = weekOfYear.dayjs_min(select).startOf("month").get("d"), html = [];
        let index = 1, indexNext = 1, indexPrev = weekOfYear.dayjs_min(weekOfYear.dayjs_min(select).subtract(1, "month")).daysInMonth() -
            firstDay +
            1;
        for (let row = 0; row < 7; row++) {
            for (let col = 0; col < 6; col++) {
                /**
                 * TODO Print dates in last month
                 * Check where first date in month and print dates in last month
                 */
                if (row === 0 && col < firstDay) {
                    const _dateString = `${month === 0 ? 12 : month}-${indexPrev}-${month === 0 ? year - 1 : year}`;
                    html.push(React__default["default"].createElement(weekOfYear.CalendarDate, { className: checkedSelectedDateFollowPeriod(indexPrev, month === 0 ? 11 : month - 1, month === 0 ? year - 1 : year)
                            ? "selected"
                            : "", onClick: selectDate, "data-date": _dateString, key: 7 * row + col, notInMonth: true, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateString) },
                        React__default["default"].createElement("li", null, indexPrev++)));
                }
                else if (row > 0 && index > numberOfDates) {
                    /**
                     * TODO Print dates in next month
                     * Check where index is bigger number of date
                     */
                    const _dateStr = `${month === 11 ? 1 : month + 2}-${indexNext}-${month === 11 ? year + 1 : year}`;
                    html.push(React__default["default"].createElement(weekOfYear.CalendarDate, { className: checkedSelectedDateFollowPeriod(indexNext, month === 11 ? 0 : month + 1, month === 11 ? year + 1 : year)
                            ? "selected"
                            : "", onClick: selectDate, "data-date": _dateStr, key: 7 * row + col, notInMonth: true, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React__default["default"].createElement("li", null, indexNext++)));
                }
                else {
                    /**
                     * TODO Print date was selected
                     */
                    const _dateStr = `${month + 1}-${index}-${year}`;
                    html.push(React__default["default"].createElement(weekOfYear.CalendarDate, { className: checkedSelectedDateFollowPeriod(index, month, year)
                            ? "selected"
                            : "", now: index === now.getDate() &&
                            month === now.getMonth() &&
                            year === now.getFullYear(), "data-date": _dateStr, onClick: selectDate, key: 7 * row + col, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React__default["default"].createElement("li", null, index++)));
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
        const _date = selected ? new Date(selected) : new Date();
        setDateSelected(_date);
    }, [selected]);
    return (React__default["default"].createElement(weekOfYear.CalendarWrap, { noSelect: noSelect },
        React__default["default"].createElement(weekOfYear.CalendarTop, null,
            React__default["default"].createElement("tr", null,
                React__default["default"].createElement("th", { colSpan: 5 },
                    weekOfYear.dayjs_min(`${year}/${month + 1}`).format("MMMM"),
                    ",",
                    year),
                React__default["default"].createElement("th", null,
                    React__default["default"].createElement(ButtonAction.ButtonAction, { label: "Previous", action: previousMonth },
                        React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-left" }))),
                React__default["default"].createElement("th", null,
                    React__default["default"].createElement(ButtonAction.ButtonAction, { label: "Next", action: nextMonth },
                        React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-right" }))))),
        React__default["default"].createElement("tbody", null,
            React__default["default"].createElement(weekOfYear.CalendarHead, null,
                React__default["default"].createElement("td", null, "Sun"),
                React__default["default"].createElement("td", null, "Mon"),
                React__default["default"].createElement("td", null, "Tue"),
                React__default["default"].createElement("td", null, "Wed"),
                React__default["default"].createElement("td", null, "Thu"),
                React__default["default"].createElement("td", null, "Fri"),
                React__default["default"].createElement("td", null, "Sat")),
            divideArrayToCalendar(pushIntoArray()))));
});

/**
 * @prop {string} selected
 * @prop {(time: [number, number]) => void} fnSelected
 */
var Clock = React__default["default"].memo(({ selected, fnSelected }) => {
    const [minute, setMinute] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    /**
     * @param _hour
     */
    const changeHour = React.useCallback((_hour) => {
        setHour(_hour);
        fnSelected === null || fnSelected === void 0 ? void 0 : fnSelected([_hour, minute]);
    }, [fnSelected, minute]);
    /**
     * @param _minute
     */
    const changeMinute = React.useCallback((_minute) => {
        setMinute(_minute);
        fnSelected === null || fnSelected === void 0 ? void 0 : fnSelected([hour, _minute]);
    }, [fnSelected, hour]);
    /**
     * TODO
     * Set value
     */
    const setValue = React.useCallback((val, max) => {
        if (max === 23) {
            if (val === -1)
                changeHour(max);
            else if (val === max + 1)
                changeHour(1);
            else
                changeHour(val);
        }
        else {
            if (val === -1)
                changeMinute(max);
            else if (val === max + 1)
                changeMinute(1);
            else
                changeMinute(val);
        }
    }, [changeHour, changeMinute]);
    /**
     * Print list
     * @param {number} val
     * @param {60| 24} max
     */
    const lists = React.useCallback((val = 1, max) => {
        const id = generatedId.generatedId("list");
        const arr = []; // contains list elements
        const start = val - 2 >= 0 ? val - 2 : 0;
        const _max = val + 2 <= max ? val + 2 : max;
        // Previous time
        if (val < 3) {
            for (let index = max + val - 1; index <= max; index++) {
                arr.push(React__default["default"].createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
            }
        }
        /** Push time */
        for (let index = start; index <= _max; index++) {
            if (index === val)
                arr.push(React__default["default"].createElement(ClockTimeListsValue, { key: `${id}-${index}` }, index < 10 ? `0${index}` : index));
            else
                arr.push(React__default["default"].createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
        }
        // Previous time
        if (val > max - 2) {
            for (let index = 0; index <= val + 1 - max; index++) {
                arr.push(React__default["default"].createElement("li", { key: `${id}-${index}`, onClick: () => setValue(index, max) }, index < 10 ? `0${index}` : index));
            }
        }
        /**
         * TODO
         * Add arrow change list
         */
        arr.unshift(React__default["default"].createElement("div", { key: `${id}-up`, onClick: () => setValue(val - 1, max) },
            React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-up", small: true })));
        arr.push(React__default["default"].createElement("div", { key: `${id}-down`, onClick: () => setValue(val + 1, max) },
            React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-down", small: true })));
        return React__default["default"].createElement(React__default["default"].Fragment, null, arr.map((item) => item));
    }, [setValue]);
    React.useEffect(() => {
        if (!selected)
            return;
        if (typeof selected === "string") {
            const _time = selected.split(":");
            setMinute(+_time[1] || 0);
            setHour(+_time[0] || 0);
        }
        else {
            const _time = selected ? new Date(selected) : new Date();
            setMinute(_time.getMinutes());
            setHour(_time.getHours());
        }
    }, [selected]);
    return (React__default["default"].createElement(ClockWrap, null,
        React__default["default"].createElement("input", { type: "hidden" }),
        React__default["default"].createElement(ClockAnalog, { minutes: minute, hours: hour % 12 },
            React__default["default"].createElement("img", { src: clockFace.img, alt: "w-mtime" }),
            React__default["default"].createElement("div", null),
            React__default["default"].createElement("div", null),
            React__default["default"].createElement("div", null)),
        React__default["default"].createElement(ClockTime, null,
            React__default["default"].createElement(ClockTimeItem, null,
                React__default["default"].createElement(ClockTimeValue, null, hour < 10 ? `0${hour}` : hour),
                React__default["default"].createElement(ClockTimeLists, null, lists(hour, 23))),
            React__default["default"].createElement("span", null, " : "),
            React__default["default"].createElement(ClockTimeItem, null,
                React__default["default"].createElement(ClockTimeValue, null, minute < 10 ? `0${minute}` : minute),
                React__default["default"].createElement(ClockTimeLists, null, lists(minute, 59))))));
});
const ClockWrap = styled__default["default"].div `
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ClockAnalog = styled__default["default"].div `
  background-size: cover;
  border-radius: 50%;
  height: 200px;
  position: relative;
  width: 200px;
  

  img {
    width: 100%;
    height: 100%;
  }

  div:first-of-type {
    background-color: var(--dark);
    height: 20%;
    left: calc(50% - 1px);
    position: absolute;
    top: 30%;
    transform-origin: calc(100% - 1px) calc(100% - 1px);
    transform: ${(props) => `rotate(${props.hours * 30 + props.minutes * 0.5}deg)`};
    width: 2px;
  }

  div:last-of-type {
    background-color: var(--dark);
    height: 30%;
    left: calc(50% - 0.5px);
    position: absolute;
    top: 20%;
    transform-origin: calc(100% - 0.5px) calc(100% - 0.5px);
    transform: ${(props) => `rotate(${props.minutes * 6}deg)`};
    width: 1px;
  }

  div:nth-of-type(2) {
    background-color: var(--dark);
    border-radius: 50%;
    height: 5px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 5px;
  }
`;
const ClockTimeItem = styled__default["default"].div `
  position: relative;
`;
const ClockTimeValue = styled__default["default"].div `
  ${_lineOverflow.big};
  ${_lineOverflow.P4.x};
  ${_lineOverflow.P2.y};
  cursor: pointer;
`;
const ClockTimeLists = styled__default["default"].ul `
  background-color: var(--backgroundContent);
  height: auto;
  left: 0;
  position: absolute;
  text-align: center;
  top: -337%;
  transform: scaleY(0);
  transition-property: transform;
  width: 100%;
  ${index.transition.linear};
  ${_lineOverflow.normal};
  ${_lineOverflow.P1.a};
  ${_lineOverflow.front_5};
  ${_lineOverflow.normal$1};

  & > li {
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: space-around;
    list-style: none;
    user-select: none;
    width: 100%;
    ${_lineOverflow.P2.a};
    ${_lineOverflow.M1.y};
    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }

  & > div {
    cursor: pointer;
  }
`;
const ClockTimeListsValue = styled__default["default"].div `
  background-color: var(--default);
  cursor: pointer;
  height: 30px;
  left: 50%;
  line-height: 30px;
  position: relative;
  transform: translate(-50%, 0);
  width: 150%;
  ${_lineOverflow.normal};
`;
const ClockTime = styled__default["default"].div `
  align-items: center;
  display: flex;
  ${_lineOverflow.M3.t};

  span {
    ${_lineOverflow.M2.x};
  }

  &:hover ${ClockTimeLists} {
    transform: scaleY(1);
  }
`;

const DEFAULT_OPTIONS = {
    config: { attributes: true, childList: true, subtree: true },
};
function useMutationObservable(targetEl, cb, options = DEFAULT_OPTIONS) {
    const [observer, setObserver] = React.useState(null);
    React.useEffect(() => {
        const obs = new IntersectionObserver(cb);
        setObserver(obs);
    }, [cb, options, setObserver]);
    React.useEffect(() => {
        if (!observer)
            return;
        const { config } = options;
        observer.observe(targetEl, config);
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [observer, targetEl, options]);
}

function usePositionDropdown(ref) {
    // Get position of screen
    const pScreen = React.useMemo(() => {
        return {
            x: 0,
            y: 0,
            height: window.innerHeight,
            width: window.innerWidth,
        };
    }, []);
    const _handlePosition = React.useCallback((add) => {
        const posElement = ref.current.getBoundingClientRect();
        let transformOriginX = 'left';
        let transformOriginY = 'top';
        let translateX = 0, translateY = 0;
        if (add) {
            translateX += add.left || 0;
            translateX += -add.right || 0;
            translateY += -add.bottom || 0;
            translateY += -add.top || 0;
        }
        if (posElement.x < 0) {
            translateX += -posElement.x + 10;
            transformOriginX = 'left';
        }
        else if (posElement.right > pScreen.width - 10) {
            translateX += -(posElement.right - pScreen.width) - 10;
            transformOriginX = 'right';
        }
        if (posElement.top < 0) {
            translateY += -posElement.top + 10;
            transformOriginY = 'top';
        }
        else if (posElement.bottom > pScreen.height - 10) {
            transformOriginY = 'bottom';
            translateY += -(posElement.bottom - pScreen.height) - 10;
        }
        ref.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
        ref.current.style.visibility = 'visible';
        ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    }, [ref, pScreen.width, pScreen.height]);
    return {
        handlePosition: _handlePosition
    };
}

exports.Calendar = Calendar;
exports.Clock = Clock;
exports.useMutationObservable = useMutationObservable;
exports.usePositionDropdown = usePositionDropdown;
