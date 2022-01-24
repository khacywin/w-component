'use strict';

require('./Button/index.js');
var Button_ButtonAction = require('./Button/ButtonAction.js');
require('./Button/ButtonLoadMore.js');
require('./index-f0ef9d11.js');
require('./Calendar/Month.js');
require('./Calendar/Year.js');
require('./Collapse/index.js');
var Dialog_index = require('./Dialog/index.js');
require('./Avatar.js');
require('./ChartProcess.js');
require('./Clock.js');
var Icon = require('./Icon.js');
require('./List.js');
require('./Logo.js');
require('./Modal.js');
require('./NoData.js');
require('./Popover.js');
require('./Subtitle.js');
require('./Title.js');
require('./Tooltip.js');
require('./Form/index.js');
require('./Form/Input.js');
require('./Form/Checkbox.js');
require('./Form/DateRange.js');
require('./Form/Slider.js');
require('./Form/Search.js');
require('./Form/Switch.js');
var React = require('react');
var Form__FormGroup = require('./Form/_FormGroup.js');
var css_base__space = require('./_space-5cfb2697.js');
require('./_fontWeight-72109252.js');
var css_base__fontSize = require('./_fontSize-5a701955.js');
require('./_zIndex-a46cddfb.js');
require('./_opacity-19bf620b.js');
var css_base__borderRadius = require('./_borderRadius-3deadb9d.js');
var css_base__boxShadow = require('./_boxShadow-6d818d81.js');
require('./_lineOverflow-94c98c56.js');
var css_elements_InputStyle = require('./css/elements/InputStyle.js');
var _util_generatedId = require('./_util/generatedId.js');
var styled = require('styled-components');
require('./Form/DatePicker/index.js');
require('./index-213c94bf.js');
require('./index-d639e584.js');
require('./index-d51a59dc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
        React__default["default"].createElement(Dialog_index, { refParent: refDropdownMenu, ref: refDialog, clickOut: clickOut, setIsShow: setIsShow },
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

  ${css_base__boxShadow.menu};
  ${css_base__borderRadius.normal};
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

  & > li {
    ${css_base__fontSize.normal};
    ${css_base__borderRadius.normal};
    ${css_base__space.P3.a};
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
        var _a, _b, _c, _d;
        const defVal = ((_c = (_b = (_a = originList[0]) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.options[0]) === null || _c === void 0 ? void 0 : _c.label) || ((_d = originList[0]) === null || _d === void 0 ? void 0 : _d.label);
        if ((!val || val.length === 0) && !props.isMultiple) {
            // Return default value
            // If variable 'isMultiple' is true, it will be '--Select'
            // Else it is first of item in List
            return defVal;
        }
        else if (props.isMultiple && Array.isArray(val)) {
            // Return list item
            return val.map((item, key) => {
                var _a;
                return item && (React__default["default"].createElement(Item, { key: key },
                    React__default["default"].createElement("span", { onClick: (e) => {
                            e.stopPropagation();
                        } }, (_a = originList.find((option) => option.value === item)) === null || _a === void 0 ? void 0 : _a.label),
                    React__default["default"].createElement(Button_ButtonAction, { action: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleRemove(item);
                        } },
                        React__default["default"].createElement(Icon, { small: true, icon: "i-close" }))));
            });
        }
        else if (typeof val === "string") {
            let labelSelected;
            originList.forEach((option) => {
                if (option.group) {
                    const itemSelected = option.group.options.find((item) => item.value === val);
                    if (itemSelected)
                        labelSelected = itemSelected.label;
                }
                else if (option.value === val) {
                    labelSelected = option.label;
                }
            });
            return labelSelected || defVal;
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
        const _id = _util_generatedId("select-list");
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
    return (React__default["default"].createElement(Dropdown, { full: true, isBaseParent: true, clickOut: !props.isMultiple, className: `w-select-wrap ${props.isMultiple ? "w-select-multiple" : ""}`, dropdown_menu: React__default["default"].createElement(SelectLists, { className: "select-options" },
            props.isSearch && (React__default["default"].createElement(SelectListSearch, { className: "w-select-options-search" },
                React__default["default"].createElement(Icon, { icon: "i-search" }),
                React__default["default"].createElement("input", { ref: refFormSearch, placeholder: "Search ...", type: "text", autoFocus: true, onChange: (e) => search(e.target.value) }))),
            React__default["default"].createElement("ul", null, renderOptions(list))) },
        React__default["default"].createElement(SelectListValue, { minHeight: props.isMultiple && 36.09, className: `w-select-value ${props.isMultiple ? "w-select-value-multiple" : ""}` },
            props.value && props.value.length > 0 ? (renderLabel(props.value)) : (React__default["default"].createElement(PlaceHolder, null, "Select")),
            React__default["default"].createElement("i", { className: "i-arrow-down " }))));
});
const SelectListSearch = styled__default["default"].div `
  ${css_base__space.P2.a};
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);

  input {
    ${css_elements_InputStyle};
  }
`;
const PlaceHolder = styled__default["default"].div `
  display: inline-flex;
  align-items: center;
  opacity: 0.6;
`;
const SelectListValue = styled__default["default"].div `
  cursor: pointer;
  user-select: none;
  line-height: 20px;
  position: relative;
  white-space: pre-wrap;

  ${({ minHeight }) => minHeight && `min-height: ${minHeight}px;`};
  ${css_base__space.P2.a};

  &.w-select-value-multiple {
    ${PlaceHolder} {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

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
      ${css_base__space.P3.a};
      ${css_base__borderRadius.normal};

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
  padding: 2px 10px;
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

/**
 *
 * @prop {string} label
 * @prop {(val: any) => void} fnChange
 * @prop {boolean} request
 * @prop {string} defaultValue
 * @prop {JSX.Element[]} children
 * @prop {boolean} isSearch
 */
var index = React__default["default"].memo((props) => {
    const id = _util_generatedId("input");
    const [list, setList] = React.useState([]);
    const [valState, setValState] = React.useState();
    // Convert list options from children
    const convertOptionsFromChildren = React.useCallback((children) => {
        const arrOptions = [];
        if (Array.isArray(children)) {
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
        }
        else if (children.type === "option") {
            arrOptions.push({
                value: children.props.value,
                label: children.props.children,
            });
        }
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
    return (React__default["default"].createElement(Form__FormGroup["default"], { style: props.style || {}, labelFocus: true, isFocus: true, label: props.label, id: id, className: "w-select" + (props.isMultiple ? " w-select-multiple" : "") },
        React__default["default"].createElement(SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
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

exports.Dropdown = Dropdown;
exports.SelectListOption = SelectListOption;
exports.index = index;
