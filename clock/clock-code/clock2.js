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


var button = document.getElementById("button");
button.addEventListener("click", getSmaller);

function getSmaller (){
  var anim = document.getElementById("time");
  anim.classList.add("animation");
  var animtwo = document.getElementById("date");
  animtwo.classList.add("animation2");
  var anim3 = document.getElementById("day");
  anim3.classList.add("animation3");
  var anim4 = document.getElementById("milliseconds");
  anim4.classList.add("animation4");
  var element = document.getElementById("season");
  element.style.visibility = "hidden";
  var animbar = document.getElementById("navigation");
  animbar.classList.add("anim-bar");
  }

var button2 = document.getElementById("button2");
button2.addEventListener("click", getBigger);

function getBigger (){
  var anim = document.getElementById("time");
  anim.classList.add("anim");
  var animtwo = document.getElementById("date");
  animtwo.classList.add("anim2");
  var anim3 = document.getElementById("day");
  anim3.classList.add("anim3");
  var anim4 = document.getElementById("milliseconds");
  anim4.classList.add("anim4");
  var anim5 = document.getElementById("season");
  anim5.classList.add("anim5");
  var animback = document.getElementById("navigation");
  animback.classList.add("anim-back");
  var element = document.getElementById("year");
  element.style.visibility = "visible";
  var element = document.getElementById("week");
  element.style.visibility = "visible";
  var element = document.getElementById("moon");
  element.style.visibility = "visible";
  }



