/*\
Load our reusable, comodity JS functions.
\*/
exports.startup = function() {
try {
var $OcttKB = {};

$OcttKB.ErrAtLine = function ErrAtLine(e) {
  var Str = `${e.stack.split('\n')[0]}: ${e}`
  console.log(Str);
  return Str;
};

/*
$OcttKB.EvalDecodeURI = function EvalDecodeURI(Str) {
  eval(decodeURIComponent(Str));
};
*/

$OcttKB.Options = {};

$OcttKB.Options.Trues = [1, true, 'yes'];
$OcttKB.Options.Falses = [0, false, 'no'];
$OcttKB.Options.Nulls = ['none', 'null'];

$OcttKB.MediaWiki = {};

$OcttKB.MediaWiki.MkDomain = function MkDomain(Domain) {
  if (!Domain) {
    Domain = 'en.wikipedia.org';
  } else
  if (!Domain.includes('.')) {
    Domain += '.wikipedia.org';
  };
  Domain = Domain.toLowerCase();
  if (!Domain.startsWith('http://') && !Domain.startsWith('https://')) {
    Domain = 'https://' + Domain;
  };
  return Domain;
};

window.$OcttKB = $OcttKB;
window.ErrAtLine = $OcttKB.ErrAtLine;
/*window.EvalDecodeURI = $OcttKB.EvalDecodeURI;*/
} catch(e) {
  var Str = `${e.stack.split('\n')[0]}: ${e}`
  console.log(Str);
  return Str;
};
};