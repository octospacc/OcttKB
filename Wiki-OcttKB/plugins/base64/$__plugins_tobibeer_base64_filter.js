/*\
title: $:/plugins/tobibeer/base64/filter.js
type: application/javascript
module-type: filteroperator

A filter to encode and decode base64

@preserve
\*/
(function(){"use strict";exports.base64=function(e,r,t){var n="",o=r.suffix=="decode";try{if(r.operand){n=r.operand}else{e(function(e,r){n+=r})}n=o?atob(n):btoa(n)}catch(i){return["Error in base64 filter trying to "+(o?"de":"en")+"code'"+n+"':\n"+i]}return[n]}})();