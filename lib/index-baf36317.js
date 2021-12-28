'use strict';

require('./index-1bd8de3e.js');
var ButtonAction = require('./ButtonAction-1bcd2a25.js');
var ButtonNoStyle = require('./ButtonNoStyle-3eedbceb.js');
var React = require('react');
var styled = require('styled-components');
var usePositionDropdown = require('./usePositionDropdown-e4bfe58f.js');
require('./Year-4f05b576.js');
var _lineOverflow = require('./_lineOverflow-b8a457d2.js');
var Icon = require('./Icon-b6bdc54f.js');
var index$5 = require('./index-f0e3963b.js');
var reactDom = require('react-dom');
var useHandleDisplay = require('./useHandleDisplay-86b835d7.js');
var usePositionDialog = require('./usePositionDialog-6d2f5d27.js');
var logo = require('./logo-162bc68e.js');
var logoCharacter = require('./logo-character-73d9a4d2.js');
require('./Modal-afbbb3a3.js');
var tslib_es6 = require('./tslib.es6-17879f09.js');
var _FormGroup = require('./_FormGroup-4649f433.js');
var InputStyle = require('./InputStyle-786378de.js');
var index_es = require('./index.es-eb211e2b.js');
var generatedId = require('./generatedId-3779176c.js');
var polished_esm = require('./polished.esm-bf4b80df.js');
var index$6 = require('./index-08433ef3.js');
require('./Other-6a0876c8.js');
require('./Heading-04906944.js');
require('./WrapDialog-f6af1600.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var ButtonLoadMore = React__default["default"].memo(({ onClick, children }) => {
    return React__default["default"].createElement(Button, { onClick: onClick },
        children || `Load more`,
        "...");
});
const Button = styled__default["default"].button `
  ${ButtonNoStyle.ButtonNoStyle};
  margin-top: 10px;
  margin: 0 auto;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */
const Collapse = styled__default["default"].div `
  position: relative;
`;
var index$4 = React__default["default"].memo((props) => {
    const [show, setShow] = React.useState(!!props.in);
    return (React__default["default"].createElement(Collapse, null,
        React__default["default"].createElement(CollapseHeading, { show: props.noCollapse || show, onClick: () => setShow(!show) },
            props.noCollapse || React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-down', small: true }),
            React__default["default"].createElement("span", null, props.heading),
            React__default["default"].createElement(CollapseHeadingDash, null)),
        React__default["default"].createElement(CollapseContent, { show: props.noCollapse || show }, props.children)));
});
const CollapseHeadingDash = styled__default["default"].div `
  align-self: flex-end;
  transition: all 0.2s linear;
  flex: 1 1 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: var(--border);
    right: 0;
    bottom: 0;
    transition-property: width;
    width: 0;
    ${index$5.transition.easeIn};
  }
`;
const CollapseHeading = styled__default["default"].div `
  display: flex;
  align-items: center;
  ${_lineOverflow.semiBold};
  ${_lineOverflow.small};
  ${_lineOverflow.SemiTransparent};
  cursor: pointer;
  user-select: none;

  span {
    width: max-content;
  }

  ${CollapseHeadingDash} {
    &::after {
      ${(props) => (props.show ? 'width:98%' : '')};
    }
  }

  /* Icon */
  div:first-of-type {
    transition: all 0.2s linear;
    ${(props) => (props.show ? '' : 'transform: rotate(180deg)')};
    ${_lineOverflow.M2.r};
  }
`;
const CollapseContent = styled__default["default"].div `
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition-property: height;
  transition-duration: 0.2s;
  ${index$5.transition.linear};
  ${_lineOverflow.M5.y};
  ${_lineOverflow.M0.x};
  ${(props) => (props.show ? 'transform: scaleY(1)' : '')};
`;

function DialogWrap({ children, clickOut = false, position, setIsShow, refParent, setIsShowed, }) {
    const refContent = React.useRef(null);
    const refIsShowed = React.useRef(false);
    const { isDisplay, show, hide } = useHandleDisplay.useHandleDisplay(refContent, clickOut);
    const { handlePosition } = usePositionDialog.usePositionPortal(refContent, refParent, {
        position: position || [],
    });
    React.useEffect(() => {
        let _hide;
        /**
         * Make animation when dialog hide
         */
        if (!isDisplay) {
            _hide = setTimeout(() => hide(), 200);
        }
        // Clear timeout when Dialog is un-detect
        return () => {
            clearTimeout(_hide);
        };
    }, [isDisplay, hide]);
    React.useEffect(() => {
        if (isDisplay) {
            handlePosition();
            // Set timeout waiting handle position, to show dialog
            setTimeout(() => {
                var _a;
                if ((_a = refContent.current) === null || _a === void 0 ? void 0 : _a.style)
                    refContent.current.style.opacity = "1";
            }, 10);
        }
    }, [handlePosition, isDisplay]);
    React.useEffect(() => {
        if (refIsShowed.current) {
            setIsShowed === null || setIsShowed === void 0 ? void 0 : setIsShowed(isDisplay);
            setIsShow === null || setIsShow === void 0 ? void 0 : setIsShow(!!isDisplay);
        }
    }, [isDisplay, setIsShow, setIsShowed]);
    React.useEffect(() => {
        show();
        refIsShowed.current = true;
    }, [show]);
    // Check id container to add
    React.useEffect(() => {
        const ele = document.getElementById("modal-root");
        if (!ele) {
            const modalRootEle = document.createElement("div");
            modalRootEle.id = "modal-root";
            document.querySelector("body").appendChild(modalRootEle);
        }
    }, []);
    return (isDisplay &&
        reactDom.createPortal(React__default["default"].createElement(Wrap$4, { className: "dialog-mark" },
            React__default["default"].createElement(WrapContent, { ref: refContent }, children)), document.getElementById("modal-root")));
}
var Dialog = React__default["default"].forwardRef((props, ref) => {
    const [isShowed, setIsShowed] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
        show() {
            setIsShowed(true);
        },
        hide() {
            setIsShowed(false);
        },
    }));
    return isShowed && React__default["default"].createElement(DialogWrap, Object.assign({ setIsShowed: setIsShowed }, props));
});
const Wrap$4 = styled__default["default"].div `
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
const WrapContent = styled__default["default"].div `
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;

/**
 * Avatar
 *
 * @property {string} url
 * @property {string} children
 */
var Avatar = React__default["default"].memo(({ url, children }) => {
    return (React__default["default"].createElement(AvatarWrap, { className: 'w-avatar' }, url ? (React__default["default"].createElement("img", { src: url, alt: 'wmtime' })) : children ? (React__default["default"].createElement(WordOfName, null, children[0])) : null));
});
const AvatarWrap = styled__default["default"].div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
const WordOfName = styled__default["default"].div `
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--third);
  color: #fff;
  font-weight: bold;
