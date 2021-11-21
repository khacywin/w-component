function pascalCase(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (_, n) => n.toUpperCase());
}

const req = require.context('./../components', true, /^\.\/[^_][\w-]+\/style\/index\.scss?$/);

req.keys().forEach(mod => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  if (match && match[1]) {
    if (match[1] === 'message' || match[1] === 'notification') {
      // message & notification should not be capitalized
      exports[match[1]] = v;
    } else {
      exports[pascalCase(match[1])] = v;
    }
  }
});

module.exports = exports;