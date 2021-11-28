'use strict';

var React = require('react');
var _lineOverflow = require('../_lineOverflow-0611c7f0.js');
var ButtonNoStyle = require('../ButtonNoStyle-3eedbceb.js');
var Icon = require('../Icon-b6bdc54f.js');
var styled = require('styled-components');
var index = require('../index-f0e3963b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * @prop {(val: string) => void} fnSearch
 */
var Search = React__default["default"].memo((props) => {
    const [isFocus, setIsFocus] = React.useState(false);
    const [value, setValue] = React.useState("");
    function focus() {
        setIsFocus(true);
    }
    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    function blur(e) {
        if (!e.target.value) {
            setIsFocus(false);
        }
    }
    /**
     * @param {React.FormEvent} e
     */
    function submit(e) {
        e.preventDefault();
        props.fnSearch(value);
    }
    return (React__default["default"].createElement(Search$1, { dark: props.dark, focus: isFocus, onSubmit: submit, className: "w-search" },
        React__default["default"].createElement("button", { type: "submit" },
            React__default["default"].createElement(Icon.Icon, { color: props.dark ? "#fff" : "#1a1a1a", icon: "i-search" })),
        props.value !== undefined && props.onChange ? (React__default["default"].createElement(Input, { value: props.value, onChange: props.onChange, placeholder: `${props.placeholder || "Search..."}`, onFocus: () => focus(), onBlur: (e) => blur(e) })) : (React__default["default"].createElement(Input, { value: value, onChange: (e) => setValue(e.target.value), placeholder: `${props.placeholder || "Search..."}`, onFocus: () => focus(), onBlur: (e) => blur(e) }))));
});
const Search$1 = styled__default["default"].form `
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${({ dark }) => (dark ? "#fff" : "#c7c7c7")};
  width: 200px;
  input {
    color: ${({ dark }) => (dark ? "#fff" : "initial")};
  }

  ${_lineOverflow.P2.y};
  ${_lineOverflow.P3.x};
  ${index.transition.easeIn};
  ${_lineOverflow.SemiTransparent};
  ${(props) => props.focus &&
    `
    opacity: 1;
    max-width: 300px;
    width: 100%;
  `};
  button {
    ${ButtonNoStyle.ButtonNoStyle};
  }
`;
const Input = styled__default["default"].input `
  margin-left: 5px;
  background-color: transparent;
  border: none;
  ${_lineOverflow.normal$2};

  &:focus {
    outline: 0;
  }
`;

module.exports = Search;