`;

function ChartProcess (props) {
    const percent = (props.amount / props.sum) * 100;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(WrapChartProcess, { sum: props.sum },
            React__default["default"].createElement(ChartProcess$1, { amount: props.amount, percent: percent })),
        props.title ? React__default["default"].createElement(ChartProcessTitle, null, props.title) : ""));
}
const AmountTag = styled.css `
  position: absolute;
  top: -30px;
  ${_lineOverflow.P2.a};
  ${_lineOverflow.normal};
  ${_lineOverflow.small};
  right: 0;
  transform: translate(50%, 0);
`;
const ArrowDown = styled.css `
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  position: absolute;
  top: -6px;
  right: 0;
  transform: translate(50%, 0);
`;
const WrapChartProcess = styled__default["default"].div `
  width: 100%;
  height: 5px;
  position: relative;
  background-color: var(--secondary);
  margin-top: 30px;
  ${_lineOverflow.normal};

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.sum}'`};
    background-color: var(--secondary);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--secondary);
  }
`;
const aniProcess = (percent) => styled.keyframes `
  0%{
    width: 0%;
  }
  100%{
    width: ${percent}%;
  }
`;
const ChartProcess$1 = styled__default["default"].div `
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  width: ${(props) => props.percent}%;
  ${_lineOverflow.normal};
  background-color: var(--success);
  animation: ${(props) => aniProcess(props.percent)} 1s linear;

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.amount}'`};
    background-color: var(--success);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--success);
  }
`;
const ChartProcessTitle = styled__default["default"].div `
  ${_lineOverflow.light};
  ${_lineOverflow.small};
  text-align: center;
  user-select: none;
`;

function List({ children }) {
    return React__default["default"].createElement(Wrap$3, null, children);
}
const Wrap$3 = styled__default["default"].div `
  & > li,
  & > div {
    padding: 3px 10px;
    transition: 0.2s all ease-in;

    ${_lineOverflow.normal};

    &:hover {
      background-color: var(--background);
    }
  }
`;

function Logo ({ text }) {
    return (React__default["default"].createElement(Logo$1, null, text ? (React__default["default"].createElement("img", { src: logoCharacter.img, alt: "logo" })) : (React__default["default"].createElement("img", { src: logo.img, alt: "logo" }))));
}
const Logo$1 = styled__default["default"].div `
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;

function NoData({ children }) {
    return React__default["default"].createElement(Wrap$2, { className: 'no-data' }, children || 'No data');
}
const Wrap$2 = styled__default["default"].div `
  text-align: center;
  padding: 20px;
  opacity: 0.6;
  user-select: none;
`;

/**
 * Dropdown menu
 * @props dropdown: button to click
 * @props dropdown_menu: menu
 * @props position: position of menu
 */
const WrapPopover = styled__default["default"].div `
  display: block;
  position: relative;
  width: min-content;
`;
var Popover = React__default["default"].memo((props) => {
    const refMenu = React.useRef();
    const ref = React.useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay.useHandleDisplay(refMenu);
    usePositionDialog.usePositionPortal(refMenu, ref);
    return (React__default["default"].createElement(WrapPopover, null,
        React__default["default"].createElement(Dropdown$2, { ref: ref, onClick: onToggleDisplay }, props.children),
        React__default["default"].createElement(Popover$1, { ref: refMenu, full: !!props.full, position: props.position || "left", show: isDisplay },
            props.title && React__default["default"].createElement(PopoverTitle, null, props.title),
            React__default["default"].createElement(PopoverContent, null, props.content))));
});
const Popover$1 = styled__default["default"].div `
  & > * {
    display: ${(props) => !props.show && "none"};
  }
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;

  ${_lineOverflow.normal$1};
  ${_lineOverflow.normal};
  ${index$5.transition.popup};
  ${(props) => (props.show ? _lineOverflow.P2.a : _lineOverflow.P0.a)};
  ${(props) => (props.show ? index$5.transition.showPopup : index$5.transition.hiddenPopup)};
  ${(props) => props.position === "right"
    ? "right: 0"
    : props.position === "left"
        ? "left: 0;"
        : props.position === "top" && "bottom: calc(100% + 10px);"};

  ${(props) => props.full && "width: 100%"};

  hr {
    height: 1px;
    ${_lineOverflow.ImageTransparent};
  }

  li {
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal};
    ${_lineOverflow.P3.a};
    list-style: none;
    position: relative;
    width: max-content;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    div[src] {
      margin-right: 5px;
    }

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }
`;
const Dropdown$2 = styled__default["default"].div `
  cursor: pointer;
  width: max-content;
`;
const PopoverTitle = styled__default["default"].div `
  border-bottom: 1px solid var(--borderLight);
  padding: 5px;
  ${_lineOverflow.big};
`;
const PopoverContent = styled__default["default"].div `
  padding: 5px;
  padding-top: 8px;
`;

