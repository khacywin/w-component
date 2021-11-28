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
        var _a, _b, _c, _d;
        const posElement = ref.current.getBoundingClientRect();
        const transform = [];
        let transformOriginY = 'left';
        let transformOriginX = 'top';
        if (add) {
            transform.push(`translateX(${add.left || 0}px)`);
            transform.push(`translateX(${-add.right || 0}px)`);
            transform.push(`translateY(${-add.bottom || 0}px)`);
            transform.push(`translateY(${-add.top || 0}px)`);
        }
        if (posElement.x < 0) {
            transform.push(`translateX(${-posElement.x - ((_a = options === null || options === void 0 ? void 0 : options.add) === null || _a === void 0 ? void 0 : _a.width) || 0}px)`);
            transformOriginY = 'top';
        }
        else if (posElement.right > pScreen.width - 10) {
            transform.push(`translateX(-100% - ${((_b = options === null || options === void 0 ? void 0 : options.add) === null || _b === void 0 ? void 0 : _b.width) || 0}px)`);
            transformOriginY = 'bottom';
        }
        if (posElement.top < 0) {
            transform.push(`translateY(calc(100% + ${((_c = options === null || options === void 0 ? void 0 : options.add) === null || _c === void 0 ? void 0 : _c.height) || 35})`);
            transformOriginX = 'left';
        }
        else if (posElement.bottom > pScreen.height) {
            transform.push(`translateY(calc(-100% - ${((_d = options === null || options === void 0 ? void 0 : options.add) === null || _d === void 0 ? void 0 : _d.height) || 35}px))`);
            transformOriginX = 'right';
        }
        ref.current.style.transform = transform.join(' ');
        ref.current.style.visibility = 'visible';
        ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    }, [ref, pScreen.width, pScreen.height, (_a = options === null || options === void 0 ? void 0 : options.add) === null || _a === void 0 ? void 0 : _a.width, (_b = options === null || options === void 0 ? void 0 : options.add) === null || _b === void 0 ? void 0 : _b.height]);
    return {
        handlePosition: _handlePosition
    };
}

module.exports = usePositionDropdown;
