'use strict';

var index$1 = require('../index-787a4666.js');
var React = require('react');
var _lineOverflow = require('../_lineOverflow-b8a457d2.js');
var styled = require('styled-components');
require('../index-1bd8de3e.js');
require('../ButtonAction-1bcd2a25.js');
require('../index-f0e3963b.js');
require('../useHandleDisplay-86b835d7.js');
require('../ButtonNoStyle-3eedbceb.js');
require('../usePositionDropdown-9f613aab.js');
require('../_style-8674a101.js');
require('../Icon-b6bdc54f.js');
require('../index-4b1ec35a.js');
require('../clock-face-00da2ca7.js');
require('../generatedId-3779176c.js');
require('../Year-4f05b576.js');
require('react-dom');
require('../usePositionDialog-6d2f5d27.js');
require('../logo-162bc68e.js');
require('../logo-character-73d9a4d2.js');
require('../Modal-afbbb3a3.js');
require('../tslib.es6-17879f09.js');
require('../_FormGroup-4649f433.js');
require('../InputStyle-786378de.js');
require('../index.es-eb211e2b.js');
require('../polished.esm-bf4b80df.js');
require('../index-310a3dbe.js');
require('../Other-07019e1b.js');
require('../Heading-04906944.js');
require('../WrapDialog-f6af1600.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * Dropdown menu
 * @prop {element} dropdown: button to click
 * @prop {element} children: button to click
 * @prop {element} dropdown_menu: menu
 * @prop {TPosition} position: position of menu
 * @prop {boolean} clickOut
 * @prop {string} className
 * @prop {string} className
 */
var index = React__default["default"].memo(({ dropdown, dropdown_menu, full, clickOut = true, position, children, className, styleDropdown, isBaseParent, }) => {
    const refDropdownMenu = React.useRef();
    const refDialog = React.useRef();
    const [widthElement, setWidthElement] = React.useState(0);
    const [isShow, setIsShow] = React.useState(false);
    const onToggle = React.useCallback(() => {
        setIsShow((isShow) => !isShow);
    }, []);
    React.useEffect(() => {
        if (isShow) {
            refDialog.current.show();
            isBaseParent && setWidthElement(refDropdownMenu.current.clientWidth);
        }
        else {
            refDialog.current.hide();
        }
    }, [isBaseParent, isShow]);
    return (React__default["default"].createElement(WrapDropdownMenu, { className: className },
        React__default["default"].createElement(Dropdown, { ref: refDropdownMenu, onClick: onToggle }, dropdown || children),
        React__default["default"].createElement(index$1.Dialog, { refParent: refDropdownMenu, ref: refDialog, clickOut: clickOut, setIsShow: setIsShow },
            React__default["default"].createElement(DropdownMenu, { width: widthElement, className: "dropdown-menu " + (className ? className + "-menu" : ""), style: styleDropdown, full: full, position: position || "left" }, dropdown_menu))));
});
const WrapDropdownMenu = styled__default["default"].div `
  position: relative;
`;
const DropdownMenu = styled__default["default"].div `
  min-width: 100px;
  background-color: var(--backgroundContent);
  z-index: 999;
  padding: 3px;

  ${_lineOverflow.menu};
  ${_lineOverflow.normal};
  ${({ full }) => (full ? "width: max-content" : "")};
  ${({ width }) => (width ? `width: ${width}px;` : "")}
  ${({ position }) => position === "right"
    ? "right: 2px;"
    : position === "left"
        ? "left: 2px;"
        : "bottom: calc(100% + 10px);"};

  hr {
    height: 1px;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    display: block !important;
  }

  li {
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal};
    ${_lineOverflow.P3.a};
    list-style: none;
    position: relative;
    width: max-content;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    div[src] {
      margin-right: 5px;
    }

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }
`;
const Dropdown = styled__default["default"].div ``;

module.exports = index;
