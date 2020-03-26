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
  if (i < 10) {i = "0" + i};
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
  var anim5 = document.getElementById("season");
  anim5.classList.add("animation5");
  var anim6 = document.getElementById("navigation");
  anim6.classList.add("anim-bar");
  var element = document.getElementById("year");
  element.style.display = "none";
  var element = document.getElementById("week");
  element.style.display = "none";
  var element = document.getElementById("moon");
  element.style.display = "none";

  }




