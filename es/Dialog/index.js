import React, { useState, useImperativeHandle, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { u as useHandleDisplay } from '../useHandleDisplay-fdfdebb5.js';
import { u as usePositionPortal } from '../usePositionDialog-50994a2f.js';

function DialogWrap({ children, clickOut = false, position, setIsShow, refParent, setIsShowed, }) {
    const refContent = useRef(null);
    const refIsShowed = useRef(false);
    const { isDisplay, show, hide } = useHandleDisplay(refContent, clickOut);
    const { handlePosition } = usePositionPortal(refContent, refParent, {
        position: position || [],
    });
    useEffect(() => {
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
    useEffect(() => {
        if (isDisplay) {
            handlePosition();
            // Set timeout waiting handle position, to show dialog
            setTimeout(() => {
                refContent.current.style.opacity = "1";
            }, 10);
        }
    }, [handlePosition, isDisplay]);
    useEffect(() => {
        setIsShow === null || setIsShow === void 0 ? void 0 : setIsShow(isDisplay);
    }, [isDisplay, setIsShow]);
    useEffect(() => {
        refIsShowed.current && (setIsShowed === null || setIsShowed === void 0 ? void 0 : setIsShowed(isDisplay));
    }, [isDisplay, setIsShowed]);
    useEffect(() => {
        show();
        refIsShowed.current = true;
    }, [show]);
    return (isDisplay &&
        createPortal(React.createElement(Wrap, { className: "dialog-mark" },
            React.createElement(WrapContent, { ref: refContent }, children)), document.getElementById("modal-root")));
}
var index = React.forwardRef((props, ref) => {
    const [isShowed, setIsShowed] = useState(false);
    useImperativeHandle(ref, () => ({
        show() {
            setIsShowed(true);
        },
        hide() {
            setIsShowed(false);
        },
    }));
    return isShowed && React.createElement(DialogWrap, Object.assign({ setIsShowed: setIsShowed }, props));
});
const Wrap = styled.div `
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const WrapContent = styled.div `
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;

export { index as default };
//# sourceMappingURL=index.js.map
