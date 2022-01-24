'use strict';

var React = require('react');
var reactDom = require('react-dom');
var styled = require('styled-components');
var _util_hooks_useHandleDisplay = require('../_util/hooks/useHandleDisplay.js');
var _util_hooks_usePositionDialog = require('../_util/hooks/usePositionDialog.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function DialogWrap({ children, clickOut = false, position, setIsShow, refParent, setIsShowed, }) {
    const refContent = React.useRef(null);
    const refIsShowed = React.useRef(false);
    const { isDisplay, show, hide } = _util_hooks_useHandleDisplay(refContent, clickOut);
    const { handlePosition } = _util_hooks_usePositionDialog(refContent, refParent, {
        position: position || [],
    });
    React.useEffect(() => {
        let _hide;
        /**
         * Make animation when dialog hide
         */
        if (!isDisplay) {
            _hide = setTimeout(() => hide(), 200);
        }
        // Clear timeout when Dialog is un-detect
        return () => {
            clearTimeout(_hide);
        };
    }, [isDisplay, hide]);
    React.useEffect(() => {
        if (isDisplay) {
            handlePosition();
            // Set timeout waiting handle position, to show dialog
            setTimeout(() => {
                var _a;
                if ((_a = refContent.current) === null || _a === void 0 ? void 0 : _a.style)
                    refContent.current.style.opacity = "1";
            }, 10);
        }
    }, [handlePosition, isDisplay]);
    React.useEffect(() => {
        if (refIsShowed.current) {
            setIsShowed === null || setIsShowed === void 0 ? void 0 : setIsShowed(isDisplay);
            setIsShow === null || setIsShow === void 0 ? void 0 : setIsShow(!!isDisplay);
        }
    }, [isDisplay, setIsShow, setIsShowed]);
    React.useEffect(() => {
        show();
        refIsShowed.current = true;
    }, [show]);
    // Check id container to add
    React.useEffect(() => {
        const ele = document.getElementById("modal-root");
        if (!ele) {
            const modalRootEle = document.createElement("div");
            modalRootEle.id = "modal-root";
            document.querySelector("body").appendChild(modalRootEle);
        }
    }, []);
    return (isDisplay &&
        reactDom.createPortal(React__default["default"].createElement(Wrap, { className: "dialog-mark" },
            React__default["default"].createElement(WrapContent, { ref: refContent }, children)), document.getElementById("modal-root")));
}
var Dialog = React__default["default"].forwardRef((props, ref) => {
    const [isShowed, setIsShowed] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
        show() {
            setIsShowed(true);
        },
        hide() {
            setIsShowed(false);
        },
    }));
    return isShowed && React__default["default"].createElement(DialogWrap, Object.assign({ setIsShowed: setIsShowed }, props));
});
const Wrap = styled__default["default"].div `
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
const WrapContent = styled__default["default"].div `
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;

module.exports = Dialog;
