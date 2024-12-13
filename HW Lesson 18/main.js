const timerClock = document.querySelector(".timer")
const clock = document.querySelector(".clock")
let minutes = 0;
let secunds = 0;

function setTime(min,sec){
    minutes = min;
    secunds = sec;
    if(min < 10 && sec < 10){
        clock.textContent = `0${min}:0${sec}`
    }else if(min < 10 && sec >= 10){
        clock.textContent = `0${min}:${sec}`
    }else if(min >= 10 && sec < 10){
        clock.textContent = `${min}:0${sec}`
    }else{
        clock.textContent = `${min}:${sec}`
    }
}
const intervalId = setInterval(function(){
    if(secunds === 0){
        minutes--;
        secunds = 59;
    }else{
        secunds--
    }
    setTime(minutes,secunds)
    if(minutes === 0 && secunds === 0){
        clearInterval(intervalId)
    }
},1000)



setTime(0,12)