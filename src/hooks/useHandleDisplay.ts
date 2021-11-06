import { RefObject, useEffect, useState } from 'react';

function useHandleDisplay<T extends HTMLElement>(ref: RefObject<T>, clickOut = true) {
  const [isDisplay, setIsDisplay] = useState(false);
  /**
   * On toggle display
   */
  const onToggleDisplay = () => setIsDisplay(isDisplay => !isDisplay);

  /**
   * Add method in click event
   */
  function hide() {
    setTimeout(() => setIsDisplay(false), 100);
  }

  /**
   * Show
   */
  function show() {
    setIsDisplay(true);
  }

  useEffect(() => {
    if (!isDisplay) return;

    // if clicked on outside of element
    function handleClickOutside(e: any) {
      const current = ref.current;

      // When click in LI element, it's disappear
      if (clickOut) {
        const target = e.target;
        const path = e.path || (e.composedPath && e.composedPath()) || [];

        // Get li elements in dropdown menu
        const liElements = ref.current?.querySelectorAll && Object.entries(ref.current?.querySelectorAll('li')); // [{'index', node}]

        if (
          target.nodeName === 'LI' ||
          (liElements &&
            liElements.filter((node: any) => node[1].isEqualNode(target)).length > 0)
          || path.find((item: any) => item.nodeName === 'LI')
        ) {
          hide();
        }
      }

      // Handle
      if (current) {
        const path = e.path || (e.composedPath && e.composedPath()) || [];

        // Hide path when click outside
        !path.some((item: any) => current.contains(item.parentNode)) && hide();
      }
    }

    // Bind the event listener
    setTimeout(() => {
      if (ref.current?.parentElement.classList.contains('dialog-mark')) {
        ref.current.parentElement.onmouseup = handleClickOutside;
      } else {
        document.addEventListener('mouseup', handleClickOutside)
      }
    }, 10);
    
    return () => {
      // Unbind the event listener on clean up
      if (ref?.current?.parentElement.classList.contains('dialog-mark')) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ref.current.parentElement.onmouseup = null;
      } else {
        document.removeEventListener('mouseup', handleClickOutside)
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

export default useHandleDisplay;
