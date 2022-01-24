'use strict';

var React = require('react');
var Form__FormGroup = require('./_FormGroup.js');
var _util_generatedId = require('../_util/generatedId.js');
var styled = require('styled-components');
require('../_space-5cfb2697.js');
require('../_fontWeight-72109252.js');
require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
require('../_opacity-19bf620b.js');
require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
require('../index-9390237c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Slider = React__default["default"].memo(({ fnChange, label, name, style, value = 0, total = 100, defaultValue, inline, backgroundColor, color, step = 1, }) => {
    // val = n * step
    // per = val / total
    const ref = React.useRef(null);
    const refInput = React.useRef();
    const refIsLeaving = React.useRef(false);
    const refBounding = React.useRef(null);
    const refMove = React.useRef(0);
    const id = React.useMemo(() => _util_generatedId("input"), []);
    const [val, setVal] = React.useState(defaultValue || 0);
    const per = React.useMemo(() => (val / total) * 100, [total, val]);
    const calcPosition = React.useCallback((pos) => {
        if (!refBounding.current) {
            refBounding.current = ref.current.getBoundingClientRect();
        }
        const perPositionWidth = (pos - refBounding.current.x) / refBounding.current.width;
        return { valMove: total * perPositionWidth, perPositionWidth };
    }, [total]);
    const handleMouse = React.useCallback((e) => {
        if (!refIsLeaving.current)
            return;
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
    }, [calcPosition, step, total]);
    const handleMouseUp = React.useCallback(() => {
        refIsLeaving.current = false;
        setVal(refMove.current);
        refInput.current.value = refMove.current.toString();
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(refMove.current);
        document.removeEventListener("mousemove", handleMouse);
    }, [fnChange, handleMouse]);
    const onMouseDownLive = React.useCallback((e) => {
        if (refIsLeaving.current)
            return;
        const { valMove } = calcPosition(e.pageX);
        const _val = Math.floor(valMove / step) * step;
        refInput.current.value = refMove.current.toString();
        setVal(_val);
        fnChange === null || fnChange === void 0 ? void 0 : fnChange(_val);
    }, [calcPosition, fnChange, step]);
    const onMouseDown = React.useCallback(() => {
        refIsLeaving.current = true;
        document.addEventListener("mousemove", handleMouse);
        document.addEventListener("mouseup", handleMouseUp);
    }, [handleMouse, handleMouseUp]);
    React.useEffect(() => {
        if (!value)
            return;
        setVal(value);
        refInput.current.value = value.toString();
        refMove.current = value;
    }, [value]);
    React.useEffect(() => {
        return () => {
            document.removeEventListener("mousemove", handleMouse);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouse, handleMouseUp]);
    return (React__default["default"].createElement(Form__FormGroup["default"], { style: Object.assign(Object.assign({}, style), { border: "none" }), label: label, inline: inline, id: id, className: "w-form-item", isFocus: true },
        React__default["default"].createElement(Wrap, { className: "w-slider" },
            React__default["default"].createElement("input", { type: "hidden", name: name, ref: refInput }),
            React__default["default"].createElement(WrapSlider, { ref: ref, className: "w-slider-bar", backgroundColor: backgroundColor, onMouseDown: onMouseDownLive },
                React__default["default"].createElement(Slider$1, { color: color, percentage: per },
                    React__default["default"].createElement(Point, { onMouseDown: onMouseDown, className: "w-slider-pointer" },
                        React__default["default"].createElement(ValueWrap, null, Math.floor(val / step) * step)))))));
});
const Wrap = styled__default["default"].div `
  min-height: 20px;
  padding: 12px 0;
  width: 100%;
`;
const WrapSlider = styled__default["default"].div `
  background-color: ${({ backgroundColor }) => backgroundColor || "var(--background)"};
  width: 100%;
  height: 8px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;
const Slider$1 = styled__default["default"].div `
  background-color: ${({ color }) => color || "var(--primary)"};
  position: absolute;
  height: 8px;
  width: ${({ percentage }) => percentage}%;
  border-radius: 5px;
  top: 0;
  left: 0;
`;
const ValueWrap = styled__default["default"].div `
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
const Point = styled__default["default"].div `
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

module.exports = Slider;
