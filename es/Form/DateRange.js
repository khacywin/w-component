import { L as LabelCss, c as cssFocus } from '../_FormGroup-a38ef777.js';
import React, { useMemo, useCallback } from 'react';
import { D as DatePicker } from '../index-80ed9b94.js';
import { I as Icon } from '../Icon-69b9e7b0.js';
import { d as dayjs_min } from '../dayjs.min-d1798806.js';
import styled from 'styled-components';
import '../_lineOverflow-40abb42a.js';
import '../index-8505406e.js';
import '../Other-03dd01d9.js';
import '../ButtonAction-3cf1adce.js';
import '../useHandleDisplay-fdfdebb5.js';
import '../InputStyle-d0c9db0e.js';
import '../generatedId-52e731a2.js';
import '../usePositionDropdown-f9b23788.js';
import '../index-3b6eefee.js';
import '../Year-72a2b1c4.js';
import '../_style-e33da27c.js';
import 'assets/images/clock-face.svg';

function DateRange({ fnChange, label, picker = "date", value = {}, defaultValue = {}, }) {
    const format = useMemo(() => {
        switch (picker) {
            case "date":
                return "DD MMM, YYYY";
            case "month":
                return "MMM, YYYY";
            case "year":
                return "YYYY";
        }
        return "DD MMM, YYYY";
    }, [picker]);
    const disablePrevious = useCallback((date) => {
        const _date = dayjs_min(date);
        return value.from
            ? _date.isBefore(dayjs_min(value.from))
            : defaultValue.from
                ? _date.isBefore(dayjs_min(defaultValue.from))
                : false;
    }, [defaultValue.from, value.from]);
    const disableNext = useCallback((date) => {
        const _date = dayjs_min(date);
        return value.to
            ? _date.isAfter(dayjs_min(value.to))
            : defaultValue.to
                ? _date.isAfter(dayjs_min(defaultValue.to))
                : false;
    }, [defaultValue.to, value.to]);
    const onChangeFrom = (_val) => {
        let valTemp = _val;
        if (disableNext(_val))
            valTemp = value.to;
        fnChange({
            from: valTemp,
            to: value.to,
        });
    };
    const onChangeTo = (_val) => {
        let valTemp = _val;
        if (disablePrevious(_val))
            valTemp = value.from;
        fnChange({
            from: value.from,
            to: valTemp,
        });
    };
    return (React.createElement(Wrap, { className: "date-range" },
        React.createElement(Label, null, label),
        React.createElement(DatePicker, { picker: picker, value: value.from, defaultValue: defaultValue.from, fnChange: onChangeFrom, format: format, isRemove: false, disableItem: disableNext }),
        React.createElement("span", null,
            React.createElement(Icon, { icon: "i-transfer" })),
        React.createElement(DatePicker, { picker: picker, value: value.to, defaultValue: defaultValue.to, fnChange: onChangeTo, format: format, isRemove: false, disableItem: disablePrevious })));
}
const Wrap = styled.div `
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  position: relative;

  & > div {
    width: calc(50% - 20px);
  }

  .form-group {
    margin-top: 0;
  }
`;
const Label = styled.div `
  ${LabelCss};
  ${cssFocus};
`;

export { DateRange as default };
//# sourceMappingURL=DateRange.js.map
