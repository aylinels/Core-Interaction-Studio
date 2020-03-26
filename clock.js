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
// we want it to take the current count
// and then add a 0 to the count
//  and replace the current seconds value
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


setInterval(function(){
 var element = document.getElementById("week");
 element.parentNode.removeChild(element);
 var element = document.getElementById("year");
 element.parentNode.removeChild(element);
 var element = document.getElementById("moon");
 element.parentNode.removeChild(element);
}, 4000)

setInterval(function(){
 var element = document.getElementById("season");
 element.parentNode.removeChild(element);
 }, 4000)

// setInterval(function(){
//  var element = document.getElementById("milliseconds");
//  element.parentNode.removeChild(element);
// }, 4000)

setInterval(function(){
 var element = document.getElementById("date");
 element.parentNode.removeChild(element);
}, 4000)

setInterval(function(){
 var element = document.getElementById("day");
 element.parentNode.removeChild(element);
}, 4000)
