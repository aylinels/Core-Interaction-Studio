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

function timeUnit(output, secondsOrMinutes){
  if(output < 10){
    secondsOrMinutes.innerHTML = "0" + output;
  }else{
    secondsOrMinutes.innerHTML = output;
  }
}

var milliseconds = document.getElementById("milliseconds")

function Clock(){ 
  var currentDate = new Date;
   timeUnit(currentDate.getMilliseconds(), milliseconds)
}

setInterval(Clock, 1);
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock


var button = document.getElementById("button");
button.addEventListener("click", getSmaller);

function getSmaller (){
  var anim = document.getElementById("time");
  anim.classList.add("animation");
  var animtwo = document.getElementById("date");
  animtwo.classList.add("animation2");
  var animthree = document.getElementById("day");
  animthree.classList.add("animation3");
  var element = document.getElementById("milliseconds");
  element.parentNode.removeChild(element);
  var anim6 = document.getElementById("navigation");
  anim6.classList.add("animbar");
  }

var button2 = document.getElementById("button2");
button2.addEventListener("click", getBigger);

function getBigger (){
  var anim = document.getElementById("time");
  anim.classList.add("anim");
  var anim2 = document.getElementById("date");
  anim2.classList.add("anim2");
  var anim3 = document.getElementById("day");
  anim3.classList.add("anim3");
  var anim4 = document.getElementById("milliseconds");
  anim4.classList.add("anim4");
  var animback = document.getElementById("navigation");
  animback.classList.add("anim-back");
  }


