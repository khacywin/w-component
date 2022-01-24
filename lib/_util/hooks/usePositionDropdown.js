'use strict';

var React = require('react');

function usePositionDropdown(ref) {
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
        const posElement = ref.current.getBoundingClientRect();
        let transformOriginX = 'left';
        let transformOriginY = 'top';
        let translateX = 0, translateY = 0;
        if (add) {
            translateX += add.left || 0;
            translateX += -add.right || 0;
            translateY += -add.bottom || 0;
            translateY += -add.top || 0;
        }
        if (posElement.x < 0) {
            translateX += -posElement.x + 10;
            transformOriginX = 'left';
        }
        else if (posElement.right > pScreen.width - 10) {
            translateX += -(posElement.right - pScreen.width) - 10;
            transformOriginX = 'right';
        }
        if (posElement.top < 0) {
            translateY += -posElement.top + 10;
            transformOriginY = 'top';
        }
        else if (posElement.bottom > pScreen.height - 10) {
            transformOriginY = 'bottom';
            translateY += -(posElement.bottom - pScreen.height) - 10;
        }
        ref.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
        ref.current.style.visibility = 'visible';
        ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    }, [ref, pScreen.width, pScreen.height]);
    return {
        handlePosition: _handlePosition
    };
}

module.exports = usePositionDropdown;
