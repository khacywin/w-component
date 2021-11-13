import { RefObject, useCallback, useMemo } from 'react';

import { TPosition } from '../type';

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
      transform.push(`translateX(${-posElement.x - options?.add?.width || 0}px)`);
      transformOriginY = 'top';
    } else if (posElement.right > pScreen.width - 10) {
      transform.push(`translateX(-100% - ${options?.add?.width || 0}px)`);
      transformOriginY = 'bottom';
    }

    if (posElement.top < 0) {
      transform.push(`translateY(calc(100% + ${options?.add?.height || 35})`);
      transformOriginX = 'left';
    } else if (posElement.bottom > pScreen.height) {
      transform.push(`translateY(calc(-100% - ${options?.add?.height || 35}px))`);
      transformOriginX = 'right';
    }

    ref.current.style.transform = transform.join(' ');
    ref.current.style.visibility = 'visible';
    ref.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
  }, [ref, pScreen.width, pScreen.height, options?.add?.width, options?.add?.height]);

  return {
    handlePosition: _handlePosition
  };
}

export default usePositionDropdown;
