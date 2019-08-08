document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
//--//
var intro = document.querySelector('.banner');
var body = document.querySelector('body');
var introPlayer = document.querySelector('.banner__video');

var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if (iOS) {
  body.style.backgroundImage = 'url("' + introPlayer.poster + '")';
  introPlayer.style.display = 'none';
}