import { useMemo, useCallback } from 'react';

function usePositionPortal(ref, refParent, options = {
    add: {
        width: 0,
        height: 0
    },
    position: []
}) {
    // Get position of screen
    const pScreen = useMemo(() => {
        return {
            x: 0,
            y: 0,
            height: window.innerHeight,
            width: window.innerWidth,
        };
    }, []);
    const _calPositionOfRef = useCallback((x, y) => {
        const p = ref.current.getBoundingClientRect();
        return {
            bottom: p.bottom + y,
            height: p.height,
            left: p.left + x,
            right: p.right + x,
            top: p.top + y,
            width: p.width,
            x: p.x + x,
            y: p.y + y
        };
    }, [ref]);
    const _handlePosition = useCallback(() => {
        let translateY = 0, translateX = 0, transformOriginX, transformOriginY;
        const pParent = refParent.current.getBoundingClientRect();
        let pElement = _calPositionOfRef(translateX, translateY);
        /**
         * Set default position of element
         */
        if (options.position.indexOf('top') >= 0) {
            translateY = pParent.top - pElement.height;
        }
        else {
            translateY = pParent.bottom;
        }
        if (options.position.indexOf('right') >= 0) {
            translateX = pParent.right - pElement.width;
        }
        else {
            translateX = pParent.left;
        }
        // Cal again position of element to continue calculating position
        pElement = _calPositionOfRef(translateX, translateY);
        /**
         * Set case is overload
         */
        // Cal again position of Element
        // When it is more than height of screen
        if (pElement.bottom > (pScreen.height - 10)) {
            translateY += -(pElement.height + pParent.height);
        }
        // Cal again position of element to continue calculating position
        pElement = _calPositionOfRef(translateX, translateY);
        // When it is more than width of screen
        if (pElement.right > (pScreen.width - 10)) {
            translateX += -(pElement.width - (pParent.width));
        }
        ref.current.style.top = translateY + 'px';
        ref.current.style.left = translateX + 'px';
        ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
        ref.current.style.visibility = 'visible';
    }, [_calPositionOfRef, options.position, pScreen.height, pScreen.width, ref, refParent]);
    return {
        handlePosition: _handlePosition
    };
}

export { usePositionPortal as u };
//# sourceMappingURL=usePositionDialog-50994a2f.js.map
