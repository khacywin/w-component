import React, { useState, useCallback, useEffect } from 'react';
import { F as FormGroup } from '../../_FormGroup-7240e687.js';
import { S as SelectListOption } from '../../Select.SelectListOption-1e0427d1.js';
import { g as generatedId } from '../../generatedId-52e731a2.js';
import '../../_lineOverflow-fd1b0d7f.js';
import 'styled-components';
import '../../index-6556b1ec.js';
import '../../ButtonAction-230acc5c.js';
import '../../useHandleDisplay-fdfdebb5.js';
import '../../index-f4409ef8.js';
import '../../usePositionDropdown-f9b23788.js';
import '../../Icon-69b9e7b0.js';
import '../../InputStyle-85b9552e.js';

/**
 *
 * @prop {string} label
 * @prop {(val: any) => void} fnChange
 * @prop {boolean} request
 * @prop {string} defaultValue
 * @prop {JSX.Element[]} children
 * @prop {boolean} isSearch
 */
var index = React.memo((props) => {
    const id = generatedId("input");
    const [list, setList] = useState([]);
    const [valState, setValState] = useState();
    // Convert list options from children
    const convertOptionsFromChildren = useCallback((children) => {
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
    const handleSelect = useCallback((_val) => {
        setValState(_val);
        props === null || props === void 0 ? void 0 : props.fnChange(_val);
    }, [props]);
    /**
     * When props.list change
     * So it only action as constructor
     */
    useEffect(() => {
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
    useEffect(() => {
        setValState(props.value);
    }, [props.value]);
    useEffect(() => {
        props.defaultValue && setValState(props.defaultValue);
    }, [props.defaultValue]);
    return (React.createElement(FormGroup, { style: props.style || {}, labelFocus: true, isFocus: true, label: props.label, id: id, className: "w-select" + (props.isMultiple ? " w-select-multiple" : "") },
        React.createElement(SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
});

export { index as default };
//# sourceMappingURL=index.js.map
