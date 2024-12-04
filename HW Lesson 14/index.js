const root = document.body;
let slideCounter = 0;
let counter = 0;
const slides = [];
const slidesBtn = [];
const div = document.createElement("div")
div.classList.add("main")
const createDivBtn = document.createElement("div")
createDivBtn.classList.add("btn-box")
function createSlide(someText){
    counter++;
    const slide = document.createElement("div")
    const slideText = document.createElement("p")
    const createButton = document.createElement("button")
    createButton.textContent = "o"
    createButton.classList.add("tog-btn")
    createButton.setAttribute("id",`${counter}`)
    slidesBtn.push(createButton)

    slideText.textContent = `${someText}`
    slide.classList.add("slides-box")
    slide.style.display = "none";
    slide.style.position = "absolute";
    div.appendChild(slide)
    createDivBtn.appendChild(createButton)
    slides.push(slide)
    slide.appendChild(slideText)
    createButton.addEventListener("click",function(e){
        for (const element of slidesBtn) {
            element.style.background = "red"
        }
        e.target.style.background = "green"
        createBtnLeft.style.visibility = "visible";
        createBtnRight.style.visibility = "visible";
        slides[slideCounter].style.display = "none";
        slideCounter = e.target.id-1;
        slides[slideCounter].style.display = "flex"
        if(slideCounter === 0){
            createBtnLeft.style.visibility = "hidden";
        }else if(slideCounter === slides.length -1){
            createBtnRight.style.visibility = "hidden";
        }
    
    })
}

const createBtnLeft = document.createElement("button")
createBtnLeft.classList.add("turn-left")
createBtnLeft.textContent = "Left"

createSlide("Hello , this is my task")
createSlide("Aaaaaa help me")
createSlide("very interesting")
slides[0].style.display = "flex"
slidesBtn[0].style.background = "green"

const createBtnRight = document.createElement("button")
createBtnRight.classList.add("turn-right")
createBtnRight.textContent = "Right"


createBtnRight.addEventListener("click",function(){
    createBtnLeft.style.visibility = "visible";
    slides[slideCounter].style.display = "none";
    slidesBtn[slideCounter].style.background = "red";
    slideCounter++;
    slides[slideCounter].style.display = "flex";
    slidesBtn[slideCounter].style.background = "green";
    if(slideCounter === slides.length -1){
        createBtnRight.style.visibility = "hidden";
    }
})
createBtnLeft.addEventListener("click",function(){
    createBtnRight.style.visibility = "visible";
    slides[slideCounter].style.display = "none";
    slidesBtn[slideCounter].style.background = "red";
    slideCounter--;
    slides[slideCounter].style.display = "flex"
    slidesBtn[slideCounter].style.background = "green";
    if(slideCounter === 0){
        createBtnLeft.style.visibility = "hidden";
    }
})


div.appendChild(createBtnLeft)
div.appendChild(createBtnRight)
div.appendChild(createDivBtn)
root.appendChild(div)