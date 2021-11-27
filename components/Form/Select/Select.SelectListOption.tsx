import React, { useCallback, useEffect, useRef, useState } from "react";
import { borderRadius, lineOverflow, space } from "css/base";

import ButtonAction from "components/Button/ButtonAction";
import Dropdown from "components/Dropdown";
import Icon from "components/Icon";
import InputStyle from "css/elements/InputStyle";
import { TSelectOption } from "util/type";
import generatedId from "util/generatedId";
import styled from "styled-components";

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
              <Item key={key}>
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
              </Item>
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
            <SelectGroup key={index} className="select-group">
              <div>
                <strong>{option.group.label}</strong>
              </div>
              <ul>{renderOptions(option.group.options)}</ul>
            </SelectGroup>
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
        <SelectLists className="select-options">
          {props.isSearch && (
            <SelectListSearch className="w-select-options-search">
              <Icon icon="i-search" />
              <input
                ref={refFormSearch}
                placeholder="Search ..."
                type="text"
                autoFocus={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  search(e.target.value)
                }
              />
            </SelectListSearch>
          )}
          <ul>{renderOptions(list)}</ul>
        </SelectLists>
      }
    >
      <SelectListValue
        minHeight={props.isMultiple && 39}
        className="w-select-value"
      >
        {props.value && props.value.length > 0 ? (
          renderLabel(props.value)
        ) : (
          <PlaceHolder>Select</PlaceHolder>
        )}
        <i className="i-arrow-down " />
      </SelectListValue>
    </Dropdown>
  );
});

const SelectListSearch = styled.div`
  ${space.P2.a};
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  input {
    ${InputStyle};
  }
`;

const SelectListValue = styled.div<{ minHeight: number }>`
  cursor: pointer;
  user-select: none;
  line-height: 20px;
  position: relative;
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}px;`};
  ${space.P2.a};
  ${lineOverflow.one};

  & > i {
    position: absolute;
    right: 5px;
    bottom: 7px;
  }
`;

const SelectLists = styled.div`
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
      ${space.P3.a};
      ${borderRadius.normal};

      &:hover {
        background-color: var(--backgroundOpacity);
      }
    }
  }
`;

const SelectGroup = styled.div`
  margin-top: 5px;

  strong {
    user-select: none;
    padding-left: 8px;
  }

  ul {
    padding-left: 7px;
  }
`;

const Item = styled.li`
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

const PlaceHolder = styled.div`
  display: inline-flex;
  align-items: center;
  opacity: 0.6;
`;
