/**
 *
 * @prop {string} label
 * @prop {(val: any) => void} fnChange
 * @prop {boolean} request
 * @prop {string} defaultValue
 * @prop {JSX.Element[]} children
 * @prop {boolean} isSearch
 */

import React, { useCallback, useEffect, useState } from "react";

import FormGroup from "components/Form/_FormGroup";
import SelectListOption from "./Select.SelectListOption";
import { TSelectOption } from "util/type";
import generatedId from "util/generatedId";

interface Props {
  label?: string;
  name?: string;
  request?: boolean;
  children: any;
  defaultValue?: any;
  isSearch?: boolean; // Does Select component have search wrap?
  style?: React.CSSProperties;
  isMultiple?: boolean;
  value?: any;
  fnChange?: (val: any) => void;
}

export default React.memo((props: Props) => {
  const id = generatedId("input");
  const [list, setList] = useState<TSelectOption[]>([]);
  const [valState, setValState] = useState<any>();

  // Convert list options from children
  const convertOptionsFromChildren = useCallback(
    (children: JSX.Element[] | JSX.Element) => {
      const arrOptions: TSelectOption[] = [];

      if (Array.isArray(children)) {
        children?.forEach((item: any) => {
          if (item.length !== 0) {
            if (item.type === "option") {
              arrOptions.push({
                value: item.props.value,
                label: item.props.children,
              });
            } else if (item.type === "optgroup") {
              arrOptions.push({
                group: {
                  label: item.props.label,
                  options: convertOptionsFromChildren(item.props.children),
                },
              });
            }
          }
        });
      } else if (children.type === "option") {
        arrOptions.push({
          value: children.props.value,
          label: children.props.children,
        });
      }

      return arrOptions;
    },
    []
  );

  /**
   * @param {string} _val
   */
  const handleSelect = useCallback(
    (_val: string | string[]) => {
      setValState(_val);
      props?.fnChange(_val);
    },
    [props]
  );

  /**
   * When props.list change
   * So it only action as constructor
   */
  useEffect(() => {
    /**
     * TODO
     * Convert list option from children
     */
    let arrOptions: TSelectOption[] = convertOptionsFromChildren(
      props.children
    );

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

  return (
    <FormGroup
      style={props.style || {}}
      labelFocus={true}
      isFocus={true}
      label={props.label}
      id={id}
      className={"w-select" + (props.isMultiple ? " w-select-multiple" : "")}
    >
      <SelectListOption
        isSearch={props.isSearch}
        list={[...list]}
        isMultiple={props.isMultiple}
        fnSelect={handleSelect}
        value={valState}
      />
    </FormGroup>
  );
});
