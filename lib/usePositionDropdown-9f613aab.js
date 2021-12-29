'use strict';

var _style = require('./_style-8674a101.js');
var React = require('react');
var ButtonAction = require('./ButtonAction-1bcd2a25.js');
var Icon = require('./Icon-b6bdc54f.js');
var index = require('./index-4b1ec35a.js');
var _lineOverflow = require('./_lineOverflow-b8a457d2.js');
var clockFace = require('./clock-face-00da2ca7.js');
var generatedId = require('./generatedId-3779176c.js');
var styled = require('styled-components');
var index$1 = require('./index-f0e3963b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * Calendar component
 * @prop {date object | string format date} selected
 * @prop {function} fnSelected - params of function is {array[MM, DD, YYYY]}
 */
var Calendar = React__default["default"].memo(({ selected, fnSelected, period = 'date', noSelect = false, disableItem }) => {
    const now = React.useMemo(() => new Date(), []);
    const [month, setMonth] = React.useState(now.getMonth()); // Use format 0-11
    const [year, setYear] = React.useState(now.getFullYear());
    // Date selected
    const [dateSelected, setDateSelected] = React.useState(selected ? index.wDate.identifyDate(selected) : new Date());
    /**
     * @param {event} e
     */
    const selectDate = React.useCallback((e) => {
        if (!noSelect) {
            let date_selected = e.currentTarget
                ? e.currentTarget.getAttribute('data-date')
                : e; // Format : MM-DD-YYYY;
            date_selected = index.wDate.identifyDate(date_selected);
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
    const checkedSelectedDateFollowPeriod = React.useCallback((index$1, month, year) => {
        let checked = false;
        const _dateSelected = dateSelected;
        switch (period) {
            case 'week':
                checked =
                    index.wDate.getWeek(_dateSelected) ===
                        index.wDate.getWeek(`${month + 1}-${index$1}-${year}`);
                break;
            case 'month':
                checked = _dateSelected.getMonth() === month;
                break;
            default:
                checked =
                    index$1 === _dateSelected.getDate() &&
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
        const numberOfDates = index.wDate.amountDateInMonth(month + 1, year), firstDay = index.wDate.firstWeekdayInMonth(select), html = [];
        let index$1 = 1, indexNext = 1, indexPrev = index.wDate.numberOfDays(index.wDate.previousMonth(select)) - firstDay + 1;
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
                else if (row > 0 && index$1 > numberOfDates) {
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
                    const _dateStr = `${month + 1}-${index$1}-${year}`;
                    html.push(React__default["default"].createElement(_style.CalendarDate, { className: checkedSelectedDateFollowPeriod(index$1, month, year)
                            ? 'selected'
                            : '', now: index$1 === now.getDate() &&
                            month === now.getMonth() &&
                            year === now.getFullYear(), "data-date": _dateStr, onClick: selectDate, key: 7 * row + col, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React__default["default"].createElement("li", null, index$1++)));
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
        const _date = selected ? index.wDate.identifyDate(selected) : new Date();
        setDateSelected(_date);
    }, [selected]);
    return (React__default["default"].createElement(_style.CalendarWrap, { noSelect: noSelect },
        React__default["default"].createElement(_style.CalendarTop, null,
            React__default["default"].createElement("tr", null,
                React__default["default"].createElement("th", { colSpan: 5 },
                    index.wDate.getMonthFull(month),
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
                React__default["default"].createElement("td", null, index.wDate.getWeekdayShort(7)),
                React__default["default"].createElement("td", null, index.wDate.getWeekdayShort(1)),
                React__default["default"].createElement("td", null, index.wDate.getWeekdayShort(2)),
                React__default["default"].createElement("td", null, index.wDate.getWeekdayShort(3)),
                React__default["default"].createElement("td", null, index.wDate.getWeekdayShort(4)),
                React__default["default"].createElement("td", null, index.wDate.getWeekdayShort(5)),
                React__default["default"].createElement("td", null, index.wDate.getWeekdayShort(6))),
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
            const _time = selected ? index.wDate.identifyDate(selected) : index.wDate.now();
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
  ${index$1.transition.linear};
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

var dayjs_min = index.createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(index.commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
});

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
exports.dayjs_min = dayjs_min;
exports.useMutationObservable = useMutationObservable;
exports.usePositionDropdown = usePositionDropdown;
