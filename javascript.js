var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("languageEN");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
var y = 0;
function go() {
  if (y == 0) {
    y = 1;
    var elem = document.getElementById("languageGRM");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        y = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
document.getElementById("year").innerHTML = new Date().getFullYear();