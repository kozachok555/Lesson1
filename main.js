const root = document.body;
const divMain = document.createElement("div")
divMain.classList.add("div-main")

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

                //Task - 1//

// const ulClassFind = document.querySelector(".list")
// const secondLiFind = document.querySelectorAll("li")
// secondLiFind[1].textContent = "Any Text";
// const divFind = document.querySelector("div")
// divFind.style.color = 'black'

                //Task - 2//
    
// const inputText = document.querySelector("input")
// const btnFind = document.getElementById('btn')
// btnFind.addEventListener("click", function(){
//     console.log(inputText.value)
// })

                //Task - 3//


// const findBtn = document.getElementById("btn")
// const divBoxElements = document.getElementById("box")
// divBoxElements.style.display = "none"
// findBtn.addEventListener('click', function(){
//     if(divBoxElements.style.display === "none"){
//         divBoxElements.style.display = "block"
//         const createNewElement = document.createElement("li")
//         createNewElement.textContent = "Нове посилання"
//         divBoxElements.appendChild(createNewElement)
//     }else if(divBoxElements.style.display === "block"){
//         divBoxElements.style.display = "none"
//     }
// })

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-CW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<HW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
                                //Task - 1//
// for(let i = 1;i <= 10;i++){
//     for(let j = 1;j<=10;j++){
//         const square = document.createElement("div")
//         square.classList.add("square")
//         square.textContent = `${j}`
//         divMain.appendChild(square)
//         if(j != 1 && i != 1){
//              square.textContent = `${i * j}`
//         }else if(j === 1){
//             square.textContent = `${i}`
//         }
//     }
// }






                                //Task - 2//
// divMain.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ab sunt molestiae minus neque doloremque dolores modi excepturi labore distinctio aperiam facere possimus aliquid et ipsa, similique sapiente cumque dignissimos."
// const createBtn = document.createElement("button")
// root.appendChild(divMain)
// divMain.appendChild(createBtn)
// createBtn.textContent = "Change the color"
// createBtn.addEventListener("click",function(){
//     divMain.classList.toggle("color")
// })



                                //Task - 3//

// const arrayOfMessages = ["1.avif", "2.jpg", "3.avif", "4.avif", "5.jpeg", "6.jpeg", "7.webp", "8.jpeg"]
// const randomBtn = document.createElement("button")
// root.appendChild(randomBtn)
// randomBtn.textContent = "Random the image"
// let img = null;
// randomBtn.addEventListener("click",() =>{
//     if(img){
//         img.remove()
//     }
//     const number = Math.floor(Math.random() * arrayOfMessages.length+1)
//     img = document.createElement("img")
//     root.appendChild(img)
//     img.src = `./assets/${arrayOfMessages[number]}`
// })

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-HW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<HW - 12>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
                                //Task - 1//
// const writeRef = document.createElement("button");
// const openRef = document.createElement("button");
// let getRef = '';
// writeRef.textContent = "Input your site"
// openRef.textContent = "Open"
// writeRef.addEventListener("click",function(){
//     getRef = prompt("Write your site")
// })
// openRef.addEventListener("click", function(){
//     if(getRef === ''){
//         alert("input your site")
//     }else{
//         window.open(getRef)
//     }
// })

// divMain.appendChild(writeRef)
// divMain.appendChild(openRef)
                                //Task - 2//

// const boxParent = document.createElement("div")
// boxParent.classList.add("box-parent")
// const btn1 = document.createElement("button")
// const btn2 = document.createElement("button")
// const btn3 = document.createElement("button")
// btn1.textContent = "Button - 1"
// btn2.textContent = "Button - 2"
// btn3.textContent = "Button - 3"
// boxParent.addEventListener("click", function(event){
//     alert(event.target.textContent)
// })



// boxParent.appendChild(btn1)
// boxParent.appendChild(btn2)
// boxParent.appendChild(btn3)
// divMain.appendChild(boxParent)

                                //Task - 3//
// const divToDoListElements = document.createElement("div")
// const divToDoListButtons = document.createElement("div")
// divToDoListElements.classList.add("to-do-list-box_elem")
// divToDoListButtons.classList.add("to-do-list-box_btn")
// const input = document.createElement("input")
// const addElem = document.createElement("button")
// addElem.textContent = "Add Note"
// addElem.addEventListener("click",function(){
//     const newNote = document.createElement("p")
//     newNote.textContent = `${input.value}`
//     const btn = document.createElement("button")
//     btn.textContent = `Delete`
//     btn.addEventListener("click",function(event){
//         event.target.parentElement.remove()
//     })
//     newNote.appendChild(btn)
//     divToDoListElements.appendChild(newNote)
// })

// divMain.appendChild(divToDoListElements)
// divMain.appendChild(divToDoListButtons)
// divToDoListButtons.appendChild(input)
// divToDoListButtons.appendChild(addElem)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-HW - 12>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

                //Task - 1//
// const form = document.getElementById("form-login")
// form.addEventListener("submit",e =>{
//     e.preventDefault()
//     const formData = new FormData(e.target)
//     const values = Object.fromEntries(formData)
//     console.log(values)
// })


                //Task - 2//
// const input = document.getElementById("size-btn")
// const image = document.getElementById("img")
// image.width = 300;
// input.addEventListener("input",e =>{
//     e.preventDefault()
//     image.width = 300 * e.target.value;
// })  


                //Task - 3//




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-CW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
root.appendChild(divMain)