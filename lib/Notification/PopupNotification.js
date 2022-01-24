'use strict';

var tslib_es6 = require('../tslib.es6-17879f09.js');
var React = require('react');
var Button_index = require('../Button/index.js');
var Modal = require('../Modal.js');
var styled = require('styled-components');
require('../_space-5cfb2697.js');
require('../_fontWeight-72109252.js');
require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
require('../_opacity-19bf620b.js');
require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
require('../Button/ButtonAction.js');
require('../index-9390237c.js');
require('../_util/hooks/useHandleDisplay.js');
require('../Icon.js');
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
        React__default["default"].createElement(Button_index["default"], { fnClick: _handleCloseNotification(fnOk) }, "OK")))
        .set("yes/no", React__default["default"].createElement(WrapButton, { disable: isLoading },
        React__default["default"].createElement(Button_index["default"], { error: true, fnClick: _handleCloseNotification(fnYes) }, "Yes"),
        React__default["default"].createElement(Button_index["default"], { normal: true, fnClick: _handleCloseNotification(fnNo) }, "No"))), [_handleCloseNotification, fnNo, fnOk, fnYes, isLoading]);
    return (React__default["default"].createElement(Modal, { styled: {
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
