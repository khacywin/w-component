const wcomponents = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

wcomponents.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  wcomponents.locales[matches[1]] = req(mod).default;
});

module.exports = wcomponents;
