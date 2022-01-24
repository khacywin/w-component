'use strict';

var styled = require('styled-components');

const Fully = styled.css `
  opacity: 1;
`;
const SemiFully = styled.css `
  opacity: 0.8;
`;
const SemiTransparent = styled.css `
  opacity: 0.5;
`;
const Transparent = styled.css `
  opacity: 0;
`;
const ImageTransparent = styled.css `
  opacity: 0.3;
`;

var _opacity = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Fully: Fully,
  SemiFully: SemiFully,
  SemiTransparent: SemiTransparent,
  Transparent: Transparent,
  ImageTransparent: ImageTransparent
});

exports.Fully = Fully;
exports.ImageTransparent = ImageTransparent;
exports.SemiFully = SemiFully;
exports.SemiTransparent = SemiTransparent;
exports.Transparent = Transparent;
exports._opacity = _opacity;
