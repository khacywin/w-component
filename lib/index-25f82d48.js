'use strict';

var _lineOverflow = require('./_lineOverflow-b8a457d2.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const CalendarWrap = styled__default["default"].table `
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
const CalendarTop = styled__default["default"].thead `
  ${_lineOverflow.big};
  text-align: left;
  th {
    text-indent: 10px;
  }
`;
const CalendarHead = styled__default["default"].tr `
  ${_lineOverflow.semiBold};
  text-align: center;
  height: 34px;
`;
const CalendarDate = styled__default["default"].td `
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

var full$1 = [
	{
		vi: "Tháng 1",
		en: "January"
	},
	{
		vi: "Tháng 2",
		en: "February"
	},
	{
		vi: "Tháng 3",
		en: "March"
	},
	{
		vi: "Tháng 4",
		en: "April"
	},
	{
		vi: "Tháng 5",
		en: "May"
	},
	{
		vi: "Tháng 6",
		en: "June"
	},
	{
		vi: "Tháng 7",
		en: "July"
	},
	{
		vi: "Tháng 8",
		en: "August"
	},
	{
		vi: "Tháng 9",
		en: "September"
	},
	{
		vi: "Tháng 10",
		en: "October"
	},
	{
		vi: "Tháng 11",
		en: "November"
	},
	{
		vi: "Tháng 12",
		en: "December"
	}
];
var short$1 = [
	{
		vi: "Th1",
		en: "Jan"
	},
	{
		vi: "Th2",
		en: "Feb"
	},
	{
		vi: "Th3",
		en: "Mar"
	},
	{
		vi: "Th4",
		en: "Apr"
	},
	{
		vi: "Th5",
		en: "May"
	},
	{
		vi: "Th6",
		en: "Jun"
	},
	{
		vi: "Th7",
		en: "Jul"
	},
	{
		vi: "Th8",
		en: "Aug"
	},
	{
		vi: "Th9",
		en: "Sep"
	},
	{
		vi: "Th10",
		en: "Oct"
	},
	{
		vi: "Th11",
		en: "Nov"
	},
	{
		vi: "Th12",
		en: "Dec"
	}
];
var month = {
	full: full$1,
	short: short$1
};

var month$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  full: full$1,
  short: short$1,
  'default': month
});

var full = [
	{
	},
	{
		vi: "Thứ hai",
		en: "Monday"
	},
	{
		vi: "Thứ ba",
		en: "Tuesday"
	},
	{
		vi: "Thứ tư",
		en: "Wednesday"
	},
	{
		vi: "Thứ năm",
		en: "Thursday"
	},
	{
		vi: "Thứ sáu",
		en: "Friday"
	},
	{
		vi: "Thứ bảy",
		en: "Saturday"
	},
	{
		vi: "Chủ nhật",
		en: "Sunday"
	}
];
var short = [
	{
	},
	{
		vi: "T2",
		en: "Mo"
	},
	{
		vi: "T3",
		en: "Tu"
	},
	{
		vi: "T4",
		en: "We"
	},
	{
		vi: "T5",
		en: "Th"
	},
	{
		vi: "T6",
		en: "Fr"
	},
	{
		vi: "T7",
		en: "Sa"
	},
	{
		vi: "CN",
		en: "Su"
	}
];
var weekday = {
	full: full,
	short: short
};

var weekday$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  full: full,
  short: short,
  'default': weekday
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var data_month = getCjsExportFromNamespace(month$1);

var data_weekday = getCjsExportFromNamespace(weekday$1);

/*****
 * DATE
 * Functions for date
 * @param {YYYY-MM-DD | MM-DD-YYYY | object} date - object date | string can convert to object date
 * @param {number} month - format follow of date object [0-11]
 * @param {number} week - format follow of date object
 */




/**
 * TODO
 * Get month format full
 *
 * @param {number} month
 * @param {'vi' | 'en'} region
 */
const getMonthFull = (month, region = "en") => {
  return data_month["full"][month][region];
};
var getMonthFull_1 = getMonthFull;

/**
 * TODO
 * Get month format short
 *
 * @param {number} month
 * @param {'vi' | 'en'} region
 */
const getMonthShort = (month, region = "en") => {
  return data_month["short"][month][region];
};
var getMonthShort_1 = getMonthShort;

/**
 * TODO
 * Get week day format full
 *
 * @param {number} weekday
 * @param {'vi' | 'en'} region
 */
const getWeekdayFull = (weekday, region = "en") => {
  return data_weekday["full"][weekday][region];
};
var getWeekdayFull_1 = getWeekdayFull;

/**
 * TODO
 * Get week day format short
 *
 * @param {number} weekday
 * @param {'vi' | 'en'} region
 */
const getWeekdayShort = (weekday, region = "en") => {
  return data_weekday["short"][weekday][region];
};
var getWeekdayShort_1 = getWeekdayShort;

/***
 * TODO
 * Identify date object
 *
 * @param {string | object} date
 * @return {Object}
 */
const identifyDate = (date) => {
  return new Date(date);
};
var identifyDate_1 = identifyDate;

/***
 * TODO
 * Get date in now
 *
 * @return {Object}
 */
var now = () => {
  return new Date();
};

/***
 * TODO
 * Cover time
 * If value is smaller 10, it will add '0' before value
 *
 * @param {string} time
 * @return {Object}
 */
function coverTime(time) {
  return time < 10 ? "0" + time : time;
}

/***
 * TODO
 * Format date following VI or EN
 *
 * @param {date} date
 * @param {
 * 'YYYY-MM-DD' |
 * 'DD-MM-YYYY' |
 * 'MM-DD-YYYY' |
 * 'DD ThMM,YYYY' |
 * 'DD ThangMM,YYYY' |
 * 'DD MMMM,YYYY' |
 * 'DD MMM,YYYY' |
 * 'WW MMM DD,YYYY' |
 * 'WWWW MMMM DD,YYYY' |
 * 'TT DD ThMM,YYYY' |
 * 'Thu, DD ThangMM,YYYY' |
 * 'hh:mm:ss' |
 * 'hh:mm' |
 * 'DD ThMM,YYYY hh:mm' |
 * 'DD ThMM,YYYY hh:mm:ss' |
 * 'DD MMM,YYYY hh:mm' |
 * 'DD MMM,YYYY hh:mm:ss' |
 * 'DD MMMM,YYYY hh:mm' |
 * 'DD MMMM,YYYY hh:mm:ss' |
 * 'WW MMM DD,YYYY' hh:mm' |
 * 'WW MMM DD,YYYY' hh:mm:ss' |
 * 'WWWW MMMM DD,YYYY' hh:mm' |
 * 'WWWW MMMM DD,YYYY' hh:mm:ss' |
 * 'DD MMMM,YYYY hh:mm' |
 * 'DD MMMM,YYYY hh:mm:ss' |
 * 'TT DD ThMM,YYYY hh:mm' |
 * 'TT DD ThMM,YYYY hh:mm:ss' |
 * 'Thu, DD ThangMM,YYYY hh:mm' |
 * 'Thu, DD ThangMM,YYYY hh:mm:ss' |
 * } format - YYYY, MM, DD must uppercase
 * @return {string} string of date
 */
const format = (date, format = "YYYY-MM-DD") => {
  date = identifyDate(date);
  let strDate = format;
  strDate = strDate.replace(/WWWW/g, getWeekdayFull(date.getDay()));
  strDate = strDate.replace(/WW/g, getWeekdayShort(date.getDay()));
  strDate = strDate.replace(/Thu/g, getWeekdayFull(date.getDay(), "vi"));
  strDate = strDate.replace(/TT/g, getWeekdayShort(date.getDay(), "vi"));
  strDate = strDate.replace(/YYYY/g, date.getFullYear());
  strDate = strDate.replace(/YYYY/g, date.getFullYear());
  strDate = strDate.replace(/ThMM/g, "Th" + (date.getMonth() + 1));
  strDate = strDate.replace(/ThangMM/g, getMonthFull(date.getMonth(), "vi"));
  strDate = strDate.replace(/MMMM/g, getMonthFull(date.getMonth()));
  strDate = strDate.replace(/MMM/g, getMonthShort(date.getMonth()));
  strDate = strDate.replace(/MM/g, coverTime(date.getMonth() + 1));
  strDate = strDate.replace(/DD/g, coverTime(date.getDate()));
  strDate = strDate.replace(/hh/g, coverTime(date.getHours()));
  strDate = strDate.replace(/mm/g, coverTime(date.getMinutes()));
  strDate = strDate.replace(/ss/g, coverTime(date.getSeconds()));

  return strDate;
};
var format_1 = format;

/***
 * TODO
 * Get date in month
 *
 * @param {date} date which get
 * @return {number}
 */
const numberOfDays = (date) => {
  date = identifyDate(date);
  let month = date.getMonth(),
    year = date.getFullYear();
  if (month === 1) {
    if (year % 4 === 0 || year % 400 === 0) return 29;
    else return 28;
  }
  if (
    month === 0 ||
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 7 ||
    month === 9 ||
    month === 11
  )
    return 31;
  else return 30;
};
var numberOfDays_1 = numberOfDays;

/***
 * TODO
 * Get first week day in month
 *
 * @param {date} date which get
 * @return {number} weekday
 */
var firstWeekdayInMonth = (date) => {
  let dt = identifyDate(date);
  dt.setDate(1);
  return dt.getDay();
};

/***
 * TODO
 * Get date in next month
 *
 * @param {date} date which get
 * @return {Date}
 */
var nextMonth = (date) => {
  let dt = identifyDate(date);
  dt.setMonth(dt.getMonth() + 1);
  return dt;
};

/***
 * TODO
 * Get date in previous month
 *
 * @param {date} date which get
 * @return {Date}
 */
var previousMonth = (date) => {
  let dt = identifyDate(date);
  dt.setMonth(dt.getMonth() - 1);
  return dt;
};

/***
 * TODO
 * Calc weak in year
 *
 * @param {date} date
 * @return {number}
 */
const getWeek = (date) => {
  let dt = identifyDate(date);
  let month = dt.getMonth();
  let sum = dt.getDate();

  for (let i = 0; i < month; i++) {
    sum += numberOfDays(month);
  }

  return Math.floor((sum - dt.getDay()) / 7) + 1;
};
var getWeek_1 = getWeek;

/***
 * TODO
 * Check now
 *
 * @param {date} date
 * @return {boolean}
 */
var checkNow = (date) => {
  let dt = identifyDate(date);
  let now = new Date();
  return (
    dt.getFullYear() === now.getFullYear() &&
    dt.getMonth() === now.getMonth() &&
    dt.getDate() === now.getDate()
  );
};

/***
 * TODO
 * Difference
 *
 * @param {date} date1
 * @param {date} date2
 */
var inTogetherWeek = (date1, date2) => {
  let _date1 = new Date(date1);
  let _date2 = new Date(date2);

  return getWeek(_date1) === getWeek(_date2);
};

/***
 * TODO
 * Get amount of date in month
 *
 * @param {number} date1
 */
const amountDateInMonth = (month, year = 1) => {
  if (month === 2) {
    if (year % 4 === 0 || year % 400 === 0) return 29;
    else return 28;
  }
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  )
    return 31;
  else return 30;
};
var amountDateInMonth_1 = amountDateInMonth;

/**
 * TODO
 * Get date in year
 */
const amountDateInYear = (year) => {
  if (year % 4 === 0 || year % 400 === 0) return 366;
  else return 365;
};
var amountDateInYear_1 = amountDateInYear;

/***
 * TODO
 * Difference
 *
 * @param {date} date1
 * @param {date} date2
 * @param {year|month|date} option
 */
const amountOfDate = (date) => {
  const y = date.getFullYear();
  const m = date.getMonth();
  let total = date.getDate();
  for (let i = 1900; i < y; i++) {
    total += amountDateInYear(i);
  }

  for (let i = 0; i < m; i++) {
    total += amountDateInMonth(i + 1);
  }

  return total;
};

const amountOfMonth = (date) => {
  const y = date.getFullYear();
  let total = date.getMonth();
  for (let i = 1900; i < y; i++) {
    total += amountDateInYear(i);
  }

  return total;
};
var diff = (date1, date2, option) => {
  let _date1 = new Date(date1);
  let _date2 = new Date(date2);

  switch (option) {
    case "date":
      return amountOfDate(_date1) - amountOfDate(_date2);

    case "month":
      return amountOfMonth(_date1) - amountOfMonth(_date2) - 1;

    case "year":
      return _date1.getFullYear() - _date2.getFullYear() - 1;
  }
};

var wDate = {
	getMonthFull: getMonthFull_1,
	getMonthShort: getMonthShort_1,
	getWeekdayFull: getWeekdayFull_1,
	getWeekdayShort: getWeekdayShort_1,
	identifyDate: identifyDate_1,
	now: now,
	format: format_1,
	numberOfDays: numberOfDays_1,
	firstWeekdayInMonth: firstWeekdayInMonth,
	nextMonth: nextMonth,
	previousMonth: previousMonth,
	getWeek: getWeek_1,
	checkNow: checkNow,
	inTogetherWeek: inTogetherWeek,
	amountDateInMonth: amountDateInMonth_1,
	amountDateInYear: amountDateInYear_1,
	diff: diff
};

exports.CalendarDate = CalendarDate;
exports.CalendarHead = CalendarHead;
exports.CalendarTop = CalendarTop;
exports.CalendarWrap = CalendarWrap;
exports.commonjsGlobal = commonjsGlobal;
exports.createCommonjsModule = createCommonjsModule;
exports.wDate = wDate;
