'use strict';

var React = require('react');

function useHandleDisplay(ref, clickOut = true) {
    const [isDisplay, setIsDisplay] = React.useState(false);
    /**
     * On toggle display
     */
    const onToggleDisplay = () => setIsDisplay(isDisplay => !isDisplay);
    /**
     * Add method in click event
     */
    function hide() {
        console.log("Helo");
        setTimeout(() => setIsDisplay(false), 100);
    }
    /**
     * Show
     */
    function show() {
        setIsDisplay(true);
    }
    React.useEffect(() => {
        if (!isDisplay)
            return;
        // if clicked on outside of element
        function handleClickOutside(e) {
            var _a, _b;
            const current = ref.current;
            // When click in LI element, it's disappear
            if (clickOut) {
                const target = e.target;
                const path = e.path || (e.composedPath && e.composedPath()) || [];
                // Get li elements in dropdown menu
                const liElements = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll) && Object.entries((_b = ref.current) === null || _b === void 0 ? void 0 : _b.querySelectorAll('li')); // [{'index', node}]
                if (target.nodeName === 'LI' ||
                    (liElements &&
                        liElements.filter((node) => node[1].isEqualNode(target)).length > 0)
                    || path.find((item) => item.nodeName === 'LI')) {
                    hide();
                }
            }
            // Handle
            if (current) {
                const path = e.path || (e.composedPath && e.composedPath()) || [];
                console.log({
                    path
                });
                // Hide path when click outside
                !path.some((item) => current.contains(item.parentNode)) && hide();
            }
        }
        // Bind the event listener
        setTimeout(() => {
            var _a;
            if ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.parentElement.classList.contains('dialog-mark')) {
                ref.current.parentElement.onmouseup = handleClickOutside;
            }
            else {
                document.addEventListener('mouseup', handleClickOutside);
            }
        }, 10);
        return () => {
            var _a;
            // Unbind the event listener on clean up
            if ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.parentElement.classList.contains('dialog-mark')) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                ref.current.parentElement.onmouseup = null;
            }
            else {
                document.removeEventListener('mouseup', handleClickOutside);
            }
        };
    }, [clickOut, isDisplay, ref]);
    return {
        isDisplay,
        onToggleDisplay,
        show,
        hide
    };
}

exports.useHandleDisplay = useHandleDisplay;
