'use strict';

var Calendar__style = require('./Calendar/_style.js');
var React = require('react');
var Button_ButtonAction = require('./Button/ButtonAction.js');
var Icon = require('./Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
});

var weekOfYear = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,!0);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)};}}));
});

dayjs_min.extend(weekOfYear);
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
                    dayjs_min(_dateSelected).week() ===
                        dayjs_min(`${year}/${month + 1}/${index}`).week();
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
        const numberOfDates = dayjs_min(`${year}/${month + 1}`).daysInMonth(), firstDay = dayjs_min(select).startOf("month").get("d"), html = [];
        let index = 1, indexNext = 1, indexPrev = dayjs_min(dayjs_min(select).subtract(1, "month")).daysInMonth() -
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
                    html.push(React__default["default"].createElement(Calendar__style.CalendarDate, { className: checkedSelectedDateFollowPeriod(indexPrev, month === 0 ? 11 : month - 1, month === 0 ? year - 1 : year)
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
                    html.push(React__default["default"].createElement(Calendar__style.CalendarDate, { className: checkedSelectedDateFollowPeriod(indexNext, month === 11 ? 0 : month + 1, month === 11 ? year + 1 : year)
                            ? "selected"
                            : "", onClick: selectDate, "data-date": _dateStr, key: 7 * row + col, notInMonth: true, disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(_dateStr) },
                        React__default["default"].createElement("li", null, indexNext++)));
                }
                else {
                    /**
                     * TODO Print date was selected
                     */
                    const _dateStr = `${month + 1}-${index}-${year}`;
                    html.push(React__default["default"].createElement(Calendar__style.CalendarDate, { className: checkedSelectedDateFollowPeriod(index, month, year)
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
    return (React__default["default"].createElement(Calendar__style.CalendarWrap, { noSelect: noSelect },
        React__default["default"].createElement(Calendar__style.CalendarTop, null,
            React__default["default"].createElement("tr", null,
                React__default["default"].createElement("th", { colSpan: 5 },
                    dayjs_min(`${year}/${month + 1}`).format("MMMM"),
                    ",",
                    year),
                React__default["default"].createElement("th", null,
                    React__default["default"].createElement(Button_ButtonAction, { label: "Previous", action: previousMonth },
                        React__default["default"].createElement(Icon, { icon: "i-arrow-left" }))),
                React__default["default"].createElement("th", null,
                    React__default["default"].createElement(Button_ButtonAction, { label: "Next", action: nextMonth },
                        React__default["default"].createElement(Icon, { icon: "i-arrow-right" }))))),
        React__default["default"].createElement("tbody", null,
            React__default["default"].createElement(Calendar__style.CalendarHead, null,
                React__default["default"].createElement("td", null, "Sun"),
                React__default["default"].createElement("td", null, "Mon"),
                React__default["default"].createElement("td", null, "Tue"),
                React__default["default"].createElement("td", null, "Wed"),
                React__default["default"].createElement("td", null, "Thu"),
                React__default["default"].createElement("td", null, "Fri"),
                React__default["default"].createElement("td", null, "Sat")),
            divideArrayToCalendar(pushIntoArray()))));
});

exports.Calendar = Calendar;
exports.dayjs_min = dayjs_min;