/**
 * Subtitle
 * @prop {} icon: src of icon
 * @prop {string} title
 * @prop {string} color
 * @prop {Direction} direction: row | column | row-reserve | column-reserve
 */
function Subtitle (props) {
    return (React__default["default"].createElement(WrapSubtitle, { direction: props.direction || 'row', color: props.color || '#999999' },
        React__default["default"].createElement(Subtitle$1, null, props.children || props.title),
        props.icon ? React__default["default"].createElement(Icon.Icon, { icon: props.icon, color: props.color || '#999999' }) : ''));
}
const WrapSubtitle = styled__default["default"].div `
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  color: ${(props) => props.color};

  .icon{
    transform: translateY(2px);
  }
`;
const Subtitle$1 = styled__default["default"].div `
  ${_lineOverflow.small};
  ${_lineOverflow.light};
  ${_lineOverflow.P2.x};
  ${_lineOverflow.one};
  max-width: 200px;
  width: 100%;
`;

const Title = styled__default["default"].div `
  ${_lineOverflow.big};
  ${_lineOverflow.bold};
`;
function Title$1 (props) {
    return React__default["default"].createElement(Title, null,
        props.children,
        " ");
}

function Tooltip({ children, title, position = "bottom", }) {
    return (React__default["default"].createElement(Wrap$1, null,
        React__default["default"].createElement(WrapChildren, null, children),
        React__default["default"].createElement(WrapTooltip, { position: position }, title)));
}
const WrapTooltip = styled__default["default"].div `
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  color: var(--text);
  padding: 8px 12px;
  box-shadow: 0 2px 2px var(--boxShadow);
  ${_lineOverflow.normal};

  ${({ position }) => position === "left"
    ? `
      right: calc(100% + 5px);
    `
    : position === "right"
        ? `
      left: calc(100% + 5px);
    `
        : position === "top"
            ? `
      bottom: calc(100% + 5px);
    `
            : `
      top: calc(100% + 5px);
    `}
`;
const WrapChildren = styled__default["default"].div `
  cursor: pointer;
`;
const Wrap$1 = styled__default["default"].div `
  position: relative;

  &:hover ${WrapTooltip} {
    display: block;
  }
`;

/**
 * @prop {string} label
 * @prop {'text' | 'number' | 'email' | 'password'} type
 */
