'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-b8a457d2.js');
var ButtonAction = require('./ButtonAction-8e7d8a19.js');
var index = require('./index-2d13a1a9.js');
var Icon = require('./Icon-b6bdc54f.js');
var InputStyle = require('./InputStyle-786378de.js');
var generatedId = require('./generatedId-3779176c.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
    return (React__default["default"].createElement(index.Dropdown, { full: true, clickOut: !props.isMultiple, className: "w-select-wrap", dropdown_menu: React__default["default"].createElement(SelectLists, { className: "select-options" },
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

exports.SelectListOption = SelectListOption;