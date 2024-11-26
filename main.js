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

// const pattern = /\b\d+\.\d+\b/g;
// const str = '0 1 12.345 789.0';
// let res = str.match(pattern)
// console.log(res)
                //Task - 3//
// const str = '<h1>Привіт!</h1>'
// const pattern = '/<\/?[a-zA-Z][a-zA-Z0-9]*>/'
// let res = str.match(str)
// console.log(res)
                //Task - 4//
// const taskMainDiv4 = document.createElement("div")
// taskMainDiv4.classList.add("input-pass-check") 

// const input = document.createElement("input")
// input.setAttribute("type","password")
// input.classList.add("input-pass")

// const dangerList = document.createElement("ul")
// dangerList.classList.add("pass-ul")  

// const bigLetter = document.createElement("li")
// bigLetter.classList.add("one-big-letter")
// bigLetter.textContent = "Одна велика буква"

// const oneNum = document.createElement("li")
// oneNum.classList.add("one-number")
// oneNum.textContent = "Одна цифра"

// const oneFig = document.createElement("li")
// oneFig.classList.add("one-figure")
// oneFig.textContent = "Один знак пунктуація"

// const minEightSymb = document.createElement("li")
// minEightSymb.classList.add("min-eight-sym")
// minEightSymb.textContent = "Мінімум 8 символів"


// input.addEventListener("input",(e)=>{
//     const userPassword = e.target.value;
//     if(/[A-Z]/.test(userPassword)){
//         bigLetter.style.color = "green";
//     }else{
//         bigLetter.style.color = "red";
//     }
//     if(/[0-9]/.test(userPassword)){
//         oneNum.style.color = "green";
//     }else{
//         oneNum.style.color = "red";
//     }
//     if(/[.,:;!?(){}\[\]<>@#$%^&*_\-+=~`|\\]/.test(userPassword)){
//         oneFig.style.color = "green";
//     }else{
//         oneFig.style.color = "red";
//     }
//     if(userPassword.length > 8){
//         minEightSymb.textContent = "8 символів"
//         minEightSymb.style.color = "green"
//     }else{
//         minEightSymb.textContent = "Мінімум 8 символів"
//         minEightSymb.style.color = "red"
//     }
// })



// dangerList.appendChild(bigLetter)
// dangerList.appendChild(oneNum)
// dangerList.appendChild(oneFig)
// dangerList.appendChild(minEightSymb)
// taskMainDiv4.appendChild(input)
// taskMainDiv4.appendChild(dangerList)
// divMain.appendChild(taskMainDiv4)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-CW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<HW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
const formBox = document.querySelector(".form-box")

const form = document.createElement("form")
form.classList.add("form-send")
form.setAttribute("action","#")

const userName = document.createElement("input")
userName.classList.add("name-input")
userName.setAttribute("type","text")
userName.setAttribute("placeholder","Name")
userName.setAttribute("id","userName")
userName.setAttribute("name","userName")

const checkName = document.createElement("p")
checkName.classList.add("correct-name")
checkName.textContent = "Треба вести своє імʼя"

const message = document.createElement("textarea")
message.classList.add("textarea-input")
message.setAttribute("placeholder","Message")
message.setAttribute("id","message")
message.setAttribute("name","message")

const checkMessage = document.createElement("p")
checkMessage.classList.add("correct-message")
checkMessage.textContent = "Мінімум 5 символів"

const textAnswer = document.createElement("p")
textAnswer.classList.add("text-answer")
textAnswer.textContent = "HOW TO ANSWER YOU?"

const phone = document.createElement("input")
phone.classList.add("phnum-input")
phone.setAttribute("type","text")
phone.setAttribute("placeholder","Phone number")
phone.setAttribute("id","phone")
phone.setAttribute("name","phone")

const phoneCheck = document.createElement("p")
phoneCheck.classList.add("correct-phnumber")
phoneCheck.textContent = "З початком +380"

const email = document.createElement("input")
email.classList.add("email-input")
email.setAttribute("type","email")
email.setAttribute("placeholder","Email")
email.setAttribute("id","email")
email.setAttribute("name","email")

const emailCheck = document.createElement("p")
emailCheck.classList.add("correct-email")
emailCheck.textContent = `Містить "@", "."`

const submitButton = document.createElement("button")
submitButton.classList.add("smb-btn")
submitButton.setAttribute("type","submit")

const btnText = document.createElement("p")
btnText.classList.add("smb-btn__text")
btnText.textContent = "Send message"


userName.addEventListener("focus",()=>{
    checkName.style.color = "red";
})
message.addEventListener("focus",()=>{
    checkMessage.style.color = "red";
})
phone.addEventListener("focus",()=>{
    phoneCheck.style.color = "red";
})
email.addEventListener("focus",()=>{
    emailCheck.style.color = "red";
})
userName.addEventListener("input",(e)=>{
    if(!/\d/.test(e.target.value)){
        checkName.style.color = "green";
    }else{
        checkName.style.color = "red";
    }
})
message.addEventListener("input",(e)=>{
    if(e.target.value.length > 4){
        checkMessage.style.color = "green";
    }else{
        checkMessage.style.color = "red";
    }
})
phone.addEventListener("input",(e)=>{
    if(/^\+380\d{9}$/.test(e.target.value)){
        phoneCheck.style.color = "green"
    }else{
        phoneCheck.style.color = "red"
    }
})
email.addEventListener("input",(e)=>{
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)){
        emailCheck.style.color = "green"
    }else{
        emailCheck.style.color = "red"
    }
})
form.addEventListener("submit",(e)=>{
    if(emailCheck.style.color ==="green" && phoneCheck.style.color === "green" && checkName.style.color === "green" && checkMessage.style.color === "green"){
        const formData = new FormData(e.target)
        const values = Object.fromEntries(formData.entries())
        console.log(values)
    }else{
        alert("Проверь все поля")
    }
    e.preventDefault()
})






form.appendChild(userName)
form.appendChild(checkName)
form.appendChild(message)
form.appendChild(checkMessage)
form.appendChild(textAnswer)
form.appendChild(phone)
form.appendChild(phoneCheck)
form.appendChild(email)
form.appendChild(emailCheck)
form.appendChild(submitButton)
submitButton.appendChild(btnText)
formBox.appendChild(form)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-HW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// root.appendChild(form)