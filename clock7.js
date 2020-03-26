function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('time').innerHTML =
  h + ":" + m ;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

var button = document.getElementById("button");
button.addEventListener("click", getSmaller);

function getSmaller (){
  var anim = document.getElementById("time");
  anim.classList.add("animation");
  var anim6 = document.getElementById("navigation");
  anim6.classList.add("anim-bar");
  }

var button2 = document.getElementById("button2");
button2.addEventListener("click", getBigger);

function getBigger (){
  var anim = document.getElementById("time");
  anim.classList.add("anim");
  var animback = document.getElementById("navigation");
  animback.classList.add("anim-back");
  }


