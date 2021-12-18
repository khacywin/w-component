import React, {
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { TPosition } from "util/type";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useHandleDisplay from "hooks/useHandleDisplay";
import usePositionDialog from "hooks/usePositionDialog";

export type TRefDialog = {
  show: () => void;
  hide: () => void;
} & HTMLBaseElement;

interface IProps {
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
}: IProps & { setIsShowed: (...arg: any) => void }) {
  const refContent = useRef<HTMLDivElement>(null);
  const refIsShowed = useRef(false);
  const { isDisplay, show, hide } = useHandleDisplay<HTMLDivElement>(
    refContent,
    clickOut
  );

  const { handlePosition } = usePositionDialog<HTMLDivElement>(
    refContent,
    refParent,
    {
      position: position || [],
    }
  );

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
        if (refContent.current?.style) refContent.current.style.opacity = "1";
      }, 10);
    }
  }, [handlePosition, isDisplay]);

  useEffect(() => {
    if (refIsShowed.current) {
      setIsShowed?.(isDisplay);
      setIsShow?.(!!isDisplay);
    }
  }, [isDisplay, setIsShow, setIsShowed]);

  useEffect(() => {
    show();
    refIsShowed.current = true;
  }, [show]);

  // Check id container to add
  useEffect(() => {
    const ele = document.getElementById("modal-root");

    if (!ele) {
      const modalRootEle = document.createElement("div");
      modalRootEle.id = "modal-root";

      document.querySelector("body").appendChild(modalRootEle);
    }
  }, []);

  return (
    isDisplay &&
    createPortal(
      <Wrap className="dialog-mark">
        <WrapContent ref={refContent}>{children}</WrapContent>
      </Wrap>,
      document.getElementById("modal-root")
    )
  );
}

export default React.forwardRef((props: IProps, ref: any) => {
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

const Wrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;

const WrapContent = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;
