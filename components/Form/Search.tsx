/**
 * @prop {(val: string) => void} fnSearch
 */

import React, { useState } from "react";

import Icon from "components/Icon";
import _t from "components/util/helps/_t";

export interface SearchProps {
  fnSearch: (val: string) => void;
  defaultValue?: string;
  placeholder?: string;
  dark?: boolean;
  value?: string;
  onChange?: (...arg: any) => void;
}
export default React.memo((props: SearchProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");

  function focus() {
    setIsFocus(true);
  }

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function blur(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      setIsFocus(false);
    }
  }

  /**
   * @param {React.FormEvent} e
   */
  function submit(e: React.FormEvent) {
    e.preventDefault();
    props.fnSearch(value);
  }

  return (
    <div
      onSubmit={submit}
      className={`w-search 
        ${isFocus ? "focus" : ""}
        ${props.dark ? "dark" : ""}
      `}
    >
      <button className="w-button-no-style" type="submit">
        <Icon color={props.dark ? "#fff" : "#1a1a1a"} icon="i-search" />
      </button>
      {props.value !== undefined && props.onChange ? (
        <input
          className="w-search-input"
          value={props.value}
          onChange={props.onChange}
          placeholder={`${props.placeholder || _t("Search")}...`}
          onFocus={() => focus()}
          onBlur={(e: any) => blur(e)}
        />
      ) : (
        <input
          className="w-search-input"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder={`${props.placeholder || _t("Search")}...`}
          onFocus={() => focus()}
          onBlur={(e: any) => blur(e)}
        />
      )}
    </div>
  );
});
