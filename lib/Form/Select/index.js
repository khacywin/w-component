'use strict';

var React = require('react');
var _FormGroup = require('../../_FormGroup-4649f433.js');
var index$1 = require('../../index-46a911bd.js');
var generatedId = require('../../generatedId-3779176c.js');
require('../../_lineOverflow-b8a457d2.js');
require('styled-components');
require('../../index-f0e3963b.js');
require('../../index-1bd8de3e.js');
require('../../ButtonAction-8e7d8a19.js');
require('../../useHandleDisplay-16f1a228.js');
require('../../ButtonNoStyle-3eedbceb.js');
require('../../usePositionDropdown-bacf5401.js');
require('../../_style-8674a101.js');
require('../../Icon-b6bdc54f.js');
require('../../index-4b1ec35a.js');
require('../../clock-face-00da2ca7.js');
require('../../Year-e4fe849d.js');
require('react-dom');
require('../../usePositionDialog-6d2f5d27.js');
require('../../logo-162bc68e.js');
require('../../logo-character-73d9a4d2.js');
require('../../Modal-f913bba2.js');
require('../../tslib.es6-17879f09.js');
require('../../InputStyle-786378de.js');
require('../../index.es-eb211e2b.js');
require('../../polished.esm-bf4b80df.js');
require('../../index-6c814f67.js');
require('../../Other-99cf9454.js');
require('../../Heading-04906944.js');
require('../../WrapDialog-f6af1600.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
        React__default["default"].createElement(index$1.SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
});

module.exports = index;
