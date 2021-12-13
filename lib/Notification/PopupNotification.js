'use strict';

var tslib_es6 = require('../tslib.es6-17879f09.js');
var React = require('react');
var index = require('../index-1bd8de3e.js');
var Modal = require('../Modal-f913bba2.js');
var styled = require('styled-components');
require('../_lineOverflow-b8a457d2.js');
require('../ButtonAction-8e7d8a19.js');
require('../index-f0e3963b.js');
require('../useHandleDisplay-16f1a228.js');
require('../Icon-b6bdc54f.js');
require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var PopupNotification = React__default["default"].memo(({ title, message, type, fnOk, fnYes, fnNo }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const _handleCloseNotification = React.useCallback((fn) => () => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        fn && (yield fn());
        setIsLoading(false);
    }), []);
    const buttonType = React.useMemo(() => new Map()
        .set("normal", React__default["default"].createElement(WrapButton, { disable: isLoading },
        React__default["default"].createElement(index.Button, { fnClick: _handleCloseNotification(fnOk) }, "OK")))
        .set("yes/no", React__default["default"].createElement(WrapButton, { disable: isLoading },
        React__default["default"].createElement(index.Button, { error: true, fnClick: _handleCloseNotification(fnYes) }, "Yes"),
        React__default["default"].createElement(index.Button, { normal: true, fnClick: _handleCloseNotification(fnNo) }, "No"))), [_handleCloseNotification, fnNo, fnOk, fnYes, isLoading]);
    return (React__default["default"].createElement(Modal.Modal, { styled: {
            maxWidth: "400px",
        }, show: true, noFooter: true, heading: title },
        React__default["default"].createElement(Wrap, null,
            React__default["default"].createElement("p", null, message),
            buttonType.get(type))));
});
const Wrap = styled__default["default"].div `
  padding-bottom: 20px;

  p {
    margin: 0 auto 12px;
    max-width: 300px;
    text-align: center;
  }
`;
const WrapButton = styled__default["default"].div `
  display: flex;
  justify-content: center;

  ${({ disable }) => disable &&
    `
    button: {
      user-select: none;
      pointer-events: none;
      opacity: .5;
    }
  `};
`;

module.exports = PopupNotification;
