/*\
Get the cover image from a MediaWiki article.
[<<]MediaWikiGetCover "Article" "Full Domain OR Wikipedia Subdomain" "Manual URL OR NULL"[>>]
\*/

(function(){
"use strict";
exports.name = "MediaWikiGetCover";
exports.params = [
  {name: "Article"},
  {name: "Domain"},
  {name: "URL"},
];

exports.run = function(Article, Domain, URL) {
try {
  if (!URL || URL && !$OcttKB.Options.Nulls.includes(URL.toLowerCase())) {
    let File;
    Domain = $OcttKB.MediaWiki.MkDomain(Domain);
    const Req = new XMLHttpRequest();
    Req.open('GET', Domain + '/w/api.php?action=query&prop=pageimages&format=json&piprop=original&origin=*&titles=' + Article, false);
    Req.send();
    File = Object.values(JSON.parse(Req.responseText).query.pages)[0];
    if (File && File.original && File.original.source) {
      return `<img src="${File.original.source}">`;
    };
  };
  return '';
} catch(e) {
  return $OcttKB.ErrAtLine(e);
};
}})();