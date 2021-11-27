import React, { useState, useRef, useEffect, useCallback } from 'react';
import { P as P2, p as one, o as P3, n as normal } from './_lineOverflow-40abb42a.js';
import { B as ButtonAction } from './ButtonAction-3cf1adce.js';
import { D as Dropdown } from './index-85a40777.js';
import { I as Icon } from './Icon-69b9e7b0.js';
import { I as InputStyle } from './InputStyle-d0c9db0e.js';
import { g as generatedId } from './generatedId-52e731a2.js';
import styled from 'styled-components';

var SelectListOption = React.memo((props) => {
    const [originList, setOriginList] = useState([]);
    const [list, setList] = useState([]);
    const refFormSearch = useRef();
    useEffect(() => {
        setOriginList(props.list);
        setList(props.list);
    }, [props.list]);
    const handleRemove = useCallback((val) => {
        var _a;
        const _value = props.value;
        (_a = props.fnSelect) === null || _a === void 0 ? void 0 : _a.call(props, _value.filter((item) => item !== val));
    }, [props]);
    /**
     * @param {string | number} val
     *
     * Display label of value selected
     */
    const renderLabel = useCallback((val) => {
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
                return item && (React.createElement(Item, { key: key },
                    React.createElement("span", { onClick: (e) => {
                            e.stopPropagation();
                        } }, (_a = originList.find((option) => option.value === item)) === null || _a === void 0 ? void 0 : _a.label),
                    React.createElement(ButtonAction, { action: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleRemove(item);
                        } },
                        React.createElement(Icon, { small: true, icon: "i-close" }))));
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
    const select = useCallback((val) => {
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
    const search = useCallback((val) => {
        setList(originList.filter((option) => option.label.toUpperCase().indexOf(val.toUpperCase()) >= 0));
    }, [originList]);
    const renderOptions = useCallback((listOptions) => {
        const _id = generatedId("select-list");
        return listOptions.map((option, index) => {
            if (option.group) {
                return (React.createElement(SelectGroup, { key: index, className: "select-group" },
                    React.createElement("div", null,
                        React.createElement("strong", null, option.group.label)),
                    React.createElement("ul", null, renderOptions(option.group.options))));
            }
            else
                return (React.createElement("li", { className: "select-option-item", onClick: () => select(option.value), key: _id + index }, option.label));
        });
    }, [select]);
    return (React.createElement(Dropdown, { full: true, clickOut: !props.isMultiple, className: "w-select-wrap", dropdown_menu: React.createElement(SelectLists, { className: "select-options" },
            props.isSearch && (React.createElement(SelectListSearch, { className: "w-select-options-search" },
                React.createElement(Icon, { icon: "i-search" }),
                React.createElement("input", { ref: refFormSearch, placeholder: "Search ...", type: "text", autoFocus: true, onChange: (e) => search(e.target.value) }))),
            React.createElement("ul", null, renderOptions(list))) },
        React.createElement(SelectListValue, { minHeight: props.isMultiple && 39, className: "w-select-value" },
            props.value && props.value.length > 0 ? (renderLabel(props.value)) : (React.createElement(PlaceHolder, null, "Select")),
            React.createElement("i", { className: "i-arrow-down " }))));
});
const SelectListSearch = styled.div `
  ${P2.a};
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  input {
    ${InputStyle};
  }
`;
const SelectListValue = styled.div `
  cursor: pointer;
  user-select: none;
  line-height: 20px;
  position: relative;
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}px;`};
  ${P2.a};
  ${one};

  & > i {
    position: absolute;
    right: 5px;
    bottom: 7px;
  }
`;
const SelectLists = styled.div `
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
      ${P3.a};
      ${normal};

      &:hover {
        background-color: var(--backgroundOpacity);
      }
    }
  }
`;
const SelectGroup = styled.div `
  margin-top: 5px;

  strong {
    user-select: none;
    padding-left: 8px;
  }

  ul {
    padding-left: 7px;
  }
`;
const Item = styled.li `
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
const PlaceHolder = styled.div `
  display: inline-flex;
  align-items: center;
  opacity: 0.6;
`;

export { SelectListOption as S };
//# sourceMappingURL=Select.SelectListOption-644eea6d.js.map
