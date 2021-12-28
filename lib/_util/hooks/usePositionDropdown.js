'use strict';

var React = require('react');

function usePositionDropdown(ref, options = {
    add: {
        width: 0,
        height: 0
    }
}) {
    var _a, _b;
    // Get position of screen
    const pScreen = React.useMemo(() => {
        return {
            x: 0,
            y: 0,
            height: window.innerHeight,
            width: window.innerWidth,
        };
    }, []);
    const _handlePosition = React.useCallback((add) => {
        var _a, _b;
        const posElement = ref.current.getBoundingClientRect();
        let transformOriginY = 'left';
        let transformOriginX = 'top';
        let translateX = 0, translateY = 0;
        if (add) {
            translateX = add.left || 0;
            translateX = -add.right || 0;
            translateY = -add.bottom || 0;
            translateY = -add.top || 0;
        }
        if (posElement.x < 0) {
            translateX = +posElement.x - ((_a = options === null || options === void 0 ? void 0 : options.add) === null || _a === void 0 ? void 0 : _a.width) || 10;
            transformOriginY = 'top';
        }
        else if (posElement.right > pScreen.width - 10) {
            translateX += -(posElement.right - pScreen.width) - 10;
            transformOriginY = 'bottom';
        }
        if (posElement.top < 0) {
            translateY = -posElement.height - ((_b = options === null || options === void 0 ? void 0 : options.add) === null || _b === void 0 ? void 0 : _b.height) || 10;
            transformOriginX = 'left';
        }
        else if (posElement.bottom > pScreen.height) {
            translateY += -(posElement.bottom - pScreen.height) - 10;
        }
        ref.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
        ref.current.style.visibility = 'visible';
        ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    }, [ref, pScreen.width, pScreen.height, (_a = options === null || options === void 0 ? void 0 : options.add) === null || _a === void 0 ? void 0 : _a.width, (_b = options === null || options === void 0 ? void 0 : options.add) === null || _b === void 0 ? void 0 : _b.height]);
    return {
        handlePosition: _handlePosition
    };
}

module.exports = usePositionDropdown;
