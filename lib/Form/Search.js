'use strict';

var React = require('react');
var css_base__space = require('../_space-5cfb2697.js');
require('../_fontWeight-72109252.js');
var css_base__fontSize = require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
var css_base__opacity = require('../_opacity-19bf620b.js');
require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
var css_elements_ButtonNoStyle = require('../css/elements/ButtonNoStyle.js');
var Icon = require('../Icon.js');
var styled = require('styled-components');
var css_transition_index = require('../index-9390237c.js');

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
            React__default["default"].createElement(Icon, { color: props.dark ? "#fff" : "#1a1a1a", icon: "i-search" })),
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

  ${css_base__space.P2.y};
  ${css_base__space.P3.x};
  ${css_transition_index.transition.easeIn};
  ${css_base__opacity.SemiTransparent};
  ${(props) => props.focus &&
    `
    opacity: 1;
    max-width: 300px;
    width: 100%;
  `};
  button {
    ${css_elements_ButtonNoStyle};
  }
`;
const Input = styled__default["default"].input `
  margin-left: 5px;
  background-color: transparent;
  border: none;
  ${css_base__fontSize.normal};

  &:focus {
    outline: 0;
  }
`;

module.exports = Search;
