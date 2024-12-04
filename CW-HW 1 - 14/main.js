const root = document.body;
const divMain = document.createElement("div")
divMain.classList.add("div-main")
let activeModal = null;
function createModalWindow(firstText,secondText){
    const buttonOpen = document.createElement("button")
    buttonOpen.textContent = "Open Modal"
    buttonOpen.classList.add("open-modal")
    // buttonOpen.setAttribute("tabindex", "0");

    const modalBox = document.createElement("div")
    modalBox.classList.add("modal-box")
    modalBox.classList.add("display")

    const div = document.createElement("div")
    div.classList.add("task-div")
    div.classList.add("display")

    const textH = document.createElement("h1")
    textH.textContent = `${firstText}`
    textH.classList.add("task-text-h")

    const textP = document.createElement("p")
    textP.textContent = `${secondText}`
    textP.classList.add("task-text-p")

    const button = document.createElement("button")
    button.textContent = "x"
    button.classList.add("task-btn")

    function closeModal(){
        div.classList.add("display")
        modalBox.classList.add("display")
        activeModal = null;
    }

    function openModal(){
        div.classList.remove("display")
        modalBox.classList.remove("display")
        activeModal = modalBox;
    }

    let isMouseOverButton = false;

    buttonOpen.addEventListener("mouseenter", () => {
        isMouseOverButton = true;
    });

    buttonOpen.addEventListener("mouseleave", () => {
        isMouseOverButton = false; 
    });

    document.addEventListener('keydown', (event) => {
        if (isMouseOverButton && (event.code === 'Space' || event.code === 'Enter')) {
            event.preventDefault();  
            openModal(); 
        }
    });

    buttonOpen.addEventListener("click",function(){
        openModal()
    })

    div.addEventListener("click",function(e){
        e.stopPropagation()
    })

    button.addEventListener("click",function() {
        closeModal()
    })

    modalBox.addEventListener("click",function(){
        closeModal()
    })


    div.appendChild(textH)
    div.appendChild(textP)
    div.appendChild(button)
    modalBox.appendChild(div)
    divMain.appendChild(buttonOpen)
    divMain.appendChild(modalBox)
}


createModalWindow("Header","Simple text")
createModalWindow("HI","Vova")
root.appendChild(divMain)