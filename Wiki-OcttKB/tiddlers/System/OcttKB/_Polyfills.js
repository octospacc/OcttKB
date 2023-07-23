/*\
Load our custom polyfills, for old browsers support.
\*/
exports.startup = function() {
try {

// https://stackoverflow.com/a/63958411
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function replaceAll(search, replace) {
    return this.split(search).join(replace);
  };
};

} catch(e) {
  const Str = `${e.stack.split('\n')[0]}: ${e}`
  console.log(Str);
  return Str;
};
};