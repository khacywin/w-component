import { RefObject, useCallback, useMemo } from 'react';

import { TPosition } from 'util/type';

function usePositionDropdown<T extends HTMLBaseElement>(ref: RefObject<T>, options: {
  add?: {
    width?: number,
    height?: number
  }
  position?: TPosition
} = {
    add: {
      width: 0,
      height: 0
    }
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

  const _handlePosition = useCallback((add?: Partial<{ left: number, right: number, top: number, bottom: number }>) => {
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
      translateX = +posElement.x - options?.add?.width || 10;
      transformOriginY = 'top';
    } else if (posElement.right > pScreen.width - 10) {
      translateX += -(posElement.right - pScreen.width) - 10;
      transformOriginY = 'bottom';
    }

    if (posElement.top < 0) {
      translateY = -posElement.height - options?.add?.height || 10;
      transformOriginX = 'left';
    } else if (posElement.bottom > pScreen.height) {
      translateY += -(posElement.bottom - pScreen.height) - 10;
    }

    ref.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    ref.current.style.visibility = 'visible';
    ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
  }, [ref, pScreen.width, pScreen.height, options?.add?.width, options?.add?.height]);

  return {
    handlePosition: _handlePosition
  };
}

export default usePositionDropdown;
