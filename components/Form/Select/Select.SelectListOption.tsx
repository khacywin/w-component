import React, { useCallback, useEffect, useRef, useState } from "react";

import ButtonAction from "components/Button/ButtonAction";
import Dropdown from "components/Dropdown";
import Icon from "components/Icon";
import { TSelectOption } from "components/util/type";
import _t from "components/util/helps/_t";
import generatedId from "components/util/helps/generateKey";

interface IProps {
  list: TSelectOption[];
  value: string | string[]; // HTML wrap is showed
  isSearch?: boolean;
  isMultiple?: boolean;
  fnSelect?: (val: string | string[]) => void;
}

export default React.memo((props: IProps) => {
  const [originList, setOriginList] = useState<TSelectOption[]>([]);
  const [list, setList] = useState<TSelectOption[]>([]);
  const refFormSearch = useRef<HTMLInputElement>();

  useEffect(() => {
    setOriginList(props.list);
    setList(props.list);
  }, [props.list]);

  const handleRemove = useCallback(
    (val: string) => {
      const _value: any = props.value;
      props.fnSelect?.(_value.filter((item: string) => item !== val));
    },
    [props]
  );

  /**
   * @param {string | number} val
   *
   * Display label of value selected
   */
  const renderLabel = useCallback(
    (val: string | string[]) => {
      if ((!val || val.length === 0) && !props.isMultiple) {
        // Return default value
        // If variable 'isMultiple' is true, it will be '--Select'
        // Else it is first of item in List
        return originList[0]?.label;
      } else if (props.isMultiple && Array.isArray(val)) {
        // Return list item
        return val.map(
          (item: any, key: number) =>
            item && (
              <li className="w-select-item" key={key}>
                <span
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                  }}
                >
                  {
                    originList.find(
                      (option: TSelectOption) => option.value === item
                    )?.label
                  }
                </span>
                <ButtonAction
                  action={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemove(item);
                  }}
                >
                  <Icon small icon="i-close" />
                </ButtonAction>
              </li>
            )
        );
      } else if (typeof val === "string") {
        return (
          originList.find((option: TSelectOption) => option.value === val)
            ?.label || originList[0]?.label
        );
      }

      // If val is JSX.Element is it return itself
      return val;
    },
    [handleRemove, originList, props.isMultiple]
  );

  /**
   * @param {index} index
   */
  const select = useCallback(
    (val: any) => {
      let _value: any;
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
        const _preVal: string[] = !props.value ? [] : [...props.value];

        if (!_preVal.some((item: string) => item === val) && val !== "") {
          _value = [..._preVal, val];
        } else {
          _value = props.value;
        }
      } else {
        _value = val;
      }

      props.fnSelect?.(_value);
    },
    [props, originList]
  );

  /**
   * @param {string} val
   */
  const search = useCallback(
    (val: string) => {
      setList(
        originList.filter(
          (option: TSelectOption) =>
            option.label.toUpperCase().indexOf(val.toUpperCase()) >= 0
        )
      );
    },
    [originList]
  );

  const renderOptions = useCallback(
    (listOptions: TSelectOption[]) => {
      const _id = generatedId("select-list");
      return listOptions.map((option: TSelectOption, index: any) => {
        if (option.group) {
          return (
            <div key={index} className="w-select-group">
              <div>
                <strong>{option.group.label}</strong>
              </div>
              <ul>{renderOptions(option.group.options)}</ul>
            </div>
          );
        } else
          return (
            <li
              className="select-option-item"
              onClick={() => select(option.value)}
              key={_id + index}
            >
              {option.label}
            </li>
          );
      });
    },
    [select]
  );

  return (
    <Dropdown
      full
      clickOut={!props.isMultiple}
      className="w-select-wrap"
      dropdown_menu={
        <div className="w-select-selection select-options">
          {props.isSearch && (
            <div className="w-select-search">
              <Icon icon="i-search" />
              <input
                className="w-input"
                ref={refFormSearch}
                placeholder={_t("Search ...")}
                type="text"
                autoFocus={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  search(e.target.value)
                }
              />
            </div>
          )}
          <ul>{renderOptions(list)}</ul>
        </div>
      }
    >
      <div
        className="w-select-value line-overflow-1"
      >
        {props.value && props.value.length > 0 ? (
          renderLabel(props.value)
        ) : (
          <div className="w-select-placeholder">{_t("Select")}</div>
        )}
        <i className="i-arrow-down " />
      </div>
    </Dropdown>
  );
});