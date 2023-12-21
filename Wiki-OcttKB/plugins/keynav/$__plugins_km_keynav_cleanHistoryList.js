/*\
title: cleanHistoryList
type: application/javascript
module-type: macro

Get the history list after removing drafts and duplicate sequential references.  
\*/

(function(){
"use strict";

exports.name = "cleanHistoryList";
exports.params = [
    {name: "history"},
    {name: "maxShow"}
];
exports.run = function(history, maxShow) {
  history = JSON.parse(history);
  //console.log("History List: " + JSON.stringify(history));

  //Loop through history removing drafts and duplicates.
  var list = [];
  var lastTid = '';
  var tidLink = '';
  var tid = '';
  //Loop in reverse to put most recent at top of resulting list
  for(let i=history.length-1; i > -1; i--) {
    tid = history[i];
    //console.log(JSON.stringify(tid));
    if(tid.title.startsWith('Draft ')) continue;
    tidLink = '[[' + tid.title + ']]';
    if(tidLink == lastTid) continue;
    list.push(tidLink); 
    lastTid = tidLink;
    if(list.length >= maxShow) break;
  }   

  //format an HTML list and return
  var toReturn = '<ul>';
  for(let tid of list) {
    toReturn += '<li>' + tid + '</li>';
  }
  toReturn += '</ul>';
  return toReturn;
};
})();