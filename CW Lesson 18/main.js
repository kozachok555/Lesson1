const myClock = document.querySelector(".clock")
const clockText = document.querySelector(".data")
const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
let currentClock = null;

class Clock{
    constructor(elem){
        this.clock = elem;
        this.intervalId = null;
    }
    start(){
        this.newDateF()
    }
    stop(){
        if(this.intervalId){
            clearInterval(this.intervalId)
        }
    }
    clockCreate(){
        this.clock.textContent = new Date()
    }
    newDateF(){
        this.clockCreate()
        this.intervalId = setInterval(() =>{
            this.clockCreate()
        },1000)
    }
}
startButton.addEventListener("click",function(){
    currentClock = new Clock(clockText)
    currentClock.start()
})
stopButton.addEventListener("click",function(){
    if(currentClock){
        currentClock.stop()
    }
})

function hello (callback){
    const name = "Vova"
    callback(name)
}
function myFun(name){
    console.log(name + " is my name")
}
hello(myFun)