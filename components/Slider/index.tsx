import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import FormGroup from "components/Form/_FormGroup";
import generatedId from "util/generatedId";
import styled from "styled-components";

export interface SliderProps {
  defaultValue?: number;
  disabled?: boolean;
  fnChange?: (val: number) => void;
  label?: string;
  name?: string;
  style?: React.CSSProperties;
  value?: number;
  total?: number;
  inline?: boolean;
  color?: string;
  backgroundColor?: string;
  step?: number;
}
export default React.memo(
  ({
    fnChange,
    label,
    name,
    style,
    value = 0,
    total = 100,
    defaultValue,
    inline,
    backgroundColor,
    color,
    step = 1,
  }: SliderProps) => {
    // val = n * step
    // per = val / total

    const ref = useRef<HTMLDivElement>(null);
    const refInput = useRef<HTMLInputElement>();
    const refIsLeaving = useRef(false);
    const refBounding = useRef(null);
    const refMove = useRef(0);

    const id = useMemo(() => generatedId("input"), []);
    const [val, setVal] = useState(defaultValue || 0);

    const per = useMemo(() => (val / total) * 100, [total, val]);

    const calcPosition = useCallback(
      (pos: number) => {
        if (!refBounding.current) {
          refBounding.current = ref.current.getBoundingClientRect();
        }

        const perPositionWidth =
          (pos - refBounding.current.x) / refBounding.current.width;

        return { valMove: total * perPositionWidth, perPositionWidth };
      },
      [total]
    );

    const handleMouse = useCallback(
      (e: MouseEvent) => {
        if (!refIsLeaving.current) return;

        const { valMove, perPositionWidth } = calcPosition(e.x);

        // Limit
        if (perPositionWidth < 0) {
          setVal(0);
          return;
        }

        if (perPositionWidth > 1) {
          setVal(total);
          return;
        }

        // Base width

        refMove.current = Math.floor(valMove / step) * step;

        setVal(valMove);
      },
      [calcPosition, step, total]
    );

    const handleMouseUp = useCallback(() => {
      refIsLeaving.current = false;

      setVal(refMove.current);
      refInput.current.value = refMove.current.toString();
      fnChange?.(refMove.current);

      document.removeEventListener("mousemove", handleMouse);
    }, [fnChange, handleMouse]);

    const onMouseDownLive = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (refIsLeaving.current) return;

        const { valMove } = calcPosition(e.pageX);

        const _val = Math.floor(valMove / step) * step;
        refInput.current.value = refMove.current.toString();
        setVal(_val);
        fnChange?.(_val);
      },
      [calcPosition, fnChange, step]
    );

    const onMouseDown = useCallback(() => {
      refIsLeaving.current = true;

      document.addEventListener("mousemove", handleMouse);
      document.addEventListener("mouseup", handleMouseUp);
    }, [handleMouse, handleMouseUp]);

    useEffect(() => {
      if (!value) return;

      setVal(value);
      refInput.current.value = value.toString();
      refMove.current = value;
    }, [value]);

    useEffect(() => {
      return () => {
        document.removeEventListener("mousemove", handleMouse);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [handleMouse, handleMouseUp]);

    return (
      <FormGroup
        style={{
          ...style,
          border: "none",
        }}
        label={label}
        inline={inline}
        id={id}
        className="w-form-item"
        isFocus
      >
        <Wrap className="w-slider">
          <input type="hidden" name={name} ref={refInput} />
          <WrapSlider
            ref={ref}
            className="w-slider-bar"
            backgroundColor={backgroundColor}
            onMouseDown={onMouseDownLive}
          >
            <Slider color={color} percentage={per}>
              <Point onMouseDown={onMouseDown} className="w-slider-pointer">
                <ValueWrap>{Math.floor(val / step) * step}</ValueWrap>
              </Point>
            </Slider>
          </WrapSlider>
        </Wrap>
      </FormGroup>
    );
  }
);

const Wrap = styled.div`
  min-height: 20px;
  padding: 12px 0;
  width: 100%;
`;

const WrapSlider = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--background)"};
  width: 100%;
  height: 8px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

const Slider = styled.div<{ color: string; percentage: number }>`
  background-color: ${({ color }) => color || "var(--primary)"};
  position: absolute;
  height: 8px;
  width: ${({ percentage }) => percentage}%;
  border-radius: 5px;
  top: 0;
  left: 0;
`;

const ValueWrap = styled.div`
  position: absolute;
  background-color: var(--text);
  color: var(--backgroundContent);
  bottom: calc(100% + 3px);
  right: 0;
  padding: 5px;
  border-radius: 4px;
  transform: translateX(calc(50% - 4px));
  display: none;
`;

const Point = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--backgroundContent);
  border: 1px solid var(--primary);
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(3px, -3px);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1px 2px var(--primary);

    ${ValueWrap} {
      display: block;
    }
  }
`;