/** Component */
var Input$1 = React__default["default"].memo((_a) => {
    var { fnChange, isInputTitle, label, name, placeholder, style, type = 'text', value = '' } = _a, props = tslib_es6.__rest(_a, ["fnChange", "isInputTitle", "label", "name", "placeholder", "style", "type", "value"]);
    const id = generatedId.generatedId('input');
    const [error, setError] = React.useState();
    const [color, setColor] = React.useState('');
    const [valState, setValState] = React.useState('');
    const handleInvalid = React.useCallback((e) => {
        e.preventDefault();
        e.persist();
        setError({
            type: 'manual',
            message: e.currentTarget.required ? 'Field is required !!' : '',
        });
    }, []);
    const onChange = React.useCallback((e) => {
        const value = type === 'number' ? +e.target.value : e.target.value;
        setValState(e.target.value);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(value || color);
    }, [type, fnChange, color]);
    const onChangeColor = React.useCallback((col) => {
        setColor(col);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(col);
    }, [fnChange]);
    React.useEffect(() => {
        value && setValState(value);
    }, [value]);
    const inputs = new Map()
        .set('textarea', React__default["default"].createElement(TextareaControl, Object.assign({ className: 'w-textarea', name: name, placeholder: placeholder, id: id }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('text', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'text', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('password', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'password', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('email', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'email', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('number', React__default["default"].createElement(InputControl, Object.assign({ name: name, className: 'w-input', type: 'number', placeholder: placeholder, id: id, onInvalid: handleInvalid }, (fnChange && {
        value: valState,
        onChange: onChange,
    }), props)))
        .set('color', React__default["default"].createElement("div", null,
        React__default["default"].createElement(index_es.App, { width: 20, height: 20, onChange: fnChange ? onChangeColor : setColor, defaultValue: value || color || '#54478c' }),
        React__default["default"].createElement("input", { type: 'hidden', name: name, value: color || value || '#54478c' })));
    return (React__default["default"].createElement(_FormGroup.FormGroup, { isInputTitle: isInputTitle, style: style, label: label, isFocus: value || placeholder, id: id, inline: type === 'color', error: error }, inputs.get(type)));
});
/** Style */
const InputControl = styled__default["default"].input `
  ${InputStyle.InputStyle};
`;
const TextareaControl = styled__default["default"].textarea `
  ${InputStyle.InputStyle};
  ${_lineOverflow.P2.a};
  resize: none;
`;

/**
 * Checkbox component
 * @props color: color of checkbox when checked
 * @props checked
 * @props fnChanged: function
 * @props labelChecked
 */
var Checkbox = React__default["default"].memo((props) => {
    const id = props.id || generatedId.generatedId();
    const labelChecked = React.useMemo(() => props.labelChecked ? props.labelChecked : ['', ''], [props.labelChecked]);
    const _onChange = React.useCallback((e) => {
        props.fnChange && props.fnChange(e.target.checked);
    }, [props]);
    return (React__default["default"].createElement(Checkbox$1, { className: 'checkbox ' + (props.className ? props.className : ''), color: props.color, "data-is-aria-label": props.labelChecked ? 'on' : 'off', "aria-label": props.value ? labelChecked[1] : labelChecked[0], "data-label-position": 'left-bottom' },
        React__default["default"].createElement("input", { id: id, type: 'checkbox', checked: props.value, name: props.name, onChange: _onChange }),
        React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement("i", { className: 'i-tick' })),
        React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement("span", null, props.label))));
});
const aniScale = styled.keyframes `
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const Checkbox$1 = styled__default["default"].div `
  display: flex;
  align-items: flex-start;

  input {
    width: 0;
    height: 0;
  }

  label {
    cursor: pointer;
    user-select: none;
    width: 100%;
  }

  & > label:first-of-type {
    display: block;
    flex: 0 0 15px;
    width: 15px;
    height: 15px;
    position: relative;
    top: -1px;
    border: 1px solid;
    border-color: ${(props) => (props.color ? props.color : 'var(--black)')};
    border-radius: 5px;

    &::after {
      position: absolute;
      content: '';
      width: 102%;
      height: 100%;
      top: -6%;
      left: 15%;
      display: none;
      animation: ${aniScale} 0.1s linear;
      ${_lineOverflow.front_1};
      ${(props) => props.color && polished_esm.colorSVG(props.color)}
    }
    i {
      position: absolute;
      width: 5px;
      height: 5px;
      top: 1px;
      right: 50%;
      display: none;
      background-color: inherit;
      color: ${({ color }) => color};
      ${_lineOverflow.front};
    }

    &:hover {
      background-color: ${polished_esm.rgba('#bdc3c7', 0.1)};
      &::before {
        background-color: ${polished_esm.rgba('#bdc3c7', 0.1)};
      }
    }
  }

  & > label:last-of-type {
    margin-left: 5px;
    ${({ color }) => color && polished_esm.colorSVG(color)};
  }

  input:checked ~ label::after,
  input:checked ~ label i {
    display: block;
  }

  input:checked ~ label {
    border-right: none;
    border-top: none;
  }
`;

function DateRange({ fnChange, label, picker = "date", value = {}, defaultValue = {}, }) {
    const format = React.useMemo(() => {
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
    const disablePrevious = React.useCallback((date) => {
        const _date = usePositionDropdown.dayjs_min(date);
        return value.from
            ? _date.isBefore(usePositionDropdown.dayjs_min(value.from))
            : defaultValue.from
                ? _date.isBefore(usePositionDropdown.dayjs_min(defaultValue.from))
                : false;
    }, [defaultValue.from, value.from]);
    const disableNext = React.useCallback((date) => {
        const _date = usePositionDropdown.dayjs_min(date);
        return value.to
            ? _date.isAfter(usePositionDropdown.dayjs_min(value.to))
            : defaultValue.to
                ? _date.isAfter(usePositionDropdown.dayjs_min(defaultValue.to))
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
    return (React__default["default"].createElement(Wrap, { className: "date-range" },
        React__default["default"].createElement(Label, null, label),
        React__default["default"].createElement(index$6.DatePicker, { picker: picker, value: value.from, defaultValue: defaultValue.from, fnChange: onChangeFrom, format: format, isRemove: false, disableItem: disableNext }),
        React__default["default"].createElement("span", null,
            React__default["default"].createElement(Icon.Icon, { icon: "i-transfer" })),
        React__default["default"].createElement(index$6.DatePicker, { picker: picker, value: value.to, defaultValue: defaultValue.to, fnChange: onChangeTo, format: format, isRemove: false, disableItem: disablePrevious })));
}
const Wrap = styled__default["default"].div `
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
const Label = styled__default["default"].div `
  ${_FormGroup.LabelCss};
  ${_FormGroup.cssFocus};
`;

/**
 * @prop {(val: string) => void} fnSearch
 */
var Search = React__default["default"].memo((props) => {
    const [isFocus, setIsFocus] = React.useState(false);
    const [value, setValue] = React.useState("");
    function focus() {
        setIsFocus(true);
    }
    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    function blur(e) {
        if (!e.target.value) {
            setIsFocus(false);
        }
    }
    /**
     * @param {React.FormEvent} e
     */
    function submit(e) {
        e.preventDefault();
        props.fnSearch(value);
    }
    return (React__default["default"].createElement(Search$1, { dark: props.dark, focus: isFocus, onSubmit: submit, className: "w-search" },
        React__default["default"].createElement("button", { type: "submit" },
            React__default["default"].createElement(Icon.Icon, { color: props.dark ? "#fff" : "#1a1a1a", icon: "i-search" })),
        props.value !== undefined && props.onChange ? (React__default["default"].createElement(Input, { value: props.value, onChange: props.onChange, placeholder: `${props.placeholder || "Search..."}`, onFocus: () => focus(), onBlur: (e) => blur(e) })) : (React__default["default"].createElement(Input, { value: value, onChange: (e) => setValue(e.target.value), placeholder: `${props.placeholder || "Search..."}`, onFocus: () => focus(), onBlur: (e) => blur(e) }))));
});
const Search$1 = styled__default["default"].form `
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${({ dark }) => (dark ? "#fff" : "#c7c7c7")};
  width: 200px;
  input {
    color: ${({ dark }) => (dark ? "#fff" : "initial")};
  }

  ${_lineOverflow.P2.y};
  ${_lineOverflow.P3.x};
  ${index$5.transition.easeIn};
  ${_lineOverflow.SemiTransparent};
  ${(props) => props.focus &&
    `
    opacity: 1;
    max-width: 300px;
    width: 100%;
  `};
  button {
    ${ButtonNoStyle.ButtonNoStyle};
  }
`;
const Input = styled__default["default"].input `
  margin-left: 5px;
  background-color: transparent;
  border: none;
  ${_lineOverflow.normal$2};

  &:focus {
    outline: 0;
  }
`;

const SwitchWrap = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
  user-select: none;

  h5 {
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal$3};
  }
  h6 {
    opacity: 0.8;
    ${_lineOverflow.normal$3};
    ${_lineOverflow.small};
  }

  input {
    width: 0;
    height: 0;
    display: none;
  }
`;
const SwitchButton = styled__default["default"].label `
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  top: 1px;
  left: 2px;
  cursor: pointer;
  background-color: var(--backgroundContent);
  transition: transform 0.2s linear;
`;
const SwitchBox = styled__default["default"].label `
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${(props) => props.active ? "var(--primary)" : "var(--shadow)"};
  ${_lineOverflow.around};
  ${(props) => props.active
    ? `
    ${SwitchButton}{
      transform: translate(100%,0);
    }
  `
    : `
  ${SwitchButton}{
      transform: translate(0,0);
    }`}
`;
var Switch = React__default["default"].memo((props) => {
    const id = generatedId.generatedId();
    const [value, setValue] = React.useState(props.value || props.defaultValue || false);
    const _onChange = React.useCallback(() => {
        if (props.fnChange) {
            props.fnChange(!value);
        }
        setValue(!value);
    }, [props, value]);
    React.useEffect(() => {
        props.value && setValue(props.value);
    }, [props.value]);
    return (React__default["default"].createElement(SwitchWrap, null,
        React__default["default"].createElement("div", null,
            React__default["default"].createElement("h5", null, props.label),
            props.labelSub ? React__default["default"].createElement("h6", null, props.labelSub) : ""),
        React__default["default"].createElement("input", { id: id, type: "checkbox", checked: value, onChange: _onChange }),
        React__default["default"].createElement(SwitchBox, { active: value, htmlFor: id },
            React__default["default"].createElement(SwitchButton, { htmlFor: id }))));
});

var SelectListOption = React__default["default"].memo((props) => {
    const [originList, setOriginList] = React.useState([]);
    const [list, setList] = React.useState([]);
    const refFormSearch = React.useRef();
    React.useEffect(() => {
        setOriginList(props.list);
        setList(props.list);
    }, [props.list]);
    const handleRemove = React.useCallback((val) => {
        var _a;
        const _value = props.value;
        (_a = props.fnSelect) === null || _a === void 0 ? void 0 : _a.call(props, _value.filter((item) => item !== val));
    }, [props]);
    /**
     * @param {string | number} val
     *
     * Display label of value selected
     */
    const renderLabel = React.useCallback((val) => {
        var _a, _b, _c;
        if ((!val || val.length === 0) && !props.isMultiple) {
            // Return default value
            // If variable 'isMultiple' is true, it will be '--Select'
            // Else it is first of item in List
            return (_a = originList[0]) === null || _a === void 0 ? void 0 : _a.label;
        }
        else if (props.isMultiple && Array.isArray(val)) {
            // Return list item
            return val.map((item, key) => {
                var _a;
                return item && (React__default["default"].createElement(Item, { key: key },
                    React__default["default"].createElement("span", { onClick: (e) => {
                            e.stopPropagation();
                        } }, (_a = originList.find((option) => option.value === item)) === null || _a === void 0 ? void 0 : _a.label),
                    React__default["default"].createElement(ButtonAction.ButtonAction, { action: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleRemove(item);
                        } },
                        React__default["default"].createElement(Icon.Icon, { small: true, icon: "i-close" }))));
            });
        }
        else if (typeof val === "string") {
            return (((_b = originList.find((option) => option.value === val)) === null || _b === void 0 ? void 0 : _b.label) || ((_c = originList[0]) === null || _c === void 0 ? void 0 : _c.label));
        }
        // If val is JSX.Element is it return itself
        return val;
    }, [handleRemove, originList, props.isMultiple]);
    /**
     * @param {index} index
     */
    const select = React.useCallback((val) => {
        var _a;
        let _value;
        /**
         * TODO
         * Reset form search
         * Only when props.isSearch is true
         */
        if (props.isSearch && !props.isMultiple) {
            refFormSearch.current.value = "";
            setList(originList);
        }
        if (props.isMultiple && Array.isArray(props.value)) {
            const _preVal = !props.value ? [] : [...props.value];
            if (!_preVal.some((item) => item === val) && val !== "") {
                _value = [..._preVal, val];
            }
            else {
                _value = props.value;
            }
        }
        else {
            _value = val;
        }
        (_a = props.fnSelect) === null || _a === void 0 ? void 0 : _a.call(props, _value);
    }, [props, originList]);
    /**
     * @param {string} val
     */
    const search = React.useCallback((val) => {
        setList(originList.filter((option) => option.label.toUpperCase().indexOf(val.toUpperCase()) >= 0));
    }, [originList]);
    const renderOptions = React.useCallback((listOptions) => {
        const _id = generatedId.generatedId("select-list");
        return listOptions.map((option, index) => {
            if (option.group) {
                return (React__default["default"].createElement(SelectGroup, { key: index, className: "select-group" },
                    React__default["default"].createElement("div", null,
                        React__default["default"].createElement("strong", null, option.group.label)),
                    React__default["default"].createElement("ul", null, renderOptions(option.group.options))));
            }
            else
                return (React__default["default"].createElement("li", { className: "select-option-item", onClick: () => select(option.value), key: _id + index }, option.label));
        });
    }, [select]);
    return (React__default["default"].createElement(Dropdown, { full: true, isBaseParent: true, clickOut: !props.isMultiple, className: "w-select-wrap", dropdown_menu: React__default["default"].createElement(SelectLists, { className: "select-options" },
            props.isSearch && (React__default["default"].createElement(SelectListSearch, { className: "w-select-options-search" },
                React__default["default"].createElement(Icon.Icon, { icon: "i-search" }),
                React__default["default"].createElement("input", { ref: refFormSearch, placeholder: "Search ...", type: "text", autoFocus: true, onChange: (e) => search(e.target.value) }))),
            React__default["default"].createElement("ul", null, renderOptions(list))) },
        React__default["default"].createElement(SelectListValue, { minHeight: props.isMultiple && 39, className: "w-select-value" },
            props.value && props.value.length > 0 ? (renderLabel(props.value)) : (React__default["default"].createElement(PlaceHolder, null, "Select")),
            React__default["default"].createElement("i", { className: "i-arrow-down " }))));
});
const SelectListSearch = styled__default["default"].div `
  ${_lineOverflow.P2.a};
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  input {
    ${InputStyle.InputStyle};
  }
`;
const SelectListValue = styled__default["default"].div `
  cursor: pointer;
  user-select: none;
  line-height: 20px;
  position: relative;
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}px;`};
  ${_lineOverflow.P2.a};
  ${_lineOverflow.one};

  & > i {
    position: absolute;
    right: 5px;
    bottom: 7px;
  }
`;
const SelectLists = styled__default["default"].div `
  background-color: var(--backgroundContent);
  width: 100%;
  overflow-y: hidden;
  ul {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 400px;
    ::-webkit-scrollbar {
      width: 2px;
    }

    li {
      width: 100%;
      list-style: none;
      cursor: pointer;
      ${_lineOverflow.P3.a};
      ${_lineOverflow.normal};

      &:hover {
        background-color: var(--backgroundOpacity);
      }
    }
  }
`;
const SelectGroup = styled__default["default"].div `
  margin-top: 5px;

  strong {
    user-select: none;
    padding-left: 8px;
  }

  ul {
    padding-left: 7px;
  }
`;
const Item = styled__default["default"].li `
  display: inline-flex;
  background-color: var(--backgroundOpacity);
  border-radius: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  align-items: center;

  button {
    opacity: 0;
    width: 0;
    padding: 3px 0;
  }

  &:hover button {
    opacity: 1;
    width: initial;
    margin-left: 2px;
    padding: 3px;
  }
`;
const PlaceHolder = styled__default["default"].div `
  display: inline-flex;
  align-items: center;
  opacity: 0.6;
`;

/**
 *
 * @prop {string} label
 * @prop {(val: any) => void} fnChange
 * @prop {boolean} request
 * @prop {string} defaultValue
 * @prop {JSX.Element[]} children
 * @prop {boolean} isSearch
 */
var index$3 = React__default["default"].memo((props) => {
    const id = generatedId.generatedId("input");
    const [list, setList] = React.useState([]);
    const [valState, setValState] = React.useState();
    // Convert list options from children
    const convertOptionsFromChildren = React.useCallback((children) => {
        const arrOptions = [];
        children === null || children === void 0 ? void 0 : children.forEach((item) => {
            if (item.length !== 0) {
                if (item.type === "option") {
                    arrOptions.push({
                        value: item.props.value,
                        label: item.props.children,
                    });
                }
                else if (item.type === "optgroup") {
                    arrOptions.push({
                        group: {
                            label: item.props.label,
                            options: convertOptionsFromChildren(item.props.children),
                        },
                    });
                }
            }
        });
        return arrOptions;
    }, []);
    /**
     * @param {string} _val
     */
    const handleSelect = React.useCallback((_val) => {
        setValState(_val);
        props === null || props === void 0 ? void 0 : props.fnChange(_val);
    }, [props]);
    /**
     * When props.list change
     * So it only action as constructor
     */
    React.useEffect(() => {
        /**
         * TODO
         * Convert list option from children
         */
        let arrOptions = convertOptionsFromChildren(props.children);
        if (!arrOptions.length && !props.isMultiple)
            arrOptions = [
                {
                    value: "",
                    label: "-- Select item",
                },
            ];
        setList(arrOptions);
    }, [convertOptionsFromChildren, props.children, props.isMultiple]);
    React.useEffect(() => {
        setValState(props.value);
    }, [props.value]);
    React.useEffect(() => {
        props.defaultValue && setValState(props.defaultValue);
    }, [props.defaultValue]);
    return (React__default["default"].createElement(_FormGroup.FormGroup, { style: props.style || {}, labelFocus: true, isFocus: true, label: props.label, id: id, className: "w-select" + (props.isMultiple ? " w-select-multiple" : "") },
        React__default["default"].createElement(SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
});

function Loading(props) {
    return (React__default["default"].createElement(LoadingWrap, null,
        React__default["default"].createElement(LoadingEclipse, { className: "loading-eclipse", small: !!props.small },
            React__default["default"].createElement("div", null))));
}
const LoadingAnimation = styled.keyframes `
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;
const LoadingWrap = styled__default["default"].div `
  width: 20px;
  height: 20px;
  display: inline-block;
  /* overflow: hidden; */
  background: transparent;
`;
const LoadingEclipse = styled__default["default"].div `
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  & div {
    position: absolute;
    animation: ${LoadingAnimation} 1s linear infinite;
    ${(props) => props.small
    ? `
      width: 15px;
      height: 15px;
      top: 1.875px;
      left: 1.875px;
      border-radius: 50%;
      box-shadow: 0 2px 0 0 #ffffff;
      transform-origin: 7.5px 7.6px;
      box-sizing: content-box;
    `
    : `
      position: absolute;
      animation: ${LoadingWrap} 1s linear infinite;
      width: 80px;
      height: 80px;
      top: 10px;
      left: 10px;
      border-radius: 50%;
      box-shadow: 0 2px 0 0 #ffffff;
      transform-origin: 40px 41px;
      box-sizing: content-box;
    `}
  }
`;
/**
 * Loading bound with icon
 */
function LoadingBall() {
    return (React__default["default"].createElement(LoadingBallWrap, null,
        React__default["default"].createElement(LoadingBallLogo, null,
            React__default["default"].createElement("img", { src: logo.img, alt: "manage time" })),
        React__default["default"].createElement(LoadingBallShadow, null)));
}
const LoadingBallAnimation = styled.keyframes `
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 50px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: translate(0, 0);
  }
`;
const LoadingBallShadowAnimation = styled.keyframes `
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: scale(1) rotateX(85deg) translateZ(-13px);
  }
  50% {
    transform: scale(0.2) rotateX(85deg) translateZ(-13px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: scale(1) rotateX(85deg) translateZ(-13px);
  }
`;
const LoadingBallWrap = styled__default["default"].div `
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
  position: relative;
`;
const LoadingBallLogo = styled__default["default"].div `
  position: absolute;
  top: 0;
  left: 100px;
  width: 100px;
  height: 100px;
  animation: ${LoadingBallAnimation} 1s linear infinite;
`;
const LoadingBallShadow = styled__default["default"].div `
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0) 50%
  );
  transform: rotateX(90deg) translateZ(-150px);
  z-index: -1;
  animation: ${LoadingBallShadowAnimation} 1s linear infinite;
`;
/**
 * Loading someone is typing
 */
function LoadingSomeoneTyping() {
    return (React__default["default"].createElement(LoadingSomeoneTypingWrap, null,
        React__default["default"].createElement("div", null),
        React__default["default"].createElement("div", null),
        React__default["default"].createElement("div", null)));
}
const LoadingSomeoneTypingWrapAnimation = styled.keyframes `
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
`;
const LoadingSomeoneTypingWrap = styled__default["default"].div `
  display: flex;
  min-height: 16px;
  align-items: center;

  div {
    border-radius: 50%;
    margin: 0 2px;
    width: 4px;
    height: 4px;
    opacity: 0.2;
    background-color: var(--text);
  }

  div:nth-of-type(1) {
    animation: ${LoadingSomeoneTypingWrapAnimation} 3s linear infinite;
  }

  div:nth-of-type(2) {
    animation: ${LoadingSomeoneTypingWrapAnimation} 3s linear infinite;
    animation-delay: 1s;
  }

  div:nth-of-type(3) {
    animation: ${LoadingSomeoneTypingWrapAnimation} 3s linear infinite;
    animation-delay: 2s;
  }
`;

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Loading: Loading,
  LoadingBall: LoadingBall,
  LoadingSomeoneTyping: LoadingSomeoneTyping
});

/**
 * NOTIFICATIONS
 * @props message - (default) - (error) - (success)
 */
var index = React__default["default"].memo((props) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const handleClose = React.useCallback(() => {
        setIsOpen(false);
        setTimeout(() => {
            props.fnOff(props === null || props === void 0 ? void 0 : props.id);
        }, 200);
    }, [props]);
    React.useEffect(() => {
        const closeState = setTimeout(() => {
            setIsOpen(false);
        }, 4800);
        const closeStore = setTimeout(() => {
            props.fnOff(props === null || props === void 0 ? void 0 : props.id);
        }, 5000);
        return () => {
            clearTimeout(closeState);
            clearTimeout(closeStore);
        };
    }, [props]);
    return (React__default["default"].createElement(NotificationWrap, { open: isOpen, white: !!props.white, success: !!props.success, error: !!props.error },
        typeof props.message === "string" ? (React__default["default"].createElement(Message, { dangerouslySetInnerHTML: { __html: props.message } })) : (React__default["default"].createElement(Message, null, props.message)),
        React__default["default"].createElement(ButtonClose, { white: !!props.white, type: "button", onClick: handleClose },
            React__default["default"].createElement("i", { className: "i-close" }))));
});
const slideRight = styled.keyframes `
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideRightOut = styled.keyframes `
 100% {
    opacity: 0;
    transform: translateX(-100px);
  }
  0% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const NotificationWrap = styled__default["default"].div `
  padding: 8px 10px;
  color: ${(props) => props.white ? "var(--text)" : "var(--backgroundContent)"};
  background-color: ${(props) => props.error
    ? "var(--error)"
    : props.success
        ? "var(--success)"
        : props.white
            ? "var(--backgroundContent)"
            : "var(--dark)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 1px 3px var(--boxShadow);
  animation: ${(props) => (props.open ? slideRight : slideRightOut)} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const Message = styled__default["default"].div `
  position: relative;
  top: -1px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ButtonClose = styled__default["default"].button `
  border: none;
  background-color: transparent;
  margin-left: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;

  i {
    color: ${({ white }) => (white ? "initial" : "var(--backgroundContent)")};
  }

  &:focus {
    border: none;
    outline: 0;
  }
`;

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index
});

if (document) {
    const root = document.documentElement;
    root.style.setProperty("--primary", "#22402F");
    root.style.setProperty("--secondary", "#5A8C70");
    root.style.setProperty("--third", "#7EBF9A");
    root.style.setProperty("--success", "#4caf50");
    root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.5)");
    root.style.setProperty("--text", "rgba(0, 0, 0, 0.87)");
    root.style.setProperty("--textBlur", "#BFBFBF");
    root.style.setProperty("--warning", "#f1c40f");
    root.style.setProperty("--background", "#D5D5D5");
    root.style.setProperty("--backgroundContent", "#FFF");
    root.style.setProperty("--backgroundOpacity", "rgba(0, 0, 0, 0.1)");
    root.style.setProperty("--border", "#d9d9d9");
    root.style.setProperty("--borderLight", "#ECECEC");
    root.style.setProperty("--borderInput", "#D4D4D4");
    root.style.setProperty("--boxShadow", "rgba(0, 0, 0, 0.16)");
}

/**
 * Dropdown menu
 * @prop {element} dropdown: button to click
 * @prop {element} children: button to click
 * @prop {element} dropdown_menu: menu
 * @prop {TPosition} position: position of menu
 * @prop {boolean} clickOut
 * @prop {string} className
 * @prop {string} className
 */
var Dropdown = React__default["default"].memo(({ dropdown, dropdown_menu, full, clickOut = true, position, children, className, styleDropdown, isBaseParent, }) => {
    const refDropdownMenu = React.useRef();
    const refDialog = React.useRef();
    const [widthElement, setWidthElement] = React.useState(0);
    const [isShow, setIsShow] = React.useState(false);
    const onToggle = React.useCallback(() => {
        setIsShow((isShow) => !isShow);
    }, []);
    React.useEffect(() => {
        if (isShow) {
            refDialog.current.show();
            isBaseParent && setWidthElement(refDropdownMenu.current.clientWidth);
        }
        else {
            refDialog.current.hide();
        }
    }, [isBaseParent, isShow]);
    return (React__default["default"].createElement(WrapDropdownMenu, { className: className },
        React__default["default"].createElement(Dropdown$1, { ref: refDropdownMenu, onClick: onToggle }, dropdown || children),
        React__default["default"].createElement(Dialog, { refParent: refDropdownMenu, ref: refDialog, clickOut: clickOut, setIsShow: setIsShow },
            React__default["default"].createElement(DropdownMenu, { width: widthElement, className: "dropdown-menu " + (className ? className + "-menu" : ""), style: styleDropdown, full: full, position: position || "left" }, dropdown_menu))));
});
const WrapDropdownMenu = styled__default["default"].div `
  position: relative;
`;
const DropdownMenu = styled__default["default"].div `
  min-width: 100px;
  background-color: var(--backgroundContent);
  z-index: 999;
  padding: 3px;

  ${_lineOverflow.menu};
  ${_lineOverflow.normal};
  ${({ full }) => (full ? "width: max-content" : "")};
  ${({ width }) => (width ? `width: ${width}px;` : "")}
  ${({ position }) => position === "right"
    ? "right: 2px;"
    : position === "left"
        ? "left: 2px;"
        : "bottom: calc(100% + 10px);"};

  hr {
    height: 1px;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    display: block !important;
  }

  li {
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal};
    ${_lineOverflow.P3.a};
    list-style: none;
    position: relative;
    width: max-content;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    div[src] {
      margin-right: 5px;
    }

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }
`;
const Dropdown$1 = styled__default["default"].div ``;

exports.Avatar = Avatar;
exports.ButtonLoadMore = ButtonLoadMore;
exports.ChartProcess = ChartProcess;
exports.Checkbox = Checkbox;
exports.DateRange = DateRange;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
exports.Input = Input$1;
exports.List = List;
exports.Logo = Logo;
exports.NoData = NoData;
exports.Popover = Popover;
exports.Search = Search;
exports.SelectListOption = SelectListOption;
exports.Subtitle = Subtitle;
exports.Switch = Switch;
exports.Title = Title$1;
exports.Tooltip = Tooltip;
exports.index = index$2;
exports.index$1 = index$1;
exports.index$2 = index$4;
exports.index$3 = index$3;
