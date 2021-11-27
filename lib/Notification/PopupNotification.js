'use strict';

var tslib_es6 = require('../tslib.es6-17879f09.js');
var React = require('react');
var Modal = require('../Modal-ee6f69d6.js');
var styled = require('styled-components');
require('../_lineOverflow-f7594b16.js');
require('components/atoms/Button');
require('components/atoms/Button/ButtonAction');
require('components/atoms/Icon');
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
        React__default["default"].createElement(Modal.Button, { fnClick: _handleCloseNotification(fnOk) }, "OK")))
        .set("yes/no", React__default["default"].createElement(WrapButton, { disable: isLoading },
        React__default["default"].createElement(Modal.Button, { error: true, fnClick: _handleCloseNotification(fnYes) }, "Yes"),
        React__default["default"].createElement(Modal.Button, { normal: true, fnClick: _handleCloseNotification(fnNo) }, "No"))), [_handleCloseNotification, fnNo, fnOk, fnYes, isLoading]);
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
