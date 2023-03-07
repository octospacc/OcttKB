/*\
Hide i18n namespace labels dynamically from the Breadcrumbs line
(by wrapping them in CSS-selectable elements)
\*/
(function(){
"use strict";
exports.name = "i18nBreadcrumbsNamespaceLabelStrip";
exports.params = [];

exports.run = function() {
try {
  var Languages = $tw.wiki.getTiddler('$:/i18n').fields.Languages.toLowerCase().split(' ');
  var Path = this.getVariable('currentTiddler');
  var Select = `.tc-story-river > div[data-tiddler-title="${Path}"] > .View-Breadcrumbs > .Path-Elem`;
  var List = document.querySelectorAll(Select + ':last-of-type');
  for (var i=0; i < List.length; i++) {
    // At end of tiddler path (e.g: Tests/Misc/Test:en)
    var Name = List[i].innerHTML.trim();
    var Code = Name.toLowerCase().split(':').slice(-1)[0];
    if (Languages.includes(Code)) {
      List[i].innerHTML = `${Name.split(':').slice(0, -1)}<span class="Inline-Hidden">:${Code}</span>`;
    } else {
      // At start of tiddler path (e.g: Testing:en/Misc/Test); handle $:/ prefix if present
      var Index = Path.startsWith('$:/') ? 2 : 1;
      var Code = Path.toLowerCase().split(':')[Index];
      if (Code) {
        Code = Code.split('/')[0];
        if (Languages.includes(Code)) {
          var List = document.querySelectorAll(`${Select}:nth-child(${Index})`);
          for (var i=0; i < List.length; i++) {
            // TODO // List[i].innerHTML = `<span class="Inline-Hidden">:${Code}</span>/${Path.split(':')[Index].split('/').slice(1).join('/')}`;
          };
        };
      };
    };
  };
} catch(e) {
  $OcttKB.ErrAtLine(e);
};
}})();