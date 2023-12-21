/*\
title: storynav
type: application/javascript
module-type: macro

Get tiddler at the indicated position in the story list.  
\*/

(function(){
"use strict";

exports.name = "storynav";
exports.params = [
    {name: "storylist"},
    {name: "current"},
    {name: "position"}
];
exports.run = function(storylist, current, position) {
            //console.log("Story List: " + storylist);
            //storylist=storylist.replaceAll("[[","");
            //storylist=storylist.replaceAll("]]","");
            storylist = storylist.split(",");
            //console.log("Story List: " + storylist);
//console.log("Current: " + current);
//console.log("Position: " + position);
            var tiddler = "none";
            var len = storylist.length;
            var idx = 0;
//console.log("Length: " + len);
            if(len == 1) {
                tiddler = current;
            } else if(position == "prev") {
                for (tiddler of storylist) {
                    //console.log("Evaluating tiddler: " + tiddler + " vs " + current);
                    if(tiddler == current) {
                        if(idx >= len-1) tiddler = storylist[0];
                        else tiddler = storylist[idx+1]
                        break;
                    }
                    idx++;
                }
            } else if(position == "next") {
                for (tiddler of storylist) {
                    //console.log("Evaluating tiddler: " + tiddler + " vs " + current);
                    if(tiddler == current) {
                        if(idx == 0) tiddler = storylist[len-1];
                        else tiddler = storylist[idx-1]
                        break;
                    }
                    idx++;
                }
            } else if(position == "first") {
                tiddler = storylist[0];
            } else if(position == "last") {
//console.log("HIT position = last. Jumping to last tiddler in story.");
                tiddler = storylist[len-1];
            } else {
                tiddler = current;
            }
            //console.log('Navigate to: "' + tiddler + '"');
            //console.log('Returning: ' +  '<$navigator story="$:/StoryList" history="$:/HistoryList"><$action-navigate $to="""' + tiddler + '""" $scroll="yes" /></$navigator>\n\n' + tiddler);
            //IMPORTANT - Macro just returns wikitext to be interpreted. 
            //return tiddler;
            return '<$navigator story="$:/StoryList" history="$:/HistoryList"><$action-navigate $to="""' + tiddler + '""" $scroll="yes" /></$navigator>\n\n' + tiddler;
        };
})();