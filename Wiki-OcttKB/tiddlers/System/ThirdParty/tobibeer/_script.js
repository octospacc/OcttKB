(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
enables js via <<script>> and disables with <<script 0>>
Modified from original to add ability to exec scripts with a script="" param
*/

exports.name = "script";

exports.params = [
	{name: "run"},
    {name: "script"},
];

/*
Run the macro
*/
exports.run = function(run, script) {
        var off = run ? run.toLowerCase() : false;
	if(off && ["0","no","off","false"].indexOf(off) > -1) {
		$tw.config.htmlUnsafeElements = ["script"];
	} else {
		$tw.config.htmlUnsafeElements = [];
        if (script) {
            eval(script);
        }
	}
return "";
};
})();