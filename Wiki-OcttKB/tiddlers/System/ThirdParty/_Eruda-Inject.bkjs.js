javascript:(
function () {
  if (!document.getElementById('eruda-main')) {
    var elem = document.createElement('script');
    elem.id = 'eruda-main';
    elem.src = 'https://cdn.jsdelivr.net/npm/eruda';
    document.body.appendChild(elem);
    elem.onload = function () {
      eruda.init();
    };
  };
})();