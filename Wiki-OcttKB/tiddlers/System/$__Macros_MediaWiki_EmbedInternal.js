/*\
See [[$:/Macros/MediaWiki]] for usage of this macro.
Note: source must always be credited, and thus it's not ideal to use this macro directly. Please use the <<MediaWiki>> wrapper macro instead, as it provides a link to the source automatically. (This feature is implemented in its own non-JS macro to make at least the URL show on static wiki exports.)
\*/

(function(){
"use strict";
exports.name = "MediaWikiEmbedInternal";
exports.params = [
  {name: "Article"},
  {name: "Domain"},
  {name: "Sections"},
];

exports.run = function(Article, Domain, Sections) {
try {
  let Text;
  Sections = parseInt(Sections) || 0;
  Domain = $OcttKB.MediaWiki.MkDomain(Domain);
  const Req = new XMLHttpRequest();
  Req.open('GET', Domain + '/w/api.php?action=query&formatversion=2&prop=extracts&format=json&origin=*&titles=' + Article, false);
  Req.send();
  Text = JSON.parse(Req.responseText).query.pages[0].extract;
  if (!Text) {
    Text = '<p>An error occurred while trying to extract the content. Close and reopen this <i>tiddler</i> to retry, or click the link to open the source in a new tab.</p>'
  };
  Text = Text.replaceAllTxt('\n', '').replaceAllTxt('<p class="mw-empty-elt"></p>', '');
  if (Sections != 0) {
    for (let i=1; i<=6; i++) {
      Text = Text.replaceAllTxt(`</p><h${i}>`, `</p><!--:PARAGRAPH:--->\n<h${i}>`);
    };
    Text = Text.replaceAllTxt(`</p><p>`, `</p><!--:PARAGRAPH:---><p>`);
    //Text = Text.split('<!--:PARAGRAPH:--->').slice(0, Max+1).join('');
    //Text = Text.split('<p>').slice(0, Max+1).join('<p>');
    if (Sections < 0) {
      Sections = 0;
    };
    Text = Text.split('<!--:PARAGRAPH:--->').slice(0, Sections).join('');
    //Text += '<p>[...]</p>'
  };
/*
  Sections = Sections.split(' ');
  for (let i=0; i<Sections.length; i++) {
    const Sec = Sections[i];
    if (Sec) {
      const Ind = Sec.toLowerCase()[0];
      const Val = Sec.substring(1);
      if (Ind == 'p' || Ind == 's') {
        if (Ind == 'p') {
          const Sep = '<!--:PARAGRAPH:--->';
        } else 
        if (Ind == 's') {
          const Sep = '<!--:SECTION:--->';
        };
        Text = Text.split(Sep).slice(0, Val).join('');
      } else
      if (Ind == '#') {
        
      };
    };
  };
*/
  return Text;
} catch(e) {
  return $OcttKB.ErrAtLine(e);
};
}})();