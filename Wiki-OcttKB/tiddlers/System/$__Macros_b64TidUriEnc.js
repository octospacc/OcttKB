/*\
Return the content of a tiddler encoded as [[Base64]] and encapsulated in a data URI.
<<b64TidUriEnc "Tiddler Name">>
\*/

(function(){
"use strict";
exports.name = "b64TidUriEnc";
exports.params = [
	{name: "Name"}
];

exports.run = function(Name) {
	try {
		let Tid = $tw.wiki.getTiddler(Name);
		let Type = Tid.fields.type || "text/vnd.tiddlywiki";
		let Data = $tw.utils.base64Encode(Tid.fields.text);
		return "data:" + Type + ";base64," + Data;
	} catch(e) {
		return e;
	};
};
})();