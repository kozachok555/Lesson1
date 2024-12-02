const root = document.body;
let counter = 0;
let slideCounter = 0;
const slides = []

function createSlide(color){
    counter++;
    const numberText = document.createElement("p")
    numberText.classList.add("text-number")
    numberText.textContent = counter;
    const slide = document.createElement("div")
    slide.classList.add(`slides-box-${color}`)
    slide.classList.add("slides-box")
    slide.style.background = color;
    slide.style.display = "none";
    slide.style.position = "absolute";
    slide.appendChild(numberText)
    divMain.appendChild(slide)
    slides.push(slide)
}
const divMain = document.createElement("div")
divMain.classList.add("task2l14")

const createBtnLeft = document.createElement("button")
createBtnLeft.classList.add("turn-left")
createBtnLeft.textContent = "Left"

createSlide("red")
createSlide("blue")
createSlide("yellow")

slides[0].style.display = "flex"

const createBtnRight = document.createElement("button")
createBtnRight.classList.add("turn-right")
createBtnRight.textContent = "Right"


createBtnRight.addEventListener("click",function(){
    if(slideCounter === slides.length-1){
        alert("this is the last page")
    }else{
        slides[slideCounter].style.display = "none";
        slideCounter++;
        slides[slideCounter].style.display = "flex";
    }
})
createBtnLeft.addEventListener("click",function(){
    if(slideCounter === 0){
        alert("this is the first page")
    }else{
        slides[slideCounter].style.display = "none";
        slideCounter--;
        slides[slideCounter].style.display = "flex"
    }
})
divMain.appendChild(createBtnLeft)
divMain.appendChild(createBtnRight)
root.appendChild(divMain)