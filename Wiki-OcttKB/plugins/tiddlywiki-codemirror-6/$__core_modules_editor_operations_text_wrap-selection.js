!function(){"use strict";exports["wrap-selection"]=function(t,e){if(e instanceof Array)for(var a=0;a<e.length;a++){var r=e[a];r.selStart===r.selEnd?(r.text.substring(r.selStart-t.paramObject.prefix.length,r.selStart+t.paramObject.suffix.length)===t.paramObject.prefix+t.paramObject.suffix?(r.cutStart=e[a].selStart-t.paramObject.prefix.length,r.cutEnd=e[a].selEnd+t.paramObject.suffix.length,r.replacement="",r.newSelStart=r.cutStart):(r.cutStart=e[a].selStart,r.cutEnd=e[a].selEnd,r.replacement=t.paramObject.prefix+t.paramObject.suffix,r.newSelStart=e[a].selStart+t.paramObject.prefix.length),r.newSelEnd=r.newSelStart):(r.text.substring(r.selStart,r.selStart+t.paramObject.prefix.length)===t.paramObject.prefix&&r.text.substring(r.selEnd-t.paramObject.suffix.length,r.selEnd)===t.paramObject.suffix?(r.cutStart=e[a].selStart,r.cutEnd=e[a].selEnd,r.replacement=r.selection.substring(t.paramObject.prefix.length,r.selection.length-t.paramObject.suffix.length)):(r.cutStart=e[a].selStart,r.cutEnd=e[a].selEnd,r.replacement=t.paramObject.prefix+r.selection+t.paramObject.suffix),r.newSelStart=e[a].selStart,r.newSelEnd=e[a].selStart+r.replacement.length)}else e.selStart===e.selEnd?(e.text.substring(e.selStart-t.paramObject.prefix.length,e.selStart+t.paramObject.suffix.length)===t.paramObject.prefix+t.paramObject.suffix?(e.cutStart=e.selStart-t.paramObject.prefix.length,e.cutEnd=e.selEnd+t.paramObject.suffix.length,e.replacement="",e.newSelStart=e.cutStart):(e.cutStart=e.selStart,e.cutEnd=e.selEnd,e.replacement=t.paramObject.prefix+t.paramObject.suffix,e.newSelStart=e.selStart+t.paramObject.prefix.length),e.newSelEnd=e.newSelStart):(e.text.substring(e.selStart,e.selStart+t.paramObject.prefix.length)===t.paramObject.prefix&&e.text.substring(e.selEnd-t.paramObject.suffix.length,e.selEnd)===t.paramObject.suffix?(e.cutStart=e.selStart,e.cutEnd=e.selEnd,e.replacement=e.selection.substring(t.paramObject.prefix.length,e.selection.length-t.paramObject.suffix.length)):(e.cutStart=e.selStart,e.cutEnd=e.selEnd,e.replacement=t.paramObject.prefix+e.selection+t.paramObject.suffix),e.newSelStart=e.selStart,e.newSelEnd=e.selStart+e.replacement.length)}}();