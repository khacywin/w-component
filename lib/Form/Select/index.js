'use strict';

var React = require('react');
var FormGroup = require('components/atoms/Form/_FormGroup');
var Select_SelectListOption = require('../../Select.SelectListOption-22bbc46d.js');
var generatedId = require('helps/generatedId');
require('../../_lineOverflow-f7594b16.js');
require('styled-components');
require('components/atoms/Button/ButtonAction');
require('components/atoms/Dropdown');
require('components/atoms/Icon');
require('../../InputStyle-51ed6d86.js');
require('helps/language/_t');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FormGroup__default = /*#__PURE__*/_interopDefaultLegacy(FormGroup);
var generatedId__default = /*#__PURE__*/_interopDefaultLegacy(generatedId);

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
    const id = generatedId__default["default"]('input');
    const [list, setList] = React.useState([]);
    const [valState, setValState] = React.useState();
    // Convert list options from children
    const convertOptionsFromChildren = React.useCallback((children) => {
        const arrOptions = [];
        children === null || children === void 0 ? void 0 : children.forEach((item) => {
            if (item.length !== 0) {
                if (item.type === 'option') {
                    arrOptions.push({
                        value: item.props.value,
                        label: item.props.children,
                    });
                }
                else if (item.type === 'optgroup') {
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
                    value: '',
                    label: '-- Select item',
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
    return (React__default["default"].createElement(FormGroup__default["default"], { style: props.style || {}, labelFocus: true, isFocus: true, label: props.label, id: id, className: 'w-select' + (props.isMultiple ? ' w-select-multiple' : '') },
        React__default["default"].createElement(Select_SelectListOption.SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
});

module.exports = index;
