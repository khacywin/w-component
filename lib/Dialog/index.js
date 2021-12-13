'use strict';

var React = require('react');
var reactDom = require('react-dom');
var styled = require('styled-components');
var useHandleDisplay = require('../useHandleDisplay-a99d50d5.js');
var usePositionDialog = require('../usePositionDialog-6d2f5d27.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function DialogWrap({ children, clickOut = false, position, setIsShow, refParent, setIsShowed, }) {
    const refContent = React.useRef(null);
    const refIsShowed = React.useRef(false);
    const { isDisplay, show, hide } = useHandleDisplay.useHandleDisplay(refContent, clickOut);
    const { handlePosition } = usePositionDialog.usePositionPortal(refContent, refParent, {
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
                refContent.current.style.opacity = "1";
            }, 10);
        }
    }, [handlePosition, isDisplay]);
    React.useEffect(() => {
        setIsShow === null || setIsShow === void 0 ? void 0 : setIsShow(isDisplay);
    }, [isDisplay, setIsShow]);
    React.useEffect(() => {
        refIsShowed.current && (setIsShowed === null || setIsShowed === void 0 ? void 0 : setIsShowed(isDisplay));
    }, [isDisplay, setIsShowed]);
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
            document.querySelector('body').appendChild(modalRootEle);
        }
    }, []);
    return (isDisplay &&
        reactDom.createPortal(React__default["default"].createElement(Wrap, { className: "dialog-mark" },
            React__default["default"].createElement(WrapContent, { ref: refContent }, children)), document.getElementById("modal-root")));
}
var index = React__default["default"].forwardRef((props, ref) => {
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
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const WrapContent = styled__default["default"].div `
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;

module.exports = index;
