import React, {
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { TPosition } from 'components/util/type';
import { createPortal } from 'react-dom';
import useHandleDisplay from 'components/util/hooks/useHandleDisplay';
import usePositionDialog from 'components/util/hooks/usePositionDialog';

export type TRefDialog = {
  show: () => void;
  hide: () => void;
} & HTMLBaseElement;

export interface DialogProps {
  children: JSX.Element;
  clickOut?: boolean;
  position?: TPosition[];
  setIsShow?: (...arg: any) => void;
  refParent: RefObject<any>;
}

function DialogWrap({
  children,
  clickOut = false,
  position,
  setIsShow,
  refParent,
  setIsShowed,
}: DialogProps & { setIsShowed: (...arg: any) => void }) {
  const refContent = useRef<HTMLDivElement>(null);
  const refIsShowed = useRef(false);
  const { isDisplay, show, hide } = useHandleDisplay<HTMLDivElement>(refContent, clickOut);

  const { handlePosition } = usePositionDialog<HTMLDivElement>(refContent, refParent, {
    position: position || [],
  });

  useEffect(() => {
    let _hide: any;

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
        refContent.current.style.opacity = '1';
      }, 10);
    }
  }, [handlePosition, isDisplay]);

  useEffect(() => {
    setIsShow?.(isDisplay);
  }, [isDisplay, setIsShow]);

  useEffect(() => {
    refIsShowed.current && setIsShowed?.(isDisplay);
  }, [isDisplay, setIsShowed]);

  useEffect(() => {
    show();
    refIsShowed.current = true;
  }, [show]);

  return (
    isDisplay &&
    createPortal(
      <div className='w-dialog dialog-mark'>
        <div className='w-dialog-content' ref={refContent}>{children}</div>
      </div>,
      document.getElementById('modal-root')
    )
  );
}

export default React.forwardRef((props: DialogProps, ref: any) => {
  const [isShowed, setIsShowed] = useState(false);

  useImperativeHandle(ref, () => ({
    show(): void {
      setIsShowed(true);
    },

    hide(): void {
      setIsShowed(false);
    },
  }));

  return isShowed && <DialogWrap setIsShowed={setIsShowed} {...props} />;
});
