var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function startTimer() {
  msec++;
  msecHeading.innerHTML = msec;

//msec to sec
  if (msec >= 100) {
    sec++;
    
    if(sec < 10){
        secHeading.innerHTML ="0" + sec + ":";
    }else{
        secHeading.innerHTML =sec + ":";
    }
    msec = 0;
  }


//sec to min
  if (sec >= 60) {
    min++;
    
    if(min < 10){
        minHeading.innerHTML ="0" + min + ":";
    }else{
        minHeading.innerHTML =min + ":";
    }
    
    sec = 0;
  }


//min to hour
  if (min >= 60) {
    hour++;
    
    if(hour < 10){
        hourHeading.innerHTML ="0" + hour + ":";
    }else{
        hourHeading.innerHTML =hour + ":";
    }

    min = 0;
  }
}

function start() {
  var btn = document.getElementById("btnstart");

  interval = setInterval(startTimer, 10);

  btn.disabled = true;
}

function stop() {
  var btn = document.getElementById("btnstart");

  clearInterval(interval);

  btn.disabled = false;
}

function reset() {
  hour = "00";
  min = "00";
  sec = "00";
  msec = "00";
  hourHeading.innerHTML = "00:";
  minHeading.innerHTML = "00:";
  secHeading.innerHTML = "00:";
  msecHeading.innerHTML = "00";
  stop();
}
