import React, { useState, useCallback, useEffect } from 'react';
import FormGroup from 'components/atoms/Form/_FormGroup';
import { S as SelectListOption } from '../../Select.SelectListOption-ddf275b8.js';
import generatedId from 'helps/generatedId';
import '../../_lineOverflow-0f5e92ab.js';
import 'styled-components';
import 'components/atoms/Button/ButtonAction';
import 'components/atoms/Dropdown';
import 'components/atoms/Icon';
import '../../InputStyle-cbf70b53.js';
import 'helps/language/_t';

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
    const id = generatedId('input');
    const [list, setList] = useState([]);
    const [valState, setValState] = useState();
    // Convert list options from children
    const convertOptionsFromChildren = useCallback((children) => {
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
                    value: '',
                    label: '-- Select item',
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
    return (React.createElement(FormGroup, { style: props.style || {}, labelFocus: true, isFocus: true, label: props.label, id: id, className: 'w-select' + (props.isMultiple ? ' w-select-multiple' : '') },
        React.createElement(SelectListOption, { isSearch: props.isSearch, list: [...list], isMultiple: props.isMultiple, fnSelect: handleSelect, value: valState })));
});

export { index as default };
//# sourceMappingURL=index.js.map
