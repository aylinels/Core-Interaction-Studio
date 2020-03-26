function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

  var day = document.getElementById("day");
  day.style.visibility = 'hidden'; 

  var button = document.getElementById("button");
  button.addEventListener("click", getSmaller);

function getSmaller (){
  var anim = document.getElementById("time");
  anim.classList.add("animation");
  var anim2 = document.getElementById("white");
  anim2.classList.add("animation2");
  var anim6 = document.getElementById("navigation");
  anim6.classList.add("anim-bar");
}

var counter = 0;
var seconds = document.getElementById('seconds');


function Clock(){
  var currentDate = new Date;
  timeUnit(currentDate.getSeconds(), seconds)
}

setInterval(Clock, 1000);

function timeUnit(output, secondsOrMinutes){
  if(output < 10){
    secondsOrMinutes.innerHTML = "0" + output;
  }else{
    secondsOrMinutes.innerHTML = output;
  }
}

var button2 = document.getElementById("button2");
button2.addEventListener("click", getBigger);
var clockTicker = setInterval(Clock, 1000);

function getBigger (){
  var anim = document.getElementById("time");
  anim.classList.add("anim");
  var anim2 = document.getElementById("white");
  anim2.classList.add("anim2");
  var element = document.getElementById("day");
  element.style.visibility = "visible";
  // var seconds = document.getElementById('seconds');
  // seconds.style.visibility = "hidden";
  clearInterval(clockTicker);
    var animback = document.getElementById("navigation");
  animback.classList.add("anim-back");
  }



